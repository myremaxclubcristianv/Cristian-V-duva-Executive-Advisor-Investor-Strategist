const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function auditDOM() {
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Test desktop (1440x900)
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  const desktopData = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('section, header, footer'));
    return sections.map((sec, i) => {
      const rect = sec.getBoundingClientRect();
      const style = window.getComputedStyle(sec);
      const container = sec.querySelector('.container, [class*="max-w-"]');
      const containerStyle = container ? window.getComputedStyle(container) : null;
      const containerRect = container ? container.getBoundingClientRect() : null;
      
      const headings = Array.from(sec.querySelectorAll('h1, h2, h3, h4')).map(h => {
        const hStyle = window.getComputedStyle(h);
        return {
          tag: h.tagName,
          text: h.innerText.substring(0, 40),
          fontSize: hStyle.fontSize,
          lineHeight: hStyle.lineHeight,
          fontFamily: hStyle.fontFamily,
          fontWeight: hStyle.fontWeight,
          letterSpacing: hStyle.letterSpacing,
          textAlign: hStyle.textAlign,
          marginTop: hStyle.marginTop,
          marginBottom: hStyle.marginBottom
        };
      });

      const buttons = Array.from(sec.querySelectorAll('button, a[class*="btn"], a[class*="button"], a[href^="#"]')).map(b => {
        const bStyle = window.getComputedStyle(b);
        return {
          text: b.innerText.substring(0, 30),
          bg: bStyle.backgroundColor,
          color: bStyle.color,
          border: bStyle.border,
          padding: `${bStyle.paddingTop} ${bStyle.paddingRight} ${bStyle.paddingBottom} ${bStyle.paddingLeft}`,
          fontSize: bStyle.fontSize,
          borderRadius: bStyle.borderRadius
        };
      });

      const images = Array.from(sec.querySelectorAll('img, svg')).map(img => {
        const imgRect = img.getBoundingClientRect();
        return {
          tag: img.tagName,
          width: imgRect.width,
          height: imgRect.height,
          src: img.getAttribute('src') || img.getAttribute('class')
        };
      });

      return {
        id: sec.id || `section-${i}`,
        className: sec.className,
        height: rect.height,
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        bgColor: style.backgroundColor,
        color: style.color,
        containerMaxWidth: containerStyle ? containerStyle.maxWidth : 'none',
        containerWidth: containerRect ? containerRect.width : rect.width,
        containerLeft: containerRect ? containerRect.left : rect.left,
        containerRight: containerRect ? (window.innerWidth - containerRect.right) : 0,
        headingsCount: headings.length,
        headings,
        buttonsCount: buttons.length,
        buttons,
        imagesCount: images.length,
        images
      };
    });
  });

  // Test mobile (390x844)
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));

  const mobileData = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('section, header, footer'));
    return sections.map((sec, i) => {
      const rect = sec.getBoundingClientRect();
      const style = window.getComputedStyle(sec);
      const container = sec.querySelector('.container, [class*="max-w-"]');
      const containerRect = container ? container.getBoundingClientRect() : null;

      // Check overflow horizontal
      const hasOverflow = sec.scrollWidth > sec.clientWidth;

      return {
        id: sec.id || `section-${i}`,
        height: rect.height,
        paddingTop: style.paddingTop,
        paddingBottom: style.paddingBottom,
        containerWidth: containerRect ? containerRect.width : rect.width,
        containerLeft: containerRect ? containerRect.left : rect.left,
        containerRight: containerRect ? (window.innerWidth - containerRect.right) : 0,
        hasOverflow
      };
    });
  });

  await browser.close();

  const auditReport = {
    desktop: desktopData,
    mobile: mobileData
  };

  fs.writeFileSync(
    path.join(__dirname, '../visual-qa/dom_forensic_metrics.json'),
    JSON.stringify(auditReport, null, 2)
  );
  console.log('DOM Forensic metrics saved to visual-qa/dom_forensic_metrics.json');
}

auditDOM().catch(console.error);
