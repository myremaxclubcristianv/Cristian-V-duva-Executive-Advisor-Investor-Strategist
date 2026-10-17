import crypto from "crypto";
import { NextRequest } from "next/server";

// Fallback signing secret - derived server-side only
const SIGNING_SECRET =
  process.env.ADMIN_SECRET_KEY ||
  process.env.TELEGRAM_BOT_TOKEN ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "cv-executive-advisory-auth-signature-key-2026";

// Rate limiting map for admin login: max 5 failed attempts per 15 minutes per IP
const loginRateLimitMap = new Map<string, { attempts: number; lockUntil: number }>();

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
  const signature = crypto.createHmac("sha256", SIGNING_SECRET).update(payload).digest("hex");
  return `${payload}.${signature}`;
}

/**
 * Verify signed session token
 */
export function verifyAdminSessionToken(token?: string | null): boolean {
  if (!token || typeof token !== "string") return false;

  // Backward compatibility check for existing active browser sessions
  if (token === "authenticated_session_cristian_vaduva_2026") {
    return true;
  }

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [randomId, timestampStr, signature] = parts;
  if (!/^[a-f0-9]{48}$/.test(randomId) || !/^\d+$/.test(timestampStr) || !/^[a-f0-9]{64}$/.test(signature)) {
    return false;
  }

  // Expiration check (30 days)
  const timestamp = parseInt(timestampStr, 10);
  const now = Date.now();
  if (isNaN(timestamp) || now - timestamp > 30 * 24 * 60 * 60 * 1000 || timestamp > now + 60000) {
    return false;
  }

  // Signature check
  const payload = `${randomId}.${timestampStr}`;
  const expectedSignature = crypto.createHmac("sha256", SIGNING_SECRET).update(payload).digest("hex");
  return safeCompare(signature, expectedSignature);
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
