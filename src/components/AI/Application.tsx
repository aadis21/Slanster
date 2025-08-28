"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import type { Variants, Easing } from "framer-motion";

// Icons
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
  PhoneCall,
  FileText,
  FileCog,
  FileSearch,
  Boxes,
  Megaphone,
  Globe,
} from "lucide-react";
import { BsStars } from "react-icons/bs";

// ===== ICON MAP (unchanged content) =====
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

// Project-based icon resolver (does not change your content)
function resolveIcon(header: string) {
  const h = header.toLowerCase();
  if (h.includes("chat") || h.includes("support") || h.includes("bot"))
    return <MessageSquare className="w-5 h-5" />;
  if (h.includes("web crawling") || h.includes("competitive") || h.includes("crawling"))
    return (
      <span className="inline-flex items-center gap-1">
        <Globe className="w-5 h-5" />
      </span>
    );
  if (h.includes("voice")) return <PhoneCall className="w-5 h-5" />;
  if (h.includes("resume") || h.includes("interview")) return <FileText className="w-5 h-5" />;
  if (h.includes("rfp") || h.includes("proposal")) return <FileCog className="w-5 h-5" />;
  if (h.includes("document") || h.includes("summarizer") || h.includes("extractor"))
    return <FileSearch className="w-5 h-5" />;
  if (h.includes("inventory") || h.includes("sales")) return <Boxes className="w-5 h-5" />;
  if (h.includes("social media") || h.includes("content engine")) return <Megaphone className="w-5 h-5" />;
  if (h.includes("integration")) return <Plug className="w-5 h-5" />;
  return <ServerCog className="w-5 h-5" />;
}

// ===== TYPES (unchanged content) =====
interface Testimonial {
  headers: string;
  text: string;
  role: string;
}

// ===== DATA (unchanged content) =====
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

// ===== SVG star-noise helper (fixes JSX string parsing) =====
const STAR_SVG_RAW = `
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
  <g fill="#fff" opacity="0.7">
    <circle cx="10" cy="20" r="1"/>
    <circle cx="50" cy="80" r="0.8"/>
    <circle cx="100" cy="50" r="0.9"/>
    <circle cx="70" cy="30" r="0.7"/>
  </g>
</svg>
`;

export function buildStarNoiseUrl(svg: string) {
  const enc = encodeURIComponent(svg);
  return `url("data:image/svg+xml,${enc}")`;
}

const STAR_BG_URL = buildStarNoiseUrl(STAR_SVG_RAW);

// Typed easing constants (fixes TS 'Easing' type errors)
const EASE_OUT: Easing = [0.22, 1, 0.36, 1];
const LINEAR: Easing = [0, 0, 1, 1];
const EASE_IN_OUT: Easing = [0.42, 0, 0.58, 1];

// ===== ANIMATION VARIANTS =====
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.98,
    transition: { duration: 0.35, ease: EASE_OUT },
  },
};

// ===== PARALLAX & CURSOR UTILS =====
const useParallax = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0.75]);
  const translate = useTransform(scrollY, [0, 500], [0, 24]);
  return { opacity, translate };
};

function useCardTilt() {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50, 0], [8, -8, 0]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(x, [-50, 50, 0], [-8, 8, 0]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(Math.max(-50, Math.min(50, px / 6)));
    y.set(Math.max(-50, Math.min(50, py / 6)));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, rx, ry, handleMouseMove, reset };
}

