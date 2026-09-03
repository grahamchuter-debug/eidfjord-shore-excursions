import {
  getEidfjordMonthSummaries,
  shipScheduleHubPath,
  shipScheduleMonthPath,
} from "@/lib/eidfjord-schedules";

const staticRoutes = [
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
  {
    path: shipScheduleHubPath,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  },
  { path: "/contact", priority: 0.5, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/about", priority: 0.5, changeFrequency: "yearly" as const },
] as const;

export function getSiteRoutes() {
  const monthRoutes = getEidfjordMonthSummaries().map((month) => ({
    path: shipScheduleMonthPath(month.slug),
    priority: 0.7,
    changeFrequency: "weekly" as const,
  }));
  return [...staticRoutes, ...monthRoutes];
}

export const siteRoutes = staticRoutes;
