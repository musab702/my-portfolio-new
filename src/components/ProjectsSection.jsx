import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Restaurant Review App",
    description: "Restaurant review app with a responsive Next.js landing page, powered by Spring Boot and Elasticsearch for fast search.",
    image: "/projects/project1.jpg",
    tags: ["Next.js", "SpringBoot", "Elasticsearch"],
    demoUrl: "#",
    githubUrl: "https://github.com/musab702/restaurant_review_App",
  },
  {
    id: 2,
    title: "FullStack Social Media App",
    description:
    "Built a MERN social media app deployed on GCP using Docker, Kubernetes, and MongoDB, with CI/CD pipelines and a scalable, high-availability architecture.",
    image: "/projects/project2.png",
    tags: ["React", "Express", "Redux, MongoDB"],
    demoUrl: "#",
    githubUrl: "https://github.com/Bhavyakcwestern/social_media_mern_app_cloud",
  },
  {
    id: 3,
    title: "Spring AI Chatbot",
    description:
      "AI-powered Spring Boot application leveraging OpenAI API with Spring AI integration.",
    image: "/projects/project3.png",
    tags: ["React", "SpringBoot", "OpenAI"],
    demoUrl: "#",
    githubUrl: "https://github.com/musab702/springAI",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">

                    {/* //uncomment below to add demo link */}
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
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
            <div className="flex flex-row gap-4 justify-center items-center">
                <a
                className="cosmic-button w-fit flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/musab702"
                >
                Check My Github#1 <ArrowRight size={16} />
                </a>

                <a
                className="cosmic-button w-fit flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/musab-uwo"
                >
                Check My Github#2 <ArrowRight size={16} />
                </a>
            </div>
        </div>

        
      </div>
    </section>
  );
};
