import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Best Time to Visit Eidfjord on a Cruise",
  description:
    "Best time to visit Eidfjord for cruise passengers: seasonal weather, Vøringsfossen flow, Hardangervidda access, summer crowds, and month-by-month advice for Norway fjord sailings.",
  path: "/best-time-to-visit-eidfjord",
  ogImage: siteImages.hardangerfjord,
  ogImageAlt: imageAlts.hardangerfjord,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Best Time to Visit Eidfjord" },
] as const;

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Eidfjord port guide", href: "/eidfjord-port-guide" },
  { label: "Is Eidfjord worth visiting?", href: "/is-eidfjord-worth-visiting" },
] as const;

const faqs = [
  {
    question: "What is the best month to visit Eidfjord on a cruise?",
    answer:
      "June through August offers the longest daylight, warmest temperatures, and full excursion schedules. May and September can be quieter with fewer ships but cooler, changeable weather at Vøringsfossen viewpoints.",
  },
  {
    question: "Does Vøringsfossen look different by season?",
    answer:
      "Summer brings strong flow and green valley walls. Spring melt increases water volume; autumn adds colour to the plateau approach. Winter sailings are less common but can offer dramatic ice and snow scenery when tours operate.",
  },
  {
    question: "When is Eidfjord busiest for cruise passengers?",
    answer:
      "July and early August see peak cruise traffic. Pre-book Vøringsfossen and Best of Eidfjord tours and disembark early on multi-ship days.",
  },
  {
    question: "Is Eidfjord weather predictable in summer?",
    answer:
      "No — Hardangerfjord and Måbødalen weather change quickly. Summer days can be clear and mild or misty and wet within hours. Pack waterproof layers regardless of forecast.",
  },
] as const;

export default function BestTimeToVisitEidfjordPage() {
  return (
    <ContentPage
      title="Best Time to Visit Eidfjord"
      lead="Seasonal advice for cruise passengers calling at Eidfjord — when Vøringsfossen is at its best, how Hardangervidda access varies, and what to expect from weather and crowds across the Norway cruise season."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      breadcrumbs={breadcrumbs}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>Peak season: June to August</h2>
        <p>
          Most Norway cruise itineraries call at Eidfjord between June and
          August. Long daylight hours, full excursion schedules, and accessible
          Hardangervidda Nature Centre make this the default best time for
          first-time visitors. Expect peak crowds in July — pre-book{" "}
          <Link href="/excursions/best-of-eidfjord-sightseeing">
            Best of Eidfjord Sightseeing
          </Link>{" "}
          and Vøringsfossen tours.
        </p>
      </section>

      <section>
        <h2>Shoulder season: May and September</h2>
        <p>
          Shoulder months offer fewer ships and softer light for photography,
          but cooler temperatures and more frequent mist at waterfall viewpoints.
          Excursions generally still operate — confirm centre hours and tour
          availability when booking early-season sailings.
        </p>
      </section>

      <section>
        <h2>Weather at Vøringsfossen and Hardangervidda</h2>
        <p>
          Måbødalen canyon traps moisture — mist and cloud are common even on
          summer days. Clear conditions deliver spectacular waterfall panoramas;
          overcast skies can limit visibility but still produce atmospheric
          photography. Hardangervidda plateau routes may see snow lingering into
          late spring.
        </p>
      </section>

      <section>
        <h2>Planning tips by season</h2>
        <ul>
          <li>
            <strong>Summer:</strong> Book excursions early; disembark promptly on
            multi-ship days
          </li>
          <li>
            <strong>Shoulder:</strong> Pack extra layers; have realistic
            waterfall visibility expectations
          </li>
          <li>
            <strong>All seasons:</strong> Waterproof jacket and comfortable
            walking shoes are essential
          </li>
        </ul>
      </section>

      <section>
        <h2>Match timing to your port call</h2>
        <p>
          Season matters less than your hours ashore. Use the{" "}
          <Link href="/#planner">Eidfjord Cruise Smart Planner</Link> to see
          which excursions fit your ship&apos;s schedule regardless of month.
        </p>
      </section>
    </ContentPage>
  );
}
