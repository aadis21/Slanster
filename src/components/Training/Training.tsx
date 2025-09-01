"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Training = () => {
  return (
    <div
      className={`bg-white text-gray-900 md:min-h-[70vh] h-[40vh]  flex items-center justify-center px-4 ${inter.className}`}
    >
      <div className="relative border-4 border-[#DCE3FF] rounded-3xl p-6 md:p-12 max-w-8xl md:mx-25 w-full text-center flex flex-col items-center justify-center shadow-sm">
        {/* Top Right Shape */}
        <div className="absolute -top-0 md:-top-5 right-[-6vw] md:right-[-4vw]">
          <Image
            src="/trainingimg/Ellipse.png"
            alt="no image"
            width={220}
            height={150}
            className="md:w-[15rem] md:h-[15rem] w-[4rem] h-[2rem] object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-[45px] lg:text-[52px leading-snug">
          Teaching in the Internet age <br />
          means we must teach <span className="text-blue-600">tomorrow’s</span>
          <br />
          <span className="flex items-center justify-center gap-2 md:gap-4 md:mt-3 mt-0">
            <p className="">skills today</p>
            <Image
              src="/trainingimg/arrow.png"
              alt="arrow"
              width={120}
              height={80}
              className="md:w-[8vw] w-[6vw]  md:min-w-[60px] md:max-w-[100px] object-contain"
            />
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 mt-4 text-sm md:text-base max-w-2xl mx-auto md:w-full w-1/2">
          Provides you with the latest online learning system and material that
          help your
        </p>

        {/* Left Image */}
        <div className="absolute -bottom-8 -left-6">
          <Image
            src="/trainingimg/groupimage.png"
            alt="Left Person"
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Right Image */}
        <div className="absolute -bottom-8 -right-6">
          <Image
            src="/trainingimg/groupimage1.png"
            alt="Right Person"
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Training;
