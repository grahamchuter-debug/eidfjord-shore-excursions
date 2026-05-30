import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Eidfjord Cruise Port Guide",
  description:
    "Eidfjord cruise port guide for passengers: cruise dock and tender notes, walking distances, Vøringsfossen travel, Hardangervidda timing, weather advice, and return-to-ship buffer tips.",
  path: "/eidfjord-port-guide",
  ogImage: siteImages.portGuide,
  ogImageAlt: imageAlts.portGuide,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Eidfjord Port Guide" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "One day in Eidfjord", href: "/one-day-in-eidfjord" },
  { label: "Is Eidfjord worth visiting?", href: "/is-eidfjord-worth-visiting" },
  { label: "Best time to visit", href: "/best-time-to-visit-eidfjord" },
] as const;

const faqs = [
  {
    question: "Does Eidfjord have a cruise pier or is it a tender port?",
    answer:
      "Most cruise ships dock at the Eidfjord cruise pier in the village centre. Some larger vessels may use tender boats — confirm your ship's arrangement on the cruise app the night before arrival.",
  },
  {
    question: "How far is the Eidfjord cruise port from the village centre?",
    answer:
      "The village is compact — the cruise pier is within walking distance of shops, cafés, and excursion meeting points, typically 2–5 minutes on foot.",
  },
  {
    question: "How long does it take to reach Vøringsfossen from Eidfjord?",
    answer:
      "Vøringsfossen is approximately 20 km via Måbødalen valley. Allow roughly 30–45 minutes each way by coach, plus time at viewpoints — plan for a three-to-four-hour excursion minimum.",
  },
  {
    question: "How early should cruise passengers return to the ship in Eidfjord?",
    answer:
      "Plan to be back at the cruise pier at least 30–45 minutes before all aboard. Security screening and gangway queues can compress that buffer on peak summer days.",
  },
] as const;

export default function EidfjordPortGuidePage() {
  return (
    <ContentPage
      title="Eidfjord Port Guide for Cruise Passengers"
      lead="Everything you need to navigate Eidfjord cruise port — pier and tender access, walking distances, Vøringsfossen travel, Hardangervidda timing, weather advice, and return-to-ship buffer guidance."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Cruise dock and tender information</h2>
        <p>
          Eidfjord is primarily a dock port. Most cruise ships berth at the village
          pier with immediate access to the harbour and Hardangerfjord waterfront.
          On occasional busy days or for very large vessels, tender boats may
          transfer passengers ashore — check your cruise line&apos;s app for
          your specific arrangement.
        </p>
        <p>
          Either way, you arrive close to excursion meeting points, cafés, and
          the waterfront. Disembark as early as your cruise line allows on
          popular Vøringsfossen tour days.
        </p>
      </section>

      <section>
        <h2>Walking distances from the cruise pier</h2>
        <ul>
          <li>
            <strong>Village centre and harbour:</strong> 2–5 minutes on foot
            from the cruise pier
          </li>
          <li>
            <strong>Tourist information and shops:</strong> in the village
            centre, walkable from the pier
          </li>
          <li>
            <strong>Excursion meeting points:</strong> typically signed locations
            near the harbour within minutes of the gangway
          </li>
          <li>
            <strong>Vøringsfossen waterfall:</strong> 20 km by road — coach
            excursion only, not walkable
          </li>
          <li>
            <strong>Hardangervidda Nature Centre:</strong> reached by road via
            Måbødalen — coach or minibus required
          </li>
        </ul>
      </section>

      <section>
        <h2>Vøringsfossen travel considerations</h2>
        <p>
          Vøringsfossen lies at the top of Måbødalen valley, reached by Norwegian
          National Road 7 through dramatic canyon scenery. Coach and minibus tours
          are the practical route — do not rely on taxis without a pre-arranged
          booking. Allow approximately three to four hours for a round-trip
          waterfall excursion including time at Fossli Hotel viewpoints.
        </p>
        <p>
          The final approach includes short walks at viewpoint platforms depending
          on the operator and season. Wear sturdy shoes and pack a waterproof
          layer — valley weather and mist change quickly.
        </p>
      </section>

      <section>
        <h2>Hardangervidda Nature Centre timing</h2>
        <p>
          Hardangervidda Nature Centre sits at the gateway to Europe&apos;s largest
          mountain plateau. Most shore excursions include transport and centre
          entry. Allow time for exhibits and optional short walks — centre hours
          may vary seasonally.
        </p>
        <p>
          Combining the nature centre with Vøringsfossen in one port day works on
          six-to-eight-hour calls. Shorter port windows should prioritise one or
          the other, or stay in the village.
        </p>
      </section>

      <section>
        <h2>Weather and clothing advice</h2>
        <p>
          Eidfjord sits on Hardangerfjord beneath the Hardangervidda plateau.
          Summer can be mild but changeable; waterfall and plateau viewpoints
          are exposed to wind, mist, and rain. Pack layers, a waterproof jacket,
          and comfortable walking shoes for every shore excursion.
        </p>
      </section>

      <section>
        <h2>Return-to-ship buffer advice</h2>
        <ul>
          <li>Aim to be at the cruise pier 30–45 minutes before all aboard</li>
          <li>Pre-book Vøringsfossen tours on multi-ship days</li>
          <li>Monitor your cruise app for timetable updates throughout the day</li>
          <li>
            Use the{" "}
            <Link href="/#planner">Cruise Smart Planner</Link> to match
            activities to your hours ashore
          </li>
          <li>
            Allow extra margin if your ship uses tender boats rather than the
            main pier
          </li>
        </ul>
      </section>
    </ContentPage>
  );
}
