import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { getPropertyById, selectedProperties } from "@/lib/properties";
import {
  SectionHeader,
  EditorialText,
  PropertyFeature,
  ProjectFeature,
  SupportingPropertyCard,
  InsightPanel,
  CTASection,
} from "@/components/editorial";
import {
  ArrowUpRight,
  ShieldCheck,
  Scale,
  Compass,
  FileCheck,
  Building,
  KeyRound,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate & Market Hub — Cristian Văduva | HomeFind & AiXLuxury",
  description: "Bespoke advisory for ultra-prime property acquisitions, single-client fiduciary representation, forensic title audits, and residential developments across Bucharest, Monaco, and Dubai.",
};

export default function RealEstateHubPage() {
  const plevneiPenthouse = getPropertyById("prop-plevnei") || selectedProperties[0];
  const piperaVillas = getPropertyById("prop-pipera-villas");
  const royalMansion = getPropertyById("prop-royal-mansion");
  const nauticalHome = getPropertyById("prop-nautical-home");
  const scheiVilla = getPropertyById("prop-schei-brasov");
  const monacoVilla = getPropertyById("prop-monaco-coast");
  const dubaiBrabus = getPropertyById("prop-dubai-brabus");

  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-executive-header">
        {/* ======================================================== */}
        {/* 01 // EDITORIAL HERO: ACQUISITIONS & REPRESENTATION      */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-arch-grid relative overflow-hidden">
          {/* Architectural Framing Elements */}
          <div className="absolute top-10 left-6 sm:left-12 lg:left-20 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 sm:right-12 lg:right-20 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 relative z-10">
            <SectionHeader
              eyebrow="01 // REAL ESTATE & MARKET HUB"
              badge="EXCLUSIVE FIDUCIARY REPRESENTATION"
              title={
                <>
                  The Architecture of Prime Acquisitions &<br />
                  <span className="text-[#A97F60] italic font-normal">Sovereign Fiduciary Strategy.</span>
                </>
              }
              description="In high-stakes acquisitions, market access is merely a prerequisite. Irreversible transactional advantage is engineered at the intersection of cross-border contract law, forensic structural due diligence, and retained single-client loyalty."
            />

            {/* Strategic Pillars Grid */}
            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/[0.08]">
              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors shadow-xl">
                <div className="w-10 h-10 border border-[#93C8FF]/30 bg-[#93C8FF]/10 flex items-center justify-center text-[#93C8FF]">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-[#F5F4EF]">
                  Zero Dual-Agency Conflict
                </h3>
                <EditorialText size="sm" maxWidth="full" color="secondary" className="leading-relaxed">
                  Traditional brokerages are incentivized by gross transactional velocity and dual commissions. We operate exclusively as retained fiduciaries for one principal, stress-testing every contract clause and protecting capital.
                </EditorialText>
              </div>

              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors shadow-xl">
                <div className="w-10 h-10 border border-[#A97F60]/30 bg-[#A97F60]/10 flex items-center justify-center text-[#A97F60]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-[#F5F4EF]">
                  Off-Market Deal Origination
                </h3>
                <EditorialText size="sm" maxWidth="full" color="secondary" className="leading-relaxed">
                  Authentic trophy estates rarely touch open public portals. They are originated through private family office conduits in Bucharest, Monaco, and Dubai under strict bilateral non-disclosure covenants.
                </EditorialText>
              </div>

              <div className="p-8 sm:p-10 bg-[#0C1119] border border-white/[0.08] space-y-4 hover:border-[#93C8FF]/40 transition-colors shadow-xl">
                <div className="w-10 h-10 border border-[#93C8FF]/30 bg-[#93C8FF]/10 flex items-center justify-center text-[#93C8FF]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl text-[#F5F4EF]">
                  Forensic Structural & Title Audit
                </h3>
                <EditorialText size="sm" maxWidth="full" color="secondary" className="leading-relaxed">
                  Every acquisition is audited: from concrete structural integrity and environmental risks (geotechnical / subsidence) to corporate holding entity structuring and comprehensive asset defense underwriting.
                </EditorialText>
              </div>
            </div>

            {/* Quick Action Navigation */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/real-estate/properties"
                className="px-8 py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all shadow-xl flex items-center gap-2"
              >
                <span>EXPLORE CONFIRMED PORTFOLIO</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="/real-estate/market"
                className="px-7 py-4 border border-white/[0.16] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] font-mono text-xs uppercase tracking-[0.2em] transition-colors"
              >
                MARKET DATA TERMINAL
              </Link>

              <a
                href="https://homefind.cristianvaduva.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 border border-white/[0.1] hover:border-white/[0.3] text-[#B8C2CF] font-mono text-xs uppercase tracking-[0.2em] transition-colors flex items-center gap-1.5"
              >
                <span>HOMEFIND PORTAL ↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // SIGNATURE PROPERTY (PATTERN A): PLEVNEI PENTHOUSE  */}
        {/* ======================================================== */}
        {plevneiPenthouse && (
          <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#07090D]">
            <div className="max-w-7xl mx-auto space-y-16">
              <SectionHeader
                eyebrow="02 // CONFIRMED PROPERTY · PATTERN A SIGNATURE PRESENTATION"
                badge="SECTOR 1, BUCHAREST"
                title="Monumental Penthouse with 220 sqm Terrace"
                description="A rare top-floor residence in the central diplomatic belt of Bucharest, providing the spatial sovereignty of an urban sanctuary with 360-degree skyline views."
              />

              <PropertyFeature property={plevneiPenthouse} />
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* 03 // SUPPORTING OPPORTUNITIES (PATTERN B)               */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#0C1119]">
          <div className="max-w-7xl mx-auto space-y-16">
            <SectionHeader
              eyebrow="03 // SUPPORTING OPPORTUNITIES · PATTERN B"
              badge="CURATED PORTFOLIO"
              title="Verified Estates & Distinctive Residential Assets"
              description="Carefully selected properties featuring established specifications, verified architectural provenance, and confirmed legal parameters."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {royalMansion && <SupportingPropertyCard property={royalMansion} />}
              {scheiVilla && <SupportingPropertyCard property={scheiVilla} />}
              {nauticalHome && <SupportingPropertyCard property={nauticalHome} />}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // RESIDENTIAL MASTERPLAN: PIPERA ENCLAVE             */}
        {/* ======================================================== */}
        {piperaVillas && (
          <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#07090D]">
            <div className="max-w-7xl mx-auto space-y-16">
              <SectionHeader
                eyebrow="04 // MASTERPLANNED RESIDENTIAL ENCLAVE"
                badge="PIPERA – VOLUNTARI"
                title="Modern Architectural Residential Villas"
                description="A masterplanned private community of 36 residences engineered for executive family living, situated directly adjacent to Northern Bucharest's elite international academies."
              />

              <ProjectFeature
                title={piperaVillas.title}
                subtitle={piperaVillas.subtitle}
                location={piperaVillas.location}
                phase="COMPLETED MASTERPLAN · GATED RESIDENTIAL COMMUNITY"
                unitsSummary="36 VILLAS (14 TYPE 1 + 22 TYPE 2) · G+2"
                description={piperaVillas.description}
                developerNote="Comprehensive municipal infrastructure: paved dual-lane roads, subterranean utilities, perimeter security access, and 2 dedicated parking bays per villa."
                image={piperaVillas.heroImage}
                specs={piperaVillas.specs}
                highlights={piperaVillas.features}
                sourceUrl={piperaVillas.sourceUrl}
                sourceName={piperaVillas.sourceName}
              />
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* 05 // INTERNATIONAL AXIS: MONACO & DUBAI                 */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#0C1119]">
          <div className="max-w-7xl mx-auto space-y-16">
            <SectionHeader
              eyebrow="05 // INTERNATIONAL PORTFOLIO · AIXLUXURY"
              badge="MONACO · DUBAI · RIVIERA"
              title="International Trophy Axis: Monaco & Dubai Waterfront"
              description="Advising private wealth on the origination, transaction execution, and legal defense of landmark residences across Europe and the Middle East's primary financial centers."
            />

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Monaco Pavilion Card */}
              {monacoVilla && (
                <div className="border border-white/[0.1] bg-[#07090D] p-8 sm:p-10 space-y-6 flex flex-col justify-between shadow-2xl">
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] w-full border border-white/[0.08] bg-[#1B2028] overflow-hidden">
                      <Image
                        src={monacoVilla.heroImage}
                        alt="Monaco Coastal Residence"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 bg-[#07090D]/90 border border-white/[0.1] font-mono text-[9px] uppercase tracking-wider text-[#93C8FF]">
                        MONACO AXIS
                      </div>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                      CAP D&apos;AIL / MEDITERRANEAN COASTLINE
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                      {monacoVilla.title}
                    </h3>
                    <EditorialText size="sm" maxWidth="full" color="secondary">
                      {monacoVilla.description}
                    </EditorialText>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
                    <span className="text-[#93C8FF]">Valuation: Price upon request</span>
                    <Link
                      href="/contact"
                      className="text-[#F5F4EF] hover:text-[#93C8FF] flex items-center gap-1 font-semibold"
                    >
                      <span>CONFIDENTIAL DOSSIER</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}

              {/* Dubai Islands / BRABUS Island Project */}
              {dubaiBrabus && (
                <div className="border border-white/[0.1] bg-[#07090D] p-8 sm:p-10 space-y-6 flex flex-col justify-between shadow-2xl">
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] w-full border border-white/[0.08] bg-[#1B2028] overflow-hidden">
                      <Image
                        src={dubaiBrabus.heroImage}
                        alt="Dubai Ultra-Prime Development"
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 bg-[#07090D]/90 border border-white/[0.1] font-mono text-[9px] uppercase tracking-wider text-[#A97F60]">
                        DUBAI WATERFRONT
                      </div>
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C8FF] font-semibold block">
                      DUBAI ISLANDS / PALM JUMEIRAH AXIS
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                      {dubaiBrabus.title}
                    </h3>
                    <EditorialText size="sm" maxWidth="full" color="secondary">
                      {dubaiBrabus.description}
                    </EditorialText>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
                    <span className="text-[#A97F60]">Off-Plan Developer Allocation</span>
                    <Link
                      href="/contact"
                      className="text-[#F5F4EF] hover:text-[#93C8FF] flex items-center gap-1 font-semibold"
                    >
                      <span>DEVELOPER DOSSIER</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 06 // MARKET SURVEILLANCE & INTELLIGENCE PANELS          */}
        {/* ======================================================== */}
        <section className="py-28 sm:py-36 lg:py-44 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#07090D]">
          <div className="max-w-7xl mx-auto space-y-16">
            <SectionHeader
              eyebrow="06 // SURVEILLANCE DESK · EMPIRICAL INDICATORS"
              badge="HOMEFIND INTELLIGENCE FEED"
              title="Market Indicators & Macroeconomic Analysis"
              description="Data monitored through official ANCPI cadastre registries, National Bank of Romania (BNR) credit statistics, and HomeFind predictive pricing algorithms."
            />

            <div className="grid md:grid-cols-3 gap-8">
              <InsightPanel
                category="PRICE DYNAMICS & YIELD"
                title="Annual Capital Growth in Northern Prime Corridors"
                metric="+7.2%"
                change="2026 Forecast"
                trend="up"
                source="HomeFind Intelligence / ANCPI Official Cadastre"
                date="Q1 2026"
                description="Herăstrău, Kiseleff, and Pipera enclaves maintain strong liquidity premiums supported by inelastic prime supply and constant multinational executive absorption."
                actionUrl="/real-estate/market"
              />

              <InsightPanel
                category="ESTATE UNDERWRITING & DEFENSE"
                title="The Valuation Gap: Statutory PAD vs. Agreed Reconstruction Cost"
                metric="€20,000"
                change="Statutory PAD Ceiling"
                trend="neutral"
                source="UNSAR / Private Client Risk Desk"
                date="2026 Policy Benchmark"
                description="Mandatory PAD policies cover only basic statutory minimums. Properties exceeding €300,000 require full replacement-cost underwriting without market depreciation."
                actionUrl="https://insurance.cristianvaduva.com"
              />

              <InsightPanel
                category="FISCAL ARCHITECTURE & OPTIMIZATION"
                title="Impact of Romanian VAT Rate Threshold Transitions"
                metric="Fiscal Parity"
                change="New-Build Impact"
                trend="neutral"
                source="AiX OS Economic Research Group"
                date="2026 Analysis"
                description="Fiscal adjustments redirect capital toward established secondary luxury markets and favor completed detached residences with extensive private terraces."
                actionUrl="/insights"
              />
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 07 // FINAL FIDUCIARY INTAKE CTA                         */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="RETAINED FIDUCIARY ACQUISITION MANDATE"
          title="Planning an Acquisition or Seeking Representation for a Prime Asset?"
          description="We structure every transaction with absolute discretion, rigorous contractual shielding, and independent valuation audits. No mass marketing and zero dual-agency compromise."
          primaryActionText="SCHEDULE A PRIVATE CONSULTATION"
          primaryActionHref="/contact"
          secondaryActionText="WHATSAPP DESK (+43 650 953 6345)"
          secondaryActionHref="https://wa.me/436509536345"
        />
      </main>

      <Footer />
    </div>
  );
}
