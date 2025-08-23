"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // ✅ Import Link from Next.js
import ContactModal from "./ContactModal";

const HeaderPage: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // ✅ Define routes here
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Mentors", href: "/mentors" },
    { name: "Training", href: "/training" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-inter">
      <div className="max-w-8xl md:px-15 mx-auto flex items-center justify-between h-24 px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logoheader.png"
              alt="Slanster Logo"
              width={220}
              height={80}
              priority
            />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-gray-900 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group hover:text-sky-600 transition"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Buttons (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            className="cursor-pointer px-5 py-2 border border-gray-400 rounded-md hover:bg-gray-50 transition text-gray-900"
            onClick={() => setOpenModal(true)}
          >
            Let&apos;s Connect
          </button>

          <Link href="/super30">
            <button className="cursor-pointer  px-5 py-2 bg-sky-900 text-white rounded-md hover:bg-sky-800 transition">
              Unlock Super 30
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-900 hover:bg-gray-100 transition"
          onClick={() => setMobileMenu(true)}
        >
          <Menu size={30} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[85%] sm:w-[70%] md:w-[60%] bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out font-inter ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-6 border-b">
          <Link href="/">
            <Image
              src="/logoheader.png"
              alt="Slanster Logo"
              width={200}
              height={80}
              className="h-auto w-[180px] sm:w-[200px]"
            />
          </Link>
          <button onClick={() => setMobileMenu(false)}>
            <X size={28} className="text-gray-900" />
          </button>
        </div>

        {/* Sidebar Nav */}
        <nav className="flex flex-col px-6 py-8 space-y-8 text-gray-900 font-medium text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group hover:text-sky-600 transition"
              onClick={() => setMobileMenu(false)} // ✅ close sidebar on click
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Buttons in Sidebar */}
          <div className="flex flex-col space-y-4 pt-8">
            <Link href="/contact">
              <button
                className="px-5 py-2 border border-gray-400 rounded-md hover:bg-gray-50 transition text-gray-900"
                onClick={() => setOpenModal(true)}
              >
                Let&apos;s Connect
              </button>
            </Link>
            <Link href="/super30">
              <button className="w-full bg-sky-900 text-white px-5 py-3 rounded-md hover:bg-sky-800 transition">
                Unlock Super 30
              </button>
            </Link>
          </div>
        </nav>
      </div>

      {/* modal  */}
      {openModal && (
        <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}

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
