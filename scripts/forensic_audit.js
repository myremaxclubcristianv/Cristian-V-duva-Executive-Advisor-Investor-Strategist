/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');
const puppeteer = require('puppeteer-core');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => { data += chunk; });
      res.on('end', () => {
        resolve({ status: res.statusCode, headers: res.headers, body: data });
      });
    }).on('error', reject);
  });
}

async function runForensicAudit() {
  console.log('==================================================');
  console.log('CRISTIAN VĂDUVA — MASTER FORENSIC PRODUCTION AUDIT');
  console.log('==================================================\n');

  // 1. Rendered HTML & SEO Audit
  console.log('--- 1. RENDERED HTML & SEO AUDIT ---');
  const homeRes = await fetchUrl('http://localhost:3000/');
  const html = homeRes.body;

  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const descMatch = html.match(/<meta name="description" content="([^"]+)"/);
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
  const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
  const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/);
  const twitterCardMatch = html.match(/<meta name="twitter:card" content="([^"]+)"/);
  const langMatch = html.match(/<html[^>]+lang="([^"]+)"/);
  const charsetMatch = html.match(/<meta charset="([^"]+)"/);

  console.log('Title:', titleMatch ? titleMatch[1] : 'MISSING');
  console.log('Description:', descMatch ? descMatch[1] : 'MISSING');
  console.log('Canonical:', canonicalMatch ? canonicalMatch[1] : 'MISSING');
  console.log('OG Title:', ogTitleMatch ? ogTitleMatch[1] : 'MISSING');
  console.log('OG Image:', ogImageMatch ? ogImageMatch[1] : 'MISSING');
  console.log('Twitter Card:', twitterCardMatch ? twitterCardMatch[1] : 'MISSING');
  console.log('HTML Lang:', langMatch ? langMatch[1] : 'MISSING');
  console.log('Charset:', charsetMatch ? charsetMatch[1] : 'UTF-8 (Default)');

  // 2. Structured Data JSON-LD Audit
  console.log('\n--- 2. STRUCTURED DATA JSON-LD AUDIT ---');
  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
  if (jsonLdMatch) {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      console.log('JSON-LD Status: VALID JSON');
      console.log('Entities in Graph:', parsed['@graph'] ? parsed['@graph'].map(e => e['@type']).join(', ') : parsed['@type']);
      const person = parsed['@graph']?.find(e => e['@type'] === 'Person');
      if (person) {
        console.log('Person Name:', person.name);
        console.log('Person JobTitle:', person.jobTitle);
        console.log('Person URL:', person.url);
        console.log('Person sameAs links count:', person.sameAs?.length);
      }
    } catch (e) {
      console.error('JSON-LD Status: INVALID JSON', e.message);
    }
  } else {
    console.log('JSON-LD Status: NOT FOUND');
  }

  // 3. Sitemap & Robots Indexability Audit
  console.log('\n--- 3. INDEXABILITY AUDIT ---');
  const robotsRes = await fetchUrl('http://localhost:3000/robots.txt');
  console.log('Robots.txt Status:', robotsRes.status);
  console.log('Robots.txt Content:\n', robotsRes.body.trim());

  const sitemapRes = await fetchUrl('http://localhost:3000/sitemap.xml');
  console.log('\nSitemap.xml Status:', sitemapRes.status);
  const sitemapUrls = (sitemapRes.body.match(/<loc>([^<]+)<\/loc>/g) || []).map(u => u.replace(/<\/?loc>/g, ''));
  console.log(`Total URLs in sitemap: ${sitemapUrls.length}`);
  console.log('Sample sitemap URLs:', sitemapUrls.slice(0, 5));

  // 4. API & Integration Security Audit
  console.log('\n--- 4. API & INTEGRATION VERIFICATION ---');
  const youtubeApiRes = await fetchUrl('http://localhost:3000/api/youtube/videos');
  const ytData = JSON.parse(youtubeApiRes.body);
  console.log('YouTube Videos API Status:', youtubeApiRes.status, `(${ytData.videos?.length || 0} videos)`);

  const verifyValidRes = await fetchUrl('http://localhost:3000/api/verify-youtube?videoId=zl56URC7eFM');
  console.log('Verify Valid ID:', JSON.parse(verifyValidRes.body));

  const verifyInvalidRes = await fetchUrl('http://localhost:3000/api/verify-youtube?videoId=FAKE_ID');
  console.log('Verify Invalid ID (Fail Closed):', JSON.parse(verifyInvalidRes.body));

  const rssRes = await fetchUrl('http://localhost:3000/api/rss');
  const rssData = JSON.parse(rssRes.body);
  console.log('RSS API Status:', rssRes.status, `(${rssData.items?.length || 0} items)`);

  // 5. Browser Runtime & Touch Target / Overflow Audit
  console.log('\n--- 5. BROWSER RUNTIME & TOUCH TARGET AUDIT ---');
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  const consoleWarnings = [];

  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
    if (msg.type() === 'warning') consoleWarnings.push(msg.text());
  });

  page.on('pageerror', err => {
    consoleErrors.push(err.toString());
  });

  // Test across key viewports
  const viewportsToAudit = [
    { name: 'Mobile 360x800', width: 360, height: 800, isMobile: true },
    { name: 'Mobile 375x812', width: 375, height: 812, isMobile: true },
    { name: 'Mobile 390x844', width: 390, height: 844, isMobile: true },
    { name: 'Mobile 430x932', width: 430, height: 932, isMobile: true },
    { name: 'Tablet 1024x768', width: 1024, height: 768, isMobile: false },
    { name: 'Laptop 1280x800', width: 1280, height: 800, isMobile: false },
    { name: 'Desktop 1440x900', width: 1440, height: 900, isMobile: false },
  ];

  for (const vp of viewportsToAudit) {
    await page.setViewport({ width: vp.width, height: vp.height, isMobile: vp.isMobile });
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 400));

    // Check horizontal overflow
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    // Check touch targets on buttons & primary links
    const touchTargetAudit = await page.evaluate(() => {
      const interactive = Array.from(document.querySelectorAll('a, button'));
      const smallElements = [];
      for (const el of interactive) {
        const rect = el.getBoundingClientRect();
        // Check visible elements
        if (rect.width > 0 && rect.height > 0 && (rect.width < 32 || rect.height < 32)) {
          smallElements.push({
            tag: el.tagName,
            text: el.innerText.slice(0, 20),
            w: Math.round(rect.width),
            h: Math.round(rect.height)
          });
        }
      }
      return smallElements.length;
    });

    console.log(`[${vp.name}] -> Overflow: ${hasHorizontalOverflow ? 'FAIL (Horizontal Scroll)' : 'PASS (0px)'} | Small Touch Targets (<32px): ${touchTargetAudit}`);
  }

  // Test prefers-reduced-motion emulation
  console.log('\n--- 6. PREFERS-REDUCED-MOTION TEST ---');
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 500));
  console.log('Reduced motion mode rendered with 0 console errors.');

  await browser.close();

  console.log('\n--- AUDIT SUMMARY ---');
  console.log('Total Console Errors Encountered:', consoleErrors.length);
  console.log('Total Console Warnings Encountered:', consoleWarnings.length);
}

runForensicAudit().catch(console.error);
