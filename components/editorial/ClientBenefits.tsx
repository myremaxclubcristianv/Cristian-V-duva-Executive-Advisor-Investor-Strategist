"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Building2,
  TrendingUp,
  Key,
  Compass,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { useLocale } from "@/app/context/LocaleContext";
import { CLIENT_BENEFITS_TRANSLATIONS } from "@/lib/content/editorialTranslations";

interface ClientBenefitsProps {
  className?: string;
}

type CategoryKey = "buyers" | "sellers" | "landlords" | "investors";

const CATEGORY_ICONS: Record<CategoryKey, typeof Compass> = {
  buyers: Compass,
  sellers: Building2,
  landlords: Key,
  investors: TrendingUp,
};

const CATEGORY_KEYS: CategoryKey[] = ["buyers", "sellers", "landlords", "investors"];

export default function ClientBenefits({ className = "" }: ClientBenefitsProps) {
  const { locale } = useLocale();
  const t = CLIENT_BENEFITS_TRANSLATIONS[locale] || CLIENT_BENEFITS_TRANSLATIONS.en;
  const isRtl = locale === "ar";

  const [activeCategory, setActiveCategory] = useState<CategoryKey>("buyers");

  const currentCategory = t.categories[activeCategory] || t.categories.buyers;

  return (
    <section
      id="benefits"
      dir={isRtl ? "rtl" : "ltr"}
      className={`py-24 sm:py-32 lg:py-40 bg-[#07090D] text-[#F5F4EF] border-b border-white/[0.08] relative overflow-hidden ${className}`}
    >
      <div className="site-container relative z-10 space-y-16 sm:space-y-24">
        
        {/* Header */}
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

          <div className="shrink-0 flex flex-col items-start md:items-end gap-1">
            <span className="font-mono text-xs text-[#93C8FF] tracking-wider uppercase font-semibold">
              {t.badge}
            </span>
            <span className="font-mono text-[11px] text-[#86868B]">
              {t.badgeSub}
            </span>
          </div>
        </div>

        {/* Category Selector Tabs (Apple-Style Segmented Pills) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORY_KEYS.map((key) => {
            const cat = t.categories[key];
            const isActive = activeCategory === key;
            const Icon = CATEGORY_ICONS[key];
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                className={`p-5 rounded-2xl text-left rtl:text-right transition-all border flex flex-col justify-between gap-3 ${
                  isActive
                    ? "bg-[#F5F4EF] text-[#07090D] border-[#F5F4EF] shadow-xl"
                    : "bg-[#0C1119] text-[#86868B] border-white/[0.08] hover:border-white/[0.2] hover:text-[#F5F4EF]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#07090D]" : "text-[#A97F60]"}`} />
                  <span className={`text-[9px] uppercase tracking-widest font-mono ${isActive ? "text-[#07090D]/70 font-semibold" : "text-[#86868B]"}`}>
                    {cat.sublabel}
                  </span>
                </div>
                <span className={`text-xs sm:text-sm font-semibold tracking-tight ${isActive ? "text-[#07090D]" : "text-[#F5F4EF]"}`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display (Apple Rounded-3xl Monolith) */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl border border-white/[0.08] bg-[#0C1119] shadow-2xl relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Narrative Headline */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-[#A97F60] uppercase tracking-[0.24em] font-semibold block">
                  {t.objectiveTag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF] leading-snug">
                  {currentCategory.headline}
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-[#86868B] font-light leading-relaxed">
                {currentCategory.description}
              </p>

              <div className="pt-4 border-t border-white/[0.08]">
                <Link
                  href={currentCategory.ctaLink}
                  className="btn-apple-pill-primary inline-flex items-center gap-2"
                >
                  <span>{currentCategory.ctaText}</span>
                  <ArrowRight className={`w-3.5 h-3.5 text-[#07090D] ${isRtl ? "rotate-180" : ""}`} />
                </Link>
              </div>
            </div>

            {/* Right Column: Concrete Benefits */}
            <div className="lg:col-span-7 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#86868B] block pb-2 border-b border-white/[0.06]">
                {t.concreteTag}
              </span>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 pt-2">
                {currentCategory.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="space-y-2 pb-4 border-b border-white/[0.04] last:border-b-0"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#93C8FF] shrink-0" />
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[#93C8FF] font-semibold">
                        BENEFICIU 0{idx + 1}
                      </span>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
