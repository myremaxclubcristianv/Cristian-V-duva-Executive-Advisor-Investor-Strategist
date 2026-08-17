/* eslint-disable @typescript-eslint/no-require-imports */
const https = require('https');
const http = require('http');

function checkHttps(domain) {
  return new Promise((resolve) => {
    const req = https.get(`https://${domain}/`, { timeout: 6000 }, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          reachable: true,
          statusCode: res.statusCode,
          headers: res.headers,
          bodySnippet: data.slice(0, 200)
        });
      });
    });
    req.on('error', (err) => {
      resolve({ reachable: false, error: err.message });
    });
    req.on('timeout', () => {
      req.destroy();
      resolve({ reachable: false, error: 'Connection timed out' });
    });
  });
}

function checkLocal(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({
          path,
          statusCode: res.statusCode,
          contentType: res.headers['content-type'],
          length: data.length,
          body: data
        });
      });
    }).on('error', (err) => resolve({ path, error: err.message }));
  });
}

async function runLaunchGate() {
  console.log('==================================================');
  console.log('CRISTIAN VĂDUVA — FINAL PRODUCTION LAUNCH GATE AUDIT');
  console.log('==================================================\n');

  // 1. Check Public Domain
  console.log('--- 1. PUBLIC PRODUCTION DOMAIN CHECK ---');
  const domainStatus = await checkHttps('cristianvaduva.com');
  console.log('Public https://cristianvaduva.com Status:', domainStatus.reachable ? `Reachable (HTTP ${domainStatus.statusCode})` : `Offline/DNS Pending (${domainStatus.error})`);

  // 2. Production HTML Verification
  console.log('\n--- 2. PRODUCTION HTML VERIFICATION ---');
  const home = await checkLocal('/');
  console.log('Home status:', home.statusCode, `(${home.length} bytes)`);

  const hasCanonical = home.body.includes('<link rel="canonical" href="https://cristianvaduva.com"/>') || home.body.includes('<link rel="canonical" href="https://cristianvaduva.com"');
  const hasTitle = home.body.includes('Cristian Văduva — Executive Advisor · Investor · Strategist');
  const hasOG = home.body.includes('https://cristianvaduva.com/residence/exterior.png');
  const hasJsonLd = home.body.includes('application/ld+json') && home.body.includes('Cristian Văduva') && home.body.includes('Executive Advisor');

  console.log('Canonical verified:', hasCanonical ? 'PASS' : 'FAIL');
  console.log('Title verified:', hasTitle ? 'PASS' : 'FAIL');
  console.log('OpenGraph Image verified:', hasOG ? 'PASS' : 'FAIL');
  console.log('JSON-LD Schema verified:', hasJsonLd ? 'PASS' : 'FAIL');

  // 3. Asset & Route Check
  console.log('\n--- 3. CRITICAL ASSETS & ENDPOINTS ---');
  const assets = [
    '/residence/exterior.png',
    '/residence/living.png',
    '/residence/office.png',
    '/residence/library.png',
    '/residence/command.png',
    '/residence/gallery.png',
    '/residence/cinema.png',
    '/residence/terrace.png',
    '/robots.txt',
    '/sitemap.xml',
    '/manifest.webmanifest',
    '/api/youtube/videos',
    '/api/verify-youtube?videoId=zl56URC7eFM',
    '/api/verify-youtube?videoId=INVALID_ID',
    '/api/rss'
  ];

  for (const asset of assets) {
    const res = await checkLocal(asset);
    if (res.statusCode >= 200 && res.statusCode < 400) {
      console.log(`✅ [PASS] ${asset} -> HTTP ${res.statusCode} (${res.contentType}, ${res.length} bytes)`);
    } else {
      console.log(`❌ [FAIL] ${asset} -> HTTP ${res.statusCode}`);
    }
  }
}

runLaunchGate().catch(console.error);
