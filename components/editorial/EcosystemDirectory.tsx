import React from "react";
import Link from "next/link";
import EditorialCadran from "./EditorialCadran";
import {
  ExternalLink,
  Building,
  Key,
  Shield,
  CreditCard,
  Tv,
  Plane,
  HardHat,
  Cpu,
  Coins,
  Compass,
  ArrowUpRight,
  Globe2,
  Sparkles,
} from "lucide-react";

interface EcosystemDirectoryProps {
  className?: string;
}

interface PlatformItem {
  id: string;
  name: string;
  url: string;
  role: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  isCurrent?: boolean;
}

interface CategoryGroup {
  groupTitle: string;
  groupDescription: string;
  accent: "ice" | "copper" | "silver";
  platforms: PlatformItem[];
}

export default function EcosystemDirectory({ className = "" }: EcosystemDirectoryProps) {
  const categories: CategoryGroup[] = [
    {
      groupTitle: "PROPERTY & REAL ESTATE ACQUISITIONS",
      groupDescription: "Curated residential, commercial, luxury, and international real estate platforms.",
      accent: "ice",
      platforms: [
        {
          id: "homefind",
          name: "HomeFind",
          url: "https://homefind.cristianvaduva.com",
          role: "Sovereign Property Matching & Verified Listing Ingestion",
          category: "Real Estate",
          description:
            "Proprietary real estate portal indexing verified Romanian and international properties with full cadastre, structural specifications, and direct buyer matching.",
          icon: Building,
          tag: "PRIMARY INVENTORY",
        },
        {
          id: "aixluxury",
          name: "AiXLuxury",
          url: "https://aixluxury.com",
          role: "Ultra-Prime International Architectural Trophy Assets",
          category: "Luxury Assets",
          description:
            "Curated monograph collection of world-class architectural estates, penthouses, and signature developments across Marbella, Monaco, Dubai, and Miami.",
          icon: Sparkles,
          tag: "GLOBAL LUXURY",
        },
        {
          id: "doar-inchirieri",
          name: "Doar Închirieri",
          url: "https://doar-inchirieri.ro",
          role: "Specialized Residential & Commercial Rental Platform (Pre-Launch)",
          category: "Leasing & Rentals",
          description:
            "Specialized rental platform in pre-launch development (domain registered under ROTLD), engineered for long-term residential leasing and portfolio administration.",
          icon: Key,
          tag: "PRE-LAUNCH",
        },
        {
          id: "dubai",
          name: "Dubai Platform",
          url: "https://dubai.cristianvaduva.com",
          role: "UAE Sovereign Acquisitions & Palm Jumeirah Off-Market Desks",
          category: "International Real Estate",
          description:
            "Dedicated UAE advisory desk facilitating golden visa acquisitions, waterfront sky mansions, and developer allocations across Dubai.",
          icon: Globe2,
          tag: "UAE CORRIDOR",
        },
      ],
    },
    {
      groupTitle: "FINANCING, GRANTS & ASSET PROTECTION",
      groupDescription: "Mortgage structuring, credit brokerage, non-reimbursable subsidies, and high-value risk indemnification.",
      accent: "copper" as const,
      platforms: [
        {
          id: "cv-finance",
          name: "CV Finance",
          url: "https://credite.cristianvaduva.com",
          role: "Mortgage Structuring & Credit Brokerage",
          category: "Financing & Credit",
          description:
            "Strategic credit advisory structuring acquisition mortgages, refinancing, and developer debt facilities optimized against rate cycles.",
          icon: CreditCard,
          tag: "MORTGAGE DESK",
        },
        {
          id: "insurance",
          name: "Insurance Advisory",
          url: "https://insurance.cristianvaduva.com",
          role: "High-Net-Worth Casualty, Life & Property Coverage",
          category: "Asset Protection",
          description:
            "Bespoke indemnification architecture protecting luxury properties, commercial assets, and family office structures against physical and liability risks.",
          icon: Shield,
          tag: "RISK SHIELD",
        },
        {
          id: "subventii",
          name: "Subventii",
          url: "https://subventii.cristianvaduva.com/",
          role: "European Structural Subsidies & Regional Development Grants",
          category: "Grants & Subsidies",
          description:
            "Intelligence and advisory on non-reimbursable European development funding, agricultural programs, and structural business expansion grants.",
          icon: Coins,
          tag: "EU GRANTS",
        },
      ],
    },
    {
      groupTitle: "TECHNOLOGY, MEDIA & DEVELOPMENT INTELLIGENCE",
      groupDescription: "Proprietary software operating systems, architectural cinema, and construction oversight.",
      accent: "ice" as const,
      platforms: [
        {
          id: "aix-os",
          name: "AiXLuxury OS",
          url: "https://os.aixluxury.com",
          role: "Digital Property Intelligence & Portfolio Operating Platform",
          category: "Technology & Intelligence",
          description:
            "Analytical software infrastructure managing property discovery data, transaction underwriting, and cross-border portfolio telemetry.",
          icon: Cpu,
          tag: "CORE SYSTEM",
        },
        {
          id: "aix-media",
          name: "AiX Media",
          url: "https://aixmedia.cristianvaduva.com",
          role: "Architectural Cinema & Digital Creative Production",
          category: "Media & Production",
          description:
            "High-production visual studio producing architectural documentaries, property monographs, and cinematic asset presentations.",
          icon: Tv,
          tag: "STUDIO DESK",
        },
        {
          id: "constructions",
          name: "Constructions Intelligence",
          url: "https://constructions.cristianvaduva.com",
          role: "Structural Engineering & Masterplan Development Advisory",
          category: "Development Intelligence",
          description:
            "Forensic construction audits, site feasibility analysis, and general contractor oversight for luxury residential masterplans.",
          icon: HardHat,
          tag: "DEVELOPMENT",
        },
        {
          id: "fly",
          name: "FLY (AIR)",
          url: "https://fly.cristianvaduva.com",
          role: "Aviation Discovery & Private Charter Intelligence",
          category: "Aviation & Mobility",
          description:
            "Executive travel coordination, international property viewing tours, and private charter discovery across European destinations.",
          icon: Plane,
          tag: "TRAVEL INTEL",
        },
      ],
    },
    {
      groupTitle: "PERSONAL BRAND & STRATEGIC ADVISORY",
      groupDescription: "The central thought leadership, advisory office, and executive flagship.",
      accent: "silver" as const,
      platforms: [
        {
          id: "cristianvaduva",
          name: "CristianVaduva.com",
          url: "https://cristianvaduva.com",
          role: "Personal Flagship & Comprehensive Thought Leadership",
          category: "Personal Brand",
          description:
            "The official digital home of Cristian Văduva, detailing published market reports, keynote addresses, and overall ecosystem governance.",
          icon: Compass,
          tag: "FLAGSHIP HUB",
        },
        {
          id: "executive",
          name: "EXECUTIVE",
          url: "https://cristianvaduva.com",
          role: "Sovereign Real Estate & Private Investment Editorial",
          category: "Flagship Monograph",
          description:
            "Platforma privată de consultanță executivă, portofoliu imobiliar selectat și reprezentare fiduciară dedicată.",
          icon: Sparkles,
          tag: "ACTIVE FLAGSHIP",
          isCurrent: true,
        },
      ],
    },
  ];

  const livePlatformsCount = categories
    .flatMap((g) => g.platforms)
    .filter((p) => p.tag !== "PRE-LAUNCH").length;

  return (
    <section className={`py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#0C1119] relative overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Masthead */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-[#A97F60] uppercase tracking-[0.28em] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#A97F60] animate-pulse" />
              <span>THE CONNECTED ECOSYSTEM</span>
              <span className="text-white/20">|</span>
              <span className="text-[#8A95A5]">{livePlatformsCount} ACTIVE PLATFORMS · 1 PRE-LAUNCH</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] leading-[1.08] tracking-tight">
              The Connected Ecosystem<br />
              <span className="text-[#93C8FF] italic font-normal">of Cristian Vaduva.</span>
            </h2>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] max-w-md font-light leading-relaxed">
            Every discipline required to acquire, finance, protect, and develop high-value assets operates as a dedicated, specialized platform within the ecosystem.
          </p>
        </div>

        {/* Ecosystem Architecture Matrix Graphic */}
        <EditorialCadran
          accentColor="ice"
          surface="midnight"
          className="p-6 sm:p-10 space-y-6 bg-[#07090D] border-white/[0.12]"
        >
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-[10px] sm:text-xs">
            <span className="text-[#93C8FF] font-semibold uppercase tracking-[0.25em]">
              ECOSYSTEM ARCHITECTURAL MATRIX // FLOW OF PRIVATE CAPITAL
            </span>
            <span className="text-[#8A95A5] hidden sm:inline">SINGLE-CLIENT ALIGNMENT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center font-mono text-xs">
            <div className="p-4 border border-[#93C8FF]/20 bg-[#93C8FF]/5 space-y-1">
              <span className="text-[10px] text-[#93C8FF] uppercase tracking-wider block">QUADRANT 01</span>
              <span className="text-[#F5F4EF] font-bold block">REAL ESTATE</span>
              <span className="text-[10px] text-[#8A95A5]">HomeFind · AiXLuxury · Dubai</span>
            </div>

            <div className="p-4 border border-[#A97F60]/20 bg-[#A97F60]/5 space-y-1">
              <span className="text-[10px] text-[#A97F60] uppercase tracking-wider block">QUADRANT 02</span>
              <span className="text-[#F5F4EF] font-bold block">FINANCING</span>
              <span className="text-[10px] text-[#8A95A5]">CV Finance · Subvenții (Granturi)</span>
            </div>

            <div className="p-4 border border-white/[0.1] bg-white/[0.02] space-y-1">
              <span className="text-[10px] text-[#B8C2CF] uppercase tracking-wider block">QUADRANT 03</span>
              <span className="text-[#F5F4EF] font-bold block">PROTECTION</span>
              <span className="text-[10px] text-[#8A95A5]">Insurance Cristian Văduva</span>
            </div>

            <div className="p-4 border border-[#93C8FF]/20 bg-[#93C8FF]/5 space-y-1">
              <span className="text-[10px] text-[#93C8FF] uppercase tracking-wider block">QUADRANT 04</span>
              <span className="text-[#F5F4EF] font-bold block">TECHNOLOGY</span>
              <span className="text-[10px] text-[#8A95A5]">AiX OS · Media · FLY</span>
            </div>
          </div>
        </EditorialCadran>

        {/* Directory Categorized Groups */}
        <div className="space-y-14">
          {categories.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-white/[0.06] pb-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#93C8FF] font-bold">
                    0{groupIdx + 1}{" //"}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F5F4EF]">
                    {group.groupTitle}
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-[#8A95A5]">
                  {group.groupDescription}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {group.platforms.map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <EditorialCadran
                      key={platform.id}
                      accentColor={group.accent}
                      surface="midnight"
                      className={`p-6 flex flex-col justify-between space-y-6 bg-[#07090D] hover:border-[#93C8FF]/40 transition-all ${
                        platform.isCurrent ? "ring-1 ring-[#93C8FF]/40" : ""
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-9 h-9 border border-white/[0.1] bg-[#1B2028] flex items-center justify-center text-[#93C8FF]">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="font-mono text-[9px] px-2 py-0.5 border border-white/[0.1] text-[#A97F60] uppercase tracking-wider">
                            {platform.tag}
                          </span>
                        </div>

                        <div className="space-y-1">
                          <span className="font-mono text-[9px] uppercase tracking-widest text-[#8A95A5] block">
                            {platform.category}
                          </span>
                          <h4 className="font-serif text-xl text-[#F5F4EF]">
                            {platform.name}
                          </h4>
                          <span className="font-mono text-[10px] text-[#93C8FF] block leading-tight">
                            {platform.role}
                          </span>
                        </div>

                        <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                          {platform.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/[0.06]">
                        {platform.isCurrent ? (
                          <div className="font-mono text-[10px] uppercase tracking-wider text-[#93C8FF] flex items-center justify-between">
                            <span>CURRENT PLATFORM</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF] animate-ping" />
                          </div>
                        ) : (
                          <a
                            href={platform.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-[10px] uppercase tracking-wider text-[#B8C2CF] hover:text-[#93C8FF] flex items-center justify-between group transition-colors"
                          >
                            <span>VISIT PLATFORM</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-[#93C8FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </EditorialCadran>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
