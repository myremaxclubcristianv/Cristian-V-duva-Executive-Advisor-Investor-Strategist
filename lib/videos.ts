import { VideoItem } from "./types";

// OFFICIAL YOUTUBE CHANNEL SOURCE OF TRUTH
// All videos displayed on this website MUST belong to this channel:
// https://www.youtube.com/@CristianVaduvaCV
// DO NOT add videos from other channels, even if they feature a similarly named person.
// NO VIDEO is better than the WRONG VIDEO.

export const OFFICIAL_YOUTUBE_CHANNEL = "https://www.youtube.com/@CristianVaduvaCV";

export const videos: VideoItem[] = [
  // Featured Videos - to be populated with actual YouTube URLs from @CristianVaduvaCV
  // The YouTube channel @CristianVaduvaCV exists but direct video discovery is limited by YouTube's anti-scraping measures
  // Additional videos should be added manually by inspecting the channel directly
  // IMPORTANT: Only add videos that are verified to belong to @CristianVaduvaCV
  // {
  //   id: "featured-1",
  //   type: "video",
  //   title: "Video Title",
  //   youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  //   category: "Executive",
  //   featured: true,
  //   description: "Description",
  //   publishedAt: "2025-01-15",
  //   thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  // },

  // Real Estate Videos
  // TODO: Add real estate property videos from @CristianVaduvaCV
  // {
  //   id: "re-1",
  //   type: "video",
  //   title: "Property Tour",
  //   youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  //   category: "Real Estate",
  //   featured: false,
  //   thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  // },

  // Business & Investments
  // TODO: Add business and investment videos from @CristianVaduvaCV
  // {
  //   id: "biz-1",
  //   type: "video",
  //   title: "Business Topic",
  //   youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID",
  //   category: "Business",
  //   featured: false,
  //   thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  // },

  // Shorts - to be populated with actual Shorts from @CristianVaduvaCV
  // TODO: Add YouTube Shorts from @CristianVaduvaCV
  // YouTube Shorts discovery is limited - add manually by inspecting the channel
  // {
  //   id: "short-1",
  //   type: "short",
  //   title: "Short Title",
  //   youtubeUrl: "https://www.youtube.com/shorts/VIDEO_ID",
  //   category: "Shorts",
  //   featured: true,
  //   thumbnail: "https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg",
  // },
];

export const getFeaturedVideos = (): VideoItem[] => {
  return videos.filter((v) => v.featured && v.type === "video");
};

export const getFeaturedShorts = (): VideoItem[] => {
  return videos.filter((v) => v.featured && v.type === "short");
};

export const getVideosByCategory = (category: string): VideoItem[] => {
  return videos.filter((v) => v.category === category && v.type === "video");
};

export const getShortsByCategory = (category: string): VideoItem[] => {
  return videos.filter((v) => v.category === category && v.type === "short");
};

export const getVideoById = (id: string): VideoItem | undefined => {
  return videos.find((v) => v.id === id);
};

export const getAllVideos = (): VideoItem[] => {
  return videos.filter((v) => v.type === "video");
};

export const getAllShorts = (): VideoItem[] => {
  return videos.filter((v) => v.type === "short");
};
