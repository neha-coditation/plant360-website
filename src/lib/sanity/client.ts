// Import from @sanity/client directly: the next-sanity top-level entry pulls
// in live/draft helpers that register a Server Action, which is incompatible
// with `output: 'export'`. We only need a plain build-time read client.
import { createClient, type SanityClient } from "@sanity/client";

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-10-01",
};

/** True only when a real project id is configured. */
export const sanityConfigured = Boolean(sanityConfig.projectId);

/**
 * Read-only client used at build time. `useCdn: false` guarantees the build
 * fetches the freshest published content (rebuilds are webhook-triggered).
 * Returns null when unconfigured so pages fall back to code content.
 */
export const sanityClient: SanityClient | null = sanityConfigured
  ? createClient({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
      useCdn: false,
      perspective: "published",
    })
  : null;

/**
 * Fetch helper that never throws at build time: if Sanity is not configured or
 * a query fails, it returns the provided fallback so static generation still
 * succeeds.
 */
export async function sanityFetch<T>(query: string, fallback: T, params: Record<string, unknown> = {}): Promise<T> {
  if (!sanityClient) return fallback;
  try {
    return await sanityClient.fetch<T>(query, params);
  } catch (err) {
    console.warn("[sanity] fetch failed, using fallback:", (err as Error).message);
    return fallback;
  }
}
