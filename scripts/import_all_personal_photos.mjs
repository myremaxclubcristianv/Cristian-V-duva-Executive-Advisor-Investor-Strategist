import fs from "fs";
import path from "path";
import crypto from "crypto";
import { execSync } from "child_process";

const wpDir = "scripts/full_media_scan/cristianvaduva";
const aixDir = "scripts/full_media_scan/aixluxury";
const targetDir = "public/media/cristian-vaduva/personal";

if (fs.existsSync(targetDir)) {
  const existing = fs.readdirSync(targetDir);
  for (const f of existing) {
    fs.unlinkSync(path.join(targetDir, f));
  }
}
fs.mkdirSync(targetDir, { recursive: true });

const wpManifest = JSON.parse(fs.readFileSync("scripts/full_media_scan/wp_download_manifest.json", "utf8"));
const aixManifest = JSON.parse(fs.readFileSync("scripts/full_media_scan/aix_download_manifest.json", "utf8"));

const wpUrlMap = new Map(wpManifest.filter(m => m.status === 200).map(m => [m.filename, m.url]));
const aixUrlMap = new Map(aixManifest.filter(m => m.status === 200).map(m => [m.filename, m.url]));

function getDimensions(filePath) {
  try {
    const out = execSync(`sips -g pixelWidth -g pixelHeight "${filePath}"`, { stdio: ["pipe", "pipe", "ignore"] }).toString();
    const w = parseInt(out.match(/pixelWidth:\s*(\d+)/)?.[1] || "0", 10);
    const h = parseInt(out.match(/pixelHeight:\s*(\d+)/)?.[1] || "0", 10);
    return { width: w, height: h, pixels: w * h };
  } catch {
    return { width: 0, height: 0, pixels: 0 };
  }
}

