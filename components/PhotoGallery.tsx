"use client";

import { useState } from "react";
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

  let photos = category ? getPhotosByCategory(category) : getFeaturedPhotos();

  if (!showAll && limit) {
    photos = photos.slice(0, limit);
  }

  if (photos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-text-secondary text-body-md sm:text-body-lg">
          No photos available yet.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            size="medium"
            onClick={() => setSelectedPhoto(photo)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
              style={{ objectPosition: selectedPhoto.position || "center" }}
            />
            {selectedPhoto.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-text-primary font-serif text-display-lg">
                  {selectedPhoto.title}
                </p>
                {selectedPhoto.description && (
                  <p className="text-text-secondary text-body-md mt-2">
                    {selectedPhoto.description}
                  </p>
                )}
              </div>
            )}
            <button
              className="absolute top-4 right-4 text-text-primary hover:text-accent transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
