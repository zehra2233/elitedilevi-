"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function useScrollReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

const highlights = [
  {
    title: "Group Classes",
    desc: "Interactive learning in small groups.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    title: "All Materials Included",
    desc: "Books and study materials included in the fee.",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  },
  {
    title: "Certified Course",
    desc: "Qualified certificate upon successful completion.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Exam Preparation",
    desc: "Goethe · ÖSD · TELC curriculum.",
    icon: "M12 21a9 9 0 100-18 9 9 0 000 18z M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z",
  },
];

const overview = [
  { label: "Levels", value: "A1 to B2", icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" },
  { label: "Duration", value: "8 Weeks (2 Months)\nper level", icon: "M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Schedule", value: "Monday, Tuesday,\nThursday & Friday", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" },
  { label: "Class Duration", value: "2 Hours 30 Minutes\nper class", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { label: "Materials", value: "Included in the\ncourse fee", icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" },
];

const levels = [
  {
    code: "A1",
    title: "Beginner",
    bg: "#FEF6E7",
    accent: "#D9A441",
    desc: "Learn the basics and start communicating in simple everyday situations.",
    points: ["Alphabet & pronunciation", "Greetings & introductions", "Numbers & dates", "Basic grammar", "Simple conversations"],
  },
  {
    code: "A2",
    title: "Elementary",
    bg: "#EFFAF1",
    accent: "#2E9E5B",
    desc: "Build confidence in daily communication and handle common situations.",
    points: ["Daily routines", "Shopping & travel", "Health & lifestyle", "Simple emails", "Grammar development"],
  },
  {
    code: "B1",
    title: "Intermediate",
    bg: "#EAF2FF",
    accent: "#1B5FAE",
    desc: "Communicate independently and express your ideas clearly.",
    points: ["Fluent speaking", "Reading authentic texts", "Writing emails & texts", "Listening comprehension", "Grammar accuracy"],
  },
  {
    code: "B2",
    title: "Upper Intermediate",
    bg: "#F5F0FB",
    accent: "#7C4DBE",
    desc: "Prepare for academic and professional environments with advanced skills.",
    points: ["Advanced vocabulary", "Professional communication", "Formal writing", "Presentations", "Academic reading"],
  },
];

const skills = [
  {
    title: "Speaking",
    desc: "Improve pronunciation, fluency and confidence in real-life conversations.",
    color: "#D9A441",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
  {
    title: "Listening",
    desc: "Understand conversations, lectures, interviews and authentic German audio.",
    color: "#2E9E5B",
    icon: "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.5a.75.75 0 01-.75-.75v-6a.75.75 0 01.75-.75h2.25z",
  },
  {
    title: "Reading",
    desc: "Read articles, stories, academic texts and everyday documents with confidence.",
    color: "#1B5FAE",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  },
  {
    title: "Writing",
    desc: "Write emails, reports, essays and formal documents effectively.",
    color: "#7C4DBE",
    icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487z",
  },
];

const examPrep = [
  "Practice examinations",
  "Writing workshops",
  "Speaking simulations",
  "Reading strategies",
  "Listening exercises",
  "Exam techniques & time management",
];

const studyMaterials = [
  "Official course book",
  "Workbook",
  "Practice materials",
  "Classroom handouts",
  "Digital learning resources",
  "Vocabulary exercises",
];

export default function GermanCoursePage() {
  const [highlightsRef, highlightsVisible] = useScrollReveal();
  const [overviewRef, overviewVisible] = useScrollReveal();
  const [skillsRef, skillsVisible] = useScrollReveal();
  const [levelsRef, levelsVisible] = useScrollReveal();

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative h-auto lg:h-[420px] overflow-hidden bg-white">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="relative z-10 w-full lg:w-[600px] shrink-0 bg-white px-6 sm:px-10 md:pl-16 lg:pl-32 py-14 lg:py-0 flex flex-col justify-center overflow-hidden">
            <div className="animate-slide-in-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#314A8A] leading-tight mb-3 lg:whitespace-nowrap">
                Learn German With<br />
                Confidence
              </h1>
              <p className="text-[#1B5FAE] font-semibold mb-4">
                From Beginner to Upper Intermediate
              </p>
              <p className="text-gray-600 max-w-md mb-8">
                Our German Language Course is designed to help you build
                strong language skills for education, work, travel and
                everyday communication. Learn with experienced instructors
                and prepare for international exams with confidence.
              </p>
              <div>
                <Link
                  href="/registration"
                  className="bg-[#1B5FAE] text-white text-sm sm:text-base font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-[#0E4396] transition"
                >
                  Enroll Now →
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-auto lg:flex-1 min-w-0 h-64 sm:h-80 lg:h-[420px]">
            <Image
              src="/germancoursee.png"
              alt="German Language Course"
              fill
              className="object-cover object-[center_85%]"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-40 sm:w-64 bg-gradient-to-r from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[#F7FAFF] pt-5 pb-0">
        <div ref={highlightsRef} className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              style={{ animationDelay: highlightsVisible ? `${i * 100}ms` : "0ms" }}
              className={`flex items-start gap-3 ${highlightsVisible ? "animate-rise-up" : "opacity-0"}`}
            >
              <svg className="w-6 h-6 text-[#1B5FAE] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={h.icon} />
              </svg>
              <div>
                <h3 className="font-bold text-[#314A8A] text-base mb-0.5">{h.title}</h3>
                <p className="text-gray-500 text-sm leading-snug">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Overview */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-24 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-[#314A8A] uppercase">
            Course Overview
          </h2>
          <div className="h-[3px] w-14 bg-[#D9A441] rounded-full mt-3 mx-auto" />
        </div>

        <div ref={overviewRef} className="flex flex-wrap lg:flex-nowrap gap-4">
          {overview.map((o, i) => (
            <div
              key={o.label}
              style={{ animationDelay: overviewVisible ? `${i * 100}ms` : "0ms" }}
              className={`flex-1 min-w-[220px] flex items-start gap-4 bg-white rounded-md shadow-sm border border-gray-100 px-6 py-4 ${
                overviewVisible ? "animate-rise-up" : "opacity-0"
              }`}
            >
              <svg
                className="w-9 h-9 shrink-0 text-[#1B5FAE]"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={o.icon} />
              </svg>
              <div>
                <p className="font-bold text-[#314A8A] text-base mb-1">{o.label}</p>
                <p className="text-[#314A8A] text-sm leading-relaxed whitespace-pre-line">{o.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills You Will Develop */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-[#314A8A] uppercase">
            Skills You Will Develop
          </h2>
          <div className="h-[3px] w-14 bg-[#D9A441] rounded-full mt-3 mx-auto" />
        </div>

        <div ref={skillsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((s, i) => (
            <div
              key={s.title}
              style={{ animationDelay: skillsVisible ? `${i * 100}ms` : "0ms" }}
              className={`flex items-start gap-3 ${skillsVisible ? "animate-rise-up" : "opacity-0"}`}
            >
              <div className="w-14 h-14 rounded-full bg-[#0B1B4D] flex items-center justify-center shrink-0">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={s.icon} />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#314A8A] text-base mb-1">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exam Preparation / Study Materials */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#0B1B4D] rounded-md p-8">
            <h2 className="text-lg font-bold tracking-wide text-white uppercase mb-2">
              Exam Preparation
            </h2>
            <div className="h-[3px] w-10 bg-[#D9A441] rounded-full mb-3" />
            <p className="text-white/70 text-base mb-4">
              Our courses follow the curricula of internationally recognized
              German language examinations.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-4">
              <Image
                src="/Logo_Goethe-Institut.png"
                alt="Goethe-Institut"
                width={130}
                height={60}
                className="h-16 w-auto object-contain"
              />
              <Image
                src="/oosd.png"
                alt="ÖSD"
                width={110}
                height={70}
                className="h-24 w-auto object-contain rounded scale-150"
              />
              <Image
                src="/telcc.webp"
                alt="telc"
                width={140}
                height={84}
                className="h-20 w-auto object-contain"
              />
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {examPrep.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#D9A441] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#E4ECF7] rounded-md p-8 flex flex-col h-full">
            <h2 className="text-xl sm:text-2xl font-bold text-[#314A8A] mb-6">
              Study Materials Included
            </h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-6">
              {studyMaterials.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#1B5FAE] shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/60 rounded-md p-4 flex items-center justify-between gap-4 mt-auto">
              <div className="flex items-center gap-3">
                <svg className="w-10 h-10 text-[#1B5FAE] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <circle cx="12" cy="8.5" r="4.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.5L7.5 21 12 18.5 16.5 21 15 12.5" />
                  <path fill="currentColor" stroke="none" d="M12 6l.8 1.6 1.8.25-1.3 1.28.3 1.77L12 9.9l-1.6 1-.3-1.77-1.3-1.28 1.8-.25L12 6z" />
                </svg>
                <p className="text-[#0E1E4A] text-sm leading-snug">
                  High-quality materials designed to support your learning
                  journey every step of the way.
                </p>
              </div>
              <div className="hidden sm:grid grid-cols-4 gap-1.5 shrink-0">
                {Array.from({ length: 16 }).map((_, i) => (
                  <span key={i} className="w-1 h-1 rounded-full bg-[#1B5FAE]/25" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="bg-[#F7FAFF] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-wide text-[#314A8A] uppercase">
              Course Levels
            </h2>
            <div className="h-[3px] w-14 bg-[#D9A441] rounded-full mt-3 mx-auto" />
          </div>

          <div ref={levelsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {levels.map((lvl, i) => (
              <div
                key={lvl.code}
                style={{
                  backgroundColor: lvl.bg,
                  animationDelay: levelsVisible ? `${i * 120}ms` : "0ms",
                }}
                className={`rounded-md p-6 shadow-sm ${levelsVisible ? "animate-rise-up" : "opacity-0"}`}
              >
                <p className="text-2xl font-bold mb-1" style={{ color: lvl.accent }}>
                  {lvl.code}
                </p>
                <h3 className="text-lg font-bold text-[#314A8A] mb-2">{lvl.title}</h3>
                <p className="text-gray-600 text-sm font-semibold leading-relaxed mb-4">{lvl.desc}</p>
                <ul className="space-y-1.5">
                  {lvl.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke={lvl.accent} strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-8">
        <div className="bg-[#EAF3FF] rounded-md px-6 py-5 flex flex-col sm:flex-row items-center gap-4">
          <svg className="w-8 h-8 text-[#1B5FAE] shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.902.434 1.346.663a6.727 6.727 0 00.551-1.607 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.667 2.25 2.25 0 002.12 0z" />
          </svg>
          <div className="w-px self-stretch bg-[#1B5FAE]/25" />
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-[#314A8A]">Ready to start learning German?</p>
            <p className="text-gray-500 text-sm">Explore our courses or contact our advisors to find the right fit for your goals.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1B5FAE] border border-[#1B5FAE] font-semibold px-5 py-2.5 rounded hover:bg-[#1B5FAE] hover:text-white transition shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
