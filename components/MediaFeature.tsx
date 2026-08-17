import React from "react";
import OfficialYouTube from "./OfficialYouTube";
import { fetchOfficialYouTubeVideos } from "@/lib/youtubeAuto";

export default async function MediaFeature() {
  const videos = await fetchOfficialYouTubeVideos();
  const featuredVideoId = videos.length > 0 ? videos[0].youtubeId : "zl56URC7eFM";
  const featuredTitle = videos.length > 0 ? videos[0].title : "Real estate is one of the biggest financial decisions most people will ever make.";

  return (
    <section
      id="scene-watch"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-transparent py-32 md:py-44 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-7xl mx-auto w-full space-y-12 my-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>07 / 08</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>WATCH & MEDIA</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              Executive Broadcast Lounge
            </h2>
          </div>

          <div className="font-mono text-xs text-text-secondary/80 uppercase tracking-widest">
            DIGITAL BROADCASTS · CRISTIAN VĂDUVA
          </div>
        </div>

        {/* Cinematic Media Integration */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Official Cinema Player */}
          <div className="lg:col-span-7">
            <div className="relative aspect-video w-full overflow-hidden border border-surface-secondary/80 shadow-2xl bg-black/80">
              <OfficialYouTube videoId={featuredVideoId} title={featuredTitle} />
            </div>
          </div>

          {/* Right Column: Editorial Broadcast Information */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-1.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                LATEST BROADCAST
              </p>
              <h3 className="font-display text-xl sm:text-2xl text-text-primary leading-snug">
                {featuredTitle}
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-text-secondary/90 font-light leading-relaxed">
              Direct perspectives on prime European acquisitions, real estate liquidity cycles, and strategic wealth preservation.
            </p>

            <div className="pt-3 border-t border-surface-secondary/60">
              <a
                href={`https://www.youtube.com/watch?v=${featuredVideoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 py-3.5 bg-accent text-background font-mono text-xs font-semibold uppercase tracking-[0.2em] hover:bg-accent/90 transition-quick text-center shadow-xl"
              >
                WATCH BROADCAST ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
