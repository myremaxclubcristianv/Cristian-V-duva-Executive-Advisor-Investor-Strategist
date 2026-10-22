import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Lock, Calendar, Phone } from "lucide-react";

interface ActionItem {
  label: string;
  href: string;
}

interface ClosingFrameProps {
  category?: string;
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  primaryAction?: ActionItem;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  secondaryAction?: ActionItem;
  phoneText?: string;
  imageSrc?: string;
  className?: string;
}

export default function ClosingFrame({
  category = "CONCLUSION & PRIVATE ENGAGEMENT",
  title = "Are you prepared to discuss your next strategic real estate decision?",
  description = "Every mandate is led personally by Cristian Văduva. We provide an initial confidential 20-minute preliminary review to evaluate project compatibility with our representation standards.",
  primaryCtaText,
  primaryCtaHref,
  primaryAction,
  secondaryCtaText,
  secondaryCtaHref,
  secondaryAction,
  phoneText = "+43 650 953 6345",
  imageSrc = "/residence/terrace.png",
  className = "",
}: ClosingFrameProps) {
  const pText = primaryAction?.label || primaryCtaText || "REQUEST CONSULTATION (20 MIN)";
  const pHref = primaryAction?.href || primaryCtaHref || "/programare";
  const sText = secondaryAction?.label || secondaryCtaText || "ADVISORY PROTOCOL: METHODOLOGY & PHASES";
  const sHref = secondaryAction?.href || secondaryCtaHref || "/cum-lucrez";
  return (
    <section
      className={`relative w-full p-8 sm:p-14 lg:p-20 bg-[#07090D] border border-white/[0.1] overflow-hidden rounded-3xl shadow-2xl ${className}`}
    >
      {/* Background Architectural Ambient Image */}
      {imageSrc && (
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <Image
            src={imageSrc}
            alt="Architectural Terrace"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-[#07090D]/85 to-[#07090D]" />
        </div>
      )}

      {/* Decorative architectural grid lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#93C8FF]/40 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/[0.04] border border-white/[0.08] font-mono text-[10px] uppercase tracking-[0.26em] text-[#A97F60] rounded-full">
          <Lock className="w-3 h-3 text-[#93C8FF]" />
          <span>{category}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EF] font-normal tracking-tight leading-[1.14]">
          {title}
        </h2>

        <p className="font-sans text-base sm:text-lg text-[#B8C2CF] max-w-2xl mx-auto leading-relaxed font-light">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href={pHref}
            className="btn-apple-pill-primary inline-flex items-center gap-2 min-h-[48px]"
          >
            <Calendar className="w-4 h-4 text-[#07090D]" />
            <span>{pText}</span>
            <ArrowUpRight className="w-4 h-4 text-[#07090D]" />
          </Link>

          <Link
            href={sHref}
            className="btn-apple-pill-secondary inline-flex items-center gap-2 min-h-[48px]"
          >
            <span>{sText}</span>
          </Link>
        </div>

        {/* Security & Direct Desk Disclaimers */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-[#8E9AA8] uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />
            <span>STRICT CONFIDENTIALITY (BILATERAL NDA AVAILABLE ON REQUEST)</span>
          </div>

          <div className="flex items-center gap-4 text-[#8A95A5]">
            <a
              href={`tel:${phoneText.replace(/\s+/g, "")}`}
              className="hover:text-[#93C8FF] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              <span>{phoneText}</span>
            </a>
            <span>·</span>
            <span>BUCHAREST · VIENNA · LONDON</span>
          </div>
        </div>
      </div>
    </section>
  );
}
