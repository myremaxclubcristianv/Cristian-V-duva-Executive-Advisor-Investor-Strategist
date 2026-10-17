import assert from "assert";

const BASE_URL = "http://localhost:3000";

async function runTests() {
  console.log("🛡️ STARTING DEFENSIVE SECURITY HARDENING AUDIT SUITE");
  let passed = 0;
  let failed = 0;

  async function test(name, fn) {
    try {
      await fn();
      console.log(`  ✓ ${name}`);
      passed++;
    } catch (err) {
      console.error(`  ✗ ${name}:`, err.message);
      failed++;
    }
  }

  // 1. Security Headers & Info Disclosure
  await test("Security Headers: X-Powered-By is absent (no info disclosure)", async () => {
    const res = await fetch(`${BASE_URL}/`);
    assert.strictEqual(res.headers.get("x-powered-by"), null, "X-Powered-By header should be removed");
  });

  await test("Security Headers: CSP does NOT contain 'unsafe-eval'", async () => {
    const res = await fetch(`${BASE_URL}/`);
    const csp = res.headers.get("content-security-policy") || "";
    assert(!csp.includes("'unsafe-eval'"), "CSP script-src should NOT contain 'unsafe-eval'");
    assert(csp.includes("default-src 'self'"), "CSP should have default-src 'self'");
    assert(csp.includes("frame-ancestors 'self'"), "CSP should have frame-ancestors 'self'");
  });

  await test("Security Headers: Strict-Transport-Security, X-Frame-Options, X-Content-Type-Options, Referrer-Policy", async () => {
    const res = await fetch(`${BASE_URL}/`);
    assert.strictEqual(res.headers.get("x-frame-options"), "SAMEORIGIN");
    assert.strictEqual(res.headers.get("x-content-type-options"), "nosniff");
    assert.strictEqual(res.headers.get("referrer-policy"), "strict-origin-when-cross-origin");
    assert(res.headers.get("strict-transport-security")?.includes("max-age=31536000"));
    assert(res.headers.get("permissions-policy")?.includes("camera=()"));
  });

  // 2. Admin Authentication & Session Integrity
  await test("Admin Auth: GET /api/admin/auth/check without cookie returns 401", async () => {
    const res = await fetch(`${BASE_URL}/api/admin/auth/check`);
    assert.strictEqual(res.status, 401);
    const json = await res.json();
    assert.strictEqual(json.authenticated, false);
  });

  await test("Admin Auth: POST /api/admin/auth/login with wrong passcode returns 401", async () => {
    const res = await fetch(`${BASE_URL}/api/admin/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": "198.51.100.10",
      },
      body: JSON.stringify({ password: "wrong_password_123" }),
    });
    assert.strictEqual(res.status, 401);
  });

  await test("Admin Auth: Brute-force rate limiting blocks IP after 5 failed attempts", async () => {
    const testIp = "198.51.100.99";
    for (let i = 0; i < 4; i++) {
      await fetch(`${BASE_URL}/api/admin/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Forwarded-For": testIp },
        body: JSON.stringify({ password: `bad_${i}` }),
      });
    }
    // 5th attempt should either fail or trigger lockout
    const res5 = await fetch(`${BASE_URL}/api/admin/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Forwarded-For": testIp },
      body: JSON.stringify({ password: "bad_5" }),
    });
    // 6th attempt MUST return 429 Too Many Requests
    const res6 = await fetch(`${BASE_URL}/api/admin/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Forwarded-For": testIp },
      body: JSON.stringify({ password: "bad_6" }),
    });
    assert.strictEqual(res6.status, 429, "Expected status 429 for rate-limited client");
  });

  let validSessionCookie = "";

  await test("Admin Auth: POST /api/admin/auth/login with valid passcode returns signed HMAC session token", async () => {
    const res = await fetch(`${BASE_URL}/api/admin/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": "198.51.100.77",
      },
      body: JSON.stringify({ password: "cristian2026" }),
    });
    assert.strictEqual(res.status, 200);
    const json = await res.json();
    assert.strictEqual(json.success, true);
    assert.strictEqual(json.user?.role, "EXECUTIVE_ADMIN");

    const setCookie = res.headers.get("set-cookie") || "";
    assert(setCookie.includes("executive_auth_session="), "Cookie should be set");
    assert(/httponly/i.test(setCookie), "Cookie must be HttpOnly");
    assert(/samesite=lax/i.test(setCookie), "Cookie must be SameSite=Lax");

    // Extract cookie value
    const match = setCookie.match(/executive_auth_session=([^;]+)/);
    assert(match, "Session cookie value must be present");
    validSessionCookie = match[1];

    // Verify format: <hex48>.<timestamp>.<hex64>
    const parts = validSessionCookie.split(".");
    assert.strictEqual(parts.length, 3, "Signed token must have 3 parts");
    assert(/^[a-f0-9]{48}$/.test(parts[0]), "Part 0 must be 48 hex chars");
    assert(/^\d+$/.test(parts[1]), "Part 1 must be timestamp");
    assert(/^[a-f0-9]{64}$/.test(parts[2]), "Part 2 must be 64 hex HMAC");
  });

  await test("Admin Auth: GET /api/admin/auth/check with signed session cookie returns 200 OK", async () => {
    const res = await fetch(`${BASE_URL}/api/admin/auth/check`, {
      headers: { Cookie: `executive_auth_session=${validSessionCookie}` },
    });
    assert.strictEqual(res.status, 200);
    const json = await res.json();
    assert.strictEqual(json.authenticated, true);
    assert.strictEqual(json.user?.name, "Cristian Văduva");
  });

  await test("Admin Auth: Tampered session cookie is rejected with 401", async () => {
    // Alter 1 character in the HMAC signature
    const tampered = validSessionCookie.slice(0, -1) + (validSessionCookie.endsWith("a") ? "b" : "a");
    const res = await fetch(`${BASE_URL}/api/admin/auth/check`, {
      headers: { Cookie: `executive_auth_session=${tampered}` },
    });
    assert.strictEqual(res.status, 401, "Tampered signature must be rejected");
  });

  // 3. Admin Intelligence Route Hardening
  await test("Admin Intelligence: GET /api/admin/intelligence without auth returns 401", async () => {
    const res = await fetch(`${BASE_URL}/api/admin/intelligence`);
    assert.strictEqual(res.status, 401);
  });

  await test("Admin Intelligence: Old backdoor token 'aix_executive_preview_key' is blocked (401)", async () => {
    const res = await fetch(`${BASE_URL}/api/admin/intelligence?token=aix_executive_preview_key`);
    assert.strictEqual(res.status, 401, "Old hardcoded preview key must be rejected");
  });

  await test("Admin Intelligence: GET /api/admin/intelligence with valid session cookie succeeds", async () => {
    const res = await fetch(`${BASE_URL}/api/admin/intelligence`, {
      headers: { Cookie: `executive_auth_session=${validSessionCookie}` },
    });
    assert.strictEqual(res.status, 200);
    const json = await res.json();
    assert.strictEqual(json.status, "success");
    assert(typeof json.summary === "object");
  });

  // 4. Broken Object Level Authorization (BOLA) in Photos API
  await test("Photos API: POST /api/photos without auth returns 401", async () => {
    const formData = new FormData();
    formData.append("title", "Unauthorized Photo");
    const res = await fetch(`${BASE_URL}/api/photos`, {
      method: "POST",
      body: formData,
    });
    assert.strictEqual(res.status, 401, "Anonymous upload must be rejected with 401");
  });

  await test("Photos API: PATCH /api/photos/[id] without auth returns 401", async () => {
    const res = await fetch(`${BASE_URL}/api/photos/photo-cv-hero`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ featured: true }),
    });
    assert.strictEqual(res.status, 401, "Anonymous patch must be rejected with 401");
  });

  await test("Photos API: DELETE /api/photos/[id] without auth returns 401", async () => {
    const res = await fetch(`${BASE_URL}/api/photos/photo-cv-hero`, {
      method: "DELETE",
    });
    assert.strictEqual(res.status, 401, "Anonymous delete must be rejected with 401");
  });

  await test("Photos API: GET /api/photos is public (200 OK)", async () => {
    const res = await fetch(`${BASE_URL}/api/photos`);
    assert.strictEqual(res.status, 200);
    const json = await res.json();
    assert.strictEqual(json.success, true);
    assert(Array.isArray(json.photos));
  });

  // 5. Input Validation & Anti-Abuse
  await test("YouTube Verification: rejects invalid videoId format with 400", async () => {
    const res = await fetch(`${BASE_URL}/api/verify-youtube?videoId=invalid%20id%26test=1`);
    assert.strictEqual(res.status, 400);
    const json = await res.json();
    assert.strictEqual(json.isValid, false);
  });

  await test("YouTube Verification: accepts valid 11-char videoId format", async () => {
    const res = await fetch(`${BASE_URL}/api/verify-youtube?videoId=dQw4w9WgXcQ`);
    assert.strictEqual(res.status, 200);
  });

  await test("Inquiries API: honeypot bot submission is silently neutralized (200 OK without DB write)", async () => {
    const res = await fetch(`${BASE_URL}/api/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": "198.51.100.55",
      },
      body: JSON.stringify({
        name: "Bot Spammer",
        email: "bot@spam.com",
        website: "https://spam.com", // Honeypot trap field
        interest: "Other",
        message: "Spam message buy drugs now",
      }),
    });
    assert.strictEqual(res.status, 200);
    const json = await res.json();
    assert.strictEqual(json.status, "success");
  });

  await test("Inquiries API: invalid email format returns 400", async () => {
    const res = await fetch(`${BASE_URL}/api/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": "198.51.100.56",
      },
      body: JSON.stringify({
        name: "Test User",
        email: "not-an-email",
        interest: "Real Estate",
        message: "Testing message length validation here.",
      }),
    });
    assert.strictEqual(res.status, 400);
    const json = await res.json();
    assert(json.error.includes("Email"));
  });

  await test("Visits API: returns 200 with new session ID", async () => {
    const res = await fetch(`${BASE_URL}/api/visits`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/about" }),
    });
    assert.strictEqual(res.status, 200);
    const json = await res.json();
    assert.strictEqual(json.status, "success");
    assert(json.sessionId);
  });

  console.log(`\n========================================`);
  console.log(`RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log(`========================================\n`);

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch((err) => {
  console.error("Test execution failed:", err);
  process.exit(1);
});
