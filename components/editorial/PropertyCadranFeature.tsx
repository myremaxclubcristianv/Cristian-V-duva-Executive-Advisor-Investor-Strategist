import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";
import { ArrowUpRight, MapPin, ShieldCheck, CheckCircle2, Maximize2, Compass } from "lucide-react";
import EditorialText from "./EditorialText";
import EditorialCadran from "./EditorialCadran";

interface PropertyCadranFeatureProps {
  property: Property;
  index?: number;
  reversed?: boolean;
  className?: string;
}

/**
 * PropertyCadranFeature
 * Signature Property Presentation framed in an architectural cadran.
 * Combines a cinematic photographic aperture, asymmetric photo mosaic,
 * structured specification grid, and fiduciary advisory commentary.
 */
export default function PropertyCadranFeature({
  property,
  index = 1,
  reversed = false,
  className = "",
}: PropertyCadranFeatureProps) {
  const formattedIndex = index < 10 ? `0${index}` : `${index}`;
  const totalPhotos = property.galleryImages?.length || 1;

  return (
    <EditorialCadran
      watermarkNumber={formattedIndex}
      accentColor="ice"
      surface="midnight"
      className={`p-6 sm:p-10 lg:p-12 space-y-8 sm:space-y-10 ${className}`}
    >
      {/* Top Meta Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-5 font-mono text-[10px] sm:text-xs">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 bg-[#93C8FF]/15 border border-[#93C8FF]/30 text-[#93C8FF] font-bold tracking-[0.2em] uppercase">
            № {formattedIndex}
          </span>
          <span className="text-white/20">/</span>
          <span className="uppercase tracking-[0.22em] text-[#93C8FF] font-medium">
            {property.type}
          </span>
          <span className="text-white/20">·</span>
          <span className="text-[#8A95A5] uppercase tracking-wider">{property.status}</span>
        </div>

        <div className="flex items-center gap-2 text-[#B8C2CF]">
          <MapPin className="w-3.5 h-3.5 text-[#A97F60]" />
          <span className="tracking-wider">{property.location}</span>
        </div>
      </div>

      {/* Main Asymmetric Grid */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Photographic Column (~58% on desktop) */}
        <div className={`lg:col-span-7 space-y-4 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
          {/* Main Cinematic Aperture */}
          <div className="relative aspect-[16/10] w-full border border-white/[0.12] bg-[#1B2028] overflow-hidden group shadow-2xl">
            {/* Architectural Frame Crosshairs */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/40 z-10 pointer-events-none" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/40 z-10 pointer-events-none" />

            <Link href={`/real-estate/properties/${property.id}`} className="block relative w-full h-full">
              <Image
                src={property.heroImage}
                alt={property.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/90 via-transparent to-transparent pointer-events-none" />
            </Link>

            {/* Floating Price & Footprint Rail */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-4 bg-[#07090D]/92 backdrop-blur-md border border-white/[0.12]">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#8A95A5] block">
                  VALUATION BENCHMARK
                </span>
                <span className="font-serif text-xl sm:text-2xl text-[#93C8FF] font-medium">
                  {property.price}
                </span>
              </div>
              <div className="text-right">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#8A95A5] block">
                  VERIFIED FOOTPRINT
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#F5F4EF]">
                  {property.area}
                </span>
              </div>
            </div>
          </div>

          {/* Asymmetric Gallery Strip */}
          {property.galleryImages && property.galleryImages.length > 1 && (
            <div className="grid grid-cols-4 gap-2.5 pt-1">
              {property.galleryImages.slice(1, 5).map((img, i) => (
                <Link
                  key={i}
                  href={`/real-estate/properties/${property.id}`}
                  className="relative aspect-[4/3] border border-white/[0.08] overflow-hidden bg-[#1B2028] block group/thumb"
                >
                  <Image
                    src={img}
                    alt={`${property.title} photograph ${i + 2}`}
                    fill
                    sizes="(max-width: 1024px) 25vw, 15vw"
                    className="object-cover group-hover/thumb:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-transparent transition-colors" />
                  <span className="absolute bottom-1 right-1 font-mono text-[8px] px-1 bg-[#07090D]/80 text-[#B8C2CF]">
                    0{i + 2}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Editorial Information Column (~42% on desktop) */}
        <div className={`lg:col-span-5 space-y-6 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
          <div className="space-y-3">
            {property.subtitle && (
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                {property.subtitle}
              </span>
            )}
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] leading-snug">
              <Link
                href={`/real-estate/properties/${property.id}`}
                className="hover:text-[#93C8FF] transition-colors"
              >
                {property.title}
              </Link>
            </h3>
            <EditorialText size="base" maxWidth="prose" color="secondary" className="leading-relaxed">
              {property.description}
            </EditorialText>
          </div>

          {/* Technical Specifications Matrix */}
          {property.specs && property.specs.length > 0 && (
            <div className="grid grid-cols-2 gap-3 p-4 sm:p-5 border border-white/[0.08] bg-[#1B2028]/70">
              {property.specs.slice(0, 4).map((spec, idx) => (
                <div key={idx} className="space-y-1 border-b border-white/[0.04] pb-2 last:border-0">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A95A5] block">
                    {spec.label}
                  </span>
                  <span className="font-mono text-xs text-[#F5F4EF] font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Key Features Bullet List */}
          {property.features && property.features.length > 0 && (
            <div className="space-y-2 pt-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8C2CF] block font-semibold">
                ARCHITECTURAL SPECIFICATIONS:
              </span>
              <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-[#B8C2CF]/90 font-light">
                {property.features.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Fiduciary Advisory Positioning Box */}
          <div className="p-4 border-l-2 border-[#93C8FF] bg-[#07090D] space-y-1.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#93C8FF] font-semibold block flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3" />
              <span>FIDUCIARY ADVISORY THESIS</span>
            </span>
            <p className="font-serif italic text-sm text-[#D8D0C2] leading-relaxed">
              &ldquo;{property.advisoryPerspective}&rdquo;
            </p>
          </div>

          {/* Action Row */}
          <div className="space-y-3 pt-4 border-t border-white/[0.08]">
            <div className="grid sm:grid-cols-2 gap-3">
              <Link
                href={`/real-estate/properties/${property.id}`}
                className="px-5 py-3.5 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-[11px] uppercase tracking-[0.18em] font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-xl"
              >
                <span>VIEW MONOGRAPH ({totalPhotos} PHOTOS)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href={`/contact?property=${encodeURIComponent(property.title)}`}
                className="px-5 py-3.5 border border-white/[0.16] hover:border-[#93C8FF] hover:bg-[#93C8FF]/10 text-[#F5F4EF] hover:text-[#93C8FF] font-mono text-[11px] uppercase tracking-[0.18em] font-semibold transition-all text-center flex items-center justify-center gap-1.5"
              >
                <span>REQUEST DOSSIER</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] text-[#8A95A5] pt-1">
              <span>Platform: {property.sourcePlatform || "Executive"}</span>
              <a
                href={property.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#93C8FF] flex items-center gap-1 transition-colors"
              >
                <span>Source: {property.sourceName}</span>
                <ArrowUpRight className="w-3 h-3 text-[#93C8FF]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </EditorialCadran>
  );
}
