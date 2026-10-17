import {
  VisitorSession,
  VisitorEvent,
  IntentLevel,
  CtaInteraction,
  FormInteraction,
} from "./types";

const MAX_SESSIONS = 500;
const sessions = new Map<string, VisitorSession>();
const recentEvents: VisitorEvent[] = [];
const ipRateLimits = new Map<string, { count: number; resetAt: number }>();
const commercialAlertTimers = new Map<string, number>();

export function getOrCreateSession(
  sessionId: string,
  event: Partial<VisitorEvent>,
  country: string,
  city: string
): VisitorSession {
  const existing = sessions.get(sessionId);
  const now = new Date().toISOString();

  if (existing) {
    existing.lastSeenAt = now;
    existing.lastPage = event.pagePath || existing.lastPage;

    if (event.pagePath && !existing.pagesVisited.includes(event.pagePath)) {
      existing.pagesVisited.push(event.pagePath);
      existing.pageCount = existing.pagesVisited.length;
    }

    existing.eventCount += 1;
    existing.latestAction = event.eventType;

    if (country && country !== "Unknown") existing.country = country;
    if (city && city !== "Unknown") existing.city = city;
    if (event.deviceType) existing.deviceType = event.deviceType;
    if (event.screenResolution) existing.screenResolution = event.screenResolution;
    if (event.operatingSystem) existing.operatingSystem = event.operatingSystem;
    if (event.browserName) existing.browserName = event.browserName;

    // Re-evaluate intent
    evaluateSessionIntent(existing);

    return existing;
  }

  // Create new session
  const cleanReferrer = event.referrer ? event.referrer.slice(0, 200) : "Direct";
  let referrerDomain = "Direct";
  try {
    if (event.referrer && event.referrer.startsWith("http")) {
      referrerDomain = new URL(event.referrer).hostname;
    }
  } catch {
    referrerDomain = cleanReferrer;
  }

  const newSession: VisitorSession = {
    id: sessionId,
    startedAt: now,
    lastSeenAt: now,
    landingPage: event.pagePath || "/",
    lastPage: event.pagePath || "/",
    pageCount: 1,
    pagesVisited: event.pagePath ? [event.pagePath] : ["/"],
    trafficSource: cleanReferrer,
    referrerDomain,
    utmSource: event.utmSource,
    utmMedium: event.utmMedium,
    utmCampaign: event.utmCampaign,
    utmContent: event.utmContent,
    utmTerm: event.utmTerm,
    deviceType: event.deviceType || "desktop",
    screenResolution: event.screenResolution,
    operatingSystem: event.operatingSystem,
    browserName: event.browserName,
    country: country || "Unknown",
    city: city || "Unknown",
    intentLevel: "LOW",
    latestAction: event.eventType || "PAGE_VIEW",
    eventCount: 1,
    isReturningVisitor: false,
    propertiesViewed: [],
    searchesUsed: [],
    filtersUsed: [],
    ctasClicked: [],
    formsStarted: [],
    formsSubmitted: [],
    commercialAlertsSent: [],
    newVisitorAlertSent: false,
    sessionSummarySent: false,
  };

  evaluateSessionIntent(newSession);

  // Maintain LRU size
  if (sessions.size >= MAX_SESSIONS) {
    const oldestKey = sessions.keys().next().value;
    if (oldestKey) sessions.delete(oldestKey);
  }

  sessions.set(sessionId, newSession);
  return newSession;
}

export function getSession(sessionId: string): VisitorSession | undefined {
  return sessions.get(sessionId);
}

export function evaluateSessionIntent(session: VisitorSession): IntentLevel {
  // 1. LEAD: Confirmed inquiry submitted
  if (session.formsSubmitted.length > 0) {
    session.intentLevel = "LEAD";
    return "LEAD";
  }

  // 2. HIGH: Direct contact click (WhatsApp/Phone/Email) OR form started OR multiple properties / gallery opened
  const hasContactClick = session.ctasClicked.some((c) =>
    ["WHATSAPP", "PHONE", "EMAIL", "CONSULTATION"].some((t) => c.type.toUpperCase().includes(t))
  );
  const hasFormStarted = session.formsStarted.length > 0;
  const hasGalleryOpened = session.propertiesViewed.some((p) => p.galleryOpened);
  const hasMultipleProperties = session.propertiesViewed.length >= 2;

  if (hasContactClick || hasFormStarted || hasGalleryOpened || hasMultipleProperties) {
    session.intentLevel = "HIGH";
    return "HIGH";
  }

  // 3. MEDIUM: Multiple pages (>= 3) OR 1 property viewed OR catalog search / filter used
  if (
    session.pageCount >= 3 ||
    session.propertiesViewed.length === 1 ||
    session.searchesUsed.length > 0 ||
    session.filtersUsed.length > 0
  ) {
    session.intentLevel = "MEDIUM";
    return "MEDIUM";
  }

  // 4. LOW: Initial short visit
  session.intentLevel = "LOW";
  return "LOW";
}

