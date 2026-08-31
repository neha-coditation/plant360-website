import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getSiteSettings } from "@/lib/settings";
import { outcomeMetrics } from "@/content/proof";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading, Steps, StatGrid, FeatureGrid } from "@/components/page/blocks";
import { PlatformArchitecture } from "@/components/page/PlatformArchitecture";
import { StackVisual } from "@/components/sections/StackVisual";
import { PlatformLayers } from "@/components/sections/PlatformLayers";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Platform Overview | Plant360.AI",
  description:
    "The full-stack industrial data and AI platform: four connected layers, one pipeline. Digitize, structure, build, and apply, for 50%+ efficiency end to end.",
  path: "/platform",
});

const steps = [
  { step: "01", title: "Digitize", body: "Convert turns CAD, DWG, and scanned PDF drawings into audit-ready Smart Drawings." },
  { step: "02", title: "Structure", body: "UniGraph unifies drawings, datasheets, and records into one living asset knowledge graph." },
  { step: "03", title: "Build", body: "AI360 lets teams build and deploy agents on that graph in days, not months." },
  { step: "04", title: "Apply", body: "Production apps and agents like ChangeIQ run real plant work across engineering, ops, and safety." },
];

const differentiators = [
  {
    title: "Proprietary industrial AI models",
    body: "Drawing computer vision, OCR, and multi-modal models trained on tens of thousands of industrial drawings, process fundamentals, and technical documents, an accuracy generic AI cannot match.",
  },
  {
    title: "Efficient human-in-the-loop workflows",
    body: "Not just AI. Guided, guardrailed review puts engineers in the loop; AI proposes, people confirm, and every action is reviewable and auditable, so automation stays safe in critical work.",
  },
  {
    title: "Your data, no platform lock-in",
    body: "Open API and SDKs plus standards-native interop with DEXPI 1.3 / 2.0, ISO 15926, SmartPlant, and Aveva. You own the data layer and can export or integrate freely.",
  },
  {
    title: "Enterprise security and governance",
    body: "ISO 27001 certified, with SAML-based single sign-on, fine-grained authorization, and SCIM provisioning, so your asset data meets the standard your security team already requires.",
  },
  {
    title: "Built to scale with the plant",
    body: "A distributed graph storage and processing engine handles terabyte to petabyte plants with best-in-class traversal queries, so the largest sites onboard without slowing down.",
  },
  {
    title: "New use-cases in days, not months",
    body: "Pre-built agents, templates, and hundreds of integrations on AI360 turn each new use-case into a configuration, not a data science project, so capability compounds.",
  },
];

export default async function PlatformOverviewPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <PageHero
        eyebrow="The platform"
        title={
          <>
            The complete industrial <strong>data & AI platform.</strong>
          </>
        }
        lead="Plant360 solves data, integration, and AI end to end, in one stack, so agents can run the work. Each layer is useful on its own; connected, they compound. Your documents become data, your data becomes agents, and your agents deliver measurable efficiency, with no silos and no vendor lock-in."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Why Plant360", href: "/why-plant360" }}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
        ]}
        aside={<StackVisual />}
      />

      <PlatformLayers />

      <Section tone="gray">
        <SectionHeading
          eyebrow="One stack"
          title={
            <>
              One stack for <strong>data, integration & AI.</strong>
            </>
          }
          lead="From proprietary AI models at the base to co-pilots and apps at the top, every layer is built for engineering data and unified by one drawing and document representation model."
        />
        <PlatformArchitecture />
      </Section>

      <Section tone="dark">
        <SectionHeading
          eyebrow="Why it holds up in production"
          title="Built for engineering data, secure, and yours."
          lead="The platform highlights that matter to engineering, IT, and OT leaders evaluating industrial AI."
        />
        <FeatureGrid items={differentiators} columns={3} />
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="One pipeline"
          title={
            <>
              Digitize to graph to agent, <strong>end to end.</strong>
            </>
          }
          lead="The same pipeline that digitizes your drawings produces both an authoritative system of record and a living asset graph, so nothing drifts and your AI always has real context."
        />
        <Steps items={steps} />
      </Section>

      <Section tone="gray">
        <SectionHeading eyebrow="Outcomes" title="Measurable efficiency, proven across the plant." />
        <StatGrid items={outcomeMetrics.map((m) => ({ value: m.value, label: m.label }))} />
        <p
          data-reveal
          style={{
            marginTop: 24,
            fontFamily: "var(--p360-font-mono)",
            fontSize: 13,
            color: "var(--sf-faint)",
            letterSpacing: "0.04em",
          }}
        >
          {settings.metrics.drawings.toLocaleString("en-US")}+ drawings and{" "}
          {settings.metrics.datasheets.toLocaleString("en-US")}+ datasheets digitized. ISO 27001 certified. Open API, no lock-in.
        </p>
      </Section>

      <CtaBand />
    </>
  );
}
