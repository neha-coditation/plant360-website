/**
 * Reusable proof points and outcome metrics. Numeric global metrics
 * (drawings, datasheets) are overridable from Sanity siteSettings; these are
 * the code defaults and the copy that surrounds them.
 */

export const globalMetrics = {
  drawings: 83000,
  datasheets: 250000,
};

export const outcomeMetrics: { value: string; label: string }[] = [
  { value: "50%+", label: "Efficiency gains across engineering, operations and safety" },
  { value: "70%", label: "Faster drawing digitization at 50% lower cost" },
  { value: "10x", label: "Faster engineering data retrieval, 80% less manual hunting" },
  { value: "40%+", label: "Less Management of Change prep time with ChangeIQ" },
];

export const proofPoints: string[] = [
  "83,000+ engineering drawings digitized",
  "250,000+ datasheets and specifications digitized",
  "ISO 27001 certified",
  "Open API, no vendor lock-in",
  "Works with the CAD and asset systems you already run",
];

export const demoCta = {
  heading: "Ready to turn your plant's documents into AI agents?",
  body: "See the full stack on your own drawings. A 30-minute demo shows digitize to graph to agent, end to end.",
  primary: { label: "Book a demo", href: "/contact" },
  secondary: { label: "Talk to engineering", href: "/contact?team=engineering" },
};
