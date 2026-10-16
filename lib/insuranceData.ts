export interface InsuranceDivision {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  items: string[];
  externalPath: string;
}

export interface InsurancePillar {
  title: string;
  subtitle: string;
  description: string;
  coveragePoints: string[];
  regulatoryBasis?: string;
}

export const insuranceOverview = {
  title: "Protecția Patrimoniului & Asigurări Strategice",
  subtitle: "Consultanță fiduciară autorizată · Partener Generali România",
  corePhilosophy: "Achiziția unui activ de mare valoare este doar primul pas; protejarea lui împotriva riscurilor asimetrice face parte din administrarea responsabilă a oricărui patrimoniu de familie sau corporativ.",
  externalPortalUrl: "https://insurance.cristianvaduva.com",
  partnerName: "Generali România",
  partnerRole: "Consultant Autorizat în Asigurări Premium & Protecție Financiară",
};

export const insuranceDivisions: InsuranceDivision[] = [
  {
    id: "auto-casco",
    title: "CASCO & Asigurări Auto Strategice",
    category: "Automotive & Fleet",
    tagline: "Protecție completă pentru vehicule premium, electrice și hibride",
    description: "Polițe CASCO croite pentru vehicule de înaltă performanță, acoperind daunele provocate de fenomene meteo extreme, bateriile de tracțiune pentru mașini electrice și stațiile de încărcare, cu asistență rapidă prin aplicația digitală Amiabila și optimizare prin sistemul Bonus-Malus.",
    items: [
      "CASCO pentru vehicule electrice & plug-in hybrid (inclusiv bateria de tracțiune)",
      "Clauze speciale pentru fenomene meteo extreme (grindină, inundații, furtuni)",
      "Digitalizarea constatării amiabile prin aplicația oficială Amiabila (BAAR)",
      "Optimizare Bonus-Malus cu reduceri de până la 50% pentru conducătorii disciplinați",
      "Asistență rutieră extinsă Europa și mașină de înlocuire la nivel premium",
    ],
    externalPath: "https://insurance.cristianvaduva.com/stiri/crestere-despagubiri-casco-fenomene-meteo-extreme-romania",
  },
  {
    id: "locuinta-patrimoniu",
    title: "Locuință & Patrimoniu Imobiliar",
    category: "Real Estate & Estates",
    tagline: "Polița obligatorie PAD vs. Asigurarea facultativă completă",
    description: "Auditarea acoperirilor imobiliare pentru a elimina sub-asigurarea. Explicarea diferențelor critice dintre plafonul legal PAD (20.000 € / 10.000 €) și polițele facultative complete ce acoperă valoarea reală de reconstrucție a clădirilor, instalațiile, finisajele de lux și bunurile din interior.",
    items: [
      "Acoperire la valoarea reală de piață și cost de reconstrucție fără depreciere",
      "Protecție integrată împotriva cutremurelor, inundațiilor și alunecărilor de teren",
      "Avarii accidentale la instalațiile de apă, canalizare, climatizare și încălzire",
      "Răspundere civilă față de terți pentru daune provocate vecinilor",
      "Cazare temporară la standard echivalent în caz de nelocuibilitate",
    ],
    externalPath: "https://insurance.cristianvaduva.com/stiri/asigurarea-obligatorie-pad-vs-facultativa-protectie-completa-locuinte",
  },
  {
    id: "viata-sanatate",
    title: "Viață, Sănătate & Planificare Familială",
    category: "Life & Health",
    tagline: "Protecție familială și acumulare garantată cu avantaje fiscale",
    description: "Planuri structurate de protecție a vieții cu componentă de economisire garantată și polițe private de sănătate pentru persoane fizice și echipe executive, valorificând plafonul de deductibilitate fiscală de 400 €/an/angajat.",
    items: [
      "Asigurări de viață cu componentă mixtă (protecție financiară + capitalizare garantată)",
      "Polițe private de sănătate corporate cu deductibilitate de 400 €/an/angajat",
      "Acces la rețele medicale de top din România și spitale de elită din Europa",
      "Acoperire critică pentru boli grave, intervenții chirurgicale complexe și a doua opinie medicală",
      "Continuitate financiară și protecția veniturilor familiei în scenarii neprevăzute",
    ],
    externalPath: "https://insurance.cristianvaduva.com/stiri/sanatate-corporate-beneficii-fiscale-deductibilitate-angajatori",
  },
  {
    id: "business-cyber-do",
    title: "Riscuri Corporative, D&O & Cyber Risk",
    category: "Corporate & Executive Liability",
    tagline: "Transferul riscului managerial și conformitate cu Directiva Europeană NIS 2",
    description: "Soluții instituționale pentru companii și administratori: asigurări D&O (Directors & Officers) pe mecanisme claims-made cu clauze retroactive, asigurare de Cyber Risk pentru continuitate operațională și acoperirea riscurilor de transport Cargo & CMR.",
    items: [
      "Asigurare D&O (Directors & Officers) pentru protejarea patrimoniului personal al administratorilor",
      "Polițe Cyber Risk conforme cu Directiva Europeană NIS 2 (răspuns la incidente și pierderi operaționale)",
      "Asigurare Cargo vs. Răspundere CMR a cărăușului în transporturile internaționale de mărfuri",
      "Răspundere civilă profesională și malpraxis adaptat expunerii reale clinice și de consultanță",
      "Audit de conformitate și renegociere fiduciară a termenilor contractuali",
    ],
    externalPath: "https://insurance.cristianvaduva.com/stiri/directiva-europeana-nis2-asigurare-cyber-riscuri-imm",
  },
  {
    id: "private-client-extraordinary",
    title: "Private Client Division — Active Extraordinare",
    category: "Ultra-High-Net-Worth Portfolios",
    tagline: "Supercars, yachturi, aviație privată, ceasuri de lux și opere de artă",
    description: "Divizie dedicată bunurilor de colecție unde polițele standard sunt insuficiente. Evaluare independentă și andosamente specifice fără aplicarea cotelor de depreciere pentru piese de orologerie, colecții private, bijuterii și ambarcațiuni maritime.",
    items: [
      "Supercars & Exotics: acoperire pe pistă și în tranzit în cadrul AiX Luxury Garage",
      "Yachts & Superyachts: asigurare navală pe ape teritoriale internaționale",
      "Private Aviation: aeronave private și răspundere aeronautică civilă",
      "Jewellery & Watches: evaluare agreată fără depreciere pentru piese de orologerie rară",
      "Fine Art & Collectibles: asigurare all-risks de la simeză la simeză (wall-to-wall)",
    ],
    externalPath: "https://insurance.cristianvaduva.com/private-client",
  },
];
