import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const hardangerviddaNatureCentreExcursion: ExcursionData = {
  slug: "hardangervidda-nature-centre",
  path: "/excursions/hardangervidda-nature-centre",
  title: "Hardangervidda Nature Centre and Scenic Valley Tour",
  headline: "Hardangervidda Nature Centre and Scenic Valley Tour for Cruise Passengers",
  lead: "Mountain plateau context, Eidfjord nature and wildlife interpretation, Måbødalen valley, and Eio River scenery, the culture and nature shore excursion from Eidfjord cruise port.",
  metaTitle: "Hardangervidda Nature Centre and Scenic Valley Tour for Cruise Passengers",
  metaDescription:
    "Hardangervidda Nature Centre shore excursion from Eidfjord with mountain plateau context, Måbødalen valley, Eio River scenery, and Eidfjord wildlife interpretation for cruise passengers.",
  heroImage: siteImages.hardangerviddaTour,
  heroImageAlt: imageAlts.hardangerviddaTourCard,
  heroBadge: "Nature & culture Eidfjord tour",
  summary: {
    duration: "Approx. 3 hours 30 minutes",
    meetingPoint: "Eidfjord village centre near cruise pier",
    returnReassurance:
      "Coach timings designed for typical cruise port schedules",
    bestFor: "Passengers interested in nature, culture, and plateau geology",
  },
  snapshotCards: [
    { label: "Highlights", value: "Hardangervidda Centre, Måbødalen, Eio River" },
    { label: "Fitness level", value: "Easy, museum and short valley walks" },
    { label: "Port call fit", value: "Ideal for 6–8 hour visits" },
    { label: "Scenery", value: "Mountain plateau and valley landscapes" },
  ],
  gallery: [
    { src: siteImages.hardangervidda, alt: imageAlts.hardangervidda },
    { src: siteImages.mabodalen, alt: imageAlts.mabodalen },
    { src: siteImages.eioRiver, alt: imageAlts.eioRiver },
    { src: siteImages.hardangerfjord, alt: imageAlts.hardangerfjord },
  ],
  highlights: [
    "Hardangervidda Nature Centre with interactive exhibits",
    "Mountain plateau context and geology interpretation",
    "Eidfjord nature and wildlife background",
    "Måbødalen valley scenic driving route",
    "Eio River scenery between fjord and plateau",
    "Cruise-friendly departure and return timings",
  ],
  description: [
    "Hardangervidda is Europe's largest mountain plateau, and the dramatic backdrop to Eidfjord's cruise port on Hardangerfjord. This tour pairs Hardangervidda Nature Centre with the scenic Måbødalen valley drive, explaining how plateau ecology, geology, and local wildlife connect to the landscape you see from your ship.",
    "At the nature centre, interactive exhibits cover reindeer, arctic fox, plateau plants, and the human history of this high-altitude environment. The return route through Måbødalen adds canyon drama and Eio River scenery, often with optional Vøringsfossen viewpoints depending on timing and conditions.",
    "Best suited to port calls of six hours or more, this excursion suits passengers who want depth and interpretation alongside scenery, complementing rather than duplicating a pure waterfall-focused tour.",
  ],
  included: [
    "Guided Hardangervidda Nature Centre visit",
    "Scenic drive through Måbødalen valley",
    "Nature and wildlife interpretation",
    "Commentary on plateau geology and local history",
    "Route paced for typical cruise port timings",
  ],
  notIncluded: [
    "Extended Vøringsfossen viewpoint time (see dedicated waterfall tour)",
    "Food, drinks, and personal purchases",
    "Optional gratuities",
  ],
  timingAdvice: [
    "Best suited to port calls of six hours or more.",
    "Centre opening hours may vary seasonally, confirm on booking.",
    "Combine with village time on 8+ hour port calls.",
    "Keep 30–45 minutes before all aboard to reach the cruise pier.",
  ],
  faqs: [
    {
      question: "What is Hardangervidda Nature Centre?",
      answer:
        "It is an interpretive centre at the gateway to Hardangervidda National Park, with exhibits on plateau ecology, geology, wildlife, and the cultural history of Norway's largest mountain plateau.",
    },
    {
      question: "Does this tour include Vøringsfossen waterfall?",
      answer:
        "The focus is Hardangervidda Nature Centre and Måbødalen valley scenery. Some departures include brief waterfall viewpoints en route, choose the dedicated Vøringsfossen tour if the waterfall is your priority.",
    },
    {
      question: "Is this tour suitable for families?",
      answer:
        "Yes. The nature centre offers accessible, engaging exhibits and the overall activity level is easy, suitable for families with children on 6–8 hour port calls.",
    },
    {
      question: "How does this compare to Best of Eidfjord Sightseeing?",
      answer:
        "Best of Eidfjord combines waterfall, centre, and valley in one headline tour. This excursion emphasises nature centre interpretation and plateau context, ideal when culture and ecology interest you as much as the cascade.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Hardangervidda Nature Centre and Scenic Valley Tour" },
  ],
  relatedLinks: [
    {
      label: "Best of Eidfjord Sightseeing",
      href: "/excursions/best-of-eidfjord-sightseeing",
    },
    {
      label: "Vøringsfossen Waterfall Tour",
      href: "/excursions/voringsfossen-waterfall",
    },
    { label: "Is Eidfjord worth visiting?", href: "/is-eidfjord-worth-visiting" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the Nature Centre notes, then compare other Eidfjord options",
  ctaText:
    "Explore Hardangervidda mountain plateau context, Måbødalen valley, and Eidfjord nature on a cruise-friendly shore excursion.",
};
