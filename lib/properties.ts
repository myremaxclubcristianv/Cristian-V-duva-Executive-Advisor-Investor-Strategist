export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  area: string;
  rooms: string;
  status: "Available" | "Private Deal" | "Acquired";
  description: string;
  advisoryPerspective: string;
  heroImage: string;
}

export const selectedProperties: Property[] = [
  {
    id: "prop-1",
    title: "Prime Northern Bucharest Penthouse & Residence",
    location: "Herăstrău / Primăverii, Bucharest",
    price: "Price Upon Application",
    type: "Penthouse / Luxury Residential",
    area: "340 sqm",
    rooms: "5 Rooms",
    status: "Private Deal",
    description: "Architectural masterpiece overlooking Herăstrău park with private terrace, custom Italian craftsmanship, and dedicated security.",
    advisoryPerspective: "High liquidity asset in Bucharest's most resilient micro-location, representing stable long-term equity preservation.",
    heroImage: "/residence/gallery.png",
  },
  {
    id: "prop-2",
    title: "Strategic Commercial Development Site",
    location: "Iancu Nicolae / Pipera Axis, Bucharest",
    price: "€4,800,000",
    type: "Land & Commercial Development",
    area: "8,500 sqm",
    rooms: "N/A",
    status: "Available",
    description: "Zoned commercial development parcel with existing infrastructure permits, ideal for premium mixed-use or high-density residential.",
    advisoryPerspective: "Targeted sub-market experiencing +8% rental yield growth driven by international corporate expansion.",
    heroImage: "/residence/exterior.png",
  },
];

export function getSelectedProperties(): Property[] {
  return selectedProperties;
}
