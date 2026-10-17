import fs from 'fs';

async function checkRoute(url) {
  const res = await fetch(url);
  const html = await res.text();
  console.log(`\n========================================`);
  console.log(`URL: ${url} (HTML length: ${html.length} chars)`);
  console.log(`========================================`);

  const preloads = [];
  const preloadRegex = /<link[^>]+rel=["']preload["'][^>]*>/gi;
  let match;
  while ((match = preloadRegex.exec(html)) !== null) {
    preloads.push(match[0]);
  }
  console.log(`Preloads (${preloads.length}):`);
  preloads.forEach(p => console.log('  ', p));

  const stylesheets = [];
  const ssRegex = /<link[^>]+rel=["']stylesheet["'][^>]*>/gi;
  while ((match = ssRegex.exec(html)) !== null) {
    stylesheets.push(match[0]);
  }
  console.log(`Stylesheets (${stylesheets.length}):`);
  stylesheets.forEach(s => console.log('  ', s));

  const scripts = [];
  const scriptRegex = /<script[^>]*src=["']([^"']+)["'][^>]*>/gi;
  while ((match = scriptRegex.exec(html)) !== null) {
    scripts.push(match[0]);
  }
  console.log(`Scripts (${scripts.length}):`);
  scripts.forEach(s => console.log('  ', s));
}

async function run() {
  await checkRoute('http://localhost:3000/');
  await checkRoute('http://localhost:3000/about');
}

run();
