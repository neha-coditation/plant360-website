import type { Metadata } from "next";
import Link from "next/link";
import {
  Launch,
  Search,
  Renew,
  Calendar,
  ArrowRight,
  ChevronUp,
  CheckmarkFilled,
  Checkmark,
  Close,
  UserAvatar,
  Settings,
  type CarbonIconType,
} from "@carbon/icons-react";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/page/blocks";
import { Faq } from "@/components/page/Faq";
import { CtaButton } from "@/components/ui/CtaButton";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import styles from "./digital-transformation.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Digital Transformation | Plant360.AI",
  description:
    "Digital transformation programs stall on data, not ambition. Plant360 turns your drawings and records into a live data foundation and ships production AI agents on it, for 50%+ efficiency demonstrable within quarters.",
  path: "/solutions/digital-transformation",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
  { name: "Digital Transformation", path: "/solutions/digital-transformation" },
];

const heroStats = [
  { num: "50%+", label: "efficiency gain across engineering, operations, and safety" },
  { num: "Days", label: "from concept to a deployed agent, not months" },
  { num: "80%", label: "reduction in time engineers spend locating asset data" },
];

const stackRows = [
  { num: "04 · Apply", name: "AI apps & agents", desc: "ChangeIQ · HAZOP · MTR · asset agents" },
  { num: "03 · Build", name: "AI360", desc: "Rapid industrial AI-agent platform" },
  { num: "02 · Foundation", name: "UniGraph", desc: "Live system of record + asset graph" },
];

const problems: { n: string; Icon: CarbonIconType; title: string; ground: string; cause: string; cost: string }[] = [
  {
    n: "01",
    Icon: Launch,
    title: "Pilot purgatory",
    ground:
      "The initial demonstration secured approval. Eighteen months later the pilot remains a pilot, and engineers still answer asset questions from scanned PDFs.",
    cause:
      "The pilot ran on a manually curated dataset that does not exist at plant scale. Scaling requires rebuilding that data by hand, so scale is never achieved.",
    cost: "The AI budget is renewed annually. Organizational credibility is not.",
  },
  {
    n: "02",
    Icon: Search,
    title: "The engineering data tax",
    ground:
      "Senior engineers spend approximately 30% of their working day locating, validating, and reconciling asset data across CAD, EAM, CMMS, and document repositories.",
    cause:
      "No single authoritative source exists. The drawing states one value, the CMMS another. An engineer must arbitrate each discrepancy.",
    cost: "The personnel expected to lead the transformation are occupied sustaining it.",
  },
  {
    n: "03",
    Icon: Renew,
    title: "The dataset treadmill",
    ground:
      "Digital twin, reliability, operator training: each new initiative rebuilds the same asset dataset from CAD, EAM, and document stores.",
    cause:
      "Each project's data remains siloed within its vendor's tooling; nothing transfers to the next initiative.",
    cost: "Cost and schedule reset to zero with every project. No investment compounds.",
  },
  {
    n: "04",
    Icon: Calendar,
    title: "The credibility gap",
    ground: "The board expects AI outcomes within quarters. The data-remediation roadmap is measured in years.",
    cause:
      "A sequential operating model: remediate all data first, then apply AI. The first phase never concludes, so the second never begins.",
    cost: "Executive sponsorship expires before the foundation is complete.",
  },
];

const shift = [
  {
    work: "Answering an asset question",
    today: "Locate the drawing, then locate the individual who knows where it is filed.",
    now: "Query the asset graph. 10x faster retrieval, 80% less manual searching.",
  },
  {
    work: "Management of change",
    today: "Assemble the package manually from drawings, spreadsheets, and correspondence. Weeks of preparation.",
    now: "ChangeIQ assembles the impact analysis from the graph. 40%+ reduction in preparation time.",
  },
  {
    work: "Starting a new AI use case",
    today: "A new data project, with months elapsing before the first result.",
    now: "A new agent on the existing graph. Deployed in days on AI360.",
  },
  {
    work: "Keeping records current",
    today: "Redlines accumulate in a backlog while the record diverges from the operating plant.",
    now: "The system of record is synchronized continuously as the plant changes. No divergence.",
  },
  {
    work: "Passing an audit",
    today: "Reconstruct the change history retrospectively, drawing by drawing.",
    now: "Human-verified changes with a complete audit trail, maintained from day one.",
  },
];

