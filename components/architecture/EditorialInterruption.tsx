"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Scale, TrendingUp, ShieldCheck } from "lucide-react";

export default function EditorialInterruption() {
  return (
    <section className="relative w-full surface-porcelain py-24 sm:py-32 lg:py-40 overflow-hidden border-y border-[#D8D0C2]">
      {/* Background Architectural Subtle Grid on Porcelain */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(7, 9, 13, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(7, 9, 13, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px"
        }}
      />

      {/* Structural Crosshairs in Muted Copper */}
      <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-[#A97F60]/50" />
      <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-[#A97F60]/50" />
      <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-[#A97F60]/50" />
      <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-[#A97F60]/50" />

      <div className="site-container relative z-10 space-y-16 sm:space-y-24">
        {/* Top Eyebrow Sequence */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#07090D]/15 pb-4 font-mono text-xs uppercase tracking-[0.26em] text-[#A97F60]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#07090D]" />
            <span className="font-semibold text-[#07090D]">WORLD 02 // THE WHITE CHAMBER</span>
            <span className="text-[#07090D]/30">/</span>
            <span>STRUCTURAL CLARITY</span>
          </div>
          <span className="text-[#647082]">ACADEMIC ARCHITECTURE & MANDATE DOCTRINE</span>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Dominant Headline (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#07090D] leading-[1.04] tracking-tight">
              In the architecture of wealth, conventional thinking is the highest risk.
            </h2>

            <p className="font-sans text-lg sm:text-xl text-[#1B2028] font-light max-w-2xl leading-relaxed">
              When navigating cross-border acquisitions and institutional capital allocation, traditional brokerages offer access; we architect irreversible advantage. Every mandate is constructed at the intersection of contract jurisprudence, forensic valuation, and physical security.
            </p>

            {/* Academic Trinity Monograph */}
            <div className="pt-8 grid sm:grid-cols-3 gap-6 border-t border-[#07090D]/10 font-mono">
              <div className="space-y-2 p-5 border border-[#07090D]/10 bg-white/70 shadow-sm">
                <div className="flex items-center gap-2 text-[#A97F60] text-[10px] uppercase tracking-widest font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>DISCIPLINE 01</span>
                </div>
                <div className="font-sans font-semibold text-base text-[#07090D]">
                  B.Sc. Economics
                </div>
                <div className="text-[11px] text-[#647082] leading-snug">
                  Quantitative modeling, macro liquidity, yield curve optimization, and structural capital risk.
                </div>
              </div>

              <div className="space-y-2 p-5 border border-[#07090D]/10 bg-white/70 shadow-sm">
                <div className="flex items-center gap-2 text-[#A97F60] text-[10px] uppercase tracking-widest font-semibold">
                  <Scale className="w-3.5 h-3.5" />
                  <span>DISCIPLINE 02</span>
                </div>
                <div className="font-sans font-semibold text-base text-[#07090D]">
                  B.Sc. Law
                </div>
                <div className="text-[11px] text-[#647082] leading-snug">
                  Cross-border contract jurisprudence, entity structures, asset protection, and fiduciary shielding.
                </div>
              </div>

              <div className="space-y-2 p-5 border border-[#07090D]/10 bg-white/70 shadow-sm">
                <div className="flex items-center gap-2 text-[#A97F60] text-[10px] uppercase tracking-widest font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>DISCIPLINE 03</span>
                </div>
                <div className="font-sans font-semibold text-base text-[#07090D]">
                  B.Sc. Ecology
                </div>
                <div className="text-[11px] text-[#647082] leading-snug">
                  Environmental risk assessment, site topology, geotechnical resilience, and long-horizon sustainability.
                </div>
              </div>
            </div>
          </div>

          {/* Narrow Secondary Column (4 cols) */}
          <div className="lg:col-span-4 space-y-8 lg:border-l lg:border-[#07090D]/10 lg:pl-10">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#A97F60] block font-semibold">
                THE ADVISORY CRITERIA
              </span>
              <p className="font-sans text-sm text-[#1B2028] leading-relaxed">
                Mandates are accepted exclusively on a retained or sole-representative basis. We maintain strict counter-party screening to preserve confidentiality and eliminate conflicting transactional commissions.
              </p>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-[#07090D]/10 pb-2.5">
                <span className="text-[#647082]">MANDATE SIZE</span>
                <span className="font-sans font-semibold text-[#07090D]">€5M – €100M+</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#07090D]/10 pb-2.5">
                <span className="text-[#647082]">PRINCIPAL FOCUS</span>
                <span className="font-sans font-semibold text-[#07090D]">Family Offices & UHNW</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#07090D]/10 pb-2.5">
                <span className="text-[#647082]">CONFIDENTIALITY</span>
                <span className="font-sans font-semibold text-[#07090D]">Strict Swiss/EU Standard</span>
              </div>
              <div className="flex justify-between items-center pb-1">
                <span className="text-[#647082]">RESPONSE PROTOCOL</span>
                <span className="font-sans font-semibold text-[#07090D]">Direct Principal Direct-Line</span>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#07090D] text-[#F5F4EF] hover:bg-[#1B2028] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-lg"
            >
              <span>READ COMPLETE BIOGRAPHY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
