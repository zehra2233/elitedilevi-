"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CustomSelect from "../components/CustomSelect";
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

const steps = [
  {
    title: "Free Consultation",
    text: "We meet to understand your background, goals, and preferences.",
  },
  {
    title: "University Shortlist",
    text: "We curate a personalised list of the best-fit programs for you.",
  },
  {
    title: "Application Prep",
    text: "We craft and review every document in your application package.",
  },
  {
    title: "Offer & Decision",
    text: "We help you evaluate offers and choose the right program.",
  },
  {
    title: "Visa & Departure",
    text: "We handle your visa and pre-departure checklist so you're ready.",
  },
];

const studyDestinations = [
  { code: "TR", name: "Türkiye", image: "/turkey.png" },
  { code: "ES", name: "Spain", image: "/spain.png" },
  { code: "IT", name: "Italy", image: "/italy.png" },
  { code: "HU", name: "Hungary", image: "/Hungary.png" },
  { code: "LT", name: "Lithuania", image: "/lithuania.png" },
  { code: "RO", name: "Romania", image: "/Romania.png" },
  { code: "PL", name: "Poland", image: "/poland.png" },
  { code: "MY", name: "Malaysia", image: "/malasiya.png" },
];

const whyItems = [
  {
    title: "Personalized Guidance",
    desc: "Get recommendations that match your academic background and goals.",
    icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M3 9v6",
  },
  {
    title: "Admission Support",
    desc: "Receive expert advice on requirements, documents and application process.",
    icon: "M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-19.5 0v6a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25v-6m-19.5 0h19.5M4.5 9.75V6a2.25 2.25 0 012.25-2.25h4.5l2.25 2.25h5.25A2.25 2.25 0 0121.75 8.25v1.5",
  },
  {
    title: "Scholarship Opportunities",
    desc: "Explore scholarships and financial aid options available for you.",
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Visa & Travel Assistance",
    desc: "Get step-by-step guidance for a smooth visa and travel process.",
    icon: "M7 3.75h10a1.25 1.25 0 011.25 1.25v14a1.25 1.25 0 01-1.25 1.25H7A1.25 1.25 0 015.75 19V5A1.25 1.25 0 017 3.75z M15.25 8a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z M9 17h6",
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

export default function UniGuidePage() {
  const [stepsRef, stepsVisible] = useScrollReveal();
  const [destinationsRef, destinationsVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal();
  const [studyCountry, setStudyCountry] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCountry, setPhoneCountry] = useState("Turkey-+90");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    const dialCode = phoneCountry.split("-").pop();

    try {
      const res = await fetch(`${API_BASE_URL}/api/consultations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
          phone_country_code: dialCode,
          phone: phone,
          study_country: studyCountry,
          notes: notes,
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
      setStudyCountry("");
      setNotes("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0B1B4D] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1B5FAE]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-[#D9A441]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 sm:px-10 pt-16 pb-10 text-center animate-slide-in-right">
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#D9A441] mb-5">
            <span className="h-px w-8 bg-[#D9A441]" />
            University Guidance
            <span className="h-px w-8 bg-[#D9A441]" />
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white leading-tight mb-6">
            EDE University &<br />
            Careers Counselling
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-3xl mx-auto mb-8">
            We offer a unique opportunity to facilitate links between guidance
            and university counsellors and international university admissions
            professionals who help support students in the transition from
            school to university. We work together with our members to
            support the best possible outcome for students interested in
            international higher education opportunities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#request-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("request-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center gap-2 bg-[#D9A441] text-[#0B1B4D] text-sm font-bold uppercase tracking-wide px-6 py-3 rounded hover:bg-[#C6902E] transition"
            >
              Begin Your Journey
            </a>
            <a
              href="#how-we-help"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("how-we-help")?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center gap-2 text-white text-sm font-semibold uppercase tracking-wide border-b border-white/40 pb-1 hover:text-[#D9A441] hover:border-[#D9A441] transition"
            >
              How We Help →
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-we-help" className="bg-white py-20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#1B5FAE] mb-4">
              <span className="h-px w-8 bg-[#1B5FAE]" />
              Simple Steps
              <span className="h-px w-8 bg-[#1B5FAE]" />
            </p>
            <h2 className="text-4xl sm:text-[2.75rem] font-bold text-[#314A8A]">
              How It Works
            </h2>
            <p className="text-gray-500 mt-4">
              A clear, guided path from first conversation to enrollment day.
            </p>
          </div>

          <div ref={stepsRef} className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-6">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-gray-200" />
            {steps.map((step, i) => (
              <div
                key={step.title}
                style={{ animationDelay: stepsVisible ? `${i * 120}ms` : "0ms" }}
                className={`relative text-center px-2 ${stepsVisible ? "animate-rise-up" : "opacity-0"}`}
              >
                <div className="group mx-auto w-20 h-20 rounded-full border-2 border-[#1B5FAE]/30 bg-white flex items-center justify-center mb-5 relative z-10 cursor-default transition-colors duration-300 hover:bg-[#1B5FAE] hover:border-[#1B5FAE]">
                  <span
                    className="text-2xl text-[#1B5FAE] transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-bold text-[#0E1E4A] text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] uppercase text-[#1B5FAE] mb-4">
            <span className="h-px w-8 bg-[#1B5FAE]" />
            Where We Send Students
          </p>
          <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#314A8A]">
            Study Destinations
          </h2>
          <p className="text-gray-500 mt-3">
            Wherever your future takes you, we help you get there.
          </p>
        </div>

        <div ref={destinationsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {studyDestinations.map((c, i) => (
            <div
              key={c.code}
              style={{ animationDelay: destinationsVisible ? `${i * 100}ms` : "0ms" }}
              className={`group relative bg-[#F3F6FC] rounded-md py-8 px-4 flex flex-col items-center justify-center gap-1 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                destinationsVisible ? "animate-rise-up" : "opacity-0"
              }`}
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(min-width: 768px) 300px, 50vw"
              />
              <div className="absolute inset-0 bg-[#0E1E4A]/40" />
              <span className="absolute top-2 text-5xl font-extrabold select-none text-white/40">
                {c.code}
              </span>
              <span className="relative mt-8 text-base font-bold text-white">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="bg-[#EAF3FF] rounded-md px-6 py-5 flex flex-col sm:flex-row items-center gap-4">
          <svg className="w-8 h-8 text-[#1B5FAE] shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.902.434 1.346.663a6.727 6.727 0 00.551-1.607 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.667 2.25 2.25 0 002.12 0z" />
          </svg>
          <div className="w-px self-stretch bg-[#1B5FAE]/25" />
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-[#314A8A]">Not sure where to start?</p>
            <p className="text-gray-500 text-sm">Talk to one of our university counsellors and find the right path for your goals.</p>
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

      {/* Consultation Request Form */}
      <section id="request-form" className="max-w-7xl mx-auto px-6 sm:px-10 pb-16 scroll-mt-28">
        <div
          ref={formRef}
          className={`grid lg:grid-cols-[1fr_360px] gap-8 items-start ${formVisible ? "animate-rise-up" : "opacity-0"}`}
        >
          {/* Consultation Request Form */}
          <div className="bg-white rounded-md shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#314A8A] mb-2">
              Consultation Request Form
            </h2>
            <p className="text-gray-500 text-sm mb-3">
              Please fill in the details below and our team will get in touch with you.
            </p>
            <div className="h-[3px] w-12 bg-[#D9A441] rounded-full mb-8" />

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    required
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                  <div className="flex gap-2">
                    <div className="relative shrink-0">
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
                      placeholder="Enter your phone number"
                      required
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Preferred Study Country</label>
                  <CustomSelect
                    value={studyCountry}
                    onChange={setStudyCountry}
                    placeholder="Select study country"
                    options={studyDestinations.map((c) => ({ value: c.name, label: c.name }))}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">
                  Additional Notes <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us more about your goals and how we can help you..."
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E0A93B] to-[#C6862A] text-white font-bold py-3.5 rounded-md hover:opacity-90 transition disabled:opacity-60"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                {status === "sending" ? "Sending..." : "Book My Free Consultation"}
              </button>

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

              <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                Your information and secure with us.
              </p>
            </form>
          </div>

          {/* Why Book a Consultation */}
          <div className="bg-[#FBF8F2] rounded-md p-8">
            <h3 className="text-xl font-bold text-[#314A8A] mb-2">
              Why Book a Consultation?
            </h3>
            <div className="h-[3px] w-10 bg-[#D9A441] rounded-full mb-6" />

            <ul className="space-y-6">
              {whyItems.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#F3E5C8] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#B8862F]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#314A8A] text-sm mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-snug">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}