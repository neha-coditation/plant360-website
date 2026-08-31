/**
 * Traction and proof content for the Why Plant360 page. Typed and code-backed
 * so the shape is CMS-swappable later. Every claim carries a number or a named
 * mechanism, drawn from the client's pitch deck. No em dashes, no hype words.
 */

export type SuccessStory = {
  /** Anonymized company descriptor, e.g. "Houston-based oil & gas major". */
  company: string;
  /** Plant360 product(s) the customer runs. */
  product: string;
  /** Measurable outcome or initiative being accelerated. */
  outcome: string;
};

export type TractionFact = { value: string; label: string };

export type Differentiator = { title: string; body: string };

/** Named customer outcomes (anonymized) from the deck. */
export const successStories: SuccessStory[] = [
  {
    company: "Houston-based oil & gas major",
    product: "Plant360 Convert and UniGraph",
    outcome:
      "Accelerating its Digital Twin and Operator AI Co-Pilot initiatives, with 60%+ efficiency improvements on the engineering data work behind them.",
  },
  {
    company: "Nuclear plant design and engineering firm",
    product: "Plant360 Convert",
    outcome:
      "Digitizing design drawings into structured Smart Drawings to accelerate its design cycle instead of redrawing by hand.",
  },
  {
    company: "UK-based EPC contractor",
    product: "Plant360 AI360",
    outcome:
      "Accelerating oil and gas risk-based inspection, safety, and compliance work with agents grounded in the plant's own data.",
  },
];

/** Headline traction numbers for a stat row. */
export const tractionFacts: TractionFact[] = [
  { value: "3", label: "Fortune 50 integrated oil companies and operators in production" },
  { value: "50%+", label: "Proven efficiency gains across engineering, operations and safety" },
  { value: "$1M+", label: "Qualified pipeline across energy and nuclear operators" },
  { value: "1", label: "Top global nuclear plant design and engineering company as a customer" },
];

/** Partner categories that extend delivery beyond the core team. */
export const partnerFacts: string[] = [
  "System integrators",
  "SmartPlant P&ID service agencies",
  "Regional resellers and PS partners",
];

/** Why Plant360 differentiators. Each pairs a claim with its mechanism. */
export const differentiators: Differentiator[] = [
  {
    title: "Domain-specific intelligence",
    body: "Proprietary models trained on tens of thousands of industrial drawings, process fundamentals, and technical documents. That grounding delivers extraction accuracy generic AI cannot match on plant data.",
  },
  {
    title: "End to end on one platform",
    body: "Digitize, unify, integrate, and automate in a single stack. Because there are no handoffs between separate tools, no data is lost or duplicated at the seams.",
  },
  {
    title: "Agents that act on real context",
    body: "AI sits directly on UniGraph, grounded in the plant's own truth rather than loose documents, with human-in-the-loop control on every action.",
  },
  {
    title: "Proven outcomes, fast",
    body: "50%+ efficiency gains, production-ready in weeks, and trusted by Fortune 50 operators. The value is measured in real plant work, not in a pilot.",
  },
];
