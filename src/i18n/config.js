export const locales = ["en", "tr", "ar", "prs"];
export const defaultLocale = "en";
export const rtlLocales = ["ar", "prs"];

export const localeNames = {
  en: "English",
  tr: "Türkçe",
  ar: "العربية",
  prs: "دری",
};

export function isRtl(locale) {
  return rtlLocales.includes(locale);
}
