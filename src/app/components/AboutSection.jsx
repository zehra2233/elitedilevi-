"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Expert Teachers",
    desc: "Certified and experienced instructors dedicated to your success.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 017.231-4.41 60.46 60.46 0 00-.491-6.347M4.26 10.147a48.474 48.474 0 017.324-2.815M4.26 10.147a12.087 12.087 0 01-1.395-.914M19.74 10.147a48.474 48.474 0 00-7.324-2.815M19.74 10.147a12.087 12.087 0 001.395-.914M12 12.75c-1.5-1.5-3.5-2-5.5-1.5m5.5 1.5c1.5-1.5 3.5-2 5.5-1.5m-11 0V16m11-4.75V16M12 7.332V3" />
    ),
  },
  {
    title: "Small Class Sizes",
    desc: "Personal attention and more speaking practice in every class.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    ),
  },
  {
    title: "International Exams",
    desc: "We prepare you for Goethe, Cambridge, TOEFL and YDS.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
    ),
  },
  {
    title: "Speaking Focus",
    desc: "Communicative lessons that build real-world speaking skills.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    ),
  },
];

const partners = [
  { name: "Nordic Grove", icon: "M12 3l9 9-9 9-9-9 9-9z" },
  { name: "Vertex Labs", icon: "M12 3v18M3 12h18" },
  { name: "Solace Studio", icon: "M12 21a9 9 0 100-18 9 9 0 000 18z" },
  { name: "Pinnacle Group", icon: "M4 20l8-16 8 16H4z" },
  { name: "Bright Harbor", icon: "M3 12l9-9 9 9M5 10v10h14V10" },
  { name: "Meridian Co", icon: "M4 6h16M4 12h16M4 18h16" },
  { name: "Aster & Finch", icon: "M12 2l2.4 7.2H22l-6 4.6 2.3 7.2L12 16.4l-6.3 4.6 2.3-7.2-6-4.6h7.6z" },
  { name: "Halcyon Works", icon: "M4 4h16v16H4z" },
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
    <div className="flex flex-col items-center text-center">
      <svg className="w-7 h-7 text-white/70 mb-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        {stat.icon}
      </svg>
      <p className="text-3xl font-bold text-white">
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="text-sm font-semibold text-white/90 mt-1">{stat.label}</p>
      <p className="text-xs text-white/60">{stat.sub}</p>
    </div>
  );
}

export default function AboutSection() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

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

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: copy */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#3674D6]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#3674D6]">
              About Elite Dil Evi
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[#314A8A] mb-6">
            Fluent enough to belong,{" "}
            <span className="relative inline-block text-[#3674D6]">
              wherever
              <svg
                className="absolute left-0 -bottom-1 w-full h-2 text-[#B08D57]"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 6 Q 25 0, 50 6 T 100 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            that is
          </h2>

          <p className="text-[#314A8A] text-lg mb-8 leading-relaxed">
            At Elite Dil Evi, we help students of all ages speak with
            confidence in German, English, and Turkish. With modern teaching
            methods, expert instructors, and internationally recognized
            certification, we open doors to your academic, professional, and
            personal success.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-gray-100 rounded shadow-sm p-3.5 hover:shadow-md transition"
              >
                <div className="w-8 h-8 rounded-full bg-[#EAF0FB] flex items-center justify-center mb-2">
                  <svg className="w-4 h-4 text-[#3674D6]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    {f.icon}
                  </svg>
                </div>
                <h3 className="font-bold text-[#314A8A] text-sm mb-0.5">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: photo with badge */}
        <div className="relative lg:-mt-16">
          <div className="relative rounded-md overflow-hidden shadow-2xl border-8 border-[#0E1E4A]">
            <Image
              src="/about%20us.png"
              alt="Elite Dil Evi Students"
              width={800}
              height={600}
              className="w-full h-[520px] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-6 right-6 sm:right-auto bg-[#314A8A] rounded shadow-lg px-5 py-4 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm sm:text-base leading-tight">
                Trusted by 2,000+ Students
              </p>
              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.783.57-1.838-.196-1.538-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.062 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.958z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width stats bar */}
      <div ref={statsRef} className="w-full bg-[#314A8A] mt-20 py-14">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} active={statsVisible} />
          ))}
        </div>
      </div>

      {/* CTA band */}
      <div className="max-w-7xl mx-auto px-10 mt-20">
        <div className="bg-gradient-to-b from-[#EAF3FF] to-white rounded-3xl px-10 py-14 flex flex-col items-center text-center gap-6">
          <h3
            className="text-lg sm:text-xl font-bold text-[#314A8A]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Ready to start your language journey?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="group inline-flex items-center gap-2 bg-[#3674D6] text-white font-semibold px-6 py-3 rounded shadow-md transition-all duration-300 hover:bg-[#0E4396] hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore Courses
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white text-[#3674D6] font-semibold px-6 py-3 rounded border border-gray-200 transition-all duration-300 hover:bg-gray-50 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact Us
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Partner logo marquee */}
      <div className="relative w-full mt-20 py-10 border-t border-gray-100 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex items-center gap-2 px-10 shrink-0 text-gray-400 grayscale opacity-70 hover:opacity-100 hover:text-[#314A8A] transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={p.icon} />
              </svg>
              <span className="text-lg font-bold whitespace-nowrap">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
