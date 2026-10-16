export interface EcosystemPlatform {
  id: string;
  name: string;
  role: string;
  badge: string;
  domain: string;
  url: string;
  description: string;
  keyCapabilities: string[];
  audience: string;
  synergyWithExecutive: string;
}

export const ecosystemPlatforms: EcosystemPlatform[] = [
  {
    id: "aix-os",
    name: "AiX OS™",
    role: "Nucleul de Inteligență & Sistemul de Operare Imobiliar",
    badge: "CORE ENGINE",
    domain: "aixos.cristianvaduva.com",
    url: "https://homefind.cristianvaduva.com",
    description: "Infrastructura tehnologică centralizată bazată pe modele avansate de inteligență artificială, procesare neurală și OSINT, ce interconectează bazele de date, fluxurile CRM și analiza predictivă pe axa Monaco · Dubai · București.",
    keyCapabilities: [
      "Algoritmi dinamici de potrivire (AI Match Score) între cererile cumpărătorilor și proprietăți",
      "Calculatoare avansate de randament (Cap Rate, Cash-on-Cash, impact fiscal la cota TVA)",
      "Procesare securizată a documentelor sub protocoale stricte de confidențialitate",
      "Monitorizare în timp real a indicatorilor macroeconomici (ANCPI, curs BNR, indici imobiliari)",
    ],
    audience: "Profesioniști în investiții, birouri de familie, investitori instituționali",
    synergyWithExecutive: "Asigură fundamentul analitic și viteza de calificare a oportunităților înainte de negocierea directă.",
  },
  {
    id: "homefind",
    name: "HomeFind",
    role: "Platforma Imobiliară B2B & B2C Verificată",
    badge: "VERIFIED PORTAL",
    domain: "homefind.cristianvaduva.com",
    url: "https://homefind.cristianvaduva.com",
    description: "Portalul dedicat tranzacțiilor imobiliare verificate din România și din piețe internaționale cheie. Include piața inversă de cereri ale cumpărătorilor calificați (Reverse Marketplace) și portofoliul de ansambluri rezidențiale de referință.",
    keyCapabilities: [
      "Listări imobiliare auditate juridic și fizic înainte de publicare",
      "Reverse Marketplace: conectarea directă a vânzătorilor cu bugete reale și intenții confirmate",
      "Dezvoltări rezidențiale semnătură (Pipera, Herăstrău, Kiseleff, Primăverii)",
      "Abonamente profesionale flexibile (Starter, Professional, Business și Private Enterprise)",
    ],
    audience: "Cumpărători calificați, proprietari de reședințe, dezvoltatori și agenții de elită",
    synergyWithExecutive: "Filtrează cererea și oferta din piața deschisă, alimentând selecția privată a mandatelor de reprezentare.",
  },
  {
    id: "aixluxury",
    name: "AiXLuxury.com",
    role: "Portalul Ultra-Luxury & Rețeaua Privată Internațională",
    badge: "ULTRA-PRIME AXIS",
    domain: "aixluxury.com",
    url: "https://www.aixluxury.com",
    description: "Platforma internațională dedicată activelor trofeu din Monaco, Dubai, Coasta de Azur și București. Operând discret și preponderent off-market, conectează reședințe emblematice, penthouse-uri și proiecte de mare anvergură cu investitori UHNW.",
    keyCapabilities: [
      "Selecție exclusivă de penthouse-uri, vile istorice și reședințe waterfront",
      "Acces la proiecte internaționale de prestigiu (axa Dubai Islands, Palm Jumeirah, BRABUS Island)",
      "Mandate de reprezentare exclusivă pentru vânzători și cumpărători la nivel internațional",
      "Plasamente private protejate prin acorduri de confidențialitate de tip elvețian (Swiss NDA)",
    ],
    audience: "Principali UHNW, colecționari de proprietăți trofeu, fonduri private de capital",
    synergyWithExecutive: "Oferă anvergură internațională și acces direct la cercurile de capital din marile centre financiare.",
  },
  {
    id: "insurance",
    name: "Insurance by Cristian Văduva",
    role: "Protecția Patrimoniului & Parteneriat Generali România",
    badge: "ASSET PROTECTION",
    domain: "insurance.cristianvaduva.com",
    url: "https://insurance.cristianvaduva.com",
    description: "Divizia dedicată securizării complete a activelor imobiliare, flotelor, sănătății executive și riscurilor profesionale. Oferă consultanță autorizată în parteneriat cu Generali România și soluții bespoke prin Private Client Division.",
    keyCapabilities: [
      "Polițe CASCO complete pentru supercars, vehicule de lux și mașini electrice",
      "Asigurări facultative de locuință la valoare reală de reconstrucție (clădiri și conținut de valoare)",
      "Sănătate corporate cu optimizare fiscală (deductibilitate 400 €/an/angajat)",
      "Protecție D&O (Directors & Officers), Cyber Risk (NIS 2) și riscuri de transport Cargo",
      "Private Client Division: acoperire all-risks pentru colecții de artă, yachturi, aviație și ceasuri",
    ],
    audience: "Proprietari de active mari, familii cu patrimoniu consolidat, administratori de companii",
    synergyWithExecutive: "Închide ciclul tranzacțional: după achiziție și structurare, garantează conservarea valorii împotriva riscurilor neprevăzute.",
  },
  {
    id: "doar-inchirieri",
    name: "doar-inchirieri.ro",
    role: "Platformă Specializată de Închirieri & Administrare (În Dezvoltare)",
    badge: "UNDER DEVELOPMENT",
    domain: "doar-inchirieri.ro",
    url: "https://cristianvaduva.com",
    description: "Platformă tehnologică în curs de dezvoltare, dedicată optimizării randamentelor de închiriere și administrării profesionale a portofoliilor rezidențiale și comerciale.",
    keyCapabilities: [
      "Gestionarea automată a contractelor de locațiune și a indexărilor cu inflația",
      "Screening fiduciar riguros al profilului chiriașilor",
      "Monitorizarea randamentelor nete de închiriere în timp real",
    ],
    audience: "Proprietari de portofolii imobiliare de randament, expați, chiriași corporate",
    synergyWithExecutive: "Maximizează fluxul de numerar generat de activele achiziționate de investitori.",
  },
];
