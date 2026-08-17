export type EventType =
  | "PAGE_VIEW"
  | "SESSION_START"
  | "CTA_CLICK"
  | "CONTACT_CLICK"
  | "WHATSAPP_CLICK"
  | "TELEGRAM_CLICK"
  | "EMAIL_CLICK"
  | "LINKEDIN_CLICK"
  | "YOUTUBE_CLICK"
  | "CONSULTATION_REQUEST"
  | "FORM_START"
  | "FORM_SUBMIT"
  | "PROPERTY_VIEW"
  | "MARKET_VIEW"
  | "NEWS_VIEW"
  | "VIDEO_PLAY";

export type IntentLevel = "LOW_INTENT" | "MEDIUM_INTENT" | "HIGH_INTENT";

export interface VisitorEvent {
  id: string;
  eventType: EventType;
  pagePath: string;
  pageTitle: string;
  timestamp: string;
  sessionId: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  deviceType: "mobile" | "tablet" | "desktop";
  metadata?: Record<string, string | number | boolean>;
}

export interface VisitorSession {
  id: string;
  startedAt: string;
  lastSeenAt: string;
  landingPage: string;
  lastPage: string;
  pageCount: number;
  pagesVisited: string[];
  trafficSource: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  deviceType: "mobile" | "tablet" | "desktop";
  country: string;
  city: string;
  intentLevel: IntentLevel;
  latestAction?: string;
  eventCount: number;
  lastAlertSentAt?: number;
}
