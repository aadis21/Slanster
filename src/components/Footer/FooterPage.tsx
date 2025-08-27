"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Mentors", href: "/mentors" },
  { name: "Super 30", href: "/super30" },
];

// const navLinksServices = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/about" },
//   { name: "Projects", href: "/projects" },
//   { name: "Mentors", href: "/mentors" },
//   { name: "Super 30", href: "/super30" },
// ];

const FooterPage = () => {
  return (
    <footer className={`${inter.className} bg-gray-900 text-white`}>
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-0 py-20 flex flex-col md:flex-row justify-between gap-12 animate-fadeIn">
        {/* Logo & Description */}
        <div className="flex flex-col items-start max-w-[300px]">
          <Image
            src="/logofooter.png"
            alt="Logo"
            width={220}
            height={220}
            className="mb-6"
          />
          <p className="text-gray-400 text-base leading-relaxed">
            We empower businesses and learners by combining expert guidance with
            AI-driven solutions, fostering smarter decisions, streamlined
            growth, and continuous learning for a future-ready world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-xl mb-6">Quick Links</h3>
          <ul className="space-y-3 text-gray-400 text-base">
            {navLinks.map((item, idx) => (
              <li
                key={idx}
                className="relative py-2 group cursor-pointer w-fit hover:text-white transition"
              >
                <Link href={item.href}>
                  <span>{item.name}</span>
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-xl mb-6">Services</h3>
          <ul className="space-y-3 text-gray-400 text-base">
            {[
              // "AI",
              // "Blockchain",
              // "Bespoke",
              // "Data Analytics",
              // "Cyber Security",
              // "AR/VR",

              "AI",
              "Consulting",
              "Bespoke IT",
              "Cyber Security",
              "Staffing",
              "AR/VR",
            ].map((item, idx) => (
              <li
                key={idx}
                className="relative py-2 group cursor-pointer w-fit hover:text-white transition"
              >
                <Link href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}>
                  <span>{item}</span>
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-semibold text-xl mb-6">Courses</h3>
          <ul className="space-y-3 text-gray-400 text-base">
            {[
              "ITGC, IT Audit & Cyber Assessment",
              "IT Asset Management (SAM)",
              "ESG & Sustainability",
              "Digital Risk & Compliance",
              "Entrepreneurship & Startup Innovation",
            ].map((item, idx) => (
              <li
                key={idx}
                className="relative py-2 group cursor-pointer w-fit hover:text-white transition"
              >
                <Link
                  href={`/courses/${item.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <span>{item}</span>
                </Link>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-xl mb-6">Contact Us</h3>
          <ul className="space-y-3 text-gray-400 text-base py-2">
            <li className="relative group cursor-pointer w-fit hover:text-white transition">
              <a href="tel:+914545454545">+91 4545454545</a>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="relative group cursor-pointer w-fit hover:text-white transition">
              <a href="mailto:support@slanster.com">support@slanster.com</a>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            {/* <li className="relative group cursor-pointer w-fit hover:text-white transition">
              <span>
                Global Business <br /> Park - Chandigarh, <br /> Punjab 140603
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-0">
        {/* Social Icons */}
        <div className="flex justify-start space-x-8 pb-8 animate-fadeIn delay-200">
          {[FaInstagram, FaFacebookF, FaYoutube, FaLinkedin].map(
            (Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="text-gray-400 hover:text-sky-500 transition transform hover:scale-110 duration-300"
              >
                <Icon size={24} />
              </a>
            )
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 flex flex-col md:flex-row justify-between items-center px-6 py-6 text-gray-400 text-sm">
          <div className="flex space-x-6 mb-3 md:mb-0">
            {[
              { name: "Privacy policy", link: "/privacypolicy" },
              { name: "Sitemap", link: "/sitemap" },
              { name: "Terms and Conditions", link: "/termsconditions" },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className="relative group cursor-pointer w-fit hover:text-white transition"
              >
                <span>{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <p className="hover:text-white transition">
            © 2025, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
