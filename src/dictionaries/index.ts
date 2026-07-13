import type { Locale } from "@/lib/i18n";
import { he, type Dictionary } from "./he";
import { en } from "./en";

const dictionaries: Record<Locale, Dictionary> = { he, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
