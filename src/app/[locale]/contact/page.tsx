import type { Metadata } from "next";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/GoldRule";
import { ContactForm } from "@/components/ContactForm";
import { NewsletterForm } from "@/components/NewsletterForm";
import { whatsappHref } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return { title: getDictionary(locale).contact.title };
}

export default async function ContactPage({
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
              {t.contact.title}
            </h1>
            <p className="mt-7 text-lg leading-relaxed text-bone-dim">
              {t.contact.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-[2fr_3fr] md:gap-20 md:py-24">
          <div className="space-y-12">
            <Reveal className="rounded-[2rem] border border-gold-deep/40 bg-ink-3 p-8">
              <WhatsappLogo size={32} weight="thin" className="text-gold" />
              <h2 className="mt-5 font-display text-2xl text-bone">
                {t.contact.directTitle}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-bone-dim">
                {t.contact.directBody}
              </p>
              <a
                href={whatsappHref(t.cta.whatsappPrefill)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-7 inline-block rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright active:translate-y-px"
              >
                {t.cta.whatsapp}
              </a>
            </Reveal>

            <Reveal>
              <h2 className="font-display text-xl text-bone">
                {t.contact.newsletter.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-bone-dim">
                {t.contact.newsletter.body}
              </p>
              <NewsletterForm t={t} className="mt-5" />
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <h2 className="font-display text-2xl text-bone">
              {t.contact.form.title}
            </h2>
            <div className="mt-8">
              <ContactForm t={t} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
