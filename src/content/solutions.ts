/**
 * Solutions content. Each solution is framed around the customer's pain point
 * first, then the thrust of the message, then how Plant360's data foundation
 * plus the velocity of AI agents resolves it. Copy is genuinely distinct per
 * solution and every claim is paired with a number or a mechanism. No em
 * dashes anywhere. No AI hype words.
 */

export type SolutionCapability = { title: string; body: string };
export type SolutionFaq = { question: string; answer: string };
export type StackMap = { layer: string; how: string };
export type SolutionOutcome = { value: string; label: string };

export type Solution = {
  slug: string;
  name: string;
  eyebrow: string;
  /** Nav/hero one-line value prop, accented in the hero title. */
  valueProp: string;
  /** 40 to 60 word AEO direct-answer paragraph. */
  answer: string;
  /** Opening line of the problem section: names the pain in one or two sentences. */
  problemLede: string;
  /** 4 concrete pain points, each with a number or a mechanism. */
  painPoints: string[];
  /** The single thrust of the message: what Plant360 actually asserts in reply. */
  messageThrust: string;
  /** How Convert / UniGraph / AI360 / Apply map to this solution. */
  stackMapping: StackMap[];
  capabilities: SolutionCapability[];
  outcomes: SolutionOutcome[];
  /** Realistic but generic mini case story. CMS placeholder. */
  caseNarrative: string;
  faqs: SolutionFaq[];
  seo: { title: string; description: string };
};

