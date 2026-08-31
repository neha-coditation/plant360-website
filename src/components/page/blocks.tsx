import Link from "next/link";
import type { CarbonIconType } from "@carbon/icons-react";
import { ArrowRight } from "@carbon/icons-react";
import styles from "./blocks.module.scss";

/** Section heading used inside a Section wrapper. Adapts to the parent tone. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  action?: React.ReactNode;
}) {
  return (
    <div className={`${styles.heading} ${align === "center" ? styles.center : ""}`} data-reveal>
      <div className={styles.headingCopy}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h2 className={styles.title}>{title}</h2>
        {lead ? <p className={styles.lead}>{lead}</p> : null}
      </div>
      {action ? <div className={styles.headingAction}>{action}</div> : null}
    </div>
  );
}

export type Feature = { title: string; body: string; Icon?: CarbonIconType };

/** Capability / feature grid. 2 or 3 up. Cards sit on the surface tint. */
export function FeatureGrid({ items, columns = 3 }: { items: Feature[]; columns?: 2 | 3 }) {
  return (
    <div
      className={`${styles.features} ${columns === 2 ? styles.cols2 : styles.cols3}`}
      data-reveal
      data-reveal-stagger
    >
      {items.map((f) => (
        <div key={f.title} className={styles.feature}>
          {f.Icon ? (
            <span className={styles.featureIcon}>
              <f.Icon size={24} aria-hidden="true" />
            </span>
          ) : null}
          <h3 className={styles.featureTitle}>{f.title}</h3>
          <p className={styles.featureBody}>{f.body}</p>
        </div>
      ))}
    </div>
  );
}

export type Step = { step: string; title: string; body: string };

/** Numbered horizontal steps. */
export function Steps({ items }: { items: Step[] }) {
  return (
    <ol className={styles.steps} data-reveal data-reveal-stagger>
      {items.map((s) => (
        <li key={s.step} className={styles.step}>
          <span className={styles.stepNum}>{s.step}</span>
          <h3 className={styles.stepTitle}>{s.title}</h3>
          <p className={styles.stepBody}>{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export type Persona = { role: string; benefit: string };

/** "Who uses it" list. */
export function Personas({ items }: { items: Persona[] }) {
  return (
    <div className={styles.personas} data-reveal data-reveal-stagger>
      {items.map((p) => (
        <div key={p.role} className={styles.persona}>
          <div className={styles.personaRole}>{p.role}</div>
          <p className={styles.personaBenefit}>{p.benefit}</p>
        </div>
      ))}
    </div>
  );
}

export type Stat = { value: string; label: string };

/** Headline stat grid. Value big and light, label muted. */
export function StatGrid({ items }: { items: Stat[] }) {
  return (
    <div className={styles.stats} data-reveal data-reveal-stagger>
      {items.map((s) => (
        <div key={s.label} className={styles.stat}>
          <div className={styles.statValue}>{s.value}</div>
          <p className={styles.statLabel}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}

/** Internal-linking block: a labelled list of related pages. */
export function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; description?: string }[];
}) {
  return (
    <div className={styles.related} data-reveal>
      <p className={styles.relatedTitle}>{title}</p>
      <div className={styles.relatedGrid} data-reveal data-reveal-stagger>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={styles.relatedCard}>
            <span className={styles.relatedLabel}>
              {l.label}
              <ArrowRight size={16} aria-hidden="true" />
            </span>
            {l.description ? <span className={styles.relatedDesc}>{l.description}</span> : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
