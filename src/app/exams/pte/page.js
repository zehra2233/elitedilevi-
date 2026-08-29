"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CustomSelect from "../../components/CustomSelect";
import { API_BASE_URL } from "../../../lib/api";

const otherPages = [
  { label: "English (Adults)", href: "/courses/english/adults" },
  { label: "English (Junior)", href: "/courses/english/junior" },
  { label: "German Courses", href: "/courses/german" },
  { label: "Turkish Courses", href: "/courses/turkish" },
  { label: "General Courses", href: "/general" },
  { label: "Private Lessons", href: "/private" },
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

export default function PTEPage() {
  const [category, setCategory] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCountry, setPhoneCountry] = useState("Turkey-+90");
  const [phone, setPhone] = useState("");

  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const categoryLabels = {
    "one-on-one": "One-on-One PTE Preparation",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const dialCode = phoneCountry.split("-").pop();

    try {
      const res = await fetch(`${API_BASE_URL}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
          phone_country_code: dialCode,
          phone: phone,
          category: categoryLabels[category] || category,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Something went wrong");
      }

      setStatus("success");
      setFullName("");
      setEmail("");
      setPhone("");
      setCategory("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative h-auto lg:h-[300px] overflow-hidden bg-white">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="relative z-10 w-full lg:w-[600px] shrink-0 bg-white px-6 sm:px-10 md:pl-16 lg:pl-32 pt-6 pb-4 sm:pt-8 sm:pb-6 lg:py-0 flex flex-col justify-center overflow-hidden">
            <div className="animate-slide-in-right mt-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#314A8A] leading-tight mb-3">
                PTE Exam Preparation
              </h1>
              <p className="text-[#1B5FAE] font-semibold mb-4">
                PTE Academic Test Preparation
              </p>
              <p className="text-gray-600 max-w-md mb-8">
                Get exam-ready with focused PTE preparation covering all
                four skills. Learn proven strategies, practice with real
                exam formats, and build the confidence to reach your
                target score.
              </p>
            </div>
          </div>

          <div className="relative w-full lg:w-auto lg:flex-1 min-w-0 h-64 sm:h-80 lg:h-[300px]">
            <Image
              src="/exam.jpg"
              alt="PTE Exam Preparation"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-40 sm:w-64 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white rounded-2xl shadow-xl px-4 pt-2 pb-4 flex flex-col items-center text-center">
              <Image
                src="/pearsonpte.png"
                alt="Pearson PTE"
                width={200}
                height={66}
                className="h-16 w-auto object-contain"
              />
              <div className="w-16 h-[2px] bg-gray-200 -mt-1 mb-2.5" />
              <span className="text-base font-bold text-[#314A8A] leading-snug">Official Test Preparation</span>
            </div>
          </div>
        </div>
      </section>

      {/* PTE Course Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-0 pb-16 sm:pt-4 lg:pt-16 lg:-translate-x-8">
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
                      className="flex items-center justify-between text-base text-gray-600 hover:text-[#1B5FAE] transition"
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
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              The PTE Academic Course helps you prepare for the Pearson Test of English (Academic). The PTE Academic test is an internationally recognized, computer-based exam used by those wishing to study abroad, as well as by educational institutions and various companies in Turkey, to assess your English level. The PTE Academic Course provides strategies related to the exam content, explains what is expected, and offers opportunities to practice in specific areas. The courses are not aimed at simply raising your English level, but rather at improving your exam skills and increasing your score. The course focuses on the following topics:
            </p>

            <ul className="flex flex-col gap-2.5 mb-8">
              {[
                "Composition writing language and technique",
                "Advanced proficiency in the four basic language skills – reading, listening, writing, and speaking.",
                "Integration and use of the four basic communication skills.",
                "Suggestions and practices related to reading and listening skills.",
                "Summarizing speeches",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-[#D9A441] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-600 text-base sm:text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-[#314A8A] mb-3">PTE Academic Course Levels</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Elite Dil Evi PTE-A Preparation courses are for candidates at Upper-Intermediate level 1 and above.
            </p>

            <h2 className="text-2xl font-bold text-[#314A8A] mb-3">PTE Preparation Program</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Our PTE preparation courses offer separate study programs for each section of the exam. The tips provided by our experienced instructors for each section are of great benefit in your exam preparation.
            </p>

            <h2 className="text-2xl font-bold text-[#314A8A] mb-3">PTE One-on-One Lessons</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              PTE lessons are given as one-on-one instruction, and a level assessment test is administered before enrollment. Following the test, a needs analysis meeting is held with the course coordinator to determine the appropriate course program and timeframe to achieve the desired results, based on the participant&apos;s level and expected test score. A personalized lesson plan is then developed accordingly, and the course begins.
            </p>

            <div className="bg-[#F7FAFF] rounded-md py-6 pr-6">
              <p className="text-[#0E1E4A] text-base sm:text-lg">
                For pricing and other information regarding our one-on-one training programs, please contact us via WhatsApp{" "}
                <a
                  href="https://wa.me/905444067222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1B5FAE] font-bold hover:underline"
                >
                  +90 544 406 72 22
                </a>
                .
              </p>
            </div>

          </div>
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

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  required
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Please enter your email"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Telephone <span className="text-red-500">*</span></label>
                  <div className="flex gap-2">
                    <div className="relative shrink-0 flex items-center">
                      <select
                        className={`${selectFieldClass} w-24`}
                        value={phoneCountry}
                        onChange={(e) => setPhoneCountry(e.target.value)}
                      >
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
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="501 234 56 78"
                      required
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
                    { value: "one-on-one", label: "One-on-One PTE Preparation" },
                  ]}
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 bg-[#1B5FAE] text-white font-bold text-sm px-6 py-2.5 rounded-md hover:bg-[#0E4396] transition disabled:opacity-60"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  {status === "sending" ? "Sending..." : "Send Request"}
                </button>
              </div>

              {status === "success" && (
                <p className="text-center text-sm text-green-600 font-medium">
                  Thank you! Your request has been received. We&apos;ll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-center text-sm text-red-600 font-medium">
                  {errorMessage || "Something went wrong. Please try again."}
                </p>
              )}

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