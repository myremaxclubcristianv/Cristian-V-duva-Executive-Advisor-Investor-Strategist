import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const VALID_PASSCODES = [
  "cristian2026",
  "executive2026",
  "aix2026",
  "cristianvaduva",
  "123456",
  process.env.ADMIN_PASSWORD || "",
].filter(Boolean);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { password, email } = body;

    const enteredPass = (password || "").trim();
    const isAuthorized = VALID_PASSCODES.some(
      (valid) => valid.toLowerCase() === enteredPass.toLowerCase()
    );

    if (!isAuthorized) {
      return NextResponse.json(
        { success: false, error: "Cod de acces incorect. Vă rugăm să reîncercați." },
        { status: 401 }
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

    // Set secure auth cookie
    response.cookies.set({
      name: "executive_auth_session",
      value: "authenticated_session_cristian_vaduva_2026",
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
