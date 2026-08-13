"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import type { Locale } from "@/lib/i18n";
import { otherLocale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import { site, whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Nav({ locale, t }: { locale: Locale; t: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const base = `/${locale}`;
  const links = [
    { href: `${base}/about`, label: t.nav.about },
    { href: `${base}/services`, label: t.nav.services },
    { href: `${base}/contact`, label: t.nav.contact },
  ];

  // Same page, other language.
  const switched = pathname.replace(`/${locale}`, `/${otherLocale(locale)}`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur-md">
      {/* Logo takes the start edge, everything else the end edge — so in Hebrew
          the logo sits right and the menu sits left. (Spec section 1.) */}
      <div className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6">
        {/* Mark plus the full wordmark, set exactly like the footer lockup.
            On phones the mark stands alone, there is no room for the words. */}
        <Link href={base} className="flex items-center gap-3">
          <Image
            src="/mark.png"
            alt={site.brand}
            width={594}
            height={636}
            className="h-14 w-auto md:h-16"
            priority
          />
          <span className="hidden font-display text-2xl leading-none text-gold md:block">
            {t.footer.brandLine}
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-base transition-colors after:absolute after:inset-x-0 after:-bottom-1.5 after:h-px after:origin-center after:scale-x-0 after:bg-gold after:transition-transform after:duration-200 hover:text-gold [@media(hover:hover)]:hover:after:scale-x-100 ${
                  pathname === link.href ? "text-gold after:scale-x-100" : "text-bone-dim"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href={switched}
            className="text-base text-bone-dim transition-colors hover:text-gold"
          >
            {t.nav.switchLocale}
          </Link>
          <a
            href={whatsappHref(t.cta.whatsappPrefill)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright active:translate-y-px"
          >
            <WhatsAppIcon size={18} tone="brand" className="shrink-0" />
            {t.cta.whatsapp}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          className="text-bone transition-transform active:scale-90 lg:hidden"
        >
          {open ? <X size={26} /> : <List size={26} />}
        </button>
      </div>

      {/* Mobile menu: height animates via grid-rows 0fr→1fr (robust, no JS
          measuring), content cross-fades. Stays mounted so it closes smoothly. */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            className={`border-t border-line bg-ink transition-opacity duration-200 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-4 text-base text-bone transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={switched}
                onClick={() => setOpen(false)}
                className="py-4 text-base text-bone-dim"
              >
                {t.nav.switchLocale}
              </Link>
              <a
                href={whatsappHref(t.cta.whatsappPrefill)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright active:translate-y-px"
              >
                <WhatsAppIcon size={18} tone="brand" className="shrink-0" />
                {t.cta.whatsapp}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
