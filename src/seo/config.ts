
export const SITE_URL = "https://metaledger.in";
export const SITE_NAME = "MetaLedger";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;
export const TWITTER_HANDLE = "@metaledger_official";

export interface SeoEntry {
  title: string;
  description: string;
  canonical: string;
  robots?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
}

function canon(path: string): string {
  if (!path.startsWith("/")) path = `/${path}`;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}

export const SEO_CONFIG: Record<string, SeoEntry> = {
  "/": {
    title: "MetaLedger | Smarter Solutions for Modern Teams",
    description: "MetaLedger is a modern platform crafted for the teams that shape the future — secure, scalable and built for real impact.",
    canonical: canon("/"),
    ogType: "website",
  },
  "/about": {
    title: "About MetaLedger | Our Story & Team",
    description: "Learn about MetaLedger — our mission, values and the team building the future of work.",
    canonical: canon("/about"),
    ogType: "website",
  },
  "/solutions": {
    title: "Solutions | MetaLedger",
    description: "Explore MetaLedger solutions tailored for modern enterprises — designed for scale and performance.",
    canonical: canon("/solutions"),
    ogType: "website",
  },
  "/careers": {
    title: "Careers | MetaLedger",
    description: "Join MetaLedger — build products used by thousands. Explore open roles and grow with us.",
    canonical: canon("/careers"),
    ogType: "website",
  },
  "/contact": {
    title: "Contact MetaLedger | Partnership & Support",
    description: "Contact MetaLedger for partnerships and support. Reach us at partnership@metaledger.in — we reply within 24 hours.",
    canonical: canon("/contact"),
    ogType: "website",
  },
  "/legal/privacy-policy": {
    title: "Privacy Policy | MetaLedger",
    description: "Read MetaLedger's Privacy Policy — how we collect, use and protect personal data.",
    canonical: canon("/legal/privacy-policy"),
    ogType: "article",
  },
  "/legal/terms-of-service": {
    title: "Terms of Service | MetaLedger",
    description: "MetaLedger Terms of Service — rules governing use of our platform and services.",
    canonical: canon("/legal/terms-of-service"),
    ogType: "article",
  },
  "/legal/security": {
    title: "Security | MetaLedger",
    description: "How MetaLedger secures your data — encryption, access control, monitoring and incident response.",
    canonical: canon("/legal/security"),
    ogType: "article",
  },
  "/legal/compliance": {
    title: "Compliance | MetaLedger",
    description: "MetaLedger compliance overview — standards and principles we follow to keep you compliant.",
    canonical: canon("/legal/compliance"),
    ogType: "article",
  },
  "/legal/cancellation": {
    title: "Cancellation & Refund Policy | MetaLedger",
    description: "Cancellation and refund policy for MetaLedger subscriptions and services.",
    canonical: canon("/legal/cancellation"),
    ogType: "article",
  },
  "/sitemap": {
    title: "Sitemap | MetaLedger",
    description: "Browse every public page on metaledger.in — plus sitemap.xml and robots.txt.",
    canonical: canon("/sitemap"),
    ogType: "website",
  },
  "/login": {
    title: "Sign In | MetaLedger",
    description: "Sign in to MetaLedger.",
    canonical: canon("/login"),
    robots: "noindex, nofollow",
    noindex: true,
  },
};

export function getSeoForPath(pathname: string): SeoEntry | undefined {
  const clean = pathname.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";
  if (SEO_CONFIG[clean]) return SEO_CONFIG[clean];
  if (SEO_CONFIG[pathname]) return SEO_CONFIG[pathname];
  if (clean === "/legal/cancellation-and-refund" || clean === "/legal/refund") {
    const base = SEO_CONFIG["/legal/cancellation"];
    return { ...base, canonical: base.canonical };
  }
  return undefined;
}

export function getBreadcrumbs(pathname: string): Array<{ name: string; url: string }> {
  const clean = pathname.split("?")[0].split("#")[0].replace(/\/$/, "") || "/";
  const parts = clean.split("/").filter(Boolean);
  const crumbs: Array<{ name: string; url: string }> = [{ name: "Home", url: canon("/") }];
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    const label = part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ name: label, url: canon(acc) });
  }
  return crumbs;
}
