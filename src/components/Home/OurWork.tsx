"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";

import Img1 from "../../../public/home/team/team-1.jpg";
import Img2 from "../../../public/home/team/team-2.jpg";
import Img3 from "../../../public/home/team/team-3.jpg";
import Img4 from "../../../public/home/team/team-4.jpg";
import Img5 from "../../../public/home/team/team-5.jpg";
import Img6 from "../../../public/home/team/team-6.jpg";

const inter = Inter({ subsets: ["latin"] });

type CardProps = {
  title: string;
  company: string;
  image: StaticImageData;
};

const Card: React.FC<CardProps> = ({ title, company, image }) => (
  <div className="group cursor-pointer flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[340px] px-3">
    {/* Image Frame */}
    <div className="relative rounded-xl h-[220px] sm:h-[240px] md:h-[260px] lg:h-[280px] overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-xl">
      <Image
        src={image}
        alt={title}
        fill
        className="object-fill transform transition-transform duration-500 group-hover:scale-110"
      />
    </div>

    {/* Caption */}
    <h3 className="mt-2 text-[14px] font-normal text-gray-300 group-hover:text-white transition">
      {title}
    </h3>
    <p className="text-[12px] text-gray-400 font-normal">{company}</p>
  </div>
);

const OurWork: React.FC = () => {
  const cards = [
    { title: "E-Commerce Website", company: "Sparkling", image: Img1 },
    { title: "System Optimization", company: "Dataphea", image: Img2 },
    { title: "IT Strategy", company: "Ampliedeck", image: Img3 },
    { title: "Business Automation", company: "Techlabs", image: Img4 },
    { title: "UI/UX Design", company: "Designify", image: Img5 },
    { title: "Cloud Services", company: "Cloudex", image: Img6 },
  ];

  return (
    <section className={`bg-[#0F1720] text-white ${inter.className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 items-start">
          {/* Left Column - Heading */}
          <div>
            <p className="text-[18px] text-[#8B93A1] mb-3 font-normal">
              Featured Work
            </p>
            <h2 className="text-[54px] leading-[64px] tracking-[-0.0225em] font-normal">
              Meet the <br /> mentors <br /> shaping <br /> tomorrow
            </h2>

            <button
              className="mt-6 inline-flex items-center rounded-full text-gray-900 bg-[#FFD84D] px-6 py-3 text-sm font-normal shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translate-y-1 cursor-pointer"
              type="button"
            >
              🚀 See All Work
            </button>
          </div>

          {/* Right Column - Carousel with Cards */}
          <div className="col-span-3 overflow-hidden">
            <div className="flex w-[200%] animate-slide">
              {[...cards, ...cards].map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  company={card.company}
                  image={card.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
