import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";
import { ArrowUpRight, MapPin, Maximize } from "lucide-react";
import EditorialText from "./EditorialText";
import EditorialCadran from "./EditorialCadran";

interface PropertySplitCadranProps {
  propertyA: Property;
  propertyB: Property;
  indexA?: number;
  indexB?: number;
  className?: string;
}

/**
 * PropertySplitCadran
 * Architectural two-column spread pairing two complementary luxury properties.
 * Creates editorial rhythm by varying composition across the catalog stream.
 */
export default function PropertySplitCadran({
  propertyA,
  propertyB,
  indexA = 1,
  indexB = 2,
  className = "",
}: PropertySplitCadranProps) {
  const renderItem = (property: Property, index: number, accent: "ice" | "copper") => {
    const formattedIndex = index < 10 ? `0${index}` : `${index}`;
    const photosCount = property.galleryImages?.length || 1;

    return (
      <EditorialCadran
        watermarkNumber={formattedIndex}
        accentColor={accent}
        surface="midnight"
        className="flex flex-col justify-between h-full p-6 sm:p-8 space-y-6"
      >
        <div className="space-y-6">
          {/* Top Meta Bar */}
          <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-4 font-mono text-[10px] sm:text-xs">
            <div className="flex items-center gap-2">
              <span
                className={`px-2 py-0.5 border font-bold uppercase tracking-[0.2em] ${
                  accent === "ice"
                    ? "bg-[#93C8FF]/15 border-[#93C8FF]/30 text-[#93C8FF]"
                    : "bg-[#A97F60]/15 border-[#A97F60]/30 text-[#A97F60]"
                }`}
              >
                № {formattedIndex}
              </span>
              <span className="text-[#8A95A5] uppercase tracking-wider">{property.type}</span>
            </div>

            <div className="flex items-center gap-1.5 text-[#B8C2CF]">
              <MapPin className="w-3.5 h-3.5 text-[#A97F60]" />
              <span className="truncate max-w-[150px]">{property.location}</span>
            </div>
          </div>

          {/* Image Aperture */}
          <div className="relative aspect-[16/10] w-full bg-[#1B2028] border border-white/[0.1] overflow-hidden group">
            <Link href={`/real-estate/properties/${property.id}`} className="block relative w-full h-full">
              <Image
                src={property.heroImage}
                alt={property.title}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/85 via-transparent to-transparent pointer-events-none" />
            </Link>

            {/* Price & Footprint Floating Bar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1] font-mono text-xs">
              <span className="text-[#93C8FF] font-medium font-serif text-base sm:text-lg">
                {property.price}
              </span>
              <span className="text-[#8A95A5] text-[11px]">{property.area}</span>
            </div>

            {/* Photo count pill */}
            <div className="absolute top-3 right-3 px-2 py-1 bg-[#07090D]/80 backdrop-blur-md border border-white/[0.08] font-mono text-[9px] text-[#B8C2CF] uppercase">
              {photosCount} PHOTOS
            </div>
          </div>

          {/* Typography & Content */}
          <div className="space-y-3">
            {property.subtitle && (
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                {property.subtitle}
              </span>
            )}
            <h4 className="font-serif text-xl sm:text-2xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
              <Link href={`/real-estate/properties/${property.id}`}>
                {property.title}
              </Link>
            </h4>
            <EditorialText size="sm" maxWidth="full" color="secondary" className="line-clamp-3 leading-relaxed">
              {property.description}
            </EditorialText>
          </div>

          {/* Quick Specifications Matrix */}
          {property.specs && property.specs.length > 0 && (
            <div className="grid grid-cols-2 gap-2 p-3.5 border border-white/[0.06] bg-[#1B2028]/60 font-mono text-[10px]">
              {property.specs.slice(0, 4).map((s, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="text-[#647082] uppercase text-[9px] tracking-wider block">
                    {s.label}
                  </span>
                  <span className="text-[#B8C2CF] font-medium truncate block">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-white/[0.08]">
          <Link
            href={`/real-estate/properties/${property.id}`}
            className="w-full py-3.5 border border-white/[0.12] hover:border-[#93C8FF] hover:bg-[#93C8FF] hover:text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2"
          >
            <span>VIEW MONOGRAPH & SPECS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </EditorialCadran>
    );
  };

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 ${className}`}>
      {renderItem(propertyA, indexA, "ice")}
      {renderItem(propertyB, indexB, "copper")}
    </div>
  );
}
