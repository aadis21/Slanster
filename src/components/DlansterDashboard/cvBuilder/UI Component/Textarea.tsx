// Slanster/src/components/DlansterDashboard/cvBuilder/UI Component/TextArea.tsx
"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";

interface TextAreaProps {
  title: string;
  value: string;
  keyChange: string;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({ title, value, keyChange, placeholder }) => {
  const context = useContext(CvContext);
  
  // Guard against null context
  if (!context) {
    throw new Error("TextArea must be used within a CvContext.Provider");
  }
  
  const { updateCv } = context;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-4"
    >
      <label className="text-gray-500">{title}</label>
      <textarea
        rows={7}
        placeholder={placeholder}
        className="inputStyle"
        value={value}
        onChange={(e) => updateCv(keyChange, e.target.value)}
      />
    </motion.div>
  );
};

export default TextArea;
