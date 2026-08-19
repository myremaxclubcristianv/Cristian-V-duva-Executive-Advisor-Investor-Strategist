import { NextResponse } from "next/server";
import { getSupabaseAdminClient } from "@/lib/supabase";
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

    // 5. Save lead into Supabase (Source of Truth)
    const { client: supabase, error: configError } = getSupabaseAdminClient();

    if (!supabase || configError) {
      console.error("[INQUIRIES_API] Database configuration error:", configError);
      return NextResponse.json(
        { error: "Unable to process inquiry at this moment." },
        { status: 500 }
      );
    }

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
      console.error("[INQUIRIES_API] Supabase database insert failed:", insertError.message);
      return NextResponse.json(
        { error: "Failed to store inquiry in database." },
        { status: 500 }
      );
    }

    console.log(`[INQUIRIES_API] Lead stored successfully in Supabase (ID: ${lead.id})`);

    // 6. Telegram Lead Notification (Isolated execution, failure won't rollback Supabase lead)
    const timeFormatted = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/Bucharest",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const telegramText = [
      "NEW PRIVATE INQUIRY",
      "",
      "Cristian Văduva Executive",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Interest: ${interest}`,
      "",
      "Message:",
      message,
      "",
      `Source: ${source}`,
      `Time: ${timeFormatted} (RO)`,
    ].join("\n");

    const telegramResult = await sendTelegramMessage(telegramText);

    if (!telegramResult.success) {
      console.warn(`[INQUIRIES_API] Telegram alert failed for lead ${lead.id}: ${telegramResult.error}`);
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
