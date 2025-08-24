"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

// Load Inter font
const inter = Inter({ subsets: ["latin"] });

const Placement = () => {
  return (
    <div
      className={`relative w-full min-h-screen flex items-center justify-center md:px-0 px-6 py-12 bg-white ${inter.className}`}
    >
      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 backdrop-blur-md p-8 md:p-16 min-h-[70vh]">
        {/* BACKGROUND SHADOW IMAGE */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <Image
            src="/home/PlacementLogos/bgshadow.png"
            alt="Background Shadow"
            fill
            className="object-cover opacity-70"
          />
        </div>

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <h2 className="text-4xl md:text-5xl text-gray-900 leading-tight">
            Your Career, Our Commitment
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Join our exclusive <span className="font-semibold">Super 30 Batch</span> and unlock career success with:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base md:text-lg space-y-2">
            <li>End-to-End Mentorship from industry experts</li>
            <li>Hands-on Training & Real-World Projects</li>
            <li>Guaranteed Placement Support in top companies</li>
          </ul>
          <p className="text-gray-600 text-base md:text-lg">
            Start your journey today and secure your future with confidence.
          </p>

          <div>
            <button className="bg-[#0f395f] cursor-pointer hover:bg-[#0d2f4a] transition-all duration-300 text-white px-8 py-3 rounded-lg flex items-center space-x-3 text-lg group overflow-hidden relative">
              <span className="relative z-10">Enroll Now</span>
              <span className="text-xl transform transition-transform duration-300 group-hover:translate-x-2 relative z-10">
                →
              </span>
              {/* Background Animation Overlay */}
              <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (LOGOS) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 place-items-center">
          {Array.from({ length: 9 }).map((_, i) => (
            <Image
              key={i}
              src={`/home/PlacementLogos/logo${i + 1}.png`}
              alt={`Logo ${i + 1}`}
              className="w-32 h-32 md:w-40 md:h-40 object-contain hover:scale-110 transition-transform duration-300"
              width={160}
              height={160}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Placement;
