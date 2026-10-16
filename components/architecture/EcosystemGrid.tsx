"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ecosystemPlatforms } from "@/lib/ecosystemData";
import { SectionHeader, EditorialText } from "@/components/editorial";

export default function EcosystemGrid() {
  return (
    <section id="ecosystem" className="relative w-full bg-[#07090D] text-[#F5F4EF] py-28 sm:py-36 lg:py-44 border-b border-white/[0.08] overflow-hidden">
      <div className="site-container space-y-16 sm:space-y-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <SectionHeader
            eyebrow="05 // THE INTEGRATED OPERATING ECOSYSTEM"
            badge="ACTIVE PLATFORMS"
            title="Intelligent Capital & Operational Infrastructure"
            description="A proprietary network of analytical software engines, verified marketplaces, ultra-luxury placement desks, and asset underwriting divisions directed by Cristian Văduva."
          />

          <Link
            href="/ecosystem"
            className="px-6 py-3.5 border border-white/[0.14] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all shrink-0 flex items-center gap-2"
          >
            <span>FULL ECOSYSTEM DOSSIER</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Platforms Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {ecosystemPlatforms.slice(0, 4).map((platform, idx) => (
            <div
              key={platform.id}
              className="p-8 sm:p-10 border border-white/[0.1] bg-[#0C1119] hover:border-[#93C8FF]/50 transition-all duration-300 flex flex-col justify-between space-y-8 shadow-2xl relative group"
            >
              <div className="space-y-6">
                {/* Header Strip */}
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 font-mono text-xs">
                  <span className="font-serif text-3xl text-[#647082]/60">0{idx + 1}</span>
                  <span className="text-[#93C8FF] uppercase tracking-[0.24em] font-semibold text-[10px]">
                    {platform.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] group-hover:text-[#93C8FF] transition-colors leading-snug">
                    {platform.name}
                  </h3>
                  <span className="font-mono text-xs text-[#A97F60] uppercase tracking-wider block">
                    {platform.role}
                  </span>
                </div>

                <EditorialText size="sm" maxWidth="full" color="secondary" className="leading-relaxed">
                  {platform.description}
                </EditorialText>

                {/* Key Capabilities */}
                <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#B8C2CF] block font-semibold">
                    CORE SYSTEM CAPABILITIES:
                  </span>
                  <ul className="space-y-1.5 font-sans text-xs text-[#B8C2CF]/90 font-light">
                    {platform.keyCapabilities.slice(0, 2).map((cap, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF] shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#8A95A5]">{platform.domain}</span>
                {platform.url && platform.url !== "#" ? (
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#93C8FF] hover:underline"
                  >
                    <span>LAUNCH PLATFORM</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="font-mono text-[10px] uppercase text-[#8A95A5]">INTERNAL ACCESS</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
