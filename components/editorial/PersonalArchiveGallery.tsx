"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { personalArchivePhotos, PersonalPhotoItem } from "@/lib/personalArchive";
import {
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Layers,
  UserCheck,
  Building,
  Eye,
  Camera,
  ArrowUpRight,
} from "lucide-react";

type FilterCategory = "all" | "portraits" | "advisory" | "field" | "events" | "lifestyle";

interface PersonalArchiveGalleryProps {
  className?: string;
}

export default function PersonalArchiveGallery({
  className = "",
}: PersonalArchiveGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<PersonalPhotoItem | null>(null);

  const categories = useMemo(() => [
    {
      id: "all",
      label: "ALL ARCHIVE",
      count: personalArchivePhotos.length,
      icon: Layers,
    },
    {
      id: "portraits",
      label: "OFFICIAL PORTRAITS",
      count: personalArchivePhotos.filter((p) => p.category === "portraits").length,
      icon: UserCheck,
    },
    {
      id: "advisory",
      label: "EXECUTIVE ADVISORY",
      count: personalArchivePhotos.filter((p) => p.category === "advisory").length,
      icon: Camera,
    },
    {
      id: "field",
      label: "DEVELOPMENTS & FIELD",
      count: personalArchivePhotos.filter((p) => p.category === "field").length,
      icon: Eye,
    },
    {
      id: "events",
      label: "KEYNOTES & EVENTS",
      count: personalArchivePhotos.filter((p) => p.category === "events").length,
      icon: Building,
    },
    {
      id: "lifestyle",
      label: "EDITORIAL & LIFESTYLE",
      count: personalArchivePhotos.filter((p) => p.category === "lifestyle").length,
      icon: Camera,
    },
  ], []);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "all") return personalArchivePhotos;
    return personalArchivePhotos.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const currentIndex = useMemo(() => {
    if (!selectedPhoto) return -1;
    return filteredPhotos.findIndex((p) => p.id === selectedPhoto.id);
  }, [selectedPhoto, filteredPhotos]);

  const handlePrev = useCallback(() => {
    if (currentIndex <= 0) {
      setSelectedPhoto(filteredPhotos[filteredPhotos.length - 1]);
    } else {
      setSelectedPhoto(filteredPhotos[currentIndex - 1]);
    }
  }, [currentIndex, filteredPhotos]);

  const handleNext = useCallback(() => {
    if (currentIndex === -1 || currentIndex >= filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[0]);
    } else {
      setSelectedPhoto(filteredPhotos[currentIndex + 1]);
    }
  }, [currentIndex, filteredPhotos]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, handlePrev, handleNext]);

  return (
    <div id="archive" className={`space-y-8 sm:space-y-12 ${className}`}>
      {/* Category Tabs Bar - Apple Segmented Control */}
      <div className="p-1.5 sm:p-2 rounded-full border border-white/[0.08] bg-[#07090D]/90 backdrop-blur-xl shadow-xl max-w-fit mx-auto">
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar" role="tablist" aria-label="Archive Categories">
          {categories.map((tab) => {
            const isActive = activeCategory === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(tab.id as FilterCategory)}
                className={`px-4 sm:px-5 py-2 rounded-full font-mono text-[10px] sm:text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap flex items-center gap-2 shrink-0 min-h-[38px] ${
                  isActive
                    ? "bg-[#93C8FF] text-[#07090D] font-bold shadow-md shadow-[#93C8FF]/20"
                    : "text-[#B8C2CF] hover:text-[#F5F4EF] hover:bg-white/[0.05]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#07090D]" : "text-[#8A95A5]"}`} />
                <span className={isActive ? "text-[#07090D] font-bold" : ""}>{tab.label}</span>
                <span
                  className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-[#07090D]/20 text-[#07090D]"
                      : "bg-white/[0.08] text-[#8A95A5]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Verified Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {filteredPhotos.map((photo) => {
          const isLandscape = photo.orientation === "landscape";
          return (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="cursor-pointer group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0C1119] hover:border-white/[0.22] hover:bg-[#121721] transition-all duration-300 relative overflow-hidden p-3.5 sm:p-4 shadow-xl hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Image Aperture */}
                <div className={`relative w-full ${isLandscape ? "aspect-[4/3]" : "aspect-[3/4]"} bg-[#121721] overflow-hidden rounded-xl border border-white/[0.06]`}>
                  <Image
                    src={photo.localPath}
                    alt={photo.caption}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                  {/* Expand Prompt Icon */}
                  <div className="absolute top-2.5 right-2.5 p-2 rounded-full bg-[#07090D]/85 backdrop-blur-md border border-white/[0.15] text-[#93C8FF] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1] font-mono text-[9px] uppercase tracking-wider text-[#C49A78] font-semibold">
                    {photo.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <h3 className="font-serif text-base text-[#F5F4EF] font-medium leading-snug line-clamp-2 group-hover:text-[#93C8FF] transition-colors">
                    {photo.caption}
                  </h3>
                </div>
              </div>

              {/* Bottom Editorial Bar */}
              <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[9px] text-[#8A95A5]">
                <span className="text-[#B8C2CF] uppercase tracking-wider">{photo.categoryLabel}</span>
                <span className="text-[#A97F60] font-sans">Cristian Văduva</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.caption || "Cristian Văduva Photo Archive"}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#07090D]/95 backdrop-blur-2xl animate-fadeIn"
        >
          {/* Backdrop Click to Close */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedPhoto(null)}
          />

          {/* Modal Container - Apple rounded-3xl sheet */}
          <div className="relative z-10 max-w-5xl w-full max-h-[92vh] flex flex-col rounded-3xl border border-white/[0.15] bg-[#0C1119] shadow-2xl overflow-hidden">
            {/* Modal Top Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#07090D]/80 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF]" />
                <span className="text-[#93C8FF] uppercase tracking-[0.2em] font-semibold">
                  CRISTIAN VĂDUVA ({currentIndex + 1} / {filteredPhotos.length})
                </span>
                <span className="text-white/20">|</span>
                <span className="text-[#A97F60] uppercase tracking-wider hidden sm:inline">
                  {selectedPhoto.categoryLabel}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-white/[0.1] hover:border-[#93C8FF] text-[#B8C2CF] hover:text-[#93C8FF] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-white/[0.1] hover:border-[#93C8FF] text-[#B8C2CF] hover:text-[#93C8FF] transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPhoto(null)}
                  className="p-2.5 rounded-full border border-white/[0.1] hover:border-red-400 text-[#B8C2CF] hover:text-red-400 transition-colors ml-2 min-h-[40px] min-w-[40px] flex items-center justify-center"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Image + Clean Editorial Presentation */}
            <div className="grid lg:grid-cols-12 overflow-y-auto max-h-[calc(92vh-120px)]">
              {/* Full-Size Image Container */}
              <div className="lg:col-span-8 p-6 sm:p-8 flex items-center justify-center bg-[#07090D] min-h-[350px] sm:min-h-[500px] relative border-b lg:border-b-0 lg:border-r border-white/[0.08]">
                <div className="relative w-full h-[55vh] max-h-[600px]">
                  <Image
                    src={selectedPhoto.localPath}
                    alt={selectedPhoto.caption}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Editorial Profile & Consultation Context */}
              <div className="lg:col-span-4 p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-[#0C1119]">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                      {selectedPhoto.categoryLabel}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F5F4EF] leading-snug">
                      {selectedPhoto.caption}
                    </h3>
                  </div>

                  <div className="p-4 rounded-xl border border-white/[0.08] bg-[#121721] space-y-2">
                    <span className="font-mono text-[10px] text-[#A97F60] uppercase tracking-wider block font-semibold">
                      REAL ESTATE REPRESENTATION & ADVISORY
                    </span>
                    <p className="font-sans text-xs text-[#B8C2CF] leading-relaxed font-light">
                      Dedicated exclusive mandate advisory for residential transactions, investment opportunity identification, and strategic negotiation.
                    </p>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-4 border-t border-white/[0.08] space-y-3">
                  <a
                    href="/programare"
                    className="btn-apple-pill-primary w-full shadow-lg"
                  >
                    <span>SCHEDULE A PRIVATE CONSULTATION</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <p className="font-mono text-[9px] text-[#8A95A5] text-center">
                    All strategic discussions operate under contractual confidentiality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
