"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ import router

const courses = [
  {
    id: 1,
    title: "ITGC, IT Audit & Cyber Assessment",
    desc: "Understand IT General Controls, plan IT audits, assess cyber risks, and report findings with practical checklists........",
    duration: "2 Weeks",
    students: "156 Students",
    img: "/TrainingImg.png",
  },
  {
    id: 2,
    title: "IT Asset Management (SAM)",
    desc: "Master software & hardware lifecycle, license compliance, audits, and optimization using SAM best practices........",
    duration: "2 Weeks",
    students: "156 Students",
    img: "/TrainingImg.png",
  },
  {
    id: 3,
    title: "ESG & Sustainability",
    desc: "Learn ESG frameworks, materiality, disclosures, and data tracking to drive sustainable business outcomes........",
    duration: "3 Weeks",
    students: "220 Students",
    img: "/TrainingImg.png",
  },
  {
    id: 4,
    title: "Digital Risk & Compliance",
    desc: "Manage digital risks across cloud, data, and apps; align with policies, controls, and regulatory requirements........",
    duration: "2 Weeks",
    students: "190 Students",
    img: "/TrainingImg.png",
  },
  {
    id: 5,
    title: "Entrepreneurship & Startup Innovation",
    desc: "Validate ideas, build MVPs, craft GTM, and pitch to stakeholders with lean startup and innovation tools........",
    duration: "4 Weeks",
    students: "320 Students",
    img: "/TrainingImg.png",
  },
  {
    id: 6,
    title: "Data Privacy & DPDP/GDPR Basics",
    desc: "Grasp core privacy principles, consent, data rights, and compliance workflows under DPDP (India) & GDPR........",
    duration: "6 Weeks",
    students: "410 Students",
    img: "/TrainingImg.png",
  },
];

const CourseCard = () => {
  const router = useRouter(); // ✅ initialize router

  return (
    <section className="py-12 bg-white">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-5xl text-gray-900 font-bold pb-3">
          Our Most Popular Training Program
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Let’s join our best classes with our famous instructor and institutes
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
        {courses?.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 
                       h-auto md:h-[450px] flex flex-col"
          >
            {/* Image */}
            <div className="h-40 md:h-56 w-full overflow-hidden rounded-t-xl">
              <Image
                src={course.img}
                alt={course.title}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                width={400}
                height={400}
              />
            </div>

            {/* Content */}
            <div className="p-4 md:p-5 flex flex-col flex-grow">
              <h3 className="text-base md:text-lg font-semibold text-gray-800">
                {course.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mt-2 flex-grow">
                {course.desc}
              </p>

              {/* Meta info */}
              <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500 mt-3">
                <span className="flex items-center gap-1">
                  <Calendar size={14} className="md:size-4" /> {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users size={14} className="md:size-4" /> {course.students}
                </span>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push("/trainingdetails")} // ✅ redirect
                className="mt-4 md:mt-5 w-full py-2 text-xs md:text-sm font-medium rounded-lg 
                           text-[#024a71] border border-[#024a71] hover:bg-[#024a71] hover:text-white 
                           transition-colors cursor-pointer"
              >
                View More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CourseCard;
