import { NextRequest, NextResponse } from "next/server";
import {
  checkLoginRateLimit,
  recordFailedLogin,
  resetLoginRateLimit,
  safeCompare,
  createSignedAdminSession,
  verifyCsrfOrigin,
} from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

// If ADMIN_PASSWORD is set in environment, prioritize it exclusively to prevent credential confusion.
const VALID_PASSCODES = process.env.ADMIN_PASSWORD
  ? [process.env.ADMIN_PASSWORD]
  : ["cristian2026", "executive2026", "aix2026", "cristianvaduva"];

export async function POST(req: NextRequest) {
  try {
    // 1. CSRF Origin Verification
    if (!verifyCsrfOrigin(req)) {
      return NextResponse.json(
        { success: false, error: "CSRF verification failed." },
        { status: 403 }
      );
    }

    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    // 2. Rate limiting check (5 attempts per 15 minutes)
    const rateLimit = checkLoginRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many failed attempts. Access is temporarily locked for ${rateLimit.retryAfterSeconds || 900} seconds.`,
        },
        { status: 429 }
      );
    }

    // 3. Size check on JSON payload (max 5KB)
    const rawText = await req.text();
    if (rawText.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Payload too large." },
        { status: 413 }
      );
    }

    let body: { password?: string; email?: string } = {};
    try {
      body = JSON.parse(rawText);
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { password, email } = body;
    const enteredPass = (password || "").trim();
    if (!enteredPass) {
      return NextResponse.json(
        { success: false, error: "Security passcode is required." },
        { status: 400 }
      );
    }

    // 4. Constant-time comparison across allowed passcodes
    const isAuthorized = VALID_PASSCODES.some((valid) =>
      safeCompare(valid.toLowerCase(), enteredPass.toLowerCase())
    );

    if (!isAuthorized) {
      recordFailedLogin(clientIp);
      // Introduce defensive artificial delay against timing attacks and automated brute-force
      await new Promise((resolve) => setTimeout(resolve, 600));
      return NextResponse.json(
        { success: false, error: "Incorrect passcode. Please try again." },
        { status: 401 }
      );
    }

    // 5. Reset rate limit upon successful authentication
    resetLoginRateLimit(clientIp);

    // 6. Issue cryptographically signed tamper-proof session token
    const sessionToken = createSignedAdminSession();
    if (!sessionToken) {
      console.error("[AUTH_LOGIN_ERROR] Dedicated ADMIN_SECRET_KEY is not configured or insufficient.");
      return NextResponse.json(
        { success: false, error: "Authentication service is not configured." },
        { status: 500 }
      );
    }

    const response = NextResponse.json({
      success: true,
      user: {
        name: "Cristian Văduva",
        email: email || "cristianvaduva@duck.com",
        role: "EXECUTIVE_ADMIN",
      },
    });

    response.cookies.set({
      name: "executive_auth_session",
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours strict executive session
    });

    return response;
  } catch (error) {
    console.error("[AUTH_LOGIN_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "A apărut o eroare la autentificare." },
      { status: 500 }
    );
  }
}
