import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const sessionCookie = req.cookies.get("executive_auth_session")?.value;

  if (sessionCookie && sessionCookie.startsWith("authenticated_session_cristian_vaduva")) {
    return NextResponse.json({
      authenticated: true,
      user: {
        name: "Cristian Văduva",
        email: "cristianvaduva@duck.com",
        role: "EXECUTIVE_ADMIN",
      },
    });
  }

  return NextResponse.json(
    { authenticated: false, error: "Not authenticated" },
    { status: 401 }
  );
}
