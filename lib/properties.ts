export interface PropertySpec {
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
  status: "Available" | "Private Deal" | "Acquired" | "Under Development" | "Custom Order";
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

export const selectedProperties: Property[] = [
  {
    "id": "prop-plevnei",
    "slug": "plevnei-signature-rooftop-penthouse",
    "title": "Signature Penthouse with 220 sqm Panoramic Terrace",
    "subtitle": "114.13 sqm Usable · 220 sqm Terrace · 12 sqm Balcony · Floor 5/5",
    "location": "Calea Plevnei, Sector 1 / Central Diplomatic Corridor, Bucharest",
    "city": "Bucharest",
    "country": "Romania",
    "price": "€468,000",
    "priceNumeric": 468000,
    "currency": "EUR",
    "type": "Penthouse / Rooftop Residence",
    "category": "penthouse",
    "area": "114.13 sqm usable (372 sqm footprint)",
    "usableArea": "114.13 sqm",
    "plotArea": "220 sqm terrace",
    "bedrooms": 3,
    "bathrooms": 2,
    "rooms": "4 Rooms (3 Bedrooms, Grand Living, 2 Bathrooms, Enclosed Kitchen)",
    "status": "Available",
    "description": "Occupying the entire top floor of a modern residential structure completed in 2014, this penthouse offers an exceptional balance of complete privacy, open cardinal exposure, and an expansive 220 sqm landscaped terrace suited for outdoor executive salons, wellness facilities, and suspended gardens.",
    "advisoryPerspective": "High capital preservation resilience driven by the extreme rarity of rooftop terraces exceeding 200 sqm in Bucharest's central urban core.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e9bc0fbc-b578-4696-9581-8c64e562be2d.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e9bc0fbc-b578-4696-9581-8c64e562be2d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e1d41d57-5410-4f50-8551-4894c0dd5862.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/768c9edd-3b9d-441f-bd0e-a0ad543fae53.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fe360a6d-7be7-4354-8f5a-7cc8acff49cb.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4de82bf2-fb55-4c29-b600-fc1f0688e7dd.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/abf44246-6b6c-46c0-9066-f11f8c40c86c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7875dbaf-dc1f-4646-a2cf-a775512b893c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/65bf7044-1ef1-4aff-807a-e99f5978fbd1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1e548431-2de8-41b3-b0da-98da2587d779.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c5698feb-c747-414e-afda-230d6f2cefcd.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/38c67d72-3bbb-4c99-b2a1-91541bae0a10.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/093b72fe-c654-48e2-b40e-f72caea01c66.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/090c3ee1-8c42-43a4-87c0-eb44bee7ca61.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/017abd29-36d2-43de-b873-8f9e22d6d5ac.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bd195bf8-bc56-49e9-9218-c86a322a3e02.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/88b72e51-d13b-4ec5-a692-03011ec884ad.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/579cc1ed-af7b-4a3b-90bc-90402bfdeea0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cd29835e-1e60-4b3b-adb0-47e0fa0abc53.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/82e6d148-7dff-4250-afe5-0ef114a67a61.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d5f1bf13-ac2b-4379-879d-908dd5f688e2.jpg"
    ],
    "specs": [
      {
        "label": "Usable Interior Area",
        "value": "114.13 sqm"
      },
      {
        "label": "Panoramic Terrace",
        "value": "220.00 sqm"
      },
      {
        "label": "Additional Balcony",
        "value": "12.00 sqm"
      },
      {
        "label": "Gross Built Footprint",
        "value": "372.00 sqm"
      },
      {
        "label": "Floor Level",
        "value": "5 of 5 (Setback Penthouse)"
      },
      {
        "label": "Year Completed",
        "value": "2014"
      },
      {
        "label": "Floorplan Division",
        "value": "Detached / Flow-Through"
      },
      {
        "label": "Climate Infrastructure",
        "value": "Autonomous Heating & Central A/C"
      }
    ],
    "features": [
      "220 sqm wraparound rooftop terrace with unobstructed 360° skyline vistas",
      "Reinforced concrete structural frame with premium stone and glass finishes",
      "Fully segregated chef's kitchen and two naturally ventilated full bathrooms",
      "Boutique low-density building with biometric security access",
      "Direct transit arterial to Victoriei Square, Cotroceni Palace, and CBD hub"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/e84b2a27-f04d-4273-821b-9f33b88200d9",
    "sourceName": "HomeFind × CristianVaduva.com",
    "sourcePlatform": "HomeFind",
    "isFeatured": true
  },
  {
    "id": "prop-pipera-villas",
    "slug": "pipera-architectural-villas-enclave",
    "title": "Pipera Modern Architectural Villas Residential Enclave",
    "subtitle": "36 Modern Villas (G+2) · 135–162 sqm Usable · Private Grounds · 2 Parking Bays",
    "location": "Pipera – Voluntari Residential Axis, Northern Metropolitan Belt",
    "city": "Bucharest / Pipera",
    "country": "Romania",
    "price": "Price upon qualified inquiry",
    "currency": "EUR",
    "type": "Modern Architectural Villas / Residential Development",
    "category": "development",
    "area": "135 – 162 sqm usable interior per residence",
    "usableArea": "135 - 162 sqm",
    "bedrooms": 4,
    "bathrooms": 4,
    "rooms": "5 Rooms (4 Bedrooms + Open-Plan Living & Dining)",
    "status": "Available",
    "description": "A private masterplanned community comprising 14 Type 1 residences and 22 Type 2 residences across G+2 floors. Designed for executive families prioritizing generous spatial proportions, paved access avenues, comprehensive municipal utility connections, and direct proximity to Northern Bucharest's elite international academies.",
    "advisoryPerspective": "High-absorption micro-location driven by constant diplomatic and multinational executive demand, guaranteeing steady rental yields and superior asset liquidity.",
    "heroImage": "https://aixluxury.com/images/1200/20072264/IMG_3198-9rnbK-WAlMNqhs2asw_-MA.jpg",
    "galleryImages": [
      "https://aixluxury.com/images/1200/20072264/IMG_3198-9rnbK-WAlMNqhs2asw_-MA.jpg",
      "https://aixluxury.com/images/1200/20072258/IMG_3200-x18fsRYLhcLpGi21Jr9ibQ.jpg",
      "https://aixluxury.com/images/1200/20072270/IMG_3187-mXbxRzGzdeMtUQ2M2Ih09g.jpg",
      "https://aixluxury.com/images/1200/20072273/IMG_3185-STf6jA_rDRwoKPmPLmEvnQ.jpg",
      "https://aixluxury.com/images/1200/20072243/IMG_3212-RGF4nqVb1hxIyO0l6U4ybw.jpg"
    ],
    "specs": [
      {
        "label": "Total Community Inventory",
        "value": "36 Villas (14 Type 1 + 22 Type 2)"
      },
      {
        "label": "Elevation Profile",
        "value": "Ground + 2 Upper Floors (G+2)"
      },
      {
        "label": "Usable Internal Areas",
        "value": "135 sqm – 162 sqm"
      },
      {
        "label": "Private Parking",
        "value": "2 Designated Bays per Villa"
      },
      {
        "label": "External Grounds",
        "value": "Private Landscaped Rear Garden"
      },
      {
        "label": "Utility Connections",
        "value": "Municipal Water, Sewer, Gas, Fiber"
      }
    ],
    "features": [
      "Two dedicated on-site parking bays integrated within each residential boundary",
      "Individual private garden courtyards engineered for acoustic and visual discretion",
      "High thermal envelope efficiency with triple-glazed minimalist joinery",
      "Secure gated access control along wide paved residential roads",
      "Immediate transit access to Cambridge School, American International School, and BSB"
    ],
    "sourceUrl": "https://aixluxury.com/pipera-homes",
    "sourceName": "AiXLuxury × HomeFind Developments Hub",
    "sourcePlatform": "AiXLuxury",
    "isFeatured": true
  },
  {
    "id": "prop-royal-mansion",
    "slug": "royal-protocol-mansion-private-estate",
    "title": "The Royal Protocol Mansion & Private Sovereign Estate",
    "subtitle": "3,050 sqm Private Grounds · 783 sqm Built Footprint · 16 Grand Rooms · 3-SUV Garage",
    "location": "Northern Prime Diplomatic Enclave, Bucharest Metropolitan Area",
    "city": "Bucharest",
    "country": "Romania",
    "price": "Price upon confidential inquiry",
    "currency": "EUR",
    "type": "Sovereign Estate / Protocol Mansion",
    "category": "villa",
    "area": "783 sqm built footprint · 3,050 sqm private parkland",
    "usableArea": "783 sqm",
    "plotArea": "3,050 sqm",
    "bedrooms": 8,
    "bathrooms": 6,
    "rooms": "16 Rooms (Grand Reception Hall, Formal Salons, Master Wings)",
    "status": "Private Deal",
    "description": "A monumental neoclassical residence designed for diplomatic representation, family office headquarters, or multi-generational private living. The estate features 3,050 sqm of mature landscaped parkland, high-volume ceremonial salons, an enclosed 3-SUV vehicle salon, and advanced perimeter security infrastructure.",
    "advisoryPerspective": "A legacy trophy asset offering structural inflation defense, tailored for confidential off-market disposition under strict unilateral fiduciary representation.",
    "heroImage": "/images/architecture/executive-study.jpg",
    "galleryImages": [
      "/images/architecture/executive-study.jpg",
      "/images/architecture/hero-monument.jpg",
      "/images/architecture/monaco-cliffside.jpg"
    ],
    "specs": [
      {
        "label": "Private Land Area",
        "value": "3,050.00 sqm"
      },
      {
        "label": "Gross Built Area",
        "value": "783.00 sqm"
      },
      {
        "label": "Room Count",
        "value": "16 High-Volume Chambers"
      },
      {
        "label": "Integrated Garage",
        "value": "Capacity for 3 Full-Size SUVs"
      },
      {
        "label": "Surveillance Architecture",
        "value": "Dedicated Operations & Security Room"
      },
      {
        "label": "Transaction Protocol",
        "value": "Private Placement / Single-Client NDA"
      }
    ],
    "features": [
      "Private grounds with mature specimen trees and architectural lighting axes",
      "Reception salons featuring monumental ceiling heights and carved natural stone",
      "Integrated Building Management System (BMS) with redundant generator backups",
      "Segregated staff wing with dedicated security and service access corridors",
      "Corporate holding entity structure optimized for tax neutrality and swift transfer"
    ],
    "sourceUrl": "https://cristianvaduva.com",
    "sourceName": "CristianVaduva.com Sovereign Portfolio",
    "sourcePlatform": "CristianVaduva.com",
    "isFeatured": true
  },
  {
    "id": "prop-schei-brasov",
    "slug": "historic-schei-brasov-villa-terrace",
    "title": "Historic Schei Villa Apartment with 30 sqm Panoramic Terrace",
    "subtitle": "3 Rooms · 30 sqm Terrace · Direct Mount Tâmpa & Historic Center Vistas",
    "location": "Schei Historic Heritage Quarter, Brașov, Foot of Mount Tâmpa",
    "city": "Brașov",
    "country": "Romania",
    "price": "Price upon qualified inquiry",
    "currency": "EUR",
    "type": "Historic Heritage Residence / Restored Villa",
    "category": "penthouse",
    "area": "3 Rooms · 30 sqm private terrace",
    "usableArea": "105 sqm",
    "plotArea": "30 sqm terrace",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "3 Rooms (2 Bedrooms, Grand Living, Bathroom, Kitchen)",
    "status": "Available",
    "description": "Positioned on the first floor of an aristocratic interwar villa within Brașov's protected Schei heritage district. This residence unites preserved neoclassical architecture with contemporary comforts and an extraordinary 30 sqm terrace overlooking Mount Tâmpa and the medieval town towers.",
    "advisoryPerspective": "Strict historic zoning protections prohibit new residential permits in Schei, cementing supply scarcity and long-term capital appreciation.",
    "heroImage": "https://cristianvaduva.com/wp-content/uploads/2024/01/c436e74f-28b3-4f1d-bcf3-ce9f05b2aa04-1024x768.jpg",
    "galleryImages": [
      "https://cristianvaduva.com/wp-content/uploads/2024/01/c436e74f-28b3-4f1d-bcf3-ce9f05b2aa04-1024x768.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/9fb0d43c-76b3-4b44-a38e-94134491beae-1024x768.jpg"
    ],
    "specs": [
      {
        "label": "Property Type",
        "value": "First Floor in Restored Historic Villa"
      },
      {
        "label": "Room Count",
        "value": "3 Detached Living Chambers"
      },
      {
        "label": "Private Terrace",
        "value": "30 sqm with Mount Tâmpa Exposure"
      },
      {
        "label": "Architectural Style",
        "value": "Restored Neoclassical Interwar"
      },
      {
        "label": "Optimal Purpose",
        "value": "Private Mountain Residence / Trophy Retreat"
      }
    ],
    "features": [
      "30 sqm panoramic terrace with southwest solar orientation toward Mount Tâmpa",
      "Noble ceiling heights with restored artisanal wooden floors and joinery",
      "Private off-street vehicle parking within a gated courtyard",
      "Tranquil historic street setting a short 5-minute walk from Council Square"
    ],
    "sourceUrl": "https://cristianvaduva.com",
    "sourceName": "CristianVaduva.com Heritage Curation",
    "sourcePlatform": "CristianVaduva.com",
    "isFeatured": false
  },
  {
    "id": "prop-monaco-coast",
    "slug": "travertine-cliffside-pavilion-monaco-cap-dail",
    "title": "Travertine Cliffside Pavilion — Cap d’Ail / Monaco Sovereign Border",
    "subtitle": "480 sqm Living · 1,400 sqm Cliffside Grounds · Cantilevered Infinity Pool",
    "location": "Cap d'Ail / Principality of Monaco Sovereign Border",
    "city": "Cap d'Ail / Monaco Border",
    "country": "Monaco / France",
    "price": "Price upon confidential inquiry",
    "currency": "EUR",
    "type": "Ultra-Luxury Villa / Mediterranean Cliffside Estate",
    "category": "international",
    "area": "480 sqm usable living · 1,400 sqm landscaped grounds",
    "usableArea": "480 sqm",
    "plotArea": "1,400 sqm",
    "bedrooms": 6,
    "bathrooms": 6,
    "rooms": "6 Master Suites · Formal Entertaining Salons",
    "status": "Private Deal",
    "description": "A sculptural architectural achievement in honed travertine and structural glass commanding open panoramas over the Mediterranean Sea. The mandate involved cross-border zoning due diligence, corporate vehicle tax optimization, and direct principal-to-principal negotiations under a Swiss non-disclosure covenant.",
    "advisoryPerspective": "The most liquid ultra-prime enclave along the French Riviera, positioned moments from Port Hercule and the Golden Square of Monaco.",
    "heroImage": "/images/architecture/monaco-cliffside.jpg",
    "galleryImages": [
      "/images/architecture/monaco-cliffside.jpg",
      "/images/architecture/hero-monument.jpg"
    ],
    "specs": [
      {
        "label": "Geographic Axis",
        "value": "Monaco – Cap d'Ail Coastal Corridor"
      },
      {
        "label": "Internal Living Footprint",
        "value": "480.00 sqm"
      },
      {
        "label": "Landscaped Grounds",
        "value": "1,400.00 sqm Tiered Mediterranean Terraces"
      },
      {
        "label": "Bedroom Accommodations",
        "value": "6 Master Suites with En-Suite Marble Baths"
      },
      {
        "label": "Secured Vehicle Salon",
        "value": "Subterranean Garage for 4 Vehicles"
      }
    ],
    "features": [
      "Cantilevered infinity pool suspended directly over the Mediterranean rock face",
      "Honed travertine finishes with ultra-slim Schuco structural glass systems",
      "Biometric access control architecture with private safe room deployment",
      "Direct private descent path to the coastal promenade and shoreline"
    ],
    "sourceUrl": "https://www.aixluxury.com",
    "sourceName": "AiXLuxury Monaco Desk",
    "sourcePlatform": "AiXLuxury",
    "isFeatured": true
  },
  {
    "id": "prop-nautical-home",
    "slug": "nautical-home-11-floating-residence",
    "title": "NAUTICAL HOME 11 — Autonomous Marine Waterfront Residence",
    "subtitle": "11m Length · 3.7m Beam · >50 sqm Usable Living · Rooftop Sun Deck",
    "location": "Yacht Marina / Danube Delta / Coastal Archipelagos & Lakes",
    "city": "Constanța / Coastal Marina",
    "country": "Romania / International Marine",
    "price": "€74,000 + VAT (Base Model Configuration)",
    "priceNumeric": 74000,
    "currency": "EUR",
    "type": "Floating Marine Residence / Houseyacht",
    "category": "marine",
    "area": ">50 sqm usable interior + upper observation deck",
    "usableArea": "52 sqm",
    "bedrooms": 2,
    "bathrooms": 1,
    "rooms": "Living Lounge, Master Stateroom, Galley, Bathroom, Rooftop Sun Deck",
    "status": "Custom Order",
    "description": "A floating marine villa engineered in full compliance with modern naval CE standards for four-season autonomous living, maritime leisure, or boutique hospitality deployment. Constructed on marine galvanized steel framing with unsinkable high-density polyethylene pontoons with expanded polystyrene (EPS) cores.",
    "advisoryPerspective": "An innovative asset mobility concept free of conventional real estate land property taxes, generating superior yields in prime maritime hospitality.",
    "heroImage": "https://aixluxury.com/images/1200/19210911/70_AdrianBirgauan.ro-SDo9O-XQsR8shwKdX4fMlQ.jpg",
    "galleryImages": [
      "https://aixluxury.com/images/1200/19210911/70_AdrianBirgauan.ro-SDo9O-XQsR8shwKdX4fMlQ.jpg",
      "https://aixluxury.com/images/1200/19210909/75_AdrianBirgauan.ro-INnVOLC0oM9_Ai6GpFmsSQ.jpg",
      "https://aixluxury.com/images/1200/19210888/210_AdrianBirgauan.ro-HwO911K7ZPeNjme9PkIYOA.jpg",
      "https://aixluxury.com/images/1200/19210899/171_AdrianBirgauan.ro-hVObh7zG7w_Vo9P04coeWg.jpg",
      "https://aixluxury.com/images/1200/19210953/196_AdrianBirgauan.ro-pMAJeVN60F6zeqXTuYNQEg.jpg",
      "https://aixluxury.com/images/1200/19210951/200_AdrianBirgauan.ro-BZ5R3oiQCqJm_pZIRMOBGA.jpg",
      "https://aixluxury.com/images/1200/19210948/209_AdrianBirgauan.ro-8gX95qP98zvZP6ivv7RY7Q.jpg",
      "https://aixluxury.com/images/1200/19210942/220_AdrianBirgauan.ro-WsTEX2OwePUmUYpVSL03Zg.jpg",
      "https://aixluxury.com/images/1200/19210929/231_AdrianBirgauan.ro-3wicThyxMpNdFqk5fhKbCw.jpg",
      "https://aixluxury.com/images/1200/19210932/230_AdrianBirgauan.ro-c29hmKBrHC6ctPsdKKU4xA.jpg",
      "https://aixluxury.com/images/1200/19210934/228_AdrianBirgauan.ro-BHtsOBOLJWawlbS_HAdnXw.jpg",
      "https://aixluxury.com/images/1200/19210936/227_AdrianBirgauan.ro-_GrJM6CQF-lL23PPqrKcCg.jpg",
      "https://aixluxury.com/images/1200/19210939/224_AdrianBirgauan.ro-hVaX8Ggr08ZC6rbSjCor5w.jpg",
      "https://aixluxury.com/images/1200/19210926/234_AdrianBirgauan.ro-GrHxL5iqEhd76NnFXRtSGA.jpg",
      "https://aixluxury.com/images/1200/19210924/235_AdrianBirgauan.ro--StdHSfUD5_2GCrbm2ij3w.jpg",
      "https://aixluxury.com/images/1200/19210906/57_AdrianBirgauan.ro-vD3BspONYyJiIL1NSdFVww.jpg",
      "https://aixluxury.com/images/1200/19210905/94_AdrianBirgauan.ro-_E0HLw0kREOdXiN8rtPzkQ.jpg",
      "https://aixluxury.com/images/1200/19210902/146_AdrianBirgauan.ro-oKecipxTpX77T6-VBxfD6A.jpg",
      "https://aixluxury.com/images/1200/19210897/139_AdrianBirgauan.ro-meiuvTXjWUoqSn7tEl226w.jpg",
      "https://aixluxury.com/images/1200/19210896/15_AdrianBirgauan.ro-mpDLjxBfiy0ZCD0O2smyiw.jpg",
      "https://aixluxury.com/images/1200/19210894/19_AdrianBirgauan.ro-BwOTK8opMK4beYWOjyDBNw.jpg",
      "https://aixluxury.com/images/1200/19210893/189_AdrianBirgauan.ro-kuoUOEhzBqcyAg3SfVgp6g.jpg",
      "https://aixluxury.com/images/1200/19210890/175_AdrianBirgauan.ro-JERcgftRMZgMoukjfCT7UQ.jpg"
    ],
    "specs": [
      {
        "label": "Length Overall (LOA)",
        "value": "11.00 m (36.1 ft)"
      },
      {
        "label": "Beam Overall",
        "value": "3.70 m (12.1 ft)"
      },
      {
        "label": "Usable Living Space",
        "value": "> 50.00 sqm (incl. rooftop deck)"
      },
      {
        "label": "Guest Capacity",
        "value": "2 – 6 Persons"
      },
      {
        "label": "Freshwater Capacity",
        "value": "400 Liters"
      },
      {
        "label": "Blackwater Tank",
        "value": "400 Liters with Integrated Sensors"
      },
      {
        "label": "Power Grid",
        "value": "220V / 12V Grid + Deep-Cycle Battery Bank"
      },
      {
        "label": "Propulsion Option",
        "value": "Outboard Combustion or Electric Pod Engine"
      }
    ],
    "features": [
      "High-efficiency thermal insulation package engineered for all four climatic seasons",
      "HDPE marine pontoons with unsinkable high-buoyancy EPS inner cores",
      "Full-beam panoramic rooftop deck configured for lounging and observation",
      "Fully integrated helm console equipped for navigational ease",
      "Turnkey delivery with designer furnishings and galley equipment ready for launch"
    ],
    "sourceUrl": "https://aixluxury.com/nautical-home",
    "sourceName": "AiXLuxury Maritime Desk",
    "sourcePlatform": "AiXLuxury",
    "isFeatured": true
  },
  {
    "id": "prop-miami-villa",
    "slug": "miami-waterfront-architectural-villa",
    "title": "Miami Prime Waterfront Architectural Villa & Private Dock",
    "subtitle": "Direct Deep-Water Mooring · Tropical Modernist Architecture · Biscayne Corridor",
    "location": "Venetian Islands / Biscayne Bay Coastal Corridor, Miami, Florida",
    "city": "Miami",
    "country": "United States",
    "price": "Price upon qualified inquiry",
    "currency": "USD",
    "type": "Ultra-Prime Waterfront Villa",
    "category": "international",
    "area": "620 sqm usable living · 1,150 sqm waterfront plot",
    "usableArea": "620 sqm",
    "plotArea": "1,150 sqm",
    "bedrooms": 6,
    "bathrooms": 7,
    "rooms": "6 En-Suite Bedrooms · Double-Height Great Room · Private Yacht Mooring",
    "status": "Private Deal",
    "description": "An extraordinary tropical modernist waterfront estate designed to maximize indoor-outdoor living along Miami's premier coastal corridor. Featuring floor-to-ceiling hurricane-rated structural glass, a deep-water yacht slip with direct bay access and no fixed bridges, custom European millwork, and cantilevered sunset entertaining decks.",
    "advisoryPerspective": "Florida's zero state income tax framework combined with institutional international capital flight continues to drive robust equity appreciation in Miami waterfront assets.",
    "heroImage": "https://aixluxury.com/images/1200/26095859/10168a2d-8080-4fac-bb91-207153dc2514-cMGtUpcYTEpBmnW-bQE1ng.jpg",
    "galleryImages": [
      "https://aixluxury.com/images/1200/26095859/10168a2d-8080-4fac-bb91-207153dc2514-cMGtUpcYTEpBmnW-bQE1ng.jpg",
      "https://aixluxury.com/images/1200/26095853/b95d4171-e7b2-42d5-b14b-ec8804559ada-XzxBh1WajxgB5PArwQwdXQ.jpg",
      "https://aixluxury.com/images/1200/26095855/a2823952-e946-44f8-8d4c-75a12bf80093-j5D5fwOvYAUoS2aBrYd9tg.jpg",
      "https://aixluxury.com/images/1200/26095856/92027a5a-f8b7-4cd5-b75a-dbc6f9553aa9-tS28PKpMNNaCsuyJ62bZOg.jpg",
      "https://aixluxury.com/images/1200/26095857/23257c89-2959-4c51-a347-6bd38abe40da-nE8UmZx4qML8zpspXJLxUg.jpg",
      "https://aixluxury.com/images/1200/26095864/178b81fe-e5e6-4e25-8254-718f5ba64a7a-0mhbGDKfEkvZceZkFEOv_A.jpg",
      "https://aixluxury.com/images/1200/26095862/3327bd04-11f8-4be6-9339-7f4def9cba45-E-I3oWm--Ouo5vwTHLDI6A.jpg",
      "https://aixluxury.com/images/1200/20071453/216618316_WxH-bRL6ljElxwQmvLwe1kJLrQ.jpg",
      "https://aixluxury.com/images/1200/20071450/216618317_WxH-Vk6x0JoK_LImS_zRmqUOjg.jpg",
      "https://aixluxury.com/images/1200/20071449/216618318_WxH-lXHxrUUDadroPxFq5GgpeA.jpg",
      "https://aixluxury.com/images/1200/20071447/216618319_WxH--wLF6zcT0B8IX1NsNxsDPw.jpg",
      "https://aixluxury.com/images/1200/20071444/216618320_WxH-9R9w0709963Ao5BdTk5B_Q.jpg",
      "https://aixluxury.com/images/1200/20071441/216618321_WxH-OEGuNjOUapfuOuxXYnjBRQ.jpg",
      "https://aixluxury.com/images/1200/20071422/IMG_1886-PaleLLFSqQY359RBAh-_Xw.JPEG",
      "https://aixluxury.com/images/1200/20071435/216618323_WxH-rTArmuguzzbaR4mdj_WphQ.jpg"
    ],
    "specs": [
      {
        "label": "Waterfront Exposure",
        "value": "Direct Bay Frontage with Private Dock"
      },
      {
        "label": "Living Footprint",
        "value": "620.00 sqm (6,670 sqft)"
      },
      {
        "label": "Yacht Mooring",
        "value": "Deep-Water Slip (No Fixed Bridges to Ocean)"
      },
      {
        "label": "Climatic Shielding",
        "value": "Class 5 Hurricane Impact Structural Glazing"
      },
      {
        "label": "Outdoor Facilities",
        "value": "Heated Saltwater Infinity Pool & Summer Kitchen"
      }
    ],
    "features": [
      "Direct deep-water private dock engineered for motor yachts up to 80 feet",
      "Expansive cantilevered master suite terrace with panoramic open-bay skyline views",
      "Chef's presentation kitchen with secondary back-of-house prep scullery",
      "Gated perimeter with smart biometric surveillance and multi-zone climate control"
    ],
    "sourceUrl": "https://aixluxury.com/miami-villa",
    "sourceName": "AiXLuxury Miami Desk",
    "sourcePlatform": "AiXLuxury",
    "isFeatured": true
  },
  {
    "id": "prop-dubai-brabus",
    "slug": "brabus-island-waterfront-residences",
    "title": "BRABUS Island & Signature Waterfront Sky Mansions",
    "subtitle": "Branded Waterfront Villas & Iconic Penthouses · Abu Dhabi / Dubai Corridor",
    "location": "Dubai Islands / Abu Dhabi Sovereign Coastal Belt, UAE",
    "city": "Dubai / Abu Dhabi",
    "country": "United Arab Emirates",
    "price": "€1,400,000 to €15,000,000 (Developer Allocation)",
    "priceNumeric": 1400000,
    "currency": "EUR",
    "type": "Ultra-Prime Waterfront / Branded Residences",
    "category": "international",
    "area": "450 – 1,200 sqm usable floorplates",
    "usableArea": "450 - 1200 sqm",
    "bedrooms": 5,
    "bathrooms": 6,
    "rooms": "4 – 7 Bedrooms + Private Yacht Moorings",
    "status": "Under Development",
    "description": "An internationally landmarked project rising along the sovereign waterfront. Information represents confirmed developer-announced specifications. Features direct private yacht mooring slips, bespoke BRABUS Design interiors, and exclusive UHNW lifestyle amenities.",
    "advisoryPerspective": "Strategic capital deployment into a tax-neutral UAE jurisdiction, offering quantified appreciation and priority pre-launch allocation for qualified institutional buyers.",
    "heroImage": "https://aixluxury.com/images/1200/15989625/IMG_2275-cQjkd9YZWlVJ-GTPyrV0fg.jpg",
    "galleryImages": [
      "https://aixluxury.com/images/1200/15989625/IMG_2275-cQjkd9YZWlVJ-GTPyrV0fg.jpg",
      "https://aixluxury.com/images/1200/15989621/IMG_2277-Vx5VPGyZqk1MH2mq6NFmpg.jpg",
      "https://aixluxury.com/images/1200/15989612/IMG_2280--W2Quf0nxKORpZP2-s31Qw.jpg",
      "https://aixluxury.com/images/1200/15989600/IMG_2285-BMisitV2XyG7oFrrCcl7Mg.jpg",
      "https://aixluxury.com/images/1200/15989598/IMG_2286-_GGvqasuqz2XB0pVlG3U-A.jpg",
      "https://aixluxury.com/images/1200/15989595/IMG_2287-6wjNmqvOWxiXOH5VtOpm_A.jpg",
      "https://aixluxury.com/images/1200/15989592/IMG_2319-w4iTj4i_8m8T7-NEkHrGeg.jpg",
      "https://aixluxury.com/images/1200/15989586/IMG_2320-L5FRrT2h916651a-fmLPqg.jpg",
      "https://aixluxury.com/images/1200/15989583/IMG_2321-FyNKAipvYT9NL5pB1_7Z1A.jpg",
      "https://aixluxury.com/images/1200/15989582/IMG_2322-BLLxS59nfr34NHey65zjHg.jpg",
      "https://aixluxury.com/images/1200/15989580/IMG_2323-ucC5uFtz-9r3aVzHJalMiw.jpg"
    ],
    "specs": [
      {
        "label": "Fiscal Jurisdiction",
        "value": "Dubai / UAE (0% Personal Income & Capital Gains)"
      },
      {
        "label": "Unit Typologies",
        "value": "Waterfront Mansions & Sky Penthouses"
      },
      {
        "label": "Project Phase",
        "value": "Under Active Development (Developer Specs)"
      },
      {
        "label": "Maritime Amenities",
        "value": "Private Superyacht Berth Option"
      },
      {
        "label": "Branding Partnership",
        "value": "BRABUS Design Specifications"
      }
    ],
    "features": [
      "Official developer-announced project details — verified off-plan acquisition gateway",
      "Private shoreline with unobstructed panoramas of the Downtown skyline",
      "Eligibility for 10-Year UAE Golden Visa for principal and immediate family",
      "Independent fiduciary audit of the standard Sales and Purchase Agreement (SPA)"
    ],
    "sourceUrl": "https://aixluxury.com/brabus-island",
    "sourceName": "AiXLuxury Dubai & Abu Dhabi Desk",
    "sourcePlatform": "AiXLuxury",
    "isFeatured": true
  },
  {
    "id": "prop-h4l-village",
    "slug": "h4l-the-village-lakefront-enclave",
    "title": "H4L The Village — Sustainable Lakefront Residential Masterplan",
    "subtitle": "Eco-Engineered Villas & Townhomes · Northern Bucharest Lake Axis · Low Carbon Footprint",
    "location": "Northern Lake Belt, Pipera – Ștefăneștii de Jos Corridor, Bucharest",
    "city": "Bucharest North",
    "country": "Romania",
    "price": "Price upon qualified inquiry",
    "currency": "EUR",
    "type": "Lakefront Masterplanned Community / Eco-Residences",
    "category": "development",
    "area": "140 – 210 sqm usable floorplates",
    "usableArea": "140 - 210 sqm",
    "bedrooms": 4,
    "bathrooms": 3,
    "rooms": "4 – 5 Rooms · Private Courtyards · Direct Park & Water Access",
    "status": "Available",
    "description": "A forward-thinking residential village development prioritizing ecological design, expansive pedestrian green corridors, natural lake integration, and advanced nZEB (nearly Zero-Energy Building) standards with heat pumps, green roofs, and private gardens.",
    "advisoryPerspective": "Positioned directly in the path of Northern Bucharest's infrastructure expansion, offering sustainable living models with low maintenance overhead and resilient family-oriented rental demand.",
    "heroImage": "https://aixluxury.com/images/1200/26516834/SAM_1313-9PsOH3hewgGRLlUwOp_V-g.jpeg",
    "galleryImages": [
      "https://aixluxury.com/images/1200/26516834/SAM_1313-9PsOH3hewgGRLlUwOp_V-g.jpeg",
      "https://aixluxury.com/images/1200/26516831/SAM_1314-d22EwFHzT9Sxq77v3Fzyjw.jpeg",
      "https://aixluxury.com/images/1200/26516828/SAM_1315-jbYf-UVZfqQOFkmKavUGuA.jpeg",
      "https://aixluxury.com/images/1200/26516826/SAM_1318-gt8zOzrwaQe0jkyVKbF5hw.jpeg",
      "https://aixluxury.com/images/1200/26516824/SAM_1319-cDRwWvwke6zF_ayECURl4w.jpeg",
      "https://aixluxury.com/images/1200/26516823/SAM_1320-P0x_XcBube_35cp5DZejvg.jpeg",
      "https://aixluxury.com/images/1200/26516820/SAM_1321-FdvRnrQMAwWOV1aLAlM0LQ.jpeg",
      "https://aixluxury.com/images/1200/26516819/SAM_1322-atJUQgESvE6MKTXGX91xQQ.jpeg",
      "https://aixluxury.com/images/1200/26516817/SAM_1323-umqJzUBhl4Cgb0pgHcQhhw.jpeg",
      "https://aixluxury.com/images/1200/26516816/SAM_1329-AqltBAOFmN4QQge2BUjrwA.jpeg",
      "https://aixluxury.com/images/1200/26516810/SAM_1330-opuUKk5OayVXW0gfoTiPlw.jpeg",
      "https://aixluxury.com/images/1200/26516807/SAM_1331-qO9SUtkUyWWeEsYwuMjBQg.jpeg",
      "https://aixluxury.com/images/1200/26516804/SAM_1333-B5w5yVnQPkjchFbHp3mZ_A.jpeg",
      "https://aixluxury.com/images/1200/26516801/SAM_1334-oOW-uvlqvnDkSBiHttBsqA.jpeg",
      "https://aixluxury.com/images/1200/26516798/SAM_1335-qDxYxAdh6IiHb5-uOJe6TQ.jpeg",
      "https://aixluxury.com/images/1200/26516795/SAM_1336-xP5lJpLIc8SLjkkB7YaQ0g.jpeg",
      "https://aixluxury.com/images/1200/26516793/SAM_1337-yf77UmgLo1fFMI6XFnAElA.jpeg",
      "https://aixluxury.com/images/1200/26516790/SAM_1338-GMhwLlRaHf59EAF1MJdcaA.jpeg",
      "https://aixluxury.com/images/1200/26516789/SAM_1341-hK9PdGBd8Und58chxl82BQ.jpeg",
      "https://aixluxury.com/images/1200/26516786/SAM_1347-esn2E7Ptdigw7LC4qygqAw.jpeg"
    ],
    "specs": [
      {
        "label": "Energy Classification",
        "value": "nZEB Compliant (Low Carbon Architecture)"
      },
      {
        "label": "Typologies",
        "value": "Detached and Semi-Detached Garden Villas"
      },
      {
        "label": "Thermal Envelope",
        "value": "Geothermal Heat Pumps & Triple Glazing"
      },
      {
        "label": "Community Greenery",
        "value": "Over 60% Dedicated to Pedestrian Parks & Water"
      }
    ],
    "features": [
      "Direct boardwalk and recreational access to the natural northern lake system",
      "Underfloor radiant heating and integrated heat pump climate systems",
      "Private vehicle parking with dedicated EV charging preparation",
      "Gated community security infrastructure with integrated smart access"
    ],
    "sourceUrl": "https://aixluxury.com/h4l-village",
    "sourceName": "AiXLuxury Residential Enclaves",
    "sourcePlatform": "AiXLuxury",
    "isFeatured": false
  },
  {
    "id": "prop-concept-project",
    "slug": "concept-architectural-monolith-residence",
    "title": "The Monolith Pavilion — Architectural Concept Residence",
    "subtitle": "Brutalist Travertine Volumes · Infinity Water Mirrors · High-Security Compound",
    "location": "Northern Prime Axis, Bucharest Metropolitan Area",
    "city": "Bucharest",
    "country": "Romania",
    "price": "Price upon qualified inquiry",
    "currency": "EUR",
    "type": "Architectural Concept Villa",
    "category": "villa",
    "area": "650 sqm usable footprint · 2,200 sqm grounds",
    "usableArea": "650 sqm",
    "plotArea": "2,200 sqm",
    "bedrooms": 5,
    "bathrooms": 6,
    "rooms": "5 Master Suites · 2 Reception Salons · Private Spa & Wellness",
    "status": "Custom Order",
    "description": "A bold architectural manifesto blending raw board-formed concrete, honed travertine slabs, and vast glass cantilevers into an impenetrable yet light-filled private sanctuary. Features perimeter moat reflecting pools and custom subterranean vehicle gallery.",
    "advisoryPerspective": "Bespoke architectural execution engineered for single-client commission with sovereign security specifications and timeless brutalist aesthetics.",
    "heroImage": "https://aixluxury.com/images/1200/20073291/IMG_1863-9dL2vlJlBGaMzEV27fcV_g.jpg",
    "galleryImages": [
      "https://aixluxury.com/images/1200/20073291/IMG_1863-9dL2vlJlBGaMzEV27fcV_g.jpg",
      "https://aixluxury.com/images/1200/20073268/IMG_1864-HxDZeYCOR1eGsC1xWfUhRQ.jpg",
      "https://aixluxury.com/images/1200/20073221/IMG_1866-ODUqsnDCsPz76p0AnZ5GIg.jpg",
      "https://aixluxury.com/images/1200/20073004/IMG_1873-PeNa-8RFIxPhpeJ0fQPd1g.jpg",
      "https://aixluxury.com/images/1200/20073109/IMG_1870-ZV3Dnea08wKYW1wK5K81gg.jpg",
      "https://aixluxury.com/images/1200/20073126/IMG_1869-uXN-4T007E9xb12NUdG28w.jpg",
      "https://aixluxury.com/images/1200/20073159/IMG_1868-gRDPkEJavakyxyXM0Haimg.jpg",
      "https://aixluxury.com/images/1200/20073195/IMG_1867-0zF7c8UCd6KvgNfMPCV6lw.jpg",
      "https://aixluxury.com/images/1200/20072797/IMG_1881-DpgI6VxeQc2oJjfcYokNlA.jpg",
      "https://aixluxury.com/images/1200/20072845/IMG_1878-6hwV8UM2HLfKhTkf9STt9w.jpg",
      "https://aixluxury.com/images/1200/20072945/IMG_1876-aaPsQQd6ZLKKd7T_WYFtzQ.jpg"
    ],
    "specs": [
      {
        "label": "Structural Framing",
        "value": "Cast-in-Place Architectural Concrete"
      },
      {
        "label": "Security Perimeter",
        "value": "Reflecting Moat & Biometric Vault Access"
      },
      {
        "label": "Internal Footprint",
        "value": "650.00 sqm"
      },
      {
        "label": "Vehicle Gallery",
        "value": "Subterranean Showroom for 4 Collectors' Cars"
      }
    ],
    "features": [
      "Monumental ceiling heights exceeding 4.5 meters in primary formal salons",
      "Minimalist seamless frameless glazing by Sky-Frame Switzerland",
      "Full geothermal climate loops with zero reliance on fossil combustion"
    ],
    "sourceUrl": "https://aixluxury.com/concept-project",
    "sourceName": "AiXLuxury Architectural Studies",
    "sourcePlatform": "AiXLuxury",
    "isFeatured": false
  },
  {
    "id": "prop-new-era-project",
    "slug": "new-era-minimalist-contemporary-villa",
    "title": "New-Era Contemporary Villa — Minimalist Geometric Living",
    "subtitle": "Clean Lines · Floor-to-Ceiling Light Courts · Turnkey Designer Execution",
    "location": "Pipera Residential District, Northern Bucharest",
    "city": "Bucharest / Pipera",
    "country": "Romania",
    "price": "Price upon qualified inquiry",
    "currency": "EUR",
    "type": "Contemporary Villa / Modern Residence",
    "category": "villa",
    "area": "340 sqm usable interior · 650 sqm private grounds",
    "usableArea": "340 sqm",
    "plotArea": "650 sqm",
    "bedrooms": 4,
    "bathrooms": 4,
    "rooms": "5 Rooms (4 Bedrooms, Open Living, Dual Car Port)",
    "status": "Available",
    "description": "A pristine contemporary residence showcasing minimalist geometry, monochromatic materials, floor-to-ceiling glass expanses, and an effortless transition between interior salons and private landscaped gardens.",
    "advisoryPerspective": "A turnkey residential acquisition ready for immediate executive occupancy in one of Pipera's quietest residential lanes.",
    "heroImage": "https://aixluxury.com/images/1200/20072615/2b5d480e-2991-432a-8d98-b29720ca7db9-Nur1O8inNSv3fD8NCPHyJA.JPG",
    "galleryImages": [
      "https://aixluxury.com/images/1200/20072615/2b5d480e-2991-432a-8d98-b29720ca7db9-Nur1O8inNSv3fD8NCPHyJA.JPG",
      "https://aixluxury.com/images/1200/20072612/3-gew3Gp7i1s9AkK97HWXcEg.jpg",
      "https://aixluxury.com/images/1200/20072609/4-HmAJw7KLJgR-2FRUjG_NPw.JPEG",
      "https://aixluxury.com/images/1200/20072607/5-wYys-6VX5F97htxGr2Dkpg.JPEG",
      "https://aixluxury.com/images/1200/20072605/6-N-YKKfmzoxp8hScfimRVsA.JPEG",
      "https://aixluxury.com/images/1200/20072603/8c5979fe-de6b-4b48-8ae4-e314c981ddff-1SgNL29WW33WIUZrN2QXmQ.JPG",
      "https://aixluxury.com/images/1200/20072595/11-6Li3sgWb8LrDduOfobFQiA.JPEG",
      "https://aixluxury.com/images/1200/20072594/12-4rPlxa3Kf5RfkARTL16u2g.JPEG",
      "https://aixluxury.com/images/1200/20072591/13-U5Bc1_QHc0CiNiE2illvEQ.JPEG"
    ],
    "specs": [
      {
        "label": "Usable Interior Area",
        "value": "340.00 sqm"
      },
      {
        "label": "Land Footprint",
        "value": "650.00 sqm"
      },
      {
        "label": "Joinery Architecture",
        "value": "Schüco Aluminum Triple Glazing"
      },
      {
        "label": "Heating & Cooling",
        "value": "Underfloor Radiant Heating + Ducted VRF"
      }
    ],
    "features": [
      "Open-concept living room flowing directly to a stone terrace and swimming lawn",
      "Master suite with walk-in dressing chamber and freestanding stone bath",
      "Integrated smart home automation for lighting, climate, and security"
    ],
    "sourceUrl": "https://aixluxury.com/new-era-project",
    "sourceName": "AiXLuxury Contemporary Portfolio",
    "sourcePlatform": "AiXLuxury",
    "isFeatured": false
  },
  {
    "id": "prop-dubai-palm-signature",
    "slug": "palm-jumeirah-signature-waterfront-villa",
    "title": "Palm Jumeirah Signature Waterfront Villa & Private Beach",
    "subtitle": "14,700 sqft Footprint · 6 Grand Suites · Private Beachfront · Infinity Pool",
    "location": "Palm Jumeirah Frond Enclave, Dubai, United Arab Emirates",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "price": "Price upon qualified inquiry",
    "currency": "AED",
    "type": "Ultra-Prime Waterfront Villa",
    "category": "international",
    "area": "14,700 sqft (1,365 sqm) plot & living footprint",
    "usableArea": "1,365 sqm",
    "bedrooms": 6,
    "bathrooms": 7,
    "rooms": "6 En-Suite Bedrooms · Grand Reception Salons · Private Beach",
    "status": "Available",
    "description": "A private waterfront residence positioned on one of Dubai's most iconic fronds along Palm Jumeirah. Fully renovated and designed around light, space, and effortless indoor-outdoor living, with direct access to private calm waters and sweeping open sea views.",
    "advisoryPerspective": "Palm Jumeirah remains Dubai's premier ultra-prime global asset class, experiencing record capital appreciation and sustained institutional UHNW demand.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7ed70202-5a4d-4125-a748-011c3f187034.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7ed70202-5a4d-4125-a748-011c3f187034.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7765c52f-8ca2-4e08-92fa-9e79d7762e7c.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7accb86b-5f58-4649-ba93-7c4278426f84.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ea4c1102-d75a-4a14-ab9c-228cf72d0838.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e40ba5b9-2dfb-4a96-bb7f-ce757794e95f.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/09e4181d-f73b-4f91-bb4b-d64822908702.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0ce79aa7-930d-4e22-bf70-e2e3bcf4a010.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9c392af3-4646-4fc7-ad29-c18ebdf2e61a.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/56dd92e6-129b-4a12-8ef7-d2d3aac1f716.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1fd8a438-e132-403a-9882-5868802418c7.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/171c5861-873b-4872-96fc-3dfb0844beac.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/30599df7-e834-47cd-bdf4-f844cf255e06.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/43f20f29-4d81-4791-b02c-2e52d745508b.JPG"
    ],
    "specs": [
      {
        "label": "Plot & Living Area",
        "value": "14,700 sqft (1,365 sqm)"
      },
      {
        "label": "Frontage",
        "value": "Private Sandy Beachfront"
      },
      {
        "label": "Bedroom Inventory",
        "value": "6 En-Suite Chambers"
      },
      {
        "label": "Fiscal Regime",
        "value": "0% Personal Capital Gains & Property Tax"
      }
    ],
    "features": [
      "Direct private beach access with unobstructed waterscape vistas",
      "Private swimming pool framed by mature royal palms and sun lounges",
      "High-specification Italian kitchen with integrated Gaggenau appliances",
      "Full staff quarters with private laundry and service entrance"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/1ec11386-412b-4e35-8bfa-0978202aa8a8",
    "sourceName": "HomeFind Dubai Desk",
    "sourcePlatform": "HomeFind",
    "isFeatured": true
  },
  {
    "id": "prop-marlin-icon",
    "slug": "marlin-icon-al-reem-island-abu-dhabi",
    "title": "MARLIN ICON — Landmark Canal Waterfront Residences",
    "subtitle": "Al Reem Island Prime Canal Frontage · Luxury Residences & Sky Penthouses",
    "location": "Al Reem Island Financial Corridor, Abu Dhabi, UAE",
    "city": "Abu Dhabi",
    "country": "United Arab Emirates",
    "price": "Price upon qualified inquiry (Off-Plan Allocation)",
    "currency": "AED",
    "type": "Landmark Residential Development / Sky Residences",
    "category": "development",
    "area": "85 – 350 sqm floorplates",
    "usableArea": "85 - 350 sqm",
    "bedrooms": 3,
    "bathrooms": 3,
    "rooms": "1 to 4 Bedroom Residences & Canalfront Penthouses",
    "status": "Under Development",
    "description": "Rising along the vibrant waterfront of Al Reem Island, MARLIN ICON represents a strategic architectural development offering direct canal views, hotel-grade wellness amenities, private berths, and immediate access to Abu Dhabi's international financial free zone.",
    "advisoryPerspective": "Abu Dhabi's sovereign wealth investments and Golden Visa incentives position Al Reem Island as a cornerstone for high-yield defensive capital deployment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c899b0bc-f9c8-4172-aae4-c8956d667158.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c899b0bc-f9c8-4172-aae4-c8956d667158.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b1e5c8ee-9d2a-4094-a961-df9185d042be.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/373f0edf-d38d-4683-ac9d-47a5ae7f2572.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c238e899-c99e-46aa-880a-372e7c837640.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c4223cf9-c699-4bf5-a756-1d61690ebcaa.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/36d38f35-5344-4d3b-a006-fcc1ee5314b2.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d74b70a5-7f89-4894-852a-11df7c87a9a6.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b56594fd-3cd3-4e3f-8ba8-e995c7ced610.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/65dc27ae-a576-4710-859d-46f785a29ae0.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0ac93675-735b-4ccf-a538-dd7865c706b8.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e52d7d78-e6ea-431c-9e62-e20fbfa345a6.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/30d4e876-051a-4151-8585-611cda36076f.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9f520ffb-1ee9-4d16-846a-162edcd6eefa.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/128047b3-46f8-4ec9-9d13-758aef9e4218.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/da4cb109-c3f5-44db-8261-e2341e325f85.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/12efa9d0-991d-49cf-9a23-49cbd13b33e0.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1c7c6b89-2d1b-486f-bda5-1557ade73e4b.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/05a77d77-fb59-466b-b6d0-dd2c953e439e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fbf07a4c-4f0a-480c-a1d2-7d04bb1ae49d.JPG"
    ],
    "specs": [
      {
        "label": "Project Phase",
        "value": "Under Construction · Verified Developer Gateway"
      },
      {
        "label": "Waterfront Setting",
        "value": "Promenade Canal Frontage"
      },
      {
        "label": "Investment Status",
        "value": "Freehold Ownership for Foreign Nationals"
      },
      {
        "label": "Residency Path",
        "value": "Eligible for UAE 10-Year Golden Visa"
      }
    ],
    "features": [
      "Spectacular infinity pool overlooking the Reem Island marine canal",
      "State-of-the-art gym, hydrotherapy spa, and private executive meeting salons",
      "Direct connection to Abu Dhabi Global Market (ADGM) financial center"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/45fd4689-6680-4340-a0a1-976cf4870173",
    "sourceName": "HomeFind Abu Dhabi Desk",
    "sourcePlatform": "HomeFind",
    "isFeatured": true
  },
  {
    "id": "prop-dubai-rubino-burj",
    "slug": "rubino-burj-khalifa-sky-penthouse",
    "title": "RUBINO — Sky Residence 100+ Floors Above Burj Khalifa",
    "subtitle": "4,494 sqft Footprint · 5 Rooms · World's Most Iconic Skyline Panoramas",
    "location": "Burj Khalifa, Downtown Dubai Sovereign Axis, UAE",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "price": "Price upon qualified inquiry",
    "currency": "AED",
    "type": "Iconic Sky Penthouse / Trophy High-Rise",
    "category": "penthouse",
    "area": "4,494 sqft (417.5 sqm)",
    "usableArea": "417.5 sqm",
    "bedrooms": 4,
    "bathrooms": 5,
    "rooms": "5 Rooms (4 Suites + Formal Sky Salon)",
    "status": "Available",
    "description": "Above the city. Beyond the ordinary. Positioned more than 100 floors above Dubai in the world's tallest tower, RUBINO delivers a trophy living experience framed by sweeping views of the Arabian Gulf, Downtown Dubai fountains, and the desert horizon.",
    "advisoryPerspective": "Burj Khalifa remains an internationally singular trophy asset that is impossible to replicate, ensuring peerless liquidity and brand prestige.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0122d0fa-a9bb-4146-ae1e-d4a24083b7c5.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0122d0fa-a9bb-4146-ae1e-d4a24083b7c5.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/caff3d4f-7fcd-4982-9a65-6fc87bd425df.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/34797aec-ab46-4b3c-9c89-f377f7047ef5.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/eb1c6488-2469-4cbc-b8ea-c13f88337c5e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4c50ab25-0c55-4ec6-932b-0cfe7b54a142.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/286ca820-df13-4630-a882-22ada9b3e337.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2098fa04-cdd0-45c6-bddd-dd2bde011817.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e7f1678f-e874-4db5-b915-035f8b9d0d6c.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/46a362ee-7779-4f29-8e82-2dc4b3ae949b.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/14e23d65-e838-46ef-8f6d-0d592a77689d.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b8b09896-1dd6-4bbe-a6c8-e40e817b2a77.JPG"
    ],
    "specs": [
      {
        "label": "Tower Level",
        "value": "Floor 100+ Ultra-High Elevation"
      },
      {
        "label": "Internal Footprint",
        "value": "4,494 sqft (417.5 sqm)"
      },
      {
        "label": "Building Amenities",
        "value": "Armani Hotel Access & Dedicated Concierge"
      },
      {
        "label": "Parking Allocation",
        "value": "3 Dedicated Secured Bays"
      }
    ],
    "features": [
      "Unparalleled 360° panoramas spanning the Arabian Gulf and Dubai Fountain spectacle",
      "Private resident elevator banks with biometric clearance",
      "Valet, 24/7 security, resident cigar lounge, and sky wellness pools"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/bd499535-97d4-464a-9b89-64ac71e4400e",
    "sourceName": "HomeFind Dubai Luxury Desk",
    "sourcePlatform": "HomeFind",
    "isFeatured": true
  },
  {
    "id": "prop-dubai-anantara",
    "slug": "anantara-residences-palm-jumeirah-coastal-elegance",
    "title": "Anantara Residences — Coastal Elegance & Lagoon Vistas",
    "subtitle": "Prime Palm Jumeirah Crescent · Resort-Serviced Living · Private Beach Access",
    "location": "East Crescent, Palm Jumeirah, Dubai, United Arab Emirates",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "price": "€3,650,000 (AED 14,500,000)",
    "priceNumeric": 3650000,
    "currency": "EUR",
    "type": "Resort-Serviced Luxury Residence",
    "category": "international",
    "area": "245 sqm usable interior + terraces",
    "usableArea": "245 sqm",
    "bedrooms": 3,
    "bathrooms": 4,
    "rooms": "4 Rooms (3 En-Suite Bedrooms + Grand Lagoon-View Salon)",
    "status": "Available",
    "description": "Located on the exclusive East Crescent of Palm Jumeirah within the renowned 5-star Anantara resort grounds. Fully furnished with Asian-inspired contemporary elegance, private lagoon access, concierge service, and panoramic open sea vistas.",
    "advisoryPerspective": "High-yield hospitality rental pool program offering stable international passive income coupled with personal private residency privileges.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/89f07027-aed9-4aa7-ab1f-38b4894f6284.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/89f07027-aed9-4aa7-ab1f-38b4894f6284.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/25d241b5-19c9-4b5d-9040-7d9d36f0b8e3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3a1bbe14-e2cd-4bf0-ab74-e2b394b0f64d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4b197d90-01d0-4e6c-a2a0-e8aeb4adb5ae.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/45c46dd6-bb5a-4693-b58e-51ded5498644.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/32d89ea6-6643-465e-be3f-523305a5f0d8.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2b9b9889-e89a-4c84-a66c-86d59e577111.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b1396574-967c-4d0e-aa36-d18532d35e97.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/71068b81-3251-4aaf-8350-296c82a30b2a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/35059d2f-faed-4c63-9bc7-53c6a31ffc6f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d9e51ad5-7b28-4ff6-b425-82d72e8b5883.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e2d192ba-84e2-4669-87f3-4f28f9854e99.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b8aa078b-1683-4010-a2f7-cb292d79e93a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8986acc3-0200-4418-8c84-7ac64b819da1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a6255380-d31f-4175-98c3-e5161e3810d3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d6ecbc1a-ba63-4ddd-8a10-28c3fceadcd9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a38f4c49-9c6f-4feb-83ae-cef53eaeac3c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/173c5935-0db9-4e81-8b21-ea8fdc27580a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b67c4123-89bf-481e-886d-a85f771075eb.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b35c199d-155e-4f40-91e0-5f7e8cfee3b0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2a271583-9f02-4eb0-9b48-4525f7deb9f0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c4c846eb-079f-4be4-92ad-a647aa99e4a1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/74f59bb9-0f31-4e29-9480-77566dcd8d28.jpg"
    ],
    "specs": [
      {
        "label": "Resort Status",
        "value": "Anantara 5-Star Managed Collection"
      },
      {
        "label": "Private Amenities",
        "value": "4,000 sqm Temperature-Controlled Lagoons"
      },
      {
        "label": "Beach Access",
        "value": "400m Private White Sand Beachfront"
      },
      {
        "label": "Furnishings",
        "value": "Complete Turnkey Custom Interior Package"
      }
    ],
    "features": [
      "Full access to Anantara Spa, tennis courts, and Michelin-recognized dining venues",
      "Deep-set shaded balconies commanding direct views of the central lagoons and sea",
      "Dedicated underground parking and 24/7 round-the-clock room service and security"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/f80e431a-cc93-4a28-bea4-c06d25a966d0",
    "sourceName": "HomeFind Dubai Desk",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-herastrau-duplex-penthouse",
    "slug": "herastrau-luxury-duplex-penthouse",
    "title": "Herăstrău Sovereign Duplex Penthouse & Sky Terrace",
    "subtitle": "340 sqm Total Footprint · 2 Levels · Panoramic Herăstrău Park Skyline",
    "location": "Șoseaua Nordului / Herăstrău Enclave, Sector 1, Bucharest",
    "city": "Bucharest",
    "country": "Romania",
    "price": "€2,900,000",
    "priceNumeric": 2900000,
    "currency": "EUR",
    "type": "Two-Story Luxury Penthouse",
    "category": "penthouse",
    "area": "340 sqm total footprint (260 sqm usable interior)",
    "usableArea": "260 sqm",
    "plotArea": "80 sqm panoramic terrace",
    "bedrooms": 4,
    "bathrooms": 4,
    "rooms": "5 Rooms (4 En-Suite Bedrooms, Double-Height Salon)",
    "status": "Available",
    "description": "An exceptional two-level penthouse overlooking Herăstrău Park. Engineered with double-height volume, glass curtain walls, expansive sky terraces, natural Italian marble cladding, and dedicated subterranean multi-car garage bays.",
    "advisoryPerspective": "Șoseaua Nordului remains Bucharest's most historically proven capital preservation corridor with strict height limitations preserving long-term asset value.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d7603ad2-5fa3-4e96-b85f-23216a804ba4.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d7603ad2-5fa3-4e96-b85f-23216a804ba4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/86b4fc58-7e3a-49b4-aa9c-820811537a2d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/83ceab3f-9300-45cf-b20e-50ac33f52662.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/944b1014-3cd4-4dae-b0bd-1cf7d0c7fc80.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c64912ea-ab5b-43f8-9a9c-28c5b02e0920.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5005fde4-0b3e-4eb1-a26d-ea78a1931900.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b43c449f-b223-44ae-a225-815996cb814c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/56d643be-1afa-4904-be9a-0d9094904f64.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cf8c6800-a327-43da-ac40-497aaac5d3e0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cc0d31e3-015d-48f8-9548-32543724ddd3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1b819039-a3a7-4e6a-a5c2-b92a552f4dfd.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cdc12888-286a-434c-b4e1-d5aff623c50d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/30b853ae-7d3e-45ed-ad29-3c78153a0426.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2d57dc1c-8f59-40ec-858b-6a000133b22b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/613b095c-a9c0-44c8-8a58-bc55b2fb4f37.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7409473e-ea08-4f96-b113-e4824b990801.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f2c3412c-13ea-4977-9d90-9b25d38688f4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/64d26aee-4e4f-4f13-a983-22db96771f59.jpg"
    ],
    "specs": [
      {
        "label": "Internal Usable Area",
        "value": "260.00 sqm"
      },
      {
        "label": "Terrace Footprint",
        "value": "80.00 sqm Panoramic"
      },
      {
        "label": "Vertical Levels",
        "value": "Duplex (Top 2 Floors)"
      },
      {
        "label": "Garage Spaces",
        "value": "2 Underground Parking Bays Included"
      }
    ],
    "features": [
      "Unobstructed views toward Herăstrău Park canopy and northern skyline",
      "Artisanal herringbone parquet, custom bookmatched marble fireplaces, and smart home core",
      "Private direct-to-penthouse elevator clearance with encrypted access"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/87257b24-a20d-4f76-b7d7-bec5e7a6db03",
    "sourceName": "HomeFind Herăstrău Collection",
    "sourcePlatform": "HomeFind",
    "isFeatured": true
  },
  {
    "id": "prop-upsite-floreasca-grand",
    "slug": "upsite-floreasca-grand-terrace-residence",
    "title": "UP-SITE Floreasca — Grand 5-Room Panoramic Residence",
    "subtitle": "352.5 sqm Total · Wraparound Glass Terraces · Floor-to-Ceiling Floreasca Lake Views",
    "location": "Calea Floreasca / Floreasca Lake Axis, Sector 1, Bucharest",
    "city": "Bucharest",
    "country": "Romania",
    "price": "€1,900,000",
    "priceNumeric": 1900000,
    "currency": "EUR",
    "type": "High-Rise Luxury Residence",
    "category": "penthouse",
    "area": "352.5 sqm total (210 sqm usable interior + 142.5 sqm terraces)",
    "usableArea": "210 sqm",
    "plotArea": "142.5 sqm terraces",
    "bedrooms": 4,
    "bathrooms": 4,
    "rooms": "5 Rooms (4 Bedrooms, 4 Bathrooms, Expansive Living Salon)",
    "status": "Available",
    "description": "Positioned in Bucharest's landmark residential high-rise by Atenor. Features 352.5 sqm of total footprint, spectacular wraparound glazed terraces, high thermal efficiency envelopes, and breathtaking views over Lake Floreasca and the northern skyline.",
    "advisoryPerspective": "UP-SITE has set a new benchmark for institutional-grade high-rise residential construction in Romania, commanding prime rental yields from multinational C-level tenants.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5fdbd813-f388-40b8-8468-48aab5d9352e.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5fdbd813-f388-40b8-8468-48aab5d9352e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/93c645a4-b60f-4a67-8650-c4b828156244.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c1554af3-66fc-4c30-af37-593ddfee2205.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8d11fa78-d040-4e94-867b-5ef37882340c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cb596b87-f8d2-49dc-81c9-231f7888cb9c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/69863e52-b2c9-4728-8d0b-4719b05eaf4e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c5a9b775-3e16-4e2a-a3eb-37739c5870e0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dd06ae53-7269-484a-913d-0ffe3a928c3a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5982329b-8164-4a8e-89a8-2e244f05178b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bce96a48-7254-436a-bf38-6e2cdd35b97c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2297ad89-4d07-4af0-906a-5bc2f46071f8.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3e90626d-5205-44e9-ad38-b2b848a63134.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a6dc2799-0d9c-4731-8204-7762e474d5c5.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d710697b-b7f5-40b0-b541-2a7d57612cbd.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/22d20c6d-5c93-43de-bbe9-b15808ab0d49.jpg"
    ],
    "specs": [
      {
        "label": "Total Footprint",
        "value": "352.50 sqm"
      },
      {
        "label": "Usable Interior",
        "value": "210.00 sqm"
      },
      {
        "label": "Terrace Area",
        "value": "142.50 sqm Wraparound"
      },
      {
        "label": "Building Certification",
        "value": "BREEAM Excellent Certified"
      }
    ],
    "features": [
      "Floor-to-ceiling Schuco structural facade with high acoustic attenuation",
      "Spa, indoor swimming pool, gym, and 24/7 lobby concierge within building",
      "Autonomous ventilation with fresh-air heat recovery and centralized VRV cooling"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/01e76455-827c-4fe5-b904-19e4ac351cbe",
    "sourceName": "HomeFind Floreasca Desk",
    "sourcePlatform": "HomeFind",
    "isFeatured": true
  },
  {
    "id": "prop-royal-residence-baneasa",
    "slug": "royal-residence-monumental-estate",
    "title": "Royal Residence — Architectural Compound Built Without Compromise",
    "subtitle": "Designed to Outlive Generations · Private Forested Grounds · High Security",
    "location": "Băneasa – Pipera Diplomatic Corridor, Northern Bucharest",
    "city": "Bucharest",
    "country": "Romania",
    "price": "€2,300,000",
    "priceNumeric": 2300000,
    "currency": "EUR",
    "type": "Private Luxury Estate",
    "category": "villa",
    "area": "680 sqm built footprint · 1,800 sqm landscaped grounds",
    "usableArea": "680 sqm",
    "plotArea": "1,800 sqm",
    "bedrooms": 6,
    "bathrooms": 7,
    "rooms": "12 Chambers (6 En-Suite Bedrooms, Formal Reception, Library, Safe Room)",
    "status": "Available",
    "description": "An extraordinary private residence constructed to sovereign protocol standards. Featuring thick structural concrete and natural stonework, private security lodge, multi-vehicle climate garage, and manicured landscaped grounds adjoining protected woodland.",
    "advisoryPerspective": "An irreplaceable generational family compound offering complete acoustic and visual privacy minutes from international schools and private aviation hubs.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a445809f-ed40-4ac1-8761-df8a45cb5af3.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a445809f-ed40-4ac1-8761-df8a45cb5af3.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/764ae377-6272-4ce4-acc1-04a18a24dd0f.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/63a604d8-e8dc-4b15-ad32-fd387c548c7e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/027ee3b3-d964-405a-8deb-fba0e99692bd.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3eb0c154-9249-44bf-abfd-3a1781a51ee6.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/29d0011a-b60b-47a5-b3ab-e3f11ab2f1f8.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a4206c14-eac3-484f-a9cf-699f46c6d5ed.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a021b23d-60b2-4bc9-a3cd-398febda1b37.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d1d2a2f2-6acc-46a7-a7a9-724bff02c09f.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f609eb13-e72d-4d1d-99bb-c236294bedca.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/699e0900-1eb0-4742-afe8-d2a17aefa4a4.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cbe5f5c6-2a70-48e9-9038-18c06a35692d.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/60cb3c72-979f-45a5-8836-e4302c81b9c7.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/50bb269c-e829-4913-9331-e192129266a9.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4d2faaf3-371e-412c-a96d-3c3c1220dd47.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1d52649a-49b7-4193-8da2-c095ebc31702.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2fce733d-117f-4053-b13e-9e34c6ef627a.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/20ba23de-2b46-4e06-8473-de64a3415b40.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/335de210-14b8-4602-8f65-47fe7d934ac8.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b98b498d-7f62-47c5-83bb-acb573b06ba6.JPG"
    ],
    "specs": [
      {
        "label": "Gross Built Area",
        "value": "680.00 sqm"
      },
      {
        "label": "Land Footprint",
        "value": "1,800.00 sqm"
      },
      {
        "label": "Structural Standard",
        "value": "Sovereign Protocol Reinforced Concrete"
      },
      {
        "label": "Surveillance",
        "value": "Independent Security Guard House"
      }
    ],
    "features": [
      "Mature landscaped parkland with century-old trees and perimeter acoustic buffering",
      "Ceremonial entertaining salon with soaring 4-meter finished ceilings",
      "Redundant industrial electrical generator and independent deep-well water supply"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/1bc33221-5d2a-4008-88b2-900471462c6c",
    "sourceName": "HomeFind Sovereign Collection",
    "sourcePlatform": "HomeFind",
    "isFeatured": true
  },
  {
    "id": "prop-lake-view-heated-pool-villa",
    "slug": "luxury-lake-view-villa-heated-pool",
    "title": "Modern Architectural Villa with Heated Pool & Lake Panoramas",
    "subtitle": "8 Rooms · Heated Outdoor Pool · Direct Lake Vista · Manicured Grounds",
    "location": "Northern Lake Axis, Pipera – Voluntari, Bucharest Metropolitan Area",
    "city": "Bucharest North",
    "country": "Romania",
    "price": "€1,200,000",
    "priceNumeric": 1200000,
    "currency": "EUR",
    "type": "Modern Lakefront Villa",
    "category": "villa",
    "area": "480 sqm built · 380 sqm usable · 900 sqm grounds",
    "usableArea": "380 sqm",
    "plotArea": "900 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "8 Rooms (5 Bedrooms, Home Cinema, Formal Living & Dining)",
    "status": "Available",
    "description": "A luxury detached villa finished in 2022, commanding direct vistas over the northern lake system. Features an outdoor heated swimming pool, outdoor summer kitchen, expansive floor-to-ceiling glass facades, and a finished subterranean wellness space.",
    "advisoryPerspective": "Strong capital growth corridor driven by the proximity to northern business parks and American/British international academies.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/318c01f8-e92e-49b4-b257-3b1fb7343d09.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/318c01f8-e92e-49b4-b257-3b1fb7343d09.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c22a5eb0-d46c-4afb-9cb7-6d63e04c01c7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/351efda0-1219-43ea-a324-5b3ec130e4b5.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b656ab64-81c5-485e-bdf3-0c580e81f7c3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/951584f2-3502-4a8e-a3d3-bc5c66f14dee.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dc21c204-d7c9-4612-b742-729a70434a62.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c6e87c52-1049-455a-9ff0-bd3b9575a7fd.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/433ca6bb-0119-412b-8e03-0d6bf90951fd.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0b8e5e40-8b05-4ac0-b9b5-504e51d674c5.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3577c249-6cb7-453c-bf50-81b3cb2c9a50.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9cc38b66-800d-4bdf-a2a3-d7fe9fa5a956.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/81437ed3-ea17-42ee-ae6c-7f748430ce71.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c4b6a399-5cf5-4df4-aea9-2f545c503174.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/71af3bb9-7cb9-48ec-a1db-285697729478.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8dc951d3-fb1d-482a-b083-a5c489a2347e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8a065f35-b539-4f3d-afce-a7eacde86966.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a3ca0526-39b2-44d0-8ca8-e683ee5aedf0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d1ab53a8-e126-4c16-b104-ac67a629bf9d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9788c085-81b4-434b-bd0c-4a44d08288fc.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7d4f86db-71ac-4743-a30a-8dc87e068392.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/aac914d2-1f35-43fb-bff6-627235a1e28d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d9f6f5a8-0580-4fb7-bb55-6f213cfc8eaf.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/85a74d1d-574b-4ebe-be24-4a6fd5b71880.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/62e54750-2e98-441a-82a2-b65385a86987.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/988096a7-0051-433f-9ee3-2c4728d8b598.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f0a79ef6-ff28-4e76-96f5-d59777141759.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/335912a7-460f-4187-abd0-32e66b0aae35.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1b2aed6e-7ab7-4afa-8868-0e6bb4284653.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fb0548e0-7ed2-4773-b5c8-33973e069722.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f7bfac3d-518c-4de9-a1d4-301fe0cb0ff9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e93acad3-d221-489a-8b52-e133a5313b50.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/aaa1b815-9ce7-4b77-89bf-ed2436de16db.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1f1755bd-679c-4d27-abb9-c78dc8ab1fa5.jpg"
    ],
    "specs": [
      {
        "label": "Usable Interior",
        "value": "380.00 sqm"
      },
      {
        "label": "Private Grounds",
        "value": "900.00 sqm"
      },
      {
        "label": "Swimming Pool",
        "value": "Heated In-Ground Pool with Automatic Cover"
      },
      {
        "label": "Energy Source",
        "value": "Heat Pump + Integrated Solar Array"
      }
    ],
    "features": [
      "Heated outdoor swimming pool equipped with counter-current jets and lighting",
      "Direct panoramic orientation toward the lake with west-facing sunset terrace",
      "Enclosed two-car garage plus ample exterior guest courtyard parking"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/cacbf989-30ee-4f39-bf16-3e7f626d336c",
    "sourceName": "HomeFind Prime Villas",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-floreasca-elite-residence",
    "slug": "floreasca-elite-residential-development",
    "title": "The Floreasca Sanctuary — Prime Lake-Adjacent Residence",
    "subtitle": "Boutique Architectural Development · 4 Rooms · High-Efficiency Envelope",
    "location": "Floreasca Residential Quarter, Sector 1, Bucharest",
    "city": "Bucharest",
    "country": "Romania",
    "price": "€1,000,000",
    "priceNumeric": 1000000,
    "currency": "EUR",
    "type": "Boutique Residential Development",
    "category": "development",
    "area": "215 sqm usable interior + 45 sqm garden terrace",
    "usableArea": "215 sqm",
    "plotArea": "45 sqm terrace",
    "bedrooms": 3,
    "bathrooms": 3,
    "rooms": "4 Rooms (3 Bedrooms, Grand Living Room, Dining)",
    "status": "Available",
    "description": "Experience the ideal mix of urban dynamism and tranquil natural seclusion in an elite boutique residential development in Floreasca. Designed with warm architectural concrete, timber paneling, and massive insulated glass panels.",
    "advisoryPerspective": "Floreasca remains Bucharest's most fashionable culinary, lifestyle, and residential district, commanding premium capital retention.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/91769c45-e74a-4008-8e06-8d047f479ca8.JPEG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/91769c45-e74a-4008-8e06-8d047f479ca8.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dbe877c9-225a-4efd-b917-2c122cdc94cc.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6954316e-832f-46c0-8765-817206e96b1e.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/de85f143-2cd6-4133-bfd1-38157c60ce6e.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3654f685-4772-4e15-9e00-b6f885fba3e5.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dd114160-d5f1-42a1-b6a3-12698202128f.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ed424e3a-a76c-47ae-9112-2b5549ca4a62.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b127e07f-c58a-48df-975c-01bf5e74e4c8.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/de9c5c32-006c-4f73-9e58-bed500a3322a.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/01fe1d50-091e-4a09-8aa3-396e291555dc.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cdc21811-3eac-4308-b6e8-dee12e34eb7b.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f57005f6-6f56-4473-b580-834b127fafd0.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/59b638d5-141d-42a8-95ab-f73519083b09.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ab86f964-da88-4700-9a95-6f149ee4b231.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7030c778-0d27-428c-8b83-855a71eeb6cb.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/06d48824-1626-4536-b39e-09295af59398.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5ece90bb-13a8-40a0-9496-02c3746ecdaf.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/474eef58-b216-4743-b981-e8ccfa6451de.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0a7791c3-d9bd-4c9f-b70e-202753a23813.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/575af210-02e2-4012-b4c0-059568fbc93c.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/12ac7ee9-7826-4920-b1e6-dae89e5ae385.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c991f672-916a-4e9b-8885-21e9e9cc2782.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/43f4defb-7ccc-4b3e-ba2b-800339704fc8.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e08516c9-abd0-43ab-b8bf-d982b57eaaa9.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a2d19651-b1c9-4919-945a-e3e95401adc2.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0ec91a3b-cdd5-43fa-be06-974b8b477c72.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dbbc56c7-f696-458f-af6c-005547afc9f5.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/02aeb857-5e95-4019-95fe-25ae6fa0334b.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2ef31b82-ef78-48ae-b1a3-6d7cd79c75fc.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b8ef64d3-c5fc-40ea-9d34-12734723271a.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/428cc86f-ed47-4641-bf5f-d2d557275f89.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dd0994a3-f8a1-4b48-a008-b6b895877bd2.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5c11de5c-ada1-4319-af90-b862f3697afa.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/259d0dbc-8b77-4074-a844-dd2173af456f.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/557b8d97-1684-4da4-8022-60cc0e45c04a.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/10041c15-3b86-4042-8229-3583515e1bd6.JPEG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/58837ad6-57d2-4f89-b986-4c22c665d045.JPEG"
    ],
    "specs": [
      {
        "label": "Usable Interior",
        "value": "215.00 sqm"
      },
      {
        "label": "Private Terrace",
        "value": "45.00 sqm"
      },
      {
        "label": "Building Height",
        "value": "Low-Rise Boutique (G+4)"
      },
      {
        "label": "Parking",
        "value": "2 Secured Basement Bays Included"
      }
    ],
    "features": [
      "Refined Scandinavian interior palette with integrated Italian cabinetry",
      "Acoustic decoupling throughout walls and ceiling slabs for peaceful privacy",
      "Short walking distance to Verdi Park, Floreasca Lake, and gourmet bistros"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/bcb16d7c-c5c3-4e59-84ae-467b69ec0685",
    "sourceName": "HomeFind Floreasca Portfolio",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-dorobanti-floreasca-penthouse",
    "slug": "dorobanti-floreasca-penthouse-aparthotel",
    "title": "Dorobanți – Floreasca Horizon Penthouse",
    "subtitle": "Turnkey Luxury · Expansive Sky Terrace · Prime Central Northern Axis",
    "location": "Dorobanți – Floreasca Border Corridor, Bucharest",
    "city": "Bucharest",
    "country": "Romania",
    "price": "€785,000",
    "priceNumeric": 785000,
    "currency": "EUR",
    "type": "Modern Penthouse",
    "category": "penthouse",
    "area": "165 sqm total (125 sqm usable + 40 sqm terrace)",
    "usableArea": "125 sqm",
    "plotArea": "40 sqm terrace",
    "bedrooms": 3,
    "bathrooms": 2,
    "rooms": "4 Rooms (3 Bedrooms, Open Salon, Sky Terrace)",
    "status": "Available",
    "description": "A meticulously finished penthouse residence at the meeting point of Dorobanți and Floreasca. Featuring a generous 40 sqm open sky terrace, minimalist bespoke furniture, and complete automation.",
    "advisoryPerspective": "High liquidity urban asset suitable for either executive owner-occupancy or ultra-high-yield luxury corporate aparthotel letting.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/35584174-6be2-459b-bb98-fa0dc165091f.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/35584174-6be2-459b-bb98-fa0dc165091f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7337a53b-cd23-498d-a05e-34e21cfd5640.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/382ab4f5-3490-476d-a33a-7f0dbe2366bc.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5b14744a-6d85-4f28-b3ae-1d1df5bcbb50.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ad7e4abf-07b2-456a-b829-96349602caf3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b6487713-972c-4aac-9d81-01e74b0e57a8.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f8bce2a8-1b2a-4ee0-bd40-f2bcd34156d9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6a7739bc-8ead-40a0-88eb-a432762e74d7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/77c94433-a414-4475-adce-5d878985feef.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bddcaa8c-95c9-463f-be73-dfcd2be0d96c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/96a68139-ad80-4586-9ff8-e6be57ea8713.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/33d6aeff-a3ca-49fd-90e4-f4fd9c345616.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/94e8325c-3f31-449a-92d6-870b95dc60e0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b4e13fce-4ec3-41b9-a222-d6369fcf0dc4.jpg"
    ],
    "specs": [
      {
        "label": "Usable Interior",
        "value": "125.00 sqm"
      },
      {
        "label": "Sky Terrace",
        "value": "40.00 sqm"
      },
      {
        "label": "Furnishing Status",
        "value": "Turnkey Designer Execution"
      }
    ],
    "features": [
      "Panoramic city skyline terrace with outdoor lounge and dining setup",
      "Direct elevator access and secure video surveillance"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/1e2f2491-7337-49c3-9206-70c25251a853",
    "sourceName": "HomeFind Central Portfolio",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-yacht-kid-floreasca",
    "slug": "yacht-kid-waterfront-residence-floreasca",
    "title": "YACHT KID — Waterfront Residence on Floreasca Lake",
    "subtitle": "Iconic Architectural Waves · Waterfront Living · High-Tech Amenities",
    "location": "Fabrica de Glucoză / Floreasca Lake Axis, Sector 2, Bucharest",
    "city": "Bucharest",
    "country": "Romania",
    "price": "€360,000",
    "priceNumeric": 360000,
    "currency": "EUR",
    "type": "Modern Waterfront Apartment",
    "category": "development",
    "area": "98 sqm usable + expansive balcony",
    "usableArea": "98 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "3 Rooms (2 Bedrooms, Living Room, Kitchen)",
    "status": "Available",
    "description": "An innovative architectural statement on the shore of Lake Floreasca. Characterized by wave-shaped terraces, marine design inspirations, and direct access to green lakeside promenades.",
    "advisoryPerspective": "Positioned in Bucharest's fastest appreciating tech and corporate corridor, ensuring resilient capital appreciation and continuous tenancy demand.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/905f69bd-a11e-4940-ab94-7500659800cd.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/905f69bd-a11e-4940-ab94-7500659800cd.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a075573f-5f98-4e3c-83e7-1e70b4a62b49.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e86b898b-be31-40d2-9014-a7fb5e485927.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ac9ae82b-138a-4ead-8bb4-e896d0ac47f0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/76682a56-bc5c-4801-9976-6f382a031936.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8af2da7c-d234-4907-b5f0-38748589de80.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1fc0e538-c2c1-4e31-8951-63671669cb65.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4cc85d3c-af59-4575-a477-6fe30d7ca495.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/522aa4f3-c05b-402c-9a18-86f8592878ae.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a70aaa52-7f43-4fc1-9bae-cc57f375c05c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4468e2f0-8e9b-4ba8-9cd5-be600e88157c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7b28feb1-9f84-4da9-afe0-fa20398750ae.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/74082cca-e02d-4094-835e-206c38103d7e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7fa8c0bb-9244-4f62-a934-1154eda99562.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/023af78d-b458-4df9-b422-d100bd14eefa.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2354bb6b-53ed-45ea-aef5-02f04c3130a0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7d856898-4a22-47fc-9e8e-dde84b6e71b0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/57463d83-38f6-4e16-8958-5e71ce1aa6a5.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d089d14e-0440-471c-a75d-c5363c6ff787.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/54c7eff6-93cc-492f-9f98-f60733a1e116.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a0611919-256f-459e-b5d8-012cf60e964b.jpg"
    ],
    "specs": [
      {
        "label": "Usable Interior",
        "value": "98.00 sqm"
      },
      {
        "label": "Architecture",
        "value": "Marine-Inspired Wave Terraces"
      },
      {
        "label": "Target Yield",
        "value": "Estimated 6.5% Net Annual Rental Yield"
      }
    ],
    "features": [
      "Direct views over Floreasca Lake and corporate skyline",
      "Underfloor heating, multi-split climate control, and full acoustic insulation"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/870174a6-3fcd-4339-a147-c7495f0e3f14",
    "sourceName": "HomeFind Tech Corridor",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-pipera-duplex-luxury-villa",
    "slug": "pipera-luxury-duplex-garden-villa",
    "title": "Pipera Luxury Duplex Villa with Generous Private Garden",
    "subtitle": "228 sqm Built · Fully Furnished & Equipped · 4 Rooms · 2 Parking Spaces",
    "location": "Pipera Residential District, Voluntari, Northern Bucharest",
    "city": "Bucharest / Pipera",
    "country": "Romania",
    "price": "€575,000",
    "priceNumeric": 575000,
    "currency": "EUR",
    "type": "Modern Duplex Villa",
    "category": "villa",
    "area": "228 sqm built · 185 sqm usable · 350 sqm plot",
    "usableArea": "185 sqm",
    "plotArea": "350 sqm",
    "bedrooms": 3,
    "bathrooms": 3,
    "rooms": "4 Rooms (3 Bedrooms, Generous Living & Dining)",
    "status": "Available",
    "description": "A turnkey designer duplex villa in Pipera offering 228 sqm of gross space, a beautifully landscaped garden with automated irrigation, premium finishes, and integrated custom Italian furniture.",
    "advisoryPerspective": "Immediate turnkey asset requiring zero renovation capital, ready for executive occupancy or high-end lease.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2702e6ec-b168-4ba8-95ab-9a6d85f25300.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2702e6ec-b168-4ba8-95ab-9a6d85f25300.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c06efaec-af5e-4e49-9376-65d8a3520cfc.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b8e9cce0-dc3c-4af2-b222-4137cc9dd11c.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f56f176d-83fa-42b8-9459-22046d1e70ec.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e32ed4ef-8bcd-4f8b-b615-190fa2e846c1.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7ea4dbc2-431c-4584-be69-59d6cdb9dee5.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b02da2ee-d0ac-491e-83d0-e45e7f4ed277.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7d379e04-b2ab-42e8-8a01-0c2cb663edf0.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2e88a805-e4ac-4504-a5d1-52674f85206d.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e03c7059-51db-44b1-814d-169d3098f727.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/23d50fa8-d9df-46a3-9226-3e88392a43df.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6ab9d74f-bed6-4993-95d3-5118daea8b46.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d5e23797-a7b3-4495-81bf-f0f659b82782.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/64a44866-8dc0-43df-bf1d-04e1a37114f2.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fc88b2c7-e1f4-4f78-8a88-cda94decc0a4.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/33733157-38bb-414d-b9d9-c68e5b3b5940.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/28a85388-a56d-4010-9cfe-9c02e1b3a702.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9b9b8ba7-8c4a-40c6-9934-ca274a572ba1.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1edeb1c4-d934-4a2e-84af-6b648b68ac06.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7cadbd65-906c-43db-a308-08ab49675b96.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/77e6b0c5-0284-418d-996f-d99d6cbf92d7.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/54ae9c11-9363-45d4-a962-1e6ff7fb883e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/865c65e6-0b49-4fac-8f05-679e08930187.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/33d5d6e2-dfbb-4f96-b675-663f71a9e2ca.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ad03a0b8-921c-4b3e-88f2-f99fc5a7dc51.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/946223a8-31fa-4eb8-9ba8-b71e7c245c7e.JPG"
    ],
    "specs": [
      {
        "label": "Gross Built Area",
        "value": "228.00 sqm"
      },
      {
        "label": "Usable Living Space",
        "value": "185.00 sqm"
      },
      {
        "label": "Private Plot",
        "value": "350.00 sqm"
      },
      {
        "label": "Parking",
        "value": "2 Designated On-Site Spaces"
      }
    ],
    "features": [
      "Manicured lawn with mature ornamental shrubs and automated irrigation",
      "Energy efficient heat pump heating and ducted cooling throughout"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/66b50868-2f5d-440c-80e7-1b04da21f5eb",
    "sourceName": "HomeFind Pipera Desk",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-herastrau-private-garden-residence",
    "slug": "herastrau-residence-220sqm-private-garden",
    "title": "Herăstrău Parkside Residence with 220 sqm Private Garden",
    "subtitle": "163 sqm Usable Interior · 220 sqm Lush Private Garden · Rare Ground-Floor Oasis",
    "location": "Herăstrău Park Western Perimeter, Sector 1, Bucharest",
    "city": "Bucharest",
    "country": "Romania",
    "price": "Price upon qualified inquiry (€5,000 / mo corporate lease)",
    "priceNumeric": 1100000,
    "currency": "EUR",
    "type": "Ground Floor Garden Residence",
    "category": "penthouse",
    "area": "163 sqm usable interior · 220 sqm landscaped garden",
    "usableArea": "163 sqm",
    "plotArea": "220 sqm private garden",
    "bedrooms": 3,
    "bathrooms": 3,
    "rooms": "4 Rooms (3 Bedrooms, Grand Living Room, 3 Baths)",
    "status": "Available",
    "description": "A rare residential sanctuary directly adjoining Herăstrău Park. Combines 163 sqm of immaculate interior living with a private 220 sqm landscaped garden surrounded by mature arborvitae, offering the privacy of an independent villa with the security of a luxury boutique building.",
    "advisoryPerspective": "Properties featuring private gardens over 200 sqm in the Herăstrău perimeter are virtually unobtainable, ensuring perpetual demand among diplomatic and executive tenants.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/67fa74f5-928f-4266-b333-d8557d1048ed.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/67fa74f5-928f-4266-b333-d8557d1048ed.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3eab91c0-f2ed-459f-98af-84093e737163.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a6c45cbc-451f-4dd7-a888-5eb179c7b294.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/61468225-53af-491d-8af0-ae13657f7f3b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bb49fcd9-e4ce-4f5c-8420-fdebeeef3627.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5cc1da51-b479-494e-86ff-f8a307815f7a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/397db685-f3f9-46ef-a46d-9b8336f29960.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7145a6d9-2eb1-4a26-b291-972e7521c7bd.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3ead50ce-743c-4167-b935-161e052b3e61.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4cd5b44a-0259-443c-bb1f-b1d1a441daa5.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/beb4181b-5f12-44ff-800e-6e3c10a8a6c9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4389b10e-e301-475a-a594-9f655f4c847b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/303e8256-c755-4c6c-aa8e-a2f12710a3e8.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1b68b061-34a1-486f-bc4a-9516d57d66a1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f087133d-9e38-4b12-ad54-96377cc80077.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f98bd23e-b960-4b5c-8c8d-3846341d9bea.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/45730347-3f66-4d9c-ae8c-520ddb16801d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/eb43f5ae-c3fc-492e-aafb-b4e2e38a2f95.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/972d883c-1ee7-4637-87e4-6b5e2565d8bc.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/db7fc2a3-4a1f-4367-a954-44e7aaaca372.jpg"
    ],
    "specs": [
      {
        "label": "Internal Usable Area",
        "value": "163.00 sqm"
      },
      {
        "label": "Private Garden Area",
        "value": "220.00 sqm"
      },
      {
        "label": "Park Distance",
        "value": "50 Meters from Park Access"
      },
      {
        "label": "Security",
        "value": "24/7 Monitored Access & Private Garden Barrier"
      }
    ],
    "features": [
      "Private 220 sqm garden featuring covered lounge pavilion and outdoor dining area",
      "Floor-to-ceiling glass doors opening directly from living salon and master suite to garden",
      "Subterranean parking bay and dedicated private storage vault included"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/fbbb75d8-7210-4e83-9288-35a9a004c015",
    "sourceName": "HomeFind Herăstrău Collection",
    "sourcePlatform": "HomeFind",
    "isFeatured": true
  },
  {
    "id": "prop-cotroceni-opera-villa",
    "slug": "cotroceni-national-opera-diplomatic-villa",
    "title": "Cotroceni National Opera Diplomatic Villa",
    "subtitle": "140 sqm Usable · Restored Interwar Architecture · Parkside Prime Position",
    "location": "Cotroceni / National Opera Corridor, Sector 5, Bucharest",
    "city": "Bucharest",
    "country": "Romania",
    "price": "€650,000 (€2,000 / mo corporate lease)",
    "priceNumeric": 650000,
    "currency": "EUR",
    "type": "Restored Historic Villa",
    "category": "villa",
    "area": "140 sqm usable interior · 200 sqm private plot",
    "usableArea": "140 sqm",
    "plotArea": "200 sqm",
    "bedrooms": 3,
    "bathrooms": 2,
    "rooms": "4 Rooms (3 Bedrooms, Reception Salon, Courtyard)",
    "status": "Available",
    "description": "An aristocratic interwar villa located in the protected Cotroceni diplomatic quarter moments from the Romanian National Opera and Botanical Garden. Fully restored with noble architectural details, high ceilings, and serene leafy private courtyard.",
    "advisoryPerspective": "Cotroceni represents Bucharest's most historically stable heritage enclave, characterized by strict zoning protections that preserve neighborhood tranquility.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/43d4c8df-470f-4d82-9734-0b9f309696ea.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/43d4c8df-470f-4d82-9734-0b9f309696ea.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e959b8af-227e-4b8a-a57e-ea77ee11854c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/258166e4-67d4-4182-86a5-956a56e6a31f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/01a08681-480b-4360-94cf-2ef78c67b2e7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8fa3c07b-e16c-4e50-994c-3b625345d62c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5cc09ac5-c3f2-43f4-95fb-619e302d8b0c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/da017fbd-7e1b-40c9-966c-7bffd151c924.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/772ccc4a-3b7c-4b9c-91a7-3bc4aa1cce9c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0b9ce03d-2b6d-44e3-afd1-16daeb9433b3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2561fcec-fa0a-479a-b53b-9a46a0473e44.jpg"
    ],
    "specs": [
      {
        "label": "Usable Interior",
        "value": "140.00 sqm"
      },
      {
        "label": "Architectural Era",
        "value": "Interwar Neoclassical Restored"
      },
      {
        "label": "Heating",
        "value": "Independent Condensing Gas Central Unit"
      }
    ],
    "features": [
      "Restored original solid oak parquet floors, moldings, and brass fixtures",
      "Charming private courtyard paved in natural granite setts"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/8021ba60-747c-41ae-9d35-ca1af206fd6c",
    "sourceName": "HomeFind Heritage Desk",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-embassy-north-penthouse",
    "slug": "us-embassy-axis-premium-penthouse",
    "title": "Northern Diplomatic Axis Penthouse near U.S. Embassy",
    "subtitle": "180 sqm Total · First Occupancy · Forest-Adjacent Northern Corridor",
    "location": "Băneasa – US Embassy Axis, Sector 1, Bucharest",
    "city": "Bucharest",
    "country": "Romania",
    "price": "€520,000 (€1,700 / mo lease)",
    "priceNumeric": 520000,
    "currency": "EUR",
    "type": "Modern Penthouse",
    "category": "penthouse",
    "area": "180 sqm total (135 sqm usable + 45 sqm terraces)",
    "usableArea": "135 sqm",
    "plotArea": "45 sqm terrace",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "3 Rooms (2 Master Suites, Open Great Room, Terraces)",
    "status": "Available",
    "description": "A newly completed penthouse situated in immediate proximity to the American Embassy and Băneasa Forest. Brand new first occupancy with high-end designer furnishings, autonomous climate control, and expansive terraces.",
    "advisoryPerspective": "Continuous high demand from international embassy personnel and diplomatic attachés guaranteeing zero vacancy risk.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/92604920-51b5-476c-bb3e-8383891cf74b.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/92604920-51b5-476c-bb3e-8383891cf74b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3f71a5a1-fa7e-4606-86e3-9209ce2489eb.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1c211c08-aa7b-4eb7-b357-968462e069c1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/41b54a31-c78f-4320-9402-7d612bcc4406.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0eca589f-f5de-4bc2-b8e7-19a9929f6910.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d7c88264-4e2f-457c-84e4-b4a251b146d5.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/af3076c0-27db-4906-be31-ed5203cef0c3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/221494ce-16bc-48f2-8dc3-fe10ba20d6f8.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/528672a3-baec-41ca-a680-9beff1fb7c01.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fe15c67e-bf28-409f-80a1-a0e3539d9dc6.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c5aaf12e-238f-42f2-8aa5-9c9bdb84724c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e46b49af-1bcb-4a58-838d-b26abe069494.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/73479559-6284-489b-b98d-bc820c9d02bf.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dd29ce4a-5966-4c6e-a447-44353b7b9b0c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e12a841c-cf94-47be-aa12-ad6e60c54575.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5d2f87e4-8a94-4bd3-9e4e-bda4850322ec.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/75ddd8c1-13a6-4756-a63d-26ac789028f2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/69277656-c0d5-4f5a-a5ff-838c87327fe9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c2bbfb29-4dff-4e1d-af19-64de3db70018.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a1780abb-a2f9-43d9-9c0e-31edb92dc273.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fb314d17-05bc-4b29-ac64-7434da0e6eb0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e055d62f-5cdb-4394-9d1c-97a583a5a09b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6235e804-0f90-4b27-a2d4-6427ef05c54f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/adf55646-1e3e-442b-93b2-aea6d36535ef.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0fce5e11-0ad5-48e4-b391-6101be1f2213.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/10ddf13c-6e2d-488e-bf04-7ab6fa7eb2bb.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0bfec61e-d5d2-4b8c-ada5-3652badd8e81.jpg"
    ],
    "specs": [
      {
        "label": "Total Surface",
        "value": "180.00 sqm"
      },
      {
        "label": "Usable Interior",
        "value": "135.00 sqm"
      },
      {
        "label": "Condition",
        "value": "Pristine First Occupancy"
      }
    ],
    "features": [
      "Terrace overlooking peaceful residential greenery and Băneasa forest line",
      "Underfloor radiant heating, ducted multi-split AC, and underground parking"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/b144acf9-0085-42a0-bc1d-02d8eb2a7d96",
    "sourceName": "HomeFind Diplomatic Collection",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-the-ivy-baneasa",
    "slug": "the-ivy-baneasa-forest-residence",
    "title": "The Ivy Băneasa — Forest-Adjacent Executive Residence",
    "subtitle": "100.6 sqm Total · Underfloor Heating · Subterranean Parking · BREEAM Certified",
    "location": "Șoseaua București-Ploiești / Băneasa Forest, Sector 1, Bucharest",
    "city": "Bucharest",
    "country": "Romania",
    "price": "€320,000 (€1,450 / mo lease)",
    "priceNumeric": 320000,
    "currency": "EUR",
    "type": "Modern Luxury Apartment",
    "category": "development",
    "area": "100.6 sqm total (82 sqm usable + terrace)",
    "usableArea": "82 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "3 Rooms (2 Bedrooms, Living Room, Kitchen)",
    "status": "Available",
    "description": "An elegant home within 'The Ivy' residential enclave adjacent to Băneasa Forest. Developed by Speedwell according to stringent BREEAM Excellent environmental benchmarks.",
    "advisoryPerspective": "Ideal turnkey corporate investment asset with guaranteed tenant demand from the surrounding commercial office district.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a28bdb10-5c30-4312-98fc-83aab71e9055.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a28bdb10-5c30-4312-98fc-83aab71e9055.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/08354aff-a7a5-40fe-a70f-0b7a94d13aa0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c0141fb5-910d-4791-87a1-1d4aee68bdda.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bdbbb4ea-b22f-49bf-9790-7b7ca3faceb2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/35cd1b8c-e18f-45c7-9c33-adea504d01d2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/31771766-5f14-4c2e-b4a5-1445ca0f73d6.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/da774ef7-2587-4456-914e-29ec428f7b02.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/58ae9d35-371c-4307-93c8-7f055a6886a9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7391f5af-bf5a-44a2-8593-c51030149e6b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ec7bf0c3-62c5-4bad-b4c4-606c66fb1b8a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/216f9078-edac-43f7-bcda-788f8a8a6800.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d2377ae5-8dde-460a-b49c-bc66f9e3fc72.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/baade4d9-b597-4b09-89ec-71da32d34e71.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9b835cd5-8ca0-42b0-81f9-6955a7a1ff01.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e4f71309-149f-4ffc-aa3f-3530d2243fb7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/44a5061c-fb2d-4640-a712-24283d32b072.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/96e278ec-e1c8-4944-9b83-0fe68e5e67fa.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c3fe7f22-267c-480c-b0aa-bce3a47d14cf.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c21f74ff-fad5-413e-882c-3e914724b213.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9a121a08-309c-4c65-855e-91d83f469c48.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3cb0fb1b-3dbc-4dbc-b7ba-0b0b23486e98.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/12457ffc-cf12-441d-84fd-8e6f1a02b7cc.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d1d32237-ed7c-46f6-b9b0-03348290ed83.jpg"
    ],
    "specs": [
      {
        "label": "Total Footprint",
        "value": "100.60 sqm"
      },
      {
        "label": "Sustainability",
        "value": "BREEAM Excellent Certified"
      },
      {
        "label": "Parking Bay",
        "value": "Underground Parking Bay Included"
      }
    ],
    "features": [
      "Floor-to-ceiling glass windows welcoming natural sunlight throughout the day",
      "Direct access to resident courtyard parks, gym, and proximity to Băneasa Shopping City"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/6609b3f1-cb7d-4c91-a12d-d69af25d58fc",
    "sourceName": "HomeFind Northern Portfolio",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-marbella-benahavis-sovereign-1",
    "slug": "benahavis-sovereign-trophy-estate-malaga",
    "title": "La Zagaleta Sovereign Trophy Estate — Benahavís, Spain",
    "subtitle": "1,696 sqm Built Footprint · 8 Grand Suites · Mediterranean & Gibraltar Panoramas",
    "location": "La Zagaleta Country Club & Golf Resort, Benahavís, Málaga, Spain",
    "city": "Benahavis",
    "country": "Spain",
    "price": "€19,880,000",
    "priceNumeric": 19880000,
    "currency": "EUR",
    "type": "Sovereign Mediterranean Estate / Ultra-Luxury Villa",
    "category": "villa",
    "area": "1,696 sqm built · 6,500 sqm private grounds",
    "usableArea": "1,696 sqm",
    "plotArea": "6,500 sqm",
    "bedrooms": 8,
    "bathrooms": 9,
    "rooms": "8 Master Suites · Grand Formal Reception Salons · Private Spa & Helipad Access",
    "status": "Available",
    "description": "One of Europe's most prestigious sovereign estates situated within the ultra-gated enclave of La Zagaleta. Offering complete seclusion, 24-hour armed perimeter security, two private golf courses, an equestrian center, and breathtaking 180° panoramas spanning the Mediterranean Sea, Gibraltar, and the North African coast.",
    "advisoryPerspective": "La Zagaleta represents the pinnacle of private wealth preservation in Southern Europe, boasting strict multi-tiered perimeter clearance and zero public access.",
    "heroImage": "https://tet.ro/storage/properties/1235821/img-1235821-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235821/img-1235821-0.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-1.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-2.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-3.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-4.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-5.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-6.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-7.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-8.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-9.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-10.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-11.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-12.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-13.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-14.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-15.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-16.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-17.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-18.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-19.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-20.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-21.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-22.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-23.webp",
      "https://tet.ro/storage/properties/1235821/img-1235821-24.webp"
    ],
    "specs": [
      {
        "label": "Built Surface",
        "value": "1,696.00 sqm"
      },
      {
        "label": "Private Grounds",
        "value": "6,500.00 sqm"
      },
      {
        "label": "Enclave Security",
        "value": "La Zagaleta 24/7 Armed Gated Access"
      },
      {
        "label": "Private Amenities",
        "value": "Indoor Heated Pool, Outdoor Infinity Pool, Cinema, Bodega"
      }
    ],
    "features": [
      "Spectacular double-height entrance hall with imperial double staircase and hand-carved stone",
      "Cantilevered infinity swimming pool blending into the Mediterranean horizon",
      "Full private wellness sanctuary including Finnish sauna, Turkish bath, and gym",
      "Subterranean car salon with capacity for 8 collectors' vehicles"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1235821.html",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "Chestertons Marbella",
    "isFeatured": true
  },
  {
    "id": "prop-marbella-golden-mile-palace",
    "slug": "marbella-golden-mile-grand-palace",
    "title": "The Golden Mile Grand Palace — Marbella, Spain",
    "subtitle": "2,077 sqm Built Footprint · 7 Palatial Suites · Moments from Marbella Club & Beach",
    "location": "Golden Mile Ultra-Prime Corridor, Marbella, Málaga, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€19,500,000",
    "priceNumeric": 19500000,
    "currency": "EUR",
    "type": "Palatial Neoclassical Villa",
    "category": "villa",
    "area": "2,077 sqm built · 4,200 sqm parkland grounds",
    "usableArea": "2,077 sqm",
    "plotArea": "4,200 sqm",
    "bedrooms": 7,
    "bathrooms": 8,
    "rooms": "7 Suites · Ceremonial Banqueting Hall · Subterranean Spa",
    "status": "Available",
    "description": "An aristocratic neoclassical estate set within Marbella's most legendary residential address along the Golden Mile. Walkable to the iconic Marbella Club and Puente Romano resorts, offering mature landscaped parkland, high ceilings, marble colonnades, and private security.",
    "advisoryPerspective": "The Golden Mile has demonstrated unmatched historical resilience, outperforming all regional real estate indices through multi-decade market cycles.",
    "heroImage": "https://tet.ro/storage/properties/1235837/img-1235837-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235837/img-1235837-0.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-1.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-2.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-3.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-4.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-5.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-6.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-7.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-8.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-9.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-10.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-11.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-12.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-13.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-14.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-15.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-16.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-17.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-18.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-19.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-20.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-21.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-22.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-23.webp",
      "https://tet.ro/storage/properties/1235837/img-1235837-24.webp"
    ],
    "specs": [
      {
        "label": "Built Surface",
        "value": "2,077.00 sqm"
      },
      {
        "label": "Private Parkland",
        "value": "4,200.00 sqm"
      },
      {
        "label": "Location Privilege",
        "value": "Golden Mile Walking Distance to Mediterranean Beach"
      },
      {
        "label": "Vehicle Accommodations",
        "value": "Enclosed Underground Garage for 6 Cars"
      }
    ],
    "features": [
      "Monumental neoclassical colonnades and hand-finished marble fountains",
      "Full staff quarters with independent security entrance and kitchen",
      "Large swimming pool flanked by Roman columns and manicured boxwood gardens"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1235837.html",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "Chestertons Marbella",
    "isFeatured": true
  },
  {
    "id": "prop-marbella-benahavis-panoramic-estate",
    "slug": "benahavis-panoramic-horizon-estate",
    "title": "Benahavís Panoramic Horizon Estate — Málaga, Spain",
    "subtitle": "1,795 sqm Built · 8 Suites · Complete Valley & Sea Panoramas · High Architecture",
    "location": "El Madroñal / Benahavís Corridor, Málaga, Spain",
    "city": "Benahavis",
    "country": "Spain",
    "price": "€18,650,000",
    "priceNumeric": 18650000,
    "currency": "EUR",
    "type": "Contemporary Sovereign Villa",
    "category": "villa",
    "area": "1,795 sqm built · 5,100 sqm private grounds",
    "usableArea": "1,795 sqm",
    "plotArea": "5,100 sqm",
    "bedrooms": 8,
    "bathrooms": 8,
    "rooms": "8 Suites · Double Living Salons · Outdoor Heated Pavilion",
    "status": "Available",
    "description": "A triumph of contemporary Mediterranean architecture rising high above the Costa del Sol coastline. Engineered with floating glass volumes, cantilevered sun decks, cascading water features, and expansive indoor-outdoor entertaining zones.",
    "advisoryPerspective": "Commanding an elevated ridge position, this estate guarantees unblockable views while enjoying proximity to Puerto Banús and international airports.",
    "heroImage": "https://tet.ro/storage/properties/1235829/img-1235829-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235829/img-1235829-0.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-1.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-2.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-3.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-4.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-5.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-6.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-7.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-8.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-9.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-10.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-11.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-12.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-13.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-14.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-15.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-16.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-17.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-18.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-19.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-20.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-21.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-22.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-23.webp",
      "https://tet.ro/storage/properties/1235829/img-1235829-24.webp"
    ],
    "specs": [
      {
        "label": "Built Surface",
        "value": "1,795.00 sqm"
      },
      {
        "label": "Grounds Area",
        "value": "5,100.00 sqm"
      },
      {
        "label": "Elevated Position",
        "value": "Commanding Ridge with Unblockable Vistas"
      }
    ],
    "features": [
      "Dramatic zero-edge swimming pool appearing to spill directly into the Mediterranean",
      "Custom wine tasting cellar with temperature and humidity precision controls",
      "Private gym, steam bath, and cinema room with acoustic treatment"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1235829.html",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "Chestertons Marbella",
    "isFeatured": true
  },
  {
    "id": "prop-marbella-modernist-villa",
    "slug": "marbella-modernist-trophy-residence",
    "title": "Marbella Modernist Trophy Villa & Sunset Pavilions",
    "subtitle": "1,191 sqm Built Footprint · 5 Master Suites · Contemporary Architectural Pure Glass",
    "location": "Nueva Andalucía / Golf Valley Axis, Marbella, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€14,900,000",
    "priceNumeric": 14900000,
    "currency": "EUR",
    "type": "Modern Architectural Villa",
    "category": "villa",
    "area": "1,191 sqm built · 2,800 sqm grounds",
    "usableArea": "1,191 sqm",
    "plotArea": "2,800 sqm",
    "bedrooms": 5,
    "bathrooms": 6,
    "rooms": "5 Master Suites · Open Living Gallery · Heated Infinity Pool",
    "status": "Available",
    "description": "A minimalist masterpiece positioned in Marbella's famed Golf Valley. Designed with ultra-slim Schüco architectural sliding glass, floating architectural staircases, raw honed travertine, and manicured Japanese landscaped zen gardens.",
    "advisoryPerspective": "High-absorption prime location in Nueva Andalucía with rapid capital appreciation and unmatched golf accessibility.",
    "heroImage": "https://tet.ro/storage/properties/1235833/img-1235833-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235833/img-1235833-0.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-1.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-2.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-3.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-4.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-5.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-6.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-7.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-8.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-9.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-10.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-11.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-12.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-13.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-14.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-15.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-16.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-17.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-18.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-19.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-20.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-21.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-22.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-23.webp",
      "https://tet.ro/storage/properties/1235833/img-1235833-24.webp"
    ],
    "specs": [
      {
        "label": "Built Surface",
        "value": "1,191.00 sqm"
      },
      {
        "label": "Plot Surface",
        "value": "2,800.00 sqm"
      },
      {
        "label": "Architectural Style",
        "value": "Minimalist Glass & Honed Travertine"
      }
    ],
    "features": [
      "Vast outdoor entertaining terrace with integrated fire pit and outdoor kitchen",
      "Heated swimming pool with underwater observation windows and sound system"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1235833.html",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "Chestertons Marbella",
    "isFeatured": false
  },
  {
    "id": "prop-marbella-sky-penthouse",
    "slug": "marbella-prime-coastal-sky-penthouse",
    "title": "Marbella Prime Coastal Sky Penthouse & Infinity Pool",
    "subtitle": "961 sqm Total Footprint · 4 Grand Suites · Rooftop Plunge Pool · Panoramic Sea Views",
    "location": "Marbella Prime Beachfront Strip, Costa del Sol, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€11,400,000",
    "priceNumeric": 11400000,
    "currency": "EUR",
    "type": "Ultra-Prime Sky Penthouse",
    "category": "penthouse",
    "area": "961 sqm total footprint (520 sqm usable interior + 441 sqm terraces)",
    "usableArea": "520 sqm",
    "plotArea": "441 sqm sky terrace",
    "bedrooms": 4,
    "bathrooms": 5,
    "rooms": "4 En-Suite Bedrooms · Sky Solarium · Private Heated Rooftop Pool",
    "status": "Available",
    "description": "Occupying the pinnacle of Marbella's most sought-after seafront residential development. Offering 961 sqm of total indoor-outdoor footprint, a private rooftop infinity plunge pool, and front-row panoramic vistas of the Mediterranean Sea.",
    "advisoryPerspective": "Beachfront penthouses exceeding 500 sqm usable interior in Marbella are among the rarest residential commodities in Europe.",
    "heroImage": "https://tet.ro/storage/properties/1235828/img-1235828-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235828/img-1235828-0.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-1.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-2.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-3.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-4.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-5.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-6.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-7.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-8.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-9.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-10.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-11.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-12.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-13.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-14.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-15.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-16.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-17.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-18.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-19.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-20.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-21.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-22.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-23.webp",
      "https://tet.ro/storage/properties/1235828/img-1235828-24.webp"
    ],
    "specs": [
      {
        "label": "Total Footprint",
        "value": "961.00 sqm"
      },
      {
        "label": "Interior Usable",
        "value": "520.00 sqm"
      },
      {
        "label": "Sky Terrace & Solarium",
        "value": "441.00 sqm"
      },
      {
        "label": "Private Rooftop Pool",
        "value": "Private Heated Infinity Pool on Roof"
      }
    ],
    "features": [
      "Private internal elevator connecting interior living levels directly to rooftop solarium",
      "Direct beach access with private resident clubhouse and spa facilities"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1235828.html",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "Chestertons Marbella",
    "isFeatured": true
  },
  {
    "id": "prop-casares-finca-cortesin",
    "slug": "finca-cortesin-sovereign-golf-villa",
    "title": "Finca Cortesin Sovereign Golf Villa & Private Grounds",
    "subtitle": "680 sqm Built · Solheim Cup Golf Resort Axis · Private Vineyard & Sea Views",
    "location": "Finca Cortesin Resort, Casares, Málaga, Spain",
    "city": "Casares",
    "country": "Spain",
    "price": "€5,000,000",
    "priceNumeric": 5000000,
    "currency": "EUR",
    "type": "Resort Golf Villa",
    "category": "villa",
    "area": "680 sqm built · 2,200 sqm private grounds",
    "usableArea": "680 sqm",
    "plotArea": "2,200 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "5 Bedrooms · Andalusian Courtyard · Heated Pool",
    "status": "Available",
    "description": "Set within the world-renowned Finca Cortesin resort — host of the Solheim Cup and rated among the top 50 hotels in the world. An Andalusian-contemporary villa featuring soaring wood-beamed ceilings, private olive groves, and sea views.",
    "advisoryPerspective": "Uncompromising 5-star resort management infrastructure delivering reliable rental revenue and elite lifestyle privileges.",
    "heroImage": "https://tet.ro/storage/properties/1236057/img-1236057-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1236057/img-1236057-0.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-1.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-2.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-3.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-4.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-5.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-6.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-7.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-8.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-9.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-10.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-11.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-12.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-13.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-14.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-15.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-16.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-17.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-18.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-19.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-20.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-21.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-22.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-23.webp",
      "https://tet.ro/storage/properties/1236057/img-1236057-24.webp"
    ],
    "specs": [
      {
        "label": "Built Surface",
        "value": "680.00 sqm"
      },
      {
        "label": "Resort Access",
        "value": "Full Finca Cortesin 5-Star Hotel & Spa Services"
      },
      {
        "label": "Golf Privilege",
        "value": "Championship 18-Hole Course Priority Access"
      }
    ],
    "features": [
      "Traditional interior courtyard with marble fountain bringing cross-breezes and light",
      "Private swimming pool overlooking the fairways to the Mediterranean Sea"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1236057.html",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "Chestertons Marbella",
    "isFeatured": false
  },
  {
    "id": "prop-marbella-modern-golf-villa",
    "slug": "marbella-contemporary-golf-retreat",
    "title": "Marbella Contemporary Golf Retreat & Pool",
    "subtitle": "298 sqm Usable · 4 Rooms · Private Swimming Pool & Landscaped Garden",
    "location": "Marbella Golf Corridor, Málaga, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€1,995,000",
    "priceNumeric": 1995000,
    "currency": "EUR",
    "type": "Modern Golf Villa",
    "category": "villa",
    "area": "298 sqm usable interior · 850 sqm plot",
    "usableArea": "298 sqm",
    "plotArea": "850 sqm",
    "bedrooms": 4,
    "bathrooms": 4,
    "rooms": "4 Rooms (4 Bedrooms, Open-Plan Living & Dining, Garden Lounge)",
    "status": "Available",
    "description": "A bright, modern villa in Marbella designed for effortless Mediterranean living. Features four en-suite bedrooms, open-plan chef's kitchen, private swimming pool, and immediate access to top golf clubs and international schools.",
    "advisoryPerspective": "Strong secondary-market liquidity in Marbella's established residential golf sector, offering steady European holiday rental yield.",
    "heroImage": "https://tet.ro/storage/properties/1236111/img-1236111-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1236111/img-1236111-0.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-1.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-2.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-3.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-4.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-5.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-6.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-7.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-8.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-9.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-10.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-11.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-12.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-13.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-14.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-15.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-16.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-17.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-18.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-19.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-20.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-21.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-22.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-23.webp",
      "https://tet.ro/storage/properties/1236111/img-1236111-24.webp"
    ],
    "specs": [
      {
        "label": "Internal Usable Area",
        "value": "298.00 sqm"
      },
      {
        "label": "Plot Area",
        "value": "850.00 sqm"
      },
      {
        "label": "Room Count",
        "value": "4 Bedrooms with En-Suite Baths"
      }
    ],
    "features": [
      "Private swimming pool framed by low-maintenance Mediterranean landscaping",
      "Turnkey condition ready for immediate summer occupancy or holiday rental"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1236111.html",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "Chestertons Marbella",
    "isFeatured": false
  },
  {
    "id": "prop-croatia-zdrelac-seafront",
    "slug": "croatia-zdrelac-seafront-villa",
    "title": "Adriatic Seafront Villa with Direct Private Pier Access",
    "subtitle": "Direct Water Access · Pašman Island / Zadar Archipelago · Private Boat Berth",
    "location": "Ždrelac, Pašman Island, Zadar County, Croatia",
    "city": "Ždrelac",
    "country": "Croatia",
    "price": "€1,150,000",
    "priceNumeric": 1150000,
    "currency": "EUR",
    "type": "Adriatic Waterfront Residence",
    "category": "international",
    "area": "280 sqm usable interior · 650 sqm coastal plot",
    "usableArea": "280 sqm",
    "plotArea": "650 sqm",
    "bedrooms": 4,
    "bathrooms": 4,
    "rooms": "5 Rooms (4 Bedrooms, Coastal Salon, Sea Terraces)",
    "status": "Available",
    "description": "Positioned directly on the crystal-clear waters of the Pašman channel in the Zadar archipelago. Complete with a private sea-access pier, private boat mooring, and panoramic vistas of pristine pine-covered islands.",
    "advisoryPerspective": "Croatia's entry into the Schengen zone and Euro currency has cemented its status as one of Europe's most attractive yachting and vacation home markets.",
    "heroImage": "https://tet.ro/storage/properties/1233150/img-1233150-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1233150/img-1233150-0.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-1.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-2.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-3.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-4.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-5.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-6.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-7.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-8.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-9.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-10.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-11.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-12.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-13.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-14.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-15.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-16.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-17.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-18.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-19.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-20.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-21.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-22.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-23.webp",
      "https://tet.ro/storage/properties/1233150/img-1233150-24.webp"
    ],
    "specs": [
      {
        "label": "Usable Interior",
        "value": "280.00 sqm"
      },
      {
        "label": "Maritime Feature",
        "value": "Direct Sea Pier & Boat Berth"
      },
      {
        "label": "Jurisdiction",
        "value": "Croatia (EU / Schengen / Eurozone)"
      }
    ],
    "features": [
      "Direct water steps from terrace into the calm turquoise waters of the Adriatic",
      "Spacious stone-paved sun decks with Mediterranean pine shade"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listing/4708ae7a-98c0-48a7-b4ee-efed804a8e52",
    "sourceName": "HomeFind Adriatic Collection",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  }
];

export function getSelectedProperties(): Property[] {
  return selectedProperties;
}

export function getPropertyById(idOrSlug: string): Property | undefined {
  return selectedProperties.find((p) => p.id === idOrSlug || p.slug === idOrSlug);
}

export function getPropertiesByCategory(category: Property["category"]): Property[] {
  return selectedProperties.filter((p) => p.category === category);
}

export function getFeaturedProperties(): Property[] {
  return selectedProperties.filter((p) => p.isFeatured);
}
