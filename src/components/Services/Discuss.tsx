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
      <div className={`${inter.className}  max-w-8xl md:px-22 mx-auto px-4 py-12`}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          {/* Left Text Section */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              Computer Vision <span className="text-[#024a71]">Solutions</span>{" "}
              That Create Resonance Across <br /> Industries
            </h1>
            <p className="mt-4 text-gray-600 text-base max-w-2xl">
              While solving unique business challenges, our computer vision
              solutions not just turn ideas into impact, they transform impact
              into resonance across key industries.
            </p>
          </div>

          {/* Right Button Section */}
          <div>
            <button
              className="bg-[#024a71] hover:bg-[#024a71] text-white font-medium px-6 py-2 rounded-md shadow-sm transition cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              Discuss Your Needs
            </button>
          </div>
        </div>
      </div>
      {/* modal  */}
      {openModal && (
        <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
};

export default Discuss;
