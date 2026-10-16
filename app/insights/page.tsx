import { Metadata } from "next";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { getOriginalInsights } from "@/lib/insights";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Journal & Insights — Cristian Văduva",
  description: "Original strategic analysis, real estate insights, and capital allocation perspectives by Cristian Văduva.",
};

export default function InsightsPage() {
  const insights = getOriginalInsights();

  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-28 sm:pt-36 pb-24">
        {/* ======================================================== */}
        {/* 01 // EDITORIAL HEADER                                   */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid">
          {/* Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 relative z-10">
            <div className="flex items-center justify-between border-b border-white/[0.1] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>01 // EXECUTIVE JOURNAL</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">CAPITAL INTELLIGENCE</span>
              </div>
              <span className="text-[#8A95A5] hidden sm:block">QUARTERLY DOSSIERS</span>
            </div>

            <div className="max-w-4xl space-y-6">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F4EF] leading-[0.98] tracking-tight">
                Original Capital &<br />
                <span className="text-[#A97F60] italic font-normal">Real Estate Insights.</span>
              </h1>

              <p className="font-sans text-base sm:text-xl text-[#B8C2CF] font-light max-w-2xl leading-relaxed">
                Strategic research and commentary on European real estate cycles, macroeconomic liquidity, institutional positioning, and cross-border capital defense.
              </p>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // EDITORIAL DOSSIERS (ASYMMETRICAL ROWS)             */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] bg-[#0C1119]">
          <div className="site-container space-y-12">
            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {insights.map((item, idx) => (
                <article
                  key={item.id}
                  className="py-12 grid lg:grid-cols-12 gap-8 items-center hover:bg-[#1B2028]/40 transition-colors px-2 group"
                >
                  <div className="lg:col-span-1 hidden lg:block">
                    <span className="font-monumental text-5xl text-[#1B2028] group-hover:text-[#93C8FF] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="lg:col-span-5 relative aspect-video bg-black overflow-hidden border border-white/[0.1]">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/60 via-transparent to-transparent" />
                  </div>

                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs">
                      <span className="text-[#A97F60] uppercase tracking-widest font-semibold">{item.category}</span>
                      <span className="text-[#8A95A5]">·</span>
                      <span className="text-[#B8C2CF]">{item.publicationDate} · {item.readingTime}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
                      {item.title}
                    </h2>

                    <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                      {item.excerpt}
                    </p>

                    <div className="pt-2 flex items-center justify-between border-t border-white/[0.06] font-mono text-xs">
                      <span className="text-[#8A95A5]">Authored by {item.author}</span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-[#93C8FF] hover:text-[#B8C2CF] font-semibold transition-colors"
                      >
                        <span>REQUEST STRATEGIC MEMO</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 03 // DISPATCH CALLOUT                                   */}
        {/* ======================================================== */}
        <section className="site-chapter bg-[#07090D]">
          <div className="site-container">
            <div className="p-10 sm:p-14 border border-white/[0.14] bg-[#0C1119] flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl relative">
              <div className="space-y-3 max-w-xl">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF]">
                  RESEARCH & INTELLIGENCE DISPATCH
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                  Direct Fiduciary Research Mandates
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                  Commission custom forensic market reports, sub-market yield modeling, or macro valuation audits for confidential acquisitions.
                </p>
              </div>

              <Link
                href="/contact"
                className="px-8 py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-xl shrink-0"
              >
                COMMISSION RESEARCH
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
