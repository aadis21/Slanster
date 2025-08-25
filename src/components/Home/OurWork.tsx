"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";

import Img1 from "../../../public/home/Mentors/Chirag.png";
import Img2 from "../../../public/home/Mentors/Divyansh.png";
import Img3 from "../../../public/home/Mentors/avtar.jpg";
import Img4 from "../../../public/home/Mentors/Nathan.png";
import Img5 from "../../../public/home/Mentors/Shubham.png";
import Img6 from "../../../public/home/Mentors/Vineet.png";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type CardProps = {
  name: string;
  role: string;
  experience: string;
  description: string;
  image: StaticImageData;
};

const Card: React.FC<CardProps> = ({
  name,
  role,
  experience,
  description,
  image,
}) => (
  <div
    className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden 
               w-[260px] sm:w-[280px] md:w-[300px] flex-shrink-0 mx-3 
               transition-all duration-300 flex flex-col h-[460px]"
  >
    {/* Image Frame (fixed height for all) */}
    <div className="relative h-[200px] bg-gray-200">
      <Image src={image} alt={name} fill className="object-cover" />
    </div>

    {/* Content */}
    <div className="p-4 flex flex-col flex-1">
      {/* Name + Logo Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-gray-900 font-semibold text-[15px]">{name}</h3>
        {/* <span className="text-gray-400 text-xs">🌐 logo</span> */}
      </div>

      {/* Role + Exp */}
      <p className="text-[13px] text-gray-500 mb-2">
        {role} {experience && `| ${experience}`}
      </p>

      {/* Description */}
      <p className="text-[13px] text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Book Now Button (always bottom) */}
      <button
        className="mt-auto w-full bg-[#0F395F] text-white text-sm py-2 
                   rounded-md font-medium hover:bg-[#0F395F] hover:scale-105 transition cursor-pointer"
      >
        Book Now
      </button>
    </div>
  </div>
);

/** Single temporary avatar for ALL mentors — swap later */
const placeholderAvatar = Img3;

const OurWork: React.FC = () => {
  const cards = useMemo(
    () => [
      // ---- Your 7 requested mentors ----
      {
        name: "Amitesh",
        role: "CTO · IT Company",
        experience: "10+ Yrs Of Experience",
        description:
          "Oversees end-to-end technology strategy, platform architecture, and product engineering. Highly skilled in AI systems, scalable microservices, and building products from 0→1.",
        image: placeholderAvatar,
      },
      {
        name: "Gaurav",
        role: "Sr Manager · Big4",
        experience: "9+ Yrs Of Experience",
        description:
          "Works at a Big4 firm in business, risk, and technology consulting. Guides on control frameworks, digital transformation, and tech-enabled risk mitigation.",
        image: placeholderAvatar,
      },
      {
        name: "Divyansh",
        role: "Professor · Artificial Intelligence",
        experience: "8+ Yrs Of Experience",
        description:
          "Educator at a leading university teaching AI and ML. Focuses on practical model building, MLOps fundamentals, and responsible AI practices.",
        image: placeholderAvatar,
      },
      {
        name: "Sonam",
        role: "Product Manager · E-commerce",
        experience: "7+ Yrs Of Experience",
        description:
          "Drives end-to-end product development and deployment for e-commerce. Specializes in user journeys, conversion funnels, and data-driven roadmaps.",
        image: placeholderAvatar,
      },
      {
        name: "Rishabh",
        role: "Risk Consultant · Big4",
        experience: "6+ Yrs Of Experience",
        description:
          "Specializes in enterprise risk management and policy consulting at a Big4 firm. Advises on governance models, audits, and regulatory alignment.",
        image: placeholderAvatar,
      },
      {
        name: "Dhruv",
        role: "Cyber Specialist · Banking",
        experience: "8+ Yrs Of Experience",
        description:
          "Experienced in governance, risk, and compliance for financial institutions. Mentors on GRC tooling, SOC processes, and regulatory frameworks.",
        image: placeholderAvatar,
      },
      {
        name: "Anirudh",
        role: "ESG Consultant · Big4",
        experience: "7+ Yrs Of Experience",
        description:
          "Climate change and social impact consulting expert at a Big4 firm. Guides on ESG reporting, materiality assessment, and sustainability roadmaps.",
        image: placeholderAvatar,
      },

      // ---- +3 GPT-created Indian mentors (Cyber, AI, Product) to reach total 10 ----
      {
        name: "Kriti",
        role: "AI Product Lead",
        experience: "9+ Yrs Of Experience",
        description:
          "Leads AI-first product strategy—LLM integrations, RAG pipelines, and experimentation. Mentors on PRDs, model evaluations, and GTM for AI features.",
        image: placeholderAvatar,
      },
      {
        name: "Kabir",
        role: "Cyber Threat Analyst",
        experience: "6+ Yrs Of Experience",
        description:
          "Focuses on threat hunting, incident response, and SIEM use-cases. Coaches on playbooks, blue-team workflows, and defense-in-depth design.",
        image: placeholderAvatar,
      },
      {
        name: "Meera",
        role: "Senior Product Manager",
        experience: "8+ Yrs Of Experience",
        description:
          "Owns discovery → delivery for data-driven products. Strong in metrics, stakeholder alignment, experimentation, and scalable release processes.",
        image: placeholderAvatar,
      },
    ],
    []
  );

  // ----- Slider refs & state (for working side bar) -----
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const [cardStep, setCardStep] = useState(320); // will be measured
  const [progress, setProgress] = useState(0);
  const [pauseAnimUntil, setPauseAnimUntil] = useState<number>(0);

  // Measure one card width (including margins) for accurate scroll step
  useEffect(() => {
    if (!firstCardRef.current) return;
    const el = firstCardRef.current;
    const rect = el.getBoundingClientRect();
    // mx-3 => 0.75rem each side. In pixels:
    const style = window.getComputedStyle(el);
    const ml = parseFloat(style.marginLeft || "0");
    const mr = parseFloat(style.marginRight || "0");
    setCardStep(rect.width + ml + mr);
  }, []);

  // Track scroll to update progress bar
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => {
      const max = scroller.scrollWidth - scroller.clientWidth;
      const val = max > 0 ? (scroller.scrollLeft / max) * 100 : 0;
      setProgress(val);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  const pauseAnimationFor = (ms: number) => {
    setPauseAnimUntil(Date.now() + ms);
    setTimeout(() => setPauseAnimUntil((t) => (Date.now() >= t ? 0 : t)), ms);
  };

  const handleNext = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    pauseAnimationFor(2500);
    scroller.scrollBy({ left: cardStep, behavior: "smooth" });
  };

  const handlePrev = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    pauseAnimationFor(2500);
    scroller.scrollBy({ left: -cardStep, behavior: "smooth" });
  };

  const isPaused = pauseAnimUntil > Date.now();

  return (
    <section className={`bg-[#0F395F] text-white ${inter.className}`}>
      <div className="max-w-7xl md:px-0 px-2 mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <h2 className="text-[32px] md:text-[52px] lg:text-[52px] leading-snug">
              Meet Your Mentors
            </h2>
            <p className="mt-4 text-gray-300 text-[15px] leading-relaxed">
              Learn from industry experts with practical insights and
              personalized guidance to elevate your skills.
            </p>

            <button
              className="md:mt-12 mt-5 inline-flex items-center rounded-md 
                         text-[#0A2852] bg-white px-6 py-3 text-sm font-medium 
                         shadow-md hover:shadow-lg transition-transform hover:scale-105"
              type="button"
            >
              Get Personalized Advice
            </button>
          </div>

          {/* Right Column - Slider */}
          <div className="lg:col-span-7">
            {/* Slider viewport (scrollable programmatically) */}
            <div ref={scrollerRef} className="overflow-hidden scroll-smooth">
              {/* Doubled list + original animation. We pause it briefly when using arrows. */}
              <div
                className={`flex w-[200%] ${
                  isPaused ? "" : "animate-slide"
                } hover:[animation-play-state:paused]`}
              >
                {[...cards, ...cards].map((card, index) => (
                  <div key={index} ref={index === 0 ? firstCardRef : undefined}>
                    <Card {...card} />
                  </div>
                ))}
              </div>
            </div>

            {/* SIDE BAR — moved DOWN & now working */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={handlePrev}
                  className="h-10 w-10 rounded-full bg-[#0A3A58] flex items-center justify-center
                             text-white text-lg leading-none shadow-sm select-none active:scale-95"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full bg-[#0A3A58] flex items-center justify-center
                             text-white text-lg leading-none shadow-sm select-none active:scale-95"
                >
                  ›
                </button>
              </div>

              {/* progress track */}
              <div className="relative flex-1 h-[2px] bg-gray-300/70 rounded">
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-white"
                  style={{ width: `${Math.max(8, progress)}%` }} // ensures small visible segment
                />
              </div>
            </div>
            {/* /SIDE BAR */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
