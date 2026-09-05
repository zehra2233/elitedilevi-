"use client";
import { useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { locales, localeNames } from "../../i18n/config";

export default function LanguageSwitcher({ variant = "desktop" }) {
  const locale = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function selectLocale(newLocale) {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
    setOpen(false);
    router.refresh();
  }

  if (variant === "mobile") {
    return (
      <div className="flex flex-wrap gap-2 py-2">
        {locales.map((l) => (
          <button
            key={l}
            onClick={() => selectLocale(l)}
            className={`px-3 py-1.5 rounded text-sm border transition ${
              l === locale
                ? "bg-[#1B5FAE] text-white border-[#1B5FAE]"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {localeNames[l]}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="flex items-center gap-1 text-white/90 hover:text-white"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <span className="text-xs font-semibold">{localeNames[locale]}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50 text-left">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => selectLocale(l)}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition ${
                l === locale ? "text-[#1B5FAE] font-semibold" : "text-gray-700"
              }`}
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
