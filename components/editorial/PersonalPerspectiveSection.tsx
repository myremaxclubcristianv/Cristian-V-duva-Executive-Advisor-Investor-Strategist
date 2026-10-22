"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck } from "lucide-react";

interface PersonalPerspectiveSectionProps {
  className?: string;
}

export default function PersonalPerspectiveSection({
  className = "",
}: PersonalPerspectiveSectionProps) {
  return (
    <section className={`py-24 sm:py-32 lg:py-40 border-b border-white/[0.08] bg-[#07090D] text-[#F5F4EF] relative overflow-hidden ${className}`}>
      <div className="site-container space-y-16 sm:space-y-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-xs text-[#A97F60] uppercase tracking-[0.24em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60]" />
              <span>STRATEGIC ADVISORY · FOUNDER PROFILE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight">
              Cristian Văduva. <span className="text-[#A97F60] italic font-light">A distinct perspective.</span>
            </h2>
          </div>

          <div className="shrink-0 flex items-center gap-2 font-mono text-xs text-[#86868B]">
            <ShieldCheck className="w-4 h-4 text-[#A97F60]" />
            <span className="uppercase tracking-[0.18em]">Limited Private Mandates Annually</span>
          </div>
        </div>

        {/* Master Spread: Authentic Photography + Executive Philosophy */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Authentic Portrait (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border border-white/[0.1] bg-[#0C1119] shadow-2xl group">
              <Image
                src="/media/cristian-vaduva/personal/cristian-vaduva-office-armchair-consultation.png"
                alt="Cristian Văduva — Strategic advisory in the executive office"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-top scale-[1.01] group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80 pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#07090D]/85 backdrop-blur-xl border border-white/[0.1] space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#A97F60] block font-semibold">
                  EXECUTIVE ADVISOR & INVESTOR
                </span>
                <h3 className="font-serif text-xl text-[#F5F4EF] font-normal">
                  Cristian Văduva
                </h3>
                <span className="font-mono text-[10px] text-[#86868B] block">
                  Bucharest (Headquarters) · Vienna · Global Corridors
                </span>
              </div>
            </div>
          </div>

          {/* Strategic Philosophy Narrative (7 cols) - Open Editorial Layout */}
          <div className="lg:col-span-7 space-y-8 lg:pt-2">
            
            {/* Monumental Editorial Quote - Open Canvas */}
            <div className="space-y-4">
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#F5F4EF] leading-[1.2] font-light">
                &ldquo;An exceptional property becomes an enduring asset only when underpinned by uncompromising title diligence, robust structural integrity, and comprehensive wealth protection.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="w-8 h-[1px] bg-[#A97F60]" />
                <span className="font-mono text-[11px] text-[#A97F60] uppercase tracking-[0.2em] font-semibold">
                  CRISTIAN VĂDUVA — EXECUTIVE DIRECTIVE
                </span>
              </div>
            </div>

            {/* Narrative Body */}
            <div className="space-y-4 font-sans text-base text-[#B8C2CF] font-light leading-relaxed">
              <p>
                Unlike conventional brokerage models driven primarily by transaction volume, the Executive practice operates as a dedicated private advisory bureau. We accept a carefully curated number of mandates annually to ensure direct principal engagement and rigorous attention to every strategic detail.
              </p>
              <p>
                We evaluate prime real estate through the lens of structural durability, comprehensive multi-decade chain of title diligence, liquidity profiles, and multi-generational capital preservation.
              </p>
            </div>

            {/* Academic & Professional Foundation - Open Editorial Divider Rail */}
            <div className="border-y border-white/[0.08] py-6 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                ACADEMIC & PROFESSIONAL FOUNDATION
              </span>
              <div className="grid sm:grid-cols-2 gap-6 font-mono text-xs text-[#86868B]">
                <div className="space-y-1">
                  <span className="text-[#F5F4EF] font-sans font-medium text-sm block">Higher Education — 3 Degrees</span>
                  <span className="text-xs text-[#8A95A5]">Economics · Law · Ecology</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[#F5F4EF] font-sans font-medium text-sm block">European Academic Mobility</span>
                  <span className="text-xs text-[#8A95A5]">Madrid · Amiens · Malta</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="btn-apple-pill-primary inline-flex items-center gap-2"
              >
                <span>BIOGRAPHY & BACKGROUND</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#07090D]" />
              </Link>

              <Link
                href="/programare"
                className="btn-apple-pill-secondary inline-flex items-center gap-2"
              >
                <span>SCHEDULE PRIVATE CONSULTATION</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#93C8FF]" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
