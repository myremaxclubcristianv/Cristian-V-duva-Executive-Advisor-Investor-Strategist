import { NextRequest, NextResponse } from "next/server";
import { verifyCsrfOrigin, revokeAdminSession } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if (!verifyCsrfOrigin(req)) {
    return NextResponse.json(
      { success: false, error: "CSRF verification failed" },
      { status: 403 }
    );
  }

  const currentToken = req.cookies.get("executive_auth_session")?.value;
  if (currentToken) {
    revokeAdminSession(currentToken);
  }

  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });

  response.cookies.set({
    name: "executive_auth_session",
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return response;
}

