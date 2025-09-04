"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
// import AnimatedButton from "../../../utils/AnimatedButton";
import ContactModal from "../Header/ContactModal";
import { FaLocationArrow } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section
      className={`${inter.className} relative w-full h-1/2 md:h-screen md:py-0 py-10`}
    >
      {/* Background Image */}
      <Image
        src="/services/hero.webp"
        alt="Landing Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex md:items-start items-center h-full px-4 sm:px-8 md:px-16 lg:px-24 md:pt-[12%]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl text-white"
        >
          <h1 className="relative inline-block text-xl md:text-6xl leading-tight pt-0 sm:py-4">
            <span className="bg-gradient-to-r from-[#005888] to-transparent px-4 py-2">
              A Digital Fortress to Protect You
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 md:pt-12 pt-4">
            Empowering Businesses With AI, Cloud, And Digital Solutions For
            Startups And Enterprises.
          </p>

          <div className="mt-5 sm:mt-6 md:mt-8 w-full sm:w-auto md:pt-12 pt-5">
            <button
              onClick={() => setOpenModal(true)}
              className="border border-[#005888] hover:bg-[#005888] px-6 py-3 rounded-2xl text-white font-semibold transition duration-300 flex items-center gap-2 group cursor-pointer"
            >
              Get Started
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2 group-hover:scale-110">
                <FaLocationArrow className="animate-pulse" /> 
              </span>
            </button>
          </div>

          {/* Call to Action Button */}
          {/* <div className="mt-5 sm:mt-6 md:mt-8">
            <AnimatedButton
              showArrow
              className="mt-6 sm:mt-8 w-1/2 text-center justify-center"
              onClick={() => setOpenModal(true)}
            >
              Get Started
            </AnimatedButton>
          </div> */}
        </motion.div>
      </div>
      {/* modal  */}
      {openModal && (
        <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}
    </section>
  );
};

export default Services;
