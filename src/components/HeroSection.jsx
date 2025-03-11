// HeroSection.jsx
'use client';
import Image from "next/image";
import Link from 'next/link';
import "../app/globals.css";
import FadeIn from "./motion/FadeIn";


export default function HeroSection() {
  return (
    <FadeIn>
      <section id='home' className="scroll-mt-30  max-w-178 mx-10 mt-30 ">
        <div className="md:grid rounded-[10px] max-w-178 md:grid-flow-row-dense md:grid-cols-5 md:grid-rows-6 md:gap-5    md:grid-flow-auto flex flex-col items-stretch gap-6 ">
          <div className="p-10 row-span-6 bg-[var(--card_color)] col-span-3 space-y-5  rounded-[10px] border border-[var(--light_gray)] text-[var(--light_gray)] flex flex-col justify-between gap-6  ">
            <h1 className="text-white text-5xl/[64px]  font-semibold m-0">Nilay Manekar</h1>
            <div className="space-y-0.5 ">  
              <h3 className="text-[var(--light_gray)] text-[20px] font-light">Full stack developer</h3>
              <h3 className="text-[var(--light_gray)]  text-[20px] font-light ">Web3 enthusiast</h3>
              <div className="location flex items-center gap-2 ">
                <Image src="icons/location.svg" alt="Logo" width={22} height={22} priority={true} style={{ width: "auto", height: "auto" }} />
                <h3 className="text-[var(--light_gray)]  text-[20px] font-light ">Nagpur, India</h3>
              </div>
            </div>
            <div className="socials flex justify-between items-center font-light">
              <Link className="resume px-5 py-1 bg-transparent border border-[#FF861A]  rounded-md hover:bg-[#FF861A] hover:text-[var(--background)] transform transition-all duration-300" href="/CV.pdf" download >
                  resume
              </Link>

              <div className="social-links flex justify-between items-center gap-5">
                <Link href="https://linkedin.com/in/nilayjain0611" target="_blank">
                  <Image src="/icons/linkedin.svg" alt="Logo" width={30} height={30} />
                </Link>
                <Link href="https://github.com/nilayjain0611" target="_blank">
                  <Image src="/icons/Github.svg" alt="Logo" width={30} height={30} />
                </Link>
                <Link href="https://x.com/nilayjain__" target="_blank">
                  <Image src="/icons/X.svg" alt="Logo" width={30} height={30} />
                </Link>

              </div>
            </div>
            
          </div>
          <div className="row-span-4 w-full col-span-2 bg-[var(--card_color)] rounded-[10px] border border-[var(--light_gray)]    text-[var(--light_gray)] hover:shadow-[5px_5px_0px_0px_#1a1a1a,_7px_7px_0px_0px_var(--highlight)] ">
                <Image src="/icons/Hero.png" alt="Logo" width={250} height={255} className="mx-auto"/>
          </div>
          <div className="group font-light text-sm row-span-2 col-span-2 bg-[var(--card_color)] rounded-[10px] border border-[var(--light_gray)] text-[var(--light_gray)] hover:shadow-[5px_5px_0px_0px_#1a1a1a,_7px_7px_0px_0px_var(--highlight)]">
          <p className="p-4">
            hey 
            <span className="inline-block transition-transform duration-300 
                wave group-hover:scale origin-bottom group-hover:scale-125
              text-[var(--highlight)]">
              👋
            </span>
            , I am nilay, obsessed with details, i build with &nbsp;
            <span className="text-[var(--highlight)] inline-block font-medium">python&nbsp;</span> 
            & 
            <span className="text-[var(--highlight)] inline-block font-medium">&nbsp;react&nbsp;</span>
            . <br /> 
            <span className="text-[var(--highlight)] inline-block font-medium">web3&nbsp;</span> 
            makes me curious. &nbsp;
            🤯
          </p>
        </div>
        </div>

      </section>
    </FadeIn>
  
  );
}


// p-10 row-span-6 bg-[var(--card_color)] col-span-3 space-y-5  rounded-[10px] border border-[var(--light_gray)] text-[var(--light_gray)] flex flex-col justify-between gap-6