"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";

import Img1 from "../../../public/home/Mentors/Chirag.png";
import Img2 from "../../../public/home/Mentors/Divyansh.png";
import Img3 from "../../../public/home/Mentors/Emma.png";
import Img4 from "../../../public/home/Mentors/Nathan.png";
import Img5 from "../../../public/home/Mentors/Shubham.png";
import Img6 from "../../../public/home/Mentors/Vineet.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type CardProps = {
  name: string;
  role: string;
  experience: string;
  description: string;
  image: StaticImageData;
};

const Card: React.FC<CardProps> = ({
  name,
  role,
  experience,
  description,
  image,
}) => (
  <div
    className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden 
               w-[260px] sm:w-[280px] md:w-[300px] flex-shrink-0 mx-3 
               transition-all duration-300 flex flex-col h-[460px]" // fixed card height
  >
    {/* Image Frame (fixed height for all) */}
    <div className="relative h-[200px] bg-gray-200">
      <Image src={image} alt={name} fill className="object-cover" />
    </div>

    {/* Content */}
    <div className="p-4 flex flex-col flex-1">
      {/* Name + Logo Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-gray-900 font-semibold text-[15px]">{name}</h3>
        {/* <span className="text-gray-400 text-xs">🌐 logo</span> */}
      </div>

      {/* Role + Exp */}
      <p className="text-[13px] text-gray-500 mb-2">
        {role} {experience && `| ${experience}`}
      </p>

      {/* Description */}
      <p className="text-[13px] text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Book Now Button (always bottom) */}
      <button
        className="mt-auto w-full bg-[#0F395F] text-white text-sm py-2 
                   rounded-md font-medium hover:bg-[#0F395F] hover:scale-105 transition cursor-pointer"
      >
        Book Now
      </button>
    </div>
  </div>
);


const OurWork: React.FC = () => {
  const cards = [
    {
      name: "Chirag Rellan",
      role: "Experienced Automotive Software Engineer",
      experience: "5+ Yrs Of Experience",
      description:
        "Chirag has 5+ years of automotive software development experience and brings a wealth of expertise to his role. He is based in European Tech Hub Berlin, Germany.",
      image: Img1,
    },
    {
      name: "Divyansh Juneja",
      role: "Assistant Director, URA",
      experience: "",
      description:
        "Divyansh is Assistant Director at the URA, He specializes in preparing top talent through various AI platform interventions for success in today's competitive job market.",
      image: Img2,
    },
    {
      name: "Emma Thompson",
      role: "Product Manager",
      experience: "",
      description:
        "Emma is a Product Manager at Correctly Simple AI, specializing in transitioning cutting-edge Gen AI models from research to production.",
      image: Img3,
    },
    {
      name: "Nanthan Francis",
      role: "Machine Learning Staff Engineer",
      experience: "8+ Yrs Of Experience",
      description:
        "Nathan is a Machine Learning Engineer with over 8 years of experience. He currently works on Generative AI at Snapcode and previously developed text-to-image search at FAANG.",
      image: Img4,
    },
    {
      name: "Shubham Sarohi",
      role: "Business and Strategy Mentor",
      experience: "",
      description:
        "Shubham is a Product Owner and Strategy Consultant, He helps clients achieve their digital potential by delivering innovative solutions that address their complex challenges and goals.",
      image: Img5,
    },
    {
      name: "Vineet Chopra",
      role: "Manager at Big4",
      experience: "",
      description:
        "Vineet is a seasoned Manager at EY, with expertise in financial risk assessment, regulatory compliance, and business process optimization across multiple industries.",
      image: Img6,
    },
  ];

  return (
    <section className={`bg-[#0F395F] text-white ${inter.className}`}>
      <div className="max-w-7xl md:px-0 px-2 mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h2 className="text-[32px] md:text-[52px] lg:text-[52px] leading-snug">
              Meet Your Mentors
            </h2>
            <p className="mt-4 text-gray-300 text-[15px] leading-relaxed">
              Learn from industry experts with practical insights and
              personalized guidance to elevate your skills.
            </p>

            <button
              className="md:mt-12 mt-5 inline-flex items-center rounded-md 
                         text-[#0A2852] bg-white px-6 py-3 text-sm font-medium 
                         shadow-md hover:shadow-lg transition-transform hover:scale-105"
              type="button"
            >
              Get Personalized Advice
            </button>
          </div>

          {/* Right Column - Slider */}
          <div className="lg:col-span-7 overflow-hidden">
            <div className="flex w-[200%] animate-slide hover:[animation-play-state:paused]">
              {[...cards, ...cards].map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
