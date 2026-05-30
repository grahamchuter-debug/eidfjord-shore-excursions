import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const bestOfEidfjordSightseeingExcursion: ExcursionData = {
  slug: "best-of-eidfjord-sightseeing",
  path: "/excursions/best-of-eidfjord-sightseeing",
  title: "Best of Eidfjord Sightseeing",
  headline: "Best of Eidfjord Sightseeing for Cruise Passengers",
  lead: "The headline Eidfjord shore excursion — a guided journey to Vøringsfossen waterfall, Hardangervidda Nature Centre, Måbødalen valley, and Eio River scenery with timings designed for your ship's schedule.",
  metaTitle: "Best of Eidfjord Sightseeing for Cruise Passengers",
  metaDescription:
    "Headline Eidfjord shore excursion to Vøringsfossen waterfall, Hardangervidda Nature Centre, Måbødalen valley, and Fossli Hotel viewpoints. Approx. 3 hours 30 minutes. Easy activity level.",
  heroImage: siteImages.bestOfTour,
  heroImageAlt: imageAlts.bestOfTourCard,
  heroBadge: "Headline Eidfjord shore excursion",
  summary: {
    duration: "Approx. 3 hours 30 minutes",
    meetingPoint: "Eidfjord village centre near cruise pier",
    returnReassurance:
      "Coach timings designed for typical cruise port schedules",
    bestFor: "First-time visitors who want the definitive Eidfjord experience",
  },
  snapshotCards: [
    { label: "Highlights", value: "Vøringsfossen, Hardangervidda, Måbødalen" },
    { label: "Fitness level", value: "Easy — short walks at viewpoints" },
    { label: "Port call fit", value: "Ideal for 4–8 hour visits" },
    { label: "Scenery", value: "Waterfall, plateau, and fjord landscapes" },
  ],
  gallery: [
    { src: siteImages.voringsfossen, alt: imageAlts.voringsfossen },
    { src: siteImages.hardangervidda, alt: imageAlts.hardangervidda },
    { src: siteImages.mabodalen, alt: imageAlts.mabodalen },
    { src: siteImages.harbour, alt: imageAlts.harbour },
  ],
  highlights: [
    "Vøringsfossen waterfall — one of Norway's most famous cascades",
    "Hardangervidda Nature Centre with mountain plateau context",
    "Eio River scenery along the scenic Måbødalen route",
    "Måbødalen valley with dramatic canyon walls",
    "Fossli Hotel viewpoint area above the waterfall",
    "Cruise-friendly departure and return timings",
  ],
  description: [
    "Vøringsfossen is the reason most cruise passengers choose to go ashore in Eidfjord. This sightseeing tour combines the waterfall viewpoints, Hardangervidda Nature Centre, and the dramatic Måbødalen valley in one carefully timed shore excursion.",
    "The scenic drive from Eidfjord pier follows the Eio River through Måbødalen before reaching Fossli Hotel viewpoint stops and Hardangervidda Nature Centre. Short walks lead to photography points where you can see the waterfall, the canyon, and the surrounding Hardangerfjord mountains.",
    "Designed for cruise passengers, the tour accounts for typical port windows and return-to-ship requirements. You spend your hours ashore on waterfall and mountain scenery rather than in unnecessary transfers — making this the signature choice when you have four or more hours in Eidfjord.",
  ],
  included: [
    "Guided Best of Eidfjord sightseeing tour",
    "Scenic drive through Måbødalen valley",
    "Hardangervidda Nature Centre visit",
    "Commentary on waterfall, plateau, and local history",
    "Route paced for typical cruise port timings",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Optional gratuities",
    "Independent time beyond the tour schedule",
  ],
  timingAdvice: [
    "Best suited to port calls of four hours or more.",
    "Disembark promptly — Vøringsfossen tours fill on multi-ship days.",
    "Keep 30–45 minutes before all aboard to reach the cruise pier.",
    "Weather can affect visibility at the waterfall — pack a waterproof layer.",
  ],
  faqs: [
    {
      question: "How far is Vøringsfossen from Eidfjord cruise port?",
      answer:
        "Vøringsfossen is approximately 20 km from Eidfjord village, reached by a scenic drive through Måbødalen valley. The journey is included in the tour duration.",
    },
    {
      question: "Is this the best Eidfjord shore excursion for first-time visitors?",
      answer:
        "Yes. This is the headline choice for passengers who want the definitive waterfall, nature centre, and valley experience that defines Eidfjord as a cruise destination.",
    },
    {
      question: "How long is the Best of Eidfjord Sightseeing tour?",
      answer:
        "Most departures run approximately three hours and thirty minutes, leaving margin for village time on longer port days.",
    },
    {
      question: "Does the tour account for cruise pier departures?",
      answer:
        "Yes. Operators schedule around typical cruise arrival patterns. Confirm your meeting point on your voucher the night before.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Best of Eidfjord Sightseeing" },
  ],
  relatedLinks: [
    {
      label: "Private Best of Eidfjord",
      href: "/excursions/private-best-of-eidfjord-sightseeing",
    },
    {
      label: "Vøringsfossen Waterfall Tour",
      href: "/excursions/voringsfossen-waterfall",
    },
    { label: "One day in Eidfjord", href: "/one-day-in-eidfjord" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Book this excursion",
  ctaTitle: "Ready to book your Best of Eidfjord Sightseeing tour?",
  ctaText:
    "Experience Vøringsfossen waterfall, Hardangervidda Nature Centre, and dramatic Hardangerfjord scenery.",
};
