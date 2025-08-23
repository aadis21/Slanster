"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { GraduationCap, LineChart, Users } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const LandingPage = () => {
  return (
    <section
      className={`${inter.className} bg-white md:min-h-screen md:pt-0 pt-12 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 `}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-8xl md:pl-10">
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-snug md:leading-tight mb-6 text-gray-900">
            <span className="text-sky-700">Smarter Learning</span> that <br />
            Builds <span className="text-sky-700">Smarter Futures.</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-xl">
            Join a global community of learners and professionals. Access
            expert-led courses, mentorship, and AI-powered consulting designed
            for students, startups, and industries.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-[#084c74] text-white px-5 sm:px-6 py-3 rounded-lg font-medium shadow hover:bg-[#063d5d] transition text-sm sm:text-base">
              Enroll in Super 30
            </button>
            <button className="border text-gray-900 border-gray-300 px-5 sm:px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition text-sm sm:text-base">
              Get Free Consultation
            </button>
          </div>

          {/* Reviews */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <Image
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
                alt="user1"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
                alt="user2"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
              <Image
                src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"
                alt="user3"
                width={40}
                height={40}
                className="rounded-full border-2 border-white"
              />
            </div>
            <p className="text-gray-900 text-sm sm:text-base">
              ⭐ 4.9 <span className="text-gray-500">from 1k+ reviews</span>
            </p>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 relative flex justify-center items-end w-full md:mt-0 mt-25">
          {/* Background Shape */}
          <div className="relative rounded-3xl w-[180px] sm:w-full md:w-[300px] lg:w-[380px] h-[220px] sm:h-[300px] md:h-[360px] lg:h-[440px]"></div>

          {/* Person Image */}
          <div className="absolute bottom-0 md:pt-0 pt-12">
            <Image
              src="/home/Frame.png"
              alt="hero"
              width={400}
              height={600}
              priority
              className="object-cover w-full h-[40vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh]"
            />
          </div>

          {/* Floating Cards */}
          <div className="absolute top-4 left-0 bg-white shadow-md rounded-lg px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-3 w-40 sm:w-48 md:w-52 lg:w-56">
            <LineChart className="text-sky-700 w-5 h-5 sm:w-6 sm:h-6" />
            <div>
              <p className="text-gray-900">Data-Driven Solutions</p>
              <p className="text-gray-500 text-[10px] sm:text-xs">
                Power of analytics & AI
              </p>
            </div>
          </div>

          <div className="absolute top-20 right-0 bg-white shadow-md rounded-lg px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-3 w-40 sm:w-48 md:w-52 lg:w-56">
            <Users className="text-sky-700 w-5 h-5 sm:w-6 sm:h-6" />
            <div>
              <p className="text-gray-900">Expert Mentorship</p>
              <p className="text-gray-500 text-[10px] sm:text-xs">
                1:1 guidance of industry leaders
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 left-2 sm:left-6 bg-white shadow-md rounded-lg px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-3 w-40 sm:w-48 md:w-52 lg:w-56">
            <GraduationCap className="text-sky-700 w-5 h-5 sm:w-6 sm:h-6" />
            <div>
              <p className="text-gray-900">Career Guidance</p>
              <p className="text-gray-500 text-[10px] sm:text-xs">
                5,000 Students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
