import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "cristianvaduva",
    name: "CristianVaduva.com",
    url: "https://cristianvaduva.com",
    category: "Personal Brand",
    description: "Main personal brand and professional presence for luxury real estate and strategic advisory.",
    image: "/residence/exterior.png",
    featured: true,
    status: "active",
    order: 1,
  },
  {
    id: "aixluxury",
    name: "AiXLuxury",
    url: "https://aixluxury.com",
    category: "Real Estate",
    description: "Luxury real estate and premium lifestyle ecosystem powered by Cristian Văduva.",
    image: "/residence/living.png",
    featured: true,
    status: "active",
    order: 2,
  },
  {
    id: "aix-os",
    name: "AiX OS",
    url: "#",
    category: "Market Intelligence",
    description: "Market Pulse Live Intelligence platform for real-time market data and analysis.",
    image: "/residence/command.png",
    featured: true,
    status: "active",
    order: 3,
  },
  {
    id: "homefind",
    name: "HomeFind",
    url: "https://homefind.cristianvaduva.com",
    category: "Real Estate",
    description: "Real estate platform and property intelligence system.",
    image: "/residence/gallery.png",
    featured: true,
    status: "active",
    order: 4,
  },
  {
    id: "subventii",
    name: "Subvenții.ro",
    url: "https://subventii.ro",
    category: "Government Programs",
    description: "Funding and government programs intelligence platform.",
    image: "/residence/office.png",
    featured: true,
    status: "active",
    order: 5,
  },
  {
    id: "insurance",
    name: "Insurance & Asset Protection",
    url: "#",
    category: "Insurance",
    description: "Strategic insurance advisory and asset protection services in partnership with Generali Romania.",
    image: "/residence/library.png",
    featured: true,
    status: "active",
    order: 6,
  },
  {
    id: "market-pulse",
    name: "Market Pulse",
    url: "#",
    category: "Market Intelligence",
    description: "Real estate market statistics, price-per-square-meter trends, and macroeconomic analysis.",
    image: "/residence/command.png",
    featured: false,
    status: "active",
    order: 7,
  },
  {
    id: "investments",
    name: "Investments",
    url: "#",
    category: "Investments",
    description: "Direct connections with qualified private (UHNW) investors from Bucharest, Monaco, and Dubai.",
    image: "/residence/terrace.png",
    featured: false,
    status: "active",
    order: 8,
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
