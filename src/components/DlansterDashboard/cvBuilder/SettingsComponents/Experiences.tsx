"use client";

import { useContext, useState } from "react";
import { CvContext } from "../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronRight } from "react-icons/hi";
import AddButton from "../UI Component/AddButton";
import type { Experience } from "../data/cvData";

const Experiences = () => {
  const context = useContext(CvContext);

  if (!context) {
    throw new Error("Experiences must be used within CvProvider");
  }

  const { cv, updateCv, addExperience } = context;
  const [isOpen, setIsOpen] = useState(false);

  const handleAddExperience = () => {
    if (addExperience) {
      // Include all required properties including 'current'
      addExperience({
        title: "",
        company: "",
        summary: "",
        startDate: "",
        endDate: "",
        current: false // Added the missing 'current' property
      });
    }
  };

  const handleUpdateExperience = (index: number, field: keyof Experience, value: any) => {
    if (!cv.experiences) return;
    
    const updatedExperiences = [...cv.experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value
    };
    updateCv("experiences", updatedExperiences);
  };

  const handleDeleteExperience = (index: number) => {
    if (!cv.experiences) return;
    
    const updatedExperiences = cv.experiences.filter((_, i) => i !== index);
    updateCv("experiences", updatedExperiences);
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        className="cardStyle"
        animate={{ marginBottom: isOpen ? "30px" : "20px" }}
      >
        <motion.div
          initial={false}
          onClick={() => setIsOpen((prev) => !prev)}
          layout
          className="w-full flex text-neutral-500 cursor-pointer text-lg"
        >
          <span className="flex-1">Experiences</span>
          <motion.div
            className="inline-block items-end"
            animate={{ rotate: isOpen ? 90 : 0 }}
          >
            <HiChevronRight className="inline w-6 h-6" />
          </motion.div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {cv.experiences?.map((experience, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={index}
                  className="flex first:mt-3 mb-4 flex-col"
                >
                  <div className="bg-gradient-to-tr from-transparent to-gray-100 rounded-xl border px-2 py-1">
                    <div className="relative">
                      <button
                        className="deleteButton"
                        onClick={() => handleDeleteExperience(index)}
                      >
                        <RiCloseFill className="deleteButtonSVG" />
                      </button>
                    </div>

                    {/* Position */}
                    <div className="items-center mt-4">
                      <label className="text-gray-500">Position</label>
                      <input
                        type="text"
                        className="inputStyle"
                        placeholder="Your position"
                        value={experience.title}
                        onChange={(e) => handleUpdateExperience(index, 'title', e.target.value)}
                      />
                    </div>

                    {/* Company */}
                    <div className="items-center mt-4">
                      <label className="text-gray-500">Company</label>
                      <input
                        type="text"
                        className="inputStyle"
                        placeholder="Company Name"
                        value={experience.company}
                        onChange={(e) => handleUpdateExperience(index, 'company', e.target.value)}
                      />
                    </div>

                    {/* Summary */}
                    <div className="items-center mt-4">
                      <label className="text-gray-500">Summary</label>
                      <textarea
                        rows={7}
                        placeholder="Brief information of 3-4 sentences about what you do in the company."
                        className="inputStyle"
                        value={experience.summary}
                        onChange={(e) => handleUpdateExperience(index, 'summary', e.target.value)}
                      />
                    </div>

                    {/* Start Date */}
                    <div className="items-center mt-4">
                      <label className="text-gray-500">Start date</label>
                      <input
                        type="text"
                        className="inputStyle"
                        placeholder="When did you start this job?"
                        value={experience.startDate instanceof Date 
                          ? experience.startDate.toISOString().split('T')[0] 
                          : experience.startDate || ''}
                        onChange={(e) => handleUpdateExperience(index, 'startDate', e.target.value)}
                      />
                    </div>

                    {/* End Date */}
                    <div className="items-center mt-4">
                      <label className="text-gray-500">End date</label>
                      <input
                        type="text"
                        placeholder="Did you quit this job or is it still going?"
                        className="inputStyle"
                        value={experience.endDate instanceof Date 
                          ? experience.endDate.toISOString().split('T')[0] 
                          : experience.endDate || ''}
                        onChange={(e) => handleUpdateExperience(index, 'endDate', e.target.value)}
                      />
                    </div>

                    {/* Current Job Checkbox */}
                    <div className="items-center mt-4 mb-6 flex">
                      <input
                        type="checkbox"
                        id={`current-${index}`}
                        className="mr-2"
                        checked={experience.current}
                        onChange={(e) => handleUpdateExperience(index, 'current', e.target.checked)}
                      />
                      <label htmlFor={`current-${index}`} className="text-gray-500">
                        This is my current job
                      </label>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Add new experience */}
              <AddButton onClick={handleAddExperience} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Experiences;