import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const ARTIFACT_DIR = "/Users/cristianvaduva/.gemini/antigravity-ide/brain/54c208e7-cbb7-4ed5-b85a-730df78d3148";

const PAGES = [
  { name: "properties_catalog", path: "/real-estate/properties" },
  { name: "detail_marbella_villa", path: "/real-estate/properties/prop-marbella-benahavis-sovereign-1" },
  { name: "detail_dubai_palm", path: "/real-estate/properties/prop-dubai-palm-signature" },
  { name: "detail_plevnei_penthouse", path: "/real-estate/properties/prop-plevnei" },
  { name: "real_estate_hub", path: "/real-estate" }
];

const VIEWPORTS = [
  { name: "desktop_1440", width: 1440, height: 900 },
  { name: "mobile_390", width: 390, height: 844, isMobile: true }
];

async function run() {
  console.log("Launching browser for visual verification...");
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  for (const pageInfo of PAGES) {
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height, isMobile: vp.isMobile || false });

      const url = `http://localhost:3000${pageInfo.path}`;
      console.log(`Navigating to ${url} [${vp.name}]...`);
      try {
        await page.goto(url, { waitUntil: "networkidle2", timeout: 25000 });
        // wait extra 1.5s for fonts & images to settle
        await new Promise((r) => setTimeout(r, 1500));

        const screenshotPath = path.join(ARTIFACT_DIR, `portfolio_${pageInfo.name}_${vp.name}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: false });
        console.log(`Saved screenshot: ${screenshotPath}`);
      } catch (err) {
        console.error(`Error capturing ${url}: ${err.message}`);
      } finally {
        await page.close();
      }
    }
  }

  await browser.close();
  console.log("Visual audit completed successfully!");
}

run().catch(console.error);
