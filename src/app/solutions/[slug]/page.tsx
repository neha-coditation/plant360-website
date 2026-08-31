import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { solutions, getSolution } from "@/content/solutions";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading, FeatureGrid, StatGrid, RelatedLinks } from "@/components/page/blocks";
import { Faq } from "@/components/page/Faq";
import { GraphIllustration, IntegrationsDiagram } from "@/components/page/illustrations";
import { CtaBand } from "@/components/sections/CtaBand";
import styles from "./solution.module.scss";

// These slugs have bespoke routes at /solutions/<slug>, so they are excluded
// here to avoid duplicate static-export paths.
const bespokeSlugs = new Set([
  "digital-transformation",
  "digital-twin",
  "reliability-maintenance",
  "operational-efficiency",
  "asset-data-platform",
]);

export function generateStaticParams() {
  return solutions.filter((s) => !bespokeSlugs.has(s.slug)).map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = getSolution(params.slug);
  if (!solution) return {};
  return buildMetadata({
    title: `${solution.seo.title} | Plant360.AI`,
    description: solution.seo.description,
    path: `/solutions/${solution.slug}`,
  });
}

// Optional hero visual per solution, where it fits the message.
const heroAside: Record<string, ReactNode> = {
  "asset-data-platform": <IntegrationsDiagram />,
  "digital-twin": <GraphIllustration />,
  "reliability-maintenance": <GraphIllustration />,
};

// Related platform pages and use-cases per solution, for internal linking.
const related: Record<string, { label: string; href: string; description?: string }[]> = {
  "digital-transformation": [
    { label: "Convert", href: "/platform/convert", description: "Digitize the drawing backlog that transformation starts from." },
    { label: "AI360", href: "/platform/ai360", description: "Ship agents in days once the data foundation is in place." },
    { label: "Use-cases", href: "/use-cases", description: "See the agents already running real plant work." },
  ],
  "digital-twin": [
    { label: "Convert", href: "/platform/convert", description: "Extract P&ID connectivity a twin needs to model flow." },
    { label: "UniGraph", href: "/platform/unigraph", description: "The synced asset graph that keeps a twin from drifting." },
    { label: "Use-cases", href: "/use-cases", description: "Agents built on the same live asset data." },
  ],
  digitization: [
    { label: "Convert", href: "/platform/convert", description: "The digitization engine behind this solution." },
    { label: "UniGraph", href: "/platform/unigraph", description: "Where digitized drawings become a live graph." },
    { label: "Use-cases", href: "/use-cases", description: "What structured drawings unlock downstream." },
  ],
  "reliability-maintenance": [
    { label: "UniGraph", href: "/platform/unigraph", description: "Resolve duplicate tags and clean CMMS data quality." },
    { label: "AI360", href: "/platform/ai360", description: "Build reliability agents on verified graph data." },
    { label: "Use-cases", href: "/use-cases", description: "Reliability and asset agents in production." },
  ],
  "operational-efficiency": [
    { label: "AI360", href: "/platform/ai360", description: "Compose workflow agents in days, not months." },
    { label: "ChangeIQ", href: "/platform/changeiq", description: "Cut Management of Change prep by 40%+." },
    { label: "Use-cases", href: "/use-cases", description: "Six agents automating document-heavy work." },
  ],
  "asset-data-platform": [
    { label: "UniGraph", href: "/platform/unigraph", description: "The living asset knowledge graph at the core." },
    { label: "Convert", href: "/platform/convert", description: "Feed the platform with digitized drawing data." },
    { label: "Use-cases", href: "/use-cases", description: "Agents grounded on the asset data platform." },
  ],
};

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const solution = getSolution(params.slug);
  if (!solution) notFound();

  const stackFeatures = solution.stackMapping.map((s) => ({ title: s.layer, body: s.how }));

  return (
    <>
      <PageHero
        eyebrow={solution.eyebrow}
        title={
          <>
            {solution.name}: <strong>{solution.valueProp}</strong>
          </>
        }
        lead={solution.answer}
        metric={solution.outcomes[0]?.value}
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "Why Plant360", href: "/why-plant360" }}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: solution.name, path: `/solutions/${solution.slug}` },
        ]}
        aside={heroAside[solution.slug]}
      />

      <Section tone="light">
        <SectionHeading eyebrow="The problem" title="What is actually holding you back" lead={solution.problemLede} />
        <ol className={styles.pains} data-reveal data-reveal-stagger>
          {solution.painPoints.map((point, i) => (
            <li key={point} className={styles.pain}>
              <span className={styles.painNum} aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className={styles.painText}>{point}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="gray">
        <SectionHeading eyebrow="How Plant360 solves it" title="The message, made concrete" lead={solution.messageThrust} />
        <FeatureGrid items={stackFeatures} columns={2} />
      </Section>

      <Section tone="light">
        <SectionHeading
          eyebrow="Capabilities"
          title="What you get"
          lead={`Everything ${solution.name} delivers is built to produce structured, trusted output, not another silo.`}
        />
        <FeatureGrid items={solution.capabilities} columns={3} />
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="Outcomes" title="Measurable results, not promises." />
        <StatGrid items={solution.outcomes} />
        <p className={styles.caseQuote} data-reveal>
          {solution.caseNarrative}
        </p>
      </Section>

      <Section tone="light">
        <Faq items={solution.faqs} title={`${solution.name} FAQ`} />
      </Section>

      <Section tone="gray">
        <RelatedLinks title="Related platform & use-cases" links={related[solution.slug] ?? []} />
      </Section>

      <CtaBand />
    </>
  );
}
