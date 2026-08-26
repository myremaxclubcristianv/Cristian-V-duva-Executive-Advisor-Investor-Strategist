const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const viewports = [
  { width: 320, height: 844, name: '320x844', isMobile: true },
  { width: 360, height: 800, name: '360x800', isMobile: true },
  { width: 375, height: 812, name: '375x812', isMobile: true },
  { width: 390, height: 844, name: '390x844', isMobile: true },
  { width: 412, height: 915, name: '412x915', isMobile: true },
  { width: 430, height: 932, name: '430x932', isMobile: true },
  { width: 768, height: 1024, name: '768x1024', isMobile: false },
  { width: 1024, height: 1366, name: '1024x1366', isMobile: false },
  { width: 1440, height: 900, name: '1440x900', isMobile: false },
  { width: 1728, height: 1117, name: '1728x1117', isMobile: false },
];

async function run() {
  const outputDir = path.join(__dirname, '../visual-qa/forensic_10_viewports');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const vp of viewports) {
    console.log(`Capturing ${vp.name}...`);
    await page.setViewport({ width: vp.width, height: vp.height, isMobile: vp.isMobile });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1000));

    // Full page
    await page.screenshot({ path: path.join(outputDir, `${vp.name}_full.png`), fullPage: true });

    // Hero section
    await page.screenshot({ path: path.join(outputDir, `${vp.name}_viewport.png`), fullPage: false });

    // Also section snapshots if sections exist
    const sections = await page.$$('section, footer, header');
    console.log(`  Found ${sections.length} sections for ${vp.name}`);
  }

  await browser.close();
  console.log('Done capturing 10 viewports into visual-qa/forensic_10_viewports!');
}

run().catch(console.error);
