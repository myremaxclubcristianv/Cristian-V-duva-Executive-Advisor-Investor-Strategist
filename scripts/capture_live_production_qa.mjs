import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://executive.cristianvaduva.com';
const OUT_DIR = path.resolve('scripts/qa_production_live');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function runLiveQA() {
  console.log(`Starting Live Production QA on: ${BASE_URL}\n`);
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  
  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  // 1. Live Homepage Personal Section
  console.log('1: Capturing Live Homepage Personal Section (Cristian Văduva)...');
  await page.goto(`${BASE_URL}/#perspectives`, { waitUntil: 'networkidle' });
  const personalSection = page.locator('#perspectives');
  await personalSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '01_live_homepage_personal_section.png'), fullPage: false });

  // 2. Live Catalogue Header & Personal Advisory Cadran
  console.log('2: Capturing Live Catalogue Header & Personal Advisory Cadran...');
  await page.goto(`${BASE_URL}/real-estate/properties`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT_DIR, '02_live_catalogue_header_advisory_cadran.png'), fullPage: false });

  // 3. Live Catalogue Grid showing 155 properties
  console.log('3: Capturing Live Catalogue Grid showing expanded inventory...');
  const catalogView = page.locator('#catalog-view');
  if (await catalogView.count() > 0) {
    await catalogView.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(OUT_DIR, '03_live_catalogue_grid_155_properties.png'), fullPage: false });
  }

  // 4. Live Newly Imported Property Detail: prop-exp-01
  console.log('4: Capturing Live Newly Imported Property Detail: prop-exp-01...');
  await page.goto(`${BASE_URL}/real-estate/properties/prop-exp-01`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT_DIR, '04_live_detail_prop_exp_01.png'), fullPage: false });

  // 5. Live France Property: Cap-d\'Ail
  console.log('5: Capturing Live France Property Detail: Cap-d\'Ail...');
  await page.goto(`${BASE_URL}/real-estate/properties/travertine-cliffside-pavilion-monaco-cap-dail`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT_DIR, '05_live_detail_france_cap_dail.png'), fullPage: false });

  // 6. Live About Page with Authentic Portrait
  console.log('6: Capturing Live About Page with Authentic Portrait...');
  await page.goto(`${BASE_URL}/about`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT_DIR, '06_live_about_page_authentic_portrait.png'), fullPage: false });

  // 7. Live Mobile Viewport (390 x 844): Homepage Personal Section
  console.log('7: Capturing Live Mobile (390x844) Homepage Personal Section...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(`${BASE_URL}/#perspectives`, { waitUntil: 'networkidle' });
  const mobPersonal = mobilePage.locator('#perspectives');
  await mobPersonal.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(800);
  await mobilePage.screenshot({ path: path.join(OUT_DIR, '07_live_mobile_personal_section.png'), fullPage: false });

  // 8. Live Mobile Viewport (390 x 844): Catalogue Personal Cadran
  console.log('8: Capturing Live Mobile (390x844) Catalogue Personal Cadran...');
  await mobilePage.goto(`${BASE_URL}/real-estate/properties`, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(800);
  await mobilePage.screenshot({ path: path.join(OUT_DIR, '08_live_mobile_catalogue_advisory.png'), fullPage: false });

  // 9. Live Mobile Viewport (390 x 844): Property Detail
  console.log('9: Capturing Live Mobile (390x844) Property Detail...');
  await mobilePage.goto(`${BASE_URL}/real-estate/properties/prop-exp-01`, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(800);
  await mobilePage.screenshot({ path: path.join(OUT_DIR, '09_live_mobile_detail_prop_exp_01.png'), fullPage: false });

  await mobileContext.close();
  await context.close();
  await browser.close();

  console.log(`\n✓ Live QA complete! Total console errors: ${consoleErrors.length}`);
}

runLiveQA().catch(err => {
  console.error("Live QA error:", err);
  process.exit(1);
});
