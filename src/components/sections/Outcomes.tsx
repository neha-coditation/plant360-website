"use client";

import { useEffect, useRef, useState } from "react";
import { outcomeMetrics } from "@/content/proof";
import styles from "./Outcomes.module.scss";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Counts up to `target` once the element scrolls into view. Honors reduced motion. */
function useCountUp(target: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      setValue(target);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const dur = 1700;
            const t0 = performance.now();
            const step = (t: number) => {
              const p = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(target * eased);
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return { ref, display: Math.round(value).toLocaleString("en-US") };
}

/** Splits "50%+" into { num: "50", suffix: "%+" } so the suffix can be accented. */
function splitMetric(value: string): { num: string; suffix: string } {
  const m = value.match(/^([\d.,]+)(.*)$/);
  if (!m) return { num: value, suffix: "" };
  return { num: m[1]!, suffix: m[2]! };
}

/**
 * "Outcomes" - white band. Four headline metrics in a white grid, then two
 * dark count-up tiles (drawings, datasheets) below, matching the reference.
 */
export function Outcomes({ drawings, datasheets }: { drawings: number; datasheets: number }) {
  const d = useCountUp(drawings);
  const s = useCountUp(datasheets);

  return (
    <section className={styles.section} id="outcomes">
      <div className={`p360-container ${styles.inner}`}>
        <p className={styles.eyebrow}>Outcomes</p>
        <h2 className={styles.heading}>
          Measurable efficiency, <strong>proven across the plant.</strong>
        </h2>

        <div className={styles.grid} data-reveal data-reveal-stagger>
          {outcomeMetrics.map((m) => {
            const { num, suffix } = splitMetric(m.value);
            return (
              <div key={m.label} className={styles.metric}>
                <div className={styles.metricValue}>
                  {num}
                  <span className={styles.metricSuffix}>{suffix}</span>
                </div>
                <p className={styles.metricLabel}>{m.label}</p>
              </div>
            );
          })}
        </div>

        <div className={styles.counters}>
          <div className={styles.counter} ref={d.ref}>
            <div className={styles.counterValue}>
              {d.display}
              <span className={styles.counterPlus}>+</span>
            </div>
            <div className={styles.counterLabel}>
              Engineering drawings
              <br />
              digitized
            </div>
          </div>
          <div className={styles.counter} ref={s.ref}>
            <div className={styles.counterValue}>
              {s.display}
              <span className={styles.counterPlus}>+</span>
            </div>
            <div className={styles.counterLabel}>
              Datasheets &amp; specs
              <br />
              digitized
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