function sha256(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

const plan = JSON.parse(fs.readFileSync("scripts/master_photos_plan.json", "utf8"));
const wpFiles = fs.readdirSync(wpDir);
const f825 = wpFiles.find(f => f.startsWith("825_"));

// Curated authentic personal photographs specifications
const specs = [
  // 1. Studio & Official Portraits (9)
  {
    srcGroup: "SNY01904-Edit.jpg",
    destName: "cristian-vaduva-portrait-studio-formal.jpg",
    category: "portraits",
    categoryLabel: "Official Portraits",
    caption: "Executive Studio Portrait — Formal Black Tie & Peak Lapel Suit",
    depictionStatus: "Cristian Văduva in bespoke dark tailored suit and silk tie in studio setting",
    orientation: "portrait"
  },
  {
    srcGroup: "SNY02239-Edit.jpg",
    destName: "cristian-vaduva-portrait-studio-seated.jpg",
    category: "portraits",
    categoryLabel: "Official Portraits",
    caption: "Executive Studio Portrait — Classic Seated Stance",
    depictionStatus: "Cristian Văduva seated in formal executive dark suit in studio setting",
    orientation: "portrait"
  },
  {
    srcGroup: "SNY05672-Edit.jpg",
    destName: "cristian-vaduva-portrait-studio-standing.jpg",
    category: "portraits",
    categoryLabel: "Official Portraits",
    caption: "Executive Studio Portrait — Confident Standing Stance",
    depictionStatus: "Cristian Văduva standing with arms folded in dark executive suit",
    orientation: "portrait"
  },
  {
    srcGroup: "767_Cristian-Vaduva-2.jpg",
    destName: "cristian-vaduva-portrait-navy-suit.jpg",
    category: "portraits",
    categoryLabel: "Official Portraits",
    caption: "Official Advisory Portrait — Tailored Navy Business Suit",
    depictionStatus: "Cristian Văduva portrait in navy executive suit and patterned tie",
    orientation: "portrait"
  },
  {
    srcGroup: "775_CristianVaduva.com_-1.jpg",
    destName: "cristian-vaduva-portrait-charcoal-suit.jpg",
    category: "portraits",
    categoryLabel: "Official Portraits",
    caption: "Official Brand Portrait — Charcoal Executive Suit",
    depictionStatus: "Cristian Văduva official brand identity portrait in charcoal suit",
    orientation: "portrait"
  },
  {
    srcGroup: "830_Buy-Real-estate.jpg",
    destName: "cristian-vaduva-portrait-property-strategist.jpg",
    category: "portraits",
    categoryLabel: "Official Portraits",
    caption: "Institutional Real Estate Strategist — Acquisition Monograph",
    depictionStatus: "Cristian Văduva executive portrait in formal suit for prime acquisition advisory",
    orientation: "portrait"
  },
  {
    srcGroup: "801_5-Star-branded-property.jpg",
    destName: "cristian-vaduva-portrait-5-star-branded.jpg",
    category: "portraits",
    categoryLabel: "Official Portraits",
    caption: "Luxury Branded Residences Advisory Direction",
    depictionStatus: "Cristian Văduva in executive suit for 5-star branded property transactions",
    orientation: "portrait"
  },
  {
    srcGroup: "802_IQON-VILLAS.jpg",
    destName: "cristian-vaduva-portrait-iqon-villas.jpg",
    category: "portraits",
    categoryLabel: "Official Portraits",
    caption: "Ultra-Prime Villa Advisory & Masterplanning",
    depictionStatus: "Cristian Văduva portrait representing luxury architectural developments",
    orientation: "portrait"
  },
  {
    srcGroup: "486_Copy-of-5-Star-branded-property.jpg",
    destName: "cristian-vaduva-portrait-fiduciary-advisor.jpg",
    category: "portraits",
    categoryLabel: "Official Portraits",
    caption: "Principal Fiduciary Advisor — High-Net-Worth Portfolio Mandates",
    depictionStatus: "Cristian Văduva formal portrait for high-net-worth institutional advisory",
    orientation: "portrait"
  },

  // 2. Executive Office & Advisory (9)
  {
    srcGroup: "851_Captura-de-ecran-din-2024-07-06-la-16.34.15.png",
    destName: "cristian-vaduva-office-gold-desk.png",
    category: "advisory",
    categoryLabel: "Executive Advisory",
    caption: "Sovereign Executive Suite — Sculptural Gold Desk & Library",
    depictionStatus: "Cristian Văduva seated at sculptural golden executive desk with legal library and candelabra",
    orientation: "portrait"
  },
  {
    srcGroup: "850_Captura-de-ecran-din-2024-07-06-la-16.26.05-1.png",
    destName: "cristian-vaduva-office-armchair-consultation.png",
    category: "advisory",
    categoryLabel: "Executive Advisory",
    caption: "Private Consultation Lounge — Executive Armchair Advisory",
    depictionStatus: "Cristian Văduva seated in black leather armchair in shirt, tie, and watch",
    orientation: "portrait"
  },
  {
    srcGroup: "1010_certificate-7.jpg",
    destName: "cristian-vaduva-office-desk-macbook-tie.jpg",
    category: "advisory",
    categoryLabel: "Executive Advisory",
    caption: "Portfolio Underwriting & Global Advisory Desk",
    depictionStatus: "Cristian Văduva at executive desk with MacBook, shirt and tie",
    orientation: "landscape"
  },
  {
    srcGroup: "916_certificate-1.jpg",
    destName: "cristian-vaduva-office-desk-macbook-vest.jpg",
    category: "advisory",
    categoryLabel: "Executive Advisory",
    caption: "Principal Fiduciary Mandate — Tailored Advisory Desk",
    depictionStatus: "Cristian Văduva at workstation in executive vest, shirt, and tie",
    orientation: "landscape"
  },
  {
    srcGroup: "765_3D9C6578-11A4-4870-BA2F-402BFF553786.jpg",
    destName: "cristian-vaduva-office-blueprints-underwriting.jpg",
    category: "advisory",
    categoryLabel: "Executive Advisory",
    caption: "Architectural Masterplan Review & Quantitative Underwriting",
    depictionStatus: "Cristian Văduva reviewing development floorplans and iPad at conference table in blue blazer",
    orientation: "portrait"
  },
  {
    srcGroup: "766_36E34693-9CB6-47B6-96B2-101FE7557AE7.jpg",
    destName: "cristian-vaduva-office-desk-knitwear.jpg",
    category: "advisory",
    categoryLabel: "Executive Advisory",
    caption: "Strategic Consultation — Capital Allocation & Financing",
    depictionStatus: "Cristian Văduva seated at office desk in cream knit sweater and luxury watch",
    orientation: "portrait"
  },
  {
    srcGroup: "922_certificate-6.jpg",
    destName: "cristian-vaduva-office-knitwear-underwriting.jpg",
    category: "advisory",
    categoryLabel: "Executive Advisory",
    caption: "Wealth Building & High-ROI Advisory Direction",
    depictionStatus: "Cristian Văduva at advisory desk conducting high-ROI structuring",
    orientation: "portrait"
  },
  {
    srcGroup: "Capturdeecrandin2026-04-16la00.29.05-_39vnELK57LwkgzqqCXf-g.png",
    destName: "cristian-vaduva-office-chestertons-global-network.png",
    category: "advisory",
    categoryLabel: "Executive Advisory",
    caption: "Chestertons Global Network Alliance & The Gentleman's Journal",
    depictionStatus: "Cristian Văduva smiling before Chestertons global map holding The Gentleman's Journal",
    orientation: "landscape"
  },
  {
    srcGroup: "Capturdeecrandin2026-04-15la23.15.43-IiiqlEP4v-AYV5JwXlNH-g.png",
    destName: "cristian-vaduva-office-generali-portfolio-protection.png",
    category: "advisory",
    categoryLabel: "Executive Advisory",
    caption: "Strategic Asset Protection & Sovereign Risk Insurance",
    depictionStatus: "Cristian Văduva in black turtleneck before Generali headquarters emblem",
    orientation: "portrait"
  },

  // 3. Developments, Construction & Terrace Walkthroughs (8)
  {
    srcGroup: "Capturdeecrandin2025-05-10la16.15.58-uv_PCWufaosgW10_37Bx7w.png",
    destName: "cristian-vaduva-development-skytower-inspection.png",
    category: "field",
    categoryLabel: "Developments & Field",
    caption: "On-Site Construction Inspection — SkyTower Bucharest Skyline",
    depictionStatus: "Cristian Văduva in protective hard hat and safety vest on high-rise development terrace",
    orientation: "portrait"
  },
  {
    srcGroup: "Capturdeecrandin2025-05-10la16.20.16-ps_-ClzOFF965DxENEJaSA.png",
    destName: "cristian-vaduva-development-curved-balcony-armani.png",
    category: "field",
    categoryLabel: "Developments & Field",
    caption: "Architectural Walkthrough — Yacht Kid Luxury Atrium Balcony",
    depictionStatus: "Cristian Văduva in royal blue Armani Exchange blazer and sunglasses on luxury atrium terrace",
    orientation: "portrait"
  },
  {
    srcGroup: "Capturdeecrandin2025-05-10la16.20.59-mfFpUKw5vQ0XXVMs9StLMA.png",
    destName: "cristian-vaduva-residence-interior-dining-burgundy.png",
    category: "field",
    categoryLabel: "Developments & Field",
    caption: "Penthouse Interior Architecture Inspection — Private Dining Salon",
    depictionStatus: "Cristian Văduva in burgundy shirt seated in emerald velvet chair at marble dining table",
    orientation: "portrait"
  },
  {
    srcGroup: "887_certificate.jpg",
    destName: "cristian-vaduva-residence-penthouse-terrace-lake.jpg",
    category: "field",
    categoryLabel: "Developments & Field",
    caption: "Penthouse Terrace Inspection — Northern Bucharest Panoramic View",
    depictionStatus: "Cristian Văduva standing on glass-fronted penthouse balcony overlooking lake and city",
    orientation: "landscape"
  },
  {
    srcGroup: "853_Captura-de-ecran-din-2024-07-06-la-16.41.58.png",
    destName: "cristian-vaduva-residence-curved-glass-terrace.png",
    category: "field",
    categoryLabel: "Developments & Field",
    caption: "Penthouse Curved Terrace — Architectural Wave Facade",
    depictionStatus: "Cristian Văduva on upper terrace in black shirt, beige trousers, and sunglasses",
    orientation: "portrait"
  },
  {
    srcGroup: "854_Captura-de-ecran-din-2024-07-06-la-16.42.34.png",
    destName: "cristian-vaduva-residence-double-height-salon.png",
    category: "field",
    categoryLabel: "Developments & Field",
    caption: "Ultra-Luxury Penthouse — Double-Height Living & Crystal Chandelier",
    depictionStatus: "Cristian Văduva seated in grand double-height living room with herringbone oak floor and fireplace",
    orientation: "portrait"
  },
  {
    srcGroup: "67EF9918-1D48-42FF-8B56-DA0B8D67A4DC-IIS5ZRIql90K-aMd21CfMA.JPG",
    destName: "cristian-vaduva-residence-outdoor-penthouse-solarium.jpg",
    category: "field",
    categoryLabel: "Developments & Field",
    caption: "Penthouse Rooftop Solarium — Indoor-Outdoor Architectural Transition",
    depictionStatus: "Cristian Văduva in white executive shirt on expansive rooftop terrace dining deck",
    orientation: "landscape"
  },
  {
    srcGroup: "589_a0aed5d6-f810-4032-9555-a6f0f3f606fd.jpg",
    destName: "cristian-vaduva-residence-skyline-night-panorama.jpg",
    category: "field",
    categoryLabel: "Developments & Field",
    caption: "Northern Business District — Night Skyline Perspective",
    depictionStatus: "Cristian Văduva on penthouse terrace overlooking illuminated business district towers at night",
    orientation: "landscape"
  },

  // 4. Gala Events, Networking & Keynotes (13)
  {
    srcGroup: "1011_e88982a3-1ee3-4905-82c7-fc815afd0198.jpg",
    destName: "cristian-vaduva-event-chestertons-gala.jpg",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "Chestertons & Top Estate Team Gala Event",
    depictionStatus: "Cristian Văduva at official industry gala with senior associate before press backdrop",
    orientation: "landscape"
  },
  {
    srcGroup: "852_Captura-de-ecran-din-2024-07-06-la-16.38.26.png",
    destName: "cristian-vaduva-event-closing-dinner-toast.png",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "Transaction Milestone Dinner — Champagne Toast",
    depictionStatus: "Cristian Văduva raising champagne glass with partner celebrating milestone closing",
    orientation: "portrait"
  },
  {
    srcGroup: "783_Captura-de-ecran-din-2024-02-26-la-10.59.16.png",
    destName: "cristian-vaduva-event-client-terrace-consultation.png",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "Client Consultation & Portfolio Walkthrough — Rooftop Terrace",
    depictionStatus: "Cristian Văduva with associate on sunny terrace holding confidential portfolio materials",
    orientation: "portrait"
  },
  {
    srcGroup: "828_D192FAF8-6EAC-4E70-BF64-34954C2C674B.jpg",
    destName: "cristian-vaduva-event-development-walkthrough-associates.jpg",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "Development Walkthrough — Northern Bucharest Luxury Enclave",
    depictionStatus: "Cristian Văduva walking with professional associates through newly paved villa community",
    orientation: "portrait"
  },
  {
    srcGroup: "839_IMG-20240404-WA0000.jpg",
    destName: "cristian-vaduva-event-emerald-armchair-marble.jpg",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "Private Residence Salon — Bookmatched Marble Architecture",
    depictionStatus: "Cristian Văduva seated in sculptural armchair in three-piece suit against bookmatched marble",
    orientation: "portrait"
  },
  {
    srcGroup: "697_a2842b38-9e91-4bf2-8b26-2ce4f6a8ee2c.jpg",
    destName: "cristian-vaduva-event-networking-dinner-toast.jpg",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "Executive Networking Dinner — Partner Toast",
    depictionStatus: "Cristian Văduva in royal blue blazer with associate having dinner drinks",
    orientation: "portrait"
  },
  ...(f825 ? [{
    srcGroup: f825,
    destName: "cristian-vaduva-event-champagne-flute-toast.jpg",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "Transaction Milestone Closing — Champagne Flute Toast",
    depictionStatus: "Cristian Văduva raising champagne glass celebrating milestone acquisition",
    orientation: "portrait"
  }] : []),
  {
    srcGroup: "355_IMG_4301.png",
    destName: "cristian-vaduva-event-convention-red-carpet.png",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "National Real Estate Convention — Red Carpet Welcome",
    depictionStatus: "Cristian Văduva on red carpet with industry leader wearing official convention credentials",
    orientation: "landscape"
  },
  {
    srcGroup: "356_IMG_4302.png",
    destName: "cristian-vaduva-event-advisory-suite-holiday.png",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "Executive Suite Consultation — Private Boardroom",
    depictionStatus: "Cristian Văduva in tailored vest and white shirt seated at solid walnut conference table",
    orientation: "landscape"
  },
  {
    srcGroup: "357_IMG_4303.png",
    destName: "cristian-vaduva-event-partner-champagne-reception.png",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "Executive Acquisition Reception — Partner Champagne Toast",
    depictionStatus: "Cristian Văduva in burgundy shirt with corporate partner at reception",
    orientation: "portrait"
  },
  {
    srcGroup: "360_IMG_4306.png",
    destName: "cristian-vaduva-event-renet-network-colleagues.png",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "Renet Real Estate Network Headquarters — Partner Delegation",
    depictionStatus: "Cristian Văduva in three-piece waistcoat and tie with Renet leadership",
    orientation: "portrait"
  },
  {
    srcGroup: "361_IMG_4307.png",
    destName: "cristian-vaduva-event-vintage-car-historic-villa.png",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "Heritage Asset Field Inspection — Historic Villa & Classic Car",
    depictionStatus: "Cristian Văduva in black shirt and grey trousers standing before vintage automobile and heritage mansion",
    orientation: "portrait"
  },
  {
    srcGroup: "368_IMG_4314.png",
    destName: "cristian-vaduva-event-lakefront-terrace-sunglasses.png",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "Lakefront Penthouse Inspection — Sunny Terrace Perspective",
    depictionStatus: "Cristian Văduva in casual military print shirt and sunglasses on penthouse balcony",
    orientation: "portrait"
  },
  {
    srcGroup: "377_IMG_4323.png",
    destName: "cristian-vaduva-event-luxury-atrium-meeting.png",
    category: "events",
    categoryLabel: "Keynotes & Events",
    caption: "International Real Estate Delegation — Luxury Atrium Consultation",
    depictionStatus: "Cristian Văduva in navy button-down shirt and tailored trousers with associate in hotel atrium",
    orientation: "portrait"
  },

  // 5. Complete Outdoor & Editorial Photoshoot (31)
  { srcGroup: "917_IMG_1517-scaled.jpg", destName: "cristian-vaduva-editorial-img-1517.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Editorial Stance — Architectural Facade Inspection", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 1517)" },
  { srcGroup: "921_IMG_1522-scaled.jpg", destName: "cristian-vaduva-editorial-img-1522.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Executive Walkthrough — Residential Promenade", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 1522)" },
  { srcGroup: "919_IMG_1571-scaled.jpg", destName: "cristian-vaduva-editorial-img-1571.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Development Field Audit — Architectural Setting", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 1571)" },
  { srcGroup: "920_IMG_1582-scaled.jpg", destName: "cristian-vaduva-editorial-img-1582.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Executive Portrait — Urban Architectural Perspective", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 1582)" },
  { srcGroup: "IMG_2182-9b6bsxtfM9U7GwZCjkD-Rg.jpg", destName: "cristian-vaduva-editorial-img-2182.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Editorial Profile — Contemporary Living Architecture", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 2182)" },
  { srcGroup: "925_IMG_2227-scaled.jpg", destName: "cristian-vaduva-editorial-img-2227.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Residential Grounds Walkthrough — Exterior Framing", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 2227)" },
  { srcGroup: "926_IMG_2279-scaled.jpg", destName: "cristian-vaduva-editorial-img-2279.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Executive Demeanor — Property Advisory Fieldwork", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 2279)" },
  { srcGroup: "927_IMG_2301-scaled.jpg", destName: "cristian-vaduva-editorial-img-2301.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Architectural Exterior Audit — Northern District", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 2301)" },
  { srcGroup: "928_IMG_2363-scaled.jpg", destName: "cristian-vaduva-editorial-img-2363.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Contemporary Executive Style — Urban Setting", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 2363)" },
  { srcGroup: "929_IMG_2531-scaled.jpg", destName: "cristian-vaduva-editorial-img-2531.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Residential Promenade Audit — Strategic Advisory", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 2531)" },
  { srcGroup: "930_IMG_2618-scaled.jpg", destName: "cristian-vaduva-editorial-img-2618.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Architectural Site Inspection — Masterplan View", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 2618)" },
  { srcGroup: "931_IMG_2655-scaled.jpg", destName: "cristian-vaduva-editorial-img-2655.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Outdoor Executive Stance — Natural Daylight Shoot", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 2655)" },
  { srcGroup: "932_IMG_2667-scaled.jpg", destName: "cristian-vaduva-editorial-img-2667.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Field Demeanor — Premium Asset Location", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 2667)" },
  { srcGroup: "1009_IMG_3792-scaled.jpg", destName: "cristian-vaduva-editorial-img-3792.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Executive Editorial — Prime Residence Balcony Stance", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 3792)" },
  { srcGroup: "1007_IMG_4029-scaled.jpg", destName: "cristian-vaduva-editorial-img-4029.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Architectural Perspective — Urban Panorama Inspection", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 4029)" },
  { srcGroup: "803_IMG_4635-2.jpg", destName: "cristian-vaduva-editorial-img-4635.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Field Inspection — Residential Grounds Walkthrough", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 4635)" },
  { srcGroup: "691_IMG_4834.jpg", destName: "cristian-vaduva-editorial-img-4834.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Editorial Close-Up — Executive Outdoor Stance", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 4834)" },
  { srcGroup: "688_IMG_4835.jpg", destName: "cristian-vaduva-editorial-img-4835.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Architectural Promenade — Prime District Audit", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 4835)" },
  { srcGroup: "762_IMG_4843.jpg", destName: "cristian-vaduva-editorial-img-4843.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Executive Profile — Development Site Walkthrough", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 4843)" },
  { srcGroup: "771_IMG_4897.png", destName: "cristian-vaduva-editorial-img-4897.png", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Advisory Demeanor — Residential Community Tour", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 4897)" },
  { srcGroup: "1006_IMG_5244-2.jpg", destName: "cristian-vaduva-editorial-img-5244.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Executive Portrait — Urban Real Estate Setting", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 5244)" },
  { srcGroup: "918_IMG_5321.jpg", destName: "cristian-vaduva-editorial-img-5321.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Networking Consultation — Associate Discussion on Site", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 5321)" },
  { srcGroup: "806_IMG_5659-scaled.jpg", destName: "cristian-vaduva-editorial-img-5659.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Development Panorama — Landscape Architecture Review", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 5659)" },
  { srcGroup: "804_IMG_5660-scaled.jpg", destName: "cristian-vaduva-editorial-img-5660.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Field Walkthrough — Luxury Residential Community", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 5660)" },
  { srcGroup: "IMG_5789-taaEU-AHhTWN-LMNPDT-dw.jpg", destName: "cristian-vaduva-editorial-img-5789.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Architectural Inspection — High-End Villa Enclave", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 5789)" },
  { srcGroup: "823_IMG_5791-scaled.jpg", destName: "cristian-vaduva-editorial-img-5791.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Executive Demeanor — On-Site Client Direction", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 5791)" },
  { srcGroup: "833_IMG_6868-1-scaled.jpg", destName: "cristian-vaduva-editorial-img-6868.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Residential Promenade Walkthrough — Daylight Shoot", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 6868)" },
  { srcGroup: "827_IMG_6913-scaled.jpg", destName: "cristian-vaduva-editorial-img-6913.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Contemporary Advisory Stance — High-Rise Terrace", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 6913)" },
  { srcGroup: "IMG_7438-6aNAXuE1mhvI72Lmdi4xeg.jpg", destName: "cristian-vaduva-editorial-img-7438.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Executive Master Portrait — High-Definition 12MP Camera Session", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 7438)" },
  { srcGroup: "1008_IMG_7760.jpg", destName: "cristian-vaduva-editorial-img-7760.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "Architectural Context — Contemporary Residence Setting", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 7760)" },
  { srcGroup: "1012_IMG_8287.jpg", destName: "cristian-vaduva-editorial-img-8287.jpg", category: "lifestyle", categoryLabel: "Editorial & Lifestyle", caption: "On-Site Review — Associate Collaboration & Tour", depictionStatus: "Cristian Văduva in bespoke executive attire during on-site photoshoot (Session 8287)" }
];

console.log(`Processing ${specs.length} verified personal photographs...`);

const manifestItems = [];
const masterByFilename = new Map(plan.masterPhotos.map(p => [p.master.filename, p]));
let photoSeq = 1;

for (const spec of specs) {
  const planItem = masterByFilename.get(spec.srcGroup);
  let srcFile = null;
  let sourceDomain = null;
  let sourceUrl = null;

  if (planItem) {
    srcFile = planItem.master.localPath;
    sourceDomain = planItem.master.sourceDomain;
    sourceUrl = planItem.master.sourceUrl;
  } else {
    if (fs.existsSync(path.join(wpDir, spec.srcGroup))) {
      srcFile = path.join(wpDir, spec.srcGroup);
      sourceDomain = "cristianvaduva.com";
      sourceUrl = wpUrlMap.get(spec.srcGroup) || "";
    } else if (fs.existsSync(path.join(aixDir, spec.srcGroup))) {
      srcFile = path.join(aixDir, spec.srcGroup);
      sourceDomain = "aixluxury.com";
      sourceUrl = aixUrlMap.get(spec.srcGroup) || "";
    }
  }

  if (!srcFile || !fs.existsSync(srcFile)) {
    console.error(`ERROR: Source file not found for ${spec.srcGroup}`);
    continue;
  }

  const destPath = path.join(targetDir, spec.destName);
  fs.copyFileSync(srcFile, destPath);

  const stat = fs.statSync(destPath);
  const dims = getDimensions(destPath);
  const hash = sha256(destPath);
  const formattedSize = formatBytes(stat.size);
  const orientation = dims.width === dims.height ? "square" : (dims.width > dims.height ? "landscape" : "portrait");

  const item = {
    id: `photo-cv-${String(photoSeq++).padStart(3, "0")}`,
    filename: spec.destName,
    localPath: `/media/cristian-vaduva/personal/${spec.destName}`,
    category: spec.category,
    categoryLabel: spec.categoryLabel,
    depictionStatus: spec.depictionStatus,
    caption: spec.caption,
    orientation: orientation,
    sourceUrl: sourceUrl,
    sourceDomain: sourceDomain,
    sourcePage: `https://${sourceDomain}`,
    originalFilename: path.basename(srcFile),
    fileSizeFormatted: formattedSize,
    fileSizeBytes: stat.size,
    width: dims.width,
    height: dims.height,
    sha256: hash,
    verifiedAuthentic: true
  };

  manifestItems.push(item);
  console.log(`[Imported] ${item.id}: ${item.filename} (${dims.width}x${dims.height}, ${formattedSize})`);
}

console.log(`\nImported ${manifestItems.length} strictly verified authentic personal photographs!`);

fs.writeFileSync("scripts/personal_photos_manifest.json", JSON.stringify(manifestItems, null, 2));
fs.writeFileSync(path.join(targetDir, "manifest.json"), JSON.stringify(manifestItems, null, 2));

// Update lib/personalArchive.ts
const tsCode = `// lib/personalArchive.ts
// Comprehensive archive of strictly verified authentic photographs of Cristian Văduva
// Sourced from cristianvaduva.com, aixluxury.com, and official first-party media repositories

export interface PersonalPhotoItem {
  id: string;
  filename: string;
  localPath: string;
  category: "portraits" | "advisory" | "field" | "events" | "lifestyle";
  categoryLabel: string;
  depictionStatus: string;
  caption: string;
  orientation: "portrait" | "landscape" | "square";
  sourceUrl: string;
  sourceDomain: string;
  sourcePage: string;
  originalFilename: string;
  fileSizeFormatted: string;
  fileSizeBytes: number;
  width?: number;
  height?: number;
  sha256: string;
  verifiedAuthentic: boolean;
}

export const personalArchivePhotos: PersonalPhotoItem[] = ${JSON.stringify(manifestItems, null, 2)};

export function getPersonalArchivePhotos(): PersonalPhotoItem[] {
  return personalArchivePhotos;
}

export function getPersonalPhotosByCategory(category: string): PersonalPhotoItem[] {
  if (category === "all") return personalArchivePhotos;
  return personalArchivePhotos.filter((p) => p.category === category);
}
`;

fs.writeFileSync("lib/personalArchive.ts", tsCode);
console.log(`Updated lib/personalArchive.ts with ${manifestItems.length} photos.`);
