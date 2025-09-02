"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

/* ------------- Theme (Slanster-ish) -------------
   bg: slate-900, cards: slate-800, border: slate-700
   text: slate-100/300, accent: rose-500/600
-------------------------------------------------- */

type Plan = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  badge?: string;
  features: string[];
  cta?: string;
};

const plans: Plan[] = [
  {
    id: "basic",
    title: "Basic Module",
    subtitle: "Foundations • Self-paced + light mentor",
    price: "₹1,000",
    features: [
      "Consulting Overview: 30-min lecture on consulting basics",
      "Big-4 Mentor Session: 1 group session",
      "CV & Career Tools: CV templates + tips",
      "Interview Prep: 2 mock interviews + feedback",
      "Job & Internship Links: Monthly job updates",
      "Training Sessions: —",
      "Coding/Tech Training: Online coding course (2 weeks, 20 hrs)",
      "Capstone Project: One live project + group presentation",
      "Placement & Career Support: Guidance only",
      "Networking Access: Community group",
    ],
    cta: "Buy Now",
  },
  {
    id: "adv1",
    title: "Advanced Level-1",
    subtitle: "Hybrid • Most Popular",
    price: "₹39,000",
    badge: "Recommended",
    features: [
      "Consulting Overview: Included",
      "Big-4 Mentor Session: 1-on-1 mentorship (multiple touchpoints)",
      "CV & Career Tools: Personalized CV + LinkedIn profile setup",
      "Interview Prep: 5 mock interviews (HR + technical) + assignments",
      "Job & Internship Links: Dedicated job portal access + internship referrals",
      "Training Sessions: Booster Course – Tech Consulting (12 sessions)",
      "Coding/Tech Training: Problem-solving drills & analytics practice",
      "Capstone Project: Guided industry project + mentor review",
      "Placement & Career Support: Placement assurance support + resume shortlisting eligibility",
      "Networking Access: Extended access + alumni network",
    ],
    cta: "Buy Now",
  },
  {
    id: "adv2",
    title: "Advanced Level-2 (Premium)",
    subtitle: "Hybrid • Full Stack Prep",
    price: "₹49,000",
    features: [
      "Consulting Overview: Included",
      "Big-4 Mentor Session: 1-on-1 mentorship (ongoing, goal-based)",
      "CV & Career Tools: Advanced CV audit + LinkedIn + cover letters",
      "Interview Prep: 10 full mocks (Tech/HR/Case) incl. Big-4 style + assignments",
      "Job & Internship Links: Placement assurance interviews + alumni references",
      "Training Sessions: Extended booster sessions with real client case studies",
      "Coding/Tech Training: Advanced analytics/problem solving + AI/ML exposure",
      "Capstone Project: Consultant-level project with presentation & mentor review",
      "Placement & Career Support: Premium 1:1 placement support",
      "Networking Access: Alumni mentors + industry mixers + hiring connects",
    ],
    cta: "Buy Now",
  },
];

const tabs = [
  { id: "consulting", label: "Consulting Training", active: true },
  { id: "tech", label: "Tech Training (soon)" },
  { id: "career", label: "Career Services (soon)" },
  { id: "mentorship", label: "1:1 Mentorship (soon)" },
];

const Pill = ({
  children,
  active,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => (
  <button
    type="button"
    className={[
      "rounded-full px-3 py-1.5 text-[13px] transition",
      active
        ? "bg-rose-600 text-white shadow"
        : "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700",
    ].join(" ")}
  >
    {children}
  </button>
);

const Card = ({ plan }: { plan: Plan }) => (
  <div
    className="snap-center shrink-0 w-[92%] xs:w-[86%] sm:w-[74%] md:w-[46%] lg:w-[32%] xl:w-[30%]
               bg-slate-800/95 border border-slate-700/80 rounded-2xl p-5 md:p-6 mx-2 md:mx-3
               ring-1 ring-transparent hover:ring-rose-500/30 transition
               shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)]"
  >
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-slate-100">
          {plan.title}
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-0.5">{plan.subtitle}</p>
      </div>
      {plan.badge && (
        <span className="rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 px-3 py-1 text-[11px]">
          {plan.badge}
        </span>
      )}
    </div>

    <div className="mt-4 md:mt-5">
      <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
        {plan.price}
      </div>
      <p className="text-[11px] md:text-xs text-slate-400">Price unchanged</p>
    </div>

    <ul className="mt-5 md:mt-6 space-y-3">
      {plan.features.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-[13px] md:text-[14px]">
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-600/20 border border-rose-600/40">
            <Check className="h-3.5 w-3.5 text-rose-300" />
          </span>
          <span className="text-slate-200">{item}</span>
        </li>
      ))}
    </ul>

    <button
      type="button"
      className="mt-6 w-full rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 transition
                 text-white text-sm font-semibold py-3 shadow-[0_14px_22px_-12px_rgba(244,63,94,0.9)]"
    >
      {plan.cta ?? "Select"}
    </button>
  </div>
);

const PricingPlans: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (delta: number) => {
    if (!scrollerRef.current) return;
    scrollerRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="min-h-screen w-full bg-slate-900 text-slate-100">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
        <div className="text-center">
          <p className="text-[11px] md:text-xs uppercase tracking-widest text-slate-400">
            Our Pricing
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Build your package by picking the <span className="text-rose-400">best plans</span>
          </h2>
        </div>

        {/* Tabs/Pills */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {tabs.map((t) => (
            <Pill key={t.id} active={t.active}>
              {t.label}
            </Pill>
          ))}
        </div>
      </div>

      {/* Cards scroller */}
      <div className="relative mt-8 md:mt-10">
        {/* Arrows (desktop) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
          <div className="pointer-events-auto pl-2 sm:pl-4">
            <button
              aria-label="Scroll left"
              onClick={() => scrollBy(-420)}
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full
                         bg-slate-800/70 border border-slate-700 hover:bg-slate-700 transition"
            >
              <ChevronLeft className="h-5 w-5 text-slate-200" />
            </button>
          </div>
          <div className="pointer-events-auto pr-2 sm:pr-4">
            <button
              aria-label="Scroll right"
              onClick={() => scrollBy(420)}
              className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full
                         bg-slate-800/70 border border-slate-700 hover:bg-slate-700 transition"
            >
              <ChevronRight className="h-5 w-5 text-slate-200" />
            </button>
          </div>
        </div>

        <div ref={scrollerRef} className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 pb-12">
          <div
            className="flex overflow-x-auto snap-x snap-mandatory scroll-px-4 gap-3 md:gap-4
                       [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full
                       [&::-webkit-scrollbar-thumb]:bg-slate-700/70
                       [&::-webkit-scrollbar-track]:bg-slate-800/40"
            role="list"
            aria-label="Plans"
          >
            {plans.map((plan) => (
              <Card key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </div>

      {/* Footnote */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
        <p className="text-center text-[11px] md:text-xs text-slate-400">
          * Inclusions mapped exactly to your latest “Slanster Consulting Training Modules” table.
          Visuals follow your reference design. Pricing unchanged.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
