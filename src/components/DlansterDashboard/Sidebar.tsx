"use client";
import Link from "next/link";
import {
  Home,
  Search,
  Compass,
  Video,
  MessageSquare,
  Heart,
  PlusSquare,
  User,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white text-gray-900 flex flex-col p-6 border-r border-gray-800">


      {/* Menu Items */}
      <nav className="flex flex-col gap-6">
        <Link
          href="/slansterdashboard/home"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <Home size={22} /> Home
        </Link>
        <Link
          href="/slansterdashboard/search"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <Search size={22} /> Search
        </Link>
        <Link
          href="/slansterdashboard/explore"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <Compass size={22} /> Explore
        </Link>
        <Link
          href="/slansterdashboard/reels"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <Video size={22} /> Reels
        </Link>
        <Link
          href="/slansterdashboard/messages"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <MessageSquare size={22} /> Messages
        </Link>
        <Link
          href="/slansterdashboard/notifications"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <Heart size={22} /> Notifications
        </Link>
        <Link
          href="/slansterdashboard/create"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <PlusSquare size={22} /> Create
        </Link>
        <Link
          href="/slansterdashboard/profile"
          className="flex items-center gap-3 hover:text-gray-300"
        >
          <User size={22} /> Profile
        </Link>
        <button className="flex items-center gap-3 hover:text-gray-300">
          <Menu size={22} /> More
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
