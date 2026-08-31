/**
 * Code defaults for site settings. At build time these are overridden by
 * Sanity `siteSettings` when the CMS is configured (see lib/sanity/queries).
 * Keeping defaults here means the site builds and renders correctly even
 * before a dataset exists.
 */
export type SiteSettings = {
  announcement: {
    enabled: boolean;
    text: string;
    linkLabel: string;
    linkHref: string;
  };
  metrics: {
    drawings: number;
    datasheets: number;
  };
  social: {
    linkedin: string;
    x: string;
  };
};

export const defaultSettings: SiteSettings = {
  announcement: {
    enabled: true,
    text: "New: ChangeIQ cuts Management of Change prep by 40%+.",
    linkLabel: "See it in action",
    linkHref: "/platform/changeiq",
  },
  metrics: {
    drawings: 83000,
    datasheets: 250000,
  },
  social: {
    linkedin: "https://www.linkedin.com/company/plant360ai",
    x: "https://x.com/plant360ai",
  },
};
