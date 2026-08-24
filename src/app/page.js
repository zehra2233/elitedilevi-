"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import WelcomePopup from "./components/WelcomePopup";
import Footer from "./components/Footer";

export default function Home() {
  const [heroReplayKey, setHeroReplayKey] = useState(0);
  const missionRef = useRef(null);
  const [missionVisible, setMissionVisible] = useState(false);
  const processRef = useRef(null);
  const [processVisible, setProcessVisible] = useState(false);

  useEffect(() => {
    const el = missionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMissionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = processRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProcessVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <WelcomePopup onClose={() => setHeroReplayKey((k) => k + 1)} />
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gray-100 overflow-hidden h-[520px] sm:h-[560px] md:h-[600px]">
        <Image
          src="/background.png"
          alt="Students"
          fill
          className="object-cover object-[85%_75%] sm:object-[75%_75%] lg:object-[center_75%]"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 bg-[#C6C6C6] opacity-10" />

        <div className="absolute inset-0 flex items-start pt-12 sm:pt-16">
          <div key={heroReplayKey} className="max-w-2xl px-4 sm:px-6 md:px-10 md:ml-16 lg:ml-32 animate-slide-in-right">
            <p className="text-base sm:text-lg text-[#1B5FAE] mb-3">
              Master New Languages, Shape Your Future!
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#314A8A] leading-tight mb-4">
              Learn Languages,<br />
              Unlock Your Future!
            </h1>

            <p className="text-sm sm:text-base text-[#314A8A] max-w-lg mb-6">
              At Elite Dil Evi Educational Instituate, we support your language
              learning journey with modern teaching methods and internationally
              standardized programs.
            </p>

            <Link
              href="/placementtest"
              className="inline-block bg-[#1B5FAE] text-white text-sm sm:text-base font-bold uppercase px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-[#0E4396] transition"
            >
              Book Placement Test →
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <div className="relative -mt-20 sm:-mt-24 md:-mt-32 z-20 px-4 sm:px-10">
        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl grid grid-cols-1 md:grid-cols-5 gap-6 px-6 sm:px-10 py-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">

          <div className="flex items-start gap-3 md:pr-4">
            <svg className="w-7 h-7 shrink-0 text-[#314A8A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z" />
            </svg>
            <p className="text-[#314A8A] text-sm min-w-0">
              German, English & Turkish — Courses for All Levels
            </p>
          </div>

          <div className="flex items-start gap-3 md:px-4 pt-4 md:pt-0">
            <svg className="w-7 h-7 shrink-0 text-[#314A8A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p className="text-[#314A8A] text-sm min-w-0">
              Reading, Writing & Speaking-Focused Communication Methods
            </p>
          </div>

          <div className="flex items-start gap-3 md:px-4 pt-4 md:pt-0">
            <svg className="w-7 h-7 shrink-0 text-[#314A8A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 017.231-4.41 60.46 60.46 0 00-.491-6.347M4.26 10.147a48.474 48.474 0 017.324-2.815M4.26 10.147a12.087 12.087 0 01-1.395-.914M19.74 10.147a48.474 48.474 0 00-7.324-2.815M19.74 10.147a12.087 12.087 0 001.395-.914M12 12.75c-1.5-1.5-3.5-2-5.5-1.5m5.5 1.5c1.5-1.5 3.5-2 5.5-1.5m-11 0V16m11-4.75V16M12 7.332V3" />
            </svg>
            <p className="text-[#314A8A] text-sm min-w-0">
              Experienced & Expert Instructor Team
            </p>
          </div>

          <div className="flex items-start gap-3 md:px-4 pt-4 md:pt-0">
            <svg className="w-7 h-7 shrink-0 text-[#314A8A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941" />
            </svg>
            <p className="text-[#314A8A] text-sm min-w-0">
              Exam Prep — TOEFL, IELTS & Pearson ÖSD Goethe
            </p>
          </div>

          <div className="flex items-start gap-3 md:pl-4 pt-4 md:pt-0">
            <svg className="w-7 h-7 shrink-0 text-[#314A8A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z" />
            </svg>
            <p className="text-[#314A8A] text-sm min-w-0">
              Certified Completion — Internationally Recognized Certificates
            </p>
          </div>

        </div>
      </div>

      {/* Journey / Mission Section */}
<section className="relative rounded-none w-full mt-24 mb-8 overflow-hidden px-6 sm:px-10 py-16">
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

        <div ref={missionRef} className="relative max-w-7xl mx-auto flex flex-wrap gap-x-6 gap-y-8 lg:justify-between">
          {[
            { icon: "🎓", title: "Expert Instructors", text: "Learn from experienced, certified teachers." },
            { icon: "📈", title: "Proven Results", text: "High success rate in international exams." },
            { icon: "🤝", title: "Personalized Support", text: "Individual guidance for your unique goals." },
            { icon: "📋", title: "Complete Preparation", text: "From exam prep to admission and beyond." },
          ].map((item, i) => (
            <div
              key={i}
              style={{ animationDelay: missionVisible ? `${i * 120}ms` : "0ms" }}
              className={`flex items-start gap-3 w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-auto ${missionVisible ? "animate-rise-up" : "opacity-0"}`}
            >
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
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-20 pb-24">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#314A8A] leading-tight">
            Pick Your Language, <span className="text-[#1B5FAE] underline decoration-2 underline-offset-4">Start Today</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              name: "English",
              href: "/courses/english/adults",
              image: "/english.png",
              color: "#1B5FAE",
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
                  label: "All Levels A1 – C1",
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
              href: "/courses/turkish",
              image: "/turkish.png",
              color: "#D63636",
              popular: false,
              desc: "Turkish for living, working and studying in Turkey. Everyday fluency, not just textbook grammar.",
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
              name: "German",
              href: "/courses/german",
              image: "/germany.png",
              color: "#1B4332",
              popular: false,
              desc: "German for admission, work visas, and daily life. With exam-track options for certification.",
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
                      className="flex flex-col items-center gap-1 rounded-md py-2 px-1 bg-[#1B5FAE]/10"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="#1B5FAE" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                      </svg>
                      <p className="text-[11px] font-semibold text-[#314A8A] leading-tight">{f.label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={lang.href}
                  className="block w-full text-center text-sm font-bold py-3 rounded border border-[#1B5FAE] text-[#1B5FAE] hover:bg-gray-50 transition"
                >
                  See Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-8 pb-24">
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
              color: "#1B5FAE",
              href: "/general",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              ),
            },
            {
              title: "Exam Preparation",
              subtitle: "TOEFL, IELTS & Goethe",
              color: "#1B5FAE",
              href: "/exams",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              ),
            },
            {
              title: "Junior Programs",
              subtitle: "Fun & Effective Kids Courses",
              color: "#1B5FAE",
              href: "/courses/english/junior",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              ),
            },
            {
              title: "Private Lessons",
              subtitle: "One-on-One Personalized Classes",
              color: "#1B5FAE",
              href: "/private",
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
              color: "#1B5FAE",
              href: "/onlineclass",
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
              color: "#1B5FAE",
              href: "/uniguide",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18M18.75 3v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              ),
            },
          ].map((prog, i) => (
            <div   key={i}
  className="group rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 bg-white min-h-[205px] max-w-[340px] mx-auto w-full hover:-translate-y-5">
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
                {prog.href ? (
                  <Link
                    href={prog.href}
                    className="inline-block text-xs font-semibold px-4 py-1.5 rounded border hover:bg-gray-50 transition"
                    style={{ borderColor: prog.color, color: prog.color }}
                  >
                    See Details →
                  </Link>
                ) : (
                  <button
                    className="text-xs font-semibold px-4 py-1.5 rounded border hover:bg-gray-50 transition"
                    style={{ borderColor: prog.color, color: prog.color }}
                  >
                    See Details →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Process Steps Section */}
      <section className="bg-gray-100 pt-10 pb-12">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#1B5FAE] font-semibold mb-1">Our Process</p>
            <h2 className="text-4xl font-bold text-[#314A8A]">
              From Language Level to Acceptance Letter
            </h2>
          </div>

          <div ref={processRef} className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-0">
            {[
              {
                title: "Assessment",
                color: "#1B5FAE",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2 2 4-4M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                ),
              },
              {
                title: "Language & Exam Prep",
                color: "#1B5FAE",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                ),
              },
              {
                title: "Application Documents",
                color: "#1B5FAE",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0v6a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-6m-19.5 0h19.5M4.5 9.75V6a2.25 2.25 0 012.25-2.25h4.5l2.25 2.25h5.25A2.25 2.25 0 0121.75 8.25v1.5" />
                ),
              },
              {
                title: "Interview Preparation",
                color: "#1B5FAE",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                ),
              },
              {
                title: "Visa And Acceptance",
                color: "#1B5FAE",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                ),
              },
            ].map((item, i, arr) => (
              <div key={i} className="flex items-start md:contents">
                <div
                  style={{ animationDelay: processVisible ? `${i * 150}ms` : "0ms" }}
                  className={`flex flex-col items-center text-center px-2 w-full md:w-auto md:shrink-0 md:max-w-[170px] ${
                    processVisible ? "animate-rise-up" : "opacity-0"
                  }`}
                >
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
                  <h3 className="text-lg font-bold text-[#314A8A] mt-5">{item.title}</h3>
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
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
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
              className="flex-1 min-w-0 lg:w-64 bg-white/10 border border-white/20 rounded px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#1B5FAE] transition"
            />
            <button
              type="submit"
              className="shrink-0 bg-[#1B5FAE] text-white font-semibold px-6 py-3 rounded hover:bg-[#0E4396] transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <svg className="hidden lg:block w-20 h-16 text-[#1B5FAE] shrink-0" viewBox="0 0 100 60" fill="none">
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

      <Footer />
    </main>
  );
}