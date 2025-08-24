"use client";
import React from "react";
import { Cloud, Briefcase, Cpu, Globe, Shield, Users, Glasses, Link, Monitor } from "lucide-react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const services = [
{
  title: "AI",
  desc: "Automate processes, analyze data, and decide smarter.",
  icon: <Monitor className="w-6 h-6 text-white" />,
  backgroundimage: "/home/ourservices/ai.png",
},
{
  title: "Consulting",
  desc: "Streamline operations and accelerate business growth.",
  icon: <Briefcase className="w-6 h-6 text-white" />,
  backgroundimage: "/home/ourservices/consulting.png",
},
{
  title: "Bespoke IT",
  desc: "Custom IT solutions for unique business needs.",
  icon: <Cpu className="w-6 h-6 text-white" />,
  backgroundimage: "/home/ourservices/Bespoke.png",
},
{
  title: "Cybersecurity",
  desc: "Protect digital assets with enterprise-grade security.",
  icon: <Shield className="w-6 h-6 text-white" />,
  backgroundimage: "/home/ourservices/Cyber security.png",
},
{
  title: "Staffing",
  desc: "Access top tech talent for your projects.",
  icon: <Users className="w-6 h-6 text-white" />,
  backgroundimage: "/home/ourservices/Staffing.png",
},
{
  title: "AR/VR",
  desc: "Immersive augmented and virtual reality solutions.",
  icon: <Glasses className="w-6 h-6 text-white" />,
  backgroundimage: "/home/ourservices/ARVR.png",
},



];

const OurServices = () => {
  return (
    <section className="py-16 px-6 md:px-0 bg-white text-center">
      {/* Heading */}
      <p className="text-gray-500 uppercase tracking-wide mb-2">Our Services</p>
      <h2
        className={`${inter.className} text-center font-normal text-gray-900 
              text-[16px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[40px] 2xl:text-[40px]`}
      >
        Smart IT Services to Power  <br /> Your Business<br />
        {/* <span>Your business forward</span> */}
      </h2>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-center">
        {services?.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-end items-start p-6 rounded-2xl h-[40vh] overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={service.backgroundimage}
              alt="service background"
              fill
              className="object-cover absolute inset-0"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>

            {/* Icon - Top Left */}
            <div className="absolute top-0 left-0 mt-4 ml-4 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-white bg-white/20 backdrop-blur-sm ">
              {service.icon}
            </div>

            {/* Text at bottom */}
            <div className="relative z-10 text-left mt-auto">
              <h3
                className={`${inter.className} text-lg font-normal text-yellow-400 mb-2`}
              >
                {service.title}
              </h3>
              <p
                className={`${inter.className} text-gray-200 text-sm font-normal`}
              >
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
