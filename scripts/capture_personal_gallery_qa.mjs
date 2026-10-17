import { chromium } from "playwright";
import fs from "fs";

async function run() {
  const browser = await chromium.launch({ headless: true });
  
  // Desktop
  const contextDesktop = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const pageDesktop = await contextDesktop.newPage();
  
  console.log("Navigating to /about on desktop...");
  await pageDesktop.goto("http://localhost:3000/about", { waitUntil: "networkidle" });
  await pageDesktop.waitForTimeout(2000);
  
  // Scroll to archive section
  const archiveSec = await pageDesktop.$("#archive");
  if (archiveSec) {
    await archiveSec.scrollIntoViewIfNeeded();
    await pageDesktop.waitForTimeout(1000);
    await pageDesktop.screenshot({ path: "scripts/qa_personal_archive_desktop.png" });
    console.log("Captured scripts/qa_personal_archive_desktop.png");
  }

  // Gallery page desktop
  console.log("Navigating to /gallery on desktop...");
  await pageDesktop.goto("http://localhost:3000/gallery", { waitUntil: "networkidle" });
  await pageDesktop.waitForTimeout(2000);
  await pageDesktop.screenshot({ path: "scripts/qa_personal_gallery_desktop.png" });
  console.log("Captured scripts/qa_personal_gallery_desktop.png");

  // Mobile
  const contextMobile = await browser.newContext({
    viewport: { width: 390, height: 844 },
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15"
  });
  const pageMobile = await contextMobile.newPage();
  
  console.log("Navigating to /about on mobile...");
  await pageMobile.goto("http://localhost:3000/about", { waitUntil: "networkidle" });
  await pageMobile.waitForTimeout(2000);
  const mobileArchiveSec = await pageMobile.$("#archive");
  if (mobileArchiveSec) {
    await mobileArchiveSec.scrollIntoViewIfNeeded();
    await pageMobile.waitForTimeout(1000);
    await pageMobile.screenshot({ path: "scripts/qa_personal_archive_mobile.png" });
    console.log("Captured scripts/qa_personal_archive_mobile.png");
  }

  await browser.close();
  console.log("QA captures complete!");
}

run();
