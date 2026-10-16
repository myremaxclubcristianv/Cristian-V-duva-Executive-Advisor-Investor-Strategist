"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function OversizedStatement() {
  return (
    <section className="relative w-full bg-[#07090D] text-[#F5F4EF] py-32 sm:py-44 lg:py-52 border-b border-white/[0.08] overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none" />

      {/* Structural Crosshair Coordinates */}
      <div className="site-container relative z-10 space-y-12 sm:space-y-16">
        {/* Top Header Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.1] pb-4 font-mono text-xs uppercase tracking-[0.24em] text-[#93C8FF]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
            <span>06 // OVERSIZED STATEMENT</span>
            <span className="text-white/20">/</span>
            <span className="text-[#B8C2CF]">MAXIMAL TYPOGRAPHIC HORIZON</span>
          </div>
          <span className="text-[#8A95A5]">CONFIDENTIAL FIDUCIARY DOCTRINE</span>
        </div>

        {/* The Monumental Statement */}
        <div className="space-y-6 sm:space-y-8">
          <div className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[6.8rem] leading-[0.98] tracking-tight text-[#F5F4EF]">
            <span>We do not negotiate for volume.</span>
            <br />
            <span className="font-editorial text-[#A97F60] italic">
              We architect irreversible advantage
            </span>
            <br />
            <span>for sovereign balance sheets.</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 pt-8 border-t border-white/[0.1] items-baseline">
            <div className="lg:col-span-8">
              <p className="font-sans text-base sm:text-xl text-[#B8C2CF] font-light max-w-2xl leading-relaxed">
                When acquiring ultra-prime assets, the difference between an ordinary broker and an architectural advisor is measured not in marketing adjectives, but in contract clause survivability, tax neutrality, and downside capitalization.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="space-y-3 font-mono text-xs text-[#8A95A5]">
                <div className="text-[#93C8FF] tracking-widest uppercase">
                  MANDATE ACCEPTANCE RATIO
                </div>
                <div className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                  &lt; 15% Accepted
                </div>
                <p className="text-[11px] leading-snug">
                  Strict intake screening to guarantee total focus and undivided principal allegiance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
