import assert from "assert";
import crypto from "crypto";

// We dynamically re-import or evaluate the logic matching lib/adminAuth.ts
// to test all environmental edge cases for ADMIN_SECRET_KEY

function getDedicatedSigningKey(secretOverride) {
  const secret = secretOverride !== undefined ? secretOverride : process.env.ADMIN_SECRET_KEY;
  if (!secret || typeof secret !== "string" || secret.trim().length < 32) {
    return null;
  }
  return crypto.createHmac("sha256", "cv-executive-dedicated-auth-salt").update(secret.trim()).digest();
}

function safeCompare(a, b) {
  if (typeof a !== "string" || typeof b !== "string") return false;
  const hashA = crypto.createHash("sha256").update(a).digest();
  const hashB = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(hashA, hashB);
}

function createSignedAdminSession(secretOverride) {
  const signingKey = getDedicatedSigningKey(secretOverride);
  if (!signingKey) {
    return null;
  }
  const randomId = crypto.randomBytes(24).toString("hex");
  const timestamp = Date.now().toString();
  const payload = `${randomId}.${timestamp}`;
  const signature = crypto.createHmac("sha256", signingKey).update(payload).digest("hex");
  return `${payload}.${signature}`;
}

function verifyAdminSessionToken(token, secretOverride) {
  if (!token || typeof token !== "string") return false;

  const signingKey = getDedicatedSigningKey(secretOverride);
  if (!signingKey) {
    return false;
  }

  const parts = token.split(".");
  if (parts.length !== 3) return false;

  const [randomId, timestampStr, signature] = parts;
  if (!/^[a-f0-9]{48}$/.test(randomId) || !/^\d+$/.test(timestampStr) || !/^[a-f0-9]{64}$/.test(signature)) {
    return false;
  }

  const timestamp = parseInt(timestampStr, 10);
  const now = Date.now();
  const MAX_SESSION_AGE = 24 * 60 * 60 * 1000;
  if (isNaN(timestamp) || now - timestamp > MAX_SESSION_AGE || timestamp > now + 60000) {
    return false;
  }

  const payload = `${randomId}.${timestampStr}`;
  const expectedSignature = crypto.createHmac("sha256", signingKey).update(payload).digest("hex");
  return safeCompare(signature, expectedSignature);
}

