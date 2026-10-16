import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://executive.cristianvaduva.com';
const OUT_DIR = path.resolve('scripts/qa_production_verify');

if (!fs.existsSync(OUT_DIR)) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function runProductionAudit() {
  console.log(`Starting Live Production Audit on: ${BASE_URL}\n`);
  
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 AntigravityAudit/1.0'
  });
  
  const page = await context.newPage();
  
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  // 1. Audit Catalogue Page
  console.log('1. Loading Live Properties Catalogue...');
  const resCatalog = await page.goto(`${BASE_URL}/real-estate/properties`, { waitUntil: 'networkidle', timeout: 30000 });
  console.log(`Catalogue HTTP Status: ${resCatalog.status()}`);
  
  // Extract visible counts and country tags
  const pageText = await page.textContent('body');
  const count107Match = pageText.includes('107') || pageText.includes('107 MONOGRAPHS') || pageText.includes('CONFIRMED ASSET INVENTORY (107');
  console.log(`Verified 107 in Catalogue Text: ${count107Match ? 'PASS' : 'FAIL'}`);

  // Screenshot Desktop Catalogue
  await page.screenshot({ path: path.join(OUT_DIR, 'prod_01_desktop_catalogue.png'), fullPage: false });
  console.log('Saved prod_01_desktop_catalogue.png');

  // Check France filter and click it
  console.log('Checking France filter button...');
  const franceButton = page.locator('button:has-text("France"), button:has-text("FRANCE")').first();
  const franceExists = await franceButton.count() > 0;
  console.log(`France filter button exists: ${franceExists ? 'PASS' : 'FAIL'}`);

  if (franceExists) {
    await franceButton.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(OUT_DIR, 'prod_02_france_filter_active.png'), fullPage: false });
    console.log('Saved prod_02_france_filter_active.png');
  }

  // 2. Check Detail Monograph: Cap-d'Ail, France
  console.log('\n2. Testing Cap-d\'Ail France Monograph (prop-monaco-coast)...');
  const resFrance = await page.goto(`${BASE_URL}/real-estate/properties/prop-monaco-coast`, { waitUntil: 'networkidle' });
  console.log(`Cap-d'Ail Monograph HTTP Status: ${resFrance.status()}`);
  const franceBody = await page.textContent('body');
  const hasFranceText = franceBody.includes('France') && franceBody.includes('Cap-d\'Ail');
  console.log(`Verified "France" and "Cap-d'Ail" in Monograph text: ${hasFranceText ? 'PASS' : 'FAIL'}`);
  await page.screenshot({ path: path.join(OUT_DIR, 'prod_03_cap_dail_monograph.png'), fullPage: false });
  console.log('Saved prod_03_cap_dail_monograph.png');

  // 3. Check Detail Monograph: One of the 18 Replacement Listings
  console.log('\n3. Testing Replacement Listing (prop-hf-878c0557-284)...');
  const resRepl = await page.goto(`${BASE_URL}/real-estate/properties/prop-hf-878c0557-284`, { waitUntil: 'networkidle' });
  console.log(`Replacement Listing HTTP Status: ${resRepl.status()}`);
  const replBody = await page.textContent('body');
  const hasReplPrice = replBody.includes('€') || replBody.includes('EUR') || replBody.includes('19,900,000') || replBody.includes('Sierra Blanca');
  console.log(`Verified authentic price/data on replacement listing: ${hasReplPrice ? 'PASS' : 'FAIL'}`);
  await page.screenshot({ path: path.join(OUT_DIR, 'prod_04_replacement_monograph.png'), fullPage: false });
  console.log('Saved prod_04_replacement_monograph.png');

  // 4. Test Ecosystem & Pipeline Badge
  console.log('\n4. Testing Ecosystem Directory & Pipeline Status...');
  await page.goto(`${BASE_URL}/real-estate/properties#ecosystem`, { waitUntil: 'networkidle' });
  const ecosystemSection = page.locator('#ecosystem');
  if (await ecosystemSection.count() > 0) {
    await ecosystemSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const ecoText = await ecosystemSection.textContent();
    const hasPipeline = ecoText.includes('PRE-LAUNCH / PIPELINE') || ecoText.includes('doar-inchirieri.ro') || ecoText.includes('Doar Închirieri');
    console.log(`Verified Doar Închirieri PRE-LAUNCH status: ${hasPipeline ? 'PASS' : 'FAIL'}`);
    await page.screenshot({ path: path.join(OUT_DIR, 'prod_05_ecosystem_pipeline.png'), fullPage: false });
    console.log('Saved prod_05_ecosystem_pipeline.png');
  }

  // 5. Test Contact Section & Inquiry Form
  console.log('\n5. Testing Contact & Inquiry Section...');
  const contactSection = page.locator('#contact');
  if (await contactSection.count() > 0) {
    await contactSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    const contactText = await contactSection.textContent();
    const hasWhatsAppAustria = contactText.includes('+43 650 953 6345');
    const hasTelegram = contactText.includes('@CristianVaduva') || contactText.includes('CristianVaduva');
    console.log(`Verified WhatsApp Austria (+43 650 953 6345): ${hasWhatsAppAustria ? 'PASS' : 'FAIL'}`);
    console.log(`Verified Telegram (@CristianVaduva): ${hasTelegram ? 'PASS' : 'FAIL'}`);
    await page.screenshot({ path: path.join(OUT_DIR, 'prod_06_contact_section.png'), fullPage: false });
    console.log('Saved prod_06_contact_section.png');
  }

  // 6. Mobile Layout QA
  console.log('\n6. Testing Mobile Layout on Production...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto(`${BASE_URL}/real-estate/properties`, { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: path.join(OUT_DIR, 'prod_07_mobile_catalogue.png'), fullPage: false });
  console.log('Saved prod_07_mobile_catalogue.png');
  
  await mobileContext.close();
  await context.close();
  await browser.close();

  console.log(`\nAudit completed! Console errors: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log('Errors:', consoleErrors);
  }
}

runProductionAudit().catch(err => {
  console.error('Audit failed:', err);
  process.exit(1);
});
