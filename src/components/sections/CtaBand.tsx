import Link from "next/link";
import { demoCta } from "@/content/proof";
import styles from "./CtaBand.module.scss";

/**
 * Reusable closing CTA band (accent blue), matching the reference: heading and
 * body on the left, two stacked dark buttons on the right. Every page ends with
 * this. Defaults to the standard demo copy; callers may override the heading.
 */
export function CtaBand({
  heading = demoCta.heading,
  body = demoCta.body,
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className={styles.band} id="demo">
      <div className={`p360-container ${styles.inner}`}>
        <div className={styles.copy}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.body}>{body}</p>
        </div>
        <div className={styles.actions}>
          <Link href={demoCta.primary.href} className={`${styles.btn} ${styles.btnSolid}`}>
            <span>{demoCta.primary.label}</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href={demoCta.secondary.href} className={`${styles.btn} ${styles.btnOutline}`}>
            <span>{demoCta.secondary.label}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
