"use client"
import Image from "next/image";
import React, { useState } from "react";
import ContactModal from "../Header/ContactModal";

const GetInTouch = () => {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div className="bg-white">
      <div className="w-full flex justify-center px-4">
        <div className="w-full max-w-7xl rounded-xl shadow-md bg-gradient-to-r from-[#0a1b3d] to-[#121b2f] p-6 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
          {/* === Background Decorative Images (responsive positions & sizes) === */}

          {/* Top Left Polygon */}
          <div className="absolute top-0 left-0 w-1/4 sm:w-1/6 md:w-1/6 h-1/3 md:h-full opacity-40">
            <Image
              src="/services/Polygon1.png"
              alt="Vector9"
              fill
              className="object-contain"
            />
          </div>

          {/* Top Right Vector */}
          <div className="absolute top-0 right-0 w-1/3 sm:w-1/4 md:w-1/4 h-1/3 md:h-full opacity-30">
            <Image
              src="/services/Vector4.png"
              alt="Polygon"
              fill
              className="object-contain"
            />
          </div>

          {/* Bottom Right Ellipse */}
          <div className="absolute bottom-0 right-0 w-1/2 sm:w-1/3 md:w-1/4 h-1/4 md:h-full opacity-30">
            <Image
              src="/services/Ellipse5.png"
              alt="Ellipse"
              fill
              className="object-contain"
            />
          </div>

          {/* Bottom Left Vector */}
          <div className="absolute bottom-0 left-4 sm:left-10 w-1/2 sm:w-1/3 md:w-1/3 h-[15vh] sm:h-[20vh] md:h-[25vh] opacity-30">
            <Image
              src="/services/Vector9.png"
              alt="Vector4"
              fill
              className="object-contain"
            />
          </div>

          {/* Extra Background Glows */}
          <div className="absolute left-0 top-0 h-full w-[300px] opacity-60">
            <Image
              src="/services/blurleft.png"
              alt="blur left"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute right-0 top-0 h-full w-[300px] opacity-60">
            <Image
              src="/services/blurright.png"
              alt="blur right"
              fill
              className="object-cover"
            />
          </div>

          {/* === Left Text === */}
          <div className="text-center md:text-left z-10">
            <h2 className="text-white font-bold text-xl sm:text-2xl md:text-3xl leading-snug">
              Elevate your business <br />
              with our innovative solution
            </h2>
          </div>

          {/* === Right Button === */}
          <div className="mt-6 md:mt-0 z-10 relative">
            <button
              className="relative bg-[#024a71] hover:bg-[#024a71] text-white font-semibold px-6 py-3 sm:px-10 sm:py-4 md:px-12 md:py-4 rounded-full shadow-lg transition z-10 cursor-pointer"
              onClick={() => setOpenModal(true)}
            >
              Get in touch
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

export default GetInTouch;
