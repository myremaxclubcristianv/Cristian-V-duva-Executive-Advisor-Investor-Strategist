"use client";

import { useState } from "react";

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
        <p className="text-text-secondary">Invalid YouTube URL</p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const thumbnailUrl = thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const aspectRatio = isShort ? "aspect-[9/16]" : "aspect-video";

  return (
    <div className={`relative w-full ${className}`}>
      <div className={`${aspectRatio} bg-surface-secondary`}>
        {!isLoaded ? (
          <div
            className="absolute inset-0 bg-cover bg-center cursor-pointer group"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
            onClick={() => setIsLoaded(true)}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                <svg
                  className="w-8 h-8 text-background ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}
