import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";
import { ArrowUpRight, MapPin, ShieldCheck, CheckCircle2 } from "lucide-react";
import EditorialText from "./EditorialText";

interface PropertyFeatureProps {
  property: Property;
  reversed?: boolean;
  className?: string;
}

export default function PropertyFeature({
  property,
  reversed = false,
  className = "",
}: PropertyFeatureProps) {
  return (
    <article
      className={`border border-white/[0.1] bg-[#0C1119] p-6 sm:p-10 lg:p-12 space-y-8 lg:space-y-10 shadow-2xl relative overflow-hidden ${className}`}
    >
      {/* Top Meta Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 font-mono text-[10px] sm:text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
          <span className="uppercase tracking-[0.25em] text-[#93C8FF] font-semibold">
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

      {/* Main Grid: Visual & Editorial Specifications */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Visual Column */}
        <div className={`lg:col-span-6 space-y-4 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative aspect-[16/10] w-full border border-white/[0.12] bg-[#1B2028] overflow-hidden shadow-2xl group">
            <Image
              src={property.heroImage}
              alt={property.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Price Floating Tag */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 bg-[#07090D]/90 backdrop-blur-md border border-white/[0.12]">
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#8A95A5] block">
                  VALOARE ESTIMATĂ / STATUT
                </span>
                <span className="font-serif text-xl sm:text-2xl text-[#93C8FF] font-medium">
                  {property.price}
                </span>
              </div>
              <div className="text-right">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#8A95A5] block">
                  SUPRAFAȚĂ
                </span>
                <span className="font-mono text-xs sm:text-sm text-[#F5F4EF]">
                  {property.area}
                </span>
              </div>
            </div>
          </div>

          {/* Additional Gallery Strip if available */}
          {property.galleryImages && property.galleryImages.length > 1 && (
            <div className="grid grid-cols-4 gap-2 pt-1">
              {property.galleryImages.slice(1, 5).map((img, i) => (
                <div key={i} className="relative aspect-[4/3] border border-white/[0.08] overflow-hidden bg-[#1B2028]">
                  <Image
                    src={img}
                    alt={`${property.title} detail ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 25vw, 12vw"
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Editorial Information Column */}
        <div className={`lg:col-span-6 space-y-6 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
          <div className="space-y-3">
            {property.subtitle && (
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                {property.subtitle}
              </span>
            )}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F4EF] leading-snug">
              {property.title}
            </h3>
            <EditorialText size="base" maxWidth="prose" color="secondary">
              {property.description}
            </EditorialText>
          </div>

          {/* Specifications Matrix */}
          {property.specs && property.specs.length > 0 && (
            <div className="grid grid-cols-2 gap-3 p-4 sm:p-5 border border-white/[0.08] bg-[#1B2028]/70">
              {property.specs.map((spec, idx) => (
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
                SPECIFICAȚII SEMNĂTURĂ:
              </span>
              <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-[#B8C2CF]/90 font-light">
                {property.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Advisory Positioning Box */}
          <div className="p-4 border-l-2 border-[#93C8FF] bg-[#07090D] space-y-1.5">
            <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#93C8FF] font-semibold block flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3" />
              <span>PERSPECTIVĂ DE CONSULTANȚĂ FIDUCIARĂ</span>
            </span>
            <p className="font-serif italic text-sm sm:text-base text-[#D8D0C2] leading-relaxed">
              &ldquo;{property.advisoryPerspective}&rdquo;
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all text-center flex items-center justify-center gap-2 shadow-xl"
            >
              <span>SOLICITĂ DOSAR CONFIDENȚIAL</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={property.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] hover:text-[#93C8FF] flex items-center justify-center gap-1.5 transition-colors py-2"
            >
              <span>Sursa: {property.sourceName}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#93C8FF]" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
