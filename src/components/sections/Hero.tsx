import { CtaButton } from "@/components/ui/CtaButton";
import { StackVisual } from "./StackVisual";
import styles from "./Hero.module.scss";

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.grid} aria-hidden="true" />
      <div className={`p360-container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            The full-stack industrial data &amp; AI platform
          </p>
          <h1 className={styles.h1}>
            Build <span className={styles.accent}>asset graph</span>, keep your <span className={styles.accent}>system of record</span> live, and turn it into
            working <span className={styles.accent}>AI agents</span>.
          </h1>
          <p className={styles.lead}>
            Plant360 builds one living data foundation from your CAD, DWG, and PDF drawings{" "}
            <strong>and the data already in your systems of record</strong>. It keeps that
            engineering data current <em>and</em> powers AI agents across engineering, operations,
            and safety: <strong>50%+ efficiency</strong>, end to end.
          </p>
          <div className={styles.actions}>
            <CtaButton href="/contact" variant="primary">
              Book a demo
            </CtaButton>
            <CtaButton href="#platform" variant="secondary">
              See the platform
            </CtaButton>
          </div>
        </div>
        <div className={styles.visual}>
          <StackVisual />
        </div>
      </div>
    </section>
  );
}
