import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Scale,
  Database,
  ShieldAlert,
  Filter,
  Building,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import ChapterDivider from "@/components/ui/ChapterDivider";
import ClosingFrame from "@/components/ui/ClosingFrame";

export const metadata: Metadata = {
  title: "Bucharest Prime Quarterly Report | Methodological Framework | Executive",
  description:
    "Transparent, reproducible methodology of the Bucharest Prime quarterly residential report. Like-for-like analysis based on ANCPI, INS, and verified transaction records.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/raport-piata",
  },
  openGraph: {
    title: "Bucharest Prime Residential Report — Methodology | Cristian Văduva",
    description: "Quarterly research infrastructure for the Bucharest prime residential property market.",
    url: "https://executive.cristianvaduva.com/raport-piata",
    type: "website",
    locale: "en_US",
  },
};

const methodologyCriteria = [
  {
    number: "01",
    tag: "TEMPORALITY",
    title: "Observation Period & Extraction Frequency",
    description:
      "Data is aggregated on closed calendar quarterly cycles (Q1: January 1 – March 31; Q2: April 1 – June 30; Q3: July 1 – September 30; Q4: October 1 – December 31). No interim conclusions are drawn from incomplete windows or short weekly samples.",
    deliverable: "Continuous quarterly time-series data without speculative interpolations",
  },
  {
    number: "02",
    tag: "DATA PROVENANCE",
    title: "Verified Official Sources & Extraction Timestamp",
    description:
      "Official volume data is retrieved from monthly registries published by the National Agency for Cadastre and Land Registration (ANCPI). Macroeconomic indicators originate from the National Institute of Statistics (INS). Asking prices are extracted from verified databases at a fixed reference snapshot date (last business day of the quarter).",
    deliverable: "Complete citation protocol and precise extraction timestamps",
  },
  {
    number: "03",
    tag: "ZONAL BOUNDARIES",
    title: "Geographic Scope & Inclusion Boundaries",
    description:
      "Analysis is strictly delimited to Bucharest's prime residential enclaves: Herăstrău – Șoseaua Nordului, Primăverii, Kiseleff – Aviatorilor, Dorobanți Capitale, Floreasca, and the residential Pipera villa perimeter. Peripheral suburban developments outside the northern prime corridor are excluded.",
    deliverable: "Cadastral micro-zonal topographic boundary map",
  },
  {
    number: "04",
    tag: "ASSET SEGMENTATION",
    title: "Monitored Property Class & Segmentation",
    description:
      "Only upper-tier residential assets are included: penthouses, residences with at least 3 bedrooms and expansive terraces, individual luxury villas, and structurally restored historic estates. A minimum threshold is enforced to separate mass-market stock from the prime segment.",
    deliverable: "Homogeneous upper-prime and architectural trophy asset sample",
  },
  {
    number: "05",
    tag: "RIGID SEPARATION",
    title: "Asking Price vs. Notarial Closing Price",
    description:
      "We strictly decouple advertised portal prices from actual executed sale values. The asking price is treated solely as an indicator of vendor sentiment, while the closing price reflects verified value authenticated by notarial deed.",
    deliverable: "Bimodal scatter plot: Asking Price Sentiment vs. Closing Reality",
  },
  {
    number: "06",
    tag: "STANDARDIZATION",
    title: "Currency, Net Usable Area & Measurement Units",
    description:
      "All values are standardized in Euros (exclusive of VAT, with explicit notation where VAT applies). Reference surface is strictly net usable interior area (per Romanian Housing Law 114/1996 specifications), excluding balconies and terraces, which are weighted with specific coefficients.",
    deliverable: "Standardized €/sqm net usable comparative methodology by asset tier",
  },
  {
    number: "07",
    tag: "OUTLIER FILTERING",
    title: "Treatment of Statistical Outliers & Duplicate Listings",
    description:
      "We apply statistical filtering to eliminate anomalies and distressed sales that distort averages. Duplicate listings of the same property promoted across multiple intermediary brokers are deduplicated and mapped to a single unique asset identifier.",
    deliverable: "1-to-1 asset deduplication and statistical isolation of non-standard transactions",
  },
  {
    number: "08",
    tag: "TRANSPARENCY LIMITS",
    title: "Sample Size & Analytical Confidence Intervals",
    description:
      "Bucharest's luxury residential market generates a restricted volume of quarterly transactions compared to the mass market. Every published edition explicitly states sample size (N) and confidence intervals without forced extrapolations.",
    deliverable: "Open disclosure of methodological constraints and confidence intervals",
  },
];

