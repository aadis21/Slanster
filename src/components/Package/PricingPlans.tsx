"use client";

import React, { useMemo, useState } from "react";
import { Check, Sparkles, Wrench, Briefcase, User, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

/* Slanster dark theme + rose accent */
const PAGE_BG = "bg-slate-900";
const CARD_BG = "bg-slate-800/95";
const BORDER = "border-slate-700/80";

type Plan = {
  id: string;
  title: string;
  subtitle: string;
  price: string; // keep as provided
  badge?: string;
  features: string[];
  cta?: string;
};

const consultingPlans: Plan[] = [
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
      "Capstone: One live project + group presentation",
      "Placement Support: Guidance only",
      "Networking: Community group",
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
      "Big-4 Mentor: 1-on-1 mentorship (multi touchpoints)",
      "CV & Career Tools: Personalized CV + LinkedIn",
      "Interview Prep: 5 mocks (HR+Tech) + assignments",
      "Job/Internships: Dedicated portal + referrals",
      "Training Sessions: Booster Tech Consulting (12)",
      "Coding/Tech: Problem-solving & analytics drills",
      "Capstone: Guided industry project + mentor review",
      "Placement: Assurance support + shortlisting eligibility",
      "Networking: Extended access + alumni network",
    ],
    cta: "Buy Now",
  },
  {
    id: "adv2",
    title: "Advanced Level-2 (Premium)",
    subtitle: "Hybrid • End-to-end prep",
    price: "₹49,000",
    features: [
      "Consulting Overview: Included",
      "Big-4 Mentor: 1-on-1 ongoing (goal-based)",
      "CV/LinkedIn: Advanced audit + cover letters",
      "Interview Prep: 10 full mocks incl. Big-4 style",
      "Job/Internships: Assurance interviews + references",
      "Training: Extended booster + real client case studies",
      "Tech: Advanced analytics + AI/ML exposure",
      "Capstone: Consultant-level project + presentation",
      "Placement: Premium 1:1 support",
      "Network: Alumni mentors + industry mixers",
    ],
    cta: "Buy Now",
  },
];

const tabs = [
  { id: "consulting", label: "Consulting Training", icon: Sparkles },
  { id: "tech", label: "Tech Training", icon: Wrench },
  { id: "career", label: "Career Services", icon: Briefcase },
  { id: "mentorship", label: "1:1 Mentorship", icon: User },
] as const;
type TabId = (typeof tabs)[number]["id"];

