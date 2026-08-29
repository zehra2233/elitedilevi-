"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [englishOpen, setEnglishOpen] = useState(false);
  const [examsOpen, setExamsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClass = (href) =>
    `hover:text-[#1B5FAE] transition ${
      pathname === href ? "text-[#1B5FAE] font-semibold" : ""
    }`;

  const dropdownLinkClass = (href) =>
    `block px-4 py-2 hover:bg-gray-100 hover:text-[#1B5FAE] transition ${
      pathname === href ? "text-[#1B5FAE] font-semibold bg-gray-100" : ""
    }`;

  const coursesActive = pathname.startsWith("/courses");
  const englishActive = pathname.startsWith("/courses/english");
  const examsActive = pathname.startsWith("/exams");

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top contact bar */}
      <div className="block bg-[#045BA7] text-white text-xs sm:text-sm">
        <div className="flex items-center justify-between gap-3 px-4 sm:px-8 lg:px-12 xl:px-20 py-2 overflow-x-auto">
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="whitespace-nowrap">Head Office: +90 544 406 72 22</span>
            </div>
            <div className="hidden xl:flex items-center gap-2">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="whitespace-nowrap">Address: Yeşilkent, Nazım Hikmet Blv. No:50, İstanbul</span>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a href="https://www.instagram.com/elitedil_evi" target="_blank" rel="noopener noreferrer" aria-label="Instagram (elitedil_evi)">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/elitedil" target="_blank" rel="noopener noreferrer" aria-label="Instagram (elitedil)">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
              </svg>
            </a>
            <a href="https://wa.me/905444067222" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.04 2C6.556 2 2.13 6.35 2.13 11.75c0 1.94.55 3.75 1.5 5.29L2 22l5.13-1.58c1.49.83 3.19 1.3 5 1.3h.01c5.48 0 9.9-4.35 9.9-9.75C22.04 6.35 17.62 2 12.04 2zm0 17.75h-.01c-1.62 0-3.2-.44-4.58-1.26l-.33-.2-3.05.94.93-2.98-.21-.34a8.16 8.16 0 01-1.27-4.38c0-4.51 3.7-8.17 8.29-8.17 4.58 0 8.29 3.66 8.29 8.17 0 4.51-3.71 8.17-8.29 8.17z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="flex items-center justify-between px-8 sm:px-12 xl:px-20 py-4 shadow-sm relative">
        <Link href="/" className="shrink-0">
          <Image
            src="/mainlogo.png"
            alt="Elite Dil Evi"
            width={296}
            height={100}
            className="h-12 sm:h-14 lg:h-16 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex gap-6 text-base text-gray-700 items-center">
          <Link href="/" className={navLinkClass("/")}>Home</Link>
          <Link href="/about-us" className={navLinkClass("/about-us")}>About Us</Link>

          {/* Courses Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => {
              setCoursesOpen(false);
              setEnglishOpen(false);
            }}
          >
            <button
              className={`flex items-center gap-1 hover:text-[#1B5FAE] transition ${
                coursesActive ? "text-[#1B5FAE] font-semibold" : ""
              }`}
            >
              Courses
              <span className="text-xs font-light text-gray-400">▼</span>
            </button>

            {coursesOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                <Link href="/courses/german" className={dropdownLinkClass("/courses/german")}>
                  German
                </Link>

                {/* English with nested submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => setEnglishOpen(true)}
                  onMouseLeave={() => setEnglishOpen(false)}
                >
                  <button
                    className={`w-full text-left flex items-center justify-between px-4 py-2 hover:bg-gray-100 hover:text-[#1B5FAE] transition ${
                      englishActive ? "text-[#1B5FAE] font-semibold bg-gray-100" : ""
                    }`}
                  >
                    English
                    <span className="text-xs font-light text-gray-400">▶</span>
                  </button>

                  {englishOpen && (
                    <div className="absolute top-0 left-full bg-white shadow-lg rounded-md py-2 w-40 z-50">
                      <Link href="/courses/english/junior" className={dropdownLinkClass("/courses/english/junior")}>
                        Junior
                      </Link>
                      <Link href="/courses/english/adults" className={dropdownLinkClass("/courses/english/adults")}>
                        Adults
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/courses/turkish" className={dropdownLinkClass("/courses/turkish")}>
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
            <button
              className={`flex items-center gap-1 hover:text-[#1B5FAE] transition ${
                examsActive ? "text-[#1B5FAE] font-semibold" : ""
              }`}
            >
              Exam Preparation
              <span className="text-xs font-light text-gray-400">▼</span>
            </button>

            {examsOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50">
                <Link href="/exams/toefl" className={dropdownLinkClass("/exams/toefl")}>
                  TOEFL
                </Link>
                <Link href="/exams/ielts" className={dropdownLinkClass("/exams/ielts")}>
                  IELTS
                </Link>
                <Link href="/exams/pte" className={dropdownLinkClass("/exams/pte")}>
                  PTE
                </Link>
                <Link href="/exams/telc" className={dropdownLinkClass("/exams/telc")}>
                  TELC
                </Link>
                <Link href="/exams/goethe" className={dropdownLinkClass("/exams/goethe")}>
                  GOETHE
                </Link>
                <Link href="/exams/osd" className={dropdownLinkClass("/exams/osd")}>
                  ÖSD
                </Link>
              </div>
            )}
          </div>

          {/* University Guidance - standalone */}
          <Link href="/uniguide" className={navLinkClass("/uniguide")}>University Guidance</Link>

          <Link href="/blog" className={navLinkClass("/blog")}>Blog</Link>

          <Link href="/contact" className={navLinkClass("/contact")}>Contact</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-block bg-red-600 text-white font-bold px-3 sm:px-6 py-2 sm:py-3 rounded hover:bg-red-700 transition animate-pulse-scale text-xs sm:text-base"
          >
            CONTACT US
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#0E1E4A]"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-1 text-gray-700 max-h-[80vh] overflow-y-auto">
          <Link href="/" onClick={() => setMobileOpen(false)} className={`py-2 ${navLinkClass("/")}`}>Home</Link>
          <Link href="/about-us" onClick={() => setMobileOpen(false)} className={`py-2 ${navLinkClass("/about-us")}`}>About Us</Link>

          <details className="py-2" open={coursesActive}>
            <summary className={`cursor-pointer list-none flex items-center justify-between ${coursesActive ? "text-[#1B5FAE] font-semibold" : ""}`}>
              Courses <span className="text-xs text-gray-400">▼</span>
            </summary>
            <div className="pl-4 mt-2 flex flex-col gap-2">
              <Link href="/courses/german" onClick={() => setMobileOpen(false)} className={`py-1 ${pathname === "/courses/german" ? "text-[#1B5FAE] font-semibold" : ""}`}>German</Link>
              <Link href="/courses/english/junior" onClick={() => setMobileOpen(false)} className={`py-1 ${pathname === "/courses/english/junior" ? "text-[#1B5FAE] font-semibold" : ""}`}>English (Junior)</Link>
              <Link href="/courses/english/adults" onClick={() => setMobileOpen(false)} className={`py-1 ${pathname === "/courses/english/adults" ? "text-[#1B5FAE] font-semibold" : ""}`}>English (Adults)</Link>
              <Link href="/courses/turkish" onClick={() => setMobileOpen(false)} className={`py-1 ${pathname === "/courses/turkish" ? "text-[#1B5FAE] font-semibold" : ""}`}>Turkish</Link>
            </div>
          </details>

          <details className="py-2" open={examsActive}>
            <summary className={`cursor-pointer list-none flex items-center justify-between ${examsActive ? "text-[#1B5FAE] font-semibold" : ""}`}>
              Exam Preparation <span className="text-xs text-gray-400">▼</span>
            </summary>
            <div className="pl-4 mt-2 flex flex-col gap-2">
              <Link href="/exams/toefl" onClick={() => setMobileOpen(false)} className={`py-1 ${pathname === "/exams/toefl" ? "text-[#1B5FAE] font-semibold" : ""}`}>TOEFL</Link>
              <Link href="/exams/ielts" onClick={() => setMobileOpen(false)} className={`py-1 ${pathname === "/exams/ielts" ? "text-[#1B5FAE] font-semibold" : ""}`}>IELTS</Link>
              <Link href="/exams/pte" onClick={() => setMobileOpen(false)} className={`py-1 ${pathname === "/exams/pte" ? "text-[#1B5FAE] font-semibold" : ""}`}>PTE</Link>
              <Link href="/exams/telc" onClick={() => setMobileOpen(false)} className={`py-1 ${pathname === "/exams/telc" ? "text-[#1B5FAE] font-semibold" : ""}`}>TELC</Link>
              <Link href="/exams/goethe" onClick={() => setMobileOpen(false)} className={`py-1 ${pathname === "/exams/goethe" ? "text-[#1B5FAE] font-semibold" : ""}`}>GOETHE</Link>
              <Link href="/exams/osd" onClick={() => setMobileOpen(false)} className={`py-1 ${pathname === "/exams/osd" ? "text-[#1B5FAE] font-semibold" : ""}`}>ÖSD</Link>
            </div>
          </details>

          <Link href="/uniguide" onClick={() => setMobileOpen(false)} className={`py-2 ${navLinkClass("/uniguide")}`}>University Guidance</Link>
          <Link href="/blog" onClick={() => setMobileOpen(false)} className={`py-2 ${navLinkClass("/blog")}`}>Blog</Link>
          <Link href="/contact" onClick={() => setMobileOpen(false)} className={`py-2 ${navLinkClass("/contact")}`}>Contact</Link>

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 text-center bg-red-600 text-white font-bold px-6 py-3 rounded hover:bg-red-700 transition"
          >
            CONTACT US
          </Link>
        </nav>
      )}
    </header>
  );
}
