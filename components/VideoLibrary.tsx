"use client";

import { useState } from "react";
import { getAllVideos, getAllShorts } from "@/lib/videos";
import VideoEmbed from "./VideoEmbed";

export default function VideoLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<"all" | "video" | "short">("all");

  const categories = ["all", "Executive", "Real Estate", "Business", "Luxury Real Estate", "Investments", "Market Intelligence", "Travel", "Lifestyle", "Interviews", "Shorts"];

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
    <section className="py-section-lg sm:py-section-xl bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
              Media Library
            </p>
            <h2 className="font-serif text-display-lg sm:text-display-xl text-text-primary">
              Video Archive
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary text-body-md sm:text-body-lg px-4">
              Executive insights, property tours, market analysis, and quick updates.
            </p>
          </div>

          {/* Filters */}
          <div className="space-y-4">
            {/* Type Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              <button
                onClick={() => setSelectedType("all")}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                  selectedType === "all"
                    ? "bg-accent text-background"
                    : "border border-surface-primary text-text-secondary hover:border-text-primary hover:text-text-primary"
                }`}
              >
                All ({videoCount + shortCount})
              </button>
              <button
                onClick={() => setSelectedType("video")}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                  selectedType === "video"
                    ? "bg-accent text-background"
                    : "border border-surface-primary text-text-secondary hover:border-text-primary hover:text-text-primary"
                }`}
              >
                Videos ({videoCount})
              </button>
              <button
                onClick={() => setSelectedType("short")}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                  selectedType === "short"
                    ? "bg-accent text-background"
                    : "border border-surface-primary text-text-secondary hover:border-text-primary hover:text-text-primary"
                }`}
              >
                Shorts ({shortCount})
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                    selectedCategory === category
                      ? "bg-accent text-background"
                      : "border border-surface-primary text-text-secondary hover:border-text-primary hover:text-text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          {displayedVideos.length > 0 ? (
            <div className={`grid gap-4 sm:gap-6 ${
              selectedType === "short" || selectedCategory === "Shorts"
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}>
              {displayedVideos.map((video) => (
                <div key={video.id} className="space-y-2 sm:space-y-3">
                  <VideoEmbed
                    youtubeUrl={video.youtubeUrl}
                    title={video.title}
                    thumbnail={video.thumbnail}
                    isShort={video.type === "short"}
                    className="w-full"
                  />
                  {video.title && (
                    <div>
                      <h3 className="font-serif text-body-sm sm:text-display-md text-text-primary line-clamp-2">
                        {video.title}
                      </h3>
                      {video.description && (
                        <p className="text-text-secondary text-body-sm mt-1 line-clamp-2">
                          {video.description}
                        </p>
                      )}
                      {video.publishedAt && (
                        <p className="text-text-secondary text-xs mt-1">
                          {video.publishedAt}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-text-secondary text-body-md sm:text-body-lg">
                No videos available in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
