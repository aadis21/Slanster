"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
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

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const item: Variants = {
  hidden: { y: 14, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

export default function Application() {
  return (
    <section className="w-full bg-[#0b1020] text-white py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Heading like reference, but keeping your colors */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            AI Solutions We’ve Delivered
          </h2>
          <p className="mt-3 text-slate-300/90 text-sm sm:text-base">
            Everything you need. Nothing you don’t.
          </p>
        </div>

        {/* Feature grid (reference-style): 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -3 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-5 sm:p-6"
            >
              {/* Icon box (kept your palette; subtle glow for smooth feel) */}
              <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] p-2 shadow-[0_0_24px_rgba(56,189,248,0.12)]">
                <span className="text-cyan-300">{resolveIcon(p.headers)}</span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                {p.headers}
              </h3>

              <p className="mt-2 text-sm sm:text-[15px] leading-6 text-slate-300/95">
                {p.text}
              </p>

              {/* roles as tiny pills (content same, optional like the ref’s captions) */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.role.split(",").map((c, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-[10px] rounded-full border border-white/12 bg-white/5 text-slate-200/95"
                  >
                    {c.trim()}
                  </span>
                ))}
              </div>

              {/* subtle bottom divider shimmer (animation but very soft) */}
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className="absolute left-4 right-4 -bottom-px h-px origin-left bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
