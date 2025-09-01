"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ContactModal from "../Header/ContactModal";

type TabKey = "Frameworks" | "Feature Extraction" | "Feature Analysis";

const tabContent: Record<
  TabKey,
  {
    subtitle: string;
    points: { label: string; value: string }[];
    image: string;
  }
> = {
  Frameworks: {
    subtitle:
      "Enterprise-grade AI stack for building reliable, scalable computer vision solutions.",
    points: [
      { label: "Language", value: "Python" },
      { label: "CV Libraries", value: "OpenCV" },
      { label: "Deep Learning", value: "TensorFlow, PyTorch, Keras" },
      { label: "Data Science", value: "Pandas, Scikit-learn, SciPy" },
      { label: "Visualization", value: "Matplotlib, Seaborn" },
      { label: "MLOps", value: "MLflow, Weights & Biases (optional)" },
    ],
    image: "/home/ourservices/framework.jpg",
  },
  "Feature Extraction": {
    subtitle:
      "Robust feature pipelines that make downstream detection and classification more accurate.",
    points: [
      { label: "Edge Detection", value: "Canny, Sobel" },
      { label: "Descriptors", value: "SIFT, SURF, ORB" },
      { label: "Segmentation", value: "Watershed, GrabCut" },
      { label: "Preprocessing", value: "Denoising, Thresholding, Morphology" },
      { label: "Augmentation", value: "Random crops, flips, color jitter" },
    ],
    image: "/home/ourservices/extraction.jpg",
  },
  "Feature Analysis": {
    subtitle:
      "Production-ready models with measurable performance, monitoring, and explainability.",
    points: [
      { label: "Classification", value: "CNN, SVM" },
      { label: "Object Detection", value: "YOLO, Faster R-CNN" },
      { label: "Tracking", value: "SORT, DeepSORT" },
      { label: "Metrics", value: "mAP, F1, Precision/Recall, IoU" },
      { label: "Deployment", value: "ONNX/TensorRT, REST/gRPC endpoints" },
    ],
    image: "/home/ourservices/analysis.jpg",
  },
};

const tabs: TabKey[] = ["Frameworks", "Feature Extraction", "Feature Analysis"];

const Vision = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Frameworks");
    const [openModal, setOpenModal] = useState(false);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Computer Vision{" "}
          <span className="text-[#024a71]">Tools & Capabilities</span>
        </h2>
        <p className="text-gray-600 mt-3 mb-8 max-w-3xl">
          We design, build, and productionize vision systems—from classic CV to
          deep learning—so you get accurate, real-time insights for QA,
          automation, and analytics.
        </p>

        {/* Tabs */}
        <div
          className="flex gap-3 mb-10 flex-wrap"
          role="tablist"
          aria-label="Computer Vision Tabs"
        >
          {tabs.map((tab) => {
            const selected = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${tab}`}
                id={`tab-${tab}`}
                className={`px-5 py-2 rounded-full border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#024a71] focus-visible:ring-offset-2 ${
                  selected
                    ? "bg-[#024a71] text-white border-transparent shadow-md"
                    : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Content – balanced grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.3 }}
                role="tabpanel"
                id={`panel-${activeTab}`}
                aria-labelledby={`tab-${activeTab}`}
              >
                <p className="text-gray-700 mb-5">
                  {tabContent[activeTab].subtitle}
                </p>

                <ul className="space-y-3 pl-1">
                  {tabContent[activeTab].points.map((point, i) => (
                    <li key={i} className="leading-relaxed">
                      <span className="text-[#024a71] font-semibold">
                        {point.label}
                      </span>{" "}
                      – <span className="text-gray-800">{point.value}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 bg-[#024a71] text-white px-5 py-2.5 rounded-xl shadow hover:opacity-95 transition"
                    onClick={() => setOpenModal(true)}
                  >
                    Discuss your use case
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Image (fixed aspect so it always looks clean) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeTab}-image`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35 }}
                className="rounded-xl overflow-hidden border border-gray-100 shadow-sm"
              >
                {/* Wrapper ensures consistent height across images */}
                <div className="relative w-full aspect-[4/3] lg:aspect-[5/4]">
                  <Image
                    src={tabContent[activeTab].image}
                    alt={`${activeTab} illustration`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 520px"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Value strip (optional) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Production-ready deployments",
            "Measurable model metrics",
            "Secure MLOps & CI/CD",
            "Enterprise support & SLAs",
          ].map((badge) => (
            <div
              key={badge}
              className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
      {/* modal  */}
      {openModal && (
        <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}
    </section>
  );
};

export default Vision;
