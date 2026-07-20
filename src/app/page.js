import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
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
          <div className="max-w-2xl px-10 ml-32 animate-slide-in-right">
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
      <section className="relative rounded-none w-full my-24 overflow-hidden px-10 py-16">
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
      <section className="max-w-7xl mx-auto px-10 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#314A8A] mb-4">
            Pick Your Language, Start Today
          </h2>
          <p className="text-gray-600 text-lg">
            Structured levels for every learner — from beginner to advanced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* English */}
          <div className="bg-white border-t-4 border-[#3674D6] rounded-sm shadow-2xl p-12 min-h-[420px] text-center hover:shadow-2xl transition">
            <div className="w-28 h-28 mx-auto rounded-full border-2 border-[#3674D6] ring-[12px] ring-[#3674D6]/15 flex items-center justify-center mb-6 overflow-hidden animate-pulse-scale">
              <svg viewBox="0 0 60 40" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
                <rect width="60" height="40" fill="#B22234" />
                <rect y="3.08" width="60" height="3.08" fill="#fff" />
                <rect y="9.23" width="60" height="3.08" fill="#fff" />
                <rect y="15.38" width="60" height="3.08" fill="#fff" />
                <rect y="21.54" width="60" height="3.08" fill="#fff" />
                <rect y="27.69" width="60" height="3.08" fill="#fff" />
                <rect y="33.85" width="60" height="3.08" fill="#fff" />
                <rect width="24" height="21.54" fill="#3C3B6E" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#314A8A] mb-3">English</h3>
            <p className="text-gray-600 mb-5">
              General & academic English, built to feed straight into
              TOEFL, IELTS or Pearson prep.
            </p>
            <span className="inline-block text-xs font-semibold text-white bg-[#3674D6] px-4 py-1.5 rounded-full">
              A1-C2
            </span>
          </div>

          {/* Turkish */}
          <div className="bg-white border-t-4 border-[#D63636] rounded-sm shadow-2xl p-12 min-h-[420px] text-center hover:shadow-2xl transition">
            <div className="w-28 h-28 mx-auto rounded-full border-2 border-[#D63636] ring-[12px] ring-[#D63636]/15 flex items-center justify-center mb-6 overflow-hidden animate-pulse-scale">
              <svg viewBox="0 0 60 40" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
                <rect width="60" height="40" fill="#E30A17" />
                <circle cx="24" cy="20" r="10" fill="#fff" />
                <circle cx="27.5" cy="20" r="8" fill="#E30A17" />
                <polygon
                  fill="#fff"
                  points="34,20 30.9,21 31.7,17.6 29.2,15.1 32.6,14.9 34,11.7 35.4,14.9 38.8,15.1 36.3,17.6 37.1,21"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#314A8A] mb-3">Turkey</h3>
            <p className="text-gray-600 mb-5">
              Turkish for living, working and studying in Turkey —
              everyday fluency, not just textbook grammar.
            </p>
            <span className="inline-block text-xs font-semibold text-white bg-[#D63636] px-4 py-1.5 rounded-full">
              A1-C2
            </span>
          </div>

          {/* German */}
          <div className="bg-white border-t-4 border-[#1B4332] rounded-sm shadow-2xl p-12 min-h-[420px] text-center hover:shadow-2xl transition">
            <div className="w-28 h-28 mx-auto rounded-full border-2 border-[#1B4332] ring-[12px] ring-[#1B4332]/15 flex items-center justify-center mb-6 overflow-hidden animate-pulse-scale">
              <svg viewBox="0 0 60 40" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
                <rect width="60" height="13.3" fill="#000" />
                <rect y="13.3" width="60" height="13.3" fill="#DD0000" />
                <rect y="26.6" width="60" height="13.4" fill="#FFCE00" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#314A8A] mb-3">Germany</h3>
            <p className="text-gray-600 mb-5">
              German for admission, work visas, and daily life — with
              exam-track options for certification.
            </p>
            <span className="inline-block text-xs font-semibold text-white bg-[#1B4332] px-4 py-1.5 rounded-full">
              A1-B2
            </span>
          </div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="max-w-7xl mx-auto px-10 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#314A8A] mb-4">
            Elite Dil Evi Education Programs
          </h2>
          <p className="text-gray-600 text-lg">
            Quality solutions for every language learning need — from
            juniors to adults, general courses to exam preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
          {[
            {
              title: "General English",
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
              title: "Professional Language",
              subtitle: "Business & Career Focused",
              color: "#3674D6",
              icon: (
                <>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 8.25h16.5a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-9a1.5 1.5 0 011.5-1.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 8.25V6a1.5 1.5 0 011.5-1.5h4.5A1.5 1.5 0 0115.75 6v2.25M3 12.75h18" />
                </>
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
              title: "Junior Programs",
              subtitle: "Fun & Effective Kids Courses",
              color: "#3674D6",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              ),
            },
            {
              title: "Corporate Training",
              subtitle: "Custom Programs for Companies",
              color: "#3674D6",
              icon: (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18M18.75 3v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
              ),
            },
          ].map((prog, i) => (
            <div key={i} className="rounded-sm overflow-hidden shadow-md hover:shadow-xl transition bg-white">
              <div className="relative h-36">
                <Image src="/background.png" alt={prog.title} fill className="object-cover" />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, ${prog.color}E6 35%, ${prog.color}00 75%)` }}
                />
                <div
                  className="absolute -bottom-6 left-6 w-14 h-14 rounded-full flex items-center justify-center shadow-md ring-4 ring-white"
                  style={{ backgroundColor: prog.color }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    {prog.icon}
                  </svg>
                </div>
              </div>
              <div className="pt-10 px-6 pb-6">
                <h3 className="text-xl font-bold text-[#314A8A] mb-1">{prog.title}</h3>
                <p className="text-gray-500 mb-5">{prog.subtitle}</p>
                <button
                  className="text-sm font-semibold px-4 py-2 rounded border hover:bg-gray-50 transition"
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
      <section className="max-w-7xl mx-auto px-10 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#3674D6] font-semibold mb-3">About Elite Dil Evi</p>
          <h2 className="text-4xl font-bold text-[#314A8A] mb-6 leading-snug">
            Your Trusted Partner in Language Learning
          </h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Elite Dil Evi is dedicated to helping students of all ages achieve
            fluency in German, English, and Turkish. With modern teaching
            methods, expert instructors, and internationally recognized
            certification, we prepare our students not just to learn a
            language — but to use it confidently in real life, in exams, and
            on the path to studying abroad.
          </p>
          <ul className="space-y-3 text-[#314A8A] font-medium">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#3674D6]" />
              Courses for Junior & Adult learners
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#3674D6]" />
              Dedicated Exam Preparation Program
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#3674D6]" />
              Internationally Standardized Curriculum
            </li>
          </ul>
        </div>

        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/background.png"
            alt="Elite Dil Evi Students"
            fill
            className="object-cover object-top"
          />
        </div>
      </section>

      {/* Exam Preparation Section */}
      <section className="max-w-7xl mx-auto px-10 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
          <Image
            src="/background.png"
            alt="Exam Preparation"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="order-1 md:order-2">
          <p className="text-[#3674D6] font-semibold mb-3">Exam Preparation</p>
          <h2 className="text-4xl font-bold text-[#314A8A] mb-6 leading-snug">
            Ace TOEFL, IELTS & German Exams
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Our exam preparation program is designed to build the exact
            skills and confidence you need — with focused practice, mock
            tests, and expert guidance from instructors who know the exams
            inside and out.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[#EAF0FB] rounded-xl px-6 py-4 text-center font-semibold text-[#314A8A]">
              TOEFL
            </div>
            <div className="bg-[#EAF0FB] rounded-xl px-6 py-4 text-center font-semibold text-[#314A8A]">
              IELTS
            </div>
            <div className="bg-[#EAF0FB] rounded-xl px-6 py-4 text-center font-semibold text-[#314A8A]">
              Goethe
            </div>
            <div className="bg-[#EAF0FB] rounded-xl px-6 py-4 text-center font-semibold text-[#314A8A]">
              Pearson ÖSD
            </div>
          </div>

          <Link
            href="/exams"
            className="inline-block bg-[#3674D6] text-white font-bold px-8 py-4 rounded hover:bg-[#0E4396] transition"
          >
            Explore Exam Prep →
          </Link>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#3674D6] font-semibold mb-3">Our Process</p>
            <h2 className="text-4xl font-bold text-[#314A8A] mb-4">
              From Language Level to Acceptance Letter
            </h2>
            <p className="text-gray-600 text-lg">
              We handle the parts that usually stall an application — not just the language.
            </p>
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

      {/* Stats / Trust Bar */}
      <section className="bg-[#314A8A] py-16">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <p className="text-4xl font-bold mb-2">3</p>
            <p className="text-sm opacity-80">Languages Taught</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">7–70</p>
            <p className="text-sm opacity-80">Ages Welcome</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">4+</p>
            <p className="text-sm opacity-80">Exam Prep Tracks</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">100%</p>
            <p className="text-sm opacity-80">Certified Instructors</p>
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-10 text-center">
          <h2 className="text-2xl font-bold text-[#314A8A] mb-10">
            Some of Our Partners
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5"].map((name, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl px-10 py-6 text-gray-400 font-semibold"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-10 py-24 text-center">
        <h2 className="text-4xl font-bold text-[#314A8A] mb-4">
          Ready to Start Your Language Journey?
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
          Book a free placement test today and find the course that&apos;s
          right for you.
        </p>
        <button className="bg-[#3674D6] text-white text-lg font-bold px-10 py-5 rounded hover:bg-[#0E4396] transition">
          Book Free Placement Test →
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E1E4A] text-white py-16">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Image
              src="/elite-dil-evi-logo-transparent.png"
              alt="Elite Dil Evi"
              width={70}
              height={70}
              className="mb-4"
            />
            <p className="text-sm opacity-70">
              Shaping futures through language, one course at a time.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Courses</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/courses/german">German</Link></li>
              <li><Link href="/courses/english">English</Link></li>
              <li><Link href="/courses/turkish">Turkish</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Exam Preparation</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/exams/toefl">TOEFL</Link></li>
              <li><Link href="/exams/ielts">IELTS</Link></li>
              <li><Link href="/exams/german-exams">German Exams</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>📞 0505 XXX XX XX</li>
              <li>📍 Your Address, Istanbul</li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs opacity-50 mt-12">
          © {new Date().getFullYear()} Elite Dil Evi. All rights reserved.
        </div>
      </footer>

    </main>
  );
}