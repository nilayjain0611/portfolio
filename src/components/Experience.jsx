'use client';

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Education from "./Education";
import Work from "./Work.jsx";
import FadeIn from "./motion/FadeIn";


const Experience = () => {
  const [activeSection, setActiveSection] = useState("work");

  return (
    <FadeIn>
    <section id="experience" className="mx-10 md:w-178 max-w-178 space-y-10 scroll-mt-20">
      <h1 className="text-[var(--light_gray)] text-2xl font-semibold">
        experience<span className="text-[var(--highlight)]"> .</span>
      </h1>

      <div className="bg-[var(--background)]  w-full  relative">
        {/* Toggle Buttons */}
        <div className="grid grid-cols-2 items-center mb-5 w-full   p-[3px] bg-[var(--light_gray)] rounded-lg ">
          
          <button
            onClick={() => setActiveSection("work")}
            className={`py-[6px] rounded-lg transition-all text-lg  font-light ${
              activeSection === "work" ? "bg-[var(--background)] text-white" : "bg-transparent"
            }`}
          >
            work
          </button>

          <button
            onClick={() => setActiveSection("education")}
            className={` py-[6px] rounded-lg transition-all text-lg font-light ${
              activeSection === "education" ? "bg-[var(--background)] text-white" : "bg-transparent"
            }`}
          >
            education
          </button>
        </div>

        {/* Content Sections */}
        <div className="relative border border-[var(--light_gray)] rounded-xl px-5">
          <AnimatePresence mode="wait">
            {activeSection === "education" ? (
              <motion.div
                key="education"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Education />
              </motion.div>
            ) : (
              <motion.div
                key="work"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Work />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
    </FadeIn>
  );
};

export default Experience;
