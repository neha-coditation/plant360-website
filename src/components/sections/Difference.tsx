import { Document, Db2Database, ArrowRight } from "@carbon/icons-react";
import styles from "./Difference.module.scss";

const benefits = [
  {
    num: "01",
    title: "Records that never drift",
    body: "Engineers keep working in the system of record and design they already trust. Plant360 keeps it accurate automatically as the plant changes.",
  },
  {
    num: "02",
    title: "AI with real context",
    body: "Agents act on a connected asset graph instead of scattered files, so automation is accurate, explainable, and grounded in your actual plant.",
  },
  {
    num: "03",
    title: "One pipeline, zero duplication",
    body: "Both outputs come from a single digitization of CAD, DWG, and PDF. No parallel data programs, no divergence between what is recorded and what your AI sees.",
  },
];

/**
 * "The Plant360 difference" - dark band. One-pipeline / two-outputs diagram
 * (ingest -> System of Record + Asset Knowledge Graph, in sync) plus the
 * benefits triad. Matches the reference layout.
 */
export function Difference() {
  return (
    <section className={styles.section} id="approach">
      <div className={`p360-container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>The Plant360 difference</p>
          <h2 className={styles.heading}>
            Don&apos;t choose between your system of record and your AI.{" "}
            <strong>Plant360 does both.</strong>
          </h2>
          <p className={styles.lead}>
            Most tools force a trade-off. Digitize into your system of record and engineers stay
            current, but AI has nothing structured to reason on. Build a separate knowledge graph
            and the AI works, but your records quietly drift out of date. Plant360 produces{" "}
            <strong>both, from one pipeline</strong>, working from your CAD, DWG, and PDF drawings,
            or the data already in your existing systems of record.
          </p>
        </div>

        <div className={styles.pipeline}>
          <div className={styles.sources}>
            <p className={styles.stageLabel}>Ingest from</p>
            <div className={styles.sourceList}>
              <span className={styles.source}>CAD files</span>
              <span className={styles.source}>DWG drawings</span>
              <span className={`${styles.source} ${styles.sourceHighlight}`}>
                PDF drawings <span className={styles.tag}>Even scanned</span>
              </span>
              <span className={styles.source}>Datasheets &amp; specs</span>
              <span className={styles.source}>Existing records / design data</span>
            </div>
            <p className={styles.note}>
              Not just DWGs. Plant360 reads the legacy and scanned PDFs that lock most of your
              plant&apos;s knowledge in place, and ingests the data already living in your systems of
              record.
            </p>
          </div>

          <div className={styles.connector} aria-hidden="true">
            <ArrowRight size={18} />
            <span className={styles.connectorLabel}>Ingest</span>
            <ArrowRight size={18} />
          </div>

          <div className={styles.outputs}>
            <p className={`${styles.stageLabel} ${styles.produces}`}>Produces both · in sync</p>
            <div className={styles.outputList}>
              <div className={styles.output}>
                <div className={styles.outputHead}>
                  <span className={styles.outIcon}>
                    <Document size={16} />
                  </span>
                  <span className={styles.outTitle}>System of Record / Design</span>
                </div>
                <p className={styles.outBody}>
                  Your authoritative engineering data: drawings, tags, and datasheets, kept
                  continuously current and audit-ready. No drift, no stale copies.
                </p>
              </div>
              <div className={styles.output}>
                <div className={styles.outputHead}>
                  <span className={styles.outIcon}>
                    <Db2Database size={16} />
                  </span>
                  <span className={styles.outTitle}>Asset Knowledge Graph</span>
                </div>
                <p className={styles.outBody}>
                  A living, queryable graph of every asset and relationship: the structured context
                  your AI agents reason and act on.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.triad} data-reveal data-reveal-stagger>
          {benefits.map((b) => (
            <div key={b.num} className={styles.benefit}>
              <span className={styles.benefitNum}>{b.num}</span>
              <h3 className={styles.benefitTitle}>{b.title}</h3>
              <p className={styles.benefitBody}>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
