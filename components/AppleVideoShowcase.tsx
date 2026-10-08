"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ExternalLink, X, Sparkles, CheckCircle2, RefreshCw } from "lucide-react";
import { YoutubeIcon } from "@/components/icons/SocialIcons";
import { Video } from "@/lib/youtubeAuto";

interface VideoItemDisplay {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
  thumbnail?: string;
  publishedDate?: string;
  category: string;
  youtubeUrl: string;
}

export default function AppleVideoShowcase() {
  const [videos, setVideos] = useState<VideoItemDisplay[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState<VideoItemDisplay | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchVideos = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/youtube/videos");
      const data = await res.json();
      if (data.status === "success" && Array.isArray(data.videos) && data.videos.length > 0) {
        setVideos(data.videos);
      } else {
        // Fallback default list if network drops
        setVideos([
          {
            id: "zl56URC7eFM",
            youtubeId: "zl56URC7eFM",
            title: "Real estate is one of the biggest financial decisions most people will ever make.",
            description: "Executive advisory perspective on high-conviction property acquisitions and wealth preservation.",
            thumbnail: "https://img.youtube.com/vi/zl56URC7eFM/hqdefault.jpg",
            publishedDate: "2026",
            category: "REAL ESTATE",
            youtubeUrl: "https://www.youtube.com/watch?v=zl56URC7eFM",
          },
          {
            id: "PzPo7wbtUB4",
            youtubeId: "PzPo7wbtUB4",
            title: "The Negociation That Never Happened | Cristian Văduva | AiXLuxury | Real Estate Talks | Yacht",
            description: "Strategic negotiation dynamics and deal structuring for ultra-prime acquisitions.",
            thumbnail: "https://img.youtube.com/vi/PzPo7wbtUB4/hqdefault.jpg",
            publishedDate: "2026",
            category: "REAL ESTATE",
            youtubeUrl: "https://www.youtube.com/watch?v=PzPo7wbtUB4",
          },
          {
            id: "-INyuje65pc",
            youtubeId: "-INyuje65pc",
            title: "Real estate stops being a job. It becomes a vehicle. I don't just drive power. I create it. AiXLuxury",
            description: "Transforming real estate into a strategic capital and wealth creation vehicle.",
            thumbnail: "https://img.youtube.com/vi/-INyuje65pc/hqdefault.jpg",
            publishedDate: "2026",
            category: "BUSINESS",
            youtubeUrl: "https://www.youtube.com/watch?v=-INyuje65pc",
          },
          {
            id: "U_a3PuepNEI",
            youtubeId: "U_a3PuepNEI",
            title: "Helping you Buy / Sell Protect Finance — Cristian Văduva",
            description: "End-to-end strategic advisory for acquisition, asset protection, and financing.",
            thumbnail: "https://img.youtube.com/vi/U_a3PuepNEI/hqdefault.jpg",
            publishedDate: "2026",
            category: "INVESTMENTS",
            youtubeUrl: "https://www.youtube.com/watch?v=U_a3PuepNEI",
          },
        ]);
      }
    } catch {
      // Fallback
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const heroVideo = videos[0];
  const secondaryVideos = videos.slice(1, 7);

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#090909] text-[#F5F5F7] overflow-hidden">
      {/* Apple TV Subtle Background Flare */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-red-950/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="site-container space-y-12 sm:space-y-16 relative z-10">
        
        {/* Section Header & Channel Status */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase">
                <YoutubeIcon className="w-3.5 h-3.5" />
                Live Channel Auto-Import
              </span>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Sincronizat
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
              Cristian Văduva YouTube TV
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light">
              Episoade exclusive, analize de piață în timp real, tururi de proprietăți ultra-prime și negocieri de capital, importate automat de pe canalul oficial.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={fetchVideos}
              disabled={isRefreshing}
              className="px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-300 flex items-center gap-2 cursor-pointer transition-all"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
              <span>{isRefreshing ? "Se actualizează..." : "Reîmprospătează"}</span>
            </button>

            <a
              href="https://www.youtube.com/@CristianVaduvaCV"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-xs font-mono uppercase tracking-wider font-semibold flex items-center gap-2 transition-all shadow-lg shadow-red-600/20"
            >
              <YoutubeIcon className="w-4 h-4" />
              <span>Abonează-te @CristianVaduvaCV</span>
            </a>
          </div>
        </div>

        {/* Video Showcase Cadrane */}
        {loading ? (
          <div className="py-20 text-center text-neutral-400">
            <div className="w-8 h-8 border-2 border-red-500 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="font-mono text-xs uppercase tracking-wider">Se încarcă transmisia YouTube...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Spotlight Hero Video Cadran (7 Cols) */}
            {heroVideo && (
              <div
                onClick={() => setSelectedVideo(heroVideo)}
                className="lg:col-span-7 bg-[#141414] border border-white/10 rounded-3xl overflow-hidden group cursor-pointer hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between shadow-2xl"
              >
                <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                  <Image
                    src={heroVideo.thumbnail || "https://img.youtube.com/vi/zl56URC7eFM/maxresdefault.jpg"}
                    alt={heroVideo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-red-600/90 group-hover:bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                      <Play className="w-7 sm:w-8 h-7 sm:h-8 fill-white ml-1" />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono uppercase text-[#B89B72]">
                    Episod Recomandat
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                    <span className="text-red-400">@CristianVaduvaCV</span>
                    <span>·</span>
                    <span>YouTube Official</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-red-400 transition-colors">
                    {heroVideo.title}
                  </h3>
                  {heroVideo.description && (
                    <p className="text-sm text-neutral-400 font-light line-clamp-2">
                      {heroVideo.description}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Secondary Bento Videos (5 Cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {secondaryVideos.slice(0, 3).map((video) => (
                <div
                  key={video.id || video.youtubeId}
                  onClick={() => setSelectedVideo(video)}
                  className="bg-[#141414] border border-white/10 rounded-2xl p-4 flex gap-4 items-center group cursor-pointer hover:border-red-500/30 transition-all"
                >
                  <div className="relative w-28 sm:w-32 aspect-[16/9] rounded-xl overflow-hidden bg-black shrink-0">
                    <Image
                      src={video.thumbnail || "https://img.youtube.com/vi/zl56URC7eFM/hqdefault.jpg"}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-red-600/90 text-white flex items-center justify-center">
                        <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 min-w-0 flex-1">
                    <span className="text-[10px] font-mono uppercase text-[#B89B72] block">
                      Video Recente
                    </span>
                    <h4 className="text-xs sm:text-sm font-medium text-white line-clamp-2 group-hover:text-red-400 transition-colors">
                      {video.title}
                    </h4>
                  </div>
                </div>
              ))}

              <Link
                href="/tv"
                className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-300 hover:text-white transition-all group"
              >
                <span>Deschide Arhiva Video Completă ({videos.length}+ episoade)</span>
                <ExternalLink className="w-4 h-4 text-[#B89B72] group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

          </div>
        )}

      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl">
          <div className="relative w-full max-w-4xl bg-[#111111] border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#161616]">
              <div className="flex items-center gap-3">
                <YoutubeIcon className="w-5 h-5 text-red-500" />
                <h3 className="text-sm sm:text-base font-semibold text-white line-clamp-1">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
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
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#141414]">
              <p className="text-xs sm:text-sm text-neutral-400 font-light line-clamp-2">
                {selectedVideo.description || "Transmisie oficială Cristian Văduva."}
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

    </section>
  );
}
