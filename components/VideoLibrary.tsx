"use client";

import { useState } from "react";
import { getAllVideos, getAllShorts } from "@/lib/videos";
import VideoEmbed from "./VideoEmbed";
import { cleanText } from "@/lib/cleanText";

interface VideoLibraryProps {
  filterType?: "all" | "video" | "short";
}

export default function VideoLibrary({ filterType = "all" }: VideoLibraryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<"all" | "video" | "short">(filterType);

  const categories = ["all", "Executive", "Real Estate", "Business", "Luxury Real Estate", "Investments", "Market Intelligence"];

  const allVideos = getAllVideos();
  const allShorts = getAllShorts();

  let displayedVideos = selectedType === "short" ? allShorts :
                      selectedType === "video" ? allVideos :
                      [...allVideos, ...allShorts];

  if (selectedCategory !== "all") {
    displayedVideos = displayedVideos.filter(v => v.category === selectedCategory);
  }

  const videoCount = displayedVideos.filter(v => v.type === "video").length;
  const shortCount = displayedVideos.filter(v => v.type === "short").length;

  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>OFFICIAL BROADCASTS</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>YOUTUBE VAULT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
              Broadcast Archive
            </h2>
          </div>
          <div className="font-mono text-xs text-text-secondary/80 uppercase tracking-widest">
            {videoCount} BROADCASTS · {shortCount} SHORTS
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-4">
          {/* Format Type Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType("all")}
              className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-quick ${
                selectedType === "all"
                  ? "bg-accent text-background font-semibold"
                  : "border border-surface-secondary/80 text-text-secondary/90 hover:border-accent hover:text-accent bg-surface-primary/50"
              }`}
            >
              All Formats ({allVideos.length + allShorts.length})
            </button>
            <button
              onClick={() => setSelectedType("video")}
              className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-quick ${
                selectedType === "video"
                  ? "bg-accent text-background font-semibold"
                  : "border border-surface-secondary/80 text-text-secondary/90 hover:border-accent hover:text-accent bg-surface-primary/50"
              }`}
            >
              Long-Form ({allVideos.length})
            </button>
            <button
              onClick={() => setSelectedType("short")}
              className={`px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-quick ${
                selectedType === "short"
                  ? "bg-accent text-background font-semibold"
                  : "border border-surface-secondary/80 text-text-secondary/90 hover:border-accent hover:text-accent bg-surface-primary/50"
              }`}
            >
              Executive Shorts ({allShorts.length})
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition-quick ${
                  selectedCategory === category
                    ? "border border-accent text-accent bg-accent/10 font-semibold"
                    : "border border-surface-secondary/60 text-text-secondary/70 hover:border-text-secondary hover:text-text-primary bg-transparent"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        {displayedVideos.length > 0 ? (
          <div className={`grid gap-8 ${
            selectedType === "short" || selectedCategory === "Shorts"
              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}>
            {displayedVideos.map((video) => (
              <article
                key={video.id}
                className="bg-surface-primary border border-surface-secondary/80 p-5 space-y-4 shadow-xl hover:border-accent/40 transition-quick flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="border border-surface-secondary/60 overflow-hidden bg-background">
                    <VideoEmbed
                      youtubeUrl={video.youtubeUrl}
                      title={cleanText(video.title)}
                      thumbnail={video.thumbnail}
                      isShort={video.type === "short"}
                      className="w-full"
                    />
                  </div>

                  {video.title && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between font-mono text-[10px] text-accent">
                        <span className="uppercase tracking-widest">{video.category || "BRIEFING"}</span>
                        {video.publishedAt && <span className="text-text-secondary/60">{video.publishedAt}</span>}
                      </div>

                      <h3 className="font-display text-lg sm:text-xl text-text-primary group-hover:text-accent transition-colors leading-snug line-clamp-2">
                        {cleanText(video.title)}
                      </h3>

                      {video.description && (
                        <p className="font-sans text-xs text-text-secondary/90 line-clamp-2 leading-relaxed font-light">
                          {cleanText(video.description)}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-surface-secondary/50 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-text-secondary/70">YouTube Official</span>
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent uppercase tracking-widest hover:underline"
                  >
                    WATCH ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-surface-primary border border-surface-secondary/60 p-8">
            <p className="font-mono text-sm text-text-secondary uppercase tracking-wider">
              No broadcasts available in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
