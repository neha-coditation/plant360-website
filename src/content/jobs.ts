/**
 * Open roles content. Code-backed for now; shaped so it can move to Sanity
 * without changing call sites (import jobs / getJob directly, synchronously).
 * datePosted values are ISO strings. Voice: outcome-first, no hype.
 */

export type Job = {
  slug: string;
  title: string;
  /** City / region, or "Remote". Used for display and JobPosting JSON-LD. */
  location: string;
  /** Employment type, e.g. "Full-time". Maps to JobPosting employmentType. */
  type: string;
  /** Owning team, e.g. "Engineering". */
  team: string;
  /** One-paragraph role summary. Also used as the JobPosting description. */
  description: string;
  /** ISO date the role was posted. */
  datePosted: string;
};

export const jobs: Job[] = [
  {
    slug: "senior-ml-engineer-document-ai",
    title: "Senior Machine Learning Engineer, Document AI",
    location: "Remote (US / EU)",
    type: "Full-time",
    team: "Engineering",
    description:
      "Own the models that turn scanned P&IDs, CAD, and legacy PDF drawings into structured, audit-ready data. You will push extraction accuracy on symbols, tags, line numbers, and connectivity, design the human-in-the-loop verification loop that makes every result provable, and ship pipelines that have already digitized 83,000+ drawings. You should have production experience with computer vision or document understanding models and care about measurable accuracy over demos.",
    datePosted: "2026-06-02",
  },
  {
    slug: "solutions-engineer-industrial-data",
    title: "Solutions Engineer, Industrial Data",
    location: "Houston, TX",
    type: "Full-time",
    team: "Customer",
    description:
      "Be the technical partner who takes plant operators from documents to working agents. You will scope digitization and knowledge-graph projects, run demos on customer drawings, connect UniGraph to the CAD, EAM, and CMMS systems teams already run, and prove out the 40%+ Management of Change time savings ChangeIQ delivers. You should understand process or plant engineering workflows and be comfortable translating them into data models and integrations.",
    datePosted: "2026-05-14",
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
