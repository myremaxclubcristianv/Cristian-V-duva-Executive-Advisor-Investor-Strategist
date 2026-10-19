export type Locale = "en" | "ro" | "fr" | "de" | "ar";

export interface Translations {
  nav: {
    about: string;
    profile: string;
    philosophy: string;
    insights: string;
    articles: string;
    media: string;
    videos: string;
    realEstate: string;
    market: string;
    properties: string;
    ventures: string;
    contact: string;
    consultation: string;
    ticker: string[];
  };
  hero: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    partnersTitle: string;
    partnersSubtitle: string;
    standardsTitle: string;
    standardsSubtitle: string;
    portfolioTitle: string;
    portfolioSubtitle: string;
    exploreCatalog: string;
    ctaConsultation: string;
  };
  editorial: {
    kicker: string;
    quote: string;
    pillar1Num: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Num: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Num: string;
    pillar3Title: string;
    pillar3Desc: string;
  };
  perspective: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    foundationTitle: string;
    degreesTitle: string;
    degreesDesc: string;
    intlTitle: string;
    intlDesc: string;
    cta: string;
  };
  opportunities: {
    eyebrow: string;
    badge: string;
    title: string;
    desc: string;
    leadBadge: string;
    supportingEyebrow: string;
    supportingTitle: string;
    supportingSubtitle: string;
    conceptualEyebrow: string;
    conceptualTitle: string;
    conceptualSubtitle: string;
    conceptTag: string;
    archStudy: string;
    ctaCatalog: string;
    viewMonograph: string;
  };
  intelligence: {
    eyebrow: string;
    title: string;
    desc: string;
    dispatchBtn: string;
    sourceLabel: string;
  };
  ecosystem: {
    kicker: string;
    title: string;
    titleSub: string;
    desc: string;
    activePlatforms: string;
    preLaunch: string;
  };
  form: {
    title: string;
    subtitle: string;
    principalName: string;
    directEmail: string;
    directPhone: string;
    mandateCategory: string;
    buyerMandate: string;
    sellerMandate: string;
    investorMandate: string;
    sourcingMandate: string;
    consultationMandate: string;
    otherMandate: string;
    briefingNotes: string;
    briefingPlaceholder: string;
    consentText: string;
    privacyLink: string;
    submitBtn: string;
    transmitting: string;
    successTitle: string;
    successDesc: string;
    submitAnother: string;
    discretionNotice: string;
    directChannels: string;
    directChannelsDesc: string;
  };
  footer: {
    brandDesc: string;
    rightsReserved: string;
    privacy: string;
    terms: string;
    gdpr: string;
    cookies: string;
    editorial: string;
    provenance: string;
    disclaimer: string;
    login: string;
  };
  cookies: {
    title: string;
    desc: string;
    accept: string;
    decline: string;
    settings: string;
    policy: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      about: "About",
      profile: "Profile",
      philosophy: "Philosophy",
      insights: "Insights",
      articles: "Articles",
      media: "Media",
      videos: "Videos",
      realEstate: "Real Estate",
      market: "Market",
      properties: "Properties",
      ventures: "Ventures",
      contact: "Contact",
      consultation: "Consultation",
      ticker: [
        "EXECUTIVE REAL ESTATE ADVISORY",
        "MANDATE-BASED REPRESENTATION",
        "INVESTMENT STRATEGY & DUE DILIGENCE",
        "DISCREET PRINCIPAL ADVISORY",
        "CRISTIAN VĂDUVA — EXECUTIVE ADVISOR",
      ],
    },
    hero: {
      kicker: "ARCHITECTURAL REAL ESTATE ADVISORY & TRANSACTION STRATEGY",
      titleLine1: "Independent Mandates.",
      titleLine2: "Rigorous Execution.",
      subtitle:
        "Representation tailored to your side of the transaction — seller, buyer, or investor across Romania and selected international corridors.",
      partnersTitle: "CONFIRMED AFFILIATIONS",
      partnersSubtitle: "Chestertons Global & Generali",
      standardsTitle: "WORKING STANDARDS",
      standardsSubtitle: "Mandate-Based Representation",
      portfolioTitle: "DOCUMENTED PORTFOLIO",
      portfolioSubtitle: "433 Curated Monographs",
      exploreCatalog: "Explore property catalog →",
      ctaConsultation: "REQUEST DIRECT DIALOGUE",
    },
    editorial: {
      kicker: "02 // METHODOLOGY & ADVISORY ETHIC",
      quote:
        "A successful transaction begins long before negotiation — with meticulous due diligence, unvarnished property data, and zero speculation.",
      pillar1Num: "01 // INDEPENDENT MANDATE",
      pillar1Title: "Strict Unilateral Representation",
      pillar1Desc:
        "Engagements are tailored exclusively to our client's objective — whether representing seller, buyer, or investor — ensuring unwavering loyalty without internal conflicts.",
      pillar2Num: "02 // STRUCTURAL & CADASTRAL AUDIT",
      pillar2Title: "Rigorous Technical Due Diligence",
      pillar2Desc:
        "30-year title verification, cadastral plan cross-referencing, certified structural inspections, and neighbouring urban zoning risk assessment.",
      pillar3Num: "03 // TRANSACTION EXECUTION",
      pillar3Title: "Strategic Negotiation & Settlement",
      pillar3Desc:
        "Empirical pricing based on certified notary deed comparables rather than listing portal speculation, safeguarding your capital throughout.",
    },
    perspective: {
      kicker: "04 // PROFESSIONAL FOUNDATION",
      title: "Disciplined Analysis Over Portal Speculation",
      p1: "Cristian Văduva structures high-value property acquisitions and strategic portfolio mandates across Bucharest and selected European markets.",
      p2: "Combining multidisciplinary academic training in economics, law, and environmental systems with on-the-ground transaction experience, our desk provides verified facts and structural clarity.",
      p3: "Properties are evaluated through physical longevity, 30-year title provenance, exit liquidity, and generational capital preservation.",
      foundationTitle: "MULTIDISCIPLINARY FOUNDATION",
      degreesTitle: "Higher Education — Three Bachelor Degrees",
      degreesDesc: "Economics · Law · Ecology",
      intlTitle: "International Experience",
      intlDesc: "Residencies & Analysis (Madrid · Amiens · Valletta)",
      cta: "BIOGRAPHY & COMPLETE BACKGROUND",
    },
    opportunities: {
      eyebrow: "03 // CURATED SELECTION & OPPORTUNITIES",
      badge: "CURATED PORTFOLIO",
      title: "Residential Properties & Investment Opportunities",
      desc: "Structured portfolio of available properties evaluated for spatial distinction, verified legal title, and long-term liquidity.",
      leadBadge: "AVAILABLE FOR ACQUISITION // SIGNATURE",
      supportingEyebrow: "SELECTED ASSETS",
      supportingTitle: "Curated Opportunities in Portfolio",
      supportingSubtitle: "PRIME RESIDENTIAL & HISTORIC PATRIMONY",
      conceptualEyebrow: "CONCEPTUAL GALLERY",
      conceptualTitle: "Architectural Concepts & Spatial Studies",
      conceptualSubtitle: "ILLUSTRATIVE RENDERINGS & VOLUMETRIC MODELING",
      conceptTag: "Architectural Concept / Illustrative Rendering",
      archStudy: "Architectural Study",
      ctaCatalog: "COMPLETE PROPERTY CATALOG",
      viewMonograph: "VIEW MONOGRAPH & SPECS",
    },
    intelligence: {
      eyebrow: "05 // INVESTMENT INTELLIGENCE",
      title: "Empirical Market Indicators",
      desc: "Macroeconomic telemetry and transaction records tracked through official cadastre archives and statistical institutes.",
      dispatchBtn: "DISPATCH ↗",
      sourceLabel: "Source:",
    },
    ecosystem: {
      kicker: "THE CONNECTED ECOSYSTEM",
      title: "The Connected Ecosystem",
      titleSub: "of Cristian Vaduva.",
      desc: "Every discipline required to acquire, finance, protect, and develop high-value assets operates as a dedicated, specialized platform within the ecosystem.",
      activePlatforms: "ACTIVE PLATFORMS",
      preLaunch: "PRE-LAUNCH",
    },
    form: {
      title: "TRANSMIT INQUIRY",
      subtitle: "PROFESSIONAL DISCRETION",
      principalName: "Principal / Representative Name *",
      directEmail: "Direct Email *",
      directPhone: "Direct Phone / Signal",
      mandateCategory: "Mandate Category *",
      buyerMandate: "Buyer representation (Search, due diligence, acquisition)",
      sellerMandate: "Seller representation (Positioning, outreach, execution)",
      investorMandate: "Investor advisory (Screening, market analysis, underwriting)",
      sourcingMandate: "Property sourcing (Targeted on-market & off-market discovery)",
      consultationMandate: "Strategic consultation (Real estate & capital strategy)",
      otherMandate: "Other principal mandate",
      briefingNotes: "Executive Briefing Notes",
      briefingPlaceholder: "Outline target asset specifications, jurisdiction preference, or mandate timeline...",
      consentText: "I agree to the processing of submitted data to respond to this inquiry, pursuant to the",
      privacyLink: "Privacy Policy",
      submitBtn: "SUBMIT CONFIDENTIAL INQUIRY",
      transmitting: "TRANSMITTING...",
      successTitle: "Inquiry Dispatched",
      successDesc: "Thank you. Your dossier has been logged. Cristian Văduva or the private office will respond within 24 hours.",
      submitAnother: "Submit Another Communication",
      discretionNotice: "Inquiries are handled discreetly. A separate confidentiality agreement can be discussed and signed where appropriate.",
      directChannels: "Discreet Communication Channels",
      directChannelsDesc: "Principals and family office mandates are insulated from standard intermediary tiers.",
    },
    footer: {
      brandDesc: "Directing strategic capital allocation, prime real estate advisory, and discreet mandates for principals and family offices.",
      rightsReserved: "ALL SOVEREIGN RIGHTS RESERVED.",
      privacy: "PRIVACY POLICY",
      terms: "TERMS OF USE",
      gdpr: "GDPR",
      cookies: "COOKIES POLICY",
      editorial: "EDITORIAL POLICY",
      provenance: "DATA PROVENANCE",
      disclaimer: "DISCLAIMER",
      login: "PRINCIPAL LOGIN",
    },
    cookies: {
      title: "Cookie & Privacy Preferences",
      desc: "This platform uses essential storage and anonymous performance telemetry to deliver sovereign editorial functionality. You can manage your preferences below.",
      accept: "Accept All",
      decline: "Reject Non-Essential",
      settings: "Cookie Settings",
      policy: "Read Cookie Policy",
    },
  },
  ro: {
    nav: {
      about: "Despre",
      profile: "Profil",
      philosophy: "Filosofie",
      insights: "Perspective",
      articles: "Articole",
      media: "Media",
      videos: "Video",
      realEstate: "Imobiliare",
      market: "Piață",
      properties: "Proprietăți",
      ventures: "Proiecte",
      contact: "Contact",
      consultation: "Consultanță",
      ticker: [
        "CONSULTANȚĂ IMOBILIARĂ EXECUTIVĂ",
        "REPREZENTARE PE BAZĂ DE MANDAT",
        "STRATEGIE DE INVESTIȚII & DUE DILIGENCE",
        "DISCREȚIE PROFESIONALĂ PENTRU PRINICPALI",
        "CRISTIAN VĂDUVA — CONSILIER EXECUTIV",
      ],
    },
    hero: {
      kicker: "CONSULTANȚĂ IMOBILIARĂ ARHITECTURALĂ & STRATEGIE TRANZACȚIONALĂ",
      titleLine1: "Mandate Independente.",
      titleLine2: "Execuție Riguroasă.",
      subtitle:
        "Reprezentare adaptată părții dumneavoastră din tranzacție — vânzător, cumpărător sau investitor, în România și coridoare internaționale selectate.",
      partnersTitle: "PARTENERIATE OFICIALE",
      partnersSubtitle: "Chestertons Global & Generali",
      standardsTitle: "STANDARDE DE LUCRU",
      standardsSubtitle: "Reprezentare pe Bază de Mandat",
      portfolioTitle: "PORTOFOLIU DOCUMENTAT",
      portfolioSubtitle: "433 Monografii de Portofoliu",
      exploreCatalog: "Explorează catalogul imobiliar →",
      ctaConsultation: "SOLICITĂ DIALOG DIRECT",
    },
    editorial: {
      kicker: "02 // METODOLOGIE & ETICĂ DE CONSULTANȚĂ",
      quote:
        "O tranzacție de succes începe cu mult înainte de negociere — cu un audit exhaustiv, date necosmetizate și zero speculație.",
      pillar1Num: "01 // MANDAT INDEPENDENT",
      pillar1Title: "Reprezentare Unilaterală Strictă",
      pillar1Desc:
        "Mandatele sunt calibrate exclusiv pentru obiectivul clientului — fie vânzător, cumpărător sau investitor — garantând loialitate fără conflicte de interese.",
      pillar2Num: "02 // AUDIT TEHNIC ȘI CADASTRAL",
      pillar2Title: "Due Diligence Tehnic Riguros",
      pillar2Desc:
        "Verificarea istoricului pe 30 de ani, concordanța releveelor cadastrale, expertize tehnice de rezistență și analiza riscurilor urbanistice vecine.",
      pillar3Num: "03 // EXECUȚIE TRANZACȚIONALĂ",
      pillar3Title: "Negociere Strategică & Finalizare",
      pillar3Desc:
        "Poziționare de preț bazată pe comparabile notariale autentificate, nu pe prețuri afișate pe portaluri, protejând capitalul la fiecare pas.",
    },
    perspective: {
      kicker: "04 // FUNDAMENT PROFESIONAL",
      title: "Analiză Riguroasă în Locul Speculației",
      p1: "Cristian Văduva structurează achiziții imobiliare de mare valoare și mandate strategice de portofoliu în București și piețe europene selectate.",
      p2: "Combinând pregătirea academică multidisciplinară în economie, drept și ecologie cu experiența practică din teren, biroul nostru oferă certitudine faptică și claritate structurală.",
      p3: "Proprietățile sunt evaluate prin prisma longevității constructive, istoricului de 30 de ani al titlului, lichidității de ieșire și conservării patrimoniale generaționale.",
      foundationTitle: "FUNDAMENT MULTIDISCIPLINAR",
      degreesTitle: "Studii superioare — trei diplome de licență",
      degreesDesc: "Economie · Drept · Ecologie",
      intlTitle: "Experiență Internațională",
      intlDesc: "Rezidențe & Analiză (Madrid · Amiens · Valletta)",
      cta: "BIOGRAFIE & PARCURS COMPLET",
    },
    opportunities: {
      eyebrow: "03 // SELECȚIE DE PROPRIETĂȚI ȘI OPORTUNITĂȚI",
      badge: "PORTOFOLIU SELECTAT",
      title: "Proprietăți Rezidențiale și Oportunități de Investiție",
      desc: "Selecție structurată de proprietăți disponibile la ofertare, analizate din perspectiva calității spațiale, a cadrului juridic și a potențialului pe termen lung.",
      leadBadge: "PROPRIETATE DISPONIBILĂ LA OFERTARE // REPREZENTATIV",
      supportingEyebrow: "OPORTUNITĂȚI SELECTATE",
      supportingTitle: "Proprietăți Disponibile în Portofoliu",
      supportingSubtitle: "REZIDENȚIAL PRIME & PATRIMONIU ISTORIC",
      conceptualEyebrow: "GALERIE CONCEPTUALĂ",
      conceptualTitle: "Concepte & Studii Arhitecturale",
      conceptualSubtitle: "RANDĂRI ILUSTRATIVE & STUDII DE VOLUMETRIE",
      conceptTag: "Concept Arhitectural / Randare Ilustrativă",
      archStudy: "Studiu Arhitectural",
      ctaCatalog: "CATALOG COMPLET PROPRIETĂȚI",
      viewMonograph: "VEZI MONOGRAFIE & SPECIFICAȚII",
    },
    intelligence: {
      eyebrow: "05 // ANALIZĂ DE PIAȚĂ & DISPATCH",
      title: "Indicatori Empirici de Piață",
      desc: "Date macroeconomice și volume tranzacționale monitorizate prin arhivele cadastrale oficiale și institute statistice naționale.",
      dispatchBtn: "DISPATCH ↗",
      sourceLabel: "Sursă:",
    },
    ecosystem: {
      kicker: "ECOSISTEMUL CONECTAT",
      title: "Ecosistemul Conectat",
      titleSub: "al lui Cristian Văduva.",
      desc: "Fiecare disciplină necesară achiziției, finanțării, protecției și dezvoltării activelor de mare valoare operează ca o platformă dedicată și specializată.",
      activePlatforms: "PLATFORME ACTIVE",
      preLaunch: "PRE-LAUNCH",
    },
    form: {
      title: "TRANSMITERE SOLICITARE",
      subtitle: "DISCREȚIE PROFESIONALĂ",
      principalName: "Nume Principal / Reprezentant *",
      directEmail: "Email Direct *",
      directPhone: "Telefon Direct / Signal",
      mandateCategory: "Categorie Mandat *",
      buyerMandate: "Reprezentare cumpărător (Căutare, due diligence, achiziție)",
      sellerMandate: "Reprezentare vânzător (Poziționare, promovare, execuție)",
      investorMandate: "Consultanță investitor (Screening, analiză de piață, underwriting)",
      sourcingMandate: "Sourcing imobiliar (Identificare on-market & off-market)",
      consultationMandate: "Consultanță strategică (Strategie imobiliară & capital)",
      otherMandate: "Alt mandat confidențial",
      briefingNotes: "Note Executive / Briefing",
      briefingPlaceholder: "Descrieți parametrii activului vizat, aria geografică sau calendarul mandatului...",
      consentText: "Sunt de acord cu prelucrarea datelor transmise pentru a primi un răspuns la solicitare, conform",
      privacyLink: "Politicii de Confidențialitate",
      submitBtn: "TRANSMITE SOLICITAREA",
      transmitting: "SE TRANSMITE...",
      successTitle: "Solicitare Înregistrată",
      successDesc: "Vă mulțumim. Dosarul a fost transmis. Cristian Văduva sau biroul privat vă va răspunde în termen de 24 de ore.",
      submitAnother: "Trimite altă comunicare",
      discretionNotice: "Discuțiile sunt tratate cu discreție. Acordurile de confidențialitate pot fi convenite și semnate separat, atunci când este necesar.",
      directChannels: "Canale Directe de Comunicare",
      directChannelsDesc: "Mandatele de familie și principalii au acces direct fără intermediari neautorizați.",
    },
    footer: {
      brandDesc: "Consultanță strategică de capital, advisory imobiliar de prim rang și mandate discrete pentru principali și birouri de familie.",
      rightsReserved: "TOATE DREPTURILE REZERVATE.",
      privacy: "POLITICĂ DE CONFIDENȚIALITATE",
      terms: "TERMENI ȘI CONDIȚII",
      gdpr: "GDPR",
      cookies: "POLITICĂ COOKIES",
      editorial: "POLITICĂ EDITORIALĂ",
      provenance: "PROVENIENȚĂ DATE",
      disclaimer: "DECLINAREA RĂSPUNDERII",
      login: "ACCES PRINCIPAL",
    },
    cookies: {
      title: "Preferințe Cookie & Confidențialitate",
      desc: "Această platformă utilizează module cookie esențiale și telemetrie de performanță anonimizată pentru funcționarea optimă. Puteți gestiona opțiunile mai jos.",
      accept: "Acceptă Toate",
      decline: "Refuză Neesențiale",
      settings: "Setări Cookie",
      policy: "Citește Politica de Cookies",
    },
  },
  fr: {
    nav: {
      about: "À Propos",
      profile: "Profil",
      philosophy: "Philosophie",
      insights: "Analyses",
      articles: "Articles",
      media: "Médias",
      videos: "Vidéos",
      realEstate: "Immobilier",
      market: "Marché",
      properties: "Propriétés",
      ventures: "Projets",
      contact: "Contact",
      consultation: "Consultation",
      ticker: [
        "CONSEIL IMMOBILIER EXÉCUTIF",
        "REPRÉSENTATION SOUS MANDAT",
        "STRATÉGIE D'INVESTISSEMENT & AUDIT",
        "DISCRÉTION POUR CLIENTS PRIVÉS",
        "CRISTIAN VĂDUVA — CONSEILLER EXÉCUTIF",
      ],
    },
    hero: {
      kicker: "CONSEIL IMMOBILIER ARCHITECTURAL & STRATÉGIE DE TRANSACTION",
      titleLine1: "Mandats Indépendants.",
      titleLine2: "Exécution Rigoureuse.",
      subtitle:
        "Une représentation adaptée à votre position — vendeur, acquéreur ou investisseur en Roumanie et sur des corridors internationaux ciblés.",
      partnersTitle: "AFFILIATIONS CONFIRMÉES",
      partnersSubtitle: "Chestertons Global & Generali",
      standardsTitle: "NORMES D'EXÉCUTION",
      standardsSubtitle: "Représentation sous Mandat Dédié",
      portfolioTitle: "PORTEFEUILLE DOCUMENTÉ",
      portfolioSubtitle: "433 Monographies Sélectionnées",
      exploreCatalog: "Explorer le catalogue immobilier →",
      ctaConsultation: "DEMANDER UN DIALOGUE DIRECT",
    },
    editorial: {
      kicker: "02 // MÉTHODOLOGIE & ÉTHIQUE DE CONSEIL",
      quote:
        "Une transaction réussie commence bien avant la négociation — par un audit approfondi, des données authentiques et zéro spéculation.",
      pillar1Num: "01 // MANDAT INDÉPENDANT",
      pillar1Title: "Représentation Unilatérale Stricte",
      pillar1Desc:
        "Chaque mission est alignée exclusivement sur les intérêts du client — vendeur, acquéreur ou investisseur — sans conflits d'intérêts.",
      pillar2Num: "02 // AUDIT TECHNIQUE & CADASTRAL",
      pillar2Title: "Due Diligence Technique et Juridique",
      pillar2Desc:
        "Vérification trentenaire des titres, conformité cadastrale, expertises structurelles certifiées et analyse des risques d'urbanisme voisins.",
      pillar3Num: "03 // EXÉCUTION DE TRANSACTION",
      pillar3Title: "Négociation Stratégique & Clôture",
      pillar3Desc:
        "Fixation des prix basée sur les actes authentiques enregistrés plutôt que sur les spéculations des portails en ligne.",
    },
    perspective: {
      kicker: "04 // FONDEMENT PROFESSIONNEL",
      title: "Analyse Disciplinée contre Spéculation",
      p1: "Cristian Văduva structure des acquisitions immobilières de prestige et des mandats patrimoniaux à Bucarest et sur des marchés européens sélectionnés.",
      p2: "Alliant formation universitaire multidisciplinaire (économie, droit, écologie) et expérience opérationnelle, notre cabinet apporte rigueur et transparence.",
      p3: "Chaque bien est évalué selon sa pérennité constructive, l'antériorité de son titre de propriété, sa liquidité et sa résilience patrimoniale.",
      foundationTitle: "FONDEMENT MULTIDISCIPLINAIRE",
      degreesTitle: "Enseignement Supérieur — Trois Licences",
      degreesDesc: "Économie · Droit · Écologie",
      intlTitle: "Expérience Internationale",
      intlDesc: "Résidences & Analyse (Madrid · Amiens · La Valette)",
      cta: "BIOGRAPHIE & PARCOURS COMPLET",
    },
    opportunities: {
      eyebrow: "03 // SÉLECTION DE PROPRIÉTÉS & OPPORTUNITÉS",
      badge: "PORTEFEUILLE SÉLECTIONNÉ",
      title: "Propriétés Résidentielles & Opportunités d'Investissement",
      desc: "Sélection structurée de biens disponibles, analysés sous l'angle de la qualité architecturale, du statut juridique et du potentiel durable.",
      leadBadge: "DISPONIBLE À L'ACQUISITION // SIGNATURE",
      supportingEyebrow: "OPPORTUNITÉS SÉLECTIONNÉES",
      supportingTitle: "Biens Disponibles en Portefeuille",
      supportingSubtitle: "RÉSIDENTIEL PRIME & PATRIMOINE HISTORIQUE",
      conceptualEyebrow: "GALERIE CONCEPTUELLE",
      conceptualTitle: "Concepts & Études Architecturales",
      conceptualSubtitle: "RENDUS ILLUSTRATIFS & ÉTUDES VOLUMÉTRIQUES",
      conceptTag: "Concept Architectural / Rendu Illustratif",
      archStudy: "Étude Architecturale",
      ctaCatalog: "CATALOGUE IMMOBILIER COMPLET",
      viewMonograph: "VOIR LA MONOGRAPHIE",
    },
    intelligence: {
      eyebrow: "05 // ANALYSES DE MARCHÉ & DISPATCH",
      title: "Indicateurs Empiriques de Marché",
      desc: "Données macroéconomiques et registres de transactions suivis auprès du cadastre officiel et des instituts de statistiques.",
      dispatchBtn: "DISPATCH ↗",
      sourceLabel: "Source :",
    },
    ecosystem: {
      kicker: "L'ÉCOSYSTÈME CONNECTÉ",
      title: "L'Écosystème Connecté",
      titleSub: "de Cristian Vaduva.",
      desc: "Chaque discipline requise pour acquérir, financer, protéger et valoriser des actifs d'exception opère via une plateforme dédiée.",
      activePlatforms: "PLATEFORMES ACTIVES",
      preLaunch: "PRÉ-LANCEMENT",
    },
    form: {
      title: "TRANSMISSION DU DOSSIER",
      subtitle: "DISCRÉTION PROFESSIONNELLE",
      principalName: "Nom du Mandant / Représentant *",
      directEmail: "Email Direct *",
      directPhone: "Téléphone Direct / Signal",
      mandateCategory: "Catégorie de Mandat *",
      buyerMandate: "Représentation acquéreur (Recherche, due diligence, acquisition)",
      sellerMandate: "Représentation vendeur (Positionnement, prospection, négociation)",
      investorMandate: "Conseil investisseur (Sélection, analyse financière, underwriting)",
      sourcingMandate: "Sourcing immobilier (Recherche ciblée sur et hors marché)",
      consultationMandate: "Consultation stratégique (Stratégie immobilière & capital)",
      otherMandate: "Autre mandat confidentiel",
      briefingNotes: "Notes de Cadrage Stratégique",
      briefingPlaceholder: "Précisez la typologie d'actifs, la zone géographique ou les échéances du mandat...",
      consentText: "J'accepte le traitement des données transmises pour répondre à cette demande, conformément à la",
      privacyLink: "Politique de Confidentialité",
      submitBtn: "TRANSMETTRE LA DEMANDE",
      transmitting: "TRANSMISSION...",
      successTitle: "Demande Transmise",
      successDesc: "Merci. Votre dossier a été enregistré. Cristian Văduva ou son cabinet vous répondra sous 24 heures.",
      submitAnother: "Transmettre un autre message",
      discretionNotice: "Les échanges sont traités avec discrétion. Un accord de confidentialité séparé peut être convenu et signé si nécessaire.",
      directChannels: "Canaux de Communication Directs",
      directChannelsDesc: "Les mandants et family offices échangent directement sans intermédiation superflue.",
    },
    footer: {
      brandDesc: "Conseil en allocation de capital, advisory immobilier de prestige et mandats confidentiels pour investisseurs privés.",
      rightsReserved: "TOUS DROITS RÉSERVÉS.",
      privacy: "POLITIQUE DE CONFIDENTIALITÉ",
      terms: "CONDITIONS D'UTILISATION",
      gdpr: "RGPD",
      cookies: "POLITIQUE DE COOKIES",
      editorial: "POLITIQUE ÉDITORIALE",
      provenance: "PROVENANCE DES DONNÉES",
      disclaimer: "AVERTISSEMENT LÉGAL",
      login: "ACCÈS PRIVÉ",
    },
    cookies: {
      title: "Préférences Cookies & Vie Privée",
      desc: "Cette plateforme utilise un stockage technique essentiel et une télémétrie anonyme pour garantir son fonctionnement optimal.",
      accept: "Tout Accepter",
      decline: "Refuser Non-Essentiels",
      settings: "Paramètres",
      policy: "Politique Cookies",
    },
  },
  de: {
    nav: {
      about: "Über uns",
      profile: "Profil",
      philosophy: "Philosophie",
      insights: "Analysen",
      articles: "Artikel",
      media: "Medien",
      videos: "Videos",
      realEstate: "Immobilien",
      market: "Markt",
      properties: "Objekte",
      ventures: "Projekte",
      contact: "Kontakt",
      consultation: "Beratung",
      ticker: [
        "STRATEGISCHE IMMOBILIENBERATUNG",
        "MANDATSBASIERTE VERTRETUNG",
        "INVESTITIONSSTRATEGIE & DUE DILIGENCE",
        "DISKRETE BERATUNG FÜR KAPITALANLEGER",
        "CRISTIAN VĂDUVA — EXECUTIVE ADVISOR",
      ],
    },
    hero: {
      kicker: "ARCHITEKTONISCHE IMMOBILIENBERATUNG & TRANSAKTIONSSTRATEGIE",
      titleLine1: "Unabhängige Mandate.",
      titleLine2: "Präzise Durchführung.",
      subtitle:
        "Maßgeschneiderte Vertretung auf Ihrer Seite der Transaktion — Verkäufer, Käufer oder Investor in Rumänien und ausgewählten internationalen Märkten.",
      partnersTitle: "BESTÄTIGTE PARTNERSCHAFTEN",
      partnersSubtitle: "Chestertons Global & Generali",
      standardsTitle: "ARBEITSSTANDARDS",
      standardsSubtitle: "Mandatsbasierte Vertretung",
      portfolioTitle: "DOKUMENTIERTES PORTFOLIO",
      portfolioSubtitle: "433 Kuratierte Monographien",
      exploreCatalog: "Immobilienkatalog ansehen →",
      ctaConsultation: "DIREKTES GESPRÄCH ANFRAGEN",
    },
    editorial: {
      kicker: "02 // METHODIK & BERATUNGSETHIK",
      quote:
        "Eine erfolgreiche Transaktion beginnt lange vor der Verhandlung — mit lückenloser Due Diligence, ungefilterten Daten und ohne Spekulation.",
      pillar1Num: "01 // UNABHÄNGIGES MANDAT",
      pillar1Title: "Strenge Einseitige Vertretung",
      pillar1Desc:
        "Mandate werden ausschließlich auf die Ziele des Kunden ausgerichtet — als Käufer-, Verkäufer- oder Investorenvertreter ohne Interessenkonflikte.",
      pillar2Num: "02 // TECHNISCHE & KATASTRALE PRÜFUNG",
      pillar2Title: "Fundierte Technische Due Diligence",
      pillar2Desc:
        "30-jährige Eigentumshistorie, Katasterabgleich, zertifizierte statische Baugutachten und baurechtliche Umfeldanalyse.",
      pillar3Num: "03 // TRANSAKTIONSABWICKLUNG",
      pillar3Title: "Strategische Verhandlung & Abschluss",
      pillar3Desc:
        "Wertermittlung auf Basis notariell beurkundeter Vergleichstransaktionen statt Online-Portal-Preisen schützt Ihr Kapital nachhaltig.",
    },
    perspective: {
      kicker: "04 // BERUFLICHES FUNDAMENT",
      title: "Disziplinierte Analyse statt Portal-Spekulation",
      p1: "Cristian Văduva strukturiert hochwertige Immobilienakquisitionen und strategische Mandate in Bukarest und europäischen Kernmärkten.",
      p2: "Mit multidisziplinärer akademischer Ausbildung in Wirtschaft, Recht und Ökologie bietet unsere Beratung faktenbasierte Transparenz.",
      p3: "Objekte werden nach konstruktiver Langlebigkeit, 30-jähriger Rechtssicherheit, Wiederverkaufsliquidität und Werterhalt beurteilt.",
      foundationTitle: "MULTIDISZIPLINÄRES FUNDAMENT",
      degreesTitle: "Hochschulabschluss — Drei Bachelorgrade",
      degreesDesc: "Wirtschaft · Recht · Ökologie",
      intlTitle: "Internationale Erfahrung",
      intlDesc: "Residenzen & Marktanalysen (Madrid · Amiens · Valletta)",
      cta: "BIOGRAFIE & GESAMTER WERDEGANG",
    },
    opportunities: {
      eyebrow: "03 // OBJEKTAUSWAHL & INVESTITIONEN",
      badge: "KURATIERTES PORTFOLIO",
      title: "Wohnimmobilien & Investmentmöglichkeiten",
      desc: "Strukturiertes Portfolio verfügbarer Objekte, geprüft nach architektonischer Qualität, Rechtssicherheit und langfristiger Werthaltigkeit.",
      leadBadge: "ZUR AKQUISITION VERFÜGBAR // SIGNATUR",
      supportingEyebrow: "AUSGEWÄHLTE OBJEKTE",
      supportingTitle: "Verfügbare Immobilien im Portfolio",
      supportingSubtitle: "PRIME RESIDENTIAL & HISTORISCHE BAUDENKMÄLER",
      conceptualEyebrow: "KONZEPTUELLE GALERIE",
      conceptualTitle: "Architekturkonzepte & Raumstudien",
      conceptualSubtitle: "ILLUSTRATIVE RENDERINGS & VOLUMETRISCHE MODELLIERUNG",
      conceptTag: "Architekturkonzept / Illustratives Rendering",
      archStudy: "Architekturstudie",
      ctaCatalog: "VOLLSTÄNDIGER IMMOBILIENKATALOG",
      viewMonograph: "MONOGRAPHIE ANSEHEN",
    },
    intelligence: {
      eyebrow: "05 // MARKTANALYSEN & DISPATCH",
      title: "Empirische Marktindikatoren",
      desc: "Makroökonomische Daten und Transaktionsvolumina, erfasst über offizielle Katasterarchive und statistische Ämter.",
      dispatchBtn: "DISPATCH ↗",
      sourceLabel: "Quelle:",
    },
    ecosystem: {
      kicker: "DAS VERNETZTE ÖKOSYSTEM",
      title: "Das Vernetzte Ökosystem",
      titleSub: "von Cristian Vaduva.",
      desc: "Jede Fachdisziplin für Erwerb, Finanzierung, Absicherung und Projektierung operiert als spezialisierte Plattform.",
      activePlatforms: "AKTIVE PLATTFORMEN",
      preLaunch: "VORANKÜNDIGUNG",
    },
    form: {
      title: "ANFRAGE ÜBERMITTELN",
      subtitle: "PROFESSIONELLE DISKRETION",
      principalName: "Name des Mandanten / Vertreters *",
      directEmail: "Direkte E-Mail *",
      directPhone: "Direkttelefon / Signal",
      mandateCategory: "Mandatskategorie *",
      buyerMandate: "Käufervertretung (Suche, Due Diligence, Akquisition)",
      sellerMandate: "Verkäufervertretung (Positionierung, Vermarktung, Abschluss)",
      investorMandate: "Investorenberatung (Screening, Finanzanalyse, Underwriting)",
      sourcingMandate: "Objekt-Sourcing (Gezielte Suche On- & Off-Market)",
      consultationMandate: "Strategische Beratung (Immobilien- & Kapitalstrategie)",
      otherMandate: "Sonstiges vertrauliches Mandat",
      briefingNotes: "Executive Briefing Notizen",
      briefingPlaceholder: "Beschreiben Sie das Zielobjekt, geografische Präferenzen oder den Zeitrahmen...",
      consentText: "Ich stimme der Verarbeitung der übermittelten Daten zur Beantwortung dieser Anfrage gemäß der",
      privacyLink: "Datenschutzerklärung",
      submitBtn: "ANFRAGE DISKRET ABSENDEN",
      transmitting: "WIRD ÜBERTRAGEN...",
      successTitle: "Anfrage Übermittelt",
      successDesc: "Vielen Dank. Ihre Unterlagen wurden erfasst. Cristian Văduva oder das private Büro antwortet innerhalb von 24 Stunden.",
      submitAnother: "Weitere Mitteilung senden",
      discretionNotice: "Gespräche werden diskret behandelt. Eine gesonderte Vertraulichkeitsvereinbarung (NDA) kann bei Bedarf separat vereinbart werden.",
      directChannels: "Diskrete Kommunikationskanäle",
      directChannelsDesc: "Mandanten und Family Offices kommunizieren direkt ohne Zwischeninstanzen.",
    },
    footer: {
      brandDesc: "Strategische Kapitalallokation, Premium-Immobilienberatung und diskrete Mandate für Kapitalanleger.",
      rightsReserved: "ALLE RECHTE VORBEHALTEN.",
      privacy: "DATENSCHUTZ",
      terms: "NUTZUNGSBEDINGUNGEN",
      gdpr: "DSGVO",
      cookies: "COOKIE-RICHTLINIE",
      editorial: "REDAKTIONSRICHTLINIE",
      provenance: "DATENHERKUNFT",
      disclaimer: "HAFTUNGSAUSSCHLUSS",
      login: "MANDANTEN-LOGIN",
    },
    cookies: {
      title: "Cookie- & Datenschutzeinstellungen",
      desc: "Diese Plattform nutzt essenzielle Speicherfunktionen und anonyme Performancedaten für die redaktionelle Bereitstellung.",
      accept: "Alle Akzeptieren",
      decline: "Nicht-Essenzielle Ablehnen",
      settings: "Einstellungen",
      policy: "Cookie-Richtlinie",
    },
  },
  ar: {
    nav: {
      about: "نبذة عنا",
      profile: "الملف التعريفي",
      philosophy: "الفلسفة",
      insights: "التحليلات",
      articles: "المقالات",
      media: "الإعلام",
      videos: "الفيديو",
      realEstate: "العقارات",
      market: "السوق",
      properties: "العقارات المختارة",
      ventures: "المشاريع",
      contact: "التواصل",
      consultation: "استشارة",
      ticker: [
        "استشارات عقارية تنفيذية",
        "تمثيل مخصص بناءً على التفويض",
        "استراتيجية الاستثمار والتدقيق القانوني",
        "استشارات سرية للمستثمرين النخبة",
        "كريستيان فادوفا — مستشار تنفيذي",
      ],
    },
    hero: {
      kicker: "استشارات عقارية معمارية واستراتيجيات الصفقات",
      titleLine1: "تفويضات مستقلة.",
      titleLine2: "تنفيذ دقيق وصارم.",
      subtitle:
        "تمثيل مخصص لجانبك من الصفقة — بائعاً، مشترياً، أو مستثمراً في رومانيا وأسواق دولية مختارة.",
      partnersTitle: "شراكات معتمدة",
      partnersSubtitle: "تشيسترتونز العالمية وجينيرالي",
      standardsTitle: "معايير العمل",
      standardsSubtitle: "تمثيل مخصص بموجب تفويض",
      portfolioTitle: "محفظة موثقة",
      portfolioSubtitle: "433 دراسة عقارية متخصصة",
      exploreCatalog: "استكشف كتالوج العقارات ←",
      ctaConsultation: "طلب حوار تنفيذي مباشر",
    },
    editorial: {
      kicker: "02 // المنهجية وأخلاقيات الاستشارة",
      quote:
        "تبدأ الصفقة الناجحة قبل التفاوض بوقت طويل — من خلال التدقيق الدقيق والبيانات الواقعية الخالية من أي تكهن.",
      pillar1Num: "01 // تفويض مستقل",
      pillar1Title: "تمثيل أحادي صارم",
      pillar1Desc:
        "نصمم المهام بما يخدم حصرياً أهداف عميلنا — سواء كان بائعاً أو مشترياً أو مستثمراً — لضمان الولاء التام دون تضارب مصالح.",
      pillar2Num: "02 // تدقيق فني ومساحي",
      pillar2Title: "تدقيق قانوني وهندسي دقيق",
      pillar2Desc:
        "التحقق من سجل الملكية لـ 30 عاماً، ومطابقة المخططات المساحية، والفحص الإنشائي المعتمد، وتحليل المخاطر التنظيمية المجاورة.",
      pillar3Num: "03 // تنفيذ الصفقات",
      pillar3Title: "تفاوض استراتيجي وتسوية آمنة",
      pillar3Desc:
        "تسعير يعتمد على الصفقات الموثقة لدى كتاب العدل بدلاً من تكهنات البوابات الإلكترونية، لحماية رأس مالك باستمرار.",
    },
    perspective: {
      kicker: "04 // الأساس المهني",
      title: "تحليل منهجي منضبط بدلاً من التكهنات",
      p1: "يتولى كريستيان فادوفا هيكلة عمليات الاستحواذ العقاري الكبرى وإدارة المحافظ في بوخارست وأسواق أوروبية مختارة.",
      p2: "نجمع بين التعليم الأكاديمي المتعدد في الاقتصاد والقانون والنظم البيئية والخبرة الميدانية لتقديم حقائق مؤكدة ووضوح إنشائي.",
      p3: "يتم تقييم العقارات وفقاً لمتانتها الهندسية، وسلامة ملكيتها التاريخية، وسيولتها التخارجية، وحفظها للثروة عبر الأجيال.",
      foundationTitle: "قاعدة علمية متعددة التخصصات",
      degreesTitle: "تعليم جامعي عالٍ — ثلاث درجات بكالوريوس",
      degreesDesc: "اقتصاد · قانون · بيئة",
      intlTitle: "خبرة دولية",
      intlDesc: "إقامات وأبحاث ميدانية (مدريد · أميان · فاليتا)",
      cta: "السيرة الذاتية والمسار الكامل",
    },
    opportunities: {
      eyebrow: "03 // باقة الفرص والعقارات المختارة",
      badge: "محفظة منتقاة",
      title: "عقارات سكنية وفرص استثمارية",
      desc: "محفظة منظمة من العقارات المتاحة، تم تقييمها من حيث التميز المعماري والصفة القانونية والسيولة المستقبلية.",
      leadBadge: "متاح للاستحواذ // عقار مميز",
      supportingEyebrow: "فرص مختارة",
      supportingTitle: "عقارات متاحة في المحفظة",
      supportingSubtitle: "عقارات سكنية فاخرة وأصول تاريخية",
      conceptualEyebrow: "معرض مفاهيمي",
      conceptualTitle: "مفاهيم ودراسات معمارية",
      conceptualSubtitle: "تصاميم ثلاثية الأبعاد ونمذجة معمارية",
      conceptTag: "مفهوم معماري / تصميم توضيحي",
      archStudy: "دراسة معمارية",
      ctaCatalog: "كتالوج العقارات الكامل",
      viewMonograph: "عرض الدراسة والمواصفات",
    },
    intelligence: {
      eyebrow: "05 // تحليلات السوق والنشرات",
      title: "مؤشرات السوق التجريبية",
      desc: "متابعة المؤشرات الاقتصادية الكلية وسجلات الصفقات عبر السجلات المساحية الرسمية ومراكز الإحصاء الوطنية.",
      dispatchBtn: "النشرة ↗",
      sourceLabel: "المصدر:",
    },
    ecosystem: {
      kicker: "المنظومة المتكاملة",
      title: "المنظومة المترابطة",
      titleSub: "لكريستيان فادوفا.",
      desc: "كل تخصص مطلوب للاستحواذ والتمويل والحماية وتطوير الأصول الفاخرة يعمل كمنصة متخصصة ومستقلة.",
      activePlatforms: "منصات نشطة",
      preLaunch: "قيد الإطلاق",
    },
    form: {
      title: "إرسال الطلب",
      subtitle: "سرية مهنية تامة",
      principalName: "اسم المستثمر / الممثل *",
      directEmail: "البريد الإلكتروني المباشر *",
      directPhone: "الهاتف المباشر / سيجنال",
      mandateCategory: "تصنيف التفويض *",
      buyerMandate: "تمثيل المشتري (البحث، الفحص النافي للجهالة، الاستحواذ)",
      sellerMandate: "تمثيل البائع (تحديد الموقع، التسويق، التفاوض)",
      investorMandate: "استشارات المستثمر (الفحص، التحليل المالي، التدقيق)",
      sourcingMandate: "توفير العقارات (بحث مخصص داخل السوق وخارجه)",
      consultationMandate: "استشارة استراتيجية (استراتيجية العقار ورأس المال)",
      otherMandate: "تفويض خاص آخر",
      briefingNotes: "ملاحظات وتفاصيل الطلب",
      briefingPlaceholder: "حدد مواصفات العقار، المنطقة الجغرافية، أو الجدول الزمني للتفويض...",
      consentText: "أوافق على معالجة البيانات المقدمة للرد على هذا الاستفسار وفقاً لـ",
      privacyLink: "سياسة الخصوصية",
      submitBtn: "إرسال الاستفسار السري",
      transmitting: "جارٍ الإرسال...",
      successTitle: "تم استلام الطلب",
      successDesc: "شكراً لك. تم تسجيل ملفك بنجاح. سيتواصل معك كريستيان فادوفا أو مكتبه الخاص خلال 24 ساعة.",
      submitAnother: "إرسال رسالة أخرى",
      discretionNotice: "تُعامل جميع المحادثات بسرية تامة. يمكن مناقشة وتوقيع اتفاقية سرية منفصلة (NDA) عند الاقتضاء.",
      directChannels: "قنوات اتصال سرية ومباشرة",
      directChannelsDesc: "يتواصل المستثمرون والمكاتب العائلية مباشرة دون وسطاء.",
    },
    footer: {
      brandDesc: "إدارة تخصيص رأس المال والاستشارات العقارية الرفيعة والتفويضات المباشرة للمستثمرين والمكاتب العائلية.",
      rightsReserved: "جميع الحقوق السيادية محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      gdpr: "حماية البيانات (GDPR)",
      cookies: "سياسة ملفات تعريف الارتباط",
      editorial: "السياسة التحريرية",
      provenance: "مصدر البيانات",
      disclaimer: "إخلاء المسؤولية",
      login: "تسجيل دخول الشركاء",
    },
    cookies: {
      title: "تفضيلات الخصوصية وملفات تعريف الارتباط",
      desc: "تستخدم هذه المنصة ملفات تعريف ارتباط أساسية وبيانات أداء مجهولة المصدر لتوفير تجربة تشغيل مثالية.",
      accept: "قبول الكل",
      decline: "رفض غير الأساسية",
      settings: "إعدادات",
      policy: "قراءة السياسة",
    },
  },
};

export const getTranslation = (locale: Locale): Translations => {
  return translations[locale] || translations.en;
};
