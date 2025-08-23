"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "../../../utils/AnimatedButton";

const LandingPage = () => {
  return (
    <section className="relative md:pt-0 pt-10 bg-gray-50 min-h-screen flex items-center justify-center px-6 md:px-18 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-7xl">
        {/* Left Content */}
        <div>
          <p className="text-sky-600 font-medium mb-4">
            YOUR IT, OUR EXPERTISE
          </p>
          {/* <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Building smarter, <br /> faster, and secure <br /> digital systems
          </h1> */}
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Future-Ready <br /> Digital Systems <br /> for Modern <br />{" "}
            Businesses
          </h1>
          <p className="text-gray-500 text-lg mb-8">
            We help businesses harness the power of technology to streamline
            operations, improve security, and grow faster.
          </p>
          <AnimatedButton>Let&apos;s get started</AnimatedButton>
        </div>

        {/* Right Content */}
        <div className="relative flex justify-center items-center">
          {/* Circle background */}
          <div className="w-60 h-80 md:w-[380px] md:h-[620px] rounded-full bg-gray-200 bg-opacity-50 flex items-center justify-center relative overflow-hidden md:my-0 my-10">
            {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-200 opacity-10" /> */}
            <div className="absolute inset-0 bg-[url('/home/landingmain.jpg')] bg-cover bg-center" />
          </div>

          {/* Visit HQ card */}
          {/* <div className="absolute right-0 top-5 md:w-54 w-44">
   
            <div className="flex justify-between items-center bg-white rounded-t-lg shadow-md p-4">
              <p className="text-gray-800 text-sm font-medium">
                Visit our <br /> headquarter
              </p>
              <span className="bg-black text-white p-1.5 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-12 hover:bg-blue-700 cursor-pointer">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>

            <div
              className="h-[15vh] rounded-b-lg bg-cover bg-center"
              style={{ backgroundImage: "url('/home/landingcard.jpg')" }}
            ></div>
          </div> */}

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
