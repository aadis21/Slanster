"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";

interface TechnologiesProps {
  name: string;
  tech: {
    title: string;
    image: string;
  }[];
}

const TechnologiesData: TechnologiesProps[] = [
  {
    name: "Backend Development",
    tech: [
      {
        title: "Flask",
        image: "/success/backend/1.png",
      },
      {
        title: "GoLang",
        image: "/success/backend/2.png",
      },
      {
        title: "Java",
        image: "/success/backend/3.png",
      },
      {
        title: ".Net Core",
        image: "/success/backend/4.png",
      },
      {
        title: ".Net",
        image: "/success/backend/5.png",
      },
      {
        title: "NodeJS",
        image: "/success/backend/6.png",
      },
      {
        title: "PhP",
        image: "/success/backend/7.png",
      },
      {
        title: "Python",
        image: "/success/backend/8.png",
      },
      {
        title: "Ruby on Rails",
        image: "/success/backend/9.png",
      },
      {
        title: "Spring Boot",
        image: "/success/backend/10.png",
      },
    ],
  },
  {
    name: "Cloud Computing",
    tech: [
      {
        title: "Alibaba Cloud",
        image: "/success/cloud/1.png",
      },
      {
        title: "Amazon Web Services",
        image: "/success/cloud/2.png",
      },
      {
        title: "Digital Ocean",
        image: "/success/cloud/3.png",
      },
      {
        title: "Google Cloud Platform",
        image: "/success/cloud/4.png",
      },
      {
        title: "Heroku",
        image: "/success/cloud/5.png",
      },
      {
        title: "IBM Cloud",
        image: "/success/cloud/6.png",
      },
      {
        title: "Microsoft Azure",
        image: "/success/cloud/7.png",
      },
      {
        title: "Netlify",
        image: "/success/cloud/8.png",
      },
      {
        title: "Oracle Cloud",
        image: "/success/cloud/9.png",
      },
      {
        title: "Vercel",
        image: "/success/cloud/10.png",
      },
    ],
  },
  {
    name: "Database Management",
    tech: [
      {
        title: "Cassandra",
        image: "/success/database/1.png",
      },
      {
        title: "Firebase Realtime Database",
        image: "/success/database/2.png",
      },
      {
        title: "MangoDB",
        image: "/success/database/3.png",
      },
      {
        title: "MariaDB",
        image: "/success/database/4.png",
      },
      {
        title: "Microsoft SQL Server",
        image: "/success/database/5.png",
      },
      {
        title: "Mysql Logo",
        image: "/success/database/6.png",
      },
      {
        title: "Oracle Database",
        image: "/success/database/7.png",
      },
      {
        title: "PostgreSQL",
        image: "/success/database/8.png",
      },
      {
        title: "Redis",
        image: "/success/database/9.png",
      },
      {
        title: "SQLite",
        image: "/success/database/10.png",
      },
    ],
  },
  {
    name: "DevOps & Automation",
    tech: [
      {
        title: "Ansible",
        image: "/success/devops/1.png",
      },
      {
        title: "Apache Mesos",
        image: "/success/devops/2.png",
      },
      {
        title: "Azure DevOps",
        image: "/success/devops/3.png",
      },
      {
        title: "CI/CD Pipelines",
        image: "/success/devops/4.png",
      },
      {
        title: "Docker Logo",
        image: "/success/devops/5.png",
      },
      {
        title: "Jenkins",
        image: "/success/devops/6.png",
      },
      {
        title: "Kubernets",
        image: "/assets/home/devops/7.png",
      },
      {
        title: "Openshift",
        image: "/success/devops/8.png",
      },
      {
        title: "Packer",
        image: "/success/devops/9.png",
      },
      {
        title: "Puppet",
        image: "/success/devops/10.png",
      },
    ],
  },
  {
    name: "Frontend Development",
    tech: [
      {
        title: "Angular",
        image: "/success/frontend/1.png",
      },
      {
        title: "CSS",
        image: "/success/frontend/2.png",
      },
      {
        title: "Gatsby",
        image: "/success/frontend/3.png",
      },
      {
        title: "JavaScript",
        image: "/success/frontend/4.png",
      },
      {
        title: "Meteor",
        image: "/success/frontend/5.png",
      },
      {
        title: "Next JS",
        image: "/success/frontend/6.png",
      },
      {
        title: "HTML",
        image: "/success/frontend/7.png",
      },
      {
        title: "Ember",
        image: "/success/frontend/8.png",
      },
      {
        title: "ReactJs",
        image: "/success/frontend/9.png",
      },
      {
        title: "ViewJs",
        image: "/success/frontend/10.png",
      },
    ],
  },
  {
    name: "Mobile App Development",
    tech: [
      {
        title: "Android",
        image: "/assets/home/frontend/1.png",
      },
      {
        title: "Cordova",
        image: "/success/frontend/2.png",
      },
      {
        title: "Flutter",
        image: "/success/frontend/3.png",
      },
      {
        title: "Ionic",
        image: "/success/frontend/4.png",
      },
      {
        title: "IOS",
        image: "/success/frontend/5.png",
      },
      {
        title: "NativeScript",
        image: "/success/frontend/6.png",
      },
      {
        title: "Phonegap",
        image: "/success/frontend/7.png",
      },
      {
        title: "PWA",
        image: "/success/frontend/8.png",
      },
      {
        title: "React Native",
        image: "/success/frontend/9.png",
      },
      {
        title: "Xamarin",
        image: "/success/frontend/10.png",
      },
    ],
  },
];

const inter = Inter({ subsets: ["latin"] });

function Success() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <section className="relative bg-white text-gray-900 px-6 md:px-10 py-16">
      <header className="text-center">
        <div className="md:max-w-5xl mx-auto">
          <h2
            className={`${inter.className} text-3xl md:text-4xl font-medium leading-[44px] text-[#1E2631] max-w-3xl mx-auto`}
          >
            Driving Success With Next-Gen Technologies
          </h2>
        </div>
      </header>

      <div className="flex md:flex-row flex-col gap-10 xl:gap-12 items-center justify-center mt-12 max-w-6xl mx-auto">
        {/* Sidebar Selection */}
        <div className="md:w-1/3 w-full">
          <ul className="w-full rounded-lg gap-3 grid grid-cols-2 md:grid-cols-1">
            {TechnologiesData.map((data, index) => (
              <li
                key={index}
                onClick={() => setSelected(index)}
                className={`px-5 py-4 flex flex-row justify-between items-center cursor-pointer rounded-lg transition-all duration-300 ${
                  selected === index
                    ? "bg-blue-600 text-white font-semibold shadow-md"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <p className="capitalize">{data.name}</p>
                {selected === index && (
                  <FaChevronRight className="ml-1 text-xs hidden md:block" />
                )}
                {selected === index && (
                  <FaChevronDown className="ml-1 text-xs block md:hidden" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Animated Technology Section */}
        <div className="md:w-2/3 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
            >
              {TechnologiesData[selected].tech.map((data, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className="flex flex-col items-center bg-gray-50 text-gray-900 w-full h-full p-5 md:py-6 rounded-lg shadow-md"
                >
                  <Image
                    src={data.image}
                    alt={data.title}
                    width={100}
                    height={100}
                    priority
                    loading="eager"
                    className="h-16 w-16 rounded-md object-contain"
                  />
                  <p className="text-xs text-center mt-4">{data.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Success;
