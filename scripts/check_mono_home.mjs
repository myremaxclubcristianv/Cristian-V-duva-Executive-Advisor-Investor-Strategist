import fs from 'fs';

async function checkMonoHome() {
  const res = await fetch('http://localhost:3000/');
  const html = await res.text();
  const regex = /<([a-z0-9]+)[^>]*class=["'][^"']*font-mono[^"']*["'][^>]*>(.*?)<\/\1>/gis;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const content = match[2];
    const latinExt = content.match(/[\u0100-\u024F]/g);
    if (latinExt) {
      console.log('Found font-mono Latin-ext on Home:');
      console.log('  Chars:', Array.from(new Set(latinExt)));
      console.log('  Content:', content.replace(/<[^>]+>/g, '').trim().slice(0, 100));
    }
  }
}

checkMonoHome();
