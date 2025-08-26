"use client";
import React from "react";

const page = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-20 md:grid-cols-6 gap-12 animate-fadeIn text-white min-h-screen bg-white">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#084c74] mb-8">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="text-center text-lg text-gray-700 max-w-4xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel
          urna nec justo facilisis consequat.
        </p>

        {/* Section 1 */}
        <div className="bg-[#084c74] w-fit px-4 py-2 rounded-t-md mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            1. Information We Collect
          </h2>
        </div>
        <div className="space-y-6 mb-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start space-x-3">
              <span className="text-2xl text-[#084c74]">👉</span>
              <p className="text-lg text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Section
                1.{i} dummy content here.
              </p>
            </div>
          ))}
        </div>

        {/* Section 2 */}
        <div className="bg-[#084c74] w-fit px-4 py-2 rounded-t-md mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            2. How We Use Your Information
          </h2>
        </div>
        <div className="space-y-4 mb-10">
          {[
            "Lorem ipsum dolor sit amet.",
            "Consectetur adipiscing elit.",
            "Sed do eiusmod tempor.",
            "Incididunt ut labore et dolore.",
          ].map((t, i) => (
            <div key={i} className="flex items-start space-x-3">
              <span className="text-2xl text-[#084c74]">👉</span>
              <p className="text-lg text-gray-700">{t}</p>
            </div>
          ))}
        </div>

        {/* Section 3 */}
        <div className="bg-[#084c74] w-fit px-4 py-2 rounded-t-md mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            3. Data Protection
          </h2>
        </div>
        <div className="space-y-4 mb-10">
          <div className="flex items-start space-x-3">
            <span className="text-2xl text-[#084c74]">👉</span>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Section 3
              dummy content.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="bg-[#084c74] w-fit px-4 py-2 rounded-t-md mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            4. Sharing of Information
          </h2>
        </div>
        <div className="space-y-4 mb-10">
          {[
            "Lorem ipsum dolor sit amet.",
            "Consectetur adipiscing elit.",
            "Sed do eiusmod tempor.",
          ].map((t, i) => (
            <div key={i} className="flex items-start space-x-3">
              <span className="text-2xl text-[#084c74]">👉</span>
              <p className="text-lg text-gray-700">{t}</p>
            </div>
          ))}
        </div>

        {/* Section 5 */}
        <div className="bg-[#084c74] w-fit px-4 py-2 rounded-t-md mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            5. Your Rights
          </h2>
        </div>
        <div className="space-y-4 mb-10">
          {[
            "Lorem ipsum dolor sit amet.",
            "Consectetur adipiscing elit.",
            "Sed do eiusmod tempor.",
            "Incididunt ut labore et dolore.",
          ].map((t, i) => (
            <div key={i} className="flex items-start space-x-3">
              <span className="text-2xl text-[#084c74]">👉</span>
              <p className="text-lg text-gray-700">{t}</p>
            </div>
          ))}
        </div>

        {/* Section 6 */}
        <div className="bg-[#084c74] w-fit px-4 py-2 rounded-t-md mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            6. Changes to This Policy
          </h2>
        </div>
        <div className="space-y-4 mb-10">
          <div className="flex items-start space-x-3">
            <span className="text-2xl text-[#084c74]">👉</span>
            <p className="text-lg text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Section 6
              dummy content.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#084c74] w-fit px-4 py-2 rounded-t-md mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Contact Us
          </h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <span className="text-2xl text-[#084c74]">👉</span>
            <p className="text-lg text-gray-700">
              For any questions, please contact us at
              <span className="font-semibold text-[#084c74]">
                {" "}
                example@example.com
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
