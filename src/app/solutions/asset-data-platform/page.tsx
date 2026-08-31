import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Close,
  CheckmarkFilled,
  Growth,
  Renew,
  Idea,
  SettingsAdjust,
  type CarbonIconType,
} from "@carbon/icons-react";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { SectionHeading, RelatedLinks } from "@/components/page/blocks";
import { Faq } from "@/components/page/Faq";
import { CtaButton } from "@/components/ui/CtaButton";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import styles from "./asset-data-platform.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Asset Data Platform | Plant360.AI",
  description:
    "Plant360 digitizes your engineering drawings, connects the systems you already run, and produces both the system of record and a live asset knowledge graph from a single pipeline. One foundation, kept continuously in sync, with no data format lock-in.",
  path: "/solutions/asset-data-platform",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
  { name: "Asset Data Platform", path: "/solutions/asset-data-platform" },
];

const stackRows: { kind: string; name: string; note: string; accent?: boolean }[] = [
  { kind: "01 · Ingest", name: "Sources", note: "CAD, SmartPlant, EAM/CMMS, historians" },
  { kind: "02 · Pipeline", name: "Convert + UniGraph", note: "One pipeline, both outputs" },
  { kind: "03 · Output A", name: "System of record", note: "Authoritative, audit-ready" },
  { kind: "04 · Output B", name: "Asset knowledge graph", note: "Queryable AI grounding layer", accent: true },
];

const heroStats = [
  { num: "10x", label: "Faster retrieval of connected asset data" },
  { num: "80%", label: "Less time engineers spend hunting for data" },
  { num: "One", label: "Source of truth, record and graph combined" },
  { num: "TB to PB", label: "Proven at whole-plant data scale" },
];

const problems = [
  {
    n: "01",
    title: "Knowledge locked in documents",
    text: "The plant's most valuable data is trapped in CAD files, legacy scans, and PDF drawings that no system can query.",
  },
  {
    n: "02",
    title: "Every system speaks its own format",
    text: "Design, planning, maintenance, and operational tools each hold a partial copy in an incompatible format.",
  },
  {
    n: "03",
    title: "Every project rebuilds its own copy",
    text: "With no single source of truth, each initiative reconstructs asset data from scratch, and the copies disagree.",
  },
  {
    n: "04",
    title: "The data drifts out of date",
    text: "The moment the plant changes, records fall behind, and no downstream system or AI agent can be trusted.",
  },
];

const pipelineSteps = [
  {
    n: "01",
    kind: "Digitize",
    title: "Convert",
    text: "CAD, DWG, and even scanned PDF drawings become structured, audit-ready Smart Drawings.",
  },
  {
    n: "02",
    kind: "Structure",
    title: "UniGraph",
    text: "Every tag, asset, and document connected into one living, queryable graph, kept in sync.",
  },
  {
    n: "03",
    kind: "Build",
    title: "AI360",
    text: "Build and deploy industrial AI agents directly on your own graph, in days not months.",
  },
  {
    n: "04",
    kind: "Apply",
    title: "Open API",
    text: "Feed reliability, MoC, digital twins, and analytics from one owned data layer, without lock-in.",
    dark: true,
  },
];

