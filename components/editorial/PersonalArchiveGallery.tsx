"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { personalArchivePhotos, PersonalPhotoItem } from "@/lib/personalArchive";
import EditorialCadran from "./EditorialCadran";
import {
  ShieldCheck,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Award,
  User,
  GraduationCap,
  Building,
  CheckCircle2,
} from "lucide-react";

type FilterCategory = "all" | "portraits" | "advisory" | "field" | "architecture";

interface PersonalArchiveGalleryProps {
  initialCategory?: FilterCategory;
  className?: string;
}

export default function PersonalArchiveGallery({
  initialCategory = "all",
  className = "",
}: PersonalArchiveGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>(initialCategory);
  const [selectedPhoto, setSelectedPhoto] = useState<PersonalPhotoItem | null>(null);

  const categories = [
    { id: "all", label: "ALL ARCHIVE", count: personalArchivePhotos.length, icon: Award },
    {
      id: "portraits",
      label: "OFFICIAL PORTRAITS",
      count: personalArchivePhotos.filter((p) => p.category === "portraits").length,
      icon: User,
    },
    {
      id: "advisory",
      label: "ADVISORY & MODELING",
      count: personalArchivePhotos.filter((p) => p.category === "advisory").length,
      icon: Building,
    },
    {
      id: "field",
      label: "FIELD WALKTHROUGHS",
      count: personalArchivePhotos.filter((p) => p.category === "field").length,
      icon: Building,
    },
    {
      id: "architecture",
      label: "ARCHITECTURAL STUDIES",
      count: personalArchivePhotos.filter((p) => p.category === "architecture").length,
      icon: Building,
    },
  ];

  const filteredPhotos = useMemo(() => {
    if (activeCategory === "all") return personalArchivePhotos;
    return personalArchivePhotos.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Keyboard navigation for lightbox
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
    <div id="archive" className={`space-y-10 ${className}`}>
      {/* Category Tabs */}
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-2 border-b border-white/[0.08]">
        {categories.map((tab) => {
          const isActive = activeCategory === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as FilterCategory)}
              className={`px-4 sm:px-5 py-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] font-medium transition-all whitespace-nowrap flex items-center gap-2 border ${
                isActive
                  ? "bg-[#93C8FF] text-[#07090D] border-[#93C8FF] font-bold shadow-lg shadow-[#93C8FF]/20"
                  : "text-[#B8C2CF] border-white/[0.08] hover:border-[#93C8FF]/50 hover:text-[#F5F4EF] bg-[#0C1119]/80"
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
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

      {/* Grid of Verified Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPhotos.map((photo, idx) => {
          const isLandscape = photo.orientation === "landscape";
          return (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="cursor-pointer group flex flex-col justify-between border border-white/[0.1] bg-[#0C1119] hover:border-[#93C8FF]/70 transition-all duration-300 relative overflow-hidden p-3"
            >
              <div className="space-y-3">
                {/* Image Container */}
                <div className={`relative w-full ${isLandscape ? "aspect-[4/3]" : "aspect-[3/4]"} bg-[#1B2028] overflow-hidden border border-white/[0.06]`}>
                  <Image
                    src={photo.localPath}
                    alt={photo.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Expand Icon */}
                  <div className="absolute top-2 right-2 p-1.5 bg-[#07090D]/80 backdrop-blur-md border border-white/[0.15] text-[#93C8FF] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Category Pill */}
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-[#07090D]/90 backdrop-blur-md border border-white/[0.1] font-mono text-[9px] uppercase tracking-wider text-[#A97F60]">
                    {photo.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1">
                  <h4 className="font-serif text-sm text-[#F5F4EF] font-medium leading-snug line-clamp-2 group-hover:text-[#93C8FF] transition-colors">
                    {photo.caption}
                  </h4>
                  <p className="font-sans text-xs text-[#8A95A5] line-clamp-2">
                    {photo.depictionStatus}
                  </p>
                </div>
              </div>

              {/* Bottom Metadata Bar */}
              <div className="pt-3 mt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[9px] text-[#8A95A5]">
                <span className="flex items-center gap-1 text-[#93C8FF]">
                  <CheckCircle2 className="w-2.5 h-2.5" />
                  <span>VERIFIED</span>
                </span>
                <span>{photo.fileSizeFormatted}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#07090D]/95 backdrop-blur-xl animate-fadeIn">
          {/* Backdrop Click to Close */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedPhoto(null)}
          />

          {/* Modal Container */}
          <div className="relative z-10 max-w-5xl w-full max-h-[92vh] flex flex-col border border-white/[0.15] bg-[#0C1119] shadow-2xl overflow-hidden">
            {/* Modal Top Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#07090D]/60 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#93C8FF] animate-pulse" />
                <span className="text-[#93C8FF] uppercase tracking-[0.2em] font-semibold">
                  ARCHIVAL MONOGRAPH ({currentIndex + 1} / {filteredPhotos.length})
                </span>
                <span className="text-white/20">|</span>
                <span className="text-[#A97F60] uppercase tracking-wider hidden sm:inline">
                  {selectedPhoto.categoryLabel}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-1.5 border border-white/[0.1] hover:border-[#93C8FF] text-[#B8C2CF] hover:text-[#93C8FF] transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 border border-white/[0.1] hover:border-[#93C8FF] text-[#B8C2CF] hover:text-[#93C8FF] transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="p-1.5 border border-white/[0.1] hover:border-red-400 text-[#B8C2CF] hover:text-red-400 transition-colors ml-2"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Image + Deep Monograph Info */}
            <div className="grid lg:grid-cols-12 overflow-y-auto max-h-[calc(92vh-120px)]">
              {/* Full-Size Image Container (~65% width) */}
              <div className="lg:col-span-8 p-6 flex items-center justify-center bg-[#07090D] min-h-[350px] sm:min-h-[500px] relative border-b lg:border-b-0 lg:border-r border-white/[0.08]">
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

              {/* Fiduciary Monograph Details Card (~35% width) */}
              <div className="lg:col-span-4 p-6 sm:p-8 space-y-6 flex flex-col justify-between bg-[#0C1119]">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#A97F60] font-semibold block">
                      ARCHIVAL SPECIFICATION
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#F5F4EF] leading-snug">
                      {selectedPhoto.caption}
                    </h3>
                  </div>

                  <p className="font-sans text-sm text-[#B8C2CF] leading-relaxed font-light">
                    {selectedPhoto.depictionStatus}
                  </p>

                  {/* Archival Attributes Table */}
                  <div className="space-y-2 pt-4 border-t border-white/[0.08] font-mono text-xs">
                    <div className="flex justify-between py-1 border-b border-white/[0.04]">
                      <span className="text-[#8A95A5]">Asset Category</span>
                      <span className="text-[#F5F4EF]">{selectedPhoto.categoryLabel}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/[0.04]">
                      <span className="text-[#8A95A5]">Resolution</span>
                      <span className="text-[#F5F4EF]">
                        {selectedPhoto.width && selectedPhoto.height
                          ? `${selectedPhoto.width} × ${selectedPhoto.height} px`
                          : "High Definition"}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/[0.04]">
                      <span className="text-[#8A95A5]">Master File Size</span>
                      <span className="text-[#F5F4EF]">{selectedPhoto.fileSizeFormatted}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/[0.04]">
                      <span className="text-[#8A95A5]">Authenticity Verification</span>
                      <span className="text-[#93C8FF] flex items-center gap-1 font-semibold">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>CONFIRMED 1ST-PARTY</span>
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-[#8A95A5]">Source Domain</span>
                      <span className="text-[#A97F60]">{new URL(selectedPhoto.sourcePage).hostname}</span>
                    </div>
                  </div>
                </div>

                {/* External Source Link */}
                <div className="pt-4 border-t border-white/[0.08] space-y-2">
                  <a
                    href={selectedPhoto.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 border border-white/[0.15] hover:border-[#93C8FF] text-[#F5F4EF] hover:text-[#93C8FF] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>INSPECT ORIGINAL SOURCE ASSET</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="font-mono text-[9px] text-[#8A95A5] text-center">
                    Audited from canonical WordPress media & media library repositories.
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
