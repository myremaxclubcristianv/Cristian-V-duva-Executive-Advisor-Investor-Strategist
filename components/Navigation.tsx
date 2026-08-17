"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock with iOS safe handling
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
  }, [isMenuOpen]);

  // Focus management
  useEffect(() => {
    if (isMenuOpen && drawerRef.current) {
      const firstLink = drawerRef.current.querySelector("a, button") as HTMLElement | null;
      firstLink?.focus();
    }
  }, [isMenuOpen]);

  // Close on Escape & return focus
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    toggleBtnRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMenuOpen, closeMenu]);

  const navLinks = [
    { href: "/about", label: "About", number: "01" },
    { href: "/real-estate", label: "Real Estate", number: "02" },
    { href: "/real-estate/market", label: "Intelligence", number: "03" },
    { href: "/media", label: "Media", number: "04" },
    { href: "/insights", label: "Journal", number: "05" },
    { href: "/ecosystem", label: "Ecosystem", number: "06" },
    { href: "/contact", label: "Contact", number: "07" },
  ];

  return (
    <>
      {/* Desktop navigation - Whisper quiet editorial navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-surface-secondary/60 py-4 shadow-2xl"
            : "bg-transparent py-6"
        }`}
        aria-label="Primary Navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-text-primary font-display text-lg sm:text-xl tracking-tight hover:text-accent transition-quick flex items-center gap-2"
              aria-label="Cristian Văduva - Home"
            >
              <span>Cristian Văduva</span>
            </Link>

            <div className="hidden md:flex items-center gap-7 lg:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-mono text-[10px] uppercase tracking-[0.25em] transition-quick relative py-1 ${
                      isActive ? "text-accent font-semibold" : "text-text-secondary/80 hover:text-accent"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent" />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="px-4 py-2 border border-accent/40 text-accent font-mono text-[10px] font-medium uppercase tracking-[0.25em] hover:bg-accent hover:text-background transition-quick"
              >
                Private Consultation
              </Link>
            </div>

            {/* Mobile menu trigger */}
            <button
              ref={toggleBtnRef}
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-text-primary p-3 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Open mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Premium full-screen architectural drawer */}
      <div
        id="mobile-navigation-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } flex flex-col justify-between`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-6 border-b border-surface-secondary/40">
          <span className="font-display text-lg text-text-primary tracking-tight">Cristian Văduva</span>
          <button
            onClick={closeMenu}
            className="text-text-secondary hover:text-text-primary p-3 -mr-2 text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Close mobile menu"
          >
            &times;
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col justify-center px-8 py-6 space-y-4 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`group flex items-baseline justify-between py-2 border-b border-surface-secondary/30 transition-colors ${
                  isActive ? "text-accent" : "text-text-primary hover:text-accent"
                }`}
              >
                <span className="text-2xl font-display tracking-tight group-hover:translate-x-1 transition-transform">
                  {link.label}
                </span>
                <span className="font-mono text-[10px] text-text-secondary/50 uppercase tracking-widest">
                  {link.number}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTAs & Metadata */}
        <div className="p-8 border-t border-surface-secondary/40 space-y-4 bg-background">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block w-full py-4 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] text-center hover:bg-accent/90 transition-quick shadow-xl"
          >
            REQUEST PRIVATE CONSULTATION
          </Link>
          <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-text-secondary/60 pt-1">
            <span>BUCHAREST · MONACO · EUROPE</span>
            <a
              href="https://wa.me/436509536345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              WHATSAPP DESK ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
