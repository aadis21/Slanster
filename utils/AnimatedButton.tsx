"use client";
import React, { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = "",
  showArrow = true,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 bg-[#00517c] hover:bg-[#00517c] text-white 
        px-5 py-3 rounded-full font-medium shadow-md 
        hover:shadow-xl transition-all duration-300 ease-in-out 
        transform hover:scale-105 cursor-pointer 
        group
        ${className}
      `}
    >
      {children}
      {showArrow && (
        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default AnimatedButton;
