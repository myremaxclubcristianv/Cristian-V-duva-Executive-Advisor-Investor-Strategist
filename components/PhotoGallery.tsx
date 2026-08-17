"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Photo, getPhotosByCategory, getFeaturedPhotos, PhotoCategory } from "@/lib/photos";
import PhotoCard from "./PhotoCard";

interface PhotoGalleryProps {
  category?: PhotoCategory;
  limit?: number;
  showAll?: boolean;
}

export default function PhotoGallery({ category, limit, showAll = false }: PhotoGalleryProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPhoto(null);
      }
    };
    if (selectedPhoto) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedPhoto]);

  let photos = category ? getPhotosByCategory(category) : getFeaturedPhotos();

  if (!showAll && limit) {
    photos = photos.slice(0, limit);
  }

  if (photos.length === 0) {
    return (
      <div className="text-center py-16 bg-surface-primary border border-surface-secondary/60 p-8">
        <p className="font-mono text-sm text-text-secondary uppercase tracking-wider">
          Exhibition photography is being curated.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            size="large"
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title || "Photo exhibition preview"}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full border border-surface-secondary/80 bg-surface-primary shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full bg-black/80">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
                style={{ objectPosition: selectedPhoto.position || "center" }}
              />
            </div>
            {selectedPhoto.title && (
              <div className="p-6 border-t border-surface-secondary/60 bg-background/90 space-y-1">
                <p className="font-display text-xl sm:text-2xl text-text-primary">
                  {selectedPhoto.title}
                </p>
                {selectedPhoto.description && (
                  <p className="font-sans text-xs sm:text-sm text-text-secondary font-light">
                    {selectedPhoto.description}
                  </p>
                )}
              </div>
            )}
            <button
              type="button"
              className="absolute top-3 right-3 text-text-primary hover:text-accent transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center bg-background/80 border border-surface-secondary/60"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close modal preview"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
