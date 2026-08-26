"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface DisciplineItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  mandates: string[];
}

const disciplines: DisciplineItem[] = [
  {
    id: "capital",
    number: "01",
    title: "CAPITAL",
    subtitle: "Strategic Placement & Equity Structuring",
    description: "Bespoke advisory for private equity placement, co-investment vehicles, and credit structuring across high-performance European markets.",
    imageSrc: "/residence/salon.png",
    mandates: ["Private Equity Placement", "Credit Structuring", "Co-Investment Strategies"],
  },
  {
    id: "real-estate",
    number: "02",
    title: "REAL ESTATE",
    subtitle: "Ultra-Prime Acquisition & Portfolio Curation",
    description: "Discreet origination and execution for off-market luxury residential assets, prime penthouses, and commercial development parcels.",
    imageSrc: "/residence/pool.png",
    mandates: ["Off-Market Acquisitions", "Penthouse Portfolio Curation", "Zoned Commercial Parcels"],
  },
  {
    id: "risk",
    number: "03",
    title: "RISK",
    subtitle: "Asset Protection & Downside Surveillance",
    description: "Institutional governance combined with private execution to shield family wealth and preserve capital across volatile market cycles.",
    imageSrc: "/residence/library.png",
    mandates: ["Downside Protection", "Governance Structuring", "Market Dislocation Analysis"],
  },
  {
    id: "strategy",
    number: "04",
    title: "STRATEGY",
    subtitle: "Executive Board Advisory & Mandates",
    description: "Independent strategic counsel for principals, family offices, and institutional boards navigating complex growth and transaction decisions.",
    imageSrc: "/residence/terrace.png",
    mandates: ["Board Representation", "Transaction Advisory", "Generational Strategy"],
  },
];

export default function ExpertiseBlock() {
  const [activeId, setActiveId] = useState<string>("capital");
  const activeDiscipline = disciplines.find((d) => d.id === activeId) || disciplines[0];

  return (
    <section id="scene-think" className="site-section bg-[#080808] border-b border-white/10">
      <div className="site-container space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>03 / 06</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>PRACTICE INDEX</span>
            </div>
            <h2 className="font-display text-display-lg-fluid text-text-primary tracking-tight">
              Strategic Practice Index
            </h2>
          </div>
          <div className="font-mono text-[10px] sm:text-xs text-text-secondary/80 uppercase tracking-widest">
            EXECUTIVE MANDATES · EUROPE
          </div>
        </div>

        {/* Interactive Discipline Monograph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Interactive Index */}
          <div className="lg:col-span-6 space-y-3">
            {disciplines.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  onFocus={() => setActiveId(item.id)}
                  className={`w-full text-left py-5 px-5 border border-white/10 transition-all cursor-pointer ${
                    isActive ? "bg-[#141414] border-accent/40" : "bg-[#0D0D0D] hover:bg-[#141414]/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm ${isActive ? "text-accent font-semibold" : "text-text-secondary/60"}`}>
                        {item.number}
                      </span>
                      <span className={`font-display text-xl sm:text-2xl ${isActive ? "text-text-primary font-medium" : "text-text-secondary/80"}`}>
                        {item.title}
                      </span>
                    </div>
                    <span className={`font-mono text-xs ${isActive ? "text-accent font-semibold" : "text-text-secondary/40"}`}>
                      {isActive ? "ACTIVE →" : "EXPLORE"}
                    </span>
                  </div>

                  {/* Mobile Accordion Content */}
                  {isActive && (
                    <div className="lg:hidden pt-4 space-y-3">
                      <p className="font-sans text-xs text-text-secondary/90 font-light leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {item.mandates.map((m) => (
                          <span key={m} className="font-mono text-[9px] uppercase tracking-wider text-accent border border-accent/30 px-2 py-1 bg-accent/5">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Desktop Reveal Panel */}
          <div className="hidden lg:block lg:col-span-6 space-y-6 sticky top-28">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/10 bg-[#0D0D0D]">
              <Image
                src={activeDiscipline.imageSrc}
                alt={activeDiscipline.title}
                fill
                sizes="50vw"
                className="object-cover transition-all duration-700"
              />
            </div>

            <div className="space-y-3 pt-2">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent font-semibold block">
                {activeDiscipline.subtitle}
              </span>
              <p className="font-sans text-sm text-text-secondary/90 font-light leading-relaxed">
                {activeDiscipline.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {activeDiscipline.mandates.map((m) => (
                  <span key={m} className="font-mono text-[10px] uppercase tracking-wider text-accent border border-accent/30 px-3 py-1.5 bg-accent/5">
                    {m}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent hover:text-text-primary transition-quick py-2 touch-active"
                >
                  <span>REQUEST DISCIPLINE DOSSIER →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
