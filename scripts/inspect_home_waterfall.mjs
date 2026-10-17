import fs from 'fs';

const report = JSON.parse(fs.readFileSync('scripts/lh_measure_v3_home_run2.json', 'utf8'));

console.log('Home run 2 audits summary:');
const netReqs = report.audits['network-requests']?.details?.items || [];
console.log(`Total requests: ${netReqs.length}`);
netReqs.forEach(r => {
  console.log(`Req: ${r.priority.padEnd(8)} | ${r.resourceType?.padEnd(10)} | ${String(r.transferSize).padStart(6)}B | ${r.networkRequestTime.toFixed(1)}ms -> ${r.networkEndTime.toFixed(1)}ms | ${r.url.slice(0, 80)}`);
});
