import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="realtive flex flex-col items-center gap-y-15 pt-5 max-w-180mx-auto  ">
        <Navbar />
        <HeroSection />

    </div>
  );
}
