export type PlannerExcursionLink = {
  label: string;
  href?: string;
};

export type PortTimeTier = {
  minHours: number;
  maxHours: number | null;
  label: string;
  confidenceScore: number;
  confidenceLabel: string;
  confidenceMessage: string;
  excursions: readonly PlannerExcursionLink[];
  dayPlan: readonly string[];
  conversionNote?: string;
};

export type CruisePortDayPlannerConfig = {
  portName: string;
  heading: string;
  subtitle: string;
  supportingCopy: string;
  returnBufferNote: string;
  tiers: readonly PortTimeTier[];
};

export const eidfjordPortDayPlannerConfig: CruisePortDayPlannerConfig = {
  portName: "Eidfjord",
  heading: "Eidfjord Cruise Smart Planner™",
  subtitle: "Plan your shore excursions around your actual time in port.",
  supportingCopy: "Built specifically for cruise passengers visiting Eidfjord.",
  returnBufferNote:
    "Always confirm your cruise line's official all-aboard time, as this may be earlier than the published departure time.",
  tiers: [
    {
      minHours: 0,
      maxHours: 4,
      label: "Under 4 hours",
      confidenceScore: 40,
      confidenceLabel: "Limited Port Call",
      confidenceMessage:
        "Best suited to a compact Eidfjord village walk or short harbour viewpoint time near the cruise pier.",
      excursions: [
        { label: "Eidfjord village walk" },
        { label: "Short harbour viewpoint time" },
      ],
      dayPlan: [
        "Disembark promptly and stay within the compact Eidfjord village area",
        "Walk the harbour waterfront and enjoy Hardangerfjord views",
        "Skip Vøringsfossen and Hardangervidda — not enough margin on mountain roads",
        "Be back at the gangway by your recommended return time",
      ],
    },
    {
      minHours: 4,
      maxHours: 6,
      label: "4–6 hours",
      confidenceScore: 65,
      confidenceLabel: "Short but Usable Port Call",
      confidenceMessage:
        "Good for Best of Eidfjord Sightseeing or a focused Vøringsfossen Waterfall Viewpoint Tour.",
      excursions: [
        {
          label: "Best of Eidfjord Sightseeing",
          href: "/excursions/best-of-eidfjord-sightseeing",
        },
        {
          label: "Vøringsfossen Waterfall Viewpoint Tour",
          href: "/excursions/voringsfossen-waterfall",
        },
      ],
      dayPlan: [
        "Arrive in Eidfjord and head to your excursion meeting point",
        "Morning or early afternoon: Best of Eidfjord or Vøringsfossen tour",
        "Add a short village walk only if return times are confirmed",
        "Allow 45 minutes before all aboard to reach the cruise pier",
      ],
    },
    {
      minHours: 6,
      maxHours: 8,
      label: "6–8 hours",
      confidenceScore: 90,
      confidenceLabel: "Strong Port Call",
      confidenceMessage:
        "Enough time for Best of Eidfjord Sightseeing or Hardangervidda Nature Centre and Scenic Valley Tour.",
      excursions: [
        {
          label: "Best of Eidfjord Sightseeing",
          href: "/excursions/best-of-eidfjord-sightseeing",
        },
        {
          label: "Hardangervidda Nature Centre and Scenic Valley Tour",
          href: "/excursions/hardangervidda-nature-centre",
        },
      ],
      dayPlan: [
        "Arrive in Eidfjord and confirm your first excursion departure",
        "Morning: Best of Eidfjord or Hardangervidda Nature Centre tour",
        "Midday: Lunch in the harbour area",
        "Return to port by recommended return time",
      ],
    },
    {
      minHours: 8,
      maxHours: null,
      label: "8+ hours",
      confidenceScore: 95,
      confidenceLabel: "Excellent Full Day",
      confidenceMessage:
        "Ideal for private sightseeing, Vøringsfossen viewpoints, and relaxed Eidfjord village time.",
      conversionNote:
        "Most cruise passengers with 8+ hours in Eidfjord combine the Private Best of Eidfjord tour with Vøringsfossen viewpoints and unhurried harbour time.",
      excursions: [
        {
          label: "Private Best of Eidfjord Sightseeing",
          href: "/excursions/private-best-of-eidfjord-sightseeing",
        },
        {
          label: "Vøringsfossen Waterfall Viewpoint Tour",
          href: "/excursions/voringsfossen-waterfall",
        },
        { label: "Relaxed Eidfjord village time" },
      ],
      dayPlan: [
        "Arrive early and confirm your first excursion departure",
        "Morning: Private Best of Eidfjord or Vøringsfossen waterfall tour",
        "Midday: Lunch in Eidfjord village or at a Fossli viewpoint stop",
        "Afternoon: Relaxed harbour stroll and Hardangerfjord photography",
        "Keep the final hour free near the cruise port for a calm return to ship",
      ],
    },
  ],
};

