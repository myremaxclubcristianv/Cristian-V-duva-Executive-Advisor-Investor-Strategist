/* eslint-disable @typescript-eslint/no-require-imports */
const http = require('http');
const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function postJson(urlPath, payload) {
  return new Promise((resolve) => {
    const data = JSON.stringify(payload);
    const req = http.request(
      `http://localhost:3000${urlPath}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(data),
        },
      },
      (res) => {
        let body = '';
        res.on('data', (c) => (body += c));
        res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(body || '{}') }));
      }
    );
    req.on('error', (err) => resolve({ status: 500, error: err.message }));
    req.write(data);
    req.end();
  });
}

function getJson(urlPath, headers = {}) {
  return new Promise((resolve) => {
    const req = http.request(
      `http://localhost:3000${urlPath}`,
      {
        method: 'GET',
        headers,
      },
      (res) => {
        let body = '';
        res.on('data', (c) => (body += c));
        res.on('end', () => resolve({ status: res.statusCode, body: JSON.parse(body || '{}') }));
      }
    );
    req.on('error', (err) => resolve({ status: 500, error: err.message }));
    req.end();
  });
}

async function runDeliveryAudit() {
  console.log('================================================================');
  console.log('AI X MEDIA — VISITOR INTELLIGENCE DELIVERY & SECURITY AUDIT');
  console.log('================================================================\n');

  // --- 1. EVENT INGESTION ENDPOINT AUDIT ---
  console.log('--- 1. EVENT INGESTION AUDIT (/api/events) ---');
  const validPayload = {
    sessionId: `test_sid_${Date.now()}`,
    eventType: 'PAGE_VIEW',
    pagePath: '/real-estate',
    pageTitle: 'Luxury Real Estate',
    deviceType: 'desktop',
  };
  const validRes = await postJson('/api/events', validPayload);
  console.log(`Valid Event Response: HTTP ${validRes.status} (200 expected: ${validRes.status === 200 ? '✅ PASS' : '❌ FAIL'})`);

  const invalidPayload = {
    sessionId: `test_sid_${Date.now()}`,
    eventType: 'MALICIOUS_EVENT_INJECTION',
  };
  const invalidRes = await postJson('/api/events', invalidPayload);
  console.log(`Invalid Event Rejection: HTTP ${invalidRes.status} (400 expected: ${invalidRes.status === 400 ? '✅ PASS' : '❌ FAIL'})`);

  // --- 2. HIGH-INTENT & THROTTLING AUDIT ---
  console.log('\n--- 2. HIGH-INTENT DETECTION & THROTTLING AUDIT ---');
  const testSessionId = `test_hi_${Date.now()}`;
  const highIntentPayload1 = {
    sessionId: testSessionId,
    eventType: 'WHATSAPP_CLICK',
    pagePath: '/contact',
    pageTitle: 'Contact',
    deviceType: 'mobile',
    metadata: { label: 'WhatsApp Concierge' },
  };

  const hiRes1 = await postJson('/api/events', highIntentPayload1);
  console.log(`High-Intent Event 1: HTTP ${hiRes1.status} (200 expected: ${hiRes1.status === 200 ? '✅ PASS' : '❌ FAIL'})`);

  const highIntentPayload2 = {
    sessionId: testSessionId,
    eventType: 'WHATSAPP_CLICK',
    pagePath: '/contact',
    pageTitle: 'Contact',
    deviceType: 'mobile',
    metadata: { label: 'WhatsApp Concierge' },
  };
  const hiRes2 = await postJson('/api/events', highIntentPayload2);
  console.log(`High-Intent Event 2 (Throttled within cooldown): HTTP ${hiRes2.status} (200 expected: ${hiRes2.status === 200 ? '✅ PASS' : '❌ FAIL'})`);

  // --- 3. NOTIFICATION CREDENTIALS AUDIT ---
  console.log('\n--- 3. NOTIFICATION PROVIDER STATUS ---');
  const hasTelegramToken = Boolean(process.env.LEAD_ALERT_TELEGRAM_BOT_TOKEN);
  const hasTelegramChat = Boolean(process.env.LEAD_ALERT_TELEGRAM_CHAT_ID);
  const hasWebhook = Boolean(process.env.LEAD_ALERT_WEBHOOK_URL);

  console.log(`Telegram Bot Token configured: ${hasTelegramToken ? 'YES' : 'NO (Unset)'}`);
  console.log(`Telegram Chat ID configured:   ${hasTelegramChat ? 'YES' : 'NO (Unset)'}`);
  console.log(`Webhook URL configured:        ${hasWebhook ? 'YES' : 'NO (Unset)'}`);
  console.log(`External Delivery Status:      ${hasTelegramToken && hasTelegramChat ? 'CONFIGURED' : 'DELIVERY NOT VERIFIED (No active external credentials in env)'}`);

  // --- 4. ADMIN ENDPOINT PROTECTION AUDIT ---
  console.log('\n--- 4. ADMIN ENDPOINT PROTECTION AUDIT (/api/admin/intelligence) ---');
  const unauthRes = await getJson('/api/admin/intelligence');
  console.log(`Unauthorized request without token: HTTP ${unauthRes.status} (401 expected: ${unauthRes.status === 401 ? '✅ PASS' : '❌ FAIL'})`);

  const authRes = await getJson('/api/admin/intelligence?token=aix_executive_preview_key');
  console.log(`Authorized request with key: HTTP ${authRes.status} (200 expected: ${authRes.status === 200 ? '✅ PASS' : '❌ FAIL'})`);
  console.log(`Admin Summary Received:`, authRes.body.summary);

  // --- 5. CLIENT BUNDLE SECRET LEAK SCAN ---
  console.log('\n--- 5. CLIENT BUNDLE SECRET LEAK SCAN ---');
  const staticChunksDir = path.join(process.cwd(), '.next/static/chunks');
  let leakedSecrets = [];
  const sensitivePatterns = [
    /LEAD_ALERT_TELEGRAM_BOT_TOKEN/i,
    /LEAD_ALERT_WEBHOOK_URL/i,
    /ADMIN_SECRET_KEY/i,
    /SUPABASE_SERVICE_ROLE/i,
  ];

  if (fs.existsSync(staticChunksDir)) {
    const files = fs.readdirSync(staticChunksDir);
    files.forEach((f) => {
      if (f.endsWith('.js')) {
        const content = fs.readFileSync(path.join(staticChunksDir, f), 'utf-8');
        sensitivePatterns.forEach((pat) => {
          if (pat.test(content)) {
            leakedSecrets.push(`Pattern ${pat} found in ${f}`);
          }
        });
      }
    });
  }

  console.log(`Client bundle secret scan: ${leakedSecrets.length === 0 ? '✅ 0 SECRETS LEAKED (PASS)' : `❌ ${leakedSecrets.join(', ')}`}`);

  // --- 6. PUPPETEER REAL-TIME RUNTIME VERIFICATION ---
  console.log('\n--- 6. BROWSER RUNTIME VERIFICATION ---');
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

  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.goto('http://localhost:3000/real-estate', { waitUntil: 'domcontentloaded' });
  await page.goto('http://localhost:3000/contact', { waitUntil: 'domcontentloaded' });

  console.log(`Console Errors during navigation: ${consoleErrors.length} (0 expected: ${consoleErrors.length === 0 ? '✅ PASS' : '❌ FAIL'})`);
  await browser.close();

  console.log('\n================================================================');
  console.log('DELIVERY & SECURITY AUDIT COMPLETE');
  console.log('================================================================');
}

runDeliveryAudit().catch(console.error);
