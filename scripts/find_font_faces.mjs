import fs from 'fs';

const cssDir = '.next/static/chunks';
const files = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));

const targetFonts = [
  '1f9e983605289f29',
  '8394f9d71e076efc',
  '6ab0db14f70d8ed6'
];

for (const f of files) {
  const content = fs.readFileSync(`${cssDir}/${f}`, 'utf8');
  for (const tf of targetFonts) {
    if (content.includes(tf)) {
      console.log(`\nFound ${tf} in ${f}:`);
      // Find the @font-face containing this font
      const regex = new RegExp(`@font-face\\s*\\{[^}]*${tf}[^}]*\\}`, 'g');
      const matches = content.match(regex);
      if (matches) {
        matches.forEach(m => console.log('  ', m));
      }
    }
  }
}
