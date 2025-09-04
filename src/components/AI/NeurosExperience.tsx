"use client";

import React from "react";
import Slider from "react-slick";

const testimonials = [
  {
    text: "With Slanster’s AI chatbots, our customer queries are resolved instantly. It feels like we’ve scaled our support team without increasing manpower.",
    name: "Priya Malhotra",
    role: "Customer Experience Manager",
  },
  {
    text: "The AI proposal generator has saved us days of effort. What earlier took an entire team’s manual work is now done in minutes—precise, structured, and client-ready.",
    name: "Rajesh Sharma",
    role: "Business Development Lead",
  },
  {
    text: "Slanster’s voice AI has improved our outbound calls significantly. Clients feel like they’re speaking to a real person, and our conversions have gone up noticeably.",
    name: "Sofia Nair",
    role: "Operations Head",
  },
  {
    text: "We use Slanster for market insights. Their AI crawlers give us real-time competitor updates that help us take faster decisions and stay ahead.",
    name: "Arjun Mehta",
    role: "Strategy Consultant",
  },
  {
    text: "Slanster’s AI analytics give us instant clarity on performance. Instead of waiting weeks for MIS reports, our teams now act on real-time insights.",
    name: "Sneha Patel",
    role: "Data & Analytics Head",
  },
  {
    text: "The integration was seamless. Slanster connected with our CRM and marketing tools within minutes, saving us both time and setup cost.",
    name: "Raghav Verma",
    role: "Marketing Technology Lead",
  },
  {
    text: "Our recruitment cycle became faster with Slanster’s AI screening tools. Shortlisting candidates is now objective, bias-free, and quick.",
    name: "Ankita Joshi",
    role: "HR Manager",
  },
  {
    text: "As a bank, security is critical. Slanster’s AI fraud detection alerts us instantly, helping us safeguard customers without delays.",
    name: "Kunal Deshmukh",
    role: "Risk & Compliance Officer",
  },
  {
    text: "In healthcare, timely support matters most. Slanster’s AI chatbots now assist our patients with instant answers, reducing hospital desk load drastically.",
    name: "Dr. Neha Kapoor",
    role: "Healthcare Administrator",
  },
  {
    text: "For our e-commerce business, Slanster’s recommendation engine boosted sales. Customers now get highly relevant product suggestions that feel personalized.",
    name: "Varun Iyer",
    role: "E-commerce Head",
  },
  {
    text: "Education has transformed with Slanster’s AI tutors. Our students get instant feedback on practice tests, which has improved learning outcomes.",
    name: "Meera Reddy",
    role: "Academic Coordinator",
  },
  {
    text: "In logistics, speed is everything. Slanster’s AI route optimizer cut our delivery time and fuel costs, giving us an edge in a competitive market.",
    name: "Deepak Choudhary",
    role: "Supply Chain Manager",
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
    <div className="w-full py-10 bg-white min-h-screen">
      <div className="text-center">
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
          <div key={i} className="px-2 pt-10" style={{ width: 350 }}>
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
