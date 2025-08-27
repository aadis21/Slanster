"use client";
import React from "react";
import { motion } from "framer-motion";

const Sitemap = () => {
  const sitemap = [
    {
      category: "Main Pages",
      links: ["Home", "About Us", "Services", "Contact"],
    },
    {
      category: "Courses",
      links: ["All Courses", "Web Development", "Data Science", "Design"],
    },
    {
      category: "Resources",
      links: ["Blog", "FAQs", "Privacy Policy", "Terms & Conditions"],
    },
    {
      category: "Account",
      links: ["Login", "Register", "Dashboard", "Profile"],
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen flex flex-col items-center py-16 px-6">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
      >
        Website Sitemap
      </motion.h1>

      {/* Sitemap grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        {sitemap.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-gray-700 hover:border-blue-500 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-400 mb-4">
              {section.category}
            </h2>
            <ul className="space-y-3">
              {section.links.map((link, j) => (
                <li key={j}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition duration-200 relative group"
                  >
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sitemap;
