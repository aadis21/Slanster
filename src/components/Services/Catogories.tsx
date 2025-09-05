"use client";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ✅ Your actual services
type ServiceKey =
  | "Artificial Intelligence"
  | "Bespoke IT"
  | "Cybersecurity"
  | "Staffing"
  | "Consulting"
  | "AR/VR";

interface ServiceItem {
  title: string;
  description: string;
}

const servicesData: Record<ServiceKey, { items: ServiceItem[]; image: string }> = {
  "Artificial Intelligence": {
    items: [
      {
        title: "AI Automation & Agents",
        description:
          "Deploy AI copilots and workflow agents that reduce manual effort, accelerate SLAs, and scale operations across teams.",
      },
      {
        title: "Predictive Analytics",
        description:
          "Turn data into foresight with ML models for forecasting, churn/risk scoring, demand planning, and decision support.",
      },
      {
        title: "NLP & Computer Vision",
        description:
          "Build domain-tuned NLP, OCR, and vision systems for documents, chat, voice, and video to unlock new efficiencies.",
      },
    ],
    image: "/home/ourservices/ai.jpg",
  },
  "Bespoke IT": {
    items: [
      {
        title: "Custom Product Engineering",
        description:
          "Design and develop secure, scalable apps—web, mobile, and microservices—aligned to your business workflows.",
      },
      {
        title: "Cloud & Integrations",
        description:
          "Architect cloud-native solutions and integrate ERPs, CRMs, and 3rd-party APIs for seamless, reliable data flows.",
      },
      {
        title: "Modernization & DevOps",
        description:
          "Migrate legacy stacks, automate CI/CD, and adopt IaC to ship faster with lower risk and better observability.",
      },
    ],
    image: "/home/ourservices/Bespoke.jpg",
  },
  Cybersecurity: {
    items: [
      {
        title: "Security Posture & Hardening",
        description:
          "Harden infra, enforce Zero Trust, and baseline configurations to reduce attack surface across cloud and on-prem.",
      },
      {
        title: "Threat Detection & Response",
        description:
          "24×7 monitoring, SIEM/SOAR playbooks, incident response, and compromise assessments to contain threats early.",
      },
      {
        title: "Governance, Risk & Compliance",
        description:
          "Align with ISO 27001, SOC 2, GDPR and industry mandates—policies, audits, remediation, and stakeholder reporting.",
      },
    ],
    image: "/home/ourservices/Cyber security.jpg", // Tip: avoid spaces in file names if possible
  },
  Staffing: {
    items: [
      {
        title: "Tech Talent on Demand",
        description:
          "Curated developers, data engineers, cloud/security experts—deployed as contract, contract-to-hire, or full-time.",
      },
      {
        title: "Project & POD Models",
        description:
          "Spin up multi-skill agile PODs for fixed-scope delivery or ongoing product engineering and support.",
      },
      {
        title: "Screening & Readiness",
        description:
          "Role-aligned assessments, code tests, and cultural fit checks ensure faster ramp-up and lower attrition.",
      },
    ],
    image: "/home/ourservices/Staffing.jpg",
  },
  Consulting: {
    items: [
      {
        title: "Digital Transformation",
        description:
          "Roadmaps and operating models to align tech investments with measurable business outcomes and ROI.",
      },
      {
        title: "Process & Cost Optimization",
        description:
          "Map value streams, eliminate bottlenecks, and automate repeatable work to cut costs and improve throughput.",
      },
      {
        title: "Data & Platform Strategy",
        description:
          "Define data architectures, platform choices, SLAs, and governance for long-term scalability and resilience.",
      },
    ],
    image: "/home/ourservices/consulting.jpg",
  },
  "AR/VR": {
    items: [
      {
        title: "Immersive Training & Onboarding",
        description:
          "AR/VR simulations for SOPs, safety, and complex procedures—learning that’s experiential and retention-friendly.",
      },
      {
        title: "Product Visualization",
        description:
          "Interactive 3D demos, virtual showrooms, and configurators that boost buyer confidence and sales velocity.",
      },
      {
        title: "Field Assistance & Remote Ops",
        description:
          "AR overlays and guided workflows for maintenance, inspections, and support—hands-free and real-time.",
      },
    ],
    image: "/home/ourservices/ARVR.jpg",
  },
};

const Catogories = () => {
  // const [activeTab, setActiveTab] = useState<ServiceKey>("Artificial Intelligence");
  const searchParams = useSearchParams();
  const defaultTab = decodeURIComponent(
    searchParams.get("tab") || "Consulting"

  ); 
  const [activeTab, setActiveTab] = useState<ServiceKey>(defaultTab as ServiceKey);

   useEffect(() => {
     if (defaultTab) {
       setActiveTab(defaultTab as ServiceKey);
     }
   }, [defaultTab]);


  return (
    <section id="categories" className="bg-white scroll-mt-20">
      <div
        className={`${inter.className} mx-auto  max-w-8xl md:px-25 px-4 py-10 sm:py-14`}
      >
        {/* Tabs (scrollable on mobile) */}
        <div className="relative mb-8 sm:mb-10">
          <div className="flex ml-2 gap-2 sm:gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 -mx-4 px-4  sm:mx-0 sm:px-0">
            {(Object.keys(servicesData) as ServiceKey[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`snap-start whitespace-nowrap px-4 sm:px-6 py-2 rounded-full border transition-all duration-300
                ${
                  activeTab === tab
                    ? "bg-[#024a71] text-white border-[#024a71]"
                    : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100"
                }`}
                aria-pressed={activeTab === tab}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left: Three Tiles */}
          <div className="flex flex-col gap-4 sm:gap-5">
            {servicesData[activeTab]?.items?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="group rounded-xl border border-slate-200 hover:border-slate-300 bg-white p-5 sm:p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm sm:text-[15px] leading-6 text-slate-700">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Responsive Image with Animation */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.45 }}
                className="relative w-full rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Aspect ratios ensure perfect alignment across breakpoints */}
                <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[3/2]">
                  <Image
                    src={servicesData[activeTab]?.image}
                    alt={activeTab}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 640px"
                    priority={false}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catogories;
