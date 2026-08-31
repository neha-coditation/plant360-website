import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CtaButton } from "@/components/ui/CtaButton";
import styles from "./not-found.module.scss";

export const metadata: Metadata = {
  title: "Page not found | Plant360.AI",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section tone="dark">
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>404</p>
        <h1 className={styles.title}>This page could not be found.</h1>
        <p className={styles.body}>
          The page you were looking for may have moved or no longer exists. Head back to the start,
          explore the platform, or talk to us directly.
        </p>
        <div className={styles.actions}>
          <CtaButton href="/" variant="primary">
            Home
          </CtaButton>
          <CtaButton href="/platform" variant="secondary">
            Platform
          </CtaButton>
          <CtaButton href="/contact" variant="ghost">
            Book a demo
          </CtaButton>
        </div>
      </div>
    </Section>
  );
}
