// scripts/visual_qa.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  const base = 'http://localhost:3000';
  const routes = ['/', '/about', '/real-estate', '/gallery', '/tv', '/contact', '/decision/story', '/ecosystem', '/insights', '/media', '/real-estate/market', '/ventures'];
  const viewports = {
    desktop: { width: 1600, height: 900 },
    mobile: { width: 375, height: 812 },
  };
  const outDir = '/Users/cristianvaduva/.gemini/antigravity-ide/brain/6037c342-6fbd-4b90-8596-42d6eacd2ac7/screenshots';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch();
  for (const [label, vp] of Object.entries(viewports)) {
    const context = await browser.newContext({ viewport: vp });
    const page = await context.newPage();
    for (const route of routes) {
      const url = `${base}${route}`;
      await page.goto(url, { waitUntil: 'networkidle' });
      const filename = `screenshot${route.replace(/\//g, '_')}_${label}.png`;
      await page.screenshot({ path: path.join(outDir, filename), fullPage: true });
    }
    await context.close();
  }
  await browser.close();
  console.log('Screenshots saved to', outDir);
})();
