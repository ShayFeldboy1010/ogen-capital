import type { Metadata } from "next";
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
  return { title: getDictionary(locale).results.title };
}

export default async function ResultsPage({
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
              {t.results.title}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-bone-dim">
              {t.results.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case stories: stacked editorial entries, situation / work / outcome */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl space-y-20 px-6 py-24 md:space-y-24 md:py-28">
          {t.results.cases.map((c) => (
            <Reveal key={c.title}>
              <article className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
                <h2 className="font-display text-2xl leading-snug text-bone md:text-3xl">
                  {c.title}
                </h2>
                <div className="space-y-8">
                  {/* TODO(client): real case content, see dictionary */}
                  <div>
                    <p className="text-sm font-semibold text-gold">
                      {t.results.caseLabels.situation}
                    </p>
                    <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-bone-dim">
                      {c.situation}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gold">
                      {t.results.caseLabels.work}
                    </p>
                    <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-bone-dim">
                      {c.work}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gold">
                      {t.results.caseLabels.outcome}
                    </p>
                    <p className="mt-2 max-w-[62ch] text-base leading-relaxed text-bone-dim">
                      {c.outcome}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          <Reveal>
            <p className="border-t border-line pt-8 text-xs leading-relaxed text-bone-dim/80">
              {t.results.note}
            </p>
          </Reveal>
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
