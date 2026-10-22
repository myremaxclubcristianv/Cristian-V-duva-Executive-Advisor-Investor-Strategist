"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ExternalLink, ShieldCheck, Compass, Building2, TrendingUp, Cpu } from "lucide-react";
import { useLocale } from "@/app/context/LocaleContext";

export default function FeaturedVenturesShowcase() {
  const { locale } = useLocale();
  const isRtl = locale === "ar";

  return (
    <section id="ventures" className="py-24 sm:py-32 lg:py-40 bg-[#07090D] text-[#F5F4EF] border-b border-white/[0.08] relative overflow-hidden">
      <div className="site-container space-y-16 sm:space-y-24">
        
        {/* Section Header (Apple-Style Minimalist Typography) */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2.5 font-mono text-[11px] sm:text-xs text-[#A97F60] uppercase tracking-[0.24em] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60]" />
            <span>THE CRISTIAN VĂDUVA ECOSYSTEM</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.08]">
            Dedicated platforms. <span className="text-[#A97F60] italic font-light">A rigorous advisory standard.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#86868B] font-light leading-relaxed max-w-2xl">
            Each initiative is designed to address structural challenges in prime markets — from rigorous property selection to financial structuring and asset protection.
          </p>
        </div>

        {/* ── MODULE 01: THE FLAGSHIP BILLBOARD — HOMEFIND ── */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-white/[0.1] bg-[#0C1119] min-h-[520px] lg:min-h-[580px] flex flex-col justify-end p-8 sm:p-12 lg:p-16 group transition-all duration-500 hover:border-[#93C8FF]/40">
          {/* Cinematic Background Plane */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/media/cristian-vaduva/personal/cristian-vaduva-residence-curved-glass-terrace.png"
              alt="HomeFind — Curated Prime Real Estate Platform"
              fill
              sizes="100vw"
              className="object-cover object-center scale-[1.01] group-hover:scale-[1.03] transition-transform duration-1000 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/80 to-[#07090D]/20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07090D] via-[#07090D]/60 to-transparent pointer-events-none" />
          </div>

          {/* Content Plane */}
          <div className="relative z-10 max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/[0.12] font-mono text-[10px] uppercase tracking-[0.2em] text-[#93C8FF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />
              <span>CURATED REAL ESTATE OPPORTUNITIES</span>
            </div>

            <div className="space-y-3">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EF] font-normal tracking-tight">
                HomeFind
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#B8C2CF] font-light leading-relaxed">
                Prime property discovery, structured transparently. Diligent selection, authentic architectural photography, and intelligence designed for informed capital decisions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://homefind.cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple-pill-primary inline-flex items-center gap-2"
              >
                <span>OPEN HOMEFIND</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <Link
                href="/real-estate/properties"
                className="apple-action-link text-[#F5F4EF] hover:text-[#93C8FF] text-sm"
              >
                <span>View portfolio selection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── MODULE 02 & 03: DUAL-UP PRODUCT HIGHLIGHT (APPLE STYLE) ── */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Dual 01: CV Finance & Capital Advisory */}
          <div className="rounded-3xl p-8 sm:p-12 border border-white/[0.08] bg-[#0C1119] flex flex-col justify-between gap-8 group hover:border-white/[0.2] transition-all duration-300 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A97F60] font-semibold">
                CAPITAL STRUCTURING & INVESTMENT
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] font-normal">
                CV Finance
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#86868B] font-light leading-relaxed">
                Financial engineering and empirical like-for-like yield analysis. Separating asking prices from realized transaction values and structuring complex acquisitions alongside certified valuation partners.
              </p>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07090D]">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-office-blueprints-underwriting.jpg"
                alt="CV Finance — Capital analysis and underwriting"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1119] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            <div className="pt-2 relative z-10">
              <a
                href="https://credite.cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-action-link"
              >
                <span>Explore financial services</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Dual 02: Insurance Advisory */}
          <div className="rounded-3xl p-8 sm:p-12 border border-white/[0.08] bg-[#0C1119] flex flex-col justify-between gap-8 group hover:border-white/[0.2] transition-all duration-300 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#93C8FF] font-semibold">
                ASSET PROTECTION · GENERALI PARTNER
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] font-normal">
                Insurance Advisory
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#86868B] font-light leading-relaxed">
                Regulated private wealth risk-transfer solutions. Safeguarding prime residences, private collections, and corporate holdings in partnership with leading international insurers.
              </p>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07090D]">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-office-generali-portfolio-protection.png"
                alt="Insurance Advisory — Asset protection and risk transfer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1119] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            <div className="pt-2 relative z-10">
              <a
                href="https://insurance.cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-action-link"
              >
                <span>Explore protection solutions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* ── MODULE 04 & 05: ASYMMETRICAL BENTO (GLOBAL CORRIDORS & CONSTRUCTION) ── */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Module 04: Dubai & Monaco International (7 cols - Expansive Global Corridor) */}
          <div className="lg:col-span-7 rounded-3xl p-8 sm:p-12 border border-white/[0.08] bg-[#0C1119] flex flex-col justify-between gap-8 group hover:border-white/[0.2] transition-all duration-300 relative overflow-hidden">
            <div className="space-y-4 relative z-10 max-w-xl">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A97F60] font-semibold">
                GLOBAL CORRIDORS · CHESTERTONS ALLIANCE
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F4EF] font-normal">
                Dubai & Monaco International
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#86868B] font-light leading-relaxed">
                Strategic advisory for cross-border acquisitions across global financial capitals: Dubai, Monaco, Marbella, and Miami. Direct liaison with local Chestertons international network desks.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07090D]">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-development-skytower-inspection.png"
                alt="Dubai & Monaco International — Global prime real estate"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1119] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            <div className="pt-2 relative z-10">
              <a
                href="https://dubai.cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-action-link"
              >
                <span>Explore international network</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Module 05: Constructions Advisory (5 cols - Craft & Development) */}
          <div className="lg:col-span-5 rounded-3xl p-8 sm:p-12 border border-white/[0.08] bg-[#0C1119] flex flex-col justify-between gap-8 group hover:border-white/[0.2] transition-all duration-300 relative overflow-hidden">
            <div className="space-y-4 relative z-10">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#93C8FF] font-semibold">
                ARCHITECTURE & DEVELOPMENT
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] font-normal">
                Constructions Advisory
              </h4>
              <p className="font-sans text-sm sm:text-base text-[#86868B] font-light leading-relaxed">
                Contemporary residential development, durable materials, and precision project management. Uncompromising construction standards for landmark private residences.
              </p>
            </div>

            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07090D]">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-development-curved-balcony-armani.png"
                alt="Constructions Advisory — Prime construction and development"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1119] via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            <div className="pt-2 relative z-10">
              <a
                href="https://constructions.cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-action-link"
              >
                <span>Access Constructions Advisory</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
