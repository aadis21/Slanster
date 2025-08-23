"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface CardType {
  id: number;
  title: string;
  image: string;
}

const testImage =
  "https://www.skubiq.com/wp-content/uploads/2022/06/Logistics.jpg";

const cards: CardType[] = [
  { id: 1, title: "Finance", image: testImage },
  { id: 2, title: "F&B", image: testImage },
  { id: 3, title: "E-commerce", image: testImage },
  { id: 4, title: "EV", image: testImage },
  { id: 5, title: "SaaS", image: testImage },
  { id: 6, title: "Travel", image: testImage },
  { id: 7, title: "Entertainment", image: testImage },
  { id: 8, title: "Social Media", image: testImage },
  { id: 9, title: "Logistics", image: testImage },
  { id: 10, title: "E-commerce", image: testImage },
  { id: 11, title: "EV", image: testImage },
  { id: 12, title: "SaaS", image: testImage },
  { id: 13, title: "Travel", image: testImage },
  { id: 14, title: "Entertainment", image: testImage },
];

const FeaturedCard = () => {
  return (
    <section className="bg-gray-900 min-h-screen flex flex-col justify-center items-center px-6 py-16">
      {/* Heading */}
      <h2
        className={`${inter.className} text-3xl md:text-4xl font-medium leading-[44px] text-white max-w-3xl mx-auto text-center mb-12`}
      >
        Explore Our Featured Industries
      </h2>

      {/* Cards Grid wrapper with scroll */}
      <div className="max-w-7xl w-full">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 
                        max-h-[42rem] overflow-y-auto pr-2 m-5"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05 }}
              className="relative  overflow-hidden rounded-2xl shadow-lg cursor-pointer group h-64 sm:h-72 lg:h-80 
                         border border-white/30 hover:border-blue-500 transition duration-500"
            >
              {/* Image (hide on hover) */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-opacity duration-700 group-hover:opacity-0"
              />

              {/* Blue gradient (visible only on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-700 via-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>

              {/* Title animation */}
              <motion.h3
                initial={{ opacity: 1 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute left-1/2 -translate-x-1/2 text-white text-lg font-semibold drop-shadow-md transition-all duration-700 
                           bottom-6 group-hover:bottom-1/2 group-hover:-translate-y-1/2 group-hover:text-xl group-hover:font-semibold"
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
