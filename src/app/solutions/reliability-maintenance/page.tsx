import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Time,
  Certificate,
  ChartBar,
  UserFollow,
  Renew,
  Calendar,
  Security,
  ChartLineData,
  Idea,
  ReportData,
  CheckmarkFilled,
  TaskView,
  Rule,
  Locked,
  type CarbonIconType,
} from "@carbon/icons-react";
import { buildMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { SectionHeading, RelatedLinks } from "@/components/page/blocks";
import { Faq } from "@/components/page/Faq";
import { CtaButton } from "@/components/ui/CtaButton";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import styles from "./reliability-maintenance.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Reliability & Maintenance | Plant360.AI",
  description:
    "Reliability and maintenance is a continuous chain of high-stakes decisions, not a data cleanup project. Plant360 grounds inspection, turnaround, planning, and control-of-work decisions in a live asset graph, with agents proposing and engineers approving every action.",
  path: "/solutions/reliability-maintenance",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Solutions", path: "/solutions" },
  { name: "Reliability & Maintenance", path: "/solutions/reliability-maintenance" },
];

const heroStats = [
  { num: "30%+", label: "Reduction in unplanned downtime" },
  { num: "50%+", label: "Faster turnaround and inspection scoping" },
  { num: "10x", label: "Faster access to connected asset history" },
  { num: "25%+", label: "Reduction in low-value preventive tasks" },
];

const consoleRows: { tag: string; text: string; status: "review" | "done" }[] = [
  { tag: "RBI", text: "Proposed 24 inspection interval updates", status: "review" },
  { tag: "RCA", text: "Linked 3 pump failures to one root cause", status: "done" },
  { tag: "TA", text: "Assembled turnaround worklist, 142 items", status: "review" },
  { tag: "COW", text: "Verified isolation points for permit 8841", status: "done" },
];

const stakes: { Icon: CarbonIconType; title: string; text: string }[] = [
  {
    Icon: Time,
    title: "Unplanned downtime",
    text: "A single unplanned shutdown on a critical unit can erase a quarter of its margin. Much of it is preventable with the right intervention at the right time.",
  },
  {
    Icon: Certificate,
    title: "Integrity and safety",
    text: "Mechanical integrity is a regulatory obligation, not a preference. A missed corrosion mechanism or an overdue inspection carries safety and compliance consequences.",
  },
  {
    Icon: ChartBar,
    title: "Compounding backlog",
    text: "Deferred maintenance does not disappear. It accrues as risk, becomes the next failure, and quietly inflates the scope of every future turnaround.",
  },
  {
    Icon: UserFollow,
    title: "Expertise retiring",
    text: "Decades of failure knowledge live in the heads of a few senior engineers. As they retire, that judgment leaves with them unless it is captured in the data.",
  },
];

const problems = [
  {
    n: "01",
    title: "Data is fragmented",
    text: "Failure history sits in the CMMS, condition data in a historian, connectivity in P&IDs, specifications in datasheets, and procedures in OEM manuals. Answering one reliability question means cross-referencing five systems by hand.",
  },
  {
    n: "02",
    title: "Strategy is static",
    text: "RCM studies and preventive plans are built once, then rarely revisited. Intervals drift out of step with how equipment actually behaves, leaving redundant tasks in place and real risks uncovered.",
  },
  {
    n: "03",
    title: "Analysis is manual",
    text: "RBI, root-cause analysis, and corrosion-loop mapping are run in spreadsheets, dependent on the analyst who built them. The work is slow, hard to audit, and difficult to repeat consistently across sites.",
  },
  {
    n: "04",
    title: "Knowledge walks out the door",
    text: "The reasoning behind why an asset fails and how it was fixed lives in tribal memory. When experienced engineers leave, the plant loses context that no CMMS field ever recorded.",
  },
  {
    n: "05",
    title: "Culture stays reactive",
    text: "With data this hard to trust, teams default to firefighting. Effort goes to the failure in front of them rather than the pattern that would prevent the next ten.",
  },
];

