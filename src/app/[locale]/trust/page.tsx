import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/GoldRule";
import { CtaBand } from "@/components/CtaBand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: getDictionary(locale).trust.title };
}

export default async function TrustPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const base = `/${locale}`;

  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
          <Reveal className="max-w-[62ch]">
            <GoldRule className="w-16" />
            <h1 className="mt-7 font-display text-4xl leading-tight text-bone md:text-5xl">
              {t.trust.title}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-bone-dim">
              {t.trust.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Testimonials: staggered editorial quotes, not a card row */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl space-y-16 px-6 py-24 md:space-y-20 md:py-28">
          {t.trust.testimonials.map((item, i) => (
            <Reveal
              key={`${item.name}-${i}`}
              className={i % 2 === 1 ? "md:ms-auto md:max-w-2xl" : "md:max-w-2xl"}
            >
              {/* TODO(client): real client quotes, see dictionary */}
              <blockquote className="border-s-2 border-gold ps-6 font-display text-xl leading-snug text-bone md:ps-8 md:text-2xl">
                {"“"}
                {item.text}
                {"”"}
              </blockquote>
              <p className="mt-5 ps-6 text-sm font-semibold text-bone md:ps-8">
                {item.name}
              </p>
              <p className="mt-1 ps-6 text-sm text-bone-dim md:ps-8">
                {item.role}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-t border-line bg-ink-2/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <Reveal>
            <h2 className="font-display text-3xl text-bone md:text-4xl">
              {t.trust.signals.title}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
            {t.trust.signals.items.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 0.08}
                className="md:border-s md:border-line md:px-8 md:first:border-s-0 md:first:ps-0 md:last:pe-0"
              >
                <GoldRule className="w-8" />
                <h3 className="mt-5 font-display text-xl text-bone">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-bone-dim">
                  {item.body}
                </p>
                {"linkLabel" in item && item.linkLabel && (
                  <Link
                    href={`${base}/legal/investor-rights`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold transition-colors hover:text-bone"
                  >
                    {item.linkLabel}
                    <ArrowUpRight size={16} className="rtl:-scale-x-100" />
                  </Link>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={t.home.closing.title}
        body={t.home.closing.body}
        ctaLabel={t.cta.whatsapp}
        prefill={t.cta.whatsappPrefill}
      />
    </>
  );
}
