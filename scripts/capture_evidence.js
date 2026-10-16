// scripts/capture_evidence.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = process.env.ARTIFACTS_DIR || '/Users/cristianvaduva/.gemini/antigravity-ide/brain/54c208e7-cbb7-4ed5-b85a-730df78d3148';
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const SUFFIX = process.argv[2] || 'before';

const PAGES = [
  { name: 'homepage', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'real_estate', path: '/real-estate' },
  { name: 'properties', path: '/real-estate/properties' },
  { name: 'ecosystem', path: '/ecosystem' },
  { name: 'ventures', path: '/ventures' },
  { name: 'insights', path: '/insights' },
];

const VIEWPORTS = [
  { label: 'desktop_1440', width: 1440, height: 900 },
  { label: 'mobile_390', width: 390, height: 844 },
];

async function captureAll() {
  if (!fs.existsSync(ARTIFACT_DIR)) fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log(`Starting capture (${SUFFIX}) at ${BASE_URL}...`);

  for (const p of PAGES) {
    for (const vp of VIEWPORTS) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      try {
        await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'networkidle', timeout: 15000 });
      } catch (e) {
        await page.goto(`${BASE_URL}${p.path}`, { waitUntil: 'domcontentloaded' });
      }
      // Wait for any images or fonts to settle
      await page.waitForTimeout(500);

      const filename = `${p.name}_${vp.label}_${SUFFIX}.png`;
      const fullPath = path.join(ARTIFACT_DIR, filename);
      // Capture top viewport area (not 20,000px tall) so it's a realistic comparison of visual composition
      await page.screenshot({ path: fullPath, fullPage: false });
      console.log(`Saved: ${filename}`);
    }
  }

  await browser.close();
  console.log(`Capture complete for ${SUFFIX}.`);
}

captureAll().catch(console.error);
