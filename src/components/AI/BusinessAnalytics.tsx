// import React from "react";
// import { Sparkles, Zap, CreditCard, Headphones } from "lucide-react";
// import Image from "next/image"; // assuming Next.js

// const BusinessAnalytics = () => {
//   return (
//     <div className="w-full flex flex-col items-center py-10 bg-white">
//       {/* Top Image */}

//       {/* Card Section */}
//       <div className=" w-[90%] max-w-6xl bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
//         <Image
//           src="/AILandingPage/wave/MaskGroup.png"
//           alt="Mask Group"
//           width={1200}
//           height={600}
//           className="object-cover absolute max-w-7xl z-999"
//         />
//         {/* Left Section */}
//         <div className="text-white max-w-lg space-y-6 z-10">
//           <h1 className="text-3xl md:text-4xl font-bold leading-snug">
//             Experience the Future of <br />
//             Business Analytics with <br />
//             Neuros
//           </h1>

//           <button className="px-5 py-3 bg-blue-700 hover:bg-blue-800 transition-all rounded-lg font-medium flex items-center gap-2 shadow-md">
//             Start your free trial <Sparkles className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Right Section */}
//         <div className="grid gap-4 mt-8 md:mt-0 z-10">
//           {/* Card 1 */}
//           <div className="bg-blue-400/30 backdrop-blur-lg p-4 rounded-lg flex items-start gap-3 text-white">
//             <Zap className="w-6 h-6 flex-shrink-0" />
//             <div>
//               <h3 className="font-semibold">Instant Access</h3>
//               <p className="text-sm opacity-90">
//                 Begin exploring Neuros’s full suite of features immediately
//               </p>
//             </div>
//           </div>

//           {/* Card 2 */}
//           <div className="bg-blue-400/30 backdrop-blur-lg p-4 rounded-lg flex items-start gap-3 text-white">
//             <CreditCard className="w-6 h-6 flex-shrink-0" />
//             <div>
//               <h3 className="font-semibold">No Commitments</h3>
//               <p className="text-sm opacity-90">
//                 No credit card required, and you can cancel anytime
//               </p>
//             </div>
//           </div>

//           {/* Card 3 */}
//           <div className="bg-blue-400/30 backdrop-blur-lg p-4 rounded-lg flex items-start gap-3 text-white">
//             <Headphones className="w-6 h-6 flex-shrink-0" />
//             <div>
//               <h3 className="font-semibold">Dedicated Support</h3>
//               <p className="text-sm opacity-90">
//                 Our team is here to assist you every step of the way during your
//                 trial
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Background Decorative Circles */}
//         <div className="absolute inset-0">
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-700/40 rounded-full blur-3xl" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusinessAnalytics;

"use client";

import React from "react";
import Image from "next/image";
import { BarChart3, CreditCard, Headphones, Link, Zap } from "lucide-react";
import { BsStars } from "react-icons/bs";

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

const BusinessAnalytics = () => {
  return (
    <div className="w-full min-h-screen  md:py-12 py-6 px-4 bg-white flex flex-col items-center">
      {/* Tag */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 shadow-lg text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-full border border-gray-300">
          <span className="text-blue-600">✨</span>
          <span>Our Strategies</span>
        </span>
      </div>

      {/* Heading */}
      <h1 className="font-dmsans text-center md:text-5xl text-3xl leading-[1.2] max-w-4xl mx-auto text-[#1C1F25]">
        Improve your Continuous <br className="hidden sm:block" />
        Design Data workflow
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 text-center max-w-2xl text-sm sm:text-base md:text-lg">
        Specify helps you gain control of your design system across teams and
        products.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
        <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-[#084c74] text-white font-semibold rounded-md shadow-lg hover:bg-[#084c74] hover:scale-105 transform transition-all duration-300 text-sm sm:text-base active:scale-95 w-full sm:w-auto cursor-pointer">
          Get a demo
        </button>
        <button className="px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 text-sm sm:text-base active:scale-95 w-full sm:w-auto cursor-pointer">
          Research
        </button>
      </div>

      {/* Strategy Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4">
        {strategies.map((item, i) => (
          <div
            key={i}
            className="p-5 rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-all bg-white"
          >
            <div className="flex items-center gap-2 mb-3">
              {item.icon}
              <h3 className="font-semibold text-gray-800 text-lg">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Wave Section */}
      <div className="mt-12  relative w-full max-w-6xl rounded-xl overflow-hidden shadow-lg bg-[#084c74]">
        <div className="relative w-full md:h-[400px] h-[600px] flex flex-col md:flex-row">
          {/* Background Image */}
          <Image
            src="/AILandingPage/wave/MaskGroup.png"
            alt="Mask Group"
            fill
            className="object-cover"
          />

          {/* Left Side Content */}
          <div className="relative  flex flex-col justify-center px-6 md:px-10 w-full md:w-1/2 py-8 bg-black/30 md:bg-transparent">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Master Choice Better Results, <br />   With Slanster
            </h2>

            {/* CTA */}
            <div className="flex items-center gap-3 mt-6">
              <div className="bg-gray-400/40 flex gap-2 p-3 rounded-xl px-6">
                <span className="text-white font-medium text-base sm:text-lg">
                  Start your free trial
                </span>
                <span className="text-white text-xl sm:text-2xl">
                  <BsStars />
                </span>
              </div>
            </div>
          </div>

          {/* Right Side Floating Cards */}
          <div className="hidden md:flex absolute right-6 inset-y-0 items-center">
            <div className="grid gap-4 max-w-xs">
              <div className="bg-blue-400/30 backdrop-blur-lg p-4 rounded-lg flex items-start gap-3 text-white shadow-lg">
                <Zap className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Instant Access</h3>
                  <p className="text-sm opacity-90">
                    Begin exploring Neuros’s full suite of features immediately
                  </p>
                </div>
              </div>
              <div className="bg-blue-400/30 backdrop-blur-lg p-4 rounded-lg flex items-start gap-3 text-white shadow-lg">
                <CreditCard className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">No Commitments</h3>
                  <p className="text-sm opacity-90">
                    No credit card required, and you can cancel anytime
                  </p>
                </div>
              </div>
              <div className="bg-blue-400/30 backdrop-blur-lg p-4 rounded-lg flex items-start gap-3 text-white shadow-lg">
                <Headphones className="w-6 h-6 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Dedicated Support</h3>
                  <p className="text-sm opacity-90">
                    Our team is here to assist you every step of the way during
                    your trial
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Floating Cards (stack below) */}
          <div className="grid gap-4 mt-6 px-6 md:hidden relative z-50">
            <div className="bg-blue-400/30 backdrop-blur-lg p-4 rounded-lg flex items-start gap-3 text-white shadow-lg">
              <Zap className="w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Instant Access</h3>
                <p className="text-sm opacity-90">
                  Begin exploring Neuros’s full suite of features immediately
                </p>
              </div>
            </div>
            <div className="bg-blue-400/30 backdrop-blur-lg p-4 rounded-lg flex items-start gap-3 text-white shadow-lg">
              <CreditCard className="w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">No Commitments</h3>
                <p className="text-sm opacity-90">
                  No credit card required, and you can cancel anytime
                </p>
              </div>
            </div>
            <div className="bg-blue-400/30 backdrop-blur-lg p-4 rounded-lg flex items-start gap-3 text-white shadow-lg">
              <Headphones className="w-6 h-6 flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Dedicated Support</h3>
                <p className="text-sm opacity-90">
                  Our team is here to assist you every step of the way during
                  your trial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessAnalytics;
