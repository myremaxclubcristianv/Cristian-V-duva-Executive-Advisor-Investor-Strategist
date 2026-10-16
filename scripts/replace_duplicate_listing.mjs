import fs from "fs";

let content = fs.readFileSync("lib/properties.ts", "utf8");

const replacement = `  {
    "id": "prop-hf-f528073d-b94",
    "slug": "marbella-prime-architectural-villa-malaga",
    "title": "Marbella Prime Architectural Villa — Costa del Sol",
    "subtitle": "6 Rooms · 1,024.00 sqm Built · Marbella, Spain",
    "location": "Marbella, Costa del Sol, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€16,000,000",
    "priceNumeric": 16000000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "1,024.00 sqm",
    "usableArea": "1,024.00 sqm",
    "bedrooms": 6,
    "bathrooms": 6,
    "rooms": "6 Rooms · Reception Salons · Private Landscaped Grounds",
    "status": "Available",
    "description": "Situated within an exclusive residential enclave of Marbella, Spain, this prime contemporary villa provides 1,024.00 sqm of refined living space, private gardens, and expansive indoor-outdoor entertaining spaces. Designed for sovereign privacy and long-term capital preservation.",
    "advisoryPerspective": "Audited for prime Costa del Sol architectural quality, micro-location desirability, and sustained capital defense.",
    "heroImage": "https://tet.ro/storage/properties/1235998/img-1235998-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235998/img-1235998-0.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-1.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-2.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-3.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-4.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-5.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-6.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-7.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-8.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-9.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-10.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-11.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-12.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-13.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-14.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-15.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-16.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-17.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-18.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-19.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-20.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-21.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-22.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-23.webp",
      "https://tet.ro/storage/properties/1235998/img-1235998-24.webp"
    ],
    "specs": [
      { "label": "Built Footprint", "value": "1,024.00 sqm" },
      { "label": "Bedrooms & Suites", "value": "6 Private Suites" },
      { "label": "Jurisdiction", "value": "Marbella, Spain" },
      { "label": "Source Listing", "value": "Chestertons Marbella × TET.ro" }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter",
      "Custom Outdoor Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and Puerto Banús"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1235998.html",
    "sourceName": "Chestertons Marbella / TET.ro",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  }`;

// Find start and end of prop-hf-194ea2e7-87d
const startIdx = content.indexOf('"id": "prop-hf-194ea2e7-87d"');
if (startIdx === -1) {
  console.error("Could not find prop-hf-194ea2e7-87d");
  process.exit(1);
}

const braceStart = content.lastIndexOf("{", startIdx);
const braceEnd = content.indexOf("  },", startIdx) + 4;

const before = content.substring(0, braceStart);
const after = content.substring(braceEnd);

content = before + replacement + ",\n" + after;
fs.writeFileSync("lib/properties.ts", content, "utf8");
console.log("Successfully replaced duplicate listing with Marbella 1235998!");
