import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Scale, TrendingUp, ShieldCheck, Compass, CheckCircle2, MapPin, Award, Lock } from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { SectionHeader, EditorialText, CTASection } from "@/components/editorial";

export const metadata: Metadata = {
  title: "About & Fiduciary Mandate — Cristian Văduva",
  description:
    "Executive strategic advisor, investor, and fiduciary negotiator along the Monaco · Dubai · Bucharest axis. Academic synthesis of economics, law, and environmental ecology.",
};

const educationData = [
  {
    tier: "ACADEMIC TRINITY",
    title: "Three Complete University Bachelor Degrees",
    field: "Economic Sciences · Law & Jurisprudence · Ecology & Environmental Protection",
    location: "Romania & European Union",
    description:
      "Multidisciplinary academic foundation uniting quantitative econometric modeling, rigorous contractual jurisprudence, and systemic environmental impact analysis for built assets.",
    icon: Scale,
  },
  {
    tier: "POST-GRADUATE MASTERY",
    title: "Master of Science (M.Sc.)",
    field: "Financial Management & Environmental Risk Auditing",
    location: "Madrid & Amiens",
    description:
      "Advanced postgraduate studies focused on corporate financial structures, cross-border asset valuation, and quantifying climate risk impact on long-term real estate valuations.",
    icon: TrendingUp,
  },
  {
    tier: "EXECUTIVE SPECIALIZATION",
    title: "Executive Master's",
    field: "Private Security & High-Value Asset Surveillance",
    location: "Malta & European Union",
    description:
      "High-level specialization in security governance, confidential physical asset custody, and institutional compliance frameworks for Ultra-High-Net-Worth (UHNW) families.",
    icon: ShieldCheck,
  },
];

const trajectorySteps = [
  {
    stage: "01",
    title: "CAPITAL MARKETS & QUANTITATIVE ANALYSIS",
    desc: "Quantitative analysis, order routing infrastructure, macroeconomic liquidity assessment, and structural risk management across European financial markets.",
  },
  {
    stage: "02",
    title: "PRINCIPAL NEGOTIATION & CONTRACTUAL JURISPRUDENCE",
    desc: "High-stakes strategic negotiation, cross-border contract sovereignty, and executing complex corporate real estate acquisitions without fiduciary compromise.",
  },
  {
    stage: "03",
    title: "ULTRA-PRIME REAL ESTATE ORIGINATION",
    desc: "Exclusive representation for discreet acquisitions, architectural due diligence, and confidential off-market sourcing of trophy estates across Monaco, the French Riviera, and Bucharest.",
  },
  {
    stage: "04",
    title: "PATRIMONIAL SURVEILLANCE & DOWNSIDE CONTAINMENT",
    desc: "Capital preservation protocols, physical and cyber asset defense, and structural wealth defense mechanisms across multi-generational horizons.",
  },
  {
    stage: "05",
    title: "INDEPENDENT EXECUTIVE ADVISORY",
    desc: "Discreet advisory counsel dedicated to a select circle of single family offices and sovereign principals along the Bucharest, Monaco, Zurich, and Dubai corridors.",
  },
];

