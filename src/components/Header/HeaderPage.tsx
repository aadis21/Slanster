"use client";
import React, { useState, useContext } from "react";
import { Menu, X, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ContactModal from "./ContactModal";
import RegistrationPage from "../Home/registrationform";
import { AuthContext } from "../../../AuthContext";

const HeaderPage: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSuperModal, setOpenSuperModal] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const { isAuthenticated, logout } = useContext(AuthContext);
  const router = useRouter();

  // Enhanced logout function
  const handleLogout = () => {
    logout();
    setShowUserDropdown(false);
    router.push("/auth");
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "AI", href: "/ai" },
    { name: "Training", href: "/training" },
    { name: "Package", href: "/slansterlearning" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 font-inter">
      <div className="max-w-8xl md:px-15 px-0 mx-auto flex items-center justify-between h-24">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logoheader.png"
              alt="Slanster Logo"
              width={210}
              height={80}
              priority
              className="w-[150px] md:w-[210px] h-auto"
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

        {/* Buttons / User (Desktop) */}
        <div className="hidden md:flex items-center space-x-3 relative">
          <button
            className="cursor-pointer px-5 py-2 border border-gray-400 rounded-md hover:bg-gray-50 transition text-gray-900"
            onClick={() => setOpenModal(true)}
          >
            Let&apos;s Connect
          </button>

          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              >
                <User size={20} />
              </button>

              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-100 transition"
                    onClick={() => setShowUserDropdown(false)}
                  >
                    View Profile
                  </Link>
                  <button
                    className="w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 transition"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/auth"
              className="cursor-pointer px-5 py-2 bg-sky-900 text-white rounded-md hover:bg-sky-800 transition"
            >
              Sign In
            </Link>
          )}
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
        className={`fixed top-0 right-0 h-full w-full sm:w-[70%] md:w-[60%] bg-white shadow-lg z-50 transform transition-transform duration-500 ease-in-out font-inter ${
          mobileMenu ? "-translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center pr-6 py-6 border-b">
          <Link href="/">
            <Image
              src="/logoheader.png"
              alt="Slanster Logo"
              width={200}
              height={100}
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
              onClick={() => setMobileMenu(false)}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Buttons in Sidebar */}
          <div className="flex flex-col space-y-4 pt-8">
            <button
              className="px-5 py-2 border border-gray-400 rounded-md hover:bg-gray-50 transition text-gray-900"
              onClick={() => setOpenModal(true)}
            >
              Let&apos;s Connect
            </button>

            {isAuthenticated ? (
              <>
                <Link href="/profile">
                  <button
                    className="w-full bg-gray-200 text-gray-900 px-5 py-3 rounded-md hover:bg-gray-300 transition"
                    onClick={() => setMobileMenu(false)}
                  >
                    View Profile
                  </button>
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 text-white px-5 py-3 rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/auth">
                <button className="w-full bg-sky-900 text-white px-5 py-3 rounded-md hover:bg-sky-800 transition">
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </nav>
      </div>

      {/* Modals */}
      {openModal && (
        <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} />
      )}

      {openSuperModal && (
        <RegistrationPage
          isOpen={openSuperModal}
          onClose={() => setOpenSuperModal(false)}
        />
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
