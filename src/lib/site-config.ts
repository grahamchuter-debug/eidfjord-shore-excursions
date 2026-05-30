import { imageAlts, siteImages } from "@/lib/site-images";

export const siteConfig = {
  name: "Eidfjord Shore Excursions",
  url: "https://eidfjordshoreexcursions.com",
  locale: "en_GB",
  defaultDescription:
    "Independent Eidfjord cruise port guides and shore excursion planning for passengers visiting Vøringsfossen waterfall, Hardangervidda mountain scenery, Hardangerfjord viewpoints, and Måbødalen valley.",
  defaultOgImage: siteImages.hero,
  defaultOgImageAlt: imageAlts.hero,
  copyrightEntity: "Eidfjord Shore Excursions",
  shoreExcursionsPath: "/excursions",
} as const;
