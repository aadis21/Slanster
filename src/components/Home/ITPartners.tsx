import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const ITPartners = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className={`${inter.className} py-12 text-3xl md:text-4xl font-medium leading-[44px] text-[#1E2631] max-w-7xl mx-auto`}
        >
          Your IT partners — Powered <br className="hidden md:block" /> by
          innovation
        </h2>

        {/* About company section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h2 className="text-sm font-lg font-semibold text-gray-600">
              About our company
            </h2>
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
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full aspect-[16/6]" // <-- custom aspect ratio (less height)
            src="https://www.youtube.com/embed/w3SEDmWPuUg"
            title="IT Partners Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ITPartners;