const pillars = [
  {
    n: "01",
    tag: "Convert · Digitize",
    heading: "Brownfield digitization that pulls decades of drawings into the data layer",
    body: "Most plant knowledge is locked in legacy and scanned drawings that no system can read. Purpose-built computer vision and multi-modal AI extract every tag, symbol, line number, and relationship, not only from native CAD but from decades-old scanned PDFs, with human-in-the-loop review so accuracy stays audit-ready.",
    does: [
      "Reads native CAD and DWG plus low-quality scanned and hand-marked PDFs.",
      "Lossless capture of attributes, connectivity, and links to datasheets.",
      "Guided, guardrailed review, so the models learn from every correction.",
    ],
    stat: "83,000+ drawings digitized · 70% faster at 50% lower cost",
    mock: {
      head: "Digitization · scanned to structured",
      tag: "P&ID-12-104",
      rows: [
        { label: "PSV-104A-2 extracted and set 285 psig", status: "Captured" },
        { label: "Line 6\"-P-104 connectivity resolved", status: "Captured" },
        { label: "Material spec A106 Gr. B linked", status: "Captured" },
      ],
      foot: "Every tag captured losslessly · Human verified",
    },
  },
  {
    n: "02",
    tag: "UniGraph · Structure",
    heading: "One comprehensive knowledge graph across drawings, datasheets, and operational documents",
    reversed: true,
    body: "UniGraph goes beyond P&IDs. It understands datasheets, specifications, process documents, and operational records, and links every tag, equipment item, line, and document into a single queryable model. The whole plant can be reasoned about as a connected system, not searched as scattered files.",
    does: [
      "Understands drawings, datasheets, process and operational documents alike.",
      "Tags, equipment, and hierarchies resolved, de-duplicated, and linked.",
      "Graph algorithms for traversal, root-cause analysis, and reporting.",
    ],
    stat: "10x faster retrieval · 80% less manual hunting",
    mock: {
      head: "Asset knowledge graph",
      tag: "Reactor R-101",
      rows: [
        { label: "Linked to P&ID-12-104", status: "Connected" },
        { label: "Linked to PSV-104A-2 datasheet", status: "Connected" },
        { label: "Linked to line 6\"-P-104", status: "Connected" },
      ],
      foot: "Tags · equipment · lines · documents · 1 connected model",
    },
  },
  {
    n: "03",
    tag: "Open platform",
    heading: "Open standards, an open API, and hundreds of integrations. You own the data layer",
    body: "There is no data format lock-in. Plant360 ingests from and syncs with the hundreds of design, planning, operational, and specialized systems you already run, and publishes to open standards. Your existing tools stay as inputs, and the connected data layer you build remains yours.",
    does: [
      "Standards-native output: DEXPI 1.3 and 2.0, ISO 15926, SmartPlant, Aveva.",
      "Connectors to pull data from CAD, EAM, CMMS, historians, and document systems.",
      "REST API and bring-your-own-taxonomy, so the platform adapts to your data.",
    ],
    stat: "Vendor-neutral · no data format lock-in",
    mock: {
      head: "Integrations · ingest and sync",
      tag: "100s of systems",
      rows: [
        { label: "Design & CAD · AutoCAD, SmartPlant, Aveva", status: "Synced" },
        { label: "EAM & CMMS · SAP, Maximo, Hexagon", status: "Synced" },
        { label: "Standards · DEXPI, ISO 15926, REST API", status: "Open" },
      ],
      foot: "Representative systems · you own the data layer",
    },
  },
];

const capabilities: { Icon: CarbonIconType; title: string; text: string }[] = [
  {
    Icon: Growth,
    title: "Built for scale",
    text: "A distributed graph engine proven at terabyte to petabyte scale, with best-in-class traversal.",
  },
  {
    Icon: Renew,
    title: "Continuous sync",
    text: "The graph and system of record stay current together as the plant changes. No drift, no stale copies.",
  },
  {
    Icon: Idea,
    title: "Grounding layer for AI",
    text: "The structured graph is what agents reason on, making automation accurate, explainable, and grounded.",
  },
  {
    Icon: SettingsAdjust,
    title: "Bring your own taxonomy",
    text: "The graph adapts to how your teams organize assets, which cuts integration time and keeps it intuitive.",
  },
];

const howSteps = [
  {
    n: "01",
    title: "Connect sources",
    text: "Ingest digitized drawings from Convert plus data from the systems of record you already run.",
  },
  {
    n: "02",
    title: "Resolve",
    text: "Tags, equipment, and hierarchies are matched, de-duplicated, and linked to your taxonomy.",
  },
  {
    n: "03",
    title: "Sync",
    text: "The graph and system of record are kept continuously current as the plant changes.",
  },
  {
    n: "04",
    title: "Serve",
    text: "Engineers and agents query one connected model through the app, graph algorithms, and open API.",
  },
];

const audience = [
  {
    title: "Reliability engineers",
    text: "Find every document and relationship for an asset in seconds, grounded in the graph.",
  },
  {
    title: "Digital transformation leaders",
    text: "One trusted data foundation instead of parallel data programs and endless reconciliation.",
  },
  {
    title: "Enterprise architects",
    text: "An open, owned asset data layer that feeds every downstream system, now and in the future.",
  },
];

const outcomes = [
  { num: "10x", label: "Faster retrieval of connected asset data" },
  { num: "80%", label: "Less time engineers spend hunting" },
  { num: "One", label: "Record and knowledge graph combined" },
  { num: "ISO 27001", label: "Certified, open API, no lock-in" },
];

