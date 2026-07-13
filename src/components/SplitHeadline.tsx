import { Fragment } from "react";

/*
 * Hero headline with a word-by-word staggered rise. Splits on spaces (never
 * characters) so Hebrew ligatures and nikud stay intact; the gilded segment
 * keeps its metallic gradient per word.
 *
 * The entrance is a pure-CSS animation (see `.enter` in globals.css) so it is
 * never dependent on React hydration — the headline is always visible, even
 * when a browser extension disrupts hydration of client components.
 */
export function SplitHeadline({
  a,
  gold,
  b,
  className,
}: {
  a: string;
  gold: string;
  b: string;
  className?: string;
}) {
  const words = [
    ...tokenize(a, false),
    ...tokenize(gold, true),
    ...tokenize(b, false),
  ];

  return (
    <h1 className={className}>
      {words.map((word, i) => (
        <Fragment key={`${word.text}-${i}`}>
          <span
            className={`enter inline-block ${word.gilded ? "text-gilded" : ""}`}
            style={{ animationDelay: `${0.05 + i * 0.06}s` }}
          >
            {word.text}
          </span>{" "}
        </Fragment>
      ))}
    </h1>
  );
}

function tokenize(segment: string, gilded: boolean) {
  return segment
    .split(" ")
    .filter((w) => w.length > 0)
    .map((text) => ({ text, gilded }));
}
