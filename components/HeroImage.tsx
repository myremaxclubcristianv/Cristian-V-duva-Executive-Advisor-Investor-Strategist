"use client";

import { useState } from "react";
import Image from "next/image";
import { getHeroPhoto } from "@/lib/photos";

export default function HeroImage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroPhoto = getHeroPhoto();

  if (!heroPhoto) {
    // Placeholder when no hero photo is available
    return (
      <div className="absolute inset-0 bg-surface-primary">
        <div className="absolute inset-0 bg-gradient-to-b from-surface-primary via-surface-primary to-background" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0">
      {!isLoaded && (
        <div className="absolute inset-0 bg-surface-secondary animate-pulse" />
      )}
      <Image
        src={heroPhoto.src}
        alt={heroPhoto.alt}
        fill
        priority
        className={`object-cover transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ objectPosition: heroPhoto.position || "center" }}
        onLoad={() => setIsLoaded(true)}
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
    </div>
  );
}
