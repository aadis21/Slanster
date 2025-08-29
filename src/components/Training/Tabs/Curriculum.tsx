// File: Curriculum.tsx
"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Lock, Play } from "lucide-react";

interface CurriculumProps {
  curriculum: string[];
}

const Curriculum: React.FC<CurriculumProps> = ({ curriculum }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Group curriculum into modules (each module has 3-5 lessons)
  const modules = [];
  for (let i = 0; i < curriculum.length; i += 4) {
    modules.push({
      title: `Module ${Math.floor(i / 4) + 1}`,
      lessons: curriculum.slice(i, i + 4).map((lesson, idx) => ({
        title: lesson,
        duration: `${15 + idx * 5} mins`,
        preview: i === 0 && idx === 0,
        completed: false,
        locked: i > 0, 
      })),
    });
  }

  return (
    <div className="font-inter max-w-2xl mx-auto">
      <p className="text-gray-600 mb-6 leading-relaxed">
        This course contains {curriculum.length} lessons across {modules.length}{" "}
        comprehensive modules.
      </p>

      {modules.map((module, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="mb-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white overflow-hidden"
          >
            {/* Module Header */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center p-4 bg-gray-50"
            >
              <span className="font-semibold text-gray-800 text-left">
                {module.title}
              </span>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span>{module.lessons.length} Lessons</span>
                <span>
                  ~
                  {module.lessons.reduce(
                    (acc, l) => acc + parseInt(l.duration),
                    0
                  )}{" "}
                  Mins
                </span>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </button>

            {/* Lessons (Accordion Content) */}
            {isOpen && (
              <div className="px-4 pb-4 space-y-3">
                {module.lessons.map((lesson, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-gray-700 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      {lesson.preview ? (
                        <Play size={16} className="text-blue-600" />
                      ) : lesson.locked ? (
                        <Lock size={16} className="text-gray-400" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                      )}
                      <span className="hover:text-blue-600 cursor-pointer">
                        {lesson.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      {lesson.preview && (
                        <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-md">
                          Preview
                        </span>
                      )}
                      <span className="text-sm text-gray-500">
                        {lesson.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Curriculum;
