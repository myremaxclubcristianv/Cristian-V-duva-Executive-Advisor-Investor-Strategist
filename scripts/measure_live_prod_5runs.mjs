import { execSync } from 'child_process';
import fs from 'fs';

const targetUrl = 'https://executive.cristianvaduva.com/';
const runsCount = 5;
const mobileRuns = [];

console.log('====================================================');
console.log(`Starting ${runsCount} Lighthouse Mobile runs on LIVE PRODUCTION: ${targetUrl}`);
console.log('====================================================');

for (let i = 1; i <= runsCount; i++) {
  const outputPath = `scripts/lh_live_opt_run${i}.json`;
  console.log(`[Live Mobile] Run ${i}/${runsCount} executing...`);
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

    const summary = { run: i, perf, a11y, bp, seo, fcp, lcp, tbt, cls, si };
    console.log(`  -> Run ${i}: Perf=${perf}, A11y=${a11y}, BP=${bp}, SEO=${seo} | FCP=${(fcp/1000).toFixed(2)}s, LCP=${(lcp/1000).toFixed(2)}s, TBT=${Math.round(tbt)}ms, CLS=${cls.toFixed(3)}`);
    mobileRuns.push(summary);
  } catch (err) {
    console.error(`Error on mobile run ${i}:`, err.message);
  }
}

// Run 1 Desktop run on live production
console.log('\n====================================================');
console.log(`Starting Lighthouse Desktop run on LIVE PRODUCTION: ${targetUrl}`);
console.log('====================================================');
const desktopPath = `scripts/lh_live_opt_desktop.json`;
let desktopResult = null;
try {
  const desktopCmd = `npx lighthouse "${targetUrl}" --preset=desktop --output=json --output-path="${desktopPath}" --chrome-flags="--headless --no-sandbox" --quiet`;
  execSync(desktopCmd, { stdio: 'inherit' });
  const raw = JSON.parse(fs.readFileSync(desktopPath, 'utf8'));
  desktopResult = {
    perf: Math.round((raw.categories.performance?.score || 0) * 100),
    a11y: Math.round((raw.categories.accessibility?.score || 0) * 100),
    bp: Math.round((raw.categories['best-practices']?.score || 0) * 100),
    seo: Math.round((raw.categories.seo?.score || 0) * 100),
    fcp: raw.audits['first-contentful-paint']?.numericValue || 0,
    lcp: raw.audits['largest-contentful-paint']?.numericValue || 0,
    tbt: raw.audits['total-blocking-time']?.numericValue || 0,
    cls: raw.audits['cumulative-layout-shift']?.numericValue || 0,
    si: raw.audits['speed-index']?.numericValue || 0
  };
  console.log(`  -> Desktop: Perf=${desktopResult.perf}, A11y=${desktopResult.a11y}, BP=${desktopResult.bp}, SEO=${desktopResult.seo} | FCP=${(desktopResult.fcp/1000).toFixed(2)}s, LCP=${(desktopResult.lcp/1000).toFixed(2)}s, TBT=${Math.round(desktopResult.tbt)}ms, CLS=${desktopResult.cls.toFixed(3)}`);
} catch (err) {
  console.error('Error on desktop run:', err.message);
}

// Compute Medians and Ranges
function stats(arr, key) {
  const vals = arr.map(x => x[key]).sort((a, b) => a - b);
  const min = vals[0];
  const max = vals[vals.length - 1];
  const mid = Math.floor(vals.length / 2);
  const median = vals.length % 2 !== 0 ? vals[mid] : (vals[mid - 1] + vals[mid]) / 2;
  return { median, min, max, range: `${min} - ${max}` };
}

const report = {
  timestamp: new Date().toISOString(),
  targetUrl,
  mobile: {
    runs: mobileRuns,
    metrics: {
      performance: stats(mobileRuns, 'perf'),
      accessibility: stats(mobileRuns, 'a11y'),
      bestPractices: stats(mobileRuns, 'bp'),
      seo: stats(mobileRuns, 'seo'),
      fcp_ms: stats(mobileRuns, 'fcp'),
      lcp_ms: stats(mobileRuns, 'lcp'),
      tbt_ms: stats(mobileRuns, 'tbt'),
      cls: stats(mobileRuns, 'cls'),
      speedIndex_ms: stats(mobileRuns, 'si')
    }
  },
  desktop: desktopResult
};

console.log('\n====================================================');
console.log('SUMMARY OF 5 LIVE PRODUCTION MOBILE RUNS (MEDIAN & RANGE)');
console.log('====================================================');
console.log(`Performance:    ${report.mobile.metrics.performance.median} (range: ${report.mobile.metrics.performance.range})`);
console.log(`Accessibility:  ${report.mobile.metrics.accessibility.median} (range: ${report.mobile.metrics.accessibility.range})`);
console.log(`Best Practices: ${report.mobile.metrics.bestPractices.median} (range: ${report.mobile.metrics.bestPractices.range})`);
console.log(`SEO:            ${report.mobile.metrics.seo.median} (range: ${report.mobile.metrics.seo.range})`);
console.log(`LCP (s):        ${(report.mobile.metrics.lcp_ms.median / 1000).toFixed(2)}s (range: ${(report.mobile.metrics.lcp_ms.min / 1000).toFixed(2)}s - ${(report.mobile.metrics.lcp_ms.max / 1000).toFixed(2)}s)`);
console.log(`FCP (s):        ${(report.mobile.metrics.fcp_ms.median / 1000).toFixed(2)}s (range: ${(report.mobile.metrics.fcp_ms.min / 1000).toFixed(2)}s - ${(report.mobile.metrics.fcp_ms.max / 1000).toFixed(2)}s)`);
console.log(`TBT (ms):       ${Math.round(report.mobile.metrics.tbt_ms.median)}ms (range: ${Math.round(report.mobile.metrics.tbt_ms.min)}ms - ${Math.round(report.mobile.metrics.tbt_ms.max)}ms)`);
console.log(`CLS:            ${report.mobile.metrics.cls.median.toFixed(3)} (range: ${report.mobile.metrics.cls.min.toFixed(3)} - ${report.mobile.metrics.cls.max.toFixed(3)})`);

fs.writeFileSync('scripts/lh_live_opt_summary.json', JSON.stringify(report, null, 2));
console.log('\nReport written to scripts/lh_live_opt_summary.json');
