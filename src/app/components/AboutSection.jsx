"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const partners = [
  { name: "Aventis Groups", src: "/AG.jpeg", height: "h-28" },
  { name: "CPD Standards Board", src: "/CPD.webp", height: "h-32" },
  { name: "The CPD Group", src: "/CPD-GOLD.webp" },
  { name: "Pearson", src: "/pearsonpte.png" },
];

const countries = [
  { code: "TR", name: "Türkiye", image: "/turkey.png" },
  { code: "ES", name: "Spain", image: "/spain.png" },
  { code: "IT", name: "Italy", image: "/italy.png" },
  { code: "HU", name: "Hungary", image: "/Hungary.png" },
  { code: "LT", name: "Lithuania", image: "/lithuania.png" },
  { code: "RO", name: "Romania", image: "/Romania.png" },
  { code: "PL", name: "Poland", image: "/poland.png" },
  { code: "MY", name: "Malaysia", image: "/malasiya.png" },
];

const universities = [
  { name: "İstanbul Üniversitesi", country: "Türkiye", color: "#1B5FAE", logo: "/İstanbul_Üniversitesi_Logo.png" },
  { name: "Sapienza Università di Roma", country: "Italy", color: "#7A1F2B", logo: "/Sapienza.png" },
  { name: "Universidad Complutense de Madrid", country: "Spain", color: "#B22222", logo: "/2.webp" },
  { name: "Bahçeşehir Üniversitesi", country: "Türkiye", color: "#154C8C", logo: "/Bahçeşehir.png" },
  { name: "Üsküdar Üniversitesi", country: "Türkiye", color: "#0F9B8E", logo: "/Uskudar.webp", logoScale: true },
  { name: "Universiti\nMalaya", country: "Malaysia", color: "#154C8C", logo: "/malay.png", logoClass: "object-contain scale-[1.75] translate-y-2" },
  { name: "Uniwersytet Warszawski", country: "Poland", color: "#B22222", logo: "/1.webp" },
  { name: "Eötvös Loránd University", country: "Hungary", color: "#154C8C", logo: "/elte.png", logoScale: true },
  { name: "Beykoz University", country: "Türkiye", color: "#7A1F2B", logo: "/beykoz.png" },
  { name: "University of Bucharest", country: "Romania", color: "#1B5FAE" },
  { name: "Vilnius University", country: "Lithuania", color: "#8A1538" },
];

const stats = [
  {
    target: 2000,
    suffix: "+",
    label: "Students",
    sub: "Trained successfully",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    ),
  },
  {
    target: 98,
    suffix: "%",
    label: "Success Rate",
    sub: "In exams and goals",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 21.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    ),
  },
  {
    target: 10,
    suffix: "+",
    label: "Years Experience",
    sub: "Trusted by thousands",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    target: 3,
    suffix: "",
    label: "Languages",
    sub: "DE · EN · TR",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    ),
  },
];