const approachSteps = [
  {
    n: "01",
    kind: "Digitize",
    title: "Convert",
    text: "Turn P&IDs, datasheets, and inspection records, including legacy scanned PDFs, into structured, audit-ready data.",
  },
  {
    n: "02",
    kind: "Structure",
    title: "UniGraph",
    text: "Link every asset, tag, document, and failure record into one live graph, resolving duplicates and staying in sync as the plant changes.",
  },
  {
    n: "03",
    kind: "Build",
    title: "AI360",
    text: "Deploy reliability agents on your own graph in days, grounded in verified data, with pre-built integrations to the systems you already run.",
  },
  {
    n: "04",
    kind: "Apply",
    title: "Reliability agents",
    text: "Agents run real reliability work across strategy, integrity, planning, and control of work, proposing actions your engineers approve.",
    dark: true,
  },
];

const useCases: {
  Icon: CarbonIconType;
  title: string;
  subs: { name: string; text: string }[];
  tag: string;
}[] = [
  {
    Icon: ReportData,
    title: "Mechanical integrity & inspection",
    subs: [
      {
        name: "RBI Agent",
        text: "Assembles damage mechanisms, materials, and process conditions per asset, then proposes risk rankings and inspection intervals for review.",
      },
      {
        name: "Corrosion-Loop Agent",
        text: "Groups equipment into corrosion loops and integrity operating windows from connected process and materials data.",
      },
      {
        name: "Inspection-Planning Agent",
        text: "Builds and sequences inspection workscopes and flags overdue or deferred items against due dates.",
      },
    ],
    tag: "80% less time assembling evidence",
  },
  {
    Icon: Renew,
    title: "Turnaround & shutdown scope",
    subs: [
      {
        name: "Turnaround-Scope Agent",
        text: "Assembles a candidate worklist from integrity findings, deferred work, and failure history, with the evidence that justifies each item.",
      },
      {
        name: "Scope-Challenge Agent",
        text: "Tests each item against risk and cost, flagging low-value scope for challenge before it is committed.",
      },
      {
        name: "Readiness Agent",
        text: "Confirms drawings, permits, isolations, and spares are in place before the execution window opens.",
      },
    ],
    tag: "50%+ faster scope build",
  },
  {
    Icon: Calendar,
    title: "Planning, scheduling & spares",
    subs: [
      {
        name: "Work-Order Agent",
        text: "Enriches work orders with the right drawings, specs, and equipment history so crews arrive prepared, not searching.",
      },
      {
        name: "Job-Plan Agent",
        text: "Drafts job plans and task steps from equipment type, failure mode, and prior successful work.",
      },
      {
        name: "Spares & BOM Agent",
        text: "Links equipment to verified bills of material and flags criticality-based stocking gaps and obsolescence.",
      },
    ],
    tag: "Fewer delayed and re-planned jobs",
  },
  {
    Icon: Security,
    title: "Control of work & isolation",
    subs: [
      {
        name: "Isolation-Planning Agent",
        text: "Derives isolation points and line-ups from the live asset graph so lockout boundaries reflect the plant as it is.",
      },
      {
        name: "Permit-to-Work Agent",
        text: "Grounds permits in verified equipment state and connectivity, reducing errors and rework before work begins.",
      },
      {
        name: "Conflict-Check Agent",
        text: "Surfaces simultaneous-operations and isolation conflicts across concurrent permits on the same system.",
      },
    ],
    tag: "Fewer permit errors, safer work",
  },
  {
    Icon: ChartLineData,
    title: "Failure & root-cause analysis",
    subs: [
      {
        name: "RCA Agent",
        text: "Connects failure history, drawings, and datasheets to accelerate structured root-cause analysis on the graph.",
      },
      {
        name: "Bad-Actor Agent",
        text: "Ranks chronic failures by downtime and cost so effort targets the assets that drive the losses.",
      },
      {
        name: "Failure-Pattern Agent",
        text: "Detects recurring patterns across similar equipment to prevent the next failure, not just repair the last.",
      },
    ],
    tag: "Faster, repeatable RCA",
  },
  {
    Icon: Idea,
    title: "Reliability strategy & knowledge",
    subs: [
      {
        name: "RCM & Criticality Agent",
        text: "Drafts and maintains criticality rankings and RCM logic against live asset behavior instead of a one-time study.",
      },
      {
        name: "PM-Optimization Agent",
        text: "Reviews the preventive program to remove redundant tasks and close gaps where risk is uncovered.",
      },
      {
        name: "Reliability Co-Pilot",
        text: "Answers equipment questions from verified plant data, capturing expert knowledge before it retires.",
      },
    ],
    tag: "Strategy that stays current",
  },
];

