import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import PropertiesCatalog from "@/components/editorial/PropertiesCatalog";
import EditorialCadran from "@/components/editorial/EditorialCadran";
import { ArrowDown, ShieldCheck, MapPin, Globe, Sparkles, Building2 } from "lucide-react";

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
        {/* GRAND ARCHITECTURAL OPENING COMPOSITION                  */}
        {/* ======================================================== */}
        <section className="py-20 sm:py-28 lg:py-36 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-arch-grid relative overflow-hidden">
          {/* Subtle Ambient Light Wash */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#93C8FF]/[0.04] to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
            {/* Top Index & Verification Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 font-mono text-[10px] sm:text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span className="text-[#93C8FF] uppercase tracking-[0.28em] font-semibold">
                  PORTFOLIO CATALOGUE 2026 // VOL. IV
                </span>
                <span className="text-white/20">|</span>
                <span className="text-[#8A95A5] uppercase tracking-wider">
                  CONFIRMED ASSET INVENTORY
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#A97F60]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="tracking-[0.2em] font-semibold uppercase text-[10px]">
                  Fiduciary Underwriting Standard
                </span>
              </div>
            </div>

            {/* Split Monumental Aperture */}
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Headline & Thesis (~55% on desktop) */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#A97F60] font-semibold block">
                    SOVEREIGN REAL ESTATE ARCHITECTURE
                  </span>
                  <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#F5F4EF] leading-[1.04] tracking-tight">
                    Editorial Curation of<br />
                    <span className="text-[#A97F60] italic font-normal">Sovereign Architectural Assets.</span>
                  </h1>
                </div>

                <p className="font-sans text-base sm:text-lg text-[#B8C2CF] max-w-2xl font-light leading-relaxed">
                  Every property presented has been audited against our fiduciary representation
                  standards: architectural rarity, structural engineering integrity, verified cadastre
                  title provenance, and long-term capital defense resilience across sovereign corridors.
                </p>

                {/* Direct Action Link */}
                <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
                  <a
                    href="#catalog-view"
                    className="px-6 py-3.5 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] uppercase tracking-[0.2em] font-bold transition-all shadow-xl flex items-center gap-2"
                  >
                    <span>EXPLORE PORTFOLIO COLLECTION</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href="/contact"
                    className="px-6 py-3.5 border border-white/[0.15] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] uppercase tracking-[0.2em] font-semibold transition-all"
                  >
                    RETAINED MANDATE BRIEF
                  </Link>
                </div>
              </div>

              {/* Right Cinematic Hero Aperture (~45% on desktop) */}
              <div className="lg:col-span-5">
                <EditorialCadran
                  watermarkNumber="35"
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
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1] space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#93C8FF] block">
                        FLAGSHIP CURATION FEATURE
                      </span>
                      <h4 className="font-serif text-lg text-[#F5F4EF] font-medium leading-tight">
                        Signature Penthouse with 220 sqm Rooftop
                      </h4>
                      <div className="flex items-center justify-between font-mono text-[11px] text-[#B8C2CF] pt-1">
                        <span>Central Diplomatic Corridor, Bucharest</span>
                        <span className="text-[#93C8FF] font-serif text-sm">€468,000</span>
                      </div>
                    </div>
                  </div>
                </EditorialCadran>
              </div>
            </div>

            {/* Fiduciary Portfolio Metrics Cadran (Derived from genuine data) */}
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
                    35
                  </div>
                  <span className="text-[11px] text-[#8A95A5] block font-sans">
                    Audited luxury properties
                  </span>
                </div>

                <div className="space-y-1.5 border-r border-white/[0.08] last:border-0 pr-4">
                  <span className="text-[#A97F60] text-[10px] uppercase tracking-[0.25em] block font-semibold">
                    JURISDICTIONS
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl text-[#F5F4EF] font-normal">
                    6
                  </div>
                  <span className="text-[11px] text-[#8A95A5] block font-sans">
                    RO, ES, UAE, MC, USA, HR
                  </span>
                </div>

                <div className="space-y-1.5 border-r border-white/[0.08] last:border-0 pr-4">
                  <span className="text-[#93C8FF] text-[10px] uppercase tracking-[0.25em] block font-semibold">
                    VERIFIED ASSETS
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl text-[#F5F4EF] font-normal">
                    651
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
                    Single-client fiduciary mandate
                  </span>
                </div>
              </div>
            </EditorialCadran>
          </div>
        </section>

        {/* ======================================================== */}
        {/* PROPERTIES EXHIBITION CATALOG                            */}
        {/* ======================================================== */}
        <div id="catalog-view" className="py-16 sm:py-24 lg:py-32">
          <PropertiesCatalog />
        </div>
      </main>

      <Footer />
    </div>
  );
}

