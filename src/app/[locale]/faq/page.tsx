import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/GoldRule";
import { CtaBand } from "@/components/CtaBand";
import { FaqAccordion } from "@/components/FaqAccordion";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: getDictionary(locale).faq.title };
}

export default async function FaqPage({
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
          <Reveal>
            <GoldRule className="w-16" />
            <h1 className="mt-7 font-display text-4xl leading-tight text-bone md:text-5xl">
              {t.faq.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 pb-24 md:pb-28">
          <Reveal>
            <FaqAccordion items={t.faq.items} />
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
