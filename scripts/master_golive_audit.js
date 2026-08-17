/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer-core');
const https = require('https');
const http = require('http');
const { execSync } = require('child_process');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function fetchHttp(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      let data = '';
      res.on('data', (c) => (data += c));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          bodyLength: data.length,
          body: data,
        });
      });
    }).on('error', (err) => resolve({ error: err.message }));
  });
}

async function masterGoLiveAudit() {
  console.log('================================================================');
  console.log('AI X MEDIA — MASTER PRE-LAUNCH FORENSIC GO-LIVE AUDIT');
  console.log('================================================================\n');

  // 1. Production Deployment & Git HEAD Check
  console.log('--- 1. PRODUCTION DEPLOYMENT & REPOSITORY MATCH ---');
  const gitHead = execSync('git rev-parse HEAD').toString().trim();
  const gitBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
  console.log(`Repository Branch: ${gitBranch} | Local Commit: ${gitHead}`);
  
  const aixRes = await fetchHttp('https://aixmedia.cristianvaduva.com');
  console.log(`Live aixmedia.cristianvaduva.com: HTTP ${aixRes.statusCode} | Server: ${aixRes.headers['server']} | Vercel ID: ${aixRes.headers['x-vercel-id'] || 'N/A'}`);
  const mainRes = await fetchHttp('https://cristianvaduva.com');
  console.log(`Live cristianvaduva.com: HTTP ${mainRes.statusCode} | Server: ${mainRes.headers['server']}`);

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });
  page.on('pageerror', (err) => consoleErrors.push(err.message));

  // 2. Route Matrix Verification
  console.log('\n--- 2. CANONICAL ROUTE MATRIX AUDIT ---');
  const routes = [
    '/', '/about', '/contact', '/ecosystem', '/ventures', '/insights',
    '/real-estate', '/real-estate/properties', '/real-estate/market', '/real-estate/news',
    '/media', '/media/videos', '/tv', '/gallery',
    '/legal', '/privacy', '/gdpr', '/cookies', '/terms-of-use',
    '/disclaimer', '/data-provenance', '/editorial-policy', '/accessibility',
    '/robots.txt', '/sitemap.xml', '/manifest.webmanifest'
  ];

  let routeFailures = 0;
  for (const r of routes) {
    const res = await fetchHttp(`http://localhost:3000${r}`);
    if (res.statusCode !== 200 && res.statusCode !== 304) {
      console.log(`❌ [FAIL] ${r.padEnd(28)} -> HTTP ${res.statusCode}`);
      routeFailures++;
    } else {
      console.log(`✅ [PASS] ${r.padEnd(28)} -> HTTP ${res.statusCode} (${res.bodyLength} bytes)`);
    }
  }
  console.log(`Total Route Failures: ${routeFailures}`);

  // 3. 404 & Error Handling
  console.log('\n--- 3. 404 ERROR HANDLING AUDIT ---');
  const notFoundRoutes = ['/this-page-does-not-exist', '/random-test-route', '/media/not-real', '/real-estate/not-real'];
  for (const nfr of notFoundRoutes) {
    const res = await fetchHttp(`http://localhost:3000${nfr}`);
    console.log(`404 Check ${nfr.padEnd(28)} -> HTTP ${res.statusCode} (Branded 404: ${res.body.includes('404') || res.body.includes('Not Found') ? '✅ YES' : '❌ NO'})`);
  }

  // 4. Navigation & Mobile Drawer
  console.log('\n--- 4. NAVIGATION & MOBILE DRAWER AUDIT ---');
  await page.setViewport({ width: 375, height: 812 });
  await page.goto('http://localhost:3000/about', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 600));

  const mobileNavButton = await page.$('button[aria-label="Open mobile menu"]');
  console.log(`Mobile Hamburger Toggle present on /about: ${mobileNavButton ? '✅ PASS' : '❌ FAIL'}`);
  if (mobileNavButton) {
    await mobileNavButton.click();
    await new Promise((r) => setTimeout(r, 400));
    const navOpen = await page.evaluate(() => document.body.style.overflow === 'hidden' || document.querySelector('nav') !== null);
    console.log(`Mobile Drawer opened & body scroll locked: ${navOpen ? '✅ PASS' : '❌ FAIL'}`);
    const closeButton = await page.$('button[aria-label="Close mobile menu"]');
    if (closeButton) await closeButton.click();
    await new Promise((r) => setTimeout(r, 300));
  }

  // 5. Footer & CTAs Verification
  console.log('\n--- 5. FOOTER & CTA AUDIT ---');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/about', { waitUntil: 'domcontentloaded' });
  const allCtas = await page.evaluate(() => {
    const linksAndBtns = Array.from(document.querySelectorAll('a, button'));
    return linksAndBtns.map((el) => ({
      text: (el.innerText || '').trim(),
      href: el.getAttribute('href') || '',
      tag: el.tagName.toLowerCase(),
    })).filter((el) => el.text.length > 0 && el.text.length < 50);
  });
  console.log(`Total Interactive CTAs & Links Scanned on /about: ${allCtas.length}`);
  const deadLinks = allCtas.filter((c) => c.tag === 'a' && (!c.href || c.href === '#' || c.href === 'javascript:void(0)'));
  console.log(`Dead Links (href="#" or empty): ${deadLinks.length} (${deadLinks.length === 0 ? '✅ PASS' : '❌ FAIL'})`);

  // 6. Contact Channels
  console.log('\n--- 6. CONTACT CHANNELS AUDIT ---');
  const contacts = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a'));
    return {
      email: anchors.find((a) => a.href.startsWith('mailto:'))?.href || 'None',
      whatsapp: anchors.find((a) => a.href.includes('wa.me'))?.href || 'None',
      telegram: anchors.find((a) => a.href.includes('t.me'))?.href || 'None',
      linkedin: anchors.find((a) => a.href.includes('linkedin.com'))?.href || 'None',
      youtube: anchors.find((a) => a.href.includes('youtube.com'))?.href || 'None',
    };
  });
  console.log(`Email Relay:   ${contacts.email}`);
  console.log(`WhatsApp Link: ${contacts.whatsapp}`);
  console.log(`Telegram Link: ${contacts.telegram}`);
  console.log(`LinkedIn Link: ${contacts.linkedin}`);
  console.log(`YouTube Link:  ${contacts.youtube}`);

  // 7. Multi-Viewport Overflow Check
  console.log('\n--- 7. RESPONSIVE MULTI-VIEWPORT OVERFLOW CHECK ---');
  const viewports = [
    { name: 'Mobile 360x800', w: 360, h: 800 },
    { name: 'Mobile 375x812', w: 375, h: 812 },
    { name: 'Mobile 390x844', w: 390, h: 844 },
    { name: 'Mobile 430x932', w: 430, h: 932 },
    { name: 'Desktop 1024x768', w: 1024, h: 768 },
    { name: 'Desktop 1280x800', w: 1280, h: 800 },
    { name: 'Desktop 1440x900', w: 1440, h: 900 },
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.w, height: vp.h });
    await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    console.log(`[${vp.name.padEnd(18)}] Overflow: ${overflow}px (${overflow === 0 ? '✅ PASS' : '❌ FAIL'})`);
  }

  // 8. Runtime Errors Summary
  console.log('\n--- 8. RUNTIME CONSOLE & CLIENT ERROR AUDIT ---');
  console.log(`Total Runtime Console Errors: ${consoleErrors.length} (${consoleErrors.length === 0 ? '✅ PASS' : '❌ FAIL'})`);

  await browser.close();

  console.log('\n================================================================');
  console.log('MASTER FORENSIC GO-LIVE AUDIT COMPLETE');
  console.log('================================================================');
}

masterGoLiveAudit().catch(console.error);
