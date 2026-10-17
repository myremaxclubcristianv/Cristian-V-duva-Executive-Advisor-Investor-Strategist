"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";
import { catalogProperties as selectedProperties } from "@/lib/catalogProperties";
import PropertyCadranFeature from "./PropertyCadranFeature";
import PropertySplitCadran from "./PropertySplitCadran";
import ProjectFeature from "./ProjectFeature";
import SupportingPropertyCard from "./SupportingPropertyCard";
import CadranDivider from "./CadranDivider";
import EditorialCadran from "./EditorialCadran";
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
  Sparkles,
} from "lucide-react";

type FilterCategory = "all" | "penthouse" | "villa" | "development" | "marine" | "international";
type SortOption = "featured" | "price-desc" | "price-asc" | "area-desc";

export default function PropertiesCatalog() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [viewMode, setViewMode] = useState<"editorial" | "grid">("editorial");
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const getPrimaryCountry = (countryStr?: string) => {
    if (!countryStr) return "Other";
    if (countryStr.includes("Romania")) return "Romania";
    if (countryStr.includes("France")) return "France";
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

  /**
   * Helper to build rhythmic editorial stream:
   * Groups properties into alternating visual presentations:
   * 1. Heroic full-width cadran
   * 2. Two-column paired spread
   * 3. Specialized development feature
   */
  const renderEditorialStream = () => {
    const elements: React.ReactNode[] = [];
    let i = 0;
    let sequenceCounter = 1;

    while (i < displayedProperties.length) {
      const current = displayedProperties[i];

      // Check if it's a designated residential development
      if (current.id === "prop-pipera-villas" || current.id === "prop-dubai-brabus") {
        elements.push(
          <div key={`dev-${current.id}`} className="space-y-6">
            <ProjectFeature
              title={current.title}
              subtitle={current.subtitle}
              location={current.location}
              phase={
                current.id === "prop-pipera-villas"
                  ? "COMPLETED RESIDENTIAL MASTERPLAN · IMMEDIATE OCCUPANCY"
                  : "ACTIVE DEVELOPMENT · CONFIRMED DEVELOPER SPECIFICATIONS"
              }
              unitsSummary={
                current.id === "prop-pipera-villas"
                  ? "36 VILLAS (14 TYPE 1 + 22 TYPE 2)"
                  : "WATERFRONT SKY MANSIONS & WATER VILLAS"
              }
              description={current.description}
              developerNote={
                current.id === "prop-pipera-villas"
                  ? "Full municipal infrastructure delivered: paved roadway network, underground utility lines, perimeter security, and immediate transit to Northern Bucharest's international school cluster."
                  : "Official developer-announced project details. Projected appreciation and handover schedules are governed by bilateral reservation contracts (SPA) and do not constitute implied commercial guarantees."
              }
              image={current.heroImage}
              specs={current.specs}
              highlights={current.features}
              sourceUrl={current.sourceUrl}
              sourceName={current.sourceName}
            />
          </div>
        );
        i++;
        sequenceCounter++;
        continue;
      }

      // Check if we can pair the next two items into a 2-column spread
      // We do this every 2nd or 3rd cycle if both are not developments and 2 items exist
      if (sequenceCounter % 3 === 2 && i + 1 < displayedProperties.length) {
        const next = displayedProperties[i + 1];
        if (next.id !== "prop-pipera-villas" && next.id !== "prop-dubai-brabus") {
          elements.push(
            <PropertySplitCadran
              key={`split-${current.id}-${next.id}`}
              propertyA={current}
              propertyB={next}
              indexA={sequenceCounter}
              indexB={sequenceCounter + 1}
            />
          );
          i += 2;
          sequenceCounter += 2;
          continue;
        }
      }

      // Default: Full-width Heroic Property Cadran Feature
      const isReversed = sequenceCounter % 2 === 0;
      elements.push(
        <PropertyCadranFeature
          key={`feature-${current.id}`}
          property={current}
          index={sequenceCounter}
          reversed={isReversed}
        />
      );
      i++;
      sequenceCounter++;
    }

    return elements;
  };

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Sticky Architectural Navigation Cadran */}
      <div className="sticky top-20 z-30 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <EditorialCadran
          accentColor="ice"
          surface="midnight"
          className="p-5 sm:p-7 backdrop-blur-xl bg-[#07090D]/95 shadow-2xl border-white/[0.12] space-y-5"
        >
          {/* Top Row: Categories Tabs */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-1" role="tablist" aria-label="Property Categories">
            {categories.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(tab.id);
                    setVisibleCount(10);
                  }}
                  className={`px-4 sm:px-5 py-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium transition-all whitespace-nowrap flex items-center gap-2 border min-h-[44px] ${
                    isActive
                      ? "bg-[#93C8FF] text-[#07090D] border-[#93C8FF] font-bold shadow-lg shadow-[#93C8FF]/20"
                      : "text-[#B8C2CF] border-white/[0.08] hover:border-[#93C8FF]/50 hover:text-[#F5F4EF] bg-[#0C1119]/70"
                  }`}
                >
                  <span className={isActive ? "text-[#07090D] font-bold" : ""}>{tab.label}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded-full ${
                      isActive
                        ? "bg-[#07090D]/20 text-[#07090D] font-bold"
                        : "bg-white/[0.06] text-[#8A95A5]"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Middle Row: Sovereign Jurisdictions Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-3 border-t border-white/[0.06]">
            <span className="font-mono text-[10px] text-[#8A95A5] uppercase tracking-wider shrink-0 flex items-center gap-1.5 mr-1.5">
              <Globe2 className="w-3.5 h-3.5 text-[#C49A78]" />
              <span>SOVEREIGN REGION:</span>
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedCountry("all");
                setVisibleCount(10);
              }}
              className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-colors border min-h-[32px] inline-flex items-center ${
                selectedCountry === "all"
                  ? "border-[#C49A78] text-[#C49A78] bg-[#C49A78]/15 font-semibold"
                  : "border-white/[0.08] text-[#8A95A5] hover:text-[#F5F4EF] bg-[#0C1119]"
              }`}
            >
              ALL JURISDICTIONS
            </button>
            {countries.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => {
                  setSelectedCountry(c);
                  setVisibleCount(10);
                }}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-colors border whitespace-nowrap min-h-[32px] inline-flex items-center ${
                  selectedCountry === c
                    ? "border-[#C49A78] text-[#C49A78] bg-[#C49A78]/15 font-semibold"
                    : "border-white/[0.08] text-[#8A95A5] hover:text-[#F5F4EF] bg-[#0C1119]"
                }`}
              >
                {c.split("/")[0].trim()}
              </button>
            ))}
          </div>

          {/* Bottom Row: Search, Sort, View Toggle */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-3.5 border-t border-white/[0.06]">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#8A95A5] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                aria-label="Search title, district, specifications, or city"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(10);
                }}
                placeholder="Search title, district, specifications, or city..."
                className="w-full pl-10 pr-9 py-2.5 bg-[#0C1119] border border-white/[0.1] text-xs font-mono text-[#F5F4EF] placeholder-[#8A95A5] focus:outline-none focus:border-[#93C8FF] focus:ring-1 focus:ring-[#93C8FF]/30 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A95A5] hover:text-[#F5F4EF] transition-colors p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Controls Group: Sort & View Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              {/* Sort Selection */}
              <div className="flex items-center gap-1.5 font-mono text-[10px]">
                <label htmlFor="catalog-sort-select" className="text-[#8A95A5] uppercase tracking-wider">
                  SORT:
                </label>
                <select
                  id="catalog-sort-select"
                  aria-label="Sort properties"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-[#0C1119] border border-white/[0.1] text-[#F5F4EF] py-2 px-3 focus:outline-none focus:border-[#93C8FF] text-[10px] font-mono cursor-pointer"
                >
                  <option value="featured">Curated Priority</option>
                  <option value="price-desc">Valuation: High to Low</option>
                  <option value="price-asc">Valuation: Low to High</option>
                  <option value="area-desc">Footprint: Largest First</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center border border-white/[0.1] bg-[#0C1119] p-0.5">
                <button
                  type="button"
                  aria-label="Editorial Monograph Spreads"
                  onClick={() => setViewMode("editorial")}
                  className={`p-2 transition-colors flex items-center justify-center gap-1.5 font-mono text-[10px] px-3 min-h-[44px] min-w-[44px] ${
                    viewMode === "editorial"
                      ? "bg-[#93C8FF] text-[#07090D] font-bold"
                      : "text-[#8A95A5] hover:text-[#F5F4EF]"
                  }`}
                  title="Editorial Monograph Spreads"
                >
                  <Rows className="w-3.5 h-3.5" />
                  <span className={`hidden sm:inline ${viewMode === "editorial" ? "text-[#07090D] font-bold" : ""}`}>SPREADS</span>
                </button>
                <button
                  type="button"
                  aria-label="Portfolio Matrix Grid"
                  onClick={() => setViewMode("grid")}
                  className={`p-2 transition-colors flex items-center justify-center gap-1.5 font-mono text-[10px] px-3 min-h-[44px] min-w-[44px] ${
                    viewMode === "grid"
                      ? "bg-[#93C8FF] text-[#07090D] font-bold"
                      : "text-[#8A95A5] hover:text-[#F5F4EF]"
                  }`}
                  title="Portfolio Matrix Grid"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className={`hidden sm:inline ${viewMode === "grid" ? "text-[#07090D] font-bold" : ""}`}>MATRIX</span>
                </button>
              </div>
            </div>
          </div>
        </EditorialCadran>
      </div>

      {/* Results Meta Banner */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#8A95A5]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-[#93C8FF] rounded-full" />
          <span>Exhibiting </span>
          <span className="text-[#93C8FF] font-semibold">{filteredProperties.length}</span>
          <span> confirmed architectural assets</span>
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
          /* Editorial Presentation (Rhythmic Cadran Spreads) */
          <div className="space-y-16 sm:space-y-24">
            {renderEditorialStream()}
          </div>
        ) : (
          /* Portfolio Card Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {displayedProperties.map((property, idx) => (
              <SupportingPropertyCard
                key={property.id}
                property={property}
                index={idx + 1}
              />
            ))}
          </div>
        )}

        {/* Empty State */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-28 border border-white/[0.08] bg-[#0C1119] p-12 space-y-5 shadow-2xl relative">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#93C8FF] block">
              CONFIDENTIAL ACQUISITION PROTOCOL
            </span>
            <h3 className="font-serif text-3xl text-[#F5F4EF]">
              No public assets match the requested criteria.
            </h3>
            <p className="font-sans text-sm text-[#B8C2CF] max-w-xl mx-auto font-light leading-relaxed">
              Substantial portions of the Executive acquisition portfolio are managed strictly
              off-market under private placement covenants. To review confidential opportunities,
              submit an acquisition brief or schedule an introductory discussion.
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

        {/* Progressive Loading Controls */}
        {hasMore && (
          <div className="flex flex-wrap items-center justify-center gap-4 pt-20">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-8 py-4 border border-[#93C8FF]/50 bg-[#0C1119] hover:bg-[#93C8FF] hover:text-[#07090D] text-[#93C8FF] font-mono text-xs uppercase tracking-[0.22em] font-bold transition-all shadow-xl group inline-flex items-center gap-2 min-h-[48px]"
            >
              <span>EXHIBIT MORE ASSETS ({filteredProperties.length - visibleCount} REMAINING)</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => setVisibleCount(filteredProperties.length)}
              className="px-6 py-4 border border-white/[0.15] bg-[#07090D] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] font-mono text-xs uppercase tracking-[0.22em] font-medium transition-all shadow-lg min-h-[48px] flex items-center justify-center"
            >
              <span>EXHIBIT ALL ({filteredProperties.length})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

