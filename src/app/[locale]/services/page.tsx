import type { Metadata } from "next";
import { Anchor, Scales, Handshake, TreeStructure } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/GoldRule";
import { CtaBand } from "@/components/CtaBand";
import { LeadBand } from "@/components/LeadBand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: getDictionary(locale).services.title };
}

const icons = [Anchor, Scales, Handshake, TreeStructure];

export default async function ServicesPage({
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
              {t.services.title}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-bone-dim">
              {t.services.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services: two-column detail grid with tinted surfaces */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            {t.services.items.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal
                  key={item.title}
                  delay={(i % 2) * 0.08}
                  className="rounded-[2rem] border border-line bg-ink-2/60 p-8 md:p-10"
                >
                  <Icon size={30} className="text-gold" weight="thin" />
                  <h2 className="mt-6 font-display text-2xl text-bone">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-bone-dim">
                    {item.body}
                  </p>
                  <ul className="mt-7 space-y-3 border-t border-line pt-7">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-bone">
                        <span
                          aria-hidden
                          className="mt-3 block h-px w-4 shrink-0 bg-gold"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-12">
            <p className="max-w-[80ch] text-xs leading-relaxed text-bone-dim/80">
              {t.services.note}
            </p>
          </Reveal>
        </div>
      </section>

      <LeadBand t={t} />

      <CtaBand
        title={t.home.closing.title}
        body={t.home.closing.body}
        ctaLabel={t.cta.whatsapp}
        prefill={t.cta.whatsappPrefill}
      />
    </>
  );
}
