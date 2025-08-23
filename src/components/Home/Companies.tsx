"use client";

import React, { useEffect, useState } from "react";
import "./companies.css";
import Image from "next/image";

const Companies = () => {
  const [currentLogoIndexes, setCurrentLogoIndexes] = useState([
    0, 0, 0, 0, 0, 0,
  ]);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const logosSets = [
    [
      { src: "/animationLogos/logo 1.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 2.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 3.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 4.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 5.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 6.jpg", height: "70px", width: "auto" },
    ],
    [
      { src: "/animationLogos/logo 7.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 8.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 9.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 10.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 11.jpg", height: "70px", width: "auto" },
    ],
    [
      { src: "/animationLogos/logo 13.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 14.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 15.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 16.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 17.jpg", height: "70px", width: "auto" },
    ],
    [
      { src: "/animationLogos/logo 19.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 20.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 21.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 22.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 23.jpg", height: "70px", width: "auto" },
    ],
    [
      { src: "/animationLogos/logo 25.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 26.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 27.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 28.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 29.jpg", height: "70px", width: "auto" },
    ],
    [
      { src: "/animationLogos/logo 31.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 30.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 24.jpg", height: "70px", width: "auto" },
      { src: "/animationLogos/logo 18.jpg", height: "35px", width: "auto" },
      { src: "/animationLogos/logo 12.jpg", height: "70px", width: "auto" },
    ],
  ];

  useEffect(() => {
    // Track screen width only in browser
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const intervals = logosSets.map((logos, setIndex) => {
      const totalLogos = logos.length;
      const intervalDuration = setIndex % 2 === 0 ? 3000 : 4000;
      return setInterval(() => {
        setCurrentLogoIndexes((prevIndexes) => {
          const updatedIndexes = [...prevIndexes];
          updatedIndexes[setIndex] =
            (updatedIndexes[setIndex] + 1) % totalLogos;
          return updatedIndexes;
        });
      }, intervalDuration);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="text-[#696984] flex justify-center font-pop pb-10 sm:py-10 xsm:py-5 md:mt-0 xsm:mt-0 sm:mt-0 bg-white">
      <div className="w-[90%] space-y-8 xsm:space-y-4 sm:space-y-4 md:space-y-6">
        <div
          className="text-center font-inter text-gray-900
             text-[16px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px]"
        >
          Trusted by <span className="text-[#1dbf73]">200+</span> Companies
          Worldwide
        </div>

        <div className="flex justify-center xsm:gap-3 xsm:justify-around ">
          {logosSets
            .slice(0, screenWidth <= 480 ? 4 : 6) // ✅ uses state instead of window
            .map((logos, setIndex) => (
              <div
                key={setIndex}
                className="slider-container w-[100%] xsm:w-[15%] md:w-[15%]"
              >
                {logos.map((logo, index) => (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={`Company Logo ${index}`}
                    style={{
                      height: screenWidth <= 720 ? "28px" : logo.height,
                      width: "auto",
                    }}
                    className={
                      index === currentLogoIndexes[setIndex]
                        ? "logo active"
                        : "logo"
                    }
                    width={200}
                    height={200}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
