/* eslint-disable @typescript-eslint/no-require-imports */
const https = require('https');
const puppeteer = require('puppeteer-core');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PROD_HOST = 'aixmedia.cristianvaduva.com';

function postLiveJson(urlPath, payload) {
  return new Promise((resolve) => {
    const data = JSON.stringify(payload);
    const req = https.request(
      {
        hostname: PROD_HOST,
        port: 443,
        path: urlPath,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
          'User-Agent': 'AiXMedia-Production-Audit/1.0',
        },
      },
      (res) => {
        let body = '';
        res.on('data', (c) => (body += c));
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(body || '{}') });
          } catch {
            resolve({ status: res.statusCode, rawBody: body });
          }
        });
      }
    );
    req.on('error', (err) => resolve({ status: 500, error: err.message }));
    req.write(data);
    req.end();
  });
}

function getLiveJson(urlPath) {
  return new Promise((resolve) => {
    const req = https.request(
      {
        hostname: PROD_HOST,
        port: 443,
        path: urlPath,
        method: 'GET',
        headers: {
          'User-Agent': 'AiXMedia-Production-Audit/1.0',
        },
      },
      (res) => {
        let body = '';
        res.on('data', (c) => (body += c));
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(body || '{}') });
          } catch {
            resolve({ status: res.statusCode, rawBody: body });
          }
        });
      }
    );
    req.on('error', (err) => resolve({ status: 500, error: err.message }));
    req.end();
  });
}

async function verifyLiveProduction() {
  console.log('================================================================');
  console.log('AI X MEDIA — LIVE PRODUCTION VISITOR INTELLIGENCE AUDIT');
  console.log(`TARGET: https://${PROD_HOST}`);
  console.log('================================================================\n');

  // --- 1. LIVE EVENT INGESTION ---
  console.log('--- 1. LIVE PRODUCTION EVENT INGESTION ---');
  const validLivePayload = {
    sessionId: `prod_audit_${Date.now()}`,
    eventType: 'PAGE_VIEW',
    pagePath: '/real-estate',
    pageTitle: 'Luxury Real Estate',
    deviceType: 'desktop',
  };
  const validLiveRes = await postLiveJson('/api/events', validLivePayload);
  console.log(`Live Event Post (/api/events): HTTP ${validLiveRes.status} -> Response:`, validLiveRes.body || validLiveRes.rawBody);

  const invalidLivePayload = {
    sessionId: `prod_audit_${Date.now()}`,
    eventType: 'INVALID_EVENT_TYPE_TEST',
  };
  const invalidLiveRes = await postLiveJson('/api/events', invalidLivePayload);
  console.log(`Live Invalid Event Post (/api/events): HTTP ${invalidLiveRes.status} -> Response:`, invalidLiveRes.body || invalidLiveRes.rawBody);

  // --- 2. LIVE HIGH-INTENT EVENT ---
  console.log('\n--- 2. LIVE HIGH-INTENT DISPATCH TEST ---');
  const highIntentSession = `prod_audit_hi_${Date.now()}`;
  const highIntentLivePayload = {
    sessionId: highIntentSession,
    eventType: 'WHATSAPP_CLICK',
    pagePath: '/contact',
    pageTitle: 'Contact',
    deviceType: 'mobile',
    metadata: { label: 'WhatsApp Concierge Audit' },
  };

  const hiLiveRes = await postLiveJson('/api/events', highIntentLivePayload);
  console.log(`Live High-Intent Event Post: HTTP ${hiLiveRes.status} -> Response:`, hiLiveRes.body || hiLiveRes.rawBody);

  // --- 3. LIVE ADMIN SECURITY ---
  console.log('\n--- 3. LIVE ADMIN ENDPOINT PROTECTION ---');
  const liveUnauthAdmin = await getLiveJson('/api/admin/intelligence');
  console.log(`Live Unauthorized Admin Access: HTTP ${liveUnauthAdmin.status} (401 expected: ${liveUnauthAdmin.status === 401 ? '✅ PASS' : '❌ FAIL'})`);

  // --- 4. LIVE BROWSER VERIFICATION ---
  console.log('\n--- 4. LIVE BROWSER CONSENT & TRACKING VERIFICATION ---');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  const prodEventRequests = [];
  page.on('request', (req) => {
    if (req.url().includes('/api/events')) {
      prodEventRequests.push(req.url());
    }
  });

  // Pre-consent check
  await page.goto(`https://${PROD_HOST}/real-estate`, { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 1000));
  console.log(`Live events before consent: ${prodEventRequests.length} (0 expected: ${prodEventRequests.length === 0 ? '✅ PASS' : '❌ FAIL'})`);

  // Enable analytics
  await page.evaluate(() => {
    localStorage.setItem('aix_cookie_consent_v1', JSON.stringify({
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    }));
  });

  await page.goto(`https://${PROD_HOST}/contact`, { waitUntil: 'domcontentloaded' });
  await new Promise((r) => setTimeout(r, 1000));
  console.log(`Live events after consent: ${prodEventRequests.length} (>=1 expected: ${prodEventRequests.length >= 1 ? '✅ PASS' : '❌ FAIL'})`);

  await browser.close();

  console.log('\n================================================================');
  console.log('LIVE PRODUCTION AUDIT COMPLETE');
  console.log('================================================================');
}

verifyLiveProduction().catch(console.error);
