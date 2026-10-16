import React from "react";
import Image from "next/image";
import Link from "next/link";
import EditorialCadran from "./EditorialCadran";
import {
  ShieldCheck,
  Building2,
  BadgeDollarSign,
  Lock,
  Layers,
  ArrowUpRight,
  ExternalLink,
  MessageSquare,
  Globe,
  CheckCircle2,
} from "lucide-react";

interface PersonalPerspectiveSectionProps {
  className?: string;
}

/**
 * PersonalPerspectiveSection
 * Showcases Cristian Văduva as the personal advisor and strategist behind the platform,
 * using authentic portraits and verified cross-disciplinary advisory credentials.
 */
export default function PersonalPerspectiveSection({
  className = "",
}: PersonalPerspectiveSectionProps) {
  const pillars = [
    {
      icon: Building2,
      category: "SOVEREIGN REAL ESTATE",
      title: "Asset Selection & Fiduciary Acquisition",
      description:
        "Direct principal representation in ultra-prime residential penthouses, coastal villas, and masterplan developments across Bucharest, Marbella, and Dubai. Every asset is audited for title provenance, physical craftsmanship, and sovereign yield resilience, operating strictly under unilateral client mandates.",
      platformName: "HomeFind & AiXLuxury",
      platformUrl: "https://homefind.cristianvaduva.com",
    },
    {
      icon: BadgeDollarSign,
      category: "FINANCING & CAPITAL",
      title: "Credit Structuring & Debt Syndication",
      description:
        "Structuring private mortgages, acquisition facilities, and developer bridge financing through CV Finance. Aligning debt amortization schedules with macroeconomic rate environments and sovereign holding entity requirements.",
      platformName: "CV Finance",
      platformUrl: "https://credite.cristianvaduva.com",
    },
    {
      icon: Lock,
      category: "ASSET PROTECTION",
      title: "Insurance Architecture & Risk Shielding",
      description:
        "Comprehensive property, casualty, and wealth preservation coverage designed for high-value architectural assets. Shielding family offices and corporate holding structures from unforeseen liabilities, environmental hazards, and succession disruption.",
      platformName: "Insurance Advisory",
      platformUrl: "https://insurance.cristianvaduva.com",
    },
    {
      icon: Layers,
      category: "PROPETECH INTELLIGENCE",
      title: "Operating Systems & Digital Intelligence",
      description:
        "Proprietary software infrastructure powering data-driven property discovery, off-market transaction matching, and cross-border portfolio oversight via AiX OS and HomeFind.",
      platformName: "AiXLuxury OS",
      platformUrl: "https://os.aixluxury.com",
    },
  ];

  return (
    <section className={`py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#07090D] relative overflow-hidden ${className}`}>
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Editorial Section Masthead */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-[#93C8FF] uppercase tracking-[0.28em] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
              <span>THE HUMAN ADVISOR BEHIND THE PLATFORM</span>
              <span className="text-white/20">|</span>
              <span className="text-[#8A95A5]">BUCHAREST · VIENNA · DUBAI</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] leading-[1.08] tracking-tight">
              Cristian Văduva —<br />
              <span className="text-[#A97F60] italic font-normal">A Different Perspective.</span>
            </h2>
          </div>

          <div className="shrink-0 flex items-center gap-2 font-mono text-xs text-[#A97F60]">
            <ShieldCheck className="w-4 h-4" />
            <span className="uppercase tracking-[0.2em] font-medium">Single-Client Advisory Alignment</span>
          </div>
        </div>

        {/* Master Asymmetric Spread: Authentic Portrait + Strategic Philosophy */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Authentic High-Resolution Portrait (5 cols) */}
          <div className="lg:col-span-5">
            <EditorialCadran
              watermarkNumber="CV"
              accentColor="ice"
              surface="midnight"
              className="p-3 bg-[#0C1119]"
            >
              <div className="relative aspect-[4/5] w-full bg-[#1B2028] overflow-hidden border border-white/[0.08] group">
                <Image
                  src="/images/personal/portraits/cristian-headshot.jpg"
                  alt="Cristian Văduva — Executive Advisor, Investor & Strategist"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/90 via-transparent to-transparent pointer-events-none" />

                {/* Floating Portrait Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#07090D]/92 backdrop-blur-md border border-white/[0.1] space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#93C8FF] block">
                    FOUNDER & PRINCIPAL ADVISOR
                  </span>
                  <h4 className="font-serif text-lg text-[#F5F4EF] font-medium leading-tight">
                    Cristian Văduva
                  </h4>
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#8A95A5] pt-1">
                    <span>Executive Real Estate & Wealth Protection</span>
                    <span className="text-[#A97F60]">Photograph: AdrianBirgauan.ro</span>
                  </div>
                </div>
              </div>
            </EditorialCadran>
          </div>

          {/* Strategic Philosophy & Fiduciary Thesis (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 border-l-2 border-[#A97F60] bg-[#0C1119] space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#A97F60] font-semibold block">
                STRATEGIC ADVISORY PHILOSOPHY
              </span>
              <p className="font-serif italic text-lg sm:text-xl text-[#F5F4EF] leading-relaxed">
                &ldquo;Real estate acquisitions cannot be executed in isolation. An exceptional asset is only truly defensible when integrated with sovereign legal title structuring, debt calibration, and comprehensive asset protection. We represent only the principal, eliminating dual-agency conflicts.&rdquo;
              </p>
              <div className="font-mono text-[10px] text-[#8A95A5] uppercase tracking-wider">
                CRISTIAN VĂDUVA — EXECUTIVE DIRECTIVE
              </div>
            </div>

            <div className="space-y-4 font-sans text-base text-[#B8C2CF] font-light leading-relaxed">
              <p>
                Behind EXECUTIVE is a unified perspective that bridges four traditionally fragmented industries: luxury real estate curation, private mortgage financing, insurance underwriting, and bespoke software operating systems.
              </p>
              <p>
                Rather than operating as a conventional real estate brokerage driven by volume transactions, we operate as a private family advisory office. We evaluate properties through the forensic prism of structural durability, cadastral provenance, exit liquidity, and sovereign tax efficiency.
              </p>
            </div>

            {/* Direct Channel Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3 font-mono text-xs">
              <Link
                href="/contact"
                className="px-6 py-3.5 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] uppercase tracking-[0.18em] font-bold transition-all shadow-xl flex items-center gap-2"
              >
                <span>RETAIN PRIVATE COUNSEL</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://wa.me/436509536345"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-white/[0.15] hover:border-[#93C8FF] hover:bg-[#93C8FF]/10 text-[#F5F4EF] hover:text-[#93C8FF] uppercase tracking-[0.18em] font-semibold transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#93C8FF]" />
                <span>DIRECT WHATSAPP (+43 650 953 6345)</span>
              </a>

              <a
                href="https://cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 border border-white/[0.1] text-[#8A95A5] hover:text-[#F5F4EF] hover:border-white/30 uppercase tracking-[0.18em] transition-all flex items-center gap-1.5"
              >
                <span>VISIT CRISTIANVADUVA.COM</span>
                <ExternalLink className="w-3 h-3 text-[#A97F60]" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Pillars of the Connected Advisory Model */}
        <div className="space-y-6 pt-8">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#93C8FF] font-semibold block">
              INTERCONNECTED ADVISORY DISCIPLINES
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
              The Four Quadrants of Capital Defense
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <EditorialCadran
                  key={idx}
                  watermarkNumber={`0${idx + 1}`}
                  accentColor="ice"
                  surface="midnight"
                  className="p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-[#0C1119]"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 border border-[#93C8FF]/30 bg-[#93C8FF]/10 flex items-center justify-center text-[#93C8FF]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5">
                      <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                        {p.category}
                      </span>
                      <h4 className="font-serif text-lg text-[#F5F4EF] leading-snug">
                        {p.title}
                      </h4>
                    </div>

                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.08]">
                    <a
                      href={p.platformUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] uppercase tracking-wider text-[#93C8FF] hover:text-[#B8C2CF] flex items-center justify-between group transition-colors"
                    >
                      <span>PLATFORM: {p.platformName}</span>
                      <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </EditorialCadran>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
