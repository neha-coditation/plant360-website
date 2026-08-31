import type { Metadata } from "next";
import Link from "next/link";
import {
  Filter,
  View,
  WarningFilled,
  Renew,
  ArrowRight,
  ChevronUp,
  Analytics,
  Settings,
  Download,
  CheckmarkFilled,
  UserAvatar,
  type CarbonIconType,
} from "@carbon/icons-react";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/page/blocks";
import { Faq } from "@/components/page/Faq";
import { CtaButton } from "@/components/ui/CtaButton";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import styles from "./digital-twin.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Digital Twin Implementation | Plant360.AI",
  description:
    "A digital twin is only as accurate as the data beneath it. Plant360 feeds twins and operator training simulators with digitized drawings and a continuously synced asset graph, for 30%+ faster implementation on the platform you already own.",
  path: "/solutions/digital-twin",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
  { name: "Digital Twin Implementation", path: "/solutions/digital-twin" },
];

const heroStats = [
  { num: "30%+", label: "faster twin and simulator implementation" },
  { num: "80%", label: "less time hunting and reconciling asset data" },
  { num: "10x", label: "faster retrieval of connected asset context" },
];

const problems: { n: string; Icon: CarbonIconType; title: string; ground: string; cause: string; cost: string }[] = [
  {
    n: "01",
    Icon: Filter,
    title: "The data preparation sinkhole",
    ground:
      "Before the first simulation runs, the project team has spent the majority of its budget reconciling P&IDs, datasheets, and tag lists by hand.",
    cause:
      "The data the twin requires exists only in documents. Extracting and reconciling it is treated as project labor rather than a platform capability.",
    cost: "Data preparation, not modeling, sets the schedule and the budget.",
  },
  {
    n: "02",
    Icon: View,
    title: "A picture, not a model",
    ground:
      "The P&IDs were scanned and imported, yet the twin cannot trace a line from pump to vessel or simulate flow through the system.",
    cause:
      "Connectivity and equipment hierarchy live inside the drawing. A raster scan or unintelligent CAD file carries none of that structure.",
    cost: "The twin renders the plant but cannot reason about it.",
  },
  {
    n: "03",
    Icon: WarningFilled,
    title: "Trust decay",
    ground:
      "Six months after go-live, an operator finds a valve in the field that the twin does not show. Word spreads through the control room.",
    cause:
      "The model was built from a snapshot. The plant kept changing; the snapshot did not. No mechanism carries change into the model.",
    cost: "A twin that is distrusted is a twin that is unused, whatever it cost to build.",
  },
  {
    n: "04",
    Icon: Renew,
    title: "The one-off build",
    ground:
      "The second unit's simulator begins with the same manual data pull as the first. So does the third. Estimates never improve.",
    cause:
      "Each project's data remains inside its delivery, structured for one tool. Nothing transfers to the next unit or the next site.",
    cost: "Cost and schedule reset to zero with every unit and every site.",
  },
];

const requirements = [
  {
    n: "Requirement 01",
    title: "Resolved connectivity",
    text: "Every line traced from source to destination, every symbol identified. This is what allows a twin to simulate flow rather than display a diagram.",
  },
  {
    n: "Requirement 02",
    title: "Equipment hierarchy",
    text: "Plant, unit, system, equipment, and tag resolved into one structure, so the model is organized the way the plant is operated.",
  },
  {
    n: "Requirement 03",
    title: "Current parameters",
    text: "Design and operating values drawn from datasheets and records, consistent across every source that cites them.",
  },
  {
    n: "Requirement 04",
    title: "A continuous change feed",
    text: "A mechanism that carries every plant change into the model. Accuracy on day one is worth little without accuracy on day five hundred.",
  },
];

const fixes = [
  {
    mode: "Failure mode 01",
    name: "The data preparation sinkhole",
    label: "UniGraph · one connected source",
    text: "Drawings, datasheets, and tag lists are digitized and unified into one asset graph before modeling begins. The reconciliation phase that dominates most twin schedules is removed from the critical path.",
    metric: "30%+ faster implementation · 80% less data hunting",
  },
  {
    mode: "Failure mode 02",
    name: "A picture, not a model",
    label: "Convert · connectivity-aware digitization",
    text: "Convert extracts tags, symbols, line numbers, and resolved connectivity from CAD and scanned P&IDs, verified human-in-the-loop. The twin receives a model of the plant, not a picture of it.",
    metric: "70% faster digitization · 50% lower cost",
  },
  {
    mode: "Failure mode 03",
    name: "Trust decay",
    label: "Continuous sync · through Management of Change",
    text: "As the plant changes, the graph updates and the twin follows. The model tracks the operating plant rather than a commissioning snapshot, and operators keep trusting what they see.",
    metric: "No drift between plant and model",
  },
  {
    mode: "Failure mode 04",
    name: "The one-off build",
    label: "One graph, open API · effort that compounds",
    text: "Every unit and site draws from the same foundation. The second simulator starts from structured data rather than a fresh manual pull, and each rollout is faster than the last.",
    metric: "One data foundation · every twin and simulator",
  },
];

