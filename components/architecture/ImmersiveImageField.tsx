"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, MapPin } from "lucide-react";

export default function ImmersiveImageField() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex items-end py-16 sm:py-24 border-b border-white/[0.08] overflow-hidden bg-[#07090D] text-[#F5F4EF]">
      {/* ── The Full-Bleed Cinematic Architectural Visual ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/architecture/monaco-cliffside.jpg"
          alt="Ultra-Prime Mediterranean Architectural Residence — Monaco Coastline"
          fill
          sizes="100vw"
          className="object-cover object-center scale-[1.02] transition-transform duration-1000 ease-out"
        />
        {/* Layered Lighting & Depth Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090D]/85 via-transparent to-[#07090D]/70" />
        <div className="absolute inset-0 arch-noise pointer-events-none opacity-25" />
      </div>

      {/* ── Structural Precision Framing Overlay ── */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Framing Rules */}
        <div className="absolute top-12 left-6 right-6 lg:left-16 lg:right-16 h-[1px] bg-white/[0.12]" />
        <div className="absolute bottom-12 left-6 right-6 lg:left-16 lg:right-16 h-[1px] bg-white/[0.12]" />
        <div className="absolute top-6 bottom-6 left-12 lg:left-24 w-[1px] bg-white/[0.06] hidden sm:block" />
        <div className="absolute top-6 bottom-6 right-12 lg:right-24 w-[1px] bg-white/[0.06] hidden sm:block" />

        {/* Technical Corner Markers with Electric Ice Blue */}
        <div className="absolute top-12 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
        <div className="absolute top-12 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />
        <div className="absolute bottom-12 left-6 lg:left-16 w-3 h-3 border-b border-l border-[#93C8FF]" />
        <div className="absolute bottom-12 right-6 lg:right-16 w-3 h-3 border-b border-r border-[#93C8FF]" />
      </div>

      {/* ── Top Architectural Annotation ── */}
      <div className="absolute top-16 left-0 right-0 z-20">
        <div className="site-container flex items-center justify-between text-xs font-mono text-[#D8D0C2]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
            <span className="tracking-[0.24em] uppercase text-[#93C8FF]">04 // IMMERSIVE FIELD</span>
            <span className="text-white/20">/</span>
            <span className="hidden sm:inline text-[#B8C2CF]">OFF-MARKET COASTAL ASSET CLASS</span>
          </div>

          <div className="flex items-center gap-2 text-[#B8C2CF] tracking-widest text-[10px]">
            <MapPin className="w-3.5 h-3.5 text-[#93C8FF]" />
            <span>MONACO AXIS · LAT 43.7384° N · LON 07.4246° E</span>
          </div>
        </div>
      </div>

      {/* ── Integrated Editorial Composition ── */}
      <div className="site-container relative z-20 w-full">
        <div className="max-w-3xl space-y-6 bg-[#07090D]/80 backdrop-blur-xl border border-white/[0.12] p-8 sm:p-12 shadow-2xl">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[#93C8FF]">
            <Compass className="w-3.5 h-3.5" />
            <span>TROPHY ASSET ORIGINATION</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] leading-[1.04] tracking-tight">
            We originate assets that never touch the public marketplace.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#B8C2CF] font-light leading-relaxed">
            Ultra-prime acquisitions are not found on public portals. They are negotiated behind non-disclosure covenants between principals who value confidentiality above liquidity. We represent discerning buyers in direct, discreet sovereign transactions.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.1]">
            <div className="font-mono text-xs text-[#D8D0C2]">
              <span className="text-[#8A95A5] block text-[10px] uppercase">JURISDICTION COVERAGE</span>
              <span>Monaco · Cap d’Antibes · Saint-Jean-Cap-Ferrat · Zurich</span>
            </div>

            <Link
              href="/real-estate"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#93C8FF] text-[#07090D] hover:bg-[#B8C2CF] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-colors"
            >
              <span>VIEW REAL ESTATE MONOGRAPH</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
