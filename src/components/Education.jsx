import React from "react";

const education = [

  {
    clgname: "SB Jain Institute of Technology, Management and Research, Nagpur",
    date: "2021 - 2025",
    stream: "BTech - CSE",
    image: "/logo/sbjain.jpg",
  },
  {
    clgname: "GH Raisoni Vidhya Niketan",
    date: "2019 - 2021",
    stream: "CBSE",
    image: "/logo/ghr.jpg",
  },
];

const Education = () => {
  return (
    <div className="relative w-full pt-7 pb-4 pr-3 grid grid-cols-1">
      {/* Timeline Vertical Line (Positioned 60px from Left) */}
      <div className="absolute left-[40px] top-0 h-full w-[1px] bg-[var(--highlight)]"></div>

      {education.map((edu, index) => (
        <div key={index} className="relative left-[10px] flex items-center gap-6 mb-10">
          {/* Circular Image (Timeline Bullet) */}
          <div className=" w-[60px] h-[60px] shrink-0 p-1 rounded-full border-[1px] border-[var(--highlight)] overflow-hidden bg-white flex items-center justify-center">
            <img
              src={edu.image}
              alt={edu.clgname}
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Education Details (Right Side of the Timeline) */}
          <div className="text-left ">
            <p className="text-[var(--light_gray)] text-xs font-light leading-5">{edu.date}</p>
            <h3 className="text-sm font-medium text-[#ffffff] leading-5">{edu.clgname}</h3>
            <p className="text-[var(--light_gray)] text-sm font-light leading-5">{edu.stream}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
