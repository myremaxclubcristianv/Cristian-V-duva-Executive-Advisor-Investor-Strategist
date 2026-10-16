"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import { StoredPhoto } from "@/lib/photoStore";
import {
  Image as ImageIcon,
  Lock,
  MapPin,
  Calendar,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  UploadCloud,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const CATEGORIES = [
  "ALL",
  "PORTRAITS",
  "REAL ESTATE",
  "BUSINESS",
  "EDITORIAL",
  "LIFESTYLE",
  "TRAVEL",
  "MEDIA",
];

export default function GalleryPage() {
  const [photos, setPhotos] = useState<StoredPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadPhotos() {
      try {
        const res = await fetch("/api/photos");
        const data = await res.json();
        if (data.success && Array.isArray(data.photos)) {
          setPhotos(data.photos);
        }
      } catch (err) {
        console.error("Error loading gallery photos:", err);
      } finally {
        setLoading(false);
      }
    }
    loadPhotos();
  }, []);

  const filteredPhotos =
    activeCategory === "ALL"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const activePhoto =
    selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] || null : null;

  const handleNext = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handlePrev = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const handleClose = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, handleClose, handleNext, handlePrev]);

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative z-10 flex-1 pt-28 sm:pt-36 pb-24">
        <div className="site-container space-y-12">
          {/* Header Cadran */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#93C8FF] font-semibold">
                <Link href="/" className="hover:underline flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> OVERVIEW
                </Link>
                <span>/</span>
                <span>VISUAL MONOGRAPH ARCHIVE</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] tracking-tight">
                Executive Visual Monograph
              </h1>
              <p className="font-sans text-sm sm:text-base text-[#B8C2CF] font-light leading-relaxed">
                Curated photographic monograph encompassing official portraits, ultra-prime European residences in Bucharest and Monaco, private advisory salons, and cross-border operations.
              </p>
            </div>

            {/* Admin Upload Shortcut */}
            <div className="flex items-center gap-3">
              <Link
                href="/admin"
                className="px-5 py-3 border border-[#93C8FF]/40 bg-[#93C8FF]/10 hover:bg-[#93C8FF]/20 text-[#93C8FF] hover:text-[#F5F4EF] font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Archive Manager (Admin)</span>
              </Link>
            </div>
          </div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedPhotoIndex(null);
                }}
                className={`font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#93C8FF] text-[#07090D] border-[#93C8FF] font-bold"
                    : "bg-[#0C1119] text-[#B8C2CF] border-white/[0.08] hover:border-[#93C8FF] hover:text-[#F5F4EF]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Bento Grid */}
          {loading ? (
            <div className="py-24 text-center text-[#8A95A5]">
              <div className="w-8 h-8 border-2 border-[#93C8FF] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="font-mono text-xs uppercase tracking-wider">Se încarcă arhiva foto completă...</p>
            </div>
          ) : filteredPhotos.length === 0 ? (
            <div className="py-24 text-center text-[#8A95A5] space-y-3">
              <ImageIcon className="w-12 h-12 mx-auto opacity-30 text-[#93C8FF]" />
              <p className="font-sans text-base text-[#F5F4EF]">Nu există fotografii în această categorie.</p>
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#93C8FF] hover:underline"
              >
                <Lock className="w-3.5 h-3.5" /> Adaugă prima fotografie
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className="bg-[#0C1119] border border-white/[0.1] hover:border-[#93C8FF]/60 overflow-hidden group cursor-pointer transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt || photo.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07090D] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute top-3 left-3 px-2 py-1 bg-[#07090D]/85 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono uppercase text-[#93C8FF]">
                      {photo.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl text-[#F5F4EF] group-hover:text-[#93C8FF] transition-colors">
                      {photo.title}
                    </h3>

                    {photo.caption && (
                      <p className="font-sans text-xs text-[#B8C2CF] font-light line-clamp-2">
                        {photo.caption}
                      </p>
                    )}

                    <div className="flex items-center gap-3 pt-3 text-[11px] font-mono text-[#8A95A5] border-t border-white/[0.06]">
                      {photo.location && (
                        <span className="flex items-center gap-1 text-[#D8D0C2]">
                          <MapPin className="w-3 h-3 text-[#93C8FF]" />
                          {photo.location}
                        </span>
                      )}
                      {photo.year && <span>· {photo.year}</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#07090D]/95 backdrop-blur-2xl">
          <div className="relative w-full max-w-5xl bg-[#0C1119] border border-white/[0.15] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/[0.1] bg-[#1B2028]">
              <div className="space-y-0.5 min-w-0 pr-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#93C8FF]">
                  <span>{activePhoto.category}</span>
                  {activePhoto.location && <span>· {activePhoto.location}</span>}
                  {activePhoto.year && <span>· {activePhoto.year}</span>}
                </div>
                <h3 className="font-serif text-lg sm:text-2xl text-[#F5F4EF] truncate">
                  {activePhoto.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrev}
                  className="p-2 border border-white/[0.1] hover:bg-white/[0.05] text-[#F5F4EF] hover:border-[#93C8FF] transition-colors cursor-pointer"
                  title="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 border border-white/[0.1] hover:bg-white/[0.05] text-[#F5F4EF] hover:border-[#93C8FF] transition-colors cursor-pointer"
                  title="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleClose}
                  className="p-2 border border-white/[0.1] hover:bg-white/[0.05] text-[#F5F4EF] hover:border-[#93C8FF] transition-colors cursor-pointer"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Media Viewport */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black flex-1 min-h-[300px]">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Footer */}
            <div className="p-4 sm:p-6 bg-[#0C1119] border-t border-white/[0.1] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-[#8A95A5]">
              <p className="font-sans font-light max-w-3xl text-[#F5F4EF]">{activePhoto.caption || activePhoto.title}</p>
              <div className="font-mono text-xs text-[#93C8FF] shrink-0">
                {selectedPhotoIndex !== null ? selectedPhotoIndex + 1 : 1} / {filteredPhotos.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
