"use client";

import { BsZoomIn, BsZoomOut } from "react-icons/bs";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { useContext } from "react";
import { CvContext } from "./hooks/CvContext";

// Define context type (adjust according to your CvContext value)
interface CvContextType {
  scaleUp: () => void;
  scaleDown: () => void;
  ifScaleUpOrDown: () => void;
}

const PageButtons: React.FC = () => {
  const { scaleUp, scaleDown, ifScaleUpOrDown } = useContext(
    CvContext
  ) as CvContextType;

  return (
    <div className="z-10 relative md:bottom-9 text-neutral-500 flex items-center w-fit md:left-[26.5rem] md:right-0 mx-auto text-center backdrop-blur-2xl bg-white/50 border border-black/10 px-5 py-3 space-x-5 transition-all rounded-full md:absolute">
      <button className="buttonHover" onClick={scaleUp}>
        <BsZoomIn className="h-8 w-8" />
      </button>
      <button className="buttonHover" onClick={scaleDown}>
        <BsZoomOut className="h-8 w-8" />
      </button>
      <button className="buttonHover" onClick={ifScaleUpOrDown}>
        <IoCloudDownloadOutline className="h-8 w-8" />
      </button>
    </div>
  );
};

export default PageButtons;
