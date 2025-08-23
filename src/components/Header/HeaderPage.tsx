"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const HeaderPage: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-inter">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-24">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logoheader.png"
            alt="Slanster Logo"
            width={180}
            height={90}
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-gray-900 font-medium">
          {["Home", "About Us", "Services", "Mentors", "Training"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="relative group hover:text-sky-600 transition"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </nav>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="px-5 py-2 border border-gray-400 rounded-md hover:bg-gray-50 transition text-gray-900">
            Let&apos;s Connect
          </button>
          <button className="px-5 py-2 bg-sky-900 text-white rounded-md hover:bg-sky-800 transition">
            Unlock Super 30
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100 transition"
          onClick={() => setMobileMenu(true)}
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Mobile Sidebar - Full Width */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out font-inter ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-6 border-b">
          <Image
            src="/logoheader.png"
            alt="Slanster Logo"
            width={150}
            height={60}
          />
          <button onClick={() => setMobileMenu(false)}>
            <X size={28} className="text-gray-900" />
          </button>
        </div>

        {/* Sidebar Nav */}
        <nav className="flex flex-col px-6 py-8 space-y-8 text-gray-900 font-medium text-lg">
          {["Home", "About Us", "Services", "Mentors", "Training"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="relative group hover:text-sky-600 transition"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}

          {/* Buttons in Sidebar */}
          <div className="flex flex-col space-y-4 pt-8">
            <button className="w-full border border-gray-400 px-5 py-3 rounded-md hover:bg-gray-50 transition text-gray-900">
              Let&apos;s Connect
            </button>
            <button className="w-full bg-sky-900 text-white px-5 py-3 rounded-md hover:bg-sky-800 transition">
              Unlock Super 30
            </button>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {mobileMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMobileMenu(false)}
        />
      )}
    </header>
  );
};

export default HeaderPage;
