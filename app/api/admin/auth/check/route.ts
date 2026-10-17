import { NextRequest, NextResponse } from "next/server";
import { verifyAdminRequest } from "@/lib/adminAuth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  if (verifyAdminRequest(req)) {
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

