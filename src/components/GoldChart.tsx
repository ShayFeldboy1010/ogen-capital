"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT } from "@/lib/motion";

/**
 * Ascending stock-style chart line for the hero: a jagged, realistic price
 * path that draws itself on scroll, over faint gridlines, with an area fill
 * and an upward arrowhead where it lands — the growth cue asked for in spec
 * section 7. Pure ornament: no axis values, no data claims.
 *
 * The line SVG is stretched to the section width (preserveAspectRatio="none"),
 * which would skew any solid shape, so the arrowhead is a separate, correctly
 * proportioned SVG pinned to the point where the line terminates.
 */
const LINE =
  "M0 150 L20 145 L40 151 L60 139 L80 144 L100 131 L120 138 L140 127 L160 134 L180 119 L200 127 L220 116 L240 125 L260 108 L280 117 L300 103 L320 113 L340 96 L360 107 L380 90 L400 100 L420 86 L440 96 L460 78 L480 89 L500 72 L520 83 L540 64 L560 75 L580 58 L600 69 L620 50 L640 61 L660 44 L680 55 L700 36 L720 47 L740 28 L756 22";

const GRID = [40, 80, 120];

/** Where LINE ends, as a share of the viewBox — drives the arrowhead anchor. */
const END_X = 756 / 800;
const END_Y = 22 / 160;

export function GoldChart({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      <div className="relative h-full w-full">
        <svg
          viewBox="0 0 800 160"
          fill="none"
          aria-hidden
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="goldStroke"
              x1="0"
              y1="0"
              x2="800"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#9c7f45" stopOpacity="0" />
              <stop offset="0.3" stopColor="#c9a45c" />
              <stop offset="1" stopColor="#f0d99c" />
            </linearGradient>
            <linearGradient
              id="goldFill"
              x1="0"
              y1="0"
              x2="0"
              y2="160"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#c9a45c" stopOpacity="0.26" />
              <stop offset="1" stopColor="#c9a45c" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Faint gridlines */}
          {GRID.map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="800"
              y2={y}
              stroke="rgba(201,164,92,0.12)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {/* Area under the line */}
          <motion.path
            d={`${LINE} L800 160 L0 160 Z`}
            fill="url(#goldFill)"
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, delay: 0.9 }}
          />

          {/* The price line */}
          <motion.path
            d={LINE}
            stroke="url(#goldStroke)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 2.2, delay: 0.3, ease: EASE_OUT }}
          />
        </svg>

        {/* Growth arrow: metallic gold, pointing up, settling in once the line
            has finished drawing. Kept out of the stretched SVG so it stays a
            true arrow at every viewport width. */}
        <motion.svg
          viewBox="0 0 40 44"
          aria-hidden
          className="absolute h-12 w-11 md:h-16 md:w-14"
          style={{
            left: `${END_X * 100}%`,
            top: `${END_Y * 100}%`,
            translate: "-50% -62%",
          }}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 2.1, ease: EASE_OUT }}
        >
          <defs>
            <linearGradient id="goldArrow" x1="0" y1="44" x2="40" y2="0">
              <stop offset="0" stopColor="#8f713a" />
              <stop offset="0.42" stopColor="#c9a45c" />
              <stop offset="0.62" stopColor="#f6ecc9" />
              <stop offset="1" stopColor="#c9a45c" />
            </linearGradient>
          </defs>
          <path d="M20 2 L37 22 L27.5 22 L27.5 41 L12.5 41 L12.5 22 L3 22 Z" fill="url(#goldArrow)" />
        </motion.svg>
      </div>
    </div>
  );
}
