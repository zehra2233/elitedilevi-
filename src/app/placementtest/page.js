import Header from "../components/Header";
import Footer from "../components/Footer";

const phoneCountries = [
  ["TR", "90", "Turkey"],
  ["US", "1", "United States"],
  ["GB", "44", "United Kingdom"],
  ["DE", "49", "Germany"],
  ["FR", "33", "France"],
];

const selectFieldClass =
  "w-full appearance-none border border-gray-200 rounded-md pl-4 pr-9 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1B5FAE] transition bg-white";

function ChevronDown() {
  return (
    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function PlacementTestPage() {
  return (
    <main>
      <Header />

      <section className="max-w-6xl mx-auto px-6 sm:px-10 pt-10 pb-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#314A8A]">Book Your Free Placement Test</h1>
        </div>

        <div className="grid lg:grid-cols-[1fr_340px] gap-6 items-start">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {/* Step 1 - Your Information */}
            <div className="bg-white border border-gray-100 rounded-md shadow-[0_0_25px_rgba(0,0,0,0.08)] p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-6 h-6 rounded-full bg-[#1B5FAE] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <h2 className="font-bold text-[#314A8A]">Your Information</h2>
              </div>

              <div className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>

                <div className="flex gap-2">
                  <div className="relative shrink-0">
                    <select className={`${selectFieldClass} w-24 pl-3`} defaultValue="TR-90">
                      {phoneCountries.map(([iso2, dial]) => (
                        <option key={`${iso2}-${dial}`} value={`${iso2}-${dial}`}>
                          +{dial}
                        </option>
                      ))}
                    </select>
                    <ChevronDown />
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Preferred Language
                  </label>
                  <div className="relative">
                    <select className={selectFieldClass} defaultValue="">
                      <option value="" disabled>Select a language</option>
                      <option>German</option>
                      <option>English</option>
                      <option>Turkish</option>
                    </select>
                    <ChevronDown />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                    Preferred Test Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full border border-gray-200 rounded-md pl-4 pr-9 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1B5FAE] transition bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 - Payment Details */}
            <div className="bg-white border border-gray-100 rounded-md shadow-[0_0_25px_rgba(0,0,0,0.08)] p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-6 h-6 rounded-full bg-[#1B5FAE] text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <h2 className="font-bold text-[#314A8A]">Payment Details</h2>
              </div>

              <p className="text-sm font-semibold text-[#314A8A] mb-2">
                Credit/Debit Card
              </p>

              <div className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Name on card"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="1234 5678 9012 3456"
                      className="w-full border border-gray-200 rounded-md px-4 py-3 pr-10 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                    />
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-9-9v11.25A2.25 2.25 0 004.5 20.25h15A2.25 2.25 0 0021.75 18V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25z" />
                    </svg>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="flex items-center justify-center h-6 px-2 rounded bg-[#1A1F71] text-white font-black italic text-[10px]">
                      VISA
                    </span>
                    <span className="flex items-center justify-center h-6 w-9 rounded bg-gray-100">
                      <span className="flex items-center">
                        <span className="w-3 h-3 rounded-full bg-[#EB001B] -mr-1.5" />
                        <span className="w-3 h-3 rounded-full bg-[#F79E1B] opacity-80" />
                      </span>
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                    />
                    <div className="relative">
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="CVV"
                        className="w-full border border-gray-200 rounded-md px-4 py-3 pr-9 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                      />
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                    </div>
                  </div>
                </div>

              <button
                type="submit"
                className="w-full mt-6 inline-flex items-center justify-center gap-2 bg-[#1B5FAE] text-white font-bold py-3.5 rounded-md hover:bg-[#0E4396] transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                Pay 1,000 TL and Book Test
              </button>

              <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-3">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                Your payment is secure and encrypted.
              </p>
              <p className="text-center text-xs text-gray-400 mt-1">
                By continuing, you agree to our{" "}
                <a href="#" className="text-[#1B5FAE] font-semibold hover:underline">Terms & Conditions</a>{" "}
                and <a href="#" className="text-[#1B5FAE] font-semibold hover:underline">Privacy Policy</a>.
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            {/* Good news */}
            <div className="relative overflow-hidden bg-[#FDF6E3] border border-[#F3E1A8] rounded-md p-6 text-center">
              <div className="w-11 h-11 rounded-full bg-[#1B5FAE] flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12" />
                </svg>
              </div>
              <p className="font-bold text-[#314A8A] tracking-wide text-lg mb-2">GOOD NEWS!</p>
              <p className="text-sm text-gray-600 mb-3">
                When you decide which level to enroll in, the{" "}
                <span className="font-bold text-[#314A8A]">1,000 TL placement test fee</span>
              </p>
              <p className="bg-[#FCE47A] font-bold text-sm text-[#0E1E4A] px-3 py-2 rounded">
                WILL BE DEDUCTED FROM YOUR TOTAL COURSE FEE.
              </p>
            </div>

            {/* Secure payment */}
            <div className="bg-white border border-gray-100 rounded-md shadow-[0_0_25px_rgba(0,0,0,0.08)] p-6">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-[#1B5FAE]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <h3 className="font-bold text-[#314A8A]">Secure Payment</h3>
              </div>
              <p className="text-gray-500 text-sm mb-4">
                Your card information is protected with industry-standard encryption.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[#1A1F71] font-black italic text-2xl">VISA</span>
                <span className="flex items-center">
                  <span className="w-7 h-7 rounded-full bg-[#EB001B] -mr-2.5" />
                  <span className="w-7 h-7 rounded-full bg-[#F79E1B] opacity-80" />
                </span>
                <span className="text-[#0E1E4A] font-bold text-xl">troy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
