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
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
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
    { href: "/about", label: "ABOUT" },
    { href: "/#expertise", label: "EXPERTISE" },
    { href: "/real-estate", label: "REAL ESTATE" },
    { href: "/#work", label: "WORK" },
    { href: "/media", label: "MEDIA" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Apple-Style Navigation Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F7F5]/90 backdrop-blur-xl border-b border-[#E5E5E1] py-4 shadow-sm"
            : "bg-transparent py-5 sm:py-6"
        }`}
        aria-label="Primary Executive Navigation"
      >
        <div className="site-container">
          <div className="flex items-center justify-between">
            {/* Brand Title */}
            <Link
              href="/"
              className="text-[#111111] font-display text-lg sm:text-xl tracking-tight hover:text-[#B89B72] transition-colors flex items-center gap-2.5 group"
              aria-label="Cristian Văduva - Flagship Site"
            >
              <span className="w-2 h-2 rounded-full bg-[#B89B72] group-hover:scale-125 transition-transform" />
              <span className="font-semibold tracking-tight">CRISTIAN VĂDUVA</span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-mono text-xs uppercase tracking-[0.2em] transition-colors relative py-1 ${
                      isActive ? "text-[#B89B72] font-semibold" : "text-[#5E5E5E] hover:text-[#111111]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="px-5 py-2.5 bg-[#111111] text-[#F7F7F5] font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#B89B72] hover:text-[#FFFFFF] transition-colors touch-active"
              >
                WORK WITH ME →
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              ref={toggleBtnRef}
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden text-[#111111] min-w-[48px] min-h-[48px] flex items-center justify-center p-2 -mr-2 focus:outline-none touch-active font-mono text-xs font-semibold uppercase tracking-widest"
              aria-label="Open mobile navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span>MENU</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Drawer */}
      <div
        id="mobile-navigation-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-50 bg-[#F7F7F5]/98 backdrop-blur-2xl transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } flex flex-col justify-between overflow-hidden`}
      >
        {/* Mobile Header Bar */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#E5E5E1] pt-[max(1.25rem,env(safe-area-inset-top))]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B89B72]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#111111] font-semibold">CRISTIAN VĂDUVA</span>
          </div>
          <button
            onClick={closeMenu}
            className="text-[#5E5E5E] hover:text-[#111111] min-w-[48px] min-h-[48px] flex items-center justify-center -mr-2 font-mono text-xs uppercase tracking-widest focus:outline-none touch-active"
            aria-label="Close menu"
          >
            CLOSE ✕
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex-1 flex flex-col justify-center px-6 py-6 space-y-2 overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`group flex items-center justify-between min-h-[52px] py-3.5 border-b border-[#E5E5E1] transition-colors touch-active ${
                  isActive ? "text-[#B89B72] font-semibold" : "text-[#111111] hover:text-[#B89B72]"
                }`}
              >
                <span className="text-2xl font-display tracking-tight group-hover:translate-x-1 transition-transform">
                  {link.label}
                </span>
                <span className="text-[#B89B72] font-mono text-xs">→</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Action Drawer Footer */}
        <div className="p-6 border-t border-[#E5E5E1] space-y-4 bg-[#FFFFFF]/80 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="block w-full min-h-[48px] py-4 bg-[#111111] text-[#F7F7F5] font-mono text-xs font-semibold uppercase tracking-[0.2em] text-center hover:bg-[#B89B72] transition-colors shadow-sm touch-active flex items-center justify-center"
          >
            WORK WITH ME →
          </Link>

          <div className="flex justify-between items-center font-mono text-[10px] uppercase tracking-widest text-[#5E5E5E] pt-1">
            <span>BUCHAREST · MONACO · DUBAI</span>
            <a
              href="https://wa.me/436509536345"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B89B72] hover:underline flex items-center gap-1 min-h-[36px]"
            >
              WHATSAPP ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
