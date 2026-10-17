import crypto from "crypto";
import { NextRequest } from "next/server";

// Fallback signing secret - derived server-side only
const SIGNING_SECRET =
  process.env.ADMIN_SECRET_KEY ||
  process.env.TELEGRAM_BOT_TOKEN ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "cv-executive-advisory-auth-signature-key-2026";

// Derive isolated cryptographic key for HMAC signing
const SIGNING_KEY = crypto.createHmac("sha256", "cv-executive-auth-salt").update(SIGNING_SECRET).digest();

// Rate limiting map for admin login: max 5 failed attempts per 15 minutes per IP
const loginRateLimitMap = new Map<string, { attempts: number; lockUntil: number }>();

// In-memory revocation cache for explicit session invalidation
const revokedTokens = new Map<string, number>();

export function checkLoginRateLimit(ip: string): { allowed: boolean; remainingAttempts: number; retryAfterSeconds?: number } {
  const now = Date.now();
  const record = loginRateLimitMap.get(ip);

  if (!record || now > record.lockUntil) {
    return { allowed: true, remainingAttempts: 5 };
  }

  if (record.attempts >= 5) {
    const retryAfterSeconds = Math.ceil((record.lockUntil - now) / 1000);
    return { allowed: false, remainingAttempts: 0, retryAfterSeconds };
  }

  return { allowed: true, remainingAttempts: 5 - record.attempts };
}

export function recordFailedLogin(ip: string): void {
  const now = Date.now();
  const record = loginRateLimitMap.get(ip);

  if (!record || now > record.lockUntil) {
    loginRateLimitMap.set(ip, { attempts: 1, lockUntil: now + 15 * 60 * 1000 });
  } else {
    record.attempts += 1;
    if (record.attempts >= 5) {
      record.lockUntil = now + 15 * 60 * 1000; // 15-minute lockout
    }
  }
}

export function resetLoginRateLimit(ip: string): void {
  loginRateLimitMap.delete(ip);
}

/**
 * Invalidate a session token upon logout
 */
export function revokeAdminSession(token?: string | null): void {
  if (!token || typeof token !== "string") return;
  // Store revocation with 24-hour expiration
  revokedTokens.set(token, Date.now() + 24 * 60 * 60 * 1000);

  // Prune expired entries if map grows
  if (revokedTokens.size > 500) {
    const now = Date.now();
    for (const [t, exp] of revokedTokens.entries()) {
      if (now > exp) revokedTokens.delete(t);
    }
  }
}

export function isSessionRevoked(token: string): boolean {
  const exp = revokedTokens.get(token);
  if (!exp) return false;
  if (Date.now() > exp) {
    revokedTokens.delete(token);
    return false;
  }
  return true;
}

/**
 * Constant-time string comparison preventing timing side-channel attacks
 */
