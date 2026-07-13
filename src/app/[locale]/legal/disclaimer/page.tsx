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
  return { title: getDictionary(locale).legal.disclaimerTitle };
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);

  return (
    <section>
      <div className="mx-auto max-w-4xl px-6 pb-24 pt-16 md:pb-28 md:pt-24">
        <Reveal>
          <GoldRule className="w-16" />
            <h1 className="mt-7 font-display text-4xl leading-tight text-bone md:text-5xl">
            {t.legal.disclaimerTitle}
          </h1>
          <p className="mt-7 text-lg leading-relaxed text-bone-dim">
            {t.legal.disclaimerIntro}
          </p>
        </Reveal>
        <div className="mt-16 space-y-12">
          {t.legal.disclaimerSections.map((section) => (
            <Reveal key={section.title} className="border-t border-line pt-10">
              <h2 className="font-display text-2xl text-bone">
                {section.title}
              </h2>
              <p className="mt-4 max-w-[70ch] text-base leading-relaxed text-bone-dim">
                {section.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
