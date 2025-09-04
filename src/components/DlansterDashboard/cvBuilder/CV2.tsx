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
const CV2: React.FC = () => {
  const items = "flex items-center mr-3 mt-[5px]";
  const itemsSVG = "h-3 w-3 text-gray-700 mr-1";
  const titles = "text-sm font-medium uppercase text-[0.7rem]";
  const paragraphSize = "text-[0.650rem] mt-[3px] text-gray-700";
  const jobSize = "text-[0.68rem] text-gray-500";

  const context = useContext(CvContext);

  if (!context) {
    throw new Error("CV2 must be used within a CvContext.Provider");
  }

  const { cv } = context;

  // Custom components for ReactMarkdown with styling
  const aboutMarkdownComponents = {
    p: ({ children }: any) => <p className="text-[0.690rem] mt-1 text-gray-700">{children}</p>,
    ul: ({ children }: any) => <ul className="text-[0.690rem] mt-1 text-gray-700 list-disc pl-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="text-[0.690rem] mt-1 text-gray-700 list-decimal pl-4">{children}</ol>,
    li: ({ children }: any) => <li className="mb-1">{children}</li>,
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  };

  const experienceMarkdownComponents = {
    p: ({ children }: any) => <p className="myList text-[0.65rem] mb-2 mt-2 text-gray-700">{children}</p>,
    ul: ({ children }: any) => <ul className="myList text-[0.65rem] mb-2 mt-2 text-gray-700 list-disc pl-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="myList text-[0.65rem] mb-2 mt-2 text-gray-700 list-decimal pl-4">{children}</ol>,
    li: ({ children }: any) => <li className="mb-1">{children}</li>,
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  };

  return (
    <div className="w-full h-full flex" id="cv">
      {/* LEFT PANEL */}
      <div className="relative pr-3 flex flex-col mr-2 h-full w-[32%]">
        <div>
          {/* NAME + TITLE */}
          <div className="space-y-1">
            <h1 className="text-3xl font-semibold w-10/12">{cv.name}</h1>
            <h4 className="text-gray-400 text-[0.68rem] font-medium">
              {cv.jobTitle}
            </h4>
            <h4 className="text-gray-400 text-[0.68rem] font-medium">
              {cv.location}
            </h4>
          </div>

          {/* SOCIAL */}
          <section id="social" className="mt-3">
            <div className="flex flex-col flex-wrap text-[0.62rem]">
              {cv.email && cv.displayMail && (
                <div className={items}>
                  <HiOutlineMail className={itemsSVG} />
                  <a href={`mailto:${cv.email}`} className="z-10 bg-white">
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
                    className="z-10 bg-white"
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
          <section id="skills_and_projects" className="flex mt-2">
            <section id="skills">
              <div className="mt-1">
                <h4 className="text-[0.7rem]">{cv.skillTitle1}</h4>
                <p className={paragraphSize}>
                  {cv.toolsAndTechSkills?.join(", ")}
                </p>
              </div>

              <div className="mt-2">
                <h4 className="text-[0.7rem]">{cv.skillTitle2}</h4>
                <p className={paragraphSize}>
                  {cv.industryKnowledge?.join(", ")}
                </p>
              </div>

              <div className="mt-2">
                <h4 className="text-[0.7rem]">{cv.skillTitle3}</h4>
                <p className={paragraphSize}>{cv.languages?.join(", ")}</p>
              </div>
            </section>
          </section>

          {/* EDUCATION */}
          <section id="education" className="mt-3">
            <h4 className="text-[0.8rem] mb-1">Education</h4>
            {cv.education?.map((edu, i) => (
              <div key={i}>
                <h4 className="text-[0.7rem] mt-1 font-medium">{edu.title}</h4>
                <p className="text-[0.62rem] mt-1 text-gray-600">
                  {edu.school}
                </p>
                <p className="text-[0.62rem] text-gray-500">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="relative flex-1 h-full pl-6 ml-2">
        <div>
          {/* ABOUT */}
          {cv.about && (
            <section id="about">
              <div className="relative">
                {cv.displayImage && (
                  <div className="mr-2 flex float-left">
                    <Image
                      src={cv.image || "/login_bg.png"}
                      alt="profilePicture"
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                  </div>
                )}
                <article>
                  <h1 className="inline">About Me</h1>
                  <ReactMarkdown components={aboutMarkdownComponents}>
                    {cv.about}
                  </ReactMarkdown>
                </article>
              </div>
            </section>
          )}

          {/* EXPERIENCE */}
          <section className="mt-3 relative">
            <h3 className={titles}>Experience</h3>
            <div className="absolute -left-[29px] top-[7px]">
              <div className="absolute rounded-sm rotate-45 h-2 w-2 ring-4 ring-white bg-black" />
              <div className="absolute rounded-sm h-2 w-2 bg-black" />
            </div>

            {cv.experiences?.map((experience, i) => (
              <div className="relative" key={i}>
                <div className="absolute ring-4 ring-white -left-[24px] h-[93%] top-1 rounded-md px-[1px] bg-black" />
                <div className="flex mt-2 flex-col justify-between">
                  <h4 className="font-medium text-sm">{experience.title}</h4>
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
            <div className="absolute -left-[29px] top-[7px]">
              <div className="absolute rounded-sm rotate-45 h-3 w-3 ring-4 ring-white bg-black" />
              <div className="absolute rounded-sm h-3 w-3 bg-black" />
            </div>
            {cv.projects?.map((project, i) => (
              <div key={i} className="mt-2 relative">
                <div className="absolute border ring-4 ring-white border-black -left-[25px] h-[50px] top-1 rounded-md px-[1px] bg-white" />
                <h4 className="font-medium text-md">
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

export default CV2;