import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { getSiteSettings } from "@/lib/settings";
import { getIntegrationLogos } from "@/lib/sanity/queries";
import { Hero } from "@/components/sections/Hero";
import { PointSolution } from "@/components/sections/PointSolution";
import { Difference } from "@/components/sections/Difference";
import { PlatformLayers } from "@/components/sections/PlatformLayers";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCaseSwitcher } from "@/components/sections/UseCaseSwitcher";
import { Outcomes } from "@/components/sections/Outcomes";
import { Integrations } from "@/components/sections/Integrations";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Plant360.AI | Industrial Data & AI Platform",
  description:
    "The full-stack industrial data and AI platform. Digitize drawings, build a live asset graph, and run AI agents across engineering, operations, and safety. 50%+ efficiency.",
  path: "/",
});

export default async function HomePage() {
  const settings = await getSiteSettings();
  const logos = await getIntegrationLogos();

  return (
    <>
      <Hero />
      <PointSolution />
      <Difference />
      <PlatformLayers />
      <HowItWorks />
      <UseCaseSwitcher />
      <Outcomes drawings={settings.metrics.drawings} datasheets={settings.metrics.datasheets} />
      <Integrations logos={logos} />
      <CtaBand heading="Ready to turn your plant's documents into AI agents?" />
    </>
  );
}
