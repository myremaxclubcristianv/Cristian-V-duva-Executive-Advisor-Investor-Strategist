// ExecutiveHeader – premium redesign
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowUpRight, Clock } from "lucide-react";

interface SubItem {
  title: string;
  href: string;
  description: string;
  badge?: string;
}

interface NavCategory {
  id: string;
  label: string;
  number: string;
  highlight: string;
  image: string;
  imageAlt: string;
  items: SubItem[];
}

const NAV_CATEGORIES: NavCategory[] = [
  {
    id: "advisory",
    label: "EXPERTISE",
    number: "01",
    highlight: "Mandate dedicate pentru cumpărători și vânzători de active rezidențiale de prestigiu.",
    image: "https://cristianvaduva.com/assets/hero-consultation.jpg",
    imageAlt: "Consultanță executivă Cristian Văduva",
    items: [
      { title: "Pentru Clienți Privați", href: "/pentru-clienti", description: "Reprezentare exclusivă, selecție off‑market și coordonare due‑diligence.", badge: "REPREZENTARE" },
      { title: "Cum Lucrez & Remunerație", href: "/cum-lucrez", description: "Procesul în 5 pași, transparență onorarii (retainer, success fee, hibrid).", badge: "PROCES" },
      { title: "Programare Consultație", href: "/programare", description: "Sesiune privată de 20 de minute cu opţiune NDA prealabil.", badge: "20 MIN" }
    ]
  },
  {
    id: "real-estate",
    label: "PROPRIETĂȚI",
    number: "02",
    highlight: "Curatoriat independent de reședințe excepționale în București și coridoare internaționale.",
    image: "https://aixluxury.com/images/1200/19210934/228_AdrianBirgauan.ro-BHtsOBOLJWawlbS_HAdnXw.jpg",
    imageAlt: "Portofoliu proprietăţi prime",
    items: [
      { title: "Portofoliu Prime (433)", href: "/real-estate/properties", description: "Catalog complet de vile, penthouse‑uri și proprietăţi verificate cadastral.", badge: "CATALOG LIVE" },
      { title: "Directiva Imobiliară", href: "/real-estate", description: "Standarde de selecție, arhitectură și analiză comparativă de valoare.", badge: "STANDARDE" },
      { title: "Dosarul Cumpărătorului", href: "/ghid-cumparator", description: "Ghid în 7 capitole cu checklist due‑diligence și export PDF.", badge: "GHID 2026" }
    ]
  },
  {
    id: "intelligence",
    label: "INSIGHTS",
    number: "03",
    highlight: "Analiză empirică, metodologie de cercetare ca la carte și transparență a datelor.",
    image: "https://cristianvaduva.com/assets/insights-thumb.jpg",
    imageAlt: "Metodologie de cercetare și audit",
    items: [
      { title: "Raport de Piață Rezidențial", href: "/raport-piata", description: "Metodologie transparentă în 8 puncte pentru piața prime din capitală.", badge: "METODOLOGIE" },
      { title: "Studii de Caz & Cadru", href: "/studii-de-caz", description: "Anatomia deciziei de achiziție, analiză de risc și studii wireframe.", badge: "STUDII" },
      { title: "Perspective & Analize", href: "/insights", description: "Comentarii de piață, tendințe urbanistice și semnale economice.", badge: "ANALIZE" }
    ]
  },
  {
    id: "ventures",
    label: "VENTURES",
    number: "04",
    highlight: "Parteneriate internaționale confirmate și infrastructură digitală integrată.",
    image: "https://cristianvaduva.com/assets/ventures-thumb.jpg",
    imageAlt: "Relaţii de parteneriat Chestertons şi Generali",
    items: [
      { title: "Parteneri Strategici", href: "/parteneri", description: "Chestertons Global Network & contract de agent autorizat Generali România.", badge: "CONFIRMAT" },
      { title: "Ecosistemul Operațional", href: "/ecosystem", description: "Cele 13 platforme specializate de date, subvenții, asigurări și investiții.", badge: "13 HUB‑URI" },
      { title: "Iniţiative & Ventures", href: "/ventures", description: "Vehicule operaţionale și proiecte conexe de dezvoltare.", badge: "PROIECTE" }
    ]
  },
  {
    id: "about",
    label: "DESPRE",
    number: "05",
    highlight: "Parcurs academic, formare multidisciplinară şi birou direct de contact.",
    image: "https://cristianvaduva.com/assets/about-thumb.jpg",
    imageAlt: "Cristian Văduva — Profil profesional",
    items: [
      { title: "Biografie Profesională", href: "/about", description: "3 licențe, 3 masterate, experienţă internaţională Madrid, Amiens, Malta.", badge: "PROFIL" },
      { title: "Cadran de Contact", href: "/contact", description: "Canale securizate de comunicare directă cu Cristian Văduva.", badge: "BIROU" }
    ]
  }
];

