import fs from 'fs';

for (const r of ['home', 'about', 'properties', 'detail']) {
  const file = `scripts/lh_measure_v3_${r}_run2.json`;
  const report = JSON.parse(fs.readFileSync(file, 'utf8'));
  const audit = report.audits['largest-contentful-paint-element'];
  console.log(`\n=== ${r.toUpperCase()} ===`);
  console.log('LCP Audit keys:', Object.keys(audit || {}));
  console.log('LCP details:', JSON.stringify(audit?.details, null, 2));
  
  // Also check lcp breakdown if present anywhere
  for (const [k, v] of Object.entries(report.audits)) {
    if (k.includes('lcp') || k.includes('largest-contentful')) {
      console.log(`Audit ${k}: score=${v.score}, displayValue=${v.displayValue}`);
    }
  }
}
