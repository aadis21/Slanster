"use client";
import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { CheckCircle2, Rocket, Briefcase, Sparkles } from "lucide-react";

// Font
const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const floatY = (i: number) => ({
  initial: { y: 12, opacity: 0 },
  animate: {
    y: [12, -8, 12],
    opacity: 1,
    transition: { duration: 4 + (i % 5) * 0.4, repeat: Infinity, ease: "easeInOut" },
  },
});

const glowPulse = {
  initial: { opacity: 0.5, scale: 1 },
  animate: { opacity: [0.4, 0.9, 0.4], scale: [1, 1.05, 1], transition: { duration: 5, repeat: Infinity } },
};

export default function Placement() {
  const logos = Array.from({ length: 9 }, (_, i) => `/home/PlacementLogos/logo${i + 1}.png`);

  return (
    <div className={`relative w-full min-h-screen flex items-center justify-center px-6 md:px-10 py-14 bg-white overflow-hidden ${inter.className}`}>
      {/* Decorative background */}
      <motion.div
        variants={glowPulse}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute -top-24 -right-20 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,88,165,0.18),transparent_60%)] blur-3xl"
      />
      <motion.div
        variants={glowPulse}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute -bottom-28 -left-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,138,92,0.18),transparent_60%)] blur-3xl"
      />

      {/* Shadow image layer */}
      <div className="absolute inset-0 -z-10">
        <Image src="/home/PlacementLogos/bgshadow.png" alt="Background Shadow" fill className="object-cover opacity-70" />
      </div>

      {/* Main card */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 rounded-2xl bg-white/60 backdrop-blur-xl p-6 sm:p-10 md:p-14 border border-white/40 shadow-[0_10px_40px_rgba(16,24,40,0.08)]"
      >
        {/* Left: Copy */}
        <div className="flex flex-col justify-center">
          <motion.div$1>
            <Sparkles className="h-4 w-4" /> Placement Program
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-4xl md:text-5xl font-semibold leading-tight text-gray-900"
          >
            <span className="bg-gradient-to-r from-[#0f395f] via-[#0a5fb8] to-[#0b996b] bg-clip-text text-transparent">
              Your Career, Our Commitment
            </span>
          </motion.h2>

          <motion.p variants={fadeUp} className="mt-5 text-gray-700 text-base md:text-lg leading-relaxed">
            Start your journey with expert guidance, practical training, and guaranteed placement support. We empower every learner to build real skills and secure opportunities with leading companies.
          </motion.p>

          {/* Key points */}
          <motion.ul variants={fadeUp} className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#0b996b]" />
              <p className="text-gray-800">Mentorship from industry experts and personalized career guidance</p>
            </li>
            <li className="flex items-start gap-3">
              <Rocket className="mt-0.5 h-5 w-5 text-[#0a5fb8]" />
              <p className="text-gray-800">Hands-on projects to build strong portfolios and real-world skills</p>
            </li>
            <li className="flex items-start gap-3">
              <Briefcase className="mt-0.5 h-5 w-5 text-[#0f395f]" />
              <p className="text-gray-800">Comprehensive placement support with top hiring partners</p>
            </li>
          </motion.ul>

          {/* CTA */}
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-xl bg-[#0f395f] px-6 sm:px-8 py-3 text-white font-medium shadow-lg"
            >
              <span className="relative z-10">Enroll Now</span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-white/10 transition-transform duration-700 hover:translate-x-0" />
            </motion.button>

            <motion.a
              whileHover={{ y: -2 }}
              href="#"
              className="rounded-xl border border-[#0f395f]/20 bg-white px-6 sm:px-7 py-3 text-[#0f395f] font-medium shadow-sm hover:shadow-md"
            >
              Download Brochure
            </motion.a>
          </motion.div>

          {/* Trust bar */}
          <motion.div variants={fadeUp} className="mt-10">
            <p className="text-sm uppercase tracking-wider text-gray-500">Trusted by learners placed at</p>
          </motion.div>
        </div>

        {/* Right: Animated logo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-8 place-items-center">
          {logos.map((src, i) => (
            <motion.div key={src} {...floatY(i)} className="group relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#0a5fb8]/0 via-[#0a5fb8]/0 to-[#0b996b]/0 opacity-0 blur group-hover:opacity-60 transition-opacity duration-500" />
              <Image
                src={src}
                alt={`Hiring Partner ${i + 1}`}
                width={160}
                height={160}
                className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 object-contain transition-transform duration-300 group-hover:scale-110"
                priority={i < 3}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom moving ticker */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -600, 0] }}
        transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs md:text-sm text-gray-600/80"
      >
        • Live Projects • Mock Interviews • Aptitude Sprints • HR Rounds • Referral Drives • Portfolio Reviews •
      </motion.div>
    </div>
  );
}
