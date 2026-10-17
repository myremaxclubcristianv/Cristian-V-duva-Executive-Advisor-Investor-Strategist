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
  Award,
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
      title: "Asset Selection & Strategic Acquisition",
      description:
        "Direct principal advisory in ultra-prime residential penthouses, coastal villas, and masterplan developments across Bucharest, Marbella, and Dubai. Every asset is evaluated for title provenance, physical craftsmanship, and long-term value resilience, operating strictly under unilateral client mandates.",
      platformName: "HomeFind & AiXLuxury",
      platformUrl: "https://homefind.cristianvaduva.com",
    },
    {
      icon: BadgeDollarSign,
      category: "FINANCIAL ANALYSIS",
      title: "Financial Analysis & Transaction Coordination",
      description:
        "Evaluating purchase affordability, transaction cash flows, and mortgage financing options through authorized credit banking partners. Aligning financial planning with macroeconomic rate environments.",
      platformName: "CV Finance",
      platformUrl: "https://credite.cristianvaduva.com",
    },
    {
      icon: Lock,
      category: "ASSET PROTECTION",
      title: "Insurance Advisory & Risk Protection",
      description:
        "Comprehensive property, casualty, and wealth preservation coverage structured as an authorized agent partner of Generali România. Protecting residences and corporate holdings from unforeseen liabilities and environmental hazards.",
      platformName: "Partener Generali România",
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
              Cristian Vaduva —<br />
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
          {/* Authentic High-Resolution Photographic Cadran (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <EditorialCadran
              watermarkNumber="CV"
              accentColor="ice"
              surface="midnight"
              className="p-3 bg-[#0C1119]"
            >
              <div className="relative aspect-[4/5] w-full bg-[#1B2028] overflow-hidden border border-white/[0.1] group">
                <Image
                  src="/images/personal/portraits/cristian-vaduva-desk-advisor.jpg"
                  alt="Cristian Văduva — Executive Advisor, Real Estate Investor & Strategist"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/95 via-[#07090D]/20 to-transparent pointer-events-none" />

                {/* Floating Portrait Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#07090D]/94 backdrop-blur-md border border-white/[0.1] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#93C8FF] block font-semibold">
                      FOUNDER & PRINCIPAL ADVISOR
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#93C8FF]" />
                  </div>
                  <h3 className="font-serif text-xl text-[#F5F4EF] font-medium leading-tight">
                    Cristian Văduva
                  </h3>
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#8A95A5] pt-1">
                    <span>Executive Real Estate & Wealth Advisory</span>
                    <span className="text-[#A97F60]">Source: cristianvaduva.com</span>
                  </div>
                </div>
              </div>
            </EditorialCadran>

            {/* Dual Authentic Photographic Context Thumbnails */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-[4/3] border border-white/[0.08] bg-[#0C1119] overflow-hidden group">
                <Image
                  src="/images/personal/editorial/cristian-vaduva-property-strategist.jpg"
                  alt="Cristian Văduva at International Real Estate Forum"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-top transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-1.5 left-2 font-mono text-[8px] uppercase tracking-wider text-[#B8C2CF]">
                  Property Strategy
                </span>
              </div>

              <div className="relative aspect-[4/3] border border-white/[0.08] bg-[#0C1119] overflow-hidden group">
                <Image
                  src="/images/personal/editorial/cristian-vaduva-financial-analyst.jpg"
                  alt="Cristian Văduva — Financial Underwriting & Development Modeling"
                  fill
                  sizes="(max-width: 1024px) 50vw, 20vw"
                  className="object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-1.5 left-2 font-mono text-[8px] uppercase tracking-wider text-[#93C8FF]">
                  Capital Underwriting
                </span>
              </div>
            </div>
          </div>

          {/* Strategic Philosophy & Advisory Thesis (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 border-l-2 border-[#A97F60] bg-[#0C1119] space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#A97F60] font-semibold block">
                STRATEGIC ADVISORY PHILOSOPHY
              </span>
              <p className="font-serif italic text-lg sm:text-xl text-[#F5F4EF] leading-relaxed">
                &ldquo;Real estate acquisitions require rigorous analysis. An exceptional asset is only truly valuable when backed by clean cadastral title verification, sound financial planning, and comprehensive asset protection. We operate under dedicated unilateral mandates, eliminating hidden conflicts of interest.&rdquo;
              </p>
              <div className="font-mono text-[10px] text-[#8A95A5] uppercase tracking-wider">
                CRISTIAN VADUVA — EXECUTIVE DIRECTIVE
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
                href="/real-estate/properties"
                className="px-6 py-3.5 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] uppercase tracking-[0.18em] font-bold transition-all shadow-xl flex items-center gap-2 min-h-[48px]"
              >
                <span className="text-[#07090D] font-bold">EXPLORE PROPERTY PORTFOLIO</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#07090D]" />
              </Link>

              <Link
                href="/contact"
                className="px-6 py-3.5 border border-white/[0.2] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] uppercase tracking-[0.18em] font-semibold transition-all flex items-center gap-2 min-h-[48px]"
              >
                <span>RETAIN PRIVATE COUNSEL</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://wa.me/436509536345"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/10 text-[#F5F4EF] hover:text-[#25D366] uppercase tracking-[0.18em] font-medium transition-all flex items-center gap-2 min-h-[48px]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WHATSAPP (+43 650 953 6345)</span>
              </a>

              <Link
                href="/about#archive"
                className="px-5 py-3.5 border border-[#A97F60]/40 hover:border-[#A97F60] text-[#A97F60] hover:bg-[#A97F60]/10 uppercase tracking-[0.18em] font-semibold transition-all flex items-center gap-2 min-h-[48px]"
              >
                <Award className="w-3.5 h-3.5" />
                <span>VERIFIED ARCHIVE (18)</span>
              </Link>

              <a
                href="https://cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 border border-white/[0.1] text-[#8A95A5] hover:text-[#F5F4EF] hover:border-white/30 uppercase tracking-[0.18em] transition-all flex items-center gap-1.5 min-h-[48px]"
              >
                <span>CRISTIANVADUVA.COM</span>
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
              const accent = idx % 2 === 0 ? "ice" : "copper";
              return (
                <EditorialCadran
                  key={idx}
                  watermarkNumber={`0${idx + 1}`}
                  accentColor={accent}
                  surface="midnight"
                  className="p-6 sm:p-7 flex flex-col justify-between space-y-6 bg-[#0C1119] hover:-translate-y-1 transition-all duration-300 shadow-xl"
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
                      className="font-mono text-[10px] uppercase tracking-wider text-[#93C8FF] hover:text-[#B8C2CF] flex items-center justify-between group transition-colors py-2 min-h-[44px]"
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
