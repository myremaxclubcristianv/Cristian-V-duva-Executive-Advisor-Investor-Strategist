// lib/homefindPortfolio.ts
// Real, verified BUY and RENT properties sourced directly from HomeFind (https://homefind.cristianvaduva.com/)

export interface HomeFindListingItem {
  id: string;
  title: string;
  displayPrice: string;
  priceNumeric: number;
  currency: string;
  period?: string; // "lună" for rentals
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
    title: "Vilă Tip Duplex de Lux în Pipera",
    displayPrice: "575.000 €",
    priceNumeric: 575000,
    currency: "EUR",
    city: "București / Voluntari (Pipera)",
    type: "Vilă Duplex",
    surface: "228 mp",
    rooms: "5 camere",
    description: "Vilă de lux cu 4 dormitoare, finisaje contemporane, curte privată generoasă și acces facil către școlile internaționale din zona de nord.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2702e6ec-b168-4ba8-95ab-9a6d85f25300.JPG",
    status: "Disponibil",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/66b50868-2f5d-440c-80e7-1b04da21f5eb",
    category: "buy"
  },
  {
    id: "5f83fe12-0fae-40ef-a476-05daebd070e5",
    title: "Vilă Premium | Domeniu Montan Bran",
    displayPrice: "2.999.000 €",
    priceNumeric: 2999000,
    currency: "EUR",
    city: "Bran, Brașov",
    type: "Vilă / Domeniu Privat",
    surface: "",
    rooms: "",
    description: "Reședință montană de prestigiu amplasată în zona istorică Bran, cu vedere panoramică neobstrucționată și teren privat extins.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/2bca3abd-03a7-44e3-b208-1c4305de5ddf.jpg",
    status: "Disponibil",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/5f83fe12-0fae-40ef-a476-05daebd070e5",
    category: "buy"
  },
  {
    id: "b199540c-e0f1-4ebb-8d14-f9a77169c059",
    title: "Reședință Elegantă de Lux în Zona Floreasca",
    displayPrice: "575.000 €",
    priceNumeric: 575000,
    currency: "EUR",
    city: "București (Floreasca)",
    type: "Apartament Premium",
    surface: "160 mp",
    rooms: "3 camere",
    description: "Apartament generos în inima cartierului Floreasca, finisaje de înaltă clasă, compartimentare optimizată și proximitate față de parcuri și restaurante fine dining.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8d04aec0-b6e7-4adb-9380-a061eef6da44.jpg",
    status: "Disponibil",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/b199540c-e0f1-4ebb-8d14-f9a77169c059",
    category: "buy"
  },
  {
    id: "a638f3a4-25a6-4f75-9074-b8a30f4fa279",
    title: "Teren Intravilan 12,5 ha cu Proiect Aprobat",
    displayPrice: "1.650.000 €",
    priceNumeric: 1650000,
    currency: "EUR",
    city: "Călărași",
    type: "Teren Investiție",
    surface: "125.000 mp",
    rooms: "Teren investiție",
    description: "Oportunitate strategică de investiție cu PUZ aprobat, acces direct la căi majore de transport și utilități disponibile la limită.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/7f9378ec-4b26-457f-99c8-fbd3d501da35.PNG",
    status: "Oportunitate Investiție",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/a638f3a4-25a6-4f75-9074-b8a30f4fa279",
    category: "buy"
  },
  {
    id: "e95e842f-a588-4cfe-ac61-8f5d84437d46",
    title: "Teren Strategic 29,5+ ha cu Front la Autostrada A1",
    displayPrice: "5.900.000 €",
    priceNumeric: 5900000,
    currency: "EUR",
    city: "Autostrada A1 (km 20 București)",
    type: "Teren Strategic Logistic",
    surface: "295.000 mp",
    rooms: "Teren strategic",
    description: "Amplasament logistic de mare anvergură cu deschidere directă de peste 500 metri liniari la autostrada A1, pretabil parc industrial sau logistic.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/fcebffcd-c9aa-4542-9322-f87438e83eda.PNG",
    status: "Oportunitate Investiție",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/e95e842f-a588-4cfe-ac61-8f5d84437d46",
    category: "buy"
  },
  {
    id: "a40201f6-9046-40b2-b688-be6cb801f6fc",
    title: "Vilă Contemporană de Lux în Marbella",
    displayPrice: "4.995.000 €",
    priceNumeric: 4995000,
    currency: "EUR",
    city: "Marbella, Costa del Sol, Spania",
    type: "Vilă Mediteraneană",
    surface: "504 mp",
    rooms: "5 dormitoare",
    description: "Vilă contemporană cu piscină privată, grădină amenajată, orientare sudică și specificații arhitecturale de vârf în Marbella.",
    image: "https://tet.ro/storage/properties/1235872/img-1235872-0.webp",
    status: "Disponibil",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/a40201f6-9046-40b2-b688-be6cb801f6fc",
    category: "buy"
  },
  {
    id: "a79cb6ed-718a-4ab1-b002-71656ee7c74d",
    title: "Palm Jumeirah 4BR Garden Villa",
    displayPrice: "Preț la cerere",
    priceNumeric: 0,
    currency: "AED / EUR",
    city: "Palm Jumeirah, Dubai, UAE",
    type: "Vilă Privată Beachfront",
    surface: "",
    rooms: "4 dormitoare",
    description: "Reședință complet renovată și mobilată pe faimosul arhipelag Palm Jumeirah, oferind intimitate deplină, piscină privată generoasă și acces direct la plajă.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/8f25c135-f89f-4f22-a8a8-38762e09825b.JPG",
    status: "La Cerere",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/a79cb6ed-718a-4ab1-b002-71656ee7c74d",
    category: "buy"
  }
];

