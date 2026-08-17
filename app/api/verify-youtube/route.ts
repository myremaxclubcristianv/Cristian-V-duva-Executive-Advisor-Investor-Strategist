// app/api/verify-youtube/route.ts

import { NextResponse } from "next/server";
import { OFFICIAL_YOUTUBE_CHANNEL_ID } from "@/lib/youtubeConfig";
import { fetchOfficialYouTubeVideos } from "@/lib/youtubeAuto";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get("videoId");

  if (!videoId) {
    return NextResponse.json({ isValid: false }, { status: 400 });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;

  // Fallback – check discovered official channel videos whitelist when API key is not provided.
  if (!apiKey) {
    try {
      const officialVideos = await fetchOfficialYouTubeVideos();
      const isOfficial = officialVideos.some((v) => v.youtubeId === videoId);
      return NextResponse.json({ isValid: isOfficial }, { status: 200 });
    } catch {
      return NextResponse.json({ isValid: false }, { status: 200 });
    }
  }

  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`;

  try {
    const resp = await fetch(apiUrl);
    if (!resp.ok) {
      // API request failed, fallback to official list verification
      const officialVideos = await fetchOfficialYouTubeVideos();
      const isOfficial = officialVideos.some((v) => v.youtubeId === videoId);
      return NextResponse.json({ isValid: isOfficial }, { status: 200 });
    }
    const data = await resp.json();
    const items = data.items;
    if (!items || items.length === 0) {
      return NextResponse.json({ isValid: false }, { status: 200 });
    }
    const channelId = items[0].snippet?.channelId as string;
    const isValid = OFFICIAL_YOUTUBE_CHANNEL_ID
      ? channelId === OFFICIAL_YOUTUBE_CHANNEL_ID
      : false;
    return NextResponse.json({ isValid }, { status: 200 });
  } catch {
    // Fail-closed fallback to verified channel whitelist
    try {
      const officialVideos = await fetchOfficialYouTubeVideos();
      const isOfficial = officialVideos.some((v) => v.youtubeId === videoId);
      return NextResponse.json({ isValid: isOfficial }, { status: 200 });
    } catch {
      return NextResponse.json({ isValid: false }, { status: 200 });
    }
  }
}
