import { NextResponse, NextRequest } from "next/server";
import { getRecentSessions } from "@/lib/analytics/storage";
import { verifyAdminRequest } from "@/lib/adminAuth";

export async function GET(request: NextRequest) {
  if (!verifyAdminRequest(request)) {
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

