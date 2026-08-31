import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { useCases } from "@/content/use-cases";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading, RelatedLinks } from "@/components/page/blocks";
import { CtaBand } from "@/components/sections/CtaBand";
import grid from "./UseCaseGrid.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "AI Use-cases & Agents | Plant360.AI",
  description:
    "Six AI agents running real plant work today: HAZOP prep 50%+ faster, Management of Change prep 40%+ lower, EAM and CMMS synced with zero manual reconciliation.",
  path: "/use-cases",
});

const related = [
  { label: "AI360", href: "/platform/ai360", description: "The build layer these agents are deployed on." },
  { label: "ChangeIQ", href: "/platform/changeiq", description: "The production MoC app behind use-case 06." },
  { label: "UniGraph", href: "/platform/unigraph", description: "The live asset graph every agent reasons over." },
];

export default function UseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="AI use-cases & agents"
        title={
          <>
            The AI isn&apos;t hidden in a roadmap.{" "}
            <strong>It&apos;s running real plant work today.</strong>
          </>
        }
        lead="These six agents are in production, not on a slide. Each runs on the same pipeline: digitized drawings become a live asset graph, and agents built on AI360 act on that graph across engineering, operations, and safety. Every one of them ships with a measured outcome."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "See the platform", href: "/platform" }}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Use-cases", path: "/use-cases" },
        ]}
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="In production"
          title="Six agents doing document-heavy plant work"
          lead="Each agent grounds its actions in verified plant data, proposes work for your engineers to approve, and reports a number you can hold it to."
        />
        <div className={grid.grid}>
          {useCases.map((uc) => (
            <article key={uc.slug} className={grid.card}>
              <span className={grid.num}>{uc.num}</span>
              <h3 className={grid.title}>{uc.title}</h3>
              <p className={grid.desc}>{uc.desc}</p>
              <div className={grid.foot}>
                <span className={grid.runs}>
                  Runs on: <span className={grid.runsName}>{uc.agent}</span>
                </span>
                <span className={grid.metric}>{uc.metric}</span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="gray">
        <SectionHeading
          eyebrow="How these run"
          title="One pipeline underneath all six"
          lead="No agent here is a standalone bot. Convert produces the system of record, UniGraph structures it into a graph, and AI360 deploys agents on top, so every use-case shares one governed, human-in-the-loop foundation."
        />
        <RelatedLinks title="Where these run in the stack" links={related} />
      </Section>

      <CtaBand />
    </>
  );
}
