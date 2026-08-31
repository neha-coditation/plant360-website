import styles from "./Prose.module.scss";

/**
 * Readable long-form article container. Constrains measure and styles headings,
 * paragraphs, lists, and links. Adapts to the parent Section tone via --sf-*.
 * Use for legal pages, blog post bodies, and any prose content.
 */
export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={[styles.prose, className].filter(Boolean).join(" ")}>{children}</div>;
}
