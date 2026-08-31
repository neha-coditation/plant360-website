import styles from "./HowItWorks.module.scss";

/**
 * "How it works" - light gray band. Three steps with illustrated panels: a
 * scan-line over skeleton drawing lines, an animated node graph, and a dark
 * agent monitor log. Matches the reference.
 */
export function HowItWorks() {
  return (
    <section className={styles.section} id="flow">
      <div className={`p360-container ${styles.inner}`}>
        <p className={styles.eyebrow}>How it works</p>
        <h2 className={styles.heading}>
          From document-driven workflows to <strong>data-driven, AI-first</strong> operations.
        </h2>

        <div className={styles.steps} data-reveal data-reveal-stagger>
          <div className={styles.step}>
            <span className={styles.stepNum}>Step 01</span>
            <div className={`${styles.panel} ${styles.scanPanel}`} aria-hidden="true">
              <div className={styles.skeleton}>
                <span style={{ width: "62%" }} />
                <span style={{ width: "84%" }} />
                <span style={{ width: "48%" }} />
                <span style={{ width: "71%" }} />
              </div>
              <div className={styles.scanLine} />
              <span className={styles.scanTag}>Scanning</span>
            </div>
            <h3 className={styles.stepTitle}>Capture &amp; digitize</h3>
            <p className={styles.stepBody}>
              Drawings, datasheets, and specs are ingested and converted to structured Smart
              Drawings, with human-in-the-loop verification for accuracy.
            </p>
          </div>

          <div className={styles.step}>
            <span className={styles.stepNum}>Step 02</span>
            <div className={`${styles.panel} ${styles.graphPanel}`} aria-hidden="true">
              <svg width="190" height="66" viewBox="0 0 190 66" fill="none">
                <path
                  d="M30 33 L95 13 M30 33 L95 53 M95 13 L160 33 M95 53 L160 33 M95 13 L95 53"
                  stroke="#0f62fe"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                  className={styles.dash}
                />
                <circle cx="30" cy="33" r="5" fill="#fff" stroke="#0f62fe" strokeWidth="1.5" />
                <circle cx="95" cy="13" r="5" fill="#0f62fe" />
                <circle cx="95" cy="53" r="5" fill="#fff" stroke="#0f62fe" strokeWidth="1.5" />
                <circle cx="160" cy="33" r="5" fill="#fff" stroke="#0f62fe" strokeWidth="1.5" />
              </svg>
            </div>
            <h3 className={styles.stepTitle}>Sync records &amp; connect</h3>
            <p className={styles.stepBody}>
              UniGraph keeps your system of record and design continuously in sync, and links every
              tag, asset, and document into one queryable knowledge graph your AI can trust.
            </p>
          </div>

          <div className={styles.step}>
            <span className={styles.stepNum}>Step 03</span>
            <div className={`${styles.panel} ${styles.logPanel}`} aria-hidden="true">
              <div className={styles.logLine}>
                <span className={styles.ok}>✓</span> MoC package · 14 assets
              </div>
              <div className={styles.logLine}>
                <span className={styles.ok}>✓</span> Risk review routed
              </div>
              <div className={styles.logLine}>
                <span className={styles.agent}>agent</span> monitoring graph
                <span className={styles.cursor} />
              </div>
            </div>
            <h3 className={styles.stepTitle}>Deploy AI agents</h3>
            <p className={styles.stepBody}>
              Build agents and apps on AI360 that act on the graph, automating MoC, HAZOP, tag
              registries, and more across engineering, ops, and safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
