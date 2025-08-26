"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

// Load Inter font
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

const logos = Array.from({ length: 9 }).map((_, i) => ({
  src: `/public/home/placement/logo${i + 1}.png`,
  alt: `Placement partner ${i + 1}`,
  // staggered entrance + unique float timing for organic feel
  delay: `${i * 90}ms`,
  floatDuration: `${5 + (i % 4)}s`,
  floatDelay: `${(i % 5) * 0.4}s`,
}));

const Placement: React.FC = () => {
  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center px-6 md:px-10 lg:px-0 py-16 bg-white overflow-hidden ${inter.className}`}
      aria-label="Placement & Super 30"
    >
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#0f395f]/10 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />

      {/* Container */}
      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 rounded-2xl shadow-xl bg-white/70 backdrop-blur-md border border-gray-100 p-6 sm:p-10 md:p-12 lg:p-16">
        {/* Background shadow */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/public/home/placement/bgshadow.png"
            alt="Background Shadow"
            fill
            className="object-cover opacity-60"
          />
        </div>

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center gap-6 md:gap-7">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight animate-[fade-up_700ms_ease_50ms_both]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f395f] to-[#0f6fa8]">
              Your Career, Our Commitment
            </span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg animate-[fade-up_700ms_ease_120ms_both]">
            Join our exclusive <span className="font-semibold">Super 30 Batch</span> and master:
          </p>

          <ol className="space-y-3 text-gray-700 text-base md:text-lg animate-[fade-up_700ms_ease_180ms_both] list-decimal list-inside">
            <li>
              <span className="font-semibold">Consulting Skills</span> — Learn problem-solving frameworks used by top Big 4 consultants
            </li>
            <li>
              <span className="font-semibold">Tech Skills</span> — Build expertise in AI, Cybersecurity & Cloud FinOps
            </li>
            <li>
              <span className="font-semibold">Business Relationship</span> — Storytelling, client communication & professional networking
            </li>
          </ol>

          {/* CTA */}
          <div className="pt-2 animate-[fade-up_700ms_ease_300ms_both]">
            <button
              type="button"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-[#0f395f] px-6 py-3 text-white text-base md:text-lg shadow-lg shadow-[#0f395f]/20 transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-[#0f395f]/30"
            >
              <span className="relative z-10">Enroll Now</span>
              <span className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute left-[-120%] top-0 h-full w-1/2 rotate-12 bg-white/15 blur-md transition-transform duration-700 group-hover:translate-x-[240%]" />
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT: Logos (no boxes; animated) */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 place-items-center">
          {logos.map((l) => (
            <Image
              key={l.alt}
              src={l.src}
              alt={l.alt}
              width={200}
              height={120}
              className="logo-img w-28 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 object-contain will-change-transform transition-transform duration-500 hover:scale-110 hover:-translate-y-1 hover:drop-shadow-[0_8px_18px_rgba(15,57,95,0.25)]"
              style={{
                animation: `fade-up 700ms ease ${l.delay} both, floatY ${l.floatDuration} ease-in-out ${l.floatDelay} infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Scoped animations */}
      <style jsx>{`
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatY {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Placement;
