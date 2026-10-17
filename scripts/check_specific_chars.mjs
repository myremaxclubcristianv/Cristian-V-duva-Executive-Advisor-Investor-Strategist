import fs from 'fs';

async function checkSpecific(url) {
  const res = await fetch(url);
  const html = await res.text();
  console.log(`Checking special chars in ${url}`);
  if (html.includes('\u0301')) console.log('Contains \\u0301');
  if (html.includes('\u2116')) console.log('Contains \\u2116');
  if (html.includes('№')) console.log('Contains №');
}

checkSpecific('http://localhost:3000/real-estate/properties');
checkSpecific('http://localhost:3000/real-estate/properties/prop-plevnei');
