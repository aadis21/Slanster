"use client";
import React, { useRef, useEffect } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { LazyMotion, domAnimation, m, useMotionValue, useTransform } from "framer-motion";
import BrillianceImg from "../../../public/home/Brilliance/Brilliance.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

/** Framer Motion v11+ easings */
const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

/* Helpers */
const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: EASE_OUT, delay: d },
  viewport: { once: true, amount: 0.3 },
});

const Brilliance = () => {
  return (
    <div
      className={`relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-6 md:px-12 lg:px-24 py-16 ${inter.className}`}
    >
      <LazyMotion features={domAnimation}>
        {/* Floating gradient orbs (lighter blur + GPU hints) */}
        <m.div
          aria-hidden
          className="pointer-events-none absolute -top-8 -left-8 h-56 w-56 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-xl transform-gpu will-change-transform"
          animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: EASE_IN_OUT }}
        />
        <m.div
          aria-hidden
          className="pointer-events-none absolute bottom-8 right-8 h-64 w-64 rounded-full bg-gradient-to-tr from-fuchsia-500/10 to-indigo-500/20 blur-xl transform-gpu will-change-transform"
          animate={{ y: [0, -10, 0], x: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: EASE_IN_OUT }}
        />

        <div className="max-w-7xl w-full relative grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Background image block */}
          <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8/12 lg:w-6/12 h-[500px] lg:h-[550px] rounded-xl overflow-hidden">
            <Image
              src={BrillianceImg}
              alt="Tech Brilliance"
              fill
              priority
              className="object-cover opacity-20"
            />
          </div>

          {/* LEFT */}
          <div className="relative z-10 text-center md:text-left">
            <m.h1
              className="text-white leading-tight font-semibold text-[20px] sm:text-[28px] md:text-[36px] lg:text-[44px]"
              {...fadeUp(0)}
            >
              AI that ships. <br /> IT that scales.
            </m.h1>

            {/* Animated underline */}
            <m.div
              className="mt-2 h-[3px] w-28 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full transform-gpu will-change-transform"
              initial={{ width: 0 }}
              whileInView={{ width: 112 }}
              transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
              viewport={{ once: true }}
            />

            <m.p
              className="mt-4 text-gray-300/90 max-w-lg mx-auto md:mx-0 text-[15px] md:text-[17px]"
              {...fadeUp(0.05)}
            >
              We design, build and run <span className="text-white">AI-powered, cloud-native</span> systems that
              turn data into real business wins.
            </m.p>

            {/* Specialties (short) */}
            <m.div
              className="mt-5 flex flex-wrap gap-2.5 justify-center md:justify-start"
              {...fadeUp(0.1)}
            >
              {["GenAI Apps", "MLOps", "Data Pipelines", "Cloud DevOps"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-[12px] bg-white/10 border border-white/15 text-gray-100 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </m.div>

            {/* Value bullets (short) */}
            <m.ul
              className="mt-6 space-y-2.5 max-w-md mx-auto md:mx-0"
              {...fadeUp(0.12)}
            >
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-5 w-5 inline-flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs">
                  ✓
                </span>
                <span className="text-gray-200 text-[15px]">
                  Launch fast — reusable accelerators & weekly demos.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-5 w-5 inline-flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs">
                  ✓
                </span>
                <span className="text-gray-200 text-[15px]">
                  Secure by design — governance, guardrails, compliance.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 h-5 w-5 inline-flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-xs">
                  ✓
                </span>
                <span className="text-gray-200 text-[15px]">
                  24×7 reliability — SRE, observability, cost control.
                </span>
              </li>
            </m.ul>
          </div>

          {/* RIGHT – 3 process cards with parallax tilt */}
          <div className="relative flex items-center justify-center z-10 mt-10 md:mt-0">
            <div className="w-full md:w-[78%] space-y-5">
              <TiltCard title=" Discover & Plan" points={["Data & workflow audit", "Use-case ROI map"]} />
              <TiltCard
                title=" Build & Iterate"
                points={["LLM apps & vector search", "Real-time pipelines"]}
                delay={0.05}
              />
              <TiltCard
                title=" Deploy & Run"
                points={["CI/CD & monitoring", "Drift evaluation"]}
                delay={0.1}
              />
            </div>
          </div>
        </div>
      </LazyMotion>
    </div>
  );
};

/* ---------- Small parallax-tilt card ---------- */
const TiltCard: React.FC<{ title: string; points: string[]; delay?: number }> = ({
  title,
  points,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-20, 20], [6, -6]);
  const rotateY = useTransform(mx, [-20, 20], [-6, 6]);

  useEffect(() => {
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height;
    const nextX = (px - 0.5) * 40; // -20..20
    const nextY = (py - 0.5) * 40;

    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      mx.set(nextX);
      my.set(nextY);
    });
  };

  const onLeave = () => {
    if (frame.current) cancelAnimationFrame(frame.current);
    mx.set(0);
    my.set(0);
  };

  return (
    <m.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="bg-gradient-to-r from-white/10 to-transparent p-5 sm:p-6 rounded-xl border border-white/20 shadow-md will-change-transform transform-gpu"
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: EASE_OUT, delay }}
      whileHover={{ scale: 1.01 }}
    >
      <h3 className="font-medium text-lg sm:text-xl text-white">{title}</h3>
      <ul className="mt-2 text-gray-300 text-sm sm:text-[15px] list-disc list-inside space-y-1.5">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </m.div>
  );
};

export default Brilliance;
