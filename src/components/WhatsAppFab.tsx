"use client";

import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { whatsappHref } from "@/lib/site";

/**
 * Floating WhatsApp control, present on every page (the site's single
 * conversion goal). Carries the official WhatsApp green, per spec section 3.
 */
export function WhatsAppFab({
  label,
  prefill,
}: {
  label: string;
  prefill: string;
}) {
  return (
    <a
      href={whatsappHref(prefill)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.45)] ring-1 ring-white/20 transition-transform duration-200 [@media(hover:hover)]:hover:scale-105 active:scale-95 active:duration-75 end-6 md:flex"
    >
      <WhatsAppIcon size={30} tone="mono" />
    </a>
  );
}
