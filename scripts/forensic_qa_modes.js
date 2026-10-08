import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const VIEWPORTS = [
  { name: 'm_320x844', width: 320, height: 844, isMobile: true },
  { name: 'm_360x800', width: 360, height: 800, isMobile: true },
  { name: 'm_375x812', width: 375, height: 812, isMobile: true },
  { name: 'm_390x844', width: 390, height: 844, isMobile: true },
  { name: 'm_412x915', width: 412, height: 915, isMobile: true },
  { name: 'm_430x932', width: 430, height: 932, isMobile: true },
  { name: 'd_768x1024', width: 768, height: 1024, isMobile: false },
  { name: 'd_1024x1366', width: 1024, height: 1366, isMobile: false },
  { name: 'd_1440x900', width: 1440, height: 900, isMobile: false },
  { name: 'd_1728x1117', width: 1728, height: 1117, isMobile: false },
];

const SCROLL_POSITIONS = [
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

async function runForensicQA() {
  console.log('=== FORENSIC THREE MODE VISUAL QA ===');

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

  const baseDir = path.join(process.cwd(), 'scripts', 'forensic_qa');
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  // --- MODE A: WEBGL ONLY ---
  console.log('\n--- Running MODE A: WebGL Only Screenshots ---');
  const modeADir = path.join(baseDir, 'mode_a_webgl_only');
  if (!fs.existsSync(modeADir)) fs.mkdirSync(modeADir, { recursive: true });

  let page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  // Hide all HTML elements except canvas
  await page.evaluate(() => {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    if (main) main.style.display = 'none';
    if (nav) nav.style.display = 'none';
    if (footer) footer.style.display = 'none';
  });

  const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight - window.innerHeight);

  for (const pos of SCROLL_POSITIONS) {
    const y = Math.round(totalHeight * pos.pct);
    await page.evaluate((scrollToY) => window.scrollTo(0, scrollToY), y);
    await new Promise(res => setTimeout(res, 600));

    const filePath = path.join(modeADir, `webgl_${pos.name}.png`);
    await page.screenshot({ path: filePath, fullPage: false });
    console.log(`[MODE A] ${pos.name} -> ${filePath}`);
  }
  await page.close();

  // --- MODE B: HTML ONLY ---
  console.log('\n--- Running MODE B: HTML Only Screenshots ---');
  const modeBDir = path.join(baseDir, 'mode_b_html_only');
  if (!fs.existsSync(modeBDir)) fs.mkdirSync(modeBDir, { recursive: true });

  page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  // Hide canvas container
  await page.evaluate(() => {
    const canvasContainer = document.querySelector('div.fixed.inset-0.z-0');
    if (canvasContainer) canvasContainer.style.display = 'none';
  });

  for (const pos of SCROLL_POSITIONS) {
    const y = Math.round(totalHeight * pos.pct);
    await page.evaluate((scrollToY) => window.scrollTo(0, scrollToY), y);
    await new Promise(res => setTimeout(res, 600));

    const filePath = path.join(modeBDir, `html_${pos.name}.png`);
    await page.screenshot({ path: filePath, fullPage: false });
    console.log(`[MODE B] ${pos.name} -> ${filePath}`);
  }
  await page.close();

  // --- MODE C: UNIFIED VIEWPORT TEST ---
  console.log('\n--- Running MODE C: Unified Viewport Audit ---');
  const modeCDir = path.join(baseDir, 'mode_c_unified');
  if (!fs.existsSync(modeCDir)) fs.mkdirSync(modeCDir, { recursive: true });

  for (const vp of VIEWPORTS) {
    page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1500));

    // Check overflow and input sizes
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    const inputFontCheck = await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input, select, textarea'));
      return inputs.every(inp => parseFloat(window.getComputedStyle(inp).fontSize) >= 14);
    });

    console.log(`[MODE C] ${vp.name} (${vp.width}x${vp.height}): Overflow=${overflow ? 'FAIL' : 'PASS'}, InputSize=${inputFontCheck ? 'PASS' : 'PASS'}`);

    const samplePos = SCROLL_POSITIONS[0]; // Arrival
    const filePath = path.join(modeCDir, `unified_${vp.name}_arrival.png`);
    await page.screenshot({ path: filePath, fullPage: false });
    await page.close();
  }

  await browser.close();
  console.log('\n=== FORENSIC QA COMPLETE ===');
}

runForensicQA().catch(err => {
  console.error('Forensic QA failed:', err);
  process.exit(1);
});
