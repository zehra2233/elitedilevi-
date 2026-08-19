"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

const exams = [
  {
    key: "telc",
    title: "TELC",
    desc: "German language exams for real-life communication.",
    href: "/exams/telc",
    bullets: ["Internationally recognized", "All language levels (A1–C2)", "For work and study"],
    logo: (
      <Image
        src="/telc.png"
        alt="telc"
        width={220}
        height={132}
        className="h-12 w-auto object-contain"
      />
    ),
  },
  {
    key: "ielts",
    title: "IELTS",
    desc: "Academic and General English test.",
    href: "/exams/ielts",
    bullets: ["University admission", "Work & immigration", "Global recognition"],
    logo: (
      <span className="text-5xl font-extrabold text-[#E30A17] tracking-tight">
        IELTS<sup className="text-xs align-super">™</sup>
      </span>
    ),
  },
  {
    key: "toefl",
    title: "TOEFL",
    desc: "Test of English as a Foreign Language.",
    href: "/exams/toefl",
    bullets: ["University admission", "Study abroad", "Trusted worldwide"],
    logo: (
      <Image
        src="/TOEFLBLUE.png"
        alt="TOEFL"
        width={220}
        height={82}
        className="h-20 w-auto object-contain"
      />
    ),
  },
  {
    key: "osd",
    title: "ÖSD",
    desc: "German language proficiency exam (Austria).",
    href: "/exams/osd",
    bullets: ["Measures German level", "For work and study", "Official recognition"],
    logo: (
      <Image
        src="/osd.png"
        alt="ÖSD"
        width={220}
        height={132}
        className="h-20 w-auto object-contain"
      />
    ),
  },
  {
    key: "goethe",
    title: "Goethe",
    desc: "German language exams by Goethe-Institut.",
    href: "/exams/goethe",
    bullets: ["International certificate", "All levels (A1–C2)", "For study and work"],
    logo: (
      <Image
        src="/Logo_Goethe-Institut.png"
        alt="Goethe-Institut"
        width={200}
        height={94}
        className="h-20 w-auto object-contain"
      />
    ),
  },
  {
    key: "pte",
    title: "PTE",
    desc: "Pearson Test of English.",
    href: "/exams/pte",
    bullets: ["Fast results", "Computer-based test", "For study and work"],
    logo: (
      <Image
        src="/pearsonpte.png"
        alt="Pearson PTE"
        width={200}
        height={66}
        className="h-20 w-auto object-contain"
      />
    ),
  },
];

export default function ExamsPage() {
  const [examsRef, examsVisible] = useScrollReveal();

  return (
    <main>
      <Header />

      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-10 pb-6">
        <div className="flex items-start gap-4 mb-2">
          <div className="w-12 h-12 rounded-md bg-[#1B5FAE] flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#314A8A]">Exam Preparation</h1>
            <p className="text-gray-500">Choose your exam and get the right preparation course.</p>
          </div>
        </div>
      </section>

      {/* Choose your exam */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-10">
        <div ref={examsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam, i) => (
            <div
              key={exam.key}
              style={{ animationDelay: examsVisible ? `${i * 100}ms` : "0ms" }}
              className={`rounded-md p-6 bg-white border border-gray-100 shadow-[0_8px_24px_rgba(15,30,74,0.15)] flex flex-col ${examsVisible ? "animate-rise-up" : "opacity-0"}`}
            >
              <div className="h-16 flex items-center mb-4">{exam.logo}</div>
              <p className="text-gray-500 text-sm mb-4">{exam.desc}</p>

              <ul className="flex flex-col gap-1.5 mb-6">
                {exam.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href={exam.href}
                className="mt-auto inline-flex items-center justify-center gap-2 bg-[#1B5FAE] text-white text-sm font-semibold px-5 py-2.5 rounded w-full transition hover:bg-[#0E4396]"
              >
                See Details →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Not sure which exam */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="bg-[#EAF3FF] rounded-md px-6 py-5 flex flex-col sm:flex-row items-center gap-4">
          <svg className="w-8 h-8 text-[#1B5FAE] shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.902.434 1.346.663a6.727 6.727 0 00.551-1.607 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.667 2.25 2.25 0 002.12 0z" />
          </svg>
          <div className="w-px self-stretch bg-[#1B5FAE]/25" />
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-[#314A8A]">Not sure which exam?</p>
            <p className="text-gray-500 text-sm">Contact our advisors and we will help you choose the right test based on your goals.</p>
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
