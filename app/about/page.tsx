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

export const metadata: Metadata = {
  title: "About & Fiduciary Mandate — Cristian Văduva | EXECUTIVE",
  description:
    "Executive strategic advisor, investor, and fiduciary negotiator along the Monaco · Dubai · Bucharest axis. Verified academic synthesis of 3 degrees, 3 master's degrees, and international residencies in Madrid, France, and Malta.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/about",
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
    field: "Economic Strategy & Quantitative Modeling",
    institution: "Valahia University · Faculty of Economics",
    focus: "Macroeconomic liquidity assessment, capital allocation cycles, and quantitative feasibility models.",
    relevance: "Provides the analytical underwriting basis for evaluating asset yields, inflation hedging, and acquisition viability.",
  },
  {
    discipline: "Law",
    field: "Contractual Jurisprudence & Cadastral Law",
    institution: "Valahia University · Faculty of Law",
    focus: "Property rights, cadastral title forensic auditing, encumbrance verification, and bilateral acquisition covenants.",
    relevance: "Shields private principals against contractual exposure, title disputes, and dual-agency brokerage liabilities.",
  },
  {
    discipline: "Ecology",
    field: "Environmental Science & Sustainable Systems",
    institution: "Valahia University · Faculty of Environmental Science",
    focus: "Site environmental impact, ecological durability, microclimatic exposure, and energy-efficiency standards.",
    relevance: "Ensures long-term physical resilience and regulatory compliance for coastal, lakeside, and rural residential estates.",
  },
];

const postGraduateMasters: MasterItem[] = [
  {
    degree: "Master's Degree",
    specialization: "Financial Management",
    domain: "Corporate Finance & Capital Structuring",
    description: "Advanced post-graduate specialization focusing on institutional capital structuring, debt syndication, and sovereign investment portfolio calibration.",
  },
  {
    degree: "Master's Degree",
    specialization: "Environmental Impact Assessment",
    domain: "Ecological Engineering & Site Due Diligence",
    description: "Post-graduate research on comprehensive environmental auditing, soil and water safety assessments, and physical durability under climate stress.",
  },
  {
    degree: "Master's Degree",
    specialization: "Information Security",
    domain: "Cybersecurity & Encrypted Systems",
    description: "Rigorous training in secure communications architecture, data privacy protocols, and digital asset defense for high-profile executive principals.",
  },
];

const internationalResidencies: ResidencyItem[] = [
  {
    location: "Madrid",
    country: "Spain",
    duration: "1 Year",
    focus: "Financial Management & European Real Estate Markets",
    description: "One year of intensive financial management studies and institutional capital market research in Madrid, examining cross-border liquidity across Southern Europe.",
  },
  {
    location: "Amiens",
    country: "France",
    duration: "6 Months",
    focus: "Academic Studies & Comparative Jurisprudence",
    description: "Six months of specialized academic studies in Amiens, France, focusing on French patrimonial property law and European regulatory frameworks.",
  },
  {
    location: "Valletta",
    country: "Malta",
    duration: "3 Months",
    focus: "Ecological Internship & Marine Ecosystems",
    description: "Three-month ecological field internship analyzing Mediterranean coastal marine sustainability, water management, and island development standards.",
  },
];

const trajectorySteps = [
  {
    stage: "01",
    phase: "CAPITAL MARKETS & UNDERWRITING",
    title: "Quantitative Analysis & Order Routing Infrastructure",
    desc: "Quantitative econometric analysis, order routing infrastructure, macroeconomic liquidity assessment, and structural risk management across European financial markets.",
    focus: "Empirical Liquidity & Algorithmic Underwriting",
  },
  {
    stage: "02",
    phase: "CONTRACTUAL JURISPRUDENCE",
    title: "Principal Negotiation & Cross-Border Sovereign Contracts",
    desc: "High-stakes strategic negotiation, cross-border contract sovereignty, and executing complex corporate real estate acquisitions without fiduciary compromise.",
    focus: "Unilateral Fiduciary Mandates & Title Sovereignty",
  },
  {
    stage: "03",
    phase: "PRIME REAL ESTATE ORIGINATION",
    title: "Off-Market Trophy Acquisitions & Masterplans",
    desc: "Exclusive representation for discreet acquisitions, architectural due diligence, and confidential off-market sourcing of trophy estates across Monaco, the French Riviera, and Bucharest.",
    focus: "Trophy Penthouses, Coastal Villas & Masterplan Developments",
  },
  {
    stage: "04",
    phase: "PATRIMONIAL DEFENSE ALLIANCE",
    title: "Generali Romania Institutional Protection Partnership",
    desc: "Capital preservation protocols, physical and cyber asset defense, and structural wealth defense mechanisms across multi-generational horizons in partnership with Generali Romania.",
    focus: "Institutional Wealth Shielding & Generational Continuity",
  },
  {
    stage: "05",
    phase: "INDEPENDENT EXECUTIVE ADVISORY",
    title: "Integrated Fiduciary Counsel for Family Offices",
    desc: "Discreet advisory counsel dedicated to a select circle of single family offices and sovereign principals along the Bucharest, Monaco, Zurich, and Dubai corridors.",
    focus: "Cross-Disciplinary Sovereign Advisory Axis",
  },
];

