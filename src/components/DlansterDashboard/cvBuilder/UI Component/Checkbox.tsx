// Slanster/src/components/DlansterDashboard/cvBuilder/UI Component/CheckBox.tsx
"use client";

import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";

interface CheckBoxProps {
  title: string;
  value: boolean;
  keyChange: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ title, value, keyChange }) => {
  const context = useContext(CvContext);
  
  // Guard against null/undefined context
  if (!context) {
    throw new Error("updateCv must be used within a CvContext.Provider");
  }
  
  const { updateCv } = context;


  return (
    <div className="flex items-center mt-4 mr-4">
      <input
        id={title}
        type="checkbox"
        defaultChecked={value}
        onChange={(e) => updateCv(keyChange, e.target.checked)}
        className="cursor-pointer"
      />
      <label
        htmlFor={title}
        className="ml-2 text-gray-500 text-sm font-medium cursor-pointer"
      >
        {title}
      </label>
    </div>
  );
};

export default CheckBox;
