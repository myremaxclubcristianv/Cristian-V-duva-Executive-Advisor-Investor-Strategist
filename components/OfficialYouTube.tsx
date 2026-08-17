"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export type OfficialYouTubeProps = {
  /** YouTube video identifier (the part after `v=` in the URL). */
  videoId: string;
  /** Optional title for accessibility purposes. */
  title?: string;
};

export default function OfficialYouTube({
  videoId,
  title = "Official YouTube video",
}: OfficialYouTubeProps) {
  const [status, setStatus] = useState<"loading" | "valid" | "invalid">("loading");
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgSrc, setImgSrc] = useState<string | null>(null);

  useEffect(() => {
    async function verify() {
      try {
        const res = await fetch(`/api/verify-youtube?videoId=${videoId}`);
        if (!res.ok) {
          setStatus("invalid");
          return;
        }
        const data = await res.json();
        if (data.isValid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      } catch {
        setStatus("invalid");
      }
    }
    verify();
  }, [videoId]);

  if (status === "loading") {
    return (
      <div className="aspect-video w-full flex items-center justify-center bg-black/60 font-mono text-xs text-text-secondary">
        Verifying official broadcast…
      </div>
    );
  }

  if (status === "invalid") {
    return (
      <div className="border border-surface-secondary bg-surface-primary p-6">
        <p className="text-sm text-text-secondary">
          This broadcast could not be verified as belonging to Cristian Văduva’s official YouTube channel.
        </p>
      </div>
    );
  }

  const thumbnail = imgSrc || `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black/90">
      {!isPlaying ? (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="absolute inset-0 w-full h-full cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent overflow-hidden"
          aria-label={`Play ${title}`}
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            unoptimized
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 1024px) 100vw, 60vw"
            onError={() => {
              if (!imgSrc) setImgSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
            }}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors flex items-center justify-center">
            <div className="w-14 h-14 bg-accent/90 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all shadow-2xl rounded-sm">
              <svg className="w-6 h-6 text-background ml-0.5" fill="currentColor" viewBox="0 0 24 24">
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
        />
      )}
    </div>
  );
}
