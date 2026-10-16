import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { ArrowUpRight, Scale, TrendingUp, ShieldCheck, Compass, CheckCircle2, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About & Mandate — Cristian Văduva",
  description: "Executive advisor, investor, and strategist directing ultra-prime real estate acquisitions, capital structuring, and private advisory across Europe.",
};

const educationData = [
  {
    tier: "ACADEMIC TRINITY",
    title: "Three Bachelor's Degrees",
    field: "Economics · Ecology · Law",
    location: "Romania & European Union",
    description: "Multidisciplinary academic grounding combining quantitative economic modeling, ecological risk systems, and rigorous contract jurisprudence.",
    icon: Scale,
  },
  {
    tier: "POST-GRADUATE MASTERY",
    title: "Master of Science",
    field: "Financial Management & Environmental Risk",
    location: "Madrid & Amiens",
    description: "Advanced post-graduate studies focusing on corporate financial strategy, cross-border asset evaluation, and environmental risk assessment.",
    icon: TrendingUp,
  },
  {
    tier: "EXECUTIVE SPECIALIZATION",
    title: "Executive Master's",
    field: "Private Security & Asset Surveillance",
    location: "Malta & European Union",
    description: "Specialized training in data governance, confidential physical asset surveillance, and institutional compliance for family offices.",
    icon: ShieldCheck,
  },
];

