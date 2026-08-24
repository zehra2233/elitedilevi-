"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomSelect from "../components/CustomSelect";

const otherPages = [
  { label: "English (Adults)", href: "/courses/english/adults" },
  { label: "English (Junior)", href: "/courses/english/junior" },
  { label: "German Courses", href: "/courses/german" },
  { label: "Turkish Courses", href: "/courses/turkish" },
  { label: "General Courses", href: "/general", current: true },
  { label: "Private Lessons", href: "/private" },
];

const languages = [
  {
    title: "German",
    subtitle: "Our most requested track — includes Goethe exam alignment at every level.",
    color: "#D9A441",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    href: "/courses/german",
    flag: (
      <>
        <rect width="60" height="13.3" fill="#000" />
        <rect y="13.3" width="60" height="13.3" fill="#DD0000" />
        <rect y="26.6" width="60" height="13.4" fill="#FFCE00" />
      </>
    ),
  },
  {
    title: "English",
    subtitle: "General & academic English with IELTS/TOEFL-ready upper levels.",
    color: "#1B5FAE",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    href: "/courses/english/adults",
    flag: (
      <>
        <rect width="60" height="40" fill="#B22234" />
        <rect y="3.08" width="60" height="3.08" fill="#fff" />
        <rect y="9.23" width="60" height="3.08" fill="#fff" />
        <rect y="15.38" width="60" height="3.08" fill="#fff" />
        <rect y="21.54" width="60" height="3.08" fill="#fff" />
        <rect y="27.69" width="60" height="3.08" fill="#fff" />
        <rect y="33.85" width="60" height="3.08" fill="#fff" />
        <rect width="24" height="21.54" fill="#3C3B6E" />
      </>
    ),
  },
  {
    title: "Turkish",
    subtitle: "Designed for international students settling and studying in Turkiye.",
    color: "#D63636",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
    href: "/courses/turkish",
    flag: (
      <>
        <rect width="60" height="40" fill="#E30A17" />
        <circle cx="24" cy="20" r="10" fill="#fff" />
        <circle cx="27.5" cy="20" r="8" fill="#E30A17" />
        <polygon
          fill="#fff"
          points="34,20 30.9,21 31.7,17.6 29.2,15.1 32.6,14.9 34,11.7 35.4,14.9 38.8,15.1 36.3,17.6 37.1,21"
        />
      </>
    ),
  },
];

