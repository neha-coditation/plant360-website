import styles from "./PointSolution.module.scss";

/**
 * "Not another point solution" - white band. Left: positioning copy. Right:
 * point-solutions (disconnected, stalls) vs Plant360 one-stack (compounds)
 * comparison, matching the reference exactly.
 */
export function PointSolution() {
  return (
    <section className={styles.section} id="approach-intro">
      <div className={`p360-container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Not another point solution</p>
          <h2 className={styles.heading}>
            Industrial AI fails without a data foundation. Most vendors give you one layer.{" "}
            <strong>Plant360 gives you the whole stack.</strong>
          </h2>
          <p className={styles.lead}>
            Digitization tools leave you with drawings. Graph tools leave you with data. AI tools
            have nothing reliable to run on. Plant360 connects all four layers, so your documents
            become data, your data becomes agents, and your agents deliver measurable efficiency. No
            silos. No vendor lock-in.
          </p>
        </div>

        <div className={styles.compare} aria-hidden="true" data-reveal>
          <div className={styles.points}>
            <div className={styles.colLabel}>Point solutions</div>
            <div className={styles.stackList}>
              <div className={styles.dashed}>Digitization tool</div>
              <div className={styles.noConn}>✕ No connection</div>
              <div className={styles.dashed}>Graph tool</div>
              <div className={styles.noConn}>✕ No connection</div>
              <div className={styles.dashed}>AI pilot</div>
            </div>
            <div className={styles.stalls}>Stalls at pilot</div>
          </div>
          <div className={styles.stackCol}>
            <div className={`${styles.colLabel} ${styles.colLabelAccent}`}>Plant360 · one stack</div>
            <div className={styles.stackRail}>
              <div className={styles.solid}>Digitize</div>
              <div className={styles.solid}>Structure</div>
              <div className={styles.solid}>Build</div>
              <div className={`${styles.solid} ${styles.solidAccent}`}>Apply · AI agents</div>
            </div>
            <div className={styles.compounds}>Compounds in production</div>
          </div>
        </div>
      </div>
    </section>
  );
}
