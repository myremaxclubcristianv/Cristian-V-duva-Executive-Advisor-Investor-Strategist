import fs from "fs";
import path from "path";

const wpData = JSON.parse(fs.readFileSync("scripts/all_wp_media_fresh.json", "utf8"));
const aixData = JSON.parse(fs.readFileSync("scripts/all_aix_images_fresh.json", "utf8"));

const wpDir = "scripts/full_media_scan/cristianvaduva";
const aixDir = "scripts/full_media_scan/aixluxury";

fs.mkdirSync(wpDir, { recursive: true });
fs.mkdirSync(aixDir, { recursive: true });

async function downloadBatch(items, destDir, sourceDomain, concurrency = 10) {
  let idx = 0;
  const manifest = [];
  
  async function worker() {
    while (idx < items.length) {
      const current = items[idx++];
      const url = typeof current === "string" ? current : current.source_url;
      const id = typeof current === "object" ? current.id : null;
      
      if (!url || typeof url !== "string" || !url.startsWith("http")) continue;
      
      // Skip audio/video/doc non-image formats
      if (url.match(/\.(mp3|mp4|mov|avi|pdf|doc|docx|zip)$/i)) {
        manifest.push({ url, status: "skipped_non_image", reason: "audio/video/document" });
        continue;
      }
      
      const cleanFn = url.split("/").pop().split("?")[0];
      const filename = id ? `${id}_${cleanFn}` : cleanFn;
      const targetPath = path.join(destDir, filename);
      
      if (fs.existsSync(targetPath)) {
        const stat = fs.statSync(targetPath);
        manifest.push({ id, url, filename, localPath: targetPath, size: stat.size, status: 200, cached: true, sourceDomain });
        continue;
      }
      
      try {
        const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 Executive-Auditor/2.0" } });
        if (!res.ok) {
          manifest.push({ id, url, filename, status: res.status, error: "HTTP error", sourceDomain });
          continue;
        }
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(targetPath, buf);
        manifest.push({ id, url, filename, localPath: targetPath, size: buf.length, status: 200, cached: false, sourceDomain });
        console.log(`[${sourceDomain}] Downloaded: ${filename} (${buf.length} bytes)`);
      } catch (err) {
        manifest.push({ id, url, filename, status: "error", error: err.message, sourceDomain });
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);
  return manifest;
}

async function run() {
  console.log("=== DOWNLOADING CRISTIANVADUVA.COM MEDIA ===");
  const wpManifest = await downloadBatch(wpData, wpDir, "cristianvaduva.com", 12);
  fs.writeFileSync("scripts/full_media_scan/wp_download_manifest.json", JSON.stringify(wpManifest, null, 2));
  console.log(`Finished WP downloads: ${wpManifest.filter(m => m.status === 200).length} OK`);

  console.log("=== DOWNLOADING AIXLUXURY.COM MEDIA ===");
  const aixManifest = await downloadBatch(aixData, aixDir, "aixluxury.com", 12);
  fs.writeFileSync("scripts/full_media_scan/aix_download_manifest.json", JSON.stringify(aixManifest, null, 2));
  console.log(`Finished Aix downloads: ${aixManifest.filter(m => m.status === 200).length} OK`);
}

run();
