"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
// import AnimatedButton from "../../../utils/AnimatedButton";
import ContactModal from "../Header/ContactModal";

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
        src="/services/servicelanding.jpg"
        alt="Landing Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl sm:max-w-2xl text-white"
        >
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-snug md:leading-tight py-2 sm:py-4">
            Smarter Tech, <br className="hidden sm:block" /> Smarter Business.
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
            Empowering Businesses With AI, Cloud, And Digital Solutions For
            Startups And Enterprises.
          </p>

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
