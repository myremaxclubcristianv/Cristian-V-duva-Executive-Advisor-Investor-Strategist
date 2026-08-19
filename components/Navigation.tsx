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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll locking with position memory
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

  useEffect(() => {
    if (isMenuOpen && drawerRef.current) {
      const firstLink = drawerRef.current.querySelector("a, button") as HTMLElement | null;
      firstLink?.focus();
    }
  }, [isMenuOpen]);

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
    { href: "/", label: "HOME", number: "01" },
    { href: "/about", label: "THE ADVISOR", number: "02" },
    { href: "/real-estate", label: "EXPERTISE", number: "03" },
    { href: "/real-estate/properties", label: "ENGAGEMENTS", number: "04" },
    { href: "/insights", label: "EXECUTIVE DESK", number: "05" },
    { href: "/contact", label: "CONTACT", number: "06" },
  ];

  return (
    <>
      {/* Navbar Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-background/90 via-background/40 to-transparent py-5 sm:py-6"
        }`}
        aria-label="Primary Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between">
            {/* Executive Brand Mark */}
            <Link
              href="/"
              className={`text-text-primary font-display text-base sm:text-xl tracking-tight hover:text-accent transition-all duration-300 flex items-center gap-2.5 group ${
                isScrolled ? "opacity-100" : "opacity-0 sm:opacity-100"
              }`}
              aria-label="Cristian Văduva - Home"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent group-hover:scale-125 transition-transform" />
              <span className="font-medium">Cristian Văduva</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.slice(1).map((link) => {
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
                className="px-4 py-2 border border-accent/40 text-accent font-mono text-[10px] font-medium uppercase tracking-[0.25em] hover:bg-accent hover:text-background transition-quick touch-active"
              >
                Private Consultation
              </Link>
            </div>

            {/* Mobile Menu Trigger (Min 48px touch target) */}
            <button
              ref={toggleBtnRef}
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden text-text-primary min-w-[48px] min-h-[48px] flex items-center justify-center p-2 -mr-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent touch-active"
              aria-label="Open mobile menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              <div className="space-y-1.5 w-5">
                <span className="block w-5 h-[1.5px] bg-text-primary transition-transform" />
                <span className="block w-3.5 h-[1.5px] bg-accent ml-auto transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Private Office Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-50 bg-background/98 backdrop-blur-2xl transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } flex flex-col justify-between overflow-hidden`}
      >
        {/* Header Bar */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10 pt-[max(1.25rem,env(safe-area-inset-top))]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent font-semibold">PRIVATE OFFICE INDEX</span>
          </div>
          <button
            onClick={closeMenu}
            className="text-text-secondary hover:text-text-primary min-w-[48px] min-h-[48px] flex items-center justify-center -mr-2 text-xl focus:outline-none focus-visible:ring-1 focus-visible:ring-accent touch-active"
            aria-label="Close mobile menu"
          >
            ✕
          </button>
        </div>

        {/* Navigation Index */}
        <nav className="flex-1 flex flex-col justify-center px-6 py-6 space-y-1.5 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`group flex items-center justify-between min-h-[52px] py-3 px-3 border-b border-white/5 transition-colors touch-active ${
                  isActive ? "text-accent font-medium" : "text-text-primary hover:text-accent"
                }`}
              >
                <span className="font-mono text-xs text-accent font-semibold tracking-wider">
                  {link.number}
                </span>
                <span className="text-lg sm:text-xl font-display tracking-tight group-hover:translate-x-1 transition-transform">
                  {link.label}
                </span>
                <span className="text-accent font-mono text-xs">→</span>
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="p-6 border-t border-white/10 space-y-3.5 bg-surface-primary/80 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block w-full min-h-[48px] py-4 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] text-center hover:bg-accent/90 transition-quick shadow-2xl touch-active flex items-center justify-center"
          >
            REQUEST PRIVATE CONSULTATION
          </Link>

          <div className="flex justify-between items-center font-mono text-[9px] uppercase tracking-widest text-text-secondary/70 pt-1">
            <span>BUCHAREST · MONACO · EUROPE</span>
            <a
              href="https://wa.me/436509536345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline flex items-center gap-1 min-h-[36px]"
            >
              WHATSAPP DESK ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
