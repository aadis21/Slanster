"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

// Make sure these files exist at: /public/home/placement/*.png
const LOGOS = [
  "/home/placement/accenture.png",
  "/home/placement/deloitte.png",
  "/home/placement/kpmg.png",
  "/home/placement/ey.png",
  "/home/placement/pwc.png",
  "/home/placement/hcl.png",
  "/home/placement/servicenow.png",
  "/home/placement/tcs.png",
  "/home/placement/infosys.png", // fixed: removed extra /home
];

const Placement: React.FC = () => {
  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center px-6 md:px-10 lg:px-0 py-16 bg-white overflow-hidden ${inter.className}`}
      aria-label="Placement & Super 30"
    >
      {/* Soft ambient glows (no motion, no shake) */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#0f395f]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 rounded-2xl shadow-xl bg-white/70 backdrop-blur-md border border-gray-100 p-6 sm:p-10 md:p-12 lg:p-16">
        {/* Background texture (NOTE: no /public prefix) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/home/placement/bgshadow.png"
            alt="Background Shadow"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* LEFT CONTENT (static heading) */}
        <div className="flex flex-col justify-center gap-6 md:gap-7">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f395f] to-[#0f6fa8]">
              Your Career, Our Commitment
            </span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg">
            Join our exclusive <span className="font-semibold">Super 30 Batch</span> and master:
          </p>

          <ol className="space-y-3 text-gray-700 text-base md:text-lg list-decimal list-inside">
            <li>
              <span className="font-semibold">Consulting Skills</span> — Learn problem-solving frameworks used by top Big 4 consultants
            </li>
            <li>
              <span className="font-semibold">Tech Skills</span> — Build expertise in AI, Cybersecurity & Cloud FinOps
            </li>
            <li>
              <span className="font-semibold">Business Relationship</span> — Storytelling, client communication & networking
            </li>
          </ol>

          <div className="pt-2">
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

        {/* RIGHT: 9-logo grid, smooth animations (no boxes) */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-6 place-items-center">
          {LOGOS.map((src, i) => (
            <div
              key={src}
              className="opacity-0"
              style={{
                animation: `logoIn 720ms cubic-bezier(.22,.68,0,.98) ${i * 110}ms both`,
              }}
            >
              <span className="relative inline-block">
                <Image
                  src={src}
                  alt={`Placement partner ${i + 1}`}
                  width={220}
                  height={120}
                  className="w-28 h-16 sm:w-32 sm:h-20 md:w-36 md:h-24 object-contain"
                  style={{
                    animation: `logoIdle 3800ms ease-in-out ${i * 180}ms infinite`,
                    filter: "drop-shadow(0 6px 14px rgba(15,57,95,0.18))",
                    willChange: "transform, filter",
                    transition: "transform 220ms ease, filter 220ms ease",
                  }}
                />
                {/* Hover shine sweep */}
                <span
                  className="pointer-events-none absolute inset-0 rounded-md"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.25) 50%, rgba(255,255,255,0) 100%)",
                    transform: "translateX(-140%) rotate(18deg)",
                    transition: "transform 700ms ease, opacity 120ms ease",
                    opacity: 0,
                  }}
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes logoIn {
          0%   { opacity: 0; transform: translateY(10px) scale(0.96); filter: blur(4px); }
          60%  { opacity: 1; transform: translateY(-2px) scale(1.02); filter: blur(0.5px); }
          100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        @keyframes logoIdle {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 6px 14px rgba(15,57,95,0.18)); }
          50%      { transform: scale(1.015); filter: drop-shadow(0 10px 20px rgba(15,57,95,0.28)); }
        }
        :global(span:hover > img) {
          transform: translateY(-2px) scale(1.03);
          filter: drop-shadow(0 12px 24px rgba(15,57,95,0.32));
        }
        :global(span:hover > span) {
          opacity: 1;
          transform: translateX(140%) rotate(18deg);
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Placement;
