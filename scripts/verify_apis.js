/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
const http = require('http');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch (_e) {
          resolve({ status: res.statusCode, raw: data });
        }
      });
    }).on('error', reject);
  });
}

async function verifyApis() {
  console.log('=== API SECURITY & VALIDATION AUDIT ===');
  
  // 1. YouTube verify valid
  const validRes = await fetchJson('http://localhost:3000/api/verify-youtube?videoId=zl56URC7eFM');
  console.log('Valid Video Verification:', validRes);
  
  // 2. YouTube verify invalid
  const invalidRes = await fetchJson('http://localhost:3000/api/verify-youtube?videoId=FAKE_ID_123');
  console.log('Invalid Video Verification:', invalidRes);

  // 3. YouTube videos list
  const videosRes = await fetchJson('http://localhost:3000/api/youtube/videos');
  console.log('YouTube Videos count:', videosRes.data?.videos?.length);
  if (videosRes.data?.videos?.length > 0) {
    console.log('Sample video 1:', {
      title: videosRes.data.videos[0].title,
      id: videosRes.data.videos[0].youtubeId,
      canonical: videosRes.data.videos[0].canonicalUrl
    });
  }

  // 4. RSS Feed
  const rssRes = await fetchJson('http://localhost:3000/api/rss');
  console.log('RSS News count:', rssRes.data?.items?.length);
  if (rssRes.data?.items?.length > 0) {
    console.log('Sample news 1:', {
      title: rssRes.data.items[0].title,
      source: rssRes.data.items[0].source,
      originalUrl: rssRes.data.items[0].originalUrl
    });
  }
}

verifyApis().catch(console.error);
