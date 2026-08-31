"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Close } from "@carbon/icons-react";
import styles from "./AnnouncementBar.module.scss";

const DISMISS_KEY = "p360-announce-dismissed";

/**
 * CMS-controlled, dismissible announcement bar. Dismissal is remembered per
 * message text in localStorage, so editing the text in Sanity re-shows it.
 */
export function AnnouncementBar({
  enabled,
  text,
  linkLabel,
  linkHref,
}: {
  enabled: boolean;
  text: string;
  linkLabel: string;
  linkHref: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;
    const dismissed = window.localStorage.getItem(DISMISS_KEY);
    if (dismissed !== text) setVisible(true);
  }, [enabled, text]);

  if (!enabled || !visible) return null;

  return (
    <div className={styles.bar} role="region" aria-label="Announcement">
      <p className={styles.text}>
        <span className={styles.tag}>New</span>
        {text}{" "}
        <Link href={linkHref} className={styles.link}>
          {linkLabel} →
        </Link>
      </p>
      <button
        type="button"
        className={styles.dismiss}
        aria-label="Dismiss announcement"
        onClick={() => {
          window.localStorage.setItem(DISMISS_KEY, text);
          setVisible(false);
        }}
      >
        <Close size={16} />
      </button>
    </div>
  );
}
