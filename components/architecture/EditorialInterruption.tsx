import React from "react";
import Link from "next/link";
import { ArrowUpRight, Building2, TrendingUp, ShieldCheck, Scale, Compass } from "lucide-react";

export default function EditorialInterruption() {
  return (
    <section className="relative w-full surface-porcelain py-28 sm:py-36 lg:py-44 overflow-hidden border-y border-[#D8D0C2]">
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
            <span className="font-semibold text-[#07090D]">02 // THE MANDATE</span>
            <span className="text-[#07090D]/30">/</span>
            <span>A DIFFERENT PERSPECTIVE</span>
          </div>
          <span className="text-[#647082]">BUCHAREST · MONACO · DUBAI</span>
        </div>

        {/* Asymmetrical Editorial Lead Composition */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Dominant Headline (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#07090D] leading-[1.04] tracking-tight">
              In the architecture of wealth, conventional thinking is the highest risk.
            </h2>

            <p className="font-sans text-lg sm:text-xl text-[#1B2028] font-light max-w-2xl leading-relaxed">
              When navigating cross-border acquisitions and institutional capital allocation, traditional brokerages offer access; we architect irreversible advantage. The Executive practice integrates prime real estate representation, private investment syndication, and institutional wealth defense into one cohesive fiduciary counsel.
            </p>
          </div>

          {/* Narrow Secondary Column (4 cols): Practice Standards */}
          <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-[#07090D]/10 lg:pl-10">
            <div className="space-y-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#A97F60] block font-semibold">
                THE ADVISORY CRITERIA
              </span>
              <p className="font-sans text-sm text-[#1B2028] leading-relaxed">
                Mandates are accepted exclusively on a retained, sole-representative basis. We maintain strict counter-party screening to preserve confidentiality and eliminate conflicting transactional commissions.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center border-b border-[#07090D]/10 pb-2">
                <span className="text-[#647082]">MANDATE SIZE</span>
                <span className="font-sans font-semibold text-[#07090D]">€5M – €100M+</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#07090D]/10 pb-2">
                <span className="text-[#647082]">PRINCIPAL FOCUS</span>
                <span className="font-sans font-semibold text-[#07090D]">Family Offices & UHNW</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#07090D]/10 pb-2">
                <span className="text-[#647082]">CONFIDENTIALITY</span>
                <span className="font-sans font-semibold text-[#07090D]">Strict Swiss Standard</span>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#07090D] text-[#F5F4EF] hover:bg-[#1B2028] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-colors shadow-lg"
            >
              <span>EXPLORE FULL MANDATE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ── 3 DISTINCT PILLARS: REAL ESTATE ADVISORY, INVESTMENT STRATEGY, ASSET PROTECTION ── */}
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          
          {/* Pillar 01: Real Estate Advisory */}
          <div className="relative p-8 sm:p-10 border border-[#07090D]/15 bg-white space-y-6 shadow-sm flex flex-col justify-between group hover:border-[#07090D] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#07090D]/30 group-hover:border-[#07090D] pointer-events-none transition-colors" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#07090D]/30 group-hover:border-[#07090D] pointer-events-none transition-colors" />
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#07090D]/30 group-hover:border-[#07090D] pointer-events-none transition-colors" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#07090D]/30 group-hover:border-[#07090D] pointer-events-none transition-colors" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#07090D]/10 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#785338] font-semibold">
                  PILLAR 01
                </span>
                <Building2 className="w-4 h-4 text-[#07090D]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#07090D] leading-snug">
                Real Estate Advisory
              </h3>
              <p className="font-sans text-sm text-[#1B2028]/85 font-light leading-relaxed">
                Unilateral representation of high-net-worth buyers and sovereign asset owners across Bucharest, Monaco, and Dubai. Sourcing off-market trophy penthouses, heritage villas, and land banks with forensic legal and structural auditing before commitment.
              </p>
            </div>
            <div className="pt-4 border-t border-[#07090D]/10 font-mono text-xs text-[#526071] flex items-center justify-between">
              <span className="tracking-wider">UNILATERAL FIDUCIARY</span>
              <Link href="/real-estate" className="text-[#07090D] hover:underline font-semibold flex items-center gap-1 group/link">
                <span>View Assets</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pillar 02: Investment Strategy */}
          <div className="relative p-8 sm:p-10 border border-[#07090D]/15 bg-white space-y-6 shadow-sm flex flex-col justify-between group hover:border-[#07090D] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#07090D]/30 group-hover:border-[#07090D] pointer-events-none transition-colors" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#07090D]/30 group-hover:border-[#07090D] pointer-events-none transition-colors" />
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#07090D]/30 group-hover:border-[#07090D] pointer-events-none transition-colors" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#07090D]/30 group-hover:border-[#07090D] pointer-events-none transition-colors" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#07090D]/10 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#785338] font-semibold">
                  PILLAR 02
                </span>
                <TrendingUp className="w-4 h-4 text-[#07090D]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#07090D] leading-snug">
                Investment Strategy
              </h3>
              <p className="font-sans text-sm text-[#1B2028]/85 font-light leading-relaxed">
                Direct balance sheet co-investments and private syndications alongside European family offices. Structuring Special Purpose Vehicles (SPVs), mezzanine financing, and stress-tested exit modeling calibrated for compounding equity and capital preservation.
              </p>
            </div>
            <div className="pt-4 border-t border-[#07090D]/10 font-mono text-xs text-[#526071] flex items-center justify-between">
              <span className="tracking-wider">ASYMMETRIC EQUITY</span>
              <Link href="/ventures" className="text-[#07090D] hover:underline font-semibold flex items-center gap-1 group/link">
                <span>View Ventures</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Pillar 03: Asset Protection */}
          <div className="relative p-8 sm:p-10 border border-[#07090D]/15 bg-white space-y-6 shadow-sm flex flex-col justify-between group hover:border-[#07090D] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#07090D]/30 group-hover:border-[#07090D] pointer-events-none transition-colors" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#07090D]/30 group-hover:border-[#07090D] pointer-events-none transition-colors" />
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#07090D]/30 group-hover:border-[#07090D] pointer-events-none transition-colors" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#07090D]/30 group-hover:border-[#07090D] pointer-events-none transition-colors" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#07090D]/10 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#785338] font-semibold">
                  PILLAR 03
                </span>
                <ShieldCheck className="w-4 h-4 text-[#07090D]" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#07090D] leading-snug">
                Asset Protection
              </h3>
              <p className="font-sans text-sm text-[#1B2028]/85 font-light leading-relaxed">
                Downside containment and institutional risk transfer in strategic alliance with Generali România. Comprehensive audits of property portfolios, agreed reconstruction valuations, corporate D&O liability, and confidential estate succession shielding.
              </p>
            </div>
            <div className="pt-4 border-t border-[#07090D]/10 font-mono text-xs text-[#526071] flex items-center justify-between">
              <span className="tracking-wider">GENERALI ALLIANCE</span>
              <a href="https://insurance.cristianvaduva.com" target="_blank" rel="noopener noreferrer" className="text-[#07090D] hover:underline font-semibold flex items-center gap-1 group/link">
                <span>Insurance Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
