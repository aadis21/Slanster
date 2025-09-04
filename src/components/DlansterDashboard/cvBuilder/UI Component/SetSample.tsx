// Slanster/src/components/DlansterDashboard/cvBuilder/UI Component/SetSample.tsx
"use client";

import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";

const SetSample: React.FC = () => {
  const context = useContext(CvContext);
  
  // Guard against null/undefined context
  if (!context) {
    throw new Error("SetEmpty must be used within a CvContext.Provider");
  }
  
  const { setCV } = context;

  return (
    <button
      className="resetButton transition-all h-10 bg-emerald-500 group active:bg-emerald-500/90 overflow-hidden relative flex-1 xsm:text-sm"
      onClick={setCV}
    >
      Fill Sample Data
    </button>
  );
};

export default SetSample;
