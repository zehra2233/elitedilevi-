"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [englishOpen, setEnglishOpen] = useState(false);
  const [examsOpen, setExamsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top contact bar */}
      <div className="bg-[#314A8A] text-white text-sm">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-6 ml-48">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span>Head Office: +90 544 406 72 22</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>Address: Yeşilkent, Nazım Hikmet Blv. No:50, İstanbul</span>
            </div>
          </div>

          <div className="flex items-center gap-4 mr-24">
            <a href="#" aria-label="X">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="flex items-center justify-between px-10 py-4 shadow-sm relative">
        <Image
          src="/logo.jpeg"
          alt="Elite Dil Evi"
          width={56}
          height={56}
          className="h-14 w-auto ml-16"
        />

        <nav className="hidden md:flex gap-6 text-base text-gray-700 items-center ml-64">
          <Link href="/" className="hover:text-blue-700 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-700 transition">About Us</Link>

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => {
              setCoursesOpen(false);
              setEnglishOpen(false);
            }}
          >
            <button className="flex items-center gap-1 hover:text-blue-700 transition">
              Courses
              <span className="text-xs font-light text-gray-400">▼</span>
            </button>

            {coursesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                <Link href="/courses/german" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-700 transition">
                  German
                </Link>

                {/* English with nested submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => setEnglishOpen(true)}
                  onMouseLeave={() => setEnglishOpen(false)}
                >
                  <button className="w-full text-left flex items-center justify-between px-4 py-2 hover:bg-gray-100 hover:text-blue-700 transition">
                    English
                    <span className="text-xs font-light text-gray-400">▶</span>
                  </button>

                  {englishOpen && (
                    <div className="absolute top-0 left-full bg-white shadow-lg rounded-md py-2 w-40 z-50">
                      <Link href="/courses/english/junior" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-700 transition">
                        Junior
                      </Link>
                      <Link href="/courses/english/adults" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-700 transition">
                        Adults
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/courses/turkish" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-700 transition">
                  Turkish
                </Link>
              </div>
            )}
          </div>

          {/* Exam Preparation Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setExamsOpen(true)}
            onMouseLeave={() => setExamsOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-blue-700 transition">
              Exam Preparation
              <span className="text-xs font-light text-gray-400">▼</span>
            </button>

            {examsOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                <Link href="/exams/toefl" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-700 transition">
                  TOEFL
                </Link>
                <Link href="/exams/ielts" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-700 transition">
                  IELTS
                </Link>
                <Link href="/exams/german-exams" className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-700 transition">
                  German Exams
                </Link>
              </div>
            )}
          </div>

          {/* University Guidance - standalone */}
          <Link href="/university-guidance" className="hover:text-blue-700 transition">University Guidance</Link>

          <Link href="/contact" className="hover:text-blue-700 transition">Contact</Link>
        </nav>

        <button className="bg-red-600 text-white font-bold px-6 py-3 rounded hover:bg-red-700 transition animate-pulse-scale">
          CONTACT US
        </button>
      </div>
    </header>
  );
}