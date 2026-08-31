import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { solutions } from "@/content/solutions";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading, RelatedLinks } from "@/components/page/blocks";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Solutions | Plant360.AI",
  description:
    "One full-stack platform, mapped to the plant problems you own: digital transformation, digital twins, digitization, reliability, efficiency, and asset data.",
  path: "/solutions",
});

const solutionLinks = solutions.map((s) => ({
  label: s.name,
  href: `/solutions/${s.slug}`,
  description: s.valueProp,
}));

export default function SolutionsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={
          <>
            One platform, <strong>mapped to the problems you own.</strong>
          </>
        }
        lead="Every Plant360 solution is the same full-stack industrial data and AI platform, framed for a specific goal. Start with the problem in front of you, whether that is a drawing backlog, dirty CMMS data, or a stalled transformation program, and build on one trusted foundation. 50%+ efficiency, end to end."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "See the platform", href: "/platform" }}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ]}
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="Six solutions"
          title="Where do you want to start?"
          lead="Each solution is useful on its own and compounds with the rest, because they all run on the same digitized drawings and live asset graph."
        />
        <RelatedLinks title="Explore the solutions" links={solutionLinks} />
      </Section>

      <CtaBand />
    </>
  );
}
