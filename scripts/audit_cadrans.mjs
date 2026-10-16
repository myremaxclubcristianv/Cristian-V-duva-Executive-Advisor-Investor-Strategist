import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";

const ARTIFACT_DIR = "/Users/cristianvaduva/.gemini/antigravity-ide/brain/54c208e7-cbb7-4ed5-b85a-730df78d3148";
const BASE_URL = "http://localhost:3000";

async function run() {
  const browser = await puppeteer.launch({
    executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  const pagesToTest = [
    { url: `${BASE_URL}/real-estate/properties`, name: "cadran_catalog" },
    { url: `${BASE_URL}/real-estate/properties/prop-plevnei`, name: "cadran_monograph_plevnei" },
    { url: `${BASE_URL}/real-estate/properties/prop-marbella-benahavis-sovereign-1`, name: "cadran_monograph_marbella" },
  ];

  for (const item of pagesToTest) {
    // Desktop 1440px
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(item.url, { waitUntil: "networkidle2" });
    const desktopPath = path.join(ARTIFACT_DIR, `${item.name}_desktop_1440.png`);
    await page.screenshot({ path: desktopPath });
    console.log(`Saved: ${desktopPath}`);

    // Mobile 390px
    await page.setViewport({ width: 390, height: 844, isMobile: true });
    await page.goto(item.url, { waitUntil: "networkidle2" });
    const mobilePath = path.join(ARTIFACT_DIR, `${item.name}_mobile_390.png`);
    await page.screenshot({ path: mobilePath });
    console.log(`Saved: ${mobilePath}`);
  }

  await browser.close();
  console.log("All visual audits captured successfully.");
}

run().catch((err) => {
  console.error("Audit error:", err);
  process.exit(1);
});
