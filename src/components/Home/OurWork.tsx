"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

import Img1 from "../../../public/home/team/team-1.jpg";
import Img2 from "../../../public/home/team/team-2.jpg";
import Img3 from "../../../public/home/team/team-3.jpg";
import Img4 from "../../../public/home/team/team-4.jpg";
import Img5 from "../../../public/home/team/team-5.jpg";
import Img6 from "../../../public/home/team/team-6.jpg";

type CardProps = {
  title: string;
  company: string;
  image: StaticImageData;
};

const Card: React.FC<CardProps> = ({ title, company, image }) => (
  <div className="group cursor-pointer">
    {/* Image */}
    <div className="relative rounded-2xl aspect-square w-full overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-xl">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
        <p className="text-white text-sm font-semibold">View More</p>
      </div>
    </div>

    {/* Caption */}
    <h3 className="mt-3 text-[14px] font-semibold text-gray-300 group-hover:text-white transition">
      {title}
    </h3>
    <p className="text-[12px] text-gray-400">{company}</p>
  </div>
);

const OurWork: React.FC = () => {
  return (
    <section className="bg-[#0F1720] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 items-start">
          {/* Row 1 - Col 1 */}
          <div>
            <p className="text-[18px] text-[#8B93A1] mb-3">Featured Work</p>
            <h2 className="text-[54px] leading-[64px] tracking-[-0.0225em] font-medium">
              Meet the <br /> mentors <br /> shaping <br /> tomorrow
            </h2>

            <button
              className="mt-6 inline-flex items-center rounded-full text-gray-900 bg-[#FFD84D] px-6 py-3 text-sm font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translate-y-1"
              type="button"
            >
              🚀 See All Work
            </button>
          </div>

          {/* Cards */}
          <Card title="E-Commerce Website" company="Sparkling" image={Img4} />
          <Card title="System Optimization" company="Dataphea" image={Img5} />
          <Card title="IT Strategy" company="Ampliedeck" image={Img6} />
        </div>
      </div>
    </section>
  );
};

export default OurWork;
