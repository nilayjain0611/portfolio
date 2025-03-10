import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ title, desc, image, techStack, sourceCode }) {
  return (
    <div  className="bg-transparent border border-[var(--light_gray)] rounded-2xl overflow-hidden shadow-md hover:shadow-[5px_5px_0px_0px_#1a1a1a,_7px_7px_0px_0px_var(--highlight)] transition-shadow duration-300 p-5 flex flex-col justify-between gap-6  group">
      {/* Card Image */}
      <div className="w-full h-45 relative transition-all duration-300">
        <Image src={image} alt={title}  className="rounded-lg" objectFit="cover" fill   />
      </div>

      <div className=" flex flex-col gap-2 justify-self-start">
        <h3 className="text-sm font-medium text-[var(--light_gray)] group-hover:text-white transition-all duration-300 ">{title}</h3>
        <p className="text-[var(--light_gray)] text-xs font-light mb-2">{desc}</p>

        <div className="flex flex-wrap gap-2 font-light ">
          {techStack.map((tech, index) => (
            <span key={index} className="px-2 py-0.5 bg-[var(--light_gray)] text-[var(--background)] text-xs rounded-sm h-5">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="w-28">
        
        <Link 
            href={sourceCode} 
            target="_blank" 
            className=" flex items-center justify-center gap-1 text-[var(--background)] bg-[var(--light_gray)] text-sm font-light py-1 px-4 rounded-lg group-hover:text-[var(--background)] group-hover:bg-[var(--highlight)] "
            >
                <Image src="/githubDark.svg" width={20} height={20} alt="GitHub"  className="group-hover:fill-[var(--highlight)]"/>
            <span>source</span>
        </Link>

        </div>
    </div>
  );
}
