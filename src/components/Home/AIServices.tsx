"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { FaBrain, FaIndustry, FaUsers, FaCogs, FaChartLine } from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const services = [
  {
    id: 1,
    label: "Predictive Analytics",
    heading: "Smarter Decisions with AI",
    desc: "Leverage AI-powered insights to forecast trends, spot risks, and unlock new opportunities with confidence.",
    points: ["Forecast trends with precision", "Spot risks before they happen", "Make data-driven decisions fast"],
  },
  {
    id: 2,
    label: "Intelligent Automation",
    heading: "Work Smarter with Automation",
    desc: "Automate tasks, streamline workflows, and boost efficiency with AI-driven intelligent systems.",
    points: ["Automate repetitive tasks", "End-to-end workflow efficiency", "Save time & reduce errors"],
  },
  {
    id: 3,
    label: "Computer Vision",
    heading: "AI That Sees & Understands",
    desc: "From real-time recognition to quality checks, our computer vision tech makes businesses smarter and faster.",
    points: ["Real-time image & video analysis", "Improve security & quality control", "Innovate with deep learning"],
  },
  {
    id: 4,
    label: "Natural Language Processing (NLP)",
    heading: "Next-Level Conversations",
    desc: "Power chatbots, assistants, and sentiment analysis with NLP that feels human-like and intuitive.",
    points: ["AI chatbots & virtual assistants", "Understand customer emotions", "Human-like communication at scale"],
  },
];

const circleIcons = [
  { id: 1, icon: <FaBrain size={20} />, label: "AI Intelligence" },
  { id: 2, icon: <FaIndustry size={20} />, label: "Industry" },
  { id: 3, icon: <FaUsers size={20} />, label: "Customers" },
  { id: 4, icon: <FaCogs size={20} />, label: "Automation" },
  { id: 5, icon: <FaChartLine size={20} />, label: "Insights" },
];

const AIServices = () => {
  const [active, setActive] = useState(1);
  const activeService = services.find((s) => s.id === active);

  const ringRef = useRef<HTMLDivElement | null>(null);
  const [ringSize, setRingSize] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      if (ringRef.current) setRingSize(ringRef.current.offsetWidth);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // ====== ICON OVERLAP TUNING ======
  const ICON_BOX = 56;   // badge size
  const BORDER_PX = 2;   // outer circle border width (border-2)
  const OVERLAP = 4;     // +ve => thoda bahar, 0 => bilkul stroke par
  // =================================

  // ====== ORBIT (CIRCLE MOVE) ======
  const orbit = useMotionValue(0);
  const counterOrbit = useTransform(orbit, (v) => -v); // icons upright

  useEffect(() => {
    const controls = animate(orbit, 360, {
      duration: 20,           // speed (sec per full round)
      ease: "linear",
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [orbit]);
  // =================================

  return (
    <div className="bg-white">
      <section className={`mx-auto max-w-7xl py-16 md:px-0 px-6 ${inter.className}`}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-lg md:text-xl text-gray-900 border border-gray-300 rounded-full shadow-2xl px-6 py-2 inline-block mx-auto">
            AI Services
          </h2>

          <h2 className="text-3xl md:text-5xl text-gray-900 mt-4">
            Full-spectrum of <span className="text-blue-600">AI-driven Solutions</span>
          </h2>

          <p className="text-lg text-gray-700 mt-2">Engineered for Global Impact</p>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {services.map((service) => (
            <motion.button
              key={service.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActive(service.id)}
              className={`px-5 py-2.5 rounded-full border transition-all duration-300 text-sm ${
                active === service.id
                  ? "bg-blue-600 text-white shadow-md border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-blue-600"
              }`}
            >
              {service.label}
            </motion.button>
          ))}
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Text */}
          <motion.div
            key={activeService?.id}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
              {activeService?.heading}
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              {activeService?.desc}
            </p>
            <ul className="space-y-3 text-gray-900 text-sm md:text-base">
              {activeService?.points.map((p, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span> {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Circular Icons */}
          <div className="flex-1 flex justify-center hidden md:flex">
            <div
              ref={ringRef}
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center overflow-visible"
            >
              {/* Outer circle */}
              <div className="absolute w-full h-full rounded-full border-2 border-gray-200" />

              {/* Rotating (orbiting) icons */}
              <motion.div
                style={{ rotate: orbit }}
                className="absolute inset-0"
              >
                {circleIcons.map((item, i) => {
                  const angle = (i / circleIcons.length) * 2 * Math.PI;
                  const center = ringSize / 2;

                  // Badge center exactly on the stroke; OVERLAP adjusts in/out
                  const radius = center - BORDER_PX / 2 + OVERLAP;

                  const x = center + radius * Math.cos(angle) - ICON_BOX / 2;
                  const y = center + radius * Math.sin(angle) - ICON_BOX / 2;

                  return (
                    <div
                      key={item.id}
                      className="absolute flex items-center justify-center"
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                        width: ICON_BOX,
                        height: ICON_BOX,
                      }}
                    >
                      {/* Counter-rotate so icon stays upright while orbiting */}
                      <motion.div
                        style={{ rotate: counterOrbit }}
                        className="w-full h-full flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 text-blue-600"
                      >
                        {React.cloneElement(item.icon, { size: 28 })}
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              {/* Center Logo */}
              <div className="p-5 flex items-center justify-center z-10">
                <Image src="/logo.png" alt="Logo" width={150} height={150} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServices;
