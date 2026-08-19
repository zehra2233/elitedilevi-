import Header from "../components/Header";

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia",
  "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
  "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
  "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia",
  "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China",
  "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia",
  "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
  "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo",
  "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
  "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
  "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua",
  "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
  "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
  "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Lucia", "Samoa",
  "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
  "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
  "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
  "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Türkiye", "Turkmenistan", "Tuvalu",
  "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States",
  "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
  "Zambia", "Zimbabwe",
];

const phoneCountries = [
  ["AF", "93", "Afghanistan"], ["AL", "355", "Albania"], ["DZ", "213", "Algeria"],
  ["AD", "376", "Andorra"], ["AO", "244", "Angola"], ["AR", "54", "Argentina"],
  ["AM", "374", "Armenia"], ["AU", "61", "Australia"], ["AT", "43", "Austria"],
  ["AZ", "994", "Azerbaijan"], ["BS", "1", "Bahamas"], ["BH", "973", "Bahrain"],
  ["BD", "880", "Bangladesh"], ["BB", "1", "Barbados"], ["BY", "375", "Belarus"],
  ["BE", "32", "Belgium"], ["BZ", "501", "Belize"], ["BJ", "229", "Benin"],
  ["BT", "975", "Bhutan"], ["BO", "591", "Bolivia"], ["BA", "387", "Bosnia and Herzegovina"],
  ["BW", "267", "Botswana"], ["BR", "55", "Brazil"], ["BN", "673", "Brunei"],
  ["BG", "359", "Bulgaria"], ["BF", "226", "Burkina Faso"], ["BI", "257", "Burundi"],
  ["KH", "855", "Cambodia"], ["CM", "237", "Cameroon"], ["CA", "1", "Canada"],
  ["CV", "238", "Cape Verde"], ["CF", "236", "Central African Republic"], ["TD", "235", "Chad"],
  ["CL", "56", "Chile"], ["CN", "86", "China"], ["CO", "57", "Colombia"],
  ["KM", "269", "Comoros"], ["CG", "242", "Congo"], ["CR", "506", "Costa Rica"],
  ["HR", "385", "Croatia"], ["CU", "53", "Cuba"], ["CY", "357", "Cyprus"],
  ["CZ", "420", "Czechia"], ["DK", "45", "Denmark"], ["DJ", "253", "Djibouti"],
  ["DM", "1", "Dominica"], ["DO", "1", "Dominican Republic"], ["EC", "593", "Ecuador"],
  ["EG", "20", "Egypt"], ["SV", "503", "El Salvador"], ["GQ", "240", "Equatorial Guinea"],
  ["ER", "291", "Eritrea"], ["EE", "372", "Estonia"], ["SZ", "268", "Eswatini"],
  ["ET", "251", "Ethiopia"], ["FJ", "679", "Fiji"], ["FI", "358", "Finland"],
  ["FR", "33", "France"], ["GA", "241", "Gabon"], ["GM", "220", "Gambia"],
  ["GE", "995", "Georgia"], ["DE", "49", "Germany"], ["GH", "233", "Ghana"],
  ["GR", "30", "Greece"], ["GD", "1", "Grenada"], ["GT", "502", "Guatemala"],
  ["GN", "224", "Guinea"], ["GW", "245", "Guinea-Bissau"], ["GY", "592", "Guyana"],
  ["HT", "509", "Haiti"], ["HN", "504", "Honduras"], ["HU", "36", "Hungary"],
  ["IS", "354", "Iceland"], ["IN", "91", "India"], ["ID", "62", "Indonesia"],
  ["IR", "98", "Iran"], ["IQ", "964", "Iraq"], ["IE", "353", "Ireland"],
  ["IL", "972", "Israel"], ["IT", "39", "Italy"], ["CI", "225", "Ivory Coast"],
  ["JM", "1", "Jamaica"], ["JP", "81", "Japan"], ["JO", "962", "Jordan"],
  ["KZ", "7", "Kazakhstan"], ["KE", "254", "Kenya"], ["KI", "686", "Kiribati"],
  ["XK", "383", "Kosovo"], ["KW", "965", "Kuwait"], ["KG", "996", "Kyrgyzstan"],
  ["LA", "856", "Laos"], ["LV", "371", "Latvia"], ["LB", "961", "Lebanon"],
  ["LS", "266", "Lesotho"], ["LR", "231", "Liberia"], ["LY", "218", "Libya"],
  ["LI", "423", "Liechtenstein"], ["LT", "370", "Lithuania"], ["LU", "352", "Luxembourg"],
  ["MG", "261", "Madagascar"], ["MW", "265", "Malawi"], ["MY", "60", "Malaysia"],
  ["MV", "960", "Maldives"], ["ML", "223", "Mali"], ["MT", "356", "Malta"],
  ["MH", "692", "Marshall Islands"], ["MR", "222", "Mauritania"], ["MU", "230", "Mauritius"],
  ["MX", "52", "Mexico"], ["FM", "691", "Micronesia"], ["MD", "373", "Moldova"],
  ["MC", "377", "Monaco"], ["MN", "976", "Mongolia"], ["ME", "382", "Montenegro"],
  ["MA", "212", "Morocco"], ["MZ", "258", "Mozambique"], ["MM", "95", "Myanmar"],
  ["NA", "264", "Namibia"], ["NR", "674", "Nauru"], ["NP", "977", "Nepal"],
  ["NL", "31", "Netherlands"], ["NZ", "64", "New Zealand"], ["NI", "505", "Nicaragua"],
  ["NE", "227", "Niger"], ["NG", "234", "Nigeria"], ["KP", "850", "North Korea"],
  ["MK", "389", "North Macedonia"], ["NO", "47", "Norway"], ["OM", "968", "Oman"],
  ["PK", "92", "Pakistan"], ["PW", "680", "Palau"], ["PS", "970", "Palestine"],
  ["PA", "507", "Panama"], ["PG", "675", "Papua New Guinea"], ["PY", "595", "Paraguay"],
  ["PE", "51", "Peru"], ["PH", "63", "Philippines"], ["PL", "48", "Poland"],
  ["PT", "351", "Portugal"], ["QA", "974", "Qatar"], ["RO", "40", "Romania"],
  ["RU", "7", "Russia"], ["RW", "250", "Rwanda"], ["LC", "1", "Saint Lucia"],
  ["WS", "685", "Samoa"], ["SM", "378", "San Marino"], ["SA", "966", "Saudi Arabia"],
  ["SN", "221", "Senegal"], ["RS", "381", "Serbia"], ["SC", "248", "Seychelles"],
  ["SL", "232", "Sierra Leone"], ["SG", "65", "Singapore"], ["SK", "421", "Slovakia"],
  ["SI", "386", "Slovenia"], ["SB", "677", "Solomon Islands"], ["SO", "252", "Somalia"],
  ["ZA", "27", "South Africa"], ["KR", "82", "South Korea"], ["SS", "211", "South Sudan"],
  ["ES", "34", "Spain"], ["LK", "94", "Sri Lanka"], ["SD", "249", "Sudan"],
  ["SR", "597", "Suriname"], ["SE", "46", "Sweden"], ["CH", "41", "Switzerland"],
  ["SY", "963", "Syria"], ["TW", "886", "Taiwan"], ["TJ", "992", "Tajikistan"],
  ["TZ", "255", "Tanzania"], ["TH", "66", "Thailand"], ["TL", "670", "Timor-Leste"],
  ["TG", "228", "Togo"], ["TO", "676", "Tonga"], ["TT", "1", "Trinidad and Tobago"],
  ["TN", "216", "Tunisia"], ["TR", "90", "Türkiye"], ["TM", "993", "Turkmenistan"],
  ["TV", "688", "Tuvalu"], ["UG", "256", "Uganda"], ["UA", "380", "Ukraine"],
  ["AE", "971", "United Arab Emirates"], ["GB", "44", "United Kingdom"], ["US", "1", "United States"],
  ["UY", "598", "Uruguay"], ["UZ", "998", "Uzbekistan"], ["VU", "678", "Vanuatu"],
  ["VA", "39", "Vatican City"], ["VE", "58", "Venezuela"], ["VN", "84", "Vietnam"],
  ["YE", "967", "Yemen"], ["ZM", "260", "Zambia"], ["ZW", "263", "Zimbabwe"],
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

const selectFieldClass =
  "w-full appearance-none border border-gray-200 rounded-md pl-4 pr-9 py-3 text-sm text-gray-700 focus:outline-none focus:border-[#1B5FAE] transition bg-white";

function ChevronDown() {
  return (
    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export default function ConsultationPage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#FBF3E3] via-[#FDF8EF] to-white overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(#E9D3A3 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-4">
          <p className="text-xs font-bold tracking-[0.25em] text-[#D9A441] mb-3">
            CONSULTATION
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#314A8A] leading-tight mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Book Your
            <br />
            Consultation
          </h1>
          <div className="h-[3px] w-16 bg-[#D9A441] rounded-full mb-5" />
          <p className="text-gray-600 max-w-md">
            Our expert advisors are here to guide you in choosing the right
            university and program. Get personalized support tailored to
            your goals.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 -mt-6 pb-16">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Consultation Request Form */}
          <div className="bg-white rounded-md shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#314A8A] mb-2">
              Consultation Request Form
            </h2>
            <p className="text-gray-500 text-sm mb-3">
              Please fill in the details below and our team will get in touch with you.
            </p>
            <div className="h-[3px] w-12 bg-[#D9A441] rounded-full mb-8" />

            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Email Address <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                  <div className="flex gap-2">
                    <div className="relative shrink-0">
                      <select className={`${selectFieldClass} w-28 pl-3`} defaultValue="TR-90">
                        {phoneCountries.map(([iso2, dial]) => (
                          <option key={`${iso2}-${dial}`} value={`${iso2}-${dial}`}>
                            {iso2} +{dial}
                          </option>
                        ))}
                      </select>
                      <ChevronDown />
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Country of Residence <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select className={selectFieldClass} defaultValue="">
                      <option value="" disabled>Select your country</option>
                      {countries.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                    <ChevronDown />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Nationality <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select className={selectFieldClass} defaultValue="">
                      <option value="" disabled>Select your nationality</option>
                      {countries.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                    <ChevronDown />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Preferred Study Country</label>
                  <div className="relative">
                    <select className={selectFieldClass} defaultValue="">
                      <option value="" disabled>Select study country</option>
                      <option>Türkiye</option>
                      <option>Italy</option>
                      <option>Spain</option>
                      <option>Poland</option>
                      <option>Hungary</option>
                      <option>Malaysia</option>
                    </select>
                    <ChevronDown />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Degree Level</label>
                  <div className="relative">
                    <select className={selectFieldClass} defaultValue="">
                      <option value="" disabled>Select degree level</option>
                      <option>Foundation / Language</option>
                      <option>Bachelor&apos;s</option>
                      <option>Master&apos;s</option>
                      <option>PhD</option>
                    </select>
                    <ChevronDown />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">
                    Preferred University <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter preferred university"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Current Education Level</label>
                  <div className="relative">
                    <select className={selectFieldClass} defaultValue="">
                      <option value="" disabled>Select your current level</option>
                      <option>High School</option>
                      <option>Bachelor&apos;s</option>
                      <option>Master&apos;s</option>
                      <option>Other</option>
                    </select>
                    <ChevronDown />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">
                  Additional Notes <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us more about your goals and how we can help you..."
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#E0A93B] to-[#C6862A] text-white font-bold py-3.5 rounded-md hover:opacity-90 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                Book My Free Consultation
              </button>

              <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                Your information is safe and secure with us.
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
    </main>
  );
}
