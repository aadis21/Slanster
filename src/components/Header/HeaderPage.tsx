"use client";
import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import AnimatedButton from "../../../utils/AnimatedButton";
import Image from "next/image";

const HeaderPage: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-gray-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-0 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          {/* <div className="w-8 h-8 bg-gradient-to-tr from-green-500 to-yellow-400 text-white flex items-center justify-center rounded-md font-bold">
            S
          </div>
          <span className="text-xl font-semibold text-sky-600">Slanster</span> */}
          <Image 
          src="/logoheader.png"
          alt="logo"
          width={200}
          height={200}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
          <a href="#" className="hover:text-sky-600 transition">
            Home
          </a>

          {[
            {
              name: "Company",
              items: ["About Us", "Our Team", "Careers"],
            },
            {
              name: "Portfolio",
              items: ["Web Projects", "Mobile Apps", "Designs"],
            },
            {
              name: "Services",
              items: ["Web Development", "App Development", "UI/UX Design"],
            },
          ].map((menu) => (
            <div
              key={menu.name}
              className="relative"
              onMouseEnter={() => setOpenDropdown(menu.name.toLowerCase())}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="flex items-center space-x-1 hover:text-sky-600 transition">
                <span>{menu.name}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-500 ease-in-out ${
                    openDropdown === menu.name.toLowerCase() ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`absolute left-0 top-full w-40 bg-white shadow-lg rounded-lg py-2
                  transform transition-all duration-500 ease-in-out
                  before:content-[''] before:absolute before:-top-2 before:left-0 before:w-full before:h-2
                  ${
                    openDropdown === menu.name.toLowerCase()
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
              >
                {menu.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-4 py-2 hover:bg-sky-100 hover:translate-x-1 transition-all duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <a href="#" className="hover:text-sky-600 transition">
            FAQ
          </a>
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block ml-6">
          <AnimatedButton className="h-10">Contact us</AnimatedButton>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-500 ease-in-out z-40 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-green-500 to-yellow-400 text-white flex items-center justify-center rounded-md font-bold">
              S
            </div>
            <span className="text-xl font-semibold text-sky-600">Slanster</span>
          </div>

          {/* Close Button */}
          <button onClick={() => setMobileMenu(false)}>
            <X size={24} className="text-blue-400" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 space-y-4 text-gray-800 font-medium">
          <a href="#" className="hover:text-sky-600 transition">
            Home
          </a>

          {/* Collapsible Menus */}
          {[
            {
              name: "Company",
              sub: ["About Us", "Our Team", "Careers"],
            },
            {
              name: "Portfolio",
              sub: ["Web Projects", "Mobile Apps", "Designs"],
            },
            {
              name: "Services",
              sub: ["Web Development", "App Development", "UI/UX Design"],
            },
          ].map((menu) => (
            <div key={menu.name}>
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === menu.name.toLowerCase()
                      ? null
                      : menu.name.toLowerCase()
                  )
                }
                className="flex justify-between items-center w-full hover:text-sky-600 transition"
              >
                {menu.name}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-500 ease-in-out ${
                    openDropdown === menu.name.toLowerCase()
                      ? "rotate-180"
                      : "rotate-0"
                  }`}
                />
              </button>
              {openDropdown === menu.name.toLowerCase() && (
                <div className="mt-2 ml-4 space-y-2 text-sm text-gray-600 transition-all duration-500 ease-in-out">
                  {menu.sub.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block hover:text-sky-600 hover:translate-x-1 transition-all duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a href="#" className="hover:text-sky-600 transition">
            FAQ
          </a>

          {/* Contact Button */}
          <a
            href="#"
            className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full shadow transition text-center"
          >
            Contact us
          </a>
        </nav>
      </div>

      {/* Background Overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={() => setMobileMenu(false)}
        />
      )}
    </header>
  );
};

export default HeaderPage;
