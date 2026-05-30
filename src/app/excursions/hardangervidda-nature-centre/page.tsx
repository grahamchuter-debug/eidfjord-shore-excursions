import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { hardangerviddaNatureCentreExcursion } from "@/lib/excursions/hardangervidda-nature-centre";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: hardangerviddaNatureCentreExcursion.metaTitle,
  description: hardangerviddaNatureCentreExcursion.metaDescription,
  path: hardangerviddaNatureCentreExcursion.path,
  ogImage: hardangerviddaNatureCentreExcursion.heroImage,
  ogImageAlt: hardangerviddaNatureCentreExcursion.heroImageAlt,
});

export default function HardangerviddaNatureCentrePage() {
  return (
    <ExcursionDetailPage excursion={hardangerviddaNatureCentreExcursion} />
  );
}