const worksItems: { Icon: CarbonIconType; title: string; text: string }[] = [
  {
    Icon: Settings,
    title: "Open API delivery",
    text: "Structured asset data is exposed through an open API and SDKs, feeding your twin and simulation software directly.",
  },
  {
    Icon: Download,
    title: "Standards-native data",
    text: "Interoperability with open engineering data standards, including DEXPI and ISO 15926, so nothing you build on Plant360 is proprietary to Plant360.",
  },
  {
    Icon: CheckmarkFilled,
    title: "Your data, governed",
    text: "You own the data layer with full export rights. ISO 27001 certified, with single sign-on and fine-grained authorization.",
  },
  {
    Icon: UserAvatar,
    title: "Human-verified accuracy",
    text: "Engineers review and confirm AI-extracted data, with a full audit trail. The twin inherits data your organization has already signed off.",
  },
];

const outcomes = [
  { num: "30%+", label: "faster twin and simulator implementation" },
  { num: "80%", label: "less time hunting and reconciling asset data" },
  { num: "10x", label: "faster retrieval of connected asset context" },
  { num: "70%", label: "faster digitization of the drawings twins depend on" },
];

const roadmap = [
  {
    phase: "Quarter 1 · Prove",
    title: "Digitize the target unit",
    text: "Convert transforms the unit's P&IDs and datasheets into audit-ready structured data with resolved connectivity. The deliverable holds standalone value before any modeling begins.",
    metric: "70% faster · 50% lower cost",
  },
  {
    phase: "Quarter 2 · Connect",
    title: "Assemble the graph, feed the model",
    text: "UniGraph unifies the drawings with datasheets and records into one asset graph. The open API begins feeding the twin and simulator, and continuous sync is switched on.",
    metric: "The twin goes live on trusted data",
  },
  {
    phase: "Quarter 3+ · Compound",
    title: "Extend unit by unit, site by site",
    text: "Each additional unit reuses the same pipeline and graph, so every subsequent twin and simulator is faster to stand up than the last. Agents on AI360 extend the return.",
    metric: "The effort compounds",
  },
];

const faqs = [
  {
    question: "What data does a digital twin need to be accurate?",
    answer:
      "Structured, connected asset data: resolved P&ID connectivity, a consistent equipment hierarchy, current datasheet parameters, and a continuous change feed. Plant360 digitizes the drawings and unifies them into a live asset graph so the twin models the plant as it truly is.",
  },
  {
    question: "Why do digital twin projects run over budget?",
    answer:
      "The majority of the effort goes into manually reconciling drawings, datasheets, and tag lists before modeling can begin. Digitizing and structuring that data first removes the largest and least predictable phase of the schedule.",
  },
  {
    question: "How do you keep a twin from drifting out of sync?",
    answer:
      "Plant360 keeps the underlying asset graph continuously synchronized as drawings and records change through Management of Change, so the twin and simulator reflect the current plant rather than a commissioning snapshot.",
  },
  {
    question: "Can Plant360 feed our existing twin or simulator software?",
    answer:
      "Yes. Structured asset data is delivered through an open API and open engineering data standards, so it feeds the twin and simulation environment you already operate. No replacement is required.",
  },
  {
    question: "Does this help operator training simulators as well?",
    answer:
      "Yes. Simulators consume the same verified asset data as the twin, and AI360 agents can generate training scenarios grounded in current plant context, so training content stays faithful to the operating plant.",
  },
];

