export type EventType =
  // Standardized kebab/snake & uppercase events
  | "session_started"
  | "SESSION_START"
  | "page_view"
  | "PAGE_VIEW"
  | "property_viewed"
  | "PROPERTY_VIEW"
  | "gallery_interaction"
  | "GALLERY_INTERACTION"
  | "catalog_search"
  | "CATALOG_SEARCH"
  | "catalog_filter_used"
  | "CATALOG_FILTER_USED"
  | "cta_clicked"
  | "CTA_CLICK"
  | "contact_intent"
  | "CONTACT_CLICK"
  | "phone_clicked"
  | "PHONE_CLICK"
  | "whatsapp_clicked"
  | "WHATSAPP_CLICK"
  | "telegram_clicked"
  | "TELEGRAM_CLICK"
  | "email_clicked"
  | "EMAIL_CLICK"
  | "linkedin_clicked"
  | "LINKEDIN_CLICK"
  | "youtube_clicked"
  | "YOUTUBE_CLICK"
  | "consultation_requested"
  | "CONSULTATION_REQUEST"
  | "form_started"
  | "FORM_START"
  | "form_submitted"
  | "FORM_SUBMIT"
  | "external_link_clicked"
  | "session_summary"
  | "SESSION_SUMMARY"
  | "MARKET_VIEW"
  | "NEWS_VIEW"
  | "VIDEO_PLAY";

export type IntentLevel =
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "LEAD"
  | "LOW_INTENT"
  | "MEDIUM_INTENT"
  | "HIGH_INTENT";

export interface PropertyInteraction {
  slug: string;
  title: string;
  url: string;
  count: number;
  galleryOpened?: boolean;
  lastViewedAt: string;
}

export interface CtaInteraction {
  type: string;
  label: string;
  href: string;
  timestamp?: string;
}

export interface FormInteraction {
  formType: string;
  timestamp?: string;
  status: "started" | "submitted";
  success?: boolean;
}

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
  utmContent?: string;
  utmTerm?: string;
  deviceType: "mobile" | "tablet" | "desktop";
  screenResolution?: string;
  operatingSystem?: string;
  browserName?: string;
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
  referrerDomain?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  deviceType: "mobile" | "tablet" | "desktop";
  screenResolution?: string;
  operatingSystem?: string;
  browserName?: string;
  country: string;
  city: string;
  intentLevel: IntentLevel;
  latestAction?: string;
  eventCount: number;
  lastAlertSentAt?: number;
  
  // Enriched tracking state
  isReturningVisitor?: boolean;
  propertiesViewed: PropertyInteraction[];
  searchesUsed: string[];
  filtersUsed: string[];
  ctasClicked: CtaInteraction[];
  formsStarted: FormInteraction[];
  formsSubmitted: FormInteraction[];
  
  // Deduplication & alert tracking
  newVisitorAlertSent?: boolean;
  commercialAlertsSent: string[];
  sessionSummarySent?: boolean;
}
