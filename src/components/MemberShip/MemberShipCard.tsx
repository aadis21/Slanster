"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";
import ContactModal from "../Header/ContactModal";

import Amitesh from "../../../public/home/Avtars/amitesh.jpg";
import Gaurav from "../../../public/home/Avtars/gaurav.jpg";
import Divyansh from "../../../public/home/Avtars/divyansh.jpg";
import Sonam from "../../../public/home/Avtars/sonam.jpg";
import Rishabh from "../../../public/home/Avtars/rishabh.jpg";
import Dhruv from "../../../public/home/Avtars/dhruv.jpg";
import Anirudh from "../../../public/home/Avtars/anirudh.jpg";
import Kirti from "../../../public/home/Avtars/kirti.jpg";
import Kabir from "../../../public/home/Avtars/kabir.jpg";
import Meera from "../../../public/home/Avtars/meera.jpg";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const MemberShip: React.FC<{ searchQuery?: string }> = ({
  searchQuery = "",
}) => {
  const cards = useMemo(
    () => [
      {
        id: 1,
        name: "Amitesh",
        role: "CTO · IT Company",
        experience: "10+ Yrs Of Experience",
        description:
          "Oversees end-to-end technology strategy, platform architecture, and product engineering. Highly skilled in AI systems, scalable microservices, and building products from 0→1.",
        gender: "male",
        image: Amitesh,
      },
      {
        id: 2,
        name: "Gaurav",
        role: "Sr Manager · Big4",
        experience: "9+ Yrs Of Experience",
        description:
          "Works at a Big4 firm in business, risk, and technology consulting. Guides on control frameworks, digital transformation, and tech-enabled risk mitigation.",
        gender: "male",
        image: Gaurav,
      },
      {
        id: 3,
        name: "Divyansh",
        role: "Professor · Artificial Intelligence",
        experience: "8+ Yrs Of Experience",
        description:
          "Educator at a leading university teaching AI and ML. Focuses on practical model building, MLOps fundamentals, and responsible AI practices.",
        gender: "male",
        image: Divyansh,
      },
      {
        id: 4,
        name: "Sonam",
        role: "Product Manager · E-commerce",
        experience: "7+ Yrs Of Experience",
        description:
          "Drives end-to-end product development and deployment for e-commerce. Specializes in user journeys, conversion funnels, and data-driven roadmaps.",
        gender: "female",
        image: Sonam,
      },
      {
        id: 5,
        name: "Rishabh",
        role: "Risk Consultant · Big4",
        experience: "6+ Yrs Of Experience",
        description:
          "Specializes in enterprise risk management and policy consulting at a Big4 firm. Advises on governance models, audits, and regulatory alignment.",
        gender: "male",
        image: Rishabh,
      },
      {
        id: 6,
        name: "Dhruv",
        role: "Cyber Specialist · Banking",
        experience: "8+ Yrs Of Experience",
        description:
          "Experienced in governance, risk, and compliance for financial institutions. Mentors on GRC tooling, SOC processes, and regulatory frameworks.",
        gender: "male",
        image: Dhruv,
      },
      {
        id: 7,
        name: "Anirudh",
        role: "ESG Consultant · Big4",
        experience: "7+ Yrs Of Experience",
        description:
          "Climate change and social impact consulting expert at a Big4 firm. Guides on ESG reporting, materiality assessment, and sustainability roadmaps.",
        gender: "male",
        image: Anirudh,
      },
      {
        id: 8,
        name: "Kriti",
        role: "AI Product Lead",
        experience: "9+ Yrs Of Experience",
        description:
          "Leads AI-first product strategy—LLM integrations, RAG pipelines, and experimentation. Mentors on PRDs, model evaluations, and GTM for AI features.",
        gender: "female",
        image: Kirti,
      },
      {
        id: 9,
        name: "Kabir",
        role: "Cyber Threat Analyst",
        experience: "6+ Yrs Of Experience",
        description:
          "Focuses on threat hunting, incident response, and SIEM use-cases. Coaches on playbooks, blue-team workflows, and defense-in-depth design.",
        gender: "male",
        image: Kabir,
      },
      {
        id: 10,
        name: "Meera",
        role: "Senior Product Manager",
        experience: "8+ Yrs Of Experience",
        description:
          "Owns discovery → delivery for data-driven products. Strong in metrics, stakeholder alignment, experimentation, and scalable release processes.",
        gender: "female",
        image: Meera,
      },
    ],
    []
  );

  const query = searchQuery.toLowerCase().trim();
  const [openModal, setOpenModal] = useState(false);

  const filteredExperts = cards.filter(
    (expert) =>
      expert.name.toLowerCase().includes(query) ||
      expert.role.toLowerCase().includes(query) ||
      expert.experience.toLowerCase().includes(query) ||
      expert.description.toLowerCase().includes(query)
  );

  return (
    <div className={`${inter.className} bg-gray-50 py-12 sm:px-6`}>
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-12 text-gray-900">
        Meet Our Experts
      </h2>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <AnimatePresence mode="wait">
          {filteredExperts.length > 0 ? (
            filteredExperts.map((expert) => (
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col overflow-hidden hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="w-full h-52 flex items-center justify-center bg-gray-100">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    width={200}   // 👈 set according to actual image size
                    height={200}
                    className="rounded-lg object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 p-5 flex flex-col text-left">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {expert.role} | {expert.experience}
                  </p>
                  <p className="text-sm text-gray-500 mt-3">
                    {expert.description}
                  </p>

                  {/* Button */}
                  <div className="mt-auto pt-4">
                    <button
                      className="w-full cursor-pointer hover:scale-105 bg-[#084c74] hover:bg-[#073654] text-white text-sm py-2.5 rounded-lg shadow transition-all"
                      onClick={() => setOpenModal(true)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              key="no-result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="col-span-full flex justify-center"
            >
              <p className="text-gray-600 text-lg">No experts found.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Modal */}
      {openModal && (
        <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}
    </div>
  );
};

export default MemberShip;