export function recordPropertyView(
  session: VisitorSession,
  slug: string,
  title: string,
  url: string
): boolean {
  if (!slug) return false;
  const now = new Date().toISOString();
  const existing = session.propertiesViewed.find((p) => p.slug === slug);

  if (existing) {
    existing.count += 1;
    existing.lastViewedAt = now;
  } else {
    session.propertiesViewed.push({
      slug,
      title: title || slug,
      url,
      count: 1,
      lastViewedAt: now,
    });
  }

  evaluateSessionIntent(session);
  return true;
}

export function recordGalleryInteraction(session: VisitorSession, propertySlug?: string): void {
  if (propertySlug) {
    const prop = session.propertiesViewed.find((p) => p.slug === propertySlug);
    if (prop) prop.galleryOpened = true;
  } else if (session.propertiesViewed.length > 0) {
    session.propertiesViewed[session.propertiesViewed.length - 1].galleryOpened = true;
  }
  evaluateSessionIntent(session);
}

export function recordCatalogSearch(session: VisitorSession, query: string): void {
  const sanitized = query.trim().slice(0, 50);
  if (!sanitized) return;
  if (!session.searchesUsed.includes(sanitized)) {
    if (session.searchesUsed.length < 10) {
      session.searchesUsed.push(sanitized);
    }
  }
  evaluateSessionIntent(session);
}

export function recordCatalogFilter(session: VisitorSession, filterValue: string): void {
  const sanitized = filterValue.trim().slice(0, 50);
  if (!sanitized) return;
  if (!session.filtersUsed.includes(sanitized)) {
    if (session.filtersUsed.length < 10) {
      session.filtersUsed.push(sanitized);
    }
  }
  evaluateSessionIntent(session);
}

export function recordCtaClick(session: VisitorSession, cta: CtaInteraction): void {
  session.ctasClicked.push({
    type: cta.type.slice(0, 30),
    label: cta.label.slice(0, 50),
    href: cta.href.slice(0, 150),
    timestamp: new Date().toISOString(),
  });
  evaluateSessionIntent(session);
}

export function recordFormInteraction(
  session: VisitorSession,
  interaction: FormInteraction
): void {
  if (interaction.status === "started") {
    session.formsStarted.push({
      formType: interaction.formType.slice(0, 40),
      timestamp: new Date().toISOString(),
      status: "started",
    });
  } else if (interaction.status === "submitted") {
    session.formsSubmitted.push({
      formType: interaction.formType.slice(0, 40),
      timestamp: new Date().toISOString(),
      status: "submitted",
      success: interaction.success ?? true,
    });
  }
  evaluateSessionIntent(session);
}

export function recordEvent(event: VisitorEvent) {
  if (recentEvents.length >= 500) {
    recentEvents.shift();
  }
  recentEvents.push(event);
}

export function getRecentSessions(): VisitorSession[] {
  return Array.from(sessions.values()).sort(
    (a, b) => new Date(b.lastSeenAt).getTime() - new Date(a.lastSeenAt).getTime()
  );
}

export function checkRateLimit(clientKey: string, maxPerMin = 40): boolean {
  const now = Date.now();
  const existing = ipRateLimits.get(clientKey);

  if (!existing || now > existing.resetAt) {
    ipRateLimits.set(clientKey, { count: 1, resetAt: now + 60000 });
    return true;
  }

  if (existing.count >= maxPerMin) {
    return false;
  }

  existing.count++;
  return true;
}

/**
 * Deduplication helper for commercial alerts
 * Prevents flooding Telegram if user clicks WhatsApp 5 times or flips gallery slides rapidly
 */
export function shouldSendCommercialAlert(
  session: VisitorSession,
  actionKey: string,
  cooldownMs = 90000 // 90 seconds per distinct action key
): boolean {
  const timerKey = `${session.id}:${actionKey}`;
  const now = Date.now();
  const lastSent = commercialAlertTimers.get(timerKey);

  if (lastSent && now - lastSent < cooldownMs) {
    return false; // Throttled
  }

  commercialAlertTimers.set(timerKey, now);

  if (!session.commercialAlertsSent.includes(actionKey)) {
    session.commercialAlertsSent.push(actionKey);
  }

  return true;
}

export function shouldSendNewVisitorAlert(session: VisitorSession): boolean {
  if (session.newVisitorAlertSent) return false;
  session.newVisitorAlertSent = true;
  return true;
}

export function shouldSendSessionSummary(session: VisitorSession): boolean {
  if (session.sessionSummarySent) return false;
  // Send summary only if session had meaningful interaction (intent >= MEDIUM or pageCount >= 2)
  if (session.intentLevel === "LOW" && session.pageCount < 2) {
    return false;
  }
  session.sessionSummarySent = true;
  return true;
}
