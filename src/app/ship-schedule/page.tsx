import type { Metadata } from "next";
import Link from "next/link";

import { ContentPage } from "@/components/content-page";
import { ShipScheduleMonthCards } from "@/components/ship-schedule-month-cards";
import {
  eidfjordScheduleIntegrity,
  formatScheduleDate,
  getEidfjordMonthSummaries,
  scheduleDisclaimer,
  shipScheduleHubPath,
} from "@/lib/eidfjord-schedules";
import { imageAlts, siteImages } from "@/lib/site-images";
import { buildPageMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Eidfjord Cruise Ship Schedule",
  description:
    "Browse Eidfjord cruise ship schedules by month. View arrival times, departure times, and cruise lines visiting Eidfjord, Norway to plan your shore day.",
  path: shipScheduleHubPath,
});

export default function ShipScheduleHubPage() {
  const months = getEidfjordMonthSummaries();
  const firstLabel = eidfjordScheduleIntegrity.firstDate
    ? formatScheduleDate(eidfjordScheduleIntegrity.firstDate)
    : "";
  const lastLabel = eidfjordScheduleIntegrity.lastDate
    ? formatScheduleDate(eidfjordScheduleIntegrity.lastDate)
    : "";

  return (
    <ContentPage
      title="Eidfjord cruise ship schedule"
      lead={`Published calls for Eidfjord from ${firstLabel} to ${lastLabel}. Find your month, check arrival and departure times, then decide whether Vøringsfossen, broader sightseeing or the Nature Centre fits.`}
      heroImage={siteImages.hero}
      heroImageAlt={imageAlts.hero}
      pagePath={shipScheduleHubPath}
      pageDescription={metadata.description as string}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Ship schedule" },
      ]}
      ctaTitle="Plan your Eidfjord port day"
      ctaText="Once you know your hours ashore, compare waterfall, sightseeing and Nature Centre options with a clear return buffer."
      ctaHref="/one-day-in-eidfjord"
      ctaButtonLabel="Plan your Eidfjord day"
      relatedLinks={[
        { label: "Eidfjord shore excursions", href: "/excursions" },
        { label: "One day in Eidfjord", href: "/one-day-in-eidfjord" },
        { label: "Port guide", href: "/eidfjord-port-guide" },
        { label: "Is Eidfjord worth visiting?", href: "/is-eidfjord-worth-visiting" },
      ]}
    >
      <section>
        <p className="rounded border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          {scheduleDisclaimer}
        </p>
        <p className="mt-4 text-base leading-7 text-slate-700">
          This local timetable is filtered from the Norway Shore Excursions master
          schedule: {eidfjordScheduleIntegrity.total} Eidfjord calls,{" "}
          {eidfjordScheduleIntegrity.byYear["2026"] ?? 0} in 2026 and{" "}
          {eidfjordScheduleIntegrity.byYear["2027"] ?? 0} in 2027, across{" "}
          {eidfjordScheduleIntegrity.uniqueShips} ships.
        </p>
      </section>

      <section>
        <h2>Browse by month</h2>
        <ShipScheduleMonthCards months={months} />
      </section>

      <section>
        <h2>Why ship times matter in Eidfjord</h2>
        <p>
          A short call usually suits the village. Vøringsfossen and Hardangervidda
          Nature Centre need more hours and confirmed tickets. A longer day still
          does not prove both will fit. Always leave a clear buffer before all
          aboard.
        </p>
        <p>
          Continue to{" "}
          <Link href="/one-day-in-eidfjord">one day in Eidfjord</Link>,{" "}
          <Link href="/excursions">excursion options</Link>, the{" "}
          <Link href="/eidfjord-port-guide">port guide</Link>, or{" "}
          <Link href="/is-eidfjord-worth-visiting">is Eidfjord worth visiting?</Link>.
        </p>
      </section>
    </ContentPage>
  );
}
