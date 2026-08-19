import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

export default function TOEFLPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative h-auto lg:h-[300px] overflow-hidden bg-white">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="relative z-10 w-full lg:w-[600px] shrink-0 bg-white px-6 sm:px-10 md:pl-16 lg:pl-32 py-14 lg:py-0 flex flex-col justify-center overflow-hidden">
            <div className="animate-slide-in-right mt-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#314A8A] leading-tight mb-3">
                TOEFL Exam Preparation
              </h1>
              <p className="text-[#1B5FAE] font-semibold mb-4">
                iBT Test Preparation
              </p>
              <p className="text-gray-600 max-w-md mb-8">
                Get exam-ready with focused TOEFL preparation covering all
                four skills. Learn proven strategies, practice with real
                exam formats, and build the confidence to reach your
                target score.
              </p>
            </div>
          </div>

          <div className="relative w-full lg:w-auto lg:flex-1 min-w-0 h-64 sm:h-80 lg:h-[300px]">
            <Image
              src="/exam.jpg"
              alt="TOEFL Exam Preparation"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-40 sm:w-64 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white rounded-2xl shadow-xl px-4 pt-2 pb-4 flex flex-col items-center text-center">
              <Image
                src="/TOEFLBLUE.png"
                alt="TOEFL"
                width={220}
                height={82}
                className="h-14 w-auto object-contain"
              />
              <div className="w-16 h-[2px] bg-gray-200 my-1" />
              <span className="text-base font-bold text-[#314A8A] leading-snug">Official Test<br />Preparation</span>
            </div>
          </div>
        </div>
      </section>

      {/* TOEFL Course Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-16 lg:-translate-x-8">
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
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Our TOEFL course is entirely focused on preparing for the TOEFL exam and is designed with Reading, Listening, Speaking, and Writing programs. All TOEFL lessons are taught by experienced instructors specialized in academic English preparation. Our preparation programs, offered by our experienced academic staff, are divided into two categories: one-on-one and group training. You can find the content of our training and detailed information below.
            </p>

            <h2 className="text-2xl font-bold text-[#314A8A] mb-3">What is the TOEFL exam?</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              TOEFL (Test of English as a Foreign Language) is a globally recognized language proficiency test administered by ETS, accepted by more than 12,000 institutions in over 160 countries. Participants take the TOEFL exam primarily for university admissions, but also for scholarship applications, visa processes, and professional certification. With the TOEFL exam, you will have the opportunity to study in the USA, Canada, UK, Australia, and many other countries where English-medium education is offered.
            </p>

            <h2 className="text-2xl font-bold text-[#314A8A] mb-3">What Are The Types And Content Of The TOEFL Exam?</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              The TOEFL exam is offered in different formats depending on your needs and location:
            </p>

            <div className="flex flex-col gap-6 mb-8">
              <div>
                <h3 className="font-bold text-[#314A8A] text-2xl mb-1.5">
                  TOEFL iBT (Internet-Based Test)
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  TOEFL iBT is the most widely accepted version of the exam and is delivered entirely online at authorized test centers or via at-home testing. It measures all four language skills — Reading, Listening, Speaking, and Writing — and is scored on a scale of 0 to 120. This is the version required by the vast majority of universities worldwide.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#314A8A] text-2xl mb-1.5">
                  TOEFL iBT Home Edition
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  The Home Edition offers the same content, format, and scoring as the standard TOEFL iBT, but can be taken from home under remote proctoring. It is a convenient option for participants who do not have access to a nearby test center or prefer a flexible testing environment.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#314A8A] text-2xl mb-1.5">
                  TOEFL Essentials
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  TOEFL Essentials is a shorter, more affordable version of the exam that still tests Reading, Listening, Speaking, and Writing, along with an additional section on everyday communication skills. It is increasingly accepted by universities as an alternative to the standard TOEFL iBT.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-[#314A8A] text-2xl mb-1.5">
                  TOEFL ITP (Institutional Testing Program)
                </h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  TOEFL ITP is generally used for institutional purposes such as placement testing, scholarship screening, or internal school assessments rather than direct university admissions. It measures Listening, Structure and Written Expression, and Reading, but does not include a Speaking section.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#314A8A] mb-3">Institutions That Accept TOEFL And Its Validity Period</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              TOEFL is recognized by more than 12,000 institutions in over 160 countries, and the test is valid for 2 years.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              TOEFL scores are accepted by top universities and colleges worldwide, as well as by government agencies, scholarship programs, and professional licensing bodies. You can find information on which institutions in Turkey and around the world accept TOEFL, along with minimum required scores for admission.
            </p>

            <h2 className="text-2xl font-bold text-[#314A8A] mb-3">TOEFL Preparation Program</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              Our TOEFL preparation courses offer separate study programs for each section of the exam. The strategies provided by our experienced instructors for each section are of great benefit in your exam preparation, with particular focus on academic vocabulary, integrated tasks, and time management under exam conditions.
            </p>

            <h2 className="text-2xl font-bold text-[#314A8A] mb-3">TOEFL Course One-on-One Training Program</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              Our one-on-one training programs are completely customized to the individual needs of the participant and the areas where they feel they need improvement. Before starting the one-on-one training program, after a level assessment and needs analysis, your target TOEFL score and the score you might achieve during the level assessment will be used to calculate how many hours of lessons you will need, and your plan will be made accordingly. Lesson days and times are also determined entirely according to your and the instructor&apos;s availability, providing you with flexibility in terms of days and times.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              The goal of this training program is to help you reach higher scores using the technical tips provided in class and the extra support given by our instructors to help you outside the class.
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
                    <option value="one-on-one">One-on-One TOEFL Preparation</option>
                    <option value="essentials">TOEFL Essentials Preparation</option>
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

      <Footer />
    </main>
  );
}
