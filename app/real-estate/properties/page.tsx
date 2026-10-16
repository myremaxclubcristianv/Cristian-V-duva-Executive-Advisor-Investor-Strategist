import { Metadata } from "next";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import PropertiesCatalog from "@/components/editorial/PropertiesCatalog";
import { SectionHeader } from "@/components/editorial";

export const metadata: Metadata = {
  title: "Confirmed Property Portfolio & Acquisitions — Cristian Văduva",
  description: "Curated editorial selection of verified penthouses, private architectural estates, residential masterplans, and international trophy assets across Bucharest, Monaco, and Dubai.",
};

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-executive-header">
        {/* ======================================================== */}
        {/* EDITORIAL HERO SECTION                                   */}
        {/* ======================================================== */}
        <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-arch-grid relative overflow-hidden">
          {/* Subtle Corner Markers */}
          <div className="absolute top-10 left-6 sm:left-12 lg:left-20 w-3 h-3 border-t border-l border-[#93C8FF]" />
          <div className="absolute top-10 right-6 sm:right-12 lg:right-20 w-3 h-3 border-t border-r border-[#93C8FF]" />

          <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
            <SectionHeader
              eyebrow="VERIFIED ASSET PORTFOLIO"
              badge="HOMEFIND × AIXLUXURY"
              title={
                <>
                  Editorial Curation of<br />
                  <span className="text-[#A97F60] italic font-normal">Sovereign Architectural Assets.</span>
                </>
              }
              description="Every property presented has been audited against our fiduciary representation standards: architectural rarity, structural engineering integrity, verified cadastre title provenance, and verified capital defense resilience."
            />

            {/* Fiduciary Standards Ticker */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/[0.08] font-mono text-[10px] sm:text-[11px] text-[#8A95A5]">
              <div className="space-y-1">
                <span className="text-[#93C8FF] block font-semibold uppercase tracking-wider">AUDIT STANDARDS</span>
                <span className="text-[#F5F4EF] font-sans">Zero unverified marketing claims</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#93C8FF] block font-semibold uppercase tracking-wider">CONFIRMED SOURCES</span>
                <span className="text-[#F5F4EF] font-sans">HomeFind, AiXLuxury & CristianVaduva.com</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#93C8FF] block font-semibold uppercase tracking-wider">CONFIDENTIALITY TIER</span>
                <span className="text-[#F5F4EF] font-sans">Price on inquiry for private placements</span>
              </div>
              <div className="space-y-1">
                <span className="text-[#93C8FF] block font-semibold uppercase tracking-wider">REPRESENTATION BASIS</span>
                <span className="text-[#F5F4EF] font-sans">Single-Client Fiduciary Exclusivity</span>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* PROPERTIES EXHIBITION CATALOG                            */}
        {/* ======================================================== */}
        <div className="py-20 sm:py-28 lg:py-36">
          <PropertiesCatalog />
        </div>
      </main>

      <Footer />
    </div>
  );
}
