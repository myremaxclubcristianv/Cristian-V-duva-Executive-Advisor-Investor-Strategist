"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation, useLocale, Locale } from "@/app/context/LocaleContext";
import { Globe, ArrowUpRight, X, Menu } from "lucide-react";

const languages: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ro", label: "RO" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "ar", label: "AR" },
];

export default function ExecutiveHeader() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const { locale, setLocale } = useLocale();
  const isRtl = locale === "ar";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.nav.about || "About", href: "/about" },
    { label: t.nav.ventures || "Ventures", href: "/ventures" },
    { label: locale === "ro" ? "Ecosistem" : locale === "fr" ? "Écosystème" : locale === "de" ? "Ökosystem" : locale === "ar" ? "المنظومة" : "Ecosystem", href: "/ecosystem" },
    { label: t.nav.media || "Media", href: "/media" },
    { label: t.nav.insights || "Insights", href: "/insights" },
    { label: t.nav.contact || "Contact", href: "/contact" },
  ];

  // Track scroll state for enhanced border/blur opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
    setLangMenuOpen(false);
  }, [pathname]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07090D]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/40"
          : "bg-[#07090D]/75 backdrop-blur-md border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 h-12 sm:h-13 flex items-center justify-between">
        
        {/* Apple-style Wordmark Identity */}
        <Link
          href="/"
          className="flex items-center gap-2 group tracking-tight transition-opacity hover:opacity-90 py-1"
          aria-label="Cristian Văduva Executive Home"
        >
          <span className="font-serif text-base sm:text-lg font-medium text-[#F5F4EF] tracking-[-0.01em]">
            Cristian Văduva
          </span>
          <span className="w-1 h-1 rounded-full bg-[#A97F60]" />
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#86868B] group-hover:text-[#93C8FF] transition-colors hidden xs:inline-block">
            Executive
          </span>
        </Link>

        {/* Desktop Minimal Navigation (Apple.com spacing & typography) */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-9"
          role="navigation"
          aria-label="Primary Navigation"
        >
          {navLinks.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-[12px] lg:text-[13px] tracking-normal transition-colors duration-200 ${
                  isActive
                    ? "text-[#F5F4EF] font-semibold"
                    : "text-[#86868B] hover:text-[#F5F4EF] font-normal"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Suite: Language Switcher & Subtle Pill CTA */}
        <div className="flex items-center gap-3">
          
          {/* Minimal Language Switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen((v) => !v)}
              aria-expanded={langMenuOpen}
              aria-label="Select Language"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-[#B8C2CF] hover:text-[#F5F4EF] rounded-full border border-white/[0.08] hover:border-white/[0.2] transition-colors"
            >
              <Globe className="w-3 h-3 text-[#A97F60]" />
              <span className="uppercase font-semibold">{locale}</span>
            </button>

            {langMenuOpen && (
              <div
                className={`absolute top-full mt-2 w-28 bg-[#0C1119] border border-white/[0.12] rounded-xl shadow-2xl p-1 z-50 backdrop-blur-xl ${
                  isRtl ? "left-0" : "right-0"
                }`}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLocale(l.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-mono flex items-center justify-between transition-colors ${
                      locale === l.code
                        ? "bg-[#93C8FF]/10 text-[#93C8FF] font-semibold"
                        : "text-[#B8C2CF] hover:bg-white/[0.06] hover:text-[#F5F4EF]"
                    }`}
                  >
                    <span>{l.label}</span>
                    {locale === l.code && <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Apple-style Discreet Pill CTA */}
          <Link
            href="/programare"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/[0.12] hover:border-white/[0.25] text-[#F5F4EF] font-sans text-xs font-medium tracking-tight transition-all duration-200"
          >
            <span>{t.nav.consultation || "Consultanță"}</span>
            <ArrowUpRight className="w-3 h-3 text-[#93C8FF]" />
          </Link>

          {/* Mobile Menu Hamburger (Minimal 2-bar icon) */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation drawer"
            className="md:hidden p-2 text-[#F5F4EF] hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Apple-Style Fullscreen Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-12 z-40 bg-[#07090D]/98 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-200 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-6 pt-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
              NAVIGAȚIE PRINCIPALĂ
            </span>

            <ul className="space-y-4">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block font-serif text-2xl sm:text-3xl tracking-tight transition-colors ${
                        isActive
                          ? "text-[#93C8FF] font-normal"
                          : "text-[#F5F4EF] hover:text-[#93C8FF]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Direct Consultation Link */}
            <div className="pt-6 border-t border-white/[0.08]">
              <Link
                href="/programare"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3.5 px-6 rounded-full bg-[#F5F4EF] text-[#07090D] font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-xl"
              >
                <span>{t.nav.consultation || "SOLICITĂ CONSULTANȚĂ (20 MIN)"}</span>
                <ArrowUpRight className="w-4 h-4 text-[#07090D]" />
              </Link>
            </div>
          </div>

          {/* Drawer Footer with Coordinates & Language Selector */}
          <div className="pt-8 border-t border-white/[0.08] space-y-4 font-mono text-xs text-[#86868B]">
            <div className="flex items-center justify-between">
              <span>LIMBĂ // LANGUAGE:</span>
              <div className="flex items-center gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    type="button"
                    onClick={() => {
                      setLocale(l.code);
                      setMobileOpen(false);
                    }}
                    className={`px-2 py-1 rounded text-[11px] ${
                      locale === l.code
                        ? "bg-[#93C8FF] text-[#07090D] font-bold"
                        : "text-[#B8C2CF] hover:text-white"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[11px] text-[#647082] flex justify-between">
              <span>CRISTIAN VĂDUVA</span>
              <span>BUCUREȘTI · MONACO · DUBAI</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
