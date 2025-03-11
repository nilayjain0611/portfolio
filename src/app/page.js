'use client'
import { useState } from "react";
import SplashScreen from "@/components/SplashScreen";
import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/Projects";
import Skills from "@/components/Skills";
import ScaleIn from "@/components/motion/ScaleIn";
import StaggerContainer from "@/components/motion/StaggerContainer";

export default function Home() {
  const [showContent, setShowContent] = useState(false);


  return (
    <>
      {!showContent && <SplashScreen onFinish={() => setShowContent(true)} />}
      {showContent && (
        <ScaleIn>
          <StaggerContainer>
            <div className="relative flex flex-col items-center gap-y-15 pb-2 mx-auto pt-20 md:pt-0">
              <Navbar />
              <HeroSection />
              <Experience />
              <Achievements />
              <Skills />
              <ProjectsSection />
              <Footer />
            </div>
           </StaggerContainer>
         </ScaleIn>
      )}
    </>
  );
}
