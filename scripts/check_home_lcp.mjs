import fs from 'fs';

const report = JSON.parse(fs.readFileSync('scripts/lh_measure_v3_home_run2.json', 'utf8'));
const audit = report.audits['largest-contentful-paint-element'];
console.log('HOME LCP element node:');
console.log(JSON.stringify(audit?.details?.items?.[0], null, 2));
console.log('HOME LCP subparts:');
console.log(JSON.stringify(audit?.details?.items?.[1], null, 2));
