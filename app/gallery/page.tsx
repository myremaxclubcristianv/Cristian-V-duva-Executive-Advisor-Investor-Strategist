"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { galleryItems, GalleryCategory, GalleryItem } from "@/lib/gallery";

const categories: GalleryCategory[] = [
  "ALL",
  "PORTRAITS",
  "LIFE",
  "BUSINESS",
  "TRAVEL",
  "REAL ESTATE",
  "MEDIA",
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("ALL");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "ALL"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const currentModalItem: GalleryItem | null =
    selectedImageIndex !== null ? filteredItems[selectedImageIndex] || null : null;

  const handleNext = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
  }, [selectedImageIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex(
      (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
    );
  }, [selectedImageIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, handleClose, handleNext, handlePrev]);

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-[#F7F7F5] text-[#111111]">
      <Navigation />

      <main className="relative z-10 flex-1 pt-28 sm:pt-36 pb-20">
        <div className="site-container space-y-12">
          {/* Header */}
          <div className="space-y-4 border-b border-black/5 pb-8">
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-[#B89B72] font-semibold">
              <Link href="/" className="hover:underline">HOME</Link>
              <span>/</span>
              <span>PERSONAL & PROFESSIONAL GALLERY</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl text-[#111111] tracking-tight">
              Photography Monograph & Archive
            </h1>
            <p className="font-sans text-base text-[#6B6B6B] font-light max-w-2xl leading-relaxed">
              Curated visual history covering executive engagements, real estate holdings, lifestyle moments, and international travels.
            </p>
          </div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 border-b border-black/5 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedImageIndex(null);
                }}
                className={`font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 border transition-colors cursor-pointer min-h-[44px] ${
                  activeCategory === cat
                    ? "bg-[#111111] text-[#F7F7F5] border-[#111111] font-semibold"
                    : "bg-[#FFFFFF] text-[#6B6B6B] border-black/10 hover:border-[#B89B72] hover:text-[#111111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry / Editorial Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setSelectedImageIndex(idx)}
                className="space-y-3 cursor-pointer group p-3 bg-[#FFFFFF] border border-black/5 shadow-sm hover:border-[#B89B72]/40 transition-all"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8E8E5]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-[#111111]/80 text-[#F7F7F5] font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 backdrop-blur-sm">
                    {item.category}
                  </div>
                </div>

                <div className="space-y-1 pt-1 px-1">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#B89B72] font-semibold">
                    <span>{item.subtitle || item.category}</span>
                    <span>{item.year || "2026"}</span>
                  </div>
                  <h3 className="font-display text-lg text-[#111111] leading-snug group-hover:text-[#B89B72] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#6B6B6B] font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Fullscreen Photo Viewer Modal */}
      {currentModalItem !== null && selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#111111]/95 backdrop-blur-xl flex flex-col justify-between p-6 text-white"
          role="dialog"
          aria-modal="true"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="font-mono text-xs uppercase tracking-widest text-[#E6D5C0]">
              {selectedImageIndex + 1} / {filteredItems.length} · {currentModalItem.category}
            </div>
            <button
              onClick={handleClose}
              className="font-mono text-xs uppercase tracking-widest text-white hover:text-[#E6D5C0] p-2 focus:outline-none min-h-[44px]"
            >
              CLOSE ✕
            </button>
          </div>

          {/* Modal Image Body */}
          <div className="relative flex-1 my-6 flex items-center justify-center">
            <div className="relative w-full h-full max-w-5xl max-h-[75vh]">
              <Image
                src={currentModalItem.src}
                alt={currentModalItem.title}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {/* Prev / Next Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white font-mono text-sm px-4 py-3 border border-white/20 touch-active"
              aria-label="Previous image"
            >
              ←
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white font-mono text-sm px-4 py-3 border border-white/20 touch-active"
              aria-label="Next image"
            >
              →
            </button>
          </div>

          {/* Modal Footer Caption */}
          <div className="border-t border-white/10 pt-4 max-w-4xl mx-auto w-full text-center space-y-1">
            <h4 className="font-display text-xl text-white">{currentModalItem.title}</h4>
            <p className="font-sans text-xs text-[#A1A09B] font-light">{currentModalItem.caption}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
