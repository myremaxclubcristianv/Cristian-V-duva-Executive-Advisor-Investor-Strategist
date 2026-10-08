"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
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
  Grid,
} from "lucide-react";

const CATEGORIES = [
  "ALL",
  "PORTRAITS",
  "REAL ESTATE",
  "BUSINESS",
  "EDITORIAL",
  "LIFE",
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
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-[#0A0A0A] text-[#F5F5F7] selection:bg-[#B89B72]/30 selection:text-white">
      <Navigation />

      <main className="relative z-10 flex-1 pt-28 sm:pt-36 pb-28">
        <div className="site-container space-y-12">
          
          {/* Header Cadran */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#B89B72] font-semibold">
                <Link href="/" className="hover:underline flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> ACASĂ
                </Link>
                <span>/</span>
                <span>ARHIVĂ FOTOGRAFICĂ & MONOGRAPH</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                Galeria Executivă Cristian Văduva
              </h1>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Monograph vizual curatoriat ce cuprinde portrete oficiale, reședințe de lux din București și Monaco, consultanță privată și călătorii internaționale.
              </p>
            </div>

            {/* Admin Upload Shortcut */}
            <div className="flex items-center gap-3">
              <Link
                href="/admin"
                className="px-5 py-3 rounded-2xl bg-[#B89B72] hover:bg-[#C9AE85] text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-[#B89B72]/20"
              >
                <UploadCloud className="w-4 h-4" />
                <span>Încarcă Poze (Admin)</span>
              </Link>
            </div>
          </div>

          {/* Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedPhotoIndex(null);
                }}
                className={`font-mono text-xs uppercase tracking-[0.2em] px-4 py-2.5 rounded-2xl border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#B89B72] text-black border-[#B89B72] font-semibold shadow-lg shadow-[#B89B72]/15"
                    : "bg-white/5 text-neutral-300 border-white/10 hover:border-[#B89B72] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Bento Grid */}
          {loading ? (
            <div className="py-24 text-center text-neutral-400">
              <div className="w-8 h-8 border-2 border-[#B89B72] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="font-mono text-xs uppercase tracking-wider">Se încarcă arhiva foto completă...</p>
            </div>
          ) : filteredPhotos.length === 0 ? (
            <div className="py-24 text-center text-neutral-500 space-y-3">
              <ImageIcon className="w-12 h-12 mx-auto opacity-30 text-[#B89B72]" />
              <p className="text-base font-medium text-neutral-300">Nu există fotografii în această categorie.</p>
              <Link
                href="/admin"
                className="inline-flex items-center gap-2 text-xs font-mono text-[#B89B72] hover:underline"
              >
                <Lock className="w-3.5 h-3.5" /> Fii primul care încarcă o fotografie
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className="bg-[#141414] border border-white/10 hover:border-[#B89B72]/60 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt || photo.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase text-[#B89B72]">
                      {photo.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#B89B72] transition-colors">
                      {photo.title}
                    </h3>

                    {photo.caption && (
                      <p className="text-xs text-neutral-400 font-light line-clamp-2">
                        {photo.caption}
                      </p>
                    )}

                    <div className="flex items-center gap-3 pt-2 text-[11px] font-mono text-neutral-500 border-t border-white/5">
                      {photo.location && (
                        <span className="flex items-center gap-1 text-neutral-400">
                          <MapPin className="w-3 h-3 text-[#B89B72]" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
          <div className="relative w-full max-w-6xl bg-[#111111] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Lightbox Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#161616]">
              <div className="space-y-0.5 min-w-0 pr-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#B89B72]">
                  <span>{activePhoto.category}</span>
                  {activePhoto.location && <span>· {activePhoto.location}</span>}
                  {activePhoto.year && <span>· {activePhoto.year}</span>}
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-white truncate">
                  {activePhoto.title}
                </h3>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                  title="Anterior (Săgeată Stânga)"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                  title="Următor (Săgeată Dreapta)"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={handleClose}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer ml-2"
                  title="Închide (Esc)"
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
            <div className="p-4 sm:p-6 bg-[#141414] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-neutral-300">
              <p className="font-light max-w-3xl">{activePhoto.caption || activePhoto.title}</p>
              <div className="font-mono text-xs text-neutral-500 shrink-0">
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
