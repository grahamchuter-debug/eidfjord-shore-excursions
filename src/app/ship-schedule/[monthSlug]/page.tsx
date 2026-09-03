import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleTable } from "@/components/ship-schedule-table";
import {
  formatMonthLabel,
  getEidfjordEntriesForMonthKey,
  getEidfjordMonthKeysWithCalls,
  getEidfjordMonthSummaries,
  monthKeyToSlug,
  monthSlugToKey,
  scheduleDisclaimer,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/eidfjord-schedules";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

type MonthPageProps = {
  params: Promise<{ monthSlug: string }>;
};

export function generateStaticParams() {
  return getEidfjordMonthKeysWithCalls().map((monthKey) => ({
    monthSlug: monthKeyToSlug(monthKey),
  }));
}

export async function generateMetadata({
  params,
}: MonthPageProps): Promise<Metadata> {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) return {};
  const label = formatMonthLabel(monthKey);
  return buildPageMetadata({
    title: `Eidfjord Cruise Ship Schedule ${label}`,
    description: `View the Eidfjord cruise ship schedule for ${label} including arrival times, departure times, and cruise lines visiting Eidfjord, Norway.`,
    path: shipScheduleMonthPath(monthSlug),
  });
}

export default async function EidfjordShipScheduleMonthPage({
  params,
}: MonthPageProps) {
  const { monthSlug } = await params;
  const monthKey = monthSlugToKey(monthSlug);
  if (!monthKey) notFound();

  const entries = getEidfjordEntriesForMonthKey(monthKey);
  if (entries.length === 0) notFound();

  const label = formatMonthLabel(monthKey);
  const otherMonths = getEidfjordMonthSummaries().filter(
    (m) => m.slug !== monthSlug,
  );

  return (
    <ContentPage
      title={`Eidfjord cruise schedule: ${label}`}
      lead={`${entries.length} published ship call${entries.length === 1 ? "" : "s"} for ${label}. Find your vessel, note arrival and departure, then choose a realistic Eidfjord plan.`}
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath={shipScheduleMonthPath(monthSlug)}
      pageDescription={`Eidfjord cruise ship schedule for ${label}.`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule", href: shipScheduleHubPath },
        { label },
      ]}
      ctaTitle="Plan your Eidfjord port day"
      ctaText="Use your hours ashore to choose between Vøringsfossen, broader sightseeing or the Nature Centre, with a clear return buffer."
      ctaHref="/one-day-in-eidfjord"
      ctaButtonLabel="Plan your Eidfjord day"
      relatedLinks={[
        { label: "All months", href: shipScheduleHubPath },
        { label: "Explore excursions", href: "/excursions" },
        { label: "Port guide", href: "/eidfjord-port-guide" },
        { label: "One day in Eidfjord", href: "/one-day-in-eidfjord" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
      </section>

      <section>
        <h2>{label} ship calls</h2>
        <ShipScheduleTable entries={entries} />
      </section>

      <section>
        <h2>Next: turn your date into a plan</h2>
        <p>
          Once you know roughly how long you have ashore, choose one main
          experience that fits. Ship times alone cannot prove that Vøringsfossen
          and Hardangervidda Nature Centre will both work on the same call.
        </p>
        <ul>
          <li>
            <Link href="/one-day-in-eidfjord">One day in Eidfjord</Link>
          </li>
          <li>
            <Link href="/excursions">Eidfjord shore excursions</Link>
          </li>
          <li>
            <Link href="/eidfjord-port-guide">Eidfjord cruise port guide</Link>
          </li>
          <li>
            <Link href="/is-eidfjord-worth-visiting">
              Is Eidfjord worth visiting?
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Other Eidfjord months</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {otherMonths.map((month) => (
            <li key={month.slug}>
              <Link href={shipScheduleMonthPath(month.slug)}>
                {month.label} · {month.callCount} calls
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </ContentPage>
  );
}
