"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

let hasShownWelcome = false;

export default function WelcomePopup({ onClose }) {
  const [open, setOpen] = useState(() => !hasShownWelcome);

  if (!open) return null;

  const handleClose = () => {
    hasShownWelcome = true;
    setOpen(false);
    onClose?.();
  };

  const handleNavigate = () => {
    hasShownWelcome = true;
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
      <div className="relative bg-white rounded-md shadow-2xl w-full max-w-md py-6 px-8 text-center animate-pop-in">
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <Image
          src="/mainlogo.png"
          alt="Elite Dil Evi"
          width={296}
          height={100}
          className="h-12 w-auto mx-auto mb-2"
        />

        <h3 className="text-xl font-medium text-[#0E1E4A]">Welcome to Elite Dil Evi</h3>
        <p className="text-gray-500 text-sm mt-2 mb-10">
          Choose an option below to continue your journey with us.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/registration"
            onClick={handleNavigate}
            className="w-full bg-[#1B5FAE] text-white font-bold text-sm py-3 rounded-md hover:bg-[#0E4396] transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            Register for a Course
          </Link>

          <Link
            href="/consultation"
            onClick={handleNavigate}
            className="w-full bg-gradient-to-r from-[#E0A93B] to-[#C6862A] text-white font-bold text-sm py-3 rounded-md hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="3.5" />
              <path strokeLinecap="round" d="M4.5 20a7.5 7.5 0 0115 0" />
            </svg>
            Get Consultancy
          </Link>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <span className="h-px flex-1 bg-gray-200" />
          <p className="text-xs font-semibold text-gray-400">OR</p>
          <span className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          onClick={handleClose}
          className="mt-4 inline-flex items-center gap-1.5 text-[#1B5FAE] font-normal text-xs hover:underline"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z" />
          </svg>
          Continue Browsing Website
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}
