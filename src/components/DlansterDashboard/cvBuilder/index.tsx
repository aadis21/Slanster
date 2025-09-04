"use client";

import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { CvContext } from "./hooks/CvContext";
import { CVData, cvData, Education, Experience, Project } from "./data/cvData";
import { useReactToPrint } from "react-to-print";
import toast, { Toaster } from "react-hot-toast";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import CV from "./CV";
import CV2 from "./CV2";
import CV3 from "./CV3";
import CV4 from "./CV4";
import CV5 from "./CV5";
import Settings from "./Settings";
import PageButtons from "./PageButtons";

import {
  FILE_NOT_SELECTED,
  FILE_READ_ERROR,
  UNSUPPORTED_FILE_TYPE,
} from "./constants/message-result.constants";

import LS from "./utils/browser.utils";
// import { BASE_URL } from "../../Api/api";

// Unified Types - making sure all components use the same interface

export default function CVBuilder() {
  const [cv, setCv] = useState<CVData>(() => {
    // Convert cvData to match CVData interface
    const convertedCvData: CVData = {
      ...cvData,
      // Ensure all required fields are present
      toolsAndTechSkills: cvData.toolsAndTechSkills || [],
      industryKnowledge: cvData.industryKnowledge || [],
      languages: cvData.languages || [],
      projects: cvData.projects || [],
      experiences: cvData.experiences?.map(exp => ({
        ...exp,
        startDate: typeof exp.startDate === 'string' ? exp.startDate : exp.startDate?.toString() || '',
        endDate: typeof exp.endDate === 'string' ? exp.endDate : exp.endDate?.toString() || '',
      })) || [],
      education: cvData.education?.map(edu => ({
        ...edu,
        startDate: edu.startDate || '',
        endDate: edu.endDate || '',
      })) || [],
    };
    return convertedCvData;
  });

  const [scale, setScale] = useState<number>(
    typeof window !== "undefined" && window.innerWidth <= 480 ? 0.5 : 1
  );
  const [template, setTemplate] = useState<string>("1");

  const componentRef = useRef<HTMLDivElement>(null);

  const setCV = () => {
    const convertedCvData: CVData = {
      ...cvData,
      toolsAndTechSkills: cvData.toolsAndTechSkills || [],
      industryKnowledge: cvData.industryKnowledge || [],
      languages: cvData.languages || [],
      projects: cvData.projects || [],
      experiences: cvData.experiences?.map(exp => ({
        ...exp,
        startDate: typeof exp.startDate === 'string' ? exp.startDate : exp.startDate?.toString() || '',
        endDate: typeof exp.endDate === 'string' ? exp.endDate : exp.endDate?.toString() || '',
      })) || [],
      education: cvData.education?.map(edu => ({
        ...edu,
        startDate: edu.startDate || '',
        endDate: edu.endDate || '',
      })) || [],
    };
    setCv(convertedCvData);
    LS.set({ key: "cv", payload: convertedCvData });
  };

  const setEmptyCv = () => {
    const emptyCv: CVData = {
      name: "",
      image: "",
      jobTitle: "",
      location: "",
      email: "",
      linkedIn: "",
      twitter: "",
      github: "",
      website: "",
      about: "",
      toolsAndTechSkills: [],
      industryKnowledge: [],
      languages: [],
      skillTitle1: "",
      skillTitle2: "",
      skillTitle3: "",
      projects: [{ title: "", link: "", summary: "" }],
      education: [{ title: "", school: "", startDate: "", endDate: "" }],
      experiences: [{ title: "", company: "", startDate: "", endDate: "", summary: "", current: false }],
      displayImage: false,
      displayMail: false,
      displayWebSite: false,
      displayGithub: false,
      displayTwitter: false,
      displayLinkedIn: false,
      displayInstagram: false,
      displayFacebook: false,
      activeColor: "#5B21B6",
    };
    setCv(emptyCv);
    LS.set({ key: "cv", payload: emptyCv });
  };

  const selectTemplate = (templateId: number) => {
    setTemplate(templateId.toString());
  };

  const updateCv = (key: string, value: any) => {
    if (key === "name" && typeof value === "string" && value.length > 30) return;
    if ((key === "startDate" || key === "endDate") && value.toString().length > 4) return;

    const newCv = { ...cv, [key]: value };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const addTag = (e: React.KeyboardEvent<HTMLInputElement>, key: string, value: string) => {
    if (e.key === "Enter" && value.trim() !== "") {
      const currentArray = (cv as any)[key] as string[] || [];
      const arr = [...currentArray, value];
      const unique = arr.filter((item, index) => arr.indexOf(item) === index);
      const newCv = { ...cv, [key]: unique };
      setCv(newCv);
      LS.set({ key: "cv", payload: newCv });
      (e.target as HTMLInputElement).value = "";
    }

    if (e.key === "Backspace" && (e.target as HTMLInputElement).value === "") {
      const currentArray = (cv as any)[key] as string[] || [];
      const arr = currentArray.slice(0, -1);
      const newCv = { ...cv, [key]: arr };
      setCv(newCv);
      LS.set({ key: "cv", payload: newCv });
    }
  };

  const removeTag = (category: string, tag: string) => {
    const currentArray = (cv as any)[category] as string[] || [];
    const arr = currentArray.filter((item: string) => item !== tag);
    const newCv = { ...cv, [category]: arr };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const addExperience = (exp: Experience) => {
    const newCv = { ...cv, experiences: [...cv.experiences, exp] };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const addProject = (project: Project) => {
    const newCv = { ...cv, projects: [...cv.projects, project] };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const addEducation = (education: Education) => {
    const newCv = { ...cv, education: [...cv.education, education] };
    setCv(newCv);
    LS.set({ key: "cv", payload: newCv });
  };

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allowedFiles = ["image/png", "image/jpg", "image/jpeg"];
    const file = e.target.files?.[0];
    if (!file) {
      toast.error(FILE_NOT_SELECTED);
      throw new Error(FILE_NOT_SELECTED);
    }
    if (!allowedFiles.includes(file.type)) {
      toast.error(UNSUPPORTED_FILE_TYPE);
      throw new Error(UNSUPPORTED_FILE_TYPE);
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onerror = () => {
      toast.error(FILE_READ_ERROR);
      throw new Error(FILE_READ_ERROR);
    };
    reader.onload = (event) => {
      updateCv("image", event.target?.result || "");
    };
  };

  const scaleUp = () => {
    if (scale < 1.6) setScale(scale + 0.1);
  };

  const scaleDown = () => {
    if (scale > 0.4) setScale(scale - 0.1);
  };

  useEffect(() => {
    const cvLocal = LS.get("cv");
    if (cvLocal) {
      setCv((currentCv) => ({ ...currentCv, ...cvLocal }));
    }
  }, []);

  // const Savedata = async (componentRef: React.RefObject<HTMLDivElement>) => {
  //   if (!componentRef.current) return;

  //   const element = componentRef.current;
  //   const canvas = await html2canvas(element, { scale: 1 });
  //   const imgData = canvas.toDataURL("image/png", 0.7);

  //   const pdf = new jsPDF("p", "mm", "a4");
  //   const pdfWidth = pdf.internal.pageSize.getWidth();
  //   const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
  //   pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

  //   const pdfBlob = pdf.output("blob");

  //   const formData = new FormData();
  //   formData.append("resume", pdfBlob, `${cv.name}.pdf`);
  //   formData.append("name", cv.name);
  //   formData.append("email", cv.email);

  //   try {
  //     const response = await fetch(`${BASE_URL}/saveUserResume`, {
  //       method: "POST",
  //       body: formData, // do NOT set Content-Type manually
  //     });
  //     console.log("PDF uploaded successfully:", response);
  //   } catch (error) {
  //     console.error("Error uploading PDF:", error);
  //   }
  // };

  const handlePrint = useReactToPrint({
    contentRef: componentRef, // Updated from 'content' to 'contentRef'
    pageStyle:
      "body { transform-origin: top left; margin: auto; transform: scale(1); -webkit-print-color-adjust: exact !important; color-adjust: exact !important; print-color-adjust: exact !important; }",
    documentTitle: cv.name,
    // onAfterPrint: () => Savedata(componentRef),
  });

  const ifScaleUpOrDown = () => {
    if (scale > 1 || scale < 1) setScale(1);
    return setTimeout(() => {
      handlePrint();
    }, 100);
  };

  const templateSwitch = () => {
    switch (template) {
      case "1":
        return <CV3 />;
      case "2":
        return <CV />;
      case "3":
        return <CV2 />;
      case "4":
        return <CV4 />;
      case "5":
        return <CV5 />;
      default:
        return <CV3 />;
    }
  };

  return (
    <>
      <Toaster />
      <Head>
        <title>CV Builder</title>
        <meta
          name="Cv Builder"
          content="Beautifully designed cv builder where you can see the changes at the same time"
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <CvContext.Provider
        value={{
          cv,
          uploadImage,
          updateCv,
          addProject,
          addExperience,
          addTag,
          removeTag,
          setEmptyCv,
          setCV,
          scaleUp,
          scaleDown,
          ifScaleUpOrDown,
          selectTemplate,
          addEducation,
        }}
      >
        <main className="grid grid-cols-2 gap-10 md:w-auto w-full items-center md:relative md:items-stretch md:h-screen xsm:flex xsm:flex-col">
          <div className="justify-self-start flex align-middle h-[110vh] overflow-y-auto xsm:justify-self-center">
            <section className="settings rounded-2xl w-full overflow-auto">
              <Settings />
            </section>
            <div className="md:meshGradient xsm:hidden left-0 bg-slate-300 h-full w-full md:opacity-20 fixed md:absolute -z-10 md:h-screen"></div>
          </div>

          <div className="md:w-fit md:h-fit relative md:absolute md:left-[26.5rem] md:right-0 md:bottom-0 md:flex md:top-0 justify-self-start xsm:w-full xsm:right-20">
            <div>
              <section
                ref={componentRef}
                className="bg-white overflow-y-auto md:rounded-md transition-all p-8 h-[90vh] aspect-[3.9/5] md:aspect-[3.9/5] md:h-[90vh] xsm:pr-5 xsm:border lg:h-[100vh]"
                style={{
                  transform: `scale(${scale})`,
                }}
              >
                {templateSwitch()}
              </section>
            </div>
            <div className="absolute top-16 -left-[75%] -translate-x-[50%] xsm:left-[70%]">
              <PageButtons />
            </div>
          </div>
        </main>
      </CvContext.Provider>
    </>
  );
}