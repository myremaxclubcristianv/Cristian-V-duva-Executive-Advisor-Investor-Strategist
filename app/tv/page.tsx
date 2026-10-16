"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import Footer from "@/components/Footer";
import {
  Play,
  ArrowLeft,
  RefreshCw,
  CheckCircle2,
  ExternalLink,
  X,
  Radio,
  SlidersHorizontal,
  Flame,
} from "lucide-react";
import { YoutubeIcon } from "@/components/icons/SocialIcons";

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  thumbnail?: string;
  publishedDate?: string;
  category: string;
  youtubeUrl: string;
}

const CATEGORIES = [
  "ALL",
  "REAL ESTATE",
  "LUXURY REAL ESTATE",
  "INVESTMENTS",
  "BUSINESS",
  "EXECUTIVE",
  "SHORTS",
];

export default function TVPage() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isSyncing, setIsSyncing] = useState(false);

  const loadVideos = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch("/api/youtube/videos");
      const data = await res.json();
      if (data.status === "success" && Array.isArray(data.videos)) {
        setVideos(data.videos);
      }
    } catch (err) {
      console.error("Error loading TV videos:", err);
    } finally {
      setLoading(false);
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await loadVideos();
    };
    fetchData();
  }, []);

  const filteredVideos =
    activeCategory === "ALL"
      ? videos
      : videos.filter((v) =>
          activeCategory === "SHORTS"
            ? v.youtubeUrl?.includes("shorts") || v.category === "SHORTS"
            : v.category?.toUpperCase() === activeCategory
        );

  const heroVideo = videos[0];

  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-x-hidden bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="relative z-10 flex-1 pt-28 sm:pt-36 pb-28">
        <div className="site-container space-y-12">
          
          {/* Top Architectural Broadcast Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#93C8FF] font-semibold">
                <Link href="/" className="hover:underline flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" /> OVERVIEW
                </Link>
                <span>/</span>
                <span className="flex items-center gap-1.5 text-red-400">
                  <Radio className="w-3.5 h-3.5 animate-pulse" /> OFFICIAL YOUTUBE BROADCAST
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] tracking-tight">
                Executive TV & Broadcast Studio
              </h1>
              <p className="font-sans text-sm sm:text-base text-[#B8C2CF] font-light leading-relaxed">
                4K studio video broadcasts, macroeconomic analyses, ultra-prime European property tours, and negotiation masterclasses, synchronized directly from the official YouTube channel.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={loadVideos}
                disabled={isSyncing}
                className="px-4 py-3 bg-[#0C1119] hover:bg-[#1B2028] border border-white/[0.1] text-xs font-mono uppercase tracking-wider text-[#B8C2CF] flex items-center gap-2 cursor-pointer transition-all"
              >
                <RefreshCw className={`w-4 h-4 ${isSyncing ? "animate-spin text-[#93C8FF]" : ""}`} />
                <span>{isSyncing ? "Syncing..." : "Sync Channel"}</span>
              </button>

              <a
                href="https://www.youtube.com/@CristianVaduvaCV"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-red-600/20"
              >
                <YoutubeIcon className="w-4 h-4" />
                <span>Subscribe @CristianVaduvaCV</span>
              </a>
            </div>
          </div>

          {/* Spotlight Hero Video Cadran */}
          {heroVideo && (
            <div
              onClick={() => setSelectedVideo(heroVideo)}
              className="bg-[#0C1119] border border-white/[0.1] hover:border-red-500/50 overflow-hidden cursor-pointer group transition-all duration-300 shadow-2xl relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-8 relative aspect-[16/9] bg-black overflow-hidden">
                  <Image
                    src={heroVideo.thumbnail || "https://img.youtube.com/vi/zl56URC7eFM/maxresdefault.jpg"}
                    alt={heroVideo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                  
                  {/* Play Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 fill-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono uppercase text-[#93C8FF] flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-red-400" />
                    Episod Recomandat
                  </div>
                </div>

                <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between bg-[#1B2028]">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase">
                      <YoutubeIcon className="w-3.5 h-3.5" />
                      Canal Oficial Cristian Văduva
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-red-400 transition-colors">
                      {heroVideo.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#B8C2CF] font-light leading-relaxed">
                      {heroVideo.description || "Episod complet și analiză executivă pe YouTube."}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8A95A5]">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Auto-Synced Live
                    </span>
                    <span className="text-[#93C8FF] group-hover:underline">Rulează Video →</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`font-mono text-xs uppercase tracking-[0.2em] px-4 py-2.5 rounded-2xl border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-red-600 text-white border-red-600 font-semibold shadow-lg shadow-red-600/20"
                    : "bg-white/5 text-neutral-300 border-white/10 hover:border-red-500/40 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid Cadrane */}
          {loading ? (
            <div className="py-24 text-center text-neutral-400">
              <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="font-mono text-xs uppercase tracking-wider">Se sincronizează transmisia YouTube...</p>
            </div>
          ) : filteredVideos.length === 0 ? (
            <div className="py-24 text-center text-neutral-500 space-y-3">
              <YoutubeIcon className="w-12 h-12 mx-auto opacity-30 text-red-500" />
              <p className="text-base font-medium text-neutral-300">Nu există video-uri în această categorie.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <div
                  key={video.id || video.youtubeId}
                  onClick={() => setSelectedVideo(video)}
                  className="bg-[#141414] border border-white/10 hover:border-red-500/50 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                    <Image
                      src={video.thumbnail || "https://img.youtube.com/vi/zl56URC7eFM/hqdefault.jpg"}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 fill-white ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase text-[#B89B72]">
                      {video.category || "Video"}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-base font-semibold text-white group-hover:text-red-400 transition-colors line-clamp-2">
                      {video.title}
                    </h3>
                    {video.description && (
                      <p className="text-xs text-neutral-400 font-light line-clamp-2">
                        {video.description}
                      </p>
                    )}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                      <span>@CristianVaduvaCV</span>
                      <span className="text-[#B89B72]">Deschide Episod →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </main>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl">
          <div className="relative w-full max-w-5xl bg-[#111111] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#161616]">
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <YoutubeIcon className="w-5 h-5 text-red-500 shrink-0" />
                <h3 className="text-sm sm:text-base font-semibold text-white truncate">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId || selectedVideo.id}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-[#141414] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-neutral-400 font-light line-clamp-2">
                {selectedVideo.description || "Transmisie oficială pe canalul Cristian Văduva."}
              </p>
              <a
                href={selectedVideo.youtubeUrl || `https://www.youtube.com/watch?v=${selectedVideo.youtubeId || selectedVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-mono uppercase text-white flex items-center gap-2 shrink-0"
              >
                <span>Deschide pe YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
