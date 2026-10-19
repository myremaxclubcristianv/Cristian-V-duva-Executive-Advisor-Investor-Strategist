// ExecutiveHeader – Apple × Bloomberg × Luxury editorial redesign
"use client";

import React, { useState, useEffect, useRef } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// Color palette – Apple/Bloomberg/Luxury editorial
const COLORS = {
  // Core palette
  white: "#FFFFFF",
  // Main navigation background (ultra‑dark navy) with subtle transparency
  navyMain: "rgba(8, 15, 26, 0.92)",
  // Ticker background, ultra‑dark navy with higher opacity
  navyTicker: "rgba(4, 8, 15, 0.97)",
  // Dropdown and mobile drawer background (ultra‑dark navy)
  navyDropdown: "#0B1421",
  // Soft white for primary text (links, logo) with opacity
  softWhite: "rgba(255, 255, 255, 0.92)",
  // Muted secondary text (blue‑gray)
  mutedGray: "#AAB6C5",
  // Champagne gold for accents
  gold: "#C6A15B",
  // Border colour – very subtle white
  border: "rgba(255,255,255,0.10)",
  // Deep ink used for hamburger icon
  deepInk: "#19171D",
};

// --- Ticker ---------------------------------------------------------------
const TICKER_MESSAGES = [
  "EXECUTIVE STRATEGY",
  "BUSINESS & INVESTMENT PERSPECTIVES",
  "ENTREPRENEURIAL VENTURES",
  "PRIVATE CONSULTATION",
  "CRISTIAN VĂDUVA — EXECUTIVE ADVISOR",
];

