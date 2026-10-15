import type { Locale } from "@/types";

export function isLocale(value: string): value is Locale {
  return value === "ar" || value === "en";
}

export function oppositeLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}
