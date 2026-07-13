/**
 * Central site configuration.
 * Everything a non-developer may need to change lives here.
 */
export const site = {
  brand: "Ogen Capital",
  domain: "https://ogen.capital",

  /**
   * TODO(client): replace with the real WhatsApp number.
   * International format, digits only, no plus sign or dashes.
   * Example: Israeli number 050-123-4567 becomes "972501234567".
   */
  whatsappNumber: "972500000000",

  /** TODO(client): replace with the real contact email. */
  email: "office@ogen.capital",

  /**
   * Google Analytics 4 measurement ID.
   * Leave empty to disable analytics. Set via env NEXT_PUBLIC_GA_ID
   * or hardcode here, e.g. "G-XXXXXXXXXX".
   */
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
} as const;

/** Builds a wa.me link, optionally with a prefilled message. */
export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
