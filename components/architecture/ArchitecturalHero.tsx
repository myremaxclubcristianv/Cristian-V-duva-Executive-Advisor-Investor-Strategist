"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, ShieldCheck, CornerDownRight } from "lucide-react";

export default function ArchitecturalHero() {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-between pt-36 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 border-b border-[#B8C2CF]/[0.08] overflow-hidden bg-[#07090D] text-[#F5F4EF]">
      {/* ── Background Plane: The Impossible Building Visual ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/architecture/hero-monument.jpg"
          alt="The Impossible Building — Monumental Contemporary Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-[1.01] transition-transform duration-1000 ease-out"
        />
        {/* Layered Deep Blue-Black Shadows & Narrow Cold Light Beam */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/65 to-[#07090D]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090D]/95 via-[#07090D]/40 to-[#07090D]/90" />
        <div className="absolute inset-0 light-beam-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />
        <div className="absolute inset-0 arch-noise pointer-events-none opacity-30" />
      </div>

      {/* ── Structural Plane: Technical Framing, Datum Lines & Ice Crosshairs ── */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-24 left-0 right-0 h-[1px] bg-[#B8C2CF]/[0.08]" />
        <div className="absolute bottom-28 left-0 right-0 h-[1px] bg-[#B8C2CF]/[0.08]" />

        <div className="site-container h-full relative">
          <div className="absolute top-0 bottom-0 left-6 sm:left-10 lg:left-16 w-[1px] bg-white/[0.04]" />
          <div className="absolute top-0 bottom-0 right-6 sm:right-10 lg:right-16 w-[1px] bg-white/[0.04]" />
          
          {/* Subtle Electric Ice Blue Corner Crosshairs */}
          <div className="absolute top-28 left-6 sm:left-10 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]/70 -translate-x-[1px] -translate-y-[1px]" />
          <div className="absolute top-28 right-6 sm:right-10 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]/70 translate-x-[1px] -translate-y-[1px]" />
          <div className="absolute bottom-32 left-6 sm:left-10 lg:left-16 w-3 h-3 border-b border-l border-[#93C8FF]/70 -translate-x-[1px] translate-y-[1px]" />
          <div className="absolute bottom-32 right-6 sm:right-10 lg:right-16 w-3 h-3 border-b border-r border-[#93C8FF]/70 translate-x-[1px] translate-y-[1px]" />
        </div>
      </div>

      {/* ── Monumental Backdrop Lettering ("EXECUTIVE") ── */}
      <div className="absolute top-1/2 left-0 right-0 -translate-y-[56%] z-[1] select-none pointer-events-none overflow-hidden flex justify-center">
        <span className="font-monumental text-[18vw] sm:text-[19vw] lg:text-[17vw] xl:text-[16vw] font-light uppercase tracking-[-0.04em] text-[#B8C2CF]/[0.035] leading-none whitespace-nowrap">
          EXECUTIVE
        </span>
      </div>

      {/* ── Main Hero Composition (Asymmetric Architectural Grid) ── */}
      <div className="site-container relative z-20 flex-1 flex flex-col justify-center my-auto pt-4 sm:pt-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          {/* Left Column: Headline & Perspective Narrative */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.32em] text-[#B8C2CF] px-3.5 py-1.5 border border-white/[0.1] bg-[#07090D]/70 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>WORLD 01 // THE VOID · PERSPECTIVE CHANGES EVERYTHING</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[5.2rem] xl:text-[5.8rem] text-[#F5F4EF] leading-[1.04] sm:leading-[0.98] tracking-tight">
                Architectural Precision in High-Stakes Capital & Ultra-Prime Acquisitions.
              </h1>
            </div>

            <p className="font-sans text-sm sm:text-base lg:text-lg text-[#B8C2CF] font-light max-w-2xl leading-relaxed">
              Directing confidential cross-border acquisitions, prime asset structuring, and fiduciary advisory for European family offices, institutional principals, and private wealth.
            </p>

            {/* Action Array */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="#contact"
                className="group relative px-7 py-3.5 sm:px-8 sm:py-4 bg-[#93C8FF] hover:bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.24em] font-bold transition-all duration-300 shadow-2xl shadow-[#93C8FF]/20 flex items-center justify-center gap-3 overflow-hidden text-center edge-illuminate-blue"
              >
                <span className="relative z-10">REQUEST PRIVATE CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#index"
                className="px-6 py-3.5 sm:px-7 sm:py-4 border border-[#B8C2CF]/[0.2] hover:border-[#93C8FF] hover:text-[#F5F4EF] text-[#B8C2CF] bg-[#07090D]/50 backdrop-blur-md font-mono text-xs uppercase tracking-[0.22em] transition-all duration-300 flex items-center justify-center gap-2.5 text-center"
              >
                <span>EXPLORE THE MANDATE</span>
                <span className="text-[#93C8FF]">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Annotation Blueprint Panel */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="border border-[#B8C2CF]/[0.15] bg-[#0C1119]/85 backdrop-blur-2xl p-6 space-y-6 shadow-2xl relative">
              {/* Corner crosshairs */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-[#93C8FF]" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-[#93C8FF]" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-[#93C8FF]" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-[#93C8FF]" />

              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#93C8FF] font-semibold">
                  FIDUCIARY SPECIFICATION
                </span>
                <span className="font-mono text-[10px] text-[#647082]">REV. 2026.04</span>
              </div>

              <div className="space-y-3.5 font-mono text-xs text-[#B8C2CF]">
                <div className="flex justify-between items-baseline border-b border-white/[0.05] pb-2">
                  <span className="text-[#647082] text-[10px] tracking-wider uppercase">CORE SECTORS</span>
                  <span className="text-[#F5F4EF] font-sans font-medium text-right text-xs">Prime Real Estate · Capital Structuring</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/[0.05] pb-2">
                  <span className="text-[#647082] text-[10px] tracking-wider uppercase">OPERATING LOCATIONS</span>
                  <span className="text-[#F5F4EF] font-sans font-medium text-right text-xs">Monaco · Bucharest · Dubai</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/[0.05] pb-2">
                  <span className="text-[#647082] text-[10px] tracking-wider uppercase">ACADEMIC FOUNDATION</span>
                  <span className="text-[#93C8FF] font-sans font-medium text-right text-xs">Economics · Law · Ecology (3× B.Sc.)</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[#647082] text-[10px] tracking-wider uppercase">DISCRETION TIER</span>
                  <span className="text-[#F5F4EF] font-sans font-medium text-right text-xs">Single-Client Fiduciary Exclusivity</span>
                </div>
              </div>

              <div className="p-3 bg-white/[0.02] border border-white/[0.06] text-[11px] font-sans text-[#B8C2CF] leading-relaxed">
                Advising ultra-high-net-worth principals with uncompromising legal precision, independent valuation models, and generational asset sovereignty.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Foreground Plane: Bottom Horizontal Sequence & Scroll Indicator ── */}
      <div className="site-container relative z-20 w-full pt-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-[#B8C2CF]/[0.1] pt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-[#B8C2CF]">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-[#93C8FF]">01</span>
              <span>PRIME TRANSACTIONS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#93C8FF]">02</span>
              <span>CAPITAL STRUCTURING</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="text-[#93C8FF]">03</span>
              <span>FIDUCIARY DEFENSE</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#B8C2CF]">
            <span className="tracking-widest">SCROLL TO COMMENCE</span>
            <div className="w-5 h-8 border border-white/[0.2] flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-[#93C8FF] animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
