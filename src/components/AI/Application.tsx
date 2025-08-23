"use client";

import {
  CalendarCheck,
  ServerCog,
  Eye,
  RefreshCw,
  Shield,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { BsStars } from "react-icons/bs";



const iconMap = {
  "Predictive Power": <CalendarCheck className="w-5 h-5" />,
  "Connect with Ease": <Users className="w-5 h-5" />,
  "Visualize Your Success": <Eye className="w-5 h-5" />,
  "Stay Updated, Always": <RefreshCw className="w-5 h-5" />,
  "Your Data's Safe Haven": <Shield className="w-5 h-5" />,
  "Collaborate and Conquer": <ServerCog className="w-5 h-5" />,
};


interface Testimonial {
  headers: string;
  text: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    headers: "Predictive Power",
    text: "Project management is smoother with Neuros. Its dashboards provide a clear view of progress and areas of improvement.",
    role: "Finance, Retail, E-commerce",
  },
  {
    headers: "Connect with Ease",
    text: "Neuros's real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.",
    role: "Finance, Retail, E-commerce",
  },
  {
    headers: "Visualize Your Success",
    text: "Real-time data processing with Neuros has changed how we make decisions. It's a must-have tool for modern businesses.",
    role: "Finance, Retail, E-commerce",
  },
  {
    headers: "Stay Updated, Always",
    text: "Thanks to Neuros, our workflows are far more efficient and transparent. It’s a powerful tool for scaling companies.",
    role: "Finance, Retail, E-commerce",
  },
  {
    headers: "Your Data's Safe Haven",
    text: "Project management is smoother with Neuros. Its dashboards provide a clear view of progress and areas of improvement.",
    role: "Finance, Retail, E-commerce",
  },
  {
    headers: "Collaborate and Conquer",
    text: "Neuros's real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.",
    role: "Finance, Retail, E-commerce",
  },
  {
    headers: "Analytics Redefined",
    text: "Neuros allows us to make data-driven decisions faster than ever before.",
    role: "Finance, Retail, E-commerce",
  },
  {
    headers: "Seamless Integration",
    text: "Integrates with our existing tools effortlessly, saving time and resources.",
    role: "Finance, Retail, E-commerce",
  },
  {
    headers: "Smart Collaboration",
    text: "Team communication and project tracking has never been easier with Neuros.",
    role: "Finance, Retail, E-commerce",
  },
];

const Application: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 6);

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-4 flex items-center justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 shadow-lg text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-full border border-gray-300">
            <span className="text-blue-600">
              <BsStars />
            </span>
            <span>Applications</span>
          </span>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Insights and predictions made easy
          </h2>
          <p className="text-gray-500 mt-2 max-w-4xl mx-auto text-center">
            Advanced business intelligence tools enhance efficiency across your
            entire operation. By predicting future revenue and dissecting
            marketing effectiveness, these tools provide you with the critical
            insights needed for informed decision-making.
          </p>
        </div>

        {/* Cards with shadow overlay */}
        <div className="relative">
          {/* Shadow overlay above cards */}
          {!showAll && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-800 to-transparent pointer-events-none rounded-b-xl"></div>
          )}

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedTestimonials.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl border shadow-md hover:shadow-lg transition-all flex flex-col h-auto"
              >
                {/* Icon */}
                <div className="mb-4">
                  <span className="p-3 rounded-full bg-blue-100 text-blue-600 text-xl inline-flex">
                    {iconMap[item.headers as keyof typeof iconMap] || (
                      <ServerCog className="w-5 h-5" />
                    )}
                  </span>
                </div>

                {/* Header */}
                <h2 className="text-black text-md font-semibold">
                  {item.headers}
                </h2>

                {/* Text */}
                <p className="text-gray-600 italic mb-4 flex-grow">
                  “{item.text}”
                </p>

                {/* Role */}
                <div className="mt-auto">
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 rounded-full text-gray-600 cursor-pointer hover:scale-105 border border-gray-600 transition"
          >
            {showAll ? "View Less" : "Explore more application"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Application;
