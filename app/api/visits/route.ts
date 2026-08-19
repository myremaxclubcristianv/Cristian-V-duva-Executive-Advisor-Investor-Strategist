import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "crypto";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { sendTelegramMessage } from "@/lib/telegram";
import { parseUserAgent } from "@/lib/uaParser";

const SESSION_COOKIE_NAME = "cv_session_id";
const ALERT_COOKIE_NAME = "cv_alert_sent";

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const existingSessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    const alertSentCookie = cookieStore.get(ALERT_COOKIE_NAME)?.value;

    let sessionId = existingSessionId;
    let isNewSession = false;

    if (!sessionId) {
      sessionId = `cv_sid_${Date.now()}_${crypto.randomUUID().slice(0, 8)}`;
      isNewSession = true;
    }

    // Read payload safely
    let path = "/";
    let referrer = "Direct";

    try {
      const body = await request.json();
      if (body && typeof body === "object") {
        if (typeof body.path === "string" && body.path.trim()) {
          path = body.path.trim().slice(0, 200);
        }
        if (typeof body.referrer === "string" && body.referrer.trim()) {
          referrer = body.referrer.trim().slice(0, 250);
        }
      }
    } catch {
      // Body reading is optional
    }

    // Header extraction
    const headers = request.headers;
    const userAgent = headers.get("user-agent") || "";
    const parsedUa = parseUserAgent(userAgent);

    // Reliable Vercel coarse location headers if present
    const rawCountry = headers.get("x-vercel-ip-country") || headers.get("cf-ipcountry");
    const rawCity = headers.get("x-vercel-ip-city");

    const country = rawCountry && rawCountry !== "XX" ? rawCountry : undefined;
    const city = rawCity ? decodeURIComponent(rawCity) : undefined;
    const locationText = country && city ? `${city}, ${country}` : country || "Coarse / Protected";

    // 1. Record visit in Supabase
    const { client: supabase } = getSupabaseAdminClient();
    if (supabase) {
      const { error: insertError } = await supabase.from("site_visits").insert({
        session_id: sessionId,
        path,
        referrer: referrer || "Direct",
        user_agent: userAgent.slice(0, 300),
        device_type: parsedUa.device,
        browser: parsedUa.browser,
        os: parsedUa.os,
        country: country || null,
        city: city || null,
        is_new_session: isNewSession,
      });

      if (insertError) {
        console.warn("[VISITS_API] Supabase visit record warning:", insertError.message);
      }
    }

    // 2. Telegram Alert ONLY for NEW sessions that have not received an alert
    let alertDispatched = false;

    if (isNewSession && !alertSentCookie) {
      const timeFormatted = new Date().toLocaleString("en-GB", {
        timeZone: "Europe/Bucharest",
        dateStyle: "medium",
        timeStyle: "short",
      });

      const telegramText = [
        "NEW WEBSITE VISITOR",
        "",
        "Cristian Văduva Executive",
        "",
        `Page:`,
        path,
        "",
        `Device:`,
        parsedUa.device,
        "",
        `Browser:`,
        parsedUa.browser,
        "",
        `OS:`,
        parsedUa.os,
        "",
        `Referrer:`,
        referrer || "Direct",
        "",
        `Location:`,
        locationText,
        "",
        `Time:`,
        `${timeFormatted} (RO)`,
        "",
        `Session:`,
        sessionId.slice(0, 18),
      ].join("\n");

      const tgResult = await sendTelegramMessage(telegramText);
      if (tgResult.success) {
        alertDispatched = true;
      }
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
