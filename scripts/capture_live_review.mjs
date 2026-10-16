import { chromium } from "playwright";
import path from "path";
import fs from "fs";

const ARTIFACT_DIR = "/Users/cristianvaduva/.gemini/antigravity-ide/brain/54c208e7-cbb7-4ed5-b85a-730df78d3148";

async function main() {
  console.log("Starting visual audit with Chromium...");
  const browser = await chromium.launch({ headless: true });

  const viewports = [
    { name: "desktop_1440", width: 1440, height: 900 },
    { name: "mobile_390", width: 390, height: 844 },
  ];

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();

    // 1. Properties Page - Hero & Top
    console.log(`Navigating to /real-estate/properties on ${vp.name}...`);
    await page.goto("http://localhost:3000/real-estate/properties", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    const p1Path = path.join(ARTIFACT_DIR, `properties_hero_${vp.name}.png`);
    await page.screenshot({ path: p1Path });
    console.log(`Saved: ${p1Path}`);

    // Properties Page - Personal Perspective section
    const persElement = await page.$("#perspectives");
    if (persElement) {
      await persElement.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      const pPersPath = path.join(ARTIFACT_DIR, `properties_perspective_${vp.name}.png`);
      await page.screenshot({ path: pPersPath });
      console.log(`Saved: ${pPersPath}`);
    }

    // Properties Page - Ecosystem Directory section
    const ecoElement = await page.$("#ecosystem");
    if (ecoElement) {
      await ecoElement.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      const pEcoPath = path.join(ARTIFACT_DIR, `properties_ecosystem_${vp.name}.png`);
      await page.screenshot({ path: pEcoPath });
      console.log(`Saved: ${pEcoPath}`);
    }

    // Properties Page - Contact Cadran
    const contactElement = await page.$("#contact");
    if (contactElement) {
      await contactElement.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
      const pContactPath = path.join(ARTIFACT_DIR, `properties_contact_${vp.name}.png`);
      await page.screenshot({ path: pContactPath });
      console.log(`Saved: ${pContactPath}`);
    }

    // 2. Property Detail Page
    console.log(`Navigating to detail page on ${vp.name}...`);
    await page.goto("http://localhost:3000/real-estate/properties/prop-marbella-golden-mile-palace", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    const pDetailPath = path.join(ARTIFACT_DIR, `property_detail_marbella_${vp.name}.png`);
    await page.screenshot({ path: pDetailPath });
    console.log(`Saved: ${pDetailPath}`);

    // 3. About Page
    console.log(`Navigating to /about on ${vp.name}...`);
    await page.goto("http://localhost:3000/about", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    const pAboutPath = path.join(ARTIFACT_DIR, `about_portrait_${vp.name}.png`);
    await page.screenshot({ path: pAboutPath });
    console.log(`Saved: ${pAboutPath}`);

    await context.close();
  }

  await browser.close();
  console.log("All visual audit screenshots successfully captured!");
}

main().catch((err) => {
  console.error("Error capturing screenshots:", err);
  process.exit(1);
});