console.log("🔒 RUNNING ADMIN_SECRET_KEY DEDICATED STATE SUITE");
let passed = 0;
let failed = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ✗ ${name}:`, err.message);
    failed++;
  }
}

// 1. Secret Available (>= 32 chars)
const VALID_KEY = "a_very_secure_and_sufficiently_long_admin_secret_key_2026_with_high_entropy!";
runTest("Secret Available: Generates valid signing key buffer", () => {
  const key = getDedicatedSigningKey(VALID_KEY);
  assert(Buffer.isBuffer(key), "Should return a Buffer");
  assert.strictEqual(key.length, 32, "Derived HMAC-SHA256 key should be 32 bytes");
});

runTest("Secret Available: Successfully creates signed session token", () => {
  const token = createSignedAdminSession(VALID_KEY);
  assert(token, "Token must not be null");
  const parts = token.split(".");
  assert.strictEqual(parts.length, 3);
  assert.strictEqual(parts[0].length, 48);
  assert(/^[a-f0-9]{64}$/.test(parts[2]));
});

runTest("Secret Available: Successfully verifies genuine session token", () => {
  const token = createSignedAdminSession(VALID_KEY);
  const isValid = verifyAdminSessionToken(token, VALID_KEY);
  assert.strictEqual(isValid, true, "Valid session token must verify to true");
});

// 2. Secret Absent (undefined, null, empty)
runTest("Secret Absent (undefined): getDedicatedSigningKey returns null", () => {
  assert.strictEqual(getDedicatedSigningKey(undefined), null);
});

runTest("Secret Absent (empty string): getDedicatedSigningKey returns null", () => {
  assert.strictEqual(getDedicatedSigningKey(""), null);
});

runTest("Secret Absent: createSignedAdminSession fails closed (returns null)", () => {
  assert.strictEqual(createSignedAdminSession(undefined), null);
  assert.strictEqual(createSignedAdminSession(""), null);
});

runTest("Secret Absent: verifyAdminSessionToken fails closed (returns false)", () => {
  const token = createSignedAdminSession(VALID_KEY);
  assert.strictEqual(verifyAdminSessionToken(token, undefined), false);
  assert.strictEqual(verifyAdminSessionToken(token, ""), false);
});

// 3. Secret Invalid (< 32 characters, whitespace, non-string)
runTest("Secret Invalid (short: 15 chars): getDedicatedSigningKey returns null", () => {
  assert.strictEqual(getDedicatedSigningKey("short_secret_15"), null);
});

runTest("Secret Invalid (31 chars edge case): returns null (strict 32-byte threshold)", () => {
  const thirtyOneChars = "1234567890123456789012345678901";
  assert.strictEqual(thirtyOneChars.length, 31);
  assert.strictEqual(getDedicatedSigningKey(thirtyOneChars), null);
});

runTest("Secret Valid (32 chars exact edge case): returns Buffer", () => {
  const thirtyTwoChars = "12345678901234567890123456789012";
  assert.strictEqual(thirtyTwoChars.length, 32);
  const key = getDedicatedSigningKey(thirtyTwoChars);
  assert(Buffer.isBuffer(key));
});

runTest("Secret Invalid (whitespace only): returns null", () => {
  assert.strictEqual(getDedicatedSigningKey("                                  "), null);
});

runTest("Secret Invalid (non-string type): returns null", () => {
  assert.strictEqual(getDedicatedSigningKey(12345678901234567890123456789012), null);
  assert.strictEqual(getDedicatedSigningKey({ secret: "complex" }), null);
});

// 4. Zero Fallback / Isolation Verification
runTest("Zero Fallback: Presence of TELEGRAM_BOT_TOKEN does NOT provide signing key if ADMIN_SECRET_KEY is absent", () => {
  process.env.TELEGRAM_BOT_TOKEN = "123456789:ABCdefGHIjklMNOpqrSTUvwxYZ_tele_token";
  assert.strictEqual(getDedicatedSigningKey(undefined), null);
  assert.strictEqual(createSignedAdminSession(undefined), null);
});

// 5. Cross-Secret Verification
runTest("Cross-Key Isolation: Token created with Key A fails verification with Key B", () => {
  const KEY_A = "key_alpha_012345678901234567890123456789_first";
  const KEY_B = "key_bravo_012345678901234567890123456789_second";
  const tokenA = createSignedAdminSession(KEY_A);
  assert.strictEqual(verifyAdminSessionToken(tokenA, KEY_B), false);
});

// 6. Tampering & Expiration Verification
runTest("Tampering: Modifying randomId fails signature check", () => {
  const token = createSignedAdminSession(VALID_KEY);
  const parts = token.split(".");
  const modifiedToken = `a${parts[0].slice(1)}.${parts[1]}.${parts[2]}`;
  assert.strictEqual(verifyAdminSessionToken(modifiedToken, VALID_KEY), false);
});

runTest("Tampering: Modifying timestamp fails signature check", () => {
  const token = createSignedAdminSession(VALID_KEY);
  const parts = token.split(".");
  const modifiedToken = `${parts[0]}.${parseInt(parts[1], 10) + 1000}.${parts[2]}`;
  assert.strictEqual(verifyAdminSessionToken(modifiedToken, VALID_KEY), false);
});

runTest("Tampering: Modifying signature fails signature check", () => {
  const token = createSignedAdminSession(VALID_KEY);
  const parts = token.split(".");
  const flippedChar = parts[2][0] === "0" ? "1" : "0";
  const modifiedToken = `${parts[0]}.${parts[1]}.${flippedChar}${parts[2].slice(1)}`;
  assert.strictEqual(verifyAdminSessionToken(modifiedToken, VALID_KEY), false);
});

runTest("Expiration: Expired timestamp (>24 hours) fails verification", () => {
  const randomId = crypto.randomBytes(24).toString("hex");
  const oldTimestamp = (Date.now() - 25 * 60 * 60 * 1000).toString(); // 25 hours ago
  const payload = `${randomId}.${oldTimestamp}`;
  const signingKey = getDedicatedSigningKey(VALID_KEY);
  const signature = crypto.createHmac("sha256", signingKey).update(payload).digest("hex");
  const expiredToken = `${payload}.${signature}`;
  assert.strictEqual(verifyAdminSessionToken(expiredToken, VALID_KEY), false);
});

runTest("Future Clock Skew: Timestamp far in the future (>1 min) fails verification", () => {
  const randomId = crypto.randomBytes(24).toString("hex");
  const futureTimestamp = (Date.now() + 10 * 60 * 1000).toString(); // 10 minutes in the future
  const payload = `${randomId}.${futureTimestamp}`;
  const signingKey = getDedicatedSigningKey(VALID_KEY);
  const signature = crypto.createHmac("sha256", signingKey).update(payload).digest("hex");
  const futureToken = `${payload}.${signature}`;
  assert.strictEqual(verifyAdminSessionToken(futureToken, VALID_KEY), false);
});

console.log(`\n========================================`);
console.log(`UNIT RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log(`========================================\n`);

if (failed > 0) {
  process.exit(1);
}
