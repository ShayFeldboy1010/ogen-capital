import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/GoldRule";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: getDictionary(locale).legal.privacyTitle };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:pt-24">
          <Reveal className="max-w-[62ch]">
            <GoldRule className="w-16" />
            <h1 className="mt-7 font-display text-4xl leading-tight text-bone md:text-5xl">
              {t.legal.privacyTitle}
            </h1>
            <p className="mt-6 text-base text-gold">{t.legal.privacyLead}</p>
            <p className="mt-2 text-sm text-bone-dim">{t.legal.privacyUpdated}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl space-y-14 px-6 py-20 md:py-24">
          {t.legal.privacySections.map((section, i) => (
            <Reveal key={section.title} delay={Math.min(i, 4) * 0.05}>
              <h2 className="font-display text-2xl text-bone">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-bone-dim"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