const exampleSteps = [
  {
    n: "01",
    title: "Agent assembles the candidate worklist",
    text: "It pulls integrity findings, deferred work orders, and failure history for the unit, attaching the evidence and drawings behind each proposed item.",
  },
  {
    n: "02",
    title: "Engineer reviews and challenges scope",
    text: "Each item is ranked by risk and cost. The engineer accepts, defers, or rejects, and the reasoning is captured for audit.",
  },
  {
    n: "03",
    title: "Approved scope flows to execution",
    text: "The confirmed worklist, with drawings, permits, and spares checked, is ready for planning, with no parallel spreadsheet to reconcile.",
  },
];

const outcomes = [
  { num: "30%+", label: "Reduction in unplanned downtime" },
  { num: "50%+", label: "Faster turnaround and inspection scoping" },
  { num: "10x", label: "Faster retrieval of connected asset history" },
  { num: "25%+", label: "Reduction in low-value preventive tasks" },
];

const trust: { Icon: CarbonIconType; title: string; text: string }[] = [
  {
    Icon: CheckmarkFilled,
    title: "Human-in-the-loop",
    text: "Agents propose; engineers approve. Nothing reaches your systems of record without review.",
  },
  {
    Icon: TaskView,
    title: "Explainable & auditable",
    text: "Every recommendation traces back to the graph data and evidence it was drawn from.",
  },
  {
    Icon: Rule,
    title: "Standards-aligned",
    text: "Supports RBI and reliability practice consistent with API 580 and 581, ISO 14224, and PSM mechanical integrity.",
  },
  {
    Icon: Locked,
    title: "Enterprise security",
    text: "ISO 27001 certified, with single sign-on and fine-grained access control your security team requires.",
  },
];

const integrations = ["SAP PM", "IBM Maximo", "OSIsoft PI historian", "Hexagon SmartPlant", "AVEVA", "Autodesk", "DEXPI · ISO 15926"];

const relatedLinks = [
  { label: "UniGraph", href: "/platform/unigraph", description: "Resolve duplicate tags and clean CMMS data quality." },
  { label: "AI360", href: "/platform/ai360", description: "Build reliability agents on verified graph data." },
  { label: "Use-cases", href: "/use-cases", description: "Reliability and asset agents in production." },
];

const faqs = [
  {
    question: "How does AI improve reliability-centered maintenance?",
    answer:
      "AI helps only when it runs on clean, connected data. Plant360 grounds reliability agents in a unified asset graph, so they surface failure patterns, data gaps, and risk from verified information, with human-in-the-loop review on every recommendation.",
  },
  {
    question: "Is this only about cleaning up CMMS data?",
    answer:
      "No. Clean, connected data is the foundation, but the automation spans RBI and corrosion-loop support, root-cause analysis, turnaround scope, planning and spares, and control of work. Reliability is a full workflow, and agents assist across all of it.",
  },
  {
    question: "Can agents support RBI and corrosion-loop analysis?",
    answer:
      "Yes. Once assets are grouped into corrosion loops and inspection circuits on connected data, agents propose risk rankings, inspection intervals, and failure patterns for RBI and RCM, with reasoning that traces back to the source evidence.",
  },
  {
    question: "Does this replace our CMMS or EAM?",
    answer:
      "No. Plant360 unifies data from the CMMS and EAM you already run through an open API and layers a connected graph on top, keeping those systems as inputs and systems of record.",
  },
  {
    question: "How does connected data help turnarounds?",
    answer:
      "When asset history, drawings, and datasheets are linked and trustworthy, scope assembly, corrosion-loop analysis, and permit-to-work move faster and with less risk, because the information is ready before planning starts.",
  },
];

