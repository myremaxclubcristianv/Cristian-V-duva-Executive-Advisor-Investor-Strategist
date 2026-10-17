import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { getPropertyById, selectedProperties, Property } from "@/lib/properties";
import PropertyGalleryViewer from "@/components/editorial/PropertyGalleryViewer";
import SupportingPropertyCard from "@/components/editorial/SupportingPropertyCard";
import EditorialCadran from "@/components/editorial/EditorialCadran";
import CTASection from "@/components/editorial/CTASection";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Building2,
  Calendar,
  Compass,
  Maximize,
  ExternalLink,
  FileCheck2,
  Share2,
} from "lucide-react";

interface PropertyPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const params: { id: string }[] = [];
  selectedProperties.forEach((p) => {
    params.push({ id: p.id });
    if (p.slug && p.slug !== p.id) {
      params.push({ id: p.slug });
    }
  });
  return params;
}

export async function generateMetadata({
  params,
}: PropertyPageProps): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    return {
      title: "Property Not Found — Cristian Văduva Executive",
    };
  }

  const ogImages = [
    property.heroImage,
    ...(property.galleryImages?.slice(1, 4) || []),
  ];

  return {
    title: `${property.title} | Luxury Real Estate Monograph — Cristian Văduva Executive`,
    description: property.description,
    openGraph: {
      title: `${property.title} — ${property.location}`,
      description: property.description,
      images: ogImages.map((url) => ({ url, alt: property.title })),
      type: "website",
    },
    alternates: {
      canonical: `https://executive.cristianvaduva.com/real-estate/properties/${property.id}`,
    },
  };
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  // Find index in selected properties array
  const propIndex = selectedProperties.findIndex((p) => p.id === property.id);
  const formattedIndex = propIndex >= 0 ? (propIndex < 9 ? `0${propIndex + 1}` : `${propIndex + 1}`) : "01";

  // Related properties in same category or country (excluding current)
  const relatedProperties = selectedProperties
    .filter(
      (p) =>
        p.id !== property.id &&
        (p.category === property.category || p.country === property.country)
    )
    .slice(0, 3);

  // Schema.org RealEstateListing JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: property.title,
    description: property.description,
    url: `https://executive.cristianvaduva.com/real-estate/properties/${property.id}`,
    image: property.heroImage,
    category: property.type,
    itemOffered: {
      "@type": "SingleFamilyResidence",
      name: property.title,
      description: property.description,
      address: {
        "@type": "PostalAddress",
        addressLocality: property.city || property.location,
        addressCountry: property.country || "Romania",
      },
      numberOfRooms: property.rooms,
      floorSize: {
        "@type": "QuantitativeValue",
        value: property.usableArea || property.area,
      },
    },
    offers: {
      "@type": "Offer",
      price: property.priceNumeric || property.price,
      priceCurrency: property.currency || "EUR",
      availability:
        property.status === "Available"
          ? "https://schema.org/InStock"
          : "https://schema.org/LimitedAvailability",
      url: property.sourceUrl,
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ExecutiveHeader />

      <main className="flex-1 pt-executive-header">
        {/* ======================================================== */}
        {/* BREADCRUMB & NAVIGATION BAR                              */}
        {/* ======================================================== */}
        <section className="border-b border-white/[0.08] bg-[#0C1119]/80 backdrop-blur-md py-4 px-6 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] sm:text-xs">
            <div className="flex items-center gap-2 text-[#8A95A5]">
              <Link
                href="/real-estate"
                prefetch={false}
                className="hover:text-[#93C8FF] transition-colors"
              >
                REAL ESTATE
              </Link>
              <span>/</span>
              <Link
                href="/real-estate/properties"
                prefetch={false}
                className="hover:text-[#93C8FF] transition-colors"
              >
                PORTFOLIO CATALOGUE
              </Link>
              <span>/</span>
              <span className="text-[#93C8FF] uppercase truncate max-w-[200px] sm:max-w-xs font-semibold">
                MONOGRAPH NO. {formattedIndex}
              </span>
            </div>

            <Link
              href="/real-estate/properties"
              prefetch={false}
              className="text-[#B8C2CF] hover:text-[#93C8FF] flex items-center gap-1.5 transition-colors font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO PORTFOLIO CATALOGUE</span>
            </Link>
          </div>
        </section>

        {/* ======================================================== */}
        {/* MONOGRAPH ARCHITECTURAL MASTHEAD                         */}
        {/* ======================================================== */}
        <section className="py-12 sm:py-16 lg:py-20 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#07090D] relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <EditorialCadran
              watermarkNumber={formattedIndex}
              accentColor="ice"
              surface="midnight"
              className="p-8 sm:p-12 space-y-8"
            >
              {/* Masthead Eyebrow & Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 font-mono text-[10px] sm:text-xs">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 bg-[#93C8FF]/15 border border-[#93C8FF]/30 text-[#93C8FF] uppercase tracking-[0.25em] font-bold">
                    MONOGRAPH NO. {formattedIndex}{" // "}{selectedProperties.length}
                  </span>
                  <span className="text-white/20">|</span>
                  <span className="px-3 py-1 bg-white/[0.04] border border-white/[0.1] text-[#8A95A5] uppercase tracking-wider">
                    {property.type}
                  </span>
                  <span className="text-white/20">·</span>
                  <span className="text-[#93C8FF] uppercase tracking-wider font-semibold">
                    STATUS: {property.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[#A97F60]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="tracking-[0.2em] uppercase font-semibold text-[10px]">
                    Cadastre Verified Asset
                  </span>
                </div>
              </div>

              {/* Title & Location Header */}
              <div className="space-y-4 max-w-5xl">
                {property.subtitle && (
                  <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.26em] text-[#A97F60] font-semibold block">
                    {property.subtitle}
                  </span>
                )}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] leading-[1.08] tracking-tight">
                  {property.title}
                </h1>
              </div>

              {/* Key Geographic & Financial Rail */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/[0.08] font-mono">
                <div className="space-y-1">
                  <span className="text-[#8A95A5] text-[10px] uppercase tracking-widest block">
                    SOVEREIGN LOCATION
                  </span>
                  <div className="text-[#F5F4EF] text-xs sm:text-sm flex items-center gap-1.5 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#A97F60] shrink-0" />
                    <span className="truncate">{property.location}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[#8A95A5] text-[10px] uppercase tracking-widest block">
                    VERIFIED FOOTPRINT
                  </span>
                  <div className="text-[#F5F4EF] text-xs sm:text-sm flex items-center gap-1.5">
                    <Maximize className="w-3.5 h-3.5 text-[#93C8FF] shrink-0" />
                    <span>{property.area}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[#8A95A5] text-[10px] uppercase tracking-widest block">
                    VALUATION BENCHMARK
                  </span>
                  <div className="text-[#93C8FF] font-serif text-xl sm:text-2xl font-medium">
                    {property.price}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[#8A95A5] text-[10px] uppercase tracking-widest block">
                    CANONICAL SOURCE
                  </span>
                  <div className="text-[#B8C2CF] text-xs flex items-center gap-1 truncate">
                    <span>{property.sourceName}</span>
                  </div>
                </div>
              </div>
            </EditorialCadran>
          </div>
        </section>

        {/* ======================================================== */}
        {/* PHOTOGRAPHIC STAGE & TECHNICAL SPECIFICATIONS            */}
        {/* ======================================================== */}
        <section className="py-12 sm:py-20 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#0C1119]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Gallery Column (~58% on desktop) */}
            <div className="lg:col-span-7 space-y-6">
              <PropertyGalleryViewer
                images={property.galleryImages}
                title={property.title}
                location={property.location}
                price={property.price}
              />
            </div>

            {/* Technical Specifications Rail (~42% on desktop) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Valuation & Acquisition Box */}
              <EditorialCadran
                accentColor="ice"
                surface="midnight"
                className="p-6 sm:p-8 space-y-6"
              >
                <div className="space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#8A95A5] block">
                    CONFIRMED VALUATION BENCHMARK
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl text-[#93C8FF] font-medium">
                    {property.price}
                  </div>
                  <span className="font-mono text-[10px] text-[#B8C2CF] block pt-1">
                    Single-Client Fiduciary Exclusivity · Non-Brokerage Retainer
                  </span>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    href={`/contact?property=${encodeURIComponent(property.title)}`}
                    className="w-full py-4 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all text-center flex items-center justify-center gap-2 shadow-xl min-h-[48px]"
                  >
                    <span className="text-[#07090D] font-bold">REQUEST CONFIDENTIAL DOSSIER</span>
                    <ArrowUpRight className="w-4 h-4 text-[#07090D]" />
                  </Link>

                  <a
                    href={property.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 border border-white/[0.12] hover:border-[#93C8FF] text-[#B8C2CF] hover:text-[#F5F4EF] font-mono text-[11px] uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 bg-[#1B2028]/40 min-h-[44px]"
                  >
                    <span>Inspect Original Platform Source ({property.sourceName})</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#93C8FF]" />
                  </a>
                </div>
              </EditorialCadran>

              {/* Grouped Technical Specifications Cadran */}
              {property.specs && property.specs.length > 0 && (
                <EditorialCadran
                  accentColor="copper"
                  surface="graphite"
                  className="p-6 sm:p-8 space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold">
                      TECHNICAL ARCHITECTURAL SPECIFICATIONS
                    </span>
                    <span className="font-mono text-[9px] text-[#8A95A5]">
                      VERIFIED DATA
                    </span>
                  </div>

                  <div className="divide-y divide-white/[0.06]">
                    {property.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        className="py-3 flex items-center justify-between text-xs"
                      >
                        <span className="font-mono text-[#8A95A5] uppercase tracking-wider text-[10px]">
                          {spec.label}
                        </span>
                        <span className="font-mono text-[#F5F4EF] font-medium text-right">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </EditorialCadran>
              )}

              {/* Fiduciary Advisory Thesis Cadran */}
              <div className="p-6 sm:p-8 border-l-2 border-[#93C8FF] bg-[#07090D] space-y-3 shadow-2xl">
                <div className="flex items-center gap-2 text-[#93C8FF] font-mono text-[10px] uppercase tracking-[0.25em] font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>FIDUCIARY ADVISORY THESIS</span>
                </div>
                <p className="font-serif italic text-base sm:text-lg text-[#D8D0C2] leading-relaxed">
                  &ldquo;{property.advisoryPerspective}&rdquo;
                </p>
                <div className="font-mono text-[9px] uppercase tracking-widest text-[#8A95A5] pt-1">
                  CRISTIAN VĂDUVA — INDEPENDENT INVESTMENT STRATEGY
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* IN-DEPTH ARCHITECTURAL MONOGRAPH & UNDERWRITING          */}
        {/* ======================================================== */}
        <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#07090D]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#93C8FF] block font-semibold">
                  ARCHITECTURAL MONOGRAPH & ACQUISITION UNDERWRITING
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                  Spatial Composition & Valuation Context
                </h2>
              </div>

              <div className="space-y-6 font-sans text-base sm:text-lg text-[#B8C2CF] font-light leading-relaxed max-w-3xl">
                {property.description
                  ? property.description
                      .split(/\n\s*\n|\r\n\s*\r\n/)
                      .map((p) => p.trim())
                      .filter(Boolean)
                      .map((para, pIdx) => (
                        <p key={pIdx} className="leading-relaxed">
                          {para}
                        </p>
                      ))
                  : null}
                <p className="pt-2 text-sm text-[#8A95A5] leading-relaxed border-t border-white/[0.06]">
                  Every property curated in the Executive portfolio has been audited for
                  architectural rarity, legal title clarity, structural engineering robustness,
                  and capital defense resilience. Transactions structured under our advisory
                  mandate operate under strict fiduciary non-brokerage confidentiality,
                  eliminating commercial agency conflicts.
                </p>
              </div>

              {/* Architectural Features Cadran Grid */}
              {property.features && property.features.length > 0 && (
                <div className="space-y-4 pt-6 border-t border-white/[0.08]">
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#F5F4EF] font-semibold block">
                    DISTINCTIVE ARCHITECTURAL SPECIFICATIONS & AMENITIES:
                  </span>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {property.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-[#0C1119] border border-white/[0.06]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                        <span className="font-sans text-xs sm:text-sm text-[#F5F4EF]/90 font-light leading-relaxed">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Advisory Cadran */}
            <div className="lg:col-span-4 space-y-6">
              <EditorialCadran
                accentColor="copper"
                surface="midnight"
                className="p-8 space-y-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#A97F60] font-semibold block">
                  ACQUISITION FIDUCIARY SHIELDING
                </span>

                <ul className="space-y-4 text-xs font-mono text-[#B8C2CF]">
                  <li className="flex items-start gap-2.5">
                    <FileCheck2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span>Independent Title & Cadastre Provenance Audit</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span>Structural Engineering & Quality Verification</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Compass className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span>Tax & Cross-Border Sovereign Entity Structuring</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/[0.08]">
                  <Link
                    href={`/contact?property=${encodeURIComponent(property.title)}`}
                    className="w-full py-3.5 border border-[#93C8FF] text-[#93C8FF] hover:bg-[#93C8FF] hover:text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <span>INITIATE PRIVATE BRIEF</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </EditorialCadran>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* COMPLETE PHOTOGRAPHIC DOSSIER MOSAIC                     */}
        {/* ======================================================== */}
        {property.galleryImages && property.galleryImages.length > 1 && (
          <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#0C1119]">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#93C8FF] block font-semibold">
                    COMPLETE ARCHITECTURAL RECORD
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                    Photographic Dossier ({property.galleryImages.length} Confirmed Photographs)
                  </h2>
                </div>
                <span className="font-mono text-xs text-[#8A95A5]">
                  Platform: {property.sourcePlatform || "Executive"} · Source: {property.sourceName}
                </span>
              </div>

              {/* Asymmetric Editorial Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {property.galleryImages.map((img, idx) => (
                  <div
                    key={idx}
                    className={`relative aspect-[16/10] bg-[#1B2028] border border-white/[0.08] overflow-hidden group shadow-xl ${
                      idx % 5 === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/9]" : ""
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${property.title} view ${idx + 1}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="absolute bottom-3 left-3 px-2 py-1 bg-[#07090D]/90 backdrop-blur-md font-mono text-[9px] uppercase tracking-wider text-[#93C8FF] opacity-0 group-hover:opacity-100 transition-opacity">
                      PLATE {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* COMPLEMENTARY PORTFOLIO OPPORTUNITIES                    */}
        {/* ======================================================== */}
        {relatedProperties.length > 0 && (
          <section className="py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-b border-white/[0.08] bg-[#07090D]">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="space-y-2 border-b border-white/[0.08] pb-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#93C8FF] block font-semibold">
                  CURATED ADVISORY SELECTION
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F4EF]">
                  Complementary Portfolio Opportunities
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                {relatedProperties.map((rel, idx) => (
                  <SupportingPropertyCard key={rel.id} property={rel} index={idx + 1} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* BESPOKE PRIVATE CLIENT INQUIRY CADRAN                    */}
        {/* ======================================================== */}
        <CTASection
          eyebrow="CONFIDENTIAL ACQUISITION MANDATE"
          title={`Inquire Regarding ${property.title}`}
          description="Whether conducting pre-acquisition forensic due diligence, structuring holding vehicles, or executing single-client private placement, contact Cristian Văduva directly."
          primaryActionText="SCHEDULE CONFIDENTIAL CONSULTATION"
          primaryActionHref={`/contact?property=${encodeURIComponent(property.title)}`}
          secondaryActionText="WHATSAPP ADVISORY DESK"
          secondaryActionHref="https://wa.me/436509536345"
        />
      </main>

      <Footer />
    </div>
  );
}

