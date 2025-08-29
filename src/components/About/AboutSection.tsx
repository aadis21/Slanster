"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

// ✅ Typed variants + cubic-bezier ease
const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.05,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // cubic-bezier instead of "easeOut"
    },
  }),
};

const AboutSection = () => {
  const heading1 = "Empowering Vision";
  const heading2 = "Elevating Experiences";

  return (
    <section className="relative w-full overflow-hidden bg-[#05060c] py-24 md:py-32 text-white">
      {/* ====== Animated Background ====== */}
      <div className="absolute inset-0 -z-10">
        {/* flowing gradient waves */}
        <div
          className="absolute inset-0 opacity-70 blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse at 20% 30%, rgba(59,130,246,0.5), transparent 70%), radial-gradient(ellipse at 80% 25%, rgba(236,72,153,0.5), transparent 60%), radial-gradient(ellipse at 50% 90%, rgba(16,185,129,0.5), transparent 65%)",
            animation: "waveMove 18s ease-in-out infinite alternate",
          }}
        />
        {/* floating particles */}
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300/80 shadow-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* ====== Content ====== */}
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[11px] uppercase tracking-[0.28em] text-slate-200/90 backdrop-blur-sm"
        >
          About Us
        </motion.p>

        {/* Animated Heading (parent controls children via variants) */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
          className="mb-4 text-3xl font-extrabold md:text-5xl"
        >
          {heading1.split("").map((char, i) => (
            <motion.span
              key={`h1-${i}`}
              variants={letterAnimation}
              custom={i}
              className="inline-block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent"
            >
              {char}
            </motion.span>
          ))}
          <br />
          {heading2.split("").map((char, i) => (
            <motion.span
              key={`h2-${i}`}
              variants={letterAnimation}
              custom={i}
              className="inline-block bg-gradient-to-r from-pink-400 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent"
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        {/* Paragraphs with fade-in */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mt-8 max-w-3xl space-y-6 text-base leading-7 text-slate-200/90 md:text-lg"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="font-semibold text-white">Slanster</span> is a
            next-generation IT consulting and solutions firm, delivering
            technology services in areas like cloud, automation, and
            cybersecurity. Alongside our client work, we are committed to
            shaping the future workforce. We train talented minds to master
            high-demand skills in AI, Consulting, Cybersecurity, and other
            booming industries. These skills become their toolkit to enter the
            corporate world with confidence.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            With internship certifications, hands-on exposure, and dedicated
            placement assistance, Slanster helps talented minds secure
            high-paying roles in leading consulting and IT companies. Our
            purpose is simple: to close the{" "}
            <span className="font-semibold text-white">
              campus-to-corporate gap
            </span>{" "}
            while maintaining the quality bar of a modern IT consultancy—so
            companies get{" "}
            <span className="font-semibold text-white">work that works</span>,
            and talented minds launch careers with confidence.
          </motion.p>
        </motion.div>
      </div>

      {/* Keyframes for moving gradient */}
      <style jsx>{`
        @keyframes waveMove {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(-4%, -2%, 0) scale(1.05);
          }
          100% {
            transform: translate3d(4%, 3%, 0) scale(1.03);
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
