"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";
import Slider, { CustomArrowProps } from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testImage1 from "../../../public/FeaturedCard/healthcare.jpg";
import testImage2 from "../../../public/FeaturedCard/logistics.jpg";
import testImage6 from "../../../public/FeaturedCard/saas1.jpg";
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

// Desktop Arrows
const DesktopPrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute left-[-2rem] top-1/2 -translate-y-1/2 z-10 bg-white text-gray-900 rounded-full shadow-lg p-3 hover:bg-gray-200 transition"
  >
    <FaChevronLeft />
  </button>
);

const DesktopNextArrow: React.FC<CustomArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:flex absolute right-[-2rem] top-1/2 -translate-y-1/2 z-10 bg-white text-gray-900 rounded-full shadow-lg p-3 hover:bg-gray-200 transition"
  >
    <FaChevronRight />
  </button>
);

// Mobile Arrows (Bottom Center)
const MobileArrows: React.FC<{ onPrev: () => void; onNext: () => void }> = ({
  onPrev,
  onNext,
}) => (
  <div className="flex gap-4 absolute bottom-[-45px] left-1/2 -translate-x-1/2 z-10 md:hidden">
    <button
      onClick={onPrev}
      className="w-12 h-12 rounded-full bg-gray-400/20  shadow-lg flex items-center justify-center hover:bg-gray-200 transition"
    >
      <FaChevronLeft />
    </button>
    <button
      onClick={onNext}
      className="w-12 h-12 rounded-full bg-gray-400/20 shadow-lg flex items-center justify-center hover:bg-gray-200 transition"
    >
      <FaChevronRight />
    </button>
  </div>
);

const FeaturedCard = () => {
  const sliderRef = React.useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <DesktopNextArrow />,
    prevArrow: <DesktopPrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } }, // mobile: 1 card, arrows hidden
    ],
  };

  return (
    <section
      className={`bg-gray-900 md:min-h-[70vh] h-[50vh] flex flex-col justify-center items-center px-6 md:px-0 py-16 ${inter.className}`}
    >
      <h2 className="text-center text-white text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-10">
        Explore Our Featured Industries
      </h2>

      <div className="relative max-w-8xl md:px-25 w-full px-2">
        <Slider ref={sliderRef} {...settings}>
          {cards.map((card) => (
            <div key={card.id} className="px-2 sm:px-3">
              <motion.div className="relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer group h-52 sm:h-60 md:h-72 border border-white/20 hover:border-[#084c74] transition duration-500">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-opacity duration-700 group-hover:opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#084c74]/70 via-[#084c74]/50 to-[#084c74]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                <motion.h3 className="absolute left-1/2 -translate-x-1/2 text-white text-lg sm:text-xl md:text-2xl font-bold drop-shadow-md transition-all duration-700 bottom-6 group-hover:bottom-1/2 group-hover:-translate-y-1/2 text-center">
                  {card.title}
                </motion.h3>
                <p className="absolute left-1/2 -translate-x-1/2 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-sm md:text-base px-4 w-full bottom-4 group-hover:bottom-1/4">
                  {card.description}
                </p>
              </motion.div>
            </div>
          ))}
        </Slider>

        {/* Mobile arrows at bottom center */}
        <MobileArrows
          onPrev={() => sliderRef.current?.slickPrev()}
          onNext={() => sliderRef.current?.slickNext()}
        />
      </div>
    </section>
  );
};

export default FeaturedCard;
