"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  ArrowUpRight,
  ArrowRight,
  Home,
  Key,
  MapPin,
  Layers,
  Building,
} from "lucide-react";
import {
  homefindBuyProperties,
  homefindRentProperties,
  HomeFindListingItem,
} from "@/lib/homefindPortfolio";
import { useLocale } from "@/app/context/LocaleContext";
import { PORTFOLIO_TRANSLATIONS } from "@/lib/content/editorialTranslations";

interface HomeFindPortfolioProps {
  className?: string;
  defaultTab?: "all" | "buy" | "rent";
}

export default function HomeFindPortfolio({
  className = "",
  defaultTab = "all",
}: HomeFindPortfolioProps) {
  const { locale } = useLocale();
  const t = PORTFOLIO_TRANSLATIONS[locale] || PORTFOLIO_TRANSLATIONS.en;
  const isRtl = locale === "ar";

  const [activeTab, setActiveTab] = useState<"all" | "buy" | "rent">(defaultTab);

  const showBuy = activeTab === "all" || activeTab === "buy";
  const showRent = activeTab === "all" || activeTab === "rent";

  const renderCard = (prop: HomeFindListingItem) => (
    <div
      key={prop.id}
      className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0C1119] hover:border-white/[0.22] transition-all duration-300 relative group overflow-hidden shadow-xl hover:-translate-y-1"
    >
      <div>
        {/* Image Aperture */}
        <div className="relative w-full aspect-[4/3] bg-[#121721] overflow-hidden border-b border-white/[0.06]">
          <Image
            src={prop.image}
            alt={prop.title}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C1119] via-transparent to-transparent opacity-75 group-hover:opacity-40 transition-opacity" />

          {/* Top Badges (Rounded Pills) */}
          <div className={`absolute top-3 ${isRtl ? "right-3" : "left-3"} flex items-center gap-1.5`}>
            <span
              className={`px-2.5 py-0.5 rounded-full font-mono text-[9px] uppercase tracking-wider font-bold shadow-md ${
                prop.category === "rent"
                  ? "bg-[#A97F60] text-[#F5F4EF]"
                  : "bg-[#93C8FF] text-[#07090D]"
              }`}
            >
              {prop.category === "rent" ? t.badgeRent : t.badgeBuy}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-[#07090D]/85 backdrop-blur-md border border-white/10 font-mono text-[9px] text-[#B8C2CF] uppercase">
              {prop.type}
            </span>
          </div>

          {/* Price Tag Overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between">
            <span className="font-serif text-lg sm:text-xl text-[#F5F4EF] font-normal drop-shadow-md">
              {prop.displayPrice}
            </span>
            <span className="font-mono text-[9px] text-[#93C8FF] bg-[#07090D]/90 px-2.5 py-0.5 rounded-full border border-white/10 uppercase tracking-wider">
              {prop.status}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3.5">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#86868B]">
              <MapPin className="w-3 h-3 text-[#A97F60] shrink-0" />
              <span className="line-clamp-1">{prop.city}</span>
            </div>
            <h3 className="font-serif text-base sm:text-lg text-[#F5F4EF] font-normal leading-snug line-clamp-2 group-hover:text-[#93C8FF] transition-colors">
              {prop.title}
            </h3>
          </div>

          {/* Specs Rail */}
          <div className="pt-2 border-t border-white/[0.06] grid grid-cols-2 gap-2 font-mono text-[10px] text-[#B8C2CF]">
            <div>
              <span className="text-[#86868B] block text-[9px] uppercase">{t.labelSurface}</span>
              <span>{prop.surface}</span>
            </div>
            <div>
              <span className="text-[#86868B] block text-[9px] uppercase">{t.labelRooms}</span>
              <span>{prop.rooms}</span>
            </div>
          </div>

          <p className="font-sans text-xs text-[#86868B] line-clamp-2 leading-relaxed font-light pt-1">
            {prop.description}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-5 pt-0 space-y-2">
        <a
          href={prop.homefindUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-3 rounded-full border border-white/[0.12] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] font-sans text-xs font-medium flex items-center justify-center gap-1.5 transition-colors bg-white/[0.04]"
        >
          <span>{t.btnViewHomefind}</span>
          <ExternalLink className="w-3 h-3" />
        </a>

        <Link
          href={`/contact?interest=${prop.category === "rent" ? "Property%20sourcing" : "Buyer%20representation"}&property=${encodeURIComponent(prop.title)}`}
          className="w-full py-2.5 px-3 rounded-full bg-white/[0.03] hover:bg-[#93C8FF]/10 border border-white/[0.06] hover:border-[#93C8FF]/40 text-[#93C8FF] font-sans text-xs font-medium flex items-center justify-center gap-1 transition-colors"
        >
          <span>{t.btnRequestAssistance}</span>
          <ArrowUpRight className="w-3 h-3 text-[#93C8FF]" />
        </Link>
      </div>
    </div>
  );

  return (
    <section
      id="portfolio"
      dir={isRtl ? "rtl" : "ltr"}
      className={`py-24 sm:py-32 lg:py-40 bg-[#07090D] text-[#F5F4EF] border-b border-white/[0.08] relative overflow-hidden ${className}`}
    >
      <div className="site-container relative z-10 space-y-16 sm:space-y-24">
        
        {/* Section Master Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-xs text-[#A97F60] uppercase tracking-[0.24em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A97F60]" />
              <span>{t.eyebrow}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight leading-tight">
              {t.title}
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#86868B] font-light leading-relaxed pt-1">
              {t.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://homefind.cristianvaduva.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-apple-pill-secondary inline-flex items-center gap-2 text-xs"
            >
              <span>{t.openHomefind}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Category Filter Tabs (Apple Segmented Pill Control) */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex p-1 rounded-full bg-white/[0.06] border border-white/[0.1] gap-1" role="tablist" aria-label="Transaction Type">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "all"}
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-full font-sans text-xs font-medium transition-all flex items-center gap-2 ${
                activeTab === "all"
                  ? "bg-[#F5F4EF] text-[#07090D] shadow-md font-semibold"
                  : "text-[#86868B] hover:text-[#F5F4EF]"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t.tabAll}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === "all" ? "bg-black/10 text-black" : "bg-white/10 text-white/70"}`}>
                {homefindBuyProperties.length + homefindRentProperties.length}
              </span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "buy"}
              onClick={() => setActiveTab("buy")}
              className={`px-5 py-2 rounded-full font-sans text-xs font-medium transition-all flex items-center gap-2 ${
                activeTab === "buy"
                  ? "bg-[#F5F4EF] text-[#07090D] shadow-md font-semibold"
                  : "text-[#86868B] hover:text-[#F5F4EF]"
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>{t.tabBuy}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === "buy" ? "bg-black/10 text-black" : "bg-white/10 text-white/70"}`}>
                {homefindBuyProperties.length}
              </span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "rent"}
              onClick={() => setActiveTab("rent")}
              className={`px-5 py-2 rounded-full font-sans text-xs font-medium transition-all flex items-center gap-2 ${
                activeTab === "rent"
                  ? "bg-[#F5F4EF] text-[#07090D] shadow-md font-semibold"
                  : "text-[#86868B] hover:text-[#F5F4EF]"
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span>{t.tabRent}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeTab === "rent" ? "bg-black/10 text-black" : "bg-white/10 text-white/70"}`}>
                {homefindRentProperties.length}
              </span>
            </button>
          </div>

          <span className="font-mono text-[10px] text-[#86868B] uppercase tracking-wider hidden lg:inline">
            {t.sourceBadge}
          </span>
        </div>

        {/* BUY SECTION */}
        {showBuy && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#93C8FF] font-semibold block">
                  {t.buySectionTag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  {t.buySectionTitle}
                </h3>
              </div>
              <span className="font-mono text-xs text-[#86868B]">
                {t.buySectionCount(homefindBuyProperties.length)}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {homefindBuyProperties.map(renderCard)}
            </div>
          </div>
        )}

        {/* RENT SECTION */}
        {showRent && (
          <div className="space-y-8 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                  {t.rentSectionTag}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
                  {t.rentSectionTitle}
                </h3>
              </div>
              <span className="font-mono text-xs text-[#86868B]">
                {t.rentSectionCount(homefindRentProperties.length)}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {homefindRentProperties.map(renderCard)}
            </div>
          </div>
        )}

        {/* 4 Contextual Advisory CTAs (Apple Dual Bento) */}
        <div className="pt-8 border-t border-white/[0.08] space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
              {t.ctaHeaderTag}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F4EF]">
              {t.ctaHeaderTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Buyer Mandate CTA */}
            <div className="rounded-2xl p-6 border border-white/[0.08] bg-[#0C1119] flex flex-col justify-between gap-6 hover:border-[#93C8FF]/40 transition-colors">
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#93C8FF] block font-semibold">
                  {t.ctaBuyTag}
                </span>
                <h4 className="font-serif text-xl text-[#F5F4EF] leading-snug">
                  {t.ctaBuyTitle}
                </h4>
                <p className="font-sans text-xs text-[#86868B] font-light leading-relaxed">
                  {t.ctaBuyDesc}
                </p>
              </div>
              <Link
                href="/contact?interest=Buyer%20representation"
                className="apple-action-link text-xs"
              >
                <span>{t.ctaBuyBtn}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Rent Mandate CTA */}
            <div className="rounded-2xl p-6 border border-white/[0.08] bg-[#0C1119] flex flex-col justify-between gap-6 hover:border-[#A97F60]/40 transition-colors">
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#A97F60] block font-semibold">
                  {t.ctaRentTag}
                </span>
                <h4 className="font-serif text-xl text-[#F5F4EF] leading-snug">
                  {t.ctaRentTitle}
                </h4>
                <p className="font-sans text-xs text-[#86868B] font-light leading-relaxed">
                  {t.ctaRentDesc}
                </p>
              </div>
              <Link
                href="/contact?interest=Property%20sourcing"
                className="apple-action-link text-xs"
              >
                <span>{t.ctaRentBtn}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Seller Mandate CTA */}
            <div className="rounded-2xl p-6 border border-white/[0.08] bg-[#0C1119] flex flex-col justify-between gap-6 hover:border-white/[0.2] transition-colors">
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#B8C2CF] block font-semibold">
                  {t.ctaSellTag}
                </span>
                <h4 className="font-serif text-xl text-[#F5F4EF] leading-snug">
                  {t.ctaSellTitle}
                </h4>
                <p className="font-sans text-xs text-[#86868B] font-light leading-relaxed">
                  {t.ctaSellDesc}
                </p>
              </div>
              <Link
                href="/contact?interest=Seller%20representation"
                className="apple-action-link text-xs"
              >
                <span>{t.ctaSellBtn}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Investor Mandate CTA */}
            <div className="rounded-2xl p-6 border border-white/[0.08] bg-[#0C1119] flex flex-col justify-between gap-6 hover:border-[#93C8FF]/40 transition-colors">
              <div className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#93C8FF] block font-semibold">
                  {t.ctaInvestTag}
                </span>
                <h4 className="font-serif text-xl text-[#F5F4EF] leading-snug">
                  {t.ctaInvestTitle}
                </h4>
                <p className="font-sans text-xs text-[#86868B] font-light leading-relaxed">
                  {t.ctaInvestDesc}
                </p>
              </div>
              <Link
                href="/contact?interest=Investor%20advisory"
                className="apple-action-link text-xs"
              >
                <span>{t.ctaInvestBtn}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
