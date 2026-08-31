import type { Metadata } from "next";
import {
  Search,
  Dashboard,
  Settings,
  UserAvatar,
  Location,
  CheckmarkFilled,
  Analytics,
  Group,
  Time,
  ArrowRight,
} from "@carbon/icons-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { jobs } from "@/content/jobs";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/page/blocks";
import { CtaButton } from "@/components/ui/CtaButton";
import { CtaBand } from "@/components/sections/CtaBand";
import { JobPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import styles from "./Jobs.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Join Plant360.AI and build the pipeline that turns plant documents into a live system of record, an asset knowledge graph, and working AI agents. See open roles.",
  path: "/company/careers",
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Company", path: "/company/about" },
  { name: "Careers", path: "/company/careers" },
];

const arcStages = [
  { title: "Software-aided", text: "Documents scattered across systems; people do the reconciling by hand." },
  { title: "Intelligent", text: "Data is structured and connected, so engineers and agents can query it directly." },
  { title: "Autonomous", text: "The plant senses, reasons, and increasingly decides, grounded in trusted data.", active: true },
];

const pipeline = [
  {
    num: "01",
    Icon: Search,
    title: "Digitize",
    text: "Turn scanned drawings, CAD, and legacy PDFs into structured, audit-ready data.",
  },
  {
    num: "02",
    Icon: Dashboard,
    title: "Graph",
    text: "Build the AI-ready engineering data graph for assets.",
  },
  {
    num: "03",
    Icon: Settings,
    title: "Agents",
    text: "Ground AI agents on data they can trust, so they can safely automate real work.",
  },
];

const culture = [
  {
    Icon: UserAvatar,
    title: "You own the outcome",
    text: "Small team, no layers. You take a problem end to end and you see the number it moves. There is nowhere for work to hide, which is exactly why it is worth doing.",
  },
  {
    Icon: Location,
    title: "Real plants, not demos",
    text: "Everything we build runs at operating facilities against decades-old drawings and messy real data. The bar is production, not a slide.",
  },
  {
    Icon: CheckmarkFilled,
    title: "Provable over impressive",
    text: "We ship measurable accuracy and keep humans in the loop. We would rather be right and traceable than flashy, because plant decisions depend on it.",
  },
  {
    Icon: Analytics,
    title: "Outcomes over buzzwords",
    text: "We hire people who care about the result more than the acronym. If it does not move a real plant metric, it is not the point.",
  },
];

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      {jobs.map((j) => (
        <JobPostingJsonLd
          key={j.slug}
          title={j.title}
          description={j.description}
          datePosted={j.datePosted}
          location={j.location}
          employmentType={j.type}
        />
      ))}

      {/* Hero */}
      <Section tone="dark">
        <div className={styles.hero} data-reveal>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowBar} aria-hidden="true" />
            Company / Careers
          </p>
          <h1 className={styles.title}>Towards Autonomous Industries.</h1>
          <p className={styles.lead}>
            Plant360 is a small team solving a hard problem: building full-stack platforms and AI agents to make
            industrial engineering and operations autonomous, one bit at a time. If you want your work to move real
            efficiency numbers instead of shipping demos, and to see it run in live plants, this is the place.
          </p>
          <div className={styles.actions}>
            <CtaButton href="#roles" variant="primary">
              See open roles
            </CtaButton>
            <CtaButton href="#mission" variant="secondary">
              Why work here
            </CtaButton>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section tone="light" id="mission">
        <div className={styles.missionGrid}>
          <div data-reveal>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowBar} aria-hidden="true" />
              Why here
            </p>
            <h2 className={styles.heading}>
              Industrial enterprises are becoming autonomous. Your work is the foundation they will run on.
            </h2>
            <p className={styles.copyText}>
              Every industry that crossed into autonomy did it the same way: first it made its knowledge
              machine-readable, then machine-reasonable, then machine-actionable. Heavy industry is early on that arc,
              held back by decades of knowledge locked in drawings no system can reason over.
            </p>
            <p className={styles.copyText}>
              We free that knowledge. The pipeline you would build turns scanned P&amp;IDs and datasheets into a live
              system of record and a queryable asset graph, then grounds AI agents on data teams can trust. That is
              not a demo. It runs in operating plants, and it moves real numbers.
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
            <div className={styles.arcFoot}>
              The enterprises that reach the far end first will be the ones whose data was ready for it.
            </div>
          </div>
        </div>
      </Section>

      {/* What you'll work on */}
      <Section tone="light">
        <SectionHeading
          eyebrow="What you'll work on"
          title="One pipeline: documents to working agents"
          lead="The problems are genuinely hard: computer vision on decades-old scanned drawings, resolving asset hierarchies across systems, and building complex AI agents so they can safely automate work."
        />
        <div className={styles.pipeGrid} data-reveal data-reveal-stagger>
          {pipeline.map((p) => (
            <div key={p.title} className={styles.pipeCard}>
              <div className={styles.pipeTop}>
                <span className={styles.pipeNum}>{p.num}</span>
                <span className={styles.pipeIcon}>
                  <p.Icon size={22} aria-hidden="true" />
                </span>
              </div>
              <h3 className={styles.pipeTitle}>{p.title}</h3>
              <p className={styles.pipeText}>{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Open roles */}
      <Section tone="gray" id="roles">
        <SectionHeading
          eyebrow="Open roles"
          title="Open positions"
          lead="Do not see a perfect fit? We still want to hear from strong people. Reach out below."
        />
        <div className={styles.list}>
          {jobs.map((j) => (
            <article key={j.slug} className={styles.job} data-reveal>
              <div>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <Group size={14} aria-hidden="true" />
                    {j.team}
                  </span>
                  <span className={styles.metaItem}>
                    <Location size={14} aria-hidden="true" />
                    {j.location}
                  </span>
                  <span className={styles.metaItem}>
                    <Time size={14} aria-hidden="true" />
                    {j.type}
                  </span>
                </div>
                <h3 className={styles.title}>{j.title}</h3>
                <p className={styles.body}>{j.description}</p>
              </div>
              <a
                className={styles.apply}
                href={`mailto:${site.email}?subject=${encodeURIComponent(`Application: ${j.title}`)}`}
              >
                Apply for this role
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}

          <div className={styles.openApp} data-reveal>
            <div className={styles.openAppCopy}>
              <h3 className={styles.openAppTitle}>No perfect fit today?</h3>
              <p className={styles.openAppText}>
                Tell us the problem you want to solve and how you would move the numbers. We read every one.
              </p>
            </div>
            <a
              className={styles.openAppLink}
              href={`mailto:${site.email}?subject=${encodeURIComponent("Open application: Plant360.AI")}`}
            >
              Send an open application
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </Section>

      {/* Life at Plant360 */}
      <Section tone="light">
        <SectionHeading eyebrow="Life at Plant360" title="How the work actually feels" />
        <div className={styles.cultureGrid} data-reveal data-reveal-stagger>
          {culture.map((c) => (
            <div key={c.title} className={styles.cultureCard}>
              <span className={styles.cultureIcon}>
                <c.Icon size={24} aria-hidden="true" />
              </span>
              <h3 className={styles.cultureTitle}>{c.title}</h3>
              <p className={styles.cultureText}>{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        heading="Want to work on this?"
        body="Send us a note about the problem you want to solve and how you would move the numbers. We read every one."
      />
    </>
  );
}
