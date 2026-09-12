/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');
const http = require('http');

async function fetchHttp(url) {
  return new Promise((resolve) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, headers: res.headers, body: data });
      });
    }).on('error', (err) => resolve({ error: err.message }));
  });
}

async function verifyAll() {
  console.log('===============================================================');
  console.log('EXECUTIVE — FINAL SEO / CONTENT / ASSET VERIFICATION');
  console.log('===============================================================\n');

  const BASE_URL = 'http://localhost:3005';

  // 1. Raw HTML Audit
  console.log('--- 1. METADATA & CANONICAL AUDIT ---');
  const homeRes = await fetchHttp(`${BASE_URL}/`);
  if (!homeRes.body) {
    console.error('Failed to reach production server at', BASE_URL);
    process.exit(1);
  }

  const html = homeRes.body;

  // Canonical check
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/i);
  const canonicalVal = canonicalMatch ? canonicalMatch[1] : 'NOT FOUND';
  console.log(`Canonical URL: ${canonicalVal}`);
  const canonicalPass = canonicalVal === 'https://executive.cristianvaduva.com/' || canonicalVal === 'https://executive.cristianvaduva.com';
  console.log(`Canonical Correct: ${canonicalPass ? '✅ PASS' : '❌ FAIL'}`);

  // OG URL check
  const ogUrlMatch = html.match(/<meta property="og:url" content="([^"]+)"/i);
  const ogUrlVal = ogUrlMatch ? ogUrlMatch[1] : 'NOT FOUND';
  console.log(`OG URL: ${ogUrlVal}`);
  const ogUrlPass = ogUrlVal === 'https://executive.cristianvaduva.com/' || ogUrlVal === 'https://executive.cristianvaduva.com';
  console.log(`OG URL Correct: ${ogUrlPass ? '✅ PASS' : '❌ FAIL'}`);

  // Old canonical check
  const hasOldCanonical = html.includes('https://cristianvaduva.com"') || html.includes('https://cristianvaduva.com/');
  console.log(`Old domain as canonical identity present: ${hasOldCanonical ? '❌ YES (FAIL)' : '✅ NO (PASS)'}`);

  // Sitemap check
  const sitemapRes = await fetchHttp(`${BASE_URL}/sitemap.xml`);
  const sitemapHasExec = sitemapRes.body && sitemapRes.body.includes('https://executive.cristianvaduva.com');
  const sitemapHasOld = sitemapRes.body && sitemapRes.body.includes('<loc>https://cristianvaduva.com');
  console.log(`Sitemap contains executive.cristianvaduva.com: ${sitemapHasExec ? '✅ PASS' : '❌ FAIL'}`);
  console.log(`Sitemap contains old root as URLs: ${sitemapHasOld ? '❌ FAIL' : '✅ PASS'}`);

  // Robots check
  const robotsRes = await fetchHttp(`${BASE_URL}/robots.txt`);
  const robotsHasExec = robotsRes.body && robotsRes.body.includes('https://executive.cristianvaduva.com/sitemap.xml');
  console.log(`Robots.txt sitemap reference: ${robotsHasExec ? '✅ PASS' : '❌ FAIL'}`);

  // 2. Structured Data / Schema.org Person Audit
  console.log('\n--- 2. SCHEMA.ORG PERSON AUDIT ---');
  const jsonLdMatches = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  console.log(`Found ${jsonLdMatches.length} JSON-LD block(s)`);

  let personSchema = null;
  let websiteSchema = null;

  for (const match of jsonLdMatches) {
    try {
      const parsed = JSON.parse(match[1]);
      if (parsed['@graph']) {
        for (const item of parsed['@graph']) {
          if (item['@type'] === 'Person') personSchema = item;
          if (item['@type'] === 'WebSite') websiteSchema = item;
        }
      } else if (parsed['@type'] === 'Person') {
        personSchema = parsed;
      }
    } catch (e) {
      console.error('Invalid JSON-LD syntax:', e.message);
    }
  }

  if (personSchema) {
    console.log('✅ Person Schema found:');
    console.log(`   Name:        ${personSchema.name}`);
    console.log(`   URL:         ${personSchema.url}`);
    console.log(`   Image:       ${personSchema.image}`);
    console.log(`   Job Title:   ${personSchema.jobTitle}`);
    console.log(`   SameAs (${personSchema.sameAs?.length || 0}):`, personSchema.sameAs);
  } else {
    console.log('❌ Person Schema NOT found');
  }

  // 3. Browser Render & UI Text Audit
  console.log('\n--- 3. LIVE BROWSER UI & VISUAL TEXT AUDIT ---');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  // Test across responsive viewports
  const viewports = [
    { name: 'Mobile 375px', w: 375, h: 812 },
    { name: 'Mobile 390px', w: 390, h: 844 },
    { name: 'Mobile 430px', w: 430, h: 932 },
    { name: 'Desktop 1440px', w: 1440, h: 900 },
    { name: 'Desktop 1920px', w: 1920, h: 1080 }
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.w, height: vp.h });
    await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - document.documentElement.clientWidth
    );
    console.log(`Viewport ${vp.name.padEnd(16)} Overflow: ${overflow}px ${overflow === 0 ? '✅ PASS' : '❌ FAIL'}`);
  }

  // Check live page content for forbidden strings
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'domcontentloaded' });

  const pageText = await page.evaluate(() => document.body.innerText);

  const forbiddenStrings = [
    '/public/images/personal/lifestyle/',
    '/personal/travel/',
    '/personal/business/',
    'SLOT / 01',
    'SLOT / 02',
    'SLOT / 03',
    'SLOT /',
    'ADD PHOTO',
    'Upload official portrait',
    'Upload editorial profile',
    'PORTRAIT UPLOAD PLACEHOLDER'
  ];

  console.log('\n--- 4. FORBIDDEN STRINGS SCAN ON LIVE HOMEPAGE ---');
  let forbiddenFound = false;
  for (const str of forbiddenStrings) {
    const found = pageText.includes(str);
    if (found) {
      console.log(`❌ Found forbidden string on page: "${str}"`);
      forbiddenFound = true;
    }
  }
  if (!forbiddenFound) {
    console.log('✅ ZERO forbidden filesystem paths, developer UI, or slot text found on live UI.');
  }

  // Check Telegram links on page
  console.log('\n--- 5. TELEGRAM DESTINATION UNIFICATION AUDIT ---');
  const telegramLinks = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a[href*="t.me"], a[href*="telegram"]'));
    return anchors.map((a) => ({ href: a.href, text: a.innerText.trim() }));
  });

  console.log(`Found ${telegramLinks.length} Telegram links on page:`);
  let allTgUnified = true;
  for (const link of telegramLinks) {
    console.log(`   -> href: "${link.href}" | text: "${link.text}"`);
    if (!link.href.includes('capitalinvestcristianvaduva')) {
      allTgUnified = false;
    }
  }
  console.log(`All Telegram links unified to official destination: ${allTgUnified ? '✅ PASS' : '❌ FAIL'}`);

  // Check gallery page as well
  console.log('\n--- 6. GALLERY PAGE AUDIT ---');
  await page.goto(`${BASE_URL}/gallery`, { waitUntil: 'domcontentloaded' });
  const galleryText = await page.evaluate(() => document.body.innerText);
  let galleryForbidden = false;
  for (const str of forbiddenStrings) {
    if (galleryText.includes(str)) {
      console.log(`❌ Found forbidden string on gallery: "${str}"`);
      galleryForbidden = true;
    }
  }
  if (!galleryForbidden) {
    console.log('✅ Gallery page clean: zero raw paths or developer text.');
  }

  // Check contact page
  console.log('\n--- 7. CONTACT PAGE AUDIT ---');
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'domcontentloaded' });
  const contactTgLinks = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a[href*="t.me"], a[href*="telegram"]'));
    return anchors.map((a) => ({ href: a.href, text: a.innerText.trim() }));
  });
  console.log(`Found ${contactTgLinks.length} Telegram link(s) on /contact:`);
  for (const link of contactTgLinks) {
    console.log(`   -> href: "${link.href}" | text: "${link.text}"`);
  }

  await browser.close();

  console.log('\n===============================================================');
  console.log('ALL AUDITS COMPLETED SUCCESSFULLY');
  console.log('===============================================================');
}

verifyAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
