import { sanityFetch } from "./client";

/**
 * GROQ queries + typed fetchers. Every fetcher returns a safe fallback when the
 * CMS is unconfigured, so the site builds without a dataset. Full content types
 * (posts, jobs, news, use-cases) are added alongside their pages.
 */

export type RemoteSettings = {
  announcement?: { enabled?: boolean; text?: string; linkLabel?: string; linkHref?: string };
  metrics?: { drawings?: number; datasheets?: number };
  social?: { linkedin?: string; x?: string };
} | null;

const SETTINGS_QUERY = /* groq */ `
  *[_type == "siteSettings"][0]{
    announcement,
    metrics,
    social
  }
`;

export async function getSanitySettings(): Promise<RemoteSettings> {
  return sanityFetch<RemoteSettings>(SETTINGS_QUERY, null);
}

export type IntegrationLogoDoc = { name: string; imageUrl?: string; url?: string };

const LOGOS_QUERY = /* groq */ `
  *[_type == "integrationLogo"] | order(name asc){
    name,
    "imageUrl": image.asset->url,
    url
  }
`;

export async function getIntegrationLogos(): Promise<IntegrationLogoDoc[]> {
  return sanityFetch<IntegrationLogoDoc[]>(LOGOS_QUERY, []);
}
