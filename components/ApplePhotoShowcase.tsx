"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { StoredPhoto } from "@/lib/photoStore";
import { Image as ImageIcon, ArrowRight, MapPin, Calendar, X, ChevronLeft, ChevronRight, Lock } from "lucide-react";

export default function ApplePhotoShowcase() {
  const [photos, setPhotos] = useState<StoredPhoto[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch("/api/photos");
        const data = await res.json();
        if (data.success && Array.isArray(data.photos)) {
          setPhotos(data.photos);
        }
      } catch (err) {
        console.error("Error fetching showcase photos:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, []);

  const categories = ["ALL", "PORTRAITS", "REAL ESTATE", "BUSINESS", "TRAVEL", "LIFE"];

  const filteredPhotos =
    activeCategory === "ALL"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const displayPhotos = filteredPhotos.slice(0, 6);

  const activePhoto = selectedPhotoIndex !== null ? displayPhotos[selectedPhotoIndex] : null;

  const handleNext = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex + 1) % displayPhotos.length);
  };

  const handlePrev = () => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((selectedPhotoIndex - 1 + displayPhotos.length) % displayPhotos.length);
  };

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#0B0B0B] text-[#F5F5F7] border-t border-white/10">
      <div className="site-container space-y-12 sm:space-y-16">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-[#B89B72]">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>GALERIE FOTO & MONOGRAPH VIZUAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Arhiva Executivă & Stil de Viață
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light">
              Momente din activitatea de consultanță, proprietăți reprezentate în București și Monaco, portrete oficiale și arhitectură de elită.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/admin"
              className="px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-2 transition-all"
            >
              <Lock className="w-3.5 h-3.5 text-[#B89B72]" />
              <span>Încarcă Poze (Admin)</span>
            </Link>

            <Link
              href="/gallery"
              className="px-5 py-2.5 rounded-2xl bg-[#B89B72] hover:bg-[#C9AE85] text-black text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 transition-all shadow-lg shadow-[#B89B72]/20 group"
            >
              <span>Explorează Toată Galeria</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedPhotoIndex(null);
              }}
              className={`px-4 py-2 rounded-2xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-white text-black font-semibold shadow-md"
                  : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Gallery Grid */}
        {loading ? (
          <div className="py-20 text-center text-neutral-400">
            <div className="w-8 h-8 border-2 border-[#B89B72] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="font-mono text-xs uppercase tracking-wider">Se încarcă arhiva foto...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {displayPhotos.map((photo, index) => {
              // Create dynamic bento span layout
              const isLarge = index === 0 || index === 3;
              const colSpan = isLarge ? "md:col-span-7" : "md:col-span-5";

              return (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className={`${colSpan} bg-[#141414] border border-white/10 rounded-3xl overflow-hidden group cursor-pointer hover:border-[#B89B72]/50 transition-all duration-300 relative shadow-2xl flex flex-col justify-end min-h-[360px] sm:min-h-[420px]`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt || photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="relative z-10 p-6 sm:p-8 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase text-[#B89B72]">
                        {photo.category}
                      </span>
                      {photo.location && (
                        <span className="text-[11px] text-neutral-300 font-mono flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#B89B72]" />
                          {photo.location}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-[#B89B72] transition-colors">
                      {photo.title}
                    </h3>

                    {photo.caption && (
                      <p className="text-xs sm:text-sm text-neutral-300 font-light line-clamp-2">
                        {photo.caption}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* High-Resolution Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
          <div className="relative w-full max-w-5xl bg-[#111111] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#161616]">
              <div className="space-y-0.5">
                <span className="text-xs font-mono uppercase text-[#B89B72]">
                  {activePhoto.category} · {activePhoto.location || "Monograph"}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  {activePhoto.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedPhotoIndex(null)}
                  className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Image Area */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black">
              <Image
                src={activePhoto.src}
                alt={activePhoto.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Bottom Caption Info */}
            <div className="p-4 sm:p-6 bg-[#141414] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-neutral-300">
              <p className="font-light max-w-2xl">{activePhoto.caption || activePhoto.title}</p>
              <div className="font-mono text-xs text-neutral-500 shrink-0">
                {selectedPhotoIndex !== null ? selectedPhotoIndex + 1 : 1} / {displayPhotos.length}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
