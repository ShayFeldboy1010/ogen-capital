"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Drives a scroll-pinned section WITHOUT motion/react.
 *
 * A single requestAnimationFrame loop reads the section's position and reports
 * progress 0..1 across its pinned scroll, calling `onFrame(p)` each frame so the
 * caller sets DOM styles (opacity, transform, stroke) directly on refs.
 *
 * Why not motion? In browsers with certain extensions that mutate the DOM,
 * motion's style projection silently desyncs — an element's `opacity` stops
 * updating while its `transform` keeps going, leaving several "phased" panes
 * visible at once. Setting styles by hand in one rAF loop is immune to that,
 * and it's the same approach the video scrub already relies on.
 */
export function useScrollPhase(
  sectionRef: React.RefObject<HTMLElement | null>,
  onFrame: (p: number) => void,
  enabled = true,
) {
  const cb = useRef(onFrame);
  cb.current = onFrame;

  useEffect(() => {
    if (!enabled) return;
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    let running = false;
    const tick = () => {
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      let p = scrollable > 0 ? -rect.top / scrollable : 0;
      p = p < 0 ? 0 : p > 1 ? 1 : p;
      cb.current(p);
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(raf);
    };

    // Only spin the rAF loop while the pinned section is near/in the viewport,
    // so it isn't reading layout every frame for a section nobody is looking at.
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "150px 0px" },
    );
    io.observe(section);

    return () => {
      io.disconnect();
      stop();
    };
  }, [sectionRef, enabled]);
}

/**
 * Opacity for item `i` of `total` at progress `p`, as a strictly
 * NON-overlapping crossfade: each item fades fully out before the next fades
 * in, so two are never visible at the same time. The first item is shown from
 * the very start; the last stays shown to the end.
 */
export function phaseOpacity(
  p: number,
  i: number,
  total: number,
  fadeRatio = 0.2,
) {
  const span = 1 / total;
  const start = i * span;
  const end = start + span;
  const fade = span * fadeRatio;
  const isFirst = i === 0;
  const isLast = i === total - 1;

  if (p < start) return isFirst ? 1 : 0;
  if (p > end) return isLast ? 1 : 0;

  const fadeIn = isFirst ? 1 : Math.min(1, (p - start) / fade);
  const fadeOut = isLast ? 1 : Math.min(1, (end - p) / fade);
  return Math.max(0, Math.min(fadeIn, fadeOut));
}

/** True when the user prefers reduced motion. SSR-safe (false until mounted). */
export function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduce(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduce;
}
