import { NextResponse } from "next/server";
import { extractCoarseLocation } from "@/lib/analytics/cleanGeo";
import { getOrCreateSession, recordEvent, checkRateLimit, shouldSendLeadAlert } from "@/lib/analytics/storage";
import { dispatchLeadNotification } from "@/lib/analytics/notifier";
import { VisitorEvent, EventType } from "@/lib/analytics/types";

const ALLOWED_EVENT_TYPES: EventType[] = [
  "PAGE_VIEW",
  "SESSION_START",
  "CTA_CLICK",
  "CONTACT_CLICK",
  "WHATSAPP_CLICK",
  "TELEGRAM_CLICK",
  "EMAIL_CLICK",
  "LINKEDIN_CLICK",
  "YOUTUBE_CLICK",
  "CONSULTATION_REQUEST",
  "FORM_START",
  "FORM_SUBMIT",
  "PROPERTY_VIEW",
  "MARKET_VIEW",
  "NEWS_VIEW",
  "VIDEO_PLAY",
];

export async function POST(request: Request) {
  try {
    const headers = request.headers;
    const clientIp = headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    // 1. Rate Limiting Check
    if (!checkRateLimit(clientIp, 40)) {
      console.warn(`[VISITOR_INTELLIGENCE] EVENT_REJECTED Rate limited client ${clientIp.slice(0, 7)}`);
      return NextResponse.json({ status: "rate_limited" }, { status: 429 });
    }

    // 2. Payload Validation & Size Limit
    const body = await request.json();
    if (!body || typeof body !== "object" || !body.sessionId || !body.eventType) {
      return NextResponse.json({ status: "invalid_payload" }, { status: 400 });
    }

    if (!ALLOWED_EVENT_TYPES.includes(body.eventType)) {
      return NextResponse.json({ status: "unsupported_event" }, { status: 400 });
    }

    // Sanitize string fields
    const pagePath = typeof body.pagePath === "string" ? body.pagePath.slice(0, 200) : "/";
    const pageTitle = typeof body.pageTitle === "string" ? body.pageTitle.slice(0, 150) : "";
    const sessionId = typeof body.sessionId === "string" ? body.sessionId.slice(0, 64) : "anonymous";
    const referrer = typeof body.referrer === "string" ? body.referrer.slice(0, 250) : undefined;
    const utmSource = typeof body.utmSource === "string" ? body.utmSource.slice(0, 100) : undefined;
    const utmMedium = typeof body.utmMedium === "string" ? body.utmMedium.slice(0, 100) : undefined;
    const utmCampaign = typeof body.utmCampaign === "string" ? body.utmCampaign.slice(0, 100) : undefined;
    const deviceType = ["mobile", "tablet", "desktop"].includes(body.deviceType) ? body.deviceType : "desktop";

    const { country, city } = extractCoarseLocation(headers);

    const event: VisitorEvent = {
      id: `evt_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      eventType: body.eventType,
      pagePath,
      pageTitle,
      timestamp: new Date().toISOString(),
      sessionId,
      referrer,
      utmSource,
      utmMedium,
      utmCampaign,
      deviceType,
      metadata: typeof body.metadata === "object" ? body.metadata : undefined,
    };

    // 3. In-Memory Session Intelligence
    const session = getOrCreateSession(sessionId, event, country, city);
    recordEvent(event);

    console.log(`[VISITOR_INTELLIGENCE] EVENT_ACCEPTED ${event.eventType} on ${event.pagePath} (Session: ${session.id.slice(0, 8)}, Intent: ${session.intentLevel})`);

    // 4. Real-time Lead Notification for High-Intent Events
    if (shouldSendLeadAlert(session)) {
      await dispatchLeadNotification(session, event);
    }

    return NextResponse.json({ status: "recorded", sessionId: session.id });
  } catch (err) {
    console.error("[VISITOR_INTELLIGENCE] EVENT_PROCESSING_ERROR", err);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
