import fs from "fs";

const dataset = JSON.parse(fs.readFileSync("scripts/expanded_properties_dataset.json", "utf-8"));

console.log("Writing", dataset.length, "properties to lib/properties.ts...");

const header = `export interface PropertySpec {
  label: string;
  value: string;
}

export interface Property {
  id: string;
  slug?: string;
  title: string;
  subtitle?: string;
  location: string;
  city?: string;
  country?: string;
  price: string;
  priceNumeric?: number;
  currency?: string;
  type: string;
  category: "penthouse" | "villa" | "development" | "international" | "marine";
  area: string;
  usableArea?: string;
  plotArea?: string;
  bedrooms?: number | string;
  bathrooms?: number | string;
  rooms: string;
  status: "Available" | "Private Deal" | "Acquired" | "Under Development" | "Custom Order" | "Available for Lease";
  description: string;
  advisoryPerspective: string;
  heroImage: string;
  galleryImages: string[];
  specs: PropertySpec[];
  features: string[];
  sourceUrl: string;
  sourceName: string;
  sourcePlatform?: string;
  isFeatured?: boolean;
}

export const selectedProperties: Property[] = `;

const content = header + JSON.stringify(dataset, null, 2) + `;\n\nexport function getPropertyById(id: string): Property | undefined {
  return selectedProperties.find(
    (p) => p.id === id || (p.slug && p.slug === id)
  );
}\n`;

fs.writeFileSync("lib/properties.ts", content);
console.log("Successfully wrote lib/properties.ts!");
