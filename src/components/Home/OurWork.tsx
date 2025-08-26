"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type CardProps = {
  name: string;
  role: string;
  experience: string;
  description: string;
  image: StaticImageData;
};


const OurWork: React.FC = () => {
  const cards = useMemo(
    () => [
      {
        name: "Amitesh",
        role: "CTO · IT Company",
        experience: "10+ Yrs Of Experience",
        description:
          "Oversees end-to-end technology strategy, platform architecture, and product engineering. Highly skilled in AI systems, scalable microservices, and building products from 0→1.",
        gender: "male",
      },
      {
        name: "Gaurav",
        role: "Sr Manager · Big4",
        experience: "9+ Yrs Of Experience",
        description:
          "Works at a Big4 firm in business, risk, and technology consulting. Guides on control frameworks, digital transformation, and tech-enabled risk mitigation.",
        gender: "male",
      },
      {
        name: "Divyansh",
        role: "Professor · Artificial Intelligence",
        experience: "8+ Yrs Of Experience",
        description:
          "Educator at a leading university teaching AI and ML. Focuses on practical model building, MLOps fundamentals, and responsible AI practices.",
        gender: "male",
      },
      {
        name: "Sonam",
        role: "Product Manager · E-commerce",
        experience: "7+ Yrs Of Experience",
        description:
          "Drives end-to-end product development and deployment for e-commerce. Specializes in user journeys, conversion funnels, and data-driven roadmaps.",
        gender: "female",
      },
      {
        name: "Rishabh",
        role: "Risk Consultant · Big4",
        experience: "6+ Yrs Of Experience",
        description:
          "Specializes in enterprise risk management and policy consulting at a Big4 firm. Advises on governance models, audits, and regulatory alignment.",
        gender: "male",
      },
      {
        name: "Dhruv",
        role: "Cyber Specialist · Banking",
        experience: "8+ Yrs Of Experience",
        description:
          "Experienced in governance, risk, and compliance for financial institutions. Mentors on GRC tooling, SOC processes, and regulatory frameworks.",
        gender: "male",
      },
      {
        name: "Anirudh",
        role: "ESG Consultant · Big4",
        experience: "7+ Yrs Of Experience",
        description:
          "Climate change and social impact consulting expert at a Big4 firm. Guides on ESG reporting, materiality assessment, and sustainability roadmaps.",
        gender: "male",
      },
      {
        name: "Kriti",
        role: "AI Product Lead",
        experience: "9+ Yrs Of Experience",
        description:
          "Leads AI-first product strategy—LLM integrations, RAG pipelines, and experimentation. Mentors on PRDs, model evaluations, and GTM for AI features.",
        gender: "female",
      },
      {
        name: "Kabir",
        role: "Cyber Threat Analyst",
        experience: "6+ Yrs Of Experience",
        description:
          "Focuses on threat hunting, incident response, and SIEM use-cases. Coaches on playbooks, blue-team workflows, and defense-in-depth design.",
        gender: "male",
      },
      {
        name: "Meera",
        role: "Senior Product Manager",
        experience: "8+ Yrs Of Experience",
        description:
          "Owns discovery → delivery for data-driven products. Strong in metrics, stakeholder alignment, experimentation, and scalable release processes.",
        gender: "female",
      },
    ],
    []
  );

  // ----- Slider refs & state -----
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const firstCardRef = useRef<HTMLDivElement | null>(null);
  const [cardStep, setCardStep] = useState(320);
  const [progress, setProgress] = useState(0);
  const [pauseAnimUntil, setPauseAnimUntil] = useState<number>(0);
    const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (!firstCardRef.current) return;
    const el = firstCardRef.current;
    const rect = el.getBoundingClientRect();
    const style = window.getComputedStyle(el);
    const ml = parseFloat(style.marginLeft || "0");
    const mr = parseFloat(style.marginRight || "0");
    setCardStep(rect.width + ml + mr);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const onScroll = () => {
      const max = scroller.scrollWidth - scroller.clientWidth;
      const val = max > 0 ? (scroller.scrollLeft / max) * 100 : 0;
      setProgress(val);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  const pauseAnimationFor = (ms: number) => {
    setPauseAnimUntil(Date.now() + ms);
    setTimeout(() => setPauseAnimUntil((t) => (Date.now() >= t ? 0 : t)), ms);
  };

  const handleNext = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    pauseAnimationFor(2500);
    scroller.scrollBy({ left: cardStep, behavior: "smooth" });
  };

  const handlePrev = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    pauseAnimationFor(2500);
    scroller.scrollBy({ left: -cardStep, behavior: "smooth" });
  };

  const isPaused = pauseAnimUntil > Date.now();

  const Card: React.FC<CardProps> = ({
    name,
    role,
    experience,
    description,
    image,
  }) => (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden 
               w-[260px] sm:w-[280px] md:w-[300px] flex-shrink-0 mx-3 
               transition-all duration-300 flex flex-col h-[460px]"
    >
      {/* Image Frame (fixed height for all) */}
      <div className="relative h-[200px] bg-gray-200">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-900 font-semibold text-[15px]">{name}</h3>
        </div>

        <p className="text-[13px] text-gray-500 mb-2">
          {role} {experience && `| ${experience}`}
        </p>

        <p className="text-[13px] text-gray-600 leading-relaxed flex-grow">
          {description}
        </p>

        <button
          className="mt-auto w-full bg-[#0F395F] text-white text-sm py-2 
                   rounded-md font-medium hover:bg-[#0F395F] hover:scale-105 transition cursor-pointer"
          onClick={() => setOpenModal(true)}
        >
          Book Now
        </button>
      </div>
    </div>
  );


  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center px-6 md:px-10 lg:px-0 py-16 bg-white overflow-hidden ${inter.className}`}
      aria-label="Placement & Super 30"
    >
      {/* Soft ambient glows (no motion, no shake) */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-80 w-80 rounded-full bg-[#0f395f]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />

      <div className="relative max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 rounded-2xl shadow-xl bg-white/70 backdrop-blur-md border border-gray-100 p-6 sm:p-10 md:p-12 lg:p-16">
        {/* Background texture (NOTE: no /public prefix) */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/home/placement/bgshadow.png"
            alt="Background Shadow"
            fill
            sizes="100vw"
            className="object-cover opacity-60"
            priority
          />
        </div>

        {/* LEFT CONTENT (static heading) */}
        <div className="flex flex-col justify-center gap-6 md:gap-7">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0f395f] to-[#0f6fa8]">
              Your Career, Our Commitment
            </span>
          </h2>

          <p className="text-gray-700 text-base md:text-lg">
            Join our exclusive <span className="font-semibold">Super 30 Batch</span> and master:
          </p>

          <ol className="space-y-3 text-gray-700 text-base md:text-lg list-decimal list-inside">
            <li>
              <span className="font-semibold">Consulting Skills</span> — Learn problem-solving frameworks used by top Big 4 consultants
            </li>
            <li>
              <span className="font-semibold">Tech Skills</span> — Build expertise in AI, Cybersecurity & Cloud FinOps
            </li>
            <li>
              <span className="font-semibold">Business Relationship</span> — Storytelling, client communication & networking
            </li>
          </ol>

          <div className="pt-2">
            <button
              type="button"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-[#0f395f] px-6 py-3 text-white text-base md:text-lg shadow-lg shadow-[#0f395f]/20 transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-[#0f395f]/30"
            >
              <span className="relative z-10">Enroll Now</span>
              <span className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                <span className="absolute left-[-120%] top-0 h-full w-1/2 rotate-12 bg-white/15 blur-md transition-transform duration-700 group-hover:translate-x-[240%]" />
              </span>
            </button>
          </div>
        </div>

            {/* SIDE BAR — moved DOWN & now working */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous"
                  onClick={handlePrev}
                  className="h-10 w-10 rounded-full bg-[#0A3A58] flex items-center justify-center
                             text-white text-lg leading-none shadow-sm select-none active:scale-95"
                >
                  ‹
                </button>
                <button
                  type="button"
                  aria-label="Next"
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full bg-[#0A3A58] flex items-center justify-center
                             text-white text-lg leading-none shadow-sm select-none active:scale-95"
                >
                  ›
                </button>
              </div>

              {/* progress track */}
              <div className="relative flex-1 h-[2px] bg-gray-300/70 rounded">
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-white"
                  style={{ width: `${Math.max(8, progress)}%` }} // ensures small visible segment
                />
              </span>
            </div>
          ))}
        </div>
      </div>
      {openModal && (
        <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}
    </section>
  );
};

export default Placement;
