"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  MessageSquare, Globe, PhoneCall, FileText, FileCog,
  FileSearch, Boxes, Megaphone, Plug, Users
} from "lucide-react";

/* ---- Data (unchanged) ---- */
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

/* ---- Icon resolver (unchanged) ---- */
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

/* ---- Animations ---- */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { y: 14, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/* ---- Section ---- */
export default function Application() {
  return (
    <section className="relative w-full bg-[#0b1020] text-white py-12 sm:py-20 overflow-hidden">
      <ParticleBG />

      <div className="relative z-[1] max-w-8xl md:px-25 mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-inter md:text-5xl text-3xl leading-[1.2]">
            AI Solutions We’ve Delivered
          </h2>
          <p className="font-inter leading-[1.2] mt-3 text-slate-300/90 text-sm sm:text-base">
            From Vision to Value with AI
          </p>
        </div>

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
              <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] p-2 shadow-[0_0_24px_rgba(56,189,248,0.12)]">
                <span className="text-cyan-300">{resolveIcon(p.headers)}</span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold tracking-tight">
                {p.headers}
              </h3>

              <p className="mt-2 text-sm sm:text-[15px] leading-6 text-slate-300/95">
                {p.text}
              </p>

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

              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.05,
                }}
                className="absolute left-4 right-4 -bottom-px h-px origin-left bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ====== Constellation Particle Background (responsive) ====== */
function ParticleBG() {
  const ref = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    let w = 0, h = 0;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1)); // prefer-const fixed
    let raf = 0;

    type P = { x: number; y: number; vx: number; vy: number; r: number };
    let particles: P[] = [];

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(120, Math.max(40, Math.floor((w * h) / 12000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // dots
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < -10 || p.x > w + 10) p.vx *= -1;
        if (p.y < -10 || p.y > h + 10) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(165,243,252,0.65)"; // cyan-200
        ctx.fill();
      }

      // lines
      const maxDist = Math.min(180, Math.max(90, Math.sqrt(w * h) * 0.06));
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            ctx.strokeStyle = `rgba(56,189,248,${(1 - d / maxDist) * 0.35})`; // cyan-400
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const onResize = () => setup();
    setup();
    draw();
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none
                 [mask-image:radial-gradient(circle_at_center,black_70%,transparent_100%)]"
      aria-hidden
    />
  );
}
