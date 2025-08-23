"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { BsStars } from "react-icons/bs";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question:
      "What is Neuros and how does it differ from other analytics platforms?",
    answer:
      "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes.",
  },
  {
    question: "How does the AI-driven predictive analytics feature work?",
    answer:
      "Our AI models analyze historical data, identify trends, and generate forecasts to help businesses make informed decisions with higher accuracy.",
  },
  {
    question: "Is my data secure with Neuros?",
    answer:
      "Yes, data security is our top priority. Neuros uses industry-standard encryption and complies with leading security certifications.",
  },
  {
    question:
      "Can I integrate Neuros with other tools and platforms I currently use?",
    answer:
      "Absolutely! Neuros supports integrations with a wide range of business tools and platforms for seamless workflows.",
  },
  {
    question:
      "How is the pricing structured for Neuros? Are there any hidden fees?",
    answer:
      "Neuros offers flexible subscription plans based on business needs, with transparent pricing and no hidden charges.",
  },
  {
    question:
      "I’m new to business analytics. Does Neuros offer any support or tutorials?",
    answer:
      "Yes, Neuros provides extensive support resources, including tutorials, documentation, and a dedicated customer success team.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col md:flex-row gap-10 px-6 md:px-16 lg:px-28 py-16 bg-white">
      {/* Left Section */}
      <div className="w-full md:w-1/3">
        <div className="mb-4 flex items-start justify-start">
          <span className="inline-flex items-center gap-2 px-4 py-2 shadow-lg text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-full border border-gray-300">
            <span className="text-blue-600">
              <BsStars />
            </span>
            <span>FAQ</span>
          </span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Explore our frequently asked questions to learn more about Neuros’s
          features, security, integration capabilities, and more
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-2/3 space-y-4">
        {faqs.map((faq: FAQItem, index: number) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-base font-medium text-gray-900 flex-1">
                <span className="border-l-4 border-blue-600 pl-2">
                  {faq.question}
                </span>
              </h3>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </div>

            {/* Answer with smooth transition */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
