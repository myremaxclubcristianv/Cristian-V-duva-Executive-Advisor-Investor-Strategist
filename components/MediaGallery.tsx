"use client";

import { useState } from "react";
import Image from "next/image";
import { getFeaturedMedia, getMediaByCategory } from "@/lib/media";
import { MediaItem } from "@/lib/types";
import VideoEmbed from "./VideoEmbed";

interface MediaGalleryProps {
  showVideos?: boolean;
  youtubeVideos?: { url: string; title: string }[];
}

export default function MediaGallery({
  showVideos = false,
  youtubeVideos = [],
}: MediaGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const categories = ["all", "personal", "business", "events", "real-estate", "portraits"];

  const displayedMedia =
    selectedCategory === "all"
      ? getFeaturedMedia()
      : getMediaByCategory(selectedCategory);

  return (
    <section className="py-section-lg sm:py-section-xl bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-accent uppercase tracking-wider text-xs sm:text-sm">
              Media
            </p>
            <h2 className="font-serif text-display-lg sm:text-display-xl text-text-primary">
              Gallery & Appearances
            </h2>
            <p className="max-w-2xl mx-auto text-text-secondary text-body-md sm:text-body-lg px-4">
              Professional photography, business moments, and media appearances.
            </p>
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

          {/* Photos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {displayedMedia.length > 0 ? (
              displayedMedia.map((item) => (
                <div
                  key={item.id}
                  className="aspect-square bg-surface-secondary relative overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedMedia(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-text-secondary">No media available in this category yet.</p>
              </div>
            )}
          </div>

          {/* YouTube Videos */}
          {showVideos && youtubeVideos.length > 0 && (
            <div className="pt-8 sm:pt-12 space-y-6 sm:space-y-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <h3 className="font-serif text-display-md sm:text-display-lg text-text-primary">
                  Videos & Interviews
                </h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {youtubeVideos.map((video, index) => (
                  <VideoEmbed
                    key={index}
                    youtubeUrl={video.url}
                    title={video.title}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Lightbox */}
          {selectedMedia && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <div className="relative max-w-4xl max-h-[90vh]">
                <Image
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  width={1200}
                  height={800}
                  className="object-contain max-h-[90vh] w-auto"
                />
                {selectedMedia.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white font-serif text-xl">
                      {selectedMedia.title}
                    </h3>
                    {selectedMedia.description && (
                      <p className="text-white/80 text-sm mt-1">
                        {selectedMedia.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <button
                className="absolute top-4 right-4 text-white p-2 hover:text-accent transition-colors"
                onClick={() => setSelectedMedia(null)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
