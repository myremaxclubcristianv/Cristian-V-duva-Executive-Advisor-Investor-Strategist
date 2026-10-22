import crypto from "crypto";
import { NextRequest } from "next/server";

/**
 * Dedicated server-side HMAC signing key derivation.
 * Strictly uses ADMIN_SECRET_KEY from environment (minimum 32 bytes of entropy).
 * Zero fallback to TELEGRAM_BOT_TOKEN or third-party service tokens.
 * Zero fallback to predictable static keys or ephemeral per-instance random keys.
 * Fails-closed if ADMIN_SECRET_KEY is absent or insufficient.
 */
function getDedicatedSigningKey(): Buffer | null {
  const secret = process.env.ADMIN_SECRET_KEY;
  if (!secret || typeof secret !== "string" || secret.trim().length < 32) {
    return null;
  }
  return crypto.createHmac("sha256", "cv-executive-dedicated-auth-salt").update(secret.trim()).digest();
}

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
 * Constant-time string comparison preventing timing and length side-channel attacks
 */
export function safeCompare(a: string, b: string): boolean {
  if (typeof a !== "string" || typeof b !== "string") return false;
  // Pre-hash inputs to 32-byte digests to eliminate timing leaks related to length differences
  const hashA = crypto.createHash("sha256").update(a).digest();
  const hashB = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(hashA, hashB);
}

/**
 * Create a cryptographically signed session token:
 * format: <randomId>.<timestamp>.<signature>
 * Returns null if ADMIN_SECRET_KEY is not configured.
 */
export function createSignedAdminSession(): string | null {
  const signingKey = getDedicatedSigningKey();
  if (!signingKey) {
    return null;
  }
  const randomId = crypto.randomBytes(24).toString("hex");
  const timestamp = Date.now().toString();
  const payload = `${randomId}.${timestamp}`;
  const signature = crypto.createHmac("sha256", signingKey).update(payload).digest("hex");
  return `${payload}.${signature}`;
}

/**
 * Verify signed session token with strict 24-hour lifetime and revocation check.
 * Fails closed if ADMIN_SECRET_KEY is missing or invalid.
 */