const features = [
  {
    title: "CEFR-Aligned",
    desc: "Structured from A1 to C2 at every step.",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443",
  },
  {
    title: "Native & Certified Instructors",
    desc: "Learn from experienced professionals.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    title: "Quality Materials Included",
    desc: "Books & resources provided.",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  },
  {
    title: "Certificate Upon Completion",
    desc: "Recognized and valuable.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

const countryCodes = [
  { name: "Turkey", code: "+90" },
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" },
  { name: "Bosnia and Herzegovina", code: "+387" },
  { name: "Brazil", code: "+55" },
  { name: "Bulgaria", code: "+359" },
  { name: "Cambodia", code: "+855" },
  { name: "Cameroon", code: "+237" },
  { name: "Canada", code: "+1" },
  { name: "Chile", code: "+56" },
  { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" },
  { name: "Croatia", code: "+385" },
  { name: "Cyprus", code: "+357" },
  { name: "Czech Republic", code: "+420" },
  { name: "Denmark", code: "+45" },
  { name: "Egypt", code: "+20" },
  { name: "Estonia", code: "+372" },
  { name: "Ethiopia", code: "+251" },
  { name: "Finland", code: "+358" },
  { name: "France", code: "+33" },
  { name: "Georgia", code: "+995" },
  { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" },
  { name: "Greece", code: "+30" },
  { name: "Hungary", code: "+36" },
  { name: "Iceland", code: "+354" },
  { name: "India", code: "+91" },
  { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" },
  { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" },
  { name: "Italy", code: "+39" },
  { name: "Japan", code: "+81" },
  { name: "Jordan", code: "+962" },
  { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" },
  { name: "Kuwait", code: "+965" },
  { name: "Kyrgyzstan", code: "+996" },
  { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" },
  { name: "Libya", code: "+218" },
  { name: "Lithuania", code: "+370" },
  { name: "Luxembourg", code: "+352" },
  { name: "Malaysia", code: "+60" },
  { name: "Malta", code: "+356" },
  { name: "Mexico", code: "+52" },
  { name: "Moldova", code: "+373" },
  { name: "Monaco", code: "+377" },
  { name: "Mongolia", code: "+976" },
  { name: "Montenegro", code: "+382" },
  { name: "Morocco", code: "+212" },
  { name: "Netherlands", code: "+31" },
  { name: "New Zealand", code: "+64" },
  { name: "Nigeria", code: "+234" },
  { name: "North Macedonia", code: "+389" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" },
  { name: "Portugal", code: "+351" },
  { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Serbia", code: "+381" },
  { name: "Singapore", code: "+65" },
  { name: "Slovakia", code: "+421" },
  { name: "Slovenia", code: "+386" },
  { name: "South Africa", code: "+27" },
  { name: "South Korea", code: "+82" },
  { name: "Spain", code: "+34" },
  { name: "Sri Lanka", code: "+94" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Syria", code: "+963" },
  { name: "Taiwan", code: "+886" },
  { name: "Thailand", code: "+66" },
  { name: "Tunisia", code: "+216" },
  { name: "Turkmenistan", code: "+993" },
  { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Uzbekistan", code: "+998" },
  { name: "Vietnam", code: "+84" },
  { name: "Yemen", code: "+967" },
];

const selectFieldClass =
  "w-full appearance-none border border-gray-200 rounded-md pl-4 pr-9 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1B5FAE] transition bg-white";

function ChevronDown() {
  return (
    <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function GeneralCoursesPage() {
  const [category, setCategory] = useState("");

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative h-auto lg:h-[300px] overflow-hidden bg-white">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="relative z-10 w-full lg:w-[600px] shrink-0 bg-white px-6 sm:px-10 md:pl-16 lg:pl-32 py-14 lg:py-0 flex flex-col justify-center overflow-hidden">
            <div className="animate-slide-in-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#314A8A] leading-tight mb-3">
                General Courses
              </h1>
              <p className="text-[#1B5FAE] font-semibold mb-4">
                Group Classes for Every Level
              </p>
              <p className="text-gray-600 max-w-md mb-8">
                Structured group courses in German, English, and Turkish,
                built around the CEFR framework from A1 to C2.
              </p>
              <div>
                <a
                  href="#choose-language"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("choose-language")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="bg-[#1B5FAE] text-white text-sm sm:text-base font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-[#0E4396] transition"
                >
                  View Course Plan →
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-auto lg:flex-1 min-w-0 h-64 sm:h-80 lg:h-[300px]">
            <Image
              src="/generall.jpg"
              alt="General Courses"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-40 sm:w-64 bg-gradient-to-r from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* About General Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="w-full flex flex-col gap-6 order-2 lg:order-1">
            <div className="w-full bg-white border border-gray-100 rounded-md p-6 shadow-lg">
              <div className="flex items-center gap-2 text-[#314A8A] font-bold mb-4">
                <svg className="w-5 h-5 text-[#1B5FAE]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                Other Pages
              </div>
              <ul className="flex flex-col gap-2.5">
                {otherPages.map((p) => (
                  <li key={p.label}>
                    <Link
                      href={p.href}
                      className={`flex items-center justify-between text-base transition ${
                        p.current ? "text-[#1B5FAE] font-semibold" : "text-gray-600 hover:text-[#1B5FAE]"
                      }`}
                    >
                      {p.label}
                      <span>›</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main content */}
          <div className="order-1 lg:order-2">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Elite Dil Evi offers general courses in German, English, and Turkish, with structured group classes designed to build strong language skills step by step. Each class is kept to just 4-5 students, so instructors can focus closely on every student and give everyone a fair, equal share of speaking and practice time. Our general courses are an ideal option for students who want steady, well-paced progress guided by certified instructors and quality materials.
            </p>

            <div className="flex items-center gap-2 mb-3">
              <svg className="w-9 h-9 text-[#1B5FAE] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.964 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-[#314A8A]">General Courses</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Our General language courses are aligned with the CEFR framework, from A1 to C2, combining structured lessons with regular practice in speaking, listening, reading and writing. Classes are held in small groups, so students stay motivated and learn from each other while progressing at a shared pace.

To enroll, a placement test is administered first so every student starts at the level that matches their ability. From there, the course moves level by level with certified instructors, official materials, and a clear path toward fluency.
            </p>

            <div className="bg-[#E4EDFB] rounded-md p-5 grid sm:grid-cols-3 gap-6 mb-4">
              {[
                {
                  title: "Assessment First",
                  desc: "A short placement test to match your real starting level.",
                  icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                },
                {
                  title: "Certified Instructors",
                  desc: "Taught by qualified instructors experienced in group teaching.",
                  icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
                },
                {
                  title: "4-5 Students Per Class",
                  desc: "Small groups keep the focus on each student.",
                  icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0zM6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75",
                },
              ].map((r) => (
                <div key={r.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#1B5FAE]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={r.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0E1E4A] text-base mb-1">{r.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Choose your language */}
      <section id="choose-language" className="max-w-7xl mx-auto px-6 sm:px-10 py-16 scroll-mt-24">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#314A8A] mb-10">
          Choose Your Language
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <div
              key={lang.title}
              className="rounded-md p-8 text-center bg-[#F7FAFF] shadow-[0_8px_24px_rgba(15,30,74,0.15)]"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-5 ring-2 ring-white shadow-sm">
                <svg viewBox="0 0 60 40" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
                  {lang.flag}
                </svg>
              </div>

              <h3 className="font-bold text-lg text-[#0E1E4A] mb-2">{lang.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{lang.subtitle}</p>

              <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                {lang.levels.map((lvl) => (
                  <span
                    key={lvl}
                    className="text-[11px] font-bold px-2.5 py-1.5 rounded-lg"
                    style={{ backgroundColor: `${lang.color}26`, color: lang.color }}
                  >
                    {lvl}
                  </span>
                ))}
              </div>

              <Link
                href={lang.href}
                className="inline-flex items-center justify-center gap-2 bg-[#1B5FAE] text-white text-sm font-semibold px-5 py-2.5 rounded w-full transition hover:bg-[#0E4396]"
              >
                View {lang.title} course plan →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Features bar */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border border-gray-200 rounded-md shadow-sm px-6 py-4 md:divide-x md:divide-gray-200">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3 px-2">
              <svg className="w-7 h-7 text-[#1B5FAE] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.3} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
              </svg>
              <div>
                <p className="font-bold text-[#0E1E4A] text-sm sm:text-base">{f.title}</p>
                <p className="text-gray-400 text-sm leading-snug">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Information Form */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-8 pb-16">
        <div className="grid lg:grid-cols-[320px_1fr] gap-6 items-stretch">
          {/* Help Panel */}
          <div className="relative overflow-hidden rounded-md bg-[#0B1B4D] p-8 flex flex-col">
            <div className="h-1 w-10 bg-[#D9A441] rounded-full mb-6" />
            <h3
              className="text-3xl font-bold text-white leading-tight mb-4"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              We&apos;re Here
              <br />
              to Help You
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              Fill out the form and our team will contact you with the best course options for you.
            </p>

            <svg
              className="absolute bottom-0 left-0 right-0 text-white/10 pointer-events-none"
              viewBox="0 0 320 140"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              preserveAspectRatio="none"
            >
              <rect x="10" y="60" width="40" height="80" />
              <rect x="18" y="72" width="8" height="8" />
              <rect x="34" y="72" width="8" height="8" />
              <rect x="18" y="90" width="8" height="8" />
              <rect x="34" y="90" width="8" height="8" />
              <rect x="60" y="40" width="30" height="100" />
              <path d="M60 40l15-16 15 16" />
              <rect x="68" y="56" width="6" height="8" />
              <rect x="82" y="56" width="6" height="8" />
              <rect x="68" y="74" width="6" height="8" />
              <rect x="82" y="74" width="6" height="8" />
              <rect x="100" y="20" width="34" height="120" />
              <rect x="108" y="34" width="6" height="8" />
              <rect x="120" y="34" width="6" height="8" />
              <rect x="108" y="50" width="6" height="8" />
              <rect x="120" y="50" width="6" height="8" />
              <rect x="108" y="66" width="6" height="8" />
              <rect x="120" y="66" width="6" height="8" />
              <line x1="0" y1="140" x2="320" y2="140" />
            </svg>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-100 rounded-md shadow-[0_0_25px_rgba(0,0,0,0.15)] p-8">
          <h2 className="text-xl font-bold text-[#314A8A] mb-1">Information Form</h2>
          <div className="h-[3px] w-10 bg-[#D9A441] rounded-full mb-6" />

          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Please enter your email"
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Telephone <span className="text-red-500">*</span></label>
                <div className="flex gap-2">
                  <div className="relative shrink-0 flex items-center">
                    <select className={`${selectFieldClass} w-24`} defaultValue="Turkey-+90">
                      {countryCodes.map((c) => (
                        <option key={`${c.name}-${c.code}`} value={`${c.name}-${c.code}`}>
                          {c.code}
                        </option>
                      ))}
                    </select>
                    <ChevronDown />
                  </div>
                  <input
                    type="tel"
                    placeholder="501 234 56 78"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">
                Category you would like information about <span className="text-red-500">*</span>
              </label>
              <CustomSelect
                value={category}
                onChange={setCategory}
                options={[
                  { value: "german", label: "General German Course" },
                  { value: "english", label: "General English Course" },
                  { value: "turkish", label: "General Turkish Course" },
                ]}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#1B5FAE] text-white font-bold text-sm px-6 py-2.5 rounded-md hover:bg-[#0E4396] transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                Send Request
              </button>
            </div>
            <p className="text-center text-xs text-gray-400">
              Your information is safe with us. We will never share your data.
            </p>
          </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
