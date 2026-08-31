import type { Metadata } from "next";
import Script from "next/script";
import { plexSans, plexMono } from "@/lib/fonts";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { RevealController } from "@/components/motion/RevealController";
import "./globals.scss";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Industrial Data & AI Platform`,
    template: "%s | Plant360.AI, Industrial Data & AI Platform",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: absoluteUrl("/") },
};

export const viewport = {
  themeColor: "#161616",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <a href="#main-content" className="p360-skip-link">
          Skip to main content
        </a>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <RevealController />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        {gtmId ? (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
