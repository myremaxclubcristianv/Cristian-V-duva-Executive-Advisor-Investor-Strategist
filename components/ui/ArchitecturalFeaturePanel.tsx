import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

interface FeatureBullet {
  title: string;
  desc?: string;
}

interface ArchitecturalFeaturePanelProps {
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
  imagePosition?: "left" | "right";
  bullets?: FeatureBullet[];
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  accentBadge?: string;
  stats?: { value: string; label: string }[];
  className?: string;
}

export default function ArchitecturalFeaturePanel({
  tag,
  title,
  description,
  imageSrc,
  imageAlt,
  imageCaption,
  imagePosition = "right",
  bullets,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  accentBadge,
  stats,
  className = "",
}: ArchitecturalFeaturePanelProps) {
  const isImageRight = imagePosition === "right";

  return (
    <div
      className={`relative w-full p-6 sm:p-10 lg:p-14 bg-[#0C1119] border border-white/[0.08] overflow-hidden ${className}`}
    >
      {/* Background architectural glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#93C8FF]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Content Column */}
        <div
          className={`space-y-6 lg:col-span-7 ${
            isImageRight ? "order-1" : "order-1 lg:order-2"
          }`}
        >
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#A97F60] font-semibold">
                {tag}
              </span>
              {accentBadge && (
                <span className="px-2 py-0.5 bg-[#93C8FF]/10 border border-[#93C8FF]/30 font-mono text-[9px] uppercase tracking-[0.2em] text-[#93C8FF]">
                  {accentBadge}
                </span>
              )}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F4EF] font-normal leading-[1.18]">
              {title}
            </h3>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#8A95A5] leading-relaxed">
            {description}
          </p>

          {bullets && bullets.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-white/[0.08]">
              {bullets.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#93C8FF] shrink-0 mt-0.5" />
                  <div className="font-sans text-xs sm:text-sm">
                    <span className="text-[#F5F4EF] font-medium">{b.title}</span>
                    {b.desc && <span className="text-[#8A95A5]"> — {b.desc}</span>}
                  </div>
                </div>
              ))}
            </div>
          )}

          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
              {stats.map((s, idx) => (
                <div key={idx} className="p-3 bg-black/40 border border-white/[0.05] space-y-1">
                  <span className="font-serif text-xl sm:text-2xl text-[#93C8FF] block">
                    {s.value}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#8A95A5] block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {ctaText && ctaHref && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#07090D] font-mono text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#F5F4EF] transition-colors"
                >
                  <span>{ctaText}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
              {secondaryCtaText && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/[0.15] bg-[#07090D] text-[#F5F4EF] font-mono text-xs uppercase tracking-[0.2em] hover:border-[#93C8FF] transition-colors"
                >
                  <span>{secondaryCtaText}</span>
                </Link>
              )}
            </div>
          )}
        </div>

        {/* Visual Column */}
        <div
          className={`space-y-3 lg:col-span-5 ${
            isImageRight ? "order-2" : "order-2 lg:order-1"
          }`}
        >
          <div className="relative aspect-[4/5] bg-black border border-white/[0.1] overflow-hidden group shadow-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-80" />
            {imageCaption && (
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-[#07090D]/90 backdrop-blur-md border border-white/10 font-mono text-[11px] text-[#E1E4EA] flex items-center justify-between">
                <span>{imageCaption}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
