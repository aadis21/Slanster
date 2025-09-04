"use client";
import React from "react";
import Sidebar from "@/components/DlansterDashboard/Sidebar";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
};

export default LayoutWrapper;
