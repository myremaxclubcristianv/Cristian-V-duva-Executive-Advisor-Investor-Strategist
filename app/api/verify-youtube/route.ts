// app/api/verify-youtube/route.ts

/**
 * Server‑side endpoint that verifies a YouTube `videoId` belongs to the official
 * Cristian Văduva channel.
 *
 * The verification uses the YouTube Data API `videos.list` method to fetch the
 * video's `snippet.channelId` and compares it against the official channel ID
 * defined in `lib/youtubeConfig.ts`.
 *
 * • In **development** (when `process.env.NODE_ENV !== "production"`) and the
 *   API key is missing, the endpoint returns `isValid: true` to avoid breaking the
 *   dev experience.
 * • In **production**, missing credentials or any error results in
 *   `isValid: false` (fail‑closed).
 */

import { NextResponse } from "next/server";
import { OFFICIAL_YOUTUBE_CHANNEL_ID } from "@/lib/youtubeConfig";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get("videoId");

  if (!videoId) {
    return NextResponse.json({ isValid: false }, { status: 400 });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;

  // Development fallback – check discovered official channel videos when API key is not provided.
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      const { fetchOfficialYouTubeVideos } = await import("@/lib/youtubeAuto");
      const officialVideos = await fetchOfficialYouTubeVideos();
      const isOfficial = officialVideos.some((v) => v.youtubeId === videoId);
      return NextResponse.json({ isValid: isOfficial });
    }
    // Production must fail closed.
    return NextResponse.json({ isValid: false }, { status: 500 });
  }

  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

  try {
    const resp = await fetch(apiUrl);
    if (!resp.ok) throw new Error("YouTube API error");
    const data = await resp.json();
    const items = data.items;
    if (!items || items.length === 0) {
      return NextResponse.json({ isValid: false });
    }
    const channelId = items[0].snippet.channelId as string;
    const isValid = OFFICIAL_YOUTUBE_CHANNEL_ID
      ? channelId === OFFICIAL_YOUTUBE_CHANNEL_ID
      : false;
    return NextResponse.json({ isValid });
  } catch {
    // Any failure – fail closed.
    return NextResponse.json({ isValid: false }, { status: 500 });
  }
}
