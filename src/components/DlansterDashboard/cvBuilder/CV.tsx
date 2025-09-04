// CV.tsx
"use client";

import ReactMarkdown from "react-markdown";
import {
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineLink,
  HiOutlineCalendar,
  HiExternalLink,
} from "react-icons/hi";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { TbBrandTwitter } from "react-icons/tb";
import { useContext } from "react";
import { CvContext } from "./hooks/CvContext";
import { websiteLinkCreator, resolvedWebsiteLink } from "./utils/link.utils";

// Types for CV structure
interface Project {
  title: string;
  link: string;
  summary: string;
}

interface Experience {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  summary: string;
}

interface CvData {
  displayImage: boolean;
  image?: string;
  name: string;
  jobTitle: string;
  location?: string;
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
  about?: string;
  skillTitle1: string;
  skillTitle2: string;
  skillTitle3: string;
  toolsAndTechSkills: string[];
  industryKnowledge: string[];
  languages: string[];
  projects: Project[];
  experiences: Experience[];
}

const CV: React.FC = () => {
  const items = "flex items-center mr-3 mt-[5px] ";
  const itemsSVG = "h-3 w-3 text-gray-700 mr-1";
  const titles = "text-sm font-medium uppercase text-rose-400";
  const paragraphSize = "text-[0.680rem] mt-[3px] text-gray-700 ";
  const jobSize = "text-[0.68rem] text-gray-500 ";

  const context = useContext(CvContext);

  if (!context) {
    throw new Error("CV must be used within a CvContext.Provider");
  }

  const { cv } = context;

  // Custom components for ReactMarkdown with styling
  const markdownComponents = {
    p: ({ children }: any) => <p className={paragraphSize}>{children}</p>,
    ul: ({ children }: any) => <ul className="myList relative text-[0.605rem] mb-2 mt-2 text-gray-700 list-disc pl-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="myList relative text-[0.605rem] mb-2 mt-2 text-gray-700 list-decimal pl-4">{children}</ol>,
    li: ({ children }: any) => <li className="mb-1">{children}</li>,
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  };

  const experienceMarkdownComponents = {
    p: ({ children }: any) => <p className="myList relative text-[0.605rem] mb-2 mt-2 text-gray-700">{children}</p>,
    ul: ({ children }: any) => <ul className="myList relative text-[0.605rem] mb-2 mt-2 text-gray-700 list-disc pl-4">{children}</ul>,
    ol: ({ children }: any) => <ol className="myList relative text-[0.605rem] mb-2 mt-2 text-gray-700 list-decimal pl-4">{children}</ol>,
    li: ({ children }: any) => <li className="mb-1">{children}</li>,
    strong: ({ children }: any) => <strong className="font-semibold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  };

  return (
    <div className="w-full h-full" id="cv">
      <div>
        <section id="header">
          {/* HEADER START */}
          <div className="flex items-center">
            {cv.displayImage ? (
              <div className="mr-4 flex ">
                <img
                  src={cv.image || "/login_bg.png"}
                  className="rounded-full"
                  style={{
                    height: "60px",
                    width: "60px",
                    objectFit: "cover",
                  }}
                  alt="profilePicture"
                />
              </div>
            ) : null}

            <div className="space-y-[3px]">
              <h1 className="text-2xl font-semibold">{cv.name}</h1>
              <h4 className=" text-gray-400 text-sm font-medium">
                {cv.jobTitle}
                {cv.location ? " - " : null}
                {cv.location}
              </h4>
            </div>
          </div>
          <div className="flex flex-wrap text-xs mt-[0.2rem] items-center align-middle ">
            {cv.email && cv.displayMail ? (
              <div className={items}>
                <HiOutlineMail className={itemsSVG} />
                <a href={`mailto:${cv.email}`}>{cv.email}</a>
              </div>
            ) : null}
            {cv.website && cv.displayWebSite ? (
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
            ) : null}
            {cv.github && cv.displayGithub ? (
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
            ) : null}
            {cv.twitter && cv.displayTwitter ? (
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
            ) : null}
            {cv.linkedIn && cv.displayLinkedIn ? (
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
            ) : null}
            {cv.instagram && cv.displayInstagram ? (
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
            ) : null}
            {cv.facebook && cv.displayFacebook ? (
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
            ) : null}
          </div>
        </section>

        {cv.about ? (
          <section id="about">
            <div className="bg-gray-100/50 border p-1 rounded-lg mt-3">
              <ReactMarkdown components={markdownComponents}>
                {cv.about}
              </ReactMarkdown>
            </div>
          </section>
        ) : null}

        <section id="skills_and_projects" className="flex mt-3">
          {/* SKILLS START */}
          <section id="skills" className="w-1/2">
            <h3 className={titles}>Skills</h3>

            <div className="mt-1">
              <h4 className="font-medium text-sm">{cv.skillTitle1}</h4>
              <p className={paragraphSize}>
                {cv.toolsAndTechSkills?.join(", ")}
              </p>
            </div>

            <div className="mt-1">
              <h4 className="font-medium  text-sm">{cv.skillTitle2}</h4>
              <p className={paragraphSize}>
                {cv.industryKnowledge?.join(", ")}
              </p>
            </div>

            <div className="mt-1">
              <h4 className="font-medium text-sm">{cv.skillTitle3}</h4>
              <p className={paragraphSize}>{cv.languages?.join(", ")}</p>
            </div>
          </section>

          <section id="projects" className="w-1/2">
            <h3 className={titles}>Projects</h3>
            {cv.projects?.map((project, index) => (
              <div key={index} className="mt-1">
                <h4 className="font-medium text-sm">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.title}
                    {project.link ? (
                      <HiExternalLink className="ml-1 inline" />
                    ) : null}
                  </a>
                </h4>
                <p className={paragraphSize}>{project.summary}</p>
              </div>
            ))}
          </section>
        </section>

        <section className="mt-3">
          <h3 className={titles}>Experience</h3>
          {cv.experiences
            ?.map((experience, index) => (
              <div className="border-b-[1px] last:border-0" key={index}>
                <div className="flex mt-2 justify-between">
                  <h4 className="font-medium text-sm">
                    {experience.title}
                  </h4>
                  <span className="flex items-center space-x-1">
                    {experience.company ? (
                      <HiOutlineBriefcase className="inline" />
                    ) : null}
                    <p className={jobSize}>{experience.company}</p>
                  </span>
                  <span className="flex items-center space-x-1">
                    {experience.startDate || experience.endDate ? (
                      <HiOutlineCalendar className="inline" />
                    ) : null}
                    <p className={jobSize}>
                      {experience.startDate instanceof Date 
                        ? experience.startDate.toLocaleDateString() 
                        : experience.startDate}
                    </p>
                    {experience.endDate ? (
                      <span className={jobSize}> - </span>
                    ) : null}
                    <p className={jobSize}>
                      {experience.endDate instanceof Date 
                        ? experience.endDate.toLocaleDateString() 
                        : experience.endDate}
                    </p>
                  </span>
                </div>
                <ReactMarkdown components={experienceMarkdownComponents}>
                  {experience.summary}
                </ReactMarkdown>
              </div>
            ))
            .reverse()}
        </section>
      </div>
    </div>
  );
};

export default CV;