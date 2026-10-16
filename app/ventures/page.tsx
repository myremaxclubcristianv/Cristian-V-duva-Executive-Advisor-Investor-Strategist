import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, ShieldCheck, Compass, CheckCircle2, Lock, Scale, Building2 } from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { SectionHeader, EditorialText, ServiceSection, CTASection, InsightPanel } from "@/components/editorial";
import { ServiceItem } from "@/components/editorial/ServiceSection";

export const metadata: Metadata = {
  title: "Ventures, Co-Investments & Strategic Mandates — Cristian Văduva",
  description:
    "Asymmetrical capital deployment, private syndications in elite real estate assets, and operational technology vehicles directed by Cristian Văduva.",
};

const ventureServices: ServiceItem[] = [
  {
    number: "01",
    category: "DIRECT EQUITY & SYNDICATION",
    title: "Capital Syndication & Co-Investment in Ultra-Prime Residential",
    description:
      "Structuring Special Purpose Vehicles (SPVs) for large-scale prime residential acquisitions and developments in North Bucharest, Monaco, and select European trophy enclaves.",
    deliverables: [
      "Exhaustive technical, cadastral, and forensic financial audit (Full Due Diligence)",
      "Advanced financial modeling: risk-weighted IRR simulations, stress-tested debt structures, and multiple exit vectors",
      "Lender negotiations and institutional mezzanine debt optimization",
      "Direct fiduciary co-investment aligning GP and LP balance sheet interests",
    ],
    linkHref: "/contact",
    linkText: "REQUEST SYNDICATION DOSSIER",
    external: false,
  },
  {
    number: "02",
    category: "PROPTECH & OPERATING INFRASTRUCTURE",
    title: "PropTech Development & Operational Scaling",
    description:
      "Proprietary software and digital distribution platforms (HomeFind, AiX OS™, AiXLuxury) engineered to supply real-time transactional intelligence and vetted acquisition demand.",
    deliverables: [
      "Predictive artificial intelligence identifying distressed and off-market opportunities prior to public release",
      "Reverse Marketplace: direct matching algorithms against confirmed family office capital allocations",
      "Proprietary transactional workflow infrastructure accessible to co-investment partners",
      "Operational margin enhancement through programmatic tenant screening and automated lease underwriting",
    ],
    linkHref: "/ecosystem",
    linkText: "EXPLORE OPERATING INFRASTRUCTURE",
    external: false,
  },
  {
    number: "03",
    category: "ASSET ALLOCATION & OFF-MARKET TROPHY",
    title: "Origination & Exclusive Buyer Representation Mandates",
    description:
      "Confidential identification and acquisition of sovereign trophy assets (panoramic penthouses, historic mansions, waterfront domains) under strict fiduciary non-disclosure covenants.",
    deliverables: [
      "Unilateral fiduciary representation eliminating double-agency broker conflicts",
      "Direct principal-to-principal negotiations with legitimate titleholders",
      "Fiscal structuring, corporate asset holding defense, and institutional insurance wrapping",
      "Complete buyer anonymity preserved across entire transaction lifecycle",
    ],
    linkHref: "/real-estate/properties",
    linkText: "VIEW REFERENCE ASSETS",
    external: false,
  },
];

export default function VenturesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-32 sm:pt-40 lg:pt-48">
        {/* ======================================================== */}
        {/* 01 // ARCHITECTURAL VENTURES HERO                        */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid pb-28 sm:pb-36 lg:pb-44">
          {/* Subtle Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 sm:space-y-16 relative z-10">
            {/* Metadata Bar */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>01 // VENTURE CAPITAL & STRATEGIC ALLOCATIONS</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">ACTIVE PARTICIPATIONS</span>
              </div>
              <div className="hidden sm:block text-[#8A95A5]">
                PRIVATE CAPITAL DISCIPLINE
              </div>
            </div>

            {/* Dominant Title */}
            <div className="max-w-4xl space-y-8">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F4EF] leading-[1.02] tracking-tight">
                Asymmetric Capital &<br />
                <span className="text-[#A97F60] italic font-normal">Direct Ventures.</span>
              </h1>

              <EditorialText size="xl" maxWidth="prose" color="secondary" className="leading-relaxed">
                We deploy proprietary balance sheet capital and co-invest alongside family offices in prime residential real estate and operational technology platforms where Cristian Văduva&apos;s strategic oversight acts as an asymmetric value multiplier.
              </EditorialText>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-xl flex items-center gap-2"
                >
                  <span>PROPOSE CO-INVESTMENT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="px-7 py-4 border border-white/[0.16] hover:border-[#93C8FF] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] font-medium transition-colors"
                >
                  FIDUCIARY DOCTRINE
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // INVESTMENT PILLARS & FIDUCIARY STRUCTURE           */}
        {/* ======================================================== */}
        <ServiceSection
          eyebrow="02 // STRATEGIC OPERATING LINES"
          badge="ACTIVE MANDATES"
          title="Co-Investment Models & Capital Syndications"
          description="Every partnership is founded on rigorous fiduciary alignment: direct equity co-investment, complete balance sheet transparency, and uncompromising downside defense."
          services={ventureServices}
        />

        {/* ======================================================== */}
        {/* 03 // MACRO & VENTURE INTELLIGENCE PANELS                */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 bg-[#0C1119] border-t border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-16 sm:space-y-20">
            <SectionHeader
              eyebrow="03 // INTELLIGENCE & YIELD INDICATORS"
              badge="MARKET SURVEILLANCE"
              title="Fundamental Metrics & Asset Allocation Thesis"
              description="Direct quantitative telemetry from ANCPI cadastre registries, central bank benchmarks, and AiX OS™ neural monitoring to calibrate real inflation-adjusted returns against funding costs."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <InsightPanel
                category="NORTH BUCHAREST RESIDENTIAL"
                title="Bucharest North: Gross vs. Net Rental Yield"
                metric="6.8% – 8.2%"
                change="+0.6% YOY"
                trend="up"
                date="Current Quarter 2026"
                source="AiX OS™ Proprietary Index & ANCPI Cadastre"
                description="Prime rental yields across Pipera and Herăstrău remain among the highest across major European capitals, backed by robust multinational corporate housing demand and structural supply shortages."
                actionUrl="/real-estate/market"
              />

              <InsightPanel
                category="MONACO WATERFRONT TROPHY"
                title="Monaco & French Riviera: Trophy Capital Conservation"
                metric="€52,000 / sq.m"
                change="+3.4% Index"
                trend="up"
                date="Current Quarter 2026"
                source="AiXLuxury Monégasque Bureau & IMSEE"
                description="Market liquidity remains hyper-selective, driven by extreme structural scarcity along the Carré d'Or and Cap d'Ail waterfront corridor. Exceptional multi-generational capital preservation."
                actionUrl="https://www.aixluxury.com"
              />

              <InsightPanel
                category="PATRIMONIAL RISK DEFENSE"
                title="Fiscal Structuring & Casualty Risk Defense"
                metric="€400 / yr"
                change="100% Tax Deductible"
                trend="neutral"
                date="Active Fiscal Code Standards"
                source="Generali România & Ministry of Finance"
                description="Integrated structuring of corporate executive health coverage and D&O managerial liability shields family office balance sheets from legislative volatility and operational liabilities."
                actionUrl="https://insurance.cristianvaduva.com"
              />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // ASYMMETRICAL EQUITY ALLOCATION THESIS              */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto space-y-12">
          <div className="p-10 sm:p-16 border border-white/[0.12] bg-[#0C1119] grid lg:grid-cols-12 gap-10 items-center shadow-2xl relative">
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#93C8FF]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#93C8FF]" />

            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF] font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>PROJECT SELECTION CRITERIA</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EF] leading-tight">
                High-Conviction Allocations in Infrastructure and Real Property.
              </h2>

              <EditorialText size="base" maxWidth="prose" color="secondary" className="leading-relaxed">
                We do not deploy capital into speculative paper assets or volatile consumer tech. Every euro is anchored into irreplaceable land holdings, reinforced concrete structures with sustainable architectural finishes, or proprietary analytics platforms.
              </EditorialText>

              <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs pt-4 border-t border-white/[0.08]">
                <div className="p-5 bg-[#1B2028]/80 border border-white/[0.06] space-y-1.5">
                  <span className="text-[#93C8FF] block text-[10px] uppercase font-semibold">SYNDICATION ACCESS</span>
                  <span className="text-[#F5F4EF] font-sans">Reserved exclusively for verified co-investors and private family offices</span>
                </div>
                <div className="p-5 bg-[#1B2028]/80 border border-white/[0.06] space-y-1.5">
                  <span className="text-[#93C8FF] block text-[10px] uppercase font-semibold">INVESTMENT HORIZON</span>
                  <span className="text-[#F5F4EF] font-sans">Compounded equity appreciation · 5 to 10-year holding horizon</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 lg:pl-8 lg:border-l lg:border-white/[0.08]">
              <Link
                href="/contact"
                className="w-full py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.22em] font-bold text-center transition-all shadow-xl"
              >
                DISCUSS A SYNDICATION
              </Link>
              <div className="font-mono text-[10px] text-[#8A95A5] uppercase text-center tracking-wider">
                MANDATORY NON-DISCLOSURE COVENANT
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 05 // PRIVATE CTA                                        */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="PRIVATE CO-INVESTMENT PROTOCOL"
          title="Interested in a Joint Participation or Presenting a Strategic Opportunity?"
          description="Every land acquisition, residential development, or equity syndication opportunity is personally audited by Cristian Văduva across Bucharest, Monaco, and Dubai."
          primaryActionText="INITIATE PARTNERSHIP PROTOCOL"
          primaryActionHref="/contact"
          secondaryActionText="WHATSAPP DESK (+43 650 953 6345)"
          secondaryActionHref="https://wa.me/436509536345"
          disclaimer="All joint venture structures and capital syndications operate in strict compliance with European securities and capital market regulations."
        />
      </main>

      <Footer />
    </div>
  );
}
