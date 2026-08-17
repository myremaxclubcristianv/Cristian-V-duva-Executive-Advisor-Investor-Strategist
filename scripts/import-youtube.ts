#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';

interface VideoItem {
  id: string;
  type: "video" | "short";
  title: string;
  youtubeUrl: string;
  category: string;
  featured?: boolean;
  description?: string;
  publishedAt?: string;
  thumbnail?: string;
}

// OFFICIAL YOUTUBE CHANNEL SOURCE OF TRUTH
// This importer is designed to import videos ONLY from the official channel:
// https://www.youtube.com/@CristianVaduvaCV
// DO NOT use this script to import videos from other channels, even if they feature a similarly named person.
// NO VIDEO is better than the WRONG VIDEO.
// When providing YouTube URLs manually, ensure they come from @CristianVaduvaCV.

const OFFICIAL_YOUTUBE_CHANNEL = "https://www.youtube.com/@CristianVaduvaCV";

// Extract video ID from various YouTube URL formats
function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
}

// Detect if URL is a YouTube Short
function isShort(url: string): boolean {
  return url.includes('youtube.com/shorts/');
}

// Generate unique ID from video ID
function generateId(videoId: string): string {
  return `yt-${videoId}`;
}

// Generate thumbnail URL from video ID
function generateThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}

// Categorize video based on URL or keywords (placeholder)
function categorizeVideo(url: string, title: string): string {
  const urlLower = url.toLowerCase();
  const titleLower = title.toLowerCase();

  // Simple keyword-based classification
  if (urlLower.includes('short') || titleLower.includes('short')) {
    return 'Shorts';
  }
  if (titleLower.includes('real estate') || titleLower.includes('property') || titleLower.includes('apartment') || titleLower.includes('villa') || titleLower.includes('home')) {
    return 'Real Estate';
  }
  if (titleLower.includes('luxury') || titleLower.includes('exclusive') || titleLower.includes('premium')) {
    return 'Luxury Real Estate';
  }
  if (titleLower.includes('invest') || titleLower.includes('market') || titleLower.includes('finance')) {
    return 'Investments';
  }
  if (titleLower.includes('business') || titleLower.includes('entrepreneur')) {
    return 'Business';
  }
  if (titleLower.includes('travel') || titleLower.includes('lifestyle')) {
    return 'Lifestyle';
  }
  if (titleLower.includes('interview') || titleLower.includes('conversation')) {
    return 'Interviews';
  }

  // Default category
  return 'Executive';
}

// Read existing videos from lib/videos.ts to check for duplicates
function readExistingVideoIds(): Set<string> {
  const videosPath = path.join(__dirname, '../lib/videos.ts');

  if (!fs.existsSync(videosPath)) {
    return new Set();
  }

  const content = fs.readFileSync(videosPath, 'utf-8');

  // Extract both generated IDs and YouTube video IDs
  const existingIds = new Set<string>();
  const existingVideoIds = new Set<string>();

  // Extract generated IDs (e.g., "yt-VIDEO_ID" or "featured-1")
  const idMatches = content.match(/id:\s*["']([^"']+)["']/g);
  if (idMatches) {
    idMatches.forEach(m => {
      const id = m.match(/["']([^"']+)["']/)?.[1];
      if (id) existingIds.add(id);
    });
  }

  // Extract YouTube video IDs from youtubeUrl fields
  const urlMatches = content.match(/youtubeUrl:\s*["']([^"']+)["']/g);
  if (urlMatches) {
    urlMatches.forEach(m => {
      const url = m.match(/["']([^"']+)["']/)?.[1];
      if (url) {
        const videoId = extractVideoId(url);
        if (videoId) existingVideoIds.add(videoId);
      }
    });
  }

  // Return both sets as a combined set for duplicate checking
  return new Set([...existingIds, ...existingVideoIds]);
}

