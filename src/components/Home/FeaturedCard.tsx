"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testImage1 from "../../../public/FeaturedCard/healthcare.jpg";
import testImage2 from "../../../public/FeaturedCard/logistics.jpg";
// import testImage3 from "../../../public/FeaturedCard/food and beverages.jpg";
// import testImage4 from "../../../public/FeaturedCard/electric vehicles.jpg";
// import testImage5 from "../../../public/FeaturedCard/travel.png";
import testImage6 from "../../../public/FeaturedCard/saas1.jpg";
// import testImage7 from "../../../public/FeaturedCard/entertainment.png";
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
  {
    id: 1,
    title: "Healthcare",
    image: testImage1,
    description:
      "Innovations driving better patient care and digital health solutions.",
  },
  {
    id: 3,
    title: "E-commerce",
    image: testImage9,
    description:
      "Online shopping platforms transforming global retail markets.",
  },
  {
    id: 5,
    title: "SaaS",
    image: testImage6,
    description:
      "Cloud-based software boosting efficiency for modern businesses.",
  },
  {
    id: 8,
    title: "Social Media",
    image: testImage8,
    description:
      "Connecting billions through platforms shaping online culture.",
  },
  {
    id: 9,
    title: "Logistics",
    image: testImage2,
    description:
      "Smart supply chains ensuring faster, seamless global deliveries.",
  },
  {
    id: 10,
    title: "Retail & E-commerce",
    image: testImage10,
    description: "Blending offline and online shopping for modern consumers.",
  },
];

// Custom Prev Button
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-[-2rem] top-1/2 -translate-y-1/2 z-10 bg-gray-800/60 text-white 
               rounded-full p-2 sm:p-2 md:p-4 hover:bg-gray-200/20 transition cursor-pointer"
  >
    <FaChevronLeft className="text-sm sm:text-sm md:text-md " />
  </button>
);

// Custom Next Button
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-[-2rem] top-1/2 -translate-y-1/2 z-10 bg-gray-800/60 text-white 
               rounded-full p-2 sm:p-2 md:p-4 hover:bg-gray-200/20 transition cursor-pointer"
  >
    <FaChevronRight className="text-sm sm:text-sm md:text-md " />
  </button>
);

const FeaturedCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280, // lg screens
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024, // md screens
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // sm screens
        settings: { slidesToShow: 1 },
      },
    ],
  };

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

      {/* Carousel */}
      <div className="relative max-w-8xl md:px-20 w-full mt-10">
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-3">
              <motion.div
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

                {/* Description */}
                <p
                  className="absolute left-1/2 -translate-x-1/2 text-center text-white 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-700 
                             text-sm px-4 w-full bottom-4 group-hover:bottom-1/4"
                >
                  {card.description}
                </p>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FeaturedCard;
