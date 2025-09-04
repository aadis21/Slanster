"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import ContactModal from "../Header/ContactModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Discuss = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-white">
      <div
        className={`${inter.className} max-w-7xl md:px-16 mx-auto px-4 py-12`}
      >
        {/* Flex row desktop, stacked column mobile */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          {/* Left Text Section */}
          <div className="w-full lg:max-w-4xl">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight whitespace-normal lg:whitespace-nowrap">
              Computer Vision{" "}
              <span className="text-[#024a71]">Solutions</span> That Create
              Resonance Across Industries
            </h1>
            <p className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl">
              While solving unique business challenges, our computer vision
              solutions not just turn ideas into impact, they transform impact
              into resonance across key industries.
            </p>
          </div>

          {/* Right Button Section */}
          <div className="flex w-full lg:w-auto lg:self-center mt-4 lg:mt-6">
            <button
              className="bg-[#024a71] hover:bg-[#03608f] text-white font-medium px-6 py-3 rounded-md shadow-md transition cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              Discuss Your Needs
            </button>
          </div>
        </div>
      </div>
      {/* modal */}
      {openModal && (
        <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
};

export default Discuss;
