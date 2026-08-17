import { VisitorSession, VisitorEvent, IntentLevel, EventType } from "./types";

const MAX_SESSIONS = 200;
const sessions = new Map<string, VisitorSession>();
const recentEvents: VisitorEvent[] = [];
const ipRateLimits = new Map<string, { count: number; resetAt: number }>();

const HIGH_INTENT_EVENTS: EventType[] = [
  "CONSULTATION_REQUEST",
  "FORM_SUBMIT",
  "WHATSAPP_CLICK",
  "TELEGRAM_CLICK",
  "EMAIL_CLICK",
];

const MEDIUM_INTENT_EVENTS: EventType[] = [
  "PROPERTY_VIEW",
  "MARKET_VIEW",
  "NEWS_VIEW",
  "VIDEO_PLAY",
  "LINKEDIN_CLICK",
  "YOUTUBE_CLICK",
  "FORM_START",
  "CTA_CLICK",
];

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

    // Evaluate intent
    if (HIGH_INTENT_EVENTS.includes(event.eventType as EventType)) {
      existing.intentLevel = "HIGH_INTENT";
    } else if (existing.intentLevel !== "HIGH_INTENT") {
      if (MEDIUM_INTENT_EVENTS.includes(event.eventType as EventType) || existing.pageCount >= 3) {
        existing.intentLevel = "MEDIUM_INTENT";
      }
    }

    return existing;
  }

  // Create new session
  let initialIntent: IntentLevel = "LOW_INTENT";
  if (HIGH_INTENT_EVENTS.includes(event.eventType as EventType)) {
    initialIntent = "HIGH_INTENT";
  } else if (MEDIUM_INTENT_EVENTS.includes(event.eventType as EventType)) {
    initialIntent = "MEDIUM_INTENT";
  }

  const newSession: VisitorSession = {
    id: sessionId,
    startedAt: now,
    lastSeenAt: now,
    landingPage: event.pagePath || "/",
    lastPage: event.pagePath || "/",
    pageCount: 1,
    pagesVisited: event.pagePath ? [event.pagePath] : ["/"],
    trafficSource: event.referrer || "Direct",
    utmSource: event.utmSource,
    utmMedium: event.utmMedium,
    utmCampaign: event.utmCampaign,
    deviceType: event.deviceType || "desktop",
    country,
    city,
    intentLevel: initialIntent,
    latestAction: event.eventType,
    eventCount: 1,
  };

  // Limit memory ring buffer
  if (sessions.size >= MAX_SESSIONS) {
    const oldestKey = sessions.keys().next().value;
    if (oldestKey) sessions.delete(oldestKey);
  }

  sessions.set(sessionId, newSession);
  return newSession;
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

export function checkRateLimit(clientKey: string, maxPerMin = 30): boolean {
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

export function shouldSendLeadAlert(session: VisitorSession, cooldownMs = 600000): boolean {
  const now = Date.now();
  if (session.intentLevel !== "HIGH_INTENT") return false;
  if (session.lastAlertSentAt && now - session.lastAlertSentAt < cooldownMs) {
    return false; // Throttled
  }
  session.lastAlertSentAt = now;
  return true;
}
