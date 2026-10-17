import { NextResponse } from "next/server";
import { extractCoarseLocation } from "@/lib/analytics/cleanGeo";
import { parseUserAgent } from "@/lib/uaParser";
import {
  getOrCreateSession,
  recordEvent,
  checkRateLimit,
  recordPropertyView,
  recordGalleryInteraction,
  recordCatalogSearch,
  recordCatalogFilter,
  recordCtaClick,
  recordFormInteraction,
  shouldSendCommercialAlert,
  shouldSendSessionSummary,
} from "@/lib/analytics/storage";
import {
  buildCommercialSignalMessage,
  buildSessionSummaryMessage,
  dispatchTelegramIntelligence,
} from "@/lib/analytics/telegramIntelligence";
import { VisitorEvent, EventType } from "@/lib/analytics/types";

const ALLOWED_EVENT_TYPES: EventType[] = [
  "session_started",
  "SESSION_START",
  "page_view",
  "PAGE_VIEW",
  "property_viewed",
  "PROPERTY_VIEW",
  "gallery_interaction",
  "GALLERY_INTERACTION",
  "catalog_search",
  "CATALOG_SEARCH",
  "catalog_filter_used",
  "CATALOG_FILTER_USED",
  "cta_clicked",
  "CTA_CLICK",
  "contact_intent",
  "CONTACT_CLICK",
  "phone_clicked",
  "PHONE_CLICK",
  "whatsapp_clicked",
  "WHATSAPP_CLICK",
  "telegram_clicked",
  "TELEGRAM_CLICK",
  "email_clicked",
  "EMAIL_CLICK",
  "linkedin_clicked",
  "LINKEDIN_CLICK",
  "youtube_clicked",
  "YOUTUBE_CLICK",
  "consultation_requested",
  "CONSULTATION_REQUEST",
  "form_started",
  "FORM_START",
  "form_submitted",
  "FORM_SUBMIT",
  "external_link_clicked",
  "session_summary",
  "SESSION_SUMMARY",
  "MARKET_VIEW",
  "NEWS_VIEW",
  "VIDEO_PLAY",
];

