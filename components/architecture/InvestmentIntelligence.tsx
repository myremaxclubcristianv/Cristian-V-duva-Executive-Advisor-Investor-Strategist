import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/editorial/SectionHeader";
import InsightPanel from "@/components/editorial/InsightPanel";

export default function InvestmentIntelligence() {
  return (
    <section className="relative w-full bg-[#0C1119] text-[#F5F4EF] py-28 sm:py-36 lg:py-44 border-b border-white/[0.08] overflow-hidden">
      <div className="site-container space-y-16 sm:space-y-24 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <SectionHeader
            eyebrow="04 // INVESTMENT INTELLIGENCE & MACRO MONITORING"
            badge="EMPIRICAL METRICS"
            title="Quantitative Analysis & Fiduciary Surveillance"
            description="Empirical market intelligence calibrated through continuous monitoring of national cadastre transaction records, central bank liquidity signals, and proprietary valuation indices."
          />

          <Link
            href="/insights"
            className="px-6 py-3.5 border border-white/[0.14] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all shrink-0 flex items-center gap-2"
          >
            <span>RESEARCH REPOSITORY</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Structured Intelligence Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InsightPanel
            category="RESIDENTIAL YIELDS · BUCHAREST NORTH"
            title="Prime Yield Spread: Gross vs. Net Operating Income"
            metric="6.8% – 8.2%"
            change="+0.6% YoY"
            trend="up"
            date="Q1 2026 Reference Period"
            source="ANCPI Official Cadastre & AiX OS™ Proprietary Index"
            description="Executive and expatriate residential rental absorption across Northern Bucharest (Pipera, Herăstrău) delivers superior net cash yields relative to Central and Western European metropolitan averages."
            actionUrl="/real-estate/market"
          />

          <InsightPanel
            category="MEDITERRANEAN TROPHY PRESERVATION"
            title="Monaco & French Riviera Prime Capital Resilience"
            metric="€52,000 / sqm"
            change="+3.4% Historical"
            trend="up"
            date="2025 – 2026 Reporting Year"
            source="IMSEE Monégasque Statistics & AiXLuxury Monaco Bureau"
            description="Extreme physical supply constraints combined with persistent global wealth migration maintain exceptional liquidity and asset sovereignty across the Monaco and Cap d'Ail coastal corridor."
            actionUrl="https://www.aixluxury.com"
          />

          <InsightPanel
            category="CORPORATE & EXECUTIVE ASSET DEFENSE"
            title="Managerial Liability & Fiscal Deductibility"
            metric="€400 / yr"
            change="100% Deductible"
            trend="neutral"
            date="Romanian Fiscal Code 2026"
            source="Generali România Partnership & Tax Advisory Desk"
            description="Structuring executive health and management D&O (Directors & Officers) risk coverage insulates family wealth and company balance sheets against legislative volatility and operational claims."
            actionUrl="/ecosystem"
          />
        </div>

        {/* Supporting Analytical Thesis Banner */}
        <div className="p-8 sm:p-12 border border-white/[0.08] bg-[#1B2028]/60 flex flex-col md:flex-row items-baseline justify-between gap-6 font-mono text-xs text-[#B8C2CF]">
          <div className="space-y-1">
            <span className="text-[#93C8FF] uppercase tracking-widest text-[10px] font-semibold block">
              RESEARCH METHODOLOGY STANDARDS
            </span>
            <p className="font-sans font-light text-sm text-[#F5F4EF]">
              Every metric cited in our advisory practice is verifiable through national registry archives, regulatory directives, or audited transactional settlement sheets.
            </p>
          </div>
          <span className="text-[#8A95A5] uppercase shrink-0 text-[10px] tracking-widest">
            STRICT ZERO-SPECULATION POLICY
          </span>
        </div>
      </div>
    </section>
  );
}
