import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { getSelectedProperties } from "@/lib/properties";
import { ArrowUpRight, Compass, ShieldCheck, MapPin, Building2, Scale, Key } from "lucide-react";

export const metadata: Metadata = {
  title: "Ultra-Prime Real Estate & Strategic Advisory — Cristian Văduva",
  description: "Bespoke acquisition strategy, property curation, and capital intelligence for ultra-prime European real estate assets across Monaco, Bucharest, and Dubai.",
};

export default function RealEstateHubPage() {
  const properties = getSelectedProperties();

  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* ======================================================== */}
        {/* 01 // ARCHITECTURAL HERO                                 */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] relative overflow-hidden bg-arch-grid">
          {/* Subtle Corner Crosshairs */}
          <div className="absolute top-10 left-6 lg:left-16 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 lg:right-16 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="site-container space-y-12 relative z-10">
            <div className="flex items-center justify-between border-b border-white/[0.1] pb-4 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>01 // REAL ESTATE MANDATE</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">SOVEREIGN ACQUISITIONS</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[#8A95A5]">
                <MapPin className="w-3.5 h-3.5 text-[#93C8FF]" />
                <span>MONACO · RO · UAE · CH</span>
              </div>
            </div>

            <div className="max-w-4xl space-y-6">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#F5F4EF] leading-[0.98] tracking-tight">
                Ultra-Prime Acquisitions &<br />
                <span className="text-[#A97F60] italic font-normal">Off-Market Sovereignty.</span>
              </h1>

              <p className="font-sans text-base sm:text-xl text-[#B8C2CF] font-light max-w-2xl leading-relaxed">
                Directing confidential cross-border property acquisitions, trophy portfolio structuring, and independent valuation audits for European family offices and private wealth.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center gap-2 shadow-xl"
                >
                  <span>SUBMIT ACQUISITION BRIEF</span>
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
          </div>
        </section>

        {/* ======================================================== */}
        {/* 02 // FLAGSHIP ARCHITECTURAL EXHIBIT                     */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] bg-[#0C1119] relative overflow-hidden">
          <div className="site-container space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
                  <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                  <span>02 // ARCHITECTURAL CASE STUDY</span>
                  <span className="text-white/20">/</span>
                  <span className="text-[#B8C2CF]">MEDITERRANEAN COASTAL AXIS</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F4EF] tracking-tight">
                  Trophy Villa Pavilion — Cap d’Ail / Monaco Border
                </h2>
              </div>
              <div className="font-mono text-xs text-[#93C8FF]">
                PRIVATE TRANSACTION ARCHIVE
              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 relative">
                <div className="relative aspect-[16/10] w-full border border-white/[0.14] bg-[#1B2028] p-2.5 shadow-2xl overflow-hidden">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="/images/architecture/monaco-cliffside.jpg"
                      alt="Ultra-Prime Mediterranean Architectural Residence"
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/70 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-[#A97F60] block font-semibold">
                    STRUCTURAL ADVISORY AUDIT
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] leading-snug">
                    Cantilevered Travertine Slabs Over Azure Coastline
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                    Sculptural residential architecture directly fronting the Mediterranean. Mandate involved forensic zoning review, cross-border fiscal optimization through a Monaco holding vehicle, and off-market single-principal negotiation.
                  </p>
                </div>

                <div className="p-4 border border-white/[0.08] bg-[#1B2028]/60 space-y-3 font-mono text-xs">
                  <div className="flex justify-between border-b border-white/[0.05] pb-2">
                    <span className="text-[#8A95A5]">VALUATION METRIC</span>
                    <span className="text-[#F5F4EF] font-sans font-medium">Sub-market Benchmark (€/sqm)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/[0.05] pb-2">
                    <span className="text-[#8A95A5]">STRUCTURAL INTEGRITY</span>
                    <span className="text-[#93C8FF] font-sans font-medium">Certified 0% Latent Defect</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8A95A5]">HOLDING VEHICLE</span>
                    <span className="text-[#F5F4EF] font-sans font-medium">Direct Principal Custody</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#93C8FF] hover:text-[#B8C2CF] font-semibold transition-colors"
                >
                  <span>INQUIRE ON SIMILAR OFF-MARKET ASSETS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 03 // ACTIVE CURATION CATALOG                            */}
        {/* ======================================================== */}
        <section className="site-chapter border-b border-white/[0.08] bg-[#07090D]">
          <div className="site-container space-y-12">
            <div className="space-y-3 border-b border-white/[0.08] pb-6">
              <div className="flex items-center gap-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#93C8FF]">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span>03 // ACTIVE MANDATES</span>
                <span className="text-white/20">/</span>
                <span className="text-[#B8C2CF]">CONFIDENTIAL SELECTION</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F4EF] tracking-tight">
                Selected Prime Architectural Opportunities
              </h2>
            </div>

            <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {properties.map((p, idx) => (
                <div
                  key={p.id}
                  className="py-10 grid lg:grid-cols-12 gap-8 items-start hover:bg-[#1B2028]/30 transition-colors px-2"
                >
                  <div className="lg:col-span-2">
                    <span className="font-monumental text-5xl text-[#1B2028]">
                      0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#93C8FF] block mt-1">
                      {p.status}
                    </span>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#8A95A5]">
                      {p.location} · {p.area}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                      {p.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                      {p.description}
                    </p>
                    <div className="p-3 bg-[#1B2028] border border-white/[0.06] text-xs font-mono text-[#D8D0C2]">
                      <span className="text-[#93C8FF] block text-[9px] uppercase tracking-widest">ADVISORY PERSPECTIVE</span>
                      {p.advisoryPerspective}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 lg:pl-6 lg:border-l lg:border-white/[0.06]">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#8A95A5] block">
                        ESTIMATED VALUATION
                      </span>
                      <span className="font-serif text-2xl text-[#93C8FF]">
                        {p.price}
                      </span>
                    </div>

                    <Link
                      href="/contact"
                      className="px-6 py-3 border border-white/[0.14] hover:border-[#93C8FF] hover:bg-[#93C8FF] hover:text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all text-center"
                    >
                      REQUEST DOSSIER
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* 04 // TRANSACTION CRITERIA & FIDUCIARY STANDARD          */}
        {/* ======================================================== */}
        <section className="site-chapter bg-[#0C1119]">
          <div className="site-container space-y-12">
            <div className="p-10 sm:p-14 border border-white/[0.14] bg-[#1B2028]/80 backdrop-blur-xl space-y-8 shadow-2xl relative">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#93C8FF] font-semibold block">
                  FIDUCIARY SPECIFICATION
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                  Acquisition Mandate Standards
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light max-w-2xl leading-relaxed">
                  We accept buyer and seller mandates strictly under exclusive engagement contracts. We do not participate in multi-broker marketing auctions or circulate uncontrolled teasers.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 font-mono text-xs border-t border-white/[0.08] pt-6">
                <div>
                  <span className="text-[#93C8FF] block text-[10px] uppercase">CAPITAL THRESHOLD</span>
                  <span className="text-[#F5F4EF] font-sans font-medium text-base">€5M – €100M+</span>
                  <span className="text-[#8A95A5] block text-[10px] mt-1">Single asset or portfolio lot</span>
                </div>
                <div>
                  <span className="text-[#93C8FF] block text-[10px] uppercase">EXCLUSIVITY</span>
                  <span className="text-[#F5F4EF] font-sans font-medium text-base">100% Retained Only</span>
                  <span className="text-[#8A95A5] block text-[10px] mt-1">Eliminating dual-agency conflict</span>
                </div>
                <div>
                  <span className="text-[#93C8FF] block text-[10px] uppercase">DISCRETION GUARANTEE</span>
                  <span className="text-[#F5F4EF] font-sans font-medium text-base">Mutual Swiss NDA</span>
                  <span className="text-[#8A95A5] block text-[10px] mt-1">Zero public press disclosures</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
