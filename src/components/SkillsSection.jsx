import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "React", logo: "/assets/skills/React.svg", category: "frontend" },
  { name: "Next.js", logo: "/assets/skills/Next.js.svg", category: "frontend" },
  { name: "Tailwind CSS", logo: "/assets/skills/Tailwind CSS.svg", category: "frontend" },
  { name: "Vue.js", logo: "/assets/skills/Vue.js.svg", category: "frontend" },
  { name: "Angular", logo: "/assets/skills/AngularJS.svg", category: "frontend" },

  // Backend
  { name: "Spring Boot", logo: "/assets/skills/Spring.svg", category: "backend" },
  { name: "Node.js", logo: "/assets/skills/Node.js.svg", category: "backend" },
  { name: "Express", logo: "/assets/skills/Express.svg", category: "backend" },
  { name: "Nest.js", logo: "/assets/skills/Nest.js.svg", category: "backend" },
  { name: "FastAPI", logo: "/assets/skills/FastAPI.svg", category: "backend" },
  { name: "Flask", logo: "/assets/skills/Flask.svg", category: "backend" },
  { name: "Go", logo: "/assets/skills/Go.svg", category: "backend" },

  // Tools
  { name: "MongoDB", logo: "/assets/skills/MongoDB.svg", category: "tools" },
  { name: "PostgreSQL", logo: "/assets/skills/PostgresSQL.svg", category: "tools" },
  { name: "MySQL", logo: "/assets/skills/MySQL.svg", category: "tools" },
  { name: "AWS", logo: "/assets/skills/AWS.svg", category: "tools" },
  { name: "Google Cloud", logo: "/assets/skills/Google Cloud.svg", category: "tools" },
  { name: "Terraform", logo: "/assets/skills/HashiCorp Terraform.svg", category: "tools" },
  { name: "Jenkins", logo: "/assets/skills/Jenkins.svg", category: "tools" },
  { name: "Docker", logo: "/assets/skills/Docker.svg", category: "tools" },
  { name: "Kubernetes", logo: "/assets/skills/Kubernetes.svg", category: "tools" },
  { name: "Linux", logo: "/assets/skills/Linux.svg", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Tech Stack</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div 
                  className="w-full h-full bg-secondary/20 rounded-lg flex items-center justify-center text-2xl font-bold text-muted-foreground"
                  style={{ display: 'none' }}
                >
                  {skill.name.charAt(0)}
                </div>
              </div>
              <h3 className="font-semibold text-sm text-center leading-tight">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
