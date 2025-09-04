// Slanster/src/components/DlansterDashboard/cvBuilder/UI Component/Inputs.tsx
"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CvContext } from "../hooks/CvContext";

interface InputsProps {
  title?: string;
  value: string;
  keyChange: string;
  placeholder?: string;
  type?: string;
}

const Inputs: React.FC<InputsProps> = ({
  title,
  value,
  keyChange,
  placeholder,
  type = "text",
}) => {
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
      <motion.label className="text-gray-500">{title}</motion.label>
      <motion.input
        layout
        type={type}
        className="inputStyle relative z-50"
        placeholder={placeholder}
        value={value}
        onChange={(e) => updateCv(keyChange, e.target.value)}
      />
    </motion.div>
  );
};

export default Inputs;
