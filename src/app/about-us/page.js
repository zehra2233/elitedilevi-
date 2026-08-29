"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { API_BASE_URL } from "../../lib/api";

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

const features = [
  {
    title: "Expert Teachers",
    desc: "Certified and experienced instructors dedicated to your success.",
    icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 017.231-4.41 60.46 60.46 0 00-.491-6.347M4.26 10.147a48.474 48.474 0 017.324-2.815M4.26 10.147a12.087 12.087 0 01-1.395-.914M19.74 10.147a48.474 48.474 0 00-7.324-2.815M19.74 10.147a12.087 12.087 0 001.395-.914M12 12.75c-1.5-1.5-3.5-2-5.5-1.5m5.5 1.5c1.5-1.5 3.5-2 5.5-1.5m-11 0V16m11-4.75V16M12 7.332V3",
  },
  {
    title: "Small Class Sizes",
    desc: "Personal attention and more speaking practice in every class.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    title: "International Exams",
    desc: "We prepare you for Goethe, Cambridge, TOEFL and YDS.",
    icon: "M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0",
  },
  {
    title: "Speaking Focus",
    desc: "Communicative lessons that build real-world speaking skills.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

const heroPoints = [
  {
    label: "Global Opportunities",
    icon: "M12 21a9 9 0 100-18 9 9 0 000 18z M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z",
  },
  {
    label: "Expert Guidance",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M3 9v6",
  },
  {
    label: "Student Success",
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z",
  },
];

const offerings = [
  {
    title: "University Admissions",
    desc: "Expert support for university selection and admission.",
    icon: "M3.75 21h16.5M4.5 3h15M5.25 3v18M18.75 3v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
  },
  {
    title: "Study Abroad Consultancy",
    desc: "Guidance for studying in top destinations worldwide.",
    icon: "M12 21a9 9 0 100-18 9 9 0 000 18z M3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z",
  },
  {
    title: "Language Courses",
    desc: "German, English & Turkish language programs.",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  },
  {
    title: "Application Assistance",
    desc: "End-to-end help with your application process.",
    icon: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0v6a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-6m-19.5 0h19.5M4.5 9.75V6a2.25 2.25 0 012.25-2.25h4.5l2.25 2.25h5.25A2.25 2.25 0 0121.75 8.25v1.5",
  },
  {
    title: "Visa Guidance",
    desc: "Professional support for student visa applications.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Student Support",
    desc: "Continuous support before, during & after your journey.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
  },
];

export default function AboutUsPage() {
  const [featuresRef, featuresVisible] = useScrollReveal();
  const [offeringsRef, offeringsVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();
  const [partnershipRef, partnershipVisible] = useScrollReveal();

  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantPosition, setApplicantPosition] = useState("");
  const [applicantMessage, setApplicantMessage] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [applyStatus, setApplyStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [applyErrorMessage, setApplyErrorMessage] = useState("");

  const handleCvChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setCvFile(null);
      return;
    }
    if (file.type !== "application/pdf") {
      setFileError("Please upload a PDF file.");
      setCvFile(null);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setFileError("File must be smaller than 5MB.");
      setCvFile(null);
      return;
    }
    setFileError("");
    setCvFile(file);
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    if (!cvFile) {
      setFileError("Please attach your CV as a PDF.");
      return;
    }
    setApplyStatus("sending");
    setApplyErrorMessage("");

    const formData = new FormData();
    formData.append("full_name", applicantName);
    formData.append("email", applicantEmail);
    formData.append("phone", applicantPhone);
    formData.append("position", applicantPosition);
    formData.append("message", applicantMessage);
    formData.append("cv", cvFile);

    try {
      const res = await fetch(`${API_BASE_URL}/api/job-applications`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Something went wrong");
      }

      setApplyStatus("success");
      setApplicantName("");
      setApplicantEmail("");
      setApplicantPhone("");
      setApplicantPosition("");
      setApplicantMessage("");
      setCvFile(null);
    } catch (err) {
      setApplyStatus("error");
      setApplyErrorMessage(err.message);
    }
  };

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative h-auto lg:h-[420px] overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row">
          <div className="relative z-10 w-full lg:w-[600px] shrink-0 bg-white px-6 sm:px-10 md:pl-16 lg:pl-32 pt-8 pb-10 sm:pt-10 sm:pb-12 lg:py-0 flex flex-col justify-center overflow-hidden">
            <div className="animate-slide-in-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#314A8A] leading-tight mb-3">
                About Elite Dil Evi
              </h1>
              <p className="text-[#1B5FAE] font-semibold mb-4">
                Your Trusted Partner in International Education
              </p>
              <p className="text-gray-600 max-w-md mb-8">
                Helping students achieve their educational goals through
                expert consultancy, language education, and university
                admission guidance.
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                {heroPoints.map((p) => (
                  <div key={p.label} className="flex items-center gap-2 text-[#314A8A]">
                    <svg className="w-5 h-5 text-[#D9A441]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
                    </svg>
                    <span className="text-sm font-semibold">{p.label}</span>
                  </div>
                ))}
              </div>

              <div>
                <Link
                  href="/"
                  className="bg-[#1B5FAE] text-white text-sm sm:text-base font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-[#0E4396] transition"
                >
                  Explore Our Page →
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-auto lg:flex-1 min-w-0 h-64 sm:h-80 lg:h-[420px]">
            <Image
              src="/aboutuss.png"
              alt="Elite Dil Evi students"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-y-0 left-0 w-40 sm:w-64 bg-gradient-to-r from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white pt-16 pb-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-2 sm:gap-10 lg:gap-16 items-center">
          {/* LEFT: copy */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-[#1B5FAE]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1B5FAE]">
                About Elite Dil Evi
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[#314A8A] mb-6">
              Fluent enough to belong,{" "}
              <span className="relative inline-block text-[#1B5FAE]">
                wherever
                <svg
                  className="absolute left-0 -bottom-1 w-full h-2 text-[#B08D57]"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 6 Q 25 0, 50 6 T 100 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              that is
            </h2>

            <p className="text-[#314A8A] text-[17px] mb-8 leading-relaxed">
              At Elite Dil Evi, we help students of all ages speak with
              confidence in German, English, and Turkish. With modern teaching
              methods, expert instructors, and internationally recognized
              certification, we open doors to your academic, professional, and
              personal success.
            </p>

            {/* Feature cards */}
            <div ref={featuresRef} className="grid grid-cols-2 gap-4 mb-10">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  style={{ animationDelay: featuresVisible ? `${i * 120}ms` : "0ms" }}
                  className={`bg-white border border-gray-100 rounded shadow-sm p-3.5 hover:shadow-md transition ${
                    featuresVisible ? "animate-rise-up" : "opacity-0"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#EAF0FB] flex items-center justify-center mb-2">
                    <svg className="w-4 h-4 text-[#1B5FAE]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#314A8A] text-sm mb-0.5">{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: photo with badge */}
          <div className="relative lg:-mt-16">
            <div className="relative rounded-md overflow-hidden shadow-2xl border-8 border-[#0E1E4A]">
              <Image
                src="/about%20us.png"
                alt="Elite Dil Evi Students"
                width={800}
                height={600}
                className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[520px] object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-6 right-6 sm:right-auto bg-[#154C8C] rounded shadow-lg px-5 py-4 flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-bold text-sm sm:text-base leading-tight">
                  Trusted by 2,000+ Students
                </p>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.783.57-1.838-.196-1.538-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.062 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.958z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="who-we-are" className="bg-[#F5F7FA] pt-24 pb-10 sm:pt-28 sm:pb-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-10">
              {/* LEFT: graphic composition */}
              <div className="order-2 lg:order-none lg:col-start-1 lg:row-start-1 lg:row-span-2 relative w-full max-w-md mx-auto lg:mx-0 lg:ml-10 pb-10 pt-0 lg:pt-20 -mt-6 lg:mt-0">
                <div className="relative aspect-[3/2] rounded-md overflow-hidden shadow-xl">
                  <Image
                    src="/englishland.png"
                    alt="English Land Institute"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute z-10 top-2 right-0 sm:-right-8 lg:top-6 lg:-right-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden bg-white shadow-lg flex items-center justify-center">
                  <Image
                    src="/other-centerr.jpeg"
                    alt="English Land Institute"
                    width={130}
                    height={130}
                    className="object-contain w-full h-full p-1"
                  />
                </div>
              </div>

              {/* RIGHT: intro copy */}
              <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1">
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1B5FAE] mb-2">
                  Our Second Educational Center
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#314A8A] mb-3 leading-tight">
                  English Land Institute
                </h2>
                <p className="text-[#314A8A] text-[17px] leading-relaxed mb-5 lg:mb-0">
                  English Land Institute is our second educational center,
                  established with the same commitment to quality language
                  education and student success. Together with Elite Dil Evi,
                  we provide modern language training, experienced
                  instructors, and student-centered learning environments.
                </p>
              </div>

              {/* RIGHT: partnership offers */}
              <div className="order-3 lg:order-none lg:col-start-2 lg:row-start-2 lg:self-end -mt-12 lg:mt-0">
                <p className="font-bold text-[#314A8A] text-[17px] mb-3">
                  What our partnership offers:
                </p>
                <div ref={partnershipRef} className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                  {[
                    "Modern language training",
                    "Experienced instructors",
                    "Student-centered learning",
                    "Shared academic standards",
                  ].map((item, i) => (
                    <div
                      key={item}
                      style={{ animationDelay: partnershipVisible ? `${i * 100}ms` : "0ms" }}
                      className={`flex items-center gap-2.5 ${partnershipVisible ? "animate-rise-up" : "opacity-0"}`}
                    >
                      <span className="w-5 h-5 rounded-full bg-[#1B5FAE] flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </span>
                      <span className="text-[#314A8A] text-[17px]">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="bg-[#1B5FAE] text-white text-sm sm:text-base font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-[#0E4396] transition"
                >
                  Visit English Land Institute →
                </button>
              </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-white pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <p className="text-center text-3xl font-bold text-[#314A8A] mb-10">
            What We Offer
          </p>

          <div ref={offeringsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-gray-200 rounded-md overflow-hidden divide-x divide-y divide-gray-200">
            {offerings.map((item, i) => (
              <div
                key={item.title}
                style={{ animationDelay: offeringsVisible ? `${i * 100}ms` : "0ms" }}
                className={`p-6 text-center ${offeringsVisible ? "animate-rise-up" : "opacity-0"}`}
              >
                <svg className="w-10 h-10 text-[#314A8A] mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <h3 className="font-bold text-[#314A8A] mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="relative overflow-hidden">
        <div className="relative px-6 sm:px-10 pt-6 pb-4">
        <div className="absolute inset-y-0 right-[5%] w-[70%]">
          <Image
            src="/22.png"
            alt=""
            fill
            className="object-cover object-[80%_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
          <div
            className="absolute inset-0 bg-[#1B5FAE]"
            style={{ clipPath: "polygon(0 0, 42% 0, 25% 100%, 0 100%)" }}
          />
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#D9A441]">
                Our Mission &amp; Vision
              </span>
              <span className="h-px w-12 bg-[#D9A441]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-6 max-w-xl">
              The Principles That Shape Your
              <br />
              Language Journey
            </h2>

            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-0">
              <div className="relative w-full sm:w-48 h-32 sm:h-40 rounded-md overflow-hidden shadow-2xl shrink-0 sm:mr-6">
                <Image
                  src="/about%20us.png"
                  alt="Elite Dil Evi"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 w-full sm:ml-48">
                <div className="relative bg-white rounded shadow-xl px-5 pt-8 pb-5 border-b-4 border-[#D9A441] flex-1 max-w-[280px]">
                  <div className="absolute -top-4 left-5 w-9 h-9 rounded bg-[#1B5FAE] flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0E1E4A] text-base mb-1.5">Our Vision</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Connecting students with world-class educational
                    opportunities across the globe.
                  </p>
                </div>

                <div className="relative bg-white rounded shadow-xl px-5 pt-8 pb-5 border-b-4 border-[#D9A441] flex-1 max-w-[280px]">
                  <div className="absolute -top-4 left-5 w-9 h-9 rounded bg-[#1B5FAE] flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="8.25" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="4.25" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="0.75" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-[#0E1E4A] text-base mb-1.5">Our Mission</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Providing trusted guidance and quality language education
                    for every student.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white pb-10 relative">
          <div
            className="max-w-5xl mx-auto bg-[#D9A441] pb-1"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          >
          <div
            className="bg-[#1B5FAE] pb-2"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          >
            <div ref={statsRef} className="px-6 sm:px-10 py-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-white/15">
              {[
                { value: "2,000+", label: "Students Trained" },
                { value: "98%", label: "Success Rate" },
                { value: "10+", label: "Years of Experience" },
                { value: "3", label: "Languages Taught" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  style={{ animationDelay: statsVisible ? `${i * 120}ms` : "0ms" }}
                  className={statsVisible ? "animate-rise-up" : "opacity-0"}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-white/70 text-xs sm:text-sm mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Careers / Apply for a Job */}
      <section id="careers" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16">
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-[85%] h-5 bg-black/25 blur-2xl rounded-full" />
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-[85%] h-5 bg-black/25 blur-2xl rounded-full" />

        <div className="relative rounded-2xl bg-white shadow-xl px-5 sm:px-8 md:px-10 py-8 sm:py-10 grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT: intro */}
          <div>
            <p className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-3">
              Careers at <span className="text-[#1B5FAE]">Elite Dil Evi</span>
            </p>

            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-[#314A8A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4A]">Join Our Team</h2>
                <div className="w-10 h-1 bg-[#1B5FAE] rounded-full mt-2" />
              </div>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
              We are always looking for passionate and talented individuals to
              grow with us. Send us your CV and we&apos;ll get in touch if there&apos;s a fit.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "Great Work Environment",
                  desc: "Be part of a supportive and friendly team.",
                  icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
                },
                {
                  title: "Grow Your Career",
                  desc: "Opportunities to learn, grow and advance.",
                  icon: "M2.25 18L9 11.25l4.306 4.306a11.95 11.95 0 015.814-5.518l2.74-1.22m0 0l-5.94-2.281m5.94 2.28l-2.28 5.941",
                },
                {
                  title: "Make an Impact",
                  desc: "Your work will make a real difference.",
                  icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                    <svg className="w-[18px] h-[18px] text-[#1B5FAE]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#1B2A4A] text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: form */}
          <div>
            <h3 className="text-xl font-bold text-[#1B2A4A] mb-1">Apply Now</h3>
            <p className="text-gray-500 text-sm mb-6">Fill in your details and upload your CV.</p>

            <form onSubmit={handleApplySubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <input
                    type="text"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Full Name"
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm text-[#1B2A4A] placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>
                <div className="relative">
                  <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <input
                    type="email"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                    className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm text-[#1B2A4A] placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>
              </div>

              <div className="relative">
                <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <input
                  type="tel"
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm text-[#1B2A4A] placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                />
              </div>

              <div className="relative">
                <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
                <select
                  value={applicantPosition}
                  onChange={(e) => setApplicantPosition(e.target.value)}
                  className="w-full appearance-none bg-white border border-gray-200 rounded-lg pl-10 pr-10 py-3 text-sm text-[#1B2A4A] focus:outline-none focus:border-[#1B5FAE] transition"
                >
                  <option value="">Position You&apos;re Applying For</option>
                  <option value="German Language Instructor">German Language Instructor</option>
                  <option value="English Language Instructor">English Language Instructor</option>
                  <option value="Turkish Language Instructor">Turkish Language Instructor</option>
                  <option value="Other">Other</option>
                </select>
                <svg className="w-4 h-4 text-gray-400 absolute right-3.5 top-3.5 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

              <div className="relative">
                <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
                </svg>
                <textarea
                  value={applicantMessage}
                  onChange={(e) => setApplicantMessage(e.target.value)}
                  placeholder="Write a short message (optional)"
                  rows={3}
                  className="w-full bg-white border border-gray-200 rounded-lg pl-10 pr-4 py-3 text-sm text-[#1B2A4A] placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition resize-none"
                />
              </div>

              <label
                htmlFor="cv-upload"
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-dashed border-gray-300 rounded-lg px-4 py-4 cursor-pointer hover:border-[#1B5FAE] transition"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-[#EEF2FB] flex items-center justify-center shrink-0">
                    <svg className="w-[18px] h-[18px] text-[#1B5FAE]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l-3.75 3.75M12 9.75l3.75 3.75M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#1B2A4A]">Upload Your CV (PDF)</p>
                    <p className="text-xs text-gray-400 truncate">
                      {cvFile ? cvFile.name : "Click to upload or drag & drop your file here"}
                    </p>
                  </div>
                </div>
                <span className="self-start sm:self-auto shrink-0 text-sm font-semibold text-[#1B5FAE] border border-[#1B5FAE]/40 rounded-md px-4 py-2 hover:bg-[#EEF2FB] transition">
                  Browse
                </span>
                <input
                  id="cv-upload"
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handleCvChange}
                  className="hidden"
                />
              </label>

              <button
                type="submit"
                disabled={applyStatus === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-[#1B5FAE] text-white font-semibold py-3.5 rounded-lg hover:bg-[#0E4396] transition disabled:opacity-60"
              >
                {applyStatus === "sending" ? "Sending..." : "Send Application"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>

              {(fileError || applyStatus === "success" || applyStatus === "error") && (
                <div className="text-center">
                  {fileError && <p className="text-sm text-red-500">{fileError}</p>}
                  {applyStatus === "success" && (
                    <p className="text-sm text-emerald-600 font-medium">
                      Thank you! Your application has been received. We&apos;ll be in touch soon.
                    </p>
                  )}
                  {applyStatus === "error" && (
                    <p className="text-sm text-red-500 font-medium">
                      {applyErrorMessage || "Something went wrong. Please try again."}
                    </p>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
        </div>
      </section>
      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pt-10 pb-8">
        <div className="bg-gradient-to-b from-[#EAF3FF] to-white rounded-3xl px-10 py-14 flex flex-col items-center text-center gap-6">
          <h3
            className="text-lg sm:text-xl font-bold text-[#314A8A]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Ready to start your language journey?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/consultation"
              className="group inline-flex items-center gap-2 bg-[#1B5FAE] text-white font-semibold px-6 py-3 rounded shadow-md transition-all duration-300 hover:bg-[#0E4396] hover:-translate-y-0.5 hover:shadow-lg"
            >
              Book a Consultation
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white text-[#1B5FAE] font-semibold px-6 py-3 rounded border border-gray-200 transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact Us
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
