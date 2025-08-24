"use client";
import Image from "next/image";
import React from "react";

const Super30 = () => {
  return (
    <div className="bg-white">
      <div className="relative w-full min-h-screen px-4 sm:px-6 md:px-12 py-10 flex flex-col items-center backdrop-blur-md">
        {/* BACKGROUND SHADOW IMAGE */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <Image
            src="/home/PlacementLogos/bgshadow.png"
            alt="Background Shadow"
            fill
            className="object-cover opacity-50"
          />
        </div>

        {/* MAIN GRID */}
        <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE BOX */}
          <div className="w-full h-[280px] sm:h-[350px] md:h-[420px] border border-blue-600 p-2 rounded-2xl flex justify-center">
            <Image
              className="object-cover rounded-xl"
              src="/home/super30image.jpeg"
              alt="Super 30 Batch"
              width={400}
              height={400}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Super 30 Batch
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-600 mt-1 font-semibold">
              Your Pathway to Guaranteed Success
            </p>

            <p className="text-gray-700 mt-4 sm:mt-6 leading-relaxed text-sm sm:text-base">
              An exclusive career-focused program for ambitious learners. With
              live projects, expert mentorship, and personalized guidance — we
              ensure you don’t just learn, you get placed.
            </p>

            <p className="text-gray-700 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
              From mastering in-demand skills to cracking real-world interviews,
              our Super 30 students consistently land their dream jobs.
            </p>

            {/* BUTTON */}
            <button className="cursor-pointer mt-6 w-full sm:w-2/3 md:w-1/2 bg-[#0f395f] hover:bg-[#0d2f4a] transition-all duration-300 text-white px-6 py-3 rounded-lg flex justify-center items-center space-x-2 sm:space-x-3 text-base sm:text-lg shadow-md group relative animate-bounce">
              <span className="relative z-10">Enroll in Super 30</span>
              <span className="text-lg sm:text-xl transform transition-transform duration-300 group-hover:translate-x-2 relative z-10">
                →
              </span>
            </button>
          </div>
        </div>

        {/* STATS SECTION */}
        <div className="max-w-7xl w-full sm:w-[85%] md:w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 text-center md:text-left">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              1M+
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Students trained & mentored
            </p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              93%
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Placement success rate
            </p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              4.9/5
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Learner satisfaction score
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Super30;
