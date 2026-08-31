import Link from "next/link";
import { LogoLinkedin, LogoX, Security } from "@carbon/icons-react";
import { footerColumns, site } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import styles from "./Footer.module.scss";

export function Footer() {
  const year = 2026;
  return (
    <footer className={styles.footer}>
      <div className={`p360-container ${styles.top}`}>
        <div className={styles.brand}>
          <Link href="/" aria-label="Plant360.AI home" className={styles.logo}>
            <Logo />
          </Link>
          <p className={styles.brandText}>
            The full-stack industrial data and AI platform, from digitization to working agents.
          </p>
          <div className={styles.social}>
            <a href={site.social.linkedin} aria-label="Plant360.AI on LinkedIn" target="_blank" rel="noopener noreferrer">
              <LogoLinkedin size={20} />
            </a>
            <a href={site.social.x} aria-label="Plant360.AI on X" target="_blank" rel="noopener noreferrer">
              <LogoX size={20} />
            </a>
          </div>
        </div>

        <nav className={styles.columns} aria-label="Footer">
          {footerColumns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h2 className={styles.colTitle}>{col.title}</h2>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* <div className={`p360-container ${styles.badge}`}>
        <Security size={16} aria-hidden="true" />
        <span>ISO 27001 certified. Enterprise-grade security and governance.</span>
      </div> */}

      <div className={`p360-container ${styles.bottom}`}>
        <p>© {site.name} {year}. All rights reserved.</p>
        {/* <p className={styles.designedWith}>Design system: IBM Carbon</p> */}
      </div>
    </footer>
  );
}
