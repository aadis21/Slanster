"use client";

import React, { useEffect, useState } from "react";
import { BarChart3, Link, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const strategies = [
  {
    icon: <BarChart3 className="w-5 h-5 text-gray-700" />,
    title: "AI-Driven Forecasts",
    desc: "Harness the unmatched power of artificial intelligence with Neuros. Dive deep into predictive analytics, anticipate market trends...",
  },
  {
    icon: <Link className="w-5 h-5 text-gray-700" />,
    title: "Connect & Streamline",
    desc: "Integrate Slanster with your favorite tools, CRMs, and platforms. Create a smooth, unified workflow where your team and data work together effortlessly.",
  },
  {
    icon: <Zap className="w-5 h-5 text-gray-700" />,
    title: "Instant Insights",
    desc: "In the fast-paced world of business, every second counts. Neuros processes data in real-time, ensuring you’re always working with the latest insights...",
  },
];

const bgImages = [
  "/AIpage/service_7.png",
  "/AIpage/service_8.png",
  "/AIpage/service_9.png",
  "/AIpage/service_10.png",
];

// 🎨 Define multiple animation styles
const animations = [
  {
    initial: { opacity: 0, scale: 1.2, x: 50 },
    animate: { opacity: 1, scale: 1, x: 0 },
    exit: { opacity: 0, scale: 0.9, x: -50 },
  },
  {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  },
  {
    initial: { opacity: 0, rotate: -15, filter: "blur(10px)" },
    animate: { opacity: 1, rotate: 0, filter: "blur(0px)" },
    exit: { opacity: 0, rotate: 15, filter: "blur(10px)" },
  },
  {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
    exit: { opacity: 0, rotateY: -90 },
  },
];

const OurStrategies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animIndex, setAnimIndex] = useState(0);

  // automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
      setAnimIndex(Math.floor(Math.random() * animations.length)); // pick random animation
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-8xl mx-auto md:px-25 px-4 min-h-screen md:py-12 py-6 flex flex-col items-center">
        {/* Tag */}
        <div className="mb-4">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 shadow-lg 
               text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 
               rounded-full border border-gray-300"
          >
            <span className="text-blue-600">✨</span>
            <span>Our Strategies</span>
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-dmsans text-center md:text-5xl text-3xl
               leading-[1.2] max-w-4xl mx-auto text-[#1C1F25]"
        >
          Improve your Continuous <br className="block" />
          Design Data workflow
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 text-center max-w-2xl text-sm sm:text-base md:text-lg">
          Specify helps you gain control of your design system across teams and
          products.
        </p>

        {/* Strategy Cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-8xl md:px-0 px-4">
          {strategies.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                {item.icon}
                <h3 className="font-semibold text-gray-800 text-lg">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Wave Image with Random Animation */}
        <div className="mt-12 relative w-full rounded-xl overflow-hidden shadow-lg bg-[#084c74]">
          <div className="relative w-full h-[400px] sm:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={bgImages[currentIndex]}
                alt="Wave Design"
                className="absolute inset-0 w-full h-full object-fill bg-black rounded-xl"
                initial={{ opacity: 0, scale: 1.2, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -50 }}
                transition={{ duration: 1 }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStrategies;
