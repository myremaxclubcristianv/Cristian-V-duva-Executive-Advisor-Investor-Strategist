import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Scale,
  TrendingUp,
  ShieldCheck,
  Compass,
  CheckCircle2,
  MapPin,
  Award,
  Lock,
  GraduationCap,
  FileText,
  BarChart3,
  ExternalLink,
  Building2,
  Globe2,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/editorial/SectionHeader";
import EditorialText from "@/components/editorial/EditorialText";
import CTASection from "@/components/editorial/CTASection";
import PersonalArchiveGallery from "@/components/editorial/PersonalArchiveGallery";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Biography & Professional Track Record — Cristian Văduva | EXECUTIVE",
  description:
    "Strategic advisor and investor in prime residential assets. Multidisciplinary academic synthesis: 3 bachelor's degrees, 3 master's degrees, and international study tenures in Madrid, Amiens, and Malta.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/about",
  },
  openGraph: {
    title: "Biography & Professional Track Record — Cristian Văduva | EXECUTIVE",
    description:
      "Strategic advisor and investor in prime residential assets. Multidisciplinary academic synthesis: 3 bachelor's degrees, 3 master's degrees, and international study tenures in Madrid, Amiens, and Malta.",
    url: "https://executive.cristianvaduva.com/about",
    siteName: "EXECUTIVE — Cristian Văduva",
    locale: "en_US",
    type: "website",
  },
};

interface DegreeItem {
  discipline: string;
  field: string;
  institution: string;
  focus: string;
  relevance: string;
}

interface MasterItem {
  degree: string;
  specialization: string;
  domain: string;
  description: string;
}

interface ResidencyItem {
  location: string;
  country: string;
  duration: string;
  focus: string;
  description: string;
}

const academicDegrees: DegreeItem[] = [
  {
    discipline: "Economics",
    field: "Economic Strategy & Quantitative Analysis",
    institution: "Academic Bachelor's Degree",
    focus: "Economic analysis, liquidity cycles, and financial feasibility underwriting for prime real estate assets.",
    relevance: "Provides the analytical foundation for yield assessment, inflation resilience, and acquisition viability.",
  },
  {
    discipline: "Law",
    field: "Legal Framework & Real Estate Jurisprudence",
    institution: "Academic Bachelor's Degree",
    focus: "Understanding property regimes, land registry publicity, and contractual covenants (without practicing law or offering regulated legal advice).",
    relevance: "Supports preliminary title scrutiny and rigorous coordination with licensed attorneys and notaries.",
  },
  {
    discipline: "Ecology",
    field: "Ecology & Environmental Sustainability",
    institution: "Academic Bachelor's Degree",
    focus: "Evaluation of microclimatic exposure, ecological site durability, and European energy efficiency standards.",
    relevance: "Ensures physical site resilience and environmental compliance for waterfront and green corridor estates.",
  },
];

const postGraduateMasters: MasterItem[] = [
  {
    degree: "Master's Degree",
    specialization: "Financial Management",
    domain: "Capital Allocation & Financial Analysis",
    description: "Advanced specialization in corporate financial management, cash flow modeling, and investment risk underwriting.",
  },
  {
    degree: "Master's Degree",
    specialization: "Environmental Impact Assessment",
    domain: "Environmental Impact & Land Durability",
    description: "Research focused on environmental impact assessment, land durability, and resilience to microclimatic factors.",
  },
  {
    degree: "Master's Degree",
    specialization: "Information Security",
    domain: "Information Security & Confidential Communications",
    description: "Advanced training in protected communications architecture, data privacy, and secure information exchange protocols.",
  },
];

