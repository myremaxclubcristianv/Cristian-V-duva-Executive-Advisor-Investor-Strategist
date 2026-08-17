import { MediaItem } from "./types";

export const mediaItems: MediaItem[] = [
  {
    id: "portrait-1",
    src: "/media/photos/portraits/portrait-1.jpg",
    alt: "Cristian Văduva portrait",
    category: "portraits",
    title: "Executive Portrait",
    description: "Professional executive portrait",
    featured: true,
  },
  {
    id: "business-1",
    src: "/media/photos/business/business-1.jpg",
    alt: "Cristian Văduva in business meeting",
    category: "business",
    title: "Business Meeting",
    description: "Strategic business discussion",
    featured: true,
  },
  {
    id: "personal-1",
    src: "/media/photos/personal/personal-1.jpg",
    alt: "Cristian Văduva personal",
    category: "personal",
    title: "Personal Moment",
    description: "Behind the scenes",
    featured: false,
  },
  {
    id: "event-1",
    src: "/media/photos/events/event-1.jpg",
    alt: "Cristian Văduva at industry event",
    category: "events",
    title: "Industry Event",
    description: "Speaking at industry conference",
    featured: true,
  },
  {
    id: "real-estate-1",
    src: "/media/photos/real-estate/real-estate-1.jpg",
    alt: "Luxury property showcase",
    category: "real-estate",
    title: "Property Tour",
    description: "Luxury real estate property",
    featured: false,
  },
];

export const getFeaturedMedia = (): MediaItem[] => {
  return mediaItems.filter((m) => m.featured);
};

export const getMediaByCategory = (category: string): MediaItem[] => {
  return mediaItems.filter((m) => m.category === category);
};

export const getMediaById = (id: string): MediaItem | undefined => {
  return mediaItems.find((m) => m.id === id);
};
