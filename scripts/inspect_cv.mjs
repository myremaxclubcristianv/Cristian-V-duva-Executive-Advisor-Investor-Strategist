async function inspectCV() {
  console.log("=== Inspecting https://cristianvaduva.com ===");
  try {
    const res = await fetch("https://cristianvaduva.com", {
      headers: { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" }
    });
    const html = await res.text();
    console.log("HTML length:", html.length);
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
    console.log("Title:", title);

    const imgRegex = /https:\/\/cristianvaduva\.com\/wp-content\/uploads\/[^"'\s<)]+?\.(?:jpg|jpeg|png|webp)/gi;
    const images = Array.from(new Set(html.match(imgRegex) || []));
    console.log("Found images count:", images.length);
    console.log("Sample images:", JSON.stringify(images, null, 2));

    const linkRegex = /href=["'](https?:\/\/[^"']+)["']/gi;
    const links = Array.from(new Set([...html.matchAll(linkRegex)].map(m => m[1])));
    const ecosystemLinks = links.filter(l => 
      l.includes("cristianvaduva") || 
      l.includes("aixluxury") || 
      l.includes("subventii") || 
      l.includes("doar-inchirieri") ||
      l.includes("linktr.ee") ||
      l.includes("t.me")
    );
    console.log("\nFound ecosystem links count:", ecosystemLinks.length);
    console.log(ecosystemLinks);

    // Let's check sitemap
    const sitemapRes = await fetch("https://cristianvaduva.com/wp-sitemap.xml");
    if (sitemapRes.ok) {
      const sitemapXml = await sitemapRes.text();
      console.log("\nSitemap length:", sitemapXml.length);
      const locs = Array.from(new Set([...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1])));
      console.log("Sitemap locations count:", locs.length);
      console.log("Sample locs:", locs.slice(0, 10));
    } else {
      console.log("No standard wp-sitemap.xml, status:", sitemapRes.status);
    }
  } catch (err) {
    console.error("Error inspecting CV:", err);
  }
}

inspectCV();
