"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import WelcomePopup from "./components/WelcomePopup";

export default function Home() {
  const [heroReplayKey, setHeroReplayKey] = useState(0);

  return (
    <main>
      <WelcomePopup onClose={() => setHeroReplayKey((k) => k + 1)} />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-100 overflow-hidden h-[600px]">
        <Image
          src="/background.png"
          alt="Students"
          fill
          className="object-cover object-[center_75%]"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 bg-[#C6C6C6] opacity-10" />

        <div className="absolute inset-0 flex items-start pt-16">
          <div key={heroReplayKey} className="max-w-2xl px-10 ml-32 animate-slide-in-right">
            <p className="text-lg text-[#3674D6] -mt-6 mb-3">
              Master New Languages, Shape Your Future!
            </p>

            <h1 className="text-5xl font-medium text-[#314A8A] leading-tight mb-4">
              Learn Languages,<br />
              Unlock Your Future!
            </h1>

            <p className="text-base text-[#314A8A] max-w-lg mb-6">
              At Elite Dil Evi Educational Instituate, we support your language
              learning journey with modern teaching methods and internationally
              standardized programs.
            </p>

            <button className="bg-[#3674D6] text-white text-base font-bold px-6 py-3 rounded hover:bg-[#0E4396] transition">
              Book Free Placement Test →
            </button>
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <div className="relative -mt-32 z-20 px-10">
        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl grid grid-cols-1 md:grid-cols-5 gap-6 px-10 py-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">

          <div className="flex items-start gap-3 md:pr-4">
            <svg className="w-7 h-7 shrink-0 text-[#314A8A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z" />
            </svg>
            <p className="text-[#314A8A] text-sm">
              German, English & Turkish — Courses for All Levels
            </p>
          </div>

          <div className="flex items-start gap-3 md:px-4 pt-4 md:pt-0">
            <svg className="w-7 h-7 shrink-0 text-[#314A8A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-[#314A8A] text-sm">
              Reading, Writing & Speaking-Focused Communication Methods
            </p>
          </div>

          <div className="flex items-start gap-3 md:px-4 pt-4 md:pt-0">
            <svg className="w-7 h-7 shrink-0 text-[#314A8A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 017.231-4.41 60.46 60.46 0 00-.491-6.347M4.26 10.147a48.474 48.474 0 017.324-2.815M4.26 10.147a12.087 12.087 0 01-1.395-.914M19.74 10.147a48.474 48.474 0 00-7.324-2.815M19.74 10.147a12.087 12.087 0 001.395-.914M12 12.75c-1.5-1.5-3.5-2-5.5-1.5m5.5 1.5c1.5-1.5 3.5-2 5.5-1.5m-11 0V16m11-4.75V16M12 7.332V3" />
            </svg>
            <p className="text-[#314A8A] text-sm">
              Experienced & Expert Instructor Team
            </p>
          </div>

          <div className="flex items-start gap-3 md:px-4 pt-4 md:pt-0">
            <svg className="w-7 h-7 shrink-0 text-[#314A8A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
            </svg>
            <p className="text-[#314A8A] text-sm">
              Exam Prep — TOEFL, IELTS & Pearson ÖSD Goethe
            </p>
          </div>

          <div className="flex items-start gap-3 md:pl-4 pt-4 md:pt-0">
            <svg className="w-7 h-7 shrink-0 text-[#314A8A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
            </svg>
            <p className="text-[#314A8A] text-sm">
              Certified Completion — Internationally Recognized Certificates
            </p>
          </div>

        </div>
      </div>

      {/* Journey / Mission Section */}
<section className="relative rounded-none w-full mt-24 mb-8 overflow-hidden px-10 py-16">
          <Image
          src="/aeroplane.png"
          alt=""
          fill
          className="object-cover object-[center_30%] -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1B4D]/95 to-[#12296B]/90" />

        <div className="relative max-w-5xl mx-auto text-center mb-16">
          <span className="inline-block bg-white/10 text-white text-xs font-bold tracking-wider px-4 py-2 rounded-full mb-6">
            YOUR JOURNEY, OUR MISSION
          </span>

          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4 leading-tight">
            Get the <span className="text-[#6FA8FF]">Score</span>. Get the{" "}
            <span className="text-[#4ADE80]">Letter</span>. Get on the{" "}
            <span className="text-[#F5B942]">Plane</span>.
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
          {[
            { icon: "🎓", title: "Expert Instructors", text: "Learn from experienced, certified teachers." },
            { icon: "📈", title: "Proven Results", text: "High success rate in international exams." },
            { icon: "🤝", title: "Personalized Support", text: "Individual guidance for your unique goals." },
            { icon: "📋", title: "Complete Preparation", text: "From exam prep to admission and beyond." },
            { icon: "🧳", title: "Future Ready", text: "We prepare you for academic success abroad." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-white/50 text-xs leading-snug">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Language Cards Section */}
      <section className="max-w-7xl mx-auto px-10 pt-12 pb-24">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#314A8A] leading-tight">
            Pick Your Language, <span className="text-[#3674D6] underline decoration-2 underline-offset-4">Start Today</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              name: "English",
              image: "/english.png",
              color: "#3674D6",
              popular: true,
              desc: "General & academic English, built to feed straight into TOEFL, IELTS or Pearson prep.",
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
              features: [
                {
                  label: "All Levels A1 – C2",
                  icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
                },
                {
                  label: "Exam Preparation",
                  icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M3 9v6",
                },
                {
                  label: "Speaking Focus",
                  icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                },
              ],
            },
            {
              name: "Turkish",
              image: "/turkish.png",
              color: "#D63636",
              popular: false,
              desc: "Turkish for living, working and studying in Turkey — everyday fluency, not just textbook grammar.",
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
              features: [
                {
                  label: "Everyday Conversations",
                  icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                },
                {
                  label: "Work & Study in Turkey",
                  icon: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.653v-6.5A2.25 2.25 0 0018 3.75h-1.5a2.25 2.25 0 00-2.25 2.25v.75m6 6a48.667 48.667 0 00-7.5-.383m-7.5.383a2.18 2.18 0 01-.75-1.653v-6.5A2.25 2.25 0 016 3.75h1.5a2.25 2.25 0 012.25 2.25v.75m6 6a48.667 48.667 0 00-7.5 0",
                },
                {
                  label: "Listening Practice",
                  icon: "M3 18v-6a9 9 0 0118 0v6M3 18a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5zm18 0a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5z",
                },
              ],
            },
            {
              name: "Germany",
              image: "/germany.png",
              color: "#1B4332",
              popular: false,
              desc: "German for admission, work visas, and daily life — with exam-track options for certification.",
              flag: (
                <>
                  <rect width="60" height="13.3" fill="#000" />
                  <rect y="13.3" width="60" height="13.3" fill="#DD0000" />
                  <rect y="26.6" width="60" height="13.4" fill="#FFCE00" />
                </>
              ),
              features: [
                {
                  label: "Exam Preparation",
                  icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M3 9v6",
                },
                {
                  label: "Study & Abroad",
                  icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18M18.75 3v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
                },
                {
                  label: "Practical German",
                  icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
                },
              ],
            },
          ].map((lang) => (
            <div
              key={lang.name}
              className="relative bg-white rounded-md shadow-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-44">
                <Image
                  src={lang.image}
                  alt={lang.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 380px, 100vw"
                />
              </div>

              <div className="flex justify-center relative z-10 -mt-14">
                <div
                  className="w-24 h-24 rounded-full ring-4 ring-white shadow-lg overflow-hidden bg-white animate-pulse-scale"
                  style={{ boxShadow: `0 0 0 8px ${lang.color}26, 0 10px 20px -5px rgba(0,0,0,0.25)` }}
                >
                  <svg viewBox="0 0 60 40" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
                    {lang.flag}
                  </svg>
                </div>
              </div>

              <div className="px-8 pb-8 pt-4 text-center">
                <h3 className="text-2xl font-bold text-[#314A8A]">{lang.name}</h3>
                <span
                  className="block mx-auto mt-2 mb-4 h-[3px] w-10 rounded-full"
                  style={{ backgroundColor: lang.color }}
                />
                <p className="text-gray-600 text-sm">{lang.desc}</p>

                <div className="grid grid-cols-3 gap-3 my-6">
                  {lang.features.map((f) => (
                    <div
                      key={f.label}
                      className="flex flex-col items-center gap-1 rounded-md py-2 px-1 bg-[#3674D6]/10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="#3674D6" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                      </svg>
                      <p className="text-[11px] font-semibold text-[#314A8A] leading-tight">{f.label}</p>
                    </div>
                  ))}
                </div>

                <button className="w-full text-sm font-bold py-3 rounded border border-[#3674D6] text-[#3674D6] hover:bg-gray-50 transition">
                  See Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="max-w-7xl mx-auto px-10 pt-8 pb-24">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-4xl font-bold text-[#314A8A]">
            Elite Dil Evi Education Programs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-1 gap-y-10 mt-12">
          {[
            {
              title: "General Courses",
              subtitle: "Courses for Every Level",
              color: "#3674D6",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              ),
            },
            {
              title: "Exam Preparation",
              subtitle: "TOEFL, IELTS & Goethe",
              color: "#3674D6",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              ),
            },
            {
              title: "Junior Programs",
              subtitle: "Fun & Effective Kids Courses",
              color: "#3674D6",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              ),
            },
            {
              title: "Private Lessons",
              subtitle: "One-on-One Personalized Classes",
              color: "#3674D6",
              icon: (
                <>
                  <circle cx="12" cy="12" r="8.25" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="4.25" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="0.75" fill="currentColor" />
                </>
              ),
            },
            {
              title: "Online Courses",
              subtitle: "Courses for Every Level",
              color: "#3674D6",
              icon: (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 8.25h16.5a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 8.25V6a1.5 1.5 0 011.5-1.5h4.5A1.5 1.5 0 0115.75 6v2.25M3 12.75h18" />
                </>
              ),
            },
            {
              title: "Admission Services",
              subtitle: "University Applications",
              color: "#3674D6",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18M18.75 3v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              ),
            },
          ].map((prog, i) => (
            <div   key={i}
  className="group rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white min-h-[205px] max-w-[340px] mx-auto w-full hover:-translate-y-2">
              <div className="relative h-32">
                <div className="absolute inset-0 overflow-hidden">
                  <Image   src={
    prog.title === "General Courses"
      ? "/generall.jpg"
      : prog.title === "Online Courses"
      ? "/online.jpg"
       : prog.title === "Exam Preparation"
      ? "/exam.jpg"
      : prog.title === "Junior Programs"
      ? "/junior.jpg"
       : prog.title === "Private Lessons"
      ? "/private.jpg"
         : prog.title === "Admission Services"
      ? "/unii.jpg"
      : "/background.png"}
    alt={prog.title}
    fill
    className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${prog.color}E6 25%, ${prog.color}00 65%)` }}
                  />
                </div>
                <div
                  className="absolute -bottom-4 left-4 w-9 h-9 rounded-full flex items-center justify-center shadow-md ring-4 ring-white"
                  style={{ backgroundColor: prog.color }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    {prog.icon}
                  </svg>
                </div>
              </div>
              <div className="pt-5 px-4 pb-4">
                <h3 className="text-base font-bold text-[#314A8A] mb-0.5">{prog.title}</h3>
                <p className="text-gray-500 text-xs mb-1.5">{prog.subtitle}</p>
                <button
                  className="text-xs font-semibold px-4 py-1.5 rounded border hover:bg-gray-50 transition"
                  style={{ borderColor: prog.color, color: prog.color }}
                >
                  See Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Process Steps Section */}
      <section className="bg-gray-100 -mt-10 pt-2 pb-24">
        <div className="max-w-6xl mx-auto px-10">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <p className="text-[#3674D6] font-semibold mb-1">Our Process</p>
            <h2 className="text-4xl font-bold text-[#314A8A]">
              From Language Level to Acceptance Letter
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-0">
            {[
              {
                title: "Assessment",
                text: "We test your current level and map it against your target program's language requirement.",
                color: "#3674D6",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2 2 4-4M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                ),
              },
              {
                title: "Language & Exam Prep",
                text: "Structured classes toward the specific score your chosen universities require.",
                color: "#3674D6",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                ),
              },
              {
                title: "Application Documents",
                text: "Personal statement, transcripts, recommendation letters — reviewed against each program's checklist.",
                color: "#3674D6",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0v6a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-6m-19.5 0h19.5M4.5 9.75V6a2.25 2.25 0 012.25-2.25h4.5l2.25 2.25h5.25A2.25 2.25 0 0121.75 8.25v1.5" />
                ),
              },
              {
                title: "Interview Preparation",
                text: "Mock interviews for programs that require them, in the language of instruction.",
                color: "#3674D6",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                ),
              },
              {
                title: "Acceptance",
                text: "We stay on until the offer letter is in hand — including conditional-offer language conditions.",
                color: "#3674D6",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                ),
              },
            ].map((item, i, arr) => (
              <div key={i} className="flex items-start md:contents">
                <div className="flex flex-col items-center text-center px-2 w-full md:w-auto md:shrink-0 md:max-w-[170px]">
                  <div className="relative">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-md"
                      style={{ backgroundColor: item.color }}
                    >
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        {item.icon}
                      </svg>
                    </div>
                    <span
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-2 flex items-center justify-center text-[10px] font-bold"
                      style={{ borderColor: item.color, color: item.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#314A8A] mt-5 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>

                {i < arr.length - 1 && (
                  <div className="hidden md:block flex-1 border-t-2 border-dashed border-gray-300 mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-7xl mx-auto px-10 py-16">
        <div className="relative overflow-hidden rounded-md bg-gradient-to-r from-[#0B1B4D] to-[#12296B] px-8 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Stay updated with our latest news</h3>
              <p className="text-white/60 text-sm max-w-sm">
                Subscribe to get updates on new courses, special offers, and language tips.
              </p>
            </div>
          </div>

          <form className="flex w-full lg:w-auto gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 lg:w-64 bg-white/10 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#3674D6] transition"
            />
            <button
              type="submit"
              className="bg-[#3674D6] text-white font-semibold px-6 py-3 rounded hover:bg-[#0E4396] transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <svg className="hidden lg:block w-20 h-16 text-[#3674D6] shrink-0" viewBox="0 0 100 60" fill="none">
            <path
              d="M4 50 C 30 50, 45 22, 62 16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="3 5"
              opacity="0.6"
            />
            <path
              fill="currentColor"
              d="M58 8l30 12-11 3-4 11-6-11-13-6z"
            />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0B1B4D] to-[#12296B] text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-5 gap-10">
          <div>
            <Image
              src="/logo.jpeg"
              alt="Elite Dil Evi"
              width={96}
              height={96}
              className="mb-4"
            />
            <h4 className="text-2xl font-bold mb-2">Elite Dil Evi</h4>
            <p className="text-sm text-white/60">
              Shaping futures through language, one course at a time.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-1">Courses</h4>
            <span className="block h-[2px] w-8 bg-[#3674D6] mb-4" />
            <ul className="space-y-3 text-base text-white/80">
              {[
                { label: "English", href: "/courses/english" },
                { label: "German", href: "/courses/german" },
                { label: "Turkish", href: "/courses/turkish" },
              ].map((c) => (
                <li key={c.label}>
                  <Link href={c.href} className="flex items-center gap-2 hover:text-white transition">
                    <span className="text-[#3674D6]">›</span> {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-1">Legal</h4>
            <span className="block h-[2px] w-8 bg-[#3674D6] mb-4" />
            <ul className="space-y-3 text-base text-white/80">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Use", href: "/terms" },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="flex items-center gap-2 hover:text-white transition">
                    <span className="text-[#3674D6]">›</span> {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-1">Exam Preparation</h4>
            <span className="block h-[2px] w-8 bg-[#3674D6] mb-4" />
            <ul className="space-y-3 text-base text-white/80">
              {[
                { label: "IELTS", href: "/exams/ielts" },
                { label: "TOEFL", href: "/exams/toefl" },
                { label: "TestDaF", href: "/exams/testdaf" },
              ].map((e) => (
                <li key={e.label}>
                  <Link href={e.href} className="flex items-center gap-2 hover:text-white transition">
                    <span className="text-[#3674D6]">›</span> {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-1">Contact</h4>
            <span className="block h-[2px] w-8 bg-[#3674D6] mb-4" />
            <ul className="space-y-3 text-base text-white/80">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3674D6] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +90 505 XXX XX XX
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3674D6] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Istanbul, Türkiye
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#3674D6] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@elitedilevi.com
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.878h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-10 mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Elite Dil Evi. All rights reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}