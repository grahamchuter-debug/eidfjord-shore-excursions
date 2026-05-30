import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "One Day in Eidfjord for Cruise Passengers",
  description:
    "Sample one-day Eidfjord itineraries for cruise guests: 4-hour, 6-hour, and 8+ hour plans with Vøringsfossen waterfall, Hardangervidda Nature Centre, and village time with realistic return-to-ship timing.",
  path: "/one-day-in-eidfjord",
  ogImage: siteImages.voringsfossen,
  ogImageAlt: imageAlts.voringsfossen,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Eidfjord port guide", href: "/eidfjord-port-guide" },
  { label: "Is Eidfjord worth visiting?", href: "/is-eidfjord-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What can cruise passengers do in Eidfjord with only four hours ashore?",
    answer:
      "Focus on an Eidfjord village walk and short harbour viewpoints on Hardangerfjord. Skip Vøringsfossen and Hardangervidda — they need more time than a four-hour window allows comfortably.",
  },
  {
    question: "Can I visit Vøringsfossen and Hardangervidda Nature Centre in one Eidfjord day?",
    answer:
      "On six-to-eight-hour port calls, the Best of Eidfjord Sightseeing tour combines both. On shorter calls, choose one focused excursion or stay in the village.",
  },
  {
    question: "Should I book Eidfjord excursions before my cruise arrives?",
    answer:
      "Pre-booking is strongly recommended on peak summer days. Popular Vøringsfossen and Best of Eidfjord tours sell out when several ships share the port.",
  },
  {
    question: "How much buffer time should I leave before all aboard?",
    answer:
      "Aim to be at the cruise pier 30–45 minutes before the published all-aboard time. Gangway queues can compress that window quickly.",
  },
] as const;

export default function OneDayInEidfjordPage() {
  return (
    <ContentPage
      title="One Day in Eidfjord"
      lead="Practical sample itineraries for cruise passengers with 4, 6, or 8+ hours in Eidfjord — focused on Vøringsfossen waterfall, Hardangervidda Nature Centre, and village time with realistic return-to-ship timing."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Start with your ship&apos;s Eidfjord schedule</h2>
        <p>
          Every good Eidfjord day begins with your cruise line&apos;s arrival,
          departure, and all-aboard times. Subtract at least 45 minutes from
          your last possible departure to set a hard deadline for being back at
          the pier. Confirm times on your ship&apos;s app the morning you
          arrive.
        </p>
      </section>

      <section>
        <h2>4-hour itinerary: village and harbour</h2>
        <p>
          With under four hours ashore, stay in Eidfjord village. Walk the
          harbour waterfront, enjoy Hardangerfjord views, browse local shops,
          and photograph the mountain backdrop. Skip Vøringsfossen and
          Hardangervidda tours — Måbødalen road time exceeds what a four-hour
          window allows with a safe return margin.
        </p>
      </section>

      <section>
        <h2>6-hour itinerary: waterfall or nature centre</h2>
        <p>
          With four to six hours, choose either the{" "}
          <Link href="/excursions/best-of-eidfjord-sightseeing">
            Best of Eidfjord Sightseeing
          </Link>{" "}
          or the{" "}
          <Link href="/excursions/voringsfossen-waterfall">
            Vøringsfossen Waterfall Viewpoint Tour
          </Link>
          . Disembark promptly, confirm your meeting point, and avoid adding
          lengthy independent activities after the tour unless return times are
          confirmed.
        </p>
      </section>

      <section>
        <h2>8-hour itinerary: combined sightseeing</h2>
        <p>
          With six to eight hours, the{" "}
          <Link href="/excursions/best-of-eidfjord-sightseeing">
            Best of Eidfjord Sightseeing
          </Link>{" "}
          or{" "}
          <Link href="/excursions/hardangervidda-nature-centre">
            Hardangervidda Nature Centre and Scenic Valley Tour
          </Link>{" "}
          fits comfortably. Add a short village walk or harbour coffee if your
          tour returns with margin to spare.
        </p>
      </section>

      <section>
        <h2>8+ hour itinerary: private touring and village time</h2>
        <p>
          Full-day port calls unlock the{" "}
          <Link href="/excursions/private-best-of-eidfjord-sightseeing">
            Private Best of Eidfjord Sightseeing
          </Link>
          , extended Vøringsfossen photography, and relaxed Eidfjord village
          time. This is the ideal window for unhurried Hardangerfjord
          exploration without rushing back to the gangway.
        </p>
      </section>

      <section>
        <h2>Use the Cruise Smart Planner</h2>
        <p>
          Enter your ship&apos;s arrival and departure times on the{" "}
          <Link href="/#planner">Eidfjord Cruise Smart Planner</Link> for
          tier-based excursion recommendations and return-to-ship guidance
          tailored to your actual hours ashore.
        </p>
      </section>
    </ContentPage>
  );
}
