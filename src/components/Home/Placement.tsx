"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useEffect, useMemo, useRef, useState } from "react";

import logo1 from "../../../public/home/placement/accenture.png";
import logo2 from "../../../public/home/placement/tcs.jpg";
import logo3 from "../../../public/home/placement/deloitte.png";
import logo4 from "../../../public/home/placement/hcl.png";
import logo5 from "../../../public/home/placement/infosys.jpg";
import logo6 from "../../../public/home/placement/kpmg.png";
import logo7 from "../../../public/home/placement/ky.png";
import logo8 from "../../../public/home/placement/pwc.png";
import logo9 from "../../../public/home/placement/servicenow.png";

import BgShadow from "../../../public/home/placement/bgshadow.png";
import ContactModal from "../Header/ContactModal";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

/* ---------- Typewriter word that loops ---------- */
const TypeLoopWord: React.FC<{
  text: string;
  speed?: number; // ms between letters
  hold?: number;  // ms to hold after full word
  className?: string;
}> = ({ text, speed = 110, hold = 1200, className = "" }) => {
  const [i, setI] = useState(0);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (i < text.length) t = setTimeout(() => setI(i + 1), speed);
    else t = setTimeout(() => setI(0), hold);
    return () => clearTimeout(t);
  }, [i, text, speed, hold]);

  return (
    <span aria-label={text} className={className} style={{ whiteSpace: "nowrap" }}>
      {text.slice(0, i)}
      {/* optional cursor */}
      <span className="cursor">|</span>
    </span>
  );
};

/* ---------- Logos ---------- */
const ALL_LOGOS = [
  { src: logo1, alt: "Accenture" },
  { src: logo2, alt: "TCS" },
  { src: logo3, alt: "Deloitte" },
  { src: logo4, alt: "HCL" },
  { src: logo5, alt: "Infosys" },
  { src: logo6, alt: "KPMG" },
  { src: logo7, alt: "EY" },
  { src: logo8, alt: "PwC" },
  { src: logo9, alt: "ServiceNow" },
];

const VISIBLE_SLOTS = 9;     // 3x3
const SWITCH_MS = 2600;      // per-slot change time
const STAGGER_MS = 120;      // stagger between slots

const Placement: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);

  // ---- rotating logos across slots (if you want plain static, remove this block & use ALL_LOGOS directly) ----
  const [base, setBase] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setBase((b) => (b + 1) % ALL_LOGOS.length), SWITCH_MS);
    return () => clearInterval(t);
  }, []);
  const windowLogos = useMemo(
    () =>
      new Array(VISIBLE_SLOTS)
        .fill(0)
        .map((_, i) => ALL_LOGOS[(base + i) % ALL_LOGOS.length]),
    [base]
  );

  return (
    <section
      className={`relative w-full min-h-[60vh] flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-0 py-10 md:py-12 bg-white overflow-hidden ${inter.className}`}
      aria-label="Placement & Super 30"
    >
      {/* soft bg accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#0f395f]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-100 p-5 sm:p-8 md:p-10">
        <div className="absolute inset-0 -z-10">
          <Image
            src={BgShadow}
            alt="Background Shadow"
            fill
            className="object-cover opacity-45"
          />
        </div>

        {/* LEFT – heading with looping typewriter on "Commitment" */}
        <div className="flex flex-col justify-center gap-4 md:gap-5">
          <h2 className="font-sans text-[26px] sm:text-[32px] md:text-[38px] font-bold leading-[1.15] tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f395f] to-[#0f6fa8]">
              Your Career, Our{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f395f] to-[#0f6fa8]">
              Commitment
            </span>
          </h2>

          <p className="font-sans text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] animate-[fade-up_600ms_ease_100ms_both]">
            Join our exclusive{" "}
            <span className="font-semibold">Super 30 Batch</span> and master:
          </p>

          <ol className="font-sans space-y-2.5 text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] animate-[fade-up_600ms_ease_160ms_both] list-decimal list-inside">
            <li>
              <span className="font-semibold">Consulting Skills</span> —
              Frameworks used by the Big 4
            </li>
            <li>
              <span className="font-semibold">Tech Skills</span> — AI,
              Cybersecurity & Cloud FinOps
            </li>
            <li>
              <span className="font-semibold">Business Relationship</span> —
              Storytelling, client comms & networking
            </li>
          </ol>

          <div className="pt-1 animate-[fade-up_600ms_ease_220ms_both]">
            <button
              type="button"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-[#0f395f] px-5 py-2.5 text-white text-sm md:text-[15px] shadow-lg shadow-[#0f395f]/20 transition-transform duration-300 hover:scale-[1.04] focus:outline-none focus:ring-4 focus:ring-[#0f395f]/30"
              onClick={() => setOpenModal(true)}
            >
              <span className="relative z-10">Enroll Now</span>
              <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute left-[-120%] top-0 h-full w-1/2 rotate-12 bg-white/15 blur-md transition-transform duration-700 group-hover:translate-x-[240%]" />
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT – 3x3 grid; each slot cross-fades next logo in loop */}
        <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-6 sm:gap-x-8 sm:gap-y-8 place-items-center">
          {windowLogos.map((l, i) => {
            const k = `${i}-${l.alt}-${base}`;
            return (
              <div
                key={k}
                className="slot relative w-28 h-10 sm:w-32 sm:h-12 md:w-36 md:h-14"
                style={
                  {
                    animationDelay: `${i * STAGGER_MS}ms`,
                  } as React.CSSProperties
                }
              >
                <Image
                  src={l.src}
                  alt={l.alt}
                  fill
                  sizes="(max-width: 768px) 120px, 160px"
                  className="object-contain will-change-transform fadeSwap"
                  priority={i < 3}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* single style block only */}
      <style jsx>{`
        /* Cursor blink for typewriter */
        .cursor {
          display: inline-block;
          margin-left: 2px;
          opacity: 0.75;
          animation: blink 1s steps(1, end) infinite;
        }
        @keyframes blink {
          0%,
          50% {
            opacity: 0.75;
          }
          50.01%,
          100% {
            opacity: 0;
          }
        }

        /* fade-in content */
        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(10px) scale(0.98);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* logo swap animation */
        .fadeSwap {
          animation: fadeSwap ${SWITCH_MS - 200}ms ease both;
        }
        @keyframes fadeSwap {
          0% {
            opacity: 0;
            transform: scale(0.96) translateY(4px);
            filter: drop-shadow(0 0 0 rgba(15, 57, 95, 0));
          }
          25% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          75% {
            opacity: 1;
            transform: scale(1.02);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: drop-shadow(0 8px 16px rgba(15, 57, 95, 0.22));
          }
        }
      `}</style>

      {openModal && (
        <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}
    </section>
  );
};

export default Placement;
