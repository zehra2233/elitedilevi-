import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const otherPages = [
  { label: "English (Adults)", href: "/courses/english/adults" },
  { label: "English (Junior)", href: "/courses/english/junior" },
  { label: "German Courses", href: "/courses/german" },
  { label: "Turkish Courses", href: "/courses/turkish" },
  { label: "General Courses", href: "/general" },
  { label: "Private Lessons", href: "/private", current: true },
];

const languages = [
  {
    title: "German",
    color: "#1B5FAE",
    href: "/private/german",
    flag: "germany",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
  },
  {
    title: "English",
    color: "#1B5FAE",
    href: "/private/english",
    flag: "uk",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
  },
  {
    title: "Turkish",
    color: "#1B5FAE",
    href: "/private/turkish",
    flag: "turkey",
    levels: ["A1", "A2", "B1", "B2", "C1", "C2"],
  },
];

function Flag({ type }) {
  if (type === "germany") {
    return (
      <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <rect width="30" height="20" fill="#000000" />
        <rect width="30" height="13.33" y="6.67" fill="#DD0000" />
        <rect width="30" height="6.67" y="13.33" fill="#FFCE00" />
      </svg>
    );
  }
  if (type === "uk") {
    return (
      <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
        <rect width="30" height="20" fill="#00247D" />
        <path d="M0,0 L30,20 M30,0 L0,20" stroke="#FFFFFF" strokeWidth="4" />
        <path d="M0,0 L30,20 M30,0 L0,20" stroke="#CF142B" strokeWidth="2" />
        <path d="M15,0 V20 M0,10 H30" stroke="#FFFFFF" strokeWidth="6.5" />
        <path d="M15,0 V20 M0,10 H30" stroke="#CF142B" strokeWidth="4" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 30 20" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="12" cy="10" r="6" fill="#FFFFFF" />
      <circle cx="13.4" cy="10" r="5" fill="#E30A17" />
      <polygon
        points="20.5,7.2 21.3,9.6 23.8,9.6 21.8,11.1 22.5,13.5 20.5,12 18.5,13.5 19.2,11.1 17.2,9.6 19.7,9.6"
        fill="#FFFFFF"
      />
    </svg>
  );
}

const reasons = [
  {
    title: "Personalized Learning",
    desc: "Lessons are tailored to your goals, needs, and schedule.",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
  },
  {
    title: "One-on-One Attention",
    desc: "Maximum focus and faster progress with your instructor.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    title: "Flexible Scheduling",
    desc: "Choose your preferred days, times and lesson frequency.",
    icon: "M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Native & Certified Instructors",
    desc: "Learn from experienced teachers who care.",
    icon: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
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

export default function PrivateLessonsPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative h-auto lg:h-[300px] overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row">
          <div className="relative z-10 w-full lg:w-[600px] shrink-0 bg-white px-6 sm:px-10 md:pl-16 lg:pl-32 py-14 lg:py-0 flex flex-col justify-center overflow-hidden">
            <div className="animate-slide-in-right">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#314A8A] leading-tight mb-3 lg:whitespace-nowrap">
                Private Lessons Built<br />
                Around You
              </h1>
              <p className="text-[#1B5FAE] font-semibold mb-4">
                One-on-One Personalized Classes
              </p>
              <p className="text-gray-600 max-w-md mb-8">
                Personalized learning designed around your goals, needs, and
                schedule.
              </p>
            </div>
          </div>

          <div className="relative w-full lg:w-auto lg:flex-1 min-w-0 h-64 sm:h-80 lg:h-[300px]">
            <Image
              src="/privateenglish.png"
              alt="Private Lessons"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-40 sm:w-64 bg-gradient-to-r from-white to-transparent" />
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* About Private Courses */}
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
              Elite Dil Evi offers private language courses in German, English, and Turkish, providing personalized one-to-one instruction designed around each student&apos;s individual goals, level, and learning pace. With the full attention of a certified instructor, students can focus on the areas they need most, whether that is speaking, grammar, pronunciation, exam preparation, or everyday communication.
            </p>

            <div className="flex items-center gap-2 mb-3">
              <svg className="w-9 h-9 text-[#1B5FAE] shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.964 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-[#314A8A]">Private Courses</h2>
            </div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Our Private language courses are aligned with the CEFR framework, from A1 to C2, with lessons tailored to each student&apos;s specific needs and objectives. Students can choose between German, English, and Turkish and receive a personalized learning plan based on their placement test results and goals. The flexible structure allows students to progress at their own pace while receiving continuous feedback and guidance from certified instructors using quality, official course materials.

Private classes are ideal for students who prefer a more focused learning environment, have specific language goals, need flexible scheduling, or want to make faster progress through personalized instruction.
            </p>
          </div>
        </div>
      </section>

      {/* Choose your language */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#314A8A] mb-3">
            Choose Your Language
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {languages.map((lang) => (
            <div
              key={lang.title}
              className="rounded-md p-8 text-center bg-[#F7FAFF] shadow-[0_8px_24px_rgba(15,30,74,0.15)]"
            >
              <div className="w-20 h-20 rounded-full mx-auto mb-5 overflow-hidden ring-2 ring-white shadow-sm">
                <Flag type={lang.flag} />
              </div>
              <h3 className="font-bold text-lg text-[#0E1E4A] mb-2">{lang.title}</h3>
              <p className="text-gray-500 text-sm mb-6">
                Private lessons tailored for all levels from A1 to C2.
              </p>
              <Link
                href={lang.href}
                className="inline-flex items-center justify-center gap-2 bg-[#1B5FAE] text-white text-sm font-semibold px-5 py-2.5 rounded w-full transition hover:bg-[#0E4396]"
              >
                View Private Lessons →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Private Lessons */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 pb-16">
        <div className="bg-[#F7FAFF] rounded-md p-8">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-[#314A8A] mb-8">
            Why Choose Private Lessons?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full border-2 border-[#1B5FAE] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#1B5FAE]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={r.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#314A8A] text-sm">{r.title}</h3>
                  <p className="text-gray-500 text-xs">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Preparation */}
      <section className="w-full pb-8">
        <div className="bg-[#0B1B4D] px-6 sm:px-10 pt-8 pb-4">
          <h2 className="text-lg font-bold tracking-wide text-white uppercase mb-2">
            Exam Preparation
          </h2>
          <div className="h-[3px] w-10 bg-[#D9A441] rounded-full mb-3" />
          <p className="text-white/70 text-base mb-4">
            Our courses follow the curricula of internationally recognized
            German and English language examinations.
          </p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            <Image
              src="/Logo_Goethe-Institut.png"
              alt="Goethe-Institut"
              width={130}
              height={60}
              className="h-20 w-auto object-contain"
            />
            <Image
              src="/oosd.png"
              alt="ÖSD"
              width={110}
              height={70}
              className="h-40 w-auto object-contain -ml-16"
            />
            <Image
              src="/telcc.webp"
              alt="telc"
              width={140}
              height={84}
              className="h-20 w-auto object-contain -ml-16"
            />
            <Image
              src="/toefl.png"
              alt="TOEFL"
              width={130}
              height={60}
              className="h-24 w-auto object-contain"
            />
            <Image
              src="/ieltss.png"
              alt="IELTS"
              width={130}
              height={60}
              className="h-28 w-auto object-contain"
            />
            <Image
              src="/ptee.png"
              alt="Pearson"
              width={160}
              height={60}
              className="h-32 w-auto object-contain"
            />
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
              <div className="relative">
                <select className={selectFieldClass} defaultValue="">
                  <option value="" disabled>Please select</option>
                  <option value="online">Online Private Lessons</option>
                  <option value="in-person">In-Person Private Lessons</option>
                  <option value="exam">Exam-Focused Private Lessons</option>
                </select>
                <ChevronDown />
              </div>
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

      {/* CTA */}
      <Footer />
    </main>
  );
}
