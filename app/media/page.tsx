"use client";

import { useState } from "react";
import ExecutiveHeader from "@/components/ExecutiveHeader";
import VideoLibrary from "@/components/VideoLibrary";
import PhotoGallery from "@/components/PhotoGallery";
import YouTubeChannelCTA from "@/components/YouTubeChannelCTA";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState<"all" | "photos" | "videos" | "shorts">("all");

  return (
    <Section variant="dark" className="flex flex-col min-h-screen bg-[#07090D] text-[#F5F4EF] selection:bg-[#93C8FF]/25 selection:text-[#F5F4EF]">
      <ExecutiveHeader />

      <main className="flex-1 pt-28 sm:pt-36">
        {/* Editorial Header */}
        <section className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-b border-white/[0.08] bg-arch-grid">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#93C8FF] font-semibold">
              <span>BROADCASTS & MONOGRAPH</span>
              <span className="w-8 h-[1px] bg-[#93C8FF]/40" />
              <span>MEDIA ARCHIVE</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#F5F4EF] leading-[1.04] tracking-tight">
              Executive Broadcasts &<br />
              <span className="text-[#A97F60] italic font-normal">Media Archive.</span>
            </h1>
            <p className="font-sans text-base sm:text-lg text-[#B8C2CF] font-light max-w-2xl leading-relaxed pt-2">
              Official video commentary, property masterclasses, market analysis briefings, and architectural photography.
            </p>

            {/* Tab Navigation - Apple Segmented Control */}
            <div className="pt-6">
              <div className="inline-flex p-1.5 rounded-full border border-white/[0.08] bg-[#07090D]/90 backdrop-blur-xl shadow-xl gap-1 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "all"
                      ? "bg-[#93C8FF] text-[#07090D] font-bold shadow-md shadow-[#93C8FF]/20"
                      : "text-[#B8C2CF] hover:text-[#F5F4EF] hover:bg-white/[0.05]"
                  }`}
                >
                  All Content
                </button>
                <button
                  onClick={() => setActiveTab("videos")}
                  className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "videos"
                      ? "bg-[#93C8FF] text-[#07090D] font-bold shadow-md shadow-[#93C8FF]/20"
                      : "text-[#B8C2CF] hover:text-[#F5F4EF] hover:bg-white/[0.05]"
                  }`}
                >
                  Broadcasts
                </button>
                <button
                  onClick={() => setActiveTab("shorts")}
                  className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "shorts"
                      ? "bg-[#93C8FF] text-[#07090D] font-bold shadow-md shadow-[#93C8FF]/20"
                      : "text-[#B8C2CF] hover:text-[#F5F4EF] hover:bg-white/[0.05]"
                  }`}
                >
                  Executive Shorts
                </button>
                <button
                  onClick={() => setActiveTab("photos")}
                  className={`px-5 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === "photos"
                      ? "bg-[#93C8FF] text-[#07090D] font-bold shadow-md shadow-[#93C8FF]/20"
                      : "text-[#B8C2CF] hover:text-[#F5F4EF] hover:bg-white/[0.05]"
                  }`}
                >
                  Photography
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content based on active tab */}
        {(activeTab === "all" || activeTab === "videos" || activeTab === "shorts") && (
          <VideoLibrary filterType={activeTab === "all" ? "all" : activeTab === "videos" ? "video" : "short"} />
        )}

        {(activeTab === "all" || activeTab === "photos") && (
          <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 border-t border-white/[0.08]">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#93C8FF] font-semibold">
                    <span>PORTFOLIO & RESIDENCE</span>
                    <span className="w-8 h-[1px] bg-[#93C8FF]/40" />
                    <span>EXHIBIT</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F4EF] tracking-tight">
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
      </Section>

  );
}
