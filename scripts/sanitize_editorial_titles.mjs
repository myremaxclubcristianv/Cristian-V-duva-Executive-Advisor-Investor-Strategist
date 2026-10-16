import fs from "fs";

let content = fs.readFileSync("lib/properties.ts", "utf8");

const titleReplacements = [
  {
    from: `"title": "\\udfe1  | Casa individuala LUX in Pipera 🏡",`,
    to: `"title": "Private Luxury Detached Estate — Pipera Diplomatic Enclave",`,
  },
  {
    from: `"title": "Prime Land | OPORTUNITATE DE INVESTIȚIE — 12,5 HA INTRAVILAN CU PROIECT APROBAT",`,
    to: `"title": "Sovereign Development Land Holding — 12.5 Hectares with Approved Masterplan",`,
  },
  {
    from: `"title": "Prime Land 29,5+ hectare · Peste 500 ml front la A1 · 20 km de București",`,
    to: `"title": "Strategic Industrial & Commercial Land Reserve — 29.5 Hectares on A1 Highway Corridor",`,
  },
  {
    from: `"title": "Penthouse de lux pe 2 niveluri⚜️situat în zona Herăstrău",`,
    to: `"title": "Herăstrău Two-Level Architectural Duplex Penthouse",`,
  },
  {
    from: `"title": "Mută-te acum😍🔑Residence superb cu 4 camere",`,
    to: `"title": "Signature 4-Room Luxury Residence in Northern Corridor",`,
  },
  {
    from: `"title": "PENTHOUSE APARTHOTEL | DOROBANȚI – FLOREASCA",`,
    to: `"title": "Dorobanți – Floreasca Luxury Hospitality Penthouse",`,
  },
  {
    from: `"title": "Vilă Tip Duplex de Lux cu 4 Camere în Pipera – 228 mp Construiți, Curte Generoasă, Mobilată Complet",`,
    to: `"title": "Pipera Luxury 4-Room Duplex Villa with Landscaped Garden",`,
  },
  {
    from: `"title": "Residence Premium cu 3 Camere și Terasă de 30 mp – Zona Șchei, Brașov",`,
    to: `"title": "Historic Șchei Luxury 3-Room Residence with 30 sqm Terrace — Brașov",`,
  },
  {
    from: `"title": "Residence 2 camere luminos si modern  in Nusco City – Pipera",`,
    to: `"title": "Nusco City Modern Contemporary Residence — Pipera",`,
  },
  {
    from: `"title": "Villa exclusivistă de vânzare în Pipera – Erou Iancu Nicolae",`,
    to: `"title": "Exclusive Luxury Villa — Erou Iancu Nicolae, Pipera",`,
  },
  {
    from: `"title": "Nautical Living Experience – Libertatea de a trăi pe apă",`,
    to: `"title": "Nautical Living Experience — Autonomous Lakefront Residence",`,
  },
  {
    from: `"title": "Villa  in Cotroceni – Opera Nationala Pozitie premium langa parc 140mp",`,
    to: `"title": "Historic Cotroceni Villa — Adjacent to National Opera & Park",`,
  },
  {
    from: `"title": "Prima închiriere | Residence premium lângă Ambasada S.U.A. – Zona de Nord",`,
    to: `"title": "Diplomatic Quarter Luxury Residence — Adjacent to U.S. Embassy",`,
  },
  {
    from: `"title": "A\\u00a0private villa in\\u00a0Al Barari",`,
    to: `"title": "Private Architectural Villa in Al Barari — Dubai",`,
  },
  {
    from: `"title": "Invest in Luxury Living – Yacht Kid.",`,
    to: `"title": "Yacht Kid Lakefront Luxury Residence — Floreasca",`,
  },
  {
    from: `"title": "Own the Sky in Pipera – Luxurious Penthouse Masterpiece!",`,
    to: `"title": "Pipera Horizon Sky Penthouse — Panoramic Northern Views",`,
  },
  {
    from: `"title": "Anantara Residences – Where Luxury Meets Coastal Elegance",`,
    to: `"title": "Anantara Coastal Luxury Residences — Palm Jumeirah",`,
  },
];

let replacedCount = 0;
for (const item of titleReplacements) {
  if (content.includes(item.from)) {
    content = content.replace(item.from, item.to);
    replacedCount++;
    console.log("Replaced:", item.to);
  } else {
    console.warn("Could not find:", item.from);
  }
}

// Clean any non-breaking spaces or weird quotes
content = content.replace(/\u00a0/g, " ");

fs.writeFileSync("lib/properties.ts", content, "utf8");
console.log(`Successfully updated ${replacedCount} titles.`);
