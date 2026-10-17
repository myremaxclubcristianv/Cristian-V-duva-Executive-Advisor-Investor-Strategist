"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent, sendSessionSummaryBeacon, getScreenResolution } from "@/lib/analytics/tracker";

export default function VisitorIntelligenceProvider() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);
  const formStartedRef = useRef<boolean>(false);
  const searchDebounceTimer = useRef<NodeJS.Timeout | null>(null);

  // 1. First-party session visit initialization & page view tracking
  useEffect(() => {
    if (lastTrackedPath.current === pathname) return;
    const isInitialLanding = lastTrackedPath.current === null;
    lastTrackedPath.current = pathname;

    // Use a 4500ms deferral on initial landing to protect mobile LCP/FCP, and faster on client-side navigation
    const delay = isInitialLanding ? 4500 : 800;

    const timer = setTimeout(() => {
      const urlParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;

      // Call /api/visits on initial landing
      if (isInitialLanding) {
        fetch("/api/visits", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            path: pathname,
            referrer: typeof document !== "undefined" ? document.referrer : "",
            pageTitle: typeof document !== "undefined" ? document.title : "",
            utmSource: urlParams?.get("utm_source") || undefined,
            utmMedium: urlParams?.get("utm_medium") || undefined,
            utmCampaign: urlParams?.get("utm_campaign") || undefined,
            utmContent: urlParams?.get("utm_content") || undefined,
            utmTerm: urlParams?.get("utm_term") || undefined,
            screenResolution: getScreenResolution(),
          }),
        }).catch(() => {
          // Fail silently in browser
        });
      }

      // Track domain-level events
      if (pathname.startsWith("/real-estate/properties/")) {
        const slug = pathname.split("/real-estate/properties/")[1]?.split("?")[0] || "";
        trackEvent("property_viewed", {
          propertySlug: slug,
          propertyTitle: typeof document !== "undefined" ? document.title : slug,
        });
      } else {
        trackEvent("page_view", { path: pathname });
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [pathname]);

  // 2. Delegated commercial interaction click tracking
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a, button, [role='button']");
      if (!target) return;

      const href = (target.getAttribute("href") || "").trim();
      const text = (target.textContent || "").trim().slice(0, 50);
      const ariaLabel = (target.getAttribute("aria-label") || "").trim().slice(0, 50);
      const label = ariaLabel || text || href;

      // A. WhatsApp Direct Concierge
      if (href.includes("wa.me") || href.includes("whatsapp")) {
        trackEvent("whatsapp_clicked", { href, label });
        return;
      }

      // B. Telephone Call
      if (href.startsWith("tel:")) {
        trackEvent("phone_clicked", { href, label: text || href.replace("tel:", "") });
        return;
      }

      // C. Email Dispatch
      if (href.startsWith("mailto:")) {
        trackEvent("email_clicked", { href, label: text || href.replace("mailto:", "") });
        return;
      }

      // D. Direct Telegram Channel
      if (href.includes("t.me") || href.includes("telegram")) {
        trackEvent("telegram_clicked", { href, label });
        return;
      }

      // E. Consultation / Private Advisory Intent
      if (href.includes("jotform") || href === "/contact" || href.startsWith("/contact?")) {
        trackEvent("contact_intent", { href, label: text || "Consultation Request" });
        return;
      }

      // F. Gallery / Lightbox / Visual Monograph Exploration
      const targetClasses = (target.getAttribute("class") || "").toLowerCase();
      if (
        label.toLowerCase().includes("galerie") ||
        label.toLowerCase().includes("gallery") ||
        label.toLowerCase().includes("view all") ||
        label.toLowerCase().includes("foto") ||
        targetClasses.includes("gallery")
      ) {
        trackEvent("gallery_interaction", { label, href: href || pathname });
        return;
      }

      // G. Property Link Click
      if (href.startsWith("/real-estate/properties/") && href !== "/real-estate/properties") {
        const slug = href.split("/real-estate/properties/")[1]?.split("?")[0] || "";
        trackEvent("property_viewed", { propertySlug: slug, propertyTitle: text || slug, href });
        return;
      }

      // H. External Social / Press Links
      if (href.includes("linkedin.com")) {
        trackEvent("linkedin_clicked", { href, label: "LinkedIn Profile" });
        return;
      }
      if (href.includes("youtube.com") || href.includes("youtu.be")) {
        trackEvent("youtube_clicked", { href, label: "YouTube Channel" });
        return;
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [pathname]);

  // 3. Form Focus & Start Detection
  useEffect(() => {
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT") {
        const form = target.closest("form");
        if (form && !formStartedRef.current) {
          formStartedRef.current = true;
          const formId = form.getAttribute("id") || form.getAttribute("name") || pathname;
          trackEvent("form_started", { formType: formId });
        }
      }
    };

    document.addEventListener("focusin", handleFocusIn, { capture: true });
    return () => document.removeEventListener("focusin", handleFocusIn, { capture: true });
  }, [pathname]);

  // 4. Catalog Search & Filter Input Detection (Debounced)
  useEffect(() => {
    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (!target || target.type !== "text" && target.type !== "search") return;

      const placeholder = (target.placeholder || "").toLowerCase();
      const isCatalogSearch =
        pathname.includes("/real-estate/properties") ||
        placeholder.includes("caut") ||
        placeholder.includes("search") ||
        placeholder.includes("filtru");

      if (isCatalogSearch) {
        const query = target.value.trim();
        if (query.length >= 3) {
          if (searchDebounceTimer.current) clearTimeout(searchDebounceTimer.current);
          searchDebounceTimer.current = setTimeout(() => {
            trackEvent("catalog_search", { searchQuery: query.slice(0, 40) });
          }, 1500);
        }
      }
    };

    const handleChange = (e: Event) => {
      const target = e.target as HTMLSelectElement;
      if (!target || target.tagName !== "SELECT") return;
      const isCatalogSelect = pathname.includes("/real-estate/properties");
      if (isCatalogSelect && target.value) {
        trackEvent("catalog_filter_used", { filterValue: target.value.slice(0, 40) });
      }
    };

    document.addEventListener("input", handleInput, { capture: true });
    document.addEventListener("change", handleChange, { capture: true });
    return () => {
      document.removeEventListener("input", handleInput, { capture: true });
      document.removeEventListener("change", handleChange, { capture: true });
      if (searchDebounceTimer.current) clearTimeout(searchDebounceTimer.current);
    };
  }, [pathname]);

  // 5. Session Summary Beacon on Exit or Inactivity
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (typeof document !== "undefined" && document.visibilityState === "hidden") {
        sendSessionSummaryBeacon();
      }
    };

    const handlePageHide = () => {
      sendSessionSummaryBeacon();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageHide);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageHide);
    };
  }, []);

  return null;
}
