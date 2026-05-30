import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { bestOfEidfjordSightseeingExcursion } from "@/lib/excursions/best-of-eidfjord-sightseeing";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: bestOfEidfjordSightseeingExcursion.metaTitle,
  description: bestOfEidfjordSightseeingExcursion.metaDescription,
  path: bestOfEidfjordSightseeingExcursion.path,
  ogImage: bestOfEidfjordSightseeingExcursion.heroImage,
  ogImageAlt: bestOfEidfjordSightseeingExcursion.heroImageAlt,
});

export default function BestOfEidfjordSightseeingPage() {
  return (
    <ExcursionDetailPage excursion={bestOfEidfjordSightseeingExcursion} />
  );
}
