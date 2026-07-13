"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { whatsappHref } from "@/lib/site";

/**
 * Floating WhatsApp control, present on every page (the site's single
 * conversion goal). The only round element on the site, by design rule.
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
      className="fixed bottom-6 z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_8px_30px_rgba(0,0,0,0.45)] transition-transform duration-200 [@media(hover:hover)]:hover:scale-105 active:scale-95 active:duration-75 end-6 md:flex"
    >
      <WhatsappLogo size={28} weight="fill" />
    </a>
  );
}
