"use client";
import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { locales, localeNames } from "../../i18n/config";

export default function LanguageSwitcher({ variant = "desktop" }) {
  const locale = useLocale();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, right: 0 });
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function toggleOpen() {
    if (!open && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCoords({ top: rect.bottom + 8, right: window.innerWidth - rect.right });
    }
    setOpen((v) => !v);
  }

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
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggleOpen}
        aria-label="Change language"
        className="flex items-center gap-1 text-white/90 hover:text-white shrink-0 text-xs font-semibold whitespace-nowrap"
      >
        {localeNames[locale]}
        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {mounted && open &&
        createPortal(
          <div
            ref={menuRef}
            style={{ position: "fixed", top: coords.top, right: coords.right }}
            className="w-32 bg-white rounded-md shadow-lg py-1 z-[9999] text-left"
          >
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
          </div>,
          document.body
        )}
    </>
  );
}
