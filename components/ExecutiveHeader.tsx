"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Lock,
  ShieldCheck,
  Clock,
} from "lucide-react";

interface SubItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
}

interface NavCategory {
  id: string;
  label: string;
  categoryNumber: string;
  highlightText: string;
  featuredImage: string;
  featuredAlt: string;
  items: SubItem[];
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    id: "advisory",
    label: "EXPERTISE",
    categoryNumber: "01",
    highlightText: "Mandate dedicate pentru cumpărători și vânzători de active rezidențiale de prestigiu.",
    featuredImage: "/media/cristian-vaduva/personal/cristian-vaduva-office-armchair-consultation.png",
    featuredAlt: "Consultanță executivă Cristian Văduva",
    items: [
      {
        title: "Pentru Clienți Privați",
        href: "/pentru-clienti",
        description: "Reprezentare exclusivă, selecție off-market și coordonare due diligence.",
        badge: "REPREZENTARE",
      },
      {
        title: "Cum Lucrez & Remunerație",
        href: "/cum-lucrez",
        description: "Procesul în 5 pași, transparență onorarii (retainer, success fee, hibrid).",
        badge: "PROCES",
      },
      {
        title: "Programare Consultație",
        href: "/programare",
        description: "Sesiune privată de 20 de minute cu opțiune de acord NDA prealabil.",
        badge: "20 MIN",
      },
    ],
  },
  {
    id: "real-estate",
    label: "PROPRIETĂȚI",
    categoryNumber: "02",
    highlightText: "Curatoriat independent de reședințe excepționale în București și coridoare internaționale.",
    featuredImage: "/residence/terrace.png",
    featuredAlt: "Portofoliu proprietăți prime",
    items: [
      {
        title: "Portofoliu Prime (433)",
        href: "/real-estate/properties",
        description: "Catalog complet de vile, penthouse-uri și proprietăți verificate cadastral.",
        badge: "CATALOG LIVE",
      },
      {
        title: "Directiva Imobiliară",
        href: "/real-estate",
        description: "Standarde de selecție, arhitectură și analiză comparativă de valoare.",
        badge: "STANDARDE",
      },
      {
        title: "Dosarul Cumpărătorului",
        href: "/ghid-cumparator",
        description: "Ghid în 7 capitole cu checklist due diligence și export PDF.",
        badge: "GHID 2026",
      },
    ],
  },
  {
    id: "intelligence",
    label: "INSIGHTS",
    categoryNumber: "03",
    highlightText: "Analiză empirică, metodologie de cercetare ca la carte și transparență a datelor.",
    featuredImage: "/media/cristian-vaduva/personal/cristian-vaduva-office-blueprints-underwriting.jpg",
    featuredAlt: "Metodologie de cercetare și audit",
    items: [
      {
        title: "Raport de Piață Rezidențial",
        href: "/raport-piata",
        description: "Metodologie transparentă în 8 puncte pentru piața prime din Capitală.",
        badge: "METODOLOGIE",
      },
      {
        title: "Studii de Caz & Cadru",
        href: "/studii-de-caz",
        description: "Anatomia deciziei de achiziție, analiză de risc și studii wireframe.",
        badge: "STUDII",
      },
      {
        title: "Perspective & Analize",
        href: "/insights",
        description: "Comentarii de piață, tendințe urbanistice și semnale economice.",
        badge: "ANALIZE",
      },
    ],
  },
  {
    id: "ventures",
    label: "VENTURES",
    categoryNumber: "04",
    highlightText: "Parteneriate internaționale confirmate și infrastructură digitală integrată.",
    featuredImage: "/media/cristian-vaduva/personal/cristian-vaduva-office-chestertons-global-network.png",
    featuredAlt: "Relații de parteneriat Chestertons și Generali",
    items: [
      {
        title: "Parteneri Strategici",
        href: "/parteneri",
        description: "Chestertons Global Network & contract de agent autorizat Generali România.",
        badge: "CONFIRMAT",
      },
      {
        title: "Ecosistemul Operațional",
        href: "/ecosystem",
        description: "Cele 13 platforme specializate de date, subvenții, asigurări și investiții.",
        badge: "13 HUB-URI",
      },
      {
        title: "Inițiative & Ventures",
        href: "/ventures",
        description: "Vehicule operaționale și proiecte conexe de dezvoltare.",
        badge: "PROIECTE",
      },
    ],
  },
  {
    id: "about",
    label: "DESPRE",
    categoryNumber: "05",
    highlightText: "Parcurs academic, formare multidisciplinară și birou direct de contact.",
    featuredImage: "/media/cristian-vaduva/personal/cristian-vaduva-portrait-property-strategist.jpg",
    featuredAlt: "Cristian Văduva — Profil profesional",
    items: [
      {
        title: "Biografie Profesională",
        href: "/about",
        description: "3 licențe, 3 masterate, experiență internațională Madrid, Amiens, Malta.",
        badge: "PROFIL",
      },
      {
        title: "Cadran de Contact",
        href: "/contact",
        description: "Canale securizate de comunicare directă cu Cristian Văduva.",
        badge: "BIROU",
      },
    ],
  },
];

export default function ExecutiveHeader() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>("advisory");
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection for header background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveCategory(null);
      setIsMobileOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Handle ESC key to close mega menu and mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCategory(null);
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Click outside to close desktop mega menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Generous hover handlers with timeout bridge to prevent accidental closure
  const handleMouseEnter = (categoryId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveCategory(categoryId);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 240); // 240ms bridge allows smooth cursor motion into dropdown
  };

  const currentCategoryObj = NAV_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <>
      <header
        ref={headerRef}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || activeCategory
            ? "glass-architectural shadow-2xl shadow-black/80"
            : "bg-[#07090D]/90 backdrop-blur-md border-b border-white/[0.06]"
        }`}
      >
        {/* Editorial Top Status Bar (Integrated into Fixed Header) */}
        <div className="w-full bg-[#F5F4EF] text-[#07090D] border-b border-[#A97F60]/40 py-1 px-4 sm:px-6 font-mono text-[10px] tracking-[0.24em] uppercase font-medium flex items-center justify-between">
          <span className="hidden md:inline text-[#A97F60]">CONSILIER EXECUTIV · PORTOFOLIU PRIME</span>
          <span className="mx-auto md:mx-0">PRIVATE ADVISORY · REAL ESTATE · STRATEGY</span>
          <span className="hidden md:inline text-[#785338]">BUCUREȘTI · MONACO · DUBAI</span>
        </div>

        {/* Primary Navigation Row */}
        <div className={`site-container flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "py-3" : "py-3.5 sm:py-4"
        }`}>
          {/* Architectural Brand Identity */}
          <Link
            href="/"
            className="group flex flex-col tracking-tight transition-opacity hover:opacity-95 shrink-0"
          >
            <div className="flex flex-col items-start">
              <span className="font-serif text-2xl font-bold tracking-wider text-[#F5F4EF]">EXECUTIVE</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#A97F60]">CRISTIAN VĂDUVA</span>
            </div>
          </Link>

          {/* Desktop Primary Navigation with Mega-Menu Triggers */}
          <nav className="hidden xl:flex items-center gap-1 xl:gap-2">
            {NAV_CATEGORIES.map((cat) => {
              const isOpen = activeCategory === cat.id;
              const isChildActive = cat.items.some((item) => item.href === pathname);

              return (
                <div
                  key={cat.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(cat.id)}
                >
                  <button
                    onClick={() => setActiveCategory(isOpen ? null : cat.id)}
                    aria-expanded={isOpen}
                    aria-controls={`mega-menu-${cat.id}`}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] transition-all rounded-none whitespace-nowrap cursor-pointer ${
                      isOpen || isChildActive
                        ? "text-[#F5F4EF] bg-white/[0.04]"
                        : "text-[#B8C2CF]/85 hover:text-[#F5F4EF] hover:bg-white/[0.02]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 text-[#8A95A5] ${
                        isOpen ? "rotate-180 text-[#A97F60]" : ""
                      }`}
                    />
                    {isChildActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-[#A97F60] shadow-[0_0_6px_rgba(169,127,96,0.6)]" />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Static Direct Editorial Links */}
          <div className="hidden xl:flex items-center gap-5 ml-4">
            <Link
              href="/about"
              className={`text-xs font-mono uppercase tracking-[0.18em] transition-colors ${
                pathname === "/about" ? "text-[#F5F4EF] font-semibold" : "text-[#B8C2CF]/80 hover:text-[#F5F4EF]"
              }`}
            >
              ABOUT
            </Link>
            <Link
              href="/media"
              className={`text-xs font-mono uppercase tracking-[0.18em] transition-colors ${
                pathname === "/media" ? "text-[#F5F4EF] font-semibold" : "text-[#B8C2CF]/80 hover:text-[#F5F4EF]"
              }`}
            >
              MEDIA
            </Link>
            <Link
              href="/contact"
              className={`text-xs font-mono uppercase tracking-[0.18em] transition-colors ${
                pathname === "/contact" ? "text-[#F5F4EF] font-semibold" : "text-[#B8C2CF]/80 hover:text-[#F5F4EF]"
              }`}
            >
              CONTACT
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/programare"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#A97F60]/60 bg-[#A97F60]/10 hover:bg-[#A97F60]/20 text-[#F5F4EF] hover:border-[#A97F60] font-mono text-[11px] uppercase tracking-[0.18em] transition-all duration-300 min-h-[40px] font-semibold whitespace-nowrap shadow-sm"
            >
              <Clock className="w-3.5 h-3.5 text-[#A97F60] shrink-0" />
              <span>PRIVATE CONSULTATION</span>
              <ArrowUpRight className="w-3 h-3 text-[#A97F60] opacity-90 shrink-0" />
            </Link>

            <Link
              href="/login"
              prefetch={false}
              className="p-2 border border-white/[0.1] hover:border-[#A97F60]/60 text-[#B8C2CF] hover:text-[#F5F4EF] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center shrink-0"
              title="Portal Administrare"
              aria-label="Admin Portal"
            >
              <Lock className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile / Tablet Hamburger Trigger */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="p-2.5 text-[#F5F4EF] border border-white/[0.12] bg-white/[0.04] hover:bg-white/[0.08] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Deschide meniul de navigare"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP MEGA-MENU DROPDOWN DRAWER */}
        {/* ============================================================== */}
        {currentCategoryObj && (
          <div
            id={`mega-menu-${currentCategoryObj.id}`}
            onMouseEnter={() => {
              if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
            }}
            onMouseLeave={handleMouseLeave}
            className="hidden xl:block absolute top-full left-0 right-0 bg-[#07090D]/98 backdrop-blur-3xl border-b border-[#A97F60]/20 shadow-2xl shadow-black/90 animate-in fade-in slide-in-from-top-1 duration-200"
          >
            {/* Top architectural hairline rule with restrained copper highlight */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#A97F60]/40 to-transparent" />

            <div className="site-container py-8 sm:py-10">
              <div className="grid grid-cols-12 gap-8 items-stretch">
                {/* Left: Category Descriptor & Substantive Position (4 Cols) */}
                <div className="col-span-4 p-6 bg-[#0C1119] border border-white/[0.08] flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.26em] text-[#A97F60] font-semibold">
                      <span>SECȚIUNEA 0{currentCategoryObj.categoryNumber} · {currentCategoryObj.label}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-[#F5F4EF] font-normal leading-tight">
                      {currentCategoryObj.label}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#8A95A5] leading-relaxed">
                      {currentCategoryObj.highlightText}
                    </p>
                  </div>

                  {/* Thumbnail Photographic Window */}
                  <div className="relative aspect-[16/9] w-full bg-black border border-white/[0.1] overflow-hidden group">
                    <Image
                      src={currentCategoryObj.featuredImage}
                      alt={currentCategoryObj.featuredAlt}
                      fill
                      sizes="320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 bg-[#07090D]/90 backdrop-blur-md border border-white/10 font-mono text-[9px] text-[#B8C2CF] flex items-center justify-between">
                      <span className="truncate">{currentCategoryObj.featuredAlt}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#A97F60] shrink-0" />
                    </div>
                  </div>
                </div>

                {/* Right: Structured Sub-Items Grid (8 Cols) */}
                <div className="col-span-8 grid sm:grid-cols-3 gap-4">
                  {currentCategoryObj.items.map((item, idx) => {
                    const isItemActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setActiveCategory(null)}
                        className={`group relative p-5 bg-[#0C1119]/80 border transition-all duration-300 flex flex-col justify-between space-y-4 ${
                          isItemActive
                            ? "border-[#A97F60] bg-[#A97F60]/[0.05] shadow-lg shadow-[#A97F60]/5"
                            : "border-white/[0.06] hover:border-[#A97F60]/50 hover:bg-[#0C1119]"
                        }`}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            {item.badge ? (
                              <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-0.5 bg-white/[0.04] border border-white/[0.08] text-[#A97F60] font-semibold">
                                {item.badge}
                              </span>
                            ) : (
                              <span className="font-mono text-[9px] text-[#647082]">
                                0{idx + 1}
                              </span>
                            )}
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#647082] group-hover:text-[#A97F60] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </div>

                          <h4 className="font-serif text-lg text-[#F5F4EF] group-hover:text-[#A97F60] transition-colors leading-snug">
                            {item.title}
                          </h4>

                          <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-white/[0.04] flex items-center gap-1.5 font-mono text-[10px] text-[#B8C2CF] group-hover:text-[#F5F4EF] transition-colors">
                          <span>EXPLOREAZĂ</span>
                          <span className="text-[#A97F60]">→</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-[#647082]">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-[#8A95A5]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A97F60]" />
                    <span>DIRECTIVA MANDATELOR DEDICATE</span>
                  </span>
                  <span>·</span>
                  <span>CONFIDENȚIALITATE STRICTĂ (NDA)</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#B8C2CF]">CRISTIAN VĂDUVA DESK</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60]" />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ============================================================== */}
      {/* FULL-SCREEN ARCHITECTURAL MOBILE DRAWER */}
      {/* ============================================================== */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-[100] glass-architectural text-[#F5F4EF] flex flex-col h-full overflow-hidden animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Meniu de navigare mobil"
        >
          {/* Subtle architectural atmosphere */}
          <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#A97F60]/[0.06] rounded-full blur-[140px] pointer-events-none" />

          {/* Drawer Top Header (pinned) */}
          <div className="relative z-10 shrink-0 flex items-center justify-between border-b border-white/[0.1] px-6 sm:px-10 py-5 bg-[#07090D]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#A97F60]" />
              <span className="font-serif text-lg font-bold tracking-wider text-[#F5F4EF]">
                EXECUTIVE
              </span>
              <span className="font-mono text-[10px] text-[#A97F60] uppercase tracking-widest">
                CRISTIAN VĂDUVA
              </span>
            </div>

            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2.5 border border-white/[0.12] text-[#F5F4EF] hover:border-[#A97F60] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Închide meniul"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Accordion Categories (scrollable middle) */}
          <div className="relative z-10 flex-1 overflow-y-auto px-6 sm:px-10 py-6 space-y-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#A97F60] block mb-2 font-semibold">
              ARHITECTURĂ DECIZIONALĂ · CATEGORII
            </span>

            <div className="divide-y divide-white/[0.08]">
              {NAV_CATEGORIES.map((cat) => {
                const isExpanded = mobileExpandedCat === cat.id;

                return (
                  <div key={cat.id} className="py-3">
                    <button
                      onClick={() => setMobileExpandedCat(isExpanded ? null : cat.id)}
                      className="w-full flex items-center justify-between py-2 text-left group min-h-[44px] cursor-pointer"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-xs text-[#A97F60]">
                          {cat.categoryNumber}
                        </span>
                        <span className="font-serif text-xl sm:text-2xl text-[#F5F4EF] group-hover:text-[#A97F60] transition-colors">
                          {cat.label}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#8A95A5] transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-[#A97F60]" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-6 pt-2 pb-4 space-y-3 animate-in fade-in slide-in-from-top-1 duration-200">
                        {cat.items.map((item) => {
                          const isActive = pathname === item.href;

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsMobileOpen(false)}
                              className={`block p-3 border transition-colors ${
                                isActive
                                  ? "border-[#A97F60] bg-[#A97F60]/10 text-[#F5F4EF]"
                                  : "border-white/[0.06] bg-[#0C1119] text-[#B8C2CF] hover:text-[#F5F4EF] hover:border-white/20"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-serif text-base text-[#F5F4EF]">
                                  {item.title}
                                </span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#A97F60]" />
                              </div>
                              <p className="font-sans text-xs text-[#8A95A5] mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct Links in Mobile Drawer */}
            <div className="pt-6 border-t border-white/[0.08] space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8A95A5] block mb-2 font-semibold">
                PAGINI PRINCIPALE
              </span>
              <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                <Link
                  href="/about"
                  onClick={() => setIsMobileOpen(false)}
                  className="p-3 border border-white/[0.08] bg-[#0C1119] text-center text-[#B8C2CF] hover:text-[#F5F4EF] hover:border-[#A97F60]"
                >
                  ABOUT
                </Link>
                <Link
                  href="/media"
                  onClick={() => setIsMobileOpen(false)}
                  className="p-3 border border-white/[0.08] bg-[#0C1119] text-center text-[#B8C2CF] hover:text-[#F5F4EF] hover:border-[#A97F60]"
                >
                  MEDIA
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="p-3 border border-white/[0.08] bg-[#0C1119] text-center text-[#B8C2CF] hover:text-[#F5F4EF] hover:border-[#A97F60]"
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>

          {/* Drawer Bottom Actions (pinned with safe padding) */}
          <div className="relative z-10 shrink-0 px-6 sm:px-10 pt-4 pb-8 sm:pb-10 border-t border-white/[0.1] bg-[#07090D] space-y-3">
            <Link
              href="/programare"
              onClick={() => setIsMobileOpen(false)}
              className="w-full py-4 bg-[#F5F4EF] text-[#07090D] font-mono text-xs uppercase tracking-[0.22em] font-bold flex items-center justify-center gap-2 shadow-xl hover:bg-white transition-colors"
            >
              <Clock className="w-4 h-4 text-[#07090D]" />
              <span>SOLICITĂ DISCUȚIE DE 20 MINUTE</span>
              <ArrowUpRight className="w-4 h-4 text-[#07090D]" />
            </Link>

            <div className="flex justify-between items-center font-mono text-[10px] text-[#8A95A5] uppercase tracking-wider pt-1">
              <span>BUCUREȘTI · ROMÂNIA</span>
              <span>ACORD NDA CONFIDENȚIAL</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