const relatedLinks = [
  { label: "UniGraph", href: "/platform/unigraph", description: "The living asset knowledge graph at the core." },
  { label: "Convert", href: "/platform/convert", description: "Feed the platform with digitized drawing data." },
  { label: "Use-cases", href: "/use-cases", description: "Agents grounded on the asset data platform." },
];

const faqs = [
  {
    question: "What is an industrial asset data platform?",
    answer:
      "It is the single, trusted layer that holds and connects all of a plant's asset data. Plant360 unifies digitized drawings, datasheets, and existing system data into one live asset knowledge graph that serves as both the system of record and the grounding layer for AI.",
  },
  {
    question: "Does the platform replace our existing systems?",
    answer:
      "No. It unifies data from the CAD, EAM, CMMS, historian, and document systems you already run through an open API and keeps them as inputs, layering one connected, synced data model on top.",
  },
  {
    question: "Why not buy a system of record and a graph separately?",
    answer:
      "Running both means reconciling two representations of the same assets by hand and watching them drift apart. Plant360 generates both from one pipeline, so they are always in sync, with no duplicated data or extra silo.",
  },
  {
    question: "Can it digitize scanned and legacy drawings?",
    answer:
      "Yes. Convert is built for legacy and scanned PDFs and images, not just native CAD. Computer vision extracts tags, symbols, and connectivity from low-quality scans, with human-in-the-loop verification to guarantee accuracy.",
  },
  {
    question: "Is the platform secure and open?",
    answer:
      "Yes. Plant360 is ISO 27001 certified and exposes an open API with no lock-in, so you own the data layer and can feed any downstream system.",
  },
];

