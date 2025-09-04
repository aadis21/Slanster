// Slanster/src/components/DlansterDashboard/cvBuilder/SettingsComponents/SettingMain.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";

import SetEmpty from "../UI Component/SetEmpty";
import SetSample from "../UI Component/SetSample";
import TemplateSwitcher from "../UI Component/TemplateSwitcher";

const SettingMain: React.FC = () => {
  return (
    <AnimatePresence>
      <motion.div layout className="cardStyle">
        <h1 className="text-2xl font-bold">Resume Builder</h1>

        <div className="flex flex-col mt-4">
          {/* If you want to re-enable sample/empty templates */}
          {/* <div className="flex space-x-2">
            <SetEmpty />
            <SetSample />
          </div> */}

          {/* Divider */}
          {/* <motion.div
            layout
            className="w-44 h-1 mx-auto mt-2 bg-gray-200 rounded-full"
          /> */}

          <div className="mt-5">
            <h1 className="text-xl font-bold">Templates</h1>
            <div className="flex flex-row space-x-4 mt-2">
              <TemplateSwitcher value={1} />
              <TemplateSwitcher value={2} />
              <TemplateSwitcher value={3} />
              <TemplateSwitcher value={4} />
              {/* <TemplateSwitcher value={5} /> */}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SettingMain;
