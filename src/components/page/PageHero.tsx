import Link from "next/link";
import { CtaButton } from "@/components/ui/CtaButton";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import styles from "./PageHero.module.scss";

export type Crumb = { name: string; path: string };
type Cta = { label: string; href: string };

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  /** AEO direct-answer / lead paragraph. Rendered as the opening crawlable text. */
  lead: React.ReactNode;
  metric?: string;
  primary?: Cta;
  secondary?: Cta;
  breadcrumbs?: Crumb[];
  /** Optional right-column visual. When present the hero is two-column. */
  aside?: React.ReactNode;
};

/**
 * Dark page hero shared by every interior page. The lead paragraph is the
 * page's direct-answer text and ships as crawlable HTML (no JS gating), for AEO.
 */
export function PageHero({ eyebrow, title, lead, metric, primary, secondary, breadcrumbs, aside }: Props) {
  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true" />
      <div className={`p360-container ${styles.inner} ${aside ? styles.split : ""}`}>
        <div className={styles.copy}>
          {breadcrumbs ? (
            <>
              <nav className={styles.crumbs} aria-label="Breadcrumb">
                {breadcrumbs.map((c, i) => (
                  <span key={c.path}>
                    {i > 0 ? <span className={styles.crumbSep} aria-hidden="true">/</span> : null}
                    {i < breadcrumbs.length - 1 ? (
                      <Link href={c.path}>{c.name}</Link>
                    ) : (
                      <span aria-current="page">{c.name}</span>
                    )}
                  </span>
                ))}
              </nav>
              <BreadcrumbJsonLd items={breadcrumbs} />
            </>
          ) : null}

          <p className={styles.eyebrow}>
            <span className={styles.dash} aria-hidden="true" />
            {eyebrow}
          </p>
          <h1 className={styles.title}>{title}</h1>
          {metric ? <p className={styles.metric}>{metric}</p> : null}
          <p className={styles.lead}>{lead}</p>
          {primary || secondary ? (
            <div className={styles.actions}>
              {primary ? (
                <CtaButton href={primary.href} variant="primary">
                  {primary.label}
                </CtaButton>
              ) : null}
              {secondary ? (
                <CtaButton href={secondary.href} variant="secondary">
                  {secondary.label}
                </CtaButton>
              ) : null}
            </div>
          ) : null}
        </div>
        {aside ? <div className={styles.aside}>{aside}</div> : null}
      </div>
    </section>
  );
}
