import Link from "next/link";
import { ScanAlt, ChartRelationship, FlowConnection, ChangeCatalog } from "@carbon/icons-react";
import styles from "./PlatformLayers.module.scss";
import Image from 'next/image'

/**
 * "The platform, four connected layers" - white band. Four cards (Convert,
 * UniGraph, AI360, AI Apps & Agents), each linking to its platform page,
 * matching the reference card copy exactly. Followed by a product visual slot.
 */
const cards = [
  {
    num: "01",
    kicker: "Convert",
    verb: "Digitize",
    Icon: ScanAlt,
    blurb:
      "Convert CAD, DWG, and even legacy PDF files into intelligent Smart Drawings with human-in-the-loop AI, lossless and audit-ready.",
    metric: "70% faster · 50% lower cost",
    href: "/platform/convert",
  },
  {
    num: "02",
    kicker: "UniGraph",
    verb: "Structure",
    Icon: ChartRelationship,
    blurb:
      "P&IDs, datasheets, and data from your existing systems of record unified into one living knowledge graph, kept continuously in sync.",
    metric: "10× retrieval · 80% less hunting",
    href: "/platform/unigraph",
  },
  {
    num: "03",
    kicker: "AI360",
    verb: "Build",
    Icon: FlowConnection,
    blurb:
      "Drag-and-drop platform to build and deploy industrial AI agents on your own graph in days, with pre-built integrations.",
    metric: "Agents in days, not months",
    href: "/platform/ai360",
  },
  {
    num: "04",
    kicker: "AI Apps & Agents",
    verb: "Apply",
    Icon: ChangeCatalog,
    blurb:
      "Production apps like ChangeIQ plus agents for HAZOP, Master Tag Registry, and asset management. Real use-cases, live.",
    metric: "50%+ efficiency, end to end",
    href: "/platform/changeiq",
    accent: true,
  },
];

export function PlatformLayers() {
  return (
    <section className={styles.section} id="platform">
      <div className={`p360-container ${styles.inner}`}>
        <div className={styles.head}>
          <h2 className={styles.kicker}>The platform · four connected layers</h2>
          <span className={styles.flow}>Digitize → Structure → Build → Apply</span>
        </div>

        <div className={styles.grid} data-reveal data-reveal-stagger>
          {cards.map((c) => (
            <Link key={c.num} href={c.href} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.num}>{c.num}</span>
                <span className={`${styles.iconBox} ${c.accent ? styles.iconBoxAccent : ""}`}>
                  <c.Icon size={18} aria-hidden="true" />
                </span>
              </div>
              <div className={styles.cardKicker}>{c.kicker}</div>
              <div className={styles.verb}>{c.verb}</div>
              <p className={styles.blurb}>{c.blurb}</p>
              <div className={styles.metric}>{c.metric}</div>
            </Link>
          ))}
        </div>

        {/*
        <div className={styles.product} aria-hidden="true">
          <div className={styles.productCanvas}>
            <Image src="landing-platform-image2.png" alt="Platform image" width={0} 
            height={0} sizes="100vw" style={{ width: '50%', height: 'auto', objectFit: 'contain' }}/>
          </div>
          <div className={styles.productBar}>
            <span>Plant360 · Platform</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
