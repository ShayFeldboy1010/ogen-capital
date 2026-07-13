"use client";

import { CaretDown } from "@phosphor-icons/react";

/**
 * FAQ accordion built on native <details> for accessibility;
 * no state management needed and it works without JavaScript.
 */
export function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="faq-item group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-start [&::-webkit-details-marker]:hidden">
            <span className="font-display text-lg text-bone transition-colors group-hover:text-gold md:text-xl">
              {item.q}
            </span>
            <CaretDown
              size={18}
              className="shrink-0 text-gold transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <p className="max-w-[70ch] pb-7 text-base leading-relaxed text-bone-dim">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
