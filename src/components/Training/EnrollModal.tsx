"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface EnrollModalProps {
  onClose: () => void;
}

const EnrollModal: React.FC<EnrollModalProps> = ({ onClose }) => {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-xl shadow-lg w-[90%] max-w-md p-6 text-center"
      >
        {!confirmed ? (
          <>
            <h2 className="text-lg text-gray-900 font-semibold mb-4">
              Are you sure you want to buy?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setConfirmed(true)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Yes
              </button>
              <button
                onClick={onClose}
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-green-600 mb-4">
              🎉 Your course enrolled successfully!
            </h2>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Close
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default EnrollModal;
