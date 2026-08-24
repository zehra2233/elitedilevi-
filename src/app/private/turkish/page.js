"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CustomSelect from "../../components/CustomSelect";

const otherPages = [
  { label: "English (Adults)", href: "/courses/english/adults" },
  { label: "English (Junior)", href: "/courses/english/junior" },
  { label: "German Courses", href: "/courses/german" },
  { label: "Turkish Courses", href: "/courses/turkish" },
  { label: "General Courses", href: "/general" },
  { label: "Private Lessons", href: "/private", current: true },
];

const reasons = [
  {
    title: "Assessment First",
    desc: "A short placement test to match your real starting level.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Native & Certified Instructors",
    desc: "Taught by instructors whose native language is Turkish.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    title: "Online or In-Person",
    desc: "Classes are offered either online or in person, your choice.",
    icon: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25",
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

export default function PrivateTurkishPage() {
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
                Turkish Private Lessons
              </h1>
              <p className="text-[#1B5FAE] font-semibold mb-4">
                One-on-One Personalized Classes
              </p>
              <p className="text-gray-600 max-w-md mb-8">
                Personalized learning tailored to your goals and schedule.
              </p>
            </div>
          </div>

          <div className="relative w-full lg:w-auto lg:flex-1 min-w-0 h-64 sm:h-80 lg:h-[300px]">
            <Image
              src="/privateenglish.png"
              alt="Turkish Private Lessons"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-40 sm:w-64 bg-gradient-to-r from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:-translate-x-8">
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
                      className={`flex items-center justify-between text-sm transition ${
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
            Elite Dil Evi offers private lessons with content entirely tailored to the student&apos;s and goals. Our private lessons, offered individually , are a viable option for students who believe their specific needs can be met with more intensive study, and where group courses are either insufficient or would take longer.
            </p>

            <div className="flex items-center gap-2 mb-3">
              <svg className="w-9 h-9 text-[#1B5FAE] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.964 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-[#314A8A]">Why Private Lessons?</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
            Private lessons are entirely tailored to the student&apos;s can add to the course content and chosen topics according to their own needs, and can determine the course content, intensity, and hours independently of any group, according to their own needs and availability. Such flexibility is one of the reasons why private lessons are preferred over group lessons.

To enroll in private courses, a placement test is administered first. Following the test, a needs analysis meeting is held between the course coordinator and the student to discuss their goals and how the course program will address them and within what timeframe. Based on this analysis, a personalized lesson plan is then developed, and the course begins.
            </p>

            <div className="bg-[#E4EDFB] rounded-md p-8 grid sm:grid-cols-3 gap-8 mb-12">
              {reasons.map((r) => (
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

            {/* Information Form */}
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
                      { value: "online", label: "Online Private Lessons" },
                      { value: "in-person", label: "In-Person Private Lessons" },
                      { value: "exam", label: "Exam-Focused Private Lessons" },
                    ]}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#1B5FAE] text-white font-bold py-3.5 rounded-md hover:bg-[#0E4396] transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Send Request
                </button>
                <p className="text-center text-xs text-gray-400">
                  Your information is safe with us. We will never share your data.
                </p>
              </form>
            </div>
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
            <p className="font-bold text-[#314A8A]">Ready to start learning Turkish?</p>
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
