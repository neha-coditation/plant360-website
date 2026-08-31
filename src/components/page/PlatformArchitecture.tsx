import styles from "./PlatformArchitecture.module.scss";

/**
 * The Plant360 technology stack: one platform for data, integration, and AI.
 * Rendered as a layered diagram (apps at the top, proprietary AI models at the
 * base) with the Drawing & Document Representation Model as the accent spine.
 * Tone-adaptive via --sf-* so it works on dark or light bands.
 */
const rows: { label: string; cells: { text: string; accent?: boolean; muted?: boolean }[] }[] = [
  {
    label: "Co-Pilots, apps & solutions",
    cells: [
      { text: "Management of Change" },
      { text: "Isolation Planning" },
      { text: "Enterprise Search & Knowledge Co-Pilot" },
      { text: "Asset Register" },
      { text: "Corrosion Loop Analysis" },
      { text: "+ more", muted: true },
    ],
  },
  {
    label: "App platform",
    cells: [
      { text: "Low-code co-pilot development & execution" },
      { text: "Application dev platform" },
      { text: "Platform API / SDKs" },
      { text: "Data exploration & visualization" },
    ],
  },
  {
    label: "AI platform",
    cells: [
      { text: "Proprietary industrial multi-modal AI model" },
      { text: "Proprietary ML models" },
      { text: "Automated model training & fine-tuning (ML/AI Ops)" },
      { text: "AI agent framework", accent: true },
    ],
  },
  {
    label: "Data & integration",
    cells: [
      { text: "Distributed graph data storage & processing engine" },
      { text: "Application integration platform: AutoCAD · SmartPlant · Aveva · + more" },
    ],
  },
  {
    label: "AI models",
    cells: [
      { text: "Drawing AI computer vision model" },
      { text: "Multi-modal AI model" },
      { text: "OCR" },
      { text: "Computer vision algorithms" },
    ],
  },
];

export function PlatformArchitecture() {
  return (
    <div className={styles.arch} data-reveal role="img" aria-label="Plant360 platform stack: co-pilots and apps on top, an app platform and AI platform beneath, over a data and integration layer and proprietary AI models, unified by the drawing and document representation model.">
      {rows.map((row, i) => (
        <div key={row.label} className={styles.row}>
          <div className={styles.rowLabel}>{row.label}</div>
          <div className={styles.cells}>
            {row.cells.map((c) => (
              <div
                key={c.text}
                className={`${styles.cell} ${c.accent ? styles.cellAccent : ""} ${c.muted ? styles.cellMuted : ""}`}
              >
                {c.text}
              </div>
            ))}
          </div>
          {i === 2 ? (
            <div className={styles.spine} aria-hidden="true">
              Drawing & Document Representation Model
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
