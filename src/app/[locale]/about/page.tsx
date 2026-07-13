import type { Metadata } from "next";
import Image from "next/image";
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
  return { title: getDictionary(locale).about.title };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pt-24">
          <Reveal className="max-w-[62ch]">
            <GoldRule className="w-16" />
            <h1 className="mt-7 font-display text-4xl leading-tight text-bone md:text-5xl">
              {t.about.title}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-bone-dim">
              {t.about.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Partners: alternating portrait + biography */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl space-y-20 px-6 py-24 md:space-y-28 md:py-28">
          {t.about.partners.map((partner, i) => (
            <Reveal key={partner.imageSeed}>
              <div className="grid items-center gap-10 md:grid-cols-[2fr_3fr] md:gap-16">
                <div
                  className={`relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] border border-line bg-ink-2 ${
                    i % 2 === 1 ? "md:order-2 md:justify-self-end" : ""
                  }`}
                >
                  {/* TODO(client): replace with the partner's real portrait */}
                  <Image
                    src={`https://picsum.photos/seed/${partner.imageSeed}/800/1000?grayscale`}
                    alt={partner.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover opacity-70"
                  />
                </div>
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-sm font-semibold text-gold">
                    {partner.role}
                  </p>
                  <h2 className="mt-2 font-display text-3xl text-bone">
                    {partner.name}
                  </h2>
                  <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-bone-dim">
                    {partner.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Working values: hairline trio */}
      <section className="border-t border-line bg-ink-2/40">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <Reveal>
            <h2 className="font-display text-3xl text-bone md:text-4xl">
              {t.about.values.title}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
            {t.about.values.items.map((item, i) => (
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