export const solutions: Solution[] = [
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    eyebrow: "Solutions · Digital Transformation",
    valueProp: "Move from document-driven workflows to data-driven, AI-first operations.",
    answer:
      "Industrial digital transformation is the shift from document-driven plant operations to data-driven, AI-first ones. Plant360 makes it concrete: it digitizes your drawings, unifies them into a live asset graph, and puts working AI agents on top, so transformation delivers measurable results instead of another stalled data program.",
    problemLede:
      "Transformation programs stall because there is no trusted data foundation underneath them. Pilots look good in a demo and then die at the proof-of-concept stage, because the data needed to run them at scale does not exist in a usable form.",
    painPoints: [
      "AI pilots stall at proof of concept because there is no trusted data to run them on. Engineers still open scanned PDFs to answer basic asset questions.",
      "Roughly 30% of a senior engineer's day goes to finding and reconciling data, so the people expected to drive transformation are stuck feeding it.",
      "Every new initiative rebuilds its own dataset from CAD, EAM, CMMS, and document stores, so cost and timeline reset to zero each time.",
      "Leadership is asked to show AI outcomes on a timeline of quarters while data-cleanup projects run for years.",
    ],
    messageThrust:
      "A live engineering data foundation is the prerequisite for digital transformation. Once drawings and records are digitized and connected in one graph, that same foundation gives you the velocity to ship new AI agents continuously, in days rather than years.",
    stackMapping: [
      {
        layer: "Convert · Digitize",
        how: "Turn the drawing and datasheet backlog into structured, audit-ready data, so transformation starts from real information instead of scanned paper.",
      },
      {
        layer: "UniGraph · Structure",
        how: "Unify that data with your existing EAM and CMMS into one living asset graph that becomes the system of record for the whole program.",
      },
      {
        layer: "AI360 · Build",
        how: "Give engineering and digital teams a drag-and-drop way to ship agents in days from pre-built templates, so transformation shows results in quarters, not years.",
      },
      {
        layer: "Apply · Production apps",
        how: "Put apps and agents to work on real plant workflows, so efficiency gains are measured against day-to-day work, not promised in a slide.",
      },
    ],
    capabilities: [
      {
        title: "A staged roadmap",
        body: "Start with digitization or the graph, prove value, then expand. Each layer is useful on its own, so you are never forced into a big-bang rollout.",
      },
      {
        title: "One data foundation",
        body: "Every downstream initiative, from reliability to operator training, draws on the same trusted asset graph instead of a new data silo per project.",
      },
      {
        title: "Velocity to ship agents",
        body: "Because agents ship in days on data you already digitized, transformation produces measurable wins early and keeps producing them as new use cases arrive.",
      },
      {
        title: "No rip and replace",
        body: "Plant360 unifies the CAD, EAM, CMMS, and document systems you already run through an open API, so existing investments keep working.",
      },
      {
        title: "Governance built in",
        body: "Human-in-the-loop review, full audit trails, and ISO 27001 certification keep transformation defensible for safety and compliance stakeholders.",
      },
      {
        title: "Vendor independence",
        body: "Open API and no lock-in mean you own the data layer, so the platform adapts to your strategy rather than dictating it.",
      },
    ],
    outcomes: [
      { value: "50%+", label: "Operational efficiency gained end to end" },
      { value: "70% faster", label: "Drawing digitization at 50% lower cost" },
      { value: "Days", label: "From idea to a deployed agent, not months" },
      { value: "80% less", label: "Time engineers spend hunting for asset data" },
    ],
    caseNarrative:
      "A multi-site processing operator began with a single plant's drawing backlog, digitizing tens of thousands of P&IDs into a unified graph within months. With that foundation in place, its engineering team shipped its first Management of Change and reliability agents in weeks, and used the early efficiency gains to fund a rollout across the rest of the fleet.",
    faqs: [
      {
        question: "What is industrial digital transformation?",
        answer:
          "It is the move from document-driven plant operations to data-driven, AI-first ones. In practice it means turning drawings and records into structured, connected data and then applying AI agents to real work, so operations get measurably faster and safer.",
      },
      {
        question: "Why do industrial transformation programs stall?",
        answer:
          "Most stall because the underlying data stays trapped in scanned drawings and disconnected systems. Without a trusted, connected data foundation, AI pilots cannot scale past proof of concept.",
      },
      {
        question: "Where should we start?",
        answer:
          "Start with the layer that hurts most: a drawing backlog points to Convert, dirty CMMS data points to UniGraph. Each layer is useful on its own, so you prove value before expanding, with no big-bang rollout.",
      },
      {
        question: "Do we have to replace our existing systems?",
        answer:
          "No. Plant360 unifies data from the CAD, EAM, CMMS, and document systems you already run through an open API, so existing investments keep working while the asset graph sits on top.",
      },
      {
        question: "How quickly can we show results?",
        answer:
          "Because agents deploy in days on data you have already digitized, most programs show measurable efficiency gains within the first quarter rather than after a multi-year build.",
      },
    ],
    seo: {
      title: "Industrial Digital Transformation",
      description:
        "Move from document-driven workflows to data-driven, AI-first operations. Digitize, unify, and deploy agents for 50%+ efficiency end to end.",
    },
  },
  {
    slug: "digital-twin",
    name: "Digital Twin Implementation",
    eyebrow: "Solutions · Digital Twin",
    valueProp: "Feed digital twins and operator training simulators with connected asset data.",
    answer:
      "A digital twin is a live, data-connected model of a physical plant. Most twins underperform because the asset data feeding them is incomplete or stale. Plant360 supplies the foundation: digitized drawings and a continuously synced asset graph, so twins and operator training simulators reflect the plant as it actually is.",
    problemLede:
      "Digital twins and operator training simulators need structured data pulled from drawings, datasheets, and P&IDs. Hand-building that model is slow, and it drifts out of date the moment the plant changes.",
    painPoints: [
      "Most of a twin or simulator budget is spent reconciling P&IDs, datasheets, and tag lists by hand before any modeling begins.",
      "Hand-built models drift the moment the plant changes, so the twin describes a plant that no longer exists and operators stop trusting it.",
      "Connectivity and equipment hierarchy live inside the drawings, so a model built from a picture of a P&ID cannot simulate flow.",
      "Each simulator is built from a fresh manual data pull, so the effort never compounds across units or sites.",
    ],
    messageThrust:
      "Feed twins and simulators from the same connected asset data UniGraph already holds. Structured drawing and datasheet data cuts implementation time by 30% or more, and continuous sync keeps the model current instead of drifting away from the real plant.",
    stackMapping: [
      {
        layer: "Convert · Digitize",
        how: "Extract tags, symbols, line numbers, and connectivity from CAD and scanned P&IDs, so the twin is built on structured drawing data instead of manual redrawing.",
      },
      {
        layer: "UniGraph · Structure",
        how: "Resolve equipment hierarchies and link datasheets into one asset graph, giving the twin a single connected source for every asset it represents.",
      },
      {
        layer: "AI360 · Build",
        how: "Build agents that generate training scenarios and answer operator questions grounded in the same live data the twin uses.",
      },
      {
        layer: "Apply · Continuous sync",
        how: "Keep the twin and simulator current as drawings and records change, so the model never drifts away from the real plant.",
      },
    ],
    capabilities: [
      {
        title: "Connectivity-aware drawing data",
        body: "Convert extracts resolved line and equipment connectivity, the relationships a twin needs to model flow, not just a picture of the P&ID.",
      },
      {
        title: "One source for every asset",
        body: "Datasheets, tags, and equipment specs are linked in the graph, so the twin pulls consistent parameters instead of reconciled spreadsheets.",
      },
      {
        title: "Continuously synced model",
        body: "As the plant changes through Management of Change, the underlying graph updates, so the twin and simulator stay faithful to reality.",
      },
      {
        title: "Grounded training scenarios",
        body: "Operator training simulator content is built on verified asset data, so scenarios reflect the plant operators actually work in.",
      },
      {
        title: "30%+ faster implementation",
        body: "Because the data foundation is digitized and structured up front, twin projects skip the manual reconciliation that usually dominates the schedule.",
      },
      {
        title: "Open integration",
        body: "An open API feeds twin and simulation software with structured asset data, so Plant360 complements your existing twin platform rather than replacing it.",
      },
    ],
    outcomes: [
      { value: "30%+", label: "Faster twin and simulator implementation" },
      { value: "80% less", label: "Time spent hunting and reconciling asset data" },
      { value: "10x", label: "Faster retrieval of connected asset context" },
      { value: "70% faster", label: "Digitization of the drawings twins depend on" },
    ],
    caseNarrative:
      "A Houston oil and gas major used Convert and UniGraph as the data foundation for a Digital Twin and Operator AI Co-Pilot, reaching more than 60% efficiency. By digitizing P&IDs and datasheets into a synced asset graph first, the team cut the data-preparation phase sharply and gave simulator builders one trusted source, so training content stayed accurate even as the design changed.",
    faqs: [
      {
        question: "What data does a digital twin need to be accurate?",
        answer:
          "It needs structured, connected asset data: resolved P&ID connectivity, equipment hierarchies, and current datasheet parameters. Plant360 digitizes drawings and unifies them into a live asset graph so the twin models the plant as it truly is.",
      },
      {
        question: "Why do digital twin projects run over budget?",
        answer:
          "Most of the effort goes into manually reconciling drawings, datasheets, and tag lists before modeling can begin. Digitizing and structuring that data first removes the largest and most unpredictable part of the work.",
      },
      {
        question: "How much faster is twin implementation with Plant360?",
        answer:
          "Because the connected asset data is already digitized and structured, teams skip the manual reconciliation phase that dominates most schedules, cutting implementation time by 30% or more.",
      },
      {
        question: "How do you keep a digital twin from drifting out of sync?",
        answer:
          "Plant360 keeps the underlying asset graph continuously synced as drawings and records change, so the twin and simulator reflect the current plant instead of a stale snapshot.",
      },
      {
        question: "Can Plant360 feed our existing operator training simulator?",
        answer:
          "Yes. Structured asset data is exposed through an open API, so it feeds your existing twin or simulator software rather than requiring a replacement.",
      },
    ],
    seo: {
      title: "Digital Twin Implementation",
      description:
        "Feed digital twins and operator training simulators with connected, always-synced asset data. 30%+ faster implementation, 80% less data hunting.",
    },
  },
  {
    slug: "digitization",
    name: "Digitization",
    eyebrow: "Solutions · Digitization",
    valueProp: "Engineering drawing and P&ID digitization with human-in-the-loop AI.",
    answer:
      "Engineering drawing digitization converts CAD, DWG, and scanned PDF drawings into structured, searchable data. Plant360 does this with human-in-the-loop AI that extracts every tag, symbol, and connection losslessly and makes it audit-ready, digitizing P&IDs and other drawings 70% faster at 50% lower cost than manual redrawing.",
    problemLede:
      "Decades of engineering knowledge sit locked in scanned PDFs, legacy CAD, and marked-up prints. Redrawing them by hand is slow, costly, and lossy, and the backlog never clears.",
    painPoints: [
      "Decades of plant knowledge sit locked in scanned P&IDs and marked-up prints that no system can search.",
      "Manual redraw and re-keying run slow and expensive, and human transcription drops tags and connectivity, so the output is lossy.",
      "The backlog never clears: every audit, project, and turnaround restarts with someone digging through paper.",
      "Digitization projects that only produce flat files leave you with searchable PDFs, not data an engineer or an agent can query.",
    ],
    messageThrust:
      "Convert digitizes CAD, DWG, and scanned PDF drawings losslessly with human-in-the-loop AI review, 70% faster at 50% lower cost than manual redraw. Every extraction flows straight into the asset graph, so digitization produces queryable data, not another file store.",
    stackMapping: [
      {
        layer: "Convert · Digitize",
        how: "The core of this solution. Convert reads native CAD and legacy scanned PDFs, extracting tags, symbols, line numbers, and connectivity into lossless Smart Drawings.",
      },
      {
        layer: "UniGraph · Structure",
        how: "Digitized output flows straight into a live asset graph, so drawings become a queryable system of record rather than another file store.",
      },
      {
        layer: "AI360 · Build",
        how: "Once drawings are structured, agents can search, validate, and act on them, turning a digitization project into a platform for automation.",
      },
      {
        layer: "Apply · Downstream use",
        how: "Digitized data powers reliability, Management of Change, and digital twin work, so the digitization investment keeps paying off.",
      },
    ],
    capabilities: [
      {
        title: "Reads scanned and legacy PDFs",
        body: "Not just native CAD. Convert extracts structure from decades-old scanned and hand-marked drawings that lock up most plant knowledge.",
      },
      {
        title: "Human-in-the-loop verification",
        body: "AI proposes and engineers confirm through guided review, so every extraction is reviewable and accuracy is provable rather than black-box.",
      },
      {
        title: "Lossless Smart Drawings",
        body: "Output preserves the original drawing while adding a structured layer: searchable tags, resolved connectivity, and datasheet links.",
      },
      {
        title: "Exports to your standards",
        body: "Outputs to SmartPlant P&ID, Aveva, DEXPI 1.3 and 2.0, and ISO 15926, so digitized drawings drop into the tools and standards you already use.",
      },
      {
        title: "Proven bulk throughput",
        body: "Clear entire drawing registers in weeks, not years. Proven across 83,000+ drawings and 250,000+ datasheets.",
      },
      {
        title: "One pipeline to the graph",
        body: "Digitization is not a dead end. Output feeds UniGraph directly, so structuring is part of the same project, not a second one.",
      },
    ],
    outcomes: [
      { value: "70% faster", label: "Digitization versus manual redrawing" },
      { value: "50% lower", label: "Cost per drawing digitized" },
      { value: "83,000+", label: "Engineering drawings already digitized" },
      { value: "250,000+", label: "Datasheets digitized to date" },
    ],
    caseNarrative:
      "A refinery carrying a multi-year backlog of scanned P&IDs needed them searchable before a major turnaround. Using human-in-the-loop digitization, the team cleared tens of thousands of drawings in a fraction of the expected time and cost, and because the output flowed straight into an asset graph, the same effort produced a searchable system of record the turnaround team relied on.",
    faqs: [
      {
        question: "What is P&ID digitization?",
        answer:
          "It is the process of converting piping and instrumentation diagrams from CAD or scanned PDFs into structured, searchable data: extracted tags, symbols, line numbers, and connectivity that both engineers and software can query.",
      },
      {
        question: "Can you digitize old scanned or hand-marked drawings?",
        answer:
          "Yes. Convert is built for legacy and scanned PDFs, not only native CAD, and uses human-in-the-loop verification to guarantee accuracy on low-quality source drawings.",
      },
      {
        question: "How much faster and cheaper is digitization with Plant360?",
        answer:
          "Roughly 70% faster at about 50% lower cost than manual redrawing, proven across more than 83,000 drawings and 250,000 datasheets.",
      },
      {
        question: "Which output formats do you support?",
        answer:
          "Convert exports to SmartPlant P&ID, Aveva, DEXPI 1.3 and 2.0, and ISO 15926, so digitized drawings drop straight into the engineering tools and standards you already run.",
      },
      {
        question: "What happens to the data after digitization?",
        answer:
          "Digitized output flows directly into the UniGraph asset knowledge graph, so your drawings become a live, queryable system of record instead of another set of files.",
      },
    ],
    seo: {
      title: "Engineering Drawing & P&ID Digitization",
      description:
        "Digitize CAD, DWG, and scanned PDF drawings and P&IDs with human-in-the-loop AI. 70% faster at 50% lower cost, proven across 83,000+ drawings.",
    },
  },
  {
    slug: "reliability-maintenance",
    name: "Reliability and Maintenance",
    eyebrow: "Solutions · Reliability & Maintenance",
    valueProp: "Clean CMMS data and reliability programs grounded in the asset graph.",
    answer:
      "Reliability-centered maintenance uses asset data to decide what maintenance each asset actually needs. It fails when CMMS data is dirty or disconnected. Plant360 grounds reliability work in a clean, connected asset graph, so failure history, drawings, and datasheets line up and AI agents can support RBI, corrosion-loop, and planning decisions engineers trust.",
    problemLede:
      "Reliability programs run on dirty CMMS and EAM data. RBI, RCM, and corrosion-loop analysis are grounded in records that are stale, duplicated, or scattered, so the analysis is only as trustworthy as the worst tag in the set.",
    painPoints: [
      "CMMS and EAM records are full of duplicate, mislabeled, and orphaned tags, so every RBI or RCM analysis starts with cleaning data instead of preventing failure.",
      "Failure history, drawings, and datasheets live in three different systems, so building a corrosion loop means manual cross-referencing.",
      "Reliability decisions rest on stale records, so risk rankings and inspection intervals are only as good as the worst tag in the set.",
      "When the plant changes, records fall out of sync again, so cleanup becomes a recurring cost rather than a one-time fix.",
    ],
    messageThrust:
      "A clean, continuously synced asset data layer resolves duplicate and mislabeled tags across CMMS, drawings, and datasheets, then grounds agents for RBI, corrosion-loop analysis, and maintenance planning in verified data with human-in-the-loop review.",
    stackMapping: [
      {
        layer: "Convert · Digitize",
        how: "Digitize the drawings and datasheets reliability decisions depend on, so equipment specs and connectivity are structured, not buried in PDFs.",
      },
      {
        layer: "UniGraph · Structure",
        how: "Link CMMS records, failure history, drawings, and datasheets into one graph, resolving duplicate and mislabeled tags so CMMS data quality actually improves.",
      },
      {
        layer: "AI360 · Build",
        how: "Build reliability agents that flag data gaps, group assets into corrosion loops, and surface failure patterns grounded in the connected graph.",
      },
      {
        layer: "Apply · Maintenance workflows",
        how: "Feed clean, connected data into maintenance planning, turnaround scope, and permit-to-work, so decisions rest on trusted information.",
      },
    ],
    capabilities: [
      {
        title: "CMMS data cleanup",
        body: "The graph resolves duplicate, mislabeled, and orphaned tags across systems, so your CMMS becomes a reliable source instead of a cleanup project.",
      },
      {
        title: "Connected asset history",
        body: "Failure history, drawings, datasheets, and specs link to each asset, so reliability engineers see the full picture without cross-referencing systems.",
      },
      {
        title: "RBI and corrosion-loop support",
        body: "Group equipment into corrosion loops and inspection circuits on connected data, and run graph algorithms for root-cause analysis, so integrity work starts from structure, not spreadsheets.",
      },
      {
        title: "Grounded reliability agents",
        body: "Agents surface failure patterns and data gaps using verified graph data, with human-in-the-loop review, so recommendations are explainable.",
      },
      {
        title: "Turnaround-ready data",
        body: "Clean, connected asset data makes turnaround scoping and permit-to-work faster and safer, because the information is already trustworthy.",
      },
      {
        title: "Stays in sync",
        body: "As the plant changes, the graph and system of record update together, so reliability data does not drift back into disorder.",
      },
    ],
    outcomes: [
      { value: "80% less", label: "Time hunting for asset history and documents" },
      { value: "10x", label: "Faster retrieval of connected reliability data" },
      { value: "50%+", label: "Efficiency gained across maintenance workflows" },
    ],
    caseNarrative:
      "A reliability team could not trust its CMMS: thousands of duplicate and mislabeled tags made every analysis suspect. After unifying CMMS records, drawings, and datasheets into one asset graph, duplicates were resolved and history was connected to each asset, so engineers could scope inspection circuits in hours instead of days and enter the next turnaround with data they trusted.",
    faqs: [
      {
        question: "How does AI improve reliability-centered maintenance?",
        answer:
          "AI helps only when it runs on clean, connected data. Plant360 grounds reliability agents in a unified asset graph, so they surface failure patterns and data gaps from verified information with human-in-the-loop review.",
      },
      {
        question: "Can Plant360 fix our CMMS data quality?",
        answer:
          "Yes. The asset graph resolves duplicate, mislabeled, and orphaned tags across your CMMS, drawings, and datasheets, and stays synced so data does not drift back out of quality.",
      },
      {
        question: "Can agents support RBI and corrosion-loop analysis?",
        answer:
          "Yes. Once assets are grouped into corrosion loops and inspection circuits on connected data, agents surface failure patterns and data gaps for RBI and RCM, with human-in-the-loop review so recommendations stay explainable.",
      },
      {
        question: "Does this replace our CMMS or EAM?",
        answer:
          "No. Plant360 unifies data from the CMMS and EAM you already run through an open API and layers a connected graph on top, keeping those systems as inputs.",
      },
      {
        question: "How does connected data help turnarounds?",
        answer:
          "When asset history, drawings, and datasheets are linked and trustworthy, scoping, corrosion loop analysis, and permit-to-work move faster and with less risk, because the information is ready before planning starts.",
      },
    ],
    seo: {
      title: "Reliability-Centered Maintenance AI",
      description:
        "Clean CMMS data and reliability programs grounded in a connected asset graph, with agents for RBI and corrosion loops. 80% less data hunting.",
    },
  },
  {
    slug: "operational-efficiency",
    name: "Operational Efficiency",
    eyebrow: "Solutions · Operational Efficiency",
    valueProp: "Automate document-heavy plant workflows across engineering, ops, and safety.",
    answer:
      "Plant operational efficiency means getting more done with the same team by removing manual, document-heavy work. Plant360 targets the workflows that consume engineering, operations, and safety time, from Management of Change to permit-to-work and HAZOP prep, and automates them with agents grounded in your asset graph, delivering more than 50% efficiency end to end.",
    problemLede:
      "Document-heavy manual workflows dominate the plant: permit-to-work and control of work, turnaround and isolation planning, maintenance scheduling, and safety studies. About 30% of a senior engineer's day goes to finding and reconciling data, and review cycles run 3 to 4 months.",
    painPoints: [
      "About 30% of a senior engineer's day goes to finding and reconciling data, at roughly $81/hr, or more than $169K per engineer per year.",
      "A HAZOP review cycle runs 3 to 4 months, most of it spent assembling and cross-checking documents rather than analyzing risk.",
      "Control of work, permit-to-work, turnaround, and isolation planning all gather the same scattered information by hand, again and again.",
      "As experienced staff retire, the manual workflows they hold in their heads become both a cost and a safety risk.",
    ],
    messageThrust:
      "Automate the document-heavy prep across engineering, operations, and safety with agents grounded in the asset graph. Packages assemble in seconds instead of days, for 50%+ efficiency end to end, with every output routed for human review and a full audit trail.",
    stackMapping: [
      {
        layer: "Convert · Digitize",
        how: "Turn the drawings and datasheets these workflows depend on into structured data, so packages can be assembled automatically instead of by hand.",
      },
      {
        layer: "UniGraph · Structure",
        how: "Connect that data into one graph, so an agent can pull every affected drawing, tag, and datasheet for a task in seconds.",
      },
      {
        layer: "AI360 · Build",
        how: "Compose agents that automate document-heavy prep across engineering, ops, and safety, shipping in days from use-case templates.",
      },
      {
        layer: "Apply · ChangeIQ and agents",
        how: "Run production apps like ChangeIQ that cut Management of Change prep by more than 40%, plus agents for permit-to-work, HAZOP prep, and asset lookups.",
      },
    ],
    capabilities: [
      {
        title: "Automated package assembly",
        body: "Agents pull the affected drawings, tags, and datasheets for a task straight from the graph, replacing hours of manual gathering.",
      },
      {
        title: "MoC acceleration",
        body: "ChangeIQ auto-assembles Management of Change packages and routes reviews, cutting MoC prep time by more than 40%.",
      },
      {
        title: "Faster control of work",
        body: "Permit-to-work, turnaround, and isolation planning start from connected asset data, so planners spend time on the work, not on document collection.",
      },
      {
        title: "Instant asset answers",
        body: "Engineers ask a question and get a grounded answer from the graph, instead of spending most of the effort hunting through documents.",
      },
      {
        title: "Human-in-the-loop control",
        body: "Every automated output is routed for review with a full audit trail, so efficiency never comes at the expense of governance.",
      },
      {
        title: "Reusable across the plant",
        body: "Agents built once are reused across sites and workflows on the same graph, so efficiency compounds instead of being rebuilt each time.",
      },
    ],
    outcomes: [
      { value: "50%+", label: "Operational efficiency gained end to end" },
      { value: "40%+", label: "Less Management of Change prep time" },
      { value: "80% less", label: "Time spent hunting for documents" },
      { value: "Days", label: "To deploy a new workflow agent" },
    ],
    caseNarrative:
      "An operations team was losing senior-engineer hours to Management of Change paperwork and repetitive asset lookups. By deploying agents on its asset graph, the team let ChangeIQ auto-assemble change packages and let a lookup agent answer asset questions instantly, freeing engineers for judgment work and measurably reducing the time each change and study took to prepare.",
    faqs: [
      {
        question: "How does AI improve plant operational efficiency?",
        answer:
          "By automating the document-heavy prep work, such as Management of Change, permit-to-work, and asset lookups, that consumes skilled engineers' time. Plant360 agents run on your asset graph, so they assemble packages and answer questions from verified data.",
      },
      {
        question: "Which workflows can Plant360 automate?",
        answer:
          "Document-heavy workflows across engineering, operations, and safety, including Management of Change, permit-to-work and control of work, turnaround and isolation planning, HAZOP and LOPA prep, and asset data lookups.",
      },
      {
        question: "What does a document-heavy workflow cost us today?",
        answer:
          "A process engineer costs about $81/hr, or more than $169K a year, and spends roughly 30% of the day finding and reconciling data, while a single HAZOP cycle runs 3 to 4 months. Automating that prep returns most of it.",
      },
      {
        question: "How much time can we save?",
        answer:
          "Plant360 targets 50%+ efficiency end to end, with ChangeIQ alone cutting Management of Change prep by more than 40% and engineers spending about 80% less time hunting for documents.",
      },
      {
        question: "Do automated workflows stay auditable?",
        answer:
          "Yes. Every agent output is routed for human review with a complete audit trail, so faster workflows remain fully defensible for safety and compliance.",
      },
    ],
    seo: {
      title: "Plant Operational Efficiency AI",
      description:
        "Automate document-heavy plant workflows across engineering, ops, and safety with AI agents on your asset graph. 50%+ efficiency, 40%+ less MoC prep.",
    },
  },
  {
    slug: "asset-data-platform",
    name: "Asset Data Platform",
    eyebrow: "Solutions · Asset Data Platform",
    valueProp: "One industrial asset data platform: system of record plus knowledge graph.",
    answer:
      "An industrial asset data platform is the single, trusted layer that holds and connects all plant asset data. Plant360 provides it: digitized drawings and datasheets unified with your existing systems into a live asset knowledge graph that serves as both the system of record and the grounding layer for every AI agent.",
    problemLede:
      "Teams are forced to choose between a system of record, built for the record and blind to AI, and a knowledge graph, built for AI and blind to the record. The gap gets patched with point tools, which duplicates data, creates new silos, and forces constant manual reconciliation.",
    painPoints: [
      "A system of record is built for the record and blind to AI; a knowledge graph is built for AI and blind to the record, so neither is enough on its own.",
      "Teams patch the gap with point tools, which duplicates data and creates yet another silo to reconcile.",
      "The two representations drift apart, so constant manual reconciliation is the only thing keeping them aligned.",
      "Every project keeps its own copy of asset data, the copies disagree, and no downstream system, human or AI, can rely on any of them.",
    ],
    messageThrust:
      "One platform produces both the system of record and the asset knowledge graph from a single pipeline, always in sync. An open API with no lock-in feeds every downstream system, so you stop choosing between the record and the AI.",
    stackMapping: [
      {
        layer: "Convert · Digitize",
        how: "Feed the platform with structured data by digitizing drawings and datasheets, so even legacy paper becomes part of the connected asset model.",
      },
      {
        layer: "UniGraph · Structure",
        how: "The heart of this solution. UniGraph produces one living asset model that is both the system of record and the AI grounding layer, from a single pipeline.",
      },
      {
        layer: "AI360 · Build",
        how: "Any team can build agents directly on the platform, so the asset data layer immediately powers automation instead of just storing data.",
      },
      {
        layer: "Apply · Open API",
        how: "An open API serves every downstream system and app, so the platform feeds reliability, MoC, twins, and analytics without lock-in.",
      },
    ],
    capabilities: [
      {
        title: "Record and graph from one pipeline",
        body: "A single pipeline produces both the authoritative system of record and the queryable knowledge graph, so the two never drift apart or need reconciling.",
      },
      {
        title: "Living knowledge graph",
        body: "Every tag, equipment item, line, and document is linked into one queryable model at TB to PB scale, so the plant can be queried as a connected whole.",
      },
      {
        title: "Unifies existing systems",
        body: "Pulls from the CAD, EAM, CMMS, and document systems you already run, with bring-your-own-taxonomy, so the platform is built on your data, not a rip-and-replace.",
      },
      {
        title: "Continuous sync",
        body: "The graph and system of record stay current together as the plant changes, so the platform never drifts out of date.",
      },
      {
        title: "Grounding layer for AI",
        body: "The structured graph is what agents reason on, with graph algorithms for RCA and analytics, so automation across the plant is accurate and explainable.",
      },
      {
        title: "Open and owned",
        body: "REST APIs and no lock-in mean you own the data layer and can feed any downstream system, now and in the future.",
      },
    ],
    outcomes: [
      { value: "10x", label: "Faster retrieval of connected asset data" },
      { value: "80% less", label: "Time engineers spend hunting for information" },
      { value: "One", label: "System of record and knowledge graph combined" },
      { value: "ISO 27001", label: "Certified, with open API and no lock-in" },
    ],
    caseNarrative:
      "An operator with asset data spread across four systems could never agree on a single source of truth, so each project rebuilt its own data set. By unifying those systems into one continuously synced asset graph, the organization gave every team, and every AI agent, the same trusted foundation, and new initiatives started from connected data instead of months of groundwork.",
    faqs: [
      {
        question: "What is an industrial asset data platform?",
        answer:
          "It is the single, trusted layer that holds and connects all of a plant's asset data. Plant360 unifies digitized drawings, datasheets, and existing system data into one live asset knowledge graph that serves as both system of record and AI grounding layer.",
      },
      {
        question: "What is an asset knowledge graph?",
        answer:
          "A connected model of every asset, tag, line, and document in a plant and the relationships between them, so engineers and AI agents can query the plant as one structured whole instead of searching scattered files.",
      },
      {
        question: "Why not just buy a system of record and a graph separately?",
        answer:
          "Running both means reconciling two representations of the same assets by hand and watching them drift apart. Plant360 generates both from one pipeline, so they are always in sync, with no duplicated data or extra silo.",
      },
      {
        question: "Does the platform replace our existing systems?",
        answer:
          "No. It unifies data from the CAD, EAM, CMMS, and document systems you already run through an open API and keeps them as inputs, layering one connected, synced data model on top.",
      },
      {
        question: "Is the platform secure and open?",
        answer:
          "Yes. Plant360 is ISO 27001 certified and exposes an open API with no lock-in, so you own the data layer and can feed any downstream system.",
      },
    ],
    seo: {
      title: "Industrial Asset Data Platform",
      description:
        "One industrial asset data platform producing the system of record and knowledge graph from one pipeline. 10x retrieval, 80% less hunting, no lock-in.",
    },
  },
];

export function getSolution(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}
