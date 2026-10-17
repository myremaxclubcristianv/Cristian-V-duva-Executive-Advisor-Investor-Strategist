import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";
import { ArrowUpRight, MapPin, Maximize2 } from "lucide-react";
import EditorialText from "./EditorialText";

interface SupportingPropertyCardProps {
  property: Property;
  index?: number;
  className?: string;
}

/**
 * SupportingPropertyCard (Grid Cadran)
 * Architectural card with fine borders, corner tick marks,
 * 16:10 proportional image, specs row, and direct monograph action.
 */
export default function SupportingPropertyCard({
  property,
  index,
  className = "",
}: SupportingPropertyCardProps) {
  const formattedIndex = index !== undefined ? (index < 10 ? `0${index}` : `${index}`) : undefined;
  const photosCount = property.galleryImages?.length || 1;

  return (
    <article
      className={`relative border border-white/[0.1] bg-[#0C1119] hover:border-[#93C8FF]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:-translate-y-1 ${className}`}
    >
      {/* Corner Architectural Ticks */}
      <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-[#93C8FF]/40 group-hover:border-[#93C8FF] pointer-events-none z-10 transition-colors" />
      <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-[#93C8FF]/40 group-hover:border-[#93C8FF] pointer-events-none z-10 transition-colors" />
      <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-[#93C8FF]/40 group-hover:border-[#93C8FF] pointer-events-none z-10 transition-colors" />
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-[#93C8FF]/40 group-hover:border-[#93C8FF] pointer-events-none z-10 transition-colors" />

      <div>
        {/* Consistent 16:10 Image Aperture */}
        <div className="relative aspect-[16/10] w-full bg-[#121721] overflow-hidden border-b border-white/[0.06]">
          <Link href={`/real-estate/properties/${property.id}`} prefetch={false} className="block relative w-full h-full">
            <Image
              src={property.heroImage}
              alt={property.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-75 group-hover:opacity-40 transition-opacity" />
          </Link>

          {/* Type Badge & Status */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            {formattedIndex && (
              <span className="px-2 py-0.5 bg-[#07090D]/90 backdrop-blur-md border border-[#93C8FF]/30 font-mono text-[9px] font-bold text-[#93C8FF]">
                NO. {formattedIndex}
              </span>
            )}
            <span className="px-2 py-0.5 bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1] font-mono text-[9px] uppercase tracking-wider text-[#93C8FF]">
              {property.type}
            </span>
          </div>

          <div className="absolute top-3 right-3">
            <span className="px-2 py-0.5 bg-[#07090D]/85 backdrop-blur-md border border-white/[0.08] font-mono text-[8px] uppercase tracking-wider text-[#B8C2CF]">
              {photosCount} PHOTOS
            </span>
          </div>

          {/* Area & Price Floating Pill */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-[#F5F4EF] p-2.5 bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1]">
            <span className="text-[#93C8FF] font-medium font-serif text-base">
              {property.price}
            </span>
            <span className="text-[#8A95A5] text-[11px] flex items-center gap-1">
              <Maximize2 className="w-3 h-3 text-[#A97F60]" />
              <span>{property.area}</span>
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs text-[#A97F60] font-mono">
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{property.location}</span>
            </div>

            <h3 className="font-serif text-xl text-[#F5F4EF] group-hover:text-[#93C8FF] transition-colors leading-snug line-clamp-2">
              <Link href={`/real-estate/properties/${property.id}`}>
                {property.title}
              </Link>
            </h3>
          </div>

          <EditorialText size="sm" maxWidth="full" color="secondary" className="line-clamp-2 leading-relaxed text-xs sm:text-sm font-light">
            {property.description}
          </EditorialText>

          {/* Restrained Row of Specifications */}
          {property.specs && property.specs.length > 0 && (
            <div className="pt-3 border-t border-white/[0.06] grid grid-cols-2 gap-2 font-mono text-[10px]">
              {property.specs.slice(0, 2).map((s, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="text-[#8A95A5] uppercase text-[9px] tracking-wider block">{s.label}</span>
                  <span className="text-[#F5F4EF] truncate block font-medium">{s.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Action */}
      <div className="p-6 pt-0">
        <Link
          href={`/real-estate/properties/${property.id}`}
          prefetch={false}
          className="w-full py-3.5 border border-white/[0.12] hover:border-[#93C8FF] hover:bg-[#93C8FF] hover:text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 group/btn min-h-[44px]"
        >
          <span>VIEW MONOGRAPH & SPECS</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
