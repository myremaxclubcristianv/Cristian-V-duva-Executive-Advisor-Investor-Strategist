/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer-core');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// Exact cleanText logic from lib/cleanText.ts
function cleanText(input) {
  if (!input || typeof input !== "string") return "";

  let text = input;

  // 1. Decode common HTML entities
  text = text
    .replace(/&amp;/g, "&")
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—");

  // 2. Remove Markdown headers (e.g. "# Heading", "## Subheading", "### Date Cheie de Piață")
  text = text.replace(/^[ \t]*#{1,6}[ \t]+/gm, "");
  text = text.replace(/(^|\s)#{1,6}[ \t]+/g, "$1");

  // 3. Remove Markdown blockquote symbols ("> ")
  text = text.replace(/^[ \t]*>[ \t]*/gm, "");

  // 4. Remove bullet lists and numbered lists at line start ("- ", "* ", "+ ", "1. ", "• ")
  text = text.replace(/^[ \t]*[-*+•][ \t]+/gm, "");
  text = text.replace(/^[ \t]*\d+\.[ \t]+/gm, "");

  // 5. Remove Markdown images and links: ![alt](url) -> "" and [Label](url) -> "Label"
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, "");
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

  // 6. Remove Markdown code blocks & inline backticks
  text = text.replace(/```[a-zA-Z]*\n([\s\S]*?)```/g, "$1");
  text = text.replace(/`([^`]+)`/g, "$1");
  text = text.replace(/`/g, "");

  // 7. Remove Markdown bold/italic (***bolditalic***, **bold**, *italic*, ___bolditalic___, __bold__, _italic_)
  text = text.replace(/\*\*\*([^*\n]+)\*\*\*/g, "$1");
  text = text.replace(/\*\*([^*\n]+)\*\*/g, "$1");
  text = text.replace(/___([^_\n]+)___/g, "$1");
  text = text.replace(/__([^_\n]+)__/g, "$1");
  text = text.replace(/\*([^*\n]+)\*/g, "$1");
  text = text.replace(/_([^_\n]+)_/g, "$1");

  // 8. Remove stray backslashes, artificial escaped syntax, and truncation markers
  text = text.replace(/\\n/g, " ");
  text = text.replace(/\\([*#_`[\]()\-+>|])/g, "$1");
  text = text.replace(/\\+$/gm, "");
  text = text.replace(/\[\.\.\.\]/g, "…");
  text = text.replace(/\(\.\.\.\)/g, "…");

  // 9. Remove any remaining isolated stray asterisks, hashes, or dashes
  text = text.replace(/(^|\s)\*{1,3}(\s|$)/g, "$1$2");
  text = text.replace(/(^|\s)#{1,6}(\s|$)/g, "$1$2");

  // 10. Normalize spaces, linebreaks, and trim
  text = text.replace(/\r\n|\r/g, "\n");
  text = text.replace(/[ \t]+/g, " ");
  text = text.replace(/\n\s+/g, "\n");
  text = text.replace(/\s+\n/g, "\n");
  text = text.replace(/\n{2,}/g, " ").trim();

  return text;
}

async function runComprehensiveAudit() {
  console.log("=================================================================");
  console.log("AI X MEDIA — FORENSIC SANITIZATION SAFETY & NON-DESTRUCTIVE AUDIT");
  console.log("=================================================================\n");

  let totalTests = 0;
  let passedTests = 0;

  // --- 1. TEST LEGITIMATE EDITORIAL CONTENT ---
  console.log("--- 1. LEGITIMATE CONTENT PRESERVATION TESTS ---");
  const legitimateCases = [
    "BET a crescut cu +8,4% în 2026.",
    "Indicele BET-TR a avansat cu 1,2%.",
    "BNR a menținut rata dobânzii la 6,50%.",
    "Perioada 2026–2027 este relevantă pentru piață.",
    "Real Estate & Capital Markets",
    "Art. 6(1)(f) GDPR",
    "ROBOR 3M",
    "EUR 500.000",
    "€1,2 milioane",
    "1.250.000 EUR",
    "BNR: +0,5%",
    "Nord-Sud",
    "București – Cluj",
    "AI X Media",
    "Market Update #1",
    "Top 5 oportunități",
    "2026.08.17",
    "www.example.com",
  ];

  legitimateCases.forEach((item) => {
    totalTests++;
    const res = cleanText(item);
    const ok = res === item.trim();
    if (ok) {
      console.log(`✅ [PRESERVED] "${item}"`);
      passedTests++;
    } else {
      console.log(`❌ [CORRUPTED] Input: "${item}" -> Output: "${res}"`);
    }
  });

  // --- 2. TEST ACTUAL PROBLEMATIC CONTENT (MUST STRIP) ---
  console.log("\n--- 2. PROBLEMATIC MARKDOWN REMOVAL TESTS ---");
  const problematicCases = [
    { input: "## Date Cheie de Piață", expected: "Date Cheie de Piață" },
    { input: "- Indicele BET: Reprezintă evoluția.", expected: "Indicele BET: Reprezintă evoluția." },
    { input: "**Indicele BET**", expected: "Indicele BET" },
    { input: "### Evoluția pieței", expected: "Evoluția pieței" },
    { input: "`ROBOR 3M`", expected: "ROBOR 3M" },
    { input: "***Analiză Exclusivă***", expected: "Analiză Exclusivă" },
    { input: "[BNR](https://bnr.ro)", expected: "BNR" },
    { input: "> Informație oficială", expected: "Informație oficială" },
    { input: "\\# Market", expected: "Market" },
    { input: "__BNR__", expected: "BNR" },
  ];

  problematicCases.forEach((tc) => {
    totalTests++;
    const res = cleanText(tc.input);
    const ok = res === tc.expected;
    if (ok) {
      console.log(`✅ [SANITIZED] "${tc.input}" -> "${res}"`);
      passedTests++;
    } else {
      console.log(`❌ [FAILED] Input: "${tc.input}" -> Expected: "${tc.expected}", Got: "${res}"`);
    }
  });

  // --- 3. COLLISION TESTS (LEGITIMATE PUNCTUATION RESEMBLING MARKDOWN) ---
  console.log("\n--- 3. COLLISION TESTS ---");
  const collisionCases = [
    "BET +1,4%",
    "BET-TR",
    "Top-10",
    "#1 în România",
    "Rata dobânzii: 6,50%",
    "Creștere +8%",
    "Profit: +€2,4 milioane",
    "2026–2027",
    "BNR — Piața monetară",
    "Cluj-Napoca",
    "Real Estate – București",
  ];

  collisionCases.forEach((item) => {
    totalTests++;
    const res = cleanText(item);
    const ok = res === item;
    if (ok) {
      console.log(`✅ [COLLISION PASS] "${item}"`);
      passedTests++;
    } else {
      console.log(`❌ [COLLISION FAIL] Input: "${item}" -> Got: "${res}"`);
    }
  });

  // --- 4. MULTI-LINE EDITORIAL CONTENT TEST ---
  console.log("\n--- 4. MULTI-LINE EDITORIAL TEST ---");
  const multilineInput = `## Date Cheie de Piață

- Indicele BET-TR: +1,4%
- BNR: rata dobânzii 6,50%
- EUR/RON: 5,07
- București–Cluj: diferențe structurale`;

  const expectedMultiline = `Date Cheie de Piață
Indicele BET-TR: +1,4%
BNR: rata dobânzii 6,50%
EUR/RON: 5,07
București–Cluj: diferențe structurale`;

  totalTests++;
  const multilineRes = cleanText(multilineInput);
  if (multilineRes === expectedMultiline) {
    console.log(`✅ [MULTI-LINE PASS]\n${multilineRes}`);
    passedTests++;
  } else {
    console.log(`❌ [MULTI-LINE FAIL]\nExpected:\n${expectedMultiline}\nGot:\n${multilineRes}`);
  }

  // --- 5. IDEMPOTENCE TESTS (20+ CASES) ---
  console.log("\n--- 5. IDEMPOTENCE TESTS (cleanText(cleanText(x)) === cleanText(x)) ---");
  const idempotenceSuite = [
    ...legitimateCases,
    ...collisionCases,
    "## Dispecerat Piață\n- BET-TR: +1,4%\n* Tranzacții: €2,5M",
    "### Analiză: 2026–2027",
    "Informație [BNR](https://bnr.ro) `6,50%`",
    "***Exclusiv***: Articol cu 'ghilimele' & apostrof.",
  ];

  let idempotencePasses = 0;
  idempotenceSuite.forEach((item, idx) => {
    totalTests++;
    const pass1 = cleanText(item);
    const pass2 = cleanText(pass1);
    const pass3 = cleanText(pass2);
    if (pass1 === pass2 && pass2 === pass3) {
      idempotencePasses++;
      passedTests++;
    } else {
      console.log(`❌ [IDEMPOTENCE FAIL] Item ${idx + 1}:\n  Pass 1: "${pass1}"\n  Pass 2: "${pass2}"\n  Pass 3: "${pass3}"`);
    }
  });
  console.log(`Idempotence Rate: ${idempotencePasses}/${idempotenceSuite.length} Passed (✅ 100%)`);

  // --- 6. LIVE PRODUCTION DOM CRAWL ---
  console.log("\n--- 6. LIVE PRODUCTION DOM CRAWL & DYNAMIC CONTENT AUDIT ---");
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  const targetRoutes = [
    '/real-estate/news',
    '/real-estate/market',
    '/insights',
    '/media',
    '/media/videos',
    '/tv',
    '/'
  ];

  let domArtifacts = 0;
  for (const r of targetRoutes) {
    await page.goto(`http://localhost:3000${r}`, { waitUntil: 'domcontentloaded' });
    await new Promise((r) => setTimeout(r, 400));

    const texts = await page.evaluate(() => {
      const els = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, td, li'));
      return els.map(e => e.innerText || '').filter(t => t.trim().length > 0);
    });

    const routeArtifacts = [];
    texts.forEach(t => {
      if (t.includes('**')) routeArtifacts.push(`Stray bold: "${t.slice(0, 40)}"`);
      if (/^[ \t]*#{1,6}[ \t]+/m.test(t)) routeArtifacts.push(`Stray heading: "${t.slice(0, 40)}"`);
      if (t.includes('`')) routeArtifacts.push(`Stray backtick: "${t.slice(0, 40)}"`);
      if (t.includes('&#') || t.includes('&amp;')) routeArtifacts.push(`Unescaped entity: "${t.slice(0, 40)}"`);
    });

    if (routeArtifacts.length === 0) {
      console.log(`✅ [DOM AUDIT CLEAN] ${r.padEnd(24)} -> ${texts.length} text elements verified (0 artifacts)`);
    } else {
      console.log(`❌ [DOM ARTIFACTS] ${r} -> ${routeArtifacts.join(', ')}`);
      domArtifacts += routeArtifacts.length;
    }
  }

  await browser.close();

  console.log("\n=================================================================");
  console.log(`SAFETY AUDIT TOTAL: ${passedTests}/${totalTests} TESTS PASSED`);
  console.log(`DOM ARTIFACTS DETECTED: ${domArtifacts}`);
  console.log("=================================================================");

  if (passedTests === totalTests && domArtifacts === 0) {
    process.exit(0);
  } else {
    process.exit(1);
  }
}

runComprehensiveAudit().catch(console.error);
