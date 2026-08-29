"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { API_BASE_URL } from "../../lib/api";

const selectStyles = {
  control: (base, state) => ({
    ...base,
    minHeight: "46px",
    borderRadius: "0.375rem",
    borderColor: state.isFocused ? "#1B5FAE" : "#e5e7eb",
    boxShadow: "none",
    "&:hover": { borderColor: state.isFocused ? "#1B5FAE" : "#e5e7eb" },
  }),
  valueContainer: (base) => ({ ...base, padding: "2px 14px" }),
  placeholder: (base) => ({ ...base, color: "#9ca3af", fontSize: "0.875rem" }),
  singleValue: (base) => ({ ...base, color: "#374151", fontSize: "0.875rem" }),
  input: (base) => ({ ...base, fontSize: "0.875rem", color: "#374151" }),
  indicatorSeparator: () => ({ display: "none" }),
  dropdownIndicator: (base) => ({ ...base, color: "#9ca3af", padding: "0 10px" }),
  menu: (base) => ({
    ...base,
    borderRadius: "0.375rem",
    overflow: "hidden",
    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
    zIndex: 30,
  }),
  option: (base, state) => ({
    ...base,
    fontSize: "0.875rem",
    padding: "10px 16px",
    backgroundColor: state.isSelected ? "#f9fafb" : state.isFocused ? "#f9fafb" : "white",
    color: state.isSelected ? "#1B5FAE" : "#374151",
    fontWeight: state.isSelected ? 600 : 400,
  }),
};

const phoneSelectStyles = {
  ...selectStyles,
  valueContainer: (base) => ({ ...base, padding: "2px 8px" }),
};

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

const countryOptions = countries.map((c) => ({ value: c, label: c }));

const phoneCountryOptions = phoneCountries.map(([iso2, dial]) => ({
  value: `${iso2}-${dial}`,
  label: `${iso2} +${dial}`,
}));

const courseOptions = [
  "German Courses",
  "English (Adults)",
  "English (Junior)",
  "Turkish Courses",
  "Online Courses",
  "Private Lessons",
  "Exam Preparation",
].map((c) => ({ value: c, label: c }));

const levelOptions = [
  "Beginner (A1)",
  "Elementary (A2)",
  "Intermediate (B1)",
  "Upper-Intermediate (B2)",
  "Advanced (C1)",
  "Proficient (C2)",
  "Not sure yet",
].map((l) => ({ value: l, label: l }));

const whyItems = [
  {
    title: "Certified Instructors",
    desc: "Learn from experienced, qualified teachers in every language track.",
    icon: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    title: "Small Group Classes",
    desc: "Stay motivated and get more speaking practice in every session.",
    icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
  },
  {
    title: "Flexible Scheduling",
    desc: "Choose class days and times that fit around your routine.",
    icon: "M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Official Certificate",
    desc: "Receive a certificate recognizing your progress upon completion.",
    icon: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function RegistrationPage() {
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      phoneCountry: phoneCountryOptions.find((o) => o.value === "TR-90"),
      residenceCountry: null,
      course: null,
      level: null,
      notes: "",
    },
  });

  const onSubmit = async (data) => {
    setStatus("sending");
    setErrorMessage("");

    const dialCode = data.phoneCountry?.value?.split("-")[1] || "90";

    try {
      const res = await fetch(`${API_BASE_URL}/api/registrations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: data.fullName,
          email: data.email,
          phone_country_code: `+${dialCode}`,
          phone: data.phone,
          residence_country: data.residenceCountry?.value || "",
          course: data.course?.value || "",
          level: data.level?.value || "",
          notes: data.notes,
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Something went wrong");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err.message);
    }
  };

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#EAF3FF] via-[#F3F8FF] to-white overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(#BFD9F5 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-4">
          <p className="text-xs font-bold tracking-[0.25em] text-[#1B5FAE] mb-3">
            REGISTRATION
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#314A8A] leading-tight mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Register for a
            <br />
            Course
          </h1>
          <div className="h-[3px] w-16 bg-[#D9A441] rounded-full mb-5" />
          <p className="text-gray-600 max-w-md">
            Ready to start learning? Fill out the form below and our team
            will contact you to complete your registration.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 -mt-6 pb-16">
        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
          {/* Registration Form */}
          <div className="bg-white rounded-md shadow-xl p-8">
            <h2 className="text-2xl font-bold text-[#314A8A] mb-2">
              Course Registration Form
            </h2>
            <p className="text-gray-500 text-sm mb-3">
              Please fill in the details below and our team will get in touch with you.
            </p>
            <div className="h-[3px] w-12 bg-[#D9A441] rounded-full mb-8" />

            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    {...register("fullName", { required: true })}
                    placeholder="Enter your full name"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-xs text-red-500">Full name is required.</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Email Address</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email address"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                  <div className="flex gap-2">
                    <div className="w-28 shrink-0">
                      <Controller
                        name="phoneCountry"
                        control={control}
                        render={({ field }) => (
                          <Select
                            {...field}
                            instanceId="phone-country"
                            options={phoneCountryOptions}
                            styles={phoneSelectStyles}
                            isSearchable={false}
                          />
                        )}
                      />
                    </div>
                    <input
                      type="tel"
                      {...register("phone", { required: true })}
                      placeholder="Enter your phone number"
                      className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">Phone number is required.</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Country of Residence</label>
                  <Controller
                    name="residenceCountry"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        instanceId="residence-country"
                        placeholder="Select your country"
                        options={countryOptions}
                        styles={selectStyles}
                      />
                    )}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">Course <span className="text-red-500">*</span></label>
                  <Controller
                    name="course"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        instanceId="course"
                        placeholder="Select a course"
                        options={courseOptions}
                        styles={selectStyles}
                      />
                    )}
                  />
                  {errors.course && (
                    <p className="mt-1 text-xs text-red-500">Please select a course.</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">
                    Current Level <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="level"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select
                        {...field}
                        instanceId="level"
                        placeholder="Select your level"
                        options={levelOptions}
                        styles={selectStyles}
                      />
                    )}
                  />
                  {errors.level && (
                    <p className="mt-1 text-xs text-red-500">Please select your level.</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#314A8A] mb-1.5">
                  Additional Notes <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  rows={4}
                  {...register("notes")}
                  placeholder="Tell us more about your goals and how we can help you..."
                  className="w-full border border-gray-200 rounded-md px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1B5FAE] transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1B5FAE] text-white font-bold py-3.5 rounded-md hover:bg-[#0E4396] transition disabled:opacity-60"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                {status === "sending" ? "Sending..." : "Submit Registration"}
              </button>

              {status === "success" && (
                <p className="text-center text-sm text-green-600 font-medium">
                  Thank you! Your registration has been received. We&apos;ll be in touch soon.
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
                Your information is safe and secure with us.
              </p>
            </form>
          </div>

          {/* Why Register With Us */}
          <div className="bg-[#F7FAFF] rounded-md p-8">
            <h3 className="text-xl font-bold text-[#314A8A] mb-2">
              Why Register With Us?
            </h3>
            <div className="h-[3px] w-10 bg-[#D9A441] rounded-full mb-6" />

            <ul className="space-y-6">
              {whyItems.map((item) => (
                <li key={item.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#E4EDFB] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#1B5FAE]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
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