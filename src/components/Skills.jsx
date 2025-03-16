import Image from 'next/image';
import React from 'react'
import FadeIn from './motion/FadeIn';

const Skills = () => {
  
const skills = [
  {
    name: "python",
    image: "icons/python.svg",
  },
  {
    name: "django",
    image: "icons/django.svg",
  },
  {
    name: "flask",
    image: "icons/flask.svg",
  },
  {
    name: "javascript",
    image: "icons/js.svg",
  },
  {
    name: "postgreSql",
    image: "icons/postgres.svg",
  },
  {
    name: "html",
    image: "icons/html.svg",
  },
  {
    name: "nextjs",
    image: "icons/nextjs.svg",
  },
  {
    name: "reactjs",
    image: "icons/react.svg",
  },
  {
    name: "tailwind",
    image: "icons/tailwind.svg",
  },
  {
    name: "git",
    image: "icons/git.svg",
  },
  {
    name: "figma",
    image: "icons/figma.svg",
  },
];
  return (
    <FadeIn>
    <section id='skills' className='mx-10 max-w-178 space-y-10 scroll-mt-20 scroll-smooth'>
          <h1 className="text-[var(--light_gray)] text-2xl font-semibold">skills<span className="text-[var(--highlight)]"> .</span></h1>
          <div className="flex flex-wrap gap-5 font-light ">
          {skills.map((skill, index) => (
            <span key={index} className="font-light text-sm text-[var(--light_gray)]  flex gap-1 bg-[var(--card_color)] px-4 py-2 rounded-lg  border border-[var(--light_gray)]  hover:border-[var(--highlight)] transform transition-all duration-300">
              <Image
                src={skill.image}
                width={20}
                height={20}
                style={{ width: "auto", height: "auto" }} 
                alt={skill.name}
              />
              
              {skill.name}
            </span>
          ))}
        </div>
    </section>
    </FadeIn>
  );
}

export default Skills