import { VisitorSession, VisitorEvent } from "./types";
import { sendTelegramMessage } from "@/lib/telegram";

const BASE_URL = "https://executive.cristianvaduva.com";

const COUNTRY_NAMES_RO: Record<string, string> = {
  RO: "România",
  MD: "Republica Moldova",
  FR: "Franța",
  MC: "Monaco",
  AE: "Emiratele Arabe Unite",
  US: "Statele Unite",
  GB: "Marea Britanie",
  DE: "Germania",
  IT: "Italia",
  ES: "Spania",
  CH: "Elveția",
  AT: "Austria",
  BE: "Belgia",
  NL: "Olanda",
  GR: "Grecia",
  CY: "Cipru",
  IL: "Israel",
  CA: "Canada",
  AU: "Australia",
};

export function getCountryFriendlyName(code?: string): string {
  if (!code || code === "Unknown" || code === "XX") return "Necunoscută";
  const upper = code.toUpperCase();
  const roName = COUNTRY_NAMES_RO[upper];
  return roName ? `${roName} (${upper})` : upper;
}

export function formatBucharestTime(dateObj?: Date | string): string {
  const d = dateObj ? (typeof dateObj === "string" ? new Date(dateObj) : dateObj) : new Date();
  try {
    return d.toLocaleString("ro-RO", {
      timeZone: "Europe/Bucharest",
      day: "2-digit",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  } catch {
    return d.toISOString();
  }
}

export function cleanUrl(pathOrUrl?: string): string {
  if (!pathOrUrl) return BASE_URL;
  try {
    const rawUrl = pathOrUrl.startsWith("http") ? pathOrUrl : `${BASE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
    const parsed = new URL(rawUrl);
    // Strip sensitive or internal query parameters
    const sensitiveKeys = ["token", "key", "secret", "password", "code", "access_token", "api_key"];
    sensitiveKeys.forEach((k) => parsed.searchParams.delete(k));
    return parsed.toString();
  } catch {
    return `${BASE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
  }
}

export function categorizePage(path: string): string {
  const cleanPath = path.split("?")[0].toLowerCase();
  if (cleanPath === "/" || cleanPath === "") return "Homepage / Salon Principal";
  if (cleanPath.startsWith("/about")) return "Despre / Strategic Mandate";
  if (cleanPath === "/real-estate/properties") return "Catalog Proprietăți (433 Monografii)";
  if (cleanPath.startsWith("/real-estate/properties/")) return "Proprietate / Monografie Arhitecturală";
  if (cleanPath.startsWith("/real-estate/market")) return "Analiză de Piață & Intelligence";
  if (cleanPath.startsWith("/real-estate/news")) return "Perspective & Noutăți Imobiliare";
  if (cleanPath.startsWith("/contact")) return "Contact & Coordonate Executive";
  if (cleanPath.startsWith("/gallery")) return "Galerie Arhitecturală";
  if (cleanPath.startsWith("/ventures")) return "Venture Capital & Fonduri Private";
  if (cleanPath.startsWith("/ecosystem")) return "Ecosistem & Rețea Directoare";
  if (cleanPath.startsWith("/legal") || cleanPath.startsWith("/privacy") || cleanPath.startsWith("/terms")) return "Legal & Guvernanță";
  return cleanPath;
}

/**
 * Format A: NOTIFICARE — VIZITATOR NOU
 */
export function buildNewVisitorMessage(session: VisitorSession, initialEvent?: VisitorEvent): string {
  const now = new Date();
  const bucTime = formatBucharestTime(now);
  const utcTime = now.toISOString();
  const countryName = getCountryFriendlyName(session.country);
  const cityName = session.city && session.city !== "Unknown" ? session.city : "Aproximativ / Nivel Rețea";
  const landingUrl = cleanUrl(session.landingPage);
  const category = categorizePage(session.landingPage);
  const pageTitle = initialEvent?.pageTitle || (session.landingPage === "/" ? "Cristian Văduva — Executive Advisor & Property Strategist" : category);

  // Property extraction if landing is a property
  let propertySection = "• Explorare: Navigare generală platformă";
  if (session.landingPage.includes("/real-estate/properties/")) {
    const slug = session.landingPage.split("/real-estate/properties/")[1]?.split("?")[0] || "";
    propertySection = `• Proprietate: ${pageTitle}\n• ID Monografie: ${slug}\n• Link direct: ${landingUrl}`;
  }

  const utmParts = [
    session.utmSource ? `source=${session.utmSource}` : "",
    session.utmMedium ? `medium=${session.utmMedium}` : "",
    session.utmCampaign ? `campaign=${session.utmCampaign}` : "",
    session.utmContent ? `content=${session.utmContent}` : "",
    session.utmTerm ? `term=${session.utmTerm}` : "",
  ].filter(Boolean);

  const utmText = utmParts.length > 0 ? utmParts.join(" | ") : "Nespecificat (Trafic Direct / Organic)";

  return [
    "🔎 EXECUTIVE | VIZITATOR NOU",
    "",
    "🕒 TIMP",
    `• Ora locală: ${bucTime}`,
    `• UTC: ${utcTime}`,
    `• Sesiune: ${session.id.slice(0, 18)}`,
    `• Tip: ${session.isReturningVisitor ? "Revenire cunoscută (sesiune reluată)" : "Vizită nouă"}`,
    "",
    "🌍 ORIGINE",
    `• Țară: ${countryName}`,
    `• Oraș: ${cityName}`,
    `• Sursă: ${session.trafficSource || "Direct / Necunoscut"}`,
    `• Referrer: ${session.referrerDomain || session.trafficSource || "Direct"}`,
    `• Campanie: ${session.utmCampaign || "Organic / Direct"}`,
    `• UTM: ${utmText}`,
    "",
    "📱 DISPOZITIV",
    `• Tip: ${session.deviceType ? session.deviceType.toUpperCase() : "DESKTOP"}`,
    `• Sistem: ${session.operatingSystem || "Determinat automat"}`,
    `• Browser: ${session.browserName || "Web Browser"}`,
    session.screenResolution ? `• Ecran: ${session.screenResolution}` : "",
    "",
    "📄 INTRARE",
    `• Pagina inițială: ${landingUrl}`,
    `• Categorie: ${category}`,
    `• Titlu: ${pageTitle}`,
    `• Campanie atribuire: ${session.utmCampaign || "Trafic de bază"}`,
    "",
    "👀 INTERES INIȚIAL",
    propertySection,
    `• Link deschidere: ${landingUrl}`,
    "",
    "⚠️ IDENTITATE & ÎNCREDERE",
    "• Nume real: Necunoscut (nefurnizat de utilizator)",
    "• Client identificat: Nu (sesiune anonimă pseudonimizată)",
    "• Încredere geolocație: Aproximativă (nivel IP Edge / CDN)",
  ]
    .filter((line) => line !== "")
    .join("\n");
}

/**
 * Format B: NOTIFICARE — SEMNAL COMERCIAL
 */
export function buildCommercialSignalMessage(
  session: VisitorSession,
  actionTitle: string,
  detail?: {
    propertySlug?: string;
    propertyTitle?: string;
    url?: string;
    interpretation?: string;
    ctaHref?: string;
  }
): string {
  const bucTime = formatBucharestTime();
  const countryName = getCountryFriendlyName(session.country);
  const cityName = session.city && session.city !== "Unknown" ? session.city : "Aproximativ";
  const currentUrl = cleanUrl(detail?.url || session.lastPage);

  const propText = detail?.propertyTitle
    ? `• Titlu: ${detail.propertyTitle}\n• ID: ${detail.propertySlug || "prop"}\n• URL: ${currentUrl}`
    : "Nu este asociată unei monografii specifice (interacțiune la nivel de platformă)";

  const interpretation =
    detail?.interpretation ||
    "Semnal de interes comercial ridicat: utilizatorul a executat o acțiune de explorare avansată sau a inițiat contactul.";

  return [
    "🎯 EXECUTIVE | SEMNAL COMERCIAL",
    "",
    `🕒 ${bucTime}`,
    `👤 Sesiune: ${session.id.slice(0, 18)}`,
    `🌍 Origine: ${cityName}, ${countryName}`,
    `📱 Dispozitiv: ${session.deviceType ? session.deviceType.toUpperCase() : "DESKTOP"} (${session.browserName || "Browser"} / ${session.operatingSystem || "OS"})`,
    `📍 Acțiune: ${actionTitle}`,
    detail?.ctaHref ? `🎯 Destinație CTA: ${detail.ctaHref}` : "",
    "",
    "🏡 PROPRIETATE / CONTEXT",
    propText,
    "",
    `🔗 Pagina curentă: ${currentUrl}`,
    `📊 Istoric sesiune: ${session.pageCount} pagini consultate | ${session.propertiesViewed.length} proprietăți explorate | ${session.eventCount} acțiuni`,
    `📣 Campanie: ${session.utmCampaign || session.trafficSource || "Direct / Organic"}`,
    "",
    "💡 INTERPRETARE FACTUALĂ",
    interpretation,
  ]
    .filter((line) => line !== "")
    .join("\n");
}

/**
 * Format C: RAPORT — SESIUNE ÎNCHEIATĂ SAU INACTIVĂ
 */
export function buildSessionSummaryMessage(session: VisitorSession): string {
  const startD = new Date(session.startedAt);
  const endD = new Date(session.lastSeenAt);
  const diffSec = Math.max(1, Math.round((endD.getTime() - startD.getTime()) / 1000));
  const minutes = Math.floor(diffSec / 60);
  const seconds = diffSec % 60;
  const durationFormatted = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  const bucStart = formatBucharestTime(startD);
  const bucEnd = formatBucharestTime(endD);
  const countryName = getCountryFriendlyName(session.country);

  // Journey route
  const pagesList = session.pagesVisited.map((p, idx) => `${idx + 1}. ${p}`).join("\n");

  // Properties viewed
  const propList =
    session.propertiesViewed.length > 0
      ? session.propertiesViewed
          .map(
            (p) =>
              `• ${p.title} (ID: ${p.slug}) — ${p.count} vizualizări${p.galleryOpened ? " (galerie explorată)" : ""}`
          )
          .join("\n")
      : "• Nicio monografie individuală deschisă complet";

  // Searches & Filters
  const searchSection =
    session.searchesUsed.length > 0
      ? `• Căutări catalog: ${session.searchesUsed.map((s) => `„${s}”`).join(", ")}`
      : "• Nicio căutare text folosită";

  const filterSection =
    session.filtersUsed.length > 0
      ? `• Filtre aplicate: ${session.filtersUsed.join(", ")}`
      : "• Niciun filtru aplicat";

  // CTAs & Forms
  const ctaList =
    session.ctasClicked.length > 0
      ? session.ctasClicked.map((c) => `• [${c.type}] ${c.label} (${c.href.slice(0, 40)})`).join("\n")
      : "• Niciun buton de contact apăsat";

  const formList =
    session.formsSubmitted.length > 0
      ? session.formsSubmitted.map((f) => `• Solicitare transmisă cu succes (${f.formType})`).join("\n")
      : session.formsStarted.length > 0
      ? `• Formular inițiat, dar netransmis (${session.formsStarted.map((f) => f.formType).join(", ")})`
      : "• Niciun formular atins";

  // Explain intent scoring
  let intentExplanation = "Navigare generică fără acțiuni comerciale observate.";
  if (session.intentLevel === "LEAD") {
    intentExplanation = "Solicitare privată confirmată: utilizatorul a expediat formularul de contact/consultanță.";
  } else if (session.intentLevel === "HIGH" || session.intentLevel === "HIGH_INTENT") {
    intentExplanation = "Interes comercial ridicat: utilizatorul a explorat galeria/proprietăți multiple sau a inițiat canalul direct de contact (WhatsApp/Telefon/Email).";
  } else if (session.intentLevel === "MEDIUM" || session.intentLevel === "MEDIUM_INTENT") {
    intentExplanation = "Explorare activă: vizualizare monografie specifică sau filtrare în catalog (>2 pagini).";
  }

  return [
    "📋 EXECUTIVE | RAPORT SESIUNE",
    "",
    `🕒 Interval: ${bucStart} → ${bucEnd}`,
    `⏱️ Durată observată: ${durationFormatted} (${session.eventCount} evenimente)`,
    `👤 Sesiune: ${session.id.slice(0, 18)}`,
    `🌍 Origine: ${session.city && session.city !== "Unknown" ? session.city + ", " : ""}${countryName}`,
    `📱 Dispozitiv: ${session.deviceType ? session.deviceType.toUpperCase() : "DESKTOP"} (${session.browserName || "Browser"} / ${session.operatingSystem || "OS"})`,
    "",
    "🚪 PUNCTE ACCES",
    `• Intrare: ${cleanUrl(session.landingPage)}`,
    `• Ultima pagină: ${cleanUrl(session.lastPage)}`,
    "",
    `🗺️ TRASEU PAGINI (${session.pagesVisited.length})`,
    pagesList || "1. /",
    "",
    `🏡 PROPRIETĂȚI CONSULTATE (${session.propertiesViewed.length})`,
    propList,
    "",
    "🔍 CĂUTARE & FILTRE",
    searchSection,
    filterSection,
    "",
    "⚡ CONVERSII & ACȚIUNI COMERCIALE",
    ctaList,
    formList,
    "",
    "📣 SURSĂ & CAMPANIE",
    `• Referrer: ${session.trafficSource || "Direct"}`,
    `• Campanie: ${session.utmCampaign || "Direct / Fără campanie"}`,
    session.utmSource ? `• UTM Sursă: ${session.utmSource}` : "",
    session.utmMedium ? `• UTM Mediu: ${session.utmMedium}` : "",
    "",
    `📈 INDICATOR INTERES: ${session.intentLevel}`,
    `• Justificare: ${intentExplanation}`,
    "",
    "ℹ️ LIMITĂRI & CONFIDENȚIALITATE",
    "• Durata reflectă strict timpul între primul și ultimul eveniment activ recepționat.",
    "• Nu au fost transmise către Telegram mesaje private, numere de telefon sau date din câmpurile formularului.",
  ]
    .filter((line) => line !== "")
    .join("\n");
}

/**
 * Split text safely to adhere to Telegram's 4096 character limit
 */
export function splitTelegramMessage(text: string, maxLen = 3800): string[] {
  if (text.length <= maxLen) return [text];
  const chunks: string[] = [];
  const lines = text.split("\n");
  let currentChunk = "";

  for (const line of lines) {
    if ((currentChunk + "\n" + line).length > maxLen) {
      if (currentChunk.trim()) chunks.push(currentChunk.trim());
      currentChunk = line;
    } else {
      currentChunk = currentChunk ? currentChunk + "\n" + line : line;
    }
  }

  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

/**
 * Dispatch Telegram notification with chunking and error handling
 */
export async function dispatchTelegramIntelligence(
  message: string
): Promise<{ success: boolean; error?: string; chunkCount: number }> {
  const chunks = splitTelegramMessage(message);
  let allSuccess = true;
  let lastError: string | undefined;

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks.length > 1 ? `[${i + 1}/${chunks.length}]\n\n${chunks[i]}` : chunks[i];
    const res = await sendTelegramMessage(chunk);
    if (!res.success) {
      allSuccess = false;
      lastError = res.error;
    }
  }

  return { success: allSuccess, error: lastError, chunkCount: chunks.length };
}
