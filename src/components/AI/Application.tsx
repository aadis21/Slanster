"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  MessageSquare, Globe, PhoneCall, FileText, FileCog,
  FileSearch, Boxes, Megaphone, Plug, Users
} from "lucide-react";

interface Project { headers: string; text: string; role: string; }
const projects: Project[] = [
  { headers: "AI-Powered Chat Support Bots", text: "Handle FAQs, resolve issues, and escalate to human agents when needed—all with NLP and sentiment-aware conversations.", role: "E-commerce, Healthcare, Banking" },
  { headers: "AI Web Crawling & Competitive Intelligence", text: "Stay ahead with real-time competitor insights. Scrapes pricing, services, and product data to generate actionable reports.", role: "Market Research, Consulting Firms" },
  { headers: "Voice AI – Calling Bots", text: "Automate outbound/inbound calls for reminders, collections, surveys, and lead generation with natural, human-like voice.", role: "Telecom, Insurance, BPO" },
  { headers: "Smart Resume Analyzer & Interview Bot", text: "Screen resumes, shortlist candidates, and conduct first-round AI-driven interviews via chat or voice.", role: "HR Tech, Staffing Agencies" },
  { headers: "AI Proposal Generator from RFPs", text: "Upload an RFP → get a polished, tailored proposal in minutes. Extracts requirements, drafts responses, and formats professionally.", role: "IT Consulting, Audit, Government Tenders" },
  { headers: "AI Document Summarizer & Insight Extractor", text: "Upload contracts, reports, or compliance docs → get instant summaries with risks, obligations, and next steps.", role: "Legal, Compliance, Procurement" },
  { headers: "AI-Based Inventory & Sales Recommender", text: "Predict demand, optimize stock, and suggest sales strategies based on real-time inventory and customer behavior.", role: "Retail, Pharma Stores" },
  { headers: "AI Social Media Integrator & Content Engine", text: "Generate, schedule, and post content automatically across platforms with hashtags, SEO, and engagement analytics.", role: "Personal Branding, SMBs, Influencer Marketing, EdTech" },
  { headers: "Seamless Integration", text: "Integrates with our existing tools effortlessly, saving time and resources.", role: "All Industries" },
];

function resolveIcon(t: string) {
  const s = t.toLowerCase();
  if (s.includes("chat")) return <MessageSquare className="w-5 h-5" />;
  if (s.includes("crawling")) return <Globe className="w-5 h-5" />;
  if (s.includes("voice")) return <PhoneCall className="w-5 h-5" />;
  if (s.includes("resume") || s.includes("interview")) return <FileText className="w-5 h-5" />;
  if (s.includes("proposal")) return <FileCog className="w-5 h-5" />;
  if (s.includes("document")) return <FileSearch className="w-5 h-5" />;
  if (s.includes("inventory")) return <Boxes className="w-5 h-5" />;
  if (s.includes("social")) return <Megaphone className="w-5 h-5" />;
  if (s.includes("integration")) return <Plug className="w-5 h-5" />;
  return <Users className="w-5 h-5" />;
}

const Application: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <section className="relative w-full py-16 bg-[#0b1020] text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14">
          AI Solutions We’ve Delivered
        </h2>

        <div className="relative">
          {/* Mobile line: left, behind content */}
          <motion.div
            style={{ scaleY: progress }}
            className="absolute md:hidden left-6 top-0 bottom-0 w-[3px] origin-top rounded-full bg-[linear-gradient(to_bottom,#22d3ee,#38bdf8,#6366f1)] z-0"
          />
          {/* Desktop line: center */}
          <motion.div
            style={{ scaleY: progress }}
            className="absolute hidden md:block left-1/2 top-0 bottom-0 w-[4px] origin-top rounded-full bg-[linear-gradient(to_bottom,#22d3ee,#38bdf8,#6366f1)] z-0"
          />

          <div className="flex flex-col gap-12 sm:gap-14 md:gap-16">
            {projects.map((p, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="relative flex md:items-start pl-12 md:pl-0 z-[1]">
                  {isLeft ? (
                    <>
                      <div className="w-full md:w-1/2 md:pr-10">
                        <Block title={p.headers} text={p.text} role={p.role} />
                      </div>
                      <Dot />
                      <div className="hidden md:block w-1/2" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block w-1/2" />
                      <Dot />
                      <div className="w-full md:w-1/2 md:pl-10">
                        <Block title={p.headers} text={p.text} role={p.role} />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Dot = () => (
  <>
    {/* Mobile dot aligned to left-6 */}
    <motion.span
      className="absolute md:hidden left-6 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-500 shadow-[0_0_10px_rgba(34,211,238,0.7)] flex items-center justify-center top-2 z-[1]"
      whileInView={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <span className="w-2 h-2 rounded-full bg-white" />
    </motion.span>
    {/* Desktop dot on center line */}
    <motion.span
      className="absolute hidden md:flex left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-400 to-sky-500 shadow-[0_0_14px_rgba(34,211,238,0.8)] items-center justify-center top-2 z-[1]"
      whileInView={{ scale: 1.08 }}
      transition={{ duration: 0.35 }}
    >
      <span className="w-3 h-3 rounded-full bg-white" />
    </motion.span>
  </>
);

const Block: React.FC<{ title: string; text: string; role: string }> = ({ title, text, role }) => (
  <div className="text-left">
    <div className="flex items-center gap-2 text-cyan-300 mb-1">
      {resolveIcon(title)}
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-[15px] sm:text-base text-slate-300/95 leading-7 tracking-[0.005em]">
      {text}
    </p>
    <div className="mt-3 flex flex-wrap gap-2">
      {role.split(",").map((c, idx) => (
        <span key={idx} className="px-2.5 py-1 text-xs rounded-full border border-white/15 bg-white/5 text-slate-200">
          {c.trim()}
        </span>
      ))}
    </div>
  </div>
);

export default Application;
