"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    name: "Dinesh Singh",
    location: "Mumbai, India",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg",
  },
  {
    id: 2,
    text: "“Amazing service! Everything was smooth and efficient. Highly recommended for everyone looking for quality and trust.”",
    name: "Rohit Sharma",
    location: "Delhi, India",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg",
  },
  {
    id: 3,
    text: "“A truly wonderful experience. The team is very professional and helpful at every step of the way.”",
    name: "Priya Verma",
    location: "Bangalore, India",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small_2x/Basic_Ui__28186_29.jpg",
  },
];

const FlipCard = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const GAP_X = 10;
  const GAP_Y = 20;
  const CARD_HEIGHT = 220;

  return (
    <section className="relative bg-blue-600 text-white py-16 px-4 md:py-20 md:px-6 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Left Section */}
        <div className="md:w-1/3 mb-10 md:mb-0 text-center md:text-left">
          <h4 className="uppercase tracking-widest text-xs md:text-sm font-semibold text-gray-200 font-inter">
            Testimonials
          </h4>
          <h2
            className="text-start font-inter text-white 
             text-[16px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px] font-bold leading-snug"
          >
            What People Say <br /> About Us.
          </h2>

          {/* Pagination Dots */}
          <div className="flex justify-center md:justify-start space-x-2 mt-6">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  i === index ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Section - Stacked Cards */}
        <div
          className="md:w-2/3 relative flex justify-center w-full"
          style={{ height: `${CARD_HEIGHT + GAP_Y * 2}px` }}
        >
          {testimonials.map((item, i) => {
            const position =
              (i - index + testimonials.length) % testimonials.length;
            if (position > 2) return null;

            return (
              <div
                key={item.id}
                className="absolute w-full max-w-sm sm:max-w-md md:max-w-lg transition-all duration-700 ease-in-out"
                style={{
                  transform: `translate(${position * GAP_X}px, ${
                    position * GAP_Y
                  }px)`,
                  opacity: position > 2 ? 0 : 1,
                  zIndex: 10 - position,
                  height: `${CARD_HEIGHT}px`,
                }}
              >
                <div className="bg-white text-gray-900 rounded-xl shadow-2xl md:mx-0 mx-5 p-6 sm:p-8 relative flex flex-col justify-between h-full font-inter">
                  {/* User Image */}
                  <div className="absolute -top-6 left-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-full border-2 border-white shadow-md"
                    />
                  </div>

                  {/* Text */}
                  <p className="mt-8 text-gray-700 text-sm sm:text-base leading-relaxed font-inter">
                    {item.text}
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 font-inter">
                      {item.name}
                    </h4>
                    <span className="text-gray-500 text-xs sm:text-sm font-inter">
                      {item.location}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlipCard;
