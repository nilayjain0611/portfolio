import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Task Manager",
    desc: "A simple task management app built with Django and React.",
    image: "/assests/person1.jpg",
    techStack: ["Django", "React", "Tailwind CSS", "Neon DB"],
    sourceCode: "https://github.com/yourusername/task-manager",
  },
  {
    title: "Expense Tracker",
    desc: "Track your daily expenses with category-wise insights.",
    image: "/assests/person2.jpg",
    techStack: ["Next.js", "Firebase", "Chart.js","Chart.js"],
    sourceCode: "https://github.com/yourusername/expense-tracker",
  },
  {
    title: "Portfolio Website",
    desc: "A personal portfolio showcasing projects and skills.",
    image: "/assests/person3.jpg",
    techStack: ["Next.js", "Tailwind CSS"],
    sourceCode: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Task Manager",
    desc: "A simple task management app built with Django and React.",
    image: "/assests/person1.jpg",
    techStack: ["Django", "React", "Tailwind CSS", "Neon DB"],
    sourceCode: "https://github.com/yourusername/task-manager",
  },
];

export default function ProjectsSection() {
  return (
    < section id="projects"  className="mx-10 max-w-178 space-y-10 scroll-mt-20 scroll-smooth">
      <h1 className="text-[var(--light_gray)] text-2xl font-semibold">projects<span className="text-[var(--highlight)]"> .</span></h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index}  {...project} />
      ))}
      </div>
    </section>
  );
}
