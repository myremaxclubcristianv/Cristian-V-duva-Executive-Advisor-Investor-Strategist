"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, Calendar, FileSearch } from "lucide-react";
import { useLocale } from "@/app/context/LocaleContext";
import { DIFFERENCE_TRANSLATIONS } from "@/lib/content/editorialTranslations";

interface RepresentationDifferenceProps {
  className?: string;
}

export default function RepresentationDifference({
  className = "",
}: RepresentationDifferenceProps) {
  const { locale } = useLocale();
  const t = DIFFERENCE_TRANSLATIONS[locale] || DIFFERENCE_TRANSLATIONS.en;
  const isRtl = locale === "ar";

  return (
    <section
      id="difference"
      dir={isRtl ? "rtl" : "ltr"}
      className={`py-24 sm:py-32 lg:py-40 bg-[#07090D] text-[#F5F4EF] border-b border-white/[0.08] relative overflow-hidden ${className}`}
    >
      <div className="site-container relative z-10 space-y-16 sm:space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-xs text-[#A97F60] uppercase tracking-[0.24em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60]" />
              <span>{t.eyebrow}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal leading-tight tracking-tight">
              {t.title}
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#86868B] font-light leading-relaxed pt-1">
              {t.description}
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-[#86868B]">
            <span className="text-[#93C8FF] uppercase tracking-wider">{t.badge}</span>
          </div>
        </div>

        {/* Comparative Ledger Table (Apple Architectural Comparison) */}
        <div className="border border-white/[0.08] bg-[#0C1119] rounded-3xl overflow-hidden shadow-2xl">
          {/* Table Column Headers (Desktop) */}
          <div className="hidden lg:grid grid-cols-12 border-b border-white/[0.08] bg-[#07090D]/80 px-8 py-5 font-mono text-xs uppercase tracking-wider">
            <div className="col-span-3 text-[#A97F60] font-semibold">CRITERIU STRATEGIC</div>
            <div className="col-span-4 text-[#86868B] flex items-center gap-2 border-l border-white/[0.06] pl-6">
              <AlertTriangle className="w-3.5 h-3.5 text-red-400/80" />
              <span>{t.labelWithout}</span>
            </div>
            <div className="col-span-5 text-[#93C8FF] flex items-center gap-2 border-l border-white/[0.06] pl-6 bg-[#93C8FF]/[0.02]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF]" />
              <span>{t.labelWith}</span>
            </div>
          </div>

          {/* Synchronized Comparison Rows */}
          <div className="divide-y divide-white/[0.06]">
            {t.items.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-8 hover:bg-white/[0.02] transition-colors gap-4 lg:gap-0 items-start"
              >
                {/* Area Header */}
                <div className="lg:col-span-3 space-y-1">
                  <span className="font-mono text-[10px] text-[#A97F60] uppercase tracking-[0.2em] font-semibold block">
                    {`${String(idx + 1).padStart(2, "0")} // CRITERIU`}
                  </span>
                  <span className="font-serif text-lg text-[#F5F4EF] font-medium block">
                    {item.area}
                  </span>
                </div>

                {/* Without Representation (Traditional Risks) */}
                <div className="lg:col-span-4 lg:border-l lg:border-white/[0.06] lg:pl-6 space-y-1.5">
                  <div className="flex items-center gap-2 lg:hidden font-mono text-[10px] text-red-400 uppercase tracking-wider">
                    <AlertTriangle className="w-3 h-3 text-red-400" />
                    <span>{t.labelWithout}</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#86868B] font-light leading-relaxed">
                    {item.without}
                  </p>
                </div>

                {/* With Dedicated Representation */}
                <div className="lg:col-span-5 lg:border-l lg:border-white/[0.06] lg:pl-6 lg:bg-[#93C8FF]/[0.01] space-y-1.5">
                  <div className="flex items-center gap-2 lg:hidden font-mono text-[10px] text-[#93C8FF] uppercase tracking-wider font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-[#93C8FF]" />
                    <span>{t.labelWith}</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#F5F4EF] font-normal leading-relaxed">
                    {item.withRep}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Action Callouts (Open Editorial Rail) */}
        <div className="border-t border-white/[0.08] pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 font-mono text-xs">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[#A97F60] uppercase tracking-[0.24em] text-[10px] font-semibold block">
              {t.closingTag}
            </span>
            <p className="font-serif text-xl sm:text-2xl text-[#F5F4EF] font-normal">
              {t.closingTitle}
            </p>
            <p className="font-sans text-xs sm:text-sm text-[#86868B] font-light leading-relaxed">
              {t.closingDesc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href="/programare"
              className="btn-apple-pill-primary inline-flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5 text-[#07090D]" />
              <span>{t.closingPrimaryBtn}</span>
            </Link>

            <Link
              href="/contact?interest=Strategic%20consultation"
              className="btn-apple-pill-secondary inline-flex items-center gap-2"
            >
              <FileSearch className="w-3.5 h-3.5" />
              <span>{t.closingSecondaryBtn}</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
