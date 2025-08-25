"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutHeader = () => {
  return (
    <div className="bg-gray-50 py-5 md:py-16 px-4 md:px-10 lg:px-20 relative">
      <div className="absolute top-0 left-0 w-full flex justify-between items-start pointer-events-none z-0">
        <div className="hidden md:block relative flex flex-col items-center pt-5">
          <div className="w-32 h-74 border-t-2 border-r-2 border-blue-400 rounded-tr-3xl"></div>
          <div className="w-[2px] flex-1 bg-blue-400"></div>
        </div>

        <div className="hidden md:block relative flex flex-col items-center pt-5">
          {/* Horizontal + Curve (mirrored) */}
          <div className="w-32 h-74 border-t-2 border-l-2 border-blue-400 rounded-tl-3xl ml-auto"></div>
          {/* Vertical Line */}
          <div className="w-[2px] flex-1 bg-blue-400"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 relative z-10 pt-10">
        {/* Left Stat Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/80 backdrop-blur-sm shadow-md rounded-2xl px-10 py-6 text-center border border-blue-100 relative z-10"
        >
          <h3 className="text-3xl md:text-4xl text-blue-600">760 +</h3>
          <div className="w-full h-[1px] bg-gray-400 mx-auto my-3 rounded"></div>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Trust By People
          </p>
        </motion.div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* <span className="bg-white text-blue-600 px-4 py-1 rounded-full shadow-md text-sm font-medium">
              About Us!
            </span> */}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-2xl md:text-[64px] lg:text-[64px]  text-gray-900"
          >
            Providing <span className="text-blue-600">Quality Care</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-gray-600 text-sm md:text-base"
          >
            where we provide personalized and comprehensive healthcare services
            to help you live your best life
          </motion.p>
        </div>

        {/* Right Stat Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/80 backdrop-blur-sm shadow-md rounded-2xl px-10 py-6 text-center border border-blue-100 relative z-10"
        >
          <h3 className="text-3xl md:text-4xl text-blue-600">660 +</h3>
          <div className="w-full h-[1px] bg-gray-400 mx-auto my-3 rounded"></div>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Has Recovered
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHeader;
