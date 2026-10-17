import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, MapPin, Layers, Info } from "lucide-react";
import EditorialText from "./EditorialText";

interface ProjectFeatureProps {
  title: string;
  subtitle?: string;
  location: string;
  phase: string;
  unitsSummary: string;
  description: string;
  developerNote?: string;
  image: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  sourceUrl?: string;
  sourceName?: string;
  className?: string;
}

export default function ProjectFeature({
  title,
  subtitle,
  location,
  phase,
  unitsSummary,
  description,
  developerNote,
  image,
  specs,
  highlights,
  sourceUrl = "https://homefind.cristianvaduva.com",
  sourceName = "HomeFind Developments",
  className = "",
}: ProjectFeatureProps) {
  return (
    <article
      className={`border border-white/[0.1] bg-[#0C1119] p-6 sm:p-10 lg:p-14 space-y-10 shadow-2xl relative overflow-hidden ${className}`}
    >
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 font-mono text-[10px] sm:text-xs">
        <div className="flex items-center gap-3">
          <Layers className="w-4 h-4 text-[#A97F60]" />
          <span className="uppercase tracking-[0.25em] text-[#A97F60] font-semibold">
            {phase}
          </span>
          <span className="text-white/20">·</span>
          <span className="text-[#8A95A5]">{unitsSummary}</span>
        </div>

        <div className="flex items-center gap-2 text-[#B8C2CF]">
          <MapPin className="w-3.5 h-3.5 text-[#93C8FF]" />
          <span>{location}</span>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Visual */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[16/10] w-full border border-white/[0.12] bg-[#1B2028] overflow-hidden shadow-2xl group">
            <Image
              src={image}
              alt={title}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/85 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-4 left-4 px-3 py-1 bg-[#07090D]/90 border border-white/[0.12] font-mono text-[9px] uppercase tracking-widest text-[#93C8FF]">
              VERIFIED DEVELOPMENT MASTERPLAN
            </div>
          </div>
        </div>

        {/* Right Column: Editorial & Specs */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-3">
            {subtitle && (
              <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-[#A97F60] font-semibold block">
                {subtitle}
              </span>
            )}
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F4EF] leading-snug">
              {title}
            </h3>
            <EditorialText size="base" maxWidth="prose" color="secondary" className="leading-relaxed">
              {description}
            </EditorialText>
          </div>

          {/* Specs Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 sm:p-5 border border-white/[0.08] bg-[#1B2028]/70">
            {specs.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#8A95A5] block">
                  {item.label}
                </span>
                <span className="font-mono text-xs text-[#F5F4EF] font-medium">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B8C2CF] block font-semibold">
              STRUCTURAL INFRASTRUCTURE HIGHLIGHTS:
            </span>
            <ul className="space-y-1.5 font-sans text-xs sm:text-sm text-[#B8C2CF]/90 font-light">
              {highlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#93C8FF] font-mono text-xs">▸</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Documentation Disclaimer */}
          {developerNote && (
            <div className="p-4 border-l-2 border-[#A97F60] bg-[#07090D] flex items-start gap-2.5 text-xs text-[#B8C2CF] font-light leading-relaxed">
              <Info className="w-4 h-4 text-[#A97F60] shrink-0 mt-0.5" />
              <span>{developerNote}</span>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
            <Link
              href="/contact"
              prefetch={false}
              className="px-7 py-3.5 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-bold transition-all text-center flex items-center justify-center gap-2 shadow-xl min-h-[48px]"
            >
              <span className="text-[#07090D] font-bold">REQUEST INVESTMENT MEMORANDUM</span>
              <ArrowUpRight className="w-4 h-4 text-[#07090D]" />
            </Link>

            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-wider text-[#B8C2CF] hover:text-[#93C8FF] flex items-center justify-center gap-1.5 transition-colors py-2 min-h-[44px]"
            >
              <span>{sourceName}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#93C8FF]" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
