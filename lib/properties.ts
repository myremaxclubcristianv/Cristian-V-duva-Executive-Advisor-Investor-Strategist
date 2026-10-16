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
    "type": "Sovereign Estate / Protocol Architectural Study",
    "category": "villa",
    "area": "783 sqm built footprint · 3,050 sqm private parkland",
    "usableArea": "783 sqm",
    "plotArea": "3,050 sqm",
    "bedrooms": 8,
    "bathrooms": 6,
    "rooms": "16 Rooms (Grand Reception Hall, Formal Salons, Master Wings)",
    "status": "Private Deal",
    "description": "An architectural monograph and protocol estate study designed for diplomatic representation, family office headquarters, or multi-generational private living. The concept features 3,050 sqm of mature landscaped parkland, high-volume ceremonial salons, an enclosed vehicle salon, and dedicated perimeter security infrastructure.",
    "advisoryPerspective": "A masterplanned architectural study for a generational estate compound, structured for private development under single-client advisory alignment.",
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
    "sourceUrl": "https://cristianvaduva.com/#schei-brasov",
    "sourceName": "CristianVaduva.com Heritage Curation",
    "sourcePlatform": "CristianVaduva.com",
    "isFeatured": false
  },
  {
    "id": "prop-monaco-coast",
    "slug": "travertine-cliffside-pavilion-monaco-cap-dail",
    "title": "Travertine Cliffside Pavilion — Cap-d'Ail, France (Monaco Border)",
    "subtitle": "480 sqm Living · 1,400 sqm Cliffside Grounds · Cantilevered Infinity Pool",
    "location": "Cap-d'Ail, Côte d'Azur, France (Monaco Border)",
    "city": "Cap-d'Ail",
    "country": "France",
    "price": "Price upon confidential inquiry",
    "currency": "EUR",
    "type": "Mediterranean Cliffside Architectural Study",
    "category": "international",
    "area": "480 sqm usable living · 1,400 sqm landscaped grounds",
    "usableArea": "480 sqm",
    "plotArea": "1,400 sqm",
    "bedrooms": 6,
    "bathrooms": 6,
    "rooms": "6 Master Suites · Formal Entertaining Salons",
    "status": "Private Deal",
    "description": "An architectural study in honed travertine and structural glass commanding open panoramas over the Mediterranean Sea from the cliffside terrain of Cap-d'Ail, France. The advisory mandate involved cross-border French Riviera zoning review, holding structure tax analysis, and direct principal consultation under a non-disclosure covenant.",
    "advisoryPerspective": "Positioned along the prestigious Cap-d'Ail coastal cliffline on the French Riviera, immediately adjacent to the Principality of Monaco sovereign border.",
    "heroImage": "/images/architecture/monaco-cliffside.jpg",
    "galleryImages": [
      "/images/architecture/monaco-cliffside.jpg",
      "/images/architecture/hero-monument.jpg"
    ],
    "specs": [
      {
        "label": "Geographic Axis",
        "value": "Cap-d'Ail, France (Monaco Border Corridor)"
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
      "Architectural study with cantilevered infinity pool over the Mediterranean rock face",
      "Honed travertine finishes with ultra-slim structural glass systems",
      "Advanced access control architecture with private safe room deployment",
      "Direct private descent path to the coastal promenade and shoreline"
    ],
    "sourceUrl": "https://www.aixluxury.com",
    "sourceName": "AiXLuxury French Riviera Desk",
    "sourcePlatform": "AiXLuxury",
    "isFeatured": true
  },
  {
    "id": "prop-nautical-home",
    "slug": "nautical-home-11-floating-residence",
    "title": "NAUTICAL HOME 11 — Autonomous Marine Waterfront Residence",
    "subtitle": "11m Length · 3.7m Beam · >50 sqm Usable Living · Rooftop Sun Deck",
    "location": "Yacht Marina / Danube Delta / Coastal Black Sea, Romania",
    "city": "Constanța / Coastal Marina",
    "country": "Romania",
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
  },
  {
    "id": "prop-hf-a79cb6ed-718",
    "slug": "palm-jumeirah-4br-garden-villa",
    "title": "PALM JUMEIRAH | 4BR GARDEN VILLA",
    "subtitle": "4 Bedrooms · Dubai, UAE",
    "location": "Dubai, Dubai, United Arab Emirates",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "price": "REQUEST PRICE",
    "currency": "AED",
    "type": "Villa Estate",
    "category": "villa",
    "area": "Generous Private Footprint",
    "bedrooms": "4",
    "bathrooms": 3,
    "rooms": "4 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "🌴 PALM JUMEIRAH | 4BR GARDEN VILLA\n\nPrivate living. Open views. Your own poolside retreat.\n\nSet in the iconic Palm Jumeirah, this fully renovated and furnished 4-bedroom garden villa brings together generous living spaces, open views and an exceptionally large private swimming pool.\n\nA residence designed for those who value space, comfort and the privilege of having a private outdoor sanctuary in one of Dubai’s most prestigious locations.\n\n✨ PRO...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Dubai luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8f25c135-f89f-4f22-a8a8-38762e09825b.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8f25c135-f89f-4f22-a8a8-38762e09825b.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9bfd6442-8e77-46fd-aac0-ebf59db4e525.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b2c378b1-6ecd-4475-a415-5ec7098b82fd.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/928190fb-31aa-4759-b11d-b0a098a03a54.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/85bb3d41-855a-4cdb-bf09-f5f1413d5344.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f96f467f-9d31-4659-8c5d-2797c4c82ad5.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a97e4bb2-3143-4533-9d51-c12ea468a2b1.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ae1cb254-d455-467b-ac88-ffb40da637e7.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7e9546e1-dcd4-4efa-b276-e86fcbca4c6d.JPG"
    ],
    "specs": [
      {
        "label": "Bedrooms",
        "value": "4 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Dubai, UAE"
      },
      {
        "label": "Category",
        "value": "VILLA"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/a79cb6ed-718a-4ab1-b002-71656ee7c74d",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-d355f115-16d",
    "slug": "capitol-constan-a-o-proprietate-cu-dubl-identitate",
    "title": "CAPITOL, CONSTANȚA | O PROPRIETATE CU DUBLĂ IDENTITATE",
    "subtitle": "4 Bedrooms · 842 sqm · Constanta, Romania",
    "location": "CONSTANTA, Constanta, Romania",
    "city": "Constanta",
    "country": "Romania",
    "price": "€2,500,000",
    "priceNumeric": 2500000,
    "currency": "EUR",
    "type": "Villa Estate",
    "category": "villa",
    "area": "842 sqm",
    "usableArea": "842 sqm",
    "bedrooms": 4,
    "bathrooms": 3,
    "rooms": "4 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Constanta, Romania, this property offers refined contemporary living with 4 bedrooms, 842 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Constanta luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/23987238-702f-43b4-8cac-211c884823bf.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/23987238-702f-43b4-8cac-211c884823bf.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/84f3edc6-b72d-4a19-9536-fda7740f51aa.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4e301a95-be01-4e37-93f7-8b8e033aa448.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/93c8d99b-fd63-40b5-aaa8-23719f395d95.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4c3d7bb1-7c1b-4509-a45d-a44473c39907.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e376b7d1-8062-482e-b3d0-83a11510ea9c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9477daba-d4be-45d2-8db3-bab0d0069f6d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1ae273e0-929b-4ee9-b176-40bb3abc4db1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dec8a953-477d-42f6-ad4a-3e660fb81953.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c489a1bc-9a3a-4102-8ec5-4fae3ef7d9a9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/631884bb-2b68-4868-bda1-b58d0d76bafc.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8e6695c7-526b-4690-8994-41b43aab9297.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "842 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "4 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Constanta, Romania"
      },
      {
        "label": "Category",
        "value": "VILLA"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/d355f115-16dc-4078-a60d-f80838e9bffe",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-26f75ba9-b6c",
    "slug": "agigea-constan-a-complex-de-depozitare-i-infrastructur-agric",
    "title": "AGIGEA, CONSTANȚA | COMPLEX DE DEPOZITARE ȘI INFRASTRUCTURĂ AGRICOLĂ",
    "subtitle": "15000 sqm · Agigea, Romania",
    "location": "CONSTANTA, Agigea, Romania",
    "city": "Agigea",
    "country": "Romania",
    "price": "€3,500,000",
    "priceNumeric": 3500000,
    "currency": "EUR",
    "type": "Commercial Residence",
    "category": "development",
    "area": "15000 sqm",
    "usableArea": "15000 sqm",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Agigea, Romania, this property offers refined contemporary living with 15000 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Agigea luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/943def59-1eb7-4e22-8583-ddffa76767d1.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/943def59-1eb7-4e22-8583-ddffa76767d1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ceb3bf02-e1dc-48b6-9213-ca74187cdd9f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f6edec42-009f-4173-ab0e-53cac0db1c39.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/485e92ac-2d89-4390-aa85-41f69702f530.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/828aa063-ad4e-4c11-8484-b239f4a58d79.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/10312bd0-7205-4f05-a54a-006d0dbe204d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4ba50949-d10e-493f-a1a1-60964b9e89bb.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c1ade0b3-a925-44ae-86a2-19a5b69d1d91.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/af71111d-6a4c-480d-9b04-a25ad7b25a4d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e6c5282c-0502-4618-a2e4-683a5e6122fd.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2b67f459-9286-42bd-90c9-a5f9ad9c7deb.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f6671e45-7046-48bc-ac9d-0c79d8d5b7e3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d237af43-036c-409d-aeb0-134142a1d7f5.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "15000 sqm"
      },
      {
        "label": "Jurisdiction",
        "value": "Agigea, Romania"
      },
      {
        "label": "Category",
        "value": "COMMERCIAL"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/26f75ba9-b6c1-4828-bb94-81dc833087b3",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-878c0557-284",
    "slug": "sierra-blanca-grand-panoramic-villa-marbella",
    "title": "Sierra Blanca Grand Panoramic Villa — Marbella",
    "subtitle": "5 Suites · 868.00 sqm Built · Private Landscaped Grounds",
    "location": "Marbella, Costa del Sol, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€7,995,000",
    "priceNumeric": 7995000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "868 sqm",
    "usableArea": "868 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "5 Rooms (5 En-Suite Suites) · Infinity Pool",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Marbella, Spain, this prime contemporary villa provides 868.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235817/img-1235817-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235817/img-1235817-0.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-1.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-2.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-3.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-4.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-5.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-6.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-7.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-8.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-9.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-10.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-11.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-12.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-13.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-14.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-15.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-16.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-17.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-18.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-19.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-20.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-21.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-22.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-23.webp",
      "https://tet.ro/storage/properties/1235817/img-1235817-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "868.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Marbella, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/878c0557-284b-4db1-a18e-ecdbf5bae63e",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-a594774a-0c1",
    "slug": "a-prestigious-opportunity-for-business-visionaries-transform",
    "title": "A Prestigious Opportunity for Business Visionaries: Transform This Luxury Villa into Your Dream Venture",
    "subtitle": "12 Bedrooms · 1292 sqm · Brasov, USA",
    "location": "SCHEI BRASOV, Brasov, Romania",
    "city": "Brasov",
    "country": "Romania",
    "price": "$2,900,000",
    "priceNumeric": 2900000,
    "currency": "USD",
    "type": "Villa Estate",
    "category": "villa",
    "area": "1292 sqm",
    "usableArea": "1292 sqm",
    "bedrooms": "12",
    "bathrooms": 10,
    "rooms": "12 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "A Prestigious Opportunity for Business Visionaries: Transform This Luxury Villa into Your Dream Venture\n\n📍 THE DESTINATION OF EXCLUSIVITY – SCHEI, BRAȘOV\nSet in the historic heart of Brașov, this luxurious villa offers not only world-class living but also extraordinary potential for high-end business opportunities. With its prime location, timeless design, and exceptional features, this property could be the foundation for your next entrepreneur...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Brasov luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c7acd19a-c83d-442e-a79b-4669e29ca340.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c7acd19a-c83d-442e-a79b-4669e29ca340.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d5cbeee1-14a7-4317-bb8e-7838eab38c48.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d27a1263-5663-49b0-bffd-189a97faa7e3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/11df935b-5d60-4b43-9fdf-9571de9c2937.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c4e63559-7aa1-4146-b0cf-090442a000fd.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/25d72e9c-c3c2-4f63-a217-ceb9065093b5.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/71a4c812-8d77-4156-8080-72c24dd5e06a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/de12250f-28a3-4252-9cc2-83ff5c21c256.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/da946c43-42f5-441f-9669-dc79fa34d591.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/baca385e-f57e-4029-a093-ea66fe95fa6b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6f826343-ed66-41b4-aff5-fa66e5835bb2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7a7785cc-de37-470a-bedb-f0bffb4acdb9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4fb6218a-992f-4f93-8ebe-8191a2f0f47d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1b75e42e-a0c4-45b0-8a03-fc6dc48d0f66.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cd9a6046-9f12-45a4-9274-7206513148ee.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/82ed3659-b4a3-4861-aaeb-650820faec6b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d08a487d-f2f3-4073-8273-55366edd9b6d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ffb67cc3-cc4e-4b08-ac25-5821c72139d7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d0a8d0fc-f879-4045-8336-1517db206571.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b9b79085-192d-4b69-b850-7f31760d9e73.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "1292 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "12 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Brasov, USA"
      },
      {
        "label": "Category",
        "value": "VILLA"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/a594774a-0c17-43d7-bca5-ffbbf269bc1e",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-39beab1a-0ca",
    "slug": "marbella-golden-mile-contemporary-garden-villa",
    "title": "Marbella Golden Mile Contemporary Garden Villa",
    "subtitle": "5 Suites · 161.00 sqm Built · Private Landscaped Grounds",
    "location": "Marbella, Costa del Sol, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€995,000",
    "priceNumeric": 995000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "161 sqm",
    "usableArea": "161 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "4 Rooms · Private Solarium Garden",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Marbella, Spain, this prime contemporary villa provides 161.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235816/img-1235816-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235816/img-1235816-0.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-1.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-2.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-3.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-4.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-5.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-6.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-7.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-8.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-9.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-10.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-11.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-12.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-13.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-14.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-15.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-16.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-17.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-18.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-19.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-20.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-21.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-22.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-23.webp",
      "https://tet.ro/storage/properties/1235816/img-1235816-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "161.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Marbella, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/39beab1a-0ca7-4bb7-8abd-a8c367e504f8",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-ee38782c-882",
    "slug": "the-residence-jumeirah-island-dubai",
    "title": "THE RESIDENCE | JUMEIRAH ISLAND, DUBAI",
    "subtitle": "Dubai, UAE",
    "location": "DUBAI, Dubai, United Arab Emirates",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "price": "REQUEST PRICE",
    "currency": "AED",
    "type": "Villa Estate",
    "category": "villa",
    "area": "Generous Private Footprint",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "THE RESIDENCE | JUMEIRAH ISLAND, DUBAI\n\nSome properties are built to impress. Others are designed to make a statement.\n\nDefined by striking travertine and limestone architecture, refined Italian interiors and an exceptional attention to detail, this private residence brings together contemporary design and understated grandeur.\n\nA private cinema. A bespoke wine cellar. A fully equipped gym and sauna. Smart-home technology and a chef’s kitchen des...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Dubai luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b544b08f-8eb4-473e-93ae-38981b83f324.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b544b08f-8eb4-473e-93ae-38981b83f324.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4d39dfc1-c103-46c1-bb8f-b3436ee7dfcd.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dc6c2909-45d7-4303-b873-5144ca5d70ee.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/70c37c0c-17fc-4bc7-bfae-d225277cc6b2.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bbd0ee90-611c-489d-b0a8-aa891515659a.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/df81ae5d-44a0-42ac-9ffe-10e0912ca1a7.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3dd651ea-c02c-4974-b15c-052e69f43264.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cb0f7b75-292f-45b5-95cf-5d647de9ffb5.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7fffddf3-375a-4945-bcdb-5f1b40821e57.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c772b6bd-cf94-4b8a-afe0-6e78a7a195a7.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/eaa51aba-9c82-4b07-ba49-cdf15ef7f0a9.JPG"
    ],
    "specs": [
      {
        "label": "Jurisdiction",
        "value": "Dubai, UAE"
      },
      {
        "label": "Category",
        "value": "VILLA"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/ee38782c-8821-4c3f-8fe2-8d28a43e6865",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-bb4b3bd9-a65",
    "slug": "palm-jumeirah-private-beachfront-living",
    "title": "PALM JUMEIRAH | PRIVATE BEACHFRONT LIVING",
    "subtitle": "Dubai, UAE",
    "location": "Dubai, Dubai, United Arab Emirates",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "price": "REQUEST PRICE",
    "currency": "AED",
    "type": "Villa Estate",
    "category": "villa",
    "area": "Generous Private Footprint",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "🌴 PALM JUMEIRAH | PRIVATE BEACHFRONT LIVING\n\nNot every villa on Palm Jumeirah is worth your attention.\n\nThis Garden Home is.\n\nA fully upgraded waterfront residence with a private pool, direct beach access, premium Italian interiors and uninterrupted views towards the Dubai skyline.\n\nPROPERTY HIGHLIGHTS\n\n• 7,369 sq. ft. plot\n• Fully furnished with premium Italian furniture\n• High-end BCI upgrades throughout\n• Private swimming pool\n• Direct beach...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Dubai luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/508cfe59-b36f-42df-b66b-6d76f654b3f1.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/508cfe59-b36f-42df-b66b-6d76f654b3f1.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/96a37050-9d11-4cd5-ae0d-818e155f04c6.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0ba32b3b-17c8-4768-8603-aca262482aa6.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dd46d7cf-ad04-4287-a519-2ace52aeb78c.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/20c4c647-de85-48d5-8d33-9f720d76149f.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bfe6b2fa-349a-4d15-a3de-197798caf36a.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b422b173-53d9-466f-9cb8-36f38d829a57.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/75b02548-7e28-4b8e-b001-3d432518c042.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/55008032-aba8-4cd7-9696-e699ef7934f4.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/39bb16a3-1c98-4d9b-b2c6-85a109f413da.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/43536110-241b-4fe5-a873-c130be331b40.JPG"
    ],
    "specs": [
      {
        "label": "Jurisdiction",
        "value": "Dubai, UAE"
      },
      {
        "label": "Category",
        "value": "VILLA"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/bb4b3bd9-a652-4fae-b99b-1c480302526a",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-4c2cbb38-2a9",
    "slug": "upsite-floreasca-a-new-premium-residential-landmark-in-bucha",
    "title": "UPSITE FLOREASCA: A NEW PREMIUM RESIDENTIAL LANDMARK IN BUCHAREST",
    "subtitle": "Bucharest, Romania",
    "location": "Floreasca, Bucharest, Romania",
    "city": "Bucharest",
    "country": "Romania",
    "price": "REQUEST PRICE",
    "currency": "EUR",
    "type": "Penthouse Residence",
    "category": "penthouse",
    "area": "Exclusive Floorplan",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "UPSITE FLOREASCA: A NEW PREMIUM RESIDENTIAL LANDMARK IN BUCHAREST\n\nFloreasca continues to consolidate its position among Bucharest’s most sought-after residential and business districts, attracting developments designed around premium living, accessibility and long-term value.\n\nUPSite Floreasca enters this landscape with a substantial residential concept: 270 premium residences distributed across two towers of 12 and 25 floors.\n\nThe scale of the...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucharest luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d767aadf-cd89-450d-b795-628aff6097fa.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d767aadf-cd89-450d-b795-628aff6097fa.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ecd4d534-c7be-4ebf-bd39-207d5d319556.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/46e19970-a07e-4d9c-bacf-f0642b0e824d.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a99b922a-ba3d-445e-8a95-ca27c25c8892.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/950967cd-e03d-4f12-8f40-0502c4bc29b2.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8d0ce8e6-48df-470f-ac9c-4fb112949e03.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/984dbbcb-8390-4d53-add0-1d497a63d19a.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/05c19e43-3c44-4ac4-afb1-82f519a68517.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ebac88b5-ae04-414f-ad0d-a6d73738a961.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/495b6d49-613e-459d-80f8-2a0f094a5923.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0fea2477-7f70-44bf-ad2b-678e441754ad.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/097a531d-3449-4384-bad0-2c1882ee9362.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6bb7c5cc-3e1a-467c-8687-c701c62e421b.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/514f8ebc-3b2e-46c4-9ebc-d8858d39c97c.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/25742403-eb93-4763-9368-b317c7a049d9.JPG"
    ],
    "specs": [
      {
        "label": "Jurisdiction",
        "value": "Bucharest, Romania"
      },
      {
        "label": "Category",
        "value": "PENTHOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/4c2cbb38-2a96-4625-86d8-a99b0f553463",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-c068f43c-d23",
    "slug": "marbella-mountain-foothills-architectural-estate",
    "title": "Marbella Mountain Foothills Architectural Estate",
    "subtitle": "5 Suites · 1897.00 sqm Built · Private Landscaped Grounds",
    "location": "Marbella, Costa del Sol, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€3,950,000",
    "priceNumeric": 3950000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "1,897 sqm",
    "usableArea": "1,897 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "7 Rooms · Expansive Private Grounds",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Marbella, Spain, this prime contemporary villa provides 1897.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235819/img-1235819-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235819/img-1235819-0.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-1.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-2.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-3.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-4.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-5.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-6.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-7.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-8.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-9.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-10.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-11.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-12.webp",
      "https://tet.ro/storage/properties/1235819/img-1235819-13.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "1897.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Marbella, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/c068f43c-d233-43fc-973b-4eee332e5211",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-fd191480-985",
    "slug": "private-opportunity-opera-grand-downtown-dubai",
    "title": "PRIVATE OPPORTUNITY | OPERA GRAND, DOWNTOWN DUBAI",
    "subtitle": "2 Bedrooms · 2500.00 sqm · Dubai, UAE",
    "location": "DUBAI, Dubai, United Arab Emirates",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "price": "REQUEST PRICE",
    "currency": "AED",
    "type": "Penthouse Residence",
    "category": "penthouse",
    "area": "2500.00 sqm",
    "usableArea": "2500.00 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "2 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "🔥 PRIVATE OPPORTUNITY | OPERA GRAND, DOWNTOWN DUBAI\n\nSky Collection · High Floor · Iconic Downtown Views\n\nAn exceptional opportunity to secure a 3-bedroom residence from the exclusive Sky Collection at Opera Grand, one of Downtown Dubai’s most established luxury addresses.\n\nProperty highlights:\n\n• Approx. 2,500 sq. ft.\n• 3 bedrooms + maid’s room\n• High-floor residence\n• Direct Burj Khalifa & Dubai Fountain views\n• Above the 50th floor, just 4 Sk...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Dubai luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c838c374-2cd9-446f-9a15-ba08043df59e.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c838c374-2cd9-446f-9a15-ba08043df59e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/32d38b58-757b-435b-aa9b-5d5ba1b09328.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1522e04d-89b6-460a-a0eb-d7c021e970a0.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/df9b40bf-b779-4a22-a96c-1ddd83fb5f5e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/32914a5b-7eb4-4791-84ab-04d9fe8e6154.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bf2a9db2-2f0a-4664-8592-714a530d3f72.JPG"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "2500.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "2 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Dubai, UAE"
      },
      {
        "label": "Category",
        "value": "PENTHOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/fd191480-985c-4a0f-938f-9aac0ec20627",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-a638f3a4-25a",
    "slug": "prime-land-oportunitate-de-investi-ie-12-5-ha-intravilan-cu-",
    "title": "Sovereign Development Land Holding — 12.5 Hectares with Approved Masterplan",
    "subtitle": "125000.00 sqm · Calarasi, Romania",
    "location": "CALARASI, Calarasi, Romania",
    "city": "Calarasi",
    "country": "Romania",
    "price": "€1,650,000",
    "priceNumeric": 1650000,
    "currency": "EUR",
    "type": "Land Residence",
    "category": "villa",
    "area": "125000.00 sqm",
    "usableArea": "125000.00 sqm",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Calarasi, Romania, this property offers refined contemporary living with 125000.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Calarasi luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7f9378ec-4b26-457f-99c8-fbd3d501da35.PNG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7f9378ec-4b26-457f-99c8-fbd3d501da35.PNG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/204a36dc-5fd1-462b-99d5-9ef693672c9d.PNG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/60555a47-96bd-4e91-af62-456a87de1f18.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c46f041b-6edf-42a2-a8c8-1f925014a1a7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a545e2f8-e956-461a-839b-66b68b9b1713.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b79e56f9-abc3-41e0-8ac3-1b6a93c3c423.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3a3af2c0-53fe-4253-bf56-fcd502ed96a8.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "125000.00 sqm"
      },
      {
        "label": "Jurisdiction",
        "value": "Calarasi, Romania"
      },
      {
        "label": "Category",
        "value": "LAND"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/a638f3a4-25a6-4f75-9074-b8a30f4fa279",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-e95e842f-a58",
    "slug": "prime-land-29-5-hectare-peste-500-ml-front-la-a1-20-km-de-bu",
    "title": "Strategic Industrial & Commercial Land Reserve — 29.5 Hectares on A1 Highway Corridor",
    "subtitle": "295000.00 sqm · Stoenesti, Romania",
    "location": "GIURGIU, Stoenesti, Romania",
    "city": "Stoenesti",
    "country": "Romania",
    "price": "€5,900,000",
    "priceNumeric": 5900000,
    "currency": "EUR",
    "type": "Land Residence",
    "category": "villa",
    "area": "295000.00 sqm",
    "usableArea": "295000.00 sqm",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Stoenesti, Romania, this property offers refined contemporary living with 295000.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Stoenesti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fcebffcd-c9aa-4542-9322-f87438e83eda.PNG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fcebffcd-c9aa-4542-9322-f87438e83eda.PNG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/01bf5105-61bb-461b-8a81-1c055ef8f947.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bffa0bf7-8e76-4b44-9cc8-d5f1c6d29a93.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f5a8bcdf-f2ed-4bf0-8274-ee2e3cebff2d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f6567aef-06e0-4a1f-92d0-8cb080f0f071.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/eb3f862d-f23a-4b59-8337-0e3400347fb7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e146546d-95d5-4fd3-b442-fbef96af6108.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1a58d565-6dbe-41ad-bb3e-021057adcf78.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/91b2c6c3-8b63-4c80-abef-051a9828318a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2eb04ac9-95aa-4d4c-8ba8-1c2743688fe6.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c3ffaf51-8975-46be-8925-d088056133c1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9a101944-89a5-4a4b-97d7-08ac44236b1d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/af9908bb-c998-4b13-92a0-d733b320df8b.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "295000.00 sqm"
      },
      {
        "label": "Jurisdiction",
        "value": "Stoenesti, Romania"
      },
      {
        "label": "Category",
        "value": "LAND"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/e95e842f-a588-4cfe-ac61-8f5d84437d46",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-5f83fe12-0fa",
    "slug": "vil-premium-bran",
    "title": "VILĂ PREMIUM | BRAN",
    "subtitle": "Bran, Romania",
    "location": "BRASOV, Bran, Romania",
    "city": "Bran",
    "country": "Romania",
    "price": "€2,999,000",
    "priceNumeric": 2999000,
    "currency": "EUR",
    "type": "Villa Estate",
    "category": "villa",
    "area": "Generous Private Footprint",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bran, Romania, this property offers refined contemporary living with and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bran luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2bca3abd-03a7-44e3-b208-1c4305de5ddf.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2bca3abd-03a7-44e3-b208-1c4305de5ddf.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/baa303a3-a642-4279-a849-48b3b97cd9f6.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5b79ceb8-a6ed-42fd-9996-504ce1ec367e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/02b97776-8b28-4db4-bdd4-b51273f4505b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/588dd455-5689-4222-b7ae-14132a78f7ec.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/771ba60f-a3ab-453d-8e9f-c46f862b61e9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ce98d41b-6ef3-48ba-a8a2-1cb55407f21d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fb6e5185-5539-4b20-937f-c3ff77b7d8a1.jpg"
    ],
    "specs": [
      {
        "label": "Jurisdiction",
        "value": "Bran, Romania"
      },
      {
        "label": "Category",
        "value": "VILLA"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/5f83fe12-0fae-40ef-a476-05daebd070e5",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-af4b3286-58a",
    "slug": "for-sale-prime-land-41-079-mp-langa-lacul-cernica",
    "title": "For Sale: Prime Land 41.079 mp langa LACUL CERNICA",
    "subtitle": "41079.00 sqm · Cernica, Romania",
    "location": "CERNICA, Cernica, Romania",
    "city": "Cernica",
    "country": "Romania",
    "price": "€1,561,000",
    "priceNumeric": 1561000,
    "currency": "EUR",
    "type": "Land Residence",
    "category": "villa",
    "area": "41079.00 sqm",
    "usableArea": "41079.00 sqm",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "Vanzare teren 41.079 mp, langa LACUL CERNICA, sat Tanganu, teren intravilan cu o deschidere de 500 mp.\n\nTerenul beneficiaza de utiliatati (apa , canalizare ,curent ).\nIndicatori urbanistici : POT 60% si CUT 2.\n\nTeren pentru rezidenta sau casa de vacanta.\n\nPret vanzare : 1.561.000 Euro",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Cernica luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b084a580-9359-4b7b-9607-dc59f50e82bc.PNG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b084a580-9359-4b7b-9607-dc59f50e82bc.PNG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b82cfe35-9dc3-410a-b1d2-ee8cbbde6438.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fe25744c-e869-4abc-8311-5b7271fa1f4c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/614fbfb6-f0ba-4bba-9b52-6278d72fec71.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a18fde3e-5b74-48f8-bf88-940cbbed539a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8653332e-1fe9-4cd3-a16d-6f1ae647c863.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "41079.00 sqm"
      },
      {
        "label": "Jurisdiction",
        "value": "Cernica, Romania"
      },
      {
        "label": "Category",
        "value": "LAND"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/af4b3286-58ac-4a9d-a967-40a86952324c",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-63962d2e-c42",
    "slug": "prime-land-intravilan-de-for-sale-in-corbeanca-padurea-petre",
    "title": "Prime Land Intravilan de For Sale: in Corbeanca, Padurea Petresti",
    "subtitle": "511.00 sqm · Corbeanca, Romania",
    "location": "CORBEANCA, Corbeanca, Romania",
    "city": "Corbeanca",
    "country": "Romania",
    "price": "€61,320",
    "priceNumeric": 61320,
    "currency": "EUR",
    "type": "Land Residence",
    "category": "villa",
    "area": "511.00 sqm",
    "usableArea": "511.00 sqm",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Corbeanca, Romania, this property offers refined contemporary living with 511.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Corbeanca luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7cee0fc6-023a-44c5-b675-82d43809f0b4.PNG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7cee0fc6-023a-44c5-b675-82d43809f0b4.PNG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/53834990-bc1b-4071-97d4-2102db34bafe.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8426743f-fceb-4c8f-bc22-e788e18a0593.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "511.00 sqm"
      },
      {
        "label": "Jurisdiction",
        "value": "Corbeanca, Romania"
      },
      {
        "label": "Category",
        "value": "LAND"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/63962d2e-c421-421b-8575-e4e48c037896",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-8de5b28d-b1f",
    "slug": "a-rare-expression-of-private-luxury-dubai",
    "title": "A RARE EXPRESSION OF PRIVATE LUXURY | DUBAI",
    "subtitle": "5 Bedrooms · Uae, UAE",
    "location": "DUBAI, Uae, United Arab Emirates",
    "city": "Uae",
    "country": "United Arab Emirates",
    "price": "REQUEST PRICE",
    "currency": "AED",
    "type": "Villa Estate",
    "category": "villa",
    "area": "Generous Private Footprint",
    "bedrooms": 5,
    "bathrooms": 4,
    "rooms": "5 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "- More information provided upon request - \n\n🌿 A RARE EXPRESSION OF PRIVATE LUXURY | DUBAI\n\nA collection of just 38 ultra-luxury mansions, created for those who value what true luxury is increasingly about: privacy, space and nature.\n\n🏡 5 & 6-bedroom mansions\n🌿 Private landscaped courtyards\n🏋️ Private gym\n🛗 Private elevator\n🚘 Air-conditioned basement parking\n✨ Expansive plots with exceptional privacy\n\nGenerous spaces. Private outdoor areas....",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Uae luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/03315fdf-828f-463f-b240-15b1c8b3cb4e.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/03315fdf-828f-463f-b240-15b1c8b3cb4e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3cd2016a-5966-4c65-a54f-55b09a587b3f.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/30b75bab-b047-4a3b-a33b-ab02d9ac0b4d.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cc46dcd5-2e43-406e-babd-5eb465dd830f.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b508062f-cdbb-414c-b3a8-5c9b4f00ca03.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/49b6f624-08eb-42e0-96cc-ebf2542ab1f4.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5146bf1f-92f6-49ff-b0ca-0a0f0fec491e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/81ed46ad-57fc-4bd9-9d05-c1edd1e856b3.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ba46eba5-69f4-4e82-be90-951b150ed2d5.JPG"
    ],
    "specs": [
      {
        "label": "Bedrooms",
        "value": "5 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Uae, UAE"
      },
      {
        "label": "Category",
        "value": "VILLA"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/8de5b28d-b1f7-4516-8756-af65e8fa7c04",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-beba2ca6-e6b",
    "slug": "a-private-villa-in-al-barari",
    "title": "A private villa in Al Barari",
    "subtitle": "Uae, UAE",
    "location": "UAE, Uae, United Arab Emirates",
    "city": "Uae",
    "country": "United Arab Emirates",
    "price": "REQUEST PRICE",
    "currency": "AED",
    "type": "Villa Estate",
    "category": "villa",
    "area": "Generous Private Footprint",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "A private villa in Al Barari.\n\nBrand-new, fully furnished and ready to move into, this five-bedroom residence offers the space and privacy that make Al Barari so sought after.\n\nA 16-metre pool, tropical garden and seven-metre-high glazing create a strong connection between the interiors and the outdoors. Italian travertine and carefully selected finishes complete the home.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Uae luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e7eeb606-3a38-4da9-a195-552e5ed1d8a6.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e7eeb606-3a38-4da9-a195-552e5ed1d8a6.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ae8dad8a-6b03-439e-936f-5ea6b38f5c40.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/03302b52-b5c4-4736-8527-349d2282d590.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/05bf8235-2eab-4289-a83c-f0a4d46d456b.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/530d1400-6d3d-4ab9-93e8-a80f83b3c90b.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/be0a5c4f-dd27-488f-88b3-fa33fe77884d.JPG"
    ],
    "specs": [
      {
        "label": "Jurisdiction",
        "value": "Uae, UAE"
      },
      {
        "label": "Category",
        "value": "VILLA"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/beba2ca6-e6bf-4e9f-b7ff-a0209d69fda6",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-5745c4b3-d8b",
    "slug": "for-sale-casa-9-camere-bucurestii-noi",
    "title": "For Sale: Casa 9 camere Bucurestii Noi",
    "subtitle": "8 Bedrooms · 225.00 sqm · Bucuresti, Romania",
    "location": "Calea Victoriei, Bucuresti Ilfov, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€270,000",
    "priceNumeric": 270000,
    "currency": "EUR",
    "type": "House Residence",
    "category": "villa",
    "area": "225.00 sqm",
    "usableArea": "225.00 sqm",
    "bedrooms": 8,
    "bathrooms": 6,
    "rooms": "8 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Vila individuala de vanzare | Bucurestii Noi – Parc Bazilescu | Ideala pentru locuinta, locuinta + birou sau doua familii\rTop Estate Team va propune spre vanzare o vila individuala amplasata intr-una dintre cele mai apreciate zone rezidentiale din nordul Capitalei – Bucurestii Noi, in imediata aprop...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://tet.ro/storage/properties/1230000/img-1230000-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1230000/img-1230000-0.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-1.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-2.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-3.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-4.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-5.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-6.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-7.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-8.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-9.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-10.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-11.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-12.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-13.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-14.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-15.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-16.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-17.webp",
      "https://tet.ro/storage/properties/1230000/img-1230000-18.webp"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "225.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "8 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "HOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1230000.html",
    "sourceName": "Chestertons Romania / Top Estate Team",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-e9812d69-5eb",
    "slug": "adunatii-copaceni-prime-land-1212-mp-hala-136-mp-casa-37-5-m",
    "title": "Adunatii Copaceni, Prime Land 1212 mp, hala 136 mp, casa 37.5 mp cu pivnita 12 mp",
    "subtitle": "Adunatii-copaceni, Romania",
    "location": "Calea Victoriei, Giurgiu, Adunatii-copaceni, Romania",
    "city": "Adunatii-copaceni",
    "country": "Romania",
    "price": "€70,000",
    "priceNumeric": 70000,
    "currency": "EUR",
    "type": "Land Residence",
    "category": "villa",
    "area": "Exclusive Floorplan",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "Excelenta prin experienta! - Top Estate Team \rOportunitate investitionala in Adunatii Copaceni, teren 1212 mp cu deschidere 12 mp, pe teren se afla o hala cu suprafata de 136 mp si o casa cu amprenta de 38 mp si pivnita de 12 mp.\rUtilitatile sunt urmatoarele, apa la put, curent 220 si trifazic, cond...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Adunatii-copaceni luxury market segment.",
    "heroImage": "https://tet.ro/storage/properties/1235563/img-1235563-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235563/img-1235563-0.webp",
      "https://tet.ro/storage/properties/1235563/img-1235563-1.webp",
      "https://tet.ro/storage/properties/1235563/img-1235563-2.webp"
    ],
    "specs": [
      {
        "label": "Jurisdiction",
        "value": "Adunatii-copaceni, Romania"
      },
      {
        "label": "Category",
        "value": "LAND"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1235563.html",
    "sourceName": "Chestertons Romania / Top Estate Team",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-bbf9f2c5-ba8",
    "slug": "villa-de-for-sale-in-malaga",
    "title": "Villa de For Sale: in Malaga",
    "subtitle": "5 Bedrooms · 1463.00 sqm · Marbella, Spain",
    "location": "Marbella, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€9,950,000",
    "priceNumeric": 9950000,
    "currency": "EUR",
    "type": "Villa Estate",
    "category": "villa",
    "area": "1463.00 sqm",
    "usableArea": "1463.00 sqm",
    "bedrooms": 5,
    "bathrooms": 4,
    "rooms": "5 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Marbella, Spain, this property offers refined contemporary living with 5 bedrooms, 1463.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Marbella luxury market segment.",
    "heroImage": "https://tet.ro/storage/properties/1235818/img-1235818-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235818/img-1235818-0.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-1.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-2.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-3.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-4.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-5.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-6.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-7.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-8.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-9.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-10.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-11.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-12.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-13.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-14.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-15.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-16.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-17.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-18.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-19.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-20.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-21.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-22.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-23.webp",
      "https://tet.ro/storage/properties/1235818/img-1235818-24.webp"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "1463.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "5 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Marbella, Spain"
      },
      {
        "label": "Category",
        "value": "VILLA"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1235818.html",
    "sourceName": "Chestertons Romania / Top Estate Team",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-d511a13b-cab",
    "slug": "residence-de-for-sale-in-malaga",
    "title": "Residence de For Sale: in Malaga",
    "subtitle": "2 Bedrooms · 214.00 sqm · Benahavis, Spain",
    "location": "Benahavis, Spain",
    "city": "Benahavis",
    "country": "Spain",
    "price": "€1,290,000",
    "priceNumeric": 1290000,
    "currency": "EUR",
    "type": "Apartment Residence",
    "category": "villa",
    "area": "214.00 sqm",
    "usableArea": "214.00 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "2 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Benahavis, Spain, this property offers refined contemporary living with 2 bedrooms, 214.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Benahavis luxury market segment.",
    "heroImage": "https://tet.ro/storage/properties/1235815/img-1235815-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235815/img-1235815-0.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-1.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-2.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-3.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-4.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-5.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-6.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-7.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-8.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-9.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-10.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-11.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-12.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-13.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-14.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-15.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-16.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-17.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-18.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-19.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-20.webp",
      "https://tet.ro/storage/properties/1235815/img-1235815-21.webp"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "214.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "2 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Benahavis, Spain"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1235815.html",
    "sourceName": "Chestertons Romania / Top Estate Team",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-4215abea-904",
    "slug": "casa-de-for-sale-in-malaga",
    "title": "Casa de For Sale: in Malaga",
    "subtitle": "3 Bedrooms · 263.00 sqm · Benahavis, Spain",
    "location": "Benahavis, Spain",
    "city": "Benahavis",
    "country": "Spain",
    "price": "€1,495,000",
    "priceNumeric": 1495000,
    "currency": "EUR",
    "type": "House Residence",
    "category": "villa",
    "area": "263.00 sqm",
    "usableArea": "263.00 sqm",
    "bedrooms": 3,
    "bathrooms": 2,
    "rooms": "3 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Benahavis, Spain, this property offers refined contemporary living with 3 bedrooms, 263.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Benahavis luxury market segment.",
    "heroImage": "https://tet.ro/storage/properties/1235814/img-1235814-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235814/img-1235814-0.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-1.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-2.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-3.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-4.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-5.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-6.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-7.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-8.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-9.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-10.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-11.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-12.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-13.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-14.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-15.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-16.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-17.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-18.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-19.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-20.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-21.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-22.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-23.webp",
      "https://tet.ro/storage/properties/1235814/img-1235814-24.webp"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "263.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "3 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Benahavis, Spain"
      },
      {
        "label": "Category",
        "value": "HOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1235814.html",
    "sourceName": "Chestertons Romania / Top Estate Team",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-db423bed-21b",
    "slug": "prime-land-de-for-sale-in-malaga",
    "title": "Prime Land de For Sale: in Malaga",
    "subtitle": "Mijas, Spain",
    "location": "Mijas, Spain",
    "city": "Mijas",
    "country": "Spain",
    "price": "€250,000",
    "priceNumeric": 250000,
    "currency": "EUR",
    "type": "Land Residence",
    "category": "villa",
    "area": "Exclusive Floorplan",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Mijas, Spain, this property offers refined contemporary living with and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Mijas luxury market segment.",
    "heroImage": "https://tet.ro/storage/properties/1235812/img-1235812-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235812/img-1235812-0.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-1.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-2.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-3.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-4.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-5.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-6.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-7.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-8.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-9.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-10.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-11.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-12.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-13.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-14.webp",
      "https://tet.ro/storage/properties/1235812/img-1235812-15.webp"
    ],
    "specs": [
      {
        "label": "Jurisdiction",
        "value": "Mijas, Spain"
      },
      {
        "label": "Category",
        "value": "LAND"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1235812.html",
    "sourceName": "Chestertons Romania / Top Estate Team",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
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
      {
        "label": "Built Footprint",
        "value": "1,024.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "6 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Marbella, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × TET.ro"
      }
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
  },
  {
    "id": "prop-hf-7fb2e674-30c",
    "slug": "prime-land-intravilan-4654mp-de-for-sale-dedeman",
    "title": "Prime Land intravilan 4654mp de For Sale: Dedeman",
    "subtitle": "Targoviste, Romania",
    "location": "Calea Victoriei, Dambovita, Targoviste, Romania",
    "city": "Targoviste",
    "country": "Romania",
    "price": "€325,780",
    "priceNumeric": 325780,
    "currency": "EUR",
    "type": "Land Residence",
    "category": "villa",
    "area": "Exclusive Floorplan",
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Targoviste, Romania, this property offers refined contemporary living with and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Targoviste luxury market segment.",
    "heroImage": "https://tet.ro/storage/properties/1234877/img-1234877-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1234877/img-1234877-0.webp",
      "https://tet.ro/storage/properties/1234877/img-1234877-1.webp",
      "https://tet.ro/storage/properties/1234877/img-1234877-2.webp",
      "https://tet.ro/storage/properties/1234877/img-1234877-3.webp",
      "https://tet.ro/storage/properties/1234877/img-1234877-4.webp"
    ],
    "specs": [
      {
        "label": "Jurisdiction",
        "value": "Targoviste, Romania"
      },
      {
        "label": "Category",
        "value": "LAND"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://tet.ro/proprietate-1234877.html",
    "sourceName": "Chestertons Romania / Top Estate Team",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-96ae0319-4a1",
    "slug": "cascada-de-camoj-n-sovereign-villa-marbella",
    "title": "Cascada de Camoján Sovereign Villa — Marbella",
    "subtitle": "5 Suites · 1459.00 sqm Built · Private Landscaped Grounds",
    "location": "Marbella, Costa del Sol, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€5,995,000",
    "priceNumeric": 5995000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "1,459 sqm",
    "usableArea": "1,459 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "5 Rooms · Forest & Sea Panoramas",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Marbella, Spain, this prime contemporary villa provides 1459.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235820/img-1235820-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235820/img-1235820-0.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-1.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-2.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-3.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-4.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-5.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-6.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-7.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-8.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-9.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-10.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-11.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-12.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-13.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-14.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-15.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-16.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-17.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-18.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-19.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-20.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-21.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-22.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-23.webp",
      "https://tet.ro/storage/properties/1235820/img-1235820-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "1459.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Marbella, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/96ae0319-4a1a-4170-ba92-86dfdd7af02e",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-060f556b-758",
    "slug": "marbella-club-coastal-sanctuary-villa",
    "title": "Marbella Club Coastal Sanctuary Villa",
    "subtitle": "5 Suites · 845.00 sqm Built · Private Landscaped Grounds",
    "location": "Marbella, Costa del Sol, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€9,950,000",
    "priceNumeric": 9950000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "845 sqm",
    "usableArea": "845 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "6 Rooms · Landscaped Palm Gardens",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Marbella, Spain, this prime contemporary villa provides 845.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235823/img-1235823-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235823/img-1235823-0.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-1.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-2.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-3.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-4.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-5.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-6.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-7.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-8.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-9.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-10.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-11.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-12.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-13.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-14.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-15.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-16.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-17.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-18.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-19.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-20.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-21.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-22.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-23.webp",
      "https://tet.ro/storage/properties/1235823/img-1235823-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "845.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Marbella, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/060f556b-758e-4ac5-b75c-dea2d98dc9ed",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-f3a6a931-fa7",
    "slug": "los-monteros-prime-architectural-mansion-marbella",
    "title": "Los Monteros Prime Architectural Mansion — Marbella",
    "subtitle": "5 Suites · 1142.00 sqm Built · Private Landscaped Grounds",
    "location": "Marbella, Costa del Sol, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€9,950,000",
    "priceNumeric": 9950000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "1,142 sqm",
    "usableArea": "1,142 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "6 Rooms · Sea View Solarium & Pool",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Marbella, Spain, this prime contemporary villa provides 1142.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235830/img-1235830-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235830/img-1235830-0.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-1.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-2.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-3.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-4.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-5.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-6.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-7.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-8.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-9.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-10.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-11.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-12.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-13.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-14.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-15.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-16.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-17.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-18.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-19.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-20.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-21.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-22.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-23.webp",
      "https://tet.ro/storage/properties/1235830/img-1235830-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "1142.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Marbella, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/f3a6a931-fa74-464d-b456-afb5648f04ed",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-b199540c-e0f",
    "slug": "descoper-elegan-a-i-confortul-ntr-o-locuin-de-lux-in-zona-fl",
    "title": "Descoperă eleganța și confortul într-o locuință de lux, in zona Floreasca",
    "subtitle": "2 Bedrooms · 160.00 sqm · Bucuresti, Romania",
    "location": "Floreasca, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€575,000",
    "priceNumeric": 575000,
    "currency": "EUR",
    "type": "Apartment Residence",
    "category": "villa",
    "area": "160.00 sqm",
    "usableArea": "160.00 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "2 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 2 bedrooms, 160.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8d04aec0-b6e7-4adb-9380-a061eef6da44.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8d04aec0-b6e7-4adb-9380-a061eef6da44.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/18f537dc-d31f-4fd8-8970-7a2c6a7ef2d3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/277a85b1-f820-4609-986f-d96870ae7bbb.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4bcf70ba-89e8-43b6-b05a-efd4cf787713.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/87a225cf-789e-41b8-99e6-72082982c362.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/70f8c84e-cc16-4f7e-b569-66deeeb9b6fc.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8c47a0ee-6d61-453c-b7ff-f3954446adb2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e9def882-ec09-4962-91e5-6ebf9cc6d934.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4acc1a4a-a205-4e03-acfb-c949f7eb2423.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8db0f322-27fa-48a9-bdbe-20efb6f06813.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6927724e-d173-4737-bbe0-72c2affecd2e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/00b7337c-85cc-4b09-a83b-b10c30db4892.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/00cf6be1-f0e6-4705-8f36-0007caf3d1e1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b01059f1-c918-4811-80d0-c3712e309d7d.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "160.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "2 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/b199540c-e0f1-4ebb-8d14-f9a77169c059",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-ee3d3142-1cb",
    "slug": "penthouse-ul-visurilor-tale",
    "title": "Penthouse-ul visurilor tale!!",
    "subtitle": "3 Bedrooms · 285.00 sqm · Bucuresti, Romania",
    "location": "Barbu Vacarescu, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€1,200,000",
    "priceNumeric": 1200000,
    "currency": "EUR",
    "type": "Penthouse Residence",
    "category": "penthouse",
    "area": "285.00 sqm",
    "usableArea": "285.00 sqm",
    "bedrooms": 3,
    "bathrooms": 2,
    "rooms": "3 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 3 bedrooms, 285.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cb49db18-a29c-4d15-83ad-24ab71f3ea0e.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cb49db18-a29c-4d15-83ad-24ab71f3ea0e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/de6e2d0f-80bc-4414-9732-448493e6f1a1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/272ea2f8-ec86-40d6-80e9-d449f58f0fb3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5cdce01e-5d58-4071-9811-1e2437783bed.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bc1a04a7-b09a-4929-b3c0-6c5e396a90f3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/df031e8d-7016-48ea-bef3-a98fc4a6c8ea.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b89f4ef9-3f76-4126-95cc-cab094ee963d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/04ead303-263f-4ffa-8ff3-3993d469d5cc.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cea31c85-15ce-43a3-adea-4cc29fa9c109.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/97f8be73-4446-48c5-a9f4-b95e4c4fc8d2.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "285.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "3 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "PENTHOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/ee3d3142-1cbe-4850-b609-6dc8c0b69f4f",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-01aa10fa-869",
    "slug": "nueva-andaluc-a-golf-valley-signature-villa-marbella",
    "title": "Nueva Andalucía Golf Valley Signature Villa — Marbella",
    "subtitle": "5 Suites · 837.00 sqm Built · Private Landscaped Grounds",
    "location": "Marbella, Costa del Sol, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€5,875,000",
    "priceNumeric": 5875000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "837 sqm",
    "usableArea": "837 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "5 Rooms · Golf Course Panoramas",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Marbella, Spain, this prime contemporary villa provides 837.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235826/img-1235826-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235826/img-1235826-0.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-1.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-2.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-3.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-4.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-5.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-6.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-7.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-8.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-9.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-10.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-11.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-12.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-13.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-14.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-15.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-16.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-17.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-18.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-19.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-20.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-21.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-22.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-23.webp",
      "https://tet.ro/storage/properties/1235826/img-1235826-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "837.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Marbella, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/01aa10fa-869e-4b31-b0bf-4052ec1ee77d",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-27c2f47e-fd4",
    "slug": "villa-mediteraneana-de-for-sale-in-nordul-bucurestiului",
    "title": "Villa mediteraneana de For Sale: in Nordul Bucurestiului",
    "subtitle": "4 Bedrooms · 500.00 sqm · Tunari, Romania",
    "location": "Tunari, Romania",
    "city": "Tunari",
    "country": "Romania",
    "price": "€500,000",
    "priceNumeric": 500000,
    "currency": "EUR",
    "type": "Villa Estate",
    "category": "villa",
    "area": "500.00 sqm",
    "usableArea": "500.00 sqm",
    "bedrooms": 4,
    "bathrooms": 3,
    "rooms": "4 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Tunari, Romania, this property offers refined contemporary living with 4 bedrooms, 500.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Tunari luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0a23187e-6c20-4965-a039-a09e872a8186.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0a23187e-6c20-4965-a039-a09e872a8186.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/397c33e9-edcb-4314-b00f-ae2da9375648.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ff2cb0e7-fc4f-484e-b4be-b5eec7212f6c.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4bbd2794-0328-4a90-b08f-9da19c9d4281.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5485772b-17b0-48ba-a82a-3514399957c1.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4888474a-ce4f-4010-a4e1-81aa641afa88.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/929ea089-ebb1-4131-8d84-11ccfcc65a15.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/05b934d7-802f-4949-9e14-bb336b262c6b.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e0ed3ed3-568e-4692-9a42-14dfb91c4606.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/aa03a48a-430b-40b8-93f2-bc101e172a95.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/da11c5e1-d86c-4d55-ae79-561168b1b57c.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/91a808b1-45f5-403c-a01d-add79da56d31.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/00899a4b-0790-4ae3-ade0-d54eebe32269.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5d5c6b42-69fa-4251-9c8f-2fb94573c583.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d02ff154-6614-473a-8208-7d4746777ee6.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dbbf9462-671d-40b4-b7fa-d21c88df1be0.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9c358b7f-a713-4e22-8c8e-e679dd3a375f.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e32d97b4-d488-47b7-9810-0366df2c621e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a86d7126-5510-4828-8f91-ba80ab541a26.JPG"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "500.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "4 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Tunari, Romania"
      },
      {
        "label": "Category",
        "value": "VILLA"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/27c2f47e-fd49-492c-a89a-cb6360f8d78e",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-e1c04d33-fba",
    "slug": "la-zagaleta-sovereign-hillside-estate-benahav-s",
    "title": "La Zagaleta Sovereign Hillside Estate — Benahavís",
    "subtitle": "5 Suites · 820.00 sqm Built · Private Landscaped Grounds",
    "location": "Benahavis, Costa del Sol, Spain",
    "city": "Benahavis",
    "country": "Spain",
    "price": "€6,995,000",
    "priceNumeric": 6995000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "820 sqm",
    "usableArea": "820 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "6 Rooms · Gated Reserve Privacy",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Benahavis, Spain, this prime contemporary villa provides 820.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235825/img-1235825-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235825/img-1235825-0.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-1.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-2.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-3.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-4.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-5.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-6.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-7.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-8.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-9.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-10.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-11.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-12.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-13.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-14.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-15.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-16.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-17.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-18.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-19.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-20.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-21.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-22.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-23.webp",
      "https://tet.ro/storage/properties/1235825/img-1235825-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "820.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Benahavis, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/e1c04d33-fbaa-44de-a0f5-c3c86bb07700",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-b5a7ea46-7fe",
    "slug": "mut-te-acum-residence-superb-cu-4-camere",
    "title": "Signature 4-Room Luxury Residence in Northern Corridor",
    "subtitle": "3 Bedrooms · 147.00 sqm · Bucuresti, Romania",
    "location": "Fabrica de Glucoza, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€475,000",
    "priceNumeric": 475000,
    "currency": "EUR",
    "type": "Apartment Residence",
    "category": "development",
    "area": "147.00 sqm",
    "usableArea": "147.00 sqm",
    "bedrooms": 3,
    "bathrooms": 2,
    "rooms": "3 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 3 bedrooms, 147.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c7a9a489-be65-4166-8641-2d8e137514aa.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c7a9a489-be65-4166-8641-2d8e137514aa.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9c79fa9f-d067-43a7-a43c-78aa67aa991e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/30867acb-d9b3-4d85-b158-d843be6f4e1f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b0954ba6-5191-4f67-9094-93793c3ab0f5.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/adcf7b5e-313b-498b-b989-57a7cb459ff6.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/091d40aa-3687-4757-a77f-152fdae63144.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b362a8d7-d152-48b4-a419-1fdd597efc8d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4cba23b4-4b64-4fcf-b55d-33bb82751689.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fbf8f680-4a00-4e54-a986-c793bb88da7a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/72d7784f-946b-4d7b-8300-8b1b6004cdd9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/16c54001-58e2-4dd9-b7f3-92f5cecc4b3f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/acf01b8d-d678-41f0-82bf-dda28f1de7a5.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/da09de00-cfbb-494c-b05a-ee472631ea47.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a04b8258-7e80-4347-8892-f321a0348abc.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6f167442-211a-4028-8dd6-7907dfb6654f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0469412e-b807-445f-9a13-abf17bb3c106.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "147.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "3 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/b5a7ea46-7fe6-4bfc-94df-5261a20d48c7",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-3686f019-dad",
    "slug": "el-madro-al-horizon-view-private-villa-benahav-s",
    "title": "El Madroñal Horizon View Private Villa — Benahavís",
    "subtitle": "5 Suites · 1584.00 sqm Built · Private Landscaped Grounds",
    "location": "Benahavis, Costa del Sol, Spain",
    "city": "Benahavis",
    "country": "Spain",
    "price": "€8,350,000",
    "priceNumeric": 8350000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "1,584 sqm",
    "usableArea": "1,584 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "5 Rooms · Mountain & Sea Panoramas",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Benahavis, Spain, this prime contemporary villa provides 1584.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235827/img-1235827-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235827/img-1235827-0.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-1.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-2.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-3.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-4.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-5.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-6.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-7.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-8.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-9.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-10.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-11.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-12.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-13.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-14.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-15.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-16.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-17.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-18.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-19.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-20.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-21.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-22.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-23.webp",
      "https://tet.ro/storage/properties/1235827/img-1235827-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "1584.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Benahavis, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/3686f019-dad6-4aec-93eb-eee4ea88191f",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-e1cd5028-ce4",
    "slug": "guadalmina-baja-private-beachside-compound-san-pedro",
    "title": "Guadalmina Baja Private Beachside Compound — San Pedro",
    "subtitle": "5 Suites · 1439.00 sqm Built · Private Landscaped Grounds",
    "location": "San Pedro de Alcántara, Costa del Sol, Spain",
    "city": "San Pedro de Alcántara",
    "country": "Spain",
    "price": "€5,995,000",
    "priceNumeric": 5995000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "1,439 sqm",
    "usableArea": "1,439 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "6 Rooms · Subtropical Grounds",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of San Pedro de Alcántara, Spain, this prime contemporary villa provides 1439.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235824/img-1235824-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235824/img-1235824-0.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-1.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-2.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-3.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-4.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-5.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-6.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-7.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-8.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-9.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-10.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-11.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-12.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-13.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-14.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-15.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-16.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-17.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-18.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-19.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-20.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-21.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-22.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-23.webp",
      "https://tet.ro/storage/properties/1235824/img-1235824-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "1439.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "San Pedro de Alcántara, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/e1cd5028-ce4f-4ffd-9375-c5916c3099b9",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-fe463726-74f",
    "slug": "residence-elegant-n-her-str-u-gr-din-privat",
    "title": "Residence elegant în Herăstrău | Grădină privată",
    "subtitle": "2 Bedrooms · 105.00 sqm · Bucuresti, Romania",
    "location": "Herastrau, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€1,300",
    "priceNumeric": 1300,
    "currency": "EUR",
    "type": "Apartment Residence",
    "category": "villa",
    "area": "105.00 sqm",
    "usableArea": "105.00 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "2 Bedrooms · Living Salon · Private Amenities",
    "status": "Available for Lease",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 2 bedrooms, 105.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6cea493c-97df-429b-887a-84b0608206c0.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6cea493c-97df-429b-887a-84b0608206c0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/351a72c5-5a40-4bed-9888-e5246fd9bb18.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/60784736-0d9e-46fc-8a27-3735de3c00bb.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/201a0234-f01b-449b-a3d2-f3593a6e9a18.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5149c196-99d4-4c10-b598-ca355af6227d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4b30cb2c-16bd-4b99-b3f7-e8fc5b476ef1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f0447073-b2f5-475a-8c03-14f983b7c943.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e9bf7a66-3464-4435-a71f-74999fa23aaf.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bf962c45-c1cc-42eb-9f39-b3d8d50d1a59.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d2cf650a-69a9-40c7-a5e8-9be24e047169.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/82f2baf0-faf5-43a6-89ee-5babf554d089.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/feca2fda-7a08-4658-b2f1-5cfa07ac6bbc.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/33079d4b-86eb-4306-819b-e3c0437d41d3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/720cdc9b-9be6-4bff-a25e-e1fabbf04828.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e386a2f9-6c69-4dd2-9258-3bf7ba7420df.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fa8732f6-fbd1-419e-9e21-9af00db95d1c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ed4027f4-5953-4cb2-a4de-739542854daa.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3ed28eb8-8b45-4967-bd7e-1f81adc36009.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f4c0fba6-88fd-40f2-a7bc-0883cd4a4a69.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/758ceb65-1ac8-4b8f-a3d2-ed8c03e75c86.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "105.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "2 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/fe463726-74f7-408d-9adb-79cd2f03ceb6",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-8fab889f-5b3",
    "slug": "residence-cu-2-camere-de-for-sale-in-floreasca",
    "title": "Residence cu 2 camere de For Sale: in Floreasca",
    "subtitle": "1 Bedrooms · 70.00 sqm · Bucuresti, Romania",
    "location": "Floreasca, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€245,000",
    "priceNumeric": 245000,
    "currency": "EUR",
    "type": "Apartment Residence",
    "category": "villa",
    "area": "70.00 sqm",
    "usableArea": "70.00 sqm",
    "bedrooms": 1,
    "bathrooms": 1,
    "rooms": "1 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 1 bedrooms, 70.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c9b607a4-766f-4ec9-be7c-a1694723124f.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c9b607a4-766f-4ec9-be7c-a1694723124f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9bee99dd-3ca8-49d0-83ee-6f3a2575c2b8.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/df26a438-2064-487c-b8ae-8f82539da5b1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/09bd93cd-ac78-4931-b298-8d20843d06c9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a358d153-5169-4f2c-8304-115a45afbde0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/feb6fbb0-769d-4c12-950a-e2ceb3f658ba.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/41b896fa-b07d-4c63-85eb-23416da7b3c6.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/19562502-95c8-4282-9eea-32dc45dfba8d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/49b29a0e-7d20-45eb-8802-8ba3900d4210.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/eb580f5c-9d71-4979-8d3c-683b34a0fdf8.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/edb7c888-8543-435b-be6f-b7023675712b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b7a98d71-73b4-4c9f-8348-4557a66df78a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/30ada52b-f57e-43ec-bf7b-67fa2573cad5.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/57f24cab-928b-4d2e-92f6-eb3832be1c5d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/88425056-2a93-4618-ae2d-731ca4ec73f6.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "70.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "1 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/8fab889f-5b33-4ef0-8fed-5a3c1d5eb80f",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-856a65de-27d",
    "slug": "marbella-hill-club-mediterranean-modern-villa",
    "title": "Marbella Hill Club Mediterranean Modern Villa",
    "subtitle": "5 Suites · 786.00 sqm Built · Private Landscaped Grounds",
    "location": "Marbella, Costa del Sol, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€7,950,000",
    "priceNumeric": 7950000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "786 sqm",
    "usableArea": "786 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "7 Rooms · Elevated Sea Vistas",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Marbella, Spain, this prime contemporary villa provides 786.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235822/img-1235822-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235822/img-1235822-0.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-1.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-2.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-3.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-4.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-5.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-6.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-7.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-8.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-9.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-10.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-11.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-12.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-13.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-14.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-15.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-16.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-17.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-18.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-19.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-20.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-21.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-22.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-23.webp",
      "https://tet.ro/storage/properties/1235822/img-1235822-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "786.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Marbella, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/856a65de-27dc-4f0e-9590-c6e148f245be",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-ad3ef53d-0aa",
    "slug": "own-the-sky-in-pipera-luxurious-penthouse-masterpiece",
    "title": "Pipera Horizon Sky Penthouse — Panoramic Northern Views",
    "subtitle": "4 Bedrooms · 372.00 sqm · Bucharest, Romania",
    "location": "Pipera, Bucharest, Romania",
    "city": "Bucharest",
    "country": "Romania",
    "price": "€650,000",
    "priceNumeric": 650000,
    "currency": "EUR",
    "type": "Penthouse Residence",
    "category": "penthouse",
    "area": "372.00 sqm",
    "usableArea": "372.00 sqm",
    "bedrooms": 4,
    "bathrooms": 3,
    "rooms": "4 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Own the Sky in Pipera – Luxurious Penthouse Masterpiece!\n\nDiscover an extraordinary €650,000 + VAT penthouse in the heart of Pipera, with seamless access to Aviatiei. This 372 sqm urban oasis, with 212 sqm of breathtaking terraces, redefines luxury living. \n\nWhy This Penthouse? \n✅ Sprawling Elegance: 176 sqm interior + 212 sqm terraces, including a 150 sqm rooftop haven. \n✅ Prime Location: Steps from Pipera’s vibrant amenities, minutes from Aviat...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucharest luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b02cd0f3-9e0d-4942-a6bc-ace88087db52.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b02cd0f3-9e0d-4942-a6bc-ace88087db52.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/adb9ff19-7441-4812-9d3a-0d2ee8797e37.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1c9d7a84-c4b2-464e-aefa-723c27ac96c2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dddceae0-330f-4731-a57b-2deda0dd29e2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e23d5813-e951-443d-9f06-d5cdb28181fe.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b8706f88-6e3f-47f0-ad2c-a6f60a8c2f22.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/56d11452-4610-4fa5-8750-e62b86d9e816.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0ee81e16-dd47-413f-a691-5eea482cbe41.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b5a1914b-c01a-4950-b2ba-13abb331ff1a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/38e84123-e277-48e7-b079-eb4c282c6cc1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/061b9bf6-41c7-47c7-9892-d7cc54e6d7a3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e3b33257-98c7-426d-a001-531aa524369e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/592feeb9-5050-4f25-9d47-a2b339a15f56.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/10f50627-2ce3-4722-aef3-ec21f3a9698e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fb2b76b2-e380-4e4d-896d-ca28e06bb72b.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "372.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "4 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucharest, Romania"
      },
      {
        "label": "Category",
        "value": "PENTHOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/ad3ef53d-0aa3-44ba-b531-569b2316672e",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-3d2f78ec-95c",
    "slug": "brabus-island-the-epitome-of-luxury-living",
    "title": "BRABUS ISLAND: The Epitome of Luxury Living",
    "subtitle": "2 Bedrooms · 170.00 sqm · Dubai, UAE",
    "location": "Dubai, United Arab Emirates",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "price": "AED 1,400,000",
    "priceNumeric": 1400000,
    "currency": "AED",
    "type": "Apartment Residence",
    "category": "villa",
    "area": "170.00 sqm",
    "usableArea": "170.00 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "2 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "BRABUS ISLAND: The Epitome of Luxury Living\n\nStep into the extraordinary world of BRABUS ISLAND, a groundbreaking waterfront development nestled in the prestigious Al Raha Beach, Abu Dhabi. \nCrafted for visionaries who embrace the extraordinary, this exclusive branded island embodies the legendary BRABUS design philosophy, seamlessly blending iconic style with cutting-edge innovation to redefine modern luxury living.\n\nArchitectural Excellence Bey...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Dubai luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/46e126be-a91d-4380-ba5a-e3e300513b45.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/46e126be-a91d-4380-ba5a-e3e300513b45.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3a93a8de-1000-4105-9b07-336396a55cc7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/65c7cc1a-3d87-464b-9e43-7b6441016069.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0d524951-262f-423a-8119-6d09050b7d73.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cb7c6656-5519-43aa-ae88-022a9f0f6e89.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ff053b1b-b595-4fa1-8ce5-14ac8fcfb7b2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6ce30f83-1d83-4aa8-9084-f8360456d2a5.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9faef4d5-b77f-49f1-8b3b-2d6aeace7506.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3476981a-50fe-4189-b830-707559547d13.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4700b117-55d1-46ef-906f-288cbf450a8e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a6476626-96ff-4231-8c9c-edf72d754ad2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/23c98e80-d955-4f1f-94d7-5d11e168465b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/db99d312-2caf-4813-b60a-88256ffa1955.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bc1c29c2-f624-42af-a0c1-c2a5fa666aa3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ce2b42e5-50e2-45c3-9a8d-fd7c1b70f57e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/18388b2e-e70b-4a3d-8445-cfb085a7fa3a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/947a9ff5-2a06-43b8-bf50-506c2e456617.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6b955c4a-0697-4760-81f8-b38985de5944.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d34f67e2-8d46-47a4-9577-f9dd8711f514.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "170.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "2 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Dubai, UAE"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/3d2f78ec-95ce-4a98-891e-ec047202600f",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-7c5535d9-4a5",
    "slug": "san-pedro-promenade-architectural-villa-costa-del-sol",
    "title": "San Pedro Promenade Architectural Villa — Costa del Sol",
    "subtitle": "5 Suites · 361.00 sqm Built · Private Landscaped Grounds",
    "location": "San Pedro de Alcántara, Costa del Sol, Spain",
    "city": "San Pedro de Alcántara",
    "country": "Spain",
    "price": "€5,750,000",
    "priceNumeric": 5750000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "361 sqm",
    "usableArea": "361 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "5 Rooms · Modern Minimalist Living",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of San Pedro de Alcántara, Spain, this prime contemporary villa provides 361.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235832/img-1235832-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235832/img-1235832-0.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-1.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-2.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-3.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-4.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-5.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-6.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-7.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-8.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-9.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-10.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-11.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-12.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-13.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-14.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-15.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-16.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-17.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-18.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-19.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-20.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-21.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-22.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-23.webp",
      "https://tet.ro/storage/properties/1235832/img-1235832-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "361.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "San Pedro de Alcántara, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/7c5535d9-4a54-4cbf-b252-04cc8df41964",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-2229b112-174",
    "slug": "nag-eles-prime-foothills-residence-marbella",
    "title": "Nagüeles Prime Foothills Residence — Marbella",
    "subtitle": "5 Suites · 833.00 sqm Built · Private Landscaped Grounds",
    "location": "Marbella, Costa del Sol, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€8,950,000",
    "priceNumeric": 8950000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "833 sqm",
    "usableArea": "833 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "6 Rooms · Private Olive Grove",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Marbella, Spain, this prime contemporary villa provides 833.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235834/img-1235834-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235834/img-1235834-0.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-1.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-2.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-3.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-4.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-5.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-6.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-7.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-8.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-9.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-10.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-11.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-12.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-13.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-14.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-15.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-16.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-17.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-18.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-19.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-20.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-21.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-22.webp",
      "https://tet.ro/storage/properties/1235834/img-1235834-23.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "833.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Marbella, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/2229b112-1740-4c65-a876-9168086956a2",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-4cb9e987-27a",
    "slug": "residence-premium-cu-3-camere-i-teras-de-30-mp-zona-chei-bra",
    "title": "Historic Șchei Luxury 3-Room Residence with 30 sqm Terrace — Brașov",
    "subtitle": "2 Bedrooms · 120.00 sqm · Brasov, Romania",
    "location": "Schei, Brasov, Brasov, Romania",
    "city": "Brasov",
    "country": "Romania",
    "price": "€375,000",
    "priceNumeric": 375000,
    "currency": "EUR",
    "type": "Villa Estate",
    "category": "villa",
    "area": "120.00 sqm",
    "usableArea": "120.00 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "2 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Brasov, Romania, this property offers refined contemporary living with 2 bedrooms, 120.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Brasov luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2de04fd8-a7c3-4438-acc9-e70b4f940a4c.jpeg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2de04fd8-a7c3-4438-acc9-e70b4f940a4c.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/71fc8938-7c1f-48d5-95a1-7567d5427fab.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d855178a-6c27-465a-8cba-7084ecb45fe1.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/34facdfc-53c3-4012-b633-b28cbbf150ca.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1a26abc7-9208-458f-b8f2-0cd7b93e0a7c.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b4366cf2-69e8-441c-ae9c-44e690e8abac.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e6ddff43-d139-4190-a91a-e135e6b24745.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/111f9337-290d-4e9e-b2ff-6893a923554a.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7a3d5afa-735e-455f-89eb-3c7db932b7ca.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c4d71edb-4c91-4d6d-ad6d-95ac01b95e81.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fb6e2171-26da-4566-9736-0e8b09ef776f.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1d60e11f-4f34-4490-a1ca-3a44442552cc.jpeg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "120.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "2 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Brasov, Romania"
      },
      {
        "label": "Category",
        "value": "VILLA"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/4cb9e987-27a3-4a1e-85ab-e1f666148a04",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-82d0ddfd-2e8",
    "slug": "oportunitate-de-investitie-la-malul-m-rii",
    "title": "Oportunitate de investitie la malul mārii",
    "subtitle": "40.00 sqm · Mamaia, Romania",
    "location": "Mamaia Nord, Mamaia, Romania",
    "city": "Mamaia",
    "country": "Romania",
    "price": "€72,000",
    "priceNumeric": 72000,
    "currency": "EUR",
    "type": "Apartment Residence",
    "category": "villa",
    "area": "40.00 sqm",
    "usableArea": "40.00 sqm",
    "bedrooms": 0,
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Mamaia, Romania, this property offers refined contemporary living with 40.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Mamaia luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/263e8ac2-8ec3-40ed-8dcd-485019a9b80f.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/263e8ac2-8ec3-40ed-8dcd-485019a9b80f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dbe9f5b9-5e09-4995-ac4f-0e6871eeca76.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/31acb17f-38fe-4c8d-b9ba-f6cc896dc7ba.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5c0ef78c-f242-4d64-a84c-1c23d97bd465.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3b593358-ddc8-4ed3-a070-9edb5a09368f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ccf10770-b21f-409d-afdf-476678803187.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "40.00 sqm"
      },
      {
        "label": "Jurisdiction",
        "value": "Mamaia, Romania"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/82d0ddfd-2e81-470b-884b-3c68c60f441d",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-ffefc387-5d4",
    "slug": "la-quinta-panoramic-golf-coastal-villa-benahav-s",
    "title": "La Quinta Panoramic Golf & Coastal Villa — Benahavís",
    "subtitle": "5 Suites · 656.00 sqm Built · Private Landscaped Grounds",
    "location": "Benahavis, Costa del Sol, Spain",
    "city": "Benahavis",
    "country": "Spain",
    "price": "€5,945,000",
    "priceNumeric": 5945000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "656 sqm",
    "usableArea": "656 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "5 Rooms · Golf Fairway Vistas",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Benahavis, Spain, this prime contemporary villa provides 656.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235838/img-1235838-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235838/img-1235838-0.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-1.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-2.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-3.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-4.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-5.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-6.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-7.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-8.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-9.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-10.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-11.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-12.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-13.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-14.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-15.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-16.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-17.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-18.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-19.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-20.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-21.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-22.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-23.webp",
      "https://tet.ro/storage/properties/1235838/img-1235838-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "656.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Benahavis, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/ffefc387-5d45-439f-9978-56f8d9449d5a",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-c99be4a1-d36",
    "slug": "residence-cu-3-camere-de-tip-loft-de-for-sale-in-floreasca",
    "title": "Residence cu 3 camere de tip Loft de For Sale: in Floreasca",
    "subtitle": "2 Bedrooms · 230.00 sqm · Bucuresti, Romania",
    "location": "Floreasca, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€750,000",
    "priceNumeric": 750000,
    "currency": "EUR",
    "type": "Apartment Residence",
    "category": "villa",
    "area": "230.00 sqm",
    "usableArea": "230.00 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "2 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 2 bedrooms, 230.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/22340326-5c1f-458c-9fc3-334a25f1264a.jpeg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/22340326-5c1f-458c-9fc3-334a25f1264a.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c7f26664-ec10-476b-85c0-7d3383a3261f.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8bba46b6-ed0e-4a72-b63c-cd581b285a45.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4fcaeef9-7b6b-48cd-80e3-e0989ffecf2d.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/baf19b39-0c95-4f3a-ab54-f59510e2acec.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3e5941d6-c398-4b38-98f9-d7debd1c84d9.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c2956c6c-06ac-4950-b34f-60ad260bd5d3.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c1c54421-be0c-46a2-9033-0e040145c4d4.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/98609d37-76dd-40b2-b0d4-19a03eba3512.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c010eec5-f6c5-4c00-b50f-1686612559a8.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/befa8221-47ee-4475-884a-eb82aa7dc208.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/996ae263-fa1d-485b-81d1-8361c953b638.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/322a355c-8b89-4119-9798-fb9c145e0907.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/424a3aa4-90ee-4137-8a22-b7db79ae8a86.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f767241e-22ed-47ab-850f-5b90f7ebab55.jpeg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6b3d6573-2f0d-44cb-9bf3-5e9e4f745d19.jpeg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "230.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "2 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/c99be4a1-d36e-4d82-8147-d3ef40ce7b53",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-d4d7e0e3-533",
    "slug": "residence-2-camere-sos-fabrica-de-glucoza",
    "title": "Residence 2 camere - Sos Fabrica de Glucoza",
    "subtitle": "1 Bedrooms · 54.00 sqm · Bucuresti, Romania",
    "location": "Fabrica de Glucoza, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€169,000",
    "priceNumeric": 169000,
    "currency": "EUR",
    "type": "Apartment Residence",
    "category": "villa",
    "area": "54.00 sqm",
    "usableArea": "54.00 sqm",
    "bedrooms": 1,
    "bathrooms": 1,
    "rooms": "1 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 1 bedrooms, 54.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/83c65e93-b928-4db3-8f9e-3aa04db5c566.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/83c65e93-b928-4db3-8f9e-3aa04db5c566.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/faf1f7b7-f43b-42c6-89d7-d1e933ba8e0f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ffba9bc2-6788-4ad1-99b3-15c5d38815d8.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ba382891-3624-45c0-8f0c-26fabcb84e30.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/38e254e8-e1a7-4618-a219-d32e1faede3c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0ec88e61-a326-48c9-879e-76318f12c3df.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/28ae95bb-4351-487f-ae29-e1a1f6a319f4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/802eb673-68b6-4785-9d8b-39716a36ca01.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cd01adc1-8960-4cb7-9a7a-665e96d8451f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/589748d6-1d1e-4d34-b11b-097f68e7367c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/23f8f419-12ab-4d4d-83e1-79a0d446ba28.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7ad9951f-f56e-48f7-a9fb-e155b641efd6.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e2db9dbd-8295-46d3-acc1-73321a354a2b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fc0bdf56-ea74-46a3-a26c-90a3d5a44f00.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6849f973-e448-4c91-b774-a5d95cabd802.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "54.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "1 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/d4d7e0e3-5337-4b69-85e6-9497f7dc9fca",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-98ac6115-9bd",
    "slug": "villa-noua-regim-s-p-1e-prime-land-1000-mp-erou-iancu-nicola",
    "title": "Villa noua, regim S+P+1E, Prime Land 1000 mp - Erou Iancu Nicolae",
    "subtitle": "4 Bedrooms · 243.00 sqm · Voluntari, Romania",
    "location": "Erou Iancu Nicolae, Voluntari, Romania",
    "city": "Voluntari",
    "country": "Romania",
    "price": "€2,700",
    "priceNumeric": 2700,
    "currency": "EUR",
    "type": "House Residence",
    "category": "villa",
    "area": "243.00 sqm",
    "usableArea": "243.00 sqm",
    "bedrooms": 4,
    "bathrooms": 3,
    "rooms": "4 Bedrooms · Living Salon · Private Amenities",
    "status": "Available for Lease",
    "description": "Situated within the prestigious enclave of Voluntari, Romania, this property offers refined contemporary living with 4 bedrooms, 243.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Voluntari luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/25224d9a-c2e4-4d86-95e4-cf1cc35f5365.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/25224d9a-c2e4-4d86-95e4-cf1cc35f5365.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/be9ed5ec-2fd7-4dc2-b022-cd74caf191a6.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ad431fcc-1407-474d-af57-c456dba58740.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9786a076-0350-4d38-b258-3bd6b8b70308.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a2c9b02a-7140-4907-a4f8-98a786314632.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d6149156-05db-4311-b819-25da5ee3c40f.JPG"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "243.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "4 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Voluntari, Romania"
      },
      {
        "label": "Category",
        "value": "HOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/98ac6115-9bd7-4377-8254-24c8cd40e4f3",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-2af46cad-391",
    "slug": "ansamblul-rezidential-de-case-in-pipera-erou-iancu-nicolae",
    "title": "Ansamblul rezidential de case in Pipera - Erou Iancu Nicolae",
    "subtitle": "4 Bedrooms · 172.00 sqm · Voluntari, Romania",
    "location": "Erou Iancu Nicolae, Voluntari, Romania",
    "city": "Voluntari",
    "country": "Romania",
    "price": "€400,000",
    "priceNumeric": 400000,
    "currency": "EUR",
    "type": "House Residence",
    "category": "villa",
    "area": "172.00 sqm",
    "usableArea": "172.00 sqm",
    "bedrooms": 4,
    "bathrooms": 3,
    "rooms": "4 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Voluntari, Romania, this property offers refined contemporary living with 4 bedrooms, 172.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Voluntari luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/99f9555e-454a-4508-8a2c-4f9a6f98c432.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/99f9555e-454a-4508-8a2c-4f9a6f98c432.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e693b90c-6ba8-4a67-a6cc-82048aadfc68.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/01125b2e-64a8-4cfa-8d29-515f6d39cb43.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fa02c76e-e816-4fbf-9c59-e7b2a16919c4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c11748be-a1e8-4f9c-8515-76f59a9e69e1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/65f8da33-eac5-4fc8-8e7e-4c199ef6fa22.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7da01a76-d199-47f1-b933-c2bf34b928c4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/70a14665-5865-4f57-99a1-8e61519d2ad8.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/99ed1e3e-a928-4557-a0a4-1e196488c251.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c76b1d60-c6d1-4ee7-8e20-091d852bdfc7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ef9785af-a609-493d-979c-9057e899c1eb.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c9d61318-b9e3-4821-a27d-4d04ea233bfe.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1b66d31a-c0ee-4fd9-a5a7-879daf1ed331.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7a6e40d4-10f1-4b28-8953-e6abdc507000.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d7f43f03-b6cb-4ef3-979a-b1106f60c6b6.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b1b296cb-4465-4960-8593-93e48c1ee041.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5022522d-a6ba-467f-ab5c-db0bddb4f495.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f21ff881-e018-4f35-a9f4-de61881a1ced.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fbd2c332-c3a3-4cd9-ab26-522b951e3e9c.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "172.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "4 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Voluntari, Romania"
      },
      {
        "label": "Category",
        "value": "HOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/2af46cad-3910-49b7-ba58-b01a9663671c",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-ccf08f49-b9e",
    "slug": "villa-cu-7-camere-suprafata-de-240-mp-floreasca",
    "title": "Villa cu 7 camere Suprafata de 240 mp Floreasca",
    "subtitle": "6 Bedrooms · 240.00 sqm · Bucuresti, USA",
    "location": "Floreasca, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "$3,100",
    "priceNumeric": 3100,
    "currency": "USD",
    "type": "House Residence",
    "category": "villa",
    "area": "240.00 sqm",
    "usableArea": "240.00 sqm",
    "bedrooms": 6,
    "bathrooms": 5,
    "rooms": "6 Bedrooms · Living Salon · Private Amenities",
    "status": "Available for Lease",
    "description": "Situated within the prestigious enclave of Bucuresti, USA, this property offers refined contemporary living with 6 bedrooms, 240.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a1ca89d7-1fd5-46ba-9e95-9b20fc88a2c0.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a1ca89d7-1fd5-46ba-9e95-9b20fc88a2c0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f9dedb75-068d-400d-87e9-1e5c5611af54.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/54bdf613-948f-496f-a83a-dcfa3a94b57b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c7219e9d-a698-49b8-a4cc-1b4b49e7519b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2747029c-58ee-4f2e-bf3c-63d88c20dcbe.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8c8c8d94-4081-474f-b174-a7d9c0cdf07b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d8dfe82c-cd03-43a9-8043-f7d08e9c0f51.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bab69c17-6b30-453c-b81f-ae2b4b53afab.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1236bf67-4415-4124-85b7-6a8820047107.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9ee0beef-3b1c-4ab3-919a-e47ec3f1c494.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0deabb34-7393-4f6c-86b4-c705d67a884e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d437da3b-060e-47df-9962-ad8682a63606.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6c3f9c51-d8b2-41ce-8b9d-ed1e39b7f393.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/92099370-e6b4-429b-87a1-315b12c3bacf.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3155cba5-3008-4840-bc40-9f7637eeb1f8.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/77d64889-4709-4f90-a16e-384afe8c75ad.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "240.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "6 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, USA"
      },
      {
        "label": "Category",
        "value": "HOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/ccf08f49-b9e0-40e1-bb18-6a5d007348d7",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-d69152fe-add",
    "slug": "residence-2-camere-luminos-si-modern-in-nusco-city-pipera",
    "title": "Nusco City Modern Contemporary Residence — Pipera",
    "subtitle": "1 Bedrooms · 66.00 sqm · Bucuresti, Romania",
    "location": "Pipera, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€900",
    "priceNumeric": 900,
    "currency": "EUR",
    "type": "Apartment Residence",
    "category": "development",
    "area": "66.00 sqm",
    "usableArea": "66.00 sqm",
    "bedrooms": 1,
    "bathrooms": 1,
    "rooms": "1 Bedrooms · Living Salon · Private Amenities",
    "status": "Available for Lease",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 1 bedrooms, 66.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1f05e391-89ae-450e-9f8a-483e0b5304e7.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1f05e391-89ae-450e-9f8a-483e0b5304e7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4921a125-e96d-4cf4-9a06-840471a50211.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1566a220-c9bb-473e-97e2-b24fb0259206.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/19b185f9-69aa-486b-ac19-81378084f57d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5584a26a-5b16-4391-8cf5-ea36d79c2679.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c5bef065-45e0-4f65-8a93-63e051d92e78.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9874646b-f9d1-47ff-819e-6bd3e9a94a42.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c3651346-bc8b-488f-8079-e27c7054da93.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ee913e62-902a-4abe-97d8-bee460e93636.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2fab8dd7-5c97-4997-a11b-acf5a95ab04e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f9023d38-f3eb-4345-af5d-5b5a643f42be.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5bf08ae4-5d64-402e-98f8-d0fd9d20f418.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/21e3fd49-8b82-455d-9929-a43934c36212.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/52e6bb27-b8ba-44e7-bbf5-4fdb45d87333.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7b721764-95ca-4111-a535-065c1fe9912c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3f4fb613-478c-418c-a1c7-2d58e8fe28a5.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f9669c0b-7f9f-4c55-9493-d1a728a9660c.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "66.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "1 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/d69152fe-addc-4f49-ab93-0f97927dff78",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-ba52dfb9-d06",
    "slug": "residence-3-camere-intr-o-zona-premium-din-nordul-capitalei",
    "title": "Residence 3 camere intr-o zona premium din nordul Capitalei",
    "subtitle": "2 Bedrooms · 93.00 sqm · Voluntari, Romania",
    "location": "Matei Millo, Voluntari, Romania",
    "city": "Voluntari",
    "country": "Romania",
    "price": "€199,000",
    "priceNumeric": 199000,
    "currency": "EUR",
    "type": "Apartment Residence",
    "category": "villa",
    "area": "93.00 sqm",
    "usableArea": "93.00 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "2 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Voluntari, Romania, this property offers refined contemporary living with 2 bedrooms, 93.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Voluntari luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3284adba-9b1f-4a41-9243-554dc161b5f7.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3284adba-9b1f-4a41-9243-554dc161b5f7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/40cc7317-83ee-4123-8502-5e3e9cd1dca9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a44dd60d-cfd0-4cfa-bd7c-c44199307b94.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/001ae3ef-f775-4668-a01f-e1a2abee0212.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/635b5f57-47ba-4c25-9f9a-2bc41c870324.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/17399993-77b1-4af7-8a53-fe34fd7fccf7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/94a32861-7dc4-45ce-8dda-bc60b143ae46.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "93.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "2 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Voluntari, Romania"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/ba52dfb9-d060-4ee2-ba62-baa781360972",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-cdefcc4b-11f",
    "slug": "los-flamingos-contemporary-ridge-villa-benahav-s",
    "title": "Los Flamingos Contemporary Ridge Villa — Benahavís",
    "subtitle": "5 Suites · 691.00 sqm Built · Private Landscaped Grounds",
    "location": "Benahavis, Costa del Sol, Spain",
    "city": "Benahavis",
    "country": "Spain",
    "price": "€4,695,000",
    "priceNumeric": 4695000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "691 sqm",
    "usableArea": "691 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "6 Rooms · Villa Padierna Enclave",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Benahavis, Spain, this prime contemporary villa provides 691.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235836/img-1235836-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235836/img-1235836-0.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-1.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-2.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-3.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-4.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-5.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-6.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-7.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-8.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-9.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-10.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-11.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-12.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-13.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-14.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-15.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-16.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-17.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-18.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-19.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-20.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-21.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-22.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-23.webp",
      "https://tet.ro/storage/properties/1235836/img-1235836-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "691.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Benahavis, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/cdefcc4b-11f0-4b68-a5c5-1d63fb7f58ab",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-ef7c4a8c-8f5",
    "slug": "villa-moderna-de-for-sale-in-pipera-erou-iancu-nicolae",
    "title": "Villa Moderna de For Sale: in Pipera Erou Iancu Nicolae",
    "subtitle": "4 Bedrooms · 106.00 sqm · Bucuresti, Romania",
    "location": "Pipera, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€225,000",
    "priceNumeric": 225000,
    "currency": "EUR",
    "type": "House Residence",
    "category": "villa",
    "area": "106.00 sqm",
    "usableArea": "106.00 sqm",
    "bedrooms": 4,
    "bathrooms": 3,
    "rooms": "4 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 4 bedrooms, 106.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/da43ffae-e2f1-4c2c-b1e1-b51b5b1efde4.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/da43ffae-e2f1-4c2c-b1e1-b51b5b1efde4.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a29f414e-af5c-4dfd-9265-1dfab4febbbb.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4d980e5e-b321-4018-b740-c01c678a04b2.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f4b54fbb-7546-402a-96e2-4fabf56af77f.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/caeaa42d-933d-4b6c-950b-1010d5966b2a.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/59a822ea-6651-4a3e-8a5e-e992c58da6b6.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7382d5f7-f108-4612-811b-cf969aae5020.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9b47ef27-deb3-4ce7-a129-77d04bb41fa8.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2643ef2d-91d6-456f-9c12-c60852c72240.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/effc6706-8772-4a1e-b77a-dff0fe8087e8.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d3a8b2e4-5134-4c67-99b4-e669c231bf5e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e5308786-3cc3-4011-935a-5633a8e61fde.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b559d4b1-747c-4896-b6e5-6f0e65f98fe4.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bfb4d115-fe3c-41bf-b8c4-28b83e008035.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c47e7edd-767e-4acb-b311-51f8d2ed18d4.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b607577f-1a5c-4fe9-8592-bcc5c00ef822.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0659bba7-00ca-4c7c-8c11-0abfd8d128f8.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/122e744e-94a5-4cd4-8541-5e59ba0fa879.JPG"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "106.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "4 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "HOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/ef7c4a8c-8f54-4431-882d-30037ceda2d6",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-0b3a3c77-bc4",
    "slug": "villa-cu-potential-investi-ional-in-cartierul-aviatiei",
    "title": "Villa cu potential investițional in cartierul Aviatiei",
    "subtitle": "5 Bedrooms · 360.00 sqm · Bucuresti, Romania",
    "location": "Aviatiei, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€749,000",
    "priceNumeric": 749000,
    "currency": "EUR",
    "type": "House Residence",
    "category": "villa",
    "area": "360.00 sqm",
    "usableArea": "360.00 sqm",
    "bedrooms": 5,
    "bathrooms": 4,
    "rooms": "5 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 5 bedrooms, 360.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/24c8221a-dd42-43ad-8fda-8c36a9a0369b.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/24c8221a-dd42-43ad-8fda-8c36a9a0369b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d28b3ce5-e1e3-4e41-bc7a-b9bc76db6ee1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/27e79526-fdca-41e2-a197-19dd62c6dc43.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4de7114b-383b-47e6-a0a0-d2485fc1fa9a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b06e7973-1b46-4438-82ea-d40722070efc.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3638ae0d-3ce6-490c-ab4f-657bc38185cf.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dd66aba4-fab9-402d-b162-ffd38554f9ea.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/80b5807e-8fbd-4467-9a81-08e47f3331a0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/31da1958-e987-40aa-94c5-a36907f34f26.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1e5c897b-a90a-4258-947d-b82a0acd1b31.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "360.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "5 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "HOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/0b3a3c77-bc40-482d-b1f3-ef964f03cbd0",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-68bf1ea3-ed5",
    "slug": "residence-modern-cu-3-camere-erou-iancu-nicolae",
    "title": "Residence modern cu 3 camere Erou Iancu Nicolae",
    "subtitle": "2 Bedrooms · 80.00 sqm · Voluntari, USA",
    "location": "Erou Iancu Nicolae, Voluntari, Romania",
    "city": "Voluntari",
    "country": "Romania",
    "price": "$244,990",
    "priceNumeric": 244990,
    "currency": "USD",
    "type": "Apartment Residence",
    "category": "development",
    "area": "80.00 sqm",
    "usableArea": "80.00 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "2 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Voluntari, USA, this property offers refined contemporary living with 2 bedrooms, 80.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Voluntari luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9f853822-1d18-442c-87c2-c41b4e5b0925.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9f853822-1d18-442c-87c2-c41b4e5b0925.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c82bc735-cbd4-44e9-ae2c-f7523632ee8c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2ed09090-6965-46b8-9a63-26d73726bcd3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9c08e391-4548-4c6c-88bd-db8850cb6382.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/defe0c38-30f5-4c0f-83f1-fc34c036e86d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/46738d25-0f74-4981-871d-4714a591ab3e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d725bce9-3036-458f-a85e-fc7edaf5fd93.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d1835728-ccee-4fb0-9ba8-eb8b918d41fd.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/207795ad-2d46-40b5-9406-a0cec413712d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9a1df510-9b1c-4b97-9833-0439fdb4bad8.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/68a747a5-f89d-46e2-a8ea-44d40421a0f4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/34c10a5d-53d6-4129-a549-ae7b14945d61.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/959f0595-a4de-4b50-9d2a-0e5cacf1c72d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2de1197d-0909-46ab-aa37-bb88849aeecf.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "80.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "2 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Voluntari, USA"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/68bf1ea3-ed53-4ee0-8b41-bc13a2a09e9f",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-14104d8b-233",
    "slug": "residence-spatios-cu-3-camere-parcul-herastrau-ideal-pentru-",
    "title": "Residence spatios cu 3 camere Parcul Herastrau Ideal pentru investitie sau locuinta proprie",
    "subtitle": "2 Bedrooms · 114.00 sqm · Bucuresti, Romania",
    "location": "Herastrau, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€499,900",
    "priceNumeric": 499900,
    "currency": "EUR",
    "type": "Apartment Residence",
    "category": "villa",
    "area": "114.00 sqm",
    "usableArea": "114.00 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "2 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 2 bedrooms, 114.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8adf7b05-bf40-475b-95eb-bf9f03e12f42.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8adf7b05-bf40-475b-95eb-bf9f03e12f42.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bcb028c5-d3bf-4075-ab74-ffd9e93c057a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5449c421-23cd-4605-876a-2f5831f8acd1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b5762858-21a2-4081-a678-3a13e80e6fa2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8f3461c8-2000-4612-b682-bb23a49913b3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2b8c7ed2-ede0-48cc-b236-c6528b1db824.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/94f1cb95-126a-4d1d-94ef-4db58694892d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c802e6f4-d476-4bdb-8a49-b27f5f3c821b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/974cbc77-3bef-4e3a-ad50-761f32f0be98.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/aae08506-5f85-497a-a58d-1dd49608c4a0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/46e00971-f311-4580-b077-c89d7b14b6a3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e04bd06b-486f-4a7f-829f-cb6eadffdaf1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9a6a2fdd-bb30-45ab-a078-7cf407164721.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e471c13d-716b-4d12-86ca-b54dec608617.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/90ec0ef5-102c-41ea-8f08-42e1bb5e6c26.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/80138f82-faf5-41b3-be51-9a5fd2f43b50.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/453a2aa3-2d2d-406d-82b9-9d85e26cb76d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5d3b6a45-63ed-49e8-b4c6-64562e473958.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e77ccbab-1bdc-4fb5-a850-8d60b17c9a8e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/20d56d0b-3733-4a00-afd0-f7a513143ce3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7eef2b89-731e-4058-a7d2-7dac269f7d7f.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f16111a5-8673-40b2-8ad6-b58f9146fdc1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9b65139c-e23e-4aa5-9969-1b11a5c62f06.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b5d23163-71bc-4fb7-a132-93c3ac0ac034.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b3d151e3-d798-49e3-be8f-c4e9d1dbeef6.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7fc46590-2cf8-43d5-b368-ca31b7e01937.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1f85d218-46a0-4518-839d-5f505dc0164b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0e02e11e-ed79-441c-8966-624cdc2aa0e9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7e0200a4-c141-492e-adb8-307d333dec01.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/92159750-627d-4564-848c-1888cf2b1a74.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6bd6f02f-11cf-4509-a19e-b908ff6302ad.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7bbd801b-9bc3-405b-92db-353da9fda5bb.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3cd99737-0fb4-4de5-87a0-0fa6b5fcf75c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/62006a87-8961-49c3-a731-a51c9eda05a7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/66bdf570-330c-41d6-bc8a-9acd6a432b5d.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "114.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "2 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/14104d8b-2331-4819-b9a5-b19eee02d278",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-f6f5163c-66f",
    "slug": "residence-2-camere-dorobanti-capitale",
    "title": "Residence 2 camere Dorobanti Capitale",
    "subtitle": "1 Bedrooms · 50.00 sqm · Bucuresti, USA",
    "location": "Dorobanti, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "$205,000",
    "priceNumeric": 205000,
    "currency": "USD",
    "type": "Apartment Residence",
    "category": "villa",
    "area": "50.00 sqm",
    "usableArea": "50.00 sqm",
    "bedrooms": 1,
    "bathrooms": 1,
    "rooms": "1 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, USA, this property offers refined contemporary living with 1 bedrooms, 50.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bccdf790-90ba-4654-af26-3e31b227addb.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bccdf790-90ba-4654-af26-3e31b227addb.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/076b4fae-37f6-4367-8334-66ee4a39fea0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/23833228-7b67-4a5c-84b7-35f7ea368ec2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7dfdbb9b-305c-4505-bf71-1f83685e68f7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/60ff27b4-50c8-4fbc-827a-2981ba6f4245.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8c002c34-03fd-4ca9-9f17-5a5de4bb3646.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/57cc8166-2ea0-40b0-8f2f-ac8e512f4d97.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/46ce5cac-d366-4c73-9580-42a0c846d70e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/62e29296-d73c-429d-899f-2d10273c0bd3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b8961dd0-28db-4da7-bf6e-3ecf903d4df4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/022f4e9d-082a-459f-96e3-87b0f794f426.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/51c588e2-b1d4-4d1c-bf3e-1c8c3cb9b203.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/30a49ba0-3df3-437b-a5a9-beaa85c0bd9d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/eefe8115-9759-4f67-bb2a-4422adf9fa5d.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "50.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "1 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, USA"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/f6f5163c-66fa-4cef-9858-1c9348f4d2a7",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-ffe40b3b-cf7",
    "slug": "premium-3-bedroom-apartment-with-56-sqm-terrace",
    "title": "Premium 3-Bedroom Apartment with 56 sqm Terrace",
    "subtitle": "2 Bedrooms · 90.00 sqm · Bucuresti, USA",
    "location": "Pipera, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "$370,000",
    "priceNumeric": 370000,
    "currency": "USD",
    "type": "Apartment Residence",
    "category": "villa",
    "area": "90.00 sqm",
    "usableArea": "90.00 sqm",
    "bedrooms": 2,
    "bathrooms": 2,
    "rooms": "2 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Premium 3-Bedroom Apartment with 56 sqm Terrace\n\nIn a market increasingly driven by lifestyle, infrastructure, and long-term value preservation, premium residential developments in Pipera continue to capture the attention of both end-users and investors.\n\nThis 3-room apartment offers a total area of 168 sqm, including an impressive 56 sqm private terrace — a feature becoming increasingly difficult to find in new developments. Scheduled for comple...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/265c27e5-facd-403e-a100-0ccf0b1d439a.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/265c27e5-facd-403e-a100-0ccf0b1d439a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/333ea541-a96a-44af-bb5c-2a1e51c77224.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7f9c6236-3ab1-428d-8260-b2949c4bf17c.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5dfcbcae-3288-4060-8ddb-3931ccfb6260.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4a065b00-600a-4f63-b7ae-0aa94f2aa367.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dffa1b59-e745-4df2-b5ef-1384880e16f4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4c5db0f3-3e5c-4faa-ba88-dd94c1ef850e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/187f44d3-1625-4180-a610-8563645abf66.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/883ee34f-06ab-4dea-9428-55cd7dd93ccb.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/138a0c75-2149-4385-b98f-65eae5a247f8.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d0d30039-a264-40dd-bb39-cf84d84043e5.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/42cddfe6-45d7-476b-a330-fcac18d0a723.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f7dd0754-f2e9-4d5e-849d-d9389e3cf1c4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/812f623b-54af-48e1-afe9-93d06a3eab71.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9cced187-d473-4b1e-b4e9-75f085e1a55b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b5d32e76-0206-4640-91f1-6bbff180e847.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4c37c731-f6e9-4393-8ebc-aaaf4519b4db.JPG"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "90.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "2 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, USA"
      },
      {
        "label": "Category",
        "value": "APARTMENT"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/ffe40b3b-cf7e-46db-944c-5579f232d855",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-3fa92149-58a",
    "slug": "villa-exclusivist-de-v-nzare-n-pipera-erou-iancu-nicolae",
    "title": "Exclusive Luxury Villa — Erou Iancu Nicolae, Pipera",
    "subtitle": "5 Bedrooms · 280.00 sqm · Bucuresti, Romania",
    "location": "Erou Iancu Nicolae, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€449,000",
    "priceNumeric": 449000,
    "currency": "EUR",
    "type": "House Residence",
    "category": "villa",
    "area": "280.00 sqm",
    "usableArea": "280.00 sqm",
    "bedrooms": 5,
    "bathrooms": 4,
    "rooms": "5 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 5 bedrooms, 280.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/40bcce47-0391-480d-baed-360c0953bec9.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/40bcce47-0391-480d-baed-360c0953bec9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2e216ba3-fa76-4bba-8620-3fcd390c9d06.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c4466968-c87e-4007-b836-5273fa317673.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3a253dd7-102c-4891-8ac2-d6134fe7f5df.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/58f6366b-90d0-4970-af95-9f7d858f4aca.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9eb74255-4758-487a-bdf6-2eab33606a55.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/91eeba0b-7522-4640-888c-f05e6f0344c4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b3fe3585-1397-4410-9b1d-690e83fa7067.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/29a2bcfa-bdbc-45ce-8c53-25b0d94246ef.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3c28a0ff-eef3-4324-b01e-25efa42cadd4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2eb576ac-bae1-445f-9394-6c0b11074674.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/92c7427b-1de9-4274-b09a-e2eb4f28d0dc.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/49b427f5-6f45-4b5f-ae15-a008f3f0f872.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/201210e8-cf6d-4192-a721-e0c3f6e4d5b4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f0828bcd-4d3b-4f57-98c7-d7d212137372.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/29c085dc-d718-4dd9-b15c-d6b5d492d0c8.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bb8c927f-861c-496c-b617-6eb83b244343.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "280.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "5 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "HOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/3fa92149-58a2-4ecf-92eb-fd2562376a1b",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-c4eb1346-a89",
    "slug": "nautical-living-experience-libertatea-de-a-tr-i-pe-ap",
    "title": "Nautical Living Experience — Autonomous Lakefront Residence",
    "subtitle": "55.00 sqm · Constanta, Romania",
    "location": "Portul Tomis, Constanta, Romania",
    "city": "Constanta",
    "country": "Romania",
    "price": "€74,000",
    "priceNumeric": 74000,
    "currency": "EUR",
    "type": "Commercial Residence",
    "category": "marine",
    "area": "55.00 sqm",
    "usableArea": "55.00 sqm",
    "bedrooms": 0,
    "rooms": "Executive Layout",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Constanta, Romania, this property offers refined contemporary living with 55.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Constanta luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fed5ff96-9ae4-48ea-ac8f-8864c6ce436d.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fed5ff96-9ae4-48ea-ac8f-8864c6ce436d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/95adb495-221d-4bf8-8c8d-3349f2ebd9f9.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/90b0ebb5-1008-43a3-a858-e529e1599c5c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1032e6f3-e8d9-4c68-b481-ebaaa1a50f9d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c09e9f35-1301-446b-bc3f-df39b79ed7d7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/aab59568-93a0-4496-a5f6-55c80de68cde.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d225bf06-a76a-40f7-9535-d28735976bf7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/28448e56-9613-4e55-8906-3763c6dcab19.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/08edbeaf-606d-4822-aede-e33b88e2ec82.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/06d08c82-a9a5-4aca-b040-11430e11ac2a.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1a6766ce-7421-4f81-b1b7-997cf9f10fd7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/19d7d7c4-6fb8-4dbd-8b4f-6c958c9d0d05.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "55.00 sqm"
      },
      {
        "label": "Jurisdiction",
        "value": "Constanta, Romania"
      },
      {
        "label": "Category",
        "value": "COMMERCIAL"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/c4eb1346-a89c-467b-9331-07512e89923a",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-4cfc836a-e40",
    "slug": "la-zagaleta-ultra-prime-forest-sea-pavilion-benahav-s",
    "title": "La Zagaleta Ultra-Prime Forest & Sea Pavilion — Benahavís",
    "subtitle": "5 Suites · 1328.00 sqm Built · Private Landscaped Grounds",
    "location": "Benahavis, Costa del Sol, Spain",
    "city": "Benahavis",
    "country": "Spain",
    "price": "€9,980,000",
    "priceNumeric": 9980000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "1,328 sqm",
    "usableArea": "1,328 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "8 Rooms · Complete Sovereign Privacy",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Benahavis, Spain, this prime contemporary villa provides 1328.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235831/img-1235831-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235831/img-1235831-0.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-1.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-2.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-3.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-4.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-5.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-6.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-7.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-8.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-9.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-10.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-11.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-12.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-13.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-14.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-15.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-16.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-17.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-18.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-19.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-20.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-21.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-22.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-23.webp",
      "https://tet.ro/storage/properties/1235831/img-1235831-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "1328.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Benahavis, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/4cfc836a-e40e-41ed-b03c-a8527626ec22",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-d0204e95-848",
    "slug": "a-home-that-offers-both-an-exclusive-lifestyle-and-a-high-gr",
    "title": "A home that offers both an exclusive lifestyle and a high-growth investment.",
    "subtitle": "1 Bedrooms · 60.00 sqm · Bucuresti, USA",
    "location": "Pipera, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "$157,000",
    "priceNumeric": 157000,
    "currency": "USD",
    "type": "House Residence",
    "category": "villa",
    "area": "60.00 sqm",
    "usableArea": "60.00 sqm",
    "bedrooms": 1,
    "bathrooms": 1,
    "rooms": "1 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "A home that offers both an exclusive lifestyle and a high-growth investment. The choice is yours.\nPremium Apartments with 2 and 3 Bedrooms, Spacious Terraces, and Private Gardens\nRedefines modern living standards through the perfect blend of elegant design, enhanced comfort, and state-of-the-art technology.\n\n📍 Prime Location – nestled in a quiet area with fast access to Pipera business district, international schools, shopping centers, and premi...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b3bf0055-b3cc-455a-a9d0-6dbcca1ca0e1.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b3bf0055-b3cc-455a-a9d0-6dbcca1ca0e1.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ff69d64c-d3c6-4268-83ca-f204a5ea5db2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1b153fee-fe9c-4ec8-90ab-b69f7c37114e.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/013126a9-5dc8-4fed-99de-5c1e76fb1a66.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9d433494-acce-46f0-85ab-dcbdcede8ce3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6dac5cbf-0c48-41bd-a565-a2f75fbb3032.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f0d54111-66e9-4390-9e4c-9686d2b72b51.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/289ddebc-c881-4951-91c9-7471b5cd4cdf.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/02ff583e-cc0b-42de-9ff6-756049da6354.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4f7087bd-b320-47e5-ac4c-eecc0618bd41.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "60.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "1 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, USA"
      },
      {
        "label": "Category",
        "value": "HOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/d0204e95-8486-419b-bbda-6fcceddeff82",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-8d034305-c4b",
    "slug": "upsite-floreasca-luxury-real-estate-continues-to-attract-cap",
    "title": "UPSITE FLOREASCA: Luxury Real Estate Continues To Attract Capital",
    "subtitle": "4 Bedrooms · 372.00 sqm · Bucuresti, Romania",
    "location": "Floreasca, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€1,900,000",
    "priceNumeric": 1900000,
    "currency": "EUR",
    "type": "Penthouse Residence",
    "category": "penthouse",
    "area": "372.00 sqm",
    "usableArea": "372.00 sqm",
    "bedrooms": 4,
    "bathrooms": 3,
    "rooms": "4 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "UPSITE FLOREASCA: Luxury Real Estate Continues To Attract Capital\n\n📄 Located in one of Bucharest's most sought-after districts, UPSITE Floreasca represents more than a premium residential development. It reflects a broader trend: capital continues to gravitate toward prime locations, limited supply, and lifestyle-driven assets.\nThe project features two landmark towers of 12 and 25 floors, comprising 270 premium residences designed around modern...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/04d2600e-7a55-4ff8-aeb4-1830cfa0930f.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/04d2600e-7a55-4ff8-aeb4-1830cfa0930f.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/492ad155-6fe2-49e3-871d-69a27a67c082.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cda32768-a178-4eff-9d7f-a58dcc37c924.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/592bab5f-7f21-4de6-98cc-6fe2a03d50a7.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6f1c852d-3c03-4131-bc22-8415b76a8107.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/626da41e-9fbc-4167-b45e-28aeddc2534b.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0121f59a-de35-427d-a104-e638a5849d70.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1f131a0d-73ee-4b83-a262-9bfbda951dec.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3684e63f-efdc-4acf-92aa-6292f8c743d7.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/78f7684e-309f-4103-abab-f5bf384ee64a.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d3c3190b-311d-4564-bdf2-1948c7520dbc.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fdd081eb-9340-4bbd-bf71-eeed29c99845.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8ab13c50-d72f-4fd5-ae0f-d4c021f3e142.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8dc89293-b8eb-4748-8be3-5fc12d2e900e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0434ac36-0d02-453e-8399-68e1669a490e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/19087d0e-9ee0-4c6d-98dc-39aca48f4d27.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e1f95e24-603e-457d-ae13-10664377a56c.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3c1c8c0e-5a42-4b28-9c40-7d2cc8ded6a2.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1ae5aa87-efc2-4674-abd0-d61d3183715d.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fa951cf6-aed0-4652-a6ce-cf3cc978492d.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6434b1c8-5163-4067-8af2-5dfb2af56d73.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/68ad5c1f-4253-48e3-97eb-8cd38e530aa7.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c7a49af5-83d5-4d17-988b-953d3fe643ef.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5e208f62-7452-4373-9c7c-50f8ac6641a8.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2095f33c-cb54-491b-890c-0700ab60680a.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a2ba109f-ffec-48f2-a1ea-8306a2295951.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/35bffb55-818a-4b33-b859-0e497b316471.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/75bc5b1c-66d8-4dc2-81af-b669b813077f.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "372.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "4 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "PENTHOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/8d034305-c4bf-4867-9d6a-26bde406d23b",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-39cec4d5-9d6",
    "slug": "altos-reales-gated-sanctuary-villa-marbella",
    "title": "Altos Reales Gated Sanctuary Villa — Marbella",
    "subtitle": "5 Suites · 872.00 sqm Built · Private Landscaped Grounds",
    "location": "Marbella, Costa del Sol, Spain",
    "city": "Marbella",
    "country": "Spain",
    "price": "€7,995,000",
    "priceNumeric": 7995000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "872 sqm",
    "usableArea": "872 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "5 Rooms · Security Perimeter & Spa",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Marbella, Spain, this prime contemporary villa provides 872.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235835/img-1235835-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235835/img-1235835-0.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-1.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-2.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-3.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-4.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-5.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-6.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-7.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-8.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-9.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-10.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-11.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-12.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-13.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-14.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-15.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-16.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-17.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-18.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-19.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-20.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-21.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-22.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-23.webp",
      "https://tet.ro/storage/properties/1235835/img-1235835-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "872.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Marbella, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/39cec4d5-9d60-48fd-9754-4e5a357ff3c4",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-b55c2026-bab",
    "slug": "casa-individuala-lux-in-pipera",
    "title": "Private Luxury Detached Estate — Pipera Diplomatic Enclave",
    "subtitle": "6 Bedrooms · 582.00 sqm · Voluntari, Romania",
    "location": "Erou Iancu Nicolae, Voluntari, Romania",
    "city": "Voluntari",
    "country": "Romania",
    "price": "€4,500",
    "priceNumeric": 4500,
    "currency": "EUR",
    "type": "House Residence",
    "category": "villa",
    "area": "582.00 sqm",
    "usableArea": "582.00 sqm",
    "bedrooms": 6,
    "bathrooms": 5,
    "rooms": "6 Bedrooms · Living Salon · Private Amenities",
    "status": "Available for Lease",
    "description": "Situated within the prestigious enclave of Voluntari, Romania, this property offers refined contemporary living with 6 bedrooms, 582.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Voluntari luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d64c556d-bee6-4081-8254-1dba2a8d8ce7.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d64c556d-bee6-4081-8254-1dba2a8d8ce7.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9306d633-c488-45cd-b943-f022427a6eee.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fdfa37b7-19ec-4caa-9347-f4fd0d74540c.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/02a4a829-63de-4998-9e47-9e88edb1c339.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5be971fb-2dfd-474f-b539-55cc9b812d0b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/42fc9c7d-e2ab-4b0f-b7c6-61343f4becf0.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7ecb3ff5-0995-43b9-9442-a04ed5d5b2d4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a649dfc0-8a41-42e5-a920-b6ba2a6347a3.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cbaba3f3-13eb-4d77-a135-5f48e50daef2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a7976028-e22f-4394-b7a6-73c7dc09c931.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9e661e7a-ee85-44d3-894d-d9aea51b8b83.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/84193fde-057f-4c3c-9fa7-e1105239870b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/cc9b0a42-ac1c-42e1-8b95-9b7719ffde10.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/26aeb8b7-7930-45ac-8658-e9e2517c3cfc.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/dd271021-1be7-49a6-b004-4fb3b40f59d7.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "582.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "6 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Voluntari, Romania"
      },
      {
        "label": "Category",
        "value": "HOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/b55c2026-bab2-4cd9-9a54-1e249199a174",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-93b2b8e9-afc",
    "slug": "modern-luxury-residence-miami-inspired-minimalist-design",
    "title": "Modern Luxury Residence Miami-Inspired Minimalist Design",
    "subtitle": "11 Bedrooms · 4000.00 sqm · Bucharest, USA",
    "location": "Northern Bucharest, Bucharest, Romania",
    "city": "Bucharest",
    "country": "Romania",
    "price": "$2,900,000",
    "priceNumeric": 2900000,
    "currency": "USD",
    "type": "Villa Estate",
    "category": "villa",
    "area": "4000.00 sqm",
    "usableArea": "4000.00 sqm",
    "bedrooms": 11,
    "bathrooms": 9,
    "rooms": "11 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Modern Luxury Residence Miami-Inspired Minimalist Design\n\nMore than a home. A statement of architecture, space, and modern living.\nInspired by the elegance of Miami’s luxury residences, this exceptional property blends minimalist design, generous volumes, and refined functionality into a truly unique lifestyle experience.\n\nProperty Highlights\n• 1,167 sqm built area\n• 4,000 sqm private plot\n• 12 spacious rooms\n• 6 premium bathrooms\n• Spectacular s...",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucharest luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c4e4b1aa-603d-4791-9c28-103e70e7399c.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c4e4b1aa-603d-4791-9c28-103e70e7399c.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7c1cc0c1-42e9-45e5-ba8a-f3e5fc2fb570.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/819b9682-78f5-4ebf-9561-b1d689343bcc.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/470eb4e7-d464-4ca2-9fab-ea8c078621d3.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/63330122-196b-4ee1-b89e-8a7442c17161.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b5793d8e-c3a8-42c1-90af-cbd4130bce18.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f6b8ea04-79f0-4add-a4cf-d172e223f0ab.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a30e2689-5ec5-4930-b5fd-123cf3a7684e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1571614e-f1a7-4c5d-b146-ef8019b009c3.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7cd4cb7e-ce1d-463d-b360-673382a49b8b.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/11e2442c-5fbb-4339-9113-9d2a2dd9f9fd.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/463d31ea-0b9e-4f39-80a0-70757ab10dd8.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a4f9ba6e-f9db-42d3-8f0c-8cc4cac32b07.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2fb5a8f4-2444-426f-b2e6-14af12416a24.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a3351bbf-882c-48a8-b568-bac298848c3f.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a3b03721-830a-40a6-b65b-fba7ccc1f3fb.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/002ef56d-add3-4b85-a355-114a911dec76.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a33800c1-45bd-4879-9b01-7283023effaa.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d872a937-bbad-4510-9d6e-5b7f47db4340.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/04995371-5ba0-4b0f-90ad-d4a8225829a6.JPG"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "4000.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "11 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucharest, USA"
      },
      {
        "label": "Category",
        "value": "VILLA"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/93b2b8e9-afce-4505-861a-afb3c1cddd1a",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-1b7447e7-21a",
    "slug": "villa-premium-in-pipera-curte-privata-loc-de-parcare-inclusa",
    "title": "Villa PREMIUM IN PIPERA | Curte Privata & Loc de Parcare Inclusa",
    "subtitle": "3 Bedrooms · 114.00 sqm · Bucuresti, USA",
    "location": "Pipera, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "$299,990",
    "priceNumeric": 299990,
    "currency": "USD",
    "type": "House Residence",
    "category": "villa",
    "area": "114.00 sqm",
    "usableArea": "114.00 sqm",
    "bedrooms": 3,
    "bathrooms": 2,
    "rooms": "3 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, USA, this property offers refined contemporary living with 3 bedrooms, 114.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b9bad4be-e721-48dd-9b4e-0b7cb1ba51db.JPG",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b9bad4be-e721-48dd-9b4e-0b7cb1ba51db.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3628a617-2f4e-433b-ab97-257acb5abb71.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/480505e5-b087-49e9-97ad-b40686b39443.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b0aa2f40-4eb4-4e6e-bc90-8adff98b88ba.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d8113475-91e4-44cd-b1db-0db39bff6722.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/072eb55b-9075-438d-a17f-9d461b1b0693.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/24e4f6f6-667a-4c81-8096-8bb838c69476.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b988a192-b127-484d-9161-92b0ece461e5.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3910de03-6aab-478e-ad64-e2ddc0731d19.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d43be936-3912-4ea5-a5a4-a5b15a218e92.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/667373c9-7a07-4e46-9d2a-7b97b0841845.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/ed9030e6-2132-428b-a6e0-46f55996f57a.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b3469b54-3e26-4fd8-bbe7-b799c9060640.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1add3ed2-cb02-45ea-809c-050a662ecc2c.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2082d568-2a76-49fd-914e-7f621ab37e63.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/af07618f-f7d9-4f0e-a862-0b038b18d1dd.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/afbd4369-eb3b-4f51-b28d-3e40b893f2e4.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/044e03ba-85af-45f1-b318-0ed6223b5c31.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f87edaf5-22a7-40bb-b2d2-13f4aa7d1972.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/b66ad238-5fe6-49a3-97b8-1a30eb1d9004.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/18727e8d-2685-42fb-8858-d3dc7cb3a85d.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0397612f-71c8-4505-9018-5927eb49eea1.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4cb29093-1971-4705-a2b3-7af00d60a4c7.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e67b4a3a-a547-4b5e-b8a4-a3553d5ad98d.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2f031d6c-b8df-402f-a704-0b75d63b880d.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a09e5e0a-663e-4c2f-94ae-00747c9cd0e1.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/962e3ef4-ba85-4685-b7b8-85d147765487.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c77e66d3-9c97-4063-9a2f-ca25f321c4e6.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1502201c-81a4-447a-8e83-e56c704f84d7.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/44f1e0a9-f473-4a74-91cc-52cb3cf5238a.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a89d0abc-d4ac-4c01-9333-d46bf751c44a.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7c33e1d2-4d70-43df-9ae7-625c32f0950e.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/0d4f7e3d-64d4-41be-9c36-dbdccb522bd6.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/829f2593-e7a5-4bc8-9f2d-48cc180fc536.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3bfd5932-84bf-4522-8faa-ef447b1694c8.JPG"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "114.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "3 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, USA"
      },
      {
        "label": "Category",
        "value": "HOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/1b7447e7-21ad-4e1b-94d2-6349d3dd187b",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-6c743da1-e01",
    "slug": "monte-mayor-andalusian-mountain-retreat-benahav-s",
    "title": "Monte Mayor Andalusian Mountain Retreat — Benahavís",
    "subtitle": "5 Suites · 913.00 sqm Built · Private Landscaped Grounds",
    "location": "Benahavis, Costa del Sol, Spain",
    "city": "Benahavis",
    "country": "Spain",
    "price": "€4,995,000",
    "priceNumeric": 4995000,
    "currency": "EUR",
    "type": "Private Luxury Villa",
    "category": "villa",
    "area": "913 sqm",
    "usableArea": "913 sqm",
    "bedrooms": 5,
    "bathrooms": 5,
    "rooms": "5 Rooms · High Altitude Vistas",
    "status": "Available",
    "description": "Located within an exclusive residential enclave of Benahavis, Spain, this prime contemporary villa provides 913.00 sqm of refined interior space, landscaped gardens, and expansive indoor-outdoor entertaining areas. Engineered for sovereign privacy, high environmental efficiency, and long-term capital preservation.",
    "advisoryPerspective": "Audited for Costa del Sol micro-location desirability, structural craftsmanship, and sustained capital preservation resilience.",
    "heroImage": "https://tet.ro/storage/properties/1235839/img-1235839-0.webp",
    "galleryImages": [
      "https://tet.ro/storage/properties/1235839/img-1235839-0.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-1.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-2.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-3.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-4.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-5.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-6.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-7.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-8.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-9.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-10.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-11.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-12.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-13.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-14.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-15.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-16.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-17.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-18.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-19.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-20.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-21.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-22.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-23.webp",
      "https://tet.ro/storage/properties/1235839/img-1235839-24.webp"
    ],
    "specs": [
      {
        "label": "Built Footprint",
        "value": "913.00 sqm"
      },
      {
        "label": "Bedrooms & Suites",
        "value": "5 Private Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Benahavis, Spain"
      },
      {
        "label": "Source Listing",
        "value": "Chestertons Marbella × HomeFind"
      }
    ],
    "features": [
      "Panoramic Mediterranean Coastal & Garden Vistas",
      "Private Gated Security Perimeter & Video Surveillance",
      "Custom Outdoor Swimming Pool and Solarium Deck",
      "Covered Multi-Vehicle Garage",
      "Minutes from Marbella Golden Mile and International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/6c743da1-e01c-4cbd-8e77-80bb7d1274b8",
    "sourceName": "Chestertons Marbella × HomeFind",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  },
  {
    "id": "prop-hf-4932f2c9-bd9",
    "slug": "penthouse-with-teras-spectaculoas-220-mp-114-mp-utili-zona-c",
    "title": "Penthouse with terasă spectaculoasă 220 mp | 114 mp Utili | Zona centrala, Calea Plevnei",
    "subtitle": "3 Bedrooms · 372.00 sqm · Bucuresti, Romania",
    "location": "Calea Plevnei, Bucuresti, Romania",
    "city": "Bucuresti",
    "country": "Romania",
    "price": "€468,000",
    "priceNumeric": 468000,
    "currency": "EUR",
    "type": "Penthouse Residence",
    "category": "penthouse",
    "area": "372.00 sqm",
    "usableArea": "372.00 sqm",
    "bedrooms": 3,
    "bathrooms": 2,
    "rooms": "3 Bedrooms · Living Salon · Private Amenities",
    "status": "Available",
    "description": "Situated within the prestigious enclave of Bucuresti, Romania, this property offers refined contemporary living with 3 bedrooms, 372.00 sqm of interior space, and expansive private outdoor entertaining zones. Designed for long-term capital preservation and residential comfort.",
    "advisoryPerspective": "Audited for architectural longevity and capital defense in the Bucuresti luxury market segment.",
    "heroImage": "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1cf7cf10-6260-439f-a1f5-f8d3fcbaa23d.jpg",
    "galleryImages": [
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/1cf7cf10-6260-439f-a1f5-f8d3fcbaa23d.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e6e1a238-5d17-43e9-8263-730ba1e035c3.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/65207289-5d54-4c21-a51e-ec95e41e7929.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/c300d899-f4a4-4dfc-9094-c24f0621c681.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6c2c5b2f-6d1e-4b80-b69f-7c9fe2e334ab.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/e4608015-6be4-4f97-9522-7606355f5e82.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2694b678-e733-480d-8ff0-d47fee2a3743.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a289fd95-3404-4cbc-8f02-0f01650a8705.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f4e88352-2a6f-4db2-9134-8cb924234a59.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/284fbead-2a78-4951-bb40-776aa748eb00.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/659dc5a0-6854-41c7-9d43-ce442c91d2a2.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/39f331cc-5399-4af8-b3da-86998bcd7a10.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/96fd9d23-2ab2-4202-a9e5-a87ce78dafc2.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a7b321c5-1f10-4b50-be8b-671ad105efe4.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/3495fb07-987c-4423-bdf7-c12b31bd1b0b.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/9c8b0f12-03f9-4e0d-b911-30beb54d9241.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/4c71d071-29a7-460f-98e1-efcdcf01dbfb.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7f3cdf7f-b9db-4a2a-b725-56ec1aaf27c5.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f0e3d53e-dcee-4650-a33a-8880795a9f51.JPG",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/380ea7a1-c242-48e2-bd47-4cfbbe33f9af.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d8452dc0-8889-4974-9730-2daf3f1b2e43.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/f7d17d95-aa3d-4f72-8990-609986080a24.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/5d41ef22-af34-4ee6-bca7-9dd49525cb08.jpg",
      "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/bd967152-9e03-4756-9ae1-bd886b14076d.jpg"
    ],
    "specs": [
      {
        "label": "Interior Footprint",
        "value": "372.00 sqm"
      },
      {
        "label": "Bedrooms",
        "value": "3 Suites"
      },
      {
        "label": "Jurisdiction",
        "value": "Bucuresti, Romania"
      },
      {
        "label": "Category",
        "value": "PENTHOUSE"
      }
    ],
    "features": [
      "Verified Land Registry & Title Provenance",
      "Prime Cardinal Exposure & Natural Luminosity",
      "Executive Grade Security & Privacy Parameters",
      "Direct Proximity to Prime International Infrastructure"
    ],
    "sourceUrl": "https://homefind.cristianvaduva.com/listings/4932f2c9-bd9d-4f09-b70f-a3ebb89148f8",
    "sourceName": "HomeFind Real Estate",
    "sourcePlatform": "HomeFind",
    "isFeatured": false
  }
];

export function getPropertyById(id: string): Property | undefined {
  return selectedProperties.find(
    (p) => p.id === id || (p.slug && p.slug === id)
  );
}

export function getSelectedProperties(): Property[] {
  return selectedProperties;
}
