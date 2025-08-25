"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Briefcase,
  Cpu,
  Shield,
  Users,
  Glasses,
  Monitor,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  backgroundimage: string;
};

const services: Service[] = [
  {
    title: "AI",
    desc: "Automate processes, analyze data, and decide smarter.",
    icon: <Monitor className="w-6 h-6 text-white" />,
    backgroundimage: "/home/ourservices/ai.png",
  },
  {
    title: "Consulting",
    desc: "Streamline operations and accelerate business growth.",
    icon: <Briefcase className="w-6 h-6 text-white" />,
    backgroundimage: "/home/ourservices/consulting.png",
  },
  {
    title: "Bespoke IT",
    desc: "Custom IT solutions for unique business needs.",
    icon: <Cpu className="w-6 h-6 text-white" />,
    backgroundimage: "/home/ourservices/Bespoke.png",
  },
  {
    title: "Cybersecurity",
    desc: "Protect digital assets with enterprise-grade security.",
    icon: <Shield className="w-6 h-6 text-white" />,
    backgroundimage: "/home/ourservices/Cyber security.png",
  },
  {
    title: "Staffing",
    desc: "Access top tech talent for your projects.",
    icon: <Users className="w-6 h-6 text-white" />,
    backgroundimage: "/home/ourservices/Staffing.png",
  },
  {
    title: "AR/VR",
    desc: "Immersive augmented and virtual reality solutions.",
    icon: <Glasses className="w-6 h-6 text-white" />,
    backgroundimage: "/home/ourservices/ARVR.png",
  },
];

const visibleCards = 3;

const mod = (n: number, m: number) => ((n % m) + m) % m;

const OurServices = () => {
  const total = services.length;
  const head = services.slice(0, visibleCards);
  const tail = services.slice(-visibleCards);
  const looped = useMemo<Service[]>(() => [...tail, ...services, ...head], []);

  const [index, setIndex] = useState(visibleCards);
  const [animating, setAnimating] = useState(true);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const [stepPx, setStepPx] = useState(0);

  const measure = () => {
    const cardEl = firstCardRef.current;
    const trackEl = trackRef.current;
    if (!cardEl || !trackEl) return;
    const cardWidth = cardEl.offsetWidth;
    const styles = window.getComputedStyle(trackEl);
    const gap = parseFloat(styles.gap || styles.columnGap || "0");
    setStepPx(cardWidth + gap);
  };

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleTransitionEnd = () => {
    const realStart = visibleCards;
    const realEnd = visibleCards + total - 1;

    if (index > realEnd) {
      setAnimating(false);
      setIndex(visibleCards);
    } else if (index < realStart) {
      setAnimating(false);
      setIndex(visibleCards + total - 1);
    }
  };

  useEffect(() => {
    if (!animating) {
      const id = requestAnimationFrame(() => setAnimating(true));
      return () => cancelAnimationFrame(id);
    }
  }, [animating]);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  const realIndex = mod(index - visibleCards, total);
  const progress = total > 1 ? realIndex / (total - 1) : 1;

  const barRef = useRef<HTMLDivElement | null>(null);
  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = barRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const targetReal = Math.round(ratio * (total - 1));
    const targetIdx = visibleCards + targetReal;
    setIndex(targetIdx);
  };

  return (
    <section className="py-16 px-6 md:px-0 bg-white">
      {/* Heading */}
      <div className="text-center">
        <p className="text-gray-500 uppercase tracking-wide mb-2">Our Services</p>
        <h2
          className={`${inter.className} font-normal text-gray-900 
            text-[16px] sm:text-[24px] md:text-[32px] lg:text-[40px]`}
        >
          Smart IT Services to Power <br /> Your Business
        </h2>
      </div>

      {/* Row slider */}
      <div className="relative max-w-7xl mx-auto mt-12">
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className={`flex gap-8 ${animating ? "transition-transform duration-500 ease-out" : ""}`}
            style={{ transform: `translateX(${-(index - visibleCards) * stepPx}px)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {looped.map((service, i) => (
              <div
                key={`${service.title}-${i}`}
                ref={i === 0 ? firstCardRef : undefined}
                className="relative flex flex-col justify-end items-start p-6 rounded-2xl h-[40vh] w-full sm:w-[300px] lg:w-[320px] shrink-0 overflow-hidden group cursor-pointer"
              >
                <Image
                  src={service.backgroundimage}
                  alt={`${service.title} background`}
                  fill
                  className="object-cover absolute inset-0"
                  sizes="(max-width: 1024px) 300px, 320px"
                  priority={i < 3}
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute top-0 left-0 mt-4 ml-4 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-white bg-white/20 backdrop-blur-sm">
                  {service.icon}
                </div>
                <div className="relative z-10 text-left mt-auto">
                  <h3 className={`${inter.className} text-lg font-normal text-yellow-400 mb-2`}>
                    {service.title}
                  </h3>
                  <p className={`${inter.className} text-gray-200 text-sm font-normal`}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls + Progress */}
        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-sky-900 text-white flex items-center justify-center shadow"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-sky-900 text-white flex items-center justify-center shadow"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Progress bar */}
          <div className="flex-1">
            <div
              ref={barRef}
              onClick={handleBarClick}
              className="relative h-[2px] w-full cursor-pointer select-none"
            >
              <div className="absolute inset-0 bg-neutral-300" />
              <div
                className="absolute left-0 top-0 h-full transition-all duration-500 bg-sky-900"
                style={{ width: `${Math.max(progress * 100, 2)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
