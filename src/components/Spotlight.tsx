"use client";

import { useRef } from "react";

/*
 * Section wrapper that follows the cursor with a soft gold glow.
 * The overlay itself only renders for fine pointers with motion allowed
 * (see .spotlight-overlay in globals.css), so touch devices pay nothing.
 */
export function Spotlight({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMouseMove}
      className={`relative ${className ?? ""}`}
    >
      <div aria-hidden className="spotlight-overlay" />
      {children}
    </section>
  );
}
