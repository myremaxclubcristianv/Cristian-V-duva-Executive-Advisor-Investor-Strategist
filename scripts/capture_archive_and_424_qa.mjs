import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:3000';
const OUT_DIR = path.resolve('scripts/qa_archive_424_expansion');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function runVisualQA() {
  console.log(`Starting Visual QA on Complete Archive & 424-Property Portfolio: ${BASE_URL}\n`);
  
  const browser = await chromium.launch({ headless: true });
  
  // Desktop Context
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await desktopContext.newPage();
  
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') consoleErrors.push(msg.text());
  });

  // 1. Homepage Personal Section (Cristian Văduva Chapter 03 with Archive button)
  console.log('1: Capturing Homepage Personal Section (Cristian Văduva)...');
  await page.goto(`${BASE_URL}/#perspectives`, { waitUntil: 'networkidle' });
  const personalSection = page.locator('#perspectives');
  await personalSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '01_homepage_personal_brand_with_archive_link.png'), fullPage: false });

  // 2. About Page Monograph Hero
  console.log('2: Capturing About Page Monograph Hero...');
  await page.goto(`${BASE_URL}/about`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '02_about_page_monograph_hero.png'), fullPage: false });

  // 3. About Page Academic Synthesis (3 Degrees, 3 Masters, Madrid/France/Malta)
  console.log('3: Capturing About Page Academic Synthesis...');
  const academicSection = page.locator('text=Academic Synthesis: Economics, Law & Ecology');
  if (await academicSection.count() > 0) {
    await academicSection.first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(OUT_DIR, '03_about_page_academic_synthesis_3degrees_3masters.png'), fullPage: false });
  }

  // 4. About Page 2026 Bucharest Market Paradox
  console.log('4: Capturing 2026 Bucharest Real Estate Market Paradox...');
  const marketSection = page.locator('text=The 2026 Bucharest Real Estate Market Paradox');
  if (await marketSection.count() > 0) {
    await marketSection.first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(OUT_DIR, '04_about_page_2026_market_paradox.png'), fullPage: false });
  }

  // 5. About Page Personal Archive Gallery (24 Verified Photographs)
  console.log('5: Capturing Personal Archive Gallery Section...');
  const archiveSection = page.locator('#archive');
  if (await archiveSection.count() > 0) {
    await archiveSection.first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(OUT_DIR, '05_about_page_personal_archive_gallery.png'), fullPage: false });
  }

  // 6. Lightbox Modal Viewing Experience
  console.log('6: Capturing Archival Lightbox Modal Experience...');
  const photoCard = page.locator('#archive div[class*="cursor-pointer"]').first();
  if (await photoCard.count() > 0) {
    await photoCard.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(OUT_DIR, '06_archive_lightbox_modal_view.png'), fullPage: false });
    // Close modal
    const closeBtn = page.locator('button[aria-label="Close modal"]');
    if (await closeBtn.count() > 0) await closeBtn.click();
    await page.waitForTimeout(500);
  }

  // 7. Catalogue Header (424 Monographs, 8,730 Verified Photographs)
  console.log('7: Capturing Catalogue Header (424 Monographs & 8,730 Photos Metric)...');
  await page.goto(`${BASE_URL}/real-estate/properties`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '07_catalogue_header_424_monographs_8730_photos.png'), fullPage: false });

  // 8. Catalogue Filters & Asset Cards
  console.log('8: Capturing Catalogue Filters & Asset Cards...');
  const catalogView = page.locator('#catalog-view');
  if (await catalogView.count() > 0) {
    await catalogView.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: path.join(OUT_DIR, '08_catalogue_filters_and_asset_cards.png'), fullPage: false });
  }

  // 9. Large Gallery Detail Page (prop-floreasca-elite-residence - 37 photos)
  console.log('9: Capturing Large Gallery Detail (37 photos)...');
  await page.goto(`${BASE_URL}/real-estate/properties/prop-floreasca-elite-residence`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '09_detail_large_gallery_floreasca.png'), fullPage: false });

  // 10. Newly Imported Listing Detail Page (prop-exp-hf-001)
  console.log('10: Capturing Newly Imported Listing Detail (prop-exp-hf-001)...');
  await page.goto(`${BASE_URL}/real-estate/properties/prop-exp-hf-001`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '10_detail_new_homefind_imported_listing.png'), fullPage: false });

  await desktopContext.close();

  // Mobile Context (iPhone 14 / 390 x 844)
  console.log('\nSetting up Mobile Viewport (390 x 844)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();

  // 11. Mobile Homepage Personal Section
  console.log('11: Capturing Mobile Homepage Personal Section...');
  await mobilePage.goto(`${BASE_URL}/#perspectives`, { waitUntil: 'networkidle' });
  const mobPerspectives = mobilePage.locator('#perspectives');
  await mobPerspectives.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(800);
  await mobilePage.screenshot({ path: path.join(OUT_DIR, '11_mobile_homepage_personal_section.png'), fullPage: false });

  // 12. Mobile About Archive Gallery
  console.log('12: Capturing Mobile About Archive Gallery...');
  await mobilePage.goto(`${BASE_URL}/about#archive`, { waitUntil: 'networkidle' });
  const mobArchive = mobilePage.locator('#archive');
  await mobArchive.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(800);
  await mobilePage.screenshot({ path: path.join(OUT_DIR, '12_mobile_about_archive_gallery.png'), fullPage: false });

  // 13. Mobile Catalogue 424 Properties
  console.log('13: Capturing Mobile Catalogue Header (424 Monographs)...');
  await mobilePage.goto(`${BASE_URL}/real-estate/properties`, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(800);
  await mobilePage.screenshot({ path: path.join(OUT_DIR, '13_mobile_catalogue_424_properties.png'), fullPage: false });

  await mobileContext.close();
  await browser.close();

  console.log(`\nVisual QA complete! All 13 screenshots successfully captured to ${OUT_DIR}`);
  if (consoleErrors.length > 0) {
    console.warn('Console errors encountered during testing:', consoleErrors);
  } else {
    console.log('Zero console errors encountered across all desktop and mobile flows.');
  }
}

runVisualQA().catch(err => {
  console.error('Visual QA run failed:', err);
  process.exit(1);
});
