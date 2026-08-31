import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { news } from "@/content/news";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/page/blocks";
import { CtaBand } from "@/components/sections/CtaBand";
import styles from "./News.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "News",
  description:
    "Announcements from Plant360.AI: ChangeIQ cutting MoC prep time 40%+, ISO 27001 certification, and 83,000+ drawings digitized into structured data.",
  path: "/company/news",
});

// Format an ISO date for display, deterministic across builds (no locale drift).
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function NewsPage() {
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <PageHero
        eyebrow="News"
        title={
          <>
            What is new at <strong>Plant360.AI.</strong>
          </>
        }
        lead="Product milestones, security certifications, and proof from live plants. We announce results, not roadmaps, so every item here is a number that already moved."
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "See the platform", href: "/platform" }}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Company", path: "/company/about" },
          { name: "News", path: "/company/news" },
        ]}
      />

      <Section tone="light">
        <SectionHeading eyebrow="Announcements" title="Latest from Plant360" />
        <div className={styles.list}>
          {sorted.map((n) => (
            <article key={n.slug} className={styles.item}>
              <p className={styles.date}>
                <time dateTime={n.date}>{formatDate(n.date)}</time>
              </p>
              <div>
                <h3 className={styles.title}>{n.title}</h3>
                <p className={styles.excerpt}>{n.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
