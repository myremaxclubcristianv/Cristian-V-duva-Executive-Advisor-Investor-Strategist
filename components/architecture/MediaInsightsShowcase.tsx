"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight, ArrowUpRight, FileText, Calendar, Clock, Video } from "lucide-react";
import { YoutubeIcon } from "@/components/icons/SocialIcons";
import { videos } from "@/lib/videos";
import { originalInsights } from "@/lib/insights";

export default function MediaInsightsShowcase() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Top 2 featured official videos
  const featuredVideos = videos.filter((v) => v.type === "video").slice(0, 2);
  const featuredInsights = originalInsights.slice(0, 2);

  return (
    <section id="media-insights" className="py-24 sm:py-32 lg:py-40 bg-[#0C1119] text-[#F5F4EF] border-b border-white/[0.08] relative overflow-hidden">
      <div className="site-container space-y-16 sm:space-y-24">
        
        {/* Section Header (Apple Minimalist Typography) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-xs text-[#93C8FF] uppercase tracking-[0.24em] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#93C8FF]" />
              <span>MEDIA OFICIALĂ & ANALIZĂ MACROECONOMICĂ</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F4EF] font-normal tracking-tight">
              Perspective de piață. <span className="text-[#A97F60] italic font-light">Discuții fundamentate.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#86868B] font-light leading-relaxed">
              Comentariu video oficial, analize detaliate privind ciclurile imobiliare și memorii de cercetare publicate periodic.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/media"
              className="apple-action-link text-sm"
            >
              <span>Arhiva media completă</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ── BROADCASTS & RESEARCH COMBINED BENTO ── */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Broadcasts (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between pb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B8C2CF] flex items-center gap-2">
                <YoutubeIcon className="w-4 h-4 text-[#FF0000]" />
                <span>EMISIUNI & INTERVIURI VIDEO</span>
              </span>
              <a
                href="https://www.youtube.com/@CristianVaduvaCV"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] text-[#93C8FF] hover:underline"
              >
                Canalul Oficial YouTube →
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {featuredVideos.map((video) => {
                const rawId = video.youtubeUrl.split("v=")[1]?.split("&")[0] || video.id.replace("yt-", "");
                const isPlaying = activeVideoId === rawId;
                const thumbSrc = video.thumbnail || `https://img.youtube.com/vi/${rawId}/hqdefault.jpg`;

                return (
                  <div
                    key={video.id}
                    className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#07090D] flex flex-col justify-between group hover:border-[#93C8FF]/50 transition-all duration-300"
                  >
                    {/* Video Player or Thumbnail Aperture */}
                    <div className="relative aspect-video w-full bg-black overflow-hidden">
                      {isPlaying ? (
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${rawId}?autoplay=1&rel=0`}
                          title={video.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <div
                          onClick={() => setActiveVideoId(rawId)}
                          className="relative w-full h-full cursor-pointer"
                        >
                          <Image
                            src={thumbSrc}
                            alt={video.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 35vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#93C8FF] group-hover:text-[#07090D] transition-all">
                              <Play className="w-4 h-4 fill-current ml-0.5" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Metadata & Title */}
                    <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[#A97F60] font-semibold block">
                          {video.category}
                        </span>
                        <h3 className="font-serif text-base sm:text-lg text-[#F5F4EF] line-clamp-2 leading-snug group-hover:text-[#93C8FF] transition-colors">
                          {video.title}
                        </h3>
                      </div>

                      <p className="font-sans text-xs text-[#86868B] line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Research Memoranda (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B8C2CF] flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#A97F60]" />
                <span>MEMORANDUMURI DE CERCETARE</span>
              </span>
              <Link href="/insights" className="font-mono text-[11px] text-[#93C8FF] hover:underline">
                Toate Articolele →
              </Link>
            </div>

            <div className="space-y-4">
              {featuredInsights.map((insight) => (
                <article
                  key={insight.id}
                  className="p-6 rounded-2xl border border-white/[0.08] bg-[#07090D] hover:border-white/[0.2] transition-all duration-300 space-y-4 group"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#86868B]">
                    <span className="text-[#A97F60] uppercase tracking-wider font-semibold">
                      {insight.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{insight.readingTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-[#F5F4EF] leading-snug group-hover:text-[#93C8FF] transition-colors">
                    <Link href={`/insights/${insight.slug}`}>
                      {insight.title}
                    </Link>
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#86868B] font-light leading-relaxed line-clamp-2">
                    {insight.excerpt}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/insights/${insight.slug}`}
                      className="apple-action-link text-xs"
                    >
                      <span>Citește analiza completă</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
