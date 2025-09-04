import { createContext } from "react";
import type { CVData, CVDataEmpty, Education, Experience, Project } from "../data/cvData";

// Define the type for context value
export interface CvContextType {
    // cvData: CVData;
    // cvDataEmpty: CVDataEmpty;
    setCvData?: (data: CVData) => void;
    setCvDataEmpty?: (data: CVDataEmpty) => void;
    scaleUp?: () => void;
    scaleDown?: () => void;
    ifScaleUpOrDown?: () => void;
    updateCv: (key: string, value: any) => void;
    cv: CVData;
    addTag?: (e: React.KeyboardEvent<HTMLInputElement>, key: string, value: string) => void;
    removeTag?: (category: string, tag: string) => void;
    selectTemplate?: (templateId: number) => void;
    addExperience?: (exp: Experience) => void;
    setEmptyCv?: () => void;
    setCV?: () => void;
    addProject?: (project: Project) => void;      // <-- ✅ add this
    addEducation?: (education: Education) => void; // <-- ✅ add this
    uploadImage?: (e: React.ChangeEvent<HTMLInputElement>) => void; // <-- ✅ add this
}

// Create context with undefined default
export const CvContext = createContext<CvContextType | undefined>(undefined);