export default function AssetDataPlatformPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero */}
      <Section tone="dark">
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          {breadcrumbs.map((c, i) => (
            <span key={c.path}>
              {i > 0 ? (
                <span className={styles.crumbSep} aria-hidden="true">
                  /
                </span>
              ) : null}
              {i < breadcrumbs.length - 1 ? (
                <Link href={c.path}>{c.name}</Link>
              ) : (
                <span aria-current="page">{c.name}</span>
              )}
            </span>
          ))}
        </nav>

        <div className={styles.hero}>
          <div data-reveal>
            <p className={styles.eyebrow}>Solutions · Asset data platform</p>
            <h1 className={styles.title}>
              The industrial asset data platform that unifies every drawing, datasheet, and system into{" "}
              <strong>one trusted data foundation.</strong>
            </h1>
            <p className={styles.lead}>
              Plant360 digitizes your engineering drawings, connects the systems you already run, and produces both
              the system of record and a live asset knowledge graph from a single pipeline. One foundation, kept
              continuously in sync, with no data format lock-in.
            </p>
            <div className={styles.actions}>
              <CtaButton href="/contact" variant="primary">
                Book a demo
              </CtaButton>
              <Link href="#approach" className={styles.textLink}>
                See how it works
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.stack} data-reveal aria-hidden="true">
            <div className={styles.stackHead}>
              <span>Plant360 · unified asset data layer</span>
              <span className={styles.stackStatus}>
                <span className={styles.dot} /> In sync
              </span>
            </div>
            <div className={styles.stackBody}>
              {stackRows.map((r) => (
                <div
                  key={r.kind}
                  className={`${styles.stackRow} ${r.accent ? styles.stackRowAccent : ""}`}
                >
                  <div>
                    <p className={styles.stackKind}>{r.kind}</p>
                    <p className={styles.stackName}>{r.name}</p>
                  </div>
                  <span className={styles.stackNote}>{r.note}</span>
                </div>
              ))}
            </div>
            <div className={styles.stackFoot}>
              <span>Served to every downstream system</span>
              <span className={styles.stackFootAccent}>
                Open API
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.heroStats} data-reveal data-reveal-stagger>
          {heroStats.map((s) => (
            <div key={s.label} className={styles.heroStat}>
              <p className={styles.heroStatNum}>{s.num}</p>
              <p className={styles.heroStatLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The problem */}
      <Section tone="light">
        <SectionHeading
          eyebrow="The problem"
          title={
            <>
              Your asset data is everywhere, and <strong>connected nowhere.</strong>
            </>
          }
          lead="Decades of engineering knowledge sit in drawings, datasheets, and a dozen source systems that were never built to talk to each other. Every project, turnaround, and AI initiative pays the same tax: months spent gathering and reconciling data before the real work can begin."
        />
        <div className={styles.problemGrid} data-reveal data-reveal-stagger>
          {problems.map((p) => (
            <div key={p.n} className={styles.problemCard}>
              <span className={styles.problemNum}>{p.n}</span>
              <p className={styles.problemTitle}>{p.title}</p>
              <p className={styles.problemText}>{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The false choice */}
      <Section tone="dark">
        <div className={styles.choice}>
          <div data-reveal>
            <p className={styles.eyebrow}>The false choice</p>
            <h2 className={styles.choiceHeading}>
              A system of record is blind to AI. A knowledge graph drifts from the record.{" "}
              <strong>Neither is enough alone.</strong>
            </h2>
          </div>
          <div data-reveal>
            <p className={styles.choiceText}>
              Teams are forced to choose. A system of record is built for the record and blind to AI. A knowledge
              graph is built for AI and blind to the record. The gap gets patched with point tools, which
              duplicates data, creates another silo, and forces constant manual reconciliation as the two
              representations drift apart.
            </p>
            <div className={styles.wrongList}>
              <span className={styles.wrongChip}>
                <Close size={18} aria-hidden="true" />
                System of record alone: no structured context for AI to reason on.
              </span>
              <span className={styles.wrongChip}>
                <Close size={18} aria-hidden="true" />
                Knowledge graph alone: quietly drifts away from the record.
              </span>
              <span className={styles.wrongChip}>
                <Close size={18} aria-hidden="true" />
                Point tools between them: another silo to reconcile by hand.
              </span>
            </div>
          </div>
        </div>
      </Section>

      {/* The approach / pipeline */}
      <Section tone="light" id="approach">
        <SectionHeading
          eyebrow="The Plant360 approach"
          title={
            <>
              One pipeline. Both outputs. <strong>Always in sync.</strong>
            </>
          }
          lead="Plant360's products work as one platform. Convert digitizes your drawings, UniGraph structures and connects the data, and AI360 builds on it. A single pipeline produces the system of record and the asset knowledge graph together, served to every downstream system through an open API."
        />
        <div className={styles.stepGrid} data-reveal data-reveal-stagger>
          {pipelineSteps.map((s) => (
            <div key={s.n} className={`${styles.stepCard} ${s.dark ? styles.stepCardDark : ""}`}>
              <div className={styles.stepTop}>
                <span className={styles.stepNum}>{s.n}</span>
                <span className={styles.stepKind}>{s.kind}</span>
              </div>
              <h3 className={`${styles.stepTitle} ${s.dark ? styles.stepTitleDark : ""}`}>{s.title}</h3>
              <p className={`${styles.stepText} ${s.dark ? styles.stepTextDark : ""}`}>{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Differentiator pillars */}
      <Section tone="gray">
        <SectionHeading
          eyebrow="What makes it a platform"
          title={
            <>
              Built to produce structured, trusted output, <strong>not another silo.</strong>
            </>
          }
          lead="The difference is not one feature. It is a data layer engineered for the realities of a brownfield industrial plant: legacy documents, dozens of source systems, open standards, and scale, all resolved into one connected model."
        />

        {pillars.map((p) => (
          <div key={p.n} className={styles.pillar}>
            <div className={`${styles.pillarRow} ${p.reversed ? styles.pillarReversed : ""}`}>
              <div className={styles.pillarText} data-reveal>
                <div className={styles.pillarMeta}>
                  <span className={styles.pillarNum}>{p.n}</span>
                  <span className={styles.pillarTag}>{p.tag}</span>
                </div>
                <h3 className={styles.pillarHeading}>{p.heading}</h3>
                <p className={styles.pillarBody}>{p.body}</p>
                <div className={styles.pillarList}>
                  {p.does.map((text) => (
                    <div key={text} className={styles.pillarItem}>
                      <span className={styles.pillarIcon}>
                        <CheckmarkFilled size={18} aria-hidden="true" />
                      </span>
                      <p className={styles.pillarItemText}>{text}</p>
                    </div>
                  ))}
                </div>
                <span className={styles.pillarStat}>
                  <CheckmarkFilled size={18} aria-hidden="true" />
                  {p.stat}
                </span>
              </div>

              <div className={styles.pillarPanel} data-reveal>
                <div className={styles.mockPanel} aria-hidden="true">
                  <div className={styles.mockHead}>
                    <span>{p.mock.head}</span>
                    <span className={styles.mockTag}>{p.mock.tag}</span>
                  </div>
                  <div className={styles.mockBody}>
                    {p.mock.rows.map((r) => (
                      <div key={r.label} className={styles.mockRow}>
                        <span className={styles.mockRowLabel}>{r.label}</span>
                        <span className={styles.mockRowStatus}>{r.status}</span>
                      </div>
                    ))}
                  </div>
                  <div className={styles.mockFoot}>{p.mock.foot}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Section>

      {/* Capabilities */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Also built in"
          title={
            <>
              Engineered for scale, sync, and AI <strong>from the start.</strong>
            </>
          }
        />
        <div className={styles.capGrid} data-reveal data-reveal-stagger>
          {capabilities.map(({ Icon, title, text }) => (
            <div key={title} className={styles.capCard}>
              <span className={styles.capIcon}>
                <Icon size={28} aria-hidden="true" />
              </span>
              <h3 className={styles.capTitle}>{title}</h3>
              <p className={styles.capText}>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section tone="gray">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From scattered sources to one connected model, <strong>in weeks.</strong>
            </>
          }
        />
        <div className={styles.stepGrid} data-reveal data-reveal-stagger>
          {howSteps.map((s) => (
            <div key={s.n} className={styles.stepCard}>
              <div className={styles.stepTop}>
                <span className={styles.stepNum}>{s.n}</span>
              </div>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Outcomes */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Measurable results"
          title={
            <>
              Results you can hold the platform to, <strong>not promises.</strong>
            </>
          }
        />
        <div className={styles.outGrid} data-reveal data-reveal-stagger>
          {outcomes.map((o) => (
            <div key={o.label} className={styles.outStat}>
              <p className={styles.outNum}>{o.num}</p>
              <p className={styles.outLabel}>{o.label}</p>
            </div>
          ))}
        </div>
        <p className={styles.caseQuote} data-reveal>
          An operator with asset data spread across four systems could never agree on a single source of truth, so
          each project rebuilt its own data set. By unifying those systems into one continuously synced asset
          graph, the organization gave every team, and every AI agent, the same trusted foundation, and new
          initiatives started from connected data instead of months of groundwork.
        </p>
      </Section>

      {/* Who it's for */}
      <Section tone="light">
        <div className={styles.audience}>
          <div className={styles.pillarPanel} data-reveal>
            <div className={styles.mockPanel} aria-hidden="true">
              <div className={styles.mockHead}>
                <span>Plant360 workspace · role view</span>
                <span className={styles.mockTag}>Live</span>
              </div>
              <div className={styles.mockBody}>
                <div className={styles.mockRow}>
                  <span className={styles.mockRowLabel}>Reliability engineer · asset lookup</span>
                  <span className={styles.mockRowStatus}>Grounded</span>
                </div>
                <div className={styles.mockRow}>
                  <span className={styles.mockRowLabel}>Transformation lead · data foundation</span>
                  <span className={styles.mockRowStatus}>Unified</span>
                </div>
                <div className={styles.mockRow}>
                  <span className={styles.mockRowLabel}>Enterprise architect · open API</span>
                  <span className={styles.mockRowStatus}>Owned</span>
                </div>
              </div>
              <div className={styles.mockFoot}>One data layer · every team, every agent</div>
            </div>
          </div>
          <div data-reveal>
            <p className={styles.eyebrow}>Built for the teams who run the plant</p>
            <h2 className={styles.choiceHeading}>
              One trusted data layer, <strong>every team.</strong>
            </h2>
            <div className={styles.audienceList} data-reveal data-reveal-stagger>
              {audience.map((a) => (
                <div key={a.title} className={styles.audienceRow}>
                  <p className={styles.audienceTitle}>{a.title}</p>
                  <p className={styles.audienceText}>{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="gray">
        <Faq items={faqs} title="Asset data platform FAQ" />
      </Section>

      {/* Related */}
      <Section tone="light">
        <RelatedLinks title="Related platform & use-cases" links={relatedLinks} />
      </Section>

      {/* Final CTA */}
      <Section tone="dark">
        <h2 className={styles.ctaTitle}>
          Ready to turn your plant&rsquo;s documents into a <strong>trusted data foundation?</strong>
        </h2>
        <p className={styles.ctaLead}>
          See the full stack on your own drawings. A 30-minute demo shows digitize to graph to agent, end to end.
        </p>
        <div className={styles.actions}>
          <CtaButton href="/contact" variant="primary">
            Book a demo
          </CtaButton>
          <Link href="/contact?team=engineering" className={styles.textLink}>
            Talk to engineering
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </Section>
    </>
  );
}
