import { Locale } from "@/lib/translations";

export interface PortfolioTranslation {
  eyebrow: string;
  title: string;
  description: string;
  openHomefind: string;
  tabBuy: string;
  tabRent: string;
  tabAll: string;
  sourceBadge: string;
  buySectionTag: string;
  buySectionTitle: string;
  buySectionCount: (count: number) => string;
  rentSectionTag: string;
  rentSectionTitle: string;
  rentSectionCount: (count: number) => string;
  badgeBuy: string;
  badgeRent: string;
  labelSurface: string;
  labelRooms: string;
  btnViewHomefind: string;
  btnRequestAssistance: string;
  ctaHeaderTag: string;
  ctaHeaderTitle: string;
  ctaBuyTag: string;
  ctaBuyTitle: string;
  ctaBuyDesc: string;
  ctaBuyBtn: string;
  ctaRentTag: string;
  ctaRentTitle: string;
  ctaRentDesc: string;
  ctaRentBtn: string;
  ctaSellTag: string;
  ctaSellTitle: string;
  ctaSellDesc: string;
  ctaSellBtn: string;
  ctaInvestTag: string;
  ctaInvestTitle: string;
  ctaInvestDesc: string;
  ctaInvestBtn: string;
}

export const PORTFOLIO_TRANSLATIONS: Record<Locale, PortfolioTranslation> = {
  ro: {
    eyebrow: "PORTOFOLIU SELECTAT · ECOSYSTEM HOMEFIND",
    title: "Proprietăți Verificate de Cumpărat & de Închiriat",
    description: "Selecție structurată de active rezidențiale, domenii private și oportunități de investiție din portofoliul HomeFind, disponibile pentru analiză obiectivă și reprezentare dedicată.",
    openHomefind: "DESCHIDE HOMEFIND",
    tabBuy: "BUY — CUMPĂRARE",
    tabRent: "RENT — ÎNCHIRIERE",
    tabAll: "TOATE OFERTELE",
    sourceBadge: "SURSA CANONICĂ · HOMEFIND.CRISTIANVADUVA.COM",
    buySectionTag: "CATEGORIA 01 // VÂNZARE & ACHIZIȚIE DIRECTĂ",
    buySectionTitle: "BUY — Proprietăți de Cumpărat",
    buySectionCount: (c) => `${c} PROPRIETĂȚI ACTIVE VERIFICATE`,
    rentSectionTag: "CATEGORIA 02 // ÎNCHIRIERE REZIDENȚIALĂ PRIME",
    rentSectionTitle: "RENT — Proprietăți de Închiriat",
    rentSectionCount: (c) => `${c} REȘEDINȚE DISPONIBILE`,
    badgeBuy: "BUY",
    badgeRent: "RENT",
    labelSurface: "Suprafață",
    labelRooms: "Configurație",
    btnViewHomefind: "VEZI PE HOMEFIND",
    btnRequestAssistance: "SOLICITĂ ASISTENȚĂ LA TRANZACȚIE",
    ctaHeaderTag: "ASISTENȚĂ & REPREZENTARE DEDICATĂ",
    ctaHeaderTitle: "Cum dorești să abordăm proiectul tău imobiliar?",
    ctaBuyTag: "PENTRU CUMPĂRĂTORI",
    ctaBuyTitle: "Looking to Buy?",
    ctaBuyDesc: "Transmite criteriile dorite pentru a selecta opțiuni comparabile și a negocia achiziția în avantajul tău.",
    ctaBuyBtn: "REPREZENTARE CUMPĂRARE",
    ctaRentTag: "PENTRU CHIRIAȘI",
    ctaRentTitle: "Looking to Rent?",
    ctaRentDesc: "Găsește reședințe de calitate în Herăstrău, Floreasca, Pipera sau alte zone selectate din capitală.",
    ctaRentBtn: "CĂUTARE PENTRU ÎNCHIRIERE",
    ctaSellTag: "PENTRU PROPRIETARI",
    ctaSellTitle: "Selling or Renting?",
    ctaSellDesc: "Stabilește o strategie corectă de preț, prezentare premium și promovare către o audiență calificată.",
    ctaSellBtn: "REPREZENTARE PROPRIETAR",
    ctaInvestTag: "PENTRU INVESTITORI",
    ctaInvestTitle: "Investing in Real Estate?",
    ctaInvestDesc: "Analiză comparativă like-for-like, screening de oportunități și separarea prețului cerut de riscurile reale.",
    ctaInvestBtn: "CONSULTANȚĂ INVESTIȚII"
  },
  en: {
    eyebrow: "CURATED PORTFOLIO · HOMEFIND ECOSYSTEM",
    title: "Verified Properties for Sale & Lease",
    description: "Curated selection of residential assets, private architectural estates and strategic investment opportunities sourced from HomeFind, available for objective due diligence and dedicated advisory.",
    openHomefind: "EXPLORE HOMEFIND",
    tabBuy: "BUY — ACQUISITION",
    tabRent: "RENT — LEASING",
    tabAll: "ALL ASSETS",
    sourceBadge: "CANONICAL SOURCE · HOMEFIND.CRISTIANVADUVA.COM",
    buySectionTag: "CATEGORY 01 // DIRECT SALE & ACQUISITION",
    buySectionTitle: "BUY — Properties for Sale",
    buySectionCount: (c) => `${c} CONFIRMED ACTIVE ASSETS`,
    rentSectionTag: "CATEGORY 02 // PRIME RESIDENTIAL LEASING",
    rentSectionTitle: "RENT — Properties for Lease",
    rentSectionCount: (c) => `${c} RESIDENCES AVAILABLE`,
    badgeBuy: "BUY",
    badgeRent: "RENT",
    labelSurface: "Surface Area",
    labelRooms: "Layout",
    btnViewHomefind: "VIEW ON HOMEFIND",
    btnRequestAssistance: "REQUEST TRANSACTION ADVISORY",
    ctaHeaderTag: "DEDICATED PRINCIPAL REPRESENTATION",
    ctaHeaderTitle: "How may we structure your real estate transaction?",
    ctaBuyTag: "FOR BUYERS",
    ctaBuyTitle: "Looking to Buy?",
    ctaBuyDesc: "Specify your acquisition parameters to evaluate like-for-like comparables and structure strategic negotiations.",
    ctaBuyBtn: "BUYER ADVISORY MANDATE",
    ctaRentTag: "FOR TENANTS",
    ctaRentTitle: "Looking to Rent?",
    ctaRentDesc: "Identify prime residences across Herăstrău, Floreasca, Pipera and selected diplomatic enclaves.",
    ctaRentBtn: "RESIDENTIAL SOURCING",
    ctaSellTag: "FOR PROPERTY OWNERS",
    ctaSellTitle: "Selling or Renting?",
    ctaSellDesc: "Establish empirical pricing, premium editorial positioning and confidential access to qualified buyers.",
    ctaSellBtn: "SELLER ADVISORY MANDATE",
    ctaInvestTag: "FOR INVESTORS",
    ctaInvestTitle: "Investing in Real Estate?",
    ctaInvestDesc: "Conduct comparative underwriting, identify risk vectors and separate asking valuations from genuine yields.",
    ctaInvestBtn: "INVESTOR CAPITAL ADVISORY"
  },
  fr: {
    eyebrow: "PORTEFEUILLE SÉLECTIONNÉ · ÉCOSYSTÈME HOMEFIND",
    title: "Propriétés Vérifiées à la Vente & à la Location",
    description: "Sélection rigoureuse d'actifs résidentiels, de domaines privés et d'opportunités d'investissement issues d'HomeFind, disponibles pour audit objectif et représentation exclusive.",
    openHomefind: "OUVRIR HOMEFIND",
    tabBuy: "ACHAT — ACQUISITION",
    tabRent: "LOCATION — RÉSIDENTIEL",
    tabAll: "TOUTES LES OFFRES",
    sourceBadge: "SOURCE CANONIQUE · HOMEFIND.CRISTIANVADUVA.COM",
    buySectionTag: "CATÉGORIE 01 // ACQUISITION DIRECTE",
    buySectionTitle: "ACHAT — Propriétés Disponibles à la Vente",
    buySectionCount: (c) => `${c} ACTIFS ACTIFS CONFIRMÉS`,
    rentSectionTag: "CATÉGORIE 02 // LOCATION RÉSIDENTIELLE HAUT DE GAMME",
    rentSectionTitle: "LOCATION — Résidences Disponibles",
    rentSectionCount: (c) => `${c} RÉSIDENCES DISPONIBLES`,
    badgeBuy: "ACHAT",
    badgeRent: "LOCATION",
    labelSurface: "Superficie",
    labelRooms: "Configuration",
    btnViewHomefind: "VOIR SUR HOMEFIND",
    btnRequestAssistance: "DEMANDER UN CONSEIL EN TRANSACTION",
    ctaHeaderTag: "CONSEIL & REPRÉSENTATION DÉDIÉE",
    ctaHeaderTitle: "Comment aborder votre projet immobilier ?",
    ctaBuyTag: "POUR ACQUÉREURS",
    ctaBuyTitle: "Vous souhaitez acheter ?",
    ctaBuyDesc: "Définissez vos critères d'acquisition pour comparer les offres réelles et négocier au mieux de vos intérêts.",
    ctaBuyBtn: "MANDAT D'ACQUISITION",
    ctaRentTag: "POUR LOCATAIRES",
    ctaRentTitle: "Vous cherchez à louer ?",
    ctaRentDesc: "Accédez à des résidences d'exception à Herăstrău, Floreasca, Pipera et quartiers diplomatiques.",
    ctaRentBtn: "RECHERCHE LOCATIVE",
    ctaSellTag: "POUR PROPRIÉTAIRES",
    ctaSellTitle: "Vendre ou Louer ?",
    ctaSellDesc: "Positionnez votre bien au juste prix avec une présentation éditoriale haut de gamme et des acquéreurs qualifiés.",
    ctaSellBtn: "MANDAT DE VENTE",
    ctaInvestTag: "POUR INVESTISSEURS",
    ctaInvestTitle: "Investir dans l'Immobilier ?",
    ctaInvestDesc: "Analyse comparative objective, maîtrise des risques et évaluation des rendements réels du capital.",
    ctaInvestBtn: "CONSEIL EN INVESTISSEMENT"
  },
  de: {
    eyebrow: "KURATIERTES PORTFOLIO · HOMEFIND ÖKOSYSTEM",
    title: "Geprüfte Immobilien zum Kauf & zur Miete",
    description: "Strukturierte Auswahl an Wohnimmobilien, Privatanwesen und Investitionsobjekten aus der HomeFind-Plattform für objektive Prüfung und engagierte Vertretung.",
    openHomefind: "HOMEFIND ÖFFNEN",
    tabBuy: "KAUF — ERWERB",
    tabRent: "MIETE — RESIDENZEN",
    tabAll: "ALLE OBJEKTE",
    sourceBadge: "KANONISCHE QUELLE · HOMEFIND.CRISTIANVADUVA.COM",
    buySectionTag: "KATEGORIE 01 // DIREKTKAUF & INVESTITION",
    buySectionTitle: "KAUF — Verfügbare Kaufobjekte",
    buySectionCount: (c) => `${c} BESTÄTIGTE AKTIVE OBJEKTE`,
    rentSectionTag: "KATEGORIE 02 // PRIME WOHNVERMIETUNG",
    rentSectionTitle: "MIETE — Verfügbare Mietresidenzen",
    rentSectionCount: (c) => `${c} VERFÜGBARE RESIDENZEN`,
    badgeBuy: "KAUF",
    badgeRent: "MIETE",
    labelSurface: "Wohnfläche",
    labelRooms: "Aufteilung",
    btnViewHomefind: "AUF HOMEFIND ANSEHEN",
    btnRequestAssistance: "TRANSAKTIONSBERATUNG ANFORDERN",
    ctaHeaderTag: "ENGAGIERTE MANDATSVERTRETUNG",
    ctaHeaderTitle: "Wie möchten Sie Ihr Immobilienprojekt strukturieren?",
    ctaBuyTag: "FÜR KÄUFER",
    ctaBuyTitle: "Immobilie erwerben?",
    ctaBuyDesc: "Definieren Sie präzise Suchkriterien zur fundierten Vergleichsanalyse und strategischen Verhandlungsführung.",
    ctaBuyBtn: "KAUFMANDAT ANFORDERN",
    ctaRentTag: "FÜR MIETER",
    ctaRentTitle: "Residenz mieten?",
    ctaRentDesc: "Finden Sie erstklassige Mietobjekte in Herăstrău, Floreasca, Pipera und diplomatischen Lagen.",
    ctaRentBtn: "MIETSUCHE STARTEN",
    ctaSellTag: "FÜR EIGENTÜMER",
    ctaSellTitle: "Verkaufen oder Vermieten?",
    ctaSellDesc: "Etablieren Sie eine fundierte Preisstrategie und erreichen Sie diskret vorqualifizierte Interessenten.",
    ctaSellBtn: "EIGENTÜMERVERTRETUNG",
    ctaInvestTag: "FÜR INVESTOREN",
    ctaInvestTitle: "Immobilieninvestitionen?",
    ctaInvestDesc: "Komparative Renditeanalyse, Risikoprüfung und Trennung von Wunschpreisen und realen Erträgen.",
    ctaInvestBtn: "INVESTITIONSBERATUNG"
  },
  ar: {
    eyebrow: "محفظة عقارية مختارة · منظومة HOMEFIND",
    title: "عقارات معتمدة للبيع وللإيجار",
    description: "مجموعة منتقاة من الأصول السكنية والمزارع الخاصة وفرص الاستثمار المتاحة عبر منصة HomeFind، جاهزة للتدقيق والتمثيل الاستشاري المستقل.",
    openHomefind: "فتح HOMEFIND",
    tabBuy: "شراء — تملك مباشر",
    tabRent: "إيجار — مساكن راقية",
    tabAll: "جميع العروض",
    sourceBadge: "المصدر المعتمد · HOMEFIND.CRISTIANVADUVA.COM",
    buySectionTag: "الفئة 01 // شراء وتملك عقاري مباشر",
    buySectionTitle: "شراء — عقارات معروضة للبيع",
    buySectionCount: (c) => `${c} عقارات نشطة معتمدة`,
    rentSectionTag: "الفئة 02 // تأجير سكني استثنائي",
    rentSectionTitle: "إيجار — مساكن متاحة للتأجير",
    rentSectionCount: (c) => `${c} مساكن متوفرة حالياً`,
    badgeBuy: "شراء",
    badgeRent: "إيجار",
    labelSurface: "المساحة",
    labelRooms: "التكوين",
    btnViewHomefind: "عرض على HOMEFIND",
    btnRequestAssistance: "طلب استشارة للصفقة",
    ctaHeaderTag: "تمثيل واستشارة حصرية",
    ctaHeaderTitle: "كيف تود توجيه خطتك العقارية القادمة؟",
    ctaBuyTag: "للمشترين",
    ctaBuyTitle: "هل تبحث عن شراء عقار؟",
    ctaBuyDesc: "حدد معايير الشراء لمقارنة الخيارات بدقة والتفاوض لتحقيق أفضل الشروط الاستثمارية.",
    ctaBuyBtn: "تمثيل حصري للمشتري",
    ctaRentTag: "للمستأجرين",
    ctaRentTitle: "هل تبحث عن استئجار سكن؟",
    ctaRentDesc: "اكتشف مساكن راقية في مناطق هيرستراو، فلوريسكا، بيبيرا والمناطق الدبلوماسية.",
    ctaRentBtn: "خدمة البحث عن سكن",
    ctaSellTag: "للملاك",
    ctaSellTitle: "بيع أو تأجير عقارك؟",
    ctaSellDesc: "تحديد سعر مدروس وفق السوق وعرض العقار بمستوى راقٍ أمام مشترين مؤهلين.",
    ctaSellBtn: "تمثيل حصري للمالك",
    ctaInvestTag: "للمستثمرين",
    ctaInvestTitle: "الاستثمار في العقارات؟",
    ctaInvestDesc: "تحليل مقارن للعائد، وتدقيق المخاطر، وفصل التقديرات التفاؤلية عن الأرقام الحقيقية.",
    ctaInvestBtn: "استشارات الاستثمار العقاري"
  }
};

