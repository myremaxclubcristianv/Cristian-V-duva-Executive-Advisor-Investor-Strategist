import {
  buildNewVisitorMessage,
  buildCommercialSignalMessage,
  buildSessionSummaryMessage,
  splitTelegramMessage,
  getCountryFriendlyName,
  formatBucharestTime,
  cleanUrl,
  categorizePage,
} from "../lib/analytics/telegramIntelligence.ts";

import {
  getOrCreateSession,
  recordPropertyView,
  recordGalleryInteraction,
  recordCatalogSearch,
  recordCatalogFilter,
  recordCtaClick,
  recordFormInteraction,
  shouldSendCommercialAlert,
  shouldSendNewVisitorAlert,
  shouldSendSessionSummary,
  checkRateLimit,
} from "../lib/analytics/storage.ts";

console.log("==================================================================");
console.log("EXECUTIVE — TELEGRAM VISITOR INTELLIGENCE & MARKETING TEST SUITE");
console.log("==================================================================\n");

let passed = 0;
let failed = 0;

function assert(condition, testName, detail = "") {
  if (condition) {
    console.log(`✅ PASS: ${testName} ${detail ? `(${detail})` : ""}`);
    passed++;
  } else {
    console.error(`❌ FAIL: ${testName} ${detail ? `(${detail})` : ""}`);
    failed++;
  }
}

// -------------------------------------------------------------
// TEST 1: New Visitor Creation & Format A Message Construction
// -------------------------------------------------------------
console.log("--- TEST 1: NEW VISITOR & FORMAT A NOTIFICATION ---");
const testSessionId = `cv_test_sid_${Date.now()}`;
const session = getOrCreateSession(
  testSessionId,
  {
    pagePath: "/real-estate/properties/prop-plevnei",
    pageTitle: "Signature Penthouse with 220 sqm Panoramic Terrace",
    referrer: "https://www.google.com/search?q=penthouse+bucuresti",
    utmSource: "google",
    utmMedium: "cpc",
    utmCampaign: "lansare_toamna_2026",
    utmContent: "penthouse_hero_ad",
    utmTerm: "penthouse_bucuresti",
    deviceType: "mobile",
    screenResolution: "390x844",
    operatingSystem: "iOS 18.2",
    browserName: "Mobile Safari",
  },
  "RO",
  "Bucharest"
);

assert(session.id === testSessionId, "Session ID initialized correctly");
assert(session.country === "RO", "Country captured as RO");
assert(session.city === "Bucharest", "City captured as Bucharest");
assert(session.landingPage === "/real-estate/properties/prop-plevnei", "Landing page captured");

const formatAMessage = buildNewVisitorMessage(session, {
  id: "evt_test_init",
  eventType: "session_started",
  pagePath: session.landingPage,
  pageTitle: "Signature Penthouse with 220 sqm Panoramic Terrace",
  timestamp: new Date().toISOString(),
  sessionId: session.id,
  deviceType: "mobile",
});

assert(formatAMessage.includes("🔎 EXECUTIVE | VIZITATOR NOU"), "Format A contains expected header");
assert(formatAMessage.includes("România (RO)"), "Format A translates country code to friendly Romanian name");
assert(formatAMessage.includes("Bucharest"), "Format A includes city");
assert(formatAMessage.includes("lansare_toamna_2026"), "Format A includes campaign");
assert(formatAMessage.includes("Mobile Safari"), "Format A includes browser");
assert(formatAMessage.includes("Nume real: Necunoscut"), "Format A includes identity protection disclaimer");

// -------------------------------------------------------------
// TEST 2: Page Navigation, Property & Gallery Tracking
// -------------------------------------------------------------
console.log("\n--- TEST 2: NAVIGATION, PROPERTY MONOGRAPHS & GALLERY TRACKING ---");
// Navigates to properties catalog
getOrCreateSession(testSessionId, { pagePath: "/real-estate/properties" }, "RO", "Bucharest");
// Navigates to another property
recordPropertyView(session, "prop-plevnei", "Signature Penthouse Plevnei", "https://executive.cristianvaduva.com/real-estate/properties/prop-plevnei");
recordPropertyView(session, "prop-kiseleff", "Kiseleff Diplomatic Residence", "https://executive.cristianvaduva.com/real-estate/properties/prop-kiseleff");
recordGalleryInteraction(session, "prop-plevnei");

