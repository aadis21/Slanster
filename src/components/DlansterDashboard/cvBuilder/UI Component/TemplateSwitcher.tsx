"use client";

import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";

interface TemplateSwitcherProps {
  value: number;
}

const TemplateSwitcher: React.FC<TemplateSwitcherProps> = ({ value }) => {
  const context = useContext(CvContext);
  
  // Guard against null/undefined context
  if (!context) {
    throw new Error("TemplateSwitcher must be used within a CvContext.Provider");
  }
  
  const { selectTemplate } = context;

  const handleTemplateSelect = () => {
    if (selectTemplate) {
      selectTemplate(value);
    }
  };

  return (
    <div>
      <button
        className="h-10 w-10 rounded-md inline-block bg-gray-100 border-2 border-gray-300 transition-all active:scale-95 hover:scale-105 active:border-blue-500 active:bg-sky-100"
        value={value}
        onClick={handleTemplateSelect}
      >
        {value}
      </button>
    </div>
  );
};

export default TemplateSwitcher;
