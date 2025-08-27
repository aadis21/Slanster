"use client";

import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    text: "With Slanster’s AI chatbots, our customer response time dropped from hours to seconds. It feels like we finally scaled our support team without adding headcount.",
    name: "Priya Malhotra",
    role: "Customer Experience Manager",
  },
  {
    text: "The AI proposal generator saved us countless hours. What used to take days of manual effort is now done in minutes—accurate, polished, and client-ready.",
    name: "James R. Carter",
    role: "Business Development Lead",
  },
  {
    text: "Slanster’s voice AI has transformed our outbound calling. Clients feel like they’re talking to a real person, and our conversions have never been better.",
    name: "Sofia Alvarez",
    role: "Operations Head",
  },
  {
    text: "We rely on Slanster for market intelligence. Their AI crawlers give us real-time competitor insights that help us stay ahead without drowning in data.",
    name: "Arjun Mehta",
    role: "Strategy Consultant",
  },
  {
    text: "Hiring is faster and smarter now. The AI resume screener and interview bot make our recruitment process seamless and bias-free.",
    name: "Linda Zhang",
    role: "HR Director",
  },
  {
    text: "Slanster’s AI analytics give us instant clarity on performance. Instead of waiting weeks for reports, our teams act on real-time insights.",
    name: "Smeeksha Patel",
    role: "Data & Analytics Head",
  },
  {
    text: "The integration process was effortless. Slanster connected with our CRM and marketing tools in minutes, saving us huge setup costs.",
    name: "Raghav",
    role: "Marketing Technology Lead",
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
    The Slanster Experience
  </h2>
  <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
    At Slanster, we build AI solutions that simplify work, drive growth, 
    and spark innovation. But don’t just take our word for it—see what our 
    clients and partners have to say.
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
