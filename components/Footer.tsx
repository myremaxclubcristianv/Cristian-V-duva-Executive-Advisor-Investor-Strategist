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
    <footer className="relative z-10 py-16 md:py-24 bg-surface-primary/95 backdrop-blur-md border-t border-surface-secondary/70 text-text-secondary text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 space-y-16">
        {/* Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Column 1: Brand & Positioning */}
          <div className="space-y-4 md:col-span-1">
            <span className="font-display text-text-primary text-xl tracking-tight block">
              Cristian Văduva
            </span>
            <p className="font-mono text-[10px] sm:text-[11px] text-accent uppercase tracking-widest leading-relaxed">
              Executive Advisor · Investor · Strategist
            </p>
            <p className="font-sans text-xs text-text-secondary/80 font-light leading-relaxed">
              Bespoke advisory for ultra-prime real estate acquisitions, strategic capital allocation, and executive leadership across European markets.
            </p>
            <div className="pt-2 font-mono text-[10px] text-text-secondary/60 uppercase tracking-widest">
              Bucharest · Monaco · Europe
            </div>
          </div>

          {/* Column 2: Navigation & Hubs */}
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent block font-semibold">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 font-mono text-xs text-text-secondary/90 uppercase tracking-wider">
              <li><Link href="/about" className="hover:text-accent transition-quick">About & Profile</Link></li>
              <li><Link href="/real-estate" className="hover:text-accent transition-quick">Real Estate Hub</Link></li>
              <li><Link href="/real-estate/properties" className="hover:text-accent transition-quick">Selected Works</Link></li>
              <li><Link href="/real-estate/market" className="hover:text-accent transition-quick">Market Intelligence</Link></li>
              <li><Link href="/real-estate/news" className="hover:text-accent transition-quick">Surveillance Feed</Link></li>
              <li><Link href="/tv" className="hover:text-accent transition-quick">Broadcast Lounge</Link></li>
              <li><Link href="/insights" className="hover:text-accent transition-quick">Executive Journal</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-quick">The Private Desk</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Compliance */}
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent block font-semibold">
              LEGAL & COMPLIANCE
            </span>
            <ul className="space-y-2.5 font-mono text-xs text-text-secondary/90 uppercase tracking-wider">
              <li><Link href="/legal" className="hover:text-accent transition-quick">Legal Overview</Link></li>
              <li><Link href="/privacy" className="hover:text-accent transition-quick">Privacy Policy</Link></li>
              <li><Link href="/gdpr" className="hover:text-accent transition-quick">GDPR Rights</Link></li>
              <li><Link href="/cookies" className="hover:text-accent transition-quick">Cookie Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-accent transition-quick">Terms of Use</Link></li>
              <li><Link href="/disclaimer" className="hover:text-accent transition-quick">Disclaimer</Link></li>
              <li><Link href="/data-provenance" className="hover:text-accent transition-quick">Data Provenance</Link></li>
              <li><Link href="/editorial-policy" className="hover:text-accent transition-quick">Editorial Policy</Link></li>
              <li><Link href="/accessibility" className="hover:text-accent transition-quick">Accessibility</Link></li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenCookiePreferences}
                  className="hover:text-accent transition-quick uppercase tracking-wider text-accent/90 underline text-left"
                >
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Channels & Inquiries */}
          <div className="space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent block font-semibold">
              VERIFIED CHANNELS
            </span>
            <ul className="space-y-2.5 font-mono text-xs text-text-secondary/90 uppercase tracking-wider">
              {contactInfo.socials.map((s) => (
                <li key={s.platform}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-quick"
                  >
                    {s.displayName}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-accent underline hover:text-text-primary transition-quick block normal-case font-mono"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Regulatory Footnote */}
        <div className="pt-8 border-t border-surface-secondary/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-text-secondary/50">
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
