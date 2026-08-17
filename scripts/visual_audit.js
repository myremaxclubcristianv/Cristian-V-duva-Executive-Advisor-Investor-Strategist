// scripts/visual_audit.js
import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const VIEWPORTS = [
  { width: 1440, height: 900 },
  { width: 1280, height: 800 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 390, height: 800 },
  { width: 375, height: 800 },
  { width: 360, height: 800 },
];

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const ARTIFACT_DIR = process.env.ARTIFACTS_DIR || "/Users/cristianvaduva/.gemini/antigravity-ide/brain/8a9ffafb-5af7-427f-9eb8-1df76c290ff6";
if (!fs.existsSync(ARTIFACT_DIR)) fs.mkdirSync(ARTIFACT_DIR, { recursive: true });

async function capture(page, name) {
  const filePath = path.join(ARTIFACT_DIR, `${name}.png`);
  await page.screenshot({ path: filePath, fullPage: true });
  console.log(`Saved ${filePath}`);
}

async function hasOverflow(page) {
  return await page.evaluate(() => {
    // Check if the body or html actually allows horizontal scroll beyond clientWidth
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Home page at each viewport
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
    await page.evaluate(() => window.scrollTo(0, 0));
    await capture(page, `homepage_${vp.width}`);
    const overflow = await hasOverflow(page);
    if (overflow) console.warn(`⚠️ Overflow at ${vp.width}px`);
  }

  // Desktop navigation after scrolling
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
  await page.evaluate(() => window.scrollTo(0, 600));
  await capture(page, `navigation_scrolled_1440`);

  // Mobile drawer interaction for each required viewport
  const mobileViewports = VIEWPORTS.filter(vp => [360, 375, 390].includes(vp.width));
  for (const vp of mobileViewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });
    const drawerBtn = await page.$("button[aria-label='Open navigation'], button[data-testid='nav-toggle']");
    if (!drawerBtn) {
      console.error(`❌ Drawer toggle button not found at ${vp.width}px`);
      process.exit(1);
    }
    await drawerBtn.click();
    // Wait for drawer to become visible (aria-hidden false)
    await page.waitForFunction(() => !!document.querySelector('[aria-hidden="false"]'));
    // Verify body scroll lock
    const overflowLocked = await page.evaluate(() => document.body.style.overflow === "hidden");
    if (!overflowLocked) console.warn(`⚠️ Body overflow not locked at ${vp.width}px`);
    // Verify no horizontal overflow
    const overflow = await hasOverflow(page);
    if (overflow) console.warn(`⚠️ Horizontal overflow when drawer open at ${vp.width}px`);
    await capture(page, `mobile_drawer_open_${vp.width}`);
    // Close via Escape key
    await page.keyboard.press("Escape");
    // Wait for drawer to be hidden (aria-hidden true)
    await page.waitForFunction(() => !!document.querySelector('[aria-hidden="true"]'));
    // Ensure toggle button is visible again
    const btnVisible = await drawerBtn.isVisible?.() ?? true;
    if (!btnVisible) console.warn(`⚠️ Drawer toggle not visible after close at ${vp.width}px`);
    await capture(page, `mobile_drawer_closed_${vp.width}`);
  }

  await browser.close();
})();
