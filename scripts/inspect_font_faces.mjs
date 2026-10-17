import fs from 'fs';

// Check the CSS file to see what @font-face rules exist
const cssDir = '.next/static/chunks';
const files = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));

for (const f of files) {
  const content = fs.readFileSync(`${cssDir}/${f}`, 'utf8');
  console.log(`\nCSS file: ${f} (${content.length} chars)`);
  
  // Find all @font-face
  const fontFaceMatches = content.match(/@font-face\s*\{[^}]+\}/g) || [];
  console.log(`Found ${fontFaceMatches.length} @font-face blocks`);
  fontFaceMatches.forEach((ff, i) => {
    console.log(`--- FontFace ${i+1} ---`);
    console.log(ff);
  });
}
