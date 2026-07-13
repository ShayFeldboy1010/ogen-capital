import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Dictionary } from "@/dictionaries";
import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/GoldRule";

/**
 * Testimonials — bento grid (one featured card + three) on a light ground.
 * Adapted from a 21st.dev block (tailark/testimonials) but rebuilt on our
 * tokens, RTL, and as a pure server component (no motion, no hydration).
 *
 * Content is intentionally placeholder: a real family office must not show
 * fabricated social proof. Swap `t.home.testimonials.items` for approved
 * client quotes when they exist.
 */
export function Testimonials({ t, base }: { t: Dictionary; base: string }) {
  const s = t.home.testimonials;

  return (
    <section className="bg-parchment text-green-ink">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <GoldRule className="mx-auto w-12" />
          <h2 className="mt-6 font-display text-3xl md:text-4xl">{s.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-green-ink-dim">
            {s.subtitle}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          {s.items.map((item, i) => (
            <Reveal
              key={`${item.name}-${i}`}
              delay={i * 0.08}
              className={
                i === 0
                  ? "sm:col-span-2 lg:row-span-2"
                  : i === 1
                    ? "md:col-span-2"
                    : ""
              }
            >
              <TestimonialCard item={item} featured={i === 0} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href={`${base}/trust`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-ink transition-colors hover:text-gold-deep"
          >
            {t.home.quote.linkLabel}
            <ArrowUpRight size={16} className="rtl:-scale-x-100" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

type Item = { quote: string; name: string; role: string };

function TestimonialCard({
  item,
  featured,
}: {
  item: Item;
  featured?: boolean;
}) {
  return (
    <figure
      className={`flex h-full flex-col justify-between gap-6 rounded-[1.75rem] border border-line-ink bg-ivory p-6 shadow-[0_1px_2px_rgba(13,42,28,0.04)] md:p-7 ${featured ? "md:p-9" : ""}`}
    >
      <blockquote
        className={`leading-relaxed text-green-ink ${featured ? "font-display text-xl md:text-2xl" : "text-base"}`}
      >
        <span
          aria-hidden
          className="mb-1 block font-display text-4xl leading-none text-gold-ink"
        >
          {"”"}
        </span>
        {item.quote}
      </blockquote>

      <figcaption className="flex items-center gap-3">
        <span
          aria-hidden
          className="grid size-11 shrink-0 place-items-center rounded-full bg-gold/15 font-display text-sm text-gold-ink ring-1 ring-gold/25"
        >
          {initials(item.name)}
        </span>
        <span className="block">
          <cite className="block text-sm font-semibold text-green-ink not-italic">
            {item.name}
          </cite>
          <span className="block text-sm text-green-ink-dim">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/** First letters of the first two words, for a photo-free avatar. */
function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => [...w][0])
    .join("");
}