const fixes = [
  {
    mode: "Failure mode 01",
    name: "Pilot purgatory",
    label: "UniGraph · layer 02 · structure",
    text: "Agents operate on a live asset graph rather than a manually assembled dataset. Scale is not a follow-on project: the context an agent requires already exists for every unit, not only the pilot's.",
    metric: "10x faster engineering data retrieval",
  },
  {
    mode: "Failure mode 02",
    name: "The engineering data tax",
    label: "Convert · layer 01 · digitize",
    text: "The drawing and datasheet backlog becomes structured, audit-ready data, verified human-in-the-loop, so engineers rely on it without revalidating every value.",
    metric: "70% faster digitization · 50% lower cost",
  },
  {
    mode: "Failure mode 03",
    name: "The dataset treadmill",
    label: "One foundation · UniGraph + open API",
    text: "Digital twin, reliability, operator training: every initiative draws from the same graph, synchronized with your EAM and CMMS. The dataset is built once and reused across the portfolio.",
    metric: "One data foundation, every use case",
  },
  {
    mode: "Failure mode 04",
    name: "The credibility gap",
    label: "AI360 + production apps · layers 03-04 · build & apply",
    text: "Agents are configured and deployed in days on data already digitized. ChangeIQ, HAZOP, and tag-registry agents deliver measurable results within the first quarter, while the foundation continues to expand beneath them.",
    metric: "Agents in days · results in the first quarter",
  },
];

const roadmap = [
  {
    phase: "Quarter 1 · Prove",
    title: "Digitize one unit's backlog",
    text: "Convert transforms one unit's drawings and datasheets into audit-ready Smart Drawings and a live system of record. The deliverable holds standalone value, independent of subsequent stages.",
    metric: "70% faster · 50% lower cost",
  },
  {
    phase: "Quarter 2 · Connect",
    title: "Unify the graph, ship first agents",
    text: "UniGraph unifies the drawings with your EAM and CMMS into one living graph. The first agents, Management of Change and tag registry, deploy on AI360 against production workflows.",
    metric: "First measurable results",
  },
  {
    phase: "Quarter 3+ · Compound",
    title: "Scale unit by unit, site by site",
    text: "Each additional agent reuses the same graph and deploys faster than the last. Efficiency gains from the initial agents fund the rollout across the enterprise.",
    metric: "Gains fund the rollout",
  },
];

const comparison: { cap: string; left: { icon: "meh" | "no"; text: string }; right: string }[] = [
  {
    cap: "Drawing & P&ID digitization",
    left: { icon: "meh", text: "Digitization vendor. Output is files, not connected data" },
    right: "Convert: lossless, audit-ready Smart Drawings, even from scans",
  },
  {
    cap: "Living system of record",
    left: { icon: "no", text: "Manual redlining backlog. Records diverge as the plant changes" },
    right: "Kept continuously in sync from the same pipeline. No drift",
  },
  {
    cap: "Asset knowledge graph",
    left: { icon: "meh", text: "Graph vendor. Disconnected from the system of record" },
    right: "UniGraph: record and graph produced together, always in sync",
  },
  {
    cap: "Agent build platform",
    left: { icon: "meh", text: "Generic AI vendor. No plant context to reason over" },
    right: "AI360: agents built on your own asset graph, in days",
  },
  {
    cap: "Production apps: MoC, HAZOP, MTR",
    left: { icon: "no", text: "Custom builds, scoped and funded per project" },
    right: "ChangeIQ and prebuilt agents, in production use today",
  },
  {
    cap: "Integration & data ownership",
    left: { icon: "no", text: "Carried by your organization: multiple contracts, formats, and roadmaps to reconcile" },
    right: "Open API, no lock-in. You own the data layer",
  },
];

