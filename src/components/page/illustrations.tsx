import styles from "./illustrations.module.scss";

/**
 * Reusable inline-SVG/CSS illustrations for hero asides and section anchors.
 * Built for the dark hero context (accent blues on gray). All motion uses the
 * shared p360* keyframes, which are disabled under prefers-reduced-motion.
 */

function Frame({ label, status, children }: { label: string; status?: string; children: React.ReactNode }) {
  return (
    <div className={styles.frame} data-reveal>
      <div className={styles.frameHead}>
        <span className={styles.frameLabel}>{label}</span>
        {status ? (
          <span className={styles.frameStatus}>
            <span className={styles.dot} /> {status}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

/** Animated engineering knowledge graph: connected nodes with a pulsing hub. */
export function GraphIllustration() {
  return (
    <Frame label="UniGraph · asset graph" status="Live">
      <svg viewBox="0 0 360 240" className={styles.svg} role="img" aria-label="An asset knowledge graph of connected equipment, tags, and documents.">
        <g stroke="#2f4d86" strokeWidth="1">
          <path d="M60 190 L150 130 M150 130 L250 160 M250 160 L320 80 M150 130 L200 60 M200 60 L320 80 M60 190 L200 60 M250 160 L300 200" className={styles.edge} />
        </g>
        {[
          [60, 190, 5],
          [150, 130, 6],
          [250, 160, 5],
          [200, 60, 5],
          [300, 200, 4],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="#78a9ff" className={styles.node} style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
        <circle cx={320} cy={80} r={8} fill="#0f62fe" className={styles.hub} />
      </svg>
      <div className={styles.caption}>
        <span>Assets · tags · documents · relationships</span>
        <span className={styles.captionAccent}>10× retrieval</span>
      </div>
    </Frame>
  );
}

/** Hub-and-spoke: Plant360 in the center, the systems it ingests from and syncs with around it. */
export function IntegrationsDiagram() {
  const spokes = ["AutoCAD", "SmartPlant", "Aveva", "DEXPI", "EAM", "CMMS", "Historians", "ISO 15926"];
  return (
    <Frame label="Integration platform" status="Open API">
      <div className={styles.hub2}>
        <div className={styles.hubCore}>Plant360</div>
        <div className={styles.spokes}>
          {spokes.map((s) => (
            <span key={s} className={styles.spoke}>
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.caption}>
        <span>Ingests from &amp; syncs with your systems</span>
        <span className={styles.captionAccent}>No lock-in</span>
      </div>
    </Frame>
  );
}

/** Per-product hero motif. */
export function ProductMotif({ variant }: { variant: "convert" | "unigraph" | "ai360" | "changeiq" }) {
  if (variant === "unigraph") return <GraphIllustration />;

  if (variant === "convert") {
    return (
      <Frame label="Convert · digitization" status="Reviewing">
        <div className={styles.convert}>
          <div className={styles.drawing} aria-hidden="true">
            <span style={{ width: "70%" }} />
            <span style={{ width: "48%" }} />
            <span style={{ width: "84%" }} />
            <span style={{ width: "60%" }} />
            <div className={styles.scan} />
          </div>
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
          <div className={styles.rows} aria-hidden="true">
            {["25-W-BBC-FP-3009", "100-WBF-DBA-HC", "200-WBF-DBA-HC"].map((t) => (
              <div key={t} className={styles.rowItem}>
                <span className={styles.tick}>✓</span>
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.caption}>
          <span>CAD · DWG · scanned PDF → structured tags</span>
          <span className={styles.captionAccent}>70% faster</span>
        </div>
      </Frame>
    );
  }

  if (variant === "ai360") {
    return (
      <Frame label="AI360 · agent builder" status="Deployed">
        <div className={styles.flow} aria-hidden="true">
          <div className={styles.flowNode}>UniGraph</div>
          <span className={styles.flowLink} />
          <div className={`${styles.flowNode} ${styles.flowAgent}`}>Agent</div>
          <span className={styles.flowLink} />
          <div className={styles.flowActions}>
            <span>EAM sync</span>
            <span>HAZOP prep</span>
            <span>MoC package</span>
          </div>
        </div>
        <div className={styles.caption}>
          <span>Drag-and-drop, grounded on your graph</span>
          <span className={styles.captionAccent}>Days, not months</span>
        </div>
      </Frame>
    );
  }

  // changeiq
  return (
    <Frame label="ChangeIQ · Management of Change" status="In sync">
      <div className={styles.revs} aria-hidden="true">
        <div className={styles.revCard}>
          <span className={styles.revTag}>Rev 1B</span>
          <div className={styles.revLines}>
            <span style={{ width: "80%" }} />
            <span style={{ width: "55%" }} />
          </div>
        </div>
        <div className={`${styles.revCard} ${styles.revCurrent}`}>
          <span className={styles.revTag}>Rev 1C · current</span>
          <div className={styles.revLines}>
            <span style={{ width: "80%" }} />
            <span className={styles.revChange} style={{ width: "68%" }} />
          </div>
        </div>
        <div className={styles.changeLog}>
          <div>
            <span className={styles.tick}>✓</span> MoC package · 14 assets
          </div>
          <div>
            <span className={styles.tick}>✓</span> Risk review routed
          </div>
        </div>
      </div>
      <div className={styles.caption}>
        <span>Auto-assembled packages, full audit trail</span>
        <span className={styles.captionAccent}>40%+ less prep</span>
      </div>
    </Frame>
  );
}
