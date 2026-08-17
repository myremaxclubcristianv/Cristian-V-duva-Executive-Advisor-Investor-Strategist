import { NextResponse } from "next/server";
import { mockNewsData } from "@/lib/rss";

export async function GET() {
  return NextResponse.json({
    status: "success",
    timestamp: new Date().toISOString(),
    items: mockNewsData,
  });
}
