"use client";

import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import { HiOutlineMail, HiOutlineLink, HiExternalLink } from "react-icons/hi";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";

import { CvContext } from "./hooks/CvContext";
import { websiteLinkCreator, resolvedWebsiteLink } from "./utils/link.utils";

// ----------------- Types -----------------
interface Education {
  title: string;
  school: string;
  startDate: string;
  endDate: string;
}

interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  summary: string;
}

interface Project {
  title: string;
  link?: string;
  summary: string;
}

interface CVData {
  name: string;
  jobTitle: string;
  location: string;
  email?: string;
  displayMail?: boolean;
  website?: string;
  displayWebSite?: boolean;
  github?: string;
  displayGithub?: boolean;
  twitter?: string;
  displayTwitter?: boolean;
  linkedIn?: string;
  displayLinkedIn?: boolean;
  instagram?: string;
  displayInstagram?: boolean;
  facebook?: string;
  displayFacebook?: boolean;
  skillTitle1: string;
  toolsAndTechSkills: string[];
  skillTitle2: string;
  industryKnowledge: string[];
  skillTitle3: string;
  languages: string[];
  education: Education[];
  about?: string;
  displayImage?: boolean;
  image?: string;
  experiences: Experience[];
  projects: Project[];
}

// ----------------- Component -----------------
const CV3: React.FC = () => {
  const items = "flex items-center mr-3 mt-[5px]";
  const itemsSVG = "h-3 w-3 text-gray-700 mr-1";
  const titles = "text-sm font-medium uppercase text-[0.7rem]";
  const paragraphSize = "text-[0.680rem] mt-[3px] text-gray-700";
  const jobSize = "text-[0.68rem] text-gray-500";

  const context = useContext(CvContext);

  if (!context) {
    throw new Error("CV3 must be used within a CvContext.Provider");
  }

  const { cv } = context;

  // Custom components for ReactMarkdown with styling
  const aboutMarkdownComponents = {
    p: ({ children }: any) => <p className="myList text-[0.705rem] mt-1 text-gray-700">{children}</p>,
    ul: ({ children }: any) => <ul className="myList text-[0.705rem] mt-1 text-gray-700 list-disc pl-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="myList text-[0.705rem] mt-1 text-gray-700 list-decimal pl-4">{children}</ol>,
    li: ({ children }: any) => <li className="mb-1">{children}</li>,
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  };

  const experienceMarkdownComponents = {
    p: ({ children }: any) => <p className="myList text-[0.705rem] mb-2 mt-2 text-gray-700">{children}</p>,
    ul: ({ children }: any) => <ul className="myList text-[0.705rem] mb-2 mt-2 text-gray-700 list-disc pl-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="myList text-[0.705rem] mb-2 mt-2 text-gray-700 list-decimal pl-4">{children}</ol>,
    li: ({ children }: any) => <li className="mb-1">{children}</li>,
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  };

  return (
    <div className="w-full h-full flex" id="cv">
      {/* LEFT PANEL */}
      <div className="w-[30%] pr-4 flex flex-col mr-1 h-full">
        <div>
          {/* IMAGE */}
          {cv.displayImage && (
            <div className="mr-3 flex">
              <Image
                src={cv.image || "/login_bg.png"}
                alt="profilePicture"
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
          )}

          {/* SOCIAL */}
          <section id="social" className="mt-3">
            <div className="flex flex-col flex-wrap text-[0.68rem] mt-1">
              {cv.email && cv.displayMail && (
                <div className={items}>
                  <HiOutlineMail className={itemsSVG} />
                  <a
                    href={`mailto:${cv.email}`}
                    className="w-[70px] whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    {cv.email}
                  </a>
                </div>
              )}

              {cv.website && cv.displayWebSite && (
                <div className={items}>
                  <HiOutlineLink className={itemsSVG} />
                  <a
                    href={websiteLinkCreator(cv.website)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {resolvedWebsiteLink(websiteLinkCreator(cv.website))}
                  </a>
                </div>
              )}

              {cv.github && cv.displayGithub && (
                <div className={items}>
                  <AiFillGithub className={itemsSVG} />
                  <a
                    href={`https://github.com/${cv.github}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cv.github}
                  </a>
                </div>
              )}

              {cv.twitter && cv.displayTwitter && (
                <div className={items}>
                  <TbBrandTwitter className={itemsSVG} />
                  <a
                    href={`https://twitter.com/${cv.twitter}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cv.twitter}
                  </a>
                </div>
              )}

              {cv.linkedIn && cv.displayLinkedIn && (
                <div className={items}>
                  <AiOutlineLinkedin className={itemsSVG} />
                  <a
                    href={`https://www.linkedin.com/in/${cv.linkedIn}/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cv.linkedIn}
                  </a>
                </div>
              )}

              {cv.instagram && cv.displayInstagram && (
                <div className={items}>
                  <AiOutlineInstagram className={itemsSVG} />
                  <a
                    href={`https://www.instagram.com/${cv.instagram}/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cv.instagram}
                  </a>
                </div>
              )}

              {cv.facebook && cv.displayFacebook && (
                <div className={items}>
                  <AiOutlineFacebook className={itemsSVG} />
                  <a
                    href={`https://www.facebook.com/${cv.facebook}/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {cv.facebook}
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills_and_projects" className="flex mt-3">
            <section id="skills">
              <div className="mt-2">
                <h4 className="text-[0.74rem]">{cv.skillTitle1}</h4>
                <p className={paragraphSize}>
                  {cv.toolsAndTechSkills?.join(", ")}
                </p>
              </div>

              <div className="mt-3">
                <h4 className="text-[0.74rem]">{cv.skillTitle2}</h4>
                <p className={paragraphSize}>
                  {cv.industryKnowledge?.join(", ")}
                </p>
              </div>

              <div className="mt-3">
                <h4 className="text-[0.74rem]">{cv.skillTitle3}</h4>
                <p className={paragraphSize}>{cv.languages?.join(", ")}</p>
              </div>
            </section>
          </section>

          {/* EDUCATION */}
          <section id="education" className="mt-3">
            <h4 className="text-[0.74rem] mb-1">Education</h4>
            {cv.education?.map((edu, i) => (
              <div key={i}>
                <h4 className="text-[0.65rem] mt-1 font-medium">
                  {edu.title}
                </h4>
                <p className="text-[0.65rem] mt-1 text-gray-600">
                  {edu.school}
                </p>
                <p className="text-[0.705rem] text-gray-500">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="relative w-[70%] h-full">
        <div>
          {/* ABOUT */}
          <section id="about">
            <h1 className="text-xl font-semibold">{cv.name}</h1>
            <h4 className="text-gray-400 pb-1 text-sm font-medium">
              {cv.jobTitle}
              {cv.location ? " - " : null}
              {cv.location}
            </h4>
            {cv.about && (
              <ReactMarkdown components={aboutMarkdownComponents}>
                {cv.about}
              </ReactMarkdown>
            )}
          </section>

          {/* EXPERIENCE */}
          <section className="mt-8 relative">
            <h3 className={titles}>Experience</h3>
            {cv.experiences?.map((experience, i) => (
              <div className="relative" key={i}>
                <div className="flex mt-3 flex-col justify-between">
                  <h4 className="font-medium text-[0.75rem]">
                    {experience.title}
                  </h4>
                  <div className="flex items-center space-x-1">
                    <p className={jobSize}>{experience.company}</p>
                    <span className={jobSize}>|</span>
                    <span className="flex items-center space-x-1">
                      <p className={jobSize}>
                        {experience.startDate instanceof Date 
                          ? experience.startDate.toLocaleDateString() 
                          : experience.startDate}
                      </p>
                      {experience.endDate && (
                        <span className={jobSize}> - </span>
                      )}
                      <p className={jobSize}>
                        {experience.endDate instanceof Date 
                          ? experience.endDate.toLocaleDateString() 
                          : experience.endDate}
                      </p>
                    </span>
                  </div>
                </div>
                <ReactMarkdown components={experienceMarkdownComponents}>
                  {experience.summary}
                </ReactMarkdown>
              </div>
            ))}
          </section>

          {/* PROJECTS */}
          <section id="projects" className="relative">
            <h3 className={titles}>Projects</h3>
            {cv.projects?.map((project, i) => (
              <div key={i} className="mt-2 relative">
                <h4 className="font-medium text-sm">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.title}
                    {project.link && (
                      <HiExternalLink className="ml-1 inline" />
                    )}
                  </a>
                </h4>
                <p className={paragraphSize}>{project.summary}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CV3;