import type { Metadata } from "next";
import Link from "next/link";
import { CheckmarkOutline, DataShare, ChartLineData, UserMultiple } from "@carbon/icons-react";
import { buildMetadata } from "@/lib/seo";
import { proofPoints, outcomeMetrics } from "@/content/proof";
import { Section } from "@/components/ui/Section";
import { SectionHeading, FeatureGrid, StatGrid } from "@/components/page/blocks";
import { CtaButton } from "@/components/ui/CtaButton";

import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import styles from "./about.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description:
    "Plant360.AI turns plant documents into a live system of record and an asset knowledge graph from one pipeline, powering 50%+ efficiency and 83,000+ drawings digitized.",
  path: "/company/about",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Company", path: "/company/about" },
  { name: "About", path: "/company/about" },
];

const stackRows: { kind: string; name: string; note: string; accent?: boolean }[] = [
  { kind: "01 · Input", name: "Documents", note: "P&IDs, datasheets, records" },
  { kind: "02 · Pipeline", name: "Convert + UniGraph", note: "One pipeline, both outputs" },
  { kind: "03 · Output A", name: "System of record", note: "Authoritative, audit-ready" },
  { kind: "04 · Output B", name: "Asset knowledge graph", note: "Live, queryable by AI agents", accent: true },
];

const heroStats = [
  { num: "50%+", label: "Efficiency gains across engineering, operations and safety" },
  { num: "83,000+", label: "Engineering drawings digitized" },
  { num: "250,000+", label: "Datasheets and specifications digitized" },
  { num: "ISO 27001", label: "Certified, and built so you own your data" },
];

const arcStages = [
  { title: "Software-aided", text: "Documents scattered across systems; people do the reconciling by hand." },
  { title: "Intelligent", text: "Data is structured and connected, so engineers and agents can query it directly." },
  { title: "Autonomous", text: "The plant senses, reasons, and increasingly decides, grounded in trusted data.", active: true },
];

// Core company values. Rendered as a 2-up feature grid on a dark band.
const values = [
  {
    title: "Accuracy is provable",
    body: "Every extraction is reviewable and traceable from source drawing to structured record. We ship measurable accuracy, not black-box demos, because plant decisions depend on it.",
    Icon: CheckmarkOutline,
  },
  {
    title: "You own your data",
    body: "Open API, no proprietary lock-in, and integration with the CAD and asset systems you already run. The data layer we build is yours to keep and query anywhere.",
    Icon: DataShare,
  },
  {
    title: "Outcomes over hype",
    body: "We lead with numbers and mechanisms: 70% faster digitization, 10x faster retrieval, 40%+ less MoC prep. If it does not move a real plant metric, it is not the point.",
    Icon: ChartLineData,
  },
  {
    title: "Human-in-the-loop",
    body: "AI proposes, engineers confirm. Automation runs on verified data with review, approval, and a full audit trail, so people stay in control of what changes.",
    Icon: UserMultiple,
  },
];

