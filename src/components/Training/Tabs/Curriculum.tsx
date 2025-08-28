import React, { useState } from "react";
import { ChevronDown, ChevronUp, Lock, Check } from "lucide-react";

interface Lesson {
  title: string;
  duration: string;
  preview?: boolean;
  completed?: boolean;
  locked?: boolean;
}

interface Section {
  title: string;
  lessons: Lesson[];
}

const Curriculum: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const sections: Section[] = [
    {
      title: "Lessons With Video Content",
      lessons: [
        {
          title: "Lessons with video content",
          duration: "12:30",
          preview: true,
          completed: true,
        },
        {
          title: "Lessons with video content",
          duration: "10:05",
          preview: true,
          completed: true,
        },
        {
          title: "Lessons with video content",
          duration: "2:25",
          preview: true,
          locked: true,
        },
      ],
    },
    {
      title: "Lessons With Video Content",
      lessons: Array.from({ length: 5 }, () => ({
        title: "Lesson",
        duration: "45:00",
      })),
    },
    {
      title: "Lessons With Video Content",
      lessons: Array.from({ length: 5 }, () => ({
        title: "Lesson",
        duration: "45:00",
      })),
    },
    {
      title: "Lessons With Video Content",
      lessons: Array.from({ length: 5 }, () => ({
        title: "Lesson",
        duration: "45:00",
      })),
    },
  ];

  return (
    <div className="font-inter max-w-2xl mx-auto">
      <p className="text-gray-600 mb-6 leading-relaxed">
        LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This
        is one of the best WordPress LMS Plugins which can be used to easily
        create & sell courses online.
      </p>

      {sections.map((section, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="mb-4 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* Section Header */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center p-4 rounded-2xl"
            >
              <span className="font-semibold text-gray-800">
                {section.title}
              </span>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <span>{section.lessons.length} Lessons</span>
                <span>45 Mins</span>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </button>

            {/* Lessons (Accordion Content) */}
            {isOpen && (
              <div className="bg-white px-4 pb-4 space-y-3 rounded-b-2xl">
                {section.lessons.map((lesson, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-gray-700 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-all"
                  >
                    <span className="hover:text-blue-600 cursor-pointer">
                      {lesson.title}
                    </span>
                    <div className="flex items-center gap-3">
                      {lesson.preview && (
                        <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                          Preview
                        </button>
                      )}
                      <span className="text-sm">{lesson.duration}</span>
                      {lesson.completed && (
                        <Check size={16} className="text-green-600" />
                      )}
                      {lesson.locked && (
                        <Lock size={16} className="text-gray-500" />
                      )}
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
