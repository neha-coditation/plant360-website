import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/page/PageHero";
import { Section } from "@/components/ui/Section";
import { Prose } from "@/components/page/Prose";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | Plant360.AI",
  description:
    "The terms that govern use of the Plant360.AI website and platform, including intellectual property, disclaimers, and limitation of liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of service"
        lead="These terms govern your use of the Plant360.AI website and platform. Use of the Services means you accept them. Paid use of the platform is also governed by your separate order or master agreement with us."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Terms of service", path: "/terms" },
        ]}
      />

      <Section tone="light">
        <Prose>
          <p>
            <strong>Last updated: 2026.</strong> These Terms of Service (&quot;Terms&quot;) are an
            agreement between you and {site.legalName} (&quot;Plant360&quot;, &quot;we&quot;,
            &quot;us&quot;) governing access to the {site.domain} website and the Plant360 platform
            (together, the &quot;Services&quot;).
          </p>

          <h2>Acceptance of terms</h2>
          <p>
            By accessing or using the Services, you agree to these Terms. If you are using the
            Services on behalf of an organization, you represent that you have authority to bind
            that organization. If you do not agree, do not use the Services.
          </p>

          <h2>Use of the site</h2>
          <p>
            You may use the website for lawful, informational purposes. You agree not to interfere
            with its operation, attempt to gain unauthorized access, scrape it in a way that
            degrades service, or use it to infringe the rights of others. Platform access is
            provisioned separately and subject to your order or master agreement.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The Services, including the software, design, text, and marks, are owned by Plant360 or
            its licensors and are protected by intellectual property laws. We grant you a limited,
            non-exclusive, non-transferable right to use the Services as permitted here. You retain
            all rights in the data and documents you provide; nothing in these Terms transfers
            ownership of your data to us.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The website is provided &quot;as is&quot; and &quot;as available&quot; without
            warranties of any kind, whether express or implied, including fitness for a particular
            purpose and non-infringement. AI-generated output is intended to assist qualified
            personnel and must be reviewed by them; it is not a substitute for professional
            engineering judgment or for compliance with applicable safety standards.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, Plant360 will not be liable for any indirect,
            incidental, special, consequential, or punitive damages, or for lost profits or data,
            arising out of or related to your use of the website. Liability arising from paid use of
            the platform is governed by the limitations set out in your order or master agreement.
          </p>

          <h2>Governing law</h2>
          <p>
            These Terms are governed by the laws applicable at Plant360&apos;s principal place of
            business, without regard to conflict-of-law principles. Any dispute relating to the
            website will be subject to the exclusive jurisdiction of the courts there, unless your
            separate agreement with us provides otherwise.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we will revise the &quot;Last
            updated&quot; date above. Continued use of the Services after a change means you accept
            the updated Terms.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Email us at{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </Prose>
      </Section>

      <CtaBand />
    </>
  );
}
