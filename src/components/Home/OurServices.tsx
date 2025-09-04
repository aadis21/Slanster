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
    title: "Artificial Intelligence",
    desc: "Automate processes, analyze data, and decide smarter.",
    icon: <Monitor className="w-6 h-6 text-white" />,
    backgroundimage: "/home/ourservices/ai.jpg",
  },
  {
    title: "Consulting",
    desc: "Streamline operations and accelerate business growth.",
    icon: <Briefcase className="w-6 h-6 text-white" />,
    backgroundimage: "/home/ourservices/consulting.jpg",
  },
  {
    title: "Bespoke IT",
    desc: "Custom IT solutions for unique business needs.",
    icon: <Cpu className="w-6 h-6 text-white" />,
    backgroundimage: "/home/ourservices/Bespoke.jpg",
  },
  {
    title: "Cybersecurity",
    desc: "Protect digital assets with enterprise-grade security.",
    icon: <Shield className="w-6 h-6 text-white" />,
    backgroundimage: "/home/ourservices/Cyber security.jpg",
  },
  {
    title: "Staffing",
    desc: "Access top tech talent for your projects.",
    icon: <Users className="w-6 h-6 text-white" />,
    backgroundimage: "/home/ourservices/Staffing.jpg",
  },
  {
    title: "AR/VR",
    desc: "Immersive augmented and virtual reality solutions.",
    icon: <Glasses className="w-6 h-6 text-white" />,
    backgroundimage: "/home/ourservices/ARVR.jpg",
  },
];

const OurServices: React.FC = () => {
  const visibleCards = 4;
  const mod = (n: number, m: number) => ((n % m) + m) % m;

  const total = services.length;
  const head = services.slice(0, visibleCards);
  const tail = services.slice(-visibleCards);
  const looped = useMemo<Service[]>(() => [...tail, ...services, ...head], []);

  const [index, setIndex] = useState(visibleCards);
  const [animating, setAnimating] = useState(true);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const [stepPx, setStepPx] = useState(0);

  const [dragPx, setDragPx] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const measure = () => {
    const cardEl = firstCardRef.current;
    const trackEl = trackRef.current;
    if (!cardEl || !trackEl) return;
    const cardWidth = cardEl.offsetWidth;
    const styles: CSSStyleDeclaration = window.getComputedStyle(trackEl);
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

  const next = () => total > visibleCards && setIndex((i) => i + 1);
  const prev = () => total > visibleCards && setIndex((i) => i - 1);

  const realIndex = mod(index - visibleCards, total);
  const progress = total > 1 ? realIndex / (total - 1) : 1;

  const barRef = useRef<HTMLDivElement | null>(null);
  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (total <= visibleCards) return;
    const el = barRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const targetReal = Math.round(ratio * (total - 1));
    const targetIdx = visibleCards + targetReal;
    setIndex(targetIdx);
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (total <= visibleCards) return;
    isDragging.current = true;
    touchStartX.current = e.touches[0].clientX;
    setAnimating(false);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current || touchStartX.current === null) return;
    const delta = e.touches[0].clientX - touchStartX.current;
    const maxDrag = stepPx * 0.9;
    setDragPx(Math.max(Math.min(delta, maxDrag), -maxDrag));
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = dragPx;
    setDragPx(0);
    setAnimating(true);
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
  };

  return (
    <section className="py-12 px-4 md:px-6 bg-white">
      <div className="text-center">
        <p className="inline-block border rounded-2xl border-gray-300 shadow-md px-4 py-1 text-gray-500 uppercase tracking-wide mb-4 bg-white">
          Our Services
        </p>
        <h2
          className={`${inter.className} font-normal text-gray-900 text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px]`}
        >
          Smart IT Services to Power Your Business
        </h2>
      </div>

      <div className="relative max-w-8xl md:px-20 px-4 mx-auto mt-8">
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            className={`flex gap-6 md:gap-8 ${
              animating ? "transition-transform duration-500 ease-out" : ""
            }`}
            style={{
              transform: `translateX(${
                -(index - visibleCards) * stepPx + dragPx
              }px)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {looped.map((service, i) => (
              <div
                key={`${service.title}-${i}`}
                ref={i === 0 ? firstCardRef : undefined}
                className="relative flex flex-col justify-end items-center p-4 md:p-6 rounded-2xl h-[40vh] sm:h-[45vh] md:h-[40vh] w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] shrink-0 overflow-hidden group cursor-pointer"
              >
                <Image
                  src={service.backgroundimage}
                  alt={service.title}
                  fill
                  className="object-cover absolute inset-0"
                  sizes="(max-width: 768px) 260px, (max-width: 1024px) 280px, 320px"
                  priority={i < 3}
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-sky-900 transition-all duration-300" />

                <div className="absolute top-0 left-0 mt-4 ml-4 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-white bg-white/20 backdrop-blur-sm">
                  {service.icon}
                </div>

                <div className="relative z-10 mt-auto w-full p-3 md:p-4 flex flex-col items-center justify-end text-center group-hover:justify-center transition-all duration-500 bg-black/80 group-hover:bg-black/40 rounded-2xl">
                  <h3
                    className={`${inter.className} text-center text-lg sm:text-lg md:text-xl font-normal mb-2 text-yellow-400 group-hover:text-2xl group-hover:font-semibold transition-all duration-500 uppercase`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`${inter.className} text-gray-200 text-xs sm:text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {total > visibleCards && (
          <div className="mt-6 flex items-center gap-3 md:gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-sky-900 text-white flex items-center justify-center shadow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-sky-900 text-white flex items-center justify-center shadow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="flex-1 hidden md:block">
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
        )}
      </div>
    </section>
  );
};

export default OurServices;
