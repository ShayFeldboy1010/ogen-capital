/**
 * Shared motion tokens. The signature ease-out curve lives here for JS
 * (motion/react `ease` props) and mirrors the `--ease-out` CSS custom property
 * defined in `globals.css` — keep the two in sync if either is ever retuned.
 */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
