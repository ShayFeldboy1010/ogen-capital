import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/dictionaries";
import { Reveal } from "@/components/Reveal";
import { GoldRule } from "@/components/GoldRule";
import { GoldChart } from "@/components/GoldChart";
import { CountUp } from "@/components/CountUp";
import { LeadBand } from "@/components/LeadBand";
import { Parallax } from "@/components/Parallax";
import { SplitHeadline } from "@/components/SplitHeadline";
import { TrustTicker } from "@/components/TrustTicker";
import { Magnetic } from "@/components/Magnetic";
import { ScrollStory } from "@/components/ScrollStory";
import { ScrollShowcase } from "@/components/ScrollShowcase";
import { whatsappHref } from "@/lib/site";
import { hasPublicAsset } from "@/lib/assets";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);
  const base = `/${locale}`;

  const hasVideo = hasPublicAsset("showcase.mp4");

  return (
    <>
      {/* Hero: cinematic anchor photograph, headline over the calm water.
          The anchor is scaled up around itself (spec section 7 asks for a
          larger anchor element) without pushing it under the headline. */}
      <section className="relative flex min-h-[92dvh] items-center overflow-hidden bg-ink">
        <Image
          src="/hero-anchor.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden origin-[28%_58%] scale-[1.22] object-cover md:block"
        />
        <Image
          src="/hero-anchor-mobile.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="origin-[50%_35%] scale-110 object-cover md:hidden"
        />
        {/* Contrast veils: darken bottom, and the text (start) side */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,24,15,0.5),rgba(6,24,15,0.15)_38%,rgba(6,24,15,0.92))]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/30 to-transparent rtl:bg-gradient-to-l"
        />
        <GoldChart className="pointer-events-none absolute inset-x-0 bottom-0 h-52 w-full opacity-85 md:h-72" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <span
              aria-hidden
              className="enter-rule block h-px w-16 bg-gradient-to-r from-gold-bright via-gold to-gold-deep rtl:bg-gradient-to-l"
            />
            <SplitHeadline
              a={t.home.hero.titleA}
              gold={t.home.hero.titleGold}
              b={t.home.hero.titleB}
              className="mt-6 font-display font-extrabold text-[clamp(3.5rem,10vw,7rem)] leading-[1.03] text-bone"
            />
            <div className="enter" style={{ animationDelay: "0.4s" }}>
              <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-bone/85 md:text-xl">
                {t.home.hero.subtitle}
              </p>
            </div>
            <div
              className="enter mt-10 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.55s" }}
            >
              <Magnetic>
                <a
                  href={whatsappHref(t.cta.whatsappPrefill)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-block rounded-full bg-gold px-9 py-4 text-sm font-semibold text-ink transition-colors hover:bg-gold-bright"
                >
                  {t.cta.whatsapp}
                </a>
              </Magnetic>
              <Link
                href={`${base}/about`}
                className="rounded-full border border-gold/60 px-9 py-4 text-sm font-semibold text-gold-bright backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold/10 active:translate-y-px"
              >
                {t.home.hero.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rolling trust signals */}
      <TrustTicker items={t.ticker} />

      {/* Stats: full-bleed dark band with a drifting gold aurora + rain behind
          the counters. Flows straight from the ticker — no rounded card. */}
      <section className="relative">
        <div className="relative overflow-hidden bg-ink-3">
          <div aria-hidden className="spotlight" />
          <div aria-hidden className="rain" />
          <div aria-hidden className="grain absolute inset-0" />
          <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-3 md:gap-0 md:py-28">
            {t.home.stats.map((stat, i) => (
              <Reveal
                key={stat.label}
                delay={i * 0.12}
                className="text-center md:border-s md:border-line md:px-8 md:first:border-s-0"
              >
                <CountUp
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-display text-5xl tabular-nums text-gold md:text-6xl"
                />
                <p className="mt-4 text-base text-bone-dim">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Principles: LIGHT — full-bleed cream section that meets the dark stats
          band with one clean edge (no card-on-card). Frosted parchment cards
          with a slow gold blob adrift behind each. */}
      <section className="light-vignette relative overflow-hidden bg-ivory text-green-ink">
        <div aria-hidden className="spotlight spotlight--ivory" />
        <div aria-hidden className="rain rain--ivory" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
          <Reveal>
            <GoldRule className="w-12" />
            <h2 className="mt-6 font-display text-display-2">
              {t.home.principles.title}
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {t.home.principles.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <article className="p-card h-full p-8">
                  <span
                    aria-hidden
                    className="p-card__blob"
                    style={{ animationDelay: `${i * -3}s` }}
                  />
                  <div className="p-card__body">
                    <GoldRule className="w-8" delay={0.2 + i * 0.1} />
                    <h3 className="mt-5 font-display text-xl text-green-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-green-ink-dim">
                      {item.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* "במה אנחנו מלווים": scroll-scrub video that cycles each service (dark) */}
      <ScrollShowcase
        eyebrow={t.home.services.title}
        items={t.home.services.items}
        hasVideo={hasVideo}
      />

      {/* Approach: LIGHT — editorial column beside the anchor-rope detail */}
      <section className="light-vignette relative overflow-hidden bg-ivory text-green-ink">
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
          <div className="grid gap-12 md:grid-cols-[3fr_2fr] md:items-center md:gap-20">
            <Reveal className="max-w-[68ch]">
              <GoldRule className="w-12" />
              <h2 className="mt-6 font-display text-display-2">
                {t.home.approach.title}
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-green-ink-dim">
                {t.home.approach.p1}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-green-ink-dim">
                {t.home.approach.p2}
              </p>
            </Reveal>
            <Parallax distance={24} className="hidden md:block">
              <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border border-line-ink">
                <Image
                  src="/anchor-rope.png"
                  alt=""
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </Parallax>
          </div>
        </div>
      </section>

      {/* Process: scroll-pinned story (dark) */}
      <ScrollStory t={t} />

      {/* Closing conversion moment: lead-capture band at the foot (dark) */}
      <LeadBand t={t} />
    </>
  );
}
