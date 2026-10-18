import puppeteer from 'puppeteer-core';

async function main() {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  // 1. After Desktop Viewport
  await page.screenshot({
    path: '/Users/cristianvaduva/.gemini/antigravity-ide/brain/54c208e7-cbb7-4ed5-b85a-730df78d3148/after_01_desktop_hero.png'
  });

  // 2. Hover over CONSULTANȚĂ to open mega menu
  const buttons = await page.$$('button');
  for (const btn of buttons) {
    const text = await page.evaluate(el => el.textContent, btn);
    if (text && text.includes('CONSULTANȚĂ')) {
      await btn.hover();
      await new Promise(r => setTimeout(r, 600));
      await page.screenshot({
        path: '/Users/cristianvaduva/.gemini/antigravity-ide/brain/54c208e7-cbb7-4ed5-b85a-730df78d3148/after_02_megamenu.png'
      });
      break;
    }
  }

  // 3. Scroll to Chapter 02 / Editorial Interruption (Limestone Spread)
  // Move mouse away from header so mega menu closes
  await page.mouse.move(700, 500);
  await new Promise(r => setTimeout(r, 400));
  await page.evaluate(() => window.scrollTo(0, 950));
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({
    path: '/Users/cristianvaduva/.gemini/antigravity-ide/brain/54c208e7-cbb7-4ed5-b85a-730df78d3148/after_03_editorial_interruption.png'
  });

  // 4. Scroll to Perspectives (Cristian Văduva Human Strategist)
  await page.evaluate(() => {
    const el = document.getElementById('perspectives');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({
    path: '/Users/cristianvaduva/.gemini/antigravity-ide/brain/54c208e7-cbb7-4ed5-b85a-730df78d3148/after_04_perspectives.png'
  });

  // 5. Scroll to Selected Opportunities
  await page.evaluate(() => {
    const el = document.getElementById('opportunities');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({
    path: '/Users/cristianvaduva/.gemini/antigravity-ide/brain/54c208e7-cbb7-4ed5-b85a-730df78d3148/after_05_opportunities.png'
  });

  // 6. Mobile View (390x844)
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 390, height: 844 });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await mobilePage.screenshot({
    path: '/Users/cristianvaduva/.gemini/antigravity-ide/brain/54c208e7-cbb7-4ed5-b85a-730df78d3148/after_06_mobile_hero.png'
  });

  // 7. Open Mobile Hamburger
  const hamburger = await mobilePage.$('button[aria-label="Deschide meniul de navigare"]');
  if (hamburger) {
    await hamburger.click();
    await new Promise(r => setTimeout(r, 600));
    await mobilePage.screenshot({
      path: '/Users/cristianvaduva/.gemini/antigravity-ide/brain/54c208e7-cbb7-4ed5-b85a-730df78d3148/after_07_mobile_drawer.png'
    });
  }

  await browser.close();
  console.log('ALL AFTER SCREENSHOTS CAPTURED');
}

main().catch(console.error);
