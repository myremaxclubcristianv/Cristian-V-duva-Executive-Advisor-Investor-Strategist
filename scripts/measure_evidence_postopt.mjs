import { execSync } from 'child_process';
import fs from 'fs';

const targetUrl = 'https://executive.cristianvaduva.com/';
const runsCount = 5;
const runsData = [];

console.log('======================================================================');
console.log(`RUNNING 5-RUN POST-OPTIMIZATION MEASUREMENT: ${targetUrl}`);
console.log('======================================================================');

for (let i = 1; i <= runsCount; i++) {
  const outputPath = `scripts/lh_evidence_postopt_run${i}.json`;
  console.log(`\n[Mobile Run ${i}/${runsCount}] Executing Lighthouse...`);
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

    // LCP element
    const lcpElemNode = raw.audits['largest-contentful-paint-element']?.details?.items?.[0]?.items?.[0]?.node;
    const lcpElement = {
      selector: lcpElemNode?.selector || 'unknown',
      snippet: lcpElemNode?.snippet || 'unknown',
      boundingRect: lcpElemNode?.boundingRect || null
    };

    // LCP breakdown subparts
    const breakdownItems = raw.audits['lcp-breakdown-insight']?.details?.items?.[0]?.items || [];
    const ttfb = breakdownItems.find(x => x.subpart === 'timeToFirstByte')?.duration || 0;
    const resourceLoadDelay = breakdownItems.find(x => x.subpart === 'resourceLoadDelay')?.duration || 0;
    const resourceLoadDuration = breakdownItems.find(x => x.subpart === 'resourceLoadDuration')?.duration || 0;
    const elementRenderDelay = breakdownItems.find(x => x.subpart === 'elementRenderDelay')?.duration || 0;

    // Network requests analysis
    const reqs = raw.audits['network-requests']?.details?.items || [];
    const heroImageReqs = reqs.filter(x => x.url.includes('cristian-vaduva-portrait')).map(r => ({
      url: r.url.split('/').pop(),
      statusCode: r.statusCode,
      priority: r.priority,
      transferSize: r.transferSize,
      resourceSize: r.resourceSize,
      mimeType: r.mimeType,
      startTime: Math.round(r.networkRequestTime),
      endTime: Math.round(r.networkEndTime),
      duration: Math.round(r.networkEndTime - r.networkRequestTime),
      initiator: r.initiator?.type || 'unknown'
    }));

    const stylesheets = reqs.filter(x => x.resourceType === 'Stylesheet').map(r => ({
      file: r.url.split('/').pop(),
      transferSize: r.transferSize,
      startTime: Math.round(r.networkRequestTime),
      endTime: Math.round(r.networkEndTime),
      duration: Math.round(r.networkEndTime - r.networkRequestTime)
    }));

    const fonts = reqs.filter(x => x.resourceType === 'Font' || x.url.includes('.woff2')).map(r => ({
      file: r.url.split('/').pop(),
      transferSize: r.transferSize,
      startTime: Math.round(r.networkRequestTime),
      endTime: Math.round(r.networkEndTime),
      duration: Math.round(r.networkEndTime - r.networkRequestTime)
    }));

    const runSummary = {
      run: i,
      cacheState: i === 1 ? 'Cold (First pass)' : 'Warm (Subsequent pass)',
      scores: { perf, a11y, bp, seo },
      vitals: {
        fcp_ms: Math.round(fcp),
        lcp_ms: Math.round(lcp),
        tbt_ms: Math.round(tbt),
        cls: Number(cls.toFixed(3)),
        si_ms: Math.round(si)
      },
      lcpElement,
      lcpSubparts: {
        ttfb_ms: Math.round(ttfb),
        resourceLoadDelay_ms: Math.round(resourceLoadDelay),
        resourceLoadDuration_ms: Math.round(resourceLoadDuration),
        elementRenderDelay_ms: Math.round(elementRenderDelay)
      },
      heroImageRequests: heroImageReqs,
      stylesheets,
      fontsSummary: {
        count: fonts.length,
        totalBytes: fonts.reduce((acc, f) => acc + f.transferSize, 0)
      }
    };

    console.log(`  -> Run ${i} (${runSummary.cacheState}): Perf=${perf} | LCP=${(lcp/1000).toFixed(2)}s, FCP=${(fcp/1000).toFixed(2)}s, TBT=${Math.round(tbt)}ms, CLS=${cls.toFixed(3)}`);
    console.log(`     LCP Subparts: TTFB=${Math.round(ttfb)}ms, LoadDelay=${Math.round(resourceLoadDelay)}ms, LoadDuration=${Math.round(resourceLoadDuration)}ms, RenderDelay=${Math.round(elementRenderDelay)}ms`);
    console.log(`     Hero Requests (${heroImageReqs.length}): ${heroImageReqs.map(h => `${h.url} (${h.transferSize}B, ${h.duration}ms)`).join(', ')}`);
    runsData.push(runSummary);
  } catch (err) {
    console.error(`Error on postopt run ${i}:`, err.message);
  }
}