const outcomes = [
  { num: "50%+", label: "operational efficiency gained end to end" },
  { num: "70%", label: "faster drawing digitization, at 50% lower cost" },
  { num: "10x", label: "faster engineering data retrieval, 80% less manual searching" },
  { num: "40%+", label: "reduction in Management of Change preparation time with ChangeIQ" },
];

const governance: { Icon: CarbonIconType; ok?: boolean; title: string; text: string }[] = [
  {
    Icon: CheckmarkFilled,
    ok: true,
    title: "ISO 27001 certified",
    text: "Enterprise-grade security and governance, independently audited.",
  },
  {
    Icon: UserAvatar,
    title: "Human-in-the-loop",
    text: "Engineers verify AI output, with a full audit trail on every change. Defensible for safety and compliance stakeholders.",
  },
  {
    Icon: Settings,
    title: "Open API, no lock-in",
    text: "Your organization owns the data layer, with full export rights. The platform conforms to your architecture strategy, not the reverse.",
  },
  {
    Icon: Renew,
    title: "Vendor-neutral",
    text: "Ingests from Hexagon, AVEVA, SmartPlant, Autodesk, SAP, and Maximo. Your existing tools are inputs, not the platform.",
  },
];

const faqs = [
  {
    question: "What is industrial digital transformation?",
    answer:
      "It is the transition from document-driven plant operations to data-driven, AI-first operations. In practice: converting drawings and records into structured, connected data, then applying AI agents to production workflows so operations become measurably faster and safer.",
  },
  {
    question: "Why do transformation programs stall?",
    answer:
      "In nearly all cases, because the underlying data remains trapped in scanned drawings and disconnected systems. Without a trusted, connected data foundation, AI pilots cannot scale beyond proof of concept. The four failure modes on this page are the typical symptoms.",
  },
  {
    question: "Where should we start?",
    answer:
      "Begin with the layer of greatest operational cost. A drawing backlog indicates Convert; inconsistent EAM or CMMS data indicates UniGraph. Each layer delivers standalone value, allowing results to be demonstrated before expanding. No big-bang rollout is required.",
  },
  {
    question: "Do we have to replace our existing systems?",
    answer:
      "No. Plant360 unifies data from the CAD, EAM, CMMS, and document systems you already operate through an open API. Existing investments remain in service; the asset graph sits above them.",
  },
  {
    question: "How quickly can we show results?",
    answer:
      "Because agents deploy in days on data that has already been digitized, most programs demonstrate measurable efficiency gains within the first quarter rather than after a multi-year build.",
  },
];

