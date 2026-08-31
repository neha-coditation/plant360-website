import type { Metadata } from "next";
import { site } from "./site";

const TITLE_SUFFIX = "Plant360.AI, Industrial Data & AI Platform";

type SeoInput = {
  /** Page-specific title fragment, kept short so the full title stays under 60 chars. */
  title: string;
  description: string;
  /** Route path, no domain, no trailing slash (e.g. "/platform/convert"). */
  path: string;
  /** Overrides the generated OG image path. */
  ogImage?: string;
  noindex?: boolean;
};

export function absoluteUrl(path: string): string {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  return `${site.url}${clean}`;
}

/**
 * Build a complete Metadata object with canonical URL, Open Graph, and Twitter
 * cards. OG images are static per-route files under /og.
 */
export function buildMetadata({ title, description, path, ogImage, noindex }: SeoInput): Metadata {
  const fullTitle = title.includes("Plant360") ? title : `${title} | ${TITLE_SUFFIX}`;
  const canonical = absoluteUrl(path);
  const image = ogImage ?? `/og${path === "/" ? "/home" : path}.png`;
  const imageUrl = absoluteUrl(image);

  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true, "max-image-preview": "large" },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: fullTitle,
      description,
      url: canonical,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
