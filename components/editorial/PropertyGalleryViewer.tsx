"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X, MapPin, ShieldCheck } from "lucide-react";

interface PropertyGalleryViewerProps {
  images: string[];
  title: string;
  location: string;
  price: string;
}

export default function PropertyGalleryViewer({
  images,
  title,
  location,
  price,
}: PropertyGalleryViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const total = images.length;
  const currentImage = images[activeIndex] || images[0];

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation support
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") setLightboxOpen(false);
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, total]);

  return (
    <div className="space-y-4">
      {/* Primary Stage */}
      <div
        onClick={() => setLightboxOpen(true)}
        className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#12161F] border border-white/[0.12] overflow-hidden group cursor-pointer shadow-2xl"
      >
        {/* Corner Architectural Ticks */}
        <span className="absolute top-3 left-3 w-3 h-3 border-t border-l border-white/40 pointer-events-none z-10" />
        <span className="absolute top-3 right-3 w-3 h-3 border-t border-r border-white/40 pointer-events-none z-10" />
        <span className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-white/40 pointer-events-none z-10" />
        <span className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-white/40 pointer-events-none z-10" />

        <Image
          src={currentImage}
          alt={`${title} — Photograph ${activeIndex + 1}`}
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="object-cover transition-transform duration-700 group-hover:scale-102"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#07090D]/90 via-transparent to-black/20 pointer-events-none" />

        {/* Top Control Bar */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-[#07090D]/85 backdrop-blur-md border border-white/[0.1] font-mono text-[10px] uppercase tracking-wider text-[#93C8FF]">
            <span>ARCHITECTURAL PHOTOGRAPHY</span>
            <span className="text-white/30">|</span>
            <span>{activeIndex + 1} OF {total}</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(true);
            }}
            className="pointer-events-auto p-2 min-w-[44px] min-h-[44px] flex items-center justify-center bg-[#07090D]/85 backdrop-blur-md border border-white/[0.1] hover:border-[#93C8FF] text-white hover:text-[#93C8FF] transition-colors"
            title="Open Fullscreen Lightbox"
            aria-label="Open fullscreen gallery viewer"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Arrows */}
        {total > 1 && (
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={handlePrev}
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-[#07090D]/85 backdrop-blur-md border border-white/[0.1] hover:border-[#93C8FF] text-white hover:text-[#93C8FF] transition-all"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 min-w-[44px] min-h-[44px] flex items-center justify-center bg-[#07090D]/85 backdrop-blur-md border border-white/[0.1] hover:border-[#93C8FF] text-white hover:text-[#93C8FF] transition-all"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Bottom Metadata Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 p-4 sm:p-5 bg-[#07090D]/90 backdrop-blur-md border border-white/[0.12] rounded-2xl">
          <div className="space-y-1">
            <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-[#93C8FF] block font-semibold">
              OFFICIAL PHOTOGRAPHIC GALLERY
            </span>
            <p className="font-serif text-lg sm:text-xl text-[#F5F4EF] font-medium leading-tight">
              {title}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-[#B8C2CF] font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#A97F60]" />
              <span>{location}</span>
            </div>
          </div>

          <div className="sm:text-right">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#8A95A5] block">
              TRANSACTION VALUATION
            </span>
            <span className="font-serif text-xl sm:text-2xl text-[#93C8FF] font-medium">
              {price}
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnails Strip */}
      {total > 1 && (
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar">
          {images.map((img, idx) => {
            const isSelected = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`View photograph ${idx + 1} of ${total}`}
                className={`relative w-24 sm:w-28 aspect-[16/10] shrink-0 border transition-all overflow-hidden bg-[#1B2028] min-h-[44px] ${
                  isSelected
                    ? "border-[#93C8FF] scale-102 ring-1 ring-[#93C8FF]/50"
                    : "border-white/[0.1] opacity-60 hover:opacity-100 hover:border-white/30"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  loading="lazy"
                  sizes="120px"
                  className="object-cover"
                />
                <span className="absolute bottom-1 right-1 font-mono text-[8px] px-1 bg-[#07090D]/80 text-[#B8C2CF]">
                  {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="High-resolution photograph inspection lightbox"
          className="fixed inset-0 z-50 bg-[#07090D]/98 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between border-b border-white/[0.1] pb-4">
            <div className="space-y-0.5">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#93C8FF] block">
                HIGH-RESOLUTION INSPECTION VIEW
              </span>
              <p className="font-serif text-lg text-[#F5F4EF] font-medium">{title}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-[#8A95A5]">
                {activeIndex + 1} / {total}
              </span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/[0.15] hover:border-[#93C8FF] text-white hover:text-[#93C8FF] transition-colors"
                aria-label="Close fullscreen view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Stage */}
          <div className="relative flex-1 w-full my-4 flex items-center justify-center">
            <div className="relative w-full h-full max-h-[75vh]">
              <Image
                src={currentImage}
                alt={`${title} full size photograph ${activeIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {total > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-6 p-4 min-w-[48px] min-h-[48px] flex items-center justify-center bg-[#07090D]/80 border border-white/[0.15] hover:border-[#93C8FF] text-white hover:text-[#93C8FF] transition-all"
                  aria-label="Previous photograph"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-6 p-4 min-w-[48px] min-h-[48px] flex items-center justify-center bg-[#07090D]/80 border border-white/[0.15] hover:border-[#93C8FF] text-white hover:text-[#93C8FF] transition-all"
                  aria-label="Next photograph"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Thumbnails */}
          {total > 1 && (
            <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 border-t border-white/[0.1]">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View photograph ${idx + 1}`}
                  className={`relative w-16 h-12 shrink-0 border transition-all overflow-hidden min-h-[44px] ${
                    activeIndex === idx
                      ? "border-[#93C8FF] scale-105"
                      : "border-white/[0.1] opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
