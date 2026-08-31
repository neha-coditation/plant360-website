import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { posts, getPost, type Block } from "@/content/blog";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { RelatedLinks } from "@/components/page/blocks";
import { Prose } from "@/components/page/Prose";
import { CtaBand } from "@/components/sections/CtaBand";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import styles from "../Blog.module.scss";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} | Plant360.AI`,
    description: post.excerpt,
    path: `/resources/blog/${post.slug}`,
  });
}

/** Slugify a heading into a stable anchor id. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Render one content block. h2 blocks receive a slugified id for TOC anchors. */
function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={index} id={slugify(block.text)}>
          {block.text}
        </h2>
      );
    case "p":
      return <p key={index}>{block.text}</p>;
    case "ul":
      return (
        <ul key={index}>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote key={index}>{block.text}</blockquote>;
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const headings = post.body
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ text: b.text, id: slugify(b.text) }));

  const showToc = headings.length >= 3;

  const related = posts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      label: p.title,
      href: `/resources/blog/${p.slug}`,
      description: p.excerpt,
    }));

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        path={`/resources/blog/${post.slug}`}
        datePublished={post.datePublished}
        authorName={post.author.name}
      />

      <PageHero
        eyebrow={post.category}
        title={post.title}
        lead={
          <>
            {post.excerpt}
            <span className={styles.postMeta}>
              <span>
                {post.author.name}, {post.author.role}
              </span>
              <span className={styles.postMetaSep} aria-hidden="true">
                /
              </span>
              <span>{formatDate(post.datePublished)}</span>
              <span className={styles.postMetaSep} aria-hidden="true">
                /
              </span>
              <span>{post.readingMinutes} min read</span>
            </span>
          </>
        }
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/resources/blog" },
          { name: post.title, path: `/resources/blog/${post.slug}` },
        ]}
      />

      <Section tone="light">
        {showToc ? (
          <nav className={styles.toc} aria-label="On this page">
            <p className={styles.tocTitle}>On this page</p>
            <ul className={styles.tocList}>
              {headings.map((h) => (
                <li key={h.id}>
                  <a className={styles.tocLink} href={`#${h.id}`}>
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <Prose>{post.body.map((block, i) => renderBlock(block, i))}</Prose>
      </Section>

      <Section tone="gray">
        <RelatedLinks title="Related posts" links={related} />
      </Section>

      <CtaBand />
    </>
  );
}
