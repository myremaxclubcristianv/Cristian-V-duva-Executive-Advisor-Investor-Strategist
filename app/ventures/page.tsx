import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, ShieldCheck, Compass, CheckCircle2, Lock, Building2 } from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { SectionHeader, EditorialText, ServiceSection, CTASection, InsightPanel } from "@/components/editorial";
import { ServiceItem } from "@/components/editorial/ServiceSection";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Strategic Advisory & Projects — Cristian Văduva Executive",
  description:
    "Strategic advisory for complex real estate decisions, asset selection guidance, and coordination of professional collaborations with Cristian Văduva.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/ventures",
  },
  openGraph: {
    title: "Strategic Advisory & Projects | Cristian Văduva",
    description:
      "Strategic advisory for complex real estate decisions, asset selection guidance, and institutional coordination.",
    url: "https://executive.cristianvaduva.com/ventures",
    type: "website",
    locale: "en_US",
  },
};

const ventureServices: ServiceItem[] = [
  {
    number: "01",
    category: "REAL ESTATE ADVISORY",
    title: "Strategic Advisory for Residential Acquisitions",
    description:
      "Advisory support in analyzing real estate opportunities across the Bucharest market and international corridors, in coordination with certified appraisers and notaries.",
    deliverables: [
      "Structured verification of available property documentation (land books, urban planning certificates)",
      "Comparative like-for-like pricing analysis within the same residential micro-zone",
      "Assistance with negotiating commercial transaction terms",
      "Coordination of transaction milestones alongside independent certified specialists",
    ],
    linkHref: "/cum-lucrez",
    linkText: "HOW I WORK & ENGAGEMENT PHASES",
    external: false,
  },
  {
    number: "02",
    category: "ECOSYSTEM & TECHNOLOGY",
    title: "Digital Platforms & Real Estate Intelligence",
    description:
      "Proprietary technological and editorial initiatives developed within the Cristian Văduva ecosystem (including HomeFind) for market intelligence and asset presentation.",
    deliverables: [
      "Centralized catalogue of documented prime residential opportunities",
      "Editorial monograph production and architectural dossiers for signature properties",
      "Proprietary screening and filtering tools for residential market intelligence",
      "Integration with international partner real estate networks (Chestertons)",
    ],
    linkHref: "/parteneri",
    linkText: "EXPLORE INSTITUTIONAL PARTNERSHIPS",
    external: false,
  },
  {
    number: "03",
    category: "DEDICATED MANDATES",
    title: "Unilateral Representation & Contractual Confidentiality",
    description:
      "Dedicated single-party advisory mandates for buyers or sellers, conducted under bilateral Non-Disclosure Agreements (NDA) and strict KYC/AML statutory compliance.",
    deliverables: [
      "Exclusive fiduciary representation of client interests under executed mandate",
      "Strict contractual confidentiality safeguarding negotiation terms and strategy",
      "Statutory Know-Your-Customer (KYC) and Anti-Money Laundering (AML) compliance",
      "Direct collaboration alongside client-appointed legal counsel and tax advisors",
    ],
    linkHref: "/contact",
    linkText: "REQUEST INITIAL BRIEFING",
    external: false,
  },
];

export default function VenturesPage() {
  return (
    <Section variant="dark" className="min-h-screen bg-[#07090D] text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="pt-24 sm:pt-32">
        {/* ======================================================== */}
        {/* 01 // HERO & STRATEGIC OVERVIEW                          */}
        {/* ======================================================== */}
        <section className="py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-8 border-b border-white/[0.08]">
          <div className="space-y-4 max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#93C8FF] font-semibold block">
              STRATEGIC ADVISORY & VENTURES
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] leading-tight break-words">
              Strategic Guidance for Complex Real Estate Decisions
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#B8C2CF] font-light leading-relaxed">
              Independent real estate advisory, rigorous analytical due diligence, and coordination of acquisition processes alongside certified specialists and institutional partners.
            </p>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[#8A95A5] border-t border-white/[0.08]">
            <div className="space-y-1">
              <span className="text-[#93C8FF] block uppercase text-[10px] font-semibold">CONTRACTUAL FRAMEWORK</span>
              <span className="text-[#F5F4EF] font-sans">Clear mandates · Complete compensation transparency</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#A97F60] block uppercase text-[10px] font-semibold">CONFIDENTIALITY</span>
              <span className="text-[#F5F4EF] font-sans">Bilateral NDAs · Statutory KYC compliance</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#93C8FF] block uppercase text-[10px] font-semibold">PARTNERSHIPS</span>
              <span className="text-[#F5F4EF] font-sans">Chestertons (Global) · Generali România (Agent)</span>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // STRATEGIC OPERATING LINES                          */}
        {/* ======================================================== */}
        <ServiceSection
          eyebrow="02 // SERVICE LINES"
          badge="DEDICATED MANDATES"
          title="Real Estate Advisory & Project Coordination"
          description="Every engagement is built on a clear contractual foundation: precise objective definition, documentary verification, and seamless coordination with independent specialists."
          services={ventureServices}
        />

        {/* ======================================================== */}
        {/* 03 // MACRO & VENTURE INTELLIGENCE PANELS                */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 bg-[#0C1119] border-t border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-20">
            <SectionHeader
              eyebrow="03 // MARKET ANALYSIS & INDICATORS"
              badge="FACTUAL MONITORING"
              title="Data-Backed Real Estate Market Indicators"
              description="Objective market data derived from official land registry records (ANCPI) and published institutional reports."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <InsightPanel
                category="TRANSACTION DYNAMICS · BUCHAREST"
                title="Residential Transaction Volumes"
                metric="ANCPI Registry"
                change="Cadastral Data"
                trend="neutral"
                date="Monthly Official Reports"
                source="National Agency for Cadastre and Land Registration (ANCPI)"
                description="Monthly monitoring of notarially authenticated transaction volumes to distinguish actual solvent demand from asking prices promoted on advertising portals."
                actionUrl="/raport-piata"
              />

              <InsightPanel
                category="INTERNATIONAL CORRIDOR"
                title="Monaco & French Riviera Prime Residential Market"
                metric="IMSEE Statistics"
                change="Public Data"
                trend="neutral"
                date="Annual IMSEE Reports"
                source="Monaco Institute of Statistics and Economic Studies (IMSEE)"
                description="Observations on Monaco market dynamics grounded in official statistical data published by Monegasque authorities. Individual tax considerations require licensed tax counsel."
                actionUrl="https://www.imsee.mc/Economie-et-Finances/Immobilier"
              />

              <InsightPanel
                category="ASSET PROTECTION"
                title="Real Estate Patrimony Risk Management"
                metric="Dedicated Policies"
                change="Generali Partner"
                trend="neutral"
                date="Asset Protection"
                source="Authorized Partner — Generali România"
                description="Risk transfer and prime building insurance solutions structured around true replacement cost, under authorized Generali România agency agreement."
                actionUrl="/parteneri"
              />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // SELECTION STANDARDS                                */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-12">
          <div className="p-10 sm:p-16 rounded-3xl border border-white/[0.08] bg-[#0C1119] grid lg:grid-cols-12 gap-10 items-center shadow-2xl relative">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF] font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>SELECTION CRITERIA & PROCESS</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EF] leading-tight">
                Real Estate Decisions Grounded in Documentation & Analysis
              </h2>

              <EditorialText size="base" maxWidth="prose" color="secondary" className="leading-relaxed">
                We do not engage in speculative assertions or unsubstantiated yield claims. Every analyzed property or project is evaluated on construction workmanship, legal title soundness, and long-term capital preservation.
              </EditorialText>

              <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs pt-4 border-t border-white/[0.08]">
                <div className="p-5 rounded-2xl bg-[#1B2028]/80 border border-white/[0.06] space-y-1.5">
                  <span className="text-[#93C8FF] block text-[10px] uppercase font-semibold">HOW I WORK</span>
                  <span className="text-[#F5F4EF] font-sans">Structured milestones, written bilateral mandate, and transparent fee model</span>
                </div>
                <div className="p-5 rounded-2xl bg-[#1B2028]/80 border border-white/[0.06] space-y-1.5">
                  <span className="text-[#93C8FF] block text-[10px] uppercase font-semibold">CONFIDENTIALITY</span>
                  <span className="text-[#F5F4EF] font-sans">Bilateral NDA protection executed prior to sharing sensitive details</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:pl-8 lg:border-l lg:border-white/[0.08]">
              <Link
                href="/programare"
                className="btn-apple-pill-primary w-full shadow-xl"
              >
                <span>SCHEDULE A CONSULTATION (20 MIN)</span>
              </Link>
              <div className="font-mono text-[10px] text-[#8A95A5] uppercase text-center tracking-wider">
                PRIOR MUTUAL NDA EXCHANGE AVAILABLE
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 05 // PRIVATE CTA                                        */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="CONFIDENTIAL DIALOGUE"
          title="Ready to discuss a property acquisition or advisory mandate?"
          description="Every collaboration begins with an introductory discussion to clarify requirements and determine alignment with the Executive practice."
          primaryActionText="SCHEDULE INITIAL CONSULTATION"
          primaryActionHref="/programare"
          secondaryActionText="WHATSAPP (+43 650 953 6345)"
          secondaryActionHref="https://wa.me/436509536345"
          disclaimer="All consultations are conducted under contractual confidentiality principles and in compliance with applicable statutory regulations."
        />
      </main>

      <Footer />
    </Section>
  );
}