export async function POST(request: Request) {
  try {
    const headers = request.headers;
    const clientIp = headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    // 1. Rate Limiting Check
    if (!checkRateLimit(clientIp, 40)) {
      console.warn(`[VISITOR_INTELLIGENCE] Rate limited client ${clientIp.slice(0, 7)}***`);
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

    // Sanitize fields
    const pagePath = typeof body.pagePath === "string" ? body.pagePath.slice(0, 200) : "/";
    const pageTitle = typeof body.pageTitle === "string" ? body.pageTitle.slice(0, 150) : "";
    const rawSessionId = typeof body.sessionId === "string" ? body.sessionId.trim().slice(0, 64) : "";
    const sessionId = /^[a-zA-Z0-9_-]{10,64}$/.test(rawSessionId) ? rawSessionId : "anonymous";
    const referrer = typeof body.referrer === "string" ? body.referrer.slice(0, 250) : undefined;
    const utmSource = typeof body.utmSource === "string" ? body.utmSource.slice(0, 100) : undefined;
    const utmMedium = typeof body.utmMedium === "string" ? body.utmMedium.slice(0, 100) : undefined;
    const utmCampaign = typeof body.utmCampaign === "string" ? body.utmCampaign.slice(0, 100) : undefined;
    const utmContent = typeof body.utmContent === "string" ? body.utmContent.slice(0, 100) : undefined;
    const utmTerm = typeof body.utmTerm === "string" ? body.utmTerm.slice(0, 100) : undefined;
    const screenResolution = typeof body.screenResolution === "string" ? body.screenResolution.slice(0, 30) : undefined;

    const userAgent = headers.get("user-agent") || "";
    const parsedUa = parseUserAgent(userAgent);
    const deviceType = ["mobile", "tablet", "desktop"].includes(body.deviceType)
      ? body.deviceType
      : parsedUa.device.toLowerCase().includes("phone") || parsedUa.device.toLowerCase().includes("android")
      ? "mobile"
      : parsedUa.device.toLowerCase().includes("pad")
      ? "tablet"
      : "desktop";

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
      utmContent,
      utmTerm,
      deviceType,
      screenResolution,
      operatingSystem: parsedUa.os,
      browserName: parsedUa.browser,
      metadata: typeof body.metadata === "object" ? body.metadata : undefined,
    };

    // 3. Update in-memory session intelligence
    const session = getOrCreateSession(sessionId, event, country, city);
    recordEvent(event);

    const meta = event.metadata || {};

    // 4. Track specific domain actions
    const normEvent = event.eventType.toLowerCase();

    // A. Property viewing
    if (normEvent.includes("property") || pagePath.includes("/real-estate/properties/")) {
      const slug = (meta.propertySlug as string) || pagePath.split("/real-estate/properties/")[1]?.split("?")[0] || "";
      const title = (meta.propertyTitle as string) || pageTitle || slug;
      if (slug) {
        recordPropertyView(session, slug, title, pagePath);
      }
    }

    // B. Gallery interaction
    if (normEvent.includes("gallery")) {
      recordGalleryInteraction(session, meta.propertySlug as string);
    }

    // C. Catalog search & filter
    if (normEvent.includes("catalog_search") || meta.searchQuery) {
      const q = (meta.searchQuery as string) || "";
      if (q) recordCatalogSearch(session, q);
    }
    if (normEvent.includes("filter") || meta.filterValue) {
      const f = (meta.filterValue as string) || "";
      if (f) recordCatalogFilter(session, f);
    }

    // D. CTA clicks
    if (
      normEvent.includes("click") ||
      normEvent.includes("cta") ||
      normEvent.includes("whatsapp") ||
      normEvent.includes("phone") ||
      normEvent.includes("email")
    ) {
      recordCtaClick(session, {
        type: event.eventType,
        label: (meta.label as string) || (meta.title as string) || event.eventType,
        href: (meta.href as string) || pagePath,
        timestamp: event.timestamp,
      });
    }

    // E. Form interactions
    if (normEvent.includes("form_start") || normEvent.includes("form_started")) {
      recordFormInteraction(session, {
        formType: (meta.formType as string) || pagePath,
        timestamp: event.timestamp,
        status: "started",
      });
    } else if (normEvent.includes("form_submit") || normEvent.includes("form_submitted")) {
      recordFormInteraction(session, {
        formType: (meta.formType as string) || pagePath,
        timestamp: event.timestamp,
        status: "submitted",
        success: true,
      });
    }

    // 5. Evaluate Commercial Signal Alerts (Format B)
    let commercialSignalTriggered = false;
    let commercialActionTitle = "";
    let commercialInterpretation = "";
    let propertyContext: { propertySlug?: string; propertyTitle?: string; url?: string } | undefined;

    // Trigger 1: WhatsApp Click
    if (normEvent.includes("whatsapp")) {
      if (shouldSendCommercialAlert(session, "whatsapp_click")) {
        commercialSignalTriggered = true;
        commercialActionTitle = "Clic pe butonul WhatsApp Concierge";
        commercialInterpretation = "Utilizatorul dorește inițierea unei conversații private rapide pe canalul direct de mesagerie.";
      }
    }
    // Trigger 2: Phone Click
    else if (normEvent.includes("phone")) {
      if (shouldSendCommercialAlert(session, "phone_click")) {
        commercialSignalTriggered = true;
        commercialActionTitle = "Clic pe apelare telefonică directă";
        commercialInterpretation = "Utilizatorul dorește contact telefonic imediat pentru asistență sau clarificare de mandate.";
      }
    }
    // Trigger 3: Email Click
    else if (normEvent.includes("email")) {
      if (shouldSendCommercialAlert(session, "email_click")) {
        commercialSignalTriggered = true;
        commercialActionTitle = "Clic pe adresa de email oficială";
        commercialInterpretation = "Utilizatorul pregătește o corespondență scrisă oficială pentru consultanță fiduciară.";
      }
    }
    // Trigger 4: Form Started
    else if (normEvent.includes("form_start")) {
      if (shouldSendCommercialAlert(session, "form_started")) {
        commercialSignalTriggered = true;
        commercialActionTitle = `Inițiere completare formular (${(meta.formType as string) || "Contact"})`;
        commercialInterpretation = "Utilizatorul a accesat câmpurile de solicitare și a început redactarea unui mesaj privat.";
      }
    }
    // Trigger 5: Gallery Interaction
    else if (normEvent.includes("gallery")) {
      if (shouldSendCommercialAlert(session, "gallery_opened")) {
        commercialSignalTriggered = true;
        commercialActionTitle = "Explorare detaliată galerie arhitecturală / fotografii";
        commercialInterpretation = "Utilizatorul examinează în rezoluție înaltă planurile, finisajele sau monografiile vizuale.";
      }
    }
    // Trigger 6: Repeated Property Monograph View
    else if (normEvent.includes("property")) {
      const slug = (meta.propertySlug as string) || pagePath.split("/real-estate/properties/")[1]?.split("?")[0] || "";
      const prop = session.propertiesViewed.find((p) => p.slug === slug);
      if (prop && prop.count >= 2) {
        if (shouldSendCommercialAlert(session, `prop_repeat_${slug}`, 180000)) {
          commercialSignalTriggered = true;
          commercialActionTitle = `Revenire repetată pe monografie (${prop.count} vizualizări)`;
          commercialInterpretation = "Interes aprofundat: vizitatorul a revenit pentru a re-analiza cifrele și specificațiile aceleiași proprietăți.";
          propertyContext = { propertySlug: prop.slug, propertyTitle: prop.title, url: prop.url };
        }
      }
    }

    // Attach latest property if present
    if (!propertyContext && session.propertiesViewed.length > 0) {
      const lastProp = session.propertiesViewed[session.propertiesViewed.length - 1];
      propertyContext = {
        propertySlug: lastProp.slug,
        propertyTitle: lastProp.title,
        url: lastProp.url,
      };
    }

    // Dispatch Commercial Alert if qualified
    if (commercialSignalTriggered) {
      const message = buildCommercialSignalMessage(session, commercialActionTitle, {
        propertySlug: propertyContext?.propertySlug,
        propertyTitle: propertyContext?.propertyTitle,
        url: propertyContext?.url || pagePath,
        interpretation: commercialInterpretation,
        ctaHref: (meta.href as string) || undefined,
      });

      dispatchTelegramIntelligence(message)
        .then((res) => {
          if (res.success) {
            console.log(`[TELEGRAM_VISITOR_INTELLIGENCE] COMMERCIAL_SIGNAL_SENT for session ${session.id.slice(0, 8)}`);
          }
        })
        .catch((err) => {
          console.warn("[TELEGRAM_VISITOR_INTELLIGENCE] Commercial signal dispatch error:", err.message);
        });
    }

    // 6. Evaluate Session Summary Report (Format C)
    if (normEvent.includes("session_summary") || normEvent.includes("session_end")) {
      if (shouldSendSessionSummary(session)) {
        const summaryMessage = buildSessionSummaryMessage(session);
        dispatchTelegramIntelligence(summaryMessage)
          .then((res) => {
            if (res.success) {
              console.log(`[TELEGRAM_VISITOR_INTELLIGENCE] SESSION_SUMMARY_SENT for session ${session.id.slice(0, 8)}`);
            }
          })
          .catch((err) => {
            console.warn("[TELEGRAM_VISITOR_INTELLIGENCE] Session summary dispatch error:", err.message);
          });
      }
    }

    return NextResponse.json({
      status: "recorded",
      sessionId: session.id,
      intent: session.intentLevel,
    });
  } catch (err) {
    console.error("[VISITOR_INTELLIGENCE] EVENT_PROCESSING_ERROR", err);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}
