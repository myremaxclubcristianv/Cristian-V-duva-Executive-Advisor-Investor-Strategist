import { Metadata } from "next";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { getOriginalInsights } from "@/lib/insights";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import { SectionHeader, EditorialText, CTASection } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Executive Journal & Market Dispatches — Cristian Văduva",
  description:
    "Original macroeconomic research, liquidity analytics, and strategic insights on European real estate cycles authored by Cristian Văduva.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/insights",
  },
  openGraph: {
    title: "Executive Journal & Market Dispatches — Cristian Văduva",
    description:
      "Original macroeconomic research, liquidity analytics, and strategic insights on European real estate cycles authored by Cristian Văduva.",
    locale: "en_US",
    type: "website",
  },
};

export default function InsightsPage() {
  const insights = getOriginalInsights();

  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-32 sm:pt-40 lg:pt-48 pb-32">
        {/* ======================================================== */}
        {/* 01 // EDITORIAL HERO                                     */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid pb-28 sm:pb-36 lg:pb-44">
          {/* Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 sm:space-y-16 relative z-10">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>01 // EXECUTIVE JOURNAL</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">RESEARCH & INTELLIGENCE</span>
              </div>
              <span className="text-[#8A95A5] hidden sm:block">QUARTERLY INTELLIGENCE</span>
            </div>

            <div className="max-w-4xl space-y-8">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F4EF] leading-[1.02] tracking-tight">
                Strategic Research &<br />
                <span className="text-[#A97F60] italic font-normal">Capital Perspectives.</span>
              </h1>

              <EditorialText size="xl" maxWidth="prose" color="secondary" className="leading-relaxed">
                Data-driven research examining European property cycles, macroeconomic credit liquidity, rental yield performance, and multi-generational family office wealth defense.
              </EditorialText>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // EDITORIAL DOSSIERS (AIRY MONOLITHIC ROWS)          */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-24">
          <SectionHeader
            eyebrow="02 // RESEARCH DOSSIERS"
            badge="ORIGINAL MEMORANDA"
            title="Publications & Macroeconomic Dispatches"
            description="Each memorandum investigates structural market dynamics: from real inflation-adjusted rental yields to sovereign capital preservation across the Monaco · Dubai corridor."
          />

          <div className="space-y-8">
            {insights.map((item, idx) => (
              <article
                key={item.id}
                className="p-8 sm:p-12 rounded-3xl border border-white/[0.08] bg-[#0C1119] grid lg:grid-cols-12 gap-8 lg:gap-12 items-center hover:border-white/[0.22] hover:bg-[#101622] transition-all duration-300 shadow-xl group"
              >
                <div className="lg:col-span-1 hidden lg:block">
                  <span className="font-serif text-4xl text-[#647082]/60 group-hover:text-[#93C8FF] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <div className="lg:col-span-5 relative aspect-video rounded-2xl overflow-hidden border border-white/[0.08] shadow-xl">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/70 via-transparent to-transparent" />
                </div>

                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#A97F60]/10 border border-[#A97F60]/20 text-[#A97F60] uppercase tracking-wider font-semibold">{item.category}</span>
                    <span className="text-[#8A95A5]">·</span>
                    <span className="text-[#B8C2CF]">{item.publicationDate} · {item.readingTime}</span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
                    <Link href={`/insights/${item.slug}`}>
                      {item.title}
                    </Link>
                  </h2>

                  <EditorialText size="sm" maxWidth="prose" color="secondary" className="leading-relaxed">
                    {item.excerpt}
                  </EditorialText>

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/[0.06] font-mono text-xs">
                    <span className="text-[#8A95A5]">Author: {item.author}</span>
                    <Link
                      href={`/insights/${item.slug}`}
                      className="btn-apple-pill-secondary inline-flex items-center gap-2"
                    >
                      <span>READ COMPLETE ANALYSIS</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#93C8FF]" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 03 // DISPATCH CALLOUT                                   */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="COMMISSIONED RESEARCH & DUE DILIGENCE"
          title="Commission a Project Due Diligence or Architectural Audit."
          description="The executive team undertakes confidential feasibility studies, title stress-testing, and environmental risk audits for high-value residential acquisitions and development sites."
          primaryActionText="REQUEST PROJECT AUDIT"
          primaryActionHref="/programare"
          secondaryActionText="DIRECT CONTACT"
          secondaryActionHref="mailto:contact@cristianvaduva.com"
          disclaimer="All intelligence reports and dossiers are delivered under contractual non-disclosure covenants."
        />
      </main>

      <Footer />
    </div>
  );
}
