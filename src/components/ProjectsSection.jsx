import { ArrowRight } from "lucide-react";

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
          {projects.map((project) => (
            <div
              key={project.id}
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
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 .297a12 12 0 00-3.797 23.394c.6.111.82-.261.82-.58 0-.287-.011-1.044-.017-2.049-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.235-3.221-.123-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.297-1.23 3.297-1.23.653 1.65.24 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.625-5.476 5.922.43.371.815 1.102.815 2.222 0 1.606-.014 2.903-.014 3.293 0 .322.216.697.825.579A12.003 12.003 0 0012 .297z" />
                        </svg>
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
