import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="realtive flex flex-col items-center gap-y-15 pb-15 max-w-180mx-auto  ">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
    </div>
    </>
  );
}
