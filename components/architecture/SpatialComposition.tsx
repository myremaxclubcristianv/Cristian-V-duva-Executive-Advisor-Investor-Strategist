"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, CheckCircle2, Building, Scale, TrendingUp } from "lucide-react";

export default function SpatialComposition() {
  return (
    <section className="relative w-full bg-[#0C1119] text-[#F5F4EF] py-28 sm:py-36 border-b border-white/[0.08] overflow-hidden">
      {/* Background Architectural Subtle Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none" />

      <div className="site-container relative z-10 space-y-16 sm:space-y-24">
        {/* Section Header with Architectural Coordinates */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.1] pb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#93C8FF]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
            <span>05 // SPATIAL COMPOSITION</span>
            <span className="text-white/20">/</span>
            <span className="text-[#B8C2CF]">PRIVATE PRACTICE SALON</span>
          </div>
          <span className="text-[#8A95A5]">STRUCTURAL DUE DILIGENCE & NEGOTIATION</span>
        </div>

        {/* The Layered Spatial Composition */}
        <div className="relative grid lg:grid-cols-12 gap-8 items-center">
          {/* 1. Large Primary Visual (7 cols) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full border border-white/[0.14] bg-[#1B2028] p-3 shadow-2xl">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/architecture/executive-study.jpg"
                  alt="Cristian Văduva Private Advisory Study — Executive Salon"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/80 via-transparent to-transparent" />
              </div>

              {/* Technical Drawing Blueprint Overlay Box */}
              <div className="absolute -bottom-6 -left-6 hidden sm:block p-4 border border-white/[0.16] bg-[#07090D]/95 backdrop-blur-xl max-w-xs font-mono text-[10px] space-y-1 shadow-2xl">
                <div className="text-[#93C8FF] tracking-widest font-semibold flex items-center gap-1.5">
                  <Scale className="w-3 h-3" />
                  <span>TRANSACTION ADVISOR</span>
                </div>
                <p className="text-[#B8C2CF] leading-snug">
                  Independent unilateral representation. No hidden dual-agency commissions.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Offset Overlapping Content Panel (5 cols, overlapping on desktop) */}
          <div className="lg:col-span-5 lg:-ml-12 z-20 space-y-6">
            <div className="border border-white/[0.14] bg-[#1B2028]/95 backdrop-blur-2xl p-8 sm:p-10 space-y-6 shadow-2xl relative">
              {/* Corner crosshairs with Electric Ice Blue */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-[#93C8FF]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-[#93C8FF]" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-[#93C8FF]" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-[#93C8FF]" />

              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#A97F60] block font-semibold">
                  MANDATE EXECUTION METHODOLOGY
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF] leading-tight">
                  High-Stakes Representation. Zero Dual-Agency Compromise.
                </h3>
              </div>

              <p className="font-sans text-sm text-[#B8C2CF] font-light leading-relaxed">
                Traditional real estate and capital brokers are incentivized to close transactions regardless of principal risk. We operate strictly as exclusive retained advisors—auditing contracts, stress-testing valuation assumptions, and insulating capital against downside scenarios.
              </p>

              {/* Verified Pillars */}
              <div className="space-y-3 font-mono text-xs border-t border-white/[0.08] pt-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#93C8FF] mt-0.5 shrink-0" />
                  <span className="text-[#D8D0C2]">Forensic title, planning, and environmental risk due diligence</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#93C8FF] mt-0.5 shrink-0" />
                  <span className="text-[#D8D0C2]">Cross-border holding entity & capital structure alignment</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#93C8FF] mt-0.5 shrink-0" />
                  <span className="text-[#D8D0C2]">Off-market price negotiation grounded in replacement cost</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#93C8FF] hover:text-[#B8C2CF] font-semibold transition-colors"
                >
                  <span>REVIEW FULL GOVERNANCE PROTOCOL</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
