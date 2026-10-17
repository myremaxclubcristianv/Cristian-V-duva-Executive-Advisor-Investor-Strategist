"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lock, Menu, X, ArrowUpRight, Compass, Shield } from "lucide-react";

interface NavLinkItem {
  href: string;
  label: string;
  number: string;
}

export default function ExecutiveHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (top) {
        window.scrollTo(0, parseInt(top || "0", 10) * -1);
      }
    }
  }, [isMenuOpen]);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const navLinks: NavLinkItem[] = [
    { href: "/", label: "OVERVIEW", number: "01" },
    { href: "/pentru-clienti", label: "PENTRU CLIENȚI", number: "02" },
    { href: "/cum-lucrez", label: "CUM LUCREZ", number: "03" },
    { href: "/real-estate", label: "PROPRIETĂȚI", number: "04" },
    { href: "/parteneri", label: "PARTENERI", number: "05" },
    { href: "/raport-piata", label: "RAPORT PIAȚĂ", number: "06" },
    { href: "/about", label: "BIOGRAFIE", number: "07" },
    { href: "/contact", label: "CONTACT", number: "08" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#07090D]/95 backdrop-blur-2xl border-b border-[#B8C2CF]/[0.08] py-3.5 shadow-2xl shadow-black/80"
            : "bg-[#07090D]/85 backdrop-blur-md border-b border-white/[0.06] py-4 sm:py-5"
        }`}
      >
        <div className="site-container flex items-center justify-between">
          {/* Architectural Brand Wordmark */}
          <Link
            href="/"
            className="group flex flex-col tracking-tight transition-opacity hover:opacity-95"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#93C8FF] shadow-[0_0_8px_rgba(147,200,255,0.6)]" />
              <span className="font-sans text-sm sm:text-base font-semibold tracking-[0.2em] text-[#F5F4EF]">
                CRISTIAN VADUVA
              </span>
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#B8C2CF] pl-4.5 group-hover:text-[#93C8FF] transition-colors">
              EXECUTIVE ADVISOR · INVESTOR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={false}
                  className={`relative font-mono text-[11px] uppercase tracking-[0.24em] transition-all py-1.5 ${
                    active
                      ? "text-[#F5F4EF] font-medium"
                      : "text-[#B8C2CF]/70 hover:text-[#F5F4EF]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#93C8FF] shadow-[0_0_8px_rgba(147,200,255,0.8)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions Desk */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/programare"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#93C8FF]/30 bg-[#93C8FF]/10 hover:bg-[#93C8FF]/20 text-[#93C8FF] hover:text-[#F5F4EF] font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-300 min-h-[44px]"
            >
              <span>PROGRAMARE (20 MIN)</span>
              <ArrowUpRight className="w-3 h-3 opacity-90" />
            </Link>

            <Link
              href="/login"
              prefetch={false}
              className="p-2 border border-white/[0.08] hover:border-[#93C8FF]/50 text-[#B8C2CF] hover:text-[#F5F4EF] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              title="Principal / Administrator Login"
              aria-label="Admin Portal"
            >
              <Lock className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="xl:hidden flex items-center gap-2">
            <Link
              href="/login"
              prefetch={false}
              className="p-2 border border-white/[0.08] text-[#B8C2CF] hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
              title="Admin"
              aria-label="Admin Login"
            >
              <Lock className="w-4 h-4" />
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2.5 text-[#F5F4EF] border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.06] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Architectural Mobile Drawer */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#07090D] text-[#F5F4EF] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Subtle background grid & cold light overlay */}
          <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#93C8FF]/[0.04] rounded-full blur-[140px] pointer-events-none" />

          {/* Drawer Top */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/[0.1] pb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#93C8FF]" />
              <span className="font-sans text-base font-semibold tracking-[0.18em] text-[#F5F4EF]">
                CRISTIAN VĂDUVA
              </span>
            </div>

            <button
              onClick={closeMenu}
              className="p-2.5 border border-white/[0.12] text-[#F5F4EF] hover:border-[#93C8FF] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="relative z-10 py-10 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#93C8FF] block mb-6">
              EXECUTIVE NAVIGATION ARCHITECTURE
            </span>
            <div className="divide-y divide-white/[0.08]">
              {navLinks.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={false}
                    onClick={closeMenu}
                    className="group flex items-baseline justify-between py-4 text-[#F5F4EF]"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-[#8A95A5] group-hover:text-[#93C8FF]">
                        {link.number}
                      </span>
                      <span className={`font-serif text-2xl sm:text-3xl tracking-tight transition-colors ${
                        active ? "text-[#93C8FF]" : "text-[#F5F4EF] group-hover:text-[#93C8FF]"
                      }`}>
                        {link.label}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#647082] group-hover:text-[#93C8FF] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Drawer Bottom Coordinates & Actions */}
          <div className="relative z-10 pt-6 border-t border-white/[0.1] space-y-6">
            <Link
              href="/programare"
              onClick={closeMenu}
              className="w-full py-4 bg-[#93C8FF] text-[#07090D] font-mono text-xs uppercase tracking-[0.24em] font-bold flex items-center justify-center gap-2 shadow-2xl shadow-[#93C8FF]/20"
            >
              <span>SOLICITĂ DISCUȚIE (20 MIN)</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="flex justify-between items-center font-mono text-[10px] text-[#647082] uppercase tracking-wider">
              <span>BUCUREȘTI · ROMÂNIA</span>
              <span>CONFIDENȚIALITATE CONTRACTUALĂ (NDA)</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
