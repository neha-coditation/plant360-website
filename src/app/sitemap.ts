import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { platformProducts } from "@/content/platform";
import { solutions } from "@/content/solutions";
import { posts } from "@/content/blog";

export const dynamic = "force-static";

/**
 * Build-time sitemap over every static route plus CMS/content-driven routes
 * (platform products, solutions, blog posts). Rebuilds are webhook-triggered,
 * so this regenerates whenever content changes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "/",
    "/platform",
    "/why-plant360",
    "/solutions",
    "/use-cases",
    "/company/about",
    "/company/careers",
    "/company/news",
    "/resources/blog",
    "/resources/newsletter",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const dynamicPaths = [
    ...platformProducts.map((p) => `/platform/${p.slug}`),
    ...solutions.map((s) => `/solutions/${s.slug}`),
    ...posts.map((p) => `/resources/blog/${p.slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: absoluteUrl(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }));
}
