/**
 * Company news / announcements. Code-backed for now; shaped to move to Sanity
 * cleanly (import news / getNewsItem directly, synchronously). Dates are ISO
 * strings. Voice: outcome-first, numbers and mechanisms, no hype.
 */

export type NewsItem = {
  slug: string;
  title: string;
  /** ISO publish date. */
  date: string;
  /** One or two sentence summary used in the list view. */
  excerpt: string;
  /** Optional longer body, for a future detail view. */
  body?: string;
};

export const news: NewsItem[] = [
  {
    slug: "changeiq-cuts-moc-prep-40-percent",
    title: "ChangeIQ cuts Management of Change prep time by more than 40% in production",
    date: "2026-06-24",
    excerpt:
      "Operators running ChangeIQ report cutting the document-gathering and preparation phase of Management of Change by more than 40%, with packages auto-assembled from the live asset graph.",
    body:
      "ChangeIQ auto-assembles MoC packages by pulling the affected drawings, tags, datasheets, and assets directly from the UniGraph asset knowledge graph, then routes risk reviews and approvals with full context and a complete audit trail. Because every package reflects the plant as it actually is, teams stop chasing documents across email and spreadsheets and cut preparation time by more than 40%.",
  },
  {
    slug: "iso-27001-certification",
    title: "Plant360.AI achieves ISO 27001 certification",
    date: "2026-04-08",
    excerpt:
      "Plant360.AI is now ISO 27001 certified, confirming an audited information security management system for the industrial data our customers trust us with.",
    body:
      "ISO 27001 certification validates that Plant360 operates an audited information security management system covering access control, data handling, and incident response. Combined with our open API and no-lock-in data ownership model, it means customers can move plant documents into a live system of record and asset knowledge graph on infrastructure that meets a recognized international security standard.",
  },
  {
    slug: "83000-drawings-digitized-milestone",
    title: "83,000+ engineering drawings and 250,000+ datasheets digitized",
    date: "2026-02-19",
    excerpt:
      "The Convert pipeline has now digitized more than 83,000 engineering drawings and 250,000 datasheets into structured, audit-ready data, at roughly 70% faster and 50% lower cost than manual redrawing.",
    body:
      "Every one of those drawings and datasheets flows through the same pipeline that produces both a live system of record and a queryable asset knowledge graph, so digitization and structuring happen once, not as two separate projects. Human-in-the-loop verification keeps accuracy provable across the entire register.",
  },
  {
    slug: "unigraph-open-api-launch",
    title: "UniGraph opens its asset knowledge graph through a public API",
    date: "2026-01-27",
    excerpt:
      "Teams can now query and push structured asset data through the UniGraph open API, so the graph feeds any downstream system with no proprietary lock-in.",
    body:
      "The UniGraph API exposes the connected model of tags, equipment, lines, and documents that Plant360 builds from your drawings and existing systems of record. Engineers and downstream applications can retrieve connected asset context roughly 10x faster than manual document hunting, and because the data layer is open, customers keep full ownership of it.",
  },
];

export function getNewsItem(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}
