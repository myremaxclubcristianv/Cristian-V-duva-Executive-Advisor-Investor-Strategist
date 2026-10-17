import fs from 'fs';

async function checkSerifLatinExt(url) {
  const res = await fetch(url);
  const html = await res.text();
  console.log(`\nChecking font-serif Latin-ext in ${url}:`);

  // Find all elements or tags with font-serif or font-display
  const regex = /<([a-z0-9]+)[^>]*class=["'][^"']*(font-serif|font-display)[^"']*["'][^>]*>(.*?)<\/\1>/gis;
  let match;
  let count = 0;
  while ((match = regex.exec(html)) !== null) {
    const content = match[3];
    const nonAscii = content.match(/[\u0100-\u024F]/g);
    if (nonAscii) {
      count++;
      console.log(`  Match ${count}: Tag <${match[1]}> chars: [${Array.from(new Set(nonAscii)).join(', ')}]`);
      console.log(`    Content: "${content.replace(/<[^>]+>/g, '').trim().slice(0, 100)}"`);
    }
  }
  if (count === 0) {
    console.log('  NO elements with font-serif or font-display contain Latin-ext characters!');
  }
}

async function run() {
  await checkSerifLatinExt('http://localhost:3000/');
  await checkSerifLatinExt('http://localhost:3000/about');
  await checkSerifLatinExt('http://localhost:3000/real-estate/properties');
  await checkSerifLatinExt('http://localhost:3000/real-estate/properties/prop-plevnei');
}

run();
