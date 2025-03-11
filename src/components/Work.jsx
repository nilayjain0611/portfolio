import React from "react";

const workExperience = [
  {
    company: "Neurolov.ai",
    role: "Community Management Intern",
    date: "Nov 2024 - Present",
    image: "/logo/nlov.jpg", // Add your image path here
  },
  {
    company: "TARS Technologies",
    role: "Web Designer and Developer",
    date: "Jun 2024 - Oct 2024",
    image: "/logo/TARS.png", // Add your image path here
  },
  {
    company: "Little Jewels Kindergarten",
    role: "Web Designer and Developer",
    date: "Jun 2023 - Dec 2023",
    image: "/logo/lj.png", // Add your image path here
  },
  
];


const Work = () => {
  return (
    <div className="relative w-full pt-7 pb-4 pr-3 grid grid-cols-1">
      {/* Timeline Vertical Line (Positioned 60px from Left) */}
      <div className="absolute left-[40px] top-0 h-full w-[1px] bg-[var(--highlight)]"></div>

      {workExperience.map((work, index) => (
        <div key={index} className="relative left-[10px] flex items-stretch gap-6 space-y-10">
          {/* Circular Image (Timeline Bullet) */}
          <div className=" w-[60px] h-[60px] shrink-0  rounded-full border-[1px] border-[var(--highlight)] overflow-hidden bg-white flex items-center justify-center p-1">
            <img
              src={work.image}
              alt={work.company}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Work Details (Right Side of the Timeline) */}
          <div className="text-left ">
            <p className="text-[var(--light_gray)] text-xs font-light leading-5">{work.date}</p>
            <h3 className="text-sm font-medium text-[#ffffff] leading-5">{work.company}</h3>
            <p className="text-[var(--light_gray)] text-sm font-light leading-5">{work.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
