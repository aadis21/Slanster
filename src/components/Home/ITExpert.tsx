"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

// Use absolute paths from public folder
const posts = [
  {
    id: 1,
    date: "19 Jan 2022",
    readTime: "5 min. read",
    title: "5 Benefits of migrating your business to the cloud",
    desc: "Explore how cloud migration can boost scalability, reduce costs, and improve data security.",
    tag: "Cloud Computing",
    tagColor: "bg-blue-100 text-blue-600",
    sliderimage: "/home/slider/slide-1.jpg",
  },
  {
    id: 2,
    date: "19 Jan 2022",
    readTime: "5 min. read",
    title: "Top cybersecurity threats in 2024: what you need to know",
    desc: "Stay ahead of evolving cyber threats with our guide on the most pressing risks and how to manage them.",
    tag: "Cybersecurity",
    tagColor: "bg-cyan-100 text-cyan-600",
    sliderimage: "/home/slider/slide-2.jpg",
  },
  {
    id: 3,
    date: "19 Jan 2022",
    readTime: "5 min. read",
    title: "Managed IT services vs. In-house IT: which is right for you?",
    desc: "We break down the pros and cons of managed IT services versus in-house teams.",
    tag: "IT Support",
    tagColor: "bg-yellow-100 text-yellow-600",
    sliderimage: "/home/slider/slide-3.jpg",
  },
  {
    id: 4,
    date: "19 Jan 2022",
    readTime: "5 min. read",
    title: "The importance of responsive IT in business growth",
    desc: "Learn why having a flexible IT infrastructure is key to scaling your business.",
    tag: "Cybersecurity",
    tagColor: "bg-cyan-100 text-cyan-600",
    sliderimage: "/home/slider/slide-1.jpg",
  },
  {
    id: 5,
    date: "19 Jan 2022",
    readTime: "5 min. read",
    title: "Top cybersecurity threats in 2024: what you need to know",
    desc: "Stay ahead of evolving cyber threats with our guide on the most pressing risks and how to manage them.",
    tag: "Cybersecurity",
    tagColor: "bg-cyan-100 text-cyan-600",
    sliderimage: "/home/slider/slide-2.jpg",
  },
  {
    id: 6,
    date: "19 Jan 2022",
    readTime: "5 min. read",
    title: "Managed IT services vs. In-house IT: which is right for you?",
    desc: "We break down the pros and cons of managed IT services versus in-house teams.",
    tag: "IT Support",
    tagColor: "bg-yellow-100 text-yellow-600",
    sliderimage: "/home/slider/slide-3.jpg",
  },
];

const ITExpert = () => {
  const [current, setCurrent] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

  const visibleCards = 3.5;
  const maxIndex = posts.length - visibleCards;

  const prevSlide = () => {
    if (current > 0) setCurrent((prev) => prev - 1);
  };

  const nextSlide = () => {
    if (current < maxIndex) setCurrent((prev) => prev + 1);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSlidesPerView(4);
      else if (window.innerWidth >= 768) setSlidesPerView(3);
      else if (window.innerWidth >= 640) setSlidesPerView(2);
      else setSlidesPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <h2 className="font-inter font-medium text-4xl sm:text-5xl md:text-[54px] tracking-[-0.0225em] text-gray-900 leading-snug sm:leading-tight">
            Innovating IT: Expert <br /> insights & industry trends
          </h2>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              disabled={current === 0}
              className={`p-2 rounded-full shadow ${
                current === 0
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              disabled={current >= posts.length - 1}
              className={`p-2 rounded-full shadow ${
                current >= posts.length - 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              <ArrowRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / slidesPerView)}%)`,
            }}
          >
            {posts.map((post) => (
              <div
                key={post.id}
                className={`px-3 py-10 flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4`}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm h-full flex flex-col">
                  {/* Image */}
                  <div className="h-48 flex-shrink-0 relative">
                    <Image
                      src={post.sliderimage}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <p className="text-sm text-red-600 font-medium mb-2">
                      {post.date} • {post.readTime}
                    </p>

                    <h3 className="font-semibold text-lg text-gray-900 leading-snug mb-2 flex items-center justify-between">
                      {post.title}
                      <span className="ml-2 text-gray-500">↗</span>
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {post.desc}
                    </p>

                    {/* Tag */}
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${post.tagColor} mt-auto`}
                    >
                      {post.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITExpert;
