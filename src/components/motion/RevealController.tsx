"use client";

import { useEffect } from "react";

/**
 * Site-wide scroll-reveal. Renders nothing; on mount it flags <html> as
 * reveal-ready (so elements only start hidden when JS is present, keeping the
 * no-JS/SSG output fully visible and crawlable) and observes every
 * [data-reveal] element, adding `is-revealed` as it scrolls into view. A
 * MutationObserver picks up nodes added on client-side navigation. All motion
 * is disabled under prefers-reduced-motion via CSS.
 */
export function RevealController() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      // Reveal everything immediately; skip animation entirely.
      root.classList.add("reveal-ready", "reveal-static");
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    const observeAll = (scope: ParentNode) =>
      scope.querySelectorAll("[data-reveal]:not(.is-revealed)").forEach((el) => io.observe(el));

    observeAll(document);

    // Catch elements added by client-side route changes.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return;
          const el = node as Element;
          if (el.matches("[data-reveal]")) io.observe(el);
          observeAll(el);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
