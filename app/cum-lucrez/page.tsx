import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Scale,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import ChapterDivider from "@/components/ui/ChapterDivider";
import NumberedProcessTimeline, { TimelineStep } from "@/components/ui/NumberedProcessTimeline";
import ClosingFrame from "@/components/ui/ClosingFrame";

export const metadata: Metadata = {
  title: "How I Work: Advisory Process, Analysis & Representation | Cristian Văduva",
  description:
    "Structured advisory methodology, engagement milestones, mutual NDA confidentiality, cadastral due diligence, and professional responsibility boundaries in real estate mandates.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/cum-lucrez",
  },
  openGraph: {
    title: "How I Work: Advisory Process, Analysis & Representation | Cristian Văduva",
    description:
      "Contractual clarity, engagement phases, mandate structures, and professional boundaries in private real estate advisory.",
    url: "https://executive.cristianvaduva.com/cum-lucrez",
    type: "website",
    locale: "en_US",
  },
};

const DETAILED_PROCESS_STEPS: TimelineStep[] = [
  {
    number: "01",
    stageName: "Exploratory Consultation (20 Min)",
    duration: "20 Minutes",
    summary: "A direct preliminary session to analyze transaction parameters, valuation objectives, and advisory alignment.",
    details: "No contractual obligation or hidden costs. We establish exactly what you aim to acquire or sell and confirm whether we can deliver quantifiable strategic value.",
    deliverables: ["Preliminary objective matrix", "Market feasibility assessment", "Mutual NDA option"],
    accentBadge: "DIAGNOSTIC",
  },
  {
    number: "02",
    stageName: "Written Bilateral Mandate & KYC",
    duration: "1–2 Days",
    summary: "Execution of the single-party representation agreement with clear fee structures and statutory identity verification.",
    details: "We define the financial model by mutual agreement: fixed retainer, success fee, or hybrid structure. We conduct required statutory KYC compliance checks.",
    deliverables: ["Unilateral representation contract", "Non-Disclosure Agreement (NDA)", "Secure engagement protocol"],
    accentBadge: "CONTRACTUAL",
  },
  {
    number: "03",
    stageName: "Exhaustive Screening & Due Diligence",
    duration: "3–6 Weeks",
    summary: "Identification of on-market and off-market opportunities, followed by rigorous cadastral and technical audits of each selected asset.",
    details: "No random viewings. Every proposed property undergoes like-for-like comparative analysis against recent closed transactions and preliminary title verification.",
    deliverables: ["Like-for-like analytical dossier", "Preliminary land registry verification", "Coordination of certified structural audits"],
    accentBadge: "TECHNICAL AUDIT",
  },
  {
    number: "04",
    stageName: "Strategic Price & Terms Negotiation",
    duration: "1–2 Weeks",
    summary: "Exclusive representation at the negotiation table to optimize acquisition price and contractual warranties.",
    details: "We negotiate directly with property owners, developers, or their representatives using technical data and valuation metrics, removing emotional friction.",
    deliverables: ["Data-backed bidding strategy", "Structuring of milestones and conditions precedent", "Preliminary sale contract (SPA) audit"],
    accentBadge: "NEGOTIATION",
  },
  {
    number: "05",
    stageName: "Notarial Authentication & Asset Handover",
    duration: "Closing Phase",
    summary: "Physical and technical attendance at the notary office through execution of the definitive sale-purchase agreement (SPA).",
    details: "We coordinate with the appointed notary office to verify payment confirmations, escrow protocols, fiscal certificates, and the formal handover protocol.",
    deliverables: ["Notary closing attendance", "Escrow protocol verification", "Technical handover and formal acceptance protocol"],
    accentBadge: "CLOSING",
  },
];

export default function CumLucrezPage() {
  return (
    <Section variant="dark" className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-24 left-1/3 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-2/3 right-1/4 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-24 sm:space-y-36">
          {/* HERO SECTION */}
          <section className="border-b border-white/[0.08] pb-16 lg:pb-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase rounded-full">
                  <Scale className="w-3.5 h-3.5 text-[#93C8FF]" />
                  <span>RIGOROUS METHODOLOGY · COMPLETE TRANSPARENCY</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.08]">
                  How I Work: Advisory Process, Analysis & Representation
                </h1>

                <p className="font-sans text-base sm:text-lg text-[#B8C2CF] leading-relaxed font-light max-w-2xl">
                  Successful mandates are built on well-defined criteria, the total absence of conflicting interests, analytical rigor, and the long-term preservation of principal capital.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Link
                    href="/programare"
                    className="btn-apple-pill-primary inline-flex items-center gap-2 min-h-[48px]"
                  >
                    <span>SCHEDULE 20-MINUTE CONSULTATION</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/pentru-clienti"
                    className="btn-apple-pill-secondary inline-flex items-center gap-2 min-h-[48px]"
                  >
                    <span>PRIVATE CLIENT ADVISORY</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Authentic Image Underwriting Desk */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] bg-[#0C1119] border border-white/[0.12] rounded-3xl overflow-hidden group shadow-2xl">
                  <Image
                    src="/media/cristian-vaduva/personal/cristian-vaduva-office-blueprints-underwriting.jpg"
                    alt="Cristian Văduva — Documentary audit and technical architectural analysis"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#07090D]/90 backdrop-blur-md border border-white/10 rounded-2xl font-mono text-xs text-[#E1E4EA] flex items-center justify-between">
                    <div>
                      <span className="text-[#A97F60] uppercase block text-[9px] font-semibold">DOCUMENTARY AUDIT</span>
                      <span className="font-sans font-medium text-xs">Cadastral analysis & technical plans</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#93C8FF]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CHAPTER 01 // 5-STAGE ADVISORY PROTOCOL */}
          <section className="space-y-12">
            <ChapterDivider
              number="01"
              category="5-STAGE ADVISORY PROTOCOL"
              title="A Mandate's Journey from Initial Diagnosis to Completion"
              description="Every transaction follows a logical sequence designed to provide solid data foundation for each financial decision and eliminate hidden liabilities."
            />

            <NumberedProcessTimeline steps={DETAILED_PROCESS_STEPS} />
          </section>

          {/* CHAPTER 02 // STRUCTURED REPRESENTATION BY CLIENT TYPE */}
          <section className="space-y-12">
            <ChapterDivider
              number="02"
              category="STRATEGIC FRAMEWORK"
              title="Tailored Representation: Buyers · Sellers · Prime Leasing · Capital Allocation"
              description="Every mandate is calibrated to the client's specific objectives, eliminating conflicting loyalties and advocating exclusively for the represented party."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1: Buyers */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] hover:border-[#93C8FF]/50 transition-all flex flex-col justify-between space-y-6 group shadow-lg">
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#93C8FF] font-semibold tracking-wider uppercase block">
                    01 // BUYERS
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F4EF]">Buyer Advisory</h3>
                  <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                    Clear criteria definition, rigorous whole-market filtering across on & off-market channels, comparative valuation, and disciplined negotiation.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#A97F60]">
                  Focus: Capital protection, efficiency, and time optimization.
                </div>
              </div>

              {/* Card 2: Sellers */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] hover:border-[#A97F60]/50 transition-all flex flex-col justify-between space-y-6 group shadow-lg">
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#A97F60] font-semibold tracking-wider uppercase block">
                    02 // SELLERS
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F4EF]">Seller Advisory</h3>
                  <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                    Market positioning, data-backed pricing strategy, institutional-grade presentation assets, and direct pre-qualification of buyers.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#A97F60]">
                  Focus: Value maximization and qualified exposure.
                </div>
              </div>

              {/* Card 3: Prime Leasing */}
              <div className="p-8 bg-[#0C1119] border border-white/[0.08] hover:border-white/[0.2] transition-all flex flex-col justify-between space-y-6 group shadow-lg">
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#B8C2CF] font-semibold tracking-wider uppercase block">
                    03 // PRIME LEASING
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F4EF]">Rental Placement</h3>
                  <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                    Positioning prime residences against solvent demand, selective tenant vetting, managed viewings, and robust lease structuring.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#A97F60]">
                  Focus: Long-term income stability and asset preservation.
                </div>
              </div>

              {/* Card 4: Capital Allocation */}
              <div className="p-8 bg-[#0C1119] border border-[#93C8FF]/30 bg-[#93C8FF]/[0.02] flex flex-col justify-between space-y-6 shadow-xl shadow-[#93C8FF]/5 group">
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#93C8FF] font-semibold tracking-wider uppercase block">
                    04 // CAPITAL ALLOCATION
                  </span>
                  <h3 className="font-serif text-2xl text-[#F5F4EF]">Capital Allocation</h3>
                  <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                    Systematic opportunity screening by liquidity and target yield, separating asking prices from factual yields, and evaluating real asset risk.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#93C8FF]">
                  Focus: Data-informed capital allocation without speculative promises.
                </div>
              </div>
            </div>

            {/* Concise Contractual Framework Box */}
            <div className="p-6 sm:p-8 bg-white/[0.02] border-l-2 border-[#93C8FF] font-sans text-xs sm:text-sm text-[#B8C2CF] leading-relaxed space-y-2">
              <strong className="text-[#F5F4EF] font-medium text-base block">
                Contractual Transparency & Written Bilateral Agreement
              </strong>
              <p>
                All engagement terms, defined milestones, and commercial fees are transparently established in a bilateral written agreement before commencing any work. Each mandate acts exclusively for the contracting principal, guaranteeing zero conflict of interest.
              </p>
            </div>
          </section>

          {/* CHAPTER 03 // PROFESSIONAL BOUNDARIES */}
          <section className="space-y-12">
            <ChapterDivider
              number="03"
              category="LEGAL & PROFESSIONAL BOUNDARIES"
              title="Professional Scope: Direct Advisory Services vs. Regulated External Practitioners"
              description="To protect transaction integrity, we strictly separate strategic advisory from specialized disciplines reserved exclusively by law to certified professions."
            />

            <div className="grid md:grid-cols-2 gap-8">
              {/* Direct Services */}
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center gap-2 text-[#93C8FF] font-mono text-xs uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>DIRECT ADVISORY SERVICES BY CRISTIAN VĂDUVA</span>
                </div>

                <ul className="space-y-4 font-sans text-sm text-[#B8C2CF]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Strategic real estate advisory and formulation of search/disposition mandates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Comparative market analysis based on verified like-for-like closed transactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Preliminary property screening and exclusion of encumbered assets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Direct guidance in formulating bidding strategy and negotiation positioning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#93C8FF] font-mono text-xs mt-0.5">•</span>
                    <span>Coordination and communication management across all transaction specialists</span>
                  </li>
                </ul>
              </div>

              {/* External Regulated Professionals */}
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center gap-2 text-[#A97F60] font-mono text-xs uppercase tracking-wider">
                  <AlertCircle className="w-4 h-4" />
                  <span>DISCIPLINES RESERVED FOR REGULATED PROFESSIONS</span>
                </div>

                <ul className="space-y-4 font-sans text-sm text-[#8A95A5]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <div>
                      <strong className="text-[#F5F4EF] font-medium block">Bar Attorneys:</strong>
                      Legal counsel, title verification, and formal drafting of legal property contracts.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <div>
                      <strong className="text-[#F5F4EF] font-medium block">Public Notaries:</strong>
                      Solemn authentication of property deeds, official registry verification, and tax collection.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <div>
                      <strong className="text-[#F5F4EF] font-medium block">Certified Building Engineers:</strong>
                      Technical structural audits, seismic assessments, and construction book inspection.
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A97F60] font-mono text-xs mt-0.5">•</span>
                    <div>
                      <strong className="text-[#F5F4EF] font-medium block">ANEVAR Appraisers:</strong>
                      Statutory valuation reports required for banking, corporate, or financial compliance.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CLOSING FRAME */}
          <ClosingFrame
            category="COMMENCE ENGAGEMENT"
            title="Ready to discuss terms for a dedicated advisory mandate?"
            description="Schedule an introductory 20-minute confidential consultation. No commercial obligation."
            primaryCtaText="SCHEDULE 20-MINUTE CONSULTATION"
            primaryCtaHref="/programare"
            secondaryCtaText="PRIVATE CLIENT ADVISORY"
            secondaryCtaHref="/pentru-clienti"
            imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-gold-desk.png"
          />
        </div>
      </main>

      <Footer />
    </Section>
  );
}
