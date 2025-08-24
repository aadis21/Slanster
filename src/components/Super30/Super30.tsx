"use client";
import Image from "next/image";
import React from "react";

const Super30 = () => {
  return (
    <div className="bg-white">
      <div className="relative w-full min-h-screen  px-4 sm:px-6 md:px-12 py-10 flex flex-col items-center backdrop-blur-md">
        {/* BACKGROUND SHADOW IMAGE */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center ">
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
              alt="super30image"
              width={400}
              height={400}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Cts Heaiurer
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 mt-1">
              Other Area
            </p>

            <p className="text-gray-700 mt-4 sm:mt-6 leading-relaxed text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s.
            </p>

            <p className="text-gray-700 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s. It has survived not only five centuries.
            </p>

            {/* BUTTON */}
            <button className="cursor-pointer mt-6 w-full sm:w-2/3 md:w-1/2 bg-[#0f395f] hover:bg-[#0d2f4a] transition-all duration-300 text-white px-6 py-3 rounded-lg flex justify-center items-center space-x-2 sm:space-x-3 text-base sm:text-lg shadow-md group overflow-hidden relative">
              <span className="relative z-10">Other Gr</span>
              <span className="text-lg sm:text-xl transform transition-transform duration-300 group-hover:translate-x-2 relative z-10">
                →
              </span>
              {/* Background Animation Overlay */}
              <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
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
              Ducimus qui blanditiis omnis dolor repellat
            </p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              93%
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              At vero eos et accusam qui blanditstin.
            </p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
              4.9
            </h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Righteous indignation foresee the pain an
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Super30;
