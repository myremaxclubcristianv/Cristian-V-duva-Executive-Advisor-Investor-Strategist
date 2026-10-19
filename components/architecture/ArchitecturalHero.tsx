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
    <section className="relative min-h-[92svh] w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 border-b border-white/[0.08] overflow-hidden bg-[#07090D] text-[#F5F4EF]">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#93C8FF]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* ── Main Editorial Hero Composition (Apple Dual-Pane / Monumental Grid) ── */}
      <div className="site-container relative z-10 flex-1 flex flex-col justify-center my-auto py-6 sm:py-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Monumental Headline & Core Message (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Apple-style Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] backdrop-blur-md max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60] shrink-0" />
              <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.12em] sm:tracking-[0.22em] text-[#D8D0C2] truncate">
                {t.hero.kicker || "CRISTIAN VĂDUVA · EXECUTIVE ADVISORY"}
              </span>
            </div>

            {/* Headline with Apple Typographic Scale */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-[#F5F4EF] leading-[1.02] tracking-tight font-normal">
                Investiții imobiliare. <br />
                <span className="text-[#A97F60] italic font-light">Rigoare fiduciară.</span>
              </h1>

              <p className="font-sans text-base sm:text-lg lg:text-xl text-[#B8C2CF] font-light max-w-xl leading-relaxed pt-2">
                Consultanță strategică, structurare de capital și acces off-market pentru proprietăți de mare valoare în București, Monaco și Dubai.
              </p>
            </div>

            {/* Apple Dual Pill CTA Action Suite */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/programare"
                className="btn-apple-pill-primary inline-flex items-center gap-2 min-h-[48px]"
              >
                <span>{t.hero.ctaConsultation || "SOLICITĂ CONSULTANȚĂ"}</span>
                <ArrowUpRight className="w-4 h-4 text-[#07090D]" />
              </Link>

              <Link
                href="/real-estate/properties"
                className="btn-apple-pill-secondary inline-flex items-center gap-2 min-h-[48px]"
              >
                <span>{t.hero.exploreCatalog || "EXPLOREAZĂ PORTOFOLIUL"}</span>
                <ArrowRight className="w-4 h-4 text-[#93C8FF]" />
              </Link>
            </div>

          </div>

          {/* Right Column: High-Impact Editorial Portrait (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-white/[0.12] bg-[#0C1119] shadow-2xl shadow-black/80 group">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-portrait-studio-formal.jpg"
                alt="Cristian Văduva — Executive Advisor & Investor"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                className="object-cover object-top scale-[1.01] group-hover:scale-[1.03] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-85 pointer-events-none" />

              {/* Minimal Clean Card Label (Zero technical camera metadata) */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#07090D]/85 backdrop-blur-xl border border-white/[0.1] space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                  CONSILIER EXECUTIV & INVESTITOR
                </span>
                <div className="font-serif text-lg text-[#F5F4EF] font-normal flex items-center justify-between">
                  <span>Cristian Văduva</span>
                  <span className="font-sans text-[11px] text-[#93C8FF] font-medium tracking-wide">BUCUREȘTI · MONACO · DUBAI</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Substantive Context Rail (Apple Grid Cleanliness) ── */}
      <div className="site-container relative z-10 w-full pt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-white/[0.08] pt-6 font-mono text-xs text-[#86868B]">
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold">ARIE DE ACȚIUNE</span>
            <span className="text-[#F5F4EF] font-sans text-sm block">București · Monaco · Dubai</span>
            <span className="text-[11px] text-[#647082] block">Rezidențial Prime & Investiții</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold">ALIANȚĂ INTERNAȚIONALĂ</span>
            <span className="text-[#F5F4EF] font-sans text-sm block">Chestertons Global Network</span>
            <span className="text-[11px] text-[#647082] block">Parteneriate & Mandate Private</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold">STANDARDE PROFESIONALE</span>
            <span className="text-[#F5F4EF] font-sans text-sm block">Mandat Fiduciar Dedicat</span>
            <span className="text-[11px] text-[#647082] block">Acorduri Bilaterale NDA la Cerere</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold">PORTOFOLIU VERIFICAT</span>
            <span className="text-[#F5F4EF] font-sans text-sm block">Platforma HomeFind</span>
            <Link href="/real-estate/properties" className="text-[11px] text-[#93C8FF] hover:underline block font-sans">
              15 active confirmate →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
