import styles from "./StackPosition.module.scss";

const layers = [
  { layer: 4, num: "04", tag: "Apply", name: "AI Apps & Agents" },
  { layer: 3, num: "03", tag: "Build", name: "AI360" },
  { layer: 2, num: "02", tag: "Foundation", name: "UniGraph" },
  { layer: 1, num: "01", tag: "Sources", name: "Convert" },
];

/**
 * "Where it sits in the stack" mini-diagram. Renders the four platform layers
 * top to bottom and highlights the active one. Used on platform product pages.
 */
export function StackPosition({ activeLayer, label }: { activeLayer: number; label?: string }) {
  return (
    <div
      className={styles.frame}
      role="img"
      aria-label={`Plant360 platform stack with the ${
        layers.find((l) => l.layer === activeLayer)?.name ?? ""
      } layer highlighted.`}
    >
      <div className={styles.head}>
        <span>{label ?? "Where it sits"}</span>
        <span className={styles.headFlow}>Data flows up ↑</span>
      </div>
      <div className={styles.layers}>
        {layers.map((l) => {
          const active = l.layer === activeLayer;
          return (
            <div key={l.num} className={`${styles.layer} ${active ? styles.active : ""}`}>
              <span className={styles.dot} aria-hidden="true" />
              <div className={styles.layerTag}>
                {l.num} · {l.tag}
              </div>
              <div className={styles.layerName}>{l.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
