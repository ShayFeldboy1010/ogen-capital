import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Footer({ locale, t }: { locale: Locale; t: Dictionary }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  const navLinks = [
    { href: base, label: t.nav.home },
    { href: `${base}/about`, label: t.nav.about },
    { href: `${base}/services`, label: t.nav.services },
    { href: `${base}/results`, label: t.nav.results },
    { href: `${base}/trust`, label: t.nav.trust },
    { href: `${base}/faq`, label: t.nav.faq },
    { href: `${base}/contact`, label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-line bg-ink-2/40">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_2fr]">
          <div>
            <Image
              src="/mark.png"
              alt=""
              width={745}
              height={650}
              className="h-12 w-auto"
            />
            <p className="mt-4 font-display text-2xl text-gold">
              {t.footer.brandLine}
            </p>
            <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-bone-dim">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-bone">{t.footer.navTitle}</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-bone-dim transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-bone">{t.footer.legalTitle}</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link
                  href={`${base}/legal/disclaimer`}
                  className="text-sm text-bone-dim transition-colors hover:text-gold"
                >
                  {t.footer.disclaimerLink}
                </Link>
              </li>
              <li>
                <Link
                  href={`${base}/legal/investor-rights`}
                  className="text-sm text-bone-dim transition-colors hover:text-gold"
                >
                  {t.footer.rightsLink}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-bone">
              {t.contact.newsletter.title}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-bone-dim">
              {t.contact.newsletter.body}
            </p>
            <NewsletterForm t={t} className="mt-5" />
          </div>
        </div>

        <div className="mt-14 border-t border-line pt-8">
          <p className="max-w-[90ch] text-xs leading-relaxed text-bone-dim/80">
            {t.footer.disclaimer}
          </p>
          <p className="mt-6 text-xs text-bone-dim/60">
            {year} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
