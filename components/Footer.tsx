"use client";

import Link from "next/link";
import { contactInfo } from "@/lib/content/contact";

export default function Footer() {
  const handleOpenCookiePreferences = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-cookie-preferences"));
    }
  };

  return (
    <footer className="relative z-10 py-12 sm:py-16 md:py-24 bg-[#080808] border-t border-white/10 text-text-secondary text-sm">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Multi-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-3.5 sm:col-span-2 md:col-span-1">
            <span className="font-display text-text-primary text-xl tracking-tight block">
              Cristian Văduva
            </span>
            <p className="font-mono text-[10px] sm:text-[11px] text-accent uppercase tracking-widest leading-relaxed font-medium">
              Executive Advisor · Investor · Strategist
            </p>
            <p className="font-sans text-xs text-text-secondary/80 font-light leading-relaxed max-w-sm">
              Bespoke advisory for ultra-prime real estate acquisitions, strategic capital allocation, and executive leadership across European markets.
            </p>
            <div className="pt-1 font-mono text-[10px] text-text-secondary/60 uppercase tracking-widest">
              Bucharest · Monaco · Europe
            </div>
          </div>

          {/* Column 2: Navigation & Hubs */}
          <div className="space-y-3.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent block font-semibold">
              NAVIGATION
            </span>
            <ul className="space-y-2 font-mono text-xs text-text-secondary/90 uppercase tracking-wider">
              <li><Link href="/about" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">About & Profile</Link></li>
              <li><Link href="/real-estate" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Real Estate Hub</Link></li>
              <li><Link href="/real-estate/properties" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Selected Works</Link></li>
              <li><Link href="/real-estate/market" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Market Intelligence</Link></li>
              <li><Link href="/real-estate/news" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Surveillance Feed</Link></li>
              <li><Link href="/tv" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Broadcast Lounge</Link></li>
              <li><Link href="/insights" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Executive Journal</Link></li>
              <li><Link href="/contact" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">The Private Desk</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Compliance */}
          <div className="space-y-3.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent block font-semibold">
              LEGAL & COMPLIANCE
            </span>
            <ul className="space-y-2 font-mono text-xs text-text-secondary/90 uppercase tracking-wider">
              <li><Link href="/legal" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Legal Overview</Link></li>
              <li><Link href="/privacy" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Privacy Policy</Link></li>
              <li><Link href="/gdpr" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">GDPR Rights</Link></li>
              <li><Link href="/cookies" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Cookie Policy</Link></li>
              <li><Link href="/terms-of-use" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Disclaimer</Link></li>
              <li><Link href="/data-provenance" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Data Provenance</Link></li>
              <li><Link href="/editorial-policy" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Editorial Policy</Link></li>
              <li><Link href="/accessibility" className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center">Accessibility</Link></li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenCookiePreferences}
                  className="py-1 hover:text-accent transition-quick uppercase tracking-wider text-accent/90 underline text-left block min-h-[36px] flex items-center"
                >
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Channels */}
          <div className="space-y-3.5">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent block font-semibold">
              VERIFIED CHANNELS
            </span>
            <ul className="space-y-2 font-mono text-xs text-text-secondary/90 uppercase tracking-wider">
              {contactInfo.socials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1 block hover:text-accent transition-quick touch-active min-h-[36px] flex items-center"
                  >
                    {s.displayName}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-accent underline hover:text-text-primary transition-quick block normal-case font-mono break-all py-1 min-h-[36px] flex items-center"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Regulatory Footnote */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] font-mono uppercase tracking-[0.2em] text-text-secondary/50">
          <div>
            © {new Date().getFullYear()} Cristian Văduva. All Rights Reserved.
          </div>
          <div className="text-center sm:text-right">
            Regulation (EU) 2016/679 · GDPR Compliant Architecture
          </div>
        </div>
      </div>
    </footer>
  );
}
