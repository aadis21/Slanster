"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Inter } from "next/font/google";

import AvtarMale from "../../../public/home/Mentors/avtarMale.jpg";
import AvtarFemele from "../../../public/home/Mentors/avtarFemale.jpg";
import ContactModal from "../Header/ContactModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ---------- Types ----------
type Mentor = {
  name: string;
  role: string;
  experience: string;
  description: string;
  gender: "male" | "female";
};

type CardProps = {
  name: string;
  role: string;
  experience: string;
  description: string;
  image: StaticImageData;
  onBookNow: () => void;
};

// ---------- Card Component ----------
const Card: React.FC<CardProps> = ({
  name,
  role,
  experience,
  description,
  image,
  onBookNow,
}) => (
  <div
    className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden 
                  w-[260px] sm:w-[280px] md:w-[300px] flex-shrink-0 mx-3 
                  transition-all duration-300 flex flex-col h-[460px]"
  >
    <div className="relative h-[200px] bg-gray-200">
      <Image src={image} alt={name} fill className="object-cover" />
    </div>

    <div className="p-4 flex flex-col flex-1">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-900 font-semibold text-[15px]">{name}</h3>
      </div>

      <p className="text-[13px] text-gray-500 mb-2">
        {role} {experience && `| ${experience}`}
      </p>

      <p className="text-[13px] text-gray-600 leading-relaxed flex-grow">
        {description}
      </p>

      <button
        className="mt-auto w-full bg-[#0F395F] text-white text-sm py-2 
                   rounded-md font-medium hover:bg-[#0F395F] hover:scale-105 transition cursor-pointer"
        onClick={onBookNow}
      >
        Book Now
      </button>
    </div>
  </div>
);

// ---------- Main Component ----------
const OurWork: React.FC = () => {
  const cards: Mentor[] = useMemo(
    () => [
      {
        name: "Amitesh",
        role: "CTO · IT Company",
        experience: "10+ Yrs Of Experience",
        description:
          "Oversees end-to-end technology strategy, platform architecture, and product engineering. Highly skilled in AI systems, scalable microservices, and building products from 0→1.",
        gender: "male",
      },
      {
        name: "Sonam",
        role: "Product Manager · E-commerce",
        experience: "7+ Yrs Of Experience",
        description:
          "Drives end-to-end product development and deployment for e-commerce. Specializes in user journeys, conversion funnels, and data-driven roadmaps.",
        gender: "female",
      },
      // ...rest
    ],
    []
  );

  // ----- Slider refs & state -----
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const [cardStep, setCardStep] = useState(320);
  const [progress, setProgress] = useState(0);
  const [pauseAnimUntil, setPauseAnimUntil] = useState<number>(0);

  // Modal states
  const [openModal, setOpenModal] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null); // ✅ fixed type

  // card step calculation
  useEffect(() => {
    if (!firstCardRef.current) return;
    const el = firstCardRef.current;
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    const ml = parseFloat(style.marginLeft || "0");
    const mr = parseFloat(style.marginRight || "0");
    setCardStep(rect.width + ml + mr);
  }, []);

  // scroll progress
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
            <div ref={scrollerRef} className="overflow-hidden scroll-smooth">
              <div
                className={`flex w-[200%] ${
                  isPaused ? "" : "animate-slide"
                } hover:[animation-play-state:paused]`}
              >
                {[...cards, ...cards].map((card, index) => (
                  <div key={index} ref={index === 0 ? firstCardRef : undefined}>
                    <Card
                      {...card}
                      image={card.gender === "male" ? AvtarMale : AvtarFemele}
                      onBookNow={() => {
                        setSelectedMentor(card);
                        setOpenModal(true);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* SIDE BAR */}
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

              <div className="relative flex-1 h-[2px] bg-gray-300/70 rounded">
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-white"
                  style={{ width: `${Math.max(8, progress)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {openModal && (
        <ContactModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          // you can also pass `mentor={selectedMentor}` if ContactModal accepts it
        />
      )}
    </section>
  );
};

export default OurWork;