// Run 1 Desktop run
console.log('\n[Desktop Run] Executing Lighthouse...');
const desktopPath = 'scripts/lh_evidence_postopt_desktop.json';
let desktopResult = null;
try {
  execSync(`npx lighthouse "${targetUrl}" --preset=desktop --output=json --output-path="${desktopPath}" --chrome-flags="--headless --no-sandbox" --quiet`, { stdio: 'inherit' });
  const raw = JSON.parse(fs.readFileSync(desktopPath, 'utf8'));
  desktopResult = {
    perf: Math.round((raw.categories.performance?.score || 0) * 100),
    a11y: Math.round((raw.categories.accessibility?.score || 0) * 100),
    bp: Math.round((raw.categories['best-practices']?.score || 0) * 100),
    seo: Math.round((raw.categories.seo?.score || 0) * 100),
    fcp_ms: Math.round(raw.audits['first-contentful-paint']?.numericValue || 0),
    lcp_ms: Math.round(raw.audits['largest-contentful-paint']?.numericValue || 0),
    tbt_ms: Math.round(raw.audits['total-blocking-time']?.numericValue || 0),
    cls: Number((raw.audits['cumulative-layout-shift']?.numericValue || 0).toFixed(3))
  };
  console.log(`  -> Desktop: Perf=${desktopResult.perf} | LCP=${(desktopResult.lcp_ms/1000).toFixed(2)}s, FCP=${(desktopResult.fcp_ms/1000).toFixed(2)}s, TBT=${desktopResult.tbt_ms}ms, CLS=${desktopResult.cls}`);
} catch (e) {
  console.error('Desktop run error:', e.message);
}

// Compute stats
function median(vals) {
  if (!vals.length) return 0;
  const s = [...vals].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 !== 0 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}

const allPerf = runsData.map(r => r.scores.perf);
const allLcp = runsData.map(r => r.vitals.lcp_ms);
const warmLcp = runsData.filter(r => r.run > 1).map(r => r.vitals.lcp_ms);
const coldLcp = runsData[0]?.vitals.lcp_ms || 0;

const summary = {
  timestamp: new Date().toISOString(),
  targetUrl,
  deployedCommit: '77da185',
  runs: runsData,
  analysis: {
    overallPerfMedian: median(allPerf),
    overallLcpMedian_ms: median(allLcp),
    coldLcp_ms: coldLcp,
    warmLcpMedian_ms: median(warmLcp),
    lcpRange_ms: `${Math.min(...allLcp)} - ${Math.max(...allLcp)}`
  },
  desktop: desktopResult
};

fs.writeFileSync('scripts/lh_evidence_postopt_summary.json', JSON.stringify(summary, null, 2));
console.log('\n======================================================================');
console.log('POST-OPTIMIZATION AUDIT COMPLETE');
console.log(`Overall Median Perf: ${summary.analysis.overallPerfMedian}`);
console.log(`Overall Median LCP:  ${(summary.analysis.overallLcpMedian_ms / 1000).toFixed(2)}s (${summary.analysis.lcpRange_ms} ms)`);
console.log(`Cold Run 1 LCP:      ${(summary.analysis.coldLcp_ms / 1000).toFixed(2)}s`);
console.log(`Warm Runs 2-5 LCP:   ${(summary.analysis.warmLcpMedian_ms / 1000).toFixed(2)}s`);
console.log('Summary saved to scripts/lh_evidence_postopt_summary.json');
console.log('======================================================================');
