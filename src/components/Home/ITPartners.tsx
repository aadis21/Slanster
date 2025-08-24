"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { FaPlayCircle, FaRegSmile } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

const ITPartners = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      className={`w-full bg-white py-16 px-6 md:px-0 ${inter.className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="py-12 text-start font-normal text-gray-900  
                     text-[20px] sm:text-[28px] md:text-[36px] lg:text-[40px] xl:text-[40px] 2xl:text-[46px]"
        >
          Your IT partners — Powered <br className="hidden md:block" /> by
          innovation
        </h2>

        {/* About company section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-sm font-semibold text-gray-600">
              About our company
            </h3>
            <p className="text-gray-700 leading-relaxed">
              About Us We’re more than just a tech company—we’re your trusted
              partners in digital growth.
            </p>
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed">
              At DigitalNest, we believe technology should be simple, effective,
              and empowering. Our expert team delivers tailor-made IT solutions
              that fit your goals—helping you stay ahead in today’s fast-paced
              digital world.
            </p>
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed">
              With transparent communication, rapid support, and a drive for
              innovation, we make complex technology effortless. While we handle
              the tech, you can focus on scaling your business with confidence.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          {/* YouTube iframe */}
          <iframe
            className="w-full aspect-[16/6]"
            src={`https://www.youtube.com/embed/w3SEDmWPuUg?autoplay=${
              isPlaying ? 1 : 0
            }&modestbranding=1&rel=0&showinfo=0`}
            title="IT Partners Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          {/* Overlay */}
          {!isPlaying && (
            <div
              className="absolute inset-0 bg-gray-900/90 flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              {/* React Icon Logo (Top-left) */}
              <div className="absolute top-4 left-4 text-white text-3xl">
                <FaRegSmile />
              </div>

              {/* Animated Play Button (Center) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-white shadow-xl"
              >
                <FaPlayCircle className="w-20 h-20" />
              </motion.div>
{/* 
              <p className="text-white mt-4 text-lg font-medium">
                Click to Play
              </p> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ITPartners;
