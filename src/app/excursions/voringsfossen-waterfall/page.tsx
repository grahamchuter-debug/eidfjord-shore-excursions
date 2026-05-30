import type { Metadata } from "next";

import { ExcursionDetailPage } from "@/components/excursion-detail-page";
import { voringsfossenWaterfallExcursion } from "@/lib/excursions/voringsfossen-waterfall";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: voringsfossenWaterfallExcursion.metaTitle,
  description: voringsfossenWaterfallExcursion.metaDescription,
  path: voringsfossenWaterfallExcursion.path,
  ogImage: voringsfossenWaterfallExcursion.heroImage,
  ogImageAlt: voringsfossenWaterfallExcursion.heroImageAlt,
});

export default function VoringsfossenWaterfallPage() {
  return <ExcursionDetailPage excursion={voringsfossenWaterfallExcursion} />;
}