assert(session.pageCount >= 2, "Page count incremented on navigation", `Count: ${session.pageCount}`);
assert(session.propertiesViewed.length === 2, "2 property monographs recorded in session");
const plevnei = session.propertiesViewed.find(p => p.slug === "prop-plevnei");
assert(plevnei && plevnei.galleryOpened === true, "Gallery opened flag recorded for prop-plevnei");
assert(session.intentLevel === "HIGH", "Intent elevated to HIGH due to multiple properties and gallery interaction");

// -------------------------------------------------------------
// TEST 3: Catalog Search & Filter Instrumentations
// -------------------------------------------------------------
console.log("\n--- TEST 3: CATALOG SEARCH & FILTERS ---");
recordCatalogSearch(session, "penthouse terasa");
recordCatalogFilter(session, "penthouse");
recordCatalogFilter(session, "Romania");

assert(session.searchesUsed.includes("penthouse terasa"), "Catalog search term recorded");
assert(session.filtersUsed.includes("penthouse"), "Catalog category filter recorded");
assert(session.filtersUsed.includes("Romania"), "Catalog country filter recorded");

// -------------------------------------------------------------
// TEST 4: Format B (SEMNAL COMERCIAL) for WhatsApp Click
// -------------------------------------------------------------
console.log("\n--- TEST 4: COMMERCIAL ACTION & FORMAT B NOTIFICATION ---");
recordCtaClick(session, {
  type: "WHATSAPP_CLICK",
  label: "WhatsApp Concierge",
  href: "https://wa.me/40722123456",
});

const canSendAlert1 = shouldSendCommercialAlert(session, "whatsapp_click");
assert(canSendAlert1 === true, "First WhatsApp alert allowed through throttle");

const formatBMessage = buildCommercialSignalMessage(session, "Clic pe butonul WhatsApp Concierge", {
  propertySlug: "prop-plevnei",
  propertyTitle: "Signature Penthouse Plevnei",
  url: "https://executive.cristianvaduva.com/real-estate/properties/prop-plevnei",
  ctaHref: "https://wa.me/40722123456",
  interpretation: "Utilizatorul dorește inițierea unei conversații private rapide pe canalul direct de mesagerie.",
});

assert(formatBMessage.includes("🎯 EXECUTIVE | SEMNAL COMERCIAL"), "Format B contains expected header");
assert(formatBMessage.includes("Clic pe butonul WhatsApp Concierge"), "Format B contains action title");
assert(formatBMessage.includes("Signature Penthouse Plevnei"), "Format B associates property context");
assert(formatBMessage.toLowerCase().includes("interpretare"), "Format B includes factual interpretation section");

// Test throttling of rapid repeated clicks
const canSendAlert2 = shouldSendCommercialAlert(session, "whatsapp_click");
assert(canSendAlert2 === false, "Duplicate WhatsApp click within cooldown window is throttled (anti-spam)");

// -------------------------------------------------------------
// TEST 5: Form Started vs Form Submitted (Zero Sensitive Leakage)
// -------------------------------------------------------------
console.log("\n--- TEST 5: FORM INTERACTIONS & PRIVACY DATA SHIELD ---");
recordFormInteraction(session, { formType: "Real Estate Advisory", status: "started" });
assert(session.formsStarted.length === 1, "Form start interaction recorded");

// Simulate successful inquiry submission
recordFormInteraction(session, { formType: "Real Estate Advisory", status: "submitted", success: true });
assert(session.formsSubmitted.length === 1, "Form submit interaction recorded");
assert(session.intentLevel === "LEAD", "Intent elevated to LEAD on confirmed submission");

const leadAlertMessage = buildCommercialSignalMessage(session, "Trimitere cu succes solicitare privată [LEAD CONFIRMAT]", {
  url: "https://executive.cristianvaduva.com/contact",
  interpretation: "Utilizatorul a expediat o solicitare oficială. Detaliile de contact complete sunt stocate în siguranță în baza de date.",
});

