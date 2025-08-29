"use client";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, Users } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { courses } from "@/data/courses";

const CourseCard = () => {
  const router = useRouter();

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
                onClick={() => router.push(`/trainingdetails/${course.id}`)}
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
