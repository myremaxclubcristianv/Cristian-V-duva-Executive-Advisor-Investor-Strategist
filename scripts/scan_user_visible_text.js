/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer-core');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const routes = [
  '/',
  '/about',
  '/contact',
  '/ecosystem',
  '/ventures',
  '/insights',
  '/real-estate',
  '/real-estate/properties',
  '/real-estate/market',
  '/real-estate/news',
  '/media',
  '/media/videos',
  '/tv',
  '/gallery',
  '/legal',
  '/privacy',
  '/gdpr',
  '/cookies',
  '/terms-of-use',
  '/disclaimer',
  '/data-provenance',
  '/editorial-policy',
  '/accessibility'
];

async function scanUserVisibleContent() {
  console.log('================================================================');
  console.log('AI X MEDIA — GLOBAL USER-VISIBLE CONTENT & MARKDOWN ARTIFACT AUDIT');
  console.log('================================================================\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  let totalIssues = 0;

  for (const route of routes) {
    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'domcontentloaded' });
    await new Promise(r => setTimeout(r, 300));

    const pageText = await page.evaluate(() => {
      // Get text content of all visible text elements
      const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, li, blockquote, td, th, label'));
      return elements.map(el => ({
        tag: el.tagName.toLowerCase(),
        text: el.innerText || '',
        id: el.id,
        className: el.className
      })).filter(e => e.text.trim().length > 0);
    });

    const anomalies = [];

    pageText.forEach(item => {
      const t = item.text;
      if (t.includes('**')) anomalies.push({ type: 'Stray asterisks (**)', text: t });
      if (/^[ \t]*#{1,6}[ \t]+/m.test(t)) anomalies.push({ type: 'Stray markdown heading (#)', text: t });
      if (t.includes('`')) anomalies.push({ type: 'Stray backtick (`)', text: t });
      if (t.includes('&#') || t.includes('&amp;') || t.includes('&quot;')) anomalies.push({ type: 'Unescaped HTML entity', text: t });
      if (t.includes('${') || t.includes('undefined') || t.includes('null') || t.includes('[object Object]')) anomalies.push({ type: 'Template/JS artifact', text: t });
      if (/lorem ipsum/i.test(t)) anomalies.push({ type: 'Placeholder text', text: t });
    });

    if (anomalies.length > 0) {
      console.log(`❌ [ISSUES DETECTED] ${route} (${anomalies.length} findings):`);
      anomalies.forEach(a => console.log(`   - ${a.type}: "${a.text.slice(0, 60)}..."`));
      totalIssues += anomalies.length;
    } else {
      console.log(`✅ [CLEAN] ${route.padEnd(26)} -> 0 artifacts (${pageText.length} text elements verified)`);
    }
  }

  await browser.close();

  console.log('\n================================================================');
  if (totalIssues === 0) {
    console.log('AUDIT VERDICT: 🚀 ZERO MARKDOWN OR VISUAL ARTIFACTS DETECTED');
  } else {
    console.log(`AUDIT VERDICT: ⚠️ ${totalIssues} ARTIFACTS REQUIRE CLEANUP`);
  }
  console.log('================================================================');
}

scanUserVisibleContent().catch(console.error);
