"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Wining = () => {
  return (
    <div className="bg-white py-10">
      <div
        className={`${inter.className} bg-gray-900 relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden`}
      >
        {/* Background dots */}
        <div className="absolute inset-0">
          <Image
            src="/services/dots.png"
            alt="dots background"
            fill
            className="object-cover"
          />
        </div>

        {/* Center blur shadow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full">
          <Image
            src="/services/Light.png"
            alt="blur shadow"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 py-16 sm:py-20">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug max-w-3xl mx-auto">
            Be a Part of the Winning Circle and Turn Our Expertise Into Your
            Business Growth.
          </h2>

          <button className="mt-6 px-6 py-2 bg-white text-black rounded-full font-medium shadow-md hover:bg-gray-100 transition z-10 cursor-pointer">
            Talk To Experts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wining;