export const homefindRentProperties: HomeFindListingItem[] = [
  {
    id: "fbbb75d8-7210-4e83-9288-35a9a004c015",
    title: "Reședință Exclusivistă în Herăstrău",
    displayPrice: "5.000 € / lună",
    priceNumeric: 5000,
    currency: "EUR",
    period: "lună",
    city: "București (Herăstrău)",
    type: "Apartament de Lux",
    surface: "163 mp",
    rooms: "4 camere",
    description: "Apartament de excepție situat în vecinătatea imediată a Parcului Herăstrău, finisaje de înaltă calitate, terasă generoasă și securitate permanentă.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/67fa74f5-928f-4266-b333-d8557d1048ed.jpg",
    status: "Disponibil pentru Închiriere",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/fbbb75d8-7210-4e83-9288-35a9a004c015",
    category: "rent"
  },
  {
    id: "b55c2026-bab2-4cd9-9a54-1e249199a174",
    title: "Casă Individuală de Mare Valoare în Pipera",
    displayPrice: "4.500 € / lună",
    priceNumeric: 4500,
    currency: "EUR",
    period: "lună",
    city: "Voluntari (Pipera)",
    type: "Vilă Individuală",
    surface: "582 mp",
    rooms: "7 camere",
    description: "Vilă spațioasă cu 7 camere, grădină matură, garaj subteran și spații ample de recepție, ideală pentru reședință diplomatică sau executivă.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/d64c556d-bee6-4081-8254-1dba2a8d8ce7.jpg",
    status: "Disponibil pentru Închiriere",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/b55c2026-bab2-4cd9-9a54-1e249199a174",
    category: "rent"
  },
  {
    id: "ccf08f49-b9e0-40e1-bb18-6a5d007348d7",
    title: "Vilă 7 Camere în Floreasca",
    displayPrice: "3.100 € / lună",
    priceNumeric: 3100,
    currency: "EUR",
    period: "lună",
    city: "București (Floreasca)",
    type: "Vilă Urbană",
    surface: "240 mp",
    rooms: "7 camere",
    description: "Proprietate versatilă amplasată într-o zonă ultracentrală căutată, potrivită atât pentru locuire de lux, cât și pentru birou privat de avocatură sau consultanță.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a1ca89d7-1fd5-46ba-9e95-9b20fc88a2c0.jpg",
    status: "Disponibil pentru Închiriere",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/ccf08f49-b9e0-40e1-bb18-6a5d007348d7",
    category: "rent"
  },
  {
    id: "98ac6115-9bd7-4377-8254-24c8cd40e4f3",
    title: "Vilă Nouă S+P+1E pe Erou Iancu Nicolae",
    displayPrice: "2.700 € / lună",
    priceNumeric: 2700,
    currency: "EUR",
    period: "lună",
    city: "Voluntari (Iancu Nicolae)",
    type: "Vilă Contemporană",
    surface: "243 mp",
    rooms: "5 camere",
    description: "Construcție recentă cu teren privat de 1.000 mp, compartimentare optimizată pentru familii și proximitate imediată față de Cambridge și Școala Americană.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/25224d9a-c2e4-4d86-95e4-cf1cc35f5365.JPG",
    status: "Disponibil pentru Închiriere",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/98ac6115-9bd7-4377-8254-24c8cd40e4f3",
    category: "rent"
  },
  {
    id: "8021ba60-747c-41ae-9d35-ca1af206fd6c",
    title: "Vilă Istorică în Cotroceni lângă Opera Națională",
    displayPrice: "2.000 € / lună",
    priceNumeric: 2000,
    currency: "EUR",
    period: "lună",
    city: "București (Cotroceni)",
    type: "Vilă Istorică",
    surface: "140 mp",
    rooms: "4 camere",
    description: "Poziție premium în cartierul rezidențial istoric Cotroceni, la câțiva pași de parc și Opera Națională, arhitectură nobilă și intimitate.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/43d4c8df-470f-4d82-9734-0b9f309696ea.jpg",
    status: "Disponibil pentru Închiriere",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/8021ba60-747c-41ae-9d35-ca1af206fd6c",
    category: "rent"
  },
  {
    id: "b144acf9-0085-42a0-bc1d-02d8eb2a7d96",
    title: "Apartament Premium lângă Ambasada S.U.A.",
    displayPrice: "1.700 € / lună",
    priceNumeric: 1700,
    currency: "EUR",
    period: "lună",
    city: "București (Zona de Nord)",
    type: "Apartament Rezidențial",
    surface: "180 mp",
    rooms: "3 camere",
    description: "Locuință nouă complet mobilată și utilată la standarde superioare, parcare subterană dedicată și securitate continuă în zona rezidențială Băneasa.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/92604920-51b5-476c-bb3e-8383891cf74b.jpg",
    status: "Disponibil pentru Închiriere",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/b144acf9-0085-42a0-bc1d-02d8eb2a7d96",
    category: "rent"
  },
  {
    id: "6609b3f1-cb7d-4c91-a12d-d69af25d58fc",
    title: "Apartament Elegant | The Ivy Băneasa",
    displayPrice: "1.450 € / lună",
    priceNumeric: 1450,
    currency: "EUR",
    period: "lună",
    city: "București (Băneasa)",
    type: "Apartament Modern",
    surface: "100,6 mp",
    rooms: "3 camere",
    description: "Complex rezidențial premium cu eficiență energetică certificată, parcare subterană inclusă, terasă panoramică și acces rapid către aeroport și Pipera.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/a28bdb10-5c30-4312-98fc-83aab71e9055.jpg",
    status: "Disponibil pentru Închiriere",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/6609b3f1-cb7d-4c91-a12d-d69af25d58fc",
    category: "rent"
  },
  {
    id: "fe463726-74f7-408d-9adb-79cd2f03ceb6",
    title: "Apartament cu Grădină Privată în Herăstrău",
    displayPrice: "1.300 € / lună",
    priceNumeric: 1300,
    currency: "EUR",
    period: "lună",
    city: "București (Herăstrău)",
    type: "Apartament cu Grădină",
    surface: "105 mp",
    rooms: "3 camere",
    description: "Proprietate rară cu spațiu exterior privat într-una dintre cele mai apreciate zone din capitală, ideală pentru cei care caută confort și verdeață.",
    image: "https://gremutoprvrtujeybpcl.supabase.co/storage/v1/object/public/listings/6cea493c-97df-429b-887a-84b0608206c0.jpg",
    status: "Disponibil pentru Închiriere",
    homefindUrl: "https://homefind.cristianvaduva.com/listing/fe463726-74f7-408d-9adb-79cd2f03ceb6",
    category: "rent"
  }
];
