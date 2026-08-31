import { getSiteSettings } from "@/lib/settings";
import { primaryNav } from "@/lib/site";
import { NavbarClient } from "./NavbarClient";

/**
 * Server wrapper: resolves CMS-controlled settings (announcement bar) at build
 * time and hands serializable data to the interactive client navbar.
 */
export async function Navbar() {
  const settings = await getSiteSettings();
  return <NavbarClient nav={primaryNav} announcement={settings.announcement} />;
}