export const RECOMMENDED_RETURN_BUFFER_MINUTES = 45;
export const LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES = 30;

export function parseTimeToMinutes(time: string): number | null {
  const match = /^(\d{1,2}):(\d{2})$/.exec(time.trim());

  if (!match) {
    return null;
  }

  const hours = Number(match[1]);
  const minutes = Number(match[2]);

  if (hours > 23 || minutes > 59) {
    return null;
  }

  return hours * 60 + minutes;
}

export function formatTimeLabel(time: string): string {
  const minutes = parseTimeToMinutes(time);
  if (minutes === null) {
    return time;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

export function subtractMinutesFromTime(
  time: string,
  subtractMinutes: number,
): string | null {
  const totalMinutes = parseTimeToMinutes(time);
  if (totalMinutes === null) {
    return null;
  }

  let result = totalMinutes - subtractMinutes;
  if (result < 0) {
    result += 24 * 60;
  }

  const hours = Math.floor(result / 60) % 24;
  const minutes = result % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

export function calculatePortMinutes(
  arrival: string,
  departure: string,
): number | null {
  const arrivalMinutes = parseTimeToMinutes(arrival);
  const departureMinutes = parseTimeToMinutes(departure);

  if (arrivalMinutes === null || departureMinutes === null) {
    return null;
  }

  let diff = departureMinutes - arrivalMinutes;

  if (diff <= 0) {
    diff += 24 * 60;
  }

  return diff;
}

export function formatPortDuration(totalMinutes: number): string {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes} minute${minutes === 1 ? "" : "s"}`;
  }

  if (minutes === 0) {
    return `${hours} hour${hours === 1 ? "" : "s"}`;
  }

  return `${hours} hour${hours === 1 ? "" : "s"} ${minutes} minute${minutes === 1 ? "" : "s"}`;
}

export function getTierForPortMinutes(
  totalMinutes: number,
  tiers: readonly PortTimeTier[],
): PortTimeTier {
  const hours = totalMinutes / 60;

  return (
    tiers.find((tier) => {
      const meetsMinimum = hours >= tier.minHours;
      const belowMaximum = tier.maxHours === null || hours < tier.maxHours;
      return meetsMinimum && belowMaximum;
    }) ?? tiers[tiers.length - 1]
  );
}

export function getReturnGuidance(departure: string) {
  return {
    departureLabel: formatTimeLabel(departure),
    recommendedReturn: subtractMinutesFromTime(
      departure,
      RECOMMENDED_RETURN_BUFFER_MINUTES,
    ),
    latestComfortableReturn: subtractMinutesFromTime(
      departure,
      LATEST_COMFORTABLE_RETURN_BUFFER_MINUTES,
    ),
  };
}

export function getConfidenceTone(score: number): {
  badge: string;
  bar: string;
} {
  if (score >= 90) {
    return { badge: "bg-emerald-100 text-emerald-800", bar: "bg-emerald-500" };
  }
  if (score >= 65) {
    return { badge: "bg-amber-100 text-amber-800", bar: "bg-amber-500" };
  }
  return { badge: "bg-orange-100 text-orange-800", bar: "bg-orange-500" };
}
