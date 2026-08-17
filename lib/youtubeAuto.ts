import { parseStringPromise } from 'xml2js';
import { OFFICIAL_YOUTUBE_CHANNEL_ID } from './youtubeConfig';
import { cleanText } from './cleanText';

export type VideoCategory =
  | "REAL ESTATE"
  | "INVESTMENTS"
  | "BUSINESS"
  | "STRATEGY"
  | "INTERVIEWS"
  | "MARKET INTELLIGENCE"
  | "CAPITAL";

export interface Video {
  id: string;
  videoId: string;
  title: string;
  description: string;
  youtubeId: string;
  category: VideoCategory;
  thumbnail?: string;
  publishedDate?: string;
  channelId: string;
  channelTitle: string;
  youtubeUrl: string;
  embedUrl: string;
}

export function getYouTubeThumbnail(youtubeId: string, quality: "maxres" | "hq" = "maxres"): string {
  if (quality === "maxres") {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  }
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

export async function fetchOfficialYouTubeVideos(): Promise<Video[]> {
  const channelId = OFFICIAL_YOUTUBE_CHANNEL_ID || 'UCN2nPu7isc_06exwPOHYC1Q';
  const videoMap = new Map<string, Video>();

  // 1. YouTube Channel RSS Feed Discovery (Proven AiX OS Architecture)
  const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
  try {
    const res = await fetch(feedUrl, { next: { revalidate: 3600 } });
    if (res.ok) {
      const xml = await res.text();
      const parsed = await parseStringPromise(xml);
      const entries = parsed.feed?.entry ?? [];
      entries.forEach((entry: Record<string, unknown>) => {
        const youtubeId = (entry['yt:videoId'] as string[])?.[0] ?? '';
        const entryChannelId = (entry['yt:channelId'] as string[])?.[0] ?? '';
        
        // Strict channel validation - Fail-Closed
        if (entryChannelId !== channelId || !youtubeId) return;

        const rawTitle = (entry.title as string[])?.[0] ?? 'Untitled Video';
        const rawDescription = ((entry['media:group'] as Record<string, unknown>[])?.[0]?.['media:description'] as string[])?.[0] ?? '';
        const published = (entry.published as string[])?.[0] ?? '';
        const channelTitle = ((entry['author'] as Record<string, unknown>[])?.[0]?.['name'] as string[])?.[0] ?? '';

        videoMap.set(youtubeId, {
          id: youtubeId,
          videoId: youtubeId,
          title: cleanText(rawTitle),
          description: cleanText(rawDescription),
          youtubeId,
          category: "REAL ESTATE",
          publishedDate: published,
          thumbnail: getYouTubeThumbnail(youtubeId, "hq"),
          channelId: entryChannelId,
          channelTitle: cleanText(channelTitle),
          youtubeUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
          embedUrl: `https://www.youtube.com/embed/${youtubeId}`
        });
      });
    }
  } catch (e) {
    console.error('[Executive] Error fetching YouTube RSS feed:', e);
  }

  // 2. Channel Page Scraper Fallback (Proven AiX OS Fallback)
  if (videoMap.size === 0) {
    try {
      const pageUrl = `https://www.youtube.com/channel/${channelId}/videos`;
      const pageRes = await fetch(pageUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        },
        next: { revalidate: 3600 }
      });
      if (pageRes.ok) {
        const html = await pageRes.text();
        const startIdx = html.indexOf('ytInitialData = ');
        if (startIdx !== -1) {
          const jsonStart = startIdx + 'ytInitialData = '.length;
          let braceCount = 0;
          let jsonEnd = jsonStart;
          for (let i = jsonStart; i < html.length; i++) {
            if (html[i] === '{') braceCount++;
            else if (html[i] === '}') {
              braceCount--;
              if (braceCount === 0) {
                jsonEnd = i + 1;
                break;
              }
            }
          }
          const data = JSON.parse(html.substring(jsonStart, jsonEnd));
          const findLockups = (node: Record<string, unknown> | null | undefined) => {
            if (!node || typeof node !== 'object') return;
            if (node.lockupViewModel) {
              const lvm = node.lockupViewModel as Record<string, unknown>;
              if (lvm.contentType === 'LOCKUP_CONTENT_TYPE_VIDEO' && lvm.contentId) {
                const youtubeId = lvm.contentId as string;
                const title = ((lvm.metadata as Record<string, unknown>)?.lockupMetadataViewModel as Record<string, unknown>)?.title as Record<string, unknown>;
                const contentTitle = (title?.content as string) || 'Untitled video';
                if (youtubeId && !videoMap.has(youtubeId)) {
                  videoMap.set(youtubeId, {
                    id: youtubeId,
                    videoId: youtubeId,
                    title: cleanText(contentTitle),
                    description: '',
                    youtubeId,
                    category: "REAL ESTATE",
                    publishedDate: '',
                    thumbnail: getYouTubeThumbnail(youtubeId, "hq"),
                    channelId,
                    channelTitle: 'Cristian Văduva CV',
                    youtubeUrl: `https://www.youtube.com/watch?v=${youtubeId}`,
                    embedUrl: `https://www.youtube.com/embed/${youtubeId}`
                  });
                }
              }
            }
            for (const k of Object.keys(node)) {
              findLockups((node as Record<string, unknown>)[k] as Record<string, unknown>);
            }
          };
          findLockups(data);
        }
      }
    } catch (e) {
      console.error('[Executive] Error scraping YouTube channel page:', e);
    }
  }

  const videos = Array.from(videoMap.values());
  videos.sort((a, b) => {
    if (a.publishedDate && b.publishedDate) {
      return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
    }
    return 0;
  });

  return videos;
}
