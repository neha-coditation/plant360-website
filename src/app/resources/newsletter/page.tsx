import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/page/blocks";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { CtaBand } from "@/components/sections/CtaBand";
import styles from "./Newsletter.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Newsletter | Plant360.AI",
  description:
    "A monthly briefing for industrial data and AI leaders: practical takes on digitization, asset knowledge graphs, and agents that do real plant work. No hype.",
  path: "/resources/newsletter",
});

const benefits = [
  {
    title: "Practical field notes, not press releases",
    body: "How teams are actually digitizing P&IDs, building asset graphs, and putting agents into MoC and reliability work, with the numbers behind each result.",
  },
  {
    title: "Patterns you can reuse",
    body: "The architectures, workflows, and pitfalls we see across operators, distilled into decisions you can apply to your own program.",
  },
  {
    title: "Product and platform updates",
    body: "New capabilities across Convert, UniGraph, AI360, and ChangeIQ, explained in terms of the plant work they unlock.",
  },
  {
    title: "One issue a month",
    body: "A single, substantial email. No drip sequences, no filler, unsubscribe in one click whenever you like.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter"
        title={
          <>
            The industrial AI briefing, <strong>once a month.</strong>
          </>
        }
        lead="Join engineering and operations leaders who read our monthly note on turning documents into data and data into working agents. Mechanism over hype, one issue a month, no spam."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Newsletter", path: "/resources/newsletter" },
        ]}
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="Subscribe"
          title={
            <>
              What you get, and <strong>what you will not.</strong>
            </>
          }
        />
        <div className={styles.layout}>
          <div>
            <p className={styles.valueTitle}>Every issue includes</p>
            <ul className={styles.list}>
              {benefits.map((b) => (
                <li key={b.title} className={styles.item}>
                  <span className={styles.itemTitle}>{b.title}</span>
                  <span className={styles.itemBody}>{b.body}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.formPanel}>
            <p className={styles.formPanelTitle}>Get the next issue</p>
            <NewsletterForm />
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
