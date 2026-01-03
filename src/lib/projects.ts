export type FeaturedCaseStudy = {
  id: string;
  label: string;
  title: string;
  description?: string;
  image?: {
    src?: string;
    alt: string;
  };
  href?: string;
};

export type VibeProject = {
  id: string;
  title: string;
  description?: string;
  href?: string;
  github?: string;
  tags: string[];
};

export const FEATURED_CASE_STUDIES: FeaturedCaseStudy[] = [
  {
    id: "peter-field",
    label: "E-COMMERCE | PRODUCT | SCALING",
    title: "The Peter Field",
    description: "Co-founded and scaled a fashion e-commerce brand to ₹3.5 Cr revenue and 100,000+ units sold, leading a 15+ member team.",
    image: {
      alt: "The Peter Field e-commerce platform",
    },
  },
  {
    id: "ai-forecasting",
    label: "AI/ML | PRODUCT | DATA",
    title: "AI-Driven Sales Forecasting",
    description: "Built a university project using AI/ML to predict retail sales, improving inventory planning accuracy by 22%.",
    image: {
      alt: "AI sales forecasting dashboard",
    },
  },
];

export const VIBE_CODE_PROJECTS: VibeProject[] = [
  {
    id: "patlun-store",
    title: "Patlun.Store Ops",
    description: "Associate PM work: optimized retail operations and vendor relations for a textile marketplace.",
    href: "#",
    tags: ["Product Management", "Retail", "Operations"],
  },
  {
    id: "armaan-analytics",
    title: "Armaan Textile Analytics",
    description: "Led operations and data analytics at Armaan Textile Group; improved fabric allocation by 5%.",
    github: "#",
    tags: ["Data Analysis", "ERP", "Operations"],
  },
  {
    id: "event-lead",
    title: "GTU Event Leadership",
    description: "Led cultural events with 500+ attendees and secured 10 major sponsorships.",
    href: "#",
    tags: ["Leadership", "Events", "Sponsorship"],
  },
];
