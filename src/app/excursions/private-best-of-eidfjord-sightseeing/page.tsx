import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { privateBestOfEidfjordSightseeingExcursion } from "@/lib/excursions/private-best-of-eidfjord-sightseeing";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: privateBestOfEidfjordSightseeingExcursion.metaTitle,
  description: privateBestOfEidfjordSightseeingExcursion.metaDescription,
  path: privateBestOfEidfjordSightseeingExcursion.path,
  ogImage: privateBestOfEidfjordSightseeingExcursion.heroImage,
  ogImageAlt: privateBestOfEidfjordSightseeingExcursion.heroImageAlt,
});

export default function PrivateBestOfEidfjordSightseeingPage() {
  return (
    <ExcursionDetailPage
      excursion={privateBestOfEidfjordSightseeingExcursion}
    />
  );
}
