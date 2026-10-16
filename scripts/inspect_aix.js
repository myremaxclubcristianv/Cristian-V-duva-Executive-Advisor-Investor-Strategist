async function testAix() {
  const res = await fetch("https://aixluxury.com/brabus-island", { headers: { "User-Agent": "Mozilla/5.0" } });
  const html = await res.text();
  console.log("HTML length:", html.length);
  const imgTags = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)].map(m => m[1]);
  console.log("img tags:", imgTags);
  const allUrls = [...html.matchAll(/(?:href|src|url\()=["']?([^"'\)]+)["']?/gi)].map(m => m[1]);
  const imageAssets = allUrls.filter(u => /\.(jpg|jpeg|png|webp|svg)/i.test(u));
  console.log("Image assets:", imageAssets);
  console.log("Body snippet:", html.slice(0, 1500));
}
testAix();
