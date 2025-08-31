"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";

import testImage1 from "../../../public/FeaturedCard/healthcare.jpg";
import testImage2 from "../../../public/FeaturedCard/logistics.jpg";
import testImage3 from "../../../public/FeaturedCard/food and beverages.jpg";
import testImage4 from "../../../public/FeaturedCard/electric vehicles.jpg";
import testImage5 from "../../../public/FeaturedCard/travel.png";
import testImage6 from "../../../public/FeaturedCard/saas.png";
import testImage7 from "../../../public/FeaturedCard/entertainment.png";
import testImage8 from "../../../public/FeaturedCard/socialmedia.jpg";
import testImage9 from "../../../public/FeaturedCard/e-commerce.jpg";
import testImage10 from "../../../public/FeaturedCard/Retail & E-commerce.jpg";

const inter = Inter({ subsets: ["latin"] });

interface CardType {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
}

const cards: CardType[] = [
  { id: 1, title: "Healthcare", image: testImage1, description: "Innovations driving better patient care and digital health solutions." },
  { id: 2, title: "Food & Beverages", image: testImage3, description: "Culinary trends and technology shaping global dining experiences." },
  { id: 3, title: "E-commerce", image: testImage9, description: "Online shopping platforms transforming global retail markets." },
  { id: 4, title: "Electric Vehicles", image: testImage4, description: "Sustainable mobility powering the future of clean transportation." },
  { id: 5, title: "SaaS", image: testImage6, description: "Cloud-based software boosting efficiency for modern businesses." },
  { id: 6, title: "Travel & Tourism", image: testImage5, description: "Global destinations enhanced by digital travel innovations." },
  { id: 7, title: "Entertainment", image: testImage7, description: "Streaming, gaming, and media driving digital-first experiences." },
  { id: 8, title: "Social Media", image: testImage8, description: "Connecting billions through platforms shaping online culture." },
  { id: 9, title: "Logistics", image: testImage2, description: "Smart supply chains ensuring faster, seamless global deliveries." },
  { id: 10, title: "Retail & E-commerce", image: testImage10, description: "Blending offline and online shopping for modern consumers." },
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
      <div className="max-w-8xl md:px-25 w-full mt-10">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                     lg:grid-cols-4 xl:grid-cols-5 gap-6 
                     max-h-[42rem] overflow-y-auto pr-2"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
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

              {/* Description (only visible on hover) */}
              <p
                className="absolute left-1/2 -translate-x-1/2 text-center text-white 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-700 
                           text-sm px-4 w-full bottom-4 group-hover:bottom-1/4"
              >
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCard;
