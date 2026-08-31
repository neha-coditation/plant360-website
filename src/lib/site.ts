/**
 * Central site configuration: identity, navigation IA, and the redirect map.
 * This is the single source of truth for the navbar, footer, sitemap, and
 * breadcrumb JSON-LD.
 */

export const site = {
  name: "Plant360.AI",
  legalName: "Plant360.AI",
  domain: "plant360.ai",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://plant360.ai",
  tagline: "The full-stack industrial data and AI platform, from digitization to working agents.",
  description:
    "Plant360 connects digitization, a live asset knowledge graph, an AI build platform, and production agents so your documents become data and your data becomes working agents. 50%+ efficiency, end to end.",
  email: "contactus@plant360.ai",
  engineeringEmail: "engineering@plant360.ai",
  address: "1004, Amar Business Zone, Baner, Pune 411045",
  social: {
    linkedin: "https://www.linkedin.com/company/plant360ai",
    x: "https://x.com/plant360ai",
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  metric?: string;
};

export type NavItem = {
  label: string;
  href?: string;
  /** Rendered as a mega-menu panel when present. */
  panel?: {
    intro?: { title: string; text: string; href: string };
    links: NavLink[];
  };
};

export const platformLinks: NavLink[] = [
  {
    label: "Convert",
    href: "/platform/convert",
    description: "Digitize CAD, DWG, and scanned PDF drawings into audit-ready Smart Drawings.",
    metric: "70% faster, 50% lower cost",
  },
  {
    label: "UniGraph",
    href: "/platform/unigraph",
    description: "Unify P&IDs, datasheets, and records into one living asset knowledge graph.",
    metric: "10x retrieval, 80% less hunting",
  },
  {
    label: "AI360",
    href: "/platform/ai360",
    description: "Build and deploy industrial AI agents on your own graph in days.",
    metric: "Agents in days, not months",
  },
  {
    label: "ChangeIQ",
    href: "/platform/changeiq",
    description: "AI-powered Management of Change: auto-assembled packages, routed reviews.",
    metric: "40%+ less MoC prep time",
  },
];

export const solutionLinks: NavLink[] = [
  {
    label: "Digital Transformation",
    href: "/solutions/digital-transformation",
    description: "Move from document-driven workflows to data-driven, AI-first operations.",
  },
  {
    label: "Digital Twin Implementation",
    href: "/solutions/digital-twin",
    description: "Feed digital twins and operator training simulators with connected asset data.",
  },
  {
    label: "Digitization",
    href: "/solutions/digitization",
    description: "Engineering drawing and P&ID digitization with human-in-the-loop AI.",
  },
  {
    label: "Reliability and Maintenance",
    href: "/solutions/reliability-maintenance",
    description: "Clean CMMS data and reliability-centered maintenance grounded in the graph.",
  },
  {
    label: "Operational Efficiency",
    href: "/solutions/operational-efficiency",
    description: "Automate document-heavy plant workflows across engineering, ops, and safety.",
  },
  {
    label: "Asset Data Platform",
    href: "/solutions/asset-data-platform",
    description: "One industrial asset data platform: system of record plus knowledge graph.",
  },
];

export const companyLinks: NavLink[] = [
  { label: "About Us", href: "/company/about" },
  { label: "Careers", href: "/company/careers" },
  { label: "News", href: "/company/news" },
];

export const resourceLinks: NavLink[] = [
  { label: "Blog", href: "/resources/blog" },
  { label: "Newsletter", href: "/resources/newsletter" },
];

export const primaryNav: NavItem[] = [
  {
    label: "Platform",
    panel: {
      intro: {
        title: "Platform overview",
        text: "Four connected layers: digitize, structure, build, apply. See how they compound.",
        href: "/platform",
      },
      links: platformLinks,
    },
  },
  { label: "Why Plant360.AI", href: "/why-plant360" },
  {
    label: "Solutions",
    panel: { links: solutionLinks },
  },
  {
    label: "Company",
    panel: { links: companyLinks },
  },
  {
    label: "Resources",
    panel: { links: resourceLinks },
  },
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Platform",
    links: [...platformLinks, { label: "Platform overview", href: "/platform" }],
  },
  {
    title: "Company",
    links: [...companyLinks, { label: "Use-cases", href: "/use-cases" }],
  },
  {
    title: "Resources",
    links: [...resourceLinks, { label: "Contact us", href: "/contact" }],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

/**
 * 301 redirects from the old Framer site to the new IA. Consumed by the
 * CloudFront Function (infra) and documented here as the canonical map.
 */
export const redirects: { from: string; to: string }[] = [
  { from: "/convert", to: "/platform/convert" },
  { from: "/unigraph", to: "/platform/unigraph" },
  { from: "/ai360", to: "/platform/ai360" },
  { from: "/changeiq", to: "/platform/changeiq" },
  { from: "/company", to: "/company/about" },
  { from: "/blog", to: "/resources/blog" },
  // Note: /use-cases and /contact keep their paths in the new IA, so no
  // redirect is emitted for them (an identity redirect would loop).
];
