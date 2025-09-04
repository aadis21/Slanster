// Slanster/src/components/DlansterDashboard/cvBuilder/UI Component/SetEmpty.tsx
"use client";

import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";

const SetEmpty: React.FC = () => {
  const context = useContext(CvContext);
  
  // Guard against null/undefined context
  if (!context) {
    throw new Error("SetEmpty must be used within a CvContext.Provider");
  }
  
  const { setEmptyCv } = context;

  return (
    <button
      className="resetButton transition-all h-10 bg-rose-500 group hover:bg-rose-500 overflow-hidden relative flex-1"
      onClick={setEmptyCv}
    >
      Reset
    </button>
  );
};

export default SetEmpty;
