"use client";
import React, { useEffect, useRef, useState } from "react";
import { Target, Eye, Crosshair } from "lucide-react";
import { motion } from "framer-motion";

type Item = {
  title: string;
  subtitle: string;
  body: string;
  icon: React.ReactNode;
  side: "left" | "right";
};

const items: Item[] = [
  {
    title: "Our Mission",
    subtitle: "Crafting reliable, innovative IT for a faster digital world",
    body:
      "At Slanster, our mission is to deliver reliable and innovative IT solutions that help businesses adapt, grow, and stay ahead in a fast-changing digital world. Alongside this, we prepare talented minds with in-demand skills the industry truly needs—combining client delivery excellence with workforce development so businesses succeed and professionals thrive.",
    icon: <Target className="h-7 w-7 text-blue-600" />,
    side: "left",
  },
  {
    title: "Our Vision",
    subtitle: "Be the trusted consultancy & career accelerator",
    body:
      "Our vision is to be recognized as a trusted IT consultancy known for solving complex business challenges with technology while serving as a career accelerator for tomorrow’s leaders. We bridge the gap between academic learning and industry requirements so talented minds become confident professionals who drive impact and innovation in global consulting and IT firms.",
    icon: <Eye className="h-7 w-7 text-blue-600" />,
    side: "right",
  },
  {
    title: "Our Focus",
    subtitle: "Delivery for clients, development for talent",
    body:
      "We build cutting-edge IT solutions in consulting, cloud, automation, and cybersecurity—while nurturing the next wave of industry-ready professionals with hands-on exposure, internship certifications, and placement support. By aligning business delivery with talent development, Slanster creates sustainable value for organizations and individuals alike.",
    icon: <Crosshair className="h-7 w-7 text-blue-600" />,
    side: "left",
  },
];

export default function MissionTimeline() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progressPx, setProgressPx] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height;
      const startOffset = window.innerHeight * 0.2;
      const visibleScrolled = Math.min(Math.max(startOffset - rect.top, 0), total);
      setProgressPx(visibleScrolled);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Small animation presets
  const titleAnim = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };
  const subAnim   = { hidden: { opacity: 0, y: 8 },  show: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.05 } } };
  const bodyAnim  = { hidden: { opacity: 0 },        show: { opacity: 1, transition: { duration: 0.45, delay: 0.12 } } };

  return (
    <section ref={sectionRef} className="w-full bg-white py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative grid gap-12 md:gap-16 md:grid-cols-[1fr_2.5rem_1fr]">
          {/* Center line + progress */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[4px]">
            <div className="absolute inset-0 bg-gray-200 rounded-full" />
            <div
              className="absolute left-0 top-0 w-full bg-blue-600 rounded-full"
              style={{ height: progressPx, transition: "height 250ms ease-out" }}
            />
          </div>

          {items.map((item, i) => {
            const isLeft = item.side === "left";

            const Card = (
              <div className="relative rounded-xl bg-white">
                <div className="flex items-start gap-4">
                  {/* Animated Icon */}
                  <motion.div
                    className="shrink-0 rounded-full border-2 border-dashed border-blue-300 p-3 bg-white relative"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.06, rotate: 2 }}
                  >
                    {/* subtle glow ring */}
                    <span className="pointer-events-none absolute inset-0 rounded-full shadow-[0_0_16px_2px_rgba(59,130,246,0.25)]" />
                    {item.icon}
                  </motion.div>

                  {/* Text block */}
                  <div>
                    <motion.h3
                      variants={titleAnim}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      whileHover={{ y: -2 }}
                      className="text-[18px] md:text-lg font-semibold text-gray-900"
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      variants={subAnim}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      className="relative inline-block mt-1 text-[13px] font-medium text-blue-600"
                    >
                      {item.subtitle}
                      {/* animated underline */}
                      <span className="block h-[2px] w-0 bg-blue-600 mt-1 animate-underline" />
                    </motion.p>

                    <motion.p
                      variants={bodyAnim}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.25 }}
                      className="mt-3 text-[14.5px] md:text-[15px] leading-relaxed text-gray-600"
                    >
                      {item.body}
                    </motion.p>
                  </div>
                </div>
              </div>
            );

            return (
              <React.Fragment key={i}>
                {isLeft ? (
                  <>
                    <div className="md:col-start-1">{Card}</div>
                    <div className="hidden md:flex md:col-start-2 items-start justify-center">
                      {/* Center dot (glow + pulse) */}
                      <span className="mt-6 h-5 w-5 rounded-full bg-white border-4 border-blue-600 shadow-[0_0_14px_6px_rgba(59,130,246,0.55)] animate-[pulseGlow_2s_ease-in-out_infinite]" />
                    </div>
                    <div className="hidden md:block md:col-start-3" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block md:col-start-1" />
                    <div className="hidden md:flex md:col-start-2 items-start justify-center">
                      <span className="mt-6 h-5 w-5 rounded-full bg-white border-4 border-blue-600 shadow-[0_0_14px_6px_rgba(59,130,246,0.55)] animate-[pulseGlow_2s_ease-in-out_infinite]" />
                    </div>
                    <div className="md:col-start-3">{Card}</div>
                  </>
                )}

                {/* Mobile connector */}
                <div className="md:hidden col-span-full">
                  <div className="relative mx-6 my-6">
                    <div className="h-[2px] w-full bg-gray-200" />
                    <span className="absolute left-1/2 -top-[6px] h-3 w-3 -translate-x-1/2 rounded-full bg-blue-600 shadow-[0_0_10px_3px_rgba(59,130,246,0.5)]" />
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* local CSS for underline + pulse */}
      <style jsx>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 14px 6px rgba(59,130,246,0.55); }
          50%      { box-shadow: 0 0 22px 10px rgba(59,130,246,0.85); }
        }
        @keyframes underline-swipe {
          0% { width: 0; opacity: 0.2; }
          100% { width: 100%; opacity: 1; }
        }
        .animate-underline {
          animation: underline-swipe 0.9s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
