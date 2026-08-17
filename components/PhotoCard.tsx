"use client";

import { useState } from "react";
import Image from "next/image";
import { Photo } from "@/lib/photos";

interface PhotoCardProps {
  photo: Photo;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
}

export default function PhotoCard({ photo, size = "medium", onClick }: PhotoCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const sizeClasses = {
    small: "aspect-square",
    medium: photo.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]",
    large: photo.aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-[16/9]",
  };

  return (
    <div
      className={`relative w-full ${sizeClasses[size]} bg-surface-secondary overflow-hidden cursor-pointer group`}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-text-primary font-serif text-body-sm">{photo.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