export default function ReliabilityMaintenancePage() {
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
            <p className={styles.eyebrow}>Solutions · Reliability &amp; maintenance</p>
            <h1 className={styles.title}>
              Maximize uptime, extend asset life, and <strong>de-risk every maintenance decision.</strong>
            </h1>
            <p className={styles.lead}>
              Reliability and maintenance is not a data cleanup project. It is a continuous chain of high-stakes
              decisions about what to inspect, when to intervene, what to stock, and what to include in the next
              turnaround.{" "}
              <strong>
                Plant360 grounds that workflow in a live asset graph and puts agents to work on the analysis your
                engineers perform by hand today, with a human in the loop on every action.
              </strong>
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

          <div className={styles.console} data-reveal aria-hidden="true">
            <div className={styles.consoleHead}>
              <span>UniGraph · reliability agents</span>
              <span className={styles.consoleStatus}>
                <span className={styles.dot} /> Live
              </span>
            </div>
            {consoleRows.map((r) => (
              <div key={r.tag} className={styles.consoleRow}>
                <p className={styles.consoleTag}>{r.tag}</p>
                <p className={styles.consoleText}>{r.text}</p>
                <span
                  className={`${styles.statusTag} ${r.status === "done" ? styles.statusDone : styles.statusReview}`}
                >
                  {r.status === "done" ? "Confirmed" : "Awaiting review"}
                </span>
              </div>
            ))}
            <div className={styles.consoleFoot}>GROUNDED IN 12,480 CONNECTED ASSETS</div>
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

      {/* Intro callout */}
      <Section tone="gray">
        <div className={styles.introCallout} data-reveal>
          <p className={styles.introText}>
            From fixed equipment integrity to rotating-equipment reliability, one connected foundation for the
            decisions that keep the plant running.
          </p>
        </div>
      </Section>

      {/* Why it matters */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Why it matters"
          title={
            <>
              Reliability decides whether the plant runs, how long it lasts, and how safely{" "}
              <strong>work gets done.</strong>
            </>
          }
          lead="For asset-intensive operations, maintenance is one of the largest controllable costs and one of the highest sources of risk. The margin between a well-run reliability program and a reactive one is measured in downtime, incidents, and asset life."
        />
        <div className={styles.stakeGrid} data-reveal data-reveal-stagger>
          {stakes.map(({ Icon, title, text }) => (
            <div key={title} className={styles.stakeCard}>
              <span className={styles.stakeIcon}>
                <Icon size={28} aria-hidden="true" />
              </span>
              <h3 className={styles.stakeTitle}>{title}</h3>
              <p className={styles.stakeText}>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The problem */}
      <Section tone="gray">
        <SectionHeading
          eyebrow="The problem"
          title={
            <>
              Reliability work is engineering. <strong>Most of the day is not.</strong>
            </>
          }
          lead="Reliability and maintenance teams spend the majority of their time locating, reconciling, and second-guessing data instead of preventing failure. The problem is not a single dirty table. It shows up in five distinct ways."
        />
        <div className={styles.probList} data-reveal data-reveal-stagger>
          {problems.map((p) => (
            <div key={p.n} className={styles.probRow}>
              <p className={styles.probNum}>{p.n}</p>
              <h3 className={styles.probTitle}>{p.title}</h3>
              <p className={styles.probText}>{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The approach */}
      <Section tone="light" id="approach">
        <SectionHeading
          eyebrow="The Plant360 approach"
          title={
            <>
              One connected foundation, <strong>from documents to working agents.</strong>
            </>
          }
          lead="The same four-layer pipeline that runs the platform is what makes reliability automation trustworthy. Each layer produces the structured, verified context the next one depends on."
        />
        <div className={styles.approachGrid} data-reveal data-reveal-stagger>
          {approachSteps.map((s) => (
            <div key={s.n} className={`${styles.approachCard} ${s.dark ? styles.approachCardDark : ""}`}>
              <div className={styles.approachTop}>
                <span className={styles.approachNum}>{s.n}</span>
                <span className={styles.approachKind}>{s.kind}</span>
              </div>
              <h3 className={`${styles.approachTitle} ${s.dark ? styles.approachTitleDark : ""}`}>{s.title}</h3>
              <p className={`${styles.approachText} ${s.dark ? styles.approachTextDark : ""}`}>{s.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.infoNote} data-reveal>
          <p className={styles.infoTitle}>Human-in-the-loop by design.</p>
          <p className={styles.infoText}>
            AI proposes, engineers confirm, and every action is explainable and auditable. Nothing is committed to
            your systems of record without review.
          </p>
        </div>
      </Section>

      {/* Use-cases */}
      <Section tone="gray">
        <SectionHeading
          eyebrow="What agents automate"
          title={
            <>
              Reliability and maintenance is far more than a CMMS. <strong>So is the automation.</strong>
            </>
          }
          lead="Once your plant is a connected graph, a wide range of document-heavy and analysis-heavy reliability tasks become work for agents. Each one grounds its recommendations in verified data, proposes work for engineers to approve, and reports an outcome you can hold it to."
        />
        <div className={styles.useGrid} data-reveal data-reveal-stagger>
          {useCases.map(({ Icon, title, subs, tag }) => (
            <div key={title} className={styles.useCard}>
              <div className={styles.useHead}>
                <span className={styles.useIcon}>
                  <Icon size={26} aria-hidden="true" />
                </span>
                <h3 className={styles.useTitle}>{title}</h3>
              </div>
              <div className={styles.useSubList}>
                {subs.map((s) => (
                  <div key={s.name}>
                    <p className={styles.useSubName}>{s.name}</p>
                    <p className={styles.useSubText}>{s.text}</p>
                  </div>
                ))}
              </div>
              <span className={styles.useTag}>{tag}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Worked example */}
      <Section tone="light">
        <SectionHeading
          eyebrow="In practice"
          title={
            <>
              The Turnaround-Scope Agent, <strong>end to end.</strong>
            </>
          }
          lead="Building a turnaround scope normally takes weeks of cross-referencing. Grounded in the asset graph, the agent does the assembly and the engineer stays in control of every decision."
        />
        <div className={styles.exampleGrid}>
          <div data-reveal data-reveal-stagger>
            <div className={styles.exampleList}>
              {exampleSteps.map((s) => (
                <div key={s.n} className={styles.exampleStep}>
                  <span className={styles.exampleStepNum}>{s.n}</span>
                  <div>
                    <p className={styles.exampleStepTitle}>{s.title}</p>
                    <p className={styles.exampleStepText}>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.infoNote}>
              <p className={styles.infoTitle}>Scope built in days, not weeks.</p>
              <p className={styles.infoText}>
                Engineers enter the turnaround with a defensible, evidence-backed worklist and fewer discovery items
                during execution.
              </p>
            </div>
          </div>
          <div className={styles.examplePanel} data-reveal>
            <p className={styles.examplePanelLabel}>One graph, every consumer</p>
            <p className={styles.examplePanelText}>
              The same asset graph that assembled this scope feeds RBI, RCA, and control-of-work agents, so every
              team works from the same verified picture of the plant.
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
              Measurable results, <strong>not promises.</strong>
            </>
          }
          lead="Representative outcomes from grounding reliability work in a connected asset graph. Figures are directional and vary by plant, data maturity, and scope."
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
          A reliability team could not trust its CMMS: thousands of duplicate and mislabeled tags made every
          analysis suspect. After unifying records, drawings, and datasheets into one asset graph, duplicates were
          resolved and history was connected to each asset. Engineers scoped inspection circuits in hours instead of
          days and entered the next turnaround with data they trusted.
        </p>
      </Section>

      {/* Trust */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Built for production"
          title={
            <>
              Automation your engineers and auditors <strong>can stand behind.</strong>
            </>
          }
        />
        <div className={styles.trustGrid} data-reveal data-reveal-stagger>
          {trust.map(({ Icon, title, text }) => (
            <div key={title} className={styles.trustCard}>
              <span className={styles.trustIcon}>
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className={styles.trustTitle}>{title}</h3>
              <p className={styles.trustText}>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Integrations */}
      <Section tone="gray">
        <div className={styles.integGrid}>
          <div data-reveal>
            <p className={styles.eyebrow}>Integrations</p>
            <h2 className={styles.integTitle}>Your CMMS, EAM, and historian are inputs, not the platform.</h2>
            <p className={styles.integText}>
              Plant360 ingests from the systems you already run and pushes structured data back out through an open
              API. You own the data layer, with no proprietary lock-in to any single vendor.
            </p>
          </div>
          <div className={styles.tagCloud} data-reveal data-reveal-stagger>
            {integrations.map((t) => (
              <span key={t} className={styles.tagChip}>
                {t}
              </span>
            ))}
            <span className={`${styles.tagChip} ${styles.tagChipAccent}`}>Open API · your data</span>
          </div>
        </div>
      </Section>

      {/* Related */}
      <Section tone="light">
        <RelatedLinks title="Related platform & use-cases" links={relatedLinks} />
      </Section>

      {/* FAQ */}
      <Section tone="gray">
        <Faq items={faqs} title="Reliability & maintenance FAQ" />
      </Section>

      {/* Final CTA */}
      <Section tone="dark">
        <h2 className={styles.ctaTitle}>
          Ready to turn your plant&rsquo;s documents into <strong>reliability agents?</strong>
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
