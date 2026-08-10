/*
 * Rolling band of trust signals between hero and stats.
 * Pure CSS marquee (see .marquee-track in globals.css): the list is
 * rendered twice, so a -50% translate loops seamlessly. RTL reverses.
 */
export function TrustTicker({ items }: { items: readonly string[] }) {
  return (
    <div className="relative overflow-hidden border-y border-line/60 bg-ink-2/60 py-4">
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1}
            className="flex items-center"
          >
            {items.map((item) => (
              <span
                key={item}
                className="flex items-center whitespace-nowrap text-sm text-bone-dim"
              >
                {/* A quiet dot, not a repeating diamond — the rotated squares
                    read as a triangle pattern across the band (spec section 7). */}
                <span className="mx-6 inline-block h-1 w-1 rounded-full bg-gold/50" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
      {/* Edge fade so items dissolve instead of clipping */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 start-0 w-20 bg-gradient-to-r from-ink to-transparent rtl:bg-gradient-to-l"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 end-0 w-20 bg-gradient-to-l from-ink to-transparent rtl:bg-gradient-to-r"
      />
    </div>
  );
}
