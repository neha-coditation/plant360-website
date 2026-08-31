/**
 * Blog content, code-backed for now. The shape mirrors what a Sanity-backed
 * source would return so pages can later swap the import without page changes:
 * a flat `posts` array plus `getPost(slug)` and a derived `categories` list.
 *
 * Voice: crisp B2B, outcome-first, mechanism-led, industry vocabulary. No em
 * dashes anywhere in body copy.
 */

export type Author = {
  name: string;
  role: string;
};

/** A single content block. Kept deliberately small and portable-text friendly. */
export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: Author;
  /** ISO 8601 date, 2026. */
  datePublished: string;
  readingMinutes: number;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "why-industrial-ai-pilots-stall",
    title: "Why industrial AI pilots stall without a data foundation",
    excerpt:
      "Most plant AI pilots fail for the same reason: they are point solutions bolted onto disconnected data. The fix is a four-layer foundation, not another silo.",
    category: "Industrial AI",
    author: { name: "Ravi Menon", role: "VP Product" },
    datePublished: "2026-02-11",
    readingMinutes: 7,
    body: [
      {
        type: "p",
        text: "Almost every industrial operator we talk to has run an AI pilot in the last two years. Almost none have moved one into production at scale. The pattern is consistent enough to be predictable: a vendor demos a narrow capability on a curated dataset, the pilot works in the room, and then it dies quietly in the gap between the demo and the messy reality of plant data. The problem is rarely the model. It is the foundation underneath it.",
      },
      {
        type: "h2",
        text: "The point-solution trap",
      },
      {
        type: "p",
        text: "A point solution is an AI tool that solves one task and owns its own data. It ingests a slice of your drawings or records, builds a private index, produces an answer, and stops. On day one that looks efficient. By month three you have five of them, each with a different copy of the truth, none of them talking to your EAM, your CMMS, or your engineering document management system. You have not reduced silos. You have added AI-shaped ones.",
      },
      {
        type: "p",
        text: "The tell is what happens when a question crosses a boundary. Ask a document-search bot which pumps on a given P&ID share a common seal flush plan and also have an open work order, and it cannot answer, because the drawing and the maintenance record live in two different tools that were never designed to reason together. The pilot handled retrieval. It never touched the thing that makes plant knowledge valuable, which is the connections between assets, documents, and events.",
      },
      {
        type: "h2",
        text: "Three silos wearing an AI badge",
      },
      {
        type: "p",
        text: "When teams try to industrialize a pilot, they usually discover the work splits into three efforts that were never scoped together:",
      },
      {
        type: "ul",
        items: [
          "Digitization: turning scanned PDFs, legacy CAD, and datasheets into structured, machine-readable content. This is slow, error-prone, and almost always underestimated.",
          "Graph construction: linking that content into a model of the asset, so a valve knows its line, its line knows its unit, and its unit knows its documents and history.",
          "AI and agents: the reasoning layer that answers questions and executes workflows on top of the graph.",
        ],
      },
      {
        type: "p",
        text: "Pilots fund the third and assume the first two are free. They are not. When each is procured and built in isolation, you get three silos wearing an AI badge, and the integration cost between them dwarfs the model cost. This is why the second year of an AI program often costs more than the first and delivers less.",
      },
      {
        type: "h2",
        text: "The four-layer argument",
      },
      {
        type: "p",
        text: "Durable industrial AI rests on four connected layers, built as one pipeline rather than four purchases. Digitize converts documents into structured Smart Drawings and datasheets. Structure unifies that output into a living asset knowledge graph that also serves as a system of record. Build gives engineers a way to compose agents on that graph without a data-science team. Apply runs those agents inside real workflows such as Management of Change and reliability reviews.",
      },
      {
        type: "p",
        text: "The reason this ordering matters is that each layer produces the input the next one needs, with no lossy hand-off. The same pipeline that digitizes a P&ID emits both an audit-ready drawing and the graph nodes and edges that represent it. The agent that answers a question is reading the same graph that engineering edits, so there is nothing to reconcile and nothing to drift.",
      },
      {
        type: "quote",
        text: "An AI answer is only as trustworthy as the graph it reasoned over, and a graph is only as complete as the digitization that fed it.",
      },
      {
        type: "h2",
        text: "What to do instead",
      },
      {
        type: "p",
        text: "If you are scoping an industrial AI program, invert the usual order. Start from the foundation and let the use case pull it forward.",
      },
      {
        type: "ul",
        items: [
          "Pick a use case that forces connection. Choose work that spans drawings, datasheets, and records, so a point solution physically cannot deliver it. Management of Change and reliability triage both qualify.",
          "Fund digitization as a first-class layer, not a data-prep line item. Measure it in verified drawings per week and target lossless, human-verified output.",
          "Insist on one graph as the system of record. If the AI reads a copy, you will maintain two truths forever.",
          "Buy a pipeline, not a feature. Ask any vendor to show the path from a scanned PDF to a working agent, without a manual export in the middle.",
        ],
      },
      {
        type: "p",
        text: "Operators who build the foundation first tend to ship their second and third use cases in weeks rather than quarters, because the expensive part is already done. Operators who chase the demo first tend to run a permanent pilot. The model was never the differentiator. The foundation was.",
      },
    ],
  },
  {
    slug: "pid-digitization-best-practices",
    title: "P&ID digitization best practices",
    excerpt:
      "Turning decades of scanned P&IDs into structured, connected data is a solved problem when you get four things right: source handling, human-in-the-loop verification, lossless output, and throughput.",
    category: "Digitization",
    author: { name: "Elena Farrow", role: "Head of Solutions Engineering" },
    datePublished: "2026-03-04",
    readingMinutes: 8,
    body: [
      {
        type: "p",
        text: "Most operators sit on tens of thousands of P&IDs, and most of those drawings are trapped in formats no software can reason over: scanned raster PDFs, superseded CAD, and paper that was photographed at an angle in 2004. Digitization is the work of turning that inventory into structured, connected data. Done well, it feeds a graph, a system of record, and every downstream AI workflow. Done badly, it produces a pile of tagged images nobody trusts. Four practices separate the two outcomes.",
      },
      {
        type: "h2",
        text: "Treat source quality as a first-class input",
      },
      {
        type: "p",
        text: "The single biggest predictor of digitization accuracy is what you feed the pipeline. Vector CAD and DWG carry geometry and text as objects, so extraction is close to lossless. Scanned and legacy PDFs carry only pixels, so every symbol, tag, and line has to be recovered by recognition. A mature pipeline handles both, but it should be honest about the difference and route each source accordingly.",
      },
      {
        type: "ul",
        items: [
          "Vector sources: extract native geometry and text directly, then classify symbols against the applicable standard such as ISA or the site legend.",
          "Raster and scanned sources: deskew, denoise, and upscale before recognition, then run symbol detection and OCR tuned for engineering typography and tag formats.",
          "Mixed and revised sets: reconcile revision clouds and superseded sheets so the pipeline digitizes the current drawing, not a mothballed one.",
        ],
      },
      {
        type: "h2",
        text: "Put a human in the loop, by design",
      },
      {
        type: "p",
        text: "Fully automated extraction that nobody checks is how you get a graph full of confident errors. The right model is human-in-the-loop: the system does the heavy lifting and surfaces exactly what it is unsure about. Every extracted tag, symbol, and connection carries a confidence score. Anything below threshold is routed to a reviewer in a verification interface that shows the extraction overlaid on the original drawing, so a check takes seconds rather than a re-draw.",
      },
      {
        type: "p",
        text: "This matters for more than accuracy. In regulated environments the audit trail is the deliverable. You need to show who verified which element, against which source revision, and when. A verification step that captures that provenance turns digitization output from a best-effort dataset into an audit-ready record.",
      },
      {
        type: "quote",
        text: "The goal is not to remove the engineer. It is to spend the engineer's time only where judgment is actually required.",
      },
      {
        type: "h2",
        text: "Insist on lossless Smart Drawings",
      },
      {
        type: "p",
        text: "A common failure is digitization that throws away the drawing to keep the data. You extract a tag list and lose the visual context an engineer needs to trust it. The better output is a Smart Drawing: the original drawing preserved, with every symbol, tag, line, and annotation now a queryable object linked to its coordinates on the sheet. You can still read it as a P&ID, and you can also ask it questions.",
      },
      {
        type: "p",
        text: "Lossless matters because the drawing is legal and operational evidence. A Smart Drawing keeps the source intact for audit while exposing structure for search and reasoning. It is the artifact that lets an engineer click a valve on the P&ID and see its datasheet, its work-order history, and every other sheet it appears on.",
      },
      {
        type: "h2",
        text: "Feed the graph, not a spreadsheet",
      },
      {
        type: "p",
        text: "Extraction that ends in a CSV has stopped one step short. The value is in the connections: this instrument sits on this line, this line runs between these two vessels, this tag references this datasheet. Digitization output should land as nodes and edges in an asset knowledge graph, so the drawing becomes part of a model you can traverse rather than a file you have to open.",
      },
      {
        type: "p",
        text: "That connectivity is what turns digitization from a documentation exercise into a data foundation. Once P&IDs, datasheets, and records share one graph, a Management of Change package or a reliability review can be assembled by query instead of by manual hunting.",
      },
      {
        type: "h2",
        text: "Engineer for throughput",
      },
      {
        type: "p",
        text: "A pilot that digitizes ten drawings proves nothing about a backlog of forty thousand. Throughput is a real engineering constraint, and it is where the economics live. A pipeline that batches ingestion, parallelizes recognition, and concentrates human effort on low-confidence elements changes the unit cost of digitization entirely.",
      },
      {
        type: "p",
        text: "In practice, operators running this approach report roughly 70% faster digitization and around 50% lower cost per drawing compared with manual redrawing, while improving consistency because the same rules are applied to every sheet. The faster and cheaper the pipeline, the more of the estate you can afford to digitize, and the more complete the graph that every downstream workflow depends on.",
      },
    ],
  },
  {
    slug: "changeiq-40-percent-moc",
    title: "ChangeIQ cuts Management of Change prep by 40%+",
    excerpt:
      "Management of Change is where good asset data pays off. ChangeIQ auto-assembles MoC packages from the live graph, routes risk to the right reviewers, and keeps a complete audit trail, cutting prep time by more than 40%.",
    category: "Product",
    author: { name: "Marcus Reyes", role: "Director of Product Management" },
    datePublished: "2026-04-22",
    readingMinutes: 6,
    body: [
      {
        type: "p",
        text: "Today we are announcing ChangeIQ, an application that automates the slowest part of Management of Change: assembling the package. Built on the Plant360 asset knowledge graph, ChangeIQ turns MoC preparation from a multi-day document hunt into a reviewed, auditable workflow that starts with the assets themselves. Early customers are seeing more than a 40% reduction in preparation time.",
      },
      {
        type: "h2",
        text: "The Management of Change problem",
      },
      {
        type: "p",
        text: "Every safe change to a process plant runs through Management of Change, and every MoC starts with the same grind. An engineer identifies the affected equipment, then goes hunting: which P&IDs show this line, which datasheets apply, which procedures reference this tag, what interlocks and relief cases are in scope, and what past changes touched the same assets. The information exists, but it is scattered across document management, the EAM, and people's memory. Assembling a complete package can take days, and an incomplete one is a safety and compliance risk.",
      },
      {
        type: "p",
        text: "The cost is not only time. Because assembly is manual, coverage depends on who does it. An experienced engineer finds the obscure interlock; a new one may not. That variability is exactly what a formal MoC process is supposed to remove.",
      },
      {
        type: "h2",
        text: "Auto-assembled packages from the live graph",
      },
      {
        type: "p",
        text: "ChangeIQ starts from the asset, not from a blank template. Point it at the equipment or line you intend to change, and it traverses the graph to pull everything connected to it into a draft package.",
      },
      {
        type: "ul",
        items: [
          "Every P&ID and Smart Drawing the affected tags appear on, at the current revision.",
          "Linked datasheets, specifications, and design conditions for the equipment in scope.",
          "Related procedures, interlocks, relief cases, and prior changes that reference the same assets.",
          "Open and historical work orders from the connected EAM, so maintenance context is in the package from the start.",
        ],
      },
      {
        type: "p",
        text: "Because the graph is the same system of record engineering maintains, the package reflects the current state of the plant rather than a stale export. The engineer reviews and edits a draft instead of building one from nothing, which is where the bulk of the time saving comes from.",
      },
      {
        type: "h2",
        text: "Risk routing to the right reviewers",
      },
      {
        type: "p",
        text: "A complete package is only useful if the right people review the right parts of it. ChangeIQ scores the change against the assets and documents it touches and routes review accordingly. A modification that affects a relief case or a safety instrumented function is flagged and sent to process safety; a change confined to a non-critical utility line follows a lighter path. Reviewers see the specific graph context behind each item, so an approval is grounded in evidence rather than a signature on a summary.",
      },
      {
        type: "quote",
        text: "The package should know what it touches. When the assembly is driven by the graph, risk routing stops being a manual judgment call and becomes a property of the change itself.",
      },
      {
        type: "h2",
        text: "A complete audit trail",
      },
      {
        type: "p",
        text: "Every action in ChangeIQ is recorded against the graph: what was pulled into the package, which revision each document was at, who reviewed and approved each element, and how the change moved through its stages. When an auditor or an incident investigation asks why a change was considered safe, the answer is a traceable record rather than a reconstruction from email. Provenance is captured as the work happens, not assembled afterward.",
      },
      {
        type: "h2",
        text: "The result",
      },
      {
        type: "p",
        text: "Across early deployments, ChangeIQ is cutting MoC preparation time by more than 40%, while making coverage consistent regardless of who runs the change. Engineers spend their time on judgment, not on hunting for documents. Process safety reviews the changes that actually carry risk. And the audit trail is complete by construction. ChangeIQ is available now on the Plant360 platform for teams whose asset data already lives in the graph, and as part of a digitization-to-agent rollout for teams starting from scanned drawings.",
      },
    ],
  },
];

/** Look up a single post by slug. Returns undefined when not found. */
export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** Derived, de-duplicated list of categories in first-seen order. */
export const categories: string[] = Array.from(new Set(posts.map((p) => p.category)));
