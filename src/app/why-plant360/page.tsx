import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading, FeatureGrid, StatGrid } from "@/components/page/blocks";
import { CompareTable } from "@/components/page/CompareTable";
import { CtaBand } from "@/components/sections/CtaBand";
import { differentiators, successStories, tractionFacts } from "@/content/traction";
import styles from "./why.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Why Plant360.AI",
  description:
    "Industrial work still runs on human hours. Plant360 keeps your system of record current and builds the asset graph AI needs from one pipeline, for 50%+ efficiency, trusted by Fortune 50 operators.",
  path: "/why-plant360",
});

// THE PROBLEM: industrial work still runs on human hours.
const problemStats = [
  { value: "~30%", label: "Of a senior engineer's day goes to finding and reconciling data, not engineering (IDC / Tech-Clarity)" },
  { value: "$81/hr", label: "Loaded cost of a process or petroleum engineer, $169K+ a year, and every plan is bound to scarce experts (U.S. BLS)" },
  { value: "3 to 4 months", label: "One review cycle, from a representative refinery HAZOP, and every category runs the same manual cadence" },
];

const workCategories = [
  "Maintenance Planning",
  "Control of Work / PTW",
  "Inspection & Integrity",
  "Process Safety",
  "Management of Change",
  "Projects & Completions",
];

// THE GAP: today you choose system of record OR AI agents.
const gapColumns = [
  {
    title: "Built for AI, blind to the record",
    body: "Digitization and AI tools build an asset graph, but never keep the smart drawings and design data current in the system of record. The graph is real; the record it came from goes stale.",
  },
  {
    title: "Built for the record, blind to AI",
    body: "Digitization tools that export to engineering systems hold the system of record, but never produce data an AI agent can be developed against. The record is current; there is nothing for AI to reason over.",
  },
];

const gapCosts = [
  "Duplicated and drifting data",
  "Constant manual reconciliation",
  "New digital and workflow silos",
];

// Head-to-head comparison (reuses existing CompareTable).
const compareColumns = [
  { name: "Plant360", highlight: true },
  { name: "Digitization tools" },
  { name: "Graph / AI tools" },
  { name: "AI point solutions" },
];

const compareRows = [
  { label: "Keeps system of record current", values: [true, true, false, false] },
  { label: "Structured graph for AI", values: [true, false, true, false] },
  { label: "Agents in production", values: [true, false, false, true] },
  { label: "One pipeline, zero duplication", values: [true, false, false, false] },
  { label: "No vendor lock-in", values: [true, false, false, false] },
];

const governance = [
  {
    title: "ISO 27001 certified",
    body: "Information security is managed against an audited, certified framework, so your engineering data is handled to a standard your security team already recognizes.",
  },
  {
    title: "You own the data",
    body: "The Smart Drawings, the graph, and the records are yours, exposed through an open API. Export them, integrate them, or leave. No proprietary format holds your plant hostage.",
  },
  {
    title: "Human-in-the-loop",
    body: "Every extraction and every agent action is reviewable and approvable by your engineers. AI proposes; qualified people confirm, so output stays audit-ready.",
  },
  {
    title: "Full auditability",
    body: "Every change to a drawing, a graph node, or an MoC package carries a traceable record of who changed what and when, which is what safety work requires.",
  },
  {
    title: "SAML SSO and SCIM",
    body: "Standards-based single sign-on and SCIM provisioning plug into your existing identity provider, so access and offboarding follow the controls you already run.",
  },
];

export default function WhyPlant360Page() {
  return (
    <>
      <PageHero
        eyebrow="Why Plant360"
        title={
          <>
            Every other tool makes you choose. Plant360 <strong>does both.</strong>
          </>
        }
        lead="You are told to pick one: a system of record that stays current, or data your AI agents can act on. Plant360 keeps both in sync from a single pipeline. Digitization tools give you searchable documents but no graph for AI. Graph and AI tools give you a model that nothing keeps fed. Plant360 produces both from the same source, with no duplication and no drift."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "See the platform", href: "/platform" }}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Why Plant360", path: "/why-plant360" },
        ]}
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="The problem"
          title="Industrial work still runs on human hours"
          lead="Across the plant, the bottleneck is not judgment, it is the manual work of finding, reconciling, and re-checking data before any expert can start. That tax lands on the scarcest, most expensive people you have."
        />
        <StatGrid items={problemStats} />
        <div className={styles.chips} data-reveal data-reveal-stagger>
          {workCategories.map((c) => (
            <span key={c} className={styles.chip}>
              <span className={styles.chipMark} aria-hidden="true" />
              {c}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="gray">
        <SectionHeading
          eyebrow="The gap"
          title={
            <>
              You get the record or the AI, <strong>never both in sync.</strong>
            </>
          }
          lead="The market splits in two. Neither side keeps the system of record and the AI-ready data current at the same time, so the gap gets patched with point solutions."
        />
        <FeatureGrid items={gapColumns} columns={2} />
        <div className={styles.chips} data-reveal data-reveal-stagger>
          {gapCosts.map((c) => (
            <span key={c} className={styles.chip}>
              <span className={styles.chipMark} aria-hidden="true" />
              {c}
            </span>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          eyebrow="Head to head"
          title={
            <>
              What doing both means, <strong>row by row.</strong>
            </>
          }
          lead="The same five capabilities that decide whether AI reaches production, mapped across the categories you are comparing."
        />
        <CompareTable
          columns={compareColumns}
          rows={compareRows}
          caption="Capability comparison across categories"
        />
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Why Plant360"
          title="Built for engineering data, not generic AI"
          lead="Doing both only matters if the output is trustworthy. These four differences are why Plant360 reaches production where generic tools stall."
        />
        <FeatureGrid items={differentiators} columns={2} />
      </Section>

      <Section tone="gray">
        <SectionHeading
          eyebrow="Traction"
          title={
            <>
              Real operators, <strong>proven results.</strong>
            </>
          }
          lead="Plant360 runs in production with Fortune 50 operators and a top global nuclear engineering firm, extended by system integrators, SmartPlant P&ID service agencies, and regional partners."
        />
        <StatGrid items={tractionFacts} />
        <div className={styles.stories} data-reveal data-reveal-stagger>
          {successStories.map((s) => (
            <div key={s.company} className={styles.story}>
              <span className={styles.storyProduct}>{s.product}</span>
              <p className={styles.storyCompany}>{s.company}</p>
              <p className={styles.storyOutcome}>{s.outcome}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Security & governance"
          title="Built to be trusted with safety-critical data"
          lead="Doing both only counts if the plant can trust it. Governance is a first-class layer, not an add-on."
        />
        <FeatureGrid items={governance} columns={2} />
      </Section>

      <CtaBand />
    </>
  );
}
