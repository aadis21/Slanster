"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logos = [
  "/AILandingPage/logo-1.png",
  "/AILandingPage/logo-10.png",
  "/AILandingPage/logo-2.png",
  "/AILandingPage/logo-3.png",
  "/AILandingPage/logo-4.png",
  "/AILandingPage/logo-5.png",
  "/AILandingPage/logo-6.png",
  "/AILandingPage/logo-7.png",
  "/AILandingPage/logo-8.png",
  "/AILandingPage/logo-9.png",
];

const Companies = () => {
  const [index, setIndex] = useState(0);
  const [showEven, setShowEven] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % logos.length);
      setShowEven((prev) => !prev); // odd/even toggle
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getVisibleLogos = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 3; // mobile
      if (window.innerWidth < 1024) return 6; // tablet
      if (window.innerWidth < 1440) return 8; // laptop
      return 8; // big desktop
    }
    return 8;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleLogos());

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleLogos());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full flex justify-center py-12 bg-white overflow-hidden">
      {/* Left & Right blur */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />

      {/* Logos Grid */}
      <div
        className="grid gap-10 items-center relative z-0"
        style={{
          gridTemplateColumns: `repeat(${visibleCount}, minmax(0, 1fr))`,
        }}
      >
        {[...Array(visibleCount)].map((_, i) => {
          const logoIndex = (index + i) % logos.length;

          // decide animation group
          const isEven = i % 2 === 0;
          const shouldAnimate = showEven ? isEven : !isEven;

          return (
            <div
              key={i}
              className="w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-12 sm:h-14 md:h-16 lg:h-20 flex items-center justify-center overflow-hidden"
            >
              <AnimatePresence mode="popLayout">
                {shouldAnimate ? (
                  <motion.img
                    key={logoIndex}
                    src={logos[logoIndex]}
                    alt="company logo"
                    className="w-full h-auto object-contain"
                    initial={{ y: isEven ? 80 : -80, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: isEven ? -80 : 80, opacity: 0 }}
                    transition={{
                      duration: 1.2,
                      ease: "easeInOut",
                    }}
                  />
                ) : (
                  <motion.img
                    key={`static-${logoIndex}`}
                    src={logos[logoIndex]}
                    alt="company logo"
                    className="w-full h-auto object-contain"
                    initial={false}
                    animate={{ y: 0, opacity: 1 }}
                    exit={undefined} // ✅ fix: no animation on exit
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
