"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "@carbon/icons-react";
import { useCases } from "@/content/use-cases";
import styles from "./UseCaseSwitcher.module.scss";

export function UseCaseSwitcher() {
  const [active, setActive] = useState(0);
  const current = useCases[active] ?? useCases[0]!;

  return (
    <section className={`p360-section ${styles.section}`} id="usecases">
      <div className="p360-container">
        <div className={styles.head}>
          <div>
            <p className="p360-kicker">AI use-cases & agents</p>
            <h2 className="p360-h2">
              The AI isn&apos;t hidden in a roadmap. It&apos;s running real plant work today.
            </h2>
          </div>
          <Link href="/use-cases" className={styles.allLink}>
            All use-cases <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.switcher}>
          <ul className={styles.list} role="tablist" aria-label="AI use-cases">
            {useCases.map((uc, i) => (
              <li key={uc.slug}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-controls="usecase-panel"
                  id={`usecase-tab-${i}`}
                  className={`${styles.row} ${i === active ? styles.rowActive : ""}`}
                  onClick={() => setActive(i)}
                >
                  <span className={styles.rowNum}>{uc.num}</span>
                  <span className={styles.rowTitle}>{uc.title}</span>
                </button>
              </li>
            ))}
          </ul>

          <div
            className={styles.panel}
            role="tabpanel"
            id="usecase-panel"
            aria-labelledby={`usecase-tab-${active}`}
          >
            <svg
              className={styles.panelGraph}
              width="360"
              height="240"
              viewBox="0 0 360 240"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M40 200 L130 130 L225 165 L320 60 M130 130 L185 40 L225 165 M185 40 L320 60 M40 200 L185 40"
                stroke="#78a9ff"
                strokeWidth="1"
              />
              <circle cx="40" cy="200" r="4" fill="#78a9ff" />
              <circle cx="130" cy="130" r="4" fill="#78a9ff" />
              <circle cx="225" cy="165" r="4" fill="#78a9ff" />
              <circle cx="185" cy="40" r="4" fill="#78a9ff" />
              <circle cx="320" cy="60" r="5" fill="#0f62fe" />
            </svg>
            <p className={styles.panelProduct}>{current.product}</p>
            <h3 className={styles.panelTitle}>{current.title}</h3>
            <p className={styles.panelDesc}>{current.desc}</p>
            <div className={styles.panelMeta}>
              <div>
                <span className={styles.metaLabel}>Runs on</span>
                <span className={styles.metaValue}>{current.agent}</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Impact</span>
                <span className={`${styles.metaValue} ${styles.impact}`}>{current.metric}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
