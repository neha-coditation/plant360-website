import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { platformProducts, getPlatformProduct } from "@/content/platform";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading, FeatureGrid, Steps, Personas, StatGrid, RelatedLinks } from "@/components/page/blocks";
import { Faq } from "@/components/page/Faq";
import { ProductMotif } from "@/components/page/illustrations";
import { CtaBand } from "@/components/sections/CtaBand";
import { SoftwareApplicationJsonLd } from "@/components/seo/JsonLd";
import styles from "./Product.module.scss";

export function generateStaticParams() {
  return platformProducts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getPlatformProduct(params.slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.seo.title} | Plant360.AI`,
    description: product.seo.description,
    path: `/platform/${product.slug}`,
  });
}

// Related solutions and use-cases per product, for internal linking.
const related: Record<string, { label: string; href: string; description?: string }[]> = {
  convert: [
    { label: "Digitization", href: "/solutions/digitization", description: "Engineering drawing and P&ID digitization." },
    { label: "Digital Transformation", href: "/solutions/digital-transformation", description: "From documents to a data foundation." },
    { label: "UniGraph", href: "/platform/unigraph", description: "Where digitized drawings become a live graph." },
  ],
  unigraph: [
    { label: "Asset Data Platform", href: "/solutions/asset-data-platform", description: "System of record plus knowledge graph." },
    { label: "Reliability & Maintenance", href: "/solutions/reliability-maintenance", description: "Clean CMMS data grounded in the graph." },
    { label: "AI360", href: "/platform/ai360", description: "Build agents on the graph UniGraph creates." },
  ],
  ai360: [
    { label: "Operational Efficiency", href: "/solutions/operational-efficiency", description: "Automate document-heavy plant workflows." },
    { label: "Use-cases", href: "/use-cases", description: "Six agents running real plant work today." },
    { label: "ChangeIQ", href: "/platform/changeiq", description: "A production app built on AI360." },
  ],
  changeiq: [
    { label: "Operational Efficiency", href: "/solutions/operational-efficiency", description: "Automate Management of Change and more." },
    { label: "Reliability & Maintenance", href: "/solutions/reliability-maintenance", description: "Safe change on live asset data." },
    { label: "AI360", href: "/platform/ai360", description: "The platform ChangeIQ is built on." },
  ],
};

export default function PlatformProductPage({ params }: { params: { slug: string } }) {
  const product = getPlatformProduct(params.slug);
  if (!product) notFound();

  return (
    <>
      <SoftwareApplicationJsonLd
        name={`${product.name} by Plant360.AI`}
        description={product.seo.description}
        path={`/platform/${product.slug}`}
      />

      <PageHero
        eyebrow={`Platform · ${product.verb}`}
        title={
          <>
            {product.name}: <strong>{product.valueProp}</strong>
          </>
        }
        lead={product.answer}
        metric={product.metric}
        primary={{ label: "Book a demo", href: "/contact" }}
        secondary={{ label: "See the platform", href: "/platform" }}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Platform", path: "/platform" },
          { name: product.name, path: `/platform/${product.slug}` },
        ]}
        aside={<ProductMotif variant={product.motif} />}
      />

      <Section tone="light">
        <SectionHeading
          eyebrow="Why it wins"
          title={`What makes ${product.name} different`}
          lead={`Purpose-built for engineering data, not generic AI, so ${product.name} produces structured, trusted output instead of another silo.`}
        />
        <div className={styles.highlights} data-reveal data-reveal-stagger>
          {product.highlights.map((h, i) => (
            <div key={h} className={styles.highlight}>
              <span className={styles.hlNum}>{String(i + 1).padStart(2, "0")}</span>
              <p className={styles.hlText}>{h}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="gray">
        <SectionHeading eyebrow="Capabilities" title={`Inside ${product.name}`} />
        <FeatureGrid items={product.capabilities} columns={3} />
      </Section>

      <Section tone="dark">
        <SectionHeading eyebrow="How it works" title={`${product.name}, step by step`} />
        <Steps items={product.howItWorks} />
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="Outcomes & integrations" title="Proven results, on the systems you already run." />
        <StatGrid items={product.stats} />
        <div className={styles.integrations} data-reveal>
          <span className={styles.intLabel}>Works with</span>
          {product.integrations.map((i) => (
            <span key={i} className={styles.chip}>
              {i}
            </span>
          ))}
        </div>
        <p className={styles.proof} data-reveal>
          {product.proof}
        </p>
      </Section>

      <Section tone="gray">
        <SectionHeading eyebrow="Who uses it" title="Built for the teams who run the plant" />
        <Personas items={product.whoUsesIt} />
      </Section>

      <Section tone="light">
        <Faq items={product.faqs} title={`${product.name} FAQ`} />
      </Section>

      <Section tone="gray">
        <RelatedLinks title="Related solutions & platform" links={related[product.slug] ?? []} />
      </Section>

      <CtaBand />
    </>
  );
}
