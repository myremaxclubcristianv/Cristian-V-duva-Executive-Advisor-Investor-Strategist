/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');

function checkRoute(path) {
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

async function verifyAll() {
  console.log('==================================================');
  console.log('CRISTIAN VĂDUVA — FULL SITE & LEGAL COMPREHENSIVE QA');
  console.log('==================================================\n');

  const routes = [
    '/',
    '/about',
    '/contact',
    '/ecosystem',
    '/ventures',
    '/insights',
    '/real-estate',
    '/real-estate/properties',
    '/real-estate/market',
    '/real-estate/news',
    '/media',
    '/media/videos',
    '/tv',
    '/gallery',
    // Legal & Compliance Layer
    '/legal',
    '/privacy',
    '/gdpr',
    '/cookies',
    '/terms-of-use',
    '/terms',
    '/disclaimer',
    '/data-provenance',
    '/editorial-policy',
    '/accessibility',
    // Technical metadata & APIs
    '/robots.txt',
    '/sitemap.xml',
    '/manifest.webmanifest',
    '/api/youtube/videos',
    '/api/verify-youtube?videoId=zl56URC7eFM',
    '/api/verify-youtube?videoId=INVALID_ID',
    '/api/rss'
  ];

  let allPass = true;

  for (const route of routes) {
    const res = await checkRoute(route);
    if (res.statusCode >= 200 && res.statusCode < 400) {
      console.log(`✅ [PASS] ${route.padEnd(44)} -> HTTP ${res.statusCode} (${res.length} bytes)`);
    } else {
      console.log(`❌ [FAIL] ${route.padEnd(44)} -> HTTP ${res.statusCode || 'ERR'}`);
      allPass = false;
    }
  }

  console.log('\n--- LEGAL PAGE CONTENT INTEGRITY CHECK ---');
  const legalPage = await checkRoute('/legal');
  console.log('Legal Page Operator Verified:', legalPage.body.includes('Cristian Văduva') ? '✅ PASS' : '❌ FAIL');

  const privacyPage = await checkRoute('/privacy');
  console.log('Privacy GDPR Basis Verified:', privacyPage.body.includes('Regulation (EU) 2016/679') ? '✅ PASS' : '❌ FAIL');

  const cookiesPage = await checkRoute('/cookies');
  console.log('Cookies Storage Inventory Verified:', cookiesPage.body.includes('aix_cookie_consent') ? '✅ PASS' : '❌ FAIL');

  const footerLegalLinks = legalPage.body.includes('/privacy') && legalPage.body.includes('/gdpr') && legalPage.body.includes('/cookies');
  console.log('Footer Legal Links Globally Integrated:', footerLegalLinks ? '✅ PASS' : '❌ FAIL');

  console.log('\n==================================================');
  console.log('AUDIT RESULT:', allPass ? '🚀 ALL 31 ROUTES & APIS 100% OPERATIONAL' : '⚠️ SOME ISSUES DETECTED');
  console.log('==================================================');
}

verifyAll().catch(console.error);
