import { execSync } from 'child_process';
import fs from 'fs';

const routes = [
  { name: 'home', url: 'https://executive.cristianvaduva.com/' },
  { name: 'about', url: 'https://executive.cristianvaduva.com/about' },
  { name: 'properties', url: 'https://executive.cristianvaduva.com/real-estate/properties' },
  { name: 'detail', url: 'https://executive.cristianvaduva.com/real-estate/properties/prop-plevnei' }
];

const results = {};

for (const route of routes) {
  console.log(`\n========================================`);
  console.log(`LIVE AUDIT: ${route.name.toUpperCase()} (${route.url})`);
  console.log(`========================================`);
  results[route.name] = [];

  for (let run = 1; run <= 3; run++) {
    const outputPath = `scripts/lh_live_postdeploy_${route.name}_run${run}.json`;
    console.log(`[${route.name}] Live Run ${run}/3 executing...`);
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

      // Check a11y failures
      const a11yFailures = [];
      for (const [id, a] of Object.entries(raw.audits)) {
        if (a.score !== null && a.score < 1 && raw.categories.accessibility.auditRefs.some(ref => ref.id === id)) {
          a11yFailures.push(id);
        }
      }

      const summary = { run, perf, a11y, bp, seo, fcp, lcp, tbt, cls, si, a11yFailures };
      console.log(`[${route.name}] Run ${run}: Perf=${perf}, A11y=${a11y}, BP=${bp}, SEO=${seo} | FCP=${(fcp/1000).toFixed(2)}s, LCP=${(lcp/1000).toFixed(2)}s, TBT=${Math.round(tbt)}ms, CLS=${cls.toFixed(3)} | A11yFailures=${a11yFailures.join(',') || 'none'}`);
      results[route.name].push(summary);
    } catch (e) {
      console.error(`Error on ${route.name} run ${run}:`, e.message);
    }
  }
}

fs.writeFileSync('scripts/lighthouse_live_postdeploy_medians.json', JSON.stringify(results, null, 2));

console.log('\n\n========================================');
console.log('FINAL LIVE PRODUCTION MEDIANS (POST-DEPLOYMENT)');
console.log('========================================');

function getMedian(arr, key) {
  const sorted = arr.map(x => x[key]).sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

for (const [name, runs] of Object.entries(results)) {
  if (runs.length === 0) continue;
  console.log(`ROUTE: ${name.toUpperCase()}`);
  console.log(`  Performance: ${getMedian(runs, 'perf')} / 100`);
  console.log(`  Accessibility: ${getMedian(runs, 'a11y')} / 100`);
  console.log(`  Best Practices: ${getMedian(runs, 'bp')} / 100`);
  console.log(`  SEO: ${getMedian(runs, 'seo')} / 100`);
  console.log(`  FCP: ${(getMedian(runs, 'fcp')/1000).toFixed(2)}s`);
  console.log(`  LCP: ${(getMedian(runs, 'lcp')/1000).toFixed(2)}s`);
  console.log(`  TBT: ${Math.round(getMedian(runs, 'tbt'))}ms`);
  console.log(`  CLS: ${getMedian(runs, 'cls').toFixed(3)}`);
  console.log(`  A11y Failures: ${runs[0].a11yFailures.join(', ') || 'NONE'}`);
  console.log('----------------------------------------');
}
