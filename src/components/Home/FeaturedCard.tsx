"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";

import testImage1 from "../../../public/FeaturedCard/industry1.png";
import testImage2 from "../../../public/FeaturedCard/industry2.png";
import testImage3 from "../../../public/FeaturedCard/industry3.png";
import testImage4 from "../../../public/FeaturedCard/industry4.png";
import testImage5 from "../../../public/FeaturedCard/industry5.png";
import testImage6 from "../../../public/FeaturedCard/industry6.png";
import testImage7 from "../../../public/FeaturedCard/industry7.png";
import testImage8 from "../../../public/FeaturedCard/industry8.png";
import testImage9 from "../../../public/FeaturedCard/industry9.png";
import testImage10 from "../../../public/FeaturedCard/industry10.png";

const inter = Inter({ subsets: ["latin"] });

interface CardType {
  id: number;
  title: string;
  image: StaticImageData;
}

const cards: CardType[] = [
  { id: 1, title: "Healthcare", image: testImage1 },
  { id: 2, title: "Food & Beverages", image: testImage3 },
  { id: 3, title: "E-commerce", image: testImage9 },
  { id: 4, title: "Electric Vehicles", image: testImage4 },
  { id: 5, title: "SaaS", image: testImage6 },
  { id: 6, title: "Travel & Tourism", image: testImage5 },
  { id: 7, title: "Entertainment", image: testImage7 },
  { id: 8, title: "Social Media", image: testImage8 },
  { id: 9, title: "Logistics", image: testImage2 },
  { id: 10, title: "Retail & E-commerce", image: testImage10 },
];

const FeaturedCard = () => {
  return (
    <section
      className={`bg-gray-900 min-h-screen flex flex-col justify-center items-center px-6 md:px-0 py-16 ${inter.className}`}
    >
      {/* Heading */}
      <h2
        className="text-center font-inter text-white 
                     text-[20px] sm:text-[28px] md:text-[36px] lg:text-[42px]"
      >
        Explore Our Featured Industries
      </h2>

      {/* Cards Grid wrapper */}
      <div className="max-w-7xl w-full mt-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                     lg:grid-cols-4 xl:grid-cols-5 gap-6 
                     max-h-[42rem] overflow-y-auto pr-2"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              // whileHover={{ scale: 1.03 }}
              // transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group
                         h-48 sm:h-56 lg:h-64 border border-white/20 
                         hover:border-[#084c74] transition duration-500"
            >
              {/* Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-opacity duration-700 group-hover:opacity-0"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#084c74] via-[#084c74] to-[#084c74] 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
              ></div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 1 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute left-1/2 -translate-x-1/2 text-white 
                           text-lg font-semibold drop-shadow-md transition-all duration-700 
                           bottom-6 group-hover:bottom-1/2 group-hover:-translate-y-1/2 
                           group-hover:text-xl whitespace-nowrap"
              >
                {card.title}
              </motion.h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCard;
