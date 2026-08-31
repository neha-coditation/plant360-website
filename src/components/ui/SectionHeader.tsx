import styles from "./SectionHeader.module.scss";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  action?: React.ReactNode;
};

/** Consistent section heading block used across marketing pages. */
export function SectionHeader({ eyebrow, title, lead, align = "left", as = "h2", action }: Props) {
  const Heading = as;
  return (
    <div className={`${styles.wrap} ${align === "center" ? styles.center : ""}`}>
      <div className={styles.head}>
        {eyebrow ? <p className="p360-kicker">{eyebrow}</p> : null}
        <Heading className={as === "h1" ? "p360-h1" : "p360-h2"}>{title}</Heading>
        {lead ? <p className="p360-lead">{lead}</p> : null}
      </div>
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  );
}
