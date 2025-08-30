"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"] });

const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.025, duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  }),
};

const AboutSection = () => {
  const heading1 = "Empowering Vision";
  const heading2 = "Elevating Experiences";

  return (
    // 🔵 Slimmer vertical padding
    <section className="relative w-full overflow-hidden bg-[#0A1E3A] py-14 md:py-20 text-white">
      {/* ===== Lighter Background ===== */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-40 blur-2xl"
          style={{
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(56,189,248,.22), transparent 70%), radial-gradient(ellipse at 80% 25%, rgba(129,140,248,.18), transparent 60%), radial-gradient(ellipse at 50% 90%, rgba(20,184,166,.18), transparent 65%)",
            animation: "waveMove 18s ease-in-out infinite alternate",
          }}
        />
        {/* fewer particles for a lighter feel */}
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200/70"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
            animate={{ y: [0, -22, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 6 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* ===== Content ===== */}
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[10px] uppercase tracking-[0.28em] text-slate-100"
        >
          About Us
        </motion.p>

        {/* ===== Poppins Headings (smaller, airy) ===== */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          className={`${poppins.className} mb-3 font-semibold`}
          style={{
            fontSize: "clamp(22px, 4.2vw, 40px)",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
          }}
        >
          {/* keep space visibility stable */}
          {heading1.split("").map((char, i) =>
            char === " " ? (
              <span key={`sp1-${i}`} className="inline-block w-[0.5ch]" />
            ) : (
              <motion.span
                key={`h1-${i}`}
                variants={letterAnimation}
                custom={i}
                className="inline-block bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent"
              >
                {char}
              </motion.span>
            )
          )}
          <br />
          {heading2.split("").map((char, i) =>
            char === " " ? (
              <span key={`sp2-${i}`} className="inline-block w-[0.5ch]" />
            ) : (
              <motion.span
                key={`h2-${i}`}
                variants={letterAnimation}
                custom={i}
                className="inline-block bg-gradient-to-r from-fuchsia-300 via-pink-300 to-rose-300 bg-clip-text text-transparent"
              >
                {char}
              </motion.span>
            )
          )}
        </motion.h2>

        {/* thinner divider */}
        <div className="mx-auto mb-5 mt-2 h-px w-16 rounded bg-white/15" />

        {/* ===== Body copy (slightly smaller + relaxed) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="mx-auto mt-2 max-w-3xl space-y-5 text-[15px] leading-7 text-slate-100 md:text-[16px] md:leading-7"
        >
          <p>
            <span className="font-semibold text-white">Slanster</span> is a next-generation IT consulting and solutions firm, delivering
            technology services in areas like cloud, automation, and cybersecurity. Alongside our client work, we are committed to shaping
            the future workforce. We train talented minds to master high-demand skills in AI, Consulting, Cybersecurity, and other booming
            industries. These skills become their toolkit to enter the corporate world with confidence.
          </p>
          <p>
            With internship certifications, hands-on exposure, and dedicated placement assistance, Slanster helps talented minds secure
            high-paying roles in leading consulting and IT companies. Our purpose is simple: to close the{" "}
            <span className="font-semibold text-white">campus-to-corporate gap</span> while maintaining the quality bar of a modern IT
            consultancy—so companies get <span className="font-semibold text-white">work that works</span>, and talented minds launch
            careers with confidence.
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes waveMove {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-3%, -2%, 0) scale(1.03); }
          100% { transform: translate3d(3%, 2%, 0) scale(1.02); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
