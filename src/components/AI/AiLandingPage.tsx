"use client"

import React, { useEffect, useState } from "react";
// import { Play } from "lucide-react";
// import Image from "next/image";

const AiLandingPage = () => {
    const images = [
      "/AIpage/service_3.png",
      "/AIpage/service_4.png",
      "/AIpage/service_5.png",
      "/AIpage/service_6.png",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 2000); // 4 sec delay
      return () => clearInterval(interval);
    }, [images.length]);
  return (
    <div className="w-full min-h-screen md:py-12 py-6 md:px-0 px-4 bg-white flex flex-col items-center justify-center ">
      {/* Tag */}
      <div className="mb-4">
        <span
          className="inline-flex items-center gap-2 px-4 py-2 shadow-lg 
               text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 
               rounded-full border border-gray-300"
        >
          <span className="text-blue-600">✨</span>
          <span>Generative Business Intelligence </span>
        </span>
      </div>

      {/* Heading */}
      <h1
        className="font-dmsans  text-center text-[28px] sm:text-[36px] md:text-5xl lg:text-5xl
               leading-[1.2] max-w-4xl mx-auto text-[#1C1F25]"
      >
        Revolutionizing Business Decisions <br className="block" />
        with AI-Powered Analytics
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 text-center max-w-2xl text-sm sm:text-base md:text-lg">
        Harnesses the power of artificial intelligence to transform your
        business data into actionable insights, propelling you to new heights of
        success
      </p>

      {/* Buttons */}
      {/* <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
    
        <button
          className="px-5 cursor-pointer sm:px-6 py-2.5 sm:py-3 bg-[#084c74] text-white font-semibold rounded-md shadow-lg 
                     hover:bg-[#084c74] hover:scale-105 transform transition-all duration-300 
                     text-sm sm:text-base active:scale-95"
        >
          Start your free trial
        </button>


        <button
          className="px-5 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 border border-gray-300 rounded-md 
                     text-gray-700 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 
                     text-sm sm:text-base active:scale-95"
        >
          <Play className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />{" "}
        
          Watch video
        </button>
      </div> */}

      <div className="mt-12 w-full max-w-7xl px-2 sm:px-4">
        <div className="bg-gradient-to-br from-[#084c74] to-[#084c74] rounded-xl p-6 sm:p-10 flex items-center justify-center relative overflow-hidden h-[350px] sm:h-[450px] lg:h-[500px]">
          {/* Grid effect */}
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px]"></div> */}

          <div
            className="absolute inset-0 transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${images[currentIndex]}), radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: "cover, 30px 30px",
              backgroundPosition: "center, center",
            }}
          ></div>

          {/* Logo overlays in diagonal line with gap */}
          {/* <Image
            src="/AILandingPage/Ellipse.png"
            alt="Logo"
            className="absolute top-12 right-12 w-16 h-16 sm:w-20 sm:h-20 opacity-80"
            width={80}
            height={80}
          />

          <Image
            src="/AILandingPage/Ellipse.png"
            alt="Logo"
            className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 opacity-80"
            width={180}
            height={180}
          />

          <Image
            src="/AILandingPage/Ellipse.png"
            alt="Logo"
            className="absolute bottom-12 left-12 w-24 h-24 sm:w-32 sm:h-32 opacity-80"
            width={128}
            height={128}
          /> */}

          {/* Video Button */}
          {/* <div className="absolute bg-gray-400 rounded-full p-2">
            <div className="relative z-10 bg-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg flex items-center gap-3 shadow-gray-300">
              <button className="bg-[#084c74] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white">
                <Play className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  Watch introduce video
                </p>
                <span className="text-xs sm:text-sm text-gray-500">
                  5 mins • Play video
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AiLandingPage;
