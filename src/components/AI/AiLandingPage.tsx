"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AiLandingPage = () => {
  const images = [
    "/AIpage/service_3.png",
    "/AIpage/service_4.png",
    "/AIpage/service_5.png",
    "/AIpage/service_6.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 sec delay
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full min-h-screen md:py-12 py-6 md:px-0 px-4 bg-white flex flex-col items-center justify-center ">
      {/* Tag */}
      <div className="mb-4">
        <span
          className="inline-flex items-center gap-2 px-4 py-2 shadow-lg 
               text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 
               rounded-full border border-gray-300"
        >
          <span className="text-blue-600">✨</span>
          <span>Generative Business Intelligence </span>
        </span>
      </div>

      {/* Heading */}
      <h1
        className="font-dmsans text-center text-[28px] sm:text-[36px] md:text-5xl lg:text-5xl
               leading-[1.2] max-w-4xl mx-auto text-[#1C1F25]"
      >
        Revolutionizing Business Decisions <br className="block" />
        with AI-Powered Analytics
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 text-center max-w-2xl text-sm sm:text-base md:text-lg">
        Harnesses the power of artificial intelligence to transform your
        business data into actionable insights, propelling you to new heights of
        success
      </p>

      {/* Animated Image Section */}
      <div className="mt-12 w-full max-w-8xl md:px-25 px-4">
        <div className="bg-gradient-to-br from-[#084c74] to-[#084c74] rounded-xl p-6 sm:p-10 flex items-center justify-center relative overflow-hidden h-[350px] sm:h-[450px] lg:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 rounded-xl"
              style={{
                backgroundImage: `url(${images[currentIndex]}), radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                backgroundSize: "cover, 30px 30px",
                backgroundPosition: "center, center",
              }}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AiLandingPage;
