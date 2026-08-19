"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics/tracker";

export default function VisitorIntelligenceProvider() {
  const pathname = usePathname();
  const lastTrackedPath = useRef<string | null>(null);

  // 1. First-party session visit tracking
  useEffect(() => {
    if (lastTrackedPath.current === pathname) return;
    lastTrackedPath.current = pathname;

    // Send visit notification to server-side /api/visits
    fetch("/api/visits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: pathname,
        referrer: typeof document !== "undefined" ? document.referrer : "",
      }),
    }).catch(() => {
      // Fail silently in browser
    });

    // In-memory telemetry
    trackEvent("PAGE_VIEW", { path: pathname });
  }, [pathname]);

  // 2. Delegated CTA click tracking
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const text = (target.textContent || "").trim();

      if (href.includes("wa.me") || href.includes("whatsapp")) {
        trackEvent("WHATSAPP_CLICK", { href, label: text.slice(0, 50) });
        return;
      }
      if (href.includes("t.me") || href.includes("telegram")) {
        trackEvent("TELEGRAM_CLICK", { href, label: text.slice(0, 50) });
        return;
      }
      if (href.startsWith("mailto:")) {
        trackEvent("EMAIL_CLICK", { href, label: text.slice(0, 50) });
        return;
      }
      if (href.includes("jotform") || href === "/contact") {
        trackEvent("CONSULTATION_REQUEST", { href, label: text.slice(0, 50) });
        return;
      }
      if (href.includes("linkedin.com")) {
        trackEvent("LINKEDIN_CLICK", { href });
        return;
      }
      if (href.includes("youtube.com") || href.includes("youtu.be")) {
        trackEvent("YOUTUBE_CLICK", { href });
        return;
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