// Leadership is CMS-driven; unnamed roles are placeholders to be swapped for
// real profiles in Sanity. Initials render in the avatar until photos exist.
const leadership = [
  {
    name: "Chetan Saundankar",
    role: "Founder",
    focus: "Sets company direction and works hand in hand with customers, turning industrial documents into data that enterprises can act on.",
    initials: "CS",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/chetansa/" },
      { label: "X", href: "https://x.com/chetansa" },
    ],
  },
  {
    name: "Leadership name",
    role: "GTM",
    focus: "Go-to-market, customers, and the partnerships that scale Plant360 across operators, EPCs, and integrators.",
    initials: "P3",
    links: [],
  },
  {
    name: "Leadership name",
    role: "Engineering",
    focus: "Owns the pipeline from digitization to graph to agents, and the platform and extraction accuracy behind it.",
    initials: "P3",
    links: [],
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />

      {/* Hero */}
      <Section tone="dark">
        <nav className={styles.crumbs} aria-label="Breadcrumb">
          {breadcrumbs.map((c, i) => (
            <span key={`${c.path}-${c.name}`}>
              {i > 0 ? (
                <span className={styles.crumbSep} aria-hidden="true">
                  /
                </span>
              ) : null}
              {i < breadcrumbs.length - 1 ? (
                <Link href={c.path}>{c.name}</Link>
              ) : (
                <span aria-current="page">{c.name}</span>
              )}
            </span>
          ))}
        </nav>

        <div className={styles.hero}>
          <div data-reveal>
            <p className={styles.eyebrow}>Company · About</p>
            <h1 className={styles.title}>
              Ushering industrial enterprises into the <strong>autonomous era.</strong>
            </h1>
            {/* <p className={styles.lead}>
              Plant360.AI is the full-stack industrial data and AI platform. We turn the drawings, datasheets, and
              records that run a plant into a live system of record and a queryable asset knowledge graph, from one
              pipeline. Teams then build AI agents on data they can trust, for 50%+ efficiency across engineering,
              operations, and safety.
            </p> */}
            {/* <div className={styles.actions}>
              <CtaButton href="/contact" variant="primary">
                Book a demo
              </CtaButton>
              <Link href="/platform" className={styles.textLink}>
                See the platform
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div> */}
          </div>

          {/* <div className={styles.stack} data-reveal aria-hidden="true">
            <div className={styles.stackHead}>
              <span>Plant360 · one pipeline</span>
              <span className={styles.stackStatus}>
                <span className={styles.dot} /> In sync
              </span>
            </div>
            <div className={styles.stackBody}>
              {stackRows.map((r) => (
                <div key={r.kind} className={`${styles.stackRow} ${r.accent ? styles.stackRowAccent : ""}`}>
                  <div>
                    <p className={styles.stackKind}>{r.kind}</p>
                    <p className={styles.stackName}>{r.name}</p>
                  </div>
                  <span className={styles.stackNote}>{r.note}</span>
                </div>
              ))}
            </div>
            <div className={styles.stackFoot}>
              <span>Documents in, data out, once</span>
              <span className={styles.stackFootAccent}>
                One pipeline
                <ArrowRight size={14} aria-hidden="true" />
              </span>
            </div>
          </div> */}
        </div>

        {/* <div className={styles.heroStats} data-reveal data-reveal-stagger>
          {heroStats.map((s) => (
            <div key={s.label} className={styles.heroStat}>
              <p className={styles.heroStatNum}>{s.num}</p>
              <p className={styles.heroStatLabel}>{s.label}</p>
            </div>
          ))}
        </div> */}
      </Section>

      {/* Vision */}
      <Section tone="light">
        <div className={styles.missionGrid}>
          <div data-reveal>
            <p className={styles.eyebrow}>Vision</p>
            <h2 className={styles.heading}>
              Industrial enterprises are becoming autonomous. We are building the intelligence layer they will run
              on.
            </h2>
            <p className={styles.copyText}>
              The plants of tomorrow will not wait for people to find, read, and reconcile information before
              anything can move. They will sense, reason, and increasingly decide on their own. Every industry that
              has crossed into autonomy got there the same way: first its knowledge became machine-readable, then
              machine-reasonable, then machine-actionable.
            </p>
            <p className={styles.copyText}>
              Heavy industry is early on that arc, held back by decades of knowledge locked in documents no system
              can reason over. Plant360 exists to move the enterprise along it, from software-aided, to intelligent,
              to increasingly autonomous, as the ordinary way plants get engineered, operated, and kept safe.
            </p>
          </div>

          <div className={styles.arcPanel} data-reveal>
            <div className={styles.arcHead}>The arc to autonomy</div>
            <div className={styles.arcStages}>
              {arcStages.map((s) => (
                <div key={s.title} className={styles.arcStage}>
                  <span className={`${styles.arcStageDot} ${s.active ? styles.arcStageActive : ""}`} />
                  <div>
                    <p className={styles.arcStageTitle}>{s.title}</p>
                    <p className={styles.arcStageText}>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.arcFoot}>The enterprises that reach the far end first are the ones whose data was ready for it.</div>
          </div>
        </div>
      </Section>

      {/* The bet we are making */}
      <Section tone="gray">
        <div className={styles.betGrid}>
          <div data-reveal>
            <p className={styles.eyebrow}>The conviction</p>
            <h2 className={styles.heading}>The bet we are making</h2>
            <p className={styles.copyText}>
              Every wave of industrial progress has really been a wave of better information: steam to electricity,
              electricity to computing, computing to connectivity. The next wave is autonomy, and it will belong to
              the enterprises whose knowledge is ready to be reasoned on.
            </p>
            <p className={styles.copyText}>
              Industrial AI does not stall because the models are weak. It stalls because there is nothing
              trustworthy for them to think with. The knowledge that runs a plant is real, and it is enormous, yet it
              sits trapped in drawings and datasheets no agent can safely act against.
            </p>
            <p className={styles.betQuote}>
              We are betting that the winners of the autonomous era will be defined by one thing:{" "}
              <strong>a living, trusted foundation of plant data that people and AI can both act on.</strong> We are
              here to build that foundation, and to hand the industry its future faster.
            </p>
          </div>

          {/* <div className={styles.mockPanel} data-reveal aria-hidden="true">
            <div className={styles.mockHead}>
              <span>Plant360 in numbers</span>
              <span className={styles.mockTag}>Live</span>
            </div>
            <div className={styles.mockBody}>
              <div className={styles.mockRow}>
                <span className={styles.mockRowLabel}>83,000+ drawings digitized</span>
                <span className={styles.mockRowStatus}>Verified</span>
              </div>
              <div className={styles.mockRow}>
                <span className={styles.mockRowLabel}>70% faster at 50% lower cost</span>
                <span className={styles.mockRowStatus}>Measured</span>
              </div>
              <div className={styles.mockRow}>
                <span className={styles.mockRowLabel}>ISO 27001 certified</span>
                <span className={styles.mockRowStatus}>Audited</span>
              </div>
            </div>
            <div className={styles.mockFoot}>Building the groundwork for autonomy.</div>
          </div> */}
        </div>
      </Section>

      {/* Values */}
      <Section tone="dark">
        <SectionHeading eyebrow="What we optimize for" title="The principles behind every decision" />
        <FeatureGrid items={values} columns={2} />
      </Section>

      {/* Leadership */}
      <Section tone="light">
        <SectionHeading
          eyebrow="Leadership"
          title="The minds behind Plant360.AI"
          lead="A team obsessed with the pipeline from documents to working agents, and with the plants that depend on it."
        />
        <div className={styles.leadGrid} data-reveal data-reveal-stagger>
          {leadership.map((l, i) => (
            <div key={`${l.role}-${i}`} className={styles.leadCard}>
              <span className={styles.leadAvatar} aria-hidden="true">
                {l.initials}
              </span>
              <p className={styles.leadName}>{l.name}</p>
              <p className={styles.leadRole}>{l.role}</p>
              <p className={styles.leadFocus}>{l.focus}</p>
              {l.links.length ? (
                <div className={styles.leadLinks}>
                  {l.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.leadLink}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Section>

      {/* Security and trust */}
      <Section tone="gray">
        <SectionHeading
          eyebrow="Security and trust"
          title="ISO 27001 certified, and built so you own your data."
          lead="Plant360 operates an audited information security management system. Your asset data stays yours: open API, no proprietary lock-in, and integration with the systems you already run."
        />
        <StatGrid items={outcomeMetrics.map((m) => ({ value: m.value, label: m.label }))} />
        <p className={styles.proofLine}>{proofPoints.join(" · ")}</p>
      </Section>

      <CtaBand />
    </>
  );
}
