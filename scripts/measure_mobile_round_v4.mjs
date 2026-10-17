import { execSync } from 'child_process';
import fs from 'fs';

const routes = [
  { name: 'home', url: 'http://localhost:3000/' },
  { name: 'about', url: 'http://localhost:3000/about' },
  { name: 'properties', url: 'http://localhost:3000/real-estate/properties' },
  { name: 'detail', url: 'http://localhost:3000/real-estate/properties/prop-plevnei' }
];

const results = {};

for (const route of routes) {
  console.log(`\n========================================`);
  console.log(`Starting 3 Lighthouse mobile runs for: ${route.name} (${route.url})`);
  console.log(`========================================`);
  results[route.name] = [];

  for (let run = 1; run <= 3; run++) {
    const outputPath = `scripts/lh_measure_v4_${route.name}_run${run}.json`;
    console.log(`[${route.name}] Run ${run}/3 executing...`);
    const cmd = `npx lighthouse "${route.url}" --output=json --output-path="${outputPath}" --chrome-flags="--headless --no-sandbox" --quiet`;
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

      const summary = { run, perf, a11y, bp, seo, fcp, lcp, tbt, cls, si };
      console.log(`[${route.name}] Run ${run} Result: Perf=${perf}, A11y=${a11y}, BP=${bp}, SEO=${seo} | FCP=${(fcp/1000).toFixed(2)}s, LCP=${(lcp/1000).toFixed(2)}s, TBT=${Math.round(tbt)}ms, CLS=${cls.toFixed(3)}`);
      results[route.name].push(summary);
    } catch (e) {
      console.error(`Error on ${route.name} run ${run}:`, e.message);
    }
  }
}

// Compute medians
console.log('\n\n========================================');
console.log('MEDIAN LIGHTHOUSE MOBILE RESULTS (V4 POST-OPTIMIZATION)');
console.log('========================================');

function getMedian(arr, key) {
  const sorted = arr.map(x => x[key]).sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

for (const [name, runs] of Object.entries(results)) {
  if (runs.length === 0) continue;
  const medPerf = getMedian(runs, 'perf');
  const medA11y = getMedian(runs, 'a11y');
  const medBp = getMedian(runs, 'bp');
  const medSeo = getMedian(runs, 'seo');
  const medFcp = (getMedian(runs, 'fcp') / 1000).toFixed(2);
  const medLcp = (getMedian(runs, 'lcp') / 1000).toFixed(2);
  const medTbt = Math.round(getMedian(runs, 'tbt'));
  const medCls = getMedian(runs, 'cls').toFixed(3);
  const medSi = (getMedian(runs, 'si') / 1000).toFixed(2);

  console.log(`Route: ${name.toUpperCase()}`);
  console.log(`  Performance: ${medPerf} / 100`);
  console.log(`  Accessibility: ${medA11y} / 100`);
  console.log(`  Best Practices: ${medBp} / 100`);
  console.log(`  SEO: ${medSeo} / 100`);
  console.log(`  Core Web Vitals: FCP=${medFcp}s, LCP=${medLcp}s, TBT=${medTbt}ms, CLS=${medCls}, SpeedIndex=${medSi}s`);
  console.log('----------------------------------------');
}

fs.writeFileSync('scripts/lighthouse_median_measurements_v4.json', JSON.stringify(results, null, 2));
