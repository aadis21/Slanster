"use client";
import React from "react";
import { Inter } from "next/font/google";
import { FaVideo, FaNotesMedical, FaUserShield } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Features = () => {
  const cards = [
    {
      id: 1,
      icon: <FaVideo />,
      title: "Telemedicine Service",
      desc: "Telemedicine services are an increasingly popular health solution, allowing patients to access medical consultations",
    },
    {
      id: 2,
      icon: <FaNotesMedical />,
      title: "Chronic Management",
      desc: "Management of chronic diseases such as diabetes, hypertension, and asthma requires ongoing monitoring and care",
    },
    {
      id: 3,
      icon: <FaUserShield />,
      title: "Elderly Health Services",
      desc: "Seniors have unique health needs and require special support. This plan is designed to provide comprehensive",
    },
  ];

  return (
    <div className={`${inter.className} bg-white py-16 px-6 md:px-12 lg:px-20`}>
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto">
        <p className="text-blue-600 font-medium mb-2">Features</p>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-xl leading-snug">
            Discover Our Feature Packed Solution
          </h2>
          <p className="text-gray-600 max-w-lg">
            Our platform offers a wide range of features and benefits that will
            revolutionize the way you manage your Healthcare. From advanced
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border p-6 shadow-sm 
                         transition-all duration-700 ease-out 
                         hover:shadow-2xl hover:scale-105 
                         hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600
                         hover:rotate-[1deg]"
            >
              {/* ICON */}
              <div
                className="w-12 h-12 flex items-center justify-center 
                           bg-blue-100 rounded-full mb-4 
                           transition-all duration-700 ease-out
                           group-hover:bg-white/20 group-hover:scale-110"
              >
                <div
                  className="text-blue-600 text-xl 
                             transition-colors duration-700 ease-out
                             group-hover:text-white"
                >
                  {item.icon}
                </div>
              </div>

              {/* TITLE */}
              <h3
                className="text-lg font-bold text-gray-900 mb-2 
                           transition-colors duration-700 ease-out
                           group-hover:text-white"
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="text-gray-600 text-sm leading-relaxed 
                           transition-colors duration-700 ease-out
                           group-hover:text-white/90"
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
