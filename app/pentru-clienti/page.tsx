import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  ArrowRight,
  Globe,
} from "lucide-react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import ChapterDivider from "@/components/ui/ChapterDivider";
import ArchitecturalFeaturePanel from "@/components/ui/ArchitecturalFeaturePanel";
import ComparisonMatrix, { ComparisonRow } from "@/components/ui/ComparisonMatrix";
import NumberedProcessTimeline, { TimelineStep } from "@/components/ui/NumberedProcessTimeline";
import ClosingFrame from "@/components/ui/ClosingFrame";

export const metadata: Metadata = {
  title: "Private Client Real Estate Advisory & Representation | Executive",
  description:
    "Strategic advisory, dedicated single-party representation, and technical due diligence for prime residential acquisitions and dispositions in Bucharest and internationally.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/pentru-clienti",
  },
  openGraph: {
    title: "Private Client Real Estate Advisory & Representation | Cristian Văduva",
    description:
      "Independent strategic guidance for high-value acquisition and disposition decisions in Bucharest and global markets.",
    url: "https://executive.cristianvaduva.com/pentru-clienti",
    type: "website",
    locale: "en_US",
  },
};

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    dimension: "Interest Alignment",
    traditional: "Standard dual transactional brokerage (often ambiguous representation between both counterparties).",
    advisory: "Written unilateral representation mandate, exclusively advocating your strategic and financial interests.",
    note: "Zero conflict of interest",
  },
  {
    dimension: "Market Filtering",
    traditional: "Promotion restricted to internal stock listings, without comprehensive whole-of-market exploration.",
    advisory: "Whole-of-market search including vetted off-market corridors and objective analysis of asset drawbacks.",
    note: "Objective screening",
  },
  {
    dimension: "Due Diligence & Verification",
    traditional: "Superficial; frequently reliant on developer brochures or vendor assurances without verification.",
    advisory: "Formal due diligence coordination: land book registry, cadastral surveys, certified structural engineers, bar attorneys.",
    note: "Structural risk mitigated",
  },
  {
    dimension: "Price & Terms Negotiation",
    traditional: "Lack of objective alignment; limited analytical focus on optimizing actual net acquisition cost.",
    advisory: "Rigorous analytical negotiation based on verified closed transactions (like-for-like), not asking prices.",
    note: "Quantifiable value protection",
  },
  {
    dimension: "Confidentiality & Data Integrity",
    traditional: "Client information frequently circulated informally across intermediary networks.",
    advisory: "Bilateral non-disclosure agreement (NDA) executed prior to sharing any sensitive information.",
    note: "Strict privacy safeguards",
  },
];

const ADVISORY_STEPS: TimelineStep[] = [
  {
    number: "01",
    stageName: "Confidential Initial Consultation",
    duration: "20 Minutes",
    summary: "A structured preliminary dialogue to define your portfolio objectives and assess engagement compatibility.",
    details: "We clarify the target asset profile (location, budget parameters, architectural specifications, delivery timelines) or the exit and positioning strategy for an existing property.",
    deliverables: ["Clarified investment profile", "Identification of bespoke criteria", "Preliminary non-disclosure agreement"],
    accentBadge: "DIAGNOSTIC",
  },
  {
    number: "02",
    stageName: "Mandate Execution & Mutual NDA",
    duration: "1–2 Days",
    summary: "Formalization of the legal representation framework and transparent written agreement on compensation terms.",
    details: "We define transparently whether the engagement operates on a retainer, success fee, or hybrid structure based on mandate scope and complexity.",
    deliverables: ["Bilateral advisory mandate", "Mutual Non-Disclosure Agreement (NDA)", "Secure principal communication protocol"],
    accentBadge: "LEGAL FRAMEWORK",
  },
  {
    number: "03",
    stageName: "Whole-Market Scan & Technical Screening",
    duration: "2–4 Weeks",
    summary: "Comprehensive assessment of the relevant market, including private off-market corridors and the global Chestertons network.",
    details: "We filter out assets with encumbrances, planning irregularities, or structural vulnerabilities, presenting only thoroughly validated options.",
    deliverables: ["Like-for-like comparative dossier", "Asking price vs. estimated transaction value analysis", "Private curated on-site inspections"],
    accentBadge: "CURATION",
  },
  {
    number: "04",
    stageName: "Assisted Negotiation & Notarial Closing",
    duration: "Execution Phase",
    summary: "Continuous advisory throughout contract (SPA) structuring and coordination of solemn notarial execution.",
    details: "We work directly alongside your legal counsel and notaries or connect you with premier independent practices for formal title audits.",
    deliverables: ["Pre-closing contract audit", "Principal attendance at notarial authentication", "Formal asset handover protocol"],
    accentBadge: "EXECUTION",
  },
];

