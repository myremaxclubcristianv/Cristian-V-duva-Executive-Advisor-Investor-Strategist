import assert from "assert";

const BASE_URL = "http://localhost:3000";

async function runTests() {
  console.log("🛡️ STARTING DEFENSIVE SECURITY HARDENING AUDIT SUITE (V2)");
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

  await test("Admin Auth: Old static token 'authenticated_session_cristian_vaduva_2026' is REJECTED (Zero Backdoor)", async () => {
    const res = await fetch(`${BASE_URL}/api/admin/auth/check`, {
      headers: { Cookie: "executive_auth_session=authenticated_session_cristian_vaduva_2026" },
    });
    assert.strictEqual(res.status, 401, "Static predictable cookie must be rejected");
  });

  await test("Admin Auth: POST /api/admin/auth/login with wrong passcode returns 401", async () => {
    const res = await fetch(`${BASE_URL}/api/admin/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": "198.51.100.10",
        Origin: "http://localhost:3000",
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
        headers: {
          "Content-Type": "application/json",
          "X-Forwarded-For": testIp,
          Origin: "http://localhost:3000",
        },
        body: JSON.stringify({ password: `bad_${i}` }),
      });
    }
    await fetch(`${BASE_URL}/api/admin/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": testIp,
        Origin: "http://localhost:3000",
      },
      body: JSON.stringify({ password: "bad_5" }),
    });
    // 6th attempt MUST return 429 Too Many Requests
    const res6 = await fetch(`${BASE_URL}/api/admin/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Forwarded-For": testIp,
        Origin: "http://localhost:3000",
      },
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
        Origin: "http://localhost:3000",
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

    const match = setCookie.match(/executive_auth_session=([^;]+)/);
    assert(match, "Session cookie value must be present");
    validSessionCookie = match[1];

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
    const tampered = validSessionCookie.slice(0, -1) + (validSessionCookie.endsWith("a") ? "b" : "a");
    const res = await fetch(`${BASE_URL}/api/admin/auth/check`, {
      headers: { Cookie: `executive_auth_session=${tampered}` },
    });
    assert.strictEqual(res.status, 401, "Tampered signature must be rejected");
  });

  await test("Admin Auth: Expired session token (>24h) is rejected with 401", async () => {
    const oldTimestamp = (Date.now() - 25 * 60 * 60 * 1000).toString();
    const expiredFake = `a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6.${oldTimestamp}.00112233445566778899aabbccddeeff00112233445566778899aabbccddeeff`;
    const res = await fetch(`${BASE_URL}/api/admin/auth/check`, {
      headers: { Cookie: `executive_auth_session=${expiredFake}` },
    });
    assert.strictEqual(res.status, 401, "Expired token must be rejected");
  });

  // 3. CSRF Protection
  await test("CSRF: POST /api/photos with cross-site Origin returns 403 Forbidden", async () => {
    const res = await fetch(`${BASE_URL}/api/photos`, {
      method: "POST",
      headers: {
        Origin: "https://malicious-attacker-site.com",
        Cookie: `executive_auth_session=${validSessionCookie}`,
      },
    });
    assert.strictEqual(res.status, 403, "Cross-site origin must be rejected with 403");
  });

  await test("CSRF: Unauthorized arbitrary Vercel domain (attacker.vercel.app) is REJECTED with 403 Forbidden", async () => {
    const res = await fetch(`${BASE_URL}/api/photos`, {
      method: "POST",
      headers: {
        Origin: "https://attacker-project.vercel.app",
        Cookie: `executive_auth_session=${validSessionCookie}`,
      },
    });
    assert.strictEqual(res.status, 403, "Arbitrary vercel.app domains must be strictly rejected");
  });

  await test("CSRF: DELETE /api/photos/[id] with cross-site Sec-Fetch-Site returns 403 Forbidden", async () => {
    const res = await fetch(`${BASE_URL}/api/photos/photo-cv-hero`, {
      method: "DELETE",
      headers: {
        "Sec-Fetch-Site": "cross-site",
        Cookie: `executive_auth_session=${validSessionCookie}`,
      },
    });
    assert.strictEqual(res.status, 403, "Sec-Fetch-Site cross-site must be rejected with 403");
  });

  // 4. File Signature (Magic Bytes) Verification & Structural Sanity
  await test("Photo Upload: Reject fake image file (text content disguised as .jpg)", async () => {
    const formData = new FormData();
    const fakeBlob = new Blob(["<?php phpinfo(); ?>malicious executable script disguised"], { type: "image/jpeg" });
    formData.append("file", fakeBlob, "shell.jpg");
    formData.append("title", "Fake Photo");

    const res = await fetch(`${BASE_URL}/api/photos`, {
      method: "POST",
      headers: {
        Origin: "http://localhost:3000",
        Cookie: `executive_auth_session=${validSessionCookie}`,
      },
      body: formData,
    });
    assert.strictEqual(res.status, 400);
    const json = await res.json();
    assert(json.error?.includes("Semnătura binară") || json.error?.includes("imagine validă"));
  });

  await test("Photo Upload: Reject truncated / malformed PNG file", async () => {
    const formData = new FormData();
    // 8 bytes PNG signature followed by truncated junk without valid IHDR chunk
    const truncatedBytes = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d, 0x54, 0x52, 0x55, 0x4e]);
    const truncatedBlob = new Blob([truncatedBytes], { type: "image/png" });
    formData.append("file", truncatedBlob, "truncated.png");
    formData.append("title", "Truncated PNG");

    const res = await fetch(`${BASE_URL}/api/photos`, {
      method: "POST",
      headers: {
        Origin: "http://localhost:3000",
        Cookie: `executive_auth_session=${validSessionCookie}`,
      },
      body: formData,
    });
    assert.strictEqual(res.status, 400);
    const json = await res.json();
    assert(json.error?.includes("trunchiat") || json.error?.includes("corupt") || json.error?.includes("Semnătura"));
  });

  await test("Photo Upload: Reject excessive dimension image (decompression bomb defense)", async () => {
    const formData = new FormData();
    // PNG with 65536 width (excessive dimension)
    const bombPng = new Uint8Array([
      0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, // PNG Signature
      0x00, 0x00, 0x00, 0x0d,                         // Chunk length 13
      0x49, 0x48, 0x44, 0x52,                         // IHDR
      0x00, 0x01, 0x00, 0x00,                         // Width: 65,536 px (> 16384)
      0x00, 0x00, 0x01, 0x00,                         // Height: 256 px
      0x08, 0x02, 0x00, 0x00, 0x00,                   // Bit depth 8, truecolor
      0x00, 0x00, 0x00, 0x00                          // CRC placeholder
    ]);
    const bombBlob = new Blob([bombPng], { type: "image/png" });
    formData.append("file", bombBlob, "bomb.png");
    formData.append("title", "Decompression Bomb Image");

    const res = await fetch(`${BASE_URL}/api/photos`, {
      method: "POST",
      headers: {
        Origin: "http://localhost:3000",
        Cookie: `executive_auth_session=${validSessionCookie}`,
      },
      body: formData,
    });
    assert.strictEqual(res.status, 400);
    const json = await res.json();
    assert(json.error?.includes("Dimensiunile imaginii") || json.error?.includes("limita"));
  });

  await test("Photo Upload: Accept genuine binary image file (valid JPEG magic bytes)", async () => {
    const formData = new FormData();
    // Valid minimal 1x1 JPEG magic bytes header: FF D8 FF E0 00 10 4A 46 49 46 ...
    const jpegBytes = new Uint8Array([
      0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46, 0x00, 0x01,
      0x01, 0x01, 0x00, 0x48, 0x00, 0x48, 0x00, 0x00, 0xff, 0xdb, 0x00, 0x43,
      0xff, 0xd9,
    ]);
    const validBlob = new Blob([jpegBytes], { type: "image/jpeg" });
    formData.append("file", validBlob, "test_landscape.jpg");
    formData.append("title", "Automated QA Verified Photo");
    formData.append("category", "EDITORIAL");

    const res = await fetch(`${BASE_URL}/api/photos`, {
      method: "POST",
      headers: {
        Origin: "http://localhost:3000",
        Cookie: `executive_auth_session=${validSessionCookie}`,
      },
      body: formData,
    });
    assert.strictEqual(res.status, 200);
    const json = await res.json();
    assert.strictEqual(json.success, true);
    assert(json.photo?.id);

    // Clean up synthetic test photo immediately to preserve data pristine state
    if (json.photo?.id) {
      await fetch(`${BASE_URL}/api/photos/${json.photo.id}`, {
        method: "DELETE",
        headers: {
          Origin: "http://localhost:3000",
          Cookie: `executive_auth_session=${validSessionCookie}`,
        },
      });
    }
  });

  // 5. Admin Intelligence Route Hardening
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

  // 6. Public vs Protected Endpoints
  await test("Photos API: POST /api/photos without auth returns 401", async () => {
    const formData = new FormData();
    formData.append("title", "Unauthorized Photo");
    const res = await fetch(`${BASE_URL}/api/photos`, {
      method: "POST",
      headers: { Origin: "http://localhost:3000" },
      body: formData,
    });
    assert.strictEqual(res.status, 401, "Anonymous upload must be rejected with 401");
  });

  await test("Photos API: PATCH /api/photos/[id] without auth returns 401", async () => {
    const res = await fetch(`${BASE_URL}/api/photos/photo-cv-hero`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Origin: "http://localhost:3000" },
      body: JSON.stringify({ featured: true }),
    });
    assert.strictEqual(res.status, 401, "Anonymous patch must be rejected with 401");
  });

  await test("Photos API: DELETE /api/photos/[id] without auth returns 401", async () => {
    const res = await fetch(`${BASE_URL}/api/photos/photo-cv-hero`, {
      method: "DELETE",
      headers: { Origin: "http://localhost:3000" },
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

  // 7. Input Validation & Anti-Abuse
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
        website: "https://spam.com",
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

  // 8. Session Revocation / Logout Test
  await test("Session Revocation: POST /api/admin/auth/logout invalidates session token immediately", async () => {
    const logoutRes = await fetch(`${BASE_URL}/api/admin/auth/logout`, {
      method: "POST",
      headers: {
        Origin: "http://localhost:3000",
        Cookie: `executive_auth_session=${validSessionCookie}`,
      },
    });
    assert.strictEqual(logoutRes.status, 200);

    // Using the revoked token must now FAIL with 401
    const checkRes = await fetch(`${BASE_URL}/api/admin/auth/check`, {
      headers: { Cookie: `executive_auth_session=${validSessionCookie}` },
    });
    assert.strictEqual(checkRes.status, 401, "Revoked session must return 401");
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
