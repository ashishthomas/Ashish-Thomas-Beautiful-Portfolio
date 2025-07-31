import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Kira Ecommerce Web App",
    description:
      "A modern, user-friendly e-commerce app for beauty products with authentication, reviews, cart, and seamless shopping experience",
    image: "/projects/Kira-project.png",
    tags: ["React", "Typescript", "TailwindCSS", "vite"],
    demoUrl: "#",
    githubUrl: "https://github.com/ashishthomas/Kira-Beauty-Ecommerce.git",
  },
  {
    id: 2,
    title: "Trade Excelsior Web App",
    description:
      "A modern, user-friendly app for managing books, onboarding checklists, and user support with role-based-routing built using React. ",
    image: "/projects/Trade-Excelsior-project.png",
    tags: ["React", "RBRouting", "MUI", "vite"],
    demoUrl: "#",
    githubUrl: "https://github.com/ashishthomas/Trade-Excelsior.git",
  },
  {
    id: 3,
    title: "Sizzling Delights Restaurant Website",
    description:
      "A web platform showcasing menu, services, events and online reservations for a modern restaurant experience",
    image: "/projects/Sizzling_Delights_Website.jpg",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/ashishthomas/Sizzling-Restaurant-Website.git",
  },
  {
    id: 4,
    title: "Online Job Portal",
    description:
      "A modern online job portal for job seekers and employers, featuring job listings, applications, filtering, and user authentication.",
    image: "/projects/Online-Dream-Career-Portal.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "vite"],
    demoUrl: "#",
    githubUrl: "https://github.com/ashishthomas/Online-Job-Portal.git",
  },
  {
    id: 5,
    title: "FlowPay - Payment App",
    description:
      "A modern payment application enabling secure transactions, fee calculation, and currency management with user-friendly dashboards for personal and business users.",
    image: "/projects/FlowPay-Payment-Application.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "vite"],
    demoUrl: "#",
    githubUrl: "https://github.com/ashishthomas/Payment-flow-app.git",
  },
  {
    id: 6,
    title: "Nexora Technologies Company Website",
    description:
      "A modern corporate website for Nexora Technologies, showcasing services, portfolio, and expertise with responsive design, fast performance, and seamless user experience for clients and partners.",
    image: "/projects/Nexora-Technologies-Corporate-Website.png",
    tags: ["React", "Next.js", "Tailwind CSS", "vercel"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/ashishthomas/Nexora-Technologies-Corporate-Website.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover p-2 sm:p-0 cursor-pointer"
            >
              <div className="h-48 min-h-[200px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1 text-center ">
                  {" "}
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 cursor-pointer"
            target="_blank"
            href="https://github.com/ashishthomas"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
