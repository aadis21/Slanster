"use client";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Overview = () => {
  return (
    <section
      className={`${inter.className} w-full py-10`}
    >
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-md md:text-lg lg:text-lg font-semibold text-gray-900 mb-6">
          LearnPress – The Ultimate WordPress LMS Plugin
        </h2>
        <p className="text-base md:text-md text-gray-600 leading-relaxed mb-4">
          LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This
          is one of the best WordPress LMS Plugins which can be used to easily
          create & sell courses online. You can create a course curriculum with
          lessons & quizzes included which is managed with an easy-to-use
          interface for users. Having this WordPress LMS Plugin, now you have a
          chance to quickly and easily create education, online school,
          online-course websites with no coding knowledge required.
        </p>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
          LearnPress is free and always will be, but it is still a premium
          high-quality WordPress Plugin that definitely helps you with making
          money from your WordPress Based LMS. Just try and see how amazing it
          is. LearnPress WordPress Online Course plugin is lightweight and super
          powerful with lots of Add-Ons to empower its core system.
        </p>
        <h3 className="text-md md:text-lg font-semibold text-gray-800 mt-8 mb-3">
          How to use WPML Add-on for LearnPress?
        </h3>
        <p className="text-base md:text-md text-gray-600 leading-relaxed">
          No comments yet! You be the first to comment.
        </p>
      </div>
    </section>
  );
};

export default Overview;