const trajectorySteps = [
  { stage: "01", title: "CAPITAL MARKETS & LIQUIDITY", desc: "Quantitative analysis, trading infrastructure, macro liquidity, and structural risk management across European financial markets." },
  { stage: "02", title: "PRINCIPAL NEGOTIATION & CONTRACTS", desc: "High-stakes dealmaking, cross-border contractual sovereignty, and structured corporate transaction execution." },
  { stage: "03", title: "ULTRA-PRIME PROPERTY ORIGINATION", desc: "Confidential acquisition representation, architectural valuation, and off-market trophy property origination in Monaco and Bucharest." },
  { stage: "04", title: "ASSET SURVEILLANCE & DEFENSE", desc: "Downside containment, physical and digital estate defense, and generational wealth preservation architecture." },
  { stage: "05", title: "INDEPENDENT EXECUTIVE PRACTICE", desc: "Confidential advisory for European family offices and UHNW principals across Monaco, Bucharest, Zurich, and Dubai." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* ======================================================== */}
        {/* 01 // EDITORIAL MONOGRAPH HERO                           */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid">
          {/* Subtle Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 relative z-10">
            <div className="flex items-center justify-between border-b border-white/[0.1] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>01 // MANDATE & BIOGRAPHY</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">CRISTIAN VĂDUVA</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[#8A95A5]">
                <MapPin className="w-3.5 h-3.5 text-[#93C8FF]" />
                <span>BUCHAREST · MONACO · DUBAI</span>
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#A97F60] block font-semibold">
                    INDEPENDENT STRATEGIC ADVISOR & INVESTOR
                  </span>
                  <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5F4EF] leading-[1.02] tracking-tight">
                    Independent Advisory.<br />
                    <span className="text-[#A97F60] italic font-normal">Strategic Capital.</span><br />
                    Generational Defense.
                  </h1>
                </div>

                <p className="font-sans text-base sm:text-lg text-[#B8C2CF] font-light max-w-2xl leading-relaxed">
                  Cristian Văduva directs capital allocation, ultra-prime property acquisitions, and confidential executive advisory across Monaco, Bucharest, Zurich, and core European jurisdictions. Operating strictly as an independent fiduciary, his practice bridges forensic financial analysis, contract law, and physical security architecture.
                </p>

                <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono text-xs text-[#B8C2CF]">
                  <div>
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[10px]">OPERATING LOCATIONS</span>
                    <span className="text-[#F5F4EF] font-sans font-medium">Bucharest · Monaco · Dubai</span>
                  </div>
                  <div>
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[10px]">PRACTICE FOCUS</span>
                    <span className="text-[#F5F4EF] font-sans font-medium">Ultra-Prime Real Estate & Capital Defense</span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-[#93C8FF] block uppercase tracking-widest text-[10px]">FIDUCIARY STANDARD</span>
                    <span className="text-[#F5F4EF] font-sans font-medium">Swiss/EU Compliant Exclusivity</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="px-7 py-3.5 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center gap-2 shadow-xl"
                  >
                    <span>OPEN PRIVATE INTAKE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="https://wa.me/436509536345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 border border-white/[0.16] hover:border-[#93C8FF] text-[#D8D0C2] font-mono text-xs uppercase tracking-[0.2em] transition-colors"
                  >
                    WHATSAPP DIRECT
                  </a>
                </div>
              </div>

              {/* Portrait Monograph */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full border border-white/[0.14] bg-[#0C1119] p-2.5 overflow-hidden shadow-2xl">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/personal/portraits/cristian-headshot.jpg"
                      alt="Cristian Văduva Official Monograph Portrait"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-65" />
                  </div>
                </div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#8A95A5] pt-3 px-1">
                  <span>EXECUTIVE MONOGRAPH PORTRAIT</span>
                  <span className="text-[#93C8FF]">VERIFIED DOSSIER</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // MULTIDISCIPLINARY ACADEMIC SYNTHESIS                */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] bg-[#0C1119]">
          <div className="site-container space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
                  <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                  <span>02 // ACADEMIC FOUNDATION</span>
                  <span className="text-white/20">/</span>
                  <span className="text-[#B8C2CF]">RIGOROUS DEGREES</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F4EF] tracking-tight">
                  Multidisciplinary Academic Architecture
                </h2>
              </div>
              <div className="font-mono text-xs text-[#8A95A5]">
                LAW · ECONOMICS · ECOLOGY · PRIVATE DEFENSE
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {educationData.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.field}
                    className="p-8 border border-white/[0.1] bg-[#1B2028]/70 backdrop-blur-md space-y-5 hover:border-[#93C8FF]/60 transition-all duration-300 flex flex-col justify-between relative group"
                  >
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#93C8FF]/40 group-hover:border-[#93C8FF]" />
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF] font-semibold">
                          {item.tier}
                        </span>
                        <IconComponent className="w-4 h-4 text-[#93C8FF]" />
                      </div>

                      <div className="space-y-1">
                        <span className="font-mono text-xs text-[#8A95A5] block">
                          {item.location}
                        </span>
                        <h3 className="font-serif text-2xl text-[#F5F4EF]">
                          {item.title}
                        </h3>
                        <div className="text-xs text-[#A97F60] font-mono">
                          {item.field}
                        </div>
                      </div>

                      <p className="font-sans text-xs text-[#B8C2CF] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 03 // CAREER EVOLUTION TRAJECTORY                        */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] bg-[#07090D]">
          <div className="site-container space-y-12">
            <div className="space-y-3 border-b border-white/[0.08] pb-6">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>03 // PROFESSIONAL TRAJECTORY</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">CHRONOLOGY</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F4EF] tracking-tight">
                Evolution of Executive Practice
              </h2>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {trajectorySteps.map((step) => (
                <div
                  key={step.stage}
                  className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-[#1B2028]/40 transition-colors px-2"
                >
                  <div className="md:col-span-4 flex items-baseline gap-4">
                    <span className="font-mono text-sm text-[#93C8FF] font-semibold">{step.stage}</span>
                    <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#F5F4EF] font-semibold">
                      {step.title}
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // CALL TO ENGAGEMENT                                 */}
        {/* ======================================================== */}
        <section className="site-chapter bg-[#0C1119] relative overflow-hidden">
          <div className="site-container">
            <div className="p-10 sm:p-14 border border-white/[0.14] bg-[#1B2028]/80 backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#93C8FF]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#93C8FF]" />

              <div className="space-y-3 max-w-xl">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF]">
                  PRIVATE MANDATE INTAKE
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                  Consultation on High-Conviction Transactions
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                  Engage Cristian Văduva directly for confidential acquisition representation, asset surveillance, or board strategy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 text-center shadow-xl"
                >
                  OPEN INTAKE DESK
                </Link>
                <a
                  href="https://wa.me/436509536345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 border border-white/[0.14] hover:border-[#93C8FF] text-[#D8D0C2] font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 text-center"
                >
                  WHATSAPP DIRECT
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
