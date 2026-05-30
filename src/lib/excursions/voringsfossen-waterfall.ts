import type { ExcursionData } from "@/lib/excursion-types";
import { imageAlts, siteImages } from "@/lib/site-images";

export const voringsfossenWaterfallExcursion: ExcursionData = {
  slug: "voringsfossen-waterfall",
  path: "/excursions/voringsfossen-waterfall",
  title: "Vøringsfossen Waterfall Viewpoint Tour",
  headline: "Vøringsfossen Waterfall Viewpoint Tour for Cruise Passengers",
  lead: "Norway waterfall scenery with dramatic viewpoints, photography stops, weather and visibility advice, and cruise-friendly timing — the SEO-focused Vøringsfossen shore excursion from Eidfjord.",
  metaTitle: "Vøringsfossen Waterfall Viewpoint Tour for Cruise Passengers",
  metaDescription:
    "Vøringsfossen waterfall shore excursion from Eidfjord with dramatic viewpoints, photography stops, weather advice, and cruise-friendly timing for Norway cruise passengers.",
  heroImage: siteImages.voringsfossenTour,
  heroImageAlt: imageAlts.voringsfossenTourCard,
  heroBadge: "Waterfall-focused Eidfjord tour",
  summary: {
    duration: "Approx. 3 hours",
    meetingPoint: "Eidfjord village centre near cruise pier",
    returnReassurance:
      "Timings designed for typical cruise port schedules",
    bestFor: "Photography lovers and waterfall enthusiasts",
  },
  snapshotCards: [
    { label: "Highlights", value: "Vøringsfossen, Fossli viewpoints, Måbødalen" },
    { label: "Fitness level", value: "Easy — short walks at viewpoints" },
    { label: "Port call fit", value: "Ideal for 4–8 hour visits" },
    { label: "Scenery", value: "Dramatic Norway waterfall canyon" },
  ],
  gallery: [
    { src: siteImages.voringsfossen, alt: imageAlts.voringsfossen },
    { src: siteImages.fossliViewpoint, alt: imageAlts.fossliViewpoint },
    { src: siteImages.mabodalen, alt: imageAlts.mabodalen },
    { src: siteImages.eioRiver, alt: imageAlts.eioRiver },
  ],
  highlights: [
    "Norway waterfall scenery at Vøringsfossen",
    "Dramatic viewpoints from Fossli Hotel area",
    "Photography stops along Måbødalen valley route",
    "Weather and visibility advice from local guides",
    "Eio River and canyon scenery en route",
    "Cruise-friendly timing with return-to-ship margin",
  ],
  description: [
    "Vøringsfossen plunges 182 metres into Måbødalen — one of Norway's most photographed waterfalls and the defining sight of an Eidfjord cruise call. This focused tour prioritises waterfall viewpoints, photography time, and practical advice on weather and visibility.",
    "The drive from Eidfjord follows the Eio River through the steep Måbødalen canyon before reaching Fossli Hotel viewpoint stops. Guides explain how seasonal flow, mist, and cloud cover affect what you see — helping you make the most of whatever conditions greet you.",
    "Compared with the broader Best of Eidfjord Sightseeing tour, this excursion spends more time at waterfall viewpoints and less at Hardangervidda Nature Centre — making it the right choice when Vøringsfossen is your primary goal ashore.",
  ],
  included: [
    "Guided Vøringsfossen waterfall viewpoint tour",
    "Scenic drive through Måbødalen valley",
    "Photography stops at Fossli Hotel area",
    "Weather and visibility guidance",
    "Route paced for typical cruise port timings",
  ],
  notIncluded: [
    "Hardangervidda Nature Centre entry (see Best of Eidfjord tour)",
    "Food, drinks, and personal purchases",
    "Optional gratuities",
  ],
  timingAdvice: [
    "Best suited to port calls of four hours or more.",
    "Morning light can improve photography — disembark promptly when possible.",
    "Mist and cloud are common — waterproof layers and realistic expectations help.",
    "Keep 30–45 minutes before all aboard to reach the cruise pier.",
  ],
  faqs: [
    {
      question: "How dramatic is Vøringsfossen on a typical cruise port day?",
      answer:
        "The waterfall is impressive year-round, but visibility varies with weather. Clear days offer canyon panoramas; mist can add atmosphere while limiting distant views. Guides advise on the best viewpoints for current conditions.",
    },
    {
      question: "Is this tour different from Best of Eidfjord Sightseeing?",
      answer:
        "Yes. This tour focuses on Vøringsfossen waterfall viewpoints and photography, with less time at Hardangervidda Nature Centre. Choose Best of Eidfjord for the full combined experience.",
    },
    {
      question: "Can I photograph Vøringsfossen from multiple viewpoints?",
      answer:
        "Most tours include stops at Fossli Hotel area viewpoints and scenic pull-offs along Måbødalen. Confirm specific stops when booking if photography is your priority.",
    },
    {
      question: "What if weather reduces visibility at the waterfall?",
      answer:
        "Guides adjust commentary and stops for conditions. The canyon scenery and Måbødalen drive remain worthwhile even when mist partially obscures the main cascade.",
    },
  ],
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Excursions", href: "/excursions" },
    { label: "Vøringsfossen Waterfall Viewpoint Tour" },
  ],
  relatedLinks: [
    {
      label: "Best of Eidfjord Sightseeing",
      href: "/excursions/best-of-eidfjord-sightseeing",
    },
    {
      label: "Hardangervidda Nature Centre Tour",
      href: "/excursions/hardangervidda-nature-centre",
    },
    { label: "Eidfjord port guide", href: "/eidfjord-port-guide" },
  ],
  bookingHref: "/excursions",
  bookingLabel: "Book this excursion",
  ctaTitle: "Ready to book your Vøringsfossen Waterfall tour?",
  ctaText:
    "See Norway's famous Vøringsfossen waterfall with dramatic viewpoints and cruise-friendly timing.",
};
