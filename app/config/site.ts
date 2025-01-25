export const siteConfig = {
  name: "BetterPerformance",
  description:
    "International platform for sharing and downloading PC optimization tweaks",
  url: "https://betterperformance.com",
  ogImage: "https://betterperformance.com/og.jpg",
  links: {
    twitter: "https://twitter.com/betterperformance",
    github: "https://github.com/betterperformance",
  },
  creator: "BetterPerformance Team",
};

export type SiteConfig = typeof siteConfig;

export const LIMITS = {
  FREE_USER: {
    MONTHLY_REQUESTS: 25,
  },
  PREMIUM_USER: {
    MONTHLY_REQUESTS: "unlimited",
  },
};

export const ROLES = {
  USER: "user",
  PREMIUM: "premium",
  TWEAKER: "tweaker",
  ADMIN: "admin",
} as const;

export type UserRole = keyof typeof ROLES;
