import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const PROD_URL = 'https://executive.cristianvaduva.com';
const OUT_DIR = path.resolve('scripts/qa_live_production');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function verifyLiveRelease() {
  console.log(`=== LIVE PRODUCTION VERIFICATION FOR EXECUTIVE ===`);
  console.log(`Target: ${PROD_URL}`);
  console.log(`Output Directory: ${OUT_DIR}\n`);

  const results = {
    domain: PROD_URL,
    timestamp: new Date().toISOString(),
    checks: {},
    consoleErrors: [],
    failedRequests: [],
  };

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Executive-Live-Release-Verifier'
  });

  const page = await context.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text();
      // Filter non-fatal browser issues if any
      results.consoleErrors.push({ url: page.url(), text });
      console.warn(`[BROWSER ERROR] ${text}`);
    }
  });

  page.on('response', resp => {
    if (resp.status() >= 400) {
      results.failedRequests.push({ url: resp.url(), status: resp.status() });
      console.warn(`[HTTP ${resp.status()}] ${resp.url()}`);
    }
  });

  // 1. Homepage & Personal Section
  console.log('--- 1. Testing Homepage & Personal Section ---');
  const homeResp = await page.goto(`${PROD_URL}/`, { waitUntil: 'networkidle' });
  results.checks.homepage_status = homeResp ? homeResp.status() : null;
  console.log(`Homepage HTTP Status: ${results.checks.homepage_status}`);

  // Check personal section
  const personalHeading = page.locator('text=CRISTIAN VĂDUVA');
  results.checks.personal_section_present = (await personalHeading.count()) > 0;
  console.log(`Personal Section Heading Present: ${results.checks.personal_section_present}`);

  // Check archive link
  const archiveLink = page.locator('a[href="/about#archive"]');
  const archiveLinkCount = await archiveLink.count();
  results.checks.archive_link_count = archiveLinkCount;
  const archiveLinkText = archiveLinkCount > 0 ? (await archiveLink.first().textContent())?.trim() : null;
  results.checks.archive_link_text = archiveLinkText;
  console.log(`Archive Link on Homepage: "${archiveLinkText}" (count: ${archiveLinkCount})`);

  await page.locator('#perspectives').scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.join(OUT_DIR, '01_live_homepage_perspectives.png') });

  // 2. /about Page & Biographical Integrity
  console.log('\n--- 2. Testing /about Page & Verified Biography ---');
  const aboutResp = await page.goto(`${PROD_URL}/about`, { waitUntil: 'networkidle' });
  results.checks.about_status = aboutResp ? aboutResp.status() : null;
  console.log(`/about HTTP Status: ${results.checks.about_status}`);

  // Check Academic Synthesis (degrees, institutions)
  const academicSynthesis = await page.locator('text=Academic Synthesis: Economics, Law & Ecology').count();
  const threeDegrees = await page.locator('text=ACADEMIC FOUNDATION // 3 DEGREES').count();
  const threeMasters = await page.locator('text=3 MASTER\'S DEGREES').count();
  const residencies = await page.locator('text=Madrid (1 Yr) · France (6 Mo) · Malta (3 Mo)').count();
  const generaliMention = await page.locator('text=Generali Romania').count();
  const marketParadox = await page.locator('text=The 2026 Bucharest Real Estate Market Paradox').count();

  results.checks.academic_synthesis_present = academicSynthesis > 0;
  results.checks.three_degrees_present = threeDegrees > 0;
  results.checks.three_masters_present = threeMasters > 0;
  results.checks.residencies_present = residencies > 0;
  results.checks.generali_collaboration_present = generaliMention > 0;
  results.checks.market_paradox_present = marketParadox > 0;

  console.log(`Biographical Elements Verified:`, results.checks);

  await page.screenshot({ path: path.join(OUT_DIR, '02_live_about_monograph_hero.png') });

  // Scroll to archive section
  console.log('\n--- 3. Testing Archive Gallery Tabs & Monographs ---');
  const archiveSec = page.locator('#archive');
  await archiveSec.scrollIntoViewIfNeeded();
  await page.waitForTimeout(600);

  // Check 5 category tabs
  const tabAll = page.locator('button:has-text("ALL ARCHIVE")');
  const tabOfficial = page.locator('button:has-text("OFFICIAL PORTRAITS")');
  const tabAdvisory = page.locator('button:has-text("ADVISORY & MODELING")');
  const tabField = page.locator('button:has-text("FIELD WALKTHROUGHS")');
  const tabArchitectural = page.locator('button:has-text("ARCHITECTURAL STUDIES")');

  const tabCounts = {
    all_archive: await tabAll.count(),
    official_portraits: await tabOfficial.count(),
    advisory_modeling: await tabAdvisory.count(),
    field_walkthroughs: await tabField.count(),
    architectural_studies: await tabArchitectural.count(),
  };

  const tabLabels = {
    all_archive: tabCounts.all_archive > 0 ? (await tabAll.first().textContent())?.trim() : null,
    official_portraits: tabCounts.official_portraits > 0 ? (await tabOfficial.first().textContent())?.trim() : null,
    advisory_modeling: tabCounts.advisory_modeling > 0 ? (await tabAdvisory.first().textContent())?.trim() : null,
    field_walkthroughs: tabCounts.field_walkthroughs > 0 ? (await tabField.first().textContent())?.trim() : null,
    architectural_studies: tabCounts.architectural_studies > 0 ? (await tabArchitectural.first().textContent())?.trim() : null,
  };

  results.checks.tabs = tabLabels;
  console.log('Category Tabs Detected:', tabLabels);

  // Cards rendered initially under ALL ARCHIVE
  const initialCardsCount = await page.locator('#archive [class*="cursor-pointer"]').count();
  results.checks.initial_archive_cards_count = initialCardsCount;
  console.log(`Cards under ALL ARCHIVE: ${initialCardsCount}`);

  await page.screenshot({ path: path.join(OUT_DIR, '03_live_archive_all_tab.png') });

  // Test switching to OFFICIAL PORTRAITS
  await tabOfficial.first().click();
  await page.waitForTimeout(400);
  const officialCardsCount = await page.locator('#archive [class*="cursor-pointer"]').count();
  console.log(`Cards under OFFICIAL PORTRAITS: ${officialCardsCount}`);
  results.checks.official_cards_count = officialCardsCount;

  // Test switching to ADVISORY & MODELING
  await tabAdvisory.first().click();
  await page.waitForTimeout(400);
  const advisoryCardsCount = await page.locator('#archive [class*="cursor-pointer"]').count();
  console.log(`Cards under ADVISORY & MODELING: ${advisoryCardsCount}`);
  results.checks.advisory_cards_count = advisoryCardsCount;

  // Test switching to FIELD WALKTHROUGHS
  await tabField.first().click();
  await page.waitForTimeout(400);
  const fieldCardsCount = await page.locator('#archive [class*="cursor-pointer"]').count();
  console.log(`Cards under FIELD WALKTHROUGHS: ${fieldCardsCount}`);
  results.checks.field_cards_count = fieldCardsCount;

  // Test switching to ARCHITECTURAL STUDIES
  await tabArchitectural.first().click();
  await page.waitForTimeout(400);
  const archCardsCount = await page.locator('#archive [class*="cursor-pointer"]').count();
  console.log(`Cards under ARCHITECTURAL STUDIES: ${archCardsCount}`);
  results.checks.architectural_cards_count = archCardsCount;

  // Switch back to ALL ARCHIVE
  await tabAll.first().click();
  await page.waitForTimeout(400);

  // Verify all 18 images loaded in browser
  const images = page.locator('#archive img');
  const totalImgElements = await images.count();
  let brokenImages = 0;
  for (let i = 0; i < totalImgElements; i++) {
    const isNatural = await images.nth(i).evaluate(img => img.naturalWidth > 0 && img.naturalHeight > 0);
    if (!isNatural) {
      const src = await images.nth(i).getAttribute('src');
      console.warn(`[BROKEN ARCHIVE IMAGE] #${i} src=${src}`);
      brokenImages++;
    }
  }
  results.checks.archive_total_images = totalImgElements;
  results.checks.archive_broken_images = brokenImages;
  console.log(`Archive Image Integrity: ${totalImgElements} images evaluated, ${brokenImages} broken.`);

  // 4. Test Lightbox Modal and Keyboard Navigation
  console.log('\n--- 4. Testing Lightbox Modal & Navigation ---');
  const firstCard = page.locator('#archive [class*="cursor-pointer"]').first();
  await firstCard.click();
  await page.waitForTimeout(800);

  const closeButton = page.locator('button[aria-label="Close modal"]');
  const modalVisible = (await closeButton.count()) > 0;
  results.checks.lightbox_modal_visible = modalVisible;
  console.log(`Lightbox Modal Visible (via Close Button): ${modalVisible}`);

  const modalMonographText = page.locator('text=ARCHIVAL MONOGRAPH');
  const hasMonographHeader = (await modalMonographText.count()) > 0;
  results.checks.lightbox_has_monograph_header = hasMonographHeader;
  console.log(`Lightbox Has Monograph Header: ${hasMonographHeader}`);

  await page.screenshot({ path: path.join(OUT_DIR, '04_live_lightbox_modal.png') });

  // Test Keyboard Navigation: Arrow Right to next
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(500);
  const nextNavCheck = (await modalMonographText.count()) > 0;
  console.log(`Keyboard ArrowRight Navigation succeeded: ${nextNavCheck}`);
  results.checks.lightbox_arrow_nav = nextNavCheck;

  // Close modal via Escape
  await page.keyboard.press('Escape');
  await page.waitForTimeout(400);
  const modalClosed = (await page.locator('button[aria-label="Close modal"]').count()) === 0;
  results.checks.lightbox_closed_via_escape = modalClosed;
  console.log(`Lightbox Closed via Escape: ${modalClosed}`);

  // 5. Test /real-estate/properties & Catalogue Metrics
  console.log('\n--- 5. Testing /real-estate/properties Catalogue ---');
  const catResp = await page.goto(`${PROD_URL}/real-estate/properties`, { waitUntil: 'networkidle' });
  results.checks.properties_status = catResp ? catResp.status() : null;
  console.log(`/real-estate/properties HTTP Status: ${results.checks.properties_status}`);

  // Check 424 and 8,730 text metrics
  const pageContent = await page.content();
  const has424 = pageContent.includes('424') || (await page.locator('text=424').count()) > 0;
  const has8730 = pageContent.includes('8,730') || (await page.locator('text=8,730').count()) > 0;
  results.checks.catalogue_reports_424 = has424;
  results.checks.catalogue_reports_8730 = has8730;
  console.log(`Catalogue Metric 424 monographs: ${has424}`);
  console.log(`Catalogue Metric 8,730 photos: ${has8730}`);

  await page.screenshot({ path: path.join(OUT_DIR, '05_live_catalogue_header.png') });

  // Test EXHIBIT ALL button
  const exhibitAllBtn = page.locator('button:has-text("EXHIBIT ALL")');
  const exhibitBtnCount = await exhibitAllBtn.count();
  results.checks.exhibit_all_btn_present = exhibitBtnCount > 0;
  if (exhibitBtnCount > 0) {
    const exhibitBtnText = (await exhibitAllBtn.first().textContent())?.trim();
    results.checks.exhibit_all_btn_text = exhibitBtnText;
    console.log(`Exhibit All Button: "${exhibitBtnText}"`);
    await exhibitAllBtn.first().click();
    await page.waitForTimeout(1000);
  }

  // Count rendered property cards
  const propertyCards = page.locator('#catalog-view a[href^="/real-estate/properties/"]');
  const totalCardsRendered = await propertyCards.count();
  results.checks.total_property_cards_rendered = totalCardsRendered;
  console.log(`Total Property Cards Rendered after EXHIBIT ALL: ${totalCardsRendered}`);

  await page.screenshot({ path: path.join(OUT_DIR, '06_live_catalogue_full_grid.png') });

  // 6. Test Representative Detail Routes
  console.log('\n--- 6. Testing Representative Property Detail Routes ---');

  // Baseline property: prop-floreasca-elite-residence
  console.log('Testing Baseline Property: prop-floreasca-elite-residence...');
  const baseResp = await page.goto(`${PROD_URL}/real-estate/properties/prop-floreasca-elite-residence`, { waitUntil: 'networkidle' });
  results.checks.floreasca_status = baseResp ? baseResp.status() : null;
  const floreascaTitle = await page.locator('h1').textContent();
  results.checks.floreasca_title = floreascaTitle?.trim();
  console.log(`Floreasca Elite Residence Title: "${results.checks.floreasca_title}" (HTTP ${results.checks.floreasca_status})`);
  await page.screenshot({ path: path.join(OUT_DIR, '07_live_floreasca_detail.png') });

  // Newly imported property: prop-exp-hf-001
  console.log('Testing Newly Imported Property: prop-exp-hf-001...');
  const newResp = await page.goto(`${PROD_URL}/real-estate/properties/prop-exp-hf-001`, { waitUntil: 'networkidle' });
  results.checks.new_prop_status = newResp ? newResp.status() : null;
  const newPropTitle = await page.locator('h1').textContent();
  results.checks.new_prop_title = newPropTitle?.trim();
  const sourceLinkCount = await page.locator('a[href*="homefind.cristianvaduva.com"]').count();
  results.checks.new_prop_source_link = sourceLinkCount > 0;
  console.log(`New Listing Title: "${results.checks.new_prop_title}" (HTTP ${results.checks.new_prop_status}, HomeFind link: ${sourceLinkCount > 0})`);
  await page.screenshot({ path: path.join(OUT_DIR, '08_live_new_imported_detail.png') });

  // 7. Mobile Viewport Verification
  console.log('\n--- 7. Testing Mobile Viewport Layout ---');
  await context.close();

  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.5 Mobile/15E148 Safari/604.1'
  });
  const mobilePage = await mobileContext.newPage();

  // Mobile /about archive
  await mobilePage.goto(`${PROD_URL}/about#archive`, { waitUntil: 'networkidle' });
  await mobilePage.locator('#archive').scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(600);
  await mobilePage.screenshot({ path: path.join(OUT_DIR, '09_live_mobile_archive.png') });

  // Mobile /real-estate/properties
  await mobilePage.goto(`${PROD_URL}/real-estate/properties`, { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(600);
  await mobilePage.screenshot({ path: path.join(OUT_DIR, '10_live_mobile_catalogue.png') });

  await mobileContext.close();
  await browser.close();

  // Write results JSON
  fs.writeFileSync(path.join(OUT_DIR, 'verification_results.json'), JSON.stringify(results, null, 2));
  console.log('\n=== LIVE VERIFICATION FINISHED SUCCESSFULLY ===');
  console.log(`Results written to: ${path.join(OUT_DIR, 'verification_results.json')}`);
  console.log(`Console Errors: ${results.consoleErrors.length}`);
  console.log(`Failed HTTP Requests: ${results.failedRequests.length}`);
}

verifyLiveRelease().catch(err => {
  console.error('Live Verification failed:', err);
  process.exit(1);
});
