"use client";
import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { Wrench, Cpu, UsersRound, BadgeCheck } from "lucide-react";

const reasons = [
  {
    title: "Real IT Exposure",
    desc: "Work on actual projects to gain hands-on industry experience.",
    icon: <Wrench className="h-7 w-7 text-blue-600" />,
  },
  {
    title: "Industry-Ready Skills",
    desc: "Master high-demand skills valued by top IT and consulting firms.",
    icon: <Cpu className="h-7 w-7 text-blue-600" />,
  },
  {
    title: "Mentorship by Experts",
    desc: "Learn directly from industry professionals and gain real-world insights.",
    icon: <UsersRound className="h-7 w-7 text-blue-600" />,
  },
  {
    title: "Placement Guarantee",
    desc: "Super 30 candidates get placement support to secure high-paying roles.",
    icon: <BadgeCheck className="h-7 w-7 text-blue-600" />,
  },
];

// Easing tuples
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.42, 0, 0.58, 1];
const LINEAR: [number, number, number, number] = [0, 0, 1, 1];

// Variants
const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT, staggerChildren: 0.12 },
  },
};

const titleV = {
  hidden: { opacity: 0, y: -20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

const cardV = {
  hidden: { opacity: 0, y: 40, rotateX: -12, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

const railV = {
  hidden: { scaleY: 0, opacity: 0 },
  show: { scaleY: 1, opacity: 1, transition: { duration: 0.8, ease: EASE_OUT } },
};

const WhySlanster = () => {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative overflow-hidden bg-[#0A1E3A] py-16 md:py-20 px-4 md:px-10 lg:px-20">
        {/* AI-ish floating gradient blobs (background) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(59,130,246,0.35), transparent 70%)",
          }}
          animate={{ x: [0, 40, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: EASE_IN_OUT }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(56,189,248,0.25), transparent 70%)",
          }}
          animate={{ x: [0, -30, 0], y: [0, -25, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: EASE_IN_OUT }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(147,197,253,0.3), transparent 70%)",
          }}
          animate={{ x: [0, -35, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: EASE_IN_OUT }}
        />

        {/* Decorative side curves (animated rails) */}
        <div className="absolute inset-0 flex justify-between items-start pointer-events-none z-0">
          <div className="hidden md:flex relative flex-col items-center pt-5">
            <div className="w-32 h-20 border-t-2 border-r-2 border-blue-400/70 rounded-tr-3xl" />
            <motion.div
              className="w-[2px] flex-1 origin-top bg-blue-400/70"
              variants={railV}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>
          <div className="hidden md:flex relative flex-col items-center pt-5">
            <div className="w-32 h-20 border-t-2 border-l-2 border-blue-400/70 rounded-tl-3xl ml-auto" />
            <motion.div
              className="w-[2px] flex-1 origin-top bg-blue-400/70"
              variants={railV}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            />
          </div>
        </div>

        {/* Section Content */}
        <motion.div
          className="relative z-10 text-center text-white"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.h2
            variants={titleV}
            className="text-2xl md:text-4xl font-bold tracking-tight"
          >
            Why <span className="text-blue-400">Slanster?</span>
          </motion.h2>

          {/* Reasons Grid */}
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                variants={cardV}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  boxShadow:
                    "0 20px 40px rgba(59,130,246,0.25), 0 2px 10px rgba(255,255,255,0.05)",
                }}
                whileTap={{ scale: 0.985 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="group relative flex flex-col items-center text-center space-y-3 rounded-2xl p-6 border border-blue-200/20 bg-white/10 backdrop-blur-md"
              >
                {/* Glow ring on hover */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(120px circle at 50% -20%, rgba(59,130,246,0.18), transparent 60%)",
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                />

                {/* Icon Orbit + Pulse */}
                <div className="relative h-20 w-20">
                  {/* Rotating dashed orbit */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300/80"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12, repeat: Infinity, ease: LINEAR }}
                  />
                  {/* Soft pulse ring */}
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: "0 0 0 0 rgba(59,130,246,0.35)" }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59,130,246,0.35)",
                        "0 0 0 14px rgba(59,130,246,0)",
                      ],
                    }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: EASE_OUT }}
                  />
                  {/* Icon badge */}
                  <div className="absolute inset-2 rounded-full bg-white flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: EASE_IN_OUT,
                        delay: i * 0.1,
                      }}
                    >
                      {r.icon}
                    </motion.div>
                  </div>
                </div>

                {/* Text */}
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {r.title}
                </h3>
                <p className="text-sm text-blue-100/90">{r.desc}</p>

                {/* Subtle bottom shine on hover */}
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 rounded-b-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                  style={{
                    background:
                      "linear-gradient(to top, rgba(59,130,246,0.18), transparent)",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Animated dotted baseline (SVG) */}
          <div className="relative mt-12 hidden lg:block">
            <motion.svg viewBox="0 0 100 2" preserveAspectRatio="none" className="w-full h-[6px]">
              <motion.line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="rgba(191,219,254,0.6)"
                strokeWidth="2"
                strokeDasharray="3 6"
                initial={{ pathLength: 0, strokeDashoffset: 30 }}
                whileInView={{ pathLength: 1, strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: EASE_OUT }}
              />
            </motion.svg>

            {/* Dots that “breathe” along the baseline */}
            {reasons.map((_, i) => (
              <motion.span
                key={i}
                className="absolute -top-1 h-3 w-3 rounded-full border-2 border-blue-200 bg-transparent"
                style={{ left: `${(100 / (reasons.length - 1)) * i}%` }}
                animate={{ y: [0, -2, 0], opacity: [0.8, 1, 0.8] }}
                transition={{
                  duration: 2,
                  delay: i * 0.08,
                  repeat: Infinity,
                  ease: EASE_IN_OUT,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default WhySlanster;
