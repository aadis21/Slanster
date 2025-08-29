// File: FAQs.tsx
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQsProps {
  faqs: FAQItem[];
}

const FAQs: React.FC<FAQsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md"
        >
          {/* Question */}
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex justify-between items-center px-5 py-4 text-left text-gray-800 font-semibold focus:outline-none cursor-pointer"
          >
            <span className="text-lg">{faq.question}</span>
            <ChevronDown
              className={`h-5 w-5 text-gray-600 transform transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {/* Answer */}
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-5 pb-5 text-gray-600">
                  <p className="text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
