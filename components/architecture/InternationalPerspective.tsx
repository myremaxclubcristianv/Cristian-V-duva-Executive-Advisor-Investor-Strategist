import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Building2, ShieldCheck, Anchor } from "lucide-react";
import SectionHeader from "@/components/editorial/SectionHeader";
import EditorialText from "@/components/editorial/EditorialText";

interface DestinationItem {
  id: string;
  hub: string;
  corridor: string;
  headline: string;
  thesis: string;
  keyMetrics: string;
  image: string;
  tags: string[];
  linkHref: string;
  linkText: string;
  external?: boolean;
}

const destinations: DestinationItem[] = [
  {
    id: "bucharest",
    hub: "BUCHAREST & ROMANIA",
    corridor: "NORTHERN DIPLOMATIC CORRIDOR",
    headline: "High-Yield Capital Growth & Prime Residential Scarcity",
    thesis: "The diplomatic enclaves of Herăstrău, Kiseleff, and Pipera combine top European net rental yields with accelerating institutional capital inflows and structural permitting constraints.",
    keyMetrics: "6.8% – 8.2% Rental Yield · €2,400 – €5,800 / sqm",
    image: "/residence/terrace.png",
    tags: ["Penthouse Suites", "Modern Enclaves", "Heritage Mansions"],
    linkHref: "/real-estate",
    linkText: "EXPLORE BUCHAREST MANDATES",
    external: false,
  },
  {
    id: "monaco",
    hub: "MONACO & THE FRENCH RIVIERA",
    corridor: "CARRÉ D'OR · CAP D'AIL WATERFRONT",
    headline: "Generational Trophy Preservation & Sovereign Security",
    thesis: "With finite Mediterranean coastline and strict fiscal predictability, prime real estate in Monaco and Cap d'Ail serves as the world's most resilient physical capital safe haven.",
    keyMetrics: "€52,000 / sqm Average · Zero Capital Gains Tax",
    image: "/residence/living.png",
    tags: ["Waterfront Villas", "Carré d'Or Penthouses", "Off-Market Estates"],
    linkHref: "https://www.aixluxury.com",
    linkText: "VISIT AIXLUXURY MONACO",
    external: true,
  },
  {
    id: "dubai",
    hub: "DUBAI & THE ARABIAN GULF",
    corridor: "DUBAI ISLANDS · PALM JUMEIRAH",
    headline: "Global Liquidity & Sovereign Waterfront Masterplans",
    thesis: "High-velocity global wealth migration has established Dubai as the premier zero-tax operating bridge between Europe and Asia, anchored by landmark branded coastal developments.",
    keyMetrics: "BRABUS Island Partner · 7% – 9% Projected Yields",
    image: "/residence/command.png",
    tags: ["Branded Residences", "Private Island Mansions", "Off-Plan SPVs"],
    linkHref: "https://www.aixluxury.com",
    linkText: "DISCOVER GULF ALLOCATIONS",
    external: true,
  },
];

export default function InternationalPerspective() {
  return (
    <section className="relative w-full bg-[#07090D] text-[#F5F4EF] py-28 sm:py-36 lg:py-44 border-b border-white/[0.08] overflow-hidden">
      <div className="site-container space-y-16 sm:space-y-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <SectionHeader
            eyebrow="05 // CROSS-BORDER PRACTICE & OPERATIONAL HUBS"
            badge="INTERNATIONAL CORRIDORS"
            title="Strategic Representation Across Key Wealth Hubs"
            description="A distinct tripartite advisory footprint uniting high-yield cash flows in Bucharest, generational capital preservation in Monaco, and dynamic international growth in Dubai."
          />

          <div className="flex items-center gap-2 font-mono text-xs text-[#8A95A5] shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
            <span>TRI-CENTRIC ADVISORY AXIS</span>
          </div>
        </div>

        {/* 3 Asymmetric Editorial Destinational Panels */}
        <div className="space-y-16">
          {destinations.map((dest, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={dest.id}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-14 items-center p-8 sm:p-12 border border-white/[0.08] bg-[#0C1119] hover:border-[#93C8FF]/40 transition-all duration-300 relative group`}
              >
                {/* Index Corner Marker */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#93C8FF]/60" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#93C8FF]/60" />

                {/* Visual Frame (7 cols) */}
                <div
                  className={`lg:col-span-7 relative aspect-[16/10] bg-black overflow-hidden border border-white/[0.1] shadow-2xl ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={dest.image}
                    alt={dest.headline}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/80 via-transparent to-transparent" />
                  
                  {/* Location Tag Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-[#07090D]/85 backdrop-blur-md border border-white/10 font-mono text-xs text-[#93C8FF]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.corridor}</span>
                  </div>
                </div>

                {/* Editorial Content Rail (5 cols) */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                      {dest.hub}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F4EF] leading-snug">
                      {dest.headline}
                    </h3>
                  </div>

                  <EditorialText size="sm" maxWidth="full" color="secondary" className="leading-relaxed">
                    {dest.thesis}
                  </EditorialText>

                  {/* Benchmark Metrics Bar */}
                  <div className="p-4 bg-[#1B2028]/80 border border-white/[0.06] font-mono text-xs text-[#B8C2CF] space-y-1">
                    <span className="text-[10px] uppercase text-[#93C8FF] tracking-wider block font-semibold">
                      MARKET BENCHMARK:
                    </span>
                    <span className="text-[#F5F4EF] font-medium">{dest.keyMetrics}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px] text-[#8A95A5]">
                    {dest.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 border border-white/[0.08] bg-white/[0.02]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    {dest.external ? (
                      <a
                        href={dest.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#93C8FF] hover:text-[#B8C2CF] font-bold transition-colors"
                      >
                        <span>{dest.linkText}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        href={dest.linkHref}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#93C8FF] hover:text-[#B8C2CF] font-bold transition-colors"
                      >
                        <span>{dest.linkText}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
