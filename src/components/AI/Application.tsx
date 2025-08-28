"use client";

import {
  CalendarCheck,
  ServerCog,
  Eye,
  RefreshCw,
  Shield,
  Users,
  BarChart3,
  Plug,
  MessageSquare,
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
  "Analytics Redefined": <BarChart3 className="w-5 h-5" />,
  "Seamless Integration": <Plug className="w-5 h-5" />,
  "Smart Collaboration": <MessageSquare className="w-5 h-5" />,
};

interface Testimonial {
  headers: string;
  text: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    headers: "AI-Powered Chat Support Bots",
    text: "Handle FAQs, resolve issues, and escalate to human agents when needed—all with NLP and sentiment-aware conversations.",
    role: "E-commerce, Healthcare, Banking",
  },
  {
    headers: "AI Web Crawling & Competitive Intelligence",
    text: "Stay ahead with real-time competitor insights. Scrapes pricing, services, and product data to generate actionable reports.",
    role: "Market Research, Consulting Firms",
  },
  {
    headers: "Voice AI – Calling Bots",
    text: "Automate outbound/inbound calls for reminders, collections, surveys, and lead generation with natural, human-like voice.",
    role: "Telecom, Insurance, BPO",
  },
  {
    headers: "Smart Resume Analyzer & Interview Bot",
    text: "Screen resumes, shortlist candidates, and conduct first-round AI-driven interviews via chat or voice.",
    role: "HR Tech, Staffing Agencies",
  },
  {
    headers: "AI Proposal Generator from RFPs",
    text: "Upload an RFP → get a polished, tailored proposal in minutes. Extracts requirements, drafts responses, and formats professionally.",
    role: "IT Consulting, Audit, Government Tenders",
  },
  {
    headers: "AI Document Summarizer & Insight Extractor",
    text: "Upload contracts, reports, or compliance docs → get instant summaries with risks, obligations, and next steps.",
    role: "Legal, Compliance, Procurement",
  },
  {
    headers: "AI-Based Inventory & Sales Recommender",
    text: "Predict demand, optimize stock, and suggest sales strategies based on real-time inventory and customer behavior.",
    role: "Retail, Pharma Stores",
  },
  {
    headers: "AI Social Media Integrator & Content Engine",
    text: "Generate, schedule, and post content automatically across platforms with hashtags, SEO, and engagement analytics.",
    role: "Personal Branding, SMBs, Influencer Marketing, EdTech",
  },
  {
    headers: "Seamless Integration",
    text: "Integrates with our existing tools effortlessly, saving time and resources.",
    role: "All Industries",
  },
];



const Application: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 6);

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:px-0 px-4 ">
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
  <h2 className="font-dmsans text-center md:text-5xl text-3xl leading-[1.2] max-w-4xl mx-auto text-[#1C1F25]">
    AI-powered tools, tailored for every need
  </h2>
  <p className="text-gray-500 mt-2 max-w-3xl mx-auto text-center">
    From customer support to content automation, Slanster brings together 
    powerful AI applications that make your work smarter, faster, and simpler.
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
