// lib/youtubeConfig.ts

/**
 * Centralized configuration for the official YouTube channel.
 *
 * The official channel URL is the source of truth for the website.
 * The channel ID must be set to the actual YouTube channel ID.
 * It can be populated manually after obtaining the ID from the YouTube Data API
 * or via an environment variable.
 */
export const OFFICIAL_YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@CristianVaduvaCV";

// OPTIONAL: Set this to the actual channel ID (e.g., "UCxxxxxxxxxxxxxxxxx")
// If left undefined, verification will fail closed until the ID is provided.
export const OFFICIAL_YOUTUBE_CHANNEL_ID = process.env.OFFICIAL_YOUTUBE_CHANNEL_ID || "UCN2nPu7isc_06exwPOHYC1Q";