const Pill: React.FC<{
  active?: boolean;
  onClick?: () => void;
  icon?: React.ElementType;
  children: React.ReactNode;
}> = ({ active, onClick, icon: Icon, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={[
      "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm transition",
      active
        ? "bg-rose-600 text-white shadow"
        : "bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700",
    ].join(" ")}
  >
    {Icon ? <Icon className="h-4 w-4" /> : null}
    {children}
  </button>
);

const PlanCard: React.FC<{ plan: Plan; onBuy: (p: Plan) => void }> = ({
  plan,
  onBuy,
}) => (
  <div
    className={[
      "flex h-full min-h-[520px] flex-col rounded-2xl p-5 md:p-6",
      CARD_BG,
      "border",
      BORDER,
      "shadow-[0_10px_28px_-12px_rgba(0,0,0,0.55)]",
    ].join(" ")}
  >
    {/* Header */}
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {plan.title}
        </h3>
        <p className="text-xs md:text-sm text-slate-400 mt-0.5">
          {plan.subtitle}
        </p>
      </div>
      {plan.badge && (
        <span className="rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 px-3 py-1 text-[11px]">
          {plan.badge}
        </span>
      )}
    </div>

    {/* Price */}
    <div className="mt-4 md:mt-5">
      <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
        {plan.price}
      </div>
      <p className="text-[11px] md:text-xs text-slate-400">Pricing unchanged</p>
    </div>

    {/* Features */}
    <ul className="mt-5 md:mt-6 space-y-3">
      {plan.features.map((f, i) => (
        <li
          key={i}
          className="flex items-start gap-3 text-[13px] md:text-[14px]"
        >
          <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-rose-600/20 border border-rose-600/40">
            <Check className="h-3.5 w-3.5 text-rose-300" aria-hidden />
          </span>
          <span className="text-slate-200">{f}</span>
        </li>
      ))}
    </ul>

    <button
      type="button"
      onClick={() => onBuy(plan)}
      className="mt-auto w-full rounded-xl bg-rose-600 hover:bg-rose-500 active:bg-rose-700 transition
                 text-white text-sm font-semibold py-3 shadow-[0_14px_22px_-12px_rgba(244,63,94,0.9)]"
    >
      {plan.cta ?? "Select"}
    </button>
  </div>
);

const ComingSoonCard: React.FC<{ title: string; desc: string }> = ({
  title,
  desc,
}) => (
  <div
    className={[
      "flex min-h-[220px] flex-col items-start justify-between rounded-2xl p-6",
      CARD_BG,
      "border",
      BORDER,
    ].join(" ")}
  >
    <div>
      <p className="inline-flex items-center gap-2 text-xs text-rose-300">
        <Clock className="h-4 w-4" /> Coming Soon
      </p>
      <h4 className="mt-2 text-lg font-semibold text-white">{title}</h4>
      <p className="mt-1 text-sm text-slate-300">{desc}</p>
    </div>
    <button
      disabled
      className="mt-4 rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-2 text-sm text-slate-400"
    >
      Notify me
    </button>
  </div>
);

/* ---------------- Main Section ---------------- */

const PricingPlans: React.FC = () => {
  const [active, setActive] = useState<TabId>("consulting");
  const router = useRouter();

  const handleBuy = (plan: Plan) => {
    // Redirect to dashboard with the card ID as a query parameter
    router.push(`/slansterdashboard?plan=${plan.id}`);
  };

  const content = useMemo(() => {
    if (active === "consulting") {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {consultingPlans.map((p) => (
            <PlanCard key={p.id} plan={p} onBuy={handleBuy} />
          ))}
        </div>
      );
    }
    const soon = [
      {
        title:
          active === "tech"
            ? "Tech Training Tracks"
            : active === "career"
            ? "Career Services Suite"
            : "1:1 Mentorship Plans",
        desc:
          active === "tech"
            ? "Hands-on modules on DS/DA, Cloud, DevOps, and GenAI."
            : active === "career"
            ? "Profile audits, ATS CVs, mock interviews, and offer-negotiation."
            : "Goal-based mentoring with senior consultants and domain experts.",
      },
      {
        title: "Cohort Start Dates",
        desc: "Batches open every month; early-bird scholarships available.",
      },
      {
        title: "Curriculum Preview",
        desc: "Syllabus outline, projects, and expected outcomes.",
      },
    ];
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {soon.map((s, i) => (
          <ComingSoonCard key={i} title={s.title} desc={s.desc} />
        ))}
      </div>
    );
  }, [active]);

  return (
    <section className={`min-h-screen w-full ${PAGE_BG} text-slate-100`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-14">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[11px] md:text-xs uppercase tracking-widest text-slate-400">
            Our Pricing
          </p>
          <h2 className="mt-2 font-extrabold tracking-tight text-3xl sm:text-4xl">
            <span className="text-white">
              Build your package by picking the{" "}
            </span>
            <span className="text-rose-400">best plans</span>
          </h2>

          {/* Tabs */}
          <p className="mt-3 text-[13px] md:text-sm text-slate-300">
            Select a track below. Consulting plans are live; other tracks will
            open soon.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {tabs.map((t) => (
              <Pill
                key={t.id}
                active={active === t.id}
                onClick={() => setActive(t.id)}
                icon={t.icon}
              >
                {t.label}
              </Pill>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="mt-8 md:mt-10 pb-14">{content}</div>

        {/* Fine print */}
        <p className="text-center text-[11px] md:text-xs text-slate-400 pb-8">
          * Inclusions mirror your Slanster Consulting Training Modules.
          Visuals aligned to your dark theme. Pricing remains exactly the same.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
