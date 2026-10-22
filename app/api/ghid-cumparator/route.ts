import { NextRequest, NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";
import { getSupabaseAdminClient } from "@/lib/supabase";

// In-memory rate limiting map (5 requests per 10 minutes per IP)
const rateLimits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(clientIp: string, maxLimit = 5, windowMs = 600000): boolean {
  const now = Date.now();
  const entry = rateLimits.get(clientIp);

  if (!entry || now > entry.resetAt) {
    rateLimits.set(clientIp, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= maxLimit) {
    return true;
  }

  entry.count++;
  return false;
}

interface RequestBody {
  fullName: string;
  email: string;
  phone?: string;
  consentPrivacy: boolean;
  consentMarketing?: boolean;
  website?: string; // Honeypot
}

export async function POST(req: NextRequest) {
  try {
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    // 1. Rate Limiting Check
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body: RequestBody = await req.json();

    // 2. Honeypot check (anti-bot)
    if (body.website && typeof body.website === "string" && body.website.trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // 3. Server-side Validation
    if (!body.fullName || typeof body.fullName !== "string" || body.fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || typeof body.email !== "string" || !emailRegex.test(body.email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!body.consentPrivacy) {
      return NextResponse.json(
        { error: "Consent for data processing is required to request the buyer's dossier." },
        { status: 400 }
      );
    }

    const sanitizedName = body.fullName.trim().slice(0, 100);
    const sanitizedEmail = body.email.trim().toLowerCase().slice(0, 100);
    const sanitizedPhone = body.phone ? body.phone.trim().slice(0, 30) : "";
    const marketingOptIn = Boolean(body.consentMarketing);

    // 4. Attempt Database Persistence (if Supabase credentials configured)
    let persistedInDatabase = false;
    try {
      const { client: supabase } = getSupabaseAdminClient();
      if (supabase) {
        const { error: dbError } = await supabase.from("consultation_requests").insert({
          name: sanitizedName,
          email: sanitizedEmail,
          phone: sanitizedPhone || null,
          interest: "Buyer's Strategic Dossier",
          message: `Buyer's Guide Request | Marketing Opt-in: ${marketingOptIn ? "YES" : "NO"}`,
          source: "/ghid-cumparator",
          status: "new",
        });

        if (!dbError) {
          persistedInDatabase = true;
        }
      }
    } catch {
      // Non-fatal database error
    }

    // 5. Deliver Dispatch Alert via Telegram (Existing Authorized Channel)
    let dispatchedViaTelegram = false;
    try {
      const telegramAlert = [
        "📘 NOUĂ SOLICITARE DOSARUL CUMPĂRĂTORULUI — EXECUTIVE",
        `👤 Nume: ${sanitizedName}`,
        `📧 Email: ${sanitizedEmail}`,
        sanitizedPhone ? `📞 Telefon: ${sanitizedPhone}` : null,
        `📬 Acord Marketing: ${marketingOptIn ? "DA" : "Nu"}`,
        `🌐 Sursă: /ghid-cumparator | IP: ${clientIp.slice(0, 10)}***`,
        `🕒 Data: ${new Date().toISOString()}`,
      ]
        .filter(Boolean)
        .join("\n");

      const dispatchResult = await sendTelegramMessage(telegramAlert);
      dispatchedViaTelegram = dispatchResult.success;
    } catch {
      // Non-fatal telegram error
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your request has been registered. You have immediate access to the complete dossier below.",
        deliveryStatus: {
          database: persistedInDatabase,
          notification: dispatchedViaTelegram,
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "An error occurred while processing your request. Please try again." },
      { status: 500 }
    );
  }
}
