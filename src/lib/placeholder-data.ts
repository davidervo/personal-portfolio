// Static placeholder content for the visual design pass. No CMS is wired up
// yet — see CLAUDE.md decisions log (design first, then Prismic to match).

export interface ProjectPlaceholder {
  slug: string;
  title: string;
  client: string;
  tagline: string;
  featured: boolean;
  locked?: boolean;
}

export const projects: ProjectPlaceholder[] = [
  { slug: "checkout-redesign", title: "Checkout redesign", client: "Fintech Co", tagline: "Cut checkout drop-off by 24%", featured: true },
  { slug: "design-system", title: "Design system", client: "B2B SaaS Inc", tagline: "One system, twelve product teams", featured: true },
  { slug: "onboarding-flow", title: "Onboarding flow", client: "Health App", tagline: "Time-to-value down from 8 minutes to 90 seconds", featured: true },
  { slug: "brand-refresh", title: "Brand refresh", client: "Confidential", tagline: "A visual identity for a category-defining launch", featured: false, locked: true },
  { slug: "loyalty-program", title: "Loyalty program", client: "Retail Group", tagline: "0→1 rewards experience across app and web", featured: false },
  { slug: "internal-tools", title: "Internal tools", client: "Confidential", tagline: "Ops tooling for a 40-person logistics team", featured: false, locked: true },
];

export interface ExperiencePlaceholder {
  company: string;
  role: string;
  start: string;
  end?: string;
  description: string;
  relatedSlugs: string[];
}

export const experience: ExperiencePlaceholder[] = [
  {
    company: "Opal Studio",
    role: "Head of Design",
    start: "2023",
    description:
      "Leading product and brand design for a small, fast-moving consumer hardware team — from early concept through launch.",
    relatedSlugs: ["checkout-redesign", "design-system", "onboarding-flow"],
  },
  {
    company: "Fintech Co",
    role: "Senior Product Designer",
    start: "2019",
    end: "2023",
    description:
      "Owned the checkout and onboarding experience end to end, from research through shipped UI, across web and native apps.",
    relatedSlugs: ["checkout-redesign", "onboarding-flow"],
  },
  {
    company: "Design Collective",
    role: "Product Designer",
    start: "2014",
    end: "2019",
    description: "Brand and product design for early-stage startups across fintech, health, and retail.",
    relatedSlugs: ["brand-refresh", "loyalty-program"],
  },
  {
    company: "The very beginning",
    role: "Freelancer, jack of all trades",
    start: "2006",
    end: "2014",
    description: "Waiting tables, building websites on the side, figuring out what design even was.",
    relatedSlugs: [],
  },
];

export interface PostPlaceholder {
  slug: string;
  title: string;
  date: string;
  tag: string;
}

export const posts: PostPlaceholder[] = [
  { slug: "on-restraint", title: "On restraint in interface design", date: "Jun 2026", tag: "Essay" },
  { slug: "design-systems-that-stick", title: "Design systems that actually get adopted", date: "Mar 2026", tag: "Notes" },
  { slug: "eighteen-years", title: "Eighteen years, in retrospect", date: "Jan 2026", tag: "Essay" },
  { slug: "critique-culture", title: "Building a healthy critique culture", date: "Nov 2025", tag: "Notes" },
  { slug: "0-to-1", title: "Shipping 0→1 without losing your mind", date: "Aug 2025", tag: "Essay" },
];
