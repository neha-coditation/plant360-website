"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Close, Menu } from "@carbon/icons-react";
import type { NavItem } from "@/lib/site";
import { Logo } from "@/components/ui/Logo";
import { AnnouncementBar } from "./AnnouncementBar";
import styles from "./Navbar.module.scss";

type Announcement = {
  enabled: boolean;
  text: string;
  linkLabel: string;
  linkHref: string;
};

export function NavbarClient({ nav, announcement }: { nav: NavItem[]; announcement: Announcement }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menus on route change.
  useEffect(() => {
    setOpenIndex(null);
    setMobileOpen(false);
  }, [pathname]);

  // Escape closes any open panel; click outside closes.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenIndex(null);
        setMobileOpen(false);
      }
    }
    function onClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const openPanel = useCallback((i: number) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenIndex(i);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120);
  }, []);

  return (
    <>
      <AnnouncementBar {...announcement} />
      <header className={styles.header} ref={headerRef}>
        <div className={`p360-container ${styles.inner}`}>
          <Link href="/" className={styles.logo} aria-label="Plant360.AI home">
            <Logo />
          </Link>

          <nav className={styles.desktopNav} aria-label="Primary">
            <ul className={styles.navList}>
              {nav.map((item, i) =>
                item.panel ? (
                  <li
                    key={item.label}
                    className={styles.navItem}
                    onMouseEnter={() => openPanel(i)}
                    onMouseLeave={scheduleClose}
                  >
                    <button
                      type="button"
                      className={styles.navTrigger}
                      aria-expanded={openIndex === i}
                      aria-haspopup="true"
                      aria-controls={`megamenu-${i}`}
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      onFocus={() => openPanel(i)}
                    >
                      {item.label}
                      <ChevronDown size={16} aria-hidden="true" className={styles.chev} />
                    </button>
                    {openIndex === i ? (
                      <div
                        id={`megamenu-${i}`}
                        className={styles.megaPanel}
                        role="region"
                        aria-label={item.label}
                        onMouseEnter={() => openPanel(i)}
                        onMouseLeave={scheduleClose}
                      >
                        <div className={`p360-container ${styles.megaInner}`}>
                          {item.panel.intro ? (
                            <Link href={item.panel.intro.href} className={styles.megaIntro}>
                              <span className={styles.megaIntroTitle}>{item.panel.intro.title}</span>
                              <span className={styles.megaIntroText}>{item.panel.intro.text}</span>
                              <span className={styles.megaIntroLink}>View overview →</span>
                            </Link>
                          ) : null}
                          <ul className={styles.megaGrid}>
                            {item.panel.links.map((link) => (
                              <li key={link.href}>
                                <Link href={link.href} className={styles.megaLink}>
                                  <span className={styles.megaLinkLabel}>{link.label}</span>
                                  {link.description ? (
                                    <span className={styles.megaLinkDesc}>{link.description}</span>
                                  ) : null}
                                  {link.metric ? (
                                    <span className={styles.megaLinkMetric}>{link.metric}</span>
                                  ) : null}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : null}
                  </li>
                ) : (
                  <li key={item.label} className={styles.navItem}>
                    <Link href={item.href ?? "#"} className={styles.navLink}>
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.demoBtn}>
              Book a demo
              <span aria-hidden="true">→</span>
            </Link>
            <button
              type="button"
              className={styles.hamburger}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <Close size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? <MobileMenu nav={nav} onClose={() => setMobileOpen(false)} /> : null}
    </>
  );
}

function MobileMenu({ nav, onClose }: { nav: NavItem[]; onClose: () => void }) {
  return (
    <div className={styles.mobileMenu} role="dialog" aria-modal="true" aria-label="Site menu">
      <nav className={styles.mobileNav} aria-label="Mobile">
        {nav.map((item) =>
          item.panel ? (
            <details key={item.label} className={styles.mobileGroup}>
              <summary className={styles.mobileSummary}>
                {item.label}
                <ChevronDown size={16} aria-hidden="true" />
              </summary>
              <div className={styles.mobileLinks}>
                {item.panel.intro ? (
                  <Link href={item.panel.intro.href} onClick={onClose} className={styles.mobileLink}>
                    {item.panel.intro.title}
                  </Link>
                ) : null}
                {item.panel.links.map((link) => (
                  <Link key={link.href} href={link.href} onClick={onClose} className={styles.mobileLink}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>
          ) : (
            <Link key={item.label} href={item.href ?? "#"} onClick={onClose} className={styles.mobileTop}>
              {item.label}
            </Link>
          ),
        )}
        <Link href="/contact" onClick={onClose} className={styles.mobileDemo}>
          Book a demo →
        </Link>
      </nav>
    </div>
  );
}