export default function RaportPiataPage() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Architectural Grid & Ambient Aura */}
        <div className="absolute inset-0 bg-arch-grid opacity-25 pointer-events-none" />
        <div className="absolute top-24 left-1/4 w-[600px] h-[600px] bg-[#93C8FF]/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#A97F60]/5 rounded-full blur-[180px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-24 sm:space-y-32">

          {/* ======================================================== */}
          {/* HERO EDITORIAL COMPOSITION WITH PHOTO APERTURE            */}
          {/* ======================================================== */}
          <section className="space-y-12">
            <ChapterDivider
              number="01"
              category="INTELLIGENCE & RESEARCH ARCHITECTURE"
              title="Bucharest Prime Residential Report"
              subtitle="Reproducible Methodological Framework"
            />

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Narrative & Status */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase">
                    <BarChart3 className="w-3.5 h-3.5 text-[#93C8FF]" />
                    <span>RIGOROUS RESEARCH · ZERO FABRICATED DATA</span>
                  </div>

                  <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.08]">
                    Analytical infrastructure for the prime residential market.
                  </h1>
                </div>

                <p className="font-sans text-base sm:text-lg text-[#B8C2CF] leading-relaxed font-light">
                  An auditable, transparent methodological framework for monitoring prime residential assets in Bucharest. We reject speculative assertions and openly publish the exact specifications used to aggregate and screen our quarterly research sample.
                </p>

                {/* Calibration Status Badge */}
                <div className="p-5 bg-[#0C1119] border border-white/[0.1] space-y-3">
                  <div className="flex items-center gap-3 font-mono text-xs text-[#8A95A5]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A97F60] animate-pulse shrink-0" />
                    <span>
                      CURRENT STATUS: <strong className="text-[#F5F4EF]">METHODOLOGICAL CALIBRATION IN PROGRESS</strong>
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#8A95A5] leading-relaxed">
                    The Inaugural Edition is currently aggregating its transaction sample. The report will not publish aggregated figures until meeting the statistical robustness threshold established in the specifications below.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#criterii"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#E1E4EA] transition-colors"
                  >
                    <span>EXPLORE THE 8 CRITERIA</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/ghid-cumparator"
                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/[0.15] bg-[#0C1119] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#93C8FF] transition-colors"
                  >
                    <span>BUYER&apos;S DOSSIER</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Architectural Visual Aperture */}
              <div className="lg:col-span-5">
                <div className="relative border border-white/[0.12] bg-[#0C1119] p-3 shadow-2xl">
                  {/* Structural Crosshairs */}
                  <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t border-l border-[#93C8FF]" />
                  <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t border-r border-[#93C8FF]" />
                  <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b border-l border-[#93C8FF]" />
                  <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b border-r border-[#93C8FF]" />

                  <div className="relative aspect-[4/3] w-full bg-[#1B2028] overflow-hidden">
                    <Image
                      src="/media/cristian-vaduva/personal/cristian-vaduva-office-blueprints-underwriting.jpg"
                      alt="Cristian Văduva — Methodological analysis and blueprint audit"
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1] space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#93C8FF] block">
                        AUDITABLE METHODOLOGICAL FRAMEWORK
                      </span>
                      <p className="font-serif text-sm text-[#F5F4EF]">
                        Like-for-like analysis across micro-zones and homogeneous cadastral standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* DATA PIPELINE FLOW DIAGRAM                                */}
          {/* ======================================================== */}
          <section className="space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.28em] text-[#A97F60] font-semibold block">
                DATA ARCHITECTURE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                Ingestion, Screening & Standardization Pipeline
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#8A95A5] max-w-2xl">
                How we transform heterogeneous raw records into an auditable, reproducible database:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
              {/* Step 1 */}
              <div className="p-6 bg-[#0C1119] border border-white/[0.08] space-y-4 relative">
                <div className="flex items-center justify-between text-[#93C8FF]">
                  <span className="text-[10px] uppercase tracking-widest font-semibold">STAGE 01</span>
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#F5F4EF] font-normal">
                  Primary Source Ingestion
                </h3>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Ingestion of official ANCPI transaction volumes, INS macroeconomic metrics, and end-of-quarter listing database snapshots.
                </p>
                <div className="pt-2 text-[10px] text-[#93C8FF] border-t border-white/[0.06]">
                  Public records + agreed databases
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-6 bg-[#0C1119] border border-white/[0.08] space-y-4 relative">
                <div className="flex items-center justify-between text-[#A97F60]">
                  <span className="text-[10px] uppercase tracking-widest font-semibold">STAGE 02</span>
                  <Filter className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#F5F4EF] font-normal">
                  Deduplication & Outliers
                </h3>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Eliminating multi-broker duplicates for identical properties and scrubbing statistical anomalies (forced or distressed sales).
                </p>
                <div className="pt-2 text-[10px] text-[#A97F60] border-t border-white/[0.06]">
                  1 unique identifier per asset
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-6 bg-[#0C1119] border border-white/[0.08] space-y-4 relative">
                <div className="flex items-center justify-between text-[#93C8FF]">
                  <span className="text-[10px] uppercase tracking-widest font-semibold">STAGE 03</span>
                  <Building className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#F5F4EF] font-normal">
                  Micro-Zonal Screening
                </h3>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Strict filtering for properties situated in the Herăstrău, Primăverii, Kiseleff, Dorobanți, Floreasca, and Pipera enclaves.
                </p>
                <div className="pt-2 text-[10px] text-[#93C8FF] border-t border-white/[0.06]">
                  Zero peripheral developments
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-6 bg-[#0C1119] border border-white/[0.08] space-y-4 relative">
                <div className="flex items-center justify-between text-[#A97F60]">
                  <span className="text-[10px] uppercase tracking-widest font-semibold">STAGE 04</span>
                  <Scale className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg text-[#F5F4EF] font-normal">
                  Decoupled Reporting
                </h3>
                <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                  Asking prices (vendor market sentiment) are strictly decoupled from notarial authenticated closing values.
                </p>
                <div className="pt-2 text-[10px] text-[#A97F60] border-t border-white/[0.06]">
                  Asking vs. closing decoupled
                </div>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* 8-POINT METHODOLOGICAL CRITERIA BLUEPRINT                */}
          {/* ======================================================== */}
          <section id="criterii" className="space-y-12">
            <ChapterDivider
              number="02"
              category="DETAILED METHODOLOGICAL SPECIFICATIONS"
              title="Research Architecture across 8 Criteria"
              subtitle="Rigorous standards applied to ensure verified data comparability"
            />

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {methodologyCriteria.map((criterion) => (
                <div
                  key={criterion.number}
                  className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] hover:border-white/[0.2] transition-colors space-y-5 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] text-[#93C8FF] tracking-widest font-semibold">
                        CRITERION {criterion.number}
                      </span>
                      <span className="text-[#A97F60] tracking-widest uppercase font-semibold">
                        {criterion.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug">
                      {criterion.title}
                    </h3>

                    <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#B8C2CF] flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span><strong>Delivery standard:</strong> {criterion.deliverable}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* STATUS AND RIGOROUS LEGAL DELIMITATION                   */}
          {/* ======================================================== */}
          <section className="p-8 sm:p-10 bg-white/[0.02] border-l-2 border-[#A97F60] font-sans text-xs sm:text-sm text-[#8A95A5] space-y-3 leading-relaxed">
            <div className="flex items-center gap-2 text-[#F5F4EF] font-medium text-base">
              <ShieldAlert className="w-4 h-4 text-[#A97F60]" />
              <span>Report Status & Legal Delimitation</span>
            </div>
            <p>
              The Bucharest Prime Residential Report is an independent editorial and methodological research initiative of the Executive Cristian Văduva platform. It does not constitute an official report issued by a public authority of the Romanian state and does not substitute statutory ANEVAR valuation reports or banking compliance underwriting.
            </p>
          </section>

          {/* ======================================================== */}
          {/* HIGH-IMPACT CLOSING FRAME                                */}
          {/* ======================================================== */}
          <ClosingFrame
            category="03 // INITIATE STRATEGIC DIALOGUE"
            title="Would you like to receive the methodology upon publication?"
            description="You may request an introductory strategic consultation or examine our technical criteria dossier designed for buyers of high-value residential properties."
            primaryAction={{
              label: "EXAMINE BUYER'S DOSSIER",
              href: "/ghid-cumparator",
            }}
            secondaryAction={{
              label: "SCHEDULE STRATEGIC CONSULTATION",
              href: "/programare",
            }}
          />

        </div>
      </main>

      <Footer />
    </div>
  );
}
