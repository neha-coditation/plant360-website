import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

/**
 * Renders a JSON-LD script. Kept server-side (no client JS) so structured data
 * ships as static HTML that crawlers and answer engines read directly.
 */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: absoluteUrl("/icon.svg"),
        description: site.tagline,
        sameAs: [site.social.linkedin, site.social.x],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: site.email,
          url: absoluteUrl("/contact"),
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        publisher: { "@type": "Organization", name: site.name },
      }}
    />
  );
}

export function SoftwareApplicationJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name,
        description,
        url: absoluteUrl(path),
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@type": "Organization", name: site.name, url: site.url },
      }}
    />
  );
}

export function FaqJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  path,
  datePublished,
  authorName,
  image,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  authorName: string;
  image?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        datePublished,
        author: { "@type": "Person", name: authorName },
        publisher: {
          "@type": "Organization",
          name: site.name,
          logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") },
        },
        image: image ? absoluteUrl(image) : undefined,
        mainEntityOfPage: absoluteUrl(path),
      }}
    />
  );
}

export function JobPostingJsonLd({
  title,
  description,
  datePosted,
  location,
  employmentType,
}: {
  title: string;
  description: string;
  datePosted: string;
  location: string;
  employmentType: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title,
        description,
        datePosted,
        employmentType,
        hiringOrganization: {
          "@type": "Organization",
          name: site.name,
          sameAs: site.url,
          logo: absoluteUrl("/icon.svg"),
        },
        jobLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: location },
        },
      }}
    />
  );
}
