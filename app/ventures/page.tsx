import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";
import { ArrowUpRight, TrendingUp, Compass, ShieldCheck, Layers, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Ventures & Strategic Initiatives — Cristian Văduva",
  description: "Strategic investment vehicles, real estate advisory entities, and private initiatives directed by Cristian Văduva across Europe.",
};

export default function VenturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* ======================================================== */}
        {/* 01 // ARCHITECTURAL VENTURES HERO                        */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid">
          {/* Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 relative z-10">
            <div className="flex items-center justify-between border-b border-white/[0.1] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>01 // VENTURE ARCHITECTURE</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">PORTFOLIO VEHICLES</span>
              </div>
              <div className="hidden sm:block text-[#8A95A5]">
                ACTIVE EQUITY ALLOCATIONS
              </div>
            </div>

            <div className="max-w-4xl space-y-6">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F4EF] leading-[0.98] tracking-tight">
                Direct Equity &<br />
                <span className="text-[#A97F60] italic font-normal">Strategic Ventures.</span>
              </h1>

              <p className="font-sans text-base sm:text-xl text-[#B8C2CF] font-light max-w-2xl leading-relaxed">
                Structuring direct equity participations, proptech operating platforms, and media intelligence entities to compound operational and strategic advantage.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center gap-2 shadow-xl"
                >
                  <span>PROPOSE CO-INVESTMENT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3.5 border border-white/[0.16] hover:border-[#93C8FF] text-[#D8D0C2] font-mono text-xs uppercase tracking-[0.2em] transition-colors"
                >
                  ADVISORY THESIS
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // VENTURES INDEX (BREAKING THE CARD GRID)            */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] bg-[#0C1119]">
          <div className="site-container space-y-12">
            <div className="space-y-3 border-b border-white/[0.08] pb-6">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>02 // THE VENTURE INDEX</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">ACTIVE PARTICIPATIONS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F4EF] tracking-tight">
                Portfolio Entities & Operational Vehicles
              </h2>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="py-10 grid lg:grid-cols-12 gap-8 items-baseline hover:bg-[#1B2028]/40 transition-colors px-2 group"
                >
                  <div className="lg:col-span-2 flex items-baseline justify-between lg:justify-start gap-4">
                    <span className="font-monumental text-5xl text-[#1B2028] group-hover:text-[#93C8FF] transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF] lg:hidden">
                      {proj.status}
                    </span>
                  </div>

                  <div className="lg:col-span-4 space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold">
                      {proj.category}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] group-hover:text-[#93C8FF] transition-colors">
                      {proj.name}
                    </h3>
                  </div>

                  <div className="lg:col-span-4 space-y-2">
                    <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="lg:col-span-2 flex lg:justify-end items-center">
                    {proj.url && proj.url !== "#" ? (
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-white/[0.12] group-hover:border-[#93C8FF] group-hover:text-[#93C8FF] font-mono text-[11px] uppercase tracking-wider transition-colors"
                      >
                        <span>VISIT ENTITY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A95A5]">
                        INTERNAL INTELLIGENCE
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 03 // ASYMMETRICAL EQUITY ALLOCATION THESIS              */}
        {/* ======================================================== */}
        <section className="site-chapter bg-[#07090D]">
          <div className="site-container">
            <div className="p-10 sm:p-14 border border-white/[0.14] bg-[#0C1119] grid lg:grid-cols-12 gap-10 items-center shadow-2xl relative">
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#93C8FF]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#93C8FF]" />

              <div className="lg:col-span-8 space-y-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#93C8FF] font-semibold block">
                  INVESTMENT THESIS
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF] leading-tight">
                  High-Conviction Equity Deployment in Proprietary Real Estate & Intelligence Systems.
                </h3>
                <p className="font-sans text-sm text-[#B8C2CF] font-light leading-relaxed">
                  We deploy equity exclusively in businesses where Cristian Văduva&apos;s principal network, regulatory acumen, and market origination generate an immediate, unfair operational multiplier.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs pt-4 border-t border-white/[0.08]">
                  <div className="p-3 bg-[#1B2028] border border-white/[0.05]">
                    <span className="text-[#93C8FF] block text-[10px] uppercase">CO-INVESTMENT SYNDICATION</span>
                    <span className="text-[#D8D0C2]">Open exclusively to verified family office principals</span>
                  </div>
                  <div className="p-3 bg-[#1B2028] border border-white/[0.05]">
                    <span className="text-[#93C8FF] block text-[10px] uppercase">TIME HORIZON</span>
                    <span className="text-[#D8D0C2]">Long-term equity compounding · 5–10 Year Hold</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:pl-8 lg:border-l lg:border-white/[0.08]">
                <Link
                  href="/contact"
                  className="w-full py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.22em] font-bold text-center transition-colors shadow-xl"
                >
                  DISCUSS SYNDICATION
                </Link>
                <div className="font-mono text-[10px] text-[#8A95A5] uppercase text-center">
                  MUTUAL NON-DISCLOSURE MANDATORY
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
