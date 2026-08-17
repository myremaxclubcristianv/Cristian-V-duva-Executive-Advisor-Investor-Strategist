"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics/tracker";

export default function VisitorIntelligenceProvider() {
  const pathname = usePathname();

  // 1. Automatic page view tracking on route change
  useEffect(() => {
    trackEvent("PAGE_VIEW", { path: pathname });
  }, [pathname]);

  // 2. Delegated high-intent CTA click tracking without altering component JSX
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const text = (target.textContent || "").trim();

      // Detect WhatsApp
      if (href.includes("wa.me") || href.includes("whatsapp")) {
        trackEvent("WHATSAPP_CLICK", { href, label: text.slice(0, 50) });
        return;
      }

      // Detect Telegram
      if (href.includes("t.me") || href.includes("telegram")) {
        trackEvent("TELEGRAM_CLICK", { href, label: text.slice(0, 50) });
        return;
      }

      // Detect Email
      if (href.startsWith("mailto:")) {
        trackEvent("EMAIL_CLICK", { href, label: text.slice(0, 50) });
        return;
      }

      // Detect Jotform / Consultation forms
      if (href.includes("jotform") || href === "/contact") {
        trackEvent("CONSULTATION_REQUEST", { href, label: text.slice(0, 50) });
        return;
      }

      // Detect LinkedIn
      if (href.includes("linkedin.com")) {
        trackEvent("LINKEDIN_CLICK", { href });
        return;
      }

      // Detect YouTube
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
