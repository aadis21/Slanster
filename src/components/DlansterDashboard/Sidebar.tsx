"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FileText,
  Code,
  Calendar,
  Briefcase,
  Users,
  BookOpen,
  MessageCircle,
  FileBadge,
  ClipboardList,
  Award,
} from "lucide-react";

const menuItems = [
  {
    href: "/slansterdashboard/home",
    icon: Home,
    label: "Home",
    color: "text-red-500",
  },
  {
    href: "/slansterdashboard/tech-consulting",
    icon: FileText,
    label: "Tech Consulting Overview",
    color: "text-blue-500",
  },
  {
    href: "/slansterdashboard/tech-coding",
    icon: Code,
    label: "Tech Coding Basics",
    color: "text-green-500",
  },
  {
    href: "/slansterdashboard/webinars",
    icon: Calendar,
    label: "Upcoming Webinars",
    color: "text-purple-500",
  },
  {
    href: "/slansterdashboard/career-guidance",
    icon: Briefcase,
    label: "Career Guidance",
    color: "text-orange-500",
  },
  {
    href: "/slansterdashboard/jobs",
    icon: Users,
    label: "Jobs & Openings",
    color: "text-pink-500",
  },
  {
    href: "/slansterdashboard/mock-interviews",
    icon: BookOpen,
    label: "Mock Interviews",
    color: "text-indigo-500",
  },
  {
    href: "/slansterdashboard/mentorship",
    icon: MessageCircle,
    label: "Mentorship & Support",
    color: "text-teal-500",
  },
  {
    href: "/slansterdashboard/cv-builder",
    icon: ClipboardList,
    label: "CV Builder",
    color: "text-yellow-500",
  },
  {
    href: "/slansterdashboard/business-communication",
    icon: FileBadge,
    label: "Business Communication",
    color: "text-rose-500",
  },
  {
    href: "/slansterdashboard/certificate",
    icon: Award,
    label: "Certificate & Community",
    color: "text-cyan-500",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-white shadow-md text-gray-900 flex flex-col p-6 border-r border-gray-200 overflow-y-auto custom-scrollbar">
      {/* Logo / Title
      <h2 className="text-xl font-bold text-blue-600 mb-8">
        Slanster Dashboard
      </h2> */}

      {/* Menu Items */}
      <nav className="flex flex-col gap-2">
        {menuItems.map(({ href, icon: Icon, label, color }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-100 text-blue-600 font-semibold border-l-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Icon size={20} className={`${color}`} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
