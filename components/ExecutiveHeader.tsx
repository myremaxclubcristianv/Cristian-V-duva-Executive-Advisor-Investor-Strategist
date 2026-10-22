"use client";

import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/context/LocaleContext";
import { ArrowUpRight, X, Menu, ChevronRight, ArrowRight } from "lucide-react";

const emptySubscribe = () => () => {};

export default function ExecutiveHeader() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile drawer when pathname changes without an effect
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (mobileOpen) {
      setMobileOpen(false);
    }
  }

  const headerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);

  // Track scroll state for enhanced border/blur opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open/Close toggle with focus handling
  const handleOpen = useCallback(() => {
    if (typeof document !== "undefined") {
      lastActiveElementRef.current = document.activeElement as HTMLElement;
    }
    setMobileOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setMobileOpen(false);
    if (lastActiveElementRef.current) {
      lastActiveElementRef.current.focus();
    } else if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, []);

  // Escape key listener & focus trap
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Initial focus on close button
    const timer = setTimeout(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    }, 50);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [mobileOpen, handleClose]);

  // Lock body scroll reliably on mobile devices (iOS Safari compatible)
  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      const originalOverflow = document.body.style.overflow;
      const originalTouchAction = document.body.style.touchAction;

      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.touchAction = originalTouchAction;
      };
    }
  }, [mobileOpen]);

  // Desktop Navigation Links
  const navLinks = [
    { label: t.nav.about || "About", href: "/about" },
    { label: t.nav.ventures || "Ventures", href: "/ventures" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: t.nav.media || "Media", href: "/media" },
    { label: t.nav.insights || "Insights & Perspectives", href: "/insights" },
    { label: t.nav.contact || "Contact", href: "/contact" },
  ];

  // Mobile Navigation Taxonomy (Complete Commercial & Strategic Spectrum)
  const mobilePrimaryLinks = [
    { label: t.nav.about || "About & Biography", href: "/about", description: "Institutional background & track record" },
    { label: t.nav.ventures || "Ventures & Advisory", href: "/ventures", description: "Strategic practice & capital structuring" },
    { label: "Real Estate Portfolio", href: "/real-estate/properties", description: "Curated prime properties & acquisitions" },
    { label: "Market Intelligence", href: "/real-estate/market", description: "Empirical pricing & prime transactions" },
    { label: "Ecosystem", href: "/ecosystem", description: "Integrated venture matrix & alliances" },
    { label: t.nav.media || "Media Archive", href: "/media", description: "Broadcasts, keynotes & TV appearances" },
    { label: t.nav.insights || "Executive Journal", href: "/insights", description: "Research memoranda & analysis" },
  ];

  const mobileProtocolLinks = [
    { label: "Advisory Methodology", href: "/cum-lucrez", badge: "Mandates" },
    { label: "For Private Clients", href: "/pentru-clienti", badge: "Services" },
    { label: "Buyer's Dossier", href: "/ghid-cumparator", badge: "Guide" },
    { label: "Strategic Partners", href: "/parteneri", badge: "Network" },
    { label: "Bucharest Market Report", href: "/raport-piata", badge: "Research" },
  ];

  return (
    <>
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60]" />
            <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#86868B] group-hover:text-[#93C8FF] transition-colors hidden xs:inline-block">
              Executive
            </span>
          </Link>

          {/* Desktop Minimal Navigation (Apple.com spacing & typography) */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-9"
            role="navigation"
            aria-label="Main Navigation"
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

          {/* Right Action Suite: Discreet Pill CTA & Accessible Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop Pill CTA */}
            <Link
              href="/programare"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/[0.12] hover:border-white/[0.25] text-[#F5F4EF] font-sans text-xs font-medium tracking-tight transition-all duration-200"
            >
              <span>{t.nav.consultation || "Consultation"}</span>
              <ArrowUpRight className="w-3 h-3 text-[#93C8FF]" />
            </Link>

            {/* Mobile Menu Trigger Button (Min 48x48px accessible tap area) */}
            <button
              ref={triggerRef}
              type="button"
              onClick={mobileOpen ? handleClose : handleOpen}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden w-12 h-12 -mr-2 rounded-xl flex items-center justify-center text-[#F5F4EF] hover:text-white hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93C8FF]"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* 
        ========================================================================
        MOBILE NAVIGATION DRAWER — PORTAL ARCHITECTURE
        Mounted via React Portal directly into document.body to prevent any
        containing-block clipping or pointer-event traps from header backdrop-filter.
        ========================================================================
      */}
      {mounted &&
        mobileOpen &&
        createPortal(
          <div
            id="mobile-navigation-drawer"
            className="fixed inset-0 z-[100] md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Backdrop Overlay with Tap-to-Dismiss */}
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 ease-out"
              onClick={handleClose}
              aria-hidden="true"
            />

            {/* Slide-out Navigation Drawer Container */}
            <div
              ref={drawerRef}
              className="fixed inset-y-0 right-0 w-full sm:max-w-md bg-[#07090D] border-l border-white/[0.08] shadow-2xl flex flex-col z-[101] overflow-hidden transition-transform duration-300 ease-out animate-in slide-in-from-right"
            >
              {/* Drawer Top Bar with Brand & Explicit Close Button */}
              <div className="shrink-0 flex items-center justify-between px-5 sm:px-6 h-16 border-b border-white/[0.08] bg-[#0C1119]/80 backdrop-blur-xl pt-[env(safe-area-inset-top,0px)]">
                <Link
                  href="/"
                  onClick={handleClose}
                  className="flex items-center gap-2 group tracking-tight py-2"
                  aria-label="Cristian Văduva Home"
                >
                  <span className="font-serif text-lg font-medium text-[#F5F4EF] tracking-[-0.01em]">
                    Cristian Văduva
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60]" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#86868B]">
                    Executive
                  </span>
                </Link>

                {/* Explicit Close Button (Min 48x48px Accessible Target) */}
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={handleClose}
                  aria-label="Close navigation menu"
                  className="w-12 h-12 -mr-2 rounded-xl flex items-center justify-center text-[#F5F4EF] hover:text-white hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93C8FF]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Navigation Body */}
              <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-6 space-y-8 scroll-smooth overscroll-contain">
                
                {/* Section 1: Primary Tracks */}
                <div className="space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block px-2">
                    EXECUTIVE TRACKS
                  </span>
                  <ul className="space-y-1">
                    {mobilePrimaryLinks.map((item) => {
                      const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={handleClose}
                            className={`flex items-center justify-between p-3 rounded-xl min-h-[48px] transition-all group ${
                              isActive
                                ? "bg-white/[0.08] text-[#F5F4EF] border border-white/[0.12]"
                                : "text-[#B8C2CF] hover:text-[#F5F4EF] hover:bg-white/[0.04]"
                            }`}
                          >
                            <div className="space-y-0.5">
                              <span className={`block font-serif text-lg sm:text-xl tracking-tight ${isActive ? "text-[#93C8FF] font-medium" : "text-[#F5F4EF]"}`}>
                                {item.label}
                              </span>
                              <span className="block font-sans text-xs text-[#8E9AA8]">
                                {item.description}
                              </span>
                            </div>
                            <ChevronRight className={`w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 ${isActive ? "text-[#93C8FF]" : "text-[#8E9AA8]"}`} />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Section 2: Client Protocols & Advisory Standards */}
                <div className="space-y-3 pt-2 border-t border-white/[0.08]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block px-2">
                    CLIENT PROTOCOLS & MANDATES
                  </span>
                  <div className="grid grid-cols-1 gap-1">
                    {mobileProtocolLinks.map((protocol) => {
                      const isActive = pathname === protocol.href;
                      return (
                        <Link
                          key={protocol.href}
                          href={protocol.href}
                          onClick={handleClose}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-lg min-h-[44px] transition-colors ${
                            isActive
                              ? "bg-white/[0.06] text-[#F5F4EF] font-medium"
                              : "text-[#8E9AA8] hover:text-[#F5F4EF] hover:bg-white/[0.03]"
                          }`}
                        >
                          <span className="font-sans text-xs sm:text-sm">
                            {protocol.label}
                          </span>
                          <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/[0.06] text-[#B8C2CF] border border-white/[0.08]">
                            {protocol.badge}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Section 3: Priority Direct Actions */}
                <div className="space-y-3 pt-2 border-t border-white/[0.08]">
                  <Link
                    href="/programare"
                    onClick={handleClose}
                    className="w-full py-4 px-6 rounded-2xl bg-[#F5F4EF] hover:bg-white text-[#07090D] font-sans text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-xl shadow-white/5 active:scale-[0.99] transition-all min-h-[48px]"
                  >
                    <span>{t.nav.consultation || "REQUEST CONSULTATION (20 MIN)"}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#07090D]" />
                  </Link>

                  <Link
                    href="/contact"
                    onClick={handleClose}
                    className="w-full py-3.5 px-6 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-[#F5F4EF] font-sans text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-all min-h-[48px]"
                  >
                    <span>Direct Private Desk</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#93C8FF]" />
                  </Link>
                </div>

              </div>

              {/* Drawer Footer with Geopolitical Footprint & Safe Area Inset */}
              <div className="shrink-0 p-5 sm:px-6 border-t border-white/[0.08] bg-[#0C1119] font-mono text-xs text-[#8E9AA8] pb-[calc(1.25rem+env(safe-area-inset-bottom,0px))]">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#B8C2CF]">CRISTIAN VĂDUVA</span>
                  <span className="text-[#8E9AA8]">BUCHAREST · MONACO · DUBAI</span>
                </div>
              </div>

            </div>
          </div>,
          document.body
        )}
    </>
  );
}
