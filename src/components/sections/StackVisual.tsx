import styles from "./StackVisual.module.scss";

const layers = [
  {
    num: "04",
    tag: "APPLY",
    title: "AI Apps & Agents",
    sub: "ChangeIQ, HAZOP, MTR, asset agents",
    accent: true,
  },
  { num: "03", tag: "BUILD", title: "AI360", sub: "Rapid industrial AI-agent platform" },
  { num: "02", tag: "FOUNDATION", title: "UniGraph", sub: "Live system of record + asset graph" },
];

/**
 * Layered platform diagram: two source feeds at the base rising into three
 * stacked layers. Pure CSS animation (data particles + glow), disabled under
 * prefers-reduced-motion via the global reduce block. No client JS.
 */
export function StackVisual() {
  return (
    <div className={styles.frame} role="img" aria-label="Plant360 platform: two data sources feed one stack of four layers, digitize, structure, build and apply, with data flowing upward into working AI agents.">
      <div className={styles.head}>
        <span className={styles.headLabel}>Plant360 platform</span>
        <span className={styles.headStatus}>
          <span className={styles.dot} /> One stack · live
        </span>
      </div>

      <div className={styles.stack} aria-hidden="true">
        <div className={styles.particles}>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className={styles.particle} style={{ ["--i" as string]: i }} />
          ))}
        </div>

        {layers.map((l) => (
          <div key={l.num} className={`${styles.layer} ${l.accent ? styles.apply : ""}`}>
            <div className={styles.layerNum}>
              {l.num} · {l.tag}
            </div>
            <div className={styles.layerBody}>
              <span className={styles.layerTitle}>{l.title}</span>
              <span className={styles.layerSub}>{l.sub}</span>
            </div>
          </div>
        ))}

        <div className={styles.sources}>
          <div className={styles.sourcesLabel}>01 · Sources · we ingest both</div>
          <div className={styles.feeds}>
            <div className={styles.feed}>
              <span className={styles.feedTitle}>Convert</span>
              <span className={styles.feedSub}>CAD · DWG · PDF drawings</span>
            </div>
            <div className={styles.feed}>
              <span className={styles.feedTitle}>Connect</span>
              <span className={styles.feedSub}>Existing records & design</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.foot}>
        <span>Two sources → one foundation</span>
        <span className={styles.flow}>Data flows up ↑</span>
      </div>
    </div>
  );
}
