"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* ---------- Animations ---------- */
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const AboutSection = () => {
  const reduce = useReducedMotion();
  const h1 = "Empowering Vision";
  const h2 = "Elevating Experiences";

  return (
    <section
      className={`${inter.className} relative w-full overflow-hidden bg-[#081A33] text-white py-12 sm:py-16 lg:py-16`}
      aria-label="About Slanster"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute inset-0 opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(50% 60% at 10% 30%, rgba(56,189,248,.25), transparent 70%)," +
              "radial-gradient(50% 60% at 90% 25%, rgba(99,102,241,.22), transparent 70%)," +
              "radial-gradient(70% 60% at 50% 90%, rgba(16,185,129,.18), transparent 70%)",
          }}
          animate={
            reduce
              ? {}
              : {
                  x: ["0%", "-3%", "3%", "0%"],
                  y: ["0%", "-2%", "2%", "0%"],
                  scale: [1, 1.05, 1.02, 1],
                }
          }
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Container */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
        {/* Tag */}
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="inline-block border rounded-full border-white/30 px-6 py-2 uppercase tracking-wide text-sm font-medium mb-8 bg-white/10 backdrop-blur-md shadow-md hover:shadow-lg transition"
        >
          About Us
        </motion.div>

        {/* Headings */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="mb-10 flex md:flex-row flex-col gap-2 items-center justify-center"
        >
          <motion.h2
            variants={fadeSlideUp}
            className="font-extrabold tracking-tight bg-gradient-to-r from-sky-300 via-cyan-200 to-blue-200 bg-clip-text text-transparent"
            style={{ fontSize: "clamp(28px, 4.5vw, 56px)", lineHeight: 1.2 }}
          >
            {h1}
          </motion.h2>

          <motion.h2
            variants={fadeSlideUp}
            className="font-extrabold tracking-tight bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent"
            style={{ fontSize: "clamp(24px, 4vw, 48px)", lineHeight: 1.2 }}
          >
            {h2}
          </motion.h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={fadeSlideUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-12 h-1 w-20 rounded bg-gradient-to-r from-sky-300 to-emerald-200"
        />

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-[16px] sm:text-lg leading-8 text-slate-200 space-y-7 text-justify sm:text-center"
        >
          <motion.p variants={fadeSlideUp}>
            <span className="font-semibold text-white">Slanster</span> is a
            next-generation IT consulting and solutions firm delivering
            cutting-edge services in cloud, automation, and cybersecurity. We
            don’t just solve client problems — we nurture talent, empowering
            learners in AI, Consulting, Cybersecurity, and other booming
            industries.
          </motion.p>
          <motion.p variants={fadeSlideUp}>
            With world-class training, internship certifications, and placement
            assistance, our mission is to bridge the{" "}
            <span className="font-semibold text-white">
              campus-to-corporate gap
            </span>
            . We help students transform into confident professionals, ready to
            thrive in leading IT and consulting companies.
          </motion.p>
          <motion.p variants={fadeSlideUp}>
            Our philosophy is simple: companies deserve{" "}
            <span className="font-semibold text-white">work that works</span>,
            and students deserve a career that launches with confidence.
            Slanster delivers both — driving technology adoption for businesses
            and career growth for the next generation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
