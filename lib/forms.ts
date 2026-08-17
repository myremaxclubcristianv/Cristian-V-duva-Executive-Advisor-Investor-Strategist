export interface Form {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  featured: boolean;
}

export const forms: Form[] = [
  {
    id: "property-sell-buy",
    name: "Sell / Buy Property",
    description: "Submit your property requirements or list your property for sale",
    url: "https://form.jotform.com/260995822821061",
    category: "Real Estate",
    featured: true,
  },
  {
    id: "insurance",
    name: "Insurance & Asset Protection",
    description: "Request insurance advisory and asset protection solutions",
    url: "https://form.jotform.com/260995914926069",
    category: "Insurance",
    featured: true,
  },
  {
    id: "club-membership",
    name: "Private Club / Network",
    description: "Apply for exclusive private club membership",
    url: "https://form.jotform.com/252405778959070",
    category: "Network",
    featured: false,
  },
];

export const getFeaturedForms = (): Form[] => {
  return forms.filter((f) => f.featured);
};

export const getFormById = (id: string): Form | undefined => {
  return forms.find((f) => f.id === id);
};

export const getFormsByCategory = (category: string): Form[] => {
  return forms.filter((f) => f.category === category);
};
