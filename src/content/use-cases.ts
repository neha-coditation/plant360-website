/**
 * The six AI use-cases, verbatim from the approved reference. These are the
 * code fallback; the same six are seeded into Sanity (`useCase` documents) so
 * marketing can extend them without a code change. The landing switcher and
 * /use-cases index both read this shape.
 */
export type UseCase = {
  num: string;
  slug: string;
  title: string;
  product: string;
  agent: string;
  desc: string;
  metric: string;
};

export const useCases: UseCase[] = [
  {
    num: "01",
    slug: "digital-twin-operator-simulation",
    title: "Accelerate Digital Twin and Operator Simulation",
    product: "UniGraph + AI360",
    agent: "Twin Data Agent",
    desc: "Feed digital twin and operator training simulator initiatives with structured, connected asset data from UniGraph instead of hand-built models.",
    metric: "30%+ faster implementation",
  },
  {
    num: "02",
    slug: "eam-cmms-data-sync",
    title: "Automated Data Sync and Resolution for EAM, CMMS",
    product: "AI360 Agent",
    agent: "Asset Sync Agent",
    desc: "Keep EAM and CMMS systems continuously in sync with the engineering source of truth. Equipment, tags and hierarchies stay resolved and aligned automatically.",
    metric: "Zero manual reconciliation",
  },
  {
    num: "03",
    slug: "ptw-control-of-work",
    title: "Reduce errors in PTW and Control of Work",
    product: "Process AI",
    agent: "Control of Work Agent",
    desc: "Ground permits to work and isolations in live, verified plant data. Line-ups, isolation points and equipment states come straight from the asset graph, so permits reflect the plant as it actually is.",
    metric: "Fewer permit errors, less rework",
  },
  {
    num: "04",
    slug: "hazop-safety-compliance",
    title: "Automate Safety and Compliance Analysis, HAZOP",
    product: "Process AI",
    agent: "HAZOP Prep Agent",
    desc: "Process AI reads your P&IDs and proposes nodes, deviations and safeguards, turning weeks of HAZOP, LOPA and compliance preparation into a guided, data-backed review.",
    metric: "50%+ faster HAZOP prep",
  },
  {
    num: "05",
    slug: "operations-maintenance-workflows",
    title: "Automate Operations and Maintenance Workflows",
    product: "Process AI",
    agent: "Operations Agent",
    desc: "Automate turnaround and equipment-isolation planning, smart maintenance scheduling and corrosion-loop mapping. Process AI handles the document-heavy busywork.",
    metric: "Fewer manual workflows",
  },
  {
    num: "06",
    slug: "management-of-change-changeiq",
    title: "Automated Management of Change with ChangeIQ",
    product: "ChangeIQ App",
    agent: "MoC Agent on AI360",
    desc: "Digital-first, AI-powered Management of Change. ChangeIQ auto-assembles MoC packages, risk reviews and approval routing directly from your live plant graph, so changes move safely and fast.",
    metric: "40%+ less MoC prep time",
  },
];
