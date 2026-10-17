import { NextRequest, NextResponse } from "next/server";
import {
  checkLoginRateLimit,
  recordFailedLogin,
  resetLoginRateLimit,
  safeCompare,
  createSignedAdminSession,
} from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

const VALID_PASSCODES = [
  process.env.ADMIN_PASSWORD,
  "cristian2026",
  "executive2026",
  "aix2026",
  "cristianvaduva",
].filter((p): p is string => Boolean(p && typeof p === "string" && p.trim().length > 0));

export async function POST(req: NextRequest) {
  try {
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";

    // 1. Rate limiting check (5 attempts per 15 minutes)
    const rateLimit = checkLoginRateLimit(clientIp);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Prea multe încercări eșuate. Accesul este temporar blocat pentru ${rateLimit.retryAfterSeconds || 900} secunde.`,
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const { password, email } = body;

    const enteredPass = (password || "").trim();
    if (!enteredPass) {
      return NextResponse.json(
        { success: false, error: "Codul de securitate este obligatoriu." },
        { status: 400 }
      );
    }

    // 2. Constant-time comparison across allowed passcodes
    const isAuthorized = VALID_PASSCODES.some((valid) =>
      safeCompare(valid.toLowerCase(), enteredPass.toLowerCase())
    );

    if (!isAuthorized) {
      recordFailedLogin(clientIp);
      return NextResponse.json(
        { success: false, error: "Cod de acces incorect. Vă rugăm să reîncercați." },
        { status: 401 }
      );
    }

    // 3. Reset rate limit upon successful authentication
    resetLoginRateLimit(clientIp);

    // 4. Issue cryptographically signed tamper-proof session token
    const sessionToken = createSignedAdminSession();

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
      maxAge: 60 * 60 * 24 * 30, // 30 days
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
