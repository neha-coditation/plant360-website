import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/page/Prose";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Plant360.AI",
  description:
    "How Plant360.AI collects, uses, and protects information, how we handle your engineering data, and the rights you have over it.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lead="This policy explains what information Plant360.AI collects, how we use it, and the control you keep over your data. It covers both our website and the Plant360 platform."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy policy", path: "/privacy" },
        ]}
      />

      <Section tone="light">
        <Prose>
          <p>
            <strong>Last updated: 2026.</strong> This Privacy Policy describes how {site.legalName}{" "}
            (&quot;Plant360&quot;, &quot;we&quot;, &quot;us&quot;) handles information in
            connection with the {site.domain} website and the Plant360 platform (together, the
            &quot;Services&quot;).
          </p>

          <h2>Information we collect</h2>
          <p>We collect only what we need to operate the Services and respond to you:</p>
          <ul>
            <li>
              <strong>Information you provide.</strong> When you book a demo or contact us, we
              collect your name, work email, company, role, plant type, and any message you send.
            </li>
            <li>
              <strong>Customer data.</strong> When you use the platform, we process the engineering
              documents, drawings, datasheets, and asset records you upload or connect. This is your
              data; we process it on your behalf.
            </li>
            <li>
              <strong>Usage data.</strong> We collect standard technical information such as IP
              address, browser type, and pages viewed, to keep the Services secure and reliable.
            </li>
          </ul>

          <h2>How we use information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide, operate, and improve the Services;</li>
            <li>Respond to demo requests and support inquiries;</li>
            <li>Digitize, structure, and serve your asset data back to you through the platform;</li>
            <li>Maintain security, prevent abuse, and meet legal and contractual obligations.</li>
          </ul>
          <p>
            We do not sell your information, and we do not use your customer data to train models
            for other customers.
          </p>

          <h2>Data ownership</h2>
          <p>
            You own your data. The Smart Drawings, the asset knowledge graph, and the records
            produced from your documents belong to you. We expose them through an open API so you
            can export or integrate them at any time, and we return or delete your customer data on
            termination in line with your agreement with us.
          </p>

          <h2>Security</h2>
          <p>
            Plant360 is ISO 27001 certified. We maintain an information security management system
            with administrative, technical, and physical safeguards, including encryption in transit
            and at rest, access controls on a least-privilege basis, and audit logging. Human review
            of AI output is a built-in control, so extractions and agent actions remain traceable
            and approvable.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website uses a small number of cookies and similar technologies that are necessary
            for the site to function and to understand aggregate usage. You can control cookies
            through your browser settings; disabling non-essential cookies will not prevent you from
            using the site.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain personal information only as long as needed for the purposes described here or
            as required by law. Customer data is retained for the term of your agreement and handled
            on termination according to that agreement.
          </p>

          <h2>Your rights</h2>
          <p>
            Depending on where you live, you may have the right to access, correct, delete, or port
            your personal information, and to object to or restrict certain processing. To exercise
            any of these rights, contact us using the details below and we will respond within the
            time required by applicable law.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy or your data? Email us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. For platform and data-handling
            questions, you can also reach our engineering team at{" "}
            <a href={`mailto:${site.engineeringEmail}`}>{site.engineeringEmail}</a>.
          </p>
        </Prose>
      </Section>

      <CtaBand />
    </>
  );
}
