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
  return { title: getDictionary(locale).legal.rightsTitle };
}

export default async function InvestorRightsPage({
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
              {t.legal.rightsTitle}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-bone-dim">
              {t.legal.rightsIntro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <div className="grid gap-x-16 gap-y-14 md:grid-cols-2">
            {t.legal.rights.map((right, i) => (
              <Reveal key={right.title} delay={(i % 2) * 0.08}>
                <GoldRule className="w-8" />
                <h2 className="mt-5 font-display text-2xl text-bone">
                  {right.title}
                </h2>
                <p className="mt-3 max-w-[58ch] text-base leading-relaxed text-bone-dim">
                  {right.body}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16">
            <p className="border-t border-line pt-8 text-xs leading-relaxed text-bone-dim/80">
              {t.legal.rightsNote}
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
