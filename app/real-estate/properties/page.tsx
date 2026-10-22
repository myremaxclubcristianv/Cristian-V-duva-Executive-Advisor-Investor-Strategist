import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import PropertiesCatalog from "@/components/editorial/PropertiesCatalog";
import EditorialCadran from "@/components/editorial/EditorialCadran";
import CadranDivider from "@/components/editorial/CadranDivider";
import PersonalPerspectiveSection from "@/components/editorial/PersonalPerspectiveSection";
import EcosystemDirectory from "@/components/editorial/EcosystemDirectory";
import ExecutiveContactCadran from "@/components/editorial/ExecutiveContactCadran";
import HomeFindPortfolio from "@/components/editorial/HomeFindPortfolio";
import { selectedProperties } from "@/lib/properties";
import { ArrowDown, ShieldCheck, MapPin, Globe, Sparkles, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Confirmed Property Portfolio & Acquisitions — Cristian Văduva",
  description: "Curated editorial selection of verified penthouses, private architectural estates, residential masterplans, and international trophy assets across Bucharest, Marbella, Monaco, Dubai, and Miami.",
  alternates: {
    canonical: "https://executive.cristianvaduva.com/real-estate/properties",
  },
};

export default function PropertiesPage() {
  // Dynamically derive portfolio intelligence metrics from verified inventory
  const totalProperties = selectedProperties.length;
  const totalPhotos = selectedProperties.reduce(
    (sum, p) => sum + (p.galleryImages && p.galleryImages.length > 0 ? p.galleryImages.length : 1),
    0
  );

  const countriesSet = new Set<string>();
  selectedProperties.forEach((p) => {
    const c = p.country || "";
    if (c.includes("Romania")) countriesSet.add("Romania");
    else if (c.includes("Spain")) countriesSet.add("Spain");
    else if (c.includes("France")) countriesSet.add("France");
    else if (c.includes("Monaco")) countriesSet.add("Monaco");
    else if (c.includes("UAE") || c.includes("Emirates") || c.includes("Dubai")) countriesSet.add("UAE");
    else if (c.includes("United States") || c.includes("USA") || c.includes("Florida")) countriesSet.add("USA");
    else if (c.includes("Croatia")) countriesSet.add("Croatia");
    else {
      const primary = c.split("/")[0].trim();
      if (primary) countriesSet.add(primary);
    }
  });
  const totalCountries = countriesSet.size;
  const countryCodesSummary = "RO, ES, UAE, FR, USA, HR";

  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-executive-header">
        {/* ======================================================== */}
        {/* GRAND ARCHITECTURAL OPENING COMPOSITION                  */}
        {/* ======================================================== */}
        <section className="py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-arch-grid relative overflow-hidden">
          {/* Subtle Ambient Light Wash */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#93C8FF]/[0.04] to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
            {/* Top Index & Verification Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/[0.08] pb-6 font-mono text-[10px] sm:text-xs">
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse shrink-0" />
                <span className="text-[#93C8FF] uppercase tracking-[0.16em] sm:tracking-[0.28em] font-semibold">
                  PORTFOLIO CATALOGUE 2026 // VOL. IV
                </span>
                <span className="text-white/20 hidden xs:inline">|</span>
                <span className="text-[#8A95A5] uppercase tracking-wider hidden xs:inline">
                  CONFIRMED ASSET INVENTORY ({totalProperties} MONOGRAPHS)
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#A97F60]">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span className="tracking-[0.15em] sm:tracking-[0.2em] font-semibold uppercase text-[10px]">
                  Strategic Underwriting Standard
                </span>
              </div>
            </div>

            {/* Split Monumental Aperture */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Headline & Thesis (~55% on desktop) */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#A97F60] font-semibold block">
                    EXECUTIVE REAL ESTATE ARCHITECTURE
                  </span>
                  <h1 className="font-serif text-3xl sm:text-6xl lg:text-7xl text-[#F5F4EF] leading-[1.04] tracking-tight break-words">
                    Editorial Curation of<br />
                    <span className="text-[#A97F60] italic font-normal">Sovereign Architectural Assets.</span>
                  </h1>
                </div>

                <p className="font-sans text-base sm:text-lg text-[#B8C2CF] max-w-2xl font-light leading-relaxed">
                  Every property presented has been reviewed against our rigorous representation
                  standards: architectural rarity, structural engineering integrity, verified cadastre
                  title provenance, and long-term capital defense resilience across executive corridors.
                </p>

                {/* Direct Action Link - Apple Pills */}
                <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-xs">
                  <a
                    href="#catalog-view"
                    className="btn-apple-pill-primary shadow-xl shadow-[#93C8FF]/15"
                  >
                    <span>EXPLORE PORTFOLIO ({totalProperties})</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="#perspectives"
                    className="btn-apple-pill-secondary"
                  >
                    <span>CRISTIAN VĂDUVA PERSPECTIVE</span>
                  </a>

                  <a
                    href="#ecosystem"
                    className="btn-apple-pill-secondary"
                  >
                    <span>ECOSYSTEM DIRECTORY</span>
                  </a>
                </div>
              </div>

              {/* Right Cinematic Hero Aperture (~45% on desktop) */}
              <div className="lg:col-span-5">
                <EditorialCadran
                  watermarkNumber={String(totalProperties)}
                  accentColor="ice"
                  surface="midnight"
                  className="p-3 bg-[#0C1119]"
                >
                  <div className="relative aspect-[4/3] w-full bg-[#1B2028] overflow-hidden border border-white/[0.08]">
                    <Image
                      src="https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e9bc0fbc-b578-4696-9581-8c64e562be2d.jpg"
                      alt="Signature Rooftop Penthouse — Panoramic Bucharest Skyline"
                      fill
                      priority
                      fetchPriority="high"
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 80vw, 40vw"
                      quality={75}
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1] space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#93C8FF] block">
                        FLAGSHIP CURATION FEATURE
                      </span>
                      <h2 className="font-serif text-lg text-[#F5F4EF] font-medium leading-tight">
                        Signature Penthouse with 220 sqm Rooftop
                      </h2>
                      <div className="flex items-center justify-between font-mono text-[11px] text-[#B8C2CF] pt-1">
                        <span>Central Diplomatic Corridor, Bucharest</span>
                        <span className="text-[#93C8FF] font-serif text-sm">€468,000</span>
                      </div>
                    </div>
                  </div>
                </EditorialCadran>
              </div>
            </div>

            {/* Strategic Portfolio Metrics Cadran (Derived dynamically from genuine data) */}
            <EditorialCadran
              accentColor="copper"
              surface="graphite"
              className="p-6 sm:p-8 border-white/[0.12] bg-[#0C1119]"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 font-mono">
                <div className="space-y-1.5 border-r border-white/[0.08] last:border-0 pr-4">
                  <span className="text-[#93C8FF] text-[10px] uppercase tracking-[0.25em] block font-semibold">
                    CONFIRMED ASSETS
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl text-[#F5F4EF] font-normal">
                    {totalProperties}
                  </div>
                  <span className="text-[11px] text-[#8A95A5] block font-sans">
                    Audited luxury monographs
                  </span>
                </div>

                <div className="space-y-1.5 border-r border-white/[0.08] last:border-0 pr-4">
                  <span className="text-[#A97F60] text-[10px] uppercase tracking-[0.25em] block font-semibold">
                    JURISDICTIONS
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl text-[#F5F4EF] font-normal">
                    {totalCountries}
                  </div>
                  <span className="text-[11px] text-[#8A95A5] block font-sans">
                    {countryCodesSummary}
                  </span>
                </div>

                <div className="space-y-1.5 border-r border-white/[0.08] last:border-0 pr-4">
                  <span className="text-[#93C8FF] text-[10px] uppercase tracking-[0.25em] block font-semibold">
                    VERIFIED PHOTOGRAPHS
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl text-[#F5F4EF] font-normal">
                    {totalPhotos.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-[#8A95A5] block font-sans">
                    High-resolution photographs
                  </span>
                </div>

                <div className="space-y-1.5 pr-4">
                  <span className="text-[#A97F60] text-[10px] uppercase tracking-[0.25em] block font-semibold">
                    ALIGNMENT BASIS
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl text-[#F5F4EF] font-normal">
                    100%
                  </div>
                  <span className="text-[11px] text-[#8A95A5] block font-sans">
                    Single-client dedicated mandate
                  </span>
                </div>
              </div>
            </EditorialCadran>
          </div>
        </section>

        {/* ======================================================== */}
        {/* PERSONAL ADVISORY MANDATE CADRAN                         */}
        {/* ======================================================== */}
        <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 pt-10 pb-2">
          <div className="rounded-3xl border border-white/[0.08] bg-[#0C1119] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group shadow-xl">
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-white/[0.1] bg-[#1B2028] overflow-hidden shrink-0 shadow-lg">
                <Image
                  src="/images/personal/portraits/cristian-vaduva-desk-advisor.jpg"
                  alt="Cristian Văduva — Executive Real Estate Advisor"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-[#93C8FF] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />
                  <span>DIRECT PRINCIPAL ADVISORY</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F5F4EF]">
                  Represented Solely on Behalf of the Buyer
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] max-w-xl font-light leading-relaxed">
                  Every acquisition across Bucharest, Marbella, and Dubai is personally directed by Cristian Văduva under a direct client representation mandate, eliminating broker conflict.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 font-mono text-xs w-full md:w-auto">
              <a
                href="#perspectives"
                className="btn-apple-pill-secondary flex-1 md:flex-initial"
              >
                <span>MEET CRISTIAN VĂDUVA</span>
              </a>
              <Link
                href="/contact"
                className="btn-apple-pill-primary flex-1 md:flex-initial shadow-lg"
              >
                <span>RETAIN MANDATE</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* LIVE HOMEFIND BUY & RENT PORTFOLIO                       */}
        {/* ======================================================== */}
        <div id="homefind-portfolio">
          <HomeFindPortfolio />
        </div>

        {/* ======================================================== */}
        {/* PROPERTIES EXHIBITION CATALOG                            */}
        {/* ======================================================== */}
        <div id="catalog-view" className="py-12 sm:py-20 lg:py-28">
          <PropertiesCatalog />
        </div>

        {/* ======================================================== */}
        {/* CRISTIAN VĂDUVA — A DIFFERENT PERSPECTIVE                */}
        {/* ======================================================== */}
        <div id="perspectives">
          <PersonalPerspectiveSection />
        </div>

        {/* ======================================================== */}
        {/* CONNECTED BUSINESS ECOSYSTEM DIRECTORY & MATRIX MAP      */}
        {/* ======================================================== */}
        <div id="ecosystem">
          <EcosystemDirectory />
        </div>

        {/* ======================================================== */}
        {/* COMPLETE CONTACT & ACQUISITION BRIEF CADRAN              */}
        {/* ======================================================== */}
        <div id="contact">
          <ExecutiveContactCadran />
        </div>
      </main>

      <Footer />
    </div>
  );
}


