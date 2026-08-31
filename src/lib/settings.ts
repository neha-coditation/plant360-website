import { defaultSettings, type SiteSettings } from "@/content/settings";
import { getSanitySettings } from "@/lib/sanity/queries";

/**
 * Resolve site settings at build time. Fetches Sanity `siteSettings` when the
 * CMS is configured, otherwise returns code defaults. Async so call sites do
 * not change when the CMS comes online.
 */
export async function getSiteSettings(): Promise<SiteSettings> {
  const remote = await getSanitySettings();
  if (!remote) return defaultSettings;
  return {
    announcement: {
      enabled: remote.announcement?.enabled ?? defaultSettings.announcement.enabled,
      text: remote.announcement?.text ?? defaultSettings.announcement.text,
      linkLabel: remote.announcement?.linkLabel ?? defaultSettings.announcement.linkLabel,
      linkHref: remote.announcement?.linkHref ?? defaultSettings.announcement.linkHref,
    },
    metrics: {
      drawings: remote.metrics?.drawings ?? defaultSettings.metrics.drawings,
      datasheets: remote.metrics?.datasheets ?? defaultSettings.metrics.datasheets,
    },
    social: {
      linkedin: remote.social?.linkedin ?? defaultSettings.social.linkedin,
      x: remote.social?.x ?? defaultSettings.social.x,
    },
  };
}
