/**
 * Central site configuration.
 * Everything a non-developer may need to change lives here.
 */
export const site = {
  brand: "OGen Family Office",
  domain: "https://ogen.capital",

  /** 055-979-9433 in international format: digits only, no plus or dashes. */
  whatsappNumber: "972559799433",
  phoneDisplay: "055-979-9433",

  email: "privacy@ogen.capital",

  /**
   * Google Analytics 4 measurement ID.
   * Leave empty to disable analytics. Set via env NEXT_PUBLIC_GA_ID
   * or hardcode here, e.g. "G-XXXXXXXXXX".
   */
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
} as const;

/**
 * Absolute base URL for metadata (share-card image, canonical URLs).
 *
 * ogen.capital is not pointed at the site yet, so falling straight back to it
 * would leave the WhatsApp/social preview image 404ing on the Vercel URL.
 * Order: explicit override, then whatever domain Vercel is serving, then the
 * final domain.
 */
export function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return site.domain;
}

/** Builds a wa.me link, optionally with a prefilled message. */
export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
