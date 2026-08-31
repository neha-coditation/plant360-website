import styles from "./Section.module.scss";

export type SectionTone = "dark" | "light" | "gray" | "accent";

type Props = {
  /** Background surface. Alternate these down a page, as the reference does. */
  tone?: SectionTone;
  id?: string;
  className?: string;
  containerClassName?: string;
  /** Set false to render the inner container full-bleed (no max-width padding). */
  contain?: boolean;
  as?: "section" | "div";
  children: React.ReactNode;
};

/**
 * Section surface wrapper. Sets the background and default text colors for one
 * of four tones so pages can alternate dark / white / gray / accent bands the
 * way the approved reference landing page does. Type helpers (.p360-h1 etc.)
 * inherit color, so they render correctly on any tone.
 */
export function Section({
  tone = "dark",
  id,
  className,
  containerClassName,
  contain = true,
  as: Tag = "section",
  children,
}: Props) {
  const cls = [styles.section, styles[tone], className].filter(Boolean).join(" ");
  return (
    <Tag id={id} className={cls}>
      {contain ? (
        <div className={["p360-container", styles.inner, containerClassName].filter(Boolean).join(" ")}>
          {children}
        </div>
      ) : (
        children
      )}
    </Tag>
  );
}
