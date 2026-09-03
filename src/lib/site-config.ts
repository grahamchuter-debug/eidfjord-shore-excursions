import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Eidfjord Shore Excursions",
  url: "https://eidfjordshoreexcursions.com",
  locale: "en_GB",
  tagline: "Waterfall, plateau, or stay local for an Eidfjord cruise day",
  defaultDescription:
    "Independent Eidfjord cruise-port planning: Vøringsfossen waterfall, Hardangervidda Nature Centre, Best of Eidfjord sightseeing and published ship schedules for your day ashore.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Eidfjord Shore Excursions",
  shoreExcursionsPath: "/excursions",
  plannerPath: "/one-day-in-eidfjord",
  schedulePath: "/ship-schedule",
  nationalAuthorityUrl: "https://norwayshoreexcursions.com",
  contactEmail: "hello@eidfjordshoreexcursions.com",
  contactEmailVerified: true,
} as const;
