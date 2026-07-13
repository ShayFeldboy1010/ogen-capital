"use client";

import { useEffect, useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { EASE_OUT } from "@/lib/motion";
import type { Dictionary } from "@/dictionaries";
import { whatsappHref } from "@/lib/site";

/*
 * Mobile-only sticky conversion bar. Slides up after the visitor scrolls
 * past the hero, so the hero's own CTAs get first say. Replaces the
 * floating bubble on small screens (the Fab is desktop-only).
 */
export function StickyBar({ t }: { t: Dictionary }) {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduce ? false : { y: 80 }}
          animate={{ y: 0 }}
          exit={reduce ? undefined : { y: 80 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-gold-deep/40 bg-ink-2/95 backdrop-blur-md md:hidden"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
            <p className="min-w-0 truncate text-sm text-bone-dim">
              {t.cta.stickyLabel}
            </p>
            <a
              href={whatsappHref(t.cta.whatsappPrefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex shrink-0 items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink active:translate-y-px"
            >
              <WhatsappLogo size={18} weight="fill" />
              {t.cta.stickyButton}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