const internationalResidencies: ResidencyItem[] = [
  {
    location: "Madrid",
    country: "Spain",
    duration: "1 Year",
    focus: "Financial Management Studies",
    description: "One year of financial management studies in Madrid, Spain, analyzing European financial market mechanisms.",
  },
  {
    location: "Amiens",
    country: "France",
    duration: "6 Months",
    focus: "Academic Studies",
    description: "Six months of specialized university studies in Amiens, France.",
  },
  {
    location: "Valletta",
    country: "Malta",
    duration: "3 Months",
    focus: "Ecological Fieldwork",
    description: "Three months of practical field training on ecological sustainability and ecosystem conservation.",
  },
];

const trajectorySteps = [
  {
    stage: "01",
    phase: "ECONOMIC & FINANCIAL ANALYSIS",
    title: "Quantitative Underwriting & Market Intelligence",
    desc: "Econometric evaluation, liquidity monitoring, and risk management across real estate and capital markets.",
    focus: "Rigorous Analysis & Financial Modeling",
  },
  {
    stage: "02",
    phase: "CONTRACTUAL COORDINATION",
    title: "Negotiation Assistance & Transaction Documentation",
    desc: "Strategic advisory in complex real estate transactions and document process coordination alongside qualified legal counsel.",
    focus: "Dedicated Representation & Contractual Clarity",
  },
  {
    stage: "03",
    phase: "PRIME REAL ESTATE & ORIENTATION",
    title: "Opportunity Identification & Asset Due Diligence",
    desc: "Orientation for discreet acquisitions, preliminary title and cadastral review, and curated asset selection.",
    focus: "Prime Residential Assets & Heritage Estates",
  },
  {
    stage: "04",
    phase: "ASSET PROTECTION",
    title: "Authorized Partnership with Generali Romania",
    desc: "Risk transfer solutions and high-value property insurance at true reconstruction cost, as an authorized Generali Romania agent.",
    focus: "Asset Protection & Risk Management",
  },
  {
    stage: "05",
    phase: "INDEPENDENT REAL ESTATE ADVISORY",
    title: "Private Client Real Estate Advisory Mandates",
    desc: "Dedicated advisory for private investors and family offices, focusing on prime Bucharest properties and international opportunities through the Chestertons network.",
    focus: "Bucharest & International Corridors",
  },
];

const advisoryPillars = [
  {
    number: "01",
    title: "Dedicated Single-Party Representation",
    subtitle: "Total clarity and elimination of conflicts of interest",
    desc: "Upon client mandate, we represent exclusively one party (buyer or seller), ensuring complete transparency throughout the transaction lifecycle.",
    impact: "Transparent alignment exclusively with principal objectives.",
  },
  {
    number: "02",
    title: "Contractual Confidentiality (Bilateral NDA)",
    subtitle: "Written protection of private transaction data",
    desc: "All sensitive communications, transaction details, and contractual terms are safeguarded under bilateral non-disclosure agreements and secure protocols.",
    impact: "Commercial discretion and strict legal data compliance.",
  },
  {
    number: "03",
    title: "Structured Due Diligence Procedure",
    subtitle: "Systematic document and risk verification",
    desc: "Rigorous examination of title deeds, land registry extracts, and urban planning records in close coordination with technical auditors, notaries, and attorneys.",
    impact: "Early identification and resolution of documentation risks.",
  },
  {
    number: "04",
    title: "Focus on Generational Value",
    subtitle: "Long-term grounded real estate decisions",
    desc: "We reject short-term speculative hype. Every recommended opportunity is evaluated on architectural integrity, site quality, and long-term capital preservation.",
    impact: "Prudent advisory focused on generational wealth defense.",
  },
];

