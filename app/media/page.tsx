"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import VideoLibrary from "@/components/VideoLibrary";
import PhotoGallery from "@/components/PhotoGallery";
import YouTubeChannelCTA from "@/components/YouTubeChannelCTA";
import Footer from "@/components/Footer";

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<"all" | "photos" | "videos" | "shorts">("all");

  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Navigation />
      <main className="flex-1 pt-24">
        {/* Editorial Header */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-surface-secondary/50">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
              <span>BROADCASTS & GALLERY</span>
              <span className="w-6 h-[1px] bg-accent/40" />
              <span>MEDIA ARCHIVE</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-text-primary leading-[1.06] tracking-tight">
              Executive Broadcasts &<br />
              <span className="text-accent italic font-normal">Media Archive.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-text-secondary/90 font-light max-w-2xl leading-relaxed pt-2">
              Official video commentary, property masterclasses, market analysis briefings, and architectural photography.
            </p>

            {/* Tab Navigation - Editorial Filter Buttons */}
            <div className="flex flex-wrap gap-3 pt-6">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-quick ${
                  activeTab === "all"
                    ? "bg-accent text-background font-semibold"
                    : "border border-surface-secondary/80 text-text-secondary/90 hover:border-accent hover:text-accent bg-surface-primary/60"
                }`}
              >
                All Content
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-quick ${
                  activeTab === "videos"
                    ? "bg-accent text-background font-semibold"
                    : "border border-surface-secondary/80 text-text-secondary/90 hover:border-accent hover:text-accent bg-surface-primary/60"
                }`}
              >
                Broadcasts
              </button>
              <button
                onClick={() => setActiveTab("shorts")}
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-quick ${
                  activeTab === "shorts"
                    ? "bg-accent text-background font-semibold"
                    : "border border-surface-secondary/80 text-text-secondary/90 hover:border-accent hover:text-accent bg-surface-primary/60"
                }`}
              >
                Executive Shorts
              </button>
              <button
                onClick={() => setActiveTab("photos")}
                className={`px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-quick ${
                  activeTab === "photos"
                    ? "bg-accent text-background font-semibold"
                    : "border border-surface-secondary/80 text-text-secondary/90 hover:border-accent hover:text-accent bg-surface-primary/60"
                }`}
              >
                Photography
              </button>
            </div>
          </div>
        </section>

        {/* Content based on active tab */}
        {(activeTab === "all" || activeTab === "videos" || activeTab === "shorts") && (
          <VideoLibrary filterType={activeTab === "all" ? "all" : activeTab === "videos" ? "video" : "short"} />
        )}

        {(activeTab === "all" || activeTab === "photos") && (
          <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-surface-secondary/40">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-surface-secondary/70 pb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-accent font-semibold">
                    <span>PORTFOLIO & RESIDENCE</span>
                    <span className="w-6 h-[1px] bg-accent/40" />
                    <span>EXHIBIT</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-[1.08] tracking-tight">
                    Architectural & Lifestyle Photography
                  </h2>
                </div>
              </div>
              <PhotoGallery showAll={true} />
            </div>
          </section>
        )}

        <YouTubeChannelCTA />
      </main>
      <Footer />
    </div>
  );
}
