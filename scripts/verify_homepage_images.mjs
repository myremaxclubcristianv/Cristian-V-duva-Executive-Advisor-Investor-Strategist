import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const ARTIFACTS_DIR = "/Users/cristianvaduva/.gemini/antigravity-ide/brain/aa23370c-732e-4b58-869a-b4cedb5a7c72/screenshots";

async function verifyViewport(browser, width, height, deviceName) {
  console.log(`\n======================================================`);
  console.log(`--- VERIFYING HOMEPAGE AT ${width}x${height} (${deviceName}) ---`);
  console.log(`======================================================`);

  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 2,
    userAgent: deviceName === "mobile" 
      ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
      : undefined,
  });

  const page = await context.newPage();

  const failedRequests = [];
  const imageResponses = [];
  const consoleErrors = [];

  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  page.on("response", (res) => {
    const url = res.url();
    const status = res.status();
    const contentType = res.headers()["content-type"] || "";

    if (contentType.startsWith("image/") || /\.(jpg|jpeg|png|webp|avif|svg)/i.test(url)) {
      imageResponses.push({ url, status, contentType });
    }

    if (status >= 400) {
      failedRequests.push({ url, status, statusText: res.statusText() });
    }
  });

  await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

  // Scroll smoothly down the page, ensuring each image enters viewport and loads
  await page.evaluate(async () => {
    const images = Array.from(document.querySelectorAll("img"));
    for (const img of images) {
      img.scrollIntoView({ behavior: "instant", block: "center" });
      if (!img.complete) {
        await new Promise((resolve) => {
          img.onload = resolve;
          img.onerror = resolve;
          setTimeout(resolve, 2000);
        });
      }
      if (img.decode) {
        try { await img.decode(); } catch (e) {}
      }
    }
    window.scrollTo(0, 0);
  });

  // Wait a moment for any active renders/transitions to settle
  await page.waitForTimeout(2000);

  // Inspect all images in the DOM
  const imageDetails = await page.evaluate(() => {
    const images = Array.from(document.querySelectorAll("img"));
    return images.map((img, i) => {
      const rect = img.getBoundingClientRect();
      return {
        index: i + 1,
        src: img.currentSrc || img.src,
        alt: img.alt,
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
        displayWidth: Math.round(rect.width),
        displayHeight: Math.round(rect.height),
        isLoadedSuccessfully: img.complete && img.naturalWidth > 0 && img.naturalHeight > 0,
      };
    });
  });

  console.log(`Total images found in DOM: ${imageDetails.length}`);
  let allLoaded = true;
  imageDetails.forEach((img) => {
    const statusIcon = img.isLoadedSuccessfully ? "✓ OK" : "✗ BROKEN";
    if (!img.isLoadedSuccessfully) allLoaded = false;
    console.log(`[${statusIcon}] #${img.index} (${img.displayWidth}x${img.displayHeight}px, natural: ${img.naturalWidth}x${img.naturalHeight}) - ${img.alt || "No Alt"} -> ${img.src}`);
  });

  console.log(`\nImage Responses Count: ${imageResponses.length}`);
  console.log(`Failed Requests Count: ${failedRequests.length}`);
  if (failedRequests.length > 0) {
    console.log("FAILED REQUESTS:", JSON.stringify(failedRequests, null, 2));
  }
  console.log(`Console Errors Count: ${consoleErrors.length}`);
  if (consoleErrors.length > 0) {
    console.log("CONSOLE ERRORS:", JSON.stringify(consoleErrors, null, 2));
  }

  // Ensure screenshot dir exists
  if (!fs.existsSync(ARTIFACTS_DIR)) {
    fs.mkdirSync(ARTIFACTS_DIR, { recursive: true });
  }

  const screenshotPath = path.join(ARTIFACTS_DIR, `homepage_fixed_${deviceName}.png`);
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log(`Saved screenshot to: ${screenshotPath}`);

  // Also take hero-specific screenshot
  const heroScreenshotPath = path.join(ARTIFACTS_DIR, `homepage_fixed_${deviceName}_hero.png`);
  await page.screenshot({ path: heroScreenshotPath, fullPage: false });
  console.log(`Saved hero screenshot to: ${heroScreenshotPath}`);

  await context.close();

  return {
    allLoaded,
    totalImages: imageDetails.length,
    failedRequests,
    consoleErrors,
    screenshotPath,
  };
}

async function run() {
  const browser = await chromium.launch({ headless: true });
  try {
    const desktopRes = await verifyViewport(browser, 1440, 1050, "desktop");
    const mobileRes = await verifyViewport(browser, 390, 844, "mobile");

    console.log("\n================ SUMMARY ================");
    console.log(`Desktop (1440x1050): ${desktopRes.allLoaded ? "PASS (100% images loaded)" : "FAIL"}`);
    console.log(`Mobile (390x844): ${mobileRes.allLoaded ? "PASS (100% images loaded)" : "FAIL"}`);
    console.log("=========================================\n");
  } finally {
    await browser.close();
  }
}

run().catch((e) => {
  console.error("Verification failed with exception:", e);
  process.exit(1);
});
