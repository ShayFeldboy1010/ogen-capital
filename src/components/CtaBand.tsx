import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/GoldRule";
import { Magnetic } from "@/components/Magnetic";
import { whatsappHref } from "@/lib/site";

/**
 * Closing conversion band, reused at the bottom of content pages.
 * One goal on the whole site: start a WhatsApp conversation.
 */
export function CtaBand({
  title,
  body,
  ctaLabel,
  prefill,
}: {
  title: string;
  body: string;
  ctaLabel: string;
  prefill: string;
}) {
  return (
    <section className="relative overflow-hidden rounded-t-[3rem] border-t border-gold-deep/40 bg-ink-3">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_50%_100%,rgba(201,164,92,0.13),transparent_65%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <GoldRule className="w-16" />
          <h2 className="mt-7 font-display text-3xl leading-tight text-bone md:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-bone-dim">{body}</p>
          <Magnetic className="mt-9">
            <a
              href={whatsappHref(prefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright"
            >
              {ctaLabel}
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
