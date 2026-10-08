import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

async function capture() {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--enable-gpu',
      '--ignore-gpu-blocklist',
      '--use-gl=angle',
    ]
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });

  // Wait 3 seconds for WebGL canvas hydration
  await new Promise(r => setTimeout(r, 3000));

  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);

  const rooms = [
    { name: '01_exterior', pct: 0.0 },
    { name: '02_arrival', pct: 0.1 },
    { name: '03_living', pct: 0.22 },
    { name: '04_study', pct: 0.33 },
    { name: '05_library', pct: 0.44 },
    { name: '06_gallery', pct: 0.55 },
    { name: '07_command', pct: 0.66 },
    { name: '08_cinema', pct: 0.77 },
    { name: '09_terrace', pct: 0.88 },
    { name: '10_desk', pct: 1.0 },
  ];

  const outDir = path.join(process.cwd(), 'scripts', 'v27_captures');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const r of rooms) {
    const y = Math.round(totalHeight * r.pct);
    await page.evaluate((scrollToY) => window.scrollTo(0, scrollToY), y);
    await new Promise(res => setTimeout(res, 800));

    const filePath = path.join(outDir, `v27_${r.name}.png`);
    await page.screenshot({ path: filePath, fullPage: false });
    console.log(`Captured ${r.name} at ${Math.round(r.pct * 100)}% scroll -> ${filePath}`);
  }

  await browser.close();
  console.log('Capture complete!');
}

capture().catch(err => {
  console.error('Capture failed:', err);
  process.exit(1);
});
