"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "../../../utils/AnimatedButton";

const LandingPage = () => {
  return (
    <section className="relative md:pt-0 pt-10 bg-gray-50 min-h-screen flex items-center justify-center px-6 md:px-18 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-sky-600 font-medium mb-4">
            YOUR IT, OUR EXPERTISE
          </p>
          <h1 className="text-3xl md:text-5xl  text-gray-900 leading-tight mb-6">
            Future-Ready <br /> Digital Systems <br /> for Modern <br />
            Businesses
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            We help businesses harness the power of technology to streamline
            operations, improve security, and grow faster.
          </p>
          <AnimatedButton>Let&apos;s get started</AnimatedButton>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative flex justify-end items-center">
          {/* Circle background */}
          <div className="w-60 h-80 md:w-[380px] md:h-[620px] rounded-full bg-gray-200 bg-opacity-50 flex items-center justify-center relative overflow-hidden md:my-0 my-10">
            <div className="absolute inset-0 bg-[url('/home/landingmain.jpg')] bg-cover bg-center" />
          </div>

          {/* Customer Satisfaction card */}
          <div className="absolute bottom-5 left-1/3 -translate-x-1/2 bg-white rounded-lg shadow-md p-4 w-48">
            <div className="flex justify-between items-center mb-1">
              <p className="text-gray-800 text-sm font-medium">
                Our customer <br /> satisfaction
              </p>
              <span className="bg-black text-white p-1.5 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-12 hover:bg-blue-700 cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
            <h3 className="text-5xl font-bold text-gray-900">150K+</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
