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

const AboutSection = () => {
  const reduce = useReducedMotion();
  const h1 = "Empowering Vision";
  const h2 = "Elevating Experiences";

  return (
    <section
      className="relative w-full overflow-hidden bg-[#081A33] text-white
                 py-10 sm:py-12 md:py-16"
      aria-label="About Slanster"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute inset-0 opacity-30 blur-xl"
          style={{
            background:
              "radial-gradient(60% 50% at 12% 28%, rgba(56,189,248,.18), transparent 70%)," +
              "radial-gradient(60% 50% at 88% 26%, rgba(99,102,241,.16), transparent 65%)," +
              "radial-gradient(60% 50% at 50% 94%, rgba(16,185,129,.14), transparent 65%)",
          }}
          animate={
            reduce
              ? {}
              : { x: ["0%", "-1.5%", "1.5%", "0%"], y: ["0%", "-1%", "1%", "0%"], scale: [1, 1.02, 1.01, 1] }
          }
          transition={reduce ? undefined : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Container */}
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="mx-auto mb-4 w-fit rounded-full border border-white/20 bg-white/10
                     px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-slate-100"
        >
          About Us
        </motion.p>

        {/* Headings */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${poppins.className} mb-6 flex flex-wrap items-baseline justify-center text-center font-semibold`}
          style={{ fontSize: "clamp(24px, 3.8vw, 44px)", lineHeight: 1.15 }}
        >
          <span className="inline-flex bg-gradient-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent">
            {h1}
          </span>
          <span className="inline-block w-3" />
          <span className="inline-flex bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200 bg-clip-text text-transparent">
            {h2}
          </span>
        </motion.h2>

        {/* Divider */}
        <div className="mx-auto mb-8 h-px w-16 rounded bg-white/20" />

        {/* Full-width text only */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-[15px] leading-7 text-slate-100 space-y-5"
        >
          <p>
            <span className="font-semibold text-white">Slanster</span> is a next-generation IT consulting and
            solutions firm delivering cutting-edge services in cloud, automation, and cybersecurity. We don’t just
            solve client problems — we nurture talent, empowering learners in AI, Consulting, Cybersecurity, and
            other booming industries.
          </p>
          <p>
            With world-class training, internship certifications, and placement assistance, our mission is to bridge
            the <span className="font-semibold text-white">campus-to-corporate gap</span>. We help students transform
            into confident professionals, ready to thrive in leading IT and consulting companies.
          </p>
          <p>
            Our philosophy is simple: companies deserve{" "}
            <span className="font-semibold text-white">work that works</span>, and students deserve a career that
            launches with confidence. Slanster delivers both — driving technology adoption for businesses and career
            growth for the next generation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
