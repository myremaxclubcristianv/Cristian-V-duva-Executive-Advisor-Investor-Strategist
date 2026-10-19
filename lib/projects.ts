import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "cristianvaduva",
    name: "CristianVaduva.com",
    url: "https://cristianvaduva.com",
    category: "Personal Brand",
    description: "Main personal brand and professional hub for executive advisory, investment perspective, and ecosystem governance.",
    image: "/residence/exterior.png",
    featured: true,
    status: "active",
    order: 1,
  },
  {
    id: "executive",
    name: "EXECUTIVE",
    url: "https://executive.cristianvaduva.com",
    category: "Real Estate",
    description: "Global property portfolio, architectural monographs, and private investment advisory flagship.",
    image: "/residence/living.png",
    featured: true,
    status: "active",
    order: 2,
  },
  {
    id: "homefind",
    name: "HomeFind",
    url: "https://homefind.cristianvaduva.com",
    category: "Real Estate",
    description: "Real estate discovery and property-demand platform for verified residential transactions.",
    image: "/residence/gallery.png",
    featured: true,
    status: "active",
    order: 3,
  },
  {
    id: "dubai",
    name: "Dubai Desk",
    url: "https://dubai.cristianvaduva.com",
    category: "International Real Estate",
    description: "Dubai real estate and investment market initiative providing property sourcing and investor market intelligence.",
    image: "/residence/terrace.png",
    featured: true,
    status: "active",
    order: 4,
  },
  {
    id: "aixluxury",
    name: "AiXLuxury",
    url: "https://aixluxury.com",
    category: "Real Estate",
    description: "Luxury real estate portal and international private placement network for trophy assets.",
    image: "/residence/living.png",
    featured: true,
    status: "active",
    order: 5,
  },
  {
    id: "aix-os",
    name: "AiX OS",
    url: "https://os.aixluxury.com",
    category: "Market Intelligence",
    description: "Digital property intelligence and portfolio operating platform for quantitative market analysis.",
    image: "/residence/command.png",
    featured: true,
    status: "active",
    order: 6,
  },
  {
    id: "insurance",
    name: "Insurance Advisory",
    url: "https://insurance.cristianvaduva.com",
    category: "Asset Protection",
    description: "Asset protection advisory and risk structuring as an authorized partner of Generali România.",
    image: "/residence/library.png",
    featured: true,
    status: "active",
    order: 7,
  },
  {
    id: "cv-finance",
    name: "CV Finance",
    url: "https://credite.cristianvaduva.com",
    category: "Financing",
    description: "Mortgage structuring, credit engineering, and acquisition liquidity advisory.",
    image: "/residence/office.png",
    featured: true,
    status: "active",
    order: 8,
  },
  {
    id: "subventii",
    name: "Subvenții",
    url: "https://subventii.cristianvaduva.com/",
    category: "Grants & Subsidies",
    description: "Specialized advisory portal tracking European Union structural funds and non-reimbursable allocations.",
    image: "/residence/office.png",
    featured: false,
    status: "active",
    order: 9,
  },
  {
    id: "constructions",
    name: "Constructions Advisory",
    url: "https://constructions.cristianvaduva.com",
    category: "Development",
    description: "Technical advisory providing structural reviews, building permit verification, and development diligence.",
    image: "/residence/command.png",
    featured: false,
    status: "active",
    order: 10,
  },
  {
    id: "fly",
    name: "FLY (AIR)",
    url: "https://fly.cristianvaduva.com",
    category: "Mobility",
    description: "Aviation discovery and executive mobility portal coordinating point-to-point viewing itineraries.",
    image: "/residence/terrace.png",
    featured: false,
    status: "active",
    order: 11,
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects
    .filter((p) => p.category === category)
    .sort((a, b) => a.order - b.order);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};
