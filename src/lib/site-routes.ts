export const siteRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  {
    path: "/excursions",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/best-of-eidfjord-sightseeing",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/private-best-of-eidfjord-sightseeing",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/voringsfossen-waterfall",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/excursions/hardangervidda-nature-centre",
    priority: 0.9,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/eidfjord-port-guide",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/one-day-in-eidfjord",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/is-eidfjord-worth-visiting",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/best-time-to-visit-eidfjord",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
] as const;