function useCountUp(target, active, duration = 1500) {
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    let raf;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function StatItem({ stat, active }) {
  const count = useCountUp(stat.target, active);
  return (
    <div className="flex items-center gap-4 justify-center text-center sm:text-left">
      <svg className="w-8 h-8 text-white/70 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        {stat.icon}
      </svg>
      <div>
        <p className="text-2xl font-bold text-white leading-tight">
          {count.toLocaleString()}
          {stat.suffix}
        </p>
        <p className="text-sm font-semibold text-white/90">{stat.label}</p>
        <p className="text-xs text-white/60">{stat.sub}</p>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const offersRef = useRef(null);
  const [offersVisible, setOffersVisible] = useState(false);
  const uniScrollRef = useRef(null);
  const [uniIndex, setUniIndex] = useState(0);

  const scrollToUni = (index) => {
    const container = uniScrollRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(index, universities.length - 1));
    const card = container.children[clamped];
    if (card) {
      container.scrollTo({ left: card.offsetLeft - container.offsetLeft, behavior: "smooth" });
    }
    setUniIndex(clamped);
  };

  const handleUniScroll = () => {
    const container = uniScrollRef.current;
    if (!container) return;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(container.children).forEach((card, i) => {
      const dist = Math.abs(card.offsetLeft - container.offsetLeft - container.scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    setUniIndex(closest);
  };

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = offersRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOffersVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white">
      {/* Full-width stats bar */}
      <div ref={statsRef} className="w-full bg-[#154C8C] py-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/15">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} active={statsVisible} />
          ))}
        </div>
      </div>

      {/* Current Offers */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-4">
        <div className="text-center max-w-2xl mx-auto mb-12 mt-4">
          <h3 className="text-4xl font-bold text-[#314A8A]">
            Current Offers
          </h3>
        </div>

        <div
          ref={offersRef}
          className="grid sm:grid-cols-2 gap-8 sm:gap-16 max-w-4xl mx-auto justify-center justify-items-center"
        >
          {[
            {
              title: "Turkish Language Course",
              image: "/discountt.png",
              oldPrice: "12.000 TL",
              newPrice: "10.000 TL",
            },
            {
              title: "Junior English Course",
              image: "/discount.png",
              oldPrice: "15.000 TL",
              newPrice: "10.000 TL",
            },
          ].map((offer, i) => (
            <div
              key={offer.title}
              style={{ animationDelay: offersVisible ? `${i * 150}ms` : "0ms" }}
              className={`bg-white rounded-md shadow-xl overflow-hidden flex flex-col w-full max-w-sm transition-all duration-300 hover:-translate-y-8 hover:shadow-2xl ${
                offersVisible ? "animate-rise-up" : "opacity-0"
              }`}
            >
              <div className="relative h-[410px]">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <div className="flex items-center justify-between gap-4 px-6 py-5 border-t border-gray-100">
                <div className="text-left shrink-0">
                  <p className="text-gray-500 text-sm font-bold line-through">
                    {offer.oldPrice}
                  </p>
                  <p className="text-lg font-bold text-[#0B1B4D]">
                    {offer.newPrice}
                  </p>
                </div>
                <button className="flex-1 inline-flex items-center justify-center gap-2 bg-[#1B5FAE] text-white font-semibold py-2 rounded hover:bg-[#0E4396] transition">
                  Enroll Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="flex items-center justify-center gap-2 text-[#314A8A] font-bold text-lg">
            <svg className="w-6 h-6 text-[#D9A441]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Limited Time Offer!
          </p>
          <p className="text-gray-500 text-base mt-2 max-w-lg mx-auto">
            Don&apos;t miss the opportunity to learn a new language with our
            expert instructors.
          </p>
        </div>
      </div>

      {/* CTA band */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-12">
        <div className="bg-[#EAF3FF] rounded-md px-6 py-5 flex flex-col sm:flex-row items-center gap-4">
          <svg className="w-8 h-8 text-[#1B5FAE] shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
            <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.902.434 1.346.663a6.727 6.727 0 00.551-1.607 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.667 2.25 2.25 0 002.12 0z" />
          </svg>
          <div className="w-px self-stretch bg-[#1B5FAE]/25" />
          <div className="flex-1 text-center sm:text-left">
            <p className="font-bold text-[#314A8A] text-lg">Ready to start your language journey?</p>
            <p className="text-gray-500 text-base">Explore our courses or contact our advisors to find the right fit for your goals.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1B5FAE] border border-[#1B5FAE] font-semibold px-5 py-2.5 rounded hover:bg-[#1B5FAE] hover:text-white transition shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            Contact Us
          </a>
        </div>
      </div>

      {/* Partner logo marquee */}
      <div className="relative w-full mt-20 pb-10 border-t border-gray-100 overflow-hidden">
        <p className="text-center text-xl font-bold tracking-[0.15em] text-[#314A8A] uppercase pt-4 pb-8">
          Accredited by International Organizations
        </p>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max items-center animate-marquee">
          {Array(8).fill(partners).flat().map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex items-center px-6 sm:px-10 shrink-0 opacity-90 hover:opacity-100 transition"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={160}
                height={104}
                className={`${p.height || "h-28"} w-auto object-contain`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* University Guidance */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#314A8A] mb-3">
          Secure university acceptance across 8 countries
        </h2>
        <p className="text-gray-500 mb-12">
          Wherever your future takes you, we help you get there
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {countries.map((c) => (
            <div
              key={c.code}
              className="group relative bg-[#F3F6FC] rounded-md py-8 px-4 flex flex-col items-center justify-center gap-1 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {c.image && (
                <>
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(min-width: 768px) 300px, 50vw"
                  />
                  <div className="absolute inset-0 bg-[#0E1E4A]/40" />
                </>
              )}
              <span className={`absolute top-2 text-5xl font-extrabold select-none ${c.image ? "text-white/40" : "text-white"}`}>
                {c.code}
              </span>
              <span className={`relative mt-8 text-base font-bold ${c.image ? "text-white" : "text-[#1B5FAE]"}`}>
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* University Partners Carousel */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mt-20 text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#1B5FAE] mb-3">
          Our Partners
        </p>
        <h2
          className="text-2xl sm:text-3xl font-bold text-[#0E1E4A] mb-2"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Collaborating with Leading Universities
        </h2>
        <p className="text-gray-500 mb-10">
          We partner with top institutions across Europe and Asia to bring you the best opportunities.
        </p>

        <div className="relative">
          <button
            onClick={() => scrollToUni(uniIndex - 1)}
            aria-label="Previous"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 z-10 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center text-[#0E1E4A] hover:bg-gray-50 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div
            ref={uniScrollRef}
            onScroll={handleUniScroll}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {universities.map((u) => (
              <div
                key={u.name}
                className="snap-start shrink-0 w-[140px] sm:w-[155px] bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-lg transition p-4 flex flex-col items-center text-center cursor-pointer"
              >
                {u.logo ? (
                  <div className="w-20 h-20 mb-3 shrink-0 overflow-hidden flex items-center justify-center">
                    <Image
                      src={u.logo}
                      alt={u.name}
                      width={80}
                      height={80}
                      className={`w-full h-full ${u.logoClass || (u.logoScale ? "object-contain scale-150" : "object-contain p-1")}`}
                    />
                  </div>
                ) : (
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${u.color}1A` }}
                  >
                    <svg className="w-7 h-7" fill="none" stroke={u.color} strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9v6" />
                    </svg>
                  </div>
                )}
                <p className="font-bold text-[#0E1E4A] text-sm leading-snug whitespace-pre-line">{u.name}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wide mt-1">{u.country}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToUni(uniIndex + 1)}
            aria-label="Next"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 z-10 w-9 h-9 rounded-full bg-white shadow-md items-center justify-center text-[#0E1E4A] hover:bg-gray-50 transition"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6 mb-10">
          {universities.map((u, i) => (
            <button
              key={u.name}
              onClick={() => scrollToUni(i)}
              aria-label={`Go to ${u.name}`}
              className={`h-2 rounded-full transition-all ${
                i === uniIndex ? "w-6 bg-[#1B5FAE]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