export default function PentruClientiPage() {
  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-[#93C8FF]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-[#A97F60]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="site-container relative z-10 space-y-24 sm:space-y-36">
          {/* HERO SECTION: Asymmetric Composition with Authentic Photography */}
          <section className="border-b border-white/[0.08] pb-16 lg:pb-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Editorial Headline & Narrative */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1 bg-white/[0.03] border border-white/[0.08] font-mono text-[11px] tracking-[0.25em] text-[#A97F60] uppercase rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#93C8FF]" />
                  <span>PRIVATE ADVISORY · EXCLUSIVE REPRESENTATION</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-[1.08]">
                  Advisory & Strategic Guidance for High-Value Real Estate Decisions.
                </h1>

                <p className="font-sans text-base sm:text-lg text-[#B8C2CF] leading-relaxed font-light max-w-2xl">
                  Executive provides dedicated private advisory to buyers and owners of prime residential assets. We operate strictly under bilateral written mandates, eliminating conflicts of interest and delivering rigorous, data-driven analysis.
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
                    href="/cum-lucrez"
                    className="btn-apple-pill-secondary inline-flex items-center gap-2 min-h-[48px]"
                  >
                    <span>ADVISORY METHODOLOGY</span>
                  </Link>
                </div>

                {/* Key Quick Indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/[0.08] font-mono text-[11px] text-[#8A95A5]">
                  <div>
                    <span className="text-[#93C8FF] block font-semibold">100% DEDICATED</span>
                    <span>Unilateral Representation</span>
                  </div>
                  <div>
                    <span className="text-[#93C8FF] block font-semibold">MUTUAL NDA</span>
                    <span>Formal Confidentiality</span>
                  </div>
                  <div>
                    <span className="text-[#93C8FF] block font-semibold">GLOBAL REACH</span>
                    <span>Chestertons Associate Desk</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Authentic Office Consultation Photo */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] bg-black border border-white/[0.12] overflow-hidden group shadow-2xl">
                  <Image
                    src="/media/cristian-vaduva/personal/cristian-vaduva-office-armchair-consultation.png"
                    alt="Cristian Văduva — Private client real estate consultation"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#07090D]/90 backdrop-blur-md border border-white/10 font-mono text-xs text-[#E1E4EA] flex items-center justify-between">
                    <div>
                      <span className="text-[#A97F60] uppercase block text-[9px]">CONSULTATION CADRAN</span>
                      <span className="font-sans font-medium text-xs">Cristian Văduva · Bucharest Office</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-[#93C8FF]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CHAPTER 01 // THREE STRATEGIC CAPABILITIES */}
          <section className="space-y-12">
            <ChapterDivider
              number="01"
              category="CAPABILITIES & PRACTICAL ADVISORY"
              title="Three Strategic Advisory Tracks for Prime Real Estate"
              description="A structured methodology designed to protect principal capital and time, from initial search filtering through formal completion."
            />

            <div className="space-y-10">
              {/* Feature Panel 1: Buyer Advisory */}
              <ArchitecturalFeaturePanel
                tag="TRACK 01 // BUYER ADVISORY MANDATE"
                title="Dedicated Search & Exclusive Buyer Representation"
                description="We define your precise acquisition profile, audit the entire public market, and unlock private off-market opportunities. We evaluate hidden liabilities and negotiate strictly in your financial and wealth protection interest."
                imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-residence-curved-glass-terrace.png"
                imageAlt="Private prime residence with curved terrace"
                imageCaption="Reference property · Prime residential enclave"
                imagePosition="right"
                bullets={[
                  {
                    title: "Objective whole-market filtering",
                    desc: "No developer bias; we recommend strictly assets that withstand rigorous valuation scrutiny.",
                  },
                  {
                    title: "Like-for-like comparative analysis",
                    desc: "Benchmarking asking prices against verified closed transactions in the same architectural tier.",
                  },
                  {
                    title: "Assisted price & terms negotiation",
                    desc: "Protecting capital through structured milestone payments, warranties, and contractual safeguards.",
                  },
                ]}
                ctaText="REQUEST BUYER MANDATE"
                ctaHref="/programare"
                stats={[
                  { value: "100%", label: "Unilateral Alignment" },
                  { value: "0", label: "Conflicts of Interest" },
                  { value: "24h", label: "Inquiry Confirmation" },
                ]}
              />

              {/* Feature Panel 2: Seller Advisory (Reversed) */}
              <ArchitecturalFeaturePanel
                tag="TRACK 02 // SELLER ADVISORY & POSITIONING"
                title="Technical Dossier Preparation & Discreet Qualified Buyer Access"
                description="For owners of exceptional residences, we assemble a technically and legally flawless presentation dossier, establish data-backed pricing, and manage discreet access to verified, pre-qualified buyers."
                imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-development-skytower-inspection.png"
                imageAlt="Technical inspection and property positioning"
                imageCaption="Compliance audit and assisted viewing"
                imagePosition="left"
                bullets={[
                  {
                    title: "Pre-sale land book & cadastral audit",
                    desc: "Resolving title discrepancies and documentation gaps prior to any buyer inspection.",
                  },
                  {
                    title: "Financial pre-qualification of buyers",
                    desc: "Eliminating speculative viewings; introducing only buyers with verified financial capability.",
                  },
                  {
                    title: "Discreet presentation without mass-market listings",
                    desc: "Protecting property privacy and owner confidentiality through strict non-disclosure protocols.",
                  },
                ]}
                ctaText="DISCUSS PROPERTY POSITIONING"
                ctaHref="/programare"
                stats={[
                  { value: "Private", label: "Distribution Channel" },
                  { value: "1:1", label: "Viewing Attendance" },
                  { value: "Rigorous", label: "Technical Dossier" },
                ]}
              />

              {/* Feature Panel 3: Due Diligence Coordination */}
              <ArchitecturalFeaturePanel
                tag="TRACK 03 // DUE DILIGENCE COORDINATION"
                title="Multidisciplinary Audit: Title, Planning & Structural Integrity"
                description="We coordinate thorough title provenance, urban planning compliance, and structural engineering audits via certified independent practitioners (bar attorneys, public notaries, certified structural engineers, ANEVAR appraisers)."
                imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-blueprints-underwriting.jpg"
                imageAlt="Architectural blueprint and technical book analysis"
                imageCaption="Specialized technical verification"
                imagePosition="right"
                bullets={[
                  {
                    title: "Cadastral and title provenance verification",
                    desc: "Identifying encumbrances, mortgages, active litigation, or historical restitution claims.",
                  },
                  {
                    title: "Certified structural and MEP inspection",
                    desc: "Auditing construction quality, technical logbook records, and seismic resilience.",
                  },
                  {
                    title: "Closing support through notarial authentication",
                    desc: "Working with the notary office to guarantee legal title perfection and secure transfer.",
                  },
                ]}
                ctaText="DOWNLOAD BUYER'S DOSSIER"
                ctaHref="/ghid-cumparator"
                stats={[
                  { value: "7 Stages", label: "Verification Guide" },
                  { value: "MDLPA", label: "Certified Engineers" },
                  { value: "Bar", label: "Independent Counsel" },
                ]}
              />
            </div>
          </section>

          {/* CHAPTER 02 // STRUCTURAL COMPARISON: BROKERAGE VS. ADVISORY */}
          <section className="space-y-12">
            <ChapterDivider
              number="02"
              category="STRUCTURAL MODEL ANALYSIS"
              title="Why Unilateral Representation Protects Principal Interests"
              description="The fundamental distinctions between generalist volume brokerage and an executive single-party advisory practice."
            />

            <ComparisonMatrix
              title="Traditional Brokerage vs. Executive Advisory Practice"
              subtitle="A clear comparison between conventional transaction brokering and dedicated private client representation."
              traditionalHeader="TRADITIONAL BROKERAGE"
              advisoryHeader="EXECUTIVE PRACTICE (CRISTIAN VĂDUVA)"
              rows={COMPARISON_ROWS}
            />
          </section>

          {/* CHAPTER 03 // GEOGRAPHIC ENCLAVES & GLOBAL REACH */}
          <section className="space-y-12">
            <ChapterDivider
              number="03"
              category="GEOGRAPHIC REACH & SECTOR FOCUS"
              title="Prime Bucharest Enclaves & Global Corridors"
              description="We concentrate exclusively on prime residential segments where architectural quality, urban scarcity, and long-term capital preservation justify a bespoke advisory approach."
            />

            <div className="grid md:grid-cols-2 gap-8">
              {/* Cadran 1: Bucharest Prime */}
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center gap-2 font-mono text-xs text-[#93C8FF] uppercase tracking-[0.2em]">
                  <Building2 className="w-4 h-4" />
                  <span>BUCHAREST & NORTHERN RESIDENTIAL CORRIDOR</span>
                </div>

                <h3 className="font-serif text-2xl text-[#F5F4EF]">
                  Established Prime Residential Enclaves
                </h3>

                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  We continuously monitor prime capital micro-markets where architectural heritage and sustained high-net-worth demand preserve asset liquidity:
                </p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs text-[#E1E4EA] pt-2">
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Herăstrău & Șoseaua Nordului</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Primăverii & Aviatorilor</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Kiseleff & Dorobanți Capitale</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Floreasca & Lacul Tei</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Pipera Residential (Villas)</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Historic Downtown Estates</div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#8A95A5]">
                  <span>LIVE CATALOGUE AVAILABLE</span>
                  <Link href="/real-estate/properties" className="text-[#93C8FF] hover:underline flex items-center gap-1">
                    <span>VIEW 433 PROPERTIES</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Cadran 2: Chestertons Global Corridors */}
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-6">
                <div className="flex items-center gap-2 font-mono text-xs text-[#A97F60] uppercase tracking-[0.2em]">
                  <Globe className="w-4 h-4" />
                  <span>INTERNATIONAL CORRIDORS (CHESTERTONS NETWORK)</span>
                </div>

                <h3 className="font-serif text-2xl text-[#F5F4EF]">
                  Direct Access to Global Associate Portfolios
                </h3>

                <p className="font-sans text-sm text-[#8A95A5] leading-relaxed">
                  Through our professional affiliation with the Chestertons Global international network, we facilitate direct access for private clients to premier partner desks in major wealth centers:
                </p>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs text-[#E1E4EA] pt-2">
                  <div className="p-3 bg-black/40 border border-white/[0.05]">London (Prime Central London)</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">French Riviera & Cap d&apos;Ail</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Monaco (Local Partner Desks)</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Dubai & The Gulf Region</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Madrid & Marbella (Spain)</div>
                  <div className="p-3 bg-black/40 border border-white/[0.05]">Balearic Islands (Mallorca)</div>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#8A95A5]">
                  <span>FOUNDED IN LONDON 1805</span>
                  <Link href="/parteneri" className="text-[#93C8FF] hover:underline flex items-center gap-1">
                    <span>PARTNERSHIP DETAILS</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* CHAPTER 04 // 4-STAGE ADVISORY CYCLE */}
          <section className="space-y-12">
            <ChapterDivider
              number="04"
              category="WORKING METHODOLOGY"
              title="Stages of a Private Advisory Mandate"
              description="A professional engagement based on absolute transparency, documented milestones, and mutually agreed terms under a bilateral written agreement."
            />

            <NumberedProcessTimeline steps={ADVISORY_STEPS} />
          </section>

          {/* CLOSING FRAME */}
          <ClosingFrame
            category="COMMENCE PRIVATE MANDATE"
            title="Ready to discuss a prime acquisition or disposition?"
            description="Every mandate is personally directed by Cristian Văduva. We invite you to an introductory 20-minute confidential consultation to assess strategic fit."
            primaryCtaText="SCHEDULE 20-MINUTE CONSULTATION"
            primaryCtaHref="/programare"
            secondaryCtaText="VIEW ADVISORY METHODOLOGY"
            secondaryCtaHref="/cum-lucrez"
            imageSrc="/media/cristian-vaduva/personal/cristian-vaduva-office-armchair-consultation.png"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
