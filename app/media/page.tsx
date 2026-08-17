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
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <section className="py-section-lg sm:py-section-xl bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
                Media
              </p>
              <h1 className="font-serif text-hero-lg sm:text-hero-xl text-text-primary">
                Media Archive
              </h1>
              <p className="text-text-secondary text-body-md sm:text-body-lg px-4">
                Executive insights, property tours, market analysis, and photography.
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                  activeTab === "all"
                    ? "bg-accent text-background"
                    : "border border-surface-primary text-text-secondary hover:border-text-primary hover:text-text-primary"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("photos")}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                  activeTab === "photos"
                    ? "bg-accent text-background"
                    : "border border-surface-primary text-text-secondary hover:border-text-primary hover:text-text-primary"
                }`}
              >
                Photos
              </button>
              <button
                onClick={() => setActiveTab("videos")}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                  activeTab === "videos"
                    ? "bg-accent text-background"
                    : "border border-surface-primary text-text-secondary hover:border-text-primary hover:text-text-primary"
                }`}
              >
                Videos
              </button>
              <button
                onClick={() => setActiveTab("shorts")}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                  activeTab === "shorts"
                    ? "bg-accent text-background"
                    : "border border-surface-primary text-text-secondary hover:border-text-primary hover:text-text-primary"
                }`}
              >
                Shorts
              </button>
            </div>
          </div>
        </section>

        {/* Content based on active tab */}
        {(activeTab === "all" || activeTab === "photos") && (
          <section className="py-section-lg sm:py-section-xl bg-surface-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
                  Photography
                </p>
                <PhotoGallery showAll={true} />
              </div>
            </div>
          </section>
        )}

        {(activeTab === "all" || activeTab === "videos" || activeTab === "shorts") && (
          <VideoLibrary />
        )}

        <YouTubeChannelCTA />
      </main>
      <Footer />
    </div>
  );
}
