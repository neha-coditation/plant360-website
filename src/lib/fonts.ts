import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

/**
 * Self-hosted via next/font (fonts are downloaded and served from our own
 * origin at build time, satisfying the static-export requirement). display:
 * swap avoids invisible text during load. Weights limited to what the design
 * uses: 300 for large light headings, 400/500/600 for UI.
 */
export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-plex-sans",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});
