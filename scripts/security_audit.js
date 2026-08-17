/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const searchTerms = [
  'TODO',
  'FIXME',
  'localhost',
  '127.0.0.1',
  'example.com',
  'placeholder',
  'demo',
  'mock',
  'fake',
  'test data',
  'SECRET',
  'API_KEY',
  'PRIVATE_KEY'
];

function scanDir(dir, results = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next' || file === '.git') continue;
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath, results);
    } else if (/\.(tsx|ts|jsx|js|json|css)$/.test(file)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        for (const term of searchTerms) {
          if (line.toLowerCase().includes(term.toLowerCase())) {
            results.push({
              file: path.relative(path.join(__dirname, '..'), fullPath),
              line: idx + 1,
              term,
              content: line.trim().slice(0, 120)
            });
          }
        }
      });
    }
  }
  return results;
}

const rootDir = path.join(__dirname, '..');
const results = scanDir(rootDir);

console.log('=== SECURITY & SOURCE CODE AUDIT ===');
console.log(`Found ${results.length} term occurrences.`);

// Filter to app, components, lib
const srcResults = results.filter(r => 
  r.file.startsWith('app') || r.file.startsWith('components') || r.file.startsWith('lib')
);

console.log(`\nSource code occurrences (${srcResults.length}):`);
srcResults.forEach(r => {
  console.log(`[${r.term}] ${r.file}:${r.line} -> ${r.content}`);
});
