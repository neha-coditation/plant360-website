import Link from "next/link";
import { ArrowRight } from "@carbon/icons-react";
import styles from "./CtaButton.module.scss";

type Variant = "primary" | "secondary" | "ghost";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
};

/**
 * Link-styled CTA matching the reference button treatment (square Carbon-style
 * button, single accent). Server component: renders no client JS.
 */
export function CtaButton({ href, children, variant = "primary", withArrow = true, className }: Props) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const cls = [styles.btn, styles[variant], className].filter(Boolean).join(" ");
  const content = (
    <>
      <span>{children}</span>
      {withArrow ? <ArrowRight size={16} aria-hidden="true" /> : null}
    </>
  );

  if (isExternal) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {content}
    </Link>
  );
}