// Output new videos in TypeScript format
function outputNewVideos(newVideos: VideoItem[]): void {
  console.log('\n' + '='.repeat(80));
  console.log('NEW VIDEOS TO ADD TO lib/videos.ts');
  console.log('='.repeat(80) + '\n');

  newVideos.forEach(v => {
    const fields = [
      `id: "${v.id}"`,
      `type: "${v.type}"`,
      `title: "${v.title}"`,
      `youtubeUrl: "${v.youtubeUrl}"`,
      `category: "${v.category}"`,
      v.featured ? `featured: true` : '',
      v.description ? `description: "${v.description}"` : '',
      v.publishedAt ? `publishedAt: "${v.publishedAt}"` : '',
      v.thumbnail ? `thumbnail: "${v.thumbnail}"` : '',
    ].filter(Boolean).join(',\n    ');

    console.log(`  {\n    ${fields}\n  },`);
  });

  console.log('\n' + '='.repeat(80));
  console.log('IMPORTANT: SOURCE VERIFICATION');
  console.log('='.repeat(80));
  console.log(`Official YouTube Channel: ${OFFICIAL_YOUTUBE_CHANNEL}`);
  console.log('Verify that all videos above belong to this channel before adding them.');
  console.log('='.repeat(80) + '\n');

  console.log('INSTRUCTIONS:');
  console.log('='.repeat(80));
  console.log('1. Verify each video belongs to @CristianVaduvaCV');
  console.log('2. Copy the block above');
  console.log('3. Open lib/videos.ts');
  console.log('4. Paste into the videos array (before the closing ])');
  console.log('5. Edit titles, descriptions, and categories as needed');
  console.log('6. Set featured: true for important videos');
  console.log('='.repeat(80) + '\n');
}

// Main import function
async function importYouTubeVideos(urls: string[]): Promise<void> {
  console.log('🎬 Starting YouTube video import...\n');
  console.log(`📌 Official Channel: ${OFFICIAL_YOUTUBE_CHANNEL}\n`);

  const existingIds = readExistingVideoIds();
  const videoIds = new Set<string>();

  const newVideos: VideoItem[] = [];

  for (const url of urls) {
    const trimmedUrl = url.trim();
    if (!trimmedUrl || trimmedUrl.startsWith('#') || trimmedUrl.startsWith('//')) {
      continue;
    }

    const videoId = extractVideoId(trimmedUrl);
    if (!videoId) {
      console.warn(`⚠️  Could not extract video ID from: ${trimmedUrl}`);
      continue;
    }

    // Check for duplicates (both in existing and this batch)
    const id = generateId(videoId);
    if (existingIds.has(id) || existingIds.has(videoId) || videoIds.has(videoId)) {
      console.warn(`⚠️  Duplicate video ID: ${videoId} (skipping)`);
      continue;
    }

    videoIds.add(videoId);

    const isShortVideo = isShort(trimmedUrl);
    const title = `YouTube Video (${videoId})`; // Placeholder - user should edit
    const category = categorizeVideo(trimmedUrl, title);

    const video: VideoItem = {
      id,
      type: isShortVideo ? 'short' : 'video',
      title,
      youtubeUrl: trimmedUrl,
      category,
      featured: false,
      description: '', // Placeholder
      thumbnail: generateThumbnail(videoId),
    };

    newVideos.push(video);
    console.log(`✓ ${isShortVideo ? 'Short' : 'Video'}: ${videoId} → ${category}`);
  }

  if (newVideos.length === 0) {
    console.log('\n⚠️  No new videos to add.');
    return;
  }

  console.log(`\n📝 Generated ${newVideos.length} new video(s)`);
  outputNewVideos(newVideos);
}

// Read URLs from file or command line
async function main(): Promise<void> {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: tsx scripts/import-youtube.ts <url1> <url2> ...');
    console.log('   or: tsx scripts/import-youtube.ts --file <path-to-urls.txt>');
    console.log('\nExample URLs file format (one URL per line):');
    console.log('  https://www.youtube.com/watch?v=VIDEO_ID');
    console.log('  https://www.youtube.com/shorts/SHORT_ID');
    console.log('  https://youtu.be/VIDEO_ID');
    console.log('\n# Comments (lines starting with #) are ignored');
    console.log('\nIMPORTANT: Only import videos from the official channel:');
    console.log(`  ${OFFICIAL_YOUTUBE_CHANNEL}`);
    process.exit(1);
  }

  let urls: string[] = [];

  if (args[0] === '--file' && args[1]) {
    // Read from file
    const filePath = args[1];
    if (!fs.existsSync(filePath)) {
      console.error(`❌ File not found: ${filePath}`);
      process.exit(1);
    }

    const content = fs.readFileSync(filePath, 'utf-8');
    urls = content.split('\n').filter(line => line.trim() && !line.trim().startsWith('#'));
  } else {
    // Use command line arguments
    urls = args;
  }

  await importYouTubeVideos(urls);
}

main().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});
