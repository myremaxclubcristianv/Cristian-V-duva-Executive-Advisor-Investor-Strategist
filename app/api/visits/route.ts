import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { parseUserAgent } from "@/lib/uaParser";
import { extractCoarseLocation } from "@/lib/analytics/cleanGeo";
import { getOrCreateSession, shouldSendNewVisitorAlert, checkRateLimit } from "@/lib/analytics/storage";
import { buildNewVisitorMessage, dispatchTelegramIntelligence } from "@/lib/analytics/telegramIntelligence";

const SESSION_COOKIE_NAME = "cv_session_id";
const ALERT_COOKIE_NAME = "cv_alert_sent";

export async function POST(request: Request) {
  try {
    const headers = request.headers;
    const clientIp = headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    // 1. Rate Limiting Check (60 requests per minute per IP)
    if (!checkRateLimit(`visit_${clientIp}`, 60)) {
      return NextResponse.json({ status: "rate_limited" }, { status: 429 });
    }

    const cookieStore = await cookies();
    const rawSessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    const alertSentCookie = cookieStore.get(ALERT_COOKIE_NAME)?.value;

    const isValidSessionId = rawSessionId && /^[a-zA-Z0-9_-]{10,64}$/.test(rawSessionId);
    let sessionId = isValidSessionId ? rawSessionId : undefined;
    let isNewSession = false;

    if (!sessionId) {
      sessionId = `cv_sid_${Date.now()}_${crypto.randomUUID().slice(0, 8)}`;
      isNewSession = true;
    }

    // Read payload safely
    let path = "/";
    let referrer = "Direct";
    let pageTitle = "";
    let utmSource: string | undefined;
    let utmMedium: string | undefined;
    let utmCampaign: string | undefined;
    let utmContent: string | undefined;
    let utmTerm: string | undefined;
    let screenResolution: string | undefined;

    try {
      const body = await request.json();
      if (body && typeof body === "object") {
        if (typeof body.path === "string" && body.path.trim()) {
          path = body.path.trim().slice(0, 200);
        }
        if (typeof body.referrer === "string" && body.referrer.trim()) {
          referrer = body.referrer.trim().slice(0, 250);
        }
        if (typeof body.pageTitle === "string" && body.pageTitle.trim()) {
          pageTitle = body.pageTitle.trim().slice(0, 150);
        }
        if (typeof body.utmSource === "string") utmSource = body.utmSource.slice(0, 100);
        if (typeof body.utmMedium === "string") utmMedium = body.utmMedium.slice(0, 100);
        if (typeof body.utmCampaign === "string") utmCampaign = body.utmCampaign.slice(0, 100);
        if (typeof body.utmContent === "string") utmContent = body.utmContent.slice(0, 100);
        if (typeof body.utmTerm === "string") utmTerm = body.utmTerm.slice(0, 100);
        if (typeof body.screenResolution === "string") screenResolution = body.screenResolution.slice(0, 30);
      }
    } catch {
      // Body reading is optional
    }

    // Header extraction
    const userAgent = headers.get("user-agent") || "";
    const parsedUa = parseUserAgent(userAgent);
    const { country, city } = extractCoarseLocation(headers);

    // Register session in in-memory intelligence storage
    const session = getOrCreateSession(
      sessionId,
      {
        pagePath: path,
        pageTitle,
        referrer,
        utmSource,
        utmMedium,
        utmCampaign,
        utmContent,
        utmTerm,
        deviceType: parsedUa.device.toLowerCase().includes("phone") || parsedUa.device.toLowerCase().includes("android")
          ? "mobile"
          : parsedUa.device.toLowerCase().includes("pad")
          ? "tablet"
          : "desktop",
        screenResolution,
        operatingSystem: parsedUa.os,
        browserName: parsedUa.browser,
      },
      country,
      city
    );

    // 1. Record visit in Supabase if configured (optional, silent fallback)
    try {
      const { client: supabase } = getSupabaseAdminClient();
      if (supabase) {
        supabase.from("site_visits").insert({
          session_id: sessionId,
          path,
          referrer: referrer || "Direct",
          user_agent: userAgent.slice(0, 300),
          device_type: parsedUa.device,
          browser: parsedUa.browser,
          os: parsedUa.os,
          country: country !== "Unknown" ? country : null,
          city: city !== "Unknown" ? city : null,
          is_new_session: isNewSession,
        }).then(() => {}, () => {});
      }
    } catch {
      // Supabase is non-critical for visit notifications
    }

    // 2. Telegram Alert for NEW sessions that have not received an alert
    let alertDispatched = false;

    if (isNewSession && !alertSentCookie && shouldSendNewVisitorAlert(session)) {
      const message = buildNewVisitorMessage(session, {
        id: `evt_init_${Date.now()}`,
        eventType: "SESSION_START",
        pagePath: path,
        pageTitle,
        timestamp: new Date().toISOString(),
        sessionId,
        deviceType: session.deviceType,
      });

      // Dispatch asynchronously without blocking response
      dispatchTelegramIntelligence(message)
        .then((res) => {
          if (res.success) {
            console.log(`[TELEGRAM_VISITOR_INTELLIGENCE] NEW_VISITOR_ALERT_SENT for session ${sessionId.slice(0, 8)}`);
          }
        })
        .catch((err) => {
          console.warn("[TELEGRAM_VISITOR_INTELLIGENCE] Notification dispatch warning:", err.message);
        });

      alertDispatched = true;
    }

    // 3. Prepare response with session cookies
    const response = NextResponse.json({
      status: "success",
      isNewSession,
      sessionId: sessionId.slice(0, 18),
    });

    const isProduction = process.env.NODE_ENV === "production";

    // Set first-party session cookie if missing
    if (isNewSession) {
      response.cookies.set(SESSION_COOKIE_NAME, sessionId, {
        httpOnly: true,
        secure: isProduction,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
    }

    // Set alert sent cookie if dispatched
    if (alertDispatched) {
      response.cookies.set(ALERT_COOKIE_NAME, "1", {
        httpOnly: true,
        secure: isProduction,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
    }

    return response;
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[VISITS_API_ERROR]", errorMsg);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
