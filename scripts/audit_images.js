/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const publicDir = path.join(__dirname, '..', 'public');
const allPublicFiles = getFiles(publicDir);

console.log('=== IMAGE ASSET SYSTEM AUDIT ===');
console.log(`Total files in public/: ${allPublicFiles.length}`);

for (const f of allPublicFiles) {
  const rel = path.relative(publicDir, f);
  const size = fs.statSync(f).size;
  const sizeKb = (size / 1024).toFixed(1);
  console.log(`- /${rel} (${sizeKb} KB)`);
}
