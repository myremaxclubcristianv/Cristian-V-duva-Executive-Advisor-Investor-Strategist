"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Lock, ArrowUpRight, Menu, X, Play, Image as ImageIcon } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
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

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
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
    { href: "/", label: "EXECUTIVE" },
    { href: "/gallery", label: "GALERIE FOTO" },
    { href: "/tv", label: "YOUTUBE TV" },
    { href: "/about", label: "DESPRE & BIOGRAFIE" },
    { href: "/real-estate", label: "REAL ESTATE" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
      {/* Apple-Style Glass Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0A0A]/85 backdrop-blur-2xl border-b border-white/10 py-3.5 shadow-2xl"
            : "bg-[#0A0A0A]/40 backdrop-blur-md py-4 sm:py-5"
        }`}
      >
        <div className="site-container">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group text-white hover:text-[#B89B72] transition-colors"
              aria-label="Cristian Văduva - Executive Site"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#B89B72] group-hover:scale-125 transition-transform" />
              <div className="flex flex-col">
                <span className="font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-[#B89B72] transition-colors">
                  CRISTIAN VĂDUVA
                </span>
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  Executive Advisor
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-mono text-xs uppercase tracking-[0.18em] transition-colors py-1 ${
                      isActive
                        ? "text-[#B89B72] font-semibold"
                        : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/login"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-400 hover:text-[#B89B72] transition-colors"
                title="Admin Login & Photo Upload"
              >
                <Lock className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/436509536345"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#B89B72] hover:bg-[#C9AE85] text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5 shadow-md shadow-[#B89B72]/20"
              >
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <Link
                href="/login"
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-400"
                title="Admin"
              >
                <Lock className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 text-white bg-white/5 border border-white/10 rounded-xl focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <div
        id="mobile-navigation-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-50 bg-[#0A0A0A]/98 backdrop-blur-3xl transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } flex flex-col justify-between overflow-hidden text-white`}
      >
        {/* Mobile Header Bar */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10 pt-[max(1.25rem,env(safe-area-inset-top))]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B89B72]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white font-semibold">
              CRISTIAN VĂDUVA
            </span>
          </div>
          <button
            onClick={closeMenu}
            className="p-2 text-neutral-400 hover:text-white rounded-xl bg-white/5 border border-white/10"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
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
                className={`group flex items-center justify-between py-4 border-b border-white/10 transition-colors ${
                  isActive ? "text-[#B89B72] font-semibold" : "text-white hover:text-[#B89B72]"
                }`}
              >
                <span className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:translate-x-1 transition-transform">
                  {link.label}
                </span>
                <span className="text-[#B89B72] font-mono text-xs">→</span>
              </Link>
            );
          })}
        </nav>

        {/* Mobile Drawer Footer */}
        <div className="p-6 border-t border-white/10 space-y-4 bg-[#121212] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/gallery"
              onClick={closeMenu}
              className="py-3 rounded-2xl bg-white/5 border border-white/10 text-center font-mono text-xs uppercase text-white flex items-center justify-center gap-2"
            >
              <ImageIcon className="w-4 h-4 text-[#B89B72]" />
              <span>Galerie</span>
            </Link>

            <Link
              href="/tv"
              onClick={closeMenu}
              className="py-3 rounded-2xl bg-white/5 border border-white/10 text-center font-mono text-xs uppercase text-white flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-red-400" />
              <span>YouTube TV</span>
            </Link>
          </div>

          <a
            href="https://wa.me/436509536345"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="block w-full py-4 bg-[#B89B72] text-black font-semibold text-xs font-mono uppercase tracking-widest text-center rounded-2xl shadow-lg shadow-[#B89B72]/20"
          >
            CONTACT WHATSAPP (+43 650 953 6345) ↗
          </a>
        </div>
      </div>
    </>
  );
}
