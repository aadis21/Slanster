"use client";

import React from "react";
import {
  LineChart,
  ShieldCheck,
  Users,
  FileText,
  Bot,
  Mic,
  Linkedin,
  Briefcase,
  MessageSquare,
  Share2,
  BookOpen,
  MessageSquareMore,
  GraduationCap,
  Newspaper,
  TicketPercent,
  UsersRound,
  BadgeCheck,
} from "lucide-react";

type Feature = {
  title: string;
  desc: string;
  Icon: React.ElementType;
};

const features: Feature[] = [
  {
    title: "Market Insights",
    desc: "Latest industry trends, salary benchmarks, and hiring signals—curated for you.",
    Icon: LineChart,
  },
  {
    title: "Tech Consulting Overview",
    desc: "Crash course on ITGC, IT Risk, SAM, ESG & Digital Risk—clear, practical, job-ready.",
    Icon: ShieldCheck,
  },
  {
    title: "Industry Mentor Sessions",
    desc: "30-min Big 4 group session every month—learn directly from practitioners.",
    Icon: Users,
  },
  {
    title: "CV Guidance & Prep",
    desc: "15+ pro templates, role-aligned bullets, and a consultant review checklist.",
    Icon: FileText,
  },
  {
    title: "Interview Preparation",
    desc: "2 AI mocks + 1 live consultant-led mock, intros & communication drills.",
    Icon: Mic,
  },
  {
    title: "LinkedIn Profile Review",
    desc: "Do’s & don’ts, keyword tuning, and personalized profile feedback.",
    Icon: Linkedin,
  },
  {
    title: "Job & Internship Links",
    desc: "Weekly updates on open roles and internship opportunities.",
    Icon: Briefcase,
  },
  {
    title: "Chat Support",
    desc: "Real-time guidance on career queries, decisions, and next steps.",
    Icon: MessageSquare,
  },
  {
    title: "Outreach Support",
    desc: "Messaging frameworks for networking, cold outreach, and follow-ups.",
    Icon: Share2,
  },
  {
    title: "Resources Library",
    desc: "Case studies, past interview questions, frameworks, and toolkits.",
    Icon: BookOpen,
  },
  {
    title: "GD Tips & Practice",
    desc: "Strategy, evaluation criteria, and practice topics for strong GDs.",
    Icon: MessageSquareMore,
  },
  {
    title: "1:1 Career Guidance",
    desc: "Personalized roadmap session aligned to your strengths and goals.",
    Icon: GraduationCap,
  },
  {
    title: "Weekly Digest",
    desc: "Industry news, consulting insights, and hiring trends—every week.",
    Icon: Newspaper,
  },
  {
    title: "Scholarship/Discounts",
    desc: "Early access eligibility for scholarships on advanced programs.",
    Icon: TicketPercent,
  },
  {
    title: "Slanster Community",
    desc: "Peer learning groups, alumni connects, and interview buddies.",
    Icon: UsersRound,
  },
  {
    title: "Digital Badge",
    desc: "“Slanster Registered Member” badge—shareable on LinkedIn.",
    Icon: BadgeCheck,
  },
];

const Card: React.FC<Feature> = ({ title, desc, Icon }) => (
  <div className="group rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-0.5 hover:shadow-md hover:ring-indigo-100">
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50">
      <Icon className="h-5 w-5 text-indigo-600" aria-hidden />
    </div>
    <h3 className="text-[15px] font-semibold text-slate-900">{title}</h3>
    <p className="mt-1.5 text-[13px] leading-5 text-slate-600">{desc}</p>
  </div>
);

const CheckourFeatures: React.FC = () => {
  return (
    <section className="w-full bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 md:py-18">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Unlock Benefits
          </h2>
          <p className="mt-2 text-slate-600 text-sm md:text-[15px]">
            Everything you need to get interview-ready—organized as quick, actionable cards.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((f, i) => (
            <Card key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheckourFeatures;
