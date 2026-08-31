import type { CarbonIconType } from "@carbon/icons-react";
import { ScanAlt, ChartRelationship, FlowConnection, ChangeCatalog } from "@carbon/icons-react";

/**
 * Full platform product content. Powers the landing "four layers" cards, the
 * platform overview, and each product page. Written from the approved
 * positioning and the product deck: outcome first, mechanism second, every
 * claim paired with a number or a mechanism. No em dashes.
 */

export type Capability = { title: string; body: string };
export type Faq = { question: string; answer: string };
export type ProductStat = { value: string; label: string };
export type MotifVariant = "convert" | "unigraph" | "ai360" | "changeiq";

export type PlatformProduct = {
  slug: string;
  num: string;
  /** Layer verb: Digitize / Structure / Build / Apply. */
  verb: string;
  /** Layer number in the stack, 1 = sources/convert ... 4 = apply. */
  layer: number;
  name: string;
  Icon: CarbonIconType;
  motif: MotifVariant;
  /** Short blurb for the landing card. */
  cardBlurb: string;
  metric: string;
  /** Nav/hero one-line value prop. */
  valueProp: string;
  /** 40 to 60 word AEO direct-answer paragraph ("What is X?"). */
  answer: string;
  /** Punchy product highlights (the "why this wins" list from the deck). */
  highlights: string[];
  capabilities: Capability[];
  howItWorks: { step: string; title: string; body: string }[];
  /** Product-specific outcome tiles. */
  stats: ProductStat[];
  /** Systems this product reads from, writes to, or interoperates with. */
  integrations: string[];
  whoUsesIt: { role: string; benefit: string }[];
  /** One-line proof / customer moment. */
  proof: string;
  faqs: Faq[];
  seo: { title: string; description: string };
};

