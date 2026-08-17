"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoEmbedProps {
  youtubeUrl: string;
  title?: string;
  className?: string;
  isShort?: boolean;
  thumbnail?: string;
}

export default function VideoEmbed({
  youtubeUrl,
  title = "Video",
  className = "",
  isShort = false,
  thumbnail,
}: VideoEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  const extractVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
      /^([a-zA-Z0-9_-]{11})$/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }

    return null;
  };

  const videoId = extractVideoId(youtubeUrl);

  if (!videoId) {
    return (
      <div className={`bg-surface-secondary aspect-video flex items-center justify-center ${className}`}>
        <p className="text-text-secondary font-mono text-xs">Invalid Video Source</p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
  const defaultThumbnail = thumbnail || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const currentThumbnail = imgSrc || defaultThumbnail;
  const aspectRatio = isShort ? "aspect-[9/16]" : "aspect-video";

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className={`${aspectRatio} bg-black/90 relative`}>
        {!isLoaded ? (
          <button
            type="button"
            className="absolute inset-0 w-full h-full cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent overflow-hidden"
            onClick={() => setIsLoaded(true)}
            aria-label={`Play ${title}`}
          >
            <Image
              src={currentThumbnail}
              alt={title}
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => {
                // Graceful fallback to i.ytimg or standard quality if maxres or hq fails
                if (!imgSrc || imgSrc.includes("hqdefault")) {
                  setImgSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
                }
              }}
            />
            {/* Cinematic dark scrim overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors flex items-center justify-center">
              {/* Prominent centered play button */}
              <div className="w-14 h-14 bg-accent/90 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all shadow-2xl rounded-sm">
                <svg
                  className="w-6 h-6 text-background ml-0.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        ) : (
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