export interface DifferenceTranslation {
  eyebrow: string;
  badge: string;
  title: string;
  description: string;
  labelWithout: string;
  labelWith: string;
  items: Array<{
    area: string;
    without: string;
    withRep: string;
  }>;
  closingTag: string;
  closingTitle: string;
  closingDesc: string;
  closingPrimaryBtn: string;
  closingSecondaryBtn: string;
}

export const DIFFERENCE_TRANSLATIONS: Record<Locale, DifferenceTranslation> = {
  ro: {
    eyebrow: "THE DIFFERENCE REPRESENTATION MAKES",
    badge: "VALOARE PENTRU CLIENT",
    title: "Diferența pe Care o Face Reprezentarea",
    description: "În tranzacțiile de valoare ridicată, absența unei strategii obiective generează asimetrie de informații, timp pierdut și decizii financiare suboptimale.",
    labelWithout: "FĂRĂ STRATEGIE STRUCTURATĂ",
    labelWith: "CU REPREZENTARE DEDICATĂ (CRISTIAN VĂDUVA)",
    items: [
      {
        area: "Căutare & Filtrare Active",
        without: "Zeci de ore pierdute cu proprietăți nepotrivite sau oferte promovate nerealist pe portaluri publice.",
        withRep: "Criterii clar definite înainte de căutare; selecție riguroasă și acces la oportunități on-market și off-market."
      },
      {
        area: "Analiza Prețului & Pieței",
        without: "Acceptarea unui preț de cerere fără o comparație directă like-for-like sau fără separarea cererii de tranzacții reale.",
        withRep: "Evaluare comparativă obiectivă bazată pe tranzacții autentificate în aceeași micro-zonă și parametri normalizați."
      },
      {
        area: "Verificare Tehnică & Juridică",
        without: "Trecerea cu vederea a unor servituți, litigii istorice, neconcordanțe cadastrale sau riscuri urbanistice din vecinătate.",
        withRep: "Audit documentar preliminar pe cărți funciare și coordonarea verificărilor alături de notari, avocați și experți tehnici atestați."
      },
      {
        area: "Strategia de Negociere",
        without: "Negociere improvizată sau emoțională, adesea lipsită de argumente tehnice ori pârghii de date comparative.",
        withRep: "Strategie de negociere structurată, fundamentată pe date factuale, protejând poziția comercială a părții reprezentate."
      },
      {
        area: "Vânzare & Promovare Activ",
        without: "Listare pasivă fără poziționare corectă, materiale adecvate sau audiență țintită, prelungind timpul de piață.",
        withRep: "Poziționare strategică de preț, prezentare editorială de calitate, calificare directă a solicitărilor și raportare continuă."
      },
      {
        area: "Comunicare & Coordonare Tranzacție",
        without: "Oportunități ratate sau întârzieri costisitoare din cauza comunicării fragmentate între părți și instituții.",
        withRep: "Un singur punct de contact executiv care coordonează etapele, termenele și documentele până la autentificare."
      }
    ],
    closingTag: "INIȚIERE MANDAT PRIVAT",
    closingTitle: "Dorești o analiză structurată pentru următoarea ta tranzacție?",
    closingDesc: "Oferim o sesiune inițială confidențială de 20 de minute pentru a evalua obiectivele și parametrii proiectului dumneavoastră.",
    closingPrimaryBtn: "PROGRAMEAZĂ DISCUȚIE DE 20 MINUTE",
    closingSecondaryBtn: "TRANSMITE CRITERIILE DE TRANZACȚIE"
  },
  en: {
    eyebrow: "THE DIFFERENCE REPRESENTATION MAKES",
    badge: "CLIENT VALUE PROPOSITION",
    title: "The Difference Dedicated Representation Makes",
    description: "In high-value property transactions, the absence of an objective strategy leads to information asymmetry, misspent time, and suboptimal financial execution.",
    labelWithout: "WITHOUT STRUCTURED STRATEGY",
    labelWith: "WITH DEDICATED ADVISORY (CRISTIAN VĂDUVA)",
    items: [
      {
        area: "Property Search & Asset Screening",
        without: "Dozens of hours wasted on unsuitable assets or unrealistically staged listings on public portals.",
        withRep: "Rigorous criteria defined prior to market search; disciplined filtering and access to verified on- and off-market opportunities."
      },
      {
        area: "Valuation & Empirical Market Analysis",
        without: "Accepting an asking price without direct like-for-like comparables or distinguishing advertised prices from closed deeds.",
        withRep: "Objective comparative valuation anchored in verified closed deed records within the specific micro-market."
      },
      {
        area: "Technical & Title Due Diligence",
        without: "Overlooking hidden easements, historic liens, cadastral discrepancies, or surrounding municipal zoning shifts.",
        withRep: "Preliminary land registry and title dossier audit, coordinated with reputable notaries, legal counsel, and certified engineers."
      },
      {
        area: "Negotiation Architecture",
        without: "Improvised or emotional bargaining without factual leverage, technical audits, or empirical benchmark data.",
        withRep: "Disciplined negotiation architecture grounded in empirical findings, defending the principal's commercial posture."
      },
      {
        area: "Asset Disposal & Marketing",
        without: "Passive listing without strategic pricing, premium collateral, or qualified audience screening, stagnating on market.",
        withRep: "Strategic market positioning, bespoke editorial presentation, strict purchaser qualification, and transparent reporting."
      },
      {
        area: "Communication & Transaction Closing",
        without: "Lost opportunities or costly delays caused by fragmented coordination across brokers, lenders, and institutions.",
        withRep: "A single executive principal overseeing every milestone, document, and deadline through notarization."
      }
    ],
    closingTag: "ENGAGE PRIVATE MANDATE",
    closingTitle: "Require a structured evaluation for your upcoming transaction?",
    closingDesc: "We provide an initial confidential 20-minute consultation to evaluate your transaction parameters and strategic alignment.",
    closingPrimaryBtn: "SCHEDULE 20-MINUTE CONSULTATION",
    closingSecondaryBtn: "SUBMIT TRANSACTION CRITERIA"
  },
  fr: {
    eyebrow: "LA DIFFÉRENCE PAR LA REPRÉSENTATION",
    badge: "VALEUR CLIENT",
    title: "La Différence Qu'Apporte une Représentation Dédiée",
    description: "Dans les transactions de prestige, l'absence de stratégie objective engendre asymétrie d'information, temps perdu et décisions financières sous-optimales.",
    labelWithout: "SANS STRATÉGIE STRUCTURÉE",
    labelWith: "AVEC CONSEIL DÉDIÉ (CRISTIAN VĂDUVA)",
    items: [
      {
        area: "Recherche & Filtrage des Actifs",
        without: "Des dizaines d'heures perdues sur des biens inadaptés ou surévalués sur les portails publics.",
        withRep: "Critères d'acquisition clairement définis; sélection rigoureuse et accès aux opportunités sur le marché et hors marché."
      },
      {
        area: "Analyse des Prix & du Marché",
        without: "Acceptation du prix affiché sans comparaison like-for-like ni vérification des actes authentiques récents.",
        withRep: "Évaluation comparative objective basée sur les transactions authentifiées dans le même micro-secteur."
      },
      {
        area: "Audit Technique & Juridique",
        without: "Servitudes non identifiées, litiges historiques, divergences cadastrales ou risques d'urbanisme omis.",
        withRep: "Audit documentaire préalable du registre foncier et coordination avec notaires, avocats et experts agréés."
      },
      {
        area: "Stratégie de Négociation",
        without: "Négociation improvisée ou émotionnelle sans données factuelles ni leviers comparatifs objectifs.",
        withRep: "Stratégie de négociation méthodique et argumentée, protégeant les intérêts commerciaux de la partie représentée."
      },
      {
        area: "Mise en Vente & Promotion",
        without: "Diffusion passive sans positionnement précis, sans supports de qualité et avec un délai de vente prolongé.",
        withRep: "Stratégie de prix rigoureuse, présentation éditoriale soignée, qualification stricte des acquéreurs et suivi régulier."
      },
      {
        area: "Coordination & Clôture de Transaction",
        without: "Retards coûteux et opportunités manquées en raison d'une communication fragmentée entre intervenants.",
        withRep: "Un interlocuteur exécutif unique coordonnant chaque étape jusqu'à la signature de l'acte notarié."
      }
    ],
    closingTag: "OUVERTURE DE MANDAT PRIVÉ",
    closingTitle: "Souhaitez-vous une analyse structurée pour votre prochaine transaction ?",
    closingDesc: "Nous proposons un entretien confidentiel de 20 minutes pour évaluer la faisabilité et les paramètres de votre projet.",
    closingPrimaryBtn: "RÉSERVER UN ENTRETIEN (20 MIN)",
    closingSecondaryBtn: "TRANSMETTRE VOS CRITÈRES"
  },
  de: {
    eyebrow: "DER UNTERSCHIED DER VERTRETUNG",
    badge: "MANDANTENMEHRWERT",
    title: "Der Unterschied, den Professionelle Vertretung Ausmacht",
    description: "Bei hochkarätigen Transaktionen führt das Fehlen einer fundierten Strategie zu Informationsasymmetrien, Zeitverlust und Fehlentscheidungen.",
    labelWithout: "OHNE STRUKTURIERTE STRATEGIE",
    labelWith: "MIT ENGAGIERTER BERATUNG (CRISTIAN VĂDUVA)",
    items: [
      {
        area: "Objektsuche & Vorselektion",
        without: "Zahlreiche verlorene Stunden mit unpassenden oder irreführend dargestellten Objekten auf öffentlichen Portalen.",
        withRep: "Klar definierte Kriterien vor der Marktsuche; disziplinierte Filterung und Zugang zu On- und Off-Market-Objekten."
      },
      {
        area: "Preisanalyse & Marktbewertung",
        without: "Akzeptanz von Angebotspreisen ohne Like-for-Like-Vergleich oder ohne Unterscheidung von Angebot und Abschluss.",
        withRep: "Objektive vergleichende Wertermittlung auf Basis tatsächlich beglaubigter Transaktionen im selben Mikromarkt."
      },
      {
        area: "Technische & Rechtliche Prüfung",
        without: "Übersehen verdeckter Grunddienstbarkeiten, historischer Streitigkeiten oder städtebaulicher Risiken.",
        withRep: "Vorprüfung des Grundbuchs und koordinierte Überprüfung mit Notaren, Rechtsanwälten und Sachverständigen."
      },
      {
        area: "Verhandlungsarchitektur",
        without: "Improvisierte Verhandlungen ohne sachliche Hebel oder empirisch untermauerte Vergleichsdaten.",
        withRep: "Strukturierte Verhandlungsstrategie auf faktenbasierter Grundlage zum Schutz der eigenen Verhandlungsposition."
      },
      {
        area: "Verkauf & Vermarktung",
        without: "Passives Inserieren ohne präzise Positionierung oder Qualifikation von Interessenten mit langen Standzeiten.",
        withRep: "Strategische Preispositionierung, hochwertige redaktionelle Präsentation und transparente Berichterstattung."
      },
      {
        area: "Transaktionskoordination",
        without: "Verpasste Chancen und teure Verzögerungen durch zersplitterte Kommunikation zwischen Beteiligten.",
        withRep: "Ein zentraler Ansprechpartner, der alle Schritte, Fristen und Unterlagen bis zur Beurkundung steuert."
      }
    ],
    closingTag: "PRIVATES MANDAT VEREINBAREN",
    closingTitle: "Wünschen Sie eine strukturierte Analyse für Ihre nächste Immobilientransaktion?",
    closingDesc: "Wir bieten ein vertrauliches 20-minütiges Vorgespräch zur Einordnung Ihrer Transaktionsparameter an.",
    closingPrimaryBtn: "20-MINÜTIGES GESPRÄCH VEREINBAREN",
    closingSecondaryBtn: "SUCHKRITERIEN ÜBERMITTELN"
  },
  ar: {
    eyebrow: "الفارق الذي تصنعه الاستشارة التمثيلية",
    badge: "القيمة المضافة للعميل",
    title: "الفارق الجوهري الذي يحققه التمثيل العقاري المخصص",
    description: "في الصفقات العقارية الكبرى، يؤدي غياب الاستراتيجية المهيكلة إلى عدم تكافؤ المعلومات، وإهدار الوقت، وقرارات مالية غير مثالية.",
    labelWithout: "بدون استراتيجية مهيكلة",
    labelWith: "مع استشارة وتمثيل مخصص (كريستيان فادوفا)",
    items: [
      {
        area: "البحث وتصفية الأصول العقارية",
        without: "عشرات الساعات الضائعة في معاينة عقارات غير مناسبة أو مبالغ في تقديمها على المواقع العامة.",
        withRep: "معايير شراء محددة ومدروسة مسبقاً، واختيار دقيق مع وصول مباشر للفرص العامة والفرص الخاصة غير المعلنة."
      },
      {
        area: "تحليل الأسعار وتقييم السوق",
        without: "قبول السعر المطلوب دون مقارنة واقعية بأصول مشابهة ودون تدقيق أسعار الصفقات الفعلية المبرمة.",
        withRep: "تقييم مقارن موضوعي يستند إلى صفقات موثقة ومبرمة في نفس المنطقة ونفس المعايير الجغرافية."
      },
      {
        area: "التدقيق القانوني والفني",
        without: "إغفال حقوق الارتفاق الخفية، أو النزاعات السابقة، أو التناقضات العقارية والتنظيمية المحيطة.",
        withRep: "تدقيق أولي للصحيفة العقارية والملكية، وتنسيق الفحص مع كتاب العدل والمحامين والخبراء المعتمدين."
      },
      {
        area: "منهجية التفاوض التجاري",
        without: "تفاوض عاطفي مرتجل يفتقر للأدلة الفنية والبيانات المقارنة الداعمة للموقف المالي.",
        withRep: "استراتيجية تفاوض منظمة ومبنية على وقائع رقمية تحمي المصالح التجارية للطرف الممثل."
      },
      {
        area: "تسويق وبيع الأصول",
        without: "إدراج سلبي دون تسعير استراتيجي أو مواد تسويقية لائقة ودون تصفية المشترين، مما يطيل زمن البيع.",
        withRep: "تسعير استراتيجي، وعرض تسويقي وتحريري راقٍ، وتأهيل مسبق للطلبات، مع تقارير متابعة دورية."
      },
      {
        area: "التنسيق وإتمام الصفقة",
        without: "فرص ضائعة وتأخيرات مكلفة ناتجة عن تشتت التواصل بين الوسطاء والجهات المختلفة.",
        withRep: "نقطة اتصال تنفيذية واحدة تتولى إدارة ومتابعة كل مرحلة ووثيقة حتى التوقيع النهائي."
      }
    ],
    closingTag: "بدء تفويض خاص",
    closingTitle: "هل ترغب في تقييم منظم ومهني لصفقتك العقارية القادمة؟",
    closingDesc: "نقدم جلسة استشارية أولية سرية مدتها 20 دقيقة لتقييم أهدافكم ومعايير المشروع العقاري.",
    closingPrimaryBtn: "حجز جلسة استشارية (20 دقيقة)",
    closingSecondaryBtn: "إرسال معايير الصفقة"
  }
};

