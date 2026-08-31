import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Static-first config. The default output target is a fully static export
 * (S3 + CloudFront compatible). Sanity Studio is deployed standalone (see
 * README), so nothing in the Next app requires a server runtime.
 *
 * Set STATIC_EXPORT=false only for local Studio-embedding experiments.
 */
const isExport = process.env.STATIC_EXPORT !== "false";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isExport ? "export" : undefined,
  // Clean URLs on S3/CloudFront: every route emits <route>/index.html.
  trailingSlash: true,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  // Carbon ships ESM that benefits from Next transpilation.
  transpilePackages: ["@carbon/react", "@carbon/icons-react", "@carbon/pictograms-react"],
  images: {
    // Static export cannot use the default Next image optimizer; assets are
    // pre-optimized at build and served straight from CloudFront.
    unoptimized: true,
  },
  sassOptions: {
    // Let Carbon's `@use '@carbon/...'` resolve from node_modules.
    includePaths: [path.join(__dirname, "node_modules")],
    quietDeps: true,
    silenceDeprecations: ["global-builtin", "import", "legacy-js-api", "color-functions"],
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
