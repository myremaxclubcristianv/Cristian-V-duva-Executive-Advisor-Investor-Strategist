import fs from 'fs';

async function checkRoute(url) {
  const res = await fetch(url);
  const html = await res.text();
  console.log(`\n========================================`);
  console.log(`URL: ${url} (HTML length: ${html.length} chars)`);
  console.log(`========================================`);

  // Find all <link rel="preload">
  const preloads = [];
  const preloadRegex = /<link[^>]+rel=["']preload["'][^>]*>/gi;
  let match;
  while ((match = preloadRegex.exec(html)) !== null) {
    preloads.push(match[0]);
  }
  console.log(`Preloads (${preloads.length}):`);
  preloads.forEach(p => console.log('  ', p));

  // Find all <link rel="stylesheet">
  const stylesheets = [];
  const ssRegex = /<link[^>]+rel=["']stylesheet["'][^>]*>/gi;
  while ((match = ssRegex.exec(html)) !== null) {
    stylesheets.push(match[0]);
  }
  console.log(`Stylesheets (${stylesheets.length}):`);
  stylesheets.forEach(s => console.log('  ', s));

  // Find all <script> in head or body
  const scripts = [];
  const scriptRegex = /<script[^>]*src=["']([^"']+)["'][^>]*>/gi;
  while ((match = scriptRegex.exec(html)) !== null) {
    scripts.push(match[0]);
  }
  console.log(`Scripts (${scripts.length}):`);
  scripts.forEach(s => console.log('  ', s));

  // Check if image tags exist in HTML
  const imgRegex = /<img[^>]+>/gi;
  const imgs = [];
  while ((match = imgRegex.exec(html)) !== null) {
    imgs.push(match[0]);
  }
  console.log(`Initial <img> tags in HTML (${imgs.length}):`);
  imgs.slice(0, 3).forEach(img => console.log('  ', img.slice(0, 200)));
}

async function run() {
  await checkRoute('http://localhost:3000/');
  await checkRoute('http://localhost:3000/about');
  await checkRoute('http://localhost:3000/real-estate/properties');
  await checkRoute('http://localhost:3000/real-estate/properties/prop-plevnei');
}

run();