export default function DigitalTransformationPage() {
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
            <p className={styles.eyebrow}>Solutions · Digital transformation</p>
            <h1 className={styles.title}>
              Digital transformation programs do not stall on ambition. <strong>They stall on data.</strong>
            </h1>
            <p className={styles.lead}>
              Plant360 converts the drawings and records your organization already holds into a live engineering data
              foundation, then deploys production AI agents on it. A program that compounds, not a pilot that plateaus:{" "}
              <strong>50%+ efficiency, demonstrable within quarters.</strong>
            </p>
            <div className={styles.actions}>
              <CtaButton href="/contact" variant="primary">
                Book a demo
              </CtaButton>
              <Link href="#diagnosis" className={styles.textLink}>
                Review the diagnosis
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.stack} data-reveal aria-hidden="true">
            <div className={styles.stackHead}>
              <span>Plant360 platform</span>
              <span className={styles.stackStatus}>
                <span className={styles.dot} /> One stack · live
              </span>
            </div>
            {stackRows.map((r) => (
              <div key={r.num} className={styles.stackRow}>
                <p className={styles.stackNum}>{r.num}</p>
                <p className={styles.stackName}>{r.name}</p>
                <p className={styles.stackDesc}>{r.desc}</p>
              </div>
            ))}
            <div className={styles.stackSplit}>
              <div className={styles.stackRow}>
                <p className={styles.stackNum}>01 · Convert</p>
                <p className={styles.stackDesc}>CAD · DWG · PDF drawings</p>
              </div>
              <div className={styles.stackRow}>
                <p className={styles.stackNum}>01 · Connect</p>
                <p className={styles.stackDesc}>Existing records &amp; design data</p>
              </div>
            </div>
            <div className={styles.stackFoot}>
              <ChevronUp size={16} aria-hidden="true" />
              Two sources, one foundation. Data flows up
            </div>
          </div>
        </div>

        <div className={styles.heroStats} data-reveal data-reveal-stagger>
          {heroStats.map((s) => (
            <div key={s.label}>
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
              Anatomy of a <strong>stalled transformation</strong>
            </>
          }
          lead="Industrial AI programs rarely fail at the level of strategy or the model. They fail in the gap between the two, where plant knowledge sits in scanned drawings and partially synchronized systems. Four failure modes appear in nearly every stalled program."
        />
        <div className={styles.problemGrid} data-reveal data-reveal-stagger>
          {problems.map(({ n, Icon, title, ground, cause, cost }) => (
            <article key={n} className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.cardHead}>
                  <span className={styles.cardIcon}>
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className={styles.cardTitle}>{title}</h3>
                </div>
                <span className={styles.cardNum}>{n}</span>
              </div>
              <div className={styles.cardBlock}>
                <p className={styles.cardLabel}>On the ground</p>
                <p className={styles.cardText}>{ground}</p>
              </div>
              <div className={styles.cardBlock}>
                <p className={styles.cardLabel}>Root cause</p>
                <p className={styles.cardText}>{cause}</p>
              </div>
              <div className={`${styles.cardBlock} ${styles.cardCost}`}>
                <p className={styles.cardLabel}>What it costs</p>
                <p className={styles.cardText}>{cost}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* The diagnosis */}
      <Section tone="dark" id="diagnosis">
        <SectionHeading
          eyebrow="The diagnosis"
          title={
            <>
              Four symptoms, one root cause: plant knowledge resides in <strong>documents people read</strong>, not in{" "}
              <strong style={{ color: "var(--sf-accent-text)" }}>data systems can act on</strong>.
            </>
          }
          lead="Convert the documents into a live, connected data foundation and each failure mode above is resolved. This is precisely what Plant360 is engineered to do."
        />
      </Section>

      {/* The shift */}
      <Section tone="light">
        <SectionHeading
          eyebrow="The shift"
          title={
            <>
              What changes when workflows become <strong>data-driven</strong>
            </>
          }
        />
        <div className={styles.shiftTable} data-reveal>
          <div className={`${styles.shiftRow} ${styles.shiftHead}`}>
            <p className={styles.shiftCell}>Workflow</p>
            <p className={styles.shiftCell}>Document-driven today</p>
            <p className={`${styles.shiftCell} ${styles.shiftCellNew}`}>Data-driven with Plant360</p>
          </div>
          {shift.map((r) => (
            <div key={r.work} className={styles.shiftRow}>
              <p className={styles.shiftWork}>{r.work}</p>
              <p className={styles.shiftToday}>{r.today}</p>
              <p className={styles.shiftNew}>{r.now}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How Plant360 solves it */}
      <Section tone="gray" id="how">
        <SectionHeading
          eyebrow="How Plant360 solves it"
          title={
            <>
              Each failure mode has a <strong>specific fix in the stack</strong>
            </>
          }
          lead="Not a methodology or a consulting engagement. A platform capability that eliminates each failure mode at its source."
        />
        <div className={styles.howList} data-reveal data-reveal-stagger>
          {fixes.map((f) => (
            <div key={f.mode} className={styles.howRow}>
              <div className={styles.howMode}>
                <p className={styles.howModeLabel}>{f.mode}</p>
                <p className={styles.howModeName}>{f.name}</p>
              </div>
              <div className={styles.howArrow}>
                <ArrowRight size={20} aria-hidden="true" />
              </div>
              <div className={styles.howFix}>
                <p className={styles.howFixLabel}>{f.label}</p>
                <p className={styles.howFixText}>{f.text}</p>
                <p className={styles.howFixMetric}>{f.metric}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Roadmap */}
      <Section tone="light">
        <SectionHeading
          eyebrow="The roadmap"
          title={
            <>
              A staged roadmap, <strong>accountable by quarter</strong>
            </>
          }
          lead="Each stage delivers standalone value. Demonstrate results, then expand. No big-bang rollout, no multi-year commitment in advance."
        />
        <div className={styles.roadGrid} data-reveal data-reveal-stagger>
          {roadmap.map((r) => (
            <div key={r.phase} className={styles.roadCard}>
              <p className={styles.roadPhase}>{r.phase}</p>
              <h3 className={styles.roadTitle}>{r.title}</h3>
              <p className={styles.roadText}>{r.text}</p>
              <p className={styles.roadMetric}>{r.metric}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Evaluation table */}
      <Section tone="gray">
        <SectionHeading
          eyebrow="For your evaluation"
          title={
            <>
              One platform, or a <strong>stack of point solutions</strong>
            </>
          }
          lead="Equivalent capabilities can be assembled from separate vendors. The integration between them cannot, and that is where the value resides."
        />
        <div className={styles.cmp} data-reveal>
          <div className={styles.cmpHead}>
            <p className={styles.cmpHeadCell}>Capability</p>
            <p className={`${styles.cmpHeadCell} ${styles.cmpHeadCellAlt}`}>Assembled from point tools</p>
            <p className={`${styles.cmpHeadCell} ${styles.cmpHeadCellOn}`}>Plant360: one stack</p>
          </div>
          {comparison.map((row) => (
            <div key={row.cap} className={styles.cmpRow}>
              <p className={styles.cmpCap}>{row.cap}</p>
              <div className={styles.cmpCell}>
                <span className={row.left.icon === "no" ? styles.iconNo : styles.iconMeh}>
                  {row.left.icon === "no" ? (
                    <Close size={16} aria-hidden="true" />
                  ) : (
                    <Checkmark size={16} aria-hidden="true" />
                  )}
                </span>
                <p>{row.left.text}</p>
              </div>
              <div className={`${styles.cmpCell} ${styles.cmpCellOn}`}>
                <span className={styles.iconYes}>
                  <CheckmarkFilled size={16} aria-hidden="true" />
                </span>
                <p>{row.right}</p>
              </div>
            </div>
          ))}
          <div className={styles.cmpRow}>
            <p className={styles.cmpCap}>Vendors to manage</p>
            <p className={styles.cmpCount}>3-4+</p>
            <p className={`${styles.cmpCount} ${styles.cmpCountOn}`}>One</p>
          </div>
        </div>
        <p className={styles.cmpNote}>
          Representative comparison. Plant360 is vendor-neutral, ingesting from and syncing with Hexagon, AVEVA,
          SmartPlant, DEXPI, Autodesk, SAP, and Maximo.
        </p>
      </Section>

      {/* Outcomes */}
      <Section tone="dark">
        <SectionHeading
          eyebrow="Outcomes"
          title={
            <>
              Measurable results, <strong>not promises</strong>
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
      </Section>

      {/* Governance */}
      <Section tone="gray">
        <SectionHeading
          eyebrow="For the evaluation committee"
          title={
            <>
              Engineered for <strong>enterprise governance</strong>
            </>
          }
        />
        <div className={styles.govGrid} data-reveal data-reveal-stagger>
          {governance.map(({ Icon, ok, title, text }) => (
            <div key={title} className={styles.govCard}>
              <span className={`${styles.govIcon} ${ok ? styles.govIconOk : ""}`}>
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className={styles.govTitle}>{title}</h3>
              <p className={styles.govText}>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="light">
        <Faq items={faqs} title="Digital transformation FAQ" />
      </Section>

      {/* Final CTA */}
      <Section tone="dark">
        <h2 className={styles.ctaTitle}>
          Evaluate it on <strong>your own asset</strong>
        </h2>
        <p className={styles.ctaLead}>
          A 30-minute demonstration takes one of your P&amp;IDs from scan to graph to working agent. The complete stack,
          end to end.
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
