import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    num: "01",
    title: "Application Preparation",
    desc: "We guide you through the university application process and requirements.",
  },
  {
    num: "02",
    title: "Document Preparation",
    desc: "Support with preparing and organizing the required academic and personal documents.",
  },
  {
    num: "03",
    title: "University Application Submission",
    desc: "We assist with submitting applications to suitable universities.",
  },
  {
    num: "04",
    title: "Application Follow-Up",
    desc: "We monitor the application process and keep you informed about updates.",
  },
  {
    num: "05",
    title: "Admission Offer Support",
    desc: "Guidance after receiving your acceptance or admission offer.",
  },
  {
    num: "06",
    title: "Enrollment Assistance",
    desc: "Support with the final steps needed to complete your university enrollment.",
  },
];

const steps = [
  { num: "01", title: "Consultation" },
  { num: "02", title: "University Selection" },
  { num: "03", title: "Document Preparation" },
  { num: "04", title: "Application Submission" },
  { num: "05", title: "Admission Result" },
  { num: "06", title: "Enrollment" },
];

export default function AdmissionServicesPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative h-auto lg:h-[300px] overflow-hidden bg-white">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="relative z-10 w-full lg:w-[600px] shrink-0 bg-white px-6 sm:px-10 md:pl-16 lg:pl-32 py-14 lg:py-0 flex flex-col justify-center overflow-hidden">
            <div className="animate-slide-in-right">
              <p className="text-base sm:text-lg text-[#1B5FAE] mb-3">
                Admission Services
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#314A8A] leading-tight mb-4">
                Your University<br />
                Application, Made Simple
              </h1>
              <p className="text-sm sm:text-base text-[#314A8A] max-w-md mb-8">
                From document preparation to application submission, we
                support you throughout the admission process.
              </p>
              <Link
                href="#services"
                className="bg-[#1B5FAE] text-white text-sm sm:text-base font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-[#0E4396] transition"
              >
                Start Your Application →
              </Link>
            </div>
          </div>

          <div className="relative w-full lg:w-auto lg:flex-1 min-w-0 h-64 sm:h-80 lg:h-[300px]">
            <Image
              src="/unii.jpg"
              alt="Admission Services"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-40 sm:w-64 bg-gradient-to-r from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* Our Admission Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#314A8A]">
            Our Admission Services
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.num}
              className="bg-[#F7FAFF] rounded-md p-6 shadow-[0_8px_24px_rgba(15,30,74,0.08)]"
            >
              <span className="text-sm font-bold text-[#1B5FAE]">{s.num} —</span>
              <h3 className="font-bold text-[#0E1E4A] text-lg mt-1 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#F7FAFF] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#314A8A] leading-tight">
              How It Works
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-6">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-center">
                <div className="bg-white rounded-md shadow-sm px-5 py-4 flex items-center gap-3 min-w-[190px]">
                  <span className="text-xl font-bold text-[#1B5FAE]/40">{step.num}</span>
                  <span className="font-bold text-[#0E1E4A] text-sm">{step.title}</span>
                </div>
                {i < steps.length - 1 && (
                  <svg className="w-5 h-5 text-[#1B5FAE]/40 mx-1 hidden sm:block" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="bg-[#EAF3FF] rounded-md px-6 py-5 flex flex-col sm:flex-row items-center gap-4">
          <svg className="w-8 h-8 text-[#1B5FAE] shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.902.434 1.346.663a6.727 6.727 0 00.551-1.607 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.667 2.25 2.25 0 002.12 0z" />
          </svg>
          <div className="w-px self-stretch bg-[#1B5FAE]/25" />
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-[#314A8A]">Ready to start your application?</p>
            <p className="text-gray-500 text-sm">Not sure which university is right for you yet? Visit our University Guidance page first.</p>
          </div>
          <Link
            href="/uniguide"
            className="inline-flex items-center gap-2 bg-white text-[#1B5FAE] border border-[#1B5FAE] font-semibold px-5 py-2.5 rounded hover:bg-[#1B5FAE] hover:text-white transition shrink-0"
          >
            University Guidance →
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