export default function AboutPage() {
  return (
    <Section variant="dark" className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-28 sm:pt-36 lg:pt-44">
        {/* ======================================================== */}
        {/* 01 // EDITORIAL MONOGRAPH HERO                           */}
        {/* ======================================================== */}
        <section className="relative overflow-hidden border-b border-white/[0.08] bg-arch-grid pb-24 sm:pb-32 lg:pb-36">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#93C8FF]/[0.025] blur-[140px] pointer-events-none" />

          {/* Corner Structural Crosshairs */}
          <div className="absolute top-8 left-6 sm:left-12 lg:left-20 w-3 h-3 border-t border-l border-[#93C8FF]/60" />
          <div className="absolute top-8 right-6 sm:right-12 lg:right-20 w-3 h-3 border-t border-r border-[#93C8FF]/60" />

          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-12 sm:space-y-16 relative z-10">
            {/* Top Eyebrow Index */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.16em] sm:tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse shrink-0" />
                <span className="font-semibold">01 // PROFILE & ADVISORY MANDATE</span>
                <span className="text-white/20 hidden xs:inline">/</span>
                <span className="text-[#B8C2CF] hidden xs:inline">CRISTIAN VADUVA</span>
              </div>
              <div className="flex items-center gap-2 text-[#8A95A5]">
                <MapPin className="w-3.5 h-3.5 text-[#A97F60] shrink-0" />
                <span>BUCHAREST · MONACO · DUBAI</span>
              </div>
            </div>

            {/* Monograph Master Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Thesis & Directives (~58% on desktop) */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A97F60]/10 border border-[#A97F60]/30 font-mono text-[9px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#A97F60] font-semibold max-w-full">
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate sm:overflow-visible">EXECUTIVE STRATEGIC ADVISOR & INVESTOR</span>
                  </div>
                  <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl text-[#F5F4EF] leading-[1.03] tracking-tight break-words">
                    Independent Advisory.<br />
                    <span className="text-[#A97F60] italic font-normal">Strategic Capital.</span><br />
                    Generational Defense.
                  </h1>
                </div>

                <div className="space-y-5 text-base sm:text-lg text-[#B8C2CF] font-light leading-relaxed max-w-2xl">
                  <p>
                    Cristian Văduva provides strategic advisory, prime real estate orientation, and asset protection structuring, operating primarily across Bucharest with access to major international corridors.
                  </p>

                  {/* Professional Services Focus */}
                  <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#0C1119] space-y-3">
                    <h2 className="font-serif text-lg text-[#F5F4EF] font-medium">
                      Real Estate Advisory & Dedicated Representation
                    </h2>
                    <p className="text-xs sm:text-sm text-[#B8C2CF] leading-relaxed font-light">
                      Representation tailored to the client&#39;s objectives — whether buyer, seller, or investor. From comparative asset analysis to strategic negotiation and transaction coordination, each mandate is governed by analytical rigor, clarity, and the defense of your interests.
                    </p>
                    <div className="pt-2">
                      <Link href="/cum-lucrez" className="text-xs font-mono text-[#93C8FF] hover:underline inline-flex items-center gap-1.5">
                        <span>Explore advisory methodology and collaboration phases</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Key Rail */}
                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
                  <div className="space-y-1">
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[9px] font-semibold">
                      PRIMARY PRESENCE
                    </span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm block">
                      Bucharest, Romania
                    </span>
                    <span className="text-[10px] text-[#8A95A5] block">International Corridors</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[#A97F60] block uppercase tracking-widest text-[9px] font-semibold">
                      RELEVANT ALLIANCES
                    </span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm block">
                      Chestertons · Generali
                    </span>
                    <span className="text-[10px] text-[#8A95A5] block">Verified Collaborations</span>
                  </div>

                  <div className="space-y-1 col-span-2 sm:col-span-1">
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[9px] font-semibold">
                      REAL ESTATE CATALOG
                    </span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm block">
                      433 Documented Properties
                    </span>
                    <span className="text-[10px] text-[#8A95A5] block">Structured Selection</span>
                  </div>
                </div>

                {/* Action Buttons - Apple Pills */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact"
                    className="btn-apple-pill-primary shadow-xl shadow-[#93C8FF]/15"
                  >
                    <span>INITIATE PRIVATE PROTOCOL</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#archive"
                    className="btn-apple-pill-secondary"
                  >
                    <span>EXPLORE VERIFIED ARCHIVE (18)</span>
                  </a>

                  <a
                    href="https://wa.me/436509536345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-mono uppercase tracking-[0.16em] font-medium border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 transition-all min-h-[44px]"
                  >
                    <span>WHATSAPP DIRECT</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Official Monograph Portrait (~42% on desktop) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/5] w-full rounded-3xl border border-white/[0.12] bg-[#0C1119] p-3 overflow-hidden shadow-2xl group">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/images/personal/portraits/cristian-vaduva-desk-advisor.jpg"
                      alt="Cristian Văduva Official Monograph Portrait"
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-65 pointer-events-none" />

                    {/* Portrait Caption Card */}
                    <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1] space-y-1">
                      <div className="font-serif text-lg text-[#F5F4EF] font-medium">
                        Cristian Văduva
                      </div>
                      <div className="font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                        Executive Advisory & Real Estate Representation
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // MULTIDISCIPLINARY ACADEMIC SYNTHESIS                */}
        {/* Separated: Degrees · Masters · Residencies · Generali     */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-36 bg-[#0C1119] border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-20">
            {/* Section Header */}
            <SectionHeader
              eyebrow="02 // MULTIDISCIPLINARY ACADEMIC FOUNDATION"
              badge="DEGREES & SPECIALIZATIONS"
              title="Academic Synthesis: Economics, Law & Ecology"
              description="Comprehensive strategic advisory requires concurrent mastery of corporate balance sheets, nuanced contractual covenants, and the physical environmental durability of real estate assets."
            />

            {/* Sub-Module A: Tripartite University Degrees */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded border border-[#93C8FF]/40 bg-[#93C8FF]/10 flex items-center justify-center text-[#93C8FF]">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#93C8FF] block font-semibold">
                      ACADEMIC FOUNDATION // 3 DEGREES
                    </span>
                    <h2 className="font-serif text-2xl text-[#F5F4EF]">
                      Tripartite University Qualifications (Economics · Law · Ecology)
                    </h2>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#8A95A5]">VALAHIA UNIVERSITY</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {academicDegrees.map((item, idx) => (
                  <div
                    key={item.discipline}
                    className="p-8 rounded-2xl border border-white/[0.08] bg-[#121721] flex flex-col justify-between space-y-6 hover:border-white/[0.22] hover:bg-[#161c28] transition-all duration-300 shadow-xl"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF] font-semibold">
                          DEGREE 0{idx + 1}{" // BACHELOR"}
                        </span>
                        <span className="font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                          {item.discipline}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
                          {item.field}
                        </h3>
                        <span className="font-mono text-xs text-[#8A95A5] block">
                          {item.institution}
                        </span>
                      </div>

                      <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] leading-relaxed font-light">
                        {item.focus}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#93C8FF] block font-semibold">
                        UNDERWRITING APPLICATION
                      </span>
                      <p className="font-sans text-xs text-[#8A95A5] leading-relaxed">
                        {item.relevance}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Module B: Post-Graduate Specializations (3 Master's Degrees) */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-[#A97F60]/40 bg-[#A97F60]/10 flex items-center justify-center text-[#A97F60]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A97F60] block font-semibold">
                      POST-GRADUATE SPECIALIZATION // 3 MASTER&apos;S DEGREES
                    </span>
                    <h2 className="font-serif text-2xl text-[#F5F4EF]">
                      Advanced Post-Graduate Master&apos;s Specializations
                    </h2>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#8A95A5]">POST-GRADUATE INSTITUTIONS</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {postGraduateMasters.map((m, idx) => (
                  <div
                    key={m.specialization}
                    className="p-8 rounded-2xl border border-white/[0.08] bg-[#121721] space-y-5 hover:border-[#A97F60]/60 hover:bg-[#161c28] transition-all duration-300 shadow-xl"
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#A97F60] font-semibold">
                        MASTER 0{idx + 1}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#A97F60]/10 border border-[#A97F60]/30 font-mono text-[9px] uppercase text-[#C49A78] font-semibold">
                        POST-GRADUATE
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug">
                        {m.specialization}
                      </h3>
                      <span className="font-mono text-xs text-[#93C8FF] block">
                        {m.domain}
                      </span>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] leading-relaxed font-light">
                      {m.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Module C & D: International Residencies + Generali Alliance */}
            <div className="grid lg:grid-cols-12 gap-8 pt-4">
              {/* International Residencies (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="border-b border-white/[0.08] pb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-[#93C8FF]/40 bg-[#93C8FF]/10 flex items-center justify-center text-[#93C8FF]">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#93C8FF] block font-semibold">
                        INTERNATIONAL RESIDENCIES
                      </span>
                      <h2 className="font-serif text-xl sm:text-2xl text-[#F5F4EF]">
                        Madrid (1 Yr) · France (6 Mo) · Malta (3 Mo)
                      </h2>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#8A95A5]">EUROPEAN STUDY AXIS</span>
                </div>

                <div className="space-y-4">
                  {internationalResidencies.map((res) => (
                    <div
                      key={res.location}
                      className="p-6 rounded-2xl border border-white/[0.08] bg-[#121721] space-y-2.5 hover:border-white/[0.2] hover:bg-[#161c28] transition-colors"
                    >
                      <div className="flex items-center justify-between font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-base text-[#F5F4EF] font-medium">{res.location}</span>
                          <span className="text-[#8A95A5]">·</span>
                          <span className="text-[#A97F60]">{res.country}</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-[#93C8FF]/10 text-[#93C8FF] border border-[#93C8FF]/20 text-[10px] uppercase font-semibold">
                          {res.duration}
                        </span>
                      </div>
                      <div className="font-mono text-[11px] text-[#93C8FF]">{res.focus}</div>
                      <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                        {res.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Generali Romania Strategic Collaboration (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="border-b border-white/[0.08] pb-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full border border-[#A97F60]/40 bg-[#A97F60]/10 flex items-center justify-center text-[#A97F60]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A97F60] block font-semibold">
                      STRATEGIC INSTITUTIONAL ALLIANCE
                    </span>
                    <h2 className="font-serif text-xl sm:text-2xl text-[#F5F4EF]">
                      Generali Romania Collaboration
                    </h2>
                  </div>
                </div>

                <div className="p-8 rounded-3xl border border-[#A97F60]/30 bg-[#121721] space-y-6 relative shadow-xl">
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A97F60] font-semibold block">
                      ASSET PROTECTION PROTOCOL
                    </span>
                    <p className="font-serif text-xl text-[#F5F4EF] leading-snug">
                      Structured Residence Protection & High-Value Asset Underwriting
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] leading-relaxed font-light">
                      The authorized agency partnership with Generali Romania enables direct integration of high-value property coverage, accurate reconstruction cost valuation, and comprehensive asset risk transfer.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/[0.08] font-mono text-xs">
                    <div className="flex items-start gap-2.5 text-[#B8C2CF]">
                      <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                      <span>Ultra-Prime Property & Architectural Casualty Underwriting</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[#B8C2CF]">
                      <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                      <span>Executive Health & Managerial Liability Shielding</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-[#B8C2CF]">
                      <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                      <span>Full Romanian Fiscal Code 2026 Deductibility Compliance</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://insurance.cristianvaduva.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-apple-pill-secondary w-full"
                    >
                      <span>INSPECT GENERALI ALLIANCE DESK</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 03 // METODOLOGIE DE ANALIZĂ COMPARATIVĂ PIAȚĂ             */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-20 border-b border-white/[0.08]">
          <SectionHeader
            eyebrow="03 // METHODOLOGY & COMPARATIVE ANALYSIS"
            badge="EVALUATION STANDARDS"
            title="Residential Price Analysis: Like-for-Like Criteria"
            description="An objective evaluation of Bucharest's residential market requires strictly separating asking prices from registered transaction values, and comparing properties with identical characteristics within the exact same micro-zone."
          />

          {/* Master Comparative Dossier Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Box 1: Prețuri de Listare vs Tranzacție */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl border border-[#93C8FF]/30 bg-[#0C1119] space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#93C8FF]" />
                  <span className="text-[#93C8FF] uppercase tracking-[0.2em] font-semibold">
                    ASKING PRICES VS. REGISTERED TRANSACTIONS
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#93C8FF]/10 text-[#93C8FF] border border-[#93C8FF]/30 text-[10px] font-semibold">
                  METHODOLOGICAL DISCIPLINE
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  Distinguishing expectations from executed contracts
                </h3>
                <p className="font-sans text-sm text-[#B8C2CF] leading-relaxed font-light">
                  Asking prices on real estate portals reflect initial seller expectations, whereas prices authenticated by public notaries reflect actual capital transferred. Comparing central corridor data (Herăstrău, Floreasca) with peripheral areas distorts conclusions unless normalized for the exact micro-zone.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#B8C2CF]">
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#8A95A5]">EXACT MICRO-ZONE</span>
                  <span className="text-[#F5F4EF]">Mandatory baseline criterion</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#8A95A5]">SURFACE & SPECIFICATIONS</span>
                  <span className="text-[#93C8FF]">Usable floor area benchmark</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8A95A5]">CITED SOURCES</span>
                  <span className="text-[#93C8FF] font-semibold">ANCPI & Verifiable Public Records</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#93C8FF] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Analyses based strictly on directly comparable samples</span>
              </div>
            </div>

            {/* Box 2: Factori Cheie în Evaluare */}
            <div className="lg:col-span-6 p-8 sm:p-10 rounded-2xl border border-white/[0.1] bg-[#0C1119] space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A97F60]" />
                  <span className="text-[#A97F60] uppercase tracking-[0.2em] font-semibold">
                    COMPARABILITY STANDARDS
                  </span>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/[0.05] text-[#8A95A5] border border-white/[0.1] text-[10px]">
                  LIKE-FOR-LIKE
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  Criteria for sound acquisition decisions
                </h3>
                <p className="font-sans text-sm text-[#B8C2CF] leading-relaxed font-light">
                  To determine whether an asset offers fair market value, we inspect legal standing, cadastral history, structural quality, and utility capacity, without speculative yield promises or unsubstantiated projections.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#B8C2CF]">
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#8A95A5]">CONSTRUCTION QUALITY</span>
                  <span className="text-[#A97F60]">Specialized structural audit</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#8A95A5]">LEGAL FRAMEWORK</span>
                  <span className="text-[#8A95A5]">Land registry and title verification</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8A95A5]">TRANSPARENCY</span>
                  <span className="text-[#F5F4EF]">Zero speculative return guarantees</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#A97F60] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Meticulous documentation protocol prior to any offer</span>
              </div>
            </div>
          </div>

          {/* Analytical Takeaway Callout */}
          <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#121721] flex flex-col md:flex-row items-baseline justify-between gap-6 font-mono text-xs">
            <div className="space-y-1.5 max-w-3xl">
              <span className="text-[#93C8FF] uppercase tracking-[0.24em] text-[10px] font-semibold block">
                METHODOLOGY & QUARTERLY MARKET REPORT
              </span>
              <p className="font-sans text-sm sm:text-base text-[#F5F4EF] font-light leading-relaxed">
                Review the complete methodology and structure of the quarterly market report covering Bucharest&#39;s prime residential market.
              </p>
            </div>
            <Link
              href="/raport-piata"
              className="btn-apple-pill-primary shadow-lg shrink-0"
            >
              <span>VIEW MARKET REPORT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // ADVISORY PHILOSOPHY & PRINCIPLES                    */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-20 border-b border-white/[0.08]">
          <SectionHeader
            eyebrow="04 // PROFESSIONAL PHILOSOPHY & ETHICS"
            badge="GOVERNANCE STANDARDS"
            title="The Cristian Văduva Advisory Principles"
            description="In an industry plagued by superficial brokerage and concealed transaction fees, this practice is grounded upon four uncompromising principles of professional conduct."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advisoryPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0C1119] space-y-5 hover:border-white/[0.22] hover:bg-[#121721] transition-all duration-300 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-3xl text-[#93C8FF] font-light">
                      {pillar.number}
                    </span>
                    <div className="w-8 h-[1px] bg-[#93C8FF]/40" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF] font-semibold">
                      CARDINAL PRINCIPLE
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#A97F60] uppercase tracking-wider">
                    {pillar.subtitle}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
                  {pillar.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#B8C2CF] leading-relaxed font-light">
                  {pillar.desc}
                </p>

                <div className="pt-4 border-t border-white/[0.06] font-mono text-xs text-[#93C8FF] flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] text-[#8A95A5]">{pillar.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 05 // THE CRISTIAN VĂDUVA ARCHIVE (18 MONOGRAPHS & STUDIES) */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-36 bg-[#0C1119] border-b border-white/[0.08] relative">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs text-[#93C8FF] uppercase tracking-[0.28em] font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>05 // VISUAL ARCHIVE & PROFESSIONAL ENGAGEMENTS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] leading-tight">
                Gallery & Professional Documentation
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#B8C2CF] max-w-3xl font-light leading-relaxed">
                An inside view into executive advisory engagements, client working sessions, site inspections, and professional collaborations across European corridors.
              </p>
            </div>

            {/* Interactive Archive Component */}
            <PersonalArchiveGallery />
          </div>
        </section>

        {/* ======================================================== */}
        {/* 06 // CAREER EVOLUTION TRAJECTORY                        */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-36 bg-[#07090D] border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-20">
            <SectionHeader
              eyebrow="06 // EVOLUTION & PRACTICE CHRONOLOGY"
              badge="PRACTICE TRAJECTORY"
              title="Phases of Executive & Strategic Consolidation"
              description="From capital market liquidity research and econometric underwriting to sovereign trophy asset negotiations and multi-generational family office defense."
            />

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {trajectorySteps.map((step) => (
                <div
                  key={step.stage}
                  className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline hover:bg-[#121721]/50 transition-colors px-4 sm:px-6 relative group"
                >
                  <div className="md:col-span-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-lg text-[#93C8FF] font-semibold">{step.stage}</span>
                      <div className="w-6 h-[1px] bg-[#93C8FF]/40" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#A97F60] font-semibold">
                        {step.phase}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  <div className="md:col-span-8 space-y-3">
                    <p className="font-sans text-sm sm:text-base text-[#B8C2CF] leading-relaxed font-light max-w-2xl">
                      {step.desc}
                    </p>
                    <div className="font-mono text-[11px] text-[#8A95A5] flex items-center gap-2">
                      <span className="text-[#93C8FF]">MANDATE FOCUS:</span>
                      <span>{step.focus}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 07 // PRIVATE MANDATE INTAKE                             */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="PRIVATE ADVISORY PROTOCOL"
          title="Initiate a Confidential Strategic Consultation."
          description="Every acquisition, capital structuring, or asset preservation mandate is evaluated personally by Cristian Văduva. Initial consultations operate under strict confidentiality agreements and pre-execution non-disclosure covenants."
          primaryActionText="INITIATE PRIVATE PROTOCOL"
          primaryActionHref="/contact"
          secondaryActionText="WHATSAPP DESK (+43 650 953 6345)"
          secondaryActionHref="https://wa.me/436509536345"
          disclaimer="Representation mandates are strictly limited in volume to ensure undivided principal attention and complete insulation from conflicts of interest."
        />
      </main>

      <Footer />
    </Section>
  );
}
