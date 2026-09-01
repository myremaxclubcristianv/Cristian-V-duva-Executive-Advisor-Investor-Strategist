import Image from "next/image";
import Link from "next/link";

interface Chapter {
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  mandates: string[];
}

const chapters: Chapter[] = [
  {
    number: "01",
    category: "PRIVATE ADVISORY",
    title: "Independent Executive Advisory & Strategic Counsel",
    subtitle: "HIGH-TICKET STRATEGY · BOARD COUNSEL",
    description: "Bespoke strategic counsel for UHNW principals, family offices, and institutional boards navigating high-stakes transaction decisions and generational asset alignment.",
    imageSrc: "/residence/office.png",
    mandates: ["Strategic Mandates", "Board Representation", "Family Office Advisory"],
  },
  {
    number: "02",
    category: "REAL ESTATE",
    title: "Ultra-Prime Property Acquisition & Portfolio Positioning",
    subtitle: "LUXURY RESIDENTIAL · COMMERCIAL PARCELS",
    description: "Discreet origination, valuation, and execution for off-market luxury residential assets, penthouses, and zoned commercial development parcels across key European hubs.",
    imageSrc: "/residence/living.png",
    mandates: ["Off-Market Acquisitions", "Penthouse Portfolio Curation", "Zoned Commercial Parcels"],
  },
  {
    number: "03",
    category: "CAPITAL",
    title: "Private Equity Placement & Co-Investment Architecture",
    subtitle: "EQUITY PLACEMENT · DOWNSIDE PROTECTION",
    description: "Combining institutional downside surveillance with private execution to structure bespoke co-investment vehicles, private equity placements, and asset-backed credit.",
    imageSrc: "/residence/library.png",
    mandates: ["Private Equity Placement", "Credit Structuring", "Co-Investment Strategies"],
  },
  {
    number: "04",
    category: "FINANCIAL STRATEGY",
    title: "Credit Optimization, Liquidity & Capital Structure",
    subtitle: "FINANCIAL ARCHITECTURE · LIQUIDITY GOVERNANCE",
    description: "Designing bespoke tax, legal, and financial structures tailored to family office governance, capital preservation, and compounding multi-generational wealth.",
    imageSrc: "/residence/terrace.png",
    mandates: ["Financial Architecture", "Liquidity Optimization", "Risk Containment"],
  },
];

export default function ExpertiseBlock() {
  return (
    <section id="scene-think" className="site-section bg-[#070707] text-[#F4F1EA] border-b border-white/10">
      <div className="site-container space-y-16 sm:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#E6D5C0] font-semibold">
              <span>03 / THE PRACTICE</span>
              <span className="w-6 h-[1px] bg-[#E6D5C0]/40" />
              <span>EDITORIAL CHAPTERS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl text-[#F4F1EA] tracking-tight">
              The Four Practice Disciplines
            </h2>
          </div>
          <div className="font-mono text-[10px] sm:text-xs text-[#A1A09B] uppercase tracking-widest">
            EXECUTIVE PRACTICE · EUROPE
          </div>
        </div>

        {/* 4 Alternating Editorial Chapters */}
        <div className="space-y-20 sm:space-y-28">
          {chapters.map((ch, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <article
                key={ch.category}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center border-b border-white/10 pb-20 sm:pb-28 group"
              >
                {/* Image Panel (Left on even, Right on odd) */}
                <div
                  className={`lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden border border-white/15 bg-[#0D0D0D] ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <Image
                    src={ch.imageSrc}
                    alt={ch.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-[#E6D5C0] border border-white/20 px-3 py-1 bg-[#070707]/80">
                    CHAPTER {ch.number}
                  </div>
                </div>

                {/* Narrative Monograph (Right on even, Left on odd) */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 font-mono text-xs text-[#E6D5C0] font-semibold">
                      <span>{ch.number}</span>
                      <span>·</span>
                      <span className="uppercase tracking-[0.25em]">{ch.category}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl text-[#F4F1EA] tracking-tight group-hover:text-[#E6D5C0] transition-colors leading-snug">
                      {ch.title}
                    </h3>
                  </div>

                  <p className="font-sans text-sm sm:text-base text-[#A1A09B] font-light leading-relaxed">
                    {ch.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                    {ch.mandates.map((m) => (
                      <span
                        key={m}
                        className="font-mono text-[10px] uppercase tracking-wider text-[#E6D5C0] border border-white/15 px-3 py-1 bg-[#0D0D0D]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#E6D5C0] hover:text-[#F4F1EA] transition-colors py-2 touch-active min-h-[48px]"
                    >
                      <span>REQUEST CHAPTER DOSSIER →</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
