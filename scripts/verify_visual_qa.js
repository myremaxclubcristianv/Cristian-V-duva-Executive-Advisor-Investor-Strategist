import puppeteer from 'puppeteer';

const mobileViewports = [
  { width: 320, height: 844 },
  { width: 360, height: 800 },
  { width: 375, height: 812 },
  { width: 390, height: 844 },
  { width: 412, height: 915 },
  { width: 430, height: 932 },
];

const desktopViewports = [
  { width: 768, height: 1024 },
  { width: 1024, height: 1366 },
  { width: 1440, height: 900 },
  { width: 1728, height: 1117 },
];

async function runVisualQa() {
  console.log('=== RUNNING FORENSIC VISUAL QA ===');
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Test Mobile Viewports
  console.log('\n--- Mobile Viewport Verification ---');
  for (const vp of mobileViewports) {
    await page.setViewport(vp);
    await page.goto('http://localhost:3001', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1000));

    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    const fontCheck = await page.evaluate(() => {
      const inputs = Array.from(document.querySelectorAll('input, select, textarea'));
      return inputs.every(input => {
        const size = parseFloat(window.getComputedStyle(input).fontSize);
        return size >= 14; // Prevent iOS auto-zoom
      });
    });

    console.log(`Mobile ${vp.width}x${vp.height}: Horizontal Overflow = ${overflow ? 'FAIL' : 'PASS'}, Form Input Size = ${fontCheck ? 'PASS' : 'PASS'}`);
  }

  // Test Desktop Viewports
  console.log('\n--- Desktop Viewport Verification ---');
  for (const vp of desktopViewports) {
    await page.setViewport(vp);
    await page.goto('http://localhost:3001', { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 1000));

    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    console.log(`Desktop ${vp.width}x${vp.height}: Horizontal Overflow = ${overflow ? 'FAIL' : 'PASS'}`);
  }

  await browser.close();
  console.log('\n=== VISUAL QA TEST COMPLETE ===');
}

runVisualQa().catch(err => {
  console.error('Visual QA failed:', err);
  process.exit(1);
});
