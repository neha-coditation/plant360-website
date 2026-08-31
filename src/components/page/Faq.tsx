import { Add } from "@carbon/icons-react";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { SectionHeading } from "./blocks";
import styles from "./Faq.module.scss";

export type FaqItem = { question: string; answer: string };

/**
 * Accessible FAQ built on native <details>/<summary> so it works with zero
 * client JS (crawlable, keyboard-operable) and ships FAQPage structured data.
 * Question-form headings and crawlable answers support answer-engine
 * optimization. Adapts to the parent Section tone.
 */
export function Faq({
  items,
  eyebrow = "FAQ",
  title = "Frequently asked questions",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <>
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className={styles.list}>
        {items.map((f) => (
          <details key={f.question} className={styles.item}>
            <summary className={styles.summary}>
              <span>{f.question}</span>
              <Add size={20} aria-hidden="true" className={styles.icon} />
            </summary>
            <div className={styles.answer}>
              <p>{f.answer}</p>
            </div>
          </details>
        ))}
      </div>
      <FaqJsonLd items={items} />
    </>
  );
}
