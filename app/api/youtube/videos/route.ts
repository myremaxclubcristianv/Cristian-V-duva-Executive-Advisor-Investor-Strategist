import { NextResponse } from "next/server";
import { fetchOfficialYouTubeVideos } from "@/lib/youtubeAuto";

export async function GET() {
  try {
    const videos = await fetchOfficialYouTubeVideos();
    return NextResponse.json({
      status: "success",
      count: videos.length,
      videos,
    });
  } catch {
    return NextResponse.json({ status: "error", videos: [] }, { status: 500 });
  }
}
