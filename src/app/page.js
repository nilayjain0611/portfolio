import Achievements from "@/components/Achievements";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="realtive flex flex-col items-center gap-y-15 pb-15  mx-auto pt-20 md:pt-0  ">
        <Navbar />
        <HeroSection />
        <Experience />
        <Achievements />
        <Skills />
        <ProjectsSection />
    </div>
    </>
  );
}
