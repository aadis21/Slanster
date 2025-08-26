import React from "react";
import Image from "next/image";

import Logo1 from "../../../public/AILandingPage/logo-1.png";
import Logo2 from "../../../public/AILandingPage/logo-2.png";
import Logo3 from "../../../public/AILandingPage/logo-3.png";
import Logo4 from "../../../public/AILandingPage/logo-4.png";
import Logo5 from "../../../public/AILandingPage/logo-5.png";
import Logo6 from "../../../public/AILandingPage/logo-6.png";
import Logo7 from "../../../public/AILandingPage/logo-7.png";
import Logo8 from "../../../public/AILandingPage/logo-8.png";
import Logo9 from "../../../public/AILandingPage/logo-9.png";
import Logo10 from "../../../public/AILandingPage/logo-10.png";

const logos = [
  { src: Logo2, alt: "Logo 2" },
  { src: Logo3, alt: "Logo 3" },
  { src: Logo4, alt: "Logo 4" },
  { src: Logo5, alt: "Logo 5" },
  { src: Logo6, alt: "Logo 6" },
  { src: Logo7, alt: "Logo 7" },
  { src: Logo8, alt: "Logo 8" },
  { src: Logo9, alt: "Logo 9" },
  { src: Logo10, alt: "Logo 10" },
  { src: Logo1, alt: "Logo 1" },
];

const Companies = () => {
  return (
    <div className="w-full py-16 bg-white flex flex-col items-center">
      <p className="text-gray-900 text-2xl md:text-4xl mb-12 text-center font-dmsans leading-[1.2]">
        160,000+ customers in over 120 countries grow <br /> their businesses
        with Neuros
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-12 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center transform transition-transform duration-500 hover:scale-110 hover:opacity-90"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
              width={120} // increased size
              height={120} // increased size
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
