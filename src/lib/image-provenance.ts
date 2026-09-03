/**
 * Image provenance registry for Eidfjord Shore Excursions.
 * NEW IMAGE SOURCING IS NOT AUTHORISED without verified rights.
 */

export type ImageProvenance = {
  key: string;
  urlOrPath: string;
  status:
    | "KEEP"
    | "REPLACE"
    | "WRONG_LOCATION"
    | "DUPLICATE"
    | "PROVENANCE_UNKNOWN"
    | "BROKEN";
  notes: string;
};

export const eidfjordImageProvenance: readonly ImageProvenance[] = [
  {
    key: "hero",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Voringsfossen_waterfall_at_Eidfjord%2C_Norway.jpg",
    status: "KEEP",
    notes:
      "Wikimedia Commons. Vøringsfossen at Eidfjord. Rights later-hardening.",
  },
  {
    key: "voringsfossen",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/V%C3%B8ringfossen.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Vøringsfossen. Rights later-hardening.",
  },
  {
    key: "harbour",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/Eidfjord_-_panoramio.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons / Panoramio-era Eidfjord harbour. Rights later-hardening.",
  },
  {
    key: "village",
    urlOrPath: "https://upload.wikimedia.org/wikipedia/commons/9/92/Eidfjord.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Eidfjord village. Rights later-hardening.",
  },
  {
    key: "hardangerfjord",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/Hardangerfjord.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Hardangerfjord. Rights later-hardening.",
  },
  {
    key: "hardangervidda",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Hardangervidda_20150723_170645.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Hardangervidda plateau. Rights later-hardening.",
  },
  {
    key: "mabodalen",
    urlOrPath:
      "https://upload.wikimedia.org/wikipedia/commons/4/41/M%C3%A5b%C3%B8dalen_-_Eidfjord%2C_Norway_2021-07-25.jpg",
    status: "KEEP",
    notes: "Wikimedia Commons. Måbødalen valley. Rights later-hardening.",
  },
  {
    key: "sisterPortCards",
    urlOrPath:
      "src/lib/site-images.ts flam/bergen/stavanger/alesund/geiranger/olden cards",
    status: "KEEP",
    notes:
      "Unused related-port assets in explore-norwegian-ports.tsx. Not labelled as Eidfjord local. Component is not on the homepage.",
  },
] as const;
