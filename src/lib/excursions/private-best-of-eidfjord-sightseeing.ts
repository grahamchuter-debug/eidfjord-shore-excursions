import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const privateBestOfEidfjordSightseeingExcursion: ExcursionData = {
  slug: "private-best-of-eidfjord-sightseeing",
  path: "/excursions/private-best-of-eidfjord-sightseeing",
  title: "Private Best of Eidfjord Sightseeing",
  headline: "Private Best of Eidfjord Sightseeing for Cruise Passengers",
  lead: "Premium private sightseeing with flexible pace, Vøringsfossen waterfall, Hardangervidda Nature Centre, and Hardangerfjord mountain scenery, ideal for families, couples, and small groups.",
  metaTitle: "Private Best of Eidfjord Sightseeing for Cruise Passengers",
  metaDescription:
    "Private Eidfjord shore excursion with flexible pace to Vøringsfossen waterfall, Hardangervidda Nature Centre, and Hardangerfjord scenery. Approx. 3 hours 30 minutes. Easy activity level.",
  heroImage: siteImages.privateBestOfTour,
  heroImageAlt: imageAlts.privateBestOfTourCard,
  heroBadge: "Premium private Eidfjord tour",
  summary: {
    duration: "Approx. 3 hours 30 minutes",
    meetingPoint: "Eidfjord village centre near cruise pier",
    returnReassurance:
      "Private vehicle timings tailored to your ship's schedule",
    bestFor: "Families, couples, and small groups who want flexible pacing",
  },
  snapshotCards: [
    { label: "Highlights", value: "Private sightseeing, Vøringsfossen, Hardangervidda" },
    { label: "Fitness level", value: "Easy, flexible stops at viewpoints" },
    { label: "Port call fit", value: "Ideal for 8+ hour visits" },
    { label: "Scenery", value: "Waterfall, fjord, and mountain plateau views" },
  ],
  gallery: [
    { src: siteImages.hardangerfjord, alt: imageAlts.hardangerfjord },
    { src: siteImages.voringsfossenViewpoint, alt: imageAlts.voringsfossenViewpoint },
    { src: siteImages.hardangervidda, alt: imageAlts.hardangervidda },
    { src: siteImages.village, alt: imageAlts.village },
  ],
  highlights: [
    "Private sightseeing with flexible pace and photo stops",
    "Vøringsfossen waterfall with extended viewpoint time",
    "Hardangervidda Nature Centre at your group's rhythm",
    "Hardangerfjord and mountain scenery from scenic routes",
    "Dedicated vehicle and guide for your party",
    "Cruise-friendly return timing with personal buffer control",
  ],
  description: [
    "When you want Eidfjord's headline sights without sharing a coach with a large group, this private sightseeing tour delivers Vøringsfossen, Hardangervidda Nature Centre, and Hardangerfjord scenery at a pace that suits your party.",
    "Your guide adjusts stops for photography, weather visibility, and interest, spending more time at Fossli Hotel viewpoints when conditions are clear, or focusing on Hardangervidda interpretation when the plateau is the highlight.",
    "Best suited to full-day port calls of eight hours or more, the private format also works on shorter schedules when you prioritise waterfall viewpoints over village time. Return-to-ship timing remains the guiding constraint throughout.",
  ],
  included: [
    "Private guided Best of Eidfjord sightseeing",
    "Dedicated vehicle for your group",
    "Flexible photo stops at Vøringsfossen and Hardangervidda",
    "Route paced to your ship's timetable",
  ],
  notIncluded: [
    "Food, drinks, and personal purchases",
    "Optional gratuities",
    "Independent time beyond the agreed tour schedule",
  ],
  timingAdvice: [
    "Best suited to port calls of eight hours or more for a relaxed pace.",
    "Can work on 6–8 hour calls if you skip extended village time.",
    "Keep 30–45 minutes before all aboard to reach the cruise pier.",
    "Private tours are often arranged ahead on peak summer sailings.",
  ],
  faqs: [
    {
      question: "How many people can join a private Best of Eidfjord tour?",
      answer:
        "Most private vehicles accommodate families and small groups, typically up to six or eight passengers depending on the operator. Confirm capacity when booking.",
    },
    {
      question: "Is the private tour worth it over the group sightseeing option?",
      answer:
        "If you value flexible pacing, extended photo stops, and a dedicated guide, the private format suits couples, families, and small groups on full-day port calls.",
    },
    {
      question: "How long is the Private Best of Eidfjord Sightseeing tour?",
      answer:
        "Most departures run approximately three hours and thirty minutes, with flexibility to extend certain stops within your return-to-ship window.",
    },
    {
      question: "Does the private tour include Vøringsfossen waterfall?",
      answer:
        "Yes. Vøringsfossen and Fossli Hotel viewpoint stops are central to the itinerary, alongside Hardangervidda Nature Centre and Hardangerfjord scenery.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Private Best of Eidfjord Sightseeing" },
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
    { label: "One day in Eidfjord", href: "/one-day-in-eidfjord" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Explore this excursion",
  ctaTitle: "Read the private Best of Eidfjord notes, then compare other options",
  ctaText:
    "Enjoy flexible private sightseeing to Vøringsfossen, Hardangervidda, and Hardangerfjord viewpoints.",
};
