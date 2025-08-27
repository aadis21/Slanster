// "use client";
// import React, { useCallback, useRef } from "react";
// import Image from "next/image";
// import { Inter } from "next/font/google";
// import { GraduationCap, LineChart, Users } from "lucide-react";
// import {
//   motion,
//   useMotionValue,
//   useTransform,
//   AnimatePresence,
//   useInView,
//   type Variants,
// } from "framer-motion";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800"],
// });

// const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// const LandingPage: React.FC = () => {
//   const sectionRef = useRef<HTMLDivElement | null>(null);
//   const inView = useInView(sectionRef, { amount: 0.5 });

//   const mx = useMotionValue(0);
//   const my = useMotionValue(0);

//   const rotateX = useTransform(my, [-50, 50], [8, -8]);
//   const rotateY = useTransform(mx, [-50, 50], [-8, 8]);

//   const handleMouseMove = useCallback(
//     (e: React.MouseEvent<HTMLDivElement>) => {
//       const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
//       const x = e.clientX - (rect.left + rect.width / 2);
//       const y = e.clientY - (rect.top + rect.height / 2);
//       mx.set(Math.max(-50, Math.min(50, x / 8)));
//       my.set(Math.max(-50, Math.min(50, y / 8)));
//     },
//     [mx, my]
//   );

//   const container: Variants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.15 },
//     },
//   };

//   const itemUp: Variants = {
//     hidden: { opacity: 0, y: 18 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className={`${inter.className} relative overflow-hidden bg-white md:min-h-screen md:pt-0 pt-12 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20`}
//     >
//       {/* BACKGROUND */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <motion.div
//           aria-hidden
//           className="absolute -inset-24 rounded-full opacity-40 mix-blend-overlay"
//           style={{
//             background:
//               "conic-gradient(from 0deg, transparent 0deg, rgba(14,165,233,0.12) 120deg, transparent 240deg)",
//           }}
//           animate={inView ? { rotate: [0, 360] } : { rotate: 0 }}
//           transition={{
//             duration: 60,
//             ease: "linear",
//             repeat: inView ? Infinity : 0,
//           }}
//         />

//         <motion.div
//           aria-hidden
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "radial-gradient(rgba(2,132,199,0.12) 1px, transparent 1px)",
//             backgroundSize: "22px 22px",
//           }}
//           animate={
//             inView
//               ? { backgroundPosition: ["0px 0px", "22px 22px"] }
//               : { backgroundPosition: "0px 0px" }
//           }
//           transition={{
//             duration: 12,
//             ease: "linear",
//             repeat: inView ? Infinity : 0,
//           }}
//         />

//         <motion.div
//           className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl"
//           style={{
//             background:
//               "radial-gradient(60% 60% at 50% 50%, #7dd3fc55, transparent)",
//           }}
//           animate={
//             inView
//               ? { x: [0, 20, -10, 0], y: [0, -10, 10, 0] }
//               : { x: 0, y: 0 }
//           }
//           transition={{ duration: 20, repeat: inView ? Infinity : 0, ease: EASE }}
//         />
//         <motion.div
//           className="absolute bottom-[-120px] right-[-120px] h-96 w-96 rounded-full blur-[64px]"
//           style={{
//             background:
//               "radial-gradient(60% 60% at 50% 50%, #93c5fd55, transparent)",
//           }}
//           animate={
//             inView
//               ? { x: [0, -15, 10, 0], y: [0, 15, -10, 0] }
//               : { x: 0, y: 0 }
//           }
//           transition={{ duration: 24, repeat: inView ? Infinity : 0, ease: EASE }}
//         />
//         <motion.div
//           className="absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full blur-2xl"
//           style={{
//             background:
//               "radial-gradient(60% 60% at 50% 50%, #38bdf855, transparent)",
//           }}
//           animate={
//             inView ? { scale: [1, 1.06, 1], rotate: [0, 6, 0] } : { scale: 1, rotate: 0 }
//           }
//           transition={{ duration: 18, repeat: inView ? Infinity : 0, ease: EASE }}
//         />
//       </div>

