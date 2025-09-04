"use client";
import React from "react";
import Sidebar from "@/components/DlansterDashboard/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar fixed */}
      <Sidebar />

      {/* Page Content */}
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
