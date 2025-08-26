"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { Inter } from "next/font/google";
import MemberShip from "./MemberShipCard";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

interface CounterProps {
  target: number; // The target number
  duration?: number; // Animation duration (ms)
  suffix?: string; // Text after number
}

const Counter: React.FC<CounterProps> = ({
  target,
  duration = 3000,
  suffix = "",
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  return (
    <h3 className="text-lg md:text-xl font-normal leading-tight whitespace-nowrap">
      {count.toLocaleString()} {suffix}
    </h3>
  );
};

const MemberShipLandingPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={` w-full ${inter.className}`}>
      {/* Background Image */}

      <Image
        src="/membership/membershipimg.png"
        alt="Membership Background"
        fill
        className="object-contain md:object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/30 -z-10"></div>

      {/* Search Box */}
      <div className="flex flex-col items-center justify-center h-[50vh] text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl flex items-center bg-white rounded-full shadow-lg overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search for Expert"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`flex-1 px-5 py-3 outline-none text-gray-700 text-sm md:text-base ${inter.className}`}
          />
          <button className="flex items-center gap-2 bg-[#084c74] hover:bg-[#084c74] text-white px-6 py-3 text-sm md:text-base">
            <FaSearch />
            Search
          </button>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-black/60 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-8 px-6">
          <div>
            <p className="text-sm md:text-base mb-1">Mentors Ready to Guide</p>
            <Counter target={200} suffix="+ Industry Experts" />
          </div>
          <div>
            <p className="text-sm md:text-base mb-1">Sessions Completed</p>
            <Counter target={10000} suffix="+ Successful Mentorships" />
          </div>
          <div>
            <p className="text-sm md:text-base mb-1">Learners Benefitted</p>
            <Counter target={8000} suffix="+ Growth Stories" />
          </div>
        </div>
      </div>
      {/* Experts Section */}
      <MemberShip searchQuery={searchQuery} />
    </div>
  );
};

export default MemberShipLandingPage;
