"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import type { Locale } from "@/lib/i18n";
import { otherLocale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import { whatsappHref } from "@/lib/site";

export function Nav({ locale, t }: { locale: Locale; t: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const base = `/${locale}`;
  const links = [
    { href: `${base}/about`, label: t.nav.about },
    { href: `${base}/services`, label: t.nav.services },
    { href: `${base}/results`, label: t.nav.results },
    { href: `${base}/faq`, label: t.nav.faq },
    { href: `${base}/contact`, label: t.nav.contact },
  ];

  // Same page, other language.
  const switched = pathname.replace(`/${locale}`, `/${otherLocale(locale)}`);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href={base} className="flex items-center gap-3">
          <Image
            src="/mark.png"
            alt=""
            width={745}
            height={650}
            className="h-9 w-auto border border-line"
            priority
          />
          <span className="font-display text-xl font-semibold uppercase tracking-[0.32em] text-bone">
            <span className="text-gold-bright">O</span>gen
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
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

        <div className="hidden items-center gap-5 lg:flex">
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
            className="btn-gold rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright active:translate-y-px"
          >
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
                className="btn-gold mt-2 rounded-full bg-gold px-5 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:bg-gold-bright active:translate-y-px"
              >
                {t.cta.whatsapp}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