// --- Navigation -----------------------------------------------------------
const NAV_ITEMS = [
  {
    label: "About",
    href: "/about",
    subItems: [
      { label: "Profile", href: "/about", description: "Executive overview and biography." },
      { label: "Philosophy", href: "/about#philosophy", description: "Investment philosophy and approach." },
    ],
  },
  {
    label: "Insights",
    subItems: [
      { label: "Articles", href: "/insights", description: "Thought leadership and market analysis." },
      { label: "Media", href: "/media", description: "Interviews, podcasts, and video content." },
      { label: "Videos", href: "/tv", description: "Video series and presentations." },
    ],
  },
  {
    label: "Real Estate",
    subItems: [
      { label: "Market", href: "/real-estate/market", description: "Current market trends and data." },
      { label: "Properties", href: "/real-estate/properties", description: "Selected premium assets." },
    ],
  },
  {
    label: "Ventures",
    href: "/ventures",
    subItems: [
      { label: "Portfolio", href: "/ventures", description: "Strategic venture initiatives." },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const DROPDOWN_INTRO: Record<string, string> = {
  About: "Learn about Cristian Văduva and his advisory services.",
  Insights: "Explore analysis, media and video content.",
  "Real Estate": "Insights into premium real estate investments.",
  Ventures: "Strategic venture initiatives.",
};


export default function ExecutiveHeader() {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on scroll – prevents sticky open panels while moving page
  useEffect(() => {
    const onScroll = () => setActive(null);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reset on route change – close mobile drawer & dropdowns
  useEffect(() => {
    setMobileOpen(false);
    setActive(null);
  }, [pathname]);

  // Click‑outside handling for dropdowns & mobile drawer
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActive(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Escape key to close menus
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Hover handling – keep dropdown open while moving between trigger and panel
  const handleMouseEnter = (label: string) => setActive(label);
  const handleMouseLeave = (e: React.MouseEvent) => {
    const related = e.relatedTarget as HTMLElement | null;
    if (related && headerRef.current?.contains(related)) return;
    setActive(null);
  };

  // Mobile submenu toggle helper
  const toggleSubMenu = (label: string) => {
    setActive((prev) => (prev === label ? null : label));
  };

  return (
    <header ref={headerRef} className="header-wrapper">
      {/* Layer A – Continuous ticker */}
      <div className="ticker" aria-label="Information ticker">
        <div className="ticker-inner">
          {[...TICKER_MESSAGES, ...TICKER_MESSAGES].map((msg, i) => (
            <span key={i} className="ticker-item">
              {msg}
            </span>
          ))}
        </div>
      </div>

      {/* Layer B – Navigation */}
      <div className="nav-bar">
        {/* Wordmark */}
        <div className="wordmark">
          <Link href="/" className="brand-primary" aria-label="Home">
            EXECUTIVE
          </Link>
          <span className="brand-secondary">CRISTIAN VĂDUVA</span>
        </div>
          
        {/* Desktop navigation */}
        <nav className="nav-desktop" role="navigation" aria-label="Primary navigation">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.label}
                className="nav-item"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href ?? "#"}
                  className={`nav-link ${active === item.label ? "active" : ""}`}
                >
                  {item.label}
                </Link>
                {item.subItems && active === item.label && (
                  <div
                    className="dropdown-panel"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="dropdown-header">
                      <span className="dropdown-eyebrow">{item.label.toUpperCase()}</span>
                      <h3 className="dropdown-title">{item.label}</h3>
                      {DROPDOWN_INTRO[item.label] && (
                        <p className="dropdown-intro">{DROPDOWN_INTRO[item.label]}</p>
                      )}
                    </div>
                    <ul className="dropdown-list">
                      {item.subItems.map((sub) => (
                        <li key={sub.label} className="dropdown-item">
                          <Link href={sub.href} className="dropdown-link">
                            {sub.label}
                          </Link>
                          {sub.description && (
                            <p className="dropdown-desc">{sub.description}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
            {/* Consultation CTA */}
            <li className="nav-item cta-item">
              <Link href="/contact" className="cta-button">
                Consultation
              </Link>
            </li>
          </ul>
        </nav>
          <div className="language-switcher-desktop"><LanguageSwitcher /></div>

        {/* Mobile hamburger */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-icon" />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">
            ✕
          </button>
          <ul className="mobile-nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="mobile-nav-item">
                <div className="mobile-nav-header" onClick={() => item.subItems && toggleSubMenu(item.label)}>
                  <Link href={item.href ?? "#"} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                  {item.subItems && (
                    <span className="mobile-sub-toggle">{active === item.label ? "▴" : "▾"}</span>
                  )}
                </div>
                {item.subItems && active === item.label && (
                  <ul className="mobile-sub-list">
                    {item.subItems.map((sub) => (
                      <li key={sub.label} className="mobile-sub-item">
                        <Link href={sub.href} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="mobile-nav-item cta-mobile">
              <Link href="/contact" className="cta-button-mobile" onClick={() => setMobileOpen(false)}>
                Consultation
              </Link>
            </li>
            {/* Language Switcher in mobile drawer */}
            <li className="mobile-nav-item language-switcher-mobile" style={{ marginTop: '1rem' }}>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      )}

      {/* Scoped CSS */}
      <style jsx>{`
        .header-wrapper { width: 100%; font-family: 'Inter', sans-serif; background: ${COLORS.navyMain}; box-shadow: 0 2px 6px rgba(0,0,0,0.05); }
        .ticker { background: ${COLORS.navyTicker}; color: ${COLORS.white}; overflow: hidden; white-space: nowrap; font-size: 0.85rem; line-height: 1.5; height: 2rem; display: flex; align-items: center; z-index: 1000; }
        .ticker-inner { display: inline-block; padding-left: 100%; animation: ticker-scroll 30s linear infinite; }
        .ticker-item { display: inline-block; margin-right: 3rem; }
        @keyframes ticker-scroll { from { transform: translateX(0%); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .ticker-inner { animation: none; } }
        .nav-bar { display: flex; align-items: center; justify-content: space-between; background: ${COLORS.navyMain}; padding: 0.75rem 1.5rem; border-bottom: 1px solid ${COLORS.border}; position: sticky; top: 0; z-index: 1000; }
        .wordmark { display: flex; flex-direction: column; line-height: 1; }
        .brand-primary { font-family: 'Georgia', serif; font-size: 1.25rem; font-weight: 600; color: ${COLORS.white}; text-decoration: none; letter-spacing: -0.5px; }
        .brand-secondary { font-size: 0.75rem; color: ${COLORS.white}; margin-top: 2px; }
        .nav-desktop { flex: 1; margin-left: 2rem; }
        .nav-list { display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0; align-items: center; }
        .nav-item { position: relative; }
        .nav-link { text-decoration: none; font-weight: 500; color: ${COLORS.softWhite}; font-size: 0.95rem; transition: color 0.2s; }
        .nav-link:hover, .nav-link.active { color: ${COLORS.gold}; }
        .cta-item {}
        .language-switcher-desktop { position: absolute; right: 1.5rem; top: 50%; transform: translateY(-50%); display: flex; align-items: center; z-index: 20; }
        .cta-button:hover { background: ${COLORS.gold}; color: ${COLORS.white}; }
.lang-toggle { background: none; border: none; color: ${COLORS.white}; cursor: pointer; font-size: 0.95rem; }
.lang-toggle:hover { color: ${COLORS.gold}; }
        .dropdown-panel { position: absolute; top: 100%; left: 0; width: 280px; background: ${COLORS.navyDropdown}; border: 1px solid ${COLORS.border}; box-shadow: 0 4px 12px rgba(0,0,0,0.2); padding: 1rem; z-index: 10; }
        .dropdown-header { margin-bottom: 0.75rem; }
        .dropdown-eyebrow { display: block; font-size: 0.65rem; color: ${COLORS.mutedGray}; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 0.25rem; }
        .dropdown-title { margin: 0; font-size: 1.1rem; color: ${COLORS.white}; }
        .dropdown-intro { margin: 0.25rem 0 0; font-size: 0.85rem; color: ${COLORS.mutedGray}; }
        .dropdown-list { list-style: none; margin: 0; padding: 0; }
        .dropdown-item { margin-bottom: 0.6rem; }
        .dropdown-link { text-decoration: none; font-weight: 500; color: ${COLORS.white}; font-size: 0.9rem; transition: color 0.2s; }
        .dropdown-link:hover { color: ${COLORS.gold}; }
        .dropdown-desc { margin: 0.2rem 0 0; font-size: 0.78rem; color: ${COLORS.mutedGray}; }
        .mobile-toggle { display: none; background: none; border: none; cursor: pointer; }
        .hamburger-icon { width: 24px; height: 2px; background: ${COLORS.deepInk}; position: relative; }
        .hamburger-icon::before, .hamburger-icon::after { content: ''; width: 24px; height: 2px; background: ${COLORS.deepInk}; position: absolute; left: 0; }
        .hamburger-icon::before { top: -8px; }
        .hamburger-icon::after { top: 8px; }
        .mobile-drawer { position: fixed; top: 0; right: 0; width: 85%; height: 100vh; background: ${COLORS.navyMain}; box-shadow: -2px 0 8px rgba(0,0,0,0.12); padding: 1.5rem; overflow-y: auto; z-index: 2000; }
        .mobile-close { background: none; border: none; font-size: 1.5rem; position: absolute; top: 1rem; right: 1rem; cursor: pointer; }
        .mobile-nav-list { list-style: none; padding: 0; margin-top: 3rem; }
        .mobile-nav-item { margin-bottom: 1rem; }
        .mobile-nav-header { display: flex; justify-content: space-between; align-items: center; }
        .mobile-nav-link { text-decoration: none; font-size: 1.1rem; color: ${COLORS.softWhite}; font-weight: 500; }
        .mobile-sub-toggle { font-size: 0.9rem; color: ${COLORS.mutedGray}; }
        .mobile-sub-list { list-style: none; padding-left: 1rem; margin-top: 0.5rem; }
        .mobile-sub-link { text-decoration: none; font-size: 0.95rem; color: ${COLORS.mutedGray}; }
        .cta-mobile { margin-top: 2rem; }
        .cta-button-mobile { background: ${COLORS.navyMain}; color: ${COLORS.white}; border: 1px solid ${COLORS.border}; padding: 0.5rem 1rem; border-radius: 4px; text-decoration: none; font-weight: 600; display: inline-block; }
        @media (max-width: 768px) { .nav-desktop { display: none; } .mobile-toggle { display: block; } }
      `}</style>
    </header>
  );
}
