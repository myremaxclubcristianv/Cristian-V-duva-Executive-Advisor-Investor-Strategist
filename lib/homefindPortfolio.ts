// lib/homefindPortfolio.ts
// Real, verified BUY and RENT properties sourced directly from HomeFind (https://homefind.cristianvaduva.com/)

export interface HomeFindListingItem {
  id: string;
  title: string;
  displayPrice: string;
  priceNumeric: number;
  currency: string;
  period?: string; // "month" for rentals
  city: string;
  type: string;
  surface: string;
  rooms: string;
  description: string;
  image: string;
  status: string;
  homefindUrl: string;
  category: "buy" | "rent";
}

export const homefindBuyProperties: HomeFindListingItem[] = [
  {
    id: "66b50868-2f5d-440c-80e7-1b04da21f5eb",
    title: "Luxury Semi-Detached Villa in Pipera",
    displayPrice: "€575,000",
    priceNumeric: 575000,
    currency: "EUR",
    city: "Bucharest / Voluntari (Pipera)",
    type: "Semi-Detached Villa",
    surface: "228 sqm",
    rooms: "5 rooms",
    description: "Luxury 4-bedroom villa featuring contemporary architectural finishes, generous private courtyard, and immediate access to top international schools in northern Bucharest.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2702e6ec-b168-4ba8-95ab-9a6d85f25300.JPG",
    status: "Available",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/66b50868-2f5d-440c-80e7-1b04da21f5eb",
    category: "buy"
  },
  {
    id: "5f83fe12-0fae-40ef-a476-05daebd070e5",
    title: "Prime Mountain Estate | Bran Domain",
    displayPrice: "€2,999,000",
    priceNumeric: 2999000,
    currency: "EUR",
    city: "Bran, Brașov",
    type: "Villa / Private Estate",
    surface: "",
    rooms: "",
    description: "Prestige alpine residence situated in historic Bran, offering unobstructed panoramic mountain views and an expansive private landholding.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2bca3abd-03a7-44e3-b208-1c4305de5ddf.jpg",
    status: "Available",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/5f83fe12-0fae-40ef-a476-05daebd070e5",
    category: "buy"
  },
  {
    id: "b199540c-e0f1-4ebb-8d14-f9a77169c059",
    title: "Elegant Luxury Residence in Floreasca",
    displayPrice: "€575,000",
    priceNumeric: 575000,
    currency: "EUR",
    city: "Bucharest (Floreasca)",
    type: "Premium Apartment",
    surface: "160 sqm",
    rooms: "3 rooms",
    description: "Generous residence in the heart of Floreasca with high-specification finishes, optimized floor plan, and walking proximity to lakeside parks and fine dining.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8d04aec0-b6e7-4adb-9380-a061eef6da44.jpg",
    status: "Available",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/b199540c-e0f1-4ebb-8d14-f9a77169c059",
    category: "buy"
  },
  {
    id: "a638f3a4-25a6-4f75-9074-b8a30f4fa279",
    title: "Development Land Parcel 12.5 ha with Approved Masterplan",
    displayPrice: "€1,650,000",
    priceNumeric: 1650000,
    currency: "EUR",
    city: "Călărași",
    type: "Investment Land",
    surface: "125,000 sqm",
    rooms: "Development Parcel",
    description: "Strategic investment parcel with approved zonal urban development plan (PUZ), direct access to major transit arteries, and utility connections available at the boundary.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7f9378ec-4b26-457f-99c8-fbd3d501da35.PNG",
    status: "Investment Opportunity",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/a638f3a4-25a6-4f75-9074-b8a30f4fa279",
    category: "buy"
  },
  {
    id: "e95e842f-a588-4cfe-ac61-8f5d84437d46",
    title: "Strategic Logistics Land 29.5+ ha with A1 Motorway Frontage",
    displayPrice: "€5,900,000",
    priceNumeric: 5900000,
    currency: "EUR",
    city: "A1 Motorway (km 20 Bucharest)",
    type: "Strategic Logistics Land",
    surface: "295,000 sqm",
    rooms: "Logistics Land",
    description: "Large-scale institutional logistics parcel with over 500 linear meters of direct frontage along the A1 highway, ideal for industrial or distribution hub development.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fcebffcd-c9aa-4542-9322-f87438e83eda.PNG",
    status: "Investment Opportunity",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/e95e842f-a588-4cfe-ac61-8f5d84437d46",
    category: "buy"
  },
  {
    id: "a40201f6-9046-40b2-b688-be6cb801f6fc",
    title: "Contemporary Luxury Villa in Marbella",
    displayPrice: "€4,995,000",
    priceNumeric: 4995000,
    currency: "EUR",
    city: "Marbella, Costa del Sol, Spain",
    type: "Mediterranean Villa",
    surface: "504 sqm",
    rooms: "5 bedrooms",
    description: "Contemporary villa with private swimming pool, landscaped Mediterranean gardens, southern exposure, and leading architectural specifications in prime Marbella.",
    image: "https://tet.ro/storage/properties/1235872/img-1235872-0.webp",
    status: "Available",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/a40201f6-9046-40b2-b688-be6cb801f6fc",
    category: "buy"
  },
  {
    id: "a79cb6ed-718a-4ab1-b002-71656ee7c74d",
    title: "Palm Jumeirah 4BR Garden Villa",
    displayPrice: "Price on Request",
    priceNumeric: 0,
    currency: "AED / EUR",
    city: "Palm Jumeirah, Dubai, UAE",
    type: "Private Beachfront Villa",
    surface: "",
    rooms: "4 bedrooms",
    description: "Fully modernized and furnished private residence on iconic Palm Jumeirah, featuring secluded privacy, generous private swimming pool, and direct beach frontage.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8f25c135-f89f-4f22-a8a8-38762e09825b.JPG",
    status: "Price on Request",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/a79cb6ed-718a-4ab1-b002-71656ee7c74d",
    category: "buy"
  }
];

