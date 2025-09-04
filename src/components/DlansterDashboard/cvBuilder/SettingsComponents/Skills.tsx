"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState, KeyboardEvent } from "react";
import { CvContext } from "../hooks/CvContext";
import { RiCloseFill } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi";
import Inputs from "../UI Component/Inputs";

const Skills: React.FC = () => {
  const context = useContext(CvContext);
  const [isOpen, setIsOpen] = useState(false);

  // Guard against null/undefined context
  if (!context) {
    throw new Error("Skills must be used within a CvContext.Provider");
  }

  const { cv, addTag, removeTag } = context;

  const handleAddTag = (
    e: KeyboardEvent<HTMLInputElement>,
    key: "toolsAndTechSkills" | "industryKnowledge" | "languages"
  ) => {
    if (addTag && e.key === 'Enter') {
      const input = e.target as HTMLInputElement;
      if (input.value.trim()) {
        addTag(e, key, input.value.trim());
        input.value = ''; // Clear the input after adding
      }
    }
  };

  const handleRemoveTag = (category: string, tag: string) => {
    if (removeTag) {
      removeTag(category, tag);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        animate={{ marginBottom: isOpen ? "30px" : "20px" }}
        layout
        className="cardStyle z-10 relative"
      >
        {/* Header (Toggle Open/Close) */}
        <motion.div
          initial={false}
          onClick={() => setIsOpen(!isOpen)}
          layout
          className="w-full flex text-neutral-500 cursor-pointer text-lg"
        >
          <span className="flex-1">Skills</span>
          <motion.div
            className="inline-block items-end"
            animate={{ rotate: isOpen ? 90 : 0 }}
          >
            <HiChevronRight className="inline w-6 h-6" />
          </motion.div>
        </motion.div>

        {/* Content */}
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
              {/* Tools and Tech Skills */}
              <motion.div layout>
                <Inputs
                  value={cv.skillTitle1}
                  placeholder="Title 1"
                  keyChange="skillTitle1"
                />
                <motion.div
                  layout
                  className="w-full relative bg-blue-50 rounded-xl p-2 border border-gray-300 mt-3 flex items-center flex-wrap"
                >
                  <motion.div
                    layout
                    className="absolute w-1 left-1/2 h-3 bg-blue-400 -top-3"
                  />
                  {cv.toolsAndTechSkills?.map((tag: string, index: number) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="tagStyle text-blue-900 bg-blue-200/70"
                      key={index}
                    >
                      <motion.p layout className="mr-5">
                        {tag}
                      </motion.p>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="right-1 top-0 bottom-0 absolute"
                        onClick={() => handleRemoveTag("toolsAndTechSkills", tag)}
                      >
                        <RiCloseFill className="tagDeleteButton fill-blue-400 hover:fill-blue-700 hover:bg-blue-300/50" />
                      </motion.button>
                    </motion.div>
                  ))}
                  <motion.input
                    layout
                    type="text"
                    className="px-2 m-1 resize bg-blue-50 text-blue-900 placeholder:text-blue-600/40 focus:outline-none border-blue-100 focus:border-blue-500 border-2 rounded-lg w-32"
                    placeholder="+ Add tag"
                    onKeyDown={(e) => handleAddTag(e, "toolsAndTechSkills")}
                  />
                </motion.div>
              </motion.div>

              {/* Industry Knowledge */}
              <motion.div layout="size" className="mt-4">
                <motion.div
                  layout
                  className="w-44 h-1 mx-auto bg-gray-200 rounded-full"
                />
                <Inputs
                  value={cv.skillTitle2}
                  placeholder="Title 2"
                  keyChange="skillTitle2"
                />
                <motion.div
                  layout
                  className="w-full relative bg-violet-50 rounded-xl p-2 border border-gray-300 mt-3 flex items-center flex-wrap"
                >
                  <motion.div
                    layout
                    className="absolute w-1 left-1/2 h-3 bg-violet-400 -top-3"
                  />
                  {cv.industryKnowledge?.map((tag: string, index: number) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="tagStyle text-violet-900 bg-violet-200/70"
                      key={index}
                    >
                      <motion.p layout className="mr-5">
                        {tag}
                      </motion.p>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="right-1 top-0 bottom-0 absolute"
                        onClick={() => handleRemoveTag("industryKnowledge", tag)}
                      >
                        <RiCloseFill className="tagDeleteButton fill-violet-400 hover:fill-violet-700 hover:bg-violet-300/50" />
                      </motion.button>
                    </motion.div>
                  ))}
                  <motion.input
                    layout
                    type="text"
                    className="px-2 m-1 resize bg-violet-50 text-violet-900 placeholder:text-violet-600/40 focus:outline-none border-violet-100 focus:border-violet-500 border-2 rounded-lg w-32"
                    placeholder="+ Add tag"
                    onKeyDown={(e) => handleAddTag(e, "industryKnowledge")}
                  />
                </motion.div>
              </motion.div>

              {/* Languages */}
              <motion.div layout="size" className="mt-4">
                <motion.div
                  layout
                  className="w-44 h-1 mx-auto bg-gray-200 rounded-full"
                />
                <Inputs
                  value={cv.skillTitle3}
                  placeholder="Title 3"
                  keyChange="skillTitle3"
                />
                <motion.div
                  layout
                  className="w-full relative bg-rose-50 rounded-xl p-2 border border-gray-300 mt-3 flex items-center flex-wrap"
                >
                  <motion.div
                    layout
                    className="absolute w-1 left-1/2 h-3 bg-rose-400 -top-3"
                  />
                  {cv.languages?.map((tag: string, index: number) => (
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="tagStyle text-rose-900 bg-rose-200/70"
                      key={index}
                    >
                      <motion.p layout className="mr-5">
                        {tag}
                      </motion.p>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        className="right-1 top-0 bottom-0 absolute"
                        onClick={() => handleRemoveTag("languages", tag)}
                      >
                        <RiCloseFill className="tagDeleteButton fill-rose-400 hover:fill-rose-700 hover:bg-rose-300/50" />
                      </motion.button>
                    </motion.div>
                  ))}
                  <motion.input
                    layout
                    type="text"
                    className="px-2 m-1 resize bg-rose-50 text-rose-900 placeholder:text-rose-600/40 focus:outline-none border-rose-100 focus:border-rose-500 border-2 rounded-lg w-32"
                    placeholder="+ Add tag"
                    onKeyDown={(e) => handleAddTag(e, "languages")}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Skills;