"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"] });

/* ---------- Animations ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.06, duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  }),
};

const letter: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.02 * i, duration: 0.28, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* inline check icon (no extra deps) */
const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const AboutSection = () => {
  const reduce = useReducedMotion();
  const h1 = "Empowering Vision";
  const h2 = "Elevating Experiences";

  return (
    <section
      className="relative w-full overflow-hidden bg-[#0A1E3A] text-white
                 py-8 sm:py-10 md:py-12 lg:py-14"
      aria-label="About Slanster"
    >
      {/* ===== Background glows with gentle drift (auto-disables on reduced motion) ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute inset-0 opacity-35 blur-xl"
          style={{
            background:
              "radial-gradient(60% 50% at 10% 30%, rgba(56,189,248,.18), transparent 70%)," +
              "radial-gradient(60% 50% at 90% 25%, rgba(129,140,248,.16), transparent 65%)," +
              "radial-gradient(60% 50% at 50% 95%, rgba(20,184,166,.14), transparent 65%)",
          }}
          animate={
            reduce
              ? {}
              : { x: ["0%", "-1.5%", "1.5%", "0%"], y: ["0%", "-1%", "1%", "0%"], scale: [1, 1.02, 1.01, 1] }
          }
          transition={reduce ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ===== Container ===== */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Tag */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mb-3 w-fit rounded-full border border-white/20 bg-white/10
                     px-3 py-0.5 text-[9.5px] sm:text-[10px] uppercase tracking-[0.28em] text-slate-100"
        >
          About Us
        </motion.p>

        {/* ===== Headings with proper spacing between two lines ===== */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-16% 0px -16% 0px" }}
          className={`${poppins.className} mb-2 flex flex-wrap items-baseline justify-center text-center font-semibold`}
          style={{ fontSize: "clamp(20px, 3.6vw, 44px)", lineHeight: 1.12 }}
        >
          {/* First phrase */}
          <span className="inline-flex">
            {h1.split("").map((c, i) =>
              c === " " ? (
                <span key={`sp1-${i}`} className="inline-block w-[0.5ch]" />
              ) : (
                <motion.span
                  key={`h1-${i}`}
                  variants={letter}
                  custom={i}
                  className="inline-block bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent"
                >
                  {c}
                </motion.span>
              )
            )}
          </span>

          {/* spacer between the two phrases (responsive width) */}
          <span className="inline-block w-2 sm:w-3 md:w-4" />

          {/* Second phrase */}
          <span className="inline-flex">
            {h2.split("").map((c, i) =>
              c === " " ? (
                <span key={`sp2-${i}`} className="inline-block w-[0.5ch]" />
              ) : (
                <motion.span
                  key={`h2-${i}`}
                  variants={letter}
                  custom={i}
                  className="inline-block bg-gradient-to-r from-fuchsia-300 via-pink-300 to-rose-300 bg-clip-text text-transparent"
                >
                  {c}
                </motion.span>
              )
            )}
          </span>
        </motion.h2>

        {/* Divider */}
        <div className="mx-auto mb-5 mt-2 h-px w-14 rounded bg-white/15" />

        {/* ===== Content Grid (stack on mobile, 2 cols on md+) ===== */}
        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:gap-8 md:grid-cols-2 md:items-start">
          {/* LEFT: main copy */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-prose md:mx-0 lg:max-w-[72ch]
                       text-[14.5px] leading-7 sm:text-[15px] md:text-[15.5px] md:leading-7
                       text-slate-100 space-y-4"
          >
            <p>
              <span className="font-semibold text-white">Slanster</span> is a next-generation IT consulting and
              solutions firm delivering technology services in cloud, automation, and cybersecurity. Alongside client
              work, we train talented minds in AI, Consulting, Cybersecurity, and other booming industries—equipping
              them to enter the corporate world with confidence.
            </p>
            <p>
              With internship certifications, hands-on exposure, and dedicated placement assistance, Slanster helps
              talent secure high-paying roles in leading consulting and IT companies. Our purpose: close the{" "}
              <span className="font-semibold text-white">campus-to-corporate gap</span> while maintaining the quality
              bar of a modern consultancy—so companies get{" "}
              <span className="font-semibold text-white">work that works</span>, and careers launch with confidence.
            </p>
          </motion.div>

          {/* RIGHT: highlights list with staggered items */}
          <motion.ul initial="hidden" whileInView="show" viewport={{ once: true }} className="md:pl-1 space-y-3">
            {[
              "AI, Consulting, Cybersecurity focus",
              "Internship certifications & real projects",
              "Placement assist with top IT/consulting firms",
              "Campus-to-corporate readiness",
            ].map((item, idx) => (
              <motion.li
                key={idx}
                variants={fadeUp}
                custom={idx + 1}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5
                           px-4 py-3 sm:py-3.5 transition-transform duration-300 will-change-transform
                           hover:scale-[1.01]"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-cyan-200">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-[14.5px] sm:text-[15px] leading-6 text-slate-100">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
