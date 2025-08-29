"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";
import Overview from "./Tabs/Overview";
import Curriculum from "./Tabs/Curriculum";
import FAQs from "./Tabs/FAQs";
import Reviews from "./Tabs/Reviews";
import EnrollModal from "./EnrollModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// type for course props
type Course = {
  id: number;
  title: string;
  desc: string;
  duration: string;
  students: string;
  img: string;
  syllabus: string[];
};

interface TrainingHeaderProps {
  course: Course;
}

const tabComponents: Record<string, React.FC> = {
  Overview,
  Curriculum,
  FAQs,
  Reviews,
};

const TrainingHeader: React.FC<TrainingHeaderProps> = ({ course }) => {
  const [activeTab, setActiveTab] = useState("Curriculum");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = ["Overview", "Curriculum", "FAQs", "Reviews"];

  return (
    <div className={`${inter.className} w-full relative min-h-screen bg-white`}>
      {/* Header Title Section */}
      <div className="bg-gray-500 text-white py-8 md:h-[30vh] h-[40vh] ">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-semibold mb-4 w-full md:w-[70%] leading-snug tracking-wider md:px-0 px-2"
          >
            {course.title}
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-md md:text-md md:mt-10 font-inter flex md:space-x-4 md:px-0 px-2"
          >
            <span>{course.duration}</span>
            <span> · {course.students}</span>
            <span>· All levels </span>
            <span>· {course.syllabus.length} Lessons </span>
          </motion.h2>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex bg-white max-w-7xl mx-auto flex-col md:flex-row justify-between py-10 gap-6">
        {/* Right Card Section */}
        <div className="shadow-md rounded-xl order-1 md:order-2 w-[90%] md:w-1/3 max-w-sm -mt-20 md:-mt-48 md:mx-0 mx-4 flex-none self-start">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden relative z-10 h-[50vh] flex flex-col justify-between"
          >
            <div className="relative w-full">
              <Image
                src={course.img}
                alt={course.title}
                width={400}
                height={220}
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="w-full cursor-pointer py-3 bg-[#1d3557] text-white rounded-md shadow-md text-sm md:text-base"
                onClick={() => setIsModalOpen(true)}
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Left Tabs Section */}
        <div className="order-2 md:order-1 flex-1 md:mx-0 mx-4">
          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-t-xl overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 cursor-pointer text-sm md:text-base py-3 font-medium border-b-2 transition-all ${
                  activeTab === tab
                    ? "text-white border-blue-500 bg-[#1d3557]"
                    : "text-gray-600 border-transparent hover:text-[#1d3557]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content Box */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gray-100 rounded-b-xl p-6 text-gray-700 text-sm leading-relaxed"
          >
            {React.createElement(tabComponents[activeTab])}
          </motion.div>
        </div>
      </div>

      {/* Modal Component */}
      {isModalOpen && <EnrollModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default TrainingHeader;