export default function ExecutiveHeader() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection for compact header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click‑outside to close desktop overlay
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ESC key handling
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Body‑scroll lock for mobile drawer
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  // Hover bridge to prevent flicker
  const handleEnter = (id: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActive(id);
  };
  const handleLeave = () => {
    hoverTimer.current = setTimeout(() => setActive(null), 180);
  };

  const current = NAV_CATEGORIES.find(c => c.id === active);

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-[#07090D]/90 backdrop-blur-md" : "bg-transparent"}`}
    >
      {/* Top status bar */}
      <div className="w-full bg-[#F5F4EF] text-[#07090D] border-b border-[#A97F60]/40 py-1 px-4 text-xs font-mono uppercase tracking-[0.24em] flex items-center justify-between">
        <span className="hidden md:inline text-[#A97F60]">CONSILIER EXECUTIV · PORTOFOLIU PRIME</span>
        <span className="mx-auto md:mx-0">PRIVATE ADVISORY · REAL ESTATE · STRATEGY</span>
        <span className="hidden md:inline text-[#785338]">BUCUREȘTI · MONACO · DUBAI</span>
      </div>

      {/* Main navigation */}
      <div className="site-container flex items-center justify-between py-3 sm:py-4">
        {/* Brand */}
        <Link href="/" className="flex flex-col">
          <span className="font-serif text-3xl font-bold text-[#F5F4EF]">EXECUTIVE</span>
          <span className="font-mono text-xs uppercase tracking-wider text-[#A97F60]">CRISTIAN VĂDUVA</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden xl:flex items-center gap-4">
          {NAV_CATEGORIES.map(cat => {
            const isOpen = active === cat.id;
            const isCurrent = cat.items.some(i => i.href === pathname);
            return (
              <div
                key={cat.id}
                className="relative"
                onMouseEnter={() => handleEnter(cat.id)}
                onMouseLeave={handleLeave}
              >
                <button
                  onClick={() => setActive(isOpen ? null : cat.id)}
                  aria-expanded={isOpen}
                  className={`font-mono text-sm uppercase tracking-wider py-2 px-3 transition-colors ${isOpen || isCurrent ? "text-[#F5F4EF] bg-[#A97F60]/10" : "text-[#B8C2CF]/85 hover:text-[#F5F4EF] hover:bg-[#A97F60]/5"}`}
                >
                  {cat.label}
                  <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {/* Mega‑menu overlay */}
                {isOpen && (
                  <div className="fixed inset-0 bg-[#07090D]/95 backdrop-blur-lg z-40 flex items-start justify-center p-8 overflow-y-auto animate-fade-in">
                    <div className="relative w-full max-w-6xl bg-[#0C1119]/90 border border-[#A97F60]/30 rounded-lg overflow-hidden">
                      {/* Copper accent line */}
                      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#A97F60]/60 to-transparent" />
                      <div className="grid grid-cols-12 gap-6 p-8">
                        {/* Left description */}
                        <div className="col-span-4 space-y-3">
                          <div className="flex items-center gap-2 text-[#A97F60] font-mono text-xs uppercase tracking-wider">
                            <span>SECȚIUNEA {cat.number} · {cat.label}</span>
                          </div>
                          <h3 className="text-2xl font-serif text-[#F5F4EF]">{cat.label}</h3>
                          <p className="text-sm text-[#8A95A5]">{cat.highlight}</p>
                        </div>
                        {/* Middle items grid */}
                        <div className="col-span-4 grid gap-4">
                          {cat.items.map((item, idx) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setActive(null)}
                              className="group block p-4 border border-[#A97F60]/20 rounded hover:bg-[#A97F60]/10 transition-colors"
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-mono text-xs uppercase text-[#A97F60]">{item.badge ?? `0${idx + 1}`}</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-[#A97F60] opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <h4 className="font-serif text-lg text-[#F5F4EF] group-hover:text-[#A97F60] transition-colors">{item.title}</h4>
                              <p className="mt-1 text-xs text-[#8A95A5]">{item.description}</p>
                            </Link>
                          ))}
                        </div>
                        {/* Right featured image */}
                        <div className="col-span-4 relative h-56 rounded overflow-hidden">
                          <Image src={cat.image} alt={cat.imageAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                      </div>
                      {/* Close button */}
                      <button
                        onClick={() => setActive(null)}
                        className="absolute top-3 right-3 p-2 text-[#F5F4EF] hover:text-[#A97F60]"
                        aria-label="Close mega menu"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Direct links */}
        <div className="hidden xl:flex items-center gap-6 ml-4">
          <Link href="/about" className={`text-xs font-mono uppercase tracking-wider ${pathname === "/about" ? "text-[#F5F4EF]" : "text-[#B8C2CF]/80 hover:text-[#F5F4EF]"}`}>ABOUT</Link>
          <Link href="/media" className={`text-xs font-mono uppercase tracking-wider ${pathname === "/media" ? "text-[#F5F4EF]" : "text-[#B8C2CF]/80 hover:text-[#F5F4EF]"}`}>MEDIA</Link>
          <Link href="/contact" className={`text-xs font-mono uppercase tracking-wider ${pathname === "/contact" ? "text-[#F5F4EF]" : "text-[#B8C2CF]/80 hover:text-[#F5F4EF]"}`}>CONTACT</Link>
        </div>

        {/* CTA button */
        <Link
          href="/programare"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-[#A97F60]/60 bg-[#A97F60]/10 hover:bg-[#A97F60]/20 text-[#F5F4EF] font-mono text-sm uppercase rounded transition-colors"
        >
          <Clock className="w-4 h-4" />
          PRIVATE CONSULTATION
          <ArrowUpRight className="w-3 h-3" />
        </Link>

                                  <button className="xl:hidden p-2 text-[#F5F4EF] border border-white/12 bg-white/4 hover:bg-white/8 rounded" onClick={() => setMobileOpen(true)} aria-label="Open navigation menu"><Menu className="w-5 h-5" /></button>

      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#07090D]/95 backdrop-blur-lg flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-[#A97F60]/30">
            <Link href="/" className="flex flex-col" onClick={() => setMobileOpen(false)}>
              <span className="font-serif text-2xl font-bold text-[#F5F4EF]">EXECUTIVE</span>
              <span className="font-mono text-xs uppercase text-[#A97F60]">CRISTIAN VĂDUVA</span>
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-[#F5F4EF]">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            {NAV_CATEGORIES.map(cat => (
              <div key={cat.id} className="border-b border-[#A97F60]/20">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left font-mono uppercase text-sm text-[#F5F4EF]"
                  onClick={() => setActive(active === cat.id ? null : cat.id)}
                >
                  {cat.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${active === cat.id ? "rotate-180" : ""}`} />
                </button>
                {active === cat.id && (
                  <div className="bg-[#0C1119] p-4 space-y-3">
                    <p className="text-sm text-[#B8C2CF]">{cat.highlight}</p>
                    <ul className="space-y-2">
                      {cat.items.map(item => (
                        <li key={item.href}>
                          <Link href={item.href} className="block text-sm text-[#B8C2CF] hover:text-[#F5F4EF]" onClick={() => setMobileOpen(false)}>
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="p-4 border-t border-[#A97F60]/30">
            <Link
              href="/programare"
              className="flex items-center justify-center gap-2 px-4 py-2 border border-[#A97F60]/60 bg-[#A97F60]/10 hover:bg-[#A97F60]/20 text-[#F5F4EF] font-mono text-sm uppercase rounded transition-colors"
            >
              <Clock className="w-4 h-4" />
              PRIVATE CONSULTATION
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
