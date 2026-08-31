import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { demoCta } from "@/content/proof";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/page/blocks";
import { ContactForm } from "@/components/forms/ContactForm";
import styles from "./Contact.module.scss";

export const metadata: Metadata = buildMetadata({
  title: "Book a Demo | Plant360.AI",
  description:
    "Book a 30-minute Plant360 demo on your own drawings. See the full stack end to end, from digitize to graph to agent.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a demo"
        lead={demoCta.body}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="Request a demo"
          title="Tell us about your plant"
          lead="Share a few details and we will tailor the demo to your drawings and workflows. Only your work email is required."
        />
        <div className={styles.layout}>
          <ContactForm />

          <aside className={styles.details}>
            <p className={styles.detailsIntro}>
              Prefer to reach us directly? Every message goes to a real engineer, not a queue.
            </p>

            <div className={styles.item}>
              <span className={styles.itemLabel}>General & sales</span>
              <a className={styles.itemLink} href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>

            <div className={styles.item}>
              <span className={styles.itemLabel}>Engineering</span>
              <a className={styles.itemLink} href={`mailto:${site.engineeringEmail}`}>
                {site.engineeringEmail}
              </a>
            </div>

            <div className={styles.item}>
              <span className={styles.itemLabel}>LinkedIn</span>
              <a
                className={styles.itemLink}
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.name} on LinkedIn
              </a>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
