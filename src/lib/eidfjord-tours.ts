import { imageAlts, siteImages } from "@/lib/site-images";

export type EidfjordTourCard = {
  href: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  badge: string;
};

export const eidfjordTourCards: readonly EidfjordTourCard[] = [
  {
    href: "/excursions/best-of-eidfjord-sightseeing",
    image: siteImages.bestOfTour,
    imageAlt: imageAlts.bestOfTourCard,
    title: "Best of Eidfjord Sightseeing",
    description:
      "Headline Eidfjord shore excursion to Vøringsfossen waterfall, Hardangervidda Nature Centre, Måbødalen valley, and Eio River scenery, best for first-time visitors.",
    badge: "Headline Tour",
  },
  {
    href: "/excursions/private-best-of-eidfjord-sightseeing",
    image: siteImages.privateBestOfTour,
    imageAlt: imageAlts.privateBestOfTourCard,
    title: "Private Best of Eidfjord Sightseeing",
    description:
      "Premium private sightseeing with flexible pace, Vøringsfossen waterfall, Hardangervidda Nature Centre, and Hardangerfjord mountain scenery.",
    badge: "Private Option",
  },
  {
    href: "/excursions/voringsfossen-waterfall",
    image: siteImages.voringsfossenTour,
    imageAlt: imageAlts.voringsfossenTourCard,
    title: "Vøringsfossen Waterfall Viewpoint Tour",
    description:
      "Norway waterfall scenery with dramatic viewpoints, photography stops, weather advice, and cruise-friendly timing near Eidfjord.",
    badge: "Waterfall Focus",
  },
  {
    href: "/excursions/hardangervidda-nature-centre",
    image: siteImages.hardangerviddaTour,
    imageAlt: imageAlts.hardangerviddaTourCard,
    title: "Hardangervidda Nature Centre and Scenic Valley Tour",
    description:
      "Mountain plateau context, Eidfjord nature interpretation, Måbødalen valley, and Eio River scenery on a culture and nature shore excursion.",
    badge: "Nature & Culture",
  },
] as const;

export const eidfjordTourListItems = eidfjordTourCards.map((tour) => ({
  name: tour.title,
  description: tour.description,
}));
