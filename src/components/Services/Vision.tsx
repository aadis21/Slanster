"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type TabKey = "Frameworks" | "Feature Extraction" | "Feature Analysis";

const tabContent: Record<
  TabKey,
  { points: { label: string; value: string }[]; image: string }
> = {
  Frameworks: {
    points: [
      { label: "Language", value: "Python" },
      { label: "CV Libraries", value: "OpenCV" },
      { label: "Deep Learning Platforms", value: "TensorFlow, PyTorch, Keras" },
      {
        label: "Python Libraries",
        value: "Pandas, Seaborn, Scikit-learn, SciPy",
      },
    ],
    image: "/home/ourservices/ai.png",
  },
  "Feature Extraction": {
    points: [
      { label: "Edge Detection", value: "Canny, Sobel" },
      { label: "Descriptors", value: "SIFT, SURF, ORB" },
      { label: "Segmentation", value: "Watershed, GrabCut" },
    ],
    image: "/home/ourservices/ai.png",
  },
  "Feature Analysis": {
    points: [
      { label: "Classification", value: "CNN, SVM" },
      { label: "Object Detection", value: "YOLO, Faster R-CNN" },
      { label: "Tracking", value: "SORT, DeepSORT" },
    ],
    image: "/home/ourservices/ai.png",
  },
};

const Vision = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Frameworks");

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Our Computer Vision{" "}
          <span className="text-[#024a71]">Tools & Technologies</span>
        </h2>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Whether you want to upgrade your computer vision or create it from
          scratch, our AI experts have the knowledge to guide you beyond the
          hurdle of choosing between deep learning and traditional techniques.
        </p>

        {/* Tabs */}
        <div className="flex gap-4 mb-10 flex-wrap">
          {(Object.keys(tabContent) as TabKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#024a71] text-white shadow-md"
                  : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100 cursor-pointer"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side Text */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {tabContent[activeTab].points.map((point, index) => (
                  <div key={index} className="text-gray-800 text-lg">
                    <span className="text-[#024a71] font-medium">
                      • {point.label}
                    </span>{" "}
                    - {point.value}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-end items-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg overflow-hidden"
              >
                <Image
                  src={tabContent[activeTab].image}
                  alt={activeTab}
                  width={350} // fixed width
                  height={250} // fixed height
                  className="object-cover rounded-md shadow-md"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