//       <motion.div
//         className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl md:pl-6"
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//         onMouseMove={handleMouseMove}
//       >
//         {/* Left Content */}
//         <div className="flex-1 text-left">
//           <motion.h1
//             variants={itemUp}
//             className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-snug md:leading-tight mb-6 text-gray-900"
//           >
//             <span className="bg-gradient-to-r from-sky-700 to-cyan-600 bg-clip-text text-transparent">
//               Smarter Tech,
//             </span>
//             <br />
//             <span className="bg-gradient-to-r from-sky-700 to-cyan-600 bg-clip-text text-transparent">
//               Smarter Business.
//             </span>
//           </motion.h1>

//           <motion.p
//             variants={itemUp}
//             className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-8 max-w-xl"
//           >
//             Empowering businesses with AI, cloud, and digital solutions for
//             startups and enterprises.
//           </motion.p>

//           <motion.div variants={itemUp} className="flex flex-wrap gap-4 mb-8">
//             <motion.button
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-[#084c74] text-white px-5 sm:px-6 py-3 rounded-xl font-medium shadow hover:bg-[#063d5d] transition text-sm sm:text-base"
//               animate={
//                 inView
//                   ? {
//                       boxShadow: [
//                         "0 0 0 rgba(0,0,0,0)",
//                         "0 0 22px rgba(8,76,116,0.35)",
//                         "0 0 0 rgba(0,0,0,0)",
//                       ],
//                     }
//                   : { boxShadow: "0 0 0 rgba(0,0,0,0)" }
//               }
//               transition={{ duration: 2.8, repeat: inView ? Infinity : 0, ease: EASE }}
//             >
//               Get Started Today
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.98 }}
//               className="border text-gray-900 border-gray-300 px-5 sm:px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition text-sm sm:text-base"
//               animate={
//                 inView
//                   ? {
//                       boxShadow: [
//                         "0 0 0 rgba(0,0,0,0)",
//                         "0 0 16px rgba(14,165,233,0.25)",
//                         "0 0 0 rgba(0,0,0,0)",
//                       ],
//                     }
//                   : { boxShadow: "0 0 0 rgba(0,0,0,0)" }
//               }
//               transition={{ duration: 3.2, repeat: inView ? Infinity : 0, ease: EASE }}
//             >
//               Request a Demo
//             </motion.button>
//           </motion.div>
//         </div>

//         {/* Right Content */}
//         <motion.div
//           className="flex-1 relative flex justify-center items-end w-full md:mt-0 mt-10"
//           style={{ perspective: 900 }}
//         >
//           <motion.div
//             className="relative rounded-3xl w-[180px] sm:w-full md:w-[300px] lg:w-[380px] h-[220px] sm:h-[300px] md:h-[360px] lg:h-[440px] bg-gradient-to-tr from-slate-100 to-white shadow-inner"
//             variants={itemUp}
//           />

//           {/* Orbiting rings */}
//           <motion.div
//             aria-hidden
//             className="pointer-events-none absolute inset-0 flex items-center justify-center"
//           >
//             <motion.div
//               animate={inView ? { rotate: 360 } : { rotate: 0 }}
//               transition={{ duration: 28, ease: "linear", repeat: inView ? Infinity : 0 }}
//               className="absolute h-[115%] w-[115%] rounded-full"
//               style={{
//                 boxShadow: "inset 0 0 0 1px rgba(14,165,233,0.18)",
//                 backdropFilter: "blur(0.5px)",
//               }}
//             >
//               <div className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-sky-500/70" />
//               <div className="absolute -bottom-1 left-8 h-[6px] w-[6px] rounded-full bg-cyan-400/70" />
//             </motion.div>
//             <motion.div
//               animate={inView ? { rotate: -360 } : { rotate: 0 }}
//               transition={{
//                 duration: 36,
//                 ease: "linear",
//                 repeat: inView ? Infinity : 0,
//                 delay: 0.2,
//               }}
//               className="absolute h-[88%] w-[88%] rounded-full"
//               style={{ boxShadow: "inset 0 0 0 1px rgba(56,189,248,0.18)" }}
//             >
//               <div className="absolute top-1/2 -right-1 -translate-y-1/2 h-[6px] w-[6px] rounded-full bg-sky-400/80" />
//             </motion.div>
//           </motion.div>

//           {/* Main image with tilt */}
//           <motion.div
//             className="absolute bottom-0 md:pt-10 pt-12 md:mt-12 will-change-transform"
//             style={{ rotateX, rotateY }}
//             variants={itemUp}
//           >
//             <Image
//               src="/home/Frame2.png"
//               alt="hero"
//               width={420}
//               height={740}
//               priority
//               className="object-cover w-full h-[50vh] sm:h-[60vh] md:h-[90vh] lg:h-[90vh] drop-shadow-xl"
//             />
//           </motion.div>