// ===== COMPONENT =====
const Application: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  const { opacity, translate } = useParallax();

  const gradientMask = useMemo(
    () =>
      !showAll
        ? "after:absolute after:inset-x-0 after:bottom-0 after:h-28 after:bg-gradient-to-t after:from-white after:to-transparent after:pointer-events-none"
        : "",
    [showAll]
  );

  return (
    <section className="relative w-full py-20 bg-[#0b1020] text-white overflow-hidden">
      {/* --- Background Layer: animated grid + radial glows --- */}
      <motion.div
        aria-hidden
        style={{ opacity, y: translate }}
        className="pointer-events-none absolute inset-0"
      >
        {/* gradient glows */}
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)]"/>
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.28),transparent_60%)]"/>

        {/* subtle star noise */}
        <div
          className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{ backgroundImage: STAR_BG_URL }}
        />

        {/* animated grid */}
        <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] animate-[gridMove_20s_linear_infinite]"/>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes gridMove {
          0% { background-position: 0px 0px, 0px 0px; }
          100% { background-position: 80px 80px, 80px 80px; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col md:px-0 px-4 relative z-[1]">
        {/* Section Pill */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-6 flex items-center justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-cyan-200 bg-white/10 backdrop-blur border border-white/20 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
            <span className="text-cyan-300 grid place-items-center">
              <BsStars />
            </span>
            <span>Applications</span>
          </span>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="font-dmsans text-center md:text-6xl text-4xl leading-[1.1] max-w-5xl mx-auto text-white">
            <span className="relative inline-block">
              <span className="relative z-[1]">AI-powered tools, tailored for every need</span>
              {/* animated underline */}
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
                className="absolute left-0 -bottom-2 h-[12px] w-full origin-left bg-gradient-to-r from-cyan-400/30 via-blue-400/20 to-transparent rounded-full"
              />
            </span>
          </h2>
          <p className="text-slate-300 mt-4 max-w-3xl mx-auto text-center">
            From customer support to content automation, Slanster brings together
            powerful AI applications that make your work smarter, faster, and simpler.
          </p>
        </motion.div>

        {/* ICON ORBIT DECOR */}
        <div className="relative h-10 mb-6 -mt-2 overflow-visible">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none hidden lg:block">
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 26, repeat: Infinity, ease: LINEAR }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 p-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Plug className="w-4 h-4 text-cyan-300" />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 p-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <BarChart3 className="w-4 h-4 text-indigo-300" />
              </div>
              <div className="absolute top-1/2 -left-2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Users className="w-4 h-4 text-blue-300" />
              </div>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur border border-white/20">
                <Eye className="w-4 h-4 text-fuchsia-300" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Cards */}
        <div className={`relative ${gradientMask}`}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            key={showAll ? "all" : "partial"}
            layout
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {displayedTestimonials.map((item, i) => (
                <AnimatedCard key={item.headers + i} item={item} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowAll(!showAll)}
            className="relative inline-flex items-center justify-center px-6 py-2 rounded-full text-white border border-white/20 bg-white/10 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden"
          >
            <span className="relative z-[1]">
              {showAll ? "View Less" : "Explore more application"}
            </span>
            {/* animated sheen */}
            <motion.span
              aria-hidden
              initial={{ x: -100 }}
              animate={{ x: 140 }}
              transition={{ repeat: Infinity, duration: 2.2, ease: LINEAR }}
              className="absolute top-0 left-0 h-full w-12 rotate-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

// ===== Card with tilt, glass, animated border and cursor glow =====
const AnimatedCard: React.FC<{ item: Testimonial }> = ({ item }) => {
  const { ref, rx, ry, handleMouseMove, reset } = useCardTilt();

  // cursor-follow gradient
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18 });
  const sy = useSpring(my, { stiffness: 120, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    handleMouseMove(e);
    const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const mask = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(180px 180px at ${x}px ${y}px, rgba(34,211,238,0.25), transparent 60%)`
  );

  return (
    <motion.div
      ref={ref}
      layout
      variants={cardVariants}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry }}
      className="group relative rounded-2xl p-[1px] bg-[conic-gradient(from_140deg,rgba(56,189,248,0.25),rgba(99,102,241,0.25),rgba(168,85,247,0.25),rgba(56,189,248,0.25))] will-change-transform"
    >
      {/* animated border sheen */}
      <motion.span
        aria-hidden
        className="absolute inset-0 rounded-2xl"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: LINEAR }}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(255,255,255,0.2), transparent 30%, transparent 70%, rgba(255,255,255,0.2))",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Card body */}
      <div className="relative h-full p-6 bg-white/10 text-white rounded-2xl border border-white/20 shadow-2xl backdrop-blur-md overflow-hidden">
        {/* gentle float animation (per-card) */}
        <motion.div
          aria-hidden
          className="absolute inset-0"
          animate={{ y: [0, -4, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: EASE_IN_OUT,
            delay: Math.random() * 1.5,
          }}
        />
        {/* cursor glow mask */}
        <motion.span
          aria-hidden
          className="absolute inset-0"
          style={{
            WebkitMaskImage: mask as unknown as string,
            maskImage: mask as unknown as string,
          }}
        >
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_60%)]" />
        </motion.span>

        <div className="mb-4">
          <span className="p-3 rounded-full bg-white/10 text-cyan-300 inline-flex ring-1 ring-white/20 group-hover:scale-105 transition">
            {resolveIcon(item.headers)}
          </span>
        </div>

        <h3 className="text-white text-lg font-semibold tracking-tight">
          {item.headers}
        </h3>

        <p className="text-slate-300 italic mb-4 mt-1">“{item.text}”</p>

        <div className="mt-auto">
          <p className="text-slate-400 text-sm">{item.role}</p>
        </div>

        {/* bottom accent line */}
        <motion.span
          aria-hidden
          className="absolute left-6 right-6 bottom-3 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.2 }}
        />
      </div>
    </motion.div>
  );
};

// ===== Dev-only tiny test cases (sanity) =====
if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  // Test 1: URL is correctly built
  console.assert(
    STAR_BG_URL.startsWith('url("data:image/svg+xml,'),
    "STAR_BG_URL should start with data:image/svg+xml URL"
  );
  // Test 2: No raw '<' characters leaking into style string
  console.assert(
    !STAR_BG_URL.includes("<"),
    "STAR_BG_URL must not contain raw '<' characters (should be encoded)"
  );
  // Test 3: Hooks are defined
  console.assert(typeof useState === "function", "useState should be defined");
  console.assert(typeof useMemo === "function", "useMemo should be defined");
  console.assert(typeof useRef === "function", "useRef should be defined");
  // Test 4: 9 projects present and slice logic keeps 6 when collapsed
  console.assert(testimonials.length === 9, "Expected 9 testimonials/projects");
  const __lenCollapsed = (() => testimonials.slice(0, 6).length)();
  console.assert(__lenCollapsed === 6, "Collapsed view should show 6 items");
  // Test 5: Icons are available
  const __icons = [
    CalendarCheck,
    Users,
    Eye,
    RefreshCw,
    Shield,
    ServerCog,
    BarChart3,
    Plug,
    MessageSquare,
    PhoneCall,
    FileText,
    FileCog,
    FileSearch,
    Boxes,
    Megaphone,
    Globe,
  ];
  console.assert(__icons.every(Boolean), "All icon components should be defined");
}

export default Application;
