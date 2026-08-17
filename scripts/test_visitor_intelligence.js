/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer-core');
const http = require('http');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

async function testVisitorIntelligence() {
  console.log('================================================================');
  console.log('AI X MEDIA — VISITOR INTELLIGENCE & LEAD ALERT SYSTEM AUDIT');
  console.log('================================================================\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  const eventRequests = [];

  page.on('request', (req) => {
    if (req.url().includes('/api/events')) {
      eventRequests.push({
        url: req.url(),
        method: req.method(),
        postData: req.postData() || '',
      });
    }
  });

  // --- 1. FRESH VISITOR BEFORE CONSENT ---
  console.log('--- 1. PRE-CONSENT BEHAVIOR (STRICT GDPR ZERO-TRACKING) ---');
  await page.goto('http://localhost:3000/real-estate', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 800));

  console.log(`Events sent before consent: ${eventRequests.length} (0 expected: ${eventRequests.length === 0 ? '✅ PASS' : '❌ FAIL'})`);

  // --- 2. REJECT ANALYTICS CONSENT ---
  console.log('\n--- 2. REJECT ANALYTICS CONSENT TEST ---');
  await page.evaluate(() => {
    localStorage.setItem('aix_cookie_consent_v1', JSON.stringify({
      necessary: true,
      preferences: true,
      analytics: false,
      marketing: false,
    }));
  });
  await page.goto('http://localhost:3000/real-estate/properties', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 800));

  console.log(`Events sent after analytics rejected: ${eventRequests.length} (0 expected: ${eventRequests.length === 0 ? '✅ PASS' : '❌ FAIL'})`);

  // --- 3. ACCEPT ANALYTICS CONSENT & TRACKING ---
  console.log('\n--- 3. ACCEPT ANALYTICS CONSENT & TRACKING TEST ---');
  await page.evaluate(() => {
    localStorage.setItem('aix_cookie_consent_v1', JSON.stringify({
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    }));
  });

  // Navigate to trigger page view
  await page.goto('http://localhost:3000/real-estate/market', { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 800));

  console.log(`Events sent after consent granted: ${eventRequests.length} (>=1 expected: ${eventRequests.length >= 1 ? '✅ PASS' : '❌ FAIL'})`);

  // --- 4. HIGH-INTENT CTA CLICK TEST (WHATSAPP) ---
  console.log('\n--- 4. HIGH-INTENT CTA CLICK TEST ---');
  const countBeforeClick = eventRequests.length;
  await page.evaluate(() => {
    const waLink = document.querySelector('a[href*="wa.me"]');
    if (waLink) waLink.click();
  });
  await new Promise((r) => setTimeout(r, 600));

  const clickEventSent = eventRequests.length > countBeforeClick;
  console.log(`WhatsApp CTA click event captured: ${clickEventSent ? '✅ PASS' : '❌ FAIL'}`);

  // --- 5. PROTECTED ADMIN INTELLIGENCE ENDPOINT AUDIT ---
  console.log('\n--- 5. PROTECTED ADMIN INTELLIGENCE ENDPOINT AUDIT ---');
  const getAdminData = (token) => {
    return new Promise((resolve) => {
      http.get(`http://localhost:3000/api/admin/intelligence?token=${token || ''}`, (res) => {
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => resolve({ statusCode: res.statusCode, data: JSON.parse(data || '{}') }));
      });
    });
  };

  const unauthorizedRes = await getAdminData('invalid_key');
  console.log(`Unauthorized request without valid key: HTTP ${unauthorizedRes.statusCode} (401 expected: ${unauthorizedRes.statusCode === 401 ? '✅ PASS' : '❌ FAIL'})`);

  const authorizedRes = await getAdminData('aix_executive_preview_key');
  console.log(`Authorized request with admin key: HTTP ${authorizedRes.statusCode} (200 expected: ${authorizedRes.statusCode === 200 ? '✅ PASS' : '❌ FAIL'})`);
  console.log(`Admin Summary:`, authorizedRes.data.summary);

  await browser.close();

  console.log('\n================================================================');
  console.log('VISITOR INTELLIGENCE AUDIT COMPLETE');
  console.log('================================================================');
}

testVisitorIntelligence().catch(console.error);