export const platformProducts: PlatformProduct[] = [
  {
    slug: "convert",
    num: "01",
    verb: "Digitize",
    layer: 1,
    name: "Convert",
    Icon: ScanAlt,
    motif: "convert",
    cardBlurb:
      "Convert CAD, DWG, and even legacy PDF files into intelligent Smart Drawings with human-in-the-loop AI, lossless and audit-ready.",
    metric: "70% faster, 50% lower cost",
    valueProp: "Digitize CAD, DWG, and scanned PDF drawings into audit-ready Smart Drawings.",
    answer:
      "Convert is Plant360's drawing digitization layer. It turns CAD, DWG, and legacy or scanned PDF drawings into intelligent Smart Drawings using purpose-built computer vision and multi-modal AI, with human-in-the-loop review. Every tag, symbol, relationship, and attribute is captured losslessly, digitizing drawings 70% faster at 50% lower cost.",
    highlights: [
      "Best AI in drawing digitization: converts not only native DWGs, but images and scanned PDFs.",
      "Proven digitization platform delivering over 70% efficiency gain at 50% lower cost.",
      "The only solution to deeply integrate with SmartPlant, Aveva, and DEXPI 1.3 / 2.0.",
      "Lossless, comprehensive conversion of attributes, relationships, and visual information.",
    ],
    capabilities: [
      {
        title: "Reads scanned and legacy PDFs",
        body: "Not just native CAD. Purpose-built computer vision extracts tags, symbols, line numbers, and connectivity from decades-old scanned drawings that lock most plant knowledge in place.",
      },
      {
        title: "Human-in-the-loop guided review",
        body: "A visual, guided workflow for drafters and engineers with built-in guardrails. AI proposes, people confirm, and the models learn from every correction, so accuracy compounds.",
      },
      {
        title: "Lossless Smart Drawings",
        body: "Output preserves the original drawing while adding a structured layer: searchable tags, resolved connectivity, extracted attributes, and links to datasheets, with no information loss.",
      },
      {
        title: "Interoperable, standards-based output",
        body: "Publishes to SmartPlant P&ID, Aveva, DEXPI 1.3 / 2.0, and ISO 15926, so digitized drawings drop straight into the engineering systems you already run.",
      },
      {
        title: "Computer vision plus multi-modal AI",
        body: "Domain models trained on tens of thousands of industrial drawings read both image-based and structured CAD formats, an accuracy generic AI cannot match.",
      },
      {
        title: "Open API and batch throughput",
        body: "Single and batch upload, real-time conversion monitoring, and query access to converted data in graph or relational form. Proven across 83,000+ engineering drawings.",
      },
    ],
    howItWorks: [
      { step: "01", title: "Ingest", body: "Upload CAD, DWG, images, or PDFs, including scanned and legacy formats, one at a time or in bulk." },
      { step: "02", title: "Extract", body: "Computer vision and multi-modal AI detect tags, symbols, line numbers, attributes, and connectivity." },
      { step: "03", title: "Verify", body: "Engineers confirm in a guided, guardrailed interface; the models learn from every correction." },
      { step: "04", title: "Publish", body: "Smart Drawings and structured data publish to your system of record, UniGraph, SmartPlant, Aveva, or DEXPI." },
    ],
    stats: [
      { value: "70%", label: "Faster digitization" },
      { value: "50%", label: "Lower cost" },
      { value: "83,000+", label: "Drawings digitized" },
      { value: "DEXPI 2.0", label: "Standards-native output" },
    ],
    integrations: ["SmartPlant P&ID", "Aveva", "DEXPI 1.3 / 2.0", "ISO 15926", "AutoCAD"],
    whoUsesIt: [
      { role: "Engineering managers", benefit: "Clear a drawing digitization backlog at half the cost." },
      { role: "Process engineers", benefit: "Searchable, structured P&IDs instead of flat scans." },
      { role: "IT and OT architects", benefit: "A clean, standards-based feed into systems of record and the graph." },
    ],
    proof:
      "A nuclear design firm uses Convert to accelerate design; a Houston oil & gas major pairs Convert with UniGraph for its digital twin program.",
    faqs: [
      {
        question: "Can Convert digitize scanned or hand-marked PDF drawings?",
        answer:
          "Yes. Convert is built for legacy and scanned PDFs and images, not just native CAD. Computer vision extracts tags, symbols, and connectivity from low-quality scans, with human-in-the-loop verification to guarantee accuracy.",
      },
      {
        question: "Which formats and standards does Convert output?",
        answer:
          "Convert publishes to SmartPlant P&ID, Aveva, DEXPI 1.3 and 2.0, and ISO 15926, and into UniGraph. It is the only digitization solution to integrate that deeply with SmartPlant, Aveva, and DEXPI.",
      },
      {
        question: "How much faster and cheaper is digitization with Convert?",
        answer:
          "Convert digitizes engineering drawings roughly 70% faster at about 50% lower cost than manual redrawing, proven across more than 83,000 drawings, with lossless capture of attributes and relationships.",
      },
      {
        question: "How is accuracy guaranteed?",
        answer:
          "A guided, guardrailed review workflow puts drafters and engineers in the loop. AI proposes, people confirm, and the models learn from every correction, so accuracy improves continuously and stays audit-ready.",
      },
    ],
    seo: {
      title: "Convert: Engineering Drawing Digitization",
      description:
        "Digitize CAD, DWG, and scanned PDF drawings into audit-ready Smart Drawings with human-in-the-loop AI. 70% faster at 50% lower cost, DEXPI and SmartPlant native.",
    },
  },
  {
    slug: "unigraph",
    num: "02",
    verb: "Structure",
    layer: 2,
    name: "UniGraph",
    Icon: ChartRelationship,
    motif: "unigraph",
    cardBlurb:
      "P&IDs, datasheets, and data from your existing systems of record unified into one living knowledge graph, kept continuously in sync.",
    metric: "10x retrieval, 80% less hunting",
    valueProp: "Unify P&IDs, datasheets, and records into one living asset knowledge graph.",
    answer:
      "UniGraph is Plant360's engineering data graph. It turns drawings, datasheets, and data from your existing systems of record into one living asset knowledge graph in weeks, kept continuously in sync. Engineers retrieve connected data 10x faster and spend 80% less time hunting, on a warehouse built for terabyte to petabyte scale.",
    highlights: [
      "10x faster information retrieval: shorter downtime and faster projects.",
      "Single source of truth: all assets, documents, and relationships as one plant knowledge graph.",
      "Scales with complexity: a warehouse built for TB to PB data with best-in-class traversal queries.",
      "Bring your own taxonomy: the graph adapts to your taxonomy and reduces integration time.",
    ],
    capabilities: [
      {
        title: "One living asset graph",
        body: "Every tag, equipment item, line, datasheet, and document linked into a single queryable model of the plant, not scattered files and spreadsheets.",
      },
      {
        title: "Continuous sync, no drift",
        body: "The graph and your system of record stay current together as drawings and records change, so nothing quietly falls out of date.",
      },
      {
        title: "Unifies your existing systems",
        body: "Ingests from the CAD, EAM, CMMS, historian, and document systems you already run, and hundreds of document layouts and formats. Your tools are inputs, not a rip-and-replace.",
      },
      {
        title: "Bring your own taxonomy",
        body: "The graph structure adapts to your taxonomy, and AI agents shape it to match how your teams already organize assets, cutting integration time.",
      },
      {
        title: "Graph algorithms for analytics",
        body: "Run graph traversal, root-cause analysis, analytics, and reporting on connected asset data, with best-in-class query performance.",
      },
      {
        title: "Open API and TB to PB scale",
        body: "REST APIs and client libraries in popular languages, on a distributed graph engine built to onboard large plants with terabytes to petabytes of data.",
      },
    ],
    howItWorks: [
      { step: "01", title: "Connect sources", body: "Ingest digitized drawings from Convert plus data from your existing systems of record." },
      { step: "02", title: "Resolve", body: "Tags, equipment, and hierarchies are matched, de-duplicated, and linked to your taxonomy." },
      { step: "03", title: "Sync", body: "The graph and system of record are kept continuously current as the plant changes." },
      { step: "04", title: "Serve", body: "Engineers and agents query one connected model through the app, graph algorithms, and open API." },
    ],
    stats: [
      { value: "10x", label: "Faster retrieval" },
      { value: "80%", label: "Less manual hunting" },
      { value: "TB to PB", label: "Data at scale" },
      { value: "Weeks", label: "To stand up" },
    ],
    integrations: ["SmartPlant", "Aveva", "AutoCAD", "EAM", "CMMS", "Historians"],
    whoUsesIt: [
      { role: "Reliability engineers", benefit: "Find every document and relationship for an asset in seconds." },
      { role: "Digital transformation leaders", benefit: "One trusted data foundation instead of parallel data programs." },
      { role: "Enterprise architects", benefit: "An open, owned asset data layer that feeds every downstream system." },
    ],
    proof:
      "A Houston oil & gas major runs UniGraph as the data foundation for its digital twin and operator AI co-pilot, delivering 60%+ efficiency improvements.",
    faqs: [
      {
        question: "What is an asset knowledge graph?",
        answer:
          "It is a connected model of every asset, tag, line, and document in a plant and the relationships between them, so engineers and AI agents can query the plant as one structured whole instead of searching scattered files.",
      },
      {
        question: "Does UniGraph replace my existing systems?",
        answer:
          "No. UniGraph unifies data from the CAD, EAM, CMMS, historian, and document systems you already run. Those tools are inputs; UniGraph is the connected, owned data layer on top, kept in sync with them.",
      },
      {
        question: "How much faster is data retrieval, and at what scale?",
        answer:
          "Teams retrieve connected asset data about 10x faster and spend roughly 80% less time manually hunting, on a distributed graph engine built for terabyte to petabyte plants with best-in-class traversal performance.",
      },
      {
        question: "Can the graph match our taxonomy?",
        answer:
          "Yes. UniGraph is bring-your-own-taxonomy. The graph structure adapts to how your teams organize assets, which reduces integration time and keeps the model intuitive to query.",
      },
    ],
    seo: {
      title: "UniGraph: Engineering Data Graph",
      description:
        "Turn drawings, datasheets, and records into one living asset knowledge graph in weeks, always in sync. 10x faster retrieval, 80% less hunting, TB to PB scale.",
    },
  },
  {
    slug: "ai360",
    num: "03",
    verb: "Build",
    layer: 3,
    name: "AI360",
    Icon: FlowConnection,
    motif: "ai360",
    cardBlurb:
      "Drag-and-drop platform to build and deploy industrial AI agents on your own graph in days, with pre-built integrations.",
    metric: "Agents in days, not months",
    valueProp: "Build and deploy industrial AI agents on your own graph in days.",
    answer:
      "AI360 is Plant360's agentic AI platform. It is a drag-and-drop builder for industrial AI agents that run directly on your UniGraph asset graph, with hundreds of pre-built integrations and agent templates. Teams cut AI project time from months to days and bring 50%+ efficiency to engineering, operations, and safety, with human-in-the-loop control.",
    highlights: [
      "Cut AI project time from months to days.",
      "Higher-impact automation by sitting directly on UniGraph.",
      "Faster expansion of AI use-cases through pre-built agents and integrations.",
      "Safer, auditable AI via human-in-the-loop workflows.",
    ],
    capabilities: [
      {
        title: "Drag-and-drop agent builder",
        body: "Compose agents visually from data, model, logic, and action blocks. Non-specialists ship agents without a bespoke pipeline for every use-case.",
      },
      {
        title: "Grounded on your graph",
        body: "Native integration with UniGraph means agents reason on verified, connected plant data instead of hallucinating from loose documents.",
      },
      {
        title: "Hundreds of pre-built integrations",
        body: "Connectors to common EAM, CMMS, historian, and engineering systems, plus a PlantGraph connector, so agents read and write where work already happens.",
      },
      {
        title: "Pre-built agent templates",
        body: "Start from templates for MoC, HAZOP prep, data sync, and more, then customize, so new use-cases expand fast.",
      },
      {
        title: "Human-in-the-loop and auditable",
        body: "Route agent outputs for review and approval, with a full audit trail of every action, so automation stays safe in critical work.",
      },
      {
        title: "Fully managed deployment",
        body: "Automated, fully-managed deployment and scaling, with an SDK and API for custom workflows and tailored user interfaces.",
      },
    ],
    howItWorks: [
      { step: "01", title: "Pick a use-case", body: "Start from a template such as MoC, HAZOP prep, or EAM/CMMS data sync." },
      { step: "02", title: "Compose", body: "Drag data, model, logic, and action blocks; ground the agent on UniGraph." },
      { step: "03", title: "Connect", body: "Wire pre-built integrations to your EAM, CMMS, historian, and engineering systems." },
      { step: "04", title: "Deploy", body: "Ship to managed production with human-in-the-loop review and a full audit trail." },
    ],
    stats: [
      { value: "Days", label: "Not months to deploy" },
      { value: "50%+", label: "Efficiency across eng, ops, safety" },
      { value: "100s", label: "Pre-built integrations" },
      { value: "HITL", label: "Reviewed and auditable" },
    ],
    integrations: ["UniGraph / PlantGraph", "EAM", "CMMS", "Historians", "SDK / API"],
    whoUsesIt: [
      { role: "Digital transformation teams", benefit: "Ship agents in days without a data science backlog." },
      { role: "Process and safety engineers", benefit: "Automate document-heavy prep work on trusted data." },
      { role: "IT and OT teams", benefit: "Governed, integrated deployment into existing plant systems." },
    ],
    proof:
      "A UK-based EPC uses AI360 to accelerate oil & gas risk-based inspection, safety, and compliance work.",
    faqs: [
      {
        question: "Do I need data scientists to build agents on AI360?",
        answer:
          "No. AI360 is a drag-and-drop, low-code platform. Engineering and digital teams compose agents visually on your existing graph, so most use-cases ship in days without a bespoke data science project.",
      },
      {
        question: "What grounds the agents so they are accurate?",
        answer:
          "Agents run natively on the UniGraph asset knowledge graph, so they reason on verified, connected plant data with human-in-the-loop review and a full audit trail, not on loose documents.",
      },
      {
        question: "How fast can we deploy, and how do we scale use-cases?",
        answer:
          "Days, not months. Teams start from pre-built agent templates, connect hundreds of pre-built integrations, and deploy to fully-managed production, then reuse components to expand use-cases quickly.",
      },
    ],
    seo: {
      title: "AI360: Industrial AI Agent Platform",
      description:
        "Drag-and-drop platform to build and deploy industrial AI agents on your own asset graph in days, with pre-built integrations, human-in-the-loop control, and audit trails.",
    },
  },
  {
    slug: "changeiq",
    num: "04",
    verb: "Apply",
    layer: 4,
    name: "ChangeIQ",
    Icon: ChangeCatalog,
    motif: "changeiq",
    cardBlurb:
      "The first live app on Plant360: AI Management of Change that keeps master drawings and engineering data current, automatically.",
    metric: "40%+ less MoC prep time",
    valueProp: "AI Management of Change: always-current master drawings, routed reviews, audit trails.",
    answer:
      "ChangeIQ is Plant360's first live application, built on AI360 and UniGraph. It keeps master drawings and engineering data current automatically: auto-assembling MoC packages, generating new drawing revisions from field markups, routing reviews and approvals, and keeping a full audit trail. ChangeIQ cuts Management of Change preparation time by more than 40%.",
    highlights: [
      "Automated, always-current master drawings, with no manual CAD work.",
      "Built-in rev-to-rev change log for faster reviews and approvals.",
      "Tablet-based field markup for shorter change cycle time.",
      "Up-to-date engineering data for every downstream process.",
    ],
    capabilities: [
      {
        title: "Auto-assembled MoC packages",
        body: "ChangeIQ pulls the affected drawings, tags, datasheets, and assets from the live graph and assembles the change package automatically.",
      },
      {
        title: "Automatic master revisions",
        body: "Upload a marked-up drawing and ChangeIQ generates the new revision of the master drawing, so master drawings stay current without manual CAD work.",
      },
      {
        title: "Rev-to-rev change log",
        body: "An automatic, readable change log captures the differences between revisions for engineers, drafters, and document controllers, speeding reviews and approvals.",
      },
      {
        title: "Tablet field markup",
        body: "A tablet and stylus app lets the field workforce annotate changes directly on drawings, shortening the change cycle from weeks to days.",
      },
      {
        title: "Routed reviews and approvals",
        body: "Risk reviews and approvals are routed to the right people with full context; approved changes trigger master updates automatically.",
      },
      {
        title: "Syncs to your engineering systems",
        body: "Exports updated drawings to Hexagon SmartPlant and Aveva automatically, with a complete, defensible audit trail on every change.",
      },
    ],
    howItWorks: [
      { step: "01", title: "Mark up", body: "Capture changes on a tablet in the field, or raise an MoC; ChangeIQ finds the affected assets in the live graph." },
      { step: "02", title: "Auto-assemble", body: "Relevant drawings, tags, and datasheets are gathered and a new master revision is generated automatically." },
      { step: "03", title: "Route and review", body: "Risk reviews and approvals are routed to the right people with full context and a rev-to-rev change log." },
      { step: "04", title: "Sync and audit", body: "Approved changes update the master, export to SmartPlant and Aveva, and log end to end for audit." },
    ],
    stats: [
      { value: "40%+", label: "Less MoC prep time" },
      { value: "0", label: "Manual CAD redraws" },
      { value: "Field", label: "Tablet markup to master" },
      { value: "Full", label: "Rev-to-rev audit trail" },
    ],
    integrations: ["Hexagon SmartPlant", "Aveva", "UniGraph", "AI360"],
    whoUsesIt: [
      { role: "Safety and process engineers", benefit: "Cut MoC prep time by 40%+ with auto-assembled packages." },
      { role: "Drafters and document control", benefit: "Always-current masters and a readable rev-to-rev change log." },
      { role: "Operations managers", benefit: "Changes move safely and fast, without email and spreadsheet chases." },
    ],
    proof:
      "ChangeIQ is the first production app on Plant360, cutting Management of Change prep by more than 40% on the live plant graph.",
    faqs: [
      {
        question: "How does ChangeIQ reduce Management of Change prep time?",
        answer:
          "ChangeIQ auto-assembles MoC packages from the live plant graph and generates new master drawing revisions from field markups, cutting the document-gathering and preparation phase by more than 40%.",
      },
      {
        question: "Does ChangeIQ keep master drawings current?",
        answer:
          "Yes. Upload a marked-up drawing and ChangeIQ generates the new master revision automatically, with no manual CAD work, and exports it to Hexagon SmartPlant and Aveva.",
      },
      {
        question: "Is there an audit trail?",
        answer:
          "Yes. A built-in rev-to-rev change log and end-to-end logging give engineers, drafters, document controllers, and auditors a complete, defensible record of every change.",
      },
      {
        question: "What is ChangeIQ built on?",
        answer:
          "ChangeIQ is a production application built on AI360 and grounded in the UniGraph asset knowledge graph, so every change package reflects the plant as it actually is.",
      },
    ],
    seo: {
      title: "ChangeIQ: AI Management of Change",
      description:
        "ChangeIQ keeps master drawings current automatically: auto-assembled MoC packages, field markup, routed reviews, and a full audit trail. 40%+ less MoC prep time.",
    },
  },
];

/** Lightweight view for the landing-page cards and platform overview. */
export const platformSummaries = platformProducts.map((p) => ({
  slug: p.slug,
  num: p.num,
  verb: p.verb,
  name: p.name,
  Icon: p.Icon,
  cardBlurb: p.cardBlurb,
  metric: p.metric,
}));

export function getPlatformProduct(slug: string): PlatformProduct | undefined {
  return platformProducts.find((p) => p.slug === slug);
}
