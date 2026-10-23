import { execSync } from 'child_process';
import fs from 'fs';

const targetUrl = 'https://executive.cristianvaduva.com/';
console.log(`Running fresh baseline Lighthouse audit on live production: ${targetUrl}`);

const runs = [];
for (let i = 1; i <= 2; i++) {
  const outputPath = `scripts/lh_prod_baseline_run${i}.json`;
  console.log(`[Baseline] Run ${i}/2 executing...`);
  const cmd = `npx lighthouse "${targetUrl}" --output=json --output-path="${outputPath}" --chrome-flags="--headless --no-sandbox" --quiet`;
  try {
    execSync(cmd, { stdio: 'inherit' });
    const raw = JSON.parse(fs.readFileSync(outputPath, 'utf8'));
    const perf = Math.round((raw.categories.performance?.score || 0) * 100);
    const a11y = Math.round((raw.categories.accessibility?.score || 0) * 100);
    const bp = Math.round((raw.categories['best-practices']?.score || 0) * 100);
    const seo = Math.round((raw.categories.seo?.score || 0) * 100);

    const fcp = raw.audits['first-contentful-paint']?.numericValue || 0;
    const lcp = raw.audits['largest-contentful-paint']?.numericValue || 0;
    const tbt = raw.audits['total-blocking-time']?.numericValue || 0;
    const cls = raw.audits['cumulative-layout-shift']?.numericValue || 0;
    const si = raw.audits['speed-index']?.numericValue || 0;

    const lcpElement = raw.audits['largest-contentful-paint-element']?.details?.items?.[0]?.node;
    const lcpBreakdown = raw.audits['largest-contentful-paint-element']?.details?.items?.[1]?.items;

    console.log(`Run ${i}: Perf=${perf}, A11y=${a11y}, BP=${bp}, SEO=${seo} | FCP=${(fcp/1000).toFixed(2)}s, LCP=${(lcp/1000).toFixed(2)}s, TBT=${Math.round(tbt)}ms, CLS=${cls.toFixed(3)}`);
    runs.push({ run: i, perf, a11y, bp, seo, fcp, lcp, tbt, cls, si, lcpElement, lcpBreakdown });
  } catch (err) {
    console.error(`Error on run ${i}:`, err.message);
  }
}

fs.writeFileSync('scripts/lh_prod_baseline_summary.json', JSON.stringify(runs, null, 2));
console.log('Baseline saved to scripts/lh_prod_baseline_summary.json');
