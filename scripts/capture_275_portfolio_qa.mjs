import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3005';
const OUT_DIR = path.resolve('scripts/qa_275_portfolio_expansion');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function runVisualQA() {
  console.log(`Starting Visual QA on 275-Property Portfolio: ${BASE_URL}\n`);
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  
  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  // 1. Homepage Personal Section (Zero Regression Check)
  console.log('1: Capturing Homepage Personal Section (Cristian Văduva)...');
  await page.goto(`${BASE_URL}/#perspectives`, { waitUntil: 'networkidle' });
  const personalSection = page.locator('#perspectives');
  await personalSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '01_homepage_personal_brand_intact.png'), fullPage: false });

  // 2. Catalogue Header & Personal Advisory Cadran (275 monographs metric)
  console.log('2: Capturing Catalogue Header (275 Monographs Metric)...');
  await page.goto(`${BASE_URL}/real-estate/properties`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT_DIR, '02_catalogue_header_275_monographs.png'), fullPage: false });

  // 3. Catalogue Grid & Listing Cards
  console.log('3: Capturing Catalogue Grid & Listing Cards...');
  const catalogView = page.locator('#catalog-view');
  if (await catalogView.count() > 0) {
    await catalogView.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(OUT_DIR, '03_catalogue_grid_cards_desktop.png'), fullPage: false });
  }

  // 4. Filters (Country & Category active)
  console.log('4: Capturing Filters & Category Selection...');
  const categoryFilters = page.locator('button:has-text("ESTATES & MANSIONS")');
  if (await categoryFilters.count() > 0) {
    await categoryFilters.first().click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: path.join(OUT_DIR, '04_filters_category_and_country.png'), fullPage: false });
    // Reset to all
    const allBtn = page.locator('button:has-text("ALL ASSETS")');
    if (await allBtn.count() > 0) await allBtn.first().click();
    await page.waitForTimeout(400);
  }

  // 5. Progressive Loading Controls
  console.log('5: Capturing Progressive Loading Controls...');
  const loadMoreBtn = page.locator('button:has-text("EXHIBIT MORE ASSETS")');
  if (await loadMoreBtn.count() > 0) {
    await loadMoreBtn.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(OUT_DIR, '05_progressive_loading_controls.png'), fullPage: false });
  }

  // 6. Large Gallery: prop-floreasca-elite-residence (37 authentic photos)
  console.log('6: Capturing Large Gallery Detail (37 photos)...');
  await page.goto(`${BASE_URL}/real-estate/properties/prop-floreasca-elite-residence`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT_DIR, '06_detail_large_gallery_37_photos.png'), fullPage: false });

  // 7. Small Gallery: prop-pipera-villas (5 authentic photos)
  console.log('7: Capturing Small Gallery Detail (5 photos)...');
  await page.goto(`${BASE_URL}/real-estate/properties/prop-pipera-villas`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT_DIR, '07_detail_small_gallery_5_photos.png'), fullPage: false });

  // 8. Newly Imported Listing: prop-exp-049
  console.log('8: Capturing Newly Imported Listing Detail (prop-exp-049)...');
  await page.goto(`${BASE_URL}/real-estate/properties/prop-exp-049`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT_DIR, '08_detail_newly_imported_prop_exp_049.png'), fullPage: false });

  // 9. France Property / Cap-d\'Ail Verification
  console.log('9: Capturing France Property Detail (Cap-d\'Ail)...');
  await page.goto(`${BASE_URL}/real-estate/properties/travertine-cliffside-pavilion-monaco-cap-dail`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: path.join(OUT_DIR, '09_detail_france_cap_dail_monograph.png'), fullPage: false });

  // 10. Mobile Viewport (390 x 844): Catalogue Header & Cards
  console.log('10: Capturing Mobile (390x844) Catalogue...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(`${BASE_URL}/real-estate/properties`, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(800);
  await mobilePage.screenshot({ path: path.join(OUT_DIR, '10_mobile_catalogue_390x844.png'), fullPage: false });

  // 11. Mobile Viewport (390 x 844): Property Detail
  console.log('11: Capturing Mobile (390x844) Newly Imported Property Detail...');
  await mobilePage.goto(`${BASE_URL}/real-estate/properties/prop-exp-049`, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(800);
  await mobilePage.screenshot({ path: path.join(OUT_DIR, '11_mobile_detail_prop_exp_049.png'), fullPage: false });

  // 12. Mobile Viewport (390 x 844): Homepage Personal Section
  console.log('12: Capturing Mobile (390x844) Homepage Personal Section...');
  await mobilePage.goto(`${BASE_URL}/#perspectives`, { waitUntil: 'networkidle' });
  const mobPersonal = mobilePage.locator('#perspectives');
  await mobPersonal.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(800);
  await mobilePage.screenshot({ path: path.join(OUT_DIR, '12_mobile_homepage_personal_section.png'), fullPage: false });

  await mobileContext.close();
  await context.close();
  await browser.close();

  console.log(`\n✓ QA complete! Total console errors: ${consoleErrors.length}`);
}

runVisualQA().catch(err => {
  console.error("QA error:", err);
  process.exit(1);
});
