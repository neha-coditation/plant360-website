import { Checkmark, Close } from "@carbon/icons-react";
import styles from "./CompareTable.module.scss";

export type CompareColumn = { name: string; highlight?: boolean };
export type CompareRow = { label: string; values: boolean[] };

/**
 * Tone-adaptive capability comparison table. Reads the parent Section's --sf-*
 * vars so it renders on any band. A checkmark renders in the accent color and a
 * cross in the muted color. `values` on each row line up with `columns` in order.
 */
export function CompareTable({
  columns,
  rows,
  caption,
}: {
  columns: CompareColumn[];
  rows: CompareRow[];
  caption?: string;
}) {
  return (
    <div className={styles.wrap} role="region" aria-label={caption ?? "Capability comparison"}>
      <table className={styles.table}>
        {caption ? <caption className={styles.caption}>{caption}</caption> : null}
        <thead>
          <tr>
            <th scope="col" className={styles.rowHead} />
            {columns.map((c) => (
              <th
                key={c.name}
                scope="col"
                className={`${styles.colHead} ${c.highlight ? styles.colHeadOn : ""}`}
              >
                {c.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <th scope="row" className={styles.rowHead}>
                {r.label}
              </th>
              {r.values.map((v, i) => (
                <td
                  key={columns[i]?.name ?? i}
                  className={`${styles.cell} ${columns[i]?.highlight ? styles.cellOn : ""}`}
                  data-label={columns[i]?.name}
                >
                  {v ? (
                    <span className={styles.yes}>
                      <Checkmark size={20} aria-hidden="true" />
                      <span className={styles.sr}>Yes</span>
                    </span>
                  ) : (
                    <span className={styles.no}>
                      <Close size={20} aria-hidden="true" />
                      <span className={styles.sr}>No</span>
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