//           {/* Floating Cards */}
//           <AnimatePresence initial={false}>
//             {/* Card 1 */}
//             <motion.div
//               variants={itemUp}
//               initial={{ y: 0 }}
//               animate={{
//                 y: [0, -8, 0, 8, 0],
//                 transition: { duration: 6, repeat: Infinity, ease: EASE },
//               }}
//               exit={{ opacity: 0, y: 10, transition: { duration: 0.2, ease: EASE } }}
//               className="absolute top-4 left-0 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-3 w-40 sm:w-48 md:w-52 lg:w-56 border border-slate-100"
//               style={{ rotateX, rotateY }}
//             >
//               <LineChart className="text-sky-700 w-5 h-5 sm:w-6 sm:h-6" />
//               <div>
//                 <p className="text-gray-900">AI-Driven</p>
//                 <p className="text-gray-500 text-[10px] sm:text-xs">
//                   Smarter automation, faster growth.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Card 2 */}
//             <motion.div
//               variants={itemUp}
//               initial={{ y: 0 }}
//               animate={{
//                 y: [0, 10, 0],
//                 transition: { duration: 5.5, repeat: Infinity, ease: EASE, delay: 0.4 },
//               }}
//               exit={{ opacity: 0, y: 10, transition: { duration: 0.2, ease: EASE } }}
//               className="absolute top-20 right-0 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-3 w-40 sm:w-48 md:w-52 lg:w-56 border border-slate-100"
//               style={{ rotateX, rotateY }}
//             >
//               <Users className="text-sky-700 w-5 h-5 sm:w-6 sm:h-6" />
//               <div>
//                 <p className="text-gray-900">Cloud Infrastructure</p>
//                 <p className="text-gray-500 text-[10px] sm:text-xs">
//                   Trusted by 5K+ businesses.
//                 </p>
//               </div>
//             </motion.div>

//             {/* Card 3 */}
//             <motion.div
//               variants={itemUp}
//               initial={{ y: 0 }}
//               animate={{
//                 y: [0, -12, 0],
//                 transition: { duration: 7, repeat: Infinity, ease: EASE, delay: 0.8 },
//               }}
//               exit={{ opacity: 0, y: 10, transition: { duration: 0.2, ease: EASE } }}
//               className="absolute bottom-4 left-2 sm:left-6 bg-white/90 backdrop-blur-sm shadow-lg rounded-xl px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium flex items-center gap-2 sm:gap-3 w-40 sm:w-48 md:w-52 lg:w-56 border border-slate-100"
//               style={{ rotateX, rotateY }}
//             >
//               <GraduationCap className="text-sky-700 w-5 h-5 sm:w-6 sm:h-6" />
//               <div>
//                 <p className="text-gray-900">Smart Integration</p>
//                 <p className="text-gray-500 text-[10px] sm:text-xs">
//                   Connect tools & workflows easily.
//                 </p>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>
//       </motion.div>

//       <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
//     </section>
//   );
// };

// export default LandingPage;
"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedButton from "../../../utils/AnimatedButton";
import ContactModal from "../Header/ContactModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


const LandingPage = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <section
      className={`${inter.className} relative w-full h-1/2 md:h-screen md:py-0 py-10`}
    >
      {/* Background Image */}
      <Image
        src="/test2.png"
        alt="Landing Background"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 sm:px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl sm:max-w-2xl text-white"
        >
          <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-snug md:leading-tight py-2 sm:py-4">
            Smarter Tech, <br className="hidden sm:block" /> Smarter Business.
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
            Empowering Businesses With AI, Cloud, And Digital Solutions For
            Startups And Enterprises.
          </p>

          {/* Call to Action Button */}
          <div className="mt-5 sm:mt-6 md:mt-8">
            <AnimatedButton
              showArrow
              className="mt-6 sm:mt-8 w-1/2 text-center justify-center"
              onClick={() => setOpenModal(true)}
            >
              Get Started
            </AnimatedButton>
          </div>
        </motion.div>
      </div>
      {/* modal  */}
      {openModal && (
        <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}
    </section>
  );
};

export default LandingPage;
