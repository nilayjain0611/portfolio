import Image from 'next/image';
import React from 'react'

const Skills = () => {
  
const skills = [
  {
    name: "python",
    image: "/python.svg",
  },
  {
    name: "django",
    image: "/django.svg",
  },
  {
    name: "flask",
    image: "/flask.svg",
  },
  {
    name: "javascript",
    image: "/js.svg",
  },
  {
    name: "postgreSql",
    image: "/postgres.svg",
  },
  {
    name: "html",
    image: "/html.svg",
  },
  {
    name: "nextjs",
    image: "/nextjs.svg",
  },
  {
    name: "reactjs",
    image: "/react.svg",
  },
  {
    name: "tailwind",
    image: "/tailwind.svg",
  },
  {
    name: "git",
    image: "/git.svg",
  },
  {
    name: "figma",
    image: "/figma.svg",
  },
];
  return (
    <section id='skills' className='mx-10 max-w-178 space-y-10 scroll-mt-20 scroll-smooth'>
          <h1 className="text-[var(--light_gray)] text-2xl font-semibold">skills<span className="text-[var(--highlight)]"> .</span></h1>

          <div className="flex flex-wrap gap-5 font-light ">
          {skills.map((skill, index) => (
            <span key={index} className="font-light text-sm text-[var(--light_gray)]  flex gap-1 bg-[var(--card_color)] px-4 py-2 rounded-lg  border border-[var(--light_gray)]  hover:border-[var(--highlight)] transform transition-all duration-300">
              <Image
                src={skill.image}
                width={20}
                height={20}
                alt='python'
              />
              
              {skill.name}
            </span>
          ))}
        </div>
    </section>
  )
}

export default Skills