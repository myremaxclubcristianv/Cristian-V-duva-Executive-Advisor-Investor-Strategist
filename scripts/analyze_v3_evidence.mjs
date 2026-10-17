import fs from 'fs';

const routes = ['home', 'about', 'properties', 'detail'];

for (const r of routes) {
  // Use run 2 or run 1 (representative median run)
  const file = `scripts/lh_measure_v3_${r}_run2.json`;
  if (!fs.existsSync(file)) {
    console.log(`Missing ${file}`);
    continue;
  }
  const report = JSON.parse(fs.readFileSync(file, 'utf8'));
  console.log(`\n======================================================`);
  console.log(`ROUTE: ${r.toUpperCase()} (File: ${file})`);
  console.log(`======================================================`);
  
  // 1. LCP Element & Selector
  const lcpElemAudit = report.audits['largest-contentful-paint-element'];
  const lcpDetails = lcpElemAudit?.details?.items?.[0];
  console.log(`LCP Element:`);
  console.log(`  Selector: ${lcpDetails?.node?.selector || 'N/A'}`);
  console.log(`  Snippet: ${lcpDetails?.node?.snippet || 'N/A'}`);
  console.log(`  NodeLabel: ${lcpDetails?.node?.nodeLabel || 'N/A'}`);
  
  // TTFB, Load Delay, Load Time, Render Delay
  console.log(`LCP Subpart Breakdown (ms):`);
  console.log(`  TTFB: ${lcpDetails?.ttfb ?? 'N/A'} ms`);
  console.log(`  Resource Load Delay: ${lcpDetails?.loadDelay ?? 'N/A'} ms`);
  console.log(`  Resource Load Duration: ${lcpDetails?.loadTime ?? 'N/A'} ms`);
  console.log(`  Element Render Delay: ${lcpDetails?.renderDelay ?? 'N/A'} ms`);

  // LCP Resource & Transfer
  const lcpUrl = lcpDetails?.url;
  console.log(`  LCP Resource URL: ${lcpUrl || 'None (Text Node)'}`);

  // 2. Prioritize LCP image audit
  const prioLcp = report.audits['prioritize-lcp-image'];
  if (prioLcp) {
    console.log(`Prioritize LCP Image Audit:`);
    console.log(`  Score: ${prioLcp.score}`);
    console.log(`  DisplayValue: ${prioLcp.displayValue || 'None'}`);
    console.log(`  Items:`, prioLcp.details?.items || []);
  }

  // 3. Render blocking resources
  const rbAudit = report.audits['render-blocking-resources'];
  console.log(`Render-blocking resources:`);
  console.log(`  Score: ${rbAudit?.score}, WastedMs: ${rbAudit?.numericValue}`);
  if (rbAudit?.details?.items) {
    rbAudit.details.items.forEach(item => {
      console.log(`    - ${item.url} (${item.totalBytes} bytes, wasted: ${item.wastedMs}ms)`);
    });
  }

  // 4. Server response time (TTFB)
  const ttfbAudit = report.audits['server-response-time'];
  console.log(`Server response time (TTFB): ${ttfbAudit?.numericValue} ms`);

  // 5. Network Requests summary (waterfall inspection)
  const netRequests = report.audits['network-requests']?.details?.items || [];
  console.log(`Network Requests (${netRequests.length} total):`);
  netRequests.forEach(req => {
    const isFont = req.resourceType === 'Font';
    const isLcp = lcpUrl && req.url === lcpUrl;
    const isCss = req.resourceType === 'Stylesheet';
    const isDoc = req.resourceType === 'Document';
    const isImage = req.resourceType === 'Image';

    if (isFont || isLcp || isCss || isDoc || (isImage && req.priority === 'High')) {
      console.log(`  [${req.resourceType || 'Other'}] ${req.priority} | ${req.statusCode} | Transfer: ${req.transferSize}B | Start: ${req.networkRequestTime.toFixed(1)}ms | End: ${req.networkEndTime.toFixed(1)}ms | URL: ${req.url}`);
    }
  });

  // 6. Diagnostics & Opportunities
  console.log(`Key Diagnostics & Opportunities:`);
  const auditsToCheck = [
    'unused-css-rules',
    'unused-javascript',
    'modern-image-formats',
    'uses-optimized-images',
    'uses-responsive-images',
    'preload-lcp-image',
    'font-display',
    'layout-shift-elements'
  ];
  auditsToCheck.forEach(auditKey => {
    const a = report.audits[auditKey];
    if (a && a.score !== 1 && a.score !== null) {
      console.log(`  ${auditKey}: score=${a.score}, displayValue=${a.displayValue || a.numericValue}`);
      if (a.details?.items?.length) {
        console.log(`    sample items:`, a.details.items.slice(0, 2).map(i => i.url || i.node?.selector || i.label || JSON.stringify(i)));
      }
    }
  });
}
