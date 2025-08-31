"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type CategoryKey =
  | "Manufacturing"
  | "Retail"
  | "Healthcare"
  | "Fitness & Sports"
  | "Construction";

interface CategoryItem {
  title: string;
  description: string;
}

const categoriesData: Record<
  CategoryKey,
  { items: CategoryItem[]; image: string }
> = {
  Manufacturing: {
    items: [
      {
        title: "Inventory Management",
        description:
          "Our computer vision solutions scan the aisle and track stock levels to manage inventory and prevent understocking or overstacking using video AI.",
      },
      {
        title: "Quality Control",
        description:
          "Automated defect detection to improve manufacturing efficiency using computer vision.",
      },
      {
        title: "Worker Safety",
        description:
          "Monitor factory environments to ensure worker safety and compliance.",
      },
    ],
    image: "/home/ourservices/ai.png",
  },
  Retail: {
    items: [
      {
        title: "Retail Insights",
        description:
          "AI-powered analytics to track customer behavior, sales performance, and optimize product placement.",
      },
      {
        title: "Smart Checkout",
        description:
          "Frictionless checkout with computer vision powered self-checkout systems.",
      },
    ],
    image: "/home/ourservices/ai.png",
  },
  Healthcare: {
    items: [
      {
        title: "Patient Monitoring",
        description:
          "Computer vision solutions to monitor patient activity and improve care quality inside hospitals.",
      },
    ],
    image: "/home/ourservices/ai.png",
  },
  "Fitness & Sports": {
    items: [
      {
        title: "Performance Tracking",
        description:
          "AI-powered video analytics to track athletic performance and provide insights for improvement.",
      },
    ],
    image: "/home/ourservices/ai.png",
  },
  Construction: {
    items: [
      {
        title: "Site Safety",
        description:
          "Monitor construction sites to ensure worker safety and compliance using AI video analytics.",
      },
    ],
    image: "/home/ourservices/ai.png",
  },
};

const Catogories = () => {
  const [activeTab, setActiveTab] = useState<CategoryKey>("Manufacturing");

  return (
    <div className="bg-white">
      <div className={`${inter.className} max-w-7xl mx-auto px-4 py-10`}>
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          {(Object.keys(categoriesData) as CategoryKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#024a71] text-white "
                  : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100 cursor-pointer"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left Side Cards */}
          <div className="flex flex-col gap-6 flex-1">
            {categoriesData[activeTab].items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="border border-blue-900 cursor-pointer rounded-md p-4 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-900 mt-2 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Side Image with Animation */}
          <div className="flex-1 flex">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full rounded-lg overflow-hidden flex"
              >
                <Image
                  src={categoriesData[activeTab].image}
                  alt={activeTab}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catogories;