export function verifyAdminSessionToken(token?: string | null): boolean {
  if (!token || typeof token !== "string") return false;

  const signingKey = getDedicatedSigningKey();
  if (!signingKey) {
    return false;
  }

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
  const expectedSignature = crypto.createHmac("sha256", signingKey).update(payload).digest("hex");
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

  // Strict domain boundary whitelist: only project's verified domains and exact preview aliases
  const isAllowedHost = (host: string) => {
    const h = host.toLowerCase().split(":")[0];
    return (
      h === "executive.cristianvaduva.com" ||
      h === "cristianvaduva.com" ||
      h.endsWith(".cristianvaduva.com") ||
      h === "executive-cristian-vaduva.vercel.app" ||
      h === "executive-weld.vercel.app" ||
      /^executive(-[a-z0-9-]+)?-cristian-vaduva\.vercel\.app$/.test(h) ||
      h === "localhost" ||
      h === "127.0.0.1"
    );
  };

  if (origin) {
    try {
      const url = new URL(origin);
      const isLocal = url.hostname === "localhost" || url.hostname === "127.0.0.1";
      if (process.env.NODE_ENV === "production" && !isLocal && url.protocol !== "https:") {
        return false;
      }
      return isAllowedHost(url.host);
    } catch {
      return false;
    }
  }

  if (referer) {
    try {
      const url = new URL(referer);
      const isLocal = url.hostname === "localhost" || url.hostname === "127.0.0.1";
      if (process.env.NODE_ENV === "production" && !isLocal && url.protocol !== "https:") {
        return false;
      }
      return isAllowedHost(url.host);
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
 * Validates real binary image signatures (Magic Bytes) & structural sanity
 */
export function validateImageBuffer(buffer: Buffer): {
  valid: boolean;
  format?: "jpeg" | "png" | "webp" | "avif";
  extension?: string;
  mime?: string;
  error?: string;
  width?: number;
  height?: number;
} {
  if (!buffer || buffer.length < 16) {
    return { valid: false, error: "File is corrupted or too small for a valid image." };
  }

  const MAX_DIMENSION = 16384;

  // 1. JPEG: FF D8 FF
  if (buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    try {
      let offset = 2;
      while (offset < buffer.length - 8) {
        if (buffer[offset] !== 0xff) {
          offset++;
          continue;
        }
        const marker = buffer[offset + 1];
        // SOF0 (0xC0), SOF1 (0xC1), SOF2 (0xC2)
        if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
          const h = buffer.readUInt16BE(offset + 5);
          const w = buffer.readUInt16BE(offset + 7);
          if (h > MAX_DIMENSION || w > MAX_DIMENSION) {
            return {
              valid: false,
              error: `Image dimensions (${w}x${h}) exceed the maximum limit of ${MAX_DIMENSION}px.`,
            };
          }
          return { valid: true, format: "jpeg", extension: ".jpg", mime: "image/jpeg", width: w, height: h };
        }
        if (offset + 3 < buffer.length) {
          const length = buffer.readUInt16BE(offset + 2);
          if (length < 2) break;
          offset += 2 + length;
        } else {
          break;
        }
      }
    } catch {
      // Fallback if marker scan encountered truncated payload
    }
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
    if (buffer.length < 33) {
      return { valid: false, error: "PNG file is truncated or incomplete." };
    }
    if (buffer.toString("ascii", 12, 16) !== "IHDR") {
      return { valid: false, error: "PNG file is corrupted (missing IHDR header)." };
    }
    const width = buffer.readUInt32BE(16);
    const height = buffer.readUInt32BE(20);
    if (width === 0 || height === 0) {
      return { valid: false, error: "PNG image dimensions are invalid (0x0)." };
    }
    if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
      return {
        valid: false,
        error: `Image dimensions (${width}x${height}) exceed the safety limit of ${MAX_DIMENSION}px.`,
      };
    }
    return { valid: true, format: "png", extension: ".png", mime: "image/png", width, height };
  }

  // 3. WEBP: 'RIFF' at 0, 'WEBP' at 8
  if (
    buffer.toString("ascii", 0, 4) === "RIFF" &&
    buffer.toString("ascii", 8, 12) === "WEBP"
  ) {
    if (buffer.length < 30) {
      return { valid: false, error: "WebP file is truncated or incomplete." };
    }
    const chunkType = buffer.toString("ascii", 12, 16);
    let width = 0;
    let height = 0;
    if (chunkType === "VP8X" && buffer.length >= 30) {
      width = 1 + (buffer[24] | (buffer[25] << 8) | (buffer[26] << 16));
      height = 1 + (buffer[27] | (buffer[28] << 8) | (buffer[29] << 16));
    } else if (chunkType === "VP8 " && buffer.length >= 30) {
      width = buffer.readUInt16LE(26) & 0x3fff;
      height = buffer.readUInt16LE(28) & 0x3fff;
    }
    if ((width > 0 && width > MAX_DIMENSION) || (height > 0 && height > MAX_DIMENSION)) {
      return {
        valid: false,
        error: `WebP image dimensions (${width}x${height}) exceed the limit of ${MAX_DIMENSION}px.`,
      };
    }
    return { valid: true, format: "webp", extension: ".webp", mime: "image/webp", width, height };
  }

  // 4. AVIF / HEIF: 'ftyp' at 4, followed by avif/avis/mif1/miaf
  if (buffer.length >= 24 && buffer.toString("ascii", 4, 8) === "ftyp") {
    const brand = buffer.toString("ascii", 8, 12).toLowerCase();
    if (["avif", "avis", "mif1", "miaf"].includes(brand)) {
      return { valid: true, format: "avif", extension: ".avif", mime: "image/avif" };
    }
  }

  return {
    valid: false,
    error: "Binary signature does not match an allowed image format (JPEG, PNG, WEBP, AVIF).",
  };
}
