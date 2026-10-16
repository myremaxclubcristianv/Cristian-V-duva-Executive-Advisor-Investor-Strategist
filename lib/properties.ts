export interface PropertySpec {
  label: string;
  value: string;
}

export interface Property {
  id: string;
  title: string;
  subtitle?: string;
  location: string;
  price: string;
  type: string;
  category: "penthouse" | "villa" | "development" | "international" | "marine";
  area: string;
  rooms: string;
  status: "Available" | "Private Deal" | "Acquired" | "Under Development" | "Custom Order";
  description: string;
  advisoryPerspective: string;
  heroImage: string;
  galleryImages?: string[];
  specs: PropertySpec[];
  features: string[];
  sourceUrl: string;
  sourceName: string;
}

export const selectedProperties: Property[] = [
  {
    id: "prop-plevnei",
    title: "Penthouse Exclusiv cu Terasă Panoramică de 220 mp",
    subtitle: "114,13 mp Utili · Terasă 220 mp · Balcon 12 mp · Etaj 5/5",
    location: "Calea Plevnei, Sector 1 / Zona Centrală, București",
    price: "Preț la cerere",
    type: "Penthouse / Rooftop Residence",
    category: "penthouse",
    area: "114,13 mp utili (372 mp suprafață construită)",
    rooms: "4 Camere (3 Dormitoare, Living, 2 Băi, Bucătărie Separată)",
    status: "Available",
    description: "Amplasat la ultimul etaj al unei clădiri moderne finalizate în 2014, acest penthouse oferă o combinație rară între intimitate absolută, orientare cardinală deschisă și o terasă spectaculoasă de 220 mp ce permite amenajarea de lounge exterior, zonă jacuzzi și grădină urbană suspendată.",
    advisoryPerspective: "Randament ridicat de conservare a capitalului datorat coeficientului extrem de redus de spații terasate de peste 200 mp în zona ultracentrală a Capitalei.",
    heroImage: "https://cristianvaduva.com/wp-content/uploads/2024/01/c4326451-7ce2-4c04-a59f-8a697b6c6f64.jpg",
    galleryImages: [
      "https://cristianvaduva.com/wp-content/uploads/2024/01/c4326451-7ce2-4c04-a59f-8a697b6c6f64.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/031cfc74-ee3b-4b5e-952f-f6070a78d183.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/ba66e691-3413-438e-9c14-f7a4fe6c32a4.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/55b7652c-a7ee-434e-af6f-dccf5934f165.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/96baa6d9-c0db-4a05-ade8-390f90b81d86.jpg",
    ],
    specs: [
      { label: "Suprafață Utilă", value: "114,13 mp" },
      { label: "Terasă Panoramică", value: "220,00 mp" },
      { label: "Balcon Suplimentar", value: "12,00 mp" },
      { label: "Suprafață Construită", value: "372,00 mp" },
      { label: "Etaj / Regim Înălțime", value: "5 din 5 (Retras)" },
      { label: "An Finalizare Clădire", value: "2014" },
      { label: "Compartimentare", value: "Decomandat" },
      { label: "Sistem Încălzire", value: "Centrală Proprie & AC" },
    ],
    features: [
      "Terasă perimetrală de 220 mp cu vedere panoramică 360°",
      "Structură din beton armat cu finisaje premium",
      "Bucătărie complet separată și 2 grupuri sanitare ventilate",
      "Clădire boutique cu regim redus de înălțime și acces securizat",
      "Conexiune imediată spre Piața Victoriei, Cotroceni și Polul de Business",
    ],
    sourceUrl: "https://cristianvaduva.com",
    sourceName: "CristianVaduva.com × HomeFind",
  },
  {
    id: "prop-pipera-villas",
    title: "Ansamblu Rezidențial de Vile Moderne Pipera – Voluntari",
    subtitle: "36 Vile Premium (P+2) · 135–162 mp Utili · Grădini Private · 2 Parcări Incluse",
    location: "Axa Rezidențială Pipera – Voluntari, Ilfov",
    price: "Preț la cerere",
    type: "Vile Moderne / Dezvoltare Rezidențială",
    category: "development",
    area: "135 – 162 mp utili / unitate",
    rooms: "5 Camere (4 Dormitoare + Living & Dining)",
    status: "Available",
    description: "Proiect rezidențial închis ce reunește 14 vile Tip 1 și 22 vile Tip 2 cu regim de înălțime P+2, conceput pentru familii ce caută spații aerisite, infrastructură stradală asfaltată, branșamente complete la rețelele edilitare și proximitate față de școlile internaționale din Pipera.",
    advisoryPerspective: "Micro-locație cu cerere constantă din partea expaților și a managementului executiv, asigurând randamente de închiriere competitive și lichiditate superioară.",
    heroImage: "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3198-2-1024x547.jpg",
    galleryImages: [
      "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3198-2-1024x547.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3200-1024x576.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3211.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3212-1024x576.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/IMG_3185-1024x1024.jpg",
    ],
    specs: [
      { label: "Număr Total Unități", value: "36 Vile (14 Tip 1 + 22 Tip 2)" },
      { label: "Regim Înălțime", value: "Parter + 2 Etaje (P+2)" },
      { label: "Suprafețe Utile", value: "135 mp – 162 mp" },
      { label: "Parcare", value: "2 Locuri Proprii Incluse / Vilă" },
      { label: "Spațiu Exterior", value: "Grădină privată amenajată" },
      { label: "Utilități", value: "Apă, Canalizare, Gaze, Curent, Fibră" },
    ],
    features: [
      "Două locuri de parcare dedicate integrate în proprietate",
      "Curți individuale cu intimitate fonică și vizuală",
      "Eficiență termică ridicată și tâmplărie termoizolantă tripan",
      "Acces securizat în cartier pe străzi late, asfaltate",
      "Acces rapid la școlile Cambridge, American School și British School",
    ],
    sourceUrl: "https://homefind.cristianvaduva.com",
    sourceName: "HomeFind Developments Hub",
  },
  {
    id: "prop-royal-mansion",
    title: "The Royal Protocol Mansion & Private Estate",
    subtitle: "Teren 3.050 mp · Suprafață Construită 783 mp · 16 Camere · Garaj 3 SUV-uri",
    location: "Zona Rezidențială de Nord, București Metropolitan",
    price: "Preț la cerere",
    type: "Domeniu Rezidențial / Protocol Mansion",
    category: "villa",
    area: "783 mp construiți · 3.050 mp parc privat",
    rooms: "16 Camere (Sală Bal, Saloane Oficiale, Suite Master)",
    status: "Private Deal",
    description: "Reședință arhitecturală monumentală proiectată pentru reprezentare diplomatică, birou de familie sau reședință privată multi-generațională. Domeniul include 3.050 mp de teren amenajat peisagistic, saloane înalte de protocol, garaj închis pentru 3 SUV-uri mari și securitate perimetrală avansată.",
    advisoryPerspective: "Activ de prestigiu cu valoare de unicat, protejat de inflație și structurat pentru tranzacționare confidențială în regim de reprezentare exclusivă.",
    heroImage: "/images/architecture/executive-study.jpg",
    galleryImages: [
      "/images/architecture/executive-study.jpg",
      "/images/architecture/hero-monument.jpg",
      "/images/architecture/monaco-cliffside.jpg",
    ],
    specs: [
      { label: "Suprafață Teren", value: "3.050,00 mp" },
      { label: "Suprafață Construită", value: "783,00 mp" },
      { label: "Număr Camere", value: "16 Încăperi Majore" },
      { label: "Garaj Integrat", value: "Capacitate 3 SUV-uri Mari" },
      { label: "Securitate", value: "Cameră de Control & Supraveghere" },
      { label: "Regim Tranzacție", value: "Plasament Privat / Single-Client NDA" },
    ],
    features: [
      "Parc privat cu arbori maturi și alei iluminate arhitectural",
      "Saloane de recepție cu înălțimi mari de nivel și finisaje în piatră naturală",
      "Sistem integrat de management al clădirii (BMS) și generatoare de rezervă",
      "Aripă separată pentru personal administrativ și securitate",
      "Structură fiduciară optimizată pentru deținere prin companie de holding",
    ],
    sourceUrl: "https://cristianvaduva.com",
    sourceName: "CristianVaduva.com Sovereign Portfolio",
  },
  {
    id: "prop-nautical-home",
    title: "NAUTICAL HOME 11 — Reședință Marină Plutitoare Autonomă",
    subtitle: "Lungime 11 m · Lățime 3,7 m · Spațiu Locuibil >50 mp · Rooftop Sun Deck",
    location: "Port Turistic / Deltă / Lacuri Nautice & Litoral",
    price: "74.000 € + TVA (Configurație Model Bază)",
    type: "Reședință Plutitoare / Yacht House",
    category: "marine",
    area: ">50 mp spațiu util + terasă superioară",
    rooms: "Living, Dormitor Master, Bucătărie, Baie, Terasă Rooftop",
    status: "Custom Order",
    description: "Reședință plutitoare certificată conform standardelor navale moderne, destinată locuirii permanente în toate cele patru anotimpuri, agrementului nautic sau exploatării turistice în regim boutique. Construită pe structură din oțel marin galvanizat și pontoane polietilenă cu miez EPS de înaltă flotabilitate.",
    advisoryPerspective: "Concept inovator de mobilitate patrimonială fără impozit pe proprietate imobiliară clasică, generând randamente superioare în turismul exclusivist.",
    heroImage: "https://cristianvaduva.com/wp-content/uploads/2024/01/c4326451-7ce2-4c04-a59f-8a697b6c6f64.jpg",
    galleryImages: [
      "https://cristianvaduva.com/wp-content/uploads/2024/01/c4326451-7ce2-4c04-a59f-8a697b6c6f64.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/031cfc74-ee3b-4b5e-952f-f6070a78d183.jpg",
    ],
    specs: [
      { label: "Lungime Ambarcațiune", value: "11,00 m (36 ft)" },
      { label: "Lățime (Beam)", value: "3,70 m (12.1 ft)" },
      { label: "Spațiu Locuibil", value: "> 50 mp (inclusiv rooftop)" },
      { label: "Capacitate Oaspeți", value: "2 – 6 Persoane" },
      { label: "Rezervor Apă Dulce", value: "400 Litri" },
      { label: "Rezervor Ape Uzate", value: "400 Litri cu Senzori" },
      { label: "Sistem Energetic", value: "220V / 12V + Banc Baterii" },
      { label: "Propulsie", value: "Motor Termic sau Electric Opțional" },
    ],
    features: [
      "Termoizolație performantă pentru utilizare în toate cele 4 sezoane",
      "Pontoane din polietilenă de înaltă densitate cu miez EPS nesinkabil",
      "Terasă panoramică rooftop amenajată pentru plajă și observator nautic",
      "Post de comandă complet echipat pentru navigație facilă",
      "Complet mobilată și utilată, gata pentru lansare la apă",
    ],
    sourceUrl: "https://cristianvaduva.com",
    sourceName: "CristianVaduva.com Maritime Desk",
  },
  {
    id: "prop-schei-brasov",
    title: "Apartament Vilă Istorică cu Terasă de 30 mp — Schei, Brașov",
    subtitle: "3 Camere · Terasă Panoramică 30 mp · Vedere Muntele Tâmpa",
    location: "Cartierul Istoric Schei, Brașov, la Poalele Muntelui Tâmpa",
    price: "Preț la cerere",
    type: "Reședință Istorică / Vilă Brașoveană",
    category: "penthouse",
    area: "3 Camere · Terasă 30 mp",
    rooms: "3 Camere (2 Dormitoare, Living, Baie, Bucătărie)",
    status: "Available",
    description: "Amplasat la etajul 1 al unei vile aristocratice din cartierul istoric Schei, acest apartament combină arhitectura interbelică conservată impecabil cu confortul modern și o terasă spectaculoasă de 30 mp orientată direct spre Muntele Tâmpa și centrul vechi.",
    advisoryPerspective: "Zonă protejată din punct de vedere urbanistic, unde noi construcții nu mai sunt autorizate, garantând raritatea și creșterea valorii pe termen lung.",
    heroImage: "https://cristianvaduva.com/wp-content/uploads/2024/01/c436e74f-28b3-4f1d-bcf3-ce9f05b2aa04-1024x768.jpg",
    galleryImages: [
      "https://cristianvaduva.com/wp-content/uploads/2024/01/c436e74f-28b3-4f1d-bcf3-ce9f05b2aa04-1024x768.jpg",
      "https://cristianvaduva.com/wp-content/uploads/2024/01/9fb0d43c-76b3-4b44-a38e-94134491beae-1024x768.jpg",
    ],
    specs: [
      { label: "Tip Imobil", value: "Etaj 1 în Vilă Istorică" },
      { label: "Număr Camere", value: "3 Camere Decomandate" },
      { label: "Terasă Privată", value: "30 mp cu Vedere Muntele Tâmpa" },
      { label: "Stil Arhitectural", value: "Clasic / Interbelic Restaurat" },
      { label: "Destinație", value: "Reședință sau Casă de Vacanță Premium" },
    ],
    features: [
      "Terasă panoramică de 30 mp cu orientare sud-vest spre Tâmpa",
      "Înălțimi generoase de tavan și tâmplărie de calitate",
      "Parcare facilă în curte privată",
      "Amplasament liniștit la 5 minute de mers pe jos de Piața Sfatului",
    ],
    sourceUrl: "https://cristianvaduva.com",
    sourceName: "CristianVaduva.com Heritage Curation",
  },
  {
    id: "prop-monaco-coast",
    title: "Travertine Cliffside Pavilion — Cap d’Ail / Monaco Border",
    subtitle: "480 mp Living · 1.400 mp Teren Faleză · Piscină Suspendată",
    location: "Cap d'Ail / Granița cu Principatul Monaco",
    price: "Preț la cerere",
    type: "Vilă Ultralux / Faleză Mediteraneană",
    category: "international",
    area: "480 mp utili · 1.400 mp teren",
    rooms: "6 Suite Master · Saloane Recepție",
    status: "Private Deal",
    description: "Operă de artă sculpturală în travertin și sticlă structurală, orientată direct către Marea Mediterană. Mandatul a implicat audit de zonare transfrontalieră, optimizare fiscală printr-o structură corporativă din Monaco și negociere directă single-principal sub acord de confidențialitate elvețian.",
    advisoryPerspective: "Cel mai lichid micro-segment de pe Coasta de Azur, la distanță de câteva minute de Portul Hercule din Monaco.",
    heroImage: "/images/architecture/monaco-cliffside.jpg",
    galleryImages: [
      "/images/architecture/monaco-cliffside.jpg",
      "/images/architecture/hero-monument.jpg",
    ],
    specs: [
      { label: "Locație Geografică", value: "Axa Monaco – Cap d'Ail" },
      { label: "Suprafață Construită", value: "480,00 mp" },
      { label: "Suprafață Teren", value: "1.400,00 mp Terase Faleză" },
      { label: "Suite Dormitor", value: "6 Suite cu Băi Private din Marmură" },
      { label: "Parcare & Garaj", value: "Garaj subteran securizat 4 vehicule" },
    ],
    features: [
      "Piscină infinity suspendată pe faleza stâncoasă deasupra Mediteranei",
      "Finisaje monumentale din travertin periat și tâmplărie minimalistă Schuco",
      "Sistem de securitate biometric și cameră de refugiu dedicată",
      "Acces privat direct spre promenada de coastă",
    ],
    sourceUrl: "https://www.aixluxury.com",
    sourceName: "AiXLuxury Monaco Desk",
  },
  {
    id: "prop-dubai-brabus",
    title: "BRABUS Island & Signature Waterfront Sky Mansions",
    subtitle: "Vile Branded pe Apă & Penthouse-uri Iconice · Dubai Islands Axis",
    location: "Dubai Islands / Palm Jumeirah Axis, Emiratele Arabe Unite",
    price: "Preț la cerere (Alocare Dezvoltator)",
    type: "Dezvoltare Ultra-Prime / Branded Residences",
    category: "international",
    area: "450 – 1.200 mp",
    rooms: "4 – 7 Dormitoare + Dane Private Ambarcațiuni",
    status: "Under Development",
    description: "Proiect internațional de referință dezvoltat pe axa waterfront a emiratului Dubai. Informațiile reprezintă detalii oficiale publicate de dezvoltator. Oferă acces la dane private de acostare pentru yachturi, interioare semnate BRABUS Design și facilități private de lifestyle UHNW.",
    advisoryPerspective: "Alocare strategică de capital în regim fiscal neutru UAE, cu randamente calculate și securizare pre-lansare pentru investitorii privați calificați.",
    heroImage: "/images/architecture/hero-monument.jpg",
    galleryImages: [
      "/images/architecture/hero-monument.jpg",
      "/images/architecture/monaco-cliffside.jpg",
    ],
    specs: [
      { label: "Jurisdicție Fiscală", value: "Dubai / UAE (0% Impozit Personal)" },
      { label: "Tipologie Unități", value: "Waterfront Mansions & Sky Penthouses" },
      { label: "Statut Proiect", value: "În Curs de Dezvoltare (Date Dezvoltator)" },
      { label: "Facilități Marine", value: "Dană Privată Yachting Inclusă" },
      { label: "Parteneriat Brand", value: "BRABUS Design Specifications" },
    ],
    features: [
      "Informații de proiect publicate de dezvoltator — achiziții off-plan verificate",
      "Plajă privată și vedere neobstrucționată spre skyline-ul Dubaiului",
      "Eligibilitate pentru UAE Golden Visa (10 ani) pentru principal și familie",
      "Audit fiduciar independent al contractului de vânzare-cumpărare (SPA)",
    ],
    sourceUrl: "https://www.aixluxury.com",
    sourceName: "AiXLuxury Dubai Desk",
  },
];

export function getSelectedProperties(): Property[] {
  return selectedProperties;
}

export function getPropertyById(id: string): Property | undefined {
  return selectedProperties.find((p) => p.id === id);
}

export function getPropertiesByCategory(category: Property["category"]): Property[] {
  return selectedProperties.filter((p) => p.category === category);
}
