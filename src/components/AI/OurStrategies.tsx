import React from "react";
import Image from "next/image";
import { BarChart3, Link, Play, Zap } from "lucide-react";

const strategies = [
  {
    icon: <BarChart3 className="w-5 h-5 text-gray-700" />,
    title: "AI-Driven Forecasts",
    desc: "Harness the unmatched power of artificial intelligence with Neuros. Dive deep into predictive analytics, anticipate market trends...",
  },
  {
    icon: <Link className="w-5 h-5 text-gray-700" />,
    title: "Connect & Streamline",
    desc: "Neuros seamlessly integrates with your favorite business tools, CRMs, and platforms. Experience a unified analytics platform...",
  },
  {
    icon: <Zap className="w-5 h-5 text-gray-700" />,
    title: "Instant Insights",
    desc: "In the fast-paced world of business, every second counts. Neuros processes data in real-time, ensuring you’re always working with the latest insights...",
  },
];

const OurStrategies = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto min-h-screen md:py-12 py-6 md:px-0 px-4  flex flex-col items-center">
        {/* Tag */}
        <div className="mb-4">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 shadow-lg 
               text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 
               rounded-full border border-gray-300"
          >
            <span className="text-blue-600">✨</span>
            <span>Our Strategies</span>
          </span>
        </div>

        {/* Heading */}
        <h1
          className="font-dmsans text-center md:text-5xl text-3xl
               leading-[1.2] max-w-4xl mx-auto text-[#1C1F25]"
        >
          Improve your Continuous <br className="block" />
          Design Data workflow
        </h1>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 text-center max-w-2xl text-sm sm:text-base md:text-lg">
          Specify helps you gain control of your design system across teams and
          products.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <button
            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#084c74] cursor-pointer text-white font-semibold rounded-md shadow-lg 
                     hover:bg-[#084c74] hover:scale-105 transform transition-all duration-300 
                     text-sm sm:text-base active:scale-95"
          >
            Get a demo
          </button>
          <button
            className="px-5 sm:px-6 py-2.5 sm:py-3 flex items-center gap-2 border border-gray-300 rounded-md 
                     text-gray-700 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 
                     text-sm sm:text-base active:scale-95 cursor-pointer"
          >
            Research
          </button>
        </div>

        {/* Strategy Cards */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
          {strategies.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                {item.icon}
                <h3 className="font-semibold text-gray-800 text-lg">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Wave Image with Floating Badge */}
        <div className="mt-12 relative w-full max-w-6xl rounded-xl overflow-hidden shadow-lg bg-[#084c74]">
          {/* shadow background */}
          <Image
            src="/AIlandingPage/wave/bg-shadow.png"
            alt="Wave Design"
            width={1200}
            height={600}
            className="w-full object-cover z-10"
          />

          {/* wave images on top of shadow */}
          <Image
            src="/AIlandingPage/wave/wave-1.png"
            alt="Wave 1"
            width={1200}
            height={600}
            className="absolute top-0 right-0 w-full object-cover opacity-80 z-20"
          />
          <Image
            src="/AIlandingPage/wave/wave-2.png"
            alt="Wave 2"
            width={1200}
            height={600}
            className="absolute top-10 right-10 w-full object-cover opacity-70 z-30"
          />
          <Image
            src="/AIlandingPage/wave/wave-3.png"
            alt="Wave 3"
            width={1200}
            height={600}
            className="absolute top-20 right-20 w-full object-cover opacity-60 z-40"
          />

          {/* center text */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 shadow-lg 
                 text-sm sm:text-base font-medium text-gray-800 bg-white 
                 rounded-full border border-gray-300"
          >
            <span className="text-blue-600">✨</span>
            <span>AI-Driven Forecasts</span>
          </span>
        </div> */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-gray-300/70 p-2 rounded-full shadow-lg">
            <div className="relative z-10 bg-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-lg flex items-center gap-3 shadow-gray-300">
              <div>
                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                  <span className="text-blue-600">✨</span>
                  <span>AI-Driven Forecasts</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStrategies;