export interface BenefitsCategoryData {
  label: string;
  sublabel: string;
  headline: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}

export interface ClientBenefitsTranslation {
  eyebrow: string;
  badge: string;
  badgeSub: string;
  title: string;
  description: string;
  objectiveTag: string;
  concreteTag: string;
  categories: {
    buyers: BenefitsCategoryData;
    sellers: BenefitsCategoryData;
    landlords: BenefitsCategoryData;
    investors: BenefitsCategoryData;
  };
}

export const CLIENT_BENEFITS_TRANSLATIONS: Record<Locale, ClientBenefitsTranslation> = {
  ro: {
    eyebrow: "BENEFICII CONCRETE · REPREZENTARE DEDICATĂ",
    badge: "AVANTAJE COLABORARE",
    badgeSub: "FĂRĂ PROMISIUNI ILUZORII · BAZAT PE FACTUALITATE",
    title: "Beneficiile Concrete ale Colaborării cu Cristian Văduva",
    description: "Abordare structurată, transparentă și fundamentată pe analiză empirică. Fără promisiuni nerealiste de randament garantat, dar cu o protecție riguroasă a capitalului dumneavoastră.",
    objectiveTag: "OBIECTIVUL CHEIE AL MANDATULUI",
    concreteTag: "AVANTAJE CONCRETE ASIGURATE PRIN MANDAT",
    categories: {
      buyers: {
        label: "Pentru Cumpărători",
        sublabel: "Buyer Advisory",
        headline: "Selecție riguroasă, analiză de preț și negociere fermă în interesul tău.",
        description: "Cumpărarea unei proprietăți de valoare ridicată implică adesea asimetrie de informații și prețuri cerute nefundamentate. Reprezentarea dedicată elimină presiunea tranzacțională și oferă un cadru structurat de analiză.",
        benefits: [
          "Clarificarea criteriilor esențiale înainte de începerea căutării în piață.",
          "Reducerea timpului consumat cu proprietăți nepotrivite sau prezentate nerealist.",
          "Compararea directă like-for-like a alternativelor din aceeași micro-zonă.",
          "Analiza obiectivă a prețului solicitat în raport cu tranzacții autentificate recente.",
          "Sprijin la masa negocierilor și coordonarea etapelor contractuale până la finalizare.",
          "Identificarea timpurie a neconcordanțelor cadastrale sau riscurilor ce necesită verificare.",
          "Acces la oportunități on-market și proprietăți din portofoliul HomeFind.",
          "Perspectivă clară asupra destinației activului: locuire personală, investiție sau închiriere."
        ],
        ctaText: "SOLICITĂ ASISTENȚĂ LA CUMPĂRARE",
        ctaLink: "/contact?interest=Buyer%20representation"
      },
      sellers: {
        label: "Pentru Vânzători",
        sublabel: "Seller Advisory",
        headline: "Poziționare precisă pe piață, marketing de calitate și negociere structurată.",
        description: "O proprietate remarcabilă își păstrează valoarea când este poziționată strategic încă din prima zi. Evităm expunerea haotică pe multiple canale fără calificare și stabilim o strategie de preț bazată pe date reale.",
        benefits: [
          "Poziționarea corectă a proprietății în raport cu concurența directă din segment.",
          "Analiză comparativă de piață și stabilirea unei strategii de preț justificate.",
          "Prezentare profesională, fotografie editorială și materiale de prezentare adecvate.",
          "Distribuție atent calibrată prin canalele relevante din ecosistemul Cristian Văduva.",
          "Calificarea preliminară a solicitărilor și organizarea eficientă a vizionărilor.",
          "Negociere profesionistă și gestionarea comunicării pe tot parcursul procesului.",
          "Raportare periodică și claritate asupra fiecărei etape de promovare.",
          "Reducerea riscului de a lua decizii sub presiune sau pe baza unor promisiuni nerealiste."
        ],
        ctaText: "SOLICITĂ REPREZENTARE LA VÂNZARE",
        ctaLink: "/contact?interest=Seller%20representation"
      },
      landlords: {
        label: "Pentru Proprietari (Închiriere)",
        sublabel: "Rental Placement",
        headline: "Securizarea unor chiriași calificați și optimizarea termenilor contractuali.",
        description: "Închirierea unei reședințe de lux presupune conservarea stării tehnice a imobilului și atragerea unor chiriași cu profil verificat și capacitate financiară certă.",
        benefits: [
          "Poziționarea ofertei de închiriere în raport cu cererea reală solventă.",
          "Stabilirea unei strategii optime de promovare și prezentare vizuală atractivă.",
          "Identificarea, screening-ul și verificarea solvabilității solicitanților.",
          "Organizarea eficientă a vizionărilor exclusiv cu clienți precalificați.",
          "Asistență la redactarea și negocierea clauzelor contractuale comerciale.",
          "Clarificarea garanțiilor financiare și a responsabilităților de mentenanță.",
          "Optimizarea duratei de ocupare și minimizarea perioadelor de vacanță."
        ],
        ctaText: "PLASEAZĂ PROPRIETATEA PENTRU ÎNCHIRIERE",
        ctaLink: "/contact?interest=Property%20sourcing"
      },
      investors: {
        label: "Pentru Investitori",
        sublabel: "Capital Allocation",
        headline: "Analiză empirică like-for-like, screening de oportunități și managementul riscului.",
        description: "Deciziile de plasament de capital impun separarea randamentului ipotetic de costurile reale de achiziție, operare, impozitare și lichiditate la exit.",
        benefits: [
          "Compararea directă a oportunităților după locație, tipul activului și lichiditate.",
          "Analiză tehnică, urbanistică și identificarea timpurie a constrângerilor de proiect.",
          "Separarea riguroasă a prețului cerut de ipotezele speculative de randament.",
          "Evaluarea realistă a scenariilor de exit: păstrare pe termen lung, închiriere sau exit parțial.",
          "Acces la oportunități rezidențiale, comerciale și internaționale verificate.",
          "Sprijin complet pentru o decizie informată, fără garanții exagerate sau iluzorii."
        ],
        ctaText: "SOLICITĂ CONSULTANȚĂ INVESTIȚIONALĂ",
        ctaLink: "/contact?interest=Investor%20advisory"
      }
    }
  },
  en: {
    eyebrow: "TANGIBLE CLIENT VALUE · DEDICATED ADVISORY",
    badge: "CLIENT ADVANTAGES",
    badgeSub: "NO ILLUSORY PROMISES · ROOTED IN EMPIRICAL RIGOR",
    title: "Tangible Benefits of Retaining Cristian Văduva",
    description: "A disciplined, transparent, and empirical advisory structure. No ungrounded yield guarantees, but rigorous fiduciary defense of your capital and time.",
    objectiveTag: "PRIMARY MANDATE OBJECTIVE",
    concreteTag: "CONCRETE DELIVERABLES ASSURED BY MANDATE",
    categories: {
      buyers: {
        label: "For Buyers",
        sublabel: "Buyer Advisory",
        headline: "Rigorous due diligence, empirical valuation, and firm negotiation.",
        description: "High-value property acquisitions frequently suffer from structural information asymmetry and inflated asking prices. Dedicated advisory eliminates intermediary bias.",
        benefits: [
          "Clarification of essential acquisition parameters before market engagement.",
          "Elimination of hours wasted on misaligned or misrepresented listings.",
          "Direct like-for-like comparison against authentic closed deeds in the micro-market.",
          "Objective pricing analysis separating marketing posture from transaction value.",
          "Strategic negotiation leadership and contractual stage coordination.",
          "Early identification of cadastral, legal, or physical encumbrances requiring scrutiny.",
          "Access to verified on-market portfolios and discreet private offerings.",
          "Clear strategic framework: primary residence, wealth preservation, or yield asset."
        ],
        ctaText: "RETAIN BUYER ADVISORY MANDATE",
        ctaLink: "/contact?interest=Buyer%20representation"
      },
      sellers: {
        label: "For Sellers",
        sublabel: "Seller Advisory",
        headline: "Accurate market positioning, editorial marketing, and structured negotiation.",
        description: "A trophy property protects its equity when positioned with discipline from day one, avoiding chaotic multi-broker exposure and unvetted viewings.",
        benefits: [
          "Precise asset positioning benchmarked against real luxury market liquidity.",
          "Comparative market valuation establishing an empirically justified pricing strategy.",
          "Bespoke editorial presentation, architectural photography, and curated collateral.",
          "Targeted distribution through Cristian Văduva's confidential private network.",
          "Pre-qualification of inquiries to protect privacy and minimize non-viable viewings.",
          "Firm transactional negotiation defending contractual terms and pricing limits.",
          "Continuous operational reporting with milestone transparency.",
          "Mitigation of market fatigue and resistance against emotional concessions."
        ],
        ctaText: "RETAIN SELLER ADVISORY MANDATE",
        ctaLink: "/contact?interest=Seller%20representation"
      },
      landlords: {
        label: "For Landlords",
        sublabel: "Rental Placement",
        headline: "Securing vetted corporate & diplomatic tenants under solid agreements.",
        description: "Prime residential leasing demands tenant caliber verification, physical asset preservation, and watertight contractual provisions.",
        benefits: [
          "Rental pricing calibration aligned with genuine qualified demand tiers.",
          "Tailored editorial visual presentation highlighting premium architectural merits.",
          "Financial background screening and solvency vetting of tenant candidates.",
          "Efficient viewing schedules arranged strictly with verified principals.",
          "Contractual negotiation of commercial covenants, deposits, and exit terms.",
          "Clear demarcation of operational maintenance liabilities and statutory duties.",
          "Occupancy timeline optimization to mitigate holding-cost vacancy periods."
        ],
        ctaText: "SUBMIT PROPERTY FOR LEASING",
        ctaLink: "/contact?interest=Property%20sourcing"
      },
      investors: {
        label: "For Investors",
        sublabel: "Capital Allocation",
        headline: "Empirical underwriting, off-market screening, and risk management.",
        description: "Strategic capital deployment requires separating promotional marketing yields from net operational reality, taxation, and liquidity constraints.",
        benefits: [
          "Direct comparative screening across asset classes, yield profiles, and geography.",
          "Technical, planning, and zoning due diligence identifying project constraints early.",
          "Rigorous separation of asking prices from speculative capital appreciation models.",
          "Realistic scenario modeling: long-term hold, cashflow leasing, or planned exit.",
          "Access to vetted prime residential, commercial, and cross-border opportunities.",
          "Comprehensive decision framework free of speculative or exaggerated promises."
        ],
        ctaText: "ENGAGE INVESTMENT ADVISORY",
        ctaLink: "/contact?interest=Investor%20advisory"
      }
    }
  },
  fr: {
    eyebrow: "VALEUR CLIENT TANGIBLE · CONSEIL DÉDIÉ",
    badge: "AVANTAGES DU CONSEIL",
    badgeSub: "SANS FAUSSES PROMESSES · FONDÉ SUR LES FAITS",
    title: "Les Avantages Concrets de Collaborer avec Cristian Văduva",
    description: "Une approche structurée, transparente et fondée sur l'analyse empirique. Sans promesses irréalistes, mais avec une protection rigoureuse de vos intérêts et de votre capital.",
    objectiveTag: "OBJECTIF PRINCIPAL DU MANDAT",
    concreteTag: "AVANTAGES CONCRETS GARANTIS PAR LE MANDAT",
    categories: {
      buyers: {
        label: "Pour Acquéreurs",
        sublabel: "Buyer Advisory",
        headline: "Sélection rigoureuse, analyse de prix objective et négociation méthodique.",
        description: "L'acquisition d'actifs haut de gamme est souvent confrontée à une asymétrie d'information. La représentation dédiée supprime les conflits d'intérêts et sécurise le processus.",
        benefits: [
          "Clarification précise des critères de recherche avant l'exploration du marché.",
          "Élimination du temps perdu sur des biens inadaptés ou surévalués.",
          "Comparaison directe d'actifs équivalents dans le même micro-secteur.",
          "Analyse objective du prix demandé au regard des actes notariés récents.",
          "Conduite structurée de la négociation et coordination de toutes les étapes.",
          "Identification précoce des contraintes cadastrales, juridiques ou urbanistiques.",
          "Accès aux opportunités du portefeuille HomeFind et à des biens hors marché.",
          "Perspective patrimoniale claire : résidence principale, villégiature ou investissement."
        ],
        ctaText: "MANDATER UN CONSEIL À L'ACHAT",
        ctaLink: "/contact?interest=Buyer%20representation"
      },
      sellers: {
        label: "Pour Vendeurs",
        sublabel: "Seller Advisory",
        headline: "Positionnement précis, marketing soigné et négociation structurée.",
        description: "Une propriété d'exception conserve toute sa valeur lorsqu'elle est positionnée avec justesse dès son lancement, évitant l'usure de marché et les démarches non qualifiées.",
        benefits: [
          "Positionnement stratégique du bien face à la concurrence directe.",
          "Étude comparative de marché établissant une stratégie de prix rigoureuse.",
          "Photographie éditoriale d'architecture et supports de présentation exclusifs.",
          "Diffusion ciblée et discrète auprès de réseaux d'acquéreurs préqualifiés.",
          "Filtrage systématique des demandes pour protéger la confidentialité du vendeur.",
          "Négociation ferme des clauses contractuelles et défense du prix de transaction.",
          "Rapports réguliers et visibilité totale sur chaque étape de commercialisation.",
          "Prévention des concessions précipitées sous la pression d'intermédiaires non alignés."
        ],
        ctaText: "MANDATER UN CONSEIL À LA VENTE",
        ctaLink: "/contact?interest=Seller%20representation"
      },
      landlords: {
        label: "Pour Bailleurs",
        sublabel: "Rental Placement",
        headline: "Sélection de locataires qualifiés et sécurisation des baux résidentiels.",
        description: "La location d'un bien de prestige exige une solvabilité éprouvée des occupants, la préservation du patrimoine et des contrats juridiquement irréprochables.",
        benefits: [
          "Fixation du loyer en adéquation avec la demande solvable de premier ordre.",
          "Présentation visuelle haut de gamme valorisant les qualités architecturales.",
          "Vérification approfondie du profil et des garanties financières des candidats.",
          "Visites ciblées organisées uniquement avec des acquéreurs ou locataires confirmés.",
          "Rédaction et négociation rigoureuse des conditions contractuelles et cautions.",
          "Définition précise des obligations de maintenance et de remise en état.",
          "Optimisation du calendrier locatif pour minimiser la vacance."
        ],
        ctaText: "PROPOSER UN BIEN À LA LOCATION",
        ctaLink: "/contact?interest=Property%20sourcing"
      },
      investors: {
        label: "Pour Investisseurs",
        sublabel: "Capital Allocation",
        headline: "Audit comparatif, identification d'opportunités et gestion des risques.",
        description: "Les décisions d'allocation de capital requièrent de séparer les rendements théoriques des coûts effectifs d'acquisition, de fiscalité et de liquidité.",
        benefits: [
          "Comparaison méthodique des opportunités par typologie, rendement et liquidité.",
          "Audit technique, juridique et urbanistique pour détecter les contraintes réelles.",
          "Distinguer rigoureusement le prix demandé des hypothèses optimistes de valorisation.",
          "Modélisation réaliste des scénarios de détention, de mise en location et de sortie.",
          "Accès à des opportunités résidentielles, tertiaires et internationales vérifiées.",
          "Accompagnement complet vers une décision éclairée sans promesses spéculatives."
        ],
        ctaText: "CONSEIL EN INVESTISSEMENT",
        ctaLink: "/contact?interest=Investor%20advisory"
      }
    }
  },
  de: {
    eyebrow: "MANDANTENMEHRWERT · ENGAGIERTE BERATUNG",
    badge: "VORTEILE DER ZUSAMMENARBEIT",
    badgeSub: "KEINE ILLUSIONEN · FAKTENBASIERT & TRANSPARENT",
    title: "Konkrete Vorteile der Beratung durch Cristian Văduva",
    description: "Strukturierte, transparente und empirisch fundierte Vorgehensweise. Keine unrealistischen Renditeversprechen, sondern konsequenter Schutz Ihres Kapitals.",
    objectiveTag: "KERNZIEL DES MANDATS",
    concreteTag: "KONKRETE MEHRWERTE DURCH DAS MANDAT",
    categories: {
      buyers: {
        label: "Für Käufer",
        sublabel: "Buyer Advisory",
        headline: "Sorgfältige Vorprüfung, Preisanalyse und zielgerichtete Verhandlung.",
        description: "Beim Erwerb hochkarätiger Immobilien herrschen oft Informationsungleichgewichte. Eine dedizierte Vertretung schützt vor überhöhten Preisen und Fehlentscheidungen.",
        benefits: [
          "Präzise Definition der Ankaufsparameter vor Beginn der Marktrecherche.",
          "Zeitersparnis durch Ausschluss unpassender oder überbewerteter Angebote.",
          "Objektiver Like-for-Like-Vergleich relevanter Alternativen im selben Mikromarkt.",
          "Fundierte Preisanalyse anhand authentischer notarieller Transaktionsdaten.",
          "Begleitung bei Vertragsverhandlungen und Steuerung aller Fristen bis zum Abschluss.",
          "Frühzeitige Identifizierung grundbuchrechtlicher oder baurechtlicher Risiken.",
          "Zugang zum verifizierten HomeFind-Portfolio und diskreten Off-Market-Objekten.",
          "Klarer strategischer Rahmen: Eigennutzung, Vermögenssicherung oder Mietertrag."
        ],
        ctaText: "KAUFBERATUNG MANDATIEREN",
        ctaLink: "/contact?interest=Buyer%20representation"
      },
      sellers: {
        label: "Für Verkäufer",
        sublabel: "Seller Advisory",
        headline: "Präzise Marktpositionierung, Premium-Marketing und Verhandlungsführung.",
        description: "Eine herausragende Immobilie bewahrt ihren Wert, wenn sie vom ersten Tag an strategisch positioniert wird, fernab von wahllosen Masseninseraten.",
        benefits: [
          "Genaue Positionierung im Vergleich zum direkten Wettbewerb im Luxussegment.",
          "Komparative Marktanalyse zur Festlegung einer belastbaren Preisstrategie.",
          "Hochwertige redaktionelle Präsentation und professionelle Architekturfotografie.",
          "Gezielte Platzierung über die exklusiven Kanäle des Netzwerks von Cristian Văduva.",
          "Vorqualifizierung aller Anfragen zum Schutz von Privatsphäre und Exklusivität.",
          "Erfahrene Verhandlungsführung zur Durchsetzung Ihrer Vertragskonditionen.",
          "Regelmäßige transparente Berichterstattung über alle Vermarktungsschritte.",
          "Vermeidung vorschneller Preiszugeständnisse unter Maklerdruck."
        ],
        ctaText: "VERKAUFSMANDAT VEREINBAREN",
        ctaLink: "/contact?interest=Seller%20representation"
      },
      landlords: {
        label: "Für Vermieter",
        sublabel: "Rental Placement",
        headline: "Sicherung solventer Mieter und vertragliche Absicherung.",
        description: "Die Vermietung von Premium-Immobilien erfordert geprüfte Bonität der Bewohner, Werterhalt der Substanz und rechtssichere Mietvereinbarungen.",
        benefits: [
          "Ausrichtung des Mietangebots an der realen zahlungskräftigen Nachfrage.",
          "Hochwertige visuelle Aufbereitung zur Betonung architektonischer Vorzüge.",
          "Sorgfältige Bonitäts- und Zuverlässigkeitsprüfung aller Mietinteressenten.",
          "Effiziente Besichtigungsorganisation ausschließlich mit qualifizierten Personen.",
          "Fachliche Unterstützung bei der Formulierung gewerblicher und privater Klauseln.",
          "Klarheit über Kautionsregelungen, Haftungsfragen und Instandhaltungspflichten.",
          "Optimierung der Vermietungszyklen zur Vermeidung kostspieliger Leerstände."
        ],
        ctaText: "MIETOBJEKT EINSTELLEN",
        ctaLink: "/contact?interest=Property%20sourcing"
      },
      investors: {
        label: "Für Investoren",
        sublabel: "Capital Allocation",
        headline: "Empirische Analyse, Screening von Opportunitäten und Risikomanagement.",
        description: "Kapitalallokationen erfordern eine strikte Trennung theoretischer Renditeannahmen von realen Anschaffungs-, Steuer- und Liquiditätskosten.",
        benefits: [
          "Direkter Vergleich von Anlageopportunitäten nach Lage, Profil und Liquidität.",
          "Technische und baurechtliche Vorprüfung zur Identifikation von Restriktionen.",
          "Klare Abgrenzung geforderter Preise von spekulativen Wertsteigerungsannahmen.",
          "Realistische Modellierung von Halte-, Vermietungs- und Exit-Szenarien.",
          "Zugang zu geprüften Wohn-, Gewerbe- und internationalen Liegenschaften.",
          "Umfassende Entscheidungsgrundlage ohne trügerische Renditeversprechen."
        ],
        ctaText: "INVESTITIONSBERATUNG ANFORDERN",
        ctaLink: "/contact?interest=Investor%20advisory"
      }
    }
  },
  ar: {
    eyebrow: "قيمة ملموسة للعميل · تمثيل واستشارة حصرية",
    badge: "مزايا التعاون",
    badgeSub: "بدون وعود وهمية · مرتكز على الحقائق والبيانات",
    title: "المزايا الملموسة للتعاون مع كريستيان فادوفا",
    description: "نهج منظم وشفاف قائم على التحليل الرقمي الواقعي. بدون وعود غير واقعية بعوائد مضمونة، مع حماية صارمة لرأس مالكم ومصالحكم.",
    objectiveTag: "الهدف المحوري للتفويض",
    concreteTag: "مزايا ملموسة محققة من خلال التفويض",
    categories: {
      buyers: {
        label: "للمشترين",
        sublabel: "Buyer Advisory",
        headline: "تدقيق صارم، وتحليل واقعي للأسعار، وتفاوض حازم لحماية مصالحك.",
        description: "شراء عقار فاخر يتطلب التغلب على تباين المعلومات والأسعار المبالغ فيها. التمثيل الاستشاري الحصري يزيل الضغوط ويوفر إطاراً تحليلياً متكاملاً.",
        benefits: [
          "تحديد معايير الشراء الجوهرية قبل النزول للسوق الفعلي.",
          "تقليل الوقت الضائع في معاينة عقارات غير ملائمة أو معروضة ببيانات غير دقيقة.",
          "مقارنة مباشرة عادلة ومماثلة بين البدائل في نفس المنطقة العقارية.",
          "تحليل موضوعي للسعر المطلوب مقارنة بالصفقات الحقيقية الموثقة مؤخراً.",
          "دعم احترافي على طاولة التفاوض وتنسيق مراحل العقد حتى التسجيل النهائي.",
          "اكتشاف مبكر لأي عيوب تنظيمية أو عقارية تتطلب معالجة قانونية.",
          "الوصول إلى محفظة HomeFind المعتمدة والفرص الخاصة غير المعلنة.",
          "وضوح كامل حول وجهة العقار: سكن خاص، حفظ ثروة، أو أصل مدر للعائد."
        ],
        ctaText: "طلب تمثيل استشاري للشراء",
        ctaLink: "/contact?interest=Buyer%20representation"
      },
      sellers: {
        label: "للبائعين",
        sublabel: "Seller Advisory",
        headline: "تسعير استراتيجي دقيق، وعرض تسويقي متميز، وتفاوض مهني.",
        description: "يحافظ العقار الاستثنائي على قيمته عند طرحه باستراتيجية منضبطة منذ اليوم الأول، لتفادي العرض العشوائي وحماية الهيبة الاستثمارية للأصل.",
        benefits: [
          "تحديد موقع العقار في السوق بدقة في مواجهة المنافسة المباشرة.",
          "تحليل مقارن للسوق وصياغة استراتيجية تسعير مبررة بالأرقام الواقعية.",
          "تصوير معماري احترافي وإعداد مواد عرض تحريرية راقية تليق بالعقار.",
          "توزيع موجه وسري عبر شبكة وقنوات كريستيان فادوفا الخاصة.",
          "تصفية وتأهيل مسبق للطلبات لتجنب الزيارات غير الجادة وحماية الخصوصية.",
          "تفاوض تجاري حازم لحماية حدود السعر وشروط التعاقد.",
          "تقارير دورية تمنح المالك وضوحاً تاماً في كل مرحلة من مراحل التسويق.",
          "تفادي القرارات الانفعالية أو التنازلات المتسرعة تحت ضغط السوق."
        ],
        ctaText: "طلب تمثيل استشاري للبيع",
        ctaLink: "/contact?interest=Seller%20representation"
      },
      landlords: {
        label: "للمؤجرين",
        sublabel: "Rental Placement",
        headline: "استقطاب مستأجرين مؤهلين وتأمين الشروط والضمانات التعاقدية.",
        description: "تأجير المساكن الراقية يتطلب التحقق من ملاءة المستأجرين، والحفاظ على الحالة الفنية للعقار، وصياغة عقود محكمة تضمن الحقوق.",
        benefits: [
          "تحديد القيمة الإيجارية بما يتوافق مع الطلب الحقيقي عالي الملاءة.",
          "إعداد عرض بصري وتسويقي يبرز المزايا المعمارية والتشطيبات الفاخرة.",
          "التدقيق في الملاءة المالية وخلفية المستأجرين المتقدمين.",
          "تنظيم المعاينات حصرياً مع مستأجرين تم التحقق من أهليتهم مسبقاً.",
          "صياغة والتفاوض على بنود الإيجار والضمانات المالية وشروط الإخلاء.",
          "تحديد واضح لمسؤوليات الصيانة الدورية والتزامات كل طرف.",
          "تقليل فترات الشغور لتحقيق أعلى كفاءة تشغيلية للعقار."
        ],
        ctaText: "عرض العقار للتأجير",
        ctaLink: "/contact?interest=Property%20sourcing"
      },
      investors: {
        label: "للمستثمرين",
        sublabel: "Capital Allocation",
        headline: "تحليل مالي مقارن، وتصفية الفرص الاستثمارية، وإدارة مدروسة للمخاطر.",
        description: "تخصيص رأس المال يتطلب فصلاً تاماً بين العوائد النظرية الترويجية والتكاليف الواقعية للتشغيل والضرائب وسيولة التخارج.",
        benefits: [
          "مقارنة مباشرة بين الفرص الاستثمارية حسب الموقع، ونوع الأصل، والسيولة.",
          "تدقيق فني وتنظيمي للكشف المبكر عن أي قيود قانونية أو إنشائية.",
          "فصل صارم بين الأسعار المطلوبة والتوقعات التفاؤلية غير الواقعية.",
          "نمذجة دقيقة لسيناريوهات الاحتفاظ طويل الأجل، والتأجير، أو التخارج المبرمج.",
          "الوصول إلى أصول سكنية وتجارية ودولية معتمدة تم فحصها بدقة.",
          "قرار استثماري مدروس بالكامل بعيداً عن الوعود التسويقية المضللة."
        ],
        ctaText: "طلب استشارة استثمارية",
        ctaLink: "/contact?interest=Investor%20advisory"
      }
    }
  }
};
