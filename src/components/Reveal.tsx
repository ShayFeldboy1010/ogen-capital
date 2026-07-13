"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";

/**
 * Quiet scroll reveal used across sections. Fades and lifts content once as it
 * enters the viewport. Uses `useInView` for scroll triggering, plus a mount
 * bounding-box check so anything already on screen at load reveals reliably
 * even when a browser extension disrupts hydration / IntersectionObserver.
 */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [onScreenAtMount, setOnScreenAtMount] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setOnScreenAtMount(true);
    }
  }, []);

  const show = inView || onScreenAtMount;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={reduce ? undefined : { opacity: show ? 1 : 0, y: show ? 0 : y }}
      transition={{ duration: 0.8, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