export function safeCompare(a: string, b: string): boolean {
  if (typeof a !== "string" || typeof b !== "string") return false;
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Create a cryptographically signed session token:
 * format: <randomId>.<timestamp>.<signature>
 */
export function createSignedAdminSession(): string {
  const randomId = crypto.randomBytes(24).toString("hex");
  const timestamp = Date.now().toString();
  const payload = `${randomId}.${timestamp}`;
  const signature = crypto.createHmac("sha256", SIGNING_KEY).update(payload).digest("hex");
  return `${payload}.${signature}`;
}

/**
 * Verify signed session token with strict 24-hour lifetime and revocation check
 */
export function verifyAdminSessionToken(token?: string | null): boolean {
  if (!token || typeof token !== "string") return false;

  // Check if token was explicitly revoked
  if (isSessionRevoked(token)) {
    return false;
  }

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [randomId, timestampStr, signature] = parts;
  if (!/^[a-f0-9]{48}$/.test(randomId) || !/^\d+$/.test(timestampStr) || !/^[a-f0-9]{64}$/.test(signature)) {
    return false;
  }

  // Expiration check: strictly 24 hours (86,400,000 ms)
  const timestamp = parseInt(timestampStr, 10);
  const now = Date.now();
  const MAX_SESSION_AGE = 24 * 60 * 60 * 1000;
  if (isNaN(timestamp) || now - timestamp > MAX_SESSION_AGE || timestamp > now + 60000) {
    return false;
  }

  // Signature verification with derived HMAC key
  const payload = `${randomId}.${timestampStr}`;
  const expectedSignature = crypto.createHmac("sha256", SIGNING_KEY).update(payload).digest("hex");
  return safeCompare(signature, expectedSignature);
}

/**
 * Verify CSRF Origin / Sec-Fetch-Site on state-changing requests (POST, PATCH, DELETE)
 */
export function verifyCsrfOrigin(req: Request | NextRequest): boolean {
  const method = req.method.toUpperCase();
  if (["GET", "HEAD", "OPTIONS"].includes(method)) {
    return true;
  }

  const headers = req.headers;
  const secFetchSite = headers.get("sec-fetch-site");
  if (secFetchSite === "cross-site") {
    return false;
  }

  const origin = headers.get("origin");
  const referer = headers.get("referer");

  const isAllowedHost = (host: string) => {
    const h = host.toLowerCase().split(":")[0];
    return (
      h === "executive.cristianvaduva.com" ||
      h === "cristianvaduva.com" ||
      h.endsWith(".cristianvaduva.com") ||
      h.endsWith(".vercel.app") ||
      h === "localhost" ||
      h === "127.0.0.1"
    );
  };

  if (origin) {
    try {
      const originHost = new URL(origin).host;
      return isAllowedHost(originHost);
    } catch {
      return false;
    }
  }

  if (referer) {
    try {
      const refererHost = new URL(referer).host;
      return isAllowedHost(refererHost);
    } catch {
      return false;
    }
  }

  // In production, reject state-changing requests lacking both Origin and Referer
  if (process.env.NODE_ENV === "production") {
    return false;
  }

  return true;
}

/**
 * Verify admin request via cookie or Bearer token
 */
export function verifyAdminRequest(req: Request | NextRequest): boolean {
  // 1. Check executive_auth_session cookie
  let sessionCookie: string | undefined;
  if ("cookies" in req && typeof (req as NextRequest).cookies?.get === "function") {
    sessionCookie = (req as NextRequest).cookies.get("executive_auth_session")?.value;
  } else {
    const cookieHeader = req.headers.get("cookie") || "";
    const match = cookieHeader.match(/executive_auth_session=([^;]+)/);
    if (match) sessionCookie = match[1];
  }

  if (sessionCookie && verifyAdminSessionToken(sessionCookie)) {
    return true;
  }

  // 2. Check Bearer token (only if ADMIN_SECRET_KEY is explicitly configured in environment)
  const configuredSecret = process.env.ADMIN_SECRET_KEY;
  if (configuredSecret) {
    const authHeader = req.headers.get("authorization");
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const bearerToken = authHeader.slice(7).trim();
      if (safeCompare(bearerToken, configuredSecret)) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Validates real binary image signatures (Magic Bytes)
 */
export function validateImageBuffer(buffer: Buffer): {
  valid: boolean;
  format?: "jpeg" | "png" | "webp" | "avif";
  extension?: string;
  mime?: string;
  error?: string;
} {
  if (!buffer || buffer.length < 16) {
    return { valid: false, error: "Fișierul este corupt sau prea mic pentru o imagine validă." };
  }

  // 1. JPEG: FF D8 FF
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return { valid: true, format: "jpeg", extension: ".jpg", mime: "image/jpeg" };
  }

  // 2. PNG: 89 50 4E 47 0D 0A 1A 0A
  if (
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47 &&
    buffer[4] === 0x0d &&
    buffer[5] === 0x0a &&
    buffer[6] === 0x1a &&
    buffer[7] === 0x0a
  ) {
    return { valid: true, format: "png", extension: ".png", mime: "image/png" };
  }

  // 3. WEBP: 'RIFF' at 0, 'WEBP' at 8
  if (
    buffer.toString("ascii", 0, 4) === "RIFF" &&
    buffer.toString("ascii", 8, 12) === "WEBP"
  ) {
    return { valid: true, format: "webp", extension: ".webp", mime: "image/webp" };
  }

  // 4. AVIF / HEIF: 'ftyp' at 4, followed by avif/avis/mif1/miaf
  if (buffer.toString("ascii", 4, 8) === "ftyp") {
    const brand = buffer.toString("ascii", 8, 12).toLowerCase();
    if (["avif", "avis", "mif1", "miaf"].includes(brand)) {
      return { valid: true, format: "avif", extension: ".avif", mime: "image/avif" };
    }
  }

  return {
    valid: false,
    error: "Semnătura binară a fișierului nu corespunde unui format de imagine permis (JPEG, PNG, WEBP, AVIF).",
  };
}
