import fs from 'fs';

async function checkAboveFoldChars(url) {
  const res = await fetch(url);
  const html = await res.text();
  console.log(`\n========================================`);
  console.log(`URL: ${url}`);
  console.log(`========================================`);
  
  // Cut first 10,000 chars of HTML (above the fold)
  const headAndHero = html.slice(0, 15000);
  
  // Find all non-ASCII
  const nonAscii = headAndHero.match(/[^\x00-\x7F]/g);
  if (nonAscii) {
    const unique = Array.from(new Set(nonAscii));
    console.log('Unique non-ASCII characters above fold:', unique);
    unique.forEach(ch => {
      const code = ch.charCodeAt(0).toString(16).padStart(4, '0');
      // Find where it occurs
      const idx = headAndHero.indexOf(ch);
      const snippet = headAndHero.slice(Math.max(0, idx - 20), Math.min(headAndHero.length, idx + 30)).replace(/\n/g, ' ');
      console.log(`  '${ch}' (U+${code}) -> snippet: "${snippet}"`);
    });
  } else {
    console.log('No non-ASCII characters in first 15k chars.');
  }
}

async function run() {
  await checkAboveFoldChars('http://localhost:3000/');
  await checkAboveFoldChars('http://localhost:3000/about');
  await checkAboveFoldChars('http://localhost:3000/real-estate/properties');
  await checkAboveFoldChars('http://localhost:3000/real-estate/properties/prop-plevnei');
}

run();