const fiduciaryPillars = [
  {
    number: "01",
    title: "Unilateral Exclusivity (Zero Dual Agency)",
    subtitle: "Absolute Counterparty Independence",
    desc: "We represent strictly one side of any transaction — either the buyer or the seller. We categorically eliminate the systemic conflict of interest prevalent in conventional brokerage models that collect commissions from both counterparties.",
    impact: "100% fiduciary loyalty guaranteed to the retained principal.",
  },
  {
    number: "02",
    title: "Swiss-Standard Non-Disclosure & Secrecy",
    subtitle: "Institutional Privacy by Design",
    desc: "Every transaction nuance, holding entity structure, and beneficial ownership identity is shielded behind stringent fiduciary covenants, encrypted communications, and pre-execution non-disclosure covenants.",
    impact: "Total insulation against public disclosure and market rumor.",
  },
  {
    number: "03",
    title: "Forensic Cadastral & Engineering Audit",
    subtitle: "Pre-Capital Verification Protocol",
    desc: "No asset is approved for acquisition prior to an exhaustive forensic audit of title deeds, encumbrances, historical permitting compliance, urban zoning certificates, and physical structural engineering integrity.",
    impact: "Zero post-acquisition surprises or uninsurable encumbrances.",
  },
  {
    number: "04",
    title: "Generational Wealth Preservation Focus",
    subtitle: "Decadal Capital Compounding",
    desc: "We do not sell short-term speculative hype. Every curated asset must demonstrate intrinsic architectural rarity, sustainable net operating yields, and balance sheet compounding resilience across adverse macroeconomic cycles.",
    impact: "Capital defense prioritized over transactional volume.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
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
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span className="font-semibold">01 // PROFILE & FIDUCIARY MANDATE</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">CRISTIAN VADUVA</span>
              </div>
              <div className="flex items-center gap-2 text-[#8A95A5]">
                <MapPin className="w-3.5 h-3.5 text-[#A97F60]" />
                <span>BUCHAREST · MONACO · DUBAI</span>
              </div>
            </div>

            {/* Monograph Master Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Thesis & Directives (~58% on desktop) */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A97F60]/10 border border-[#A97F60]/30 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#A97F60] font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>EXECUTIVE STRATEGIC ADVISOR & INVESTOR</span>
                  </div>
                  <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5F4EF] leading-[1.03] tracking-tight">
                    Independent Advisory.<br />
                    <span className="text-[#A97F60] italic font-normal">Strategic Capital.</span><br />
                    Generational Defense.
                  </h1>
                </div>

                <div className="space-y-5 text-base sm:text-lg text-[#B8C2CF] font-light leading-relaxed max-w-2xl">
                  <p>
                    Cristian Văduva directs capital allocation, ultra-prime real estate acquisitions, and discreet executive advisory along the Monaco · Bucharest · Dubai · Zurich axis.
                  </p>
                  <p className="text-sm sm:text-base text-[#8A95A5] leading-relaxed">
                    Operating strictly as an independent fiduciary counsel, his practice synthesizes quantitative econometric modeling, rigorous contractual law, and institutional asset security architecture. By rejecting commercial sales commissions in favor of sole-client retainers, every advisory mandate achieves uncompromised fiduciary alignment.
                  </p>
                </div>

                {/* Key Fiduciary Rail */}
                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs">
                  <div className="space-y-1">
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[9px] font-semibold">
                      OPERATIONAL AXIS
                    </span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm block">
                      Bucharest · Monaco · Dubai
                    </span>
                    <span className="text-[10px] text-[#8A95A5] block">European & Gulf Corridors</span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[#A97F60] block uppercase tracking-widest text-[9px] font-semibold">
                      PRACTICE ALIGNMENT
                    </span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm block">
                      Single Family Offices
                    </span>
                    <span className="text-[10px] text-[#8A95A5] block">Retained Principals Only</span>
                  </div>

                  <div className="space-y-1 col-span-2 sm:col-span-1">
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[9px] font-semibold">
                      VERIFIED CATALOGUE
                    </span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm block">
                      424 Audited Assets
                    </span>
                    <span className="text-[10px] text-[#8A95A5] block">8,730 High-Res Photos</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-xl shadow-[#93C8FF]/15 flex items-center gap-2 group min-h-[48px]"
                  >
                    <span className="text-[#07090D] font-bold">INITIATE PRIVATE PROTOCOL</span>
                    <ArrowUpRight className="w-4 h-4 text-[#07090D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <a
                    href="#archive"
                    className="px-7 py-4 border border-white/[0.18] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] font-mono text-xs uppercase tracking-[0.2em] font-medium transition-colors bg-[#0C1119] min-h-[48px] flex items-center justify-center"
                  >
                    <span>EXPLORE VERIFIED ARCHIVE (18)</span>
                  </a>

                  <a
                    href="https://wa.me/436509536345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 border border-[#25D366]/40 hover:border-[#25D366] text-[#25D366] font-mono text-xs uppercase tracking-[0.2em] font-medium transition-colors bg-[#0C1119] min-h-[48px] flex items-center justify-center"
                  >
                    <span>WHATSAPP DIRECT</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Official Monograph Portrait (~42% on desktop) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/5] w-full border border-white/[0.14] bg-[#0C1119] p-3 overflow-hidden shadow-2xl group">
                  {/* Fine Corner Accents */}
                  <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#93C8FF] z-10 pointer-events-none" />
                  <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#93C8FF] z-10 pointer-events-none" />
                  <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#93C8FF] z-10 pointer-events-none" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#93C8FF] z-10 pointer-events-none" />

                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/personal/portraits/cristian-vaduva-desk-advisor.jpg"
                      alt="Cristian Văduva Official Monograph Portrait"
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-65 pointer-events-none" />

                    {/* Floating Monograph Caption Card */}
                    <div className="absolute bottom-3 left-3 right-3 p-4 bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1] space-y-1">
                      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-[#93C8FF]">
                        <span>OFFICIAL MONOGRAPH PORTRAIT</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />
                      </div>
                      <div className="font-serif text-lg text-[#F5F4EF] font-medium">
                        Cristian Văduva
                      </div>
                      <div className="flex items-center justify-between font-mono text-[10px] text-[#8A95A5]">
                        <span>Armani Exchange Blazer · Executive Desk</span>
                        <span className="text-[#A97F60]">cristianvaduva.com</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#8A95A5] px-1">
                  <span>CANONICAL 1ST-PARTY PROVENANCE</span>
                  <span className="text-[#93C8FF]">ISO/FIDUCIARY GRADE</span>
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
              description="Comprehensive fiduciary advisory requires concurrent mastery of corporate balance sheets, nuanced contractual covenants, and the physical environmental durability of real estate assets."
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
                    className="p-8 border border-white/[0.1] bg-[#121721] flex flex-col justify-between space-y-6 hover:border-[#93C8FF]/60 transition-all duration-300 relative group shadow-lg"
                  >
                    {/* Corner Accent */}
                    <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#93C8FF]/50 group-hover:border-[#93C8FF]" />

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
                  <div className="w-7 h-7 rounded border border-[#A97F60]/40 bg-[#A97F60]/10 flex items-center justify-center text-[#A97F60]">
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
                    className="p-8 border border-white/[0.1] bg-[#121721] space-y-5 hover:border-[#A97F60]/60 transition-all duration-300 relative group shadow-lg"
                  >
                    <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#A97F60]/50 group-hover:border-[#A97F60]" />

                    <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#A97F60] font-semibold">
                        MASTER 0{idx + 1}
                      </span>
                      <span className="px-2 py-0.5 bg-[#A97F60]/10 border border-[#A97F60]/30 font-mono text-[9px] uppercase text-[#C49A78] font-semibold">
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
                    <div className="w-7 h-7 rounded border border-[#93C8FF]/40 bg-[#93C8FF]/10 flex items-center justify-center text-[#93C8FF]">
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
                      className="p-6 border border-white/[0.08] bg-[#121721] space-y-2.5 hover:border-white/[0.2] transition-colors"
                    >
                      <div className="flex items-center justify-between font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-base text-[#F5F4EF] font-medium">{res.location}</span>
                          <span className="text-[#8A95A5]">·</span>
                          <span className="text-[#A97F60]">{res.country}</span>
                        </div>
                        <span className="px-2.5 py-0.5 bg-[#93C8FF]/10 text-[#93C8FF] border border-[#93C8FF]/20 text-[10px] uppercase font-semibold">
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
                  <div className="w-7 h-7 rounded border border-[#A97F60]/40 bg-[#A97F60]/10 flex items-center justify-center text-[#A97F60]">
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

                <div className="p-8 border border-[#A97F60]/30 bg-[#121721] space-y-6 relative shadow-xl">
                  <div className="space-y-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#A97F60] font-semibold block">
                      FIDUCIARY ASSET DEFENSE PROTOCOL
                    </span>
                    <p className="font-serif text-xl text-[#F5F4EF] leading-snug">
                      Integrated Wealth Shielding & High-Value Asset Indemnification
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] leading-relaxed font-light">
                      A dedicated institutional collaboration with Generali Romania enables our advisory practice to architect comprehensive property, casualty, and executive liability coverage directly into sovereign real estate acquisitions and family office asset structures.
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
                      className="w-full py-3 border border-[#A97F60]/50 hover:border-[#A97F60] bg-[#07090D] text-[#A97F60] hover:text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2"
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
        {/* 03 // 2026 BUCHAREST RESIDENTIAL MARKET PARADOX           */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-20 border-b border-white/[0.08]">
          <SectionHeader
            eyebrow="03 // MARKET SURVEILLANCE & EMPIRICAL ANALYSIS"
            badge="REPORT AUG 2026"
            title="The 2026 Bucharest Real Estate Market Paradox"
            description="Empirical market intelligence published on cristianvaduva.com: Resale housing in Bucharest commands a 26% price premium over new residential developments."
          />

          {/* Master Comparative Dossier Grid */}
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Metric Box 1: Resale (€2,653/sqm) */}
            <div className="lg:col-span-6 p-8 sm:p-10 border border-[#93C8FF]/40 bg-[#0C1119] space-y-6 relative shadow-2xl">
              <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#93C8FF]" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#93C8FF]" />

              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#93C8FF]" />
                  <span className="text-[#93C8FF] uppercase tracking-[0.2em] font-semibold">
                    ESTABLISHED / RESALE HOUSING
                  </span>
                </div>
                <span className="px-2.5 py-0.5 bg-[#93C8FF]/10 text-[#93C8FF] border border-[#93C8FF]/30 text-[10px] font-semibold">
                  +26.4% PREMIUM SPREAD
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl sm:text-6xl text-[#F5F4EF] font-normal">
                    €2,653
                  </span>
                  <span className="text-base font-mono text-[#8A95A5]">/ sqm average</span>
                </div>
                <p className="font-sans text-sm text-[#B8C2CF] leading-relaxed font-light">
                  Average transaction price in Bucharest prime established residential zones (Herăstrău, Dorobanți, Floreasca, Primăverii). Premium driven by unrepeatable central land scarcity, established municipal utility connections, and historical architectural provenance.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#B8C2CF]">
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#8A95A5]">PRIMARY ZONES</span>
                  <span className="text-[#F5F4EF]">Herăstrău · Dorobanți · Floreasca · Primăverii</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#8A95A5]">LAND SCARCITY</span>
                  <span className="text-[#93C8FF]">Near 100% Core Built-Out Density</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8A95A5]">LIQUIDITY RATING</span>
                  <span className="text-[#93C8FF] font-semibold">Immediate Sovereign Exit Liquidity</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#93C8FF] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Highest liquidity & sovereign wealth preservation resilience</span>
              </div>
            </div>

            {/* Metric Box 2: New Build (€2,099/sqm) */}
            <div className="lg:col-span-6 p-8 sm:p-10 border border-white/[0.12] bg-[#0C1119] space-y-6 relative shadow-2xl">
              <span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#A97F60]" />
              <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#A97F60]" />

              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A97F60]" />
                  <span className="text-[#A97F60] uppercase tracking-[0.2em] font-semibold">
                    NEW RESIDENTIAL CONSTRUCTIONS
                  </span>
                </div>
                <span className="px-2.5 py-0.5 bg-white/[0.05] text-[#8A95A5] border border-white/[0.1] text-[10px]">
                  PERIPHERAL CORRIDORS
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl sm:text-6xl text-[#F5F4EF] font-normal">
                    €2,099
                  </span>
                  <span className="text-base font-mono text-[#8A95A5]">/ sqm average</span>
                </div>
                <p className="font-sans text-sm text-[#B8C2CF] leading-relaxed font-light">
                  Average asking price across newly permitted developments. The inverted price differential highlights urban sprawl risk in peripheral sectors, permitting blockades in historical centers, and the imperative for structural title due diligence before off-plan commitments.
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.06] font-mono text-xs text-[#B8C2CF]">
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#8A95A5]">DEVELOPMENT RISK</span>
                  <span className="text-[#A97F60]">PUZ Zoning Blockades & Permitting Lag</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/[0.04] pb-2">
                  <span className="text-[#8A95A5]">INFRASTRUCTURE</span>
                  <span className="text-[#8A95A5]">Utility & Transit Connection Exposure</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#8A95A5]">RECOMMENDATION</span>
                  <span className="text-[#F5F4EF]">Strict Cadastral & Escrow Underwriting</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-[#A97F60] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Forensic evaluation required: infrastructure, zoning, and delivery timelines</span>
              </div>
            </div>
          </div>

          {/* Analytical Takeaway Callout */}
          <div className="p-8 sm:p-10 border border-white/[0.1] bg-[#121721] flex flex-col md:flex-row items-baseline justify-between gap-6 font-mono text-xs">
            <div className="space-y-1.5 max-w-3xl">
              <span className="text-[#93C8FF] uppercase tracking-[0.24em] text-[10px] font-semibold block">
                FIDUCIARY INVESTMENT TAKEAWAY // BUCHAREST RESIDENTIAL STRATEGY
              </span>
              <p className="font-sans text-sm sm:text-base text-[#F5F4EF] font-light leading-relaxed">
                Rather than blindly acquiring off-plan units with speculative handover dates, institutional principals are advised to allocate toward rare central core resales or strictly audited masterplans with completed infrastructure delivered.
              </p>
            </div>
            <Link
              href="/real-estate/properties"
              className="shrink-0 px-6 py-3.5 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] uppercase tracking-[0.18em] font-bold transition-all shadow-lg flex items-center gap-2 min-h-[44px]"
            >
              <span className="text-[#07090D] font-bold">AUDIT PROPERTIES</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#07090D]" />
            </Link>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // FIDUCIARY PHILOSOPHY & DOCTRINE                     */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-36 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-20 border-b border-white/[0.08]">
          <SectionHeader
            eyebrow="04 // PROFESSIONAL PHILOSOPHY & ETHICS"
            badge="GOVERNANCE STANDARDS"
            title="The Cristian Văduva Fiduciary Doctrine"
            description="In an industry plagued by superficial brokerage and concealed transaction fees, this practice is grounded upon four uncompromising principles of professional conduct."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fiduciaryPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 sm:p-10 border border-white/[0.09] bg-[#0C1119] space-y-5 hover:border-[#93C8FF]/50 transition-all duration-300 relative group shadow-xl"
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
                <span>05 // THE CRISTIAN VĂDUVA ARCHIVE</span>
                <span className="text-white/20">|</span>
                <span className="text-[#A97F60]">AUTHENTIC FIRST-PARTY ASSETS</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] leading-tight">
                Photographic Monograph & Architectural Studies
              </h2>
              <p className="font-sans text-base sm:text-lg text-[#B8C2CF] max-w-3xl font-light leading-relaxed">
                Explore the verified 18-monograph collection, comprising 13 executive portraits, advisory sessions, and on-site walkthroughs of Cristian Văduva sourced from cristianvaduva.com, alongside 5 curated architectural studies of landmark residential complexes and Danube nautical living photographed by Adrian Bîrgăuan.
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
              title="Phases of Executive & Fiduciary Consolidation"
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
          description="Every acquisition, capital structuring, or asset preservation mandate is evaluated personally by Cristian Văduva. Initial consultations operate under strict professional secrecy and pre-execution non-disclosure covenants."
          primaryActionText="INITIATE PRIVATE PROTOCOL"
          primaryActionHref="/contact"
          secondaryActionText="WHATSAPP DESK (+43 650 953 6345)"
          secondaryActionHref="https://wa.me/436509536345"
          disclaimer="Representation mandates are strictly limited in volume to ensure undivided principal attention and complete insulation from conflicts of interest."
        />
      </main>

      <Footer />
    </div>
  );
}
