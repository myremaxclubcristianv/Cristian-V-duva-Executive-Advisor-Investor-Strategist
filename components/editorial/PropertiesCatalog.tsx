"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { selectedProperties, Property } from "@/lib/properties";
import PropertyFeature from "./PropertyFeature";
import ProjectFeature from "./ProjectFeature";
import SupportingPropertyCard from "./SupportingPropertyCard";
import CTASection from "./CTASection";
import {
  Search,
  SlidersHorizontal,
  LayoutGrid,
  Rows,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  ChevronDown,
  X,
  Building,
  Globe2,
} from "lucide-react";

type FilterCategory = "all" | "penthouse" | "villa" | "development" | "marine" | "international";
type SortOption = "featured" | "price-desc" | "price-asc" | "area-desc";

export default function PropertiesCatalog() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [viewMode, setViewMode] = useState<"editorial" | "grid">("editorial");
  const [visibleCount, setVisibleCount] = useState<number>(10);

  const getPrimaryCountry = (countryStr?: string) => {
    if (!countryStr) return "Other";
    if (countryStr.includes("Romania")) return "Romania";
    if (countryStr.includes("Monaco")) return "Monaco";
    if (countryStr.includes("Spain")) return "Spain";
    if (countryStr.includes("Emirates") || countryStr.includes("UAE") || countryStr.includes("Dubai")) return "UAE";
    if (countryStr.includes("United States") || countryStr.includes("USA") || countryStr.includes("Florida")) return "USA";
    if (countryStr.includes("Croatia")) return "Croatia";
    return countryStr.split("/")[0].trim();
  };

  // Available countries derived from actual data
  const countries = useMemo(() => {
    const set = new Set<string>();
    selectedProperties.forEach((p) => {
      set.add(getPrimaryCountry(p.country));
    });
    return Array.from(set).sort();
  }, []);

  // Filter & Sort Logic
  const filteredProperties = useMemo(() => {
    return selectedProperties
      .filter((p) => {
        // Category filter
        if (activeCategory !== "all" && p.category !== activeCategory) return false;

        // Country filter
        if (selectedCountry !== "all") {
          if (getPrimaryCountry(p.country) !== selectedCountry) {
            return false;
          }
        }

        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchLoc = p.location.toLowerCase().includes(q);
          const matchDesc = p.description.toLowerCase().includes(q);
          const matchType = p.type.toLowerCase().includes(q);
          if (!matchTitle && !matchLoc && !matchDesc && !matchType) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-desc") {
          return (b.priceNumeric || 0) - (a.priceNumeric || 0);
        }
        if (sortBy === "price-asc") {
          return (a.priceNumeric || 0) - (b.priceNumeric || 0);
        }
        if (sortBy === "area-desc") {
          const numA = parseFloat(a.area.replace(/[^0-9.]/g, "")) || 0;
          const numB = parseFloat(b.area.replace(/[^0-9.]/g, "")) || 0;
          return numB - numA;
        }
        // Default: featured first
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      });
  }, [activeCategory, selectedCountry, searchQuery, sortBy]);

  // Paginated visible slice
  const displayedProperties = filteredProperties.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProperties.length;

  const categories: { id: FilterCategory; label: string; count: number }[] = [
    { id: "all", label: "ALL ASSETS", count: selectedProperties.length },
    {
      id: "penthouse",
      label: "PENTHOUSES & ROOFTOPS",
      count: selectedProperties.filter((p) => p.category === "penthouse").length,
    },
    {
      id: "villa",
      label: "ESTATES & MANSIONS",
      count: selectedProperties.filter((p) => p.category === "villa").length,
    },
    {
      id: "development",
      label: "RESIDENTIAL DEVELOPMENTS",
      count: selectedProperties.filter((p) => p.category === "development").length,
    },
    {
      id: "international",
      label: "INTERNATIONAL TROPHY",
      count: selectedProperties.filter((p) => p.category === "international").length,
    },
    {
      id: "marine",
      label: "WATERFRONT & MARITIME",
      count: selectedProperties.filter((p) => p.category === "marine").length,
    },
  ];

  const resetFilters = () => {
    setActiveCategory("all");
    setSelectedCountry("all");
    setSearchQuery("");
    setSortBy("featured");
    setVisibleCount(10);
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Sticky Interactive Filter Bar */}
      <div className="border-b border-white/[0.08] sticky top-20 z-30 bg-[#07090D]/95 backdrop-blur-md py-4 space-y-4 shadow-xl">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 space-y-4">
          {/* Top Row: Categories Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-1">
            {categories.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setVisibleCount(10);
                  }}
                  className={`px-4 sm:px-5 py-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium transition-all whitespace-nowrap flex items-center gap-2 border ${
                    isActive
                      ? "bg-[#93C8FF] text-[#07090D] border-[#93C8FF] font-bold shadow-lg shadow-[#93C8FF]/20"
                      : "text-[#B8C2CF] border-white/[0.08] hover:border-[#93C8FF]/50 hover:text-[#F5F4EF] bg-[#0C1119]/50"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-[#07090D]/20 text-[#07090D]"
                        : "bg-white/[0.06] text-[#8A95A5]"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom Row: Search, Country Pills, Sort & View Mode */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pt-2 border-t border-white/[0.04]">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#8A95A5] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(10);
                }}
                placeholder="Search title, city, or specifications..."
                className="w-full pl-9 pr-8 py-2 bg-[#0C1119] border border-white/[0.1] text-xs font-mono text-[#F5F4EF] placeholder-[#647082] focus:outline-none focus:border-[#93C8FF] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#8A95A5] hover:text-[#F5F4EF]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Jurisdiction / Country Filter */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <span className="font-mono text-[10px] text-[#8A95A5] uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Globe2 className="w-3 h-3 text-[#A97F60]" />
                <span>REGION:</span>
              </span>
              <button
                onClick={() => {
                  setSelectedCountry("all");
                  setVisibleCount(10);
                }}
                className={`px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors border ${
                  selectedCountry === "all"
                    ? "border-[#A97F60] text-[#A97F60] bg-[#A97F60]/10 font-semibold"
                    : "border-white/[0.08] text-[#8A95A5] hover:text-[#F5F4EF]"
                }`}
              >
                ALL
              </button>
              {countries.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setSelectedCountry(c);
                    setVisibleCount(10);
                  }}
                  className={`px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors border whitespace-nowrap ${
                    selectedCountry === c
                      ? "border-[#A97F60] text-[#A97F60] bg-[#A97F60]/10 font-semibold"
                      : "border-white/[0.08] text-[#8A95A5] hover:text-[#F5F4EF]"
                  }`}
                >
                  {c.split("/")[0].trim()}
                </button>
              ))}
            </div>

            {/* Controls Group: Sort & View Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Sort Selection */}
              <div className="flex items-center gap-1.5 font-mono text-[10px]">
                <span className="text-[#8A95A5] uppercase tracking-wider">SORT:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-[#0C1119] border border-white/[0.1] text-[#F5F4EF] py-1.5 px-2.5 focus:outline-none focus:border-[#93C8FF] text-[10px] font-mono cursor-pointer"
                >
                  <option value="featured">Curated Priority</option>
                  <option value="price-desc">Valuation: High to Low</option>
                  <option value="price-asc">Valuation: Low to High</option>
                  <option value="area-desc">Footprint: Largest</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-white/[0.1] bg-[#0C1119] p-0.5">
                <button
                  onClick={() => setViewMode("editorial")}
                  className={`p-1.5 transition-colors ${
                    viewMode === "editorial"
                      ? "bg-[#93C8FF] text-[#07090D]"
                      : "text-[#8A95A5] hover:text-[#F5F4EF]"
                  }`}
                  title="Editorial Spread View"
                >
                  <Rows className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 transition-colors ${
                    viewMode === "grid"
                      ? "bg-[#93C8FF] text-[#07090D]"
                      : "text-[#8A95A5] hover:text-[#F5F4EF]"
                  }`}
                  title="Portfolio Card Grid View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Meta Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#8A95A5]">
        <div>
          <span>Displaying </span>
          <span className="text-[#93C8FF] font-semibold">{filteredProperties.length}</span>
          <span> confirmed properties</span>
          {activeCategory !== "all" && (
            <span> in <span className="text-[#F5F4EF] uppercase">{activeCategory}</span></span>
          )}
          {selectedCountry !== "all" && (
            <span> in <span className="text-[#A97F60] uppercase">{selectedCountry}</span></span>
          )}
        </div>

        {(activeCategory !== "all" || selectedCountry !== "all" || searchQuery) && (
          <button
            onClick={resetFilters}
            className="text-[#93C8FF] hover:underline flex items-center gap-1 uppercase tracking-wider text-[11px]"
          >
            <X className="w-3 h-3" />
            <span>Reset Active Filters</span>
          </button>
        )}
      </div>

      {/* Properties Exhibition Stream */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {viewMode === "editorial" ? (
          /* Editorial Presentation (Large spreads Pattern A & B) */
          <div className="space-y-16 sm:space-y-24">
            {displayedProperties.map((property, idx) => {
              if (property.id === "prop-pipera-villas") {
                return (
                  <ProjectFeature
                    key={property.id}
                    title={property.title}
                    subtitle={property.subtitle}
                    location={property.location}
                    phase="COMPLETED RESIDENTIAL MASTERPLAN · IMMEDIATE OCCUPANCY"
                    unitsSummary="36 VILLAS (14 TYPE 1 + 22 TYPE 2)"
                    description={property.description}
                    developerNote="Full municipal infrastructure delivered: paved roadway network, underground utility lines, perimeter security, and immediate transit to Northern Bucharest's international school cluster."
                    image={property.heroImage}
                    specs={property.specs}
                    highlights={property.features}
                    sourceUrl={property.sourceUrl}
                    sourceName={property.sourceName}
                  />
                );
              }

              if (property.id === "prop-dubai-brabus") {
                return (
                  <ProjectFeature
                    key={property.id}
                    title={property.title}
                    subtitle={property.subtitle}
                    location={property.location}
                    phase="ACTIVE DEVELOPMENT · CONFIRMED DEVELOPER SPECIFICATIONS"
                    unitsSummary="WATERFRONT SKY MANSIONS & WATER VILLAS"
                    description={property.description}
                    developerNote="Official developer-announced project details. Projected appreciation and handover schedules are governed by bilateral reservation contracts (SPA) and do not constitute implied commercial guarantees."
                    image={property.heroImage}
                    specs={property.specs}
                    highlights={property.features}
                    sourceUrl={property.sourceUrl}
                    sourceName={property.sourceName}
                  />
                );
              }

              return (
                <PropertyFeature
                  key={property.id}
                  property={property}
                  reversed={idx % 2 === 1}
                />
              );
            })}
          </div>
        ) : (
          /* Portfolio Card Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProperties.map((property) => (
              <SupportingPropertyCard key={property.id} property={property} />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-28 border border-white/[0.08] bg-[#0C1119] p-12 space-y-5 shadow-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#93C8FF] block">
              CONFIDENTIAL FIDUCIARY PROTOCOL
            </span>
            <h3 className="font-serif text-3xl text-[#F5F4EF]">
              No public assets match the requested criteria.
            </h3>
            <p className="font-sans text-sm text-[#B8C2CF] max-w-xl mx-auto font-light leading-relaxed">
              Substantial portions of the Executive acquisition portfolio are managed strictly
              off-market under private placement covenants. To review confidential opportunities,
              submit a retained acquisition brief.
            </p>
            <div className="pt-4 flex items-center justify-center gap-4">
              <button
                onClick={resetFilters}
                className="px-6 py-3 border border-white/[0.15] hover:border-[#93C8FF] text-xs font-mono uppercase tracking-wider text-[#F5F4EF]"
              >
                Clear Filters
              </button>
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#93C8FF] hover:bg-[#B8C2CF] text-[#07090D] text-xs font-mono uppercase tracking-wider font-bold"
              >
                Retained Acquisition Brief
              </Link>
            </div>
          </div>
        )}

        {/* Progressive Loading Button */}
        {hasMore && (
          <div className="text-center pt-16">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="px-10 py-4 border border-[#93C8FF]/50 bg-[#0C1119] hover:bg-[#93C8FF] hover:text-[#07090D] text-[#93C8FF] font-mono text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-xl group inline-flex items-center gap-2"
            >
              <span>LOAD MORE PROPERTIES ({filteredProperties.length - visibleCount} REMAINING)</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>

      {/* Final Fiduciary CTA */}
      <CTASection
        eyebrow="EXCLUSIVE BUYER & SELLER REPRESENTATION"
        title="Seeking Fiduciary Counsel for a Heritage Property Transaction?"
        description="Whether structuring a private acquisition along the Bucharest – Monaco – Dubai corridor or preparing a legacy estate for confidential off-market disposition, we act solely on behalf of our principal, eliminating dual-agency conflicts."
        primaryActionText="SCHEDULE A CONFIDENTIAL BRIEFING"
        primaryActionHref="/contact"
      />
    </div>
  );
}
