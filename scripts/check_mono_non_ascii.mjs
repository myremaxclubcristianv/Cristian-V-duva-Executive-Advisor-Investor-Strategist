import fs from 'fs';

async function checkMonoNonAscii(url) {
  const res = await fetch(url);
  const html = await res.text();
  console.log(`\nChecking font-mono non-ASCII in ${url}:`);

  const regex = /<([a-z0-9]+)[^>]*class=["'][^"']*font-mono[^"']*["'][^>]*>(.*?)<\/\1>/gis;
  let match;
  let count = 0;
  while ((match = regex.exec(html)) !== null) {
    const content = match[2];
    const nonAscii = content.match(/[^\x00-\x7F]/g);
    if (nonAscii) {
      count++;
      console.log(`  Match ${count}: Tag <${match[1]}> chars: [${Array.from(new Set(nonAscii)).join(', ')}]`);
      console.log(`    Content: "${content.replace(/<[^>]+>/g, '').trim().slice(0, 100)}"`);
    }
  }
  if (count === 0) {
    console.log('  NO font-mono elements contain non-ASCII characters!');
  }
}

async function run() {
  await checkMonoNonAscii('http://localhost:3000/');
  await checkMonoNonAscii('http://localhost:3000/about');
  await checkMonoNonAscii('http://localhost:3000/real-estate/properties');
  await checkMonoNonAscii('http://localhost:3000/real-estate/properties/prop-plevnei');
}

run();
