import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getSupabaseAdminClient } from "@/lib/supabase";
import { getSession, recordFormInteraction } from "@/lib/analytics/storage";
import { buildCommercialSignalMessage, dispatchTelegramIntelligence, formatBucharestTime } from "@/lib/analytics/telegramIntelligence";
import { sendTelegramMessage } from "@/lib/telegram";

// In-memory rate limiting map for inquiry endpoint
const inquiryIpRateLimits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(clientIp: string, maxLimit = 5, windowMs = 600000): boolean {
  const now = Date.now();
  const entry = inquiryIpRateLimits.get(clientIp);

  if (!entry || now > entry.resetAt) {
    inquiryIpRateLimits.set(clientIp, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= maxLimit) {
    return true;
  }

  entry.count++;
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_INTERESTS = [
  "Real Estate",
  "Capital & Investments",
  "Executive Advisory",
  "Strategic Partnerships",
  "Other",
];

export async function POST(request: Request) {
  try {
    const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    // 1. Rate Limiting Check (5 per 10 minutes per IP)
    if (isRateLimited(clientIp)) {
      console.warn(`[INQUIRIES_API] Rate limit exceeded for IP: ${clientIp.slice(0, 7)}***`);
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // 2. Read and validate body size & JSON payload
    const rawBody = await request.text();
    if (!rawBody || rawBody.length > 50000) {
      return NextResponse.json({ error: "Payload too large." }, { status: 413 });
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
    }

    // 3. Honeypot check (Silent rejection of spam bots)
    if (body.website && typeof body.website === "string" && body.website.trim().length > 0) {
      console.log("[INQUIRIES_API] Honeypot triggered. Silently rejecting bot submission.");
      return NextResponse.json({ status: "success" }, { status: 200 });
    }

    // 4. Input validation & sanitization
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const interest = typeof body.interest === "string" ? body.interest.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    const source = typeof body.source === "string" ? body.source.trim().slice(0, 150) : "/contact";
    const clientSessionId = typeof body.sessionId === "string" ? body.sessionId.trim().slice(0, 64) : "";

    if (!name) {
      return NextResponse.json({ error: "Full Name is required." }, { status: 400 });
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "A valid Email address is required." }, { status: 400 });
    }
    if (!interest || !ALLOWED_INTERESTS.includes(interest)) {
      return NextResponse.json({ error: "Please select a valid Area of Interest." }, { status: 400 });
    }
    if (!message || message.length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters long." }, { status: 400 });
    }
    if (message.length > 2000) {
      return NextResponse.json({ error: "Message cannot exceed 2000 characters." }, { status: 400 });
    }
    if (phone && phone.length > 50) {
      return NextResponse.json({ error: "Phone number is too long." }, { status: 400 });
    }

    // 5. Save lead into Supabase (Primary Secure Source of Truth)
    let leadRecordId = "offline_recorded";
    try {
      const { client: supabase } = getSupabaseAdminClient();
      if (supabase) {
        const { data: lead, error: insertError } = await supabase
          .from("consultation_requests")
          .insert({
            name,
            email,
            phone: phone || null,
            interest,
            message,
            source,
            status: "new",
          })
          .select("id, created_at")
          .single();

        if (insertError) {
          console.error("[INQUIRIES_API] Supabase database insert error:", insertError.message);
        } else if (lead) {
          leadRecordId = lead.id;
          console.log(`[INQUIRIES_API] Lead stored successfully in Supabase (ID: ${lead.id})`);
        }
      }
    } catch (dbErr) {
      console.warn("[INQUIRIES_API] Database non-fatal warning:", dbErr);
    }

    // 6. Connect with Visitor Session Intelligence
    const cookieStore = await cookies();
    const cookieSessionId = cookieStore.get("cv_session_id")?.value;
    const resolvedSessionId = clientSessionId || cookieSessionId;
    const session = resolvedSessionId ? getSession(resolvedSessionId) : undefined;

    if (session) {
      recordFormInteraction(session, {
        formType: interest,
        status: "submitted",
        success: true,
        timestamp: new Date().toISOString(),
      });
      session.intentLevel = "LEAD";

      // Dispatch Commercial Signal (Format B: LEAD CONFIRMED)
      // Privacy-compliant: Only reports state, type, and database reference; zero personal content in Telegram!
      const leadSignalMessage = buildCommercialSignalMessage(
        session,
        `Trimitere cu succes solicitare privată [LEAD CONFIRMAT]`,
        {
          url: source,
          interpretation: `Utilizatorul a expediat o solicitare oficială pentru aria „${interest}”. Detaliile de contact complete sunt stocate în siguranță în baza de date (Ref: ${leadRecordId.slice(0, 8)}).`,
        }
      );

      dispatchTelegramIntelligence(leadSignalMessage).catch((err) => {
        console.warn("[INQUIRIES_API] Telegram lead alert dispatch error:", err.message);
      });
    } else {
      // Fallback notification if session not found in memory
      const bucTime = formatBucharestTime();
      const fallbackNotice = [
        "🎯 EXECUTIVE | SEMNAL COMERCIAL",
        "",
        `🕒 ${bucTime}`,
        `📍 Acțiune: Trimitere cu succes solicitare privată [LEAD]`,
        `📂 Domeniu de interes: ${interest}`,
        `🔗 Sursă: ${source}`,
        `🔒 Ref Bază de Date: ${leadRecordId.slice(0, 8)}`,
        "",
        "💡 INTERPRETARE FACTUALĂ",
        "Formularul a fost validat și expediat cu succes. Datele complete de contact sunt păstrate în baza de date securizată.",
      ].join("\n");

      sendTelegramMessage(fallbackNotice).catch(() => {});
    }

    // 7. Success response to client
    return NextResponse.json({ status: "success" }, { status: 200 });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("[INQUIRIES_API_UNHANDLED_ERROR]", errorMsg);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
