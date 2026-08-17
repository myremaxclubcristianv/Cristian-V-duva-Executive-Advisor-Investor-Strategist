/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');

const routes = [
  '/',
  '/about',
  '/contact',
  '/ecosystem',
  '/gallery',
  '/insights',
  '/manifest.webmanifest',
  '/media',
  '/media/videos',
  '/real-estate',
  '/real-estate/market',
  '/real-estate/news',
  '/real-estate/properties',
  '/robots.txt',
  '/sitemap.xml',
  '/ventures',
  '/api/rss',
  '/api/youtube/videos',
  '/api/verify-youtube?videoId=zl56URC7eFM',
  '/api/verify-youtube?videoId=INVALID_TEST_ID',
];

async function checkRoute(route) {
  return new Promise((resolve) => {
    const url = `http://localhost:3000${route}`;
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          route,
          statusCode: res.statusCode,
          contentType: res.headers['content-type'],
          length: data.length,
          snippet: data.slice(0, 150).replace(/\n/g, ' ')
        });
      });
    }).on('error', (err) => {
      resolve({
        route,
        error: err.message
      });
    });
  });
}

async function runAudit() {
  console.log('--- ROUTE & API AUDIT ---');
  for (const route of routes) {
    const result = await checkRoute(route);
    if (result.error) {
      console.error(`❌ [FAIL] ${route} -> Error: ${result.error}`);
    } else if (route.includes('INVALID_TEST_ID') && result.statusCode === 200) {
      console.log(`ℹ️ [TEST] ${route} -> Status ${result.statusCode} (Response payload received)`);
    } else if (result.statusCode >= 200 && result.statusCode < 400) {
      console.log(`✅ [PASS] ${route} -> Status ${result.statusCode} (${result.contentType}, ${result.length} bytes)`);
    } else {
      console.error(`❌ [FAIL] ${route} -> Status ${result.statusCode}`);
    }
  }
}

runAudit();
