"use client";

import { useRef } from "react";
import type { Dictionary } from "@/dictionaries";
import {
  useScrollPhase,
  phaseOpacity,
  usePrefersReducedMotion,
} from "@/lib/useScrollPhase";

/*
 * Scroll-pinned process story: the section stays fixed for ~3 screens while the
 * gold line draws itself and the three steps crossfade in turn — exactly one
 * step visible at a time (strictly non-overlapping). Under reduced motion it
 * renders as a plain three-column grid.
 *
 * Phasing is driven by hand in a single rAF loop (see useScrollPhase), not
 * motion/react, so panes never desync and stack in extension-laden browsers.
 */
export function ScrollStory({ t }: { t: Dictionary }) {
  const reduce = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const paneRefs = useRef<Array<HTMLDivElement | null>>([]);
  const markerRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const barRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const steps = t.home.process.steps;
  const total = steps.length;

  useScrollPhase(
    sectionRef,
    (p) => {
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;

      // Draw the journey line between 6% and 92% of the scroll.
      if (pathRef.current) {
        const drawn = Math.min(1, Math.max(0, (p - 0.06) / (0.92 - 0.06)));
        pathRef.current.style.strokeDashoffset = String(1 - drawn);
      }

      const span = 1 / total;
      for (let i = 0; i < total; i++) {
        const el = paneRefs.current[i];
        if (el) {
          const o = phaseOpacity(p, i, total);
          el.style.opacity = String(o);
          el.style.transform = `translateY(${(1 - o) * (i === 0 ? -10 : 12)}px)`;
        }
        const m = markerRefs.current[i];
        if (m) {
          const on = p >= i * span && p < (i + 1) * span;
          m.style.opacity = on ? "1" : "0.28";
          m.style.transform = `scaleX(${on ? 2.4 : 1})`;
        }
      }
    },
    !reduce,
  );

  if (reduce) {
    return (
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-28">
        <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
          {t.home.process.title}
        </h2>
        <div className="mt-16 grid gap-14 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <div key={step.title}>
              <p
                aria-hidden
                className="font-display text-7xl leading-none text-gold-bright"
              >
                {i + 1}
              </p>
              <h3 className="mt-6 font-display text-2xl text-bone">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-bone-dim">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-[100dvh] flex-col justify-center overflow-hidden">
        {/* Scroll progress hairline */}
        <div
          ref={barRef}
          aria-hidden
          className="absolute top-0 h-px w-full origin-left bg-gradient-to-r from-gold-deep via-gold to-gold-bright rtl:origin-right"
          style={{ transform: "scaleX(0)" }}
        />

        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="text-center font-display text-3xl text-bone md:text-4xl">
            {t.home.process.title}
          </h2>

          {/* Crossfading step panes — one at a time */}
          <div className="relative mx-auto mt-10 h-64 max-w-2xl md:mt-14 md:h-56">
            {steps.map((step, i) => (
              <div
                key={step.title}
                ref={(el) => {
                  paneRefs.current[i] = el;
                }}
                className="absolute inset-0 flex flex-col items-center text-center"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  willChange: "opacity, transform",
                }}
              >
                <p
                  aria-hidden
                  className="font-display text-6xl leading-none text-gold-bright md:text-7xl"
                >
                  {i + 1}
                </p>
                <h3 className="mt-5 font-display text-2xl text-bone md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[46ch] text-base leading-relaxed text-bone-dim">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* Step markers */}
          <div className="mx-auto mt-2 flex max-w-2xl items-center justify-center gap-10">
            {steps.map((step, i) => (
              <span
                key={step.title}
                ref={(el) => {
                  markerRefs.current[i] = el;
                }}
                aria-hidden
                className="inline-block h-0.5 w-4 rounded-full bg-gold transition-[opacity,transform] duration-300"
                style={{ opacity: i === 0 ? 1 : 0.28 }}
              />
            ))}
          </div>
        </div>

        {/* The line that draws with the journey */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 md:h-48">
          <svg
            viewBox="0 0 800 160"
            fill="none"
            aria-hidden
            preserveAspectRatio="none"
            className="h-full w-full opacity-80"
          >
            <defs>
              <linearGradient
                id="storyStroke"
                x1="0"
                y1="0"
                x2="800"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#9c7f45" stopOpacity="0.4" />
                <stop offset="0.6" stopColor="#c9a45c" />
                <stop offset="1" stopColor="#3fe0b0" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              d="M0 150 C 90 140, 140 120, 210 118 S 330 96, 400 88 S 520 74, 590 58 S 720 34, 800 18"
              stroke="url(#storyStroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
              pathLength={1}
              style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
