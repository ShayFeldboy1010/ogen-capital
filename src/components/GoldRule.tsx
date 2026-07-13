"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";

/**
 * A gold hairline that draws itself in as it enters the viewport. Fades as
 * well as scales so it stays visible if the width transform is interrupted,
 * and reveals on mount when already on screen (extension-safe). Static under
 * reduced motion.
 */
export function GoldRule({
  className = "w-12",
  delay = 0,
}: {
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [onScreenAtMount, setOnScreenAtMount] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el && el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setOnScreenAtMount(true);
    }
  }, []);

  const show = inView || onScreenAtMount;

  return (
    <motion.span
      ref={ref}
      aria-hidden
      className={`block h-px origin-[0%] bg-gradient-to-r from-gold-bright via-gold to-gold-deep rtl:origin-[100%] rtl:bg-gradient-to-l ${className}`}
      initial={reduce ? false : { scaleX: 0, opacity: 0 }}
      animate={
        reduce ? undefined : { scaleX: show ? 1 : 0, opacity: show ? 1 : 0 }
      }
      transition={{ duration: 0.9, delay, ease: EASE_OUT }}
    />
  );
}
