/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function capture() {
  const outputDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  console.log('Launching Chrome from:', chromePath);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push(err.toString());
  });

  const scrollFractions = [0, 0.12, 0.25, 0.37, 0.50, 0.62, 0.75, 0.87, 1.0];

  // 1. Capture 1440x900 Desktop scroll progression
  console.log('Capturing 1440x900 Desktop progression...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  for (const frac of scrollFractions) {
    await page.evaluate((fraction) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo(0, maxScroll * fraction);
    }, frac);
    await new Promise(r => setTimeout(r, 400));
    const percent = Math.round(frac * 100);
    const filename = path.join(outputDir, `1440x900_scroll_${percent}pct.png`);
    await page.screenshot({ path: filename });
    console.log(`Saved: ${filename}`);
  }

  // 2. Capture 390x844 Mobile progression
  console.log('Capturing 390x844 Mobile progression...');
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  for (const frac of scrollFractions) {
    await page.evaluate((fraction) => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo(0, maxScroll * fraction);
    }, frac);
    await new Promise(r => setTimeout(r, 400));
    const percent = Math.round(frac * 100);
    const filename = path.join(outputDir, `390x844_scroll_${percent}pct.png`);
    await page.screenshot({ path: filename });
    console.log(`Saved: ${filename}`);
  }

  // 3. Test Mobile Navigation Drawer at 390x844
  console.log('Testing Mobile Navigation Drawer...');
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 300));
  const menuButton = await page.$('button[aria-label="Open mobile menu"]');
  if (menuButton) {
    await menuButton.click();
    await new Promise(r => setTimeout(r, 500));
    const drawerFilename = path.join(outputDir, 'mobile_drawer_390x844.png');
    await page.screenshot({ path: drawerFilename });
    console.log(`Saved: ${drawerFilename}`);
    
    // Close menu
    const closeButton = await page.$('button[aria-label="Close mobile menu"]');
    if (closeButton) await closeButton.click();
    await new Promise(r => setTimeout(r, 300));
  }

  // 4. Capture other required viewports
  const targetViewports = [
    { name: 'mobile_430x932', width: 430, height: 932, isMobile: true },
    { name: 'mobile_375x812', width: 375, height: 812, isMobile: true },
    { name: 'mobile_360x800', width: 360, height: 800, isMobile: true },
    { name: 'laptop_1280x800', width: 1280, height: 800, isMobile: false },
    { name: 'tablet_1024x768', width: 1024, height: 768, isMobile: false },
  ];

  for (const vp of targetViewports) {
    await page.setViewport({ width: vp.width, height: vp.height, isMobile: vp.isMobile });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
    await new Promise(r => setTimeout(r, 600));
    const filename = path.join(outputDir, `${vp.name}_hero.png`);
    await page.screenshot({ path: filename });
    console.log(`Saved: ${filename}`);
  }

  await browser.close();
  console.log('\n--- AUDIT RESULTS ---');
  console.log('Console errors encountered:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    console.log('Errors:', consoleErrors);
  }
}

capture().catch(err => {
  console.error('Capture error:', err);
  process.exit(1);
});