export default function DigitalTwinPage() {
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
            <p className={styles.eyebrow}>Solutions · Digital twin implementation</p>
            <h1 className={styles.title}>
              A digital twin is only as accurate as <strong>the data beneath it.</strong>
            </h1>
            <p className={styles.lead}>
              Most twins and operator training simulators underperform not because the modeling is weak, but because the
              asset data feeding them is incomplete, disconnected, and stale. Plant360 supplies the foundation those
              models depend on:{" "}
              <strong>
                digitized drawings and a continuously synced asset graph, delivered to the twin platform you already own.
              </strong>
            </p>
            <div className={styles.actions}>
              <CtaButton href="/contact" variant="primary">
                Book a demo
              </CtaButton>
              <Link href="#contract" className={styles.textLink}>
                What a twin actually needs
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.stack} data-reveal aria-hidden="true">
            <div className={styles.stackHead}>
              <span>Anatomy of a working twin</span>
              <span className={styles.stackStatus}>
                <span className={styles.dot} /> Live
              </span>
            </div>
            <div className={`${styles.stackRow} ${styles.stackRowMuted}`}>
              <p className={`${styles.stackNum} ${styles.stackNumMuted}`}>Your twin &amp; simulator platform</p>
              <p className={styles.stackName}>3D model · simulation · training</p>
              <p className={styles.stackDesc}>You already own this layer. It stays.</p>
            </div>
            <div className={styles.stackSep}>
              <ChevronUp size={16} aria-hidden="true" />
              The foundation · where most programs fail · Plant360
            </div>
            <div className={styles.stackRow}>
              <p className={styles.stackNum}>Continuous sync</p>
              <p className={styles.stackName}>Every plant change flows to the model</p>
              <p className={styles.stackDesc}>Management of Change keeps the graph current</p>
            </div>
            <div className={styles.stackRow}>
              <p className={styles.stackNum}>UniGraph</p>
              <p className={styles.stackName}>One connected asset graph</p>
              <p className={styles.stackDesc}>Assets · tags · datasheets · relationships</p>
            </div>
            <div className={styles.stackRow}>
              <p className={styles.stackNum}>Convert</p>
              <p className={styles.stackName}>Connectivity-aware digitization</p>
              <p className={styles.stackDesc}>CAD · DWG · scanned P&amp;IDs · datasheets</p>
            </div>
            <div className={styles.stackFoot}>
              <ChevronUp size={16} aria-hidden="true" />
              Data flows up. Accuracy flows with it
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
              Anatomy of a twin that <strong>fails quietly</strong>
            </>
          }
          lead="Digital twin and operator training simulator programs rarely fail in the modeling environment. They fail upstream, in the months spent assembling asset data by hand, and downstream, when that data quietly goes stale. Four failure modes recur across the industry."
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
      <Section tone="dark">
        <SectionHeading
          eyebrow="The diagnosis"
          title={
            <>
              Four symptoms, one root cause: the twin is fed from <strong>documents people read</strong>, not from{" "}
              <strong style={{ color: "var(--sf-accent-text)" }}>data systems can act on</strong>.
            </>
          }
          lead="Give the twin a live, connected data foundation and each failure mode resolves. Plant360 is that foundation. It does not replace your twin platform; it makes the one you own accurate."
        />
      </Section>

      {/* The data contract */}
      <Section tone="light" id="contract">
        <SectionHeading
          eyebrow="The standard to hold"
          title={
            <>
              What a twin actually needs: <strong>the data contract</strong>
            </>
          }
          lead="Before evaluating any data strategy for a twin or simulator, hold it to four requirements. A model that lacks any one of them will underperform, whichever platform renders it."
        />
        <div className={styles.reqGrid} data-reveal data-reveal-stagger>
          {requirements.map((r) => (
            <div key={r.n} className={styles.reqCard}>
              <div className={styles.reqMotif} aria-hidden="true" />
              <p className={styles.reqNum}>{r.n}</p>
              <h3 className={styles.reqTitle}>{r.title}</h3>
              <p className={styles.reqText}>{r.text}</p>
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
          lead="Not a services engagement and not another modeling tool. A platform capability that satisfies the data contract and eliminates each failure mode at its source."
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
        <div className={styles.aiCallout} data-reveal>
          <span className={styles.aiIcon}>
            <Analytics size={24} aria-hidden="true" />
          </span>
          <div>
            <p className={styles.aiLabel}>Beyond the data feed · AI360</p>
            <p className={styles.aiText}>
              The same graph that feeds the twin also carries AI agents. Operator co-pilots answer questions grounded in
              current plant data, and training scenario generators produce simulator content from verified asset context.
              The twin, the simulator, and the agents share one source of truth.
            </p>
          </div>
        </div>
      </Section>

      {/* Works with your platform */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Your existing investment"
          title={
            <>
              Plant360 does not replace your twin platform. <strong>It feeds it.</strong>
            </>
          }
          lead="The modeling, visualization, and simulation environment you have already selected remains in place. Plant360 supplies what that environment cannot produce for itself: structured, current, connected asset data."
        />
        <div className={styles.worksGrid}>
          <div className={styles.worksList} data-reveal data-reveal-stagger>
            {worksItems.map(({ Icon, title, text }) => (
              <div key={title} className={styles.worksItem}>
                <span className={styles.worksIcon}>
                  <Icon size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className={styles.worksItemTitle}>{title}</p>
                  <p className={styles.worksItemText}>{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.worksPanel} data-reveal>
            <p className={styles.worksPanelLabel}>One foundation, two consumers</p>
            <p className={styles.worksPanelText}>
              The digital twin and the operator training simulator draw from the same verified asset graph, so training
              content reflects the plant operators actually work in.
            </p>
            <p className={styles.worksPanelNote}>
              Delivered through an open API and open engineering data standards. Your modeling environment stays; the data
              beneath it becomes accurate and current.
            </p>
          </div>
        </div>
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

      {/* Roadmap */}
      <Section tone="light">
        <SectionHeading
          eyebrow="The roadmap"
          title={
            <>
              A staged roadmap, <strong>accountable by quarter</strong>
            </>
          }
          lead="Each stage delivers standalone value. Demonstrate results on one unit, then extend. No multi-year commitment is required in advance."
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

      {/* FAQ */}
      <Section tone="gray">
        <Faq items={faqs} title="Digital twin implementation FAQ" />
      </Section>

      {/* Final CTA */}
      <Section tone="dark">
        <h2 className={styles.ctaTitle}>
          See your own P&amp;ID become <strong>twin-ready data</strong>
        </h2>
        <p className={styles.ctaLead}>
          A 30-minute demonstration takes one of your drawings from scan to connected graph to a live data feed your twin
          can consume.
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
