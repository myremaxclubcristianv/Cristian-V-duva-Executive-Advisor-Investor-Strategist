import fs from 'fs';

async function checkNonLatin(url) {
  const res = await fetch(url);
  const html = await res.text();
  console.log(`\nChecking non-ASCII characters in ${url}:`);
  
  // Cyrillic range: U+0400 to U+04FF
  const cyrillic = html.match(/[\u0400-\u04FF]/g);
  if (cyrillic) {
    console.log(`  Found ${cyrillic.length} Cyrillic characters:`, Array.from(new Set(cyrillic)));
    // Find context around Cyrillic
    const match = html.match(/.{0,30}[\u0400-\u04FF].{0,30}/);
    if (match) console.log(`  Context: "${match[0]}"`);
  } else {
    console.log(`  No Cyrillic characters found.`);
  }

  // Latin-ext: U+0100 to U+024F
  const latinExt = html.match(/[\u0100-\u024F]/g);
  if (latinExt) {
    console.log(`  Found ${latinExt.length} Latin-ext characters:`, Array.from(new Set(latinExt)).slice(0, 10));
  }
}

async function run() {
  await checkNonLatin('http://localhost:3000/real-estate/properties');
  await checkNonLatin('http://localhost:3000/real-estate/properties/prop-plevnei');
}

run();
