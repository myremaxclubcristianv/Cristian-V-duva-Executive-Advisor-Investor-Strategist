"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Compass, Shield, Building2, Coins, Tv } from "lucide-react";

interface IndexItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  href: string;
  jurisdiction: string;
  metrics: string;
}

const INDEX_ITEMS: IndexItem[] = [
  {
    id: "idx-real-estate",
    number: "01",
    title: "Ultra-Prime Real Estate Mandates",
    category: "ACQUISITIONS & DISPOSITIONS",
    description:
      "Direct origination, confidential contract negotiations, and forensic due diligence for European troves, trophy estates, and coastal penthouses across Monaco, the French Riviera, Bucharest, and Dubai.",
    href: "/real-estate",
    jurisdiction: "Monaco · French Riviera · RO · UAE",
    metrics: "€5M – €100M+ Transaction Range",
  },
  {
    id: "idx-capital",
    number: "02",
    title: "Strategic Property Advisory & Acquisition Coordination",
    category: "PROPERTY ADVISORY",
    description:
      "Consultanță strategică pentru tranzacții imobiliare complexe, asistență în analiza financiară și coordonarea cu specialiști externi și instituții financiare.",
    href: "/cum-lucrez",
    jurisdiction: "București · Piețe Internaționale",
    metrics: "Analiză Financiară · Mandate Dedicate",
  },
  {
    id: "idx-security",
    number: "03",
    title: "Asset Protection & Risk Advisory",
    category: "RISK MANAGEMENT",
    description:
      "Consultanță privind protecția patrimoniului imobiliar și evaluarea riscurilor, în parteneriat autorizat cu Generali România.",
    href: "/parteneri",
    jurisdiction: "Conformitate UE · Standarde Contractuale",
    metrics: "Protecție Patrimonială · Confidențialitate",
  },
  {
    id: "idx-ventures",
    number: "04",
    title: "Direct Equity & Strategic Ventures",
    category: "PORTFOLIO VEHICLES",
    description:
      "Active advisory and equity stakes in proprietary property-technology platforms, digital intelligence networks, and performance marketing infrastructure.",
    href: "/ventures",
    jurisdiction: "Global Reach · Central Europe Operations",
    metrics: "Operational Alpha · Value Creation",
  },
  {
    id: "idx-broadcast",
    number: "05",
    title: "Executive TV Studio & Market Monograph",
    category: "MARKET INTELLIGENCE",
    description:
      "Broadcasting weekly high-definition macro analyses, market teardowns, and direct principal video commentary on YouTube to an audience of serious real estate investors.",
    href: "/tv",
    jurisdiction: "4K Studio Bucharest · Global Broadcast",
    metrics: "Verified YouTube Partner · Weekly Episodes",
  },
];

export default function ArchitecturalIndex() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="index" className="relative w-full bg-[#07090D] text-[#F5F4EF] py-28 sm:py-36 border-b border-white/[0.08] overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-20 pointer-events-none" />

      {/* Structural Datum Markers */}
      <div className="site-container relative z-10 space-y-16 sm:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.1] pb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
              <span>03 // THE ARCHITECTURAL INDEX</span>
              <span className="text-white/20">/</span>
              <span className="text-[#B8C2CF]">CAPABILITIES & MANDATES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] tracking-tight">
              Curated Practice Architecture.
            </h2>
          </div>

          <p className="font-mono text-xs text-[#B8C2CF] max-w-sm tracking-wider uppercase">
            A precise taxonomic catalog of advisory specializations, capital mandates, and strategic operations.
          </p>
        </div>

        {/* The Index: Monumental Numbered Rows */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {INDEX_ITEMS.map((item, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group block py-10 sm:py-14 transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle Hover Backlight & Edge Line Illumination */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#0C1119] via-[#1B2028]/40 to-transparent transition-opacity duration-300 pointer-events-none ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`absolute left-0 top-0 bottom-0 w-[2px] bg-[#93C8FF] transition-all duration-300 ${
                    isHovered ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                  }`}
                />

                <div className="relative z-10 grid lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
                  {/* Oversized Number Column */}
                  <div className="lg:col-span-2 flex items-baseline justify-between lg:justify-start gap-4">
                    <span className="font-monumental text-5xl sm:text-6xl lg:text-7xl font-light text-[#1B2028] group-hover:text-[#93C8FF] transition-colors duration-300">
                      {item.number}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#93C8FF] lg:hidden">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Category Column */}
                  <div className="lg:col-span-5 space-y-2">
                    <span className="hidden lg:block font-mono text-[10px] uppercase tracking-[0.25em] text-[#A97F60] font-semibold">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F4EF] group-hover:text-[#93C8FF] transition-colors duration-300 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description Column */}
                  <div className="lg:col-span-4 space-y-3">
                    <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 font-mono text-[10px] uppercase tracking-wider text-[#8A95A5]">
                      <span>{item.jurisdiction}</span>
                      <span>·</span>
                      <span className="text-[#D8D0C2]">{item.metrics}</span>
                    </div>
                  </div>

                  {/* Arrow Action Indicator */}
                  <div className="lg:col-span-1 flex justify-end">
                    <div className="w-10 h-10 border border-white/[0.12] group-hover:border-[#93C8FF] group-hover:bg-[#93C8FF] group-hover:text-[#07090D] flex items-center justify-center transition-all duration-300 text-[#F5F4EF]">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Index Bottom Metadata */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-[#8A95A5] pt-4">
          <div>DIRECT ADVISORY & PROPERTY PORTFOLIO</div>
          <div className="text-[#93C8FF]">CONFIDENȚIALITATE CONTRACTUALĂ (NDA) · DUE DILIGENCE STRUCTURAT</div>
        </div>
      </div>
    </section>
  );
}
