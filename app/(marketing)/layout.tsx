import type { ReactNode } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { CookieConsent } from "@/components/consent/cookie-consent";
import { getSiteUrl, organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  const organizationSchema = organizationJsonLd({
    name: "MammaPrint Türkiye",
    url: getSiteUrl(),
  });
  const websiteSchema = websiteJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}
