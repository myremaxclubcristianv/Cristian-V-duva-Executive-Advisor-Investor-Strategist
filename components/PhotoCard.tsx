"use client";

import { useState } from "react";
import Image from "next/image";
import { Photo } from "@/lib/photos";

interface PhotoCardProps {
  photo: Photo;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export default function PhotoCard({ photo, size = "large", onClick }: PhotoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const sizeClasses = {
    small: "aspect-square",
    medium: "aspect-[4/3]",
    large: "aspect-video",
  };

  return (
    <div
      className={`relative w-full ${sizeClasses[size]} bg-surface-primary border border-surface-secondary/80 overflow-hidden cursor-pointer group shadow-xl hover:border-accent/50 transition-quick`}
      onClick={onClick}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-surface-secondary animate-pulse" />
      )}
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ objectPosition: photo.position || "center" }}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {photo.title && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full space-y-1">
            <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">EXHIBIT</span>
            <p className="text-text-primary font-display text-lg sm:text-xl leading-tight">{photo.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
