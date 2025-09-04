// Slanster/src/components/DlansterDashboard/cvBuilder/UI Component/AddButton.tsx
"use client";

import { BsPlusLg } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

interface AddButtonProps {
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        className="w-fit text-white transition-all scale-100 hover:scale-110 mx-auto"
      >
        <motion.button
          layout
          className="transition-all group flex justify-center items-center h-14 w-14 rounded-full bg-sky-500 group hover:shadow-lg hover:shadow-sky-300 hover:bg-sky-500 overflow-hidden relative flex-1"
          onClick={onClick}
        >
          {/* Top-right glow border */}
          <motion.div
            layout
            className="border-t-4 border-r-4 h-14 w-14 rounded-full border-sky-400 group-hover:border-sky-400 top-0 right-0 blur-[2px] transition-all absolute"
          />
          {/* Plus icon */}
          <BsPlusLg className="w-8 h-8 transition-all scale-100 group-hover:scale-105 drop-shadow-md" />
          {/* Bottom-left glow border */}
          <motion.div
            layout
            className="border-b-4 border-l-4 h-14 w-14 rounded-full border-sky-600 group-hover:border-sky-600 top-0 right-0 blur-[2px] transition-all absolute"
          />
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default AddButton;
