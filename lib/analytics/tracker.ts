"use client";

import { EventType } from "./types";

const CONSENT_STORAGE_KEY = "aix_cookie_consent_v1";
const SESSION_STORAGE_KEY = "aix_sid";

export function isAnalyticsPermitted(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return Boolean(parsed.analytics);
  } catch {
    return false;
  }
}

export function getOrCreateClientSessionId(): string {
  if (typeof window === "undefined") return "";
  try {
    let sid = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!sid) {
      sid = `sid_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      sessionStorage.setItem(SESSION_STORAGE_KEY, sid);
    }
    return sid;
  } catch {
    return `sid_temp_${Date.now()}`;
  }
}

export function getDeviceType(): "mobile" | "tablet" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

export function trackEvent(
  eventType: EventType,
  metadata?: Record<string, string | number | boolean>
) {
  if (!isAnalyticsPermitted()) {
    // Strictly adhere to GDPR - zero tracking before consent or if rejected
    return;
  }

  try {
    const sessionId = getOrCreateClientSessionId();
    const urlParams = new URLSearchParams(window.location.search);

    const payload = {
      sessionId,
      eventType,
      pagePath: window.location.pathname,
      pageTitle: document.title,
      referrer: document.referrer || undefined,
      utmSource: urlParams.get("utm_source") || undefined,
      utmMedium: urlParams.get("utm_medium") || undefined,
      utmCampaign: urlParams.get("utm_campaign") || undefined,
      deviceType: getDeviceType(),
      metadata,
    };

    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });

    if (navigator.sendBeacon) {
      navigator.sendBeacon("/api/events", blob);
    } else {
      fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    }
  } catch {
    // Fail silently in browser, zero runtime impact
  }
}
