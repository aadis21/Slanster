"use client";

import React, { useContext } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
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
import { CvContext } from "./hooks/CvContext";
import { websiteLinkCreator, resolvedWebsiteLink } from "./utils/link.utils";

// Define the types for CV data
interface Project {
  title: string;
  link?: string;
  summary?: string;
}

interface Experience {
  title: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
}

interface CV {
  displayImage?: boolean;
  image?: string;
  name?: string;
  jobTitle?: string;
  location?: string;
  about?: string;

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

  toolsAndTechSkills?: string[];
  industryKnowledge?: string[];
  languages?: string[];
  projects?: Project[];
  experiences?: Experience[];
}

const CV5: React.FC = () => {
  const items = "flex items-center mr-3 mt-[5px]";
  const itemsSVG = "h-3 w-3 text-gray-700 mr-1";
  const titles = "text-sm font-medium uppercase text-rose-400";
  const paragraphSize = "text-[0.57rem] mt-[3px] text-gray-700";
  const jobSize = "text-[0.68rem] text-gray-500";

  const cv = useContext(CvContext) as { cv: CV };

  return (
    <div className="w-full h-full" id="cv">
      {[cv.cv].map((item, index) => (
        <div key={index}>
          <section id="header">
            {/* HEADER START */}
            <div className="flex items-center">
              {item.displayImage ? (
                <div className="mr-4 flex w-[30%]">
                  <Image
                    src={item.image || "/login_bg.png"}
                    alt="profilePicture"
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                </div>
              ) : null}

              <div className="space-y-[3px]">
                <h1 className="text-xl font-semibold">{item.name}</h1>
                <h4 className="text-gray-400 text-[0.7rem] font-medium">
                  {item.jobTitle}
                  {item.location ? " - " : null}
                  {item.location}
                </h4>
                {item.about ? <p className={paragraphSize}>{item.about}</p> : null}
              </div>
            </div>

            <div className="flex flex-wrap text-[0.65rem] mt-[0.2rem] items-center align-middle">
              {item.email && item.displayMail && (
                <div className={items}>
                  <HiOutlineMail className={itemsSVG} />
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </div>
              )}

              {item.website && item.displayWebSite && (
                <div className={items}>
                  <HiOutlineLink className={itemsSVG} />
                  <a
                    href={websiteLinkCreator(item.website)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {resolvedWebsiteLink(websiteLinkCreator(item.website))}
                  </a>
                </div>
              )}

              {item.github && item.displayGithub && (
                <div className={items}>
                  <AiFillGithub className={itemsSVG} />
                  <a
                    href={`https://github.com/${item.github}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.github}
                  </a>
                </div>
              )}

              {item.twitter && item.displayTwitter && (
                <div className={items}>
                  <TbBrandTwitter className={itemsSVG} />
                  <a
                    href={`https://twitter.com/${item.twitter}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.twitter}
                  </a>
                </div>
              )}

              {item.linkedIn && item.displayLinkedIn && (
                <div className={items}>
                  <AiOutlineLinkedin className={itemsSVG} />
                  <a
                    href={`https://www.linkedin.com/in/${item.linkedIn}/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.linkedIn}
                  </a>
                </div>
              )}

              {item.instagram && item.displayInstagram && (
                <div className={items}>
                  <AiOutlineInstagram className={itemsSVG} />
                  <a
                    href={`https://www.instagram.com/${item.instagram}/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.instagram}
                  </a>
                </div>
              )}

              {item.facebook && item.displayFacebook && (
                <div className={items}>
                  <AiOutlineFacebook className={itemsSVG} />
                  <a
                    href={`https://www.facebook.com/${item.facebook}/`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.facebook}
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* Skills, Projects, and Experience sections are commented out in your original code */}
        </div>
      ))}
    </div>
  );
};

export default CV5;
