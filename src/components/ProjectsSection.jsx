import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

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
  {
    id: 4,
    title: "Intent-based Chatbot",
    description:
      "A sophisticated intent-based chatbot system combining traditional Bag-of-Words (BoW) models with modern BERT (Bidirectional Encoder Representations from Transformers) architecture for enhanced natural language understanding.",
    image: "/projects/project4.jpg",
    tags: ["Python", "BERT", "NLP", "Machine Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/musab-uwo/COMPSCI_9873_BIAI_Chatbot",
  },
  {
    id: 5,
    title: "Formula 1 Race Predictor",
    description:
      "A comprehensive machine learning project that predicts Formula 1 race results using advanced data analysis and multiple ML algorithms. This project leverages real F1 telemetry data, weather conditions, and team performance metrics to predict race finishing positions with high accuracy.",
    image: "/projects/project5.jpg",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    demoUrl: "#",
    githubUrl: "https://github.com/musab-uwo/ML_ECE_9039_F1_model",
  },
  {
    id: 6,
    title: "Financial Data Manager",
    description:
      "A comprehensive financial data management system that fetches, stores, and manages financial data from Yahoo Finance API.",
    image: "/projects/project6.jpg",
    tags: ["Python", "Yahoo Finance API", "Tableau"],
    demoUrl: "#",
    githubUrl: "https://github.com/musab-uwo/ECE9014_DMA_project",
  },
];

export const ProjectsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;
    
    const maxSlides = Math.ceil(projects.length / itemsPerView);
    
    const autoScrollInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(autoScrollInterval);
  }, [itemsPerView, isAutoScrolling]);

  const maxSlides = Math.ceil(projects.length / itemsPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
    setIsAutoScrolling(false); // Pause auto-scroll when user interacts
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
    setIsAutoScrolling(false); // Pause auto-scroll when user interacts
  };

  const handleSlideClick = (index) => {
    setCurrentSlide(index);
    setIsAutoScrolling(false); // Pause auto-scroll when user interacts
  };

  const getVisibleProjects = () => {
    const startIndex = currentSlide * itemsPerView;
    return projects.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Carousel Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoScrolling(false)}
          onMouseLeave={() => setIsAutoScrolling(true)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background/80 hover:bg-background border border-border rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous projects"
          >
            <ChevronLeft size={24} className="text-foreground" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background/80 hover:bg-background border border-border rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next projects"
          >
            <ChevronRight size={24} className="text-foreground" />
          </button>

          {/* Projects Grid */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: maxSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0"
                >
                  <div className={`grid gap-8 ${
                    itemsPerView === 1 ? 'grid-cols-1' : 
                    itemsPerView === 2 ? 'grid-cols-1 md:grid-cols-2' : 
                    'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                  }`}>
                    {projects
                      .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                      .map((project, key) => (
                        <div
                          key={project.id}
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
                              {project.tags.map((tag, tagIndex) => (
                                <span 
                                  key={tagIndex}
                                  className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                >
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
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleSlideClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-primary scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
