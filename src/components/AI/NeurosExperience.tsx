"use client";

import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    text: "Project management is smoother with Neuros. Its dashboards provide a clear view of progress and areas of improvement.",
    name: "Nathan D. Hall",
    role: "Project Lead",
  },
  {
    text: "Neuros's real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.",
    name: "Naomi K. Johnson",
    role: "Product Manager",
  },
  {
    text: "Real-time data processing with Neuros has changed how we make decisions. It's a must-have tool for modern businesses.",
    name: "Michael O. Lopez",
    role: "Operations Director",
  },
  {
    text: "Thanks to Neuros, our workflows are far more efficient and transparent. It’s a powerful tool for scaling companies.",
    name: "Sophia M. Clark",
    role: "CTO",
  },
  {
    text: "Project management is smoother with Neuros. Its dashboards provide a clear view of progress and areas of improvement.",
    name: "Nathan D. Hall",
    role: "Project Lead",
  },
  {
    text: "Neuros's real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.",
    name: "Naomi K. Johnson",
    role: "Product Manager",
  },
  {
    text: "Real-time data processing with Neuros has changed how we make decisions. It's a must-have tool for modern businesses.",
    name: "Michael O. Lopez",
    role: "Operations Director",
  },
  {
    text: "Thanks to Neuros, our workflows are far more efficient and transparent. It’s a powerful tool for scaling companies.",
    name: "Sophia M. Clark",
    role: "CTO",
  },
];

const NeurosExperience = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 8000, // total duration for one slide (adjust)
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    rtl: true, // reverse direction
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, variableWidth: true } },
      { breakpoint: 640, settings: { slidesToShow: 1, variableWidth: true } },
    ],
  };


  return (
    <div className="w-full py-12 bg-white">
      <div className="text-center mb-8">
        <h2
          className="font-dmsans text-center md:text-5xl text-3xl
               leading-[1.2] max-w-4xl mx-auto text-[#1C1F25]"
        >
          The Neuros Experience
        </h2>
        <p className="text-gray-500 mt-4">
          At Neuros, we pride ourselves on delivering top-notch AI-driven
          business analytics. Hear what our satisfied users have to say.
        </p>
      </div>

      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <div key={i} className="px-2 pt-12" style={{ width: 350 }}>
            <div className="rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col h-[400px]">
              {/* Text section centered vertically */}
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-700 text-base text-center">{t.text}</p>
              </div>

              {/* Author section at bottom */}
              <div className="flex flex-col items-center mt-6">
                <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold">
                  {t.name[0]}
                </div>
                <p className="mt-3 font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NeurosExperience;
