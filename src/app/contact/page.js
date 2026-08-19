import Image from "next/image";
import Header from "../components/Header";

const officeAddress =
  "Elite Dil Kursu - Elite Language House, Cumhuriyet, Nazım Hikmet Blv. No:54, 34512 Esenyurt/İstanbul";

const info = [
  {
    label: "Our Office",
    value: "Cumhuriyet, Nazım Hikmet Blv. No:54, Esenyurt/İstanbul",
    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  },
  {
    label: "Phone",
    value: "+90 544 406 72 22",
    icon: "M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z",
  },
  {
    label: "Email",
    value: "info@elitedilevi.com",
    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
  },
  {
    label: "Working Hours",
    value: "Monday – Saturday\n9:00 AM – 8:00 PM",
    icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function ContactPage() {
  return (
    <main>
      <Header />

      <section className="relative bg-gradient-to-br from-[#EAF2FF] via-[#F2F7FF] to-white pt-4 pb-20 overflow-hidden">
        <Image
          src="/contactt.png"
          alt=""
          fill
          className="object-cover object-[right_65%] opacity-80"
          sizes="100vw"
        />
        <div className="relative max-w-3xl px-6 sm:px-10 md:pl-16 lg:pl-24 text-center md:text-left">
          <p className="text-xs font-bold tracking-[0.25em] text-[#1B5FAE] mb-3">
            GET IN TOUCH
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0E1E4A] mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Contact Us
          </h1>
          <div className="h-[3px] w-16 bg-[#D9A441] rounded-full mb-5 mx-auto md:mx-0" />
          <p className="text-gray-600 max-w-md mx-auto md:mx-0">
            We&apos;re here to help you every step of the way. Reach out to us
            for any inquiries or support.
          </p>
        </div>
      </section>

      <section className="relative z-10 -mt-12 pb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-[340px_1fr] gap-8">
          {/* Info card */}
          <div className="bg-white rounded-md shadow-xl p-8">
            <ul className="divide-y divide-gray-100">
              {info.map((item) => (
                <li key={item.label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="w-11 h-11 rounded-full bg-[#EAF2FF] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#1B5FAE]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#0E1E4A] text-sm">{item.label}</p>
                    <p className="text-gray-500 text-sm whitespace-pre-line">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Message form */}
          <div className="bg-white rounded-md shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#0E1E4A] text-center mb-2">
              Send us a Message
            </h2>
            <div className="h-[3px] w-12 bg-[#D9A441] rounded-full mb-8 mx-auto" />

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-200 rounded-md pl-11 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-200 rounded-md pl-11 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-200 rounded-md pl-11 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full border border-gray-200 rounded-md pl-11 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>
              </div>

              <div className="relative">
                <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
                </svg>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full border border-gray-200 rounded-md pl-11 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#1B5FAE] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#0E4396] transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="relative bg-white rounded-md shadow-xl mt-8 overflow-hidden">
          <iframe
            title="Elite Dil Evi location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`}
            className="w-full h-80 border-0"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white rounded-md shadow-lg px-5 py-4 flex items-start gap-3 sm:max-w-xs">
            <svg className="w-5 h-5 text-[#1B5FAE] shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            <div>
              <p className="font-bold text-[#0E1E4A] text-sm">Elite Dil Evi Office</p>
              <p className="text-gray-500 text-xs mb-1">Esenyurt, İstanbul, Türkiye</p>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1B5FAE] text-xs font-semibold hover:underline"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
}
