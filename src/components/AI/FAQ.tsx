"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { BsStars } from "react-icons/bs";
import { Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is the Super 30 Batch?",
    answer: "It’s a fast-track program for 30 selected learners with hands-on projects and mentorship.",
  },
  {
    question: "Who can apply for Super 30?",
    answer: "Final-year students, fresh graduates, and early professionals can apply through a test and interview.",
  },
  {
    question: "What projects does your IT company handle?",
    answer: "We work on software, AI, cloud, and digital transformation projects for global clients.",
  },
  {
    question: "Which technologies do you use?",
    answer: "Our stack includes React, Node.js, Python, ML frameworks, and major cloud platforms.",
  },
  {
    question: "What is the work culture like?",
    answer: "We follow a collaborative culture with innovation, flexibility, and continuous learning.",
  },
  {
    question: "How do you support career growth?",
    answer: "We offer mentorship, project rotations, and training to help employees scale their careers.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white">
      <section
        className={`w-full flex flex-col md:flex-row gap-10 md:px-0 px-6 mx-auto max-w-7xl py-20  ${inter.className}`}
      >
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/3"
        >
          <div className="mb-6 flex items-start justify-start">
            <span className="inline-flex items-center gap-2 px-5 py-2 shadow-lg text-sm sm:text-base font-semibold text-gray-700 bg-gray-100 rounded-full border border-gray-300">
              <span className="text-blue-600 text-lg">
                <BsStars />
              </span>
              <span>FAQ</span>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Quick answers about our{" "}
            <span className="font-semibold text-blue-600">IT Company</span> and{" "}
            <span className="font-semibold text-blue-600">Super 30 Batch</span>.
          </p>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-2/3 space-y-6"
        >
          {faqs.map((faq: FAQItem, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-b border-gray-200 pb-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 flex-1">
                  <span className="border-l-4 border-blue-600 pl-3">
                    {faq.question}
                  </span>
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-gray-500" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-500" />
                )}
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="mt-4"
                  >
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default FAQ;