// CRITICAL PRIVACY VERIFICATION:
assert(!leadAlertMessage.includes("parola"), "Privacy check: Zero password in Telegram message");
assert(!leadAlertMessage.includes("mesaj secret"), "Privacy check: Zero raw private message body in Telegram message");
assert(leadAlertMessage.includes("LEAD CONFIRMAT"), "Lead status clearly announced in signal");

// -------------------------------------------------------------
// TEST 6: Format C (RAPORT SESIUNE) Construction & Metrics
// -------------------------------------------------------------
console.log("\n--- TEST 6: SESSION SUMMARY REPORT (FORMAT C) ---");
const canSendSummary = shouldSendSessionSummary(session);
assert(canSendSummary === true, "Session summary allowed for HIGH/LEAD session");

const formatCMessage = buildSessionSummaryMessage(session);

assert(formatCMessage.includes("📋 EXECUTIVE | RAPORT SESIUNE"), "Format C contains report header");
assert(formatCMessage.toLowerCase().includes("traseu pagini"), "Format C includes journey path");
assert(formatCMessage.toLowerCase().includes("proprietăți consultate"), "Format C includes properties list");
assert(formatCMessage.includes("Signature Penthouse Plevnei"), "Format C lists viewed property title");
assert(formatCMessage.includes("galerie explorată"), "Format C notes gallery exploration");
assert(formatCMessage.includes("penthouse terasa"), "Format C lists search queries used");
assert(formatCMessage.includes("INDICATOR INTERES: LEAD"), "Format C shows final LEAD score");
assert(formatCMessage.toLowerCase().includes("limitări & confidențialitate"), "Format C includes data limitations and GDPR disclaimer");

// -------------------------------------------------------------
// TEST 7: Telegram Message Length Chunking Safeguard
// -------------------------------------------------------------
console.log("\n--- TEST 7: TELEGRAM 4096-CHAR CHUNKING SAFEGUARD ---");
const shortChunks = splitTelegramMessage("Short message", 3800);
assert(shortChunks.length === 1, "Single chunk for normal message");

const hugeText = Array(200).fill("Linie foarte lungă de test pentru jurnalul de navigare al utilizatorului cu detalii complete.").join("\n");
const longChunks = splitTelegramMessage(hugeText, 3800);
assert(longChunks.length > 1, `Huge message (${hugeText.length} chars) safely split into ${longChunks.length} chunks`);
assert(longChunks.every(c => c.length <= 3800), "Every chunk strictly within 3800-char safe margin");

// -------------------------------------------------------------
// TEST 8: Geolocation Fallback Handling
// -------------------------------------------------------------
console.log("\n--- TEST 8: GEOLOCATION FALLBACKS ---");
assert(getCountryFriendlyName("RO") === "România (RO)", "RO correctly mapped");
assert(getCountryFriendlyName("FR") === "Franța (FR)", "FR correctly mapped");
assert(getCountryFriendlyName("US") === "Statele Unite (US)", "US correctly mapped");
assert(getCountryFriendlyName("XX") === "Necunoscută", "XX fallback to Necunoscută");
assert(getCountryFriendlyName(undefined) === "Necunoscută", "Undefined fallback to Necunoscută");

// -------------------------------------------------------------
// TEST 9: Rate Limiting & Anti-Spam
// -------------------------------------------------------------
console.log("\n--- TEST 9: RATE LIMITING & ANTI-SPAM ---");
const spamIp = "192.0.2.42";
let passedCount = 0;
for (let i = 0; i < 50; i++) {
  if (checkRateLimit(spamIp, 40)) passedCount++;
}
assert(passedCount === 40, "Rate limiter strictly allows max 40 requests/min and blocks 10 excess spam attempts");

// -------------------------------------------------------------
// FINAL SUMMARY
// -------------------------------------------------------------
console.log("\n==================================================================");
console.log(`TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
console.log("==================================================================\n");

if (failed > 0) {
  process.exit(1);
}