const fiduciaryPillars = [
  {
    title: "Unilateral Exclusivity (Zero Dual Agency)",
    desc: "We represent strictly one side of any transaction — either the buyer or the seller. We categorically eliminate the systemic conflict of interest prevalent in conventional brokerage models that collect fees from both counterparties.",
  },
  {
    title: "Confidentiality Under Swiss-Standard Non-Disclosure",
    desc: "Every transaction nuance, holding entity structure, and beneficial ownership identity is shielded behind stringent fiduciary covenants and encrypted protocols.",
  },
  {
    title: "Forensic Cadastral & Legal Auditing Before Capital Commitment",
    desc: "No asset is approved for acquisition prior to an exhaustive forensic audit of title deeds, encumbrances, historical permitting compliance, and physical structural integrity.",
  },
  {
    title: "Generational Wealth Preservation Focus",
    desc: "We do not sell short-term speculative fantasies. Every curated asset must withstand adverse macroeconomic cycles and ensure uninterrupted balance sheet compounding across decades.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-32 sm:pt-40 lg:pt-48">
        {/* ======================================================== */}
        {/* 01 // EDITORIAL MONOGRAPH HERO                           */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid pb-28 sm:pb-36 lg:pb-44">
          {/* Subtle Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 sm:space-y-16 relative z-10">
            {/* Top Eyebrow */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>01 // PROFILE & FIDUCIARY MANDATE</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">CRISTIAN VĂDUVA</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[#8A95A5]">
                <MapPin className="w-3.5 h-3.5 text-[#93C8FF]" />
                <span>BUCHAREST · MONACO · DUBAI</span>
              </div>
            </div>

            {/* Monograph Grid */}
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#A97F60] block font-semibold">
                    EXECUTIVE STRATEGIC ADVISOR & INDEPENDENT INVESTOR
                  </span>
                  <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5F4EF] leading-[1.02] tracking-tight">
                    Independent Advisory.<br />
                    <span className="text-[#A97F60] italic font-normal">Strategic Capital.</span><br />
                    Generational Defense.
                  </h1>
                </div>

                <EditorialText size="lg" maxWidth="prose" color="secondary" className="leading-relaxed">
                  Cristian Văduva directs capital allocation, ultra-prime real estate acquisitions, and discreet executive advisory along the Monaco · Bucharest · Dubai · Zurich axis. Operating strictly as an independent fiduciary counsel, his practice synthesizes quantitative econometric modeling, rigorous contractual law, and institutional asset security architecture.
                </EditorialText>

                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-[#B8C2CF]">
                  <div>
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[10px] font-semibold">OPERATIONAL AXES</span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm">Bucharest · Monaco · Dubai</span>
                  </div>
                  <div>
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[10px] font-semibold">PRACTICE FOCUS</span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm">Trophy Assets & Downside Defense</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[10px] font-semibold">FIDUCIARY STANDARD</span>
                    <span className="text-[#F5F4EF] font-sans font-medium text-sm">Unilateral Exclusivity (Zero Conflict)</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-xl flex items-center gap-2"
                  >
                    <span>INITIATE PRIVATE PROTOCOL</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/436509536345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-4 border border-white/[0.16] hover:border-[#93C8FF] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                  >
                    WHATSAPP DIRECT
                  </a>
                </div>
              </div>

              {/* Official Monograph Portrait */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative aspect-[4/5] w-full border border-white/[0.14] bg-[#0C1119] p-3 overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/personal/portraits/cristian-vaduva-desk-advisor.jpg"
                      alt="Cristian Văduva Official Monograph Portrait"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-60" />
                  </div>
                </div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#8A95A5] px-1">
                  <span>OFFICIAL PORTRAIT · ADRIAN BÎRGĂUAN</span>
                  <span className="text-[#93C8FF]">VERIFIED SOURCE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // MULTIDISCIPLINARY ACADEMIC SYNTHESIS                */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 bg-[#0C1119] border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-20">
            <SectionHeader
              eyebrow="02 // MULTIDISCIPLINARY ACADEMIC FOUNDATION"
              badge="DEGREES & SPECIALIZATIONS"
              title="Academic Synthesis: Economics, Law & Ecology"
              description="Comprehensive fiduciary advisory requires concurrent mastery of corporate balance sheets, nuanced contractual covenants, and the physical and environmental durability of real assets."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {educationData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.field}
                    className="p-8 sm:p-10 border border-white/[0.1] bg-[#1B2028]/70 backdrop-blur-md space-y-6 hover:border-[#93C8FF]/60 transition-all duration-300 flex flex-col justify-between relative group"
                  >
                    <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#93C8FF]/40 group-hover:border-[#93C8FF]" />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF] font-semibold">
                          {item.tier}
                        </span>
                        <IconComponent className="w-4 h-4 text-[#93C8FF]" />
                      </div>

                      <div className="space-y-1.5">
                        <span className="font-mono text-xs text-[#8A95A5] block">
                          {item.location}
                        </span>
                        <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug">
                          {item.title}
                        </h3>
                        <div className="text-xs text-[#A97F60] font-mono font-medium">
                          {item.field}
                        </div>
                      </div>

                      <EditorialText size="sm" maxWidth="full" color="secondary" className="leading-relaxed">
                        {item.description}
                      </EditorialText>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 03 // FIDUCIARY PHILOSOPHY & PILLARS                      */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-16 sm:space-y-20">
          <SectionHeader
            eyebrow="03 // PROFESSIONAL PHILOSOPHY & ETHICS"
            badge="GOVERNANCE STANDARDS"
            title="The Cristian Văduva Fiduciary Doctrine"
            description="In an industry plagued by superficial brokerage and concealed transaction fees, this practice is grounded upon four uncompromising principles of professional conduct."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fiduciaryPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 border border-white/[0.08] bg-[#0C1119] space-y-4 hover:border-[#93C8FF]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl text-[#647082]">0{idx + 1}</span>
                  <div className="w-8 h-[1px] bg-[#93C8FF]/30" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF]">CARDINAL PRINCIPLE</span>
                </div>

                <h3 className="font-serif text-2xl text-[#F5F4EF] leading-snug">
                  {pillar.title}
                </h3>

                <EditorialText size="sm" maxWidth="prose" color="secondary" className="leading-relaxed">
                  {pillar.desc}
                </EditorialText>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // CAREER EVOLUTION TRAJECTORY                        */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 bg-[#0C1119] border-t border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-20">
            <SectionHeader
              eyebrow="04 // EVOLUTION & PRACTICE CHRONOLOGY"
              badge="PRACTICE TRAJECTORY"
              title="Phases of Executive & Fiduciary Consolidation"
              description="From capital market liquidity research and econometric underwriting to sovereign trophy asset negotiations and multi-generational family office defense."
            />

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {trajectorySteps.map((step) => (
                <div
                  key={step.stage}
                  className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-[#1B2028]/40 transition-colors px-4 sm:px-6"
                >
                  <div className="md:col-span-4 flex items-baseline gap-4">
                    <span className="font-mono text-base text-[#93C8FF] font-semibold">{step.stage}</span>
                    <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#F5F4EF] font-semibold">
                      {step.title}
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <EditorialText size="base" maxWidth="prose" color="secondary" className="leading-relaxed">
                      {step.desc}
                    </EditorialText>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 05 // PRIVATE MANDATE INTAKE                             */}
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
