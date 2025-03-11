import FadeIn from "./motion/FadeIn";
import FadeInSection from "./motion/FadeInSection";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "BookBot",
    desc: "An AI-Powered Library Assistance ChatBot on telegram.",
    image: "/projects/bootbot.jpg",
    techStack: ["Python", "Flask", "Supabase", "Telegram", "NLP"],
    sourceCode: "https://github.com/yourusername/task-manager",
    live:"https://t.me/v0BookBot",
  },
  {
    title: "eCourts",
    desc: "A system built to prioritize Cases in court using ML ",
    image: "/projects/ecourts.png",
    techStack: ["Flask", "ML", "MERN", 'Python'],
    sourceCode: "https://github.com/nilayjain0611/technex24",
    live:"https://technex24.vercel.app/",
  },
  {
    title: "Election Booth System",
    desc: "A partial-Decentralised EBS built for Campus elections ",
    image: "/projects/EBS.png",
    techStack: ["Flask", "HTML", "CSS", 'Python'],
    sourceCode: "https://github.com/nilayjain0611/Election-Booth-System/",
  },
  {
    title: "FeeFLex Labs",
    desc: "Decentralised Flexible Swap on Solana - Built during Hackathon",
    image: "/projects/feeflex.jpg",
    techStack: ["Next.js", "Tailwind CSS", "Web3.js", "anchor", "rust", "Jupiter"],
    sourceCode: "https://github.com/nilayjain0611/FeeFlex-Demo",
  },
  {
    title: "My Portfolio",
    desc: "A creative minimalistic portfolio",
    image: "/projects/portfolio.jpg",
    techStack: [ "NextJs", "Tailwind CSS", 'Vercel', "Framer Motion"],
    sourceCode: "https://github.com/nilayjain0611/portfolio",
    live:"https://nilayjain.vercel.app",
  },
  {
    title: "Task Manager App",
    desc: "A simple task management app built with Django and Tailwind.",
    image: "/projects/todo.png",
    techStack: ["Django", "Tailwind", "HTML","CSS"],
    sourceCode: "https://github.com/nilayjain0611/TodoList-Django",
    live:"https://todo-list-django.up.railway.app"
  },
  {
    title: "Think.Devs",
    desc: "A platform to discover, create, and share creative and innovative ideas - Built during Hackathon",
    image: "/projects/thinkdevs.png",
    techStack: ["Django", "NextJs", "Tailwind CSS", 'Vercel'],
    sourceCode: "https://github.com/nilayjain0611/Ideas_Project_Social",
    live:"https://ideas-project-social.vercel.app/",
  },


];

export default function ProjectsSection() {
  return (
    <FadeInSection>
      < section id="projects"  className="mx-10 max-w-178 space-y-10 scroll-mt-20 scroll-smooth">
        <h1 className="text-[var(--light_gray)] text-2xl font-semibold">projects<span className="text-[var(--highlight)]"> .</span></h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index}  {...project} />
        ))}
        </div>
      </section>
      </FadeInSection>
  );
}
