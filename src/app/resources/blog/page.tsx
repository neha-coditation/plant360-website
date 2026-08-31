import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { posts, categories } from "@/content/blog";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import styles from "./Blog.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Blog | Plant360.AI",
  description:
    "Field notes on industrial AI, P&ID digitization, asset knowledge graphs, and the workflows they unlock, from the team building the full-stack platform.",
  path: "/resources/blog",
});

/** Format an ISO date as a readable, locale-stable label. */
function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexPage() {
  const sorted = [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title={
          <>
            The Plant360 <strong>blog.</strong>
          </>
        }
        lead="Field notes on industrial AI, P&ID digitization, and the asset knowledge graph that connects them. Written by the team building the platform, for the engineers and operators who run the plant."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/resources/blog" },
        ]}
      />

      <Section tone="light">
        <div className={styles.chips}>
          <span className={`${styles.chip} ${styles.chipActive}`}>All</span>
          {categories.map((c) => (
            <span key={c} className={styles.chip}>
              {c}
            </span>
          ))}
        </div>

        <div className={styles.grid}>
          {sorted.map((post) => (
            <Link key={post.slug} href={`/resources/blog/${post.slug}`} className={styles.card}>
              <span className={styles.cardCategory}>{post.category}</span>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.cardMeta}>
                <span>{post.author.name}</span>
                <span className={styles.cardMetaSep} aria-hidden="true">
                  /
                </span>
                <span>{formatDate(post.datePublished)}</span>
                <span className={styles.cardMetaSep} aria-hidden="true">
                  /
                </span>
                <span>{post.readingMinutes} min read</span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