export const homefindRentProperties: HomeFindListingItem[] = [
  {
    id: "fbbb75d8-7210-4e83-9288-35a9a004c015",
    title: "Exclusive Residence in Herăstrău",
    displayPrice: "€5,000 / month",
    priceNumeric: 5000,
    currency: "EUR",
    period: "month",
    city: "Bucharest (Herăstrău)",
    type: "Luxury Apartment",
    surface: "163 sqm",
    rooms: "4 rooms",
    description: "Exceptional residence situated adjacent to Herăstrău Park, featuring premium finishes, expansive terrace, and 24/7 building security.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/67fa74f5-928f-4266-b333-d8557d1048ed.jpg",
    status: "Available for Lease",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/fbbb75d8-7210-4e83-9288-35a9a004c015",
    category: "rent"
  },
  {
    id: "b55c2026-bab2-4cd9-9a54-1e249199a174",
    title: "Detached Executive Residence in Pipera",
    displayPrice: "€4,500 / month",
    priceNumeric: 4500,
    currency: "EUR",
    period: "month",
    city: "Voluntari (Pipera)",
    type: "Detached Villa",
    surface: "582 sqm",
    rooms: "7 rooms",
    description: "Expansive 7-room villa with mature landscaped garden, underground parking garage, and grand reception spaces, ideal for diplomatic or corporate executive residence.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d64c556d-bee6-4081-8254-1dba2a8d8ce7.jpg",
    status: "Available for Lease",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/b55c2026-bab2-4cd9-9a54-1e249199a174",
    category: "rent"
  },
  {
    id: "ccf08f49-b9e0-40e1-bb18-6a5d007348d7",
    title: "7-Room Urban Villa in Floreasca",
    displayPrice: "€3,100 / month",
    priceNumeric: 3100,
    currency: "EUR",
    period: "month",
    city: "Bucharest (Floreasca)",
    type: "Urban Villa",
    surface: "240 sqm",
    rooms: "7 rooms",
    description: "Versatile property positioned in sought-after central Floreasca, suitable as an executive private home or a discreet family office / boutique advisory bureau.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a1ca89d7-1fd5-46ba-9e95-9b20fc88a2c0.jpg",
    status: "Available for Lease",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/ccf08f49-b9e0-40e1-bb18-6a5d007348d7",
    category: "rent"
  },
  {
    id: "98ac6115-9bd7-4377-8254-24c8cd40e4f3",
    title: "Contemporary Villa on Erou Iancu Nicolae",
    displayPrice: "€2,700 / month",
    priceNumeric: 2700,
    currency: "EUR",
    period: "month",
    city: "Voluntari (Iancu Nicolae)",
    type: "Contemporary Villa",
    surface: "243 sqm",
    rooms: "5 rooms",
    description: "Modern residence with 1,000 sqm private grounds, family-optimized layout, and immediate proximity to Cambridge School and the American International School.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/25224d9a-c2e4-4d86-95e4-cf1cc35f5365.JPG",
    status: "Available for Lease",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/98ac6115-9bd7-4377-8254-24c8cd40e4f3",
    category: "rent"
  },
  {
    id: "8021ba60-747c-41ae-9d35-ca1af206fd6c",
    title: "Historic Villa in Cotroceni near National Opera",
    displayPrice: "€2,000 / month",
    priceNumeric: 2000,
    currency: "EUR",
    period: "month",
    city: "Bucharest (Cotroceni)",
    type: "Historic Villa",
    surface: "140 sqm",
    rooms: "4 rooms",
    description: "Prestigious setting in historic Cotroceni, steps from the botanical park and National Opera, featuring classic architectural nobility and quiet seclusion.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/43d4c8df-470f-4d82-9734-0b9f309696ea.jpg",
    status: "Available for Lease",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/8021ba60-747c-41ae-9d35-ca1af206fd6c",
    category: "rent"
  },
  {
    id: "b144acf9-0085-42a0-bc1d-02d8eb2a7d96",
    title: "Premium Apartment near US Embassy",
    displayPrice: "€1,700 / month",
    priceNumeric: 1700,
    currency: "EUR",
    period: "month",
    city: "Bucharest (Northern District)",
    type: "Residential Apartment",
    surface: "180 sqm",
    rooms: "3 rooms",
    description: "Modern residence fully furnished and equipped to elevated standards, dedicated underground parking bay, and continuous security in prime residential Băneasa.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/92604920-51b5-476c-bb3e-8383891cf74b.jpg",
    status: "Available for Lease",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/b144acf9-0085-42a0-bc1d-02d8eb2a7d96",
    category: "rent"
  },
  {
    id: "6609b3f1-cb7d-4c91-a12d-d69af25d58fc",
    title: "Refined Residence | The Ivy Băneasa",
    displayPrice: "€1,450 / month",
    priceNumeric: 1450,
    currency: "EUR",
    period: "month",
    city: "Bucharest (Băneasa)",
    type: "Modern Apartment",
    surface: "100.6 sqm",
    rooms: "3 rooms",
    description: "Certified energy-efficient luxury development, designated underground parking, panoramic terrace, and swift connectivity to airport corridors and Pipera business hubs.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a28bdb10-5c30-4312-98fc-83aab71e9055.jpg",
    status: "Available for Lease",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/6609b3f1-cb7d-4c91-a12d-d69af25d58fc",
    category: "rent"
  },
  {
    id: "fe463726-74f7-408d-9adb-79cd2f03ceb6",
    title: "Private Garden Apartment in Herăstrău",
    displayPrice: "€1,300 / month",
    priceNumeric: 1300,
    currency: "EUR",
    period: "month",
    city: "Bucharest (Herăstrău)",
    type: "Garden Apartment",
    surface: "105 sqm",
    rooms: "3 rooms",
    description: "Rare residence with private outdoor garden in one of the capital's finest neighborhoods, balancing urban lifestyle with tranquil green seclusion.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6cea493c-97df-429b-887a-84b0608206c0.jpg",
    status: "Available for Lease",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/fe463726-74f7-408d-9adb-79cd2f03ceb6",
    category: "rent"
  }
];
