"use client";

import { useEffect, useRef, useState } from "react";
import {
  useScrollPhase,
  phaseOpacity,
  usePrefersReducedMotion,
} from "@/lib/useScrollPhase";

type Item = { title: string; body: string };

/*
 * Cinematic scroll-scrub centerpiece — "במה אנחנו מלווים".
 *
 * A tall section pins a full-viewport stage; scrolling through it scrubs the
 * anchor video frame-by-frame while each service phases in as ONE block —
 * title + its own description together. Exactly one card is visible at a time:
 * a strictly non-overlapping crossfade at a shared centre, so titles never
 * stack or double.
 *
 * All phasing is driven by hand in a single rAF loop (see useScrollPhase) —
 * no motion/react — so it stays correct even in browsers whose extensions
 * disrupt motion's style projection. Reduced motion / no video falls back to a
 * still poster with the services laid out plainly.
 */
export function ScrollShowcase({
  eyebrow,
  items,
  hasVideo,
}: {
  eyebrow: string;
  items: Item[];
  hasVideo: boolean;
}) {
  const reduce = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const barRef = useRef<HTMLDivElement>(null);
  const videoTime = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  const total = items.length;
  const active = !reduce && hasVideo;

  // Choose the source that matches the viewport orientation.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Keep the video paused so it can be scrubbed by hand.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || !active) return;
    const prime = () => {
      try {
        v.pause();
      } catch {}
    };
    if (v.readyState >= 1) prime();
    v.addEventListener("loadedmetadata", prime);
    return () => v.removeEventListener("loadedmetadata", prime);
  }, [active, isMobile]);

  useScrollPhase(
    sectionRef,
    (p) => {
      // 1) Scrub the video, eased toward the scroll target for smoothness.
      const v = videoRef.current;
      if (v) {
        const d = v.duration || 8;
        const target = p * d;
        videoTime.current += (target - videoTime.current) * 0.15;
        if (Math.abs(target - videoTime.current) < 0.001) videoTime.current = target;
        const t = Math.min(Math.max(videoTime.current, 0), d - 0.001);
        if (Number.isFinite(t) && Math.abs(v.currentTime - t) > 0.003) {
          try {
            v.currentTime = t;
          } catch {}
        }
      }

      // 2) Progress hairline.
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;

      // 3) Phase the service cards — exactly one visible at a time.
      const span = 1 / total;
      for (let i = 0; i < total; i++) {
        const el = cardRefs.current[i];
        if (el) {
          const o = phaseOpacity(p, i, total);
          el.style.opacity = String(o);
          el.style.transform = `scale(${0.985 + 0.015 * o})`;
        }
        const dot = dotRefs.current[i];
        if (dot) {
          const on = p >= i * span && p < (i + 1) * span;
          dot.style.opacity = on ? "1" : "0.32";
          dot.style.width = on ? "1.4rem" : "0.375rem";
        }
      }
    },
    active,
  );

  const src = isMobile ? "/showcase-mobile.mp4" : "/showcase.mp4";

  // Static fallback: poster + services stacked, no pinning.
  if (!active) {
    return (
      <section className="grain relative overflow-hidden rounded-t-[3rem] border-t border-gold-deep/40 bg-ink">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url(/showcase-poster.jpg)" }}
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,24,15,0.7),rgba(6,24,15,0.55),rgba(6,24,15,0.9))]"
        />
        <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
          <p className="text-xs font-semibold tracking-[0.28em] text-gold uppercase md:text-sm">
            {eyebrow}
          </p>
          <div className="mt-12 space-y-12">
            {items.map((it) => (
              <div key={it.title}>
                <h3 className="font-display text-4xl text-gold-bright md:text-5xl">
                  {it.title}
                </h3>
                <p className="mx-auto mt-4 max-w-[42ch] text-base leading-relaxed text-bone/85 md:text-lg">
                  {it.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${total * 100 + 20}vh` }}
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        {/* Scrubbed video */}
        <video
          ref={videoRef}
          src={src}
          poster="/showcase-poster.jpg"
          muted
          playsInline
          preload="auto"
          aria-hidden
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Grain + contrast veil */}
        <div className="grain pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,transparent,rgba(6,24,15,0.55)_80%),linear-gradient(to_bottom,rgba(6,24,15,0.6),transparent_30%,transparent_60%,rgba(6,24,15,0.85))]"
        />

        {/* Progress hairline */}
        <div
          ref={barRef}
          aria-hidden
          className="absolute top-0 left-0 h-px w-full origin-left bg-gradient-to-r from-gold-deep via-gold to-gold-bright rtl:origin-right"
          style={{ transform: "scaleX(0)" }}
        />

        {/* Phasing service cards */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          {/* Dark plate so the words read over the bright anchor */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_54%_52%_at_50%_50%,rgba(3,12,8,0.85),transparent_74%)]"
          />

          {/* Section label — persistent over every phase */}
          <p className="relative z-10 mb-10 text-xs font-semibold tracking-[0.3em] text-gold uppercase md:text-sm">
            {eyebrow}
          </p>

          {/* Stage: each card is absolutely centred; only one shows at a time */}
          <div className="relative z-10 min-h-[13rem] w-full max-w-2xl md:min-h-[15rem]">
            {items.map((item, i) => (
              <div
                key={item.title}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  willChange: "opacity, transform",
                }}
              >
                <h3 className="font-display text-4xl leading-[1.06] text-[#f2dfa6] [text-shadow:0_2px_30px_rgba(0,0,0,0.6)] md:text-6xl">
                  {item.title}
                </h3>
                <span aria-hidden className="mt-6 h-px w-14 bg-gold/70" />
                <p className="mt-6 max-w-[40ch] text-base leading-relaxed text-bone [text-shadow:0_1px_16px_rgba(0,0,0,0.55)] md:text-lg">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          {/* Which-of-three indicator */}
          <div className="relative z-10 mt-12 flex items-center gap-2.5">
            {items.map((item, i) => (
              <span
                key={item.title}
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                aria-hidden
                className="h-1.5 rounded-full bg-gold transition-[width,opacity] duration-300"
                style={{
                  width: i === 0 ? "1.4rem" : "0.375rem",
                  opacity: i === 0 ? 1 : 0.32,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
