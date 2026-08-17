import { NextResponse } from "next/server";
import { getRecentSessions } from "@/lib/analytics/storage";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token") || request.headers.get("authorization")?.replace("Bearer ", "");

  const secret = process.env.ADMIN_SECRET_KEY || "aix_executive_preview_key";

  if (!token || token !== secret) {
    return NextResponse.json({ status: "unauthorized" }, { status: 401 });
  }

  const sessions = getRecentSessions();

  const totalVisitors = sessions.length;
  const highIntentSessions = sessions.filter((s) => s.intentLevel === "HIGH_INTENT");
  const whatsappClicks = sessions.filter((s) => s.latestAction === "WHATSAPP_CLICK").length;
  const consultationRequests = sessions.filter(
    (s) => s.latestAction === "CONSULTATION_REQUEST" || s.latestAction === "FORM_SUBMIT"
  ).length;

  return NextResponse.json({
    status: "success",
    timestamp: new Date().toISOString(),
    summary: {
      totalRecentSessions: totalVisitors,
      highIntentCount: highIntentSessions.length,
      whatsappClicks,
      consultationRequests,
    },
    recentSessions: sessions.slice(0, 50),
  });
}
