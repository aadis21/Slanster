"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const experts = [
  {
    id: 1,
    name: "Sneha Kapoor",
    expertise: "Cloud Architect",
    experience: "14 yrs",
    description:
      "AI Researcher with expertise in predictive modeling and natural language processing. Sneha has guided 200+ students on ML-based projects.",
    image: "/membership/avtar.jpg",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    expertise: "Data Scientist",
    experience: "10 yrs",
    description:
      "Specialist in deep learning and AI-driven applications with experience in healthcare and finance.",
    image: "/membership/avtar.jpg",
  },
  {
    id: 3,
    name: "Ananya Verma",
    expertise: "AI/ML Engineer",
    experience: "8 yrs",
    description:
      "Expert in NLP, chatbots, and conversational AI with hands-on project mentorship for 150+ students.",
    image: "/membership/avtar.jpg",
  },
  {
    id: 4,
    name: "Amit Patel",
    expertise: "Full Stack Developer",
    experience: "12 yrs",
    description:
      "Mentor for scalable web and cloud solutions, guiding 100+ developers on microservices and React.",
    image: "/membership/avtar.jpg",
  },
];

const MemberShip = () => {
  return (
    <div
      className={`${inter.className} bg-gray-50 py-12 px-4 sm:px-6 lg:px-12`}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-12 text-gray-900">
        Meet Our Experts
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="flex bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
          >
            {/* Expert Image */}
            <div className="w-52 md:w-52 h-auto relative flex-shrink-0">
              <Image
                src={expert.image}
                alt={expert.name}
                width={208}
                height={208}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Expert Info */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {expert.name}
                </h3>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Expertise – </span>
                  {expert.expertise}
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Experience – </span>
                  {expert.experience}
                </p>
                <p className="text-sm text-gray-500">{expert.description}</p>
              </div>

              <button className="mt-4 bg-[#0f9af0] hover:bg-[#007acc] text-white text-sm px-5 py-2 rounded-lg shadow transition-all w-fit">
                Get Expert Guidance
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberShip;
