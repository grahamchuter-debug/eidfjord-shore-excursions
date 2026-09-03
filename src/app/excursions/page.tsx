import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { JsonLd } from "@/components/json-ld";
import { TourCard } from "@/components/tour-card";
import { eidfjordTourCards, eidfjordTourListItems } from "@/lib/eidfjord-tours";
import { buildPageMetadata } from "@/lib/site-metadata";
import { buildItemListSchema } from "@/lib/site-schema";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Eidfjord Excursions, All Shore Tours for Cruise Passengers",
  description:
    "Browse all Eidfjord shore excursions for cruise passengers: Best of Eidfjord Sightseeing, private tours, Vøringsfossen waterfall viewpoints, and Hardangervidda Nature Centre experiences.",
  path: "/excursions",
  ogImage: siteImages.voringsfossen,
  ogImageAlt: imageAlts.voringsfossen,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Excursions" },
] as const;

const relatedLinks = [
  { label: "Eidfjord port guide", href: "/eidfjord-port-guide" },
  { label: "One day in Eidfjord", href: "/one-day-in-eidfjord" },
  { label: "Is Eidfjord worth visiting?", href: "/is-eidfjord-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What is the best Eidfjord excursion for first-time cruise visitors?",
    answer:
      "The Best of Eidfjord Sightseeing tour is the headline choice when you have four or more hours in port. For shorter calls, focus on Eidfjord village walks and harbour viewpoints.",
  },
  {
    question: "How do I choose between Eidfjord shore excursions?",
    answer:
      "Match the tour to your hours ashore: village time suits under-four-hour calls; Best of Eidfjord and Vøringsfossen tours suit 4–6 hours; Best of Eidfjord or Hardangervidda Nature Centre suit 6–8 hours; private tours need 8+ hours. Use the port-day planner on the homepage.",
  },
  {
    question: "Do all Eidfjord excursions depart near the cruise port?",
    answer:
      "Yes. Featured tours meet in Eidfjord village centre near the cruise pier, typically within a few minutes of where you come ashore.",
  },
] as const;

export default function ExcursionsIndexPage() {
  return (
    <>
      <JsonLd data={[buildItemListSchema(eidfjordTourListItems)]} />
      <ContentPage
        title="Eidfjord Excursions"
        lead="Every cruise-friendly shore excursion in Eidfjord, Vøringsfossen waterfall, Hardangervidda Nature Centre, private sightseeing, and scenic valley touring, with return-to-ship timing in mind."
        heroImage={pageMeta.ogImage}
        heroImageAlt={pageMeta.ogImageAlt}
        pagePath={pageMeta.path}
        pageDescription={pageMeta.description}
        breadcrumbs={breadcrumbs}
        relatedLinks={relatedLinks}
        faqs={faqs}
        ctaTitle="Need help choosing an Eidfjord tour?"
        ctaText="Use the port-day planner on the homepage to match tours to your ship's timetable."
        ctaHref="/#planner"
        ctaButtonLabel="Open port-day planner"
        belowHero={
          <section className="border-b bg-surface-muted">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {eidfjordTourCards.map((tour) => (
                  <TourCard
                    key={tour.href}
                    href={tour.href}
                    image={tour.image}
                    imageAlt={tour.imageAlt}
                    title={tour.title}
                    description={tour.description}
                    badge={tour.badge}
                  />
                ))}
              </div>
            </div>
          </section>
        }
      >
        <section>
          <h2>Compare Eidfjord shore excursions</h2>
          <p>
            Each tour below is designed for cruise passengers calling at Eidfjord.
            Vøringsfossen and Hardangervidda tours need the longest port windows;
            village time fits shorter schedules. Private sightseeing tours suit
            full-day port calls.
          </p>
          <p>
            For port-day planning tools and tier-based recommendations, use the{" "}
            <Link href="/#planner">port-day planner</Link> on the homepage.
          </p>
        </section>
      </ContentPage>
    </>
  );
}
