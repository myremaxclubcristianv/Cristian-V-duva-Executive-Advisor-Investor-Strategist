"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, MapPin } from "lucide-react";
import { useTranslation, useLocale } from "@/app/context/LocaleContext";

export default function ArchitecturalHero() {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const isRtl = locale === "ar";

  return (
    <section className="relative min-h-[92svh] w-full max-w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 border-b border-white/[0.08] overflow-hidden bg-[#07090D] text-[#F5F4EF]">
      {/* Background Subtle Ambient Glow (constrained to prevent document overflow) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(800px,96vw)] h-[min(400px,50vh)] bg-[#93C8FF]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* ── Main Editorial Hero Composition (Apple Dual-Pane / Monumental Grid) ── */}
      <div className="site-container relative z-10 flex-1 flex flex-col justify-center my-auto py-6 sm:py-12 w-full min-w-0">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center w-full min-w-0">
          
          {/* Left Column: Monumental Headline & Core Message (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-8 w-full min-w-0">
            
            {/* Apple-style Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-md max-w-full min-w-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60] shrink-0" />
              <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.1em] sm:tracking-[0.22em] text-[#D8D0C2] truncate min-w-0">
                {t.hero.kicker || "CRISTIAN VĂDUVA · EXECUTIVE ADVISORY"}
              </span>
            </div>

            {/* Headline with Apple Typographic Scale */}
            <div className="space-y-2.5 sm:space-y-3 w-full min-w-0">
              <h1 className="font-serif text-[1.75rem] xs:text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-[#F5F4EF] leading-[1.08] sm:leading-[1.05] tracking-tight font-normal break-words">
                Real estate investment. <br className="hidden xs:inline" />
                <span className="text-[#A97F60] italic font-light">Strategic rigor.</span>
              </h1>

              <p className="font-sans text-xs xs:text-sm sm:text-base lg:text-lg text-[#B8C2CF] font-light max-w-xl leading-relaxed pt-1 sm:pt-2">
                Strategic advisory, capital structuring, and off-market access for high-value properties across Bucharest, Monaco, and Dubai.
              </p>
            </div>

            {/* Apple Dual Pill CTA Action Suite */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto min-w-0">
              <Link
                href="/programare"
                className="btn-apple-pill-primary inline-flex items-center justify-center gap-2 min-h-[48px] px-5 sm:px-6 py-3.5 text-xs uppercase tracking-wider font-semibold text-center"
              >
                <span>{t.hero.ctaConsultation || "REQUEST CONSULTATION"}</span>
                <ArrowUpRight className="w-4 h-4 text-[#07090D] shrink-0" />
              </Link>

              <Link
                href="/real-estate/properties"
                className="btn-apple-pill-secondary inline-flex items-center justify-center gap-2 min-h-[48px] px-5 sm:px-6 py-3.5 text-xs uppercase tracking-wider font-semibold border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-[#F5F4EF] rounded-full transition-colors text-center"
              >
                <span>{t.hero.exploreCatalog || "EXPLORE PORTFOLIO"}</span>
                <ArrowRight className="w-4 h-4 text-[#93C8FF] shrink-0" />
              </Link>
            </div>

          </div>

          {/* Right Column: High-Impact Editorial Portrait (5 cols) */}
          <div className="lg:col-span-5 relative w-full min-w-0 pt-2 lg:pt-0">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full max-w-[340px] xs:max-w-md mx-auto rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0C1119] shadow-2xl shadow-black/80 group">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-portrait-studio-formal.jpg"
                alt="Cristian Văduva — Executive Advisor & Investor"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 480px) 92vw, (max-width: 640px) 448px, (max-width: 1024px) 420px, 480px"
                className="object-cover object-top scale-[1.01] group-hover:scale-[1.03] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-85 pointer-events-none" />

              {/* Minimal Clean Card Label */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 p-3 sm:p-4 rounded-2xl bg-[#07090D]/90 backdrop-blur-xl border border-white/[0.1] space-y-1">
                <span className="font-mono text-[8.5px] sm:text-[9px] uppercase tracking-[0.14em] sm:tracking-[0.24em] text-[#A97F60] font-semibold block truncate">
                  EXECUTIVE ADVISOR & INVESTOR
                </span>
                <div className="font-serif text-sm sm:text-base lg:text-lg text-[#F5F4EF] font-normal flex flex-wrap items-center justify-between gap-1">
                  <span>Cristian Văduva</span>
                  <span className="font-sans text-[9px] sm:text-[11px] text-[#93C8FF] font-medium tracking-wide">BUCHAREST · MONACO · DUBAI</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Substantive Context Rail (Apple Grid Cleanliness) ── */}
      <div className="site-container relative z-10 w-full pt-6 sm:pt-8 min-w-0">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 border-t border-white/[0.08] pt-6 font-mono text-xs text-[#86868B] w-full min-w-0">
          <div className="space-y-1 min-w-0">
            <span className="text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold truncate">GEOGRAPHIC FOOTPRINT</span>
            <span className="text-[#F5F4EF] font-sans text-sm block">Bucharest · Monaco · Dubai</span>
            <span className="text-[11px] text-[#8E9AA8] block">Prime Residential & Capital Placements</span>
          </div>

          <div className="space-y-1 min-w-0">
            <span className="text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold truncate">INTERNATIONAL ALLIANCE</span>
            <span className="text-[#F5F4EF] font-sans text-sm block">Chestertons Global Network</span>
            <span className="text-[11px] text-[#8E9AA8] block">Strategic Partnerships & Private Mandates</span>
          </div>

          <div className="space-y-1 min-w-0">
            <span className="text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold truncate">PROFESSIONAL STANDARDS</span>
            <span className="text-[#F5F4EF] font-sans text-sm block">Dedicated Private Advisory</span>
            <span className="text-[11px] text-[#8E9AA8] block">Bilateral NDA Protocols upon Request</span>
          </div>

          <div className="space-y-1 min-w-0">
            <span className="text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold truncate">CURATED PORTFOLIO</span>
            <span className="text-[#F5F4EF] font-sans text-sm block">HomeFind Network Platform</span>
            <Link href="/real-estate/properties" className="text-[11px] text-[#93C8FF] hover:underline block font-sans min-h-[32px] flex items-center">
              Explore property selection →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
