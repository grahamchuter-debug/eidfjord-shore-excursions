import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { buildPageMetadata } from "@/lib/site-metadata";
import { imageAlts, siteImages } from "@/lib/site-images";

const pageMeta = {
  title: "Is Eidfjord Worth Visiting on a Cruise?",
  description:
    "Is Eidfjord worth visiting from a cruise ship? Vøringsfossen waterfall, Hardangerfjord scenery, Hardangervidda plateau, port call timing, and honest advice for Norway cruise passengers.",
  path: "/is-eidfjord-worth-visiting",
  ogImage: siteImages.worthVisiting,
  ogImageAlt: imageAlts.worthVisiting,
} as const;

export const metadata: Metadata = buildPageMetadata(pageMeta);

const relatedLinks = [
  { label: "Shore excursions", href: "/excursions" },
  { label: "Eidfjord port guide", href: "/eidfjord-port-guide" },
  { label: "One day in Eidfjord", href: "/one-day-in-eidfjord" },
  { label: "Best time to visit", href: "/best-time-to-visit-eidfjord" },
] as const;

const faqs = [
  {
    question: "Is Eidfjord worth visiting on a Norway cruise?",
    answer:
      "Yes for most passengers — especially if you have four or more hours ashore. Vøringsfossen waterfall and Hardangerfjord scenery make Eidfjord one of the standout Hardanger ports on typical fjord itineraries.",
  },
  {
    question: "Is Eidfjord worth it with only three or four hours in port?",
    answer:
      "You can enjoy a village walk and harbour viewpoints, but you will miss Vøringsfossen — the main reason most passengers go ashore. If your port call is very short, weigh Eidfjord against staying onboard or prioritising another port on your itinerary.",
  },
  {
    question: "What makes Eidfjord different from other Norwegian cruise ports?",
    answer:
      "Eidfjord combines Hardangerfjord waterfront access with Vøringsfossen — one of Norway's most famous waterfalls — and the Hardangervidda mountain plateau gateway. The village is compact and excursion-friendly.",
  },
  {
    question: "Should I book an excursion or explore Eidfjord independently?",
    answer:
      "The village is walkable independently. Vøringsfossen and Hardangervidda require road transport — pre-booked shore excursions are the practical choice for most cruise passengers.",
  },
] as const;

export default function IsEidfjordWorthVisitingPage() {
  return (
    <ContentPage
      title="Is Eidfjord Worth Visiting?"
      lead="Honest advice for cruise passengers deciding whether to go ashore in Eidfjord — covering Vøringsfossen waterfall, Hardangerfjord scenery, port call length, and what you gain from a half-day or full-day visit."
      heroImage={pageMeta.ogImage}
      heroImageAlt={pageMeta.ogImageAlt}
      pagePath={pageMeta.path}
      pageDescription={pageMeta.description}
      relatedLinks={relatedLinks}
      faqs={faqs}
    >
      <section>
        <h2>The short answer</h2>
        <p>
          Eidfjord is worth visiting for most Norway cruise passengers — particularly
          when you have at least four hours ashore. Vøringsfossen waterfall alone
          justifies the port call for many travellers. With six or more hours, you
          can add Hardangervidda Nature Centre and Måbødalen valley scenery for a
          complete Hardanger experience.
        </p>
      </section>

      <section>
        <h2>What you see when you go ashore</h2>
        <ul>
          <li>
            <strong>Vøringsfossen waterfall</strong> — 182-metre cascade in Måbødalen
            canyon
          </li>
          <li>
            <strong>Hardangerfjord</strong> — calm fjord water and steep mountain walls
          </li>
          <li>
            <strong>Hardangervidda</strong> — Europe&apos;s largest mountain plateau
            context at the nature centre
          </li>
          <li>
            <strong>Eidfjord village</strong> — compact harbour, shops, and waterfront
            walks
          </li>
        </ul>
      </section>

      <section>
        <h2>When Eidfjord is especially worth it</h2>
        <p>
          Book the{" "}
          <Link href="/excursions/best-of-eidfjord-sightseeing">
            Best of Eidfjord Sightseeing
          </Link>{" "}
          if you have four to eight hours and want the headline waterfall and
          nature centre combination. Choose the{" "}
          <Link href="/excursions/voringsfossen-waterfall">
            Vøringsfossen Waterfall Viewpoint Tour
          </Link>{" "}
          if photography and waterfall scenery are your priority.
        </p>
      </section>

      <section>
        <h2>When you might stay onboard</h2>
        <p>
          Very short port calls under three hours make reaching Vøringsfossen
          impractical. Heavy rain and low cloud can reduce waterfall visibility —
          though many passengers still find Måbødalen canyon scenery worthwhile.
          If you have already seen similar waterfall ports and prefer a rest day,
          Eidfjord village alone may not justify going ashore on a tight schedule.
        </p>
      </section>

      <section>
        <h2>Plan around your port hours</h2>
        <p>
          Use the{" "}
          <Link href="/#planner">Eidfjord Cruise Smart Planner</Link> and our{" "}
          <Link href="/one-day-in-eidfjord">one day in Eidfjord</Link> guide to
          match excursions to your ship&apos;s timetable before you decide.
        </p>
      </section>
    </ContentPage>
  );
}
