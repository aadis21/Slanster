import React from "react";
import BrillianceImg from "../../../public/home/Brilliance/Brilliance.png";

const Brilliance = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-7xl w-full relative grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Background Grey Rectangle */}
        <div
          className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
  w-8/12 lg:w-6/12 h-[500px] lg:h-[550px] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${BrillianceImg.src})` }}
        ></div>

        {/* LEFT SECTION */}
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-white">
            Leading you to <br /> tech brilliance
          </h1>
          <p className="mt-4 text-gray-400 max-w-md mx-auto md:mx-0 text-sm sm:text-base md:text-lg">
            Our consulting process begins with a thorough assessment of your
            current IT infrastructure, workflows, and pain points.
          </p>

          {/* Features */}
          <div className="mt-6 space-y-3 max-w-md mx-auto md:mx-0">
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <p className="text-gray-200 text-sm sm:text-base">
                24/7 Full service support
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <p className="text-gray-200 text-sm sm:text-base">
                Easy to approach
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-xl">✔</span>
              <p className="text-gray-200 text-sm sm:text-base">
                Immediate response
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative flex items-center justify-center z-10 mt-10 md:mt-0">
          {/* Floating Cards */}
          <div className="w-full md:w-[70%] space-y-6">
            {/* Step 1 */}
            <div className="bg-gradient-to-r from-white/10 to-transparent p-5 sm:p-6 rounded-xl border border-white/20 shadow-md">
              <h3 className="font-semibold text-lg sm:text-xl text-white">
                01 Discover and analysis
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mt-2">
                Perform an analysis of the client&apos;s existing IT systems.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-gradient-to-r from-white/10 to-transparent p-5 sm:p-6 rounded-xl border border-white/20 shadow-md">
              <h3 className="font-semibold text-lg sm:text-xl text-white">
                02 Tailored Solutions
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mt-2">
                Develop IT solutions based on the analysis phase.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-gradient-to-r from-white/10 to-transparent p-5 sm:p-6 rounded-xl border border-white/20 shadow-md">
              <h3 className="font-semibold text-lg sm:text-xl text-white">
                03 Deployment and Support
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mt-2">
                Regularly communicate with our client to address any concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brilliance;
