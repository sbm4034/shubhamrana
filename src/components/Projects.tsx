import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "Healthcare Content Recommendation System",
    description: "Microservices architecture with Java 22 Spring Boot backend and Python FastAPI recommendation engine. Implemented text-based tokenization and ML algorithms for content similarity analysis.",
    highlights: [
      "Built reactive RESTful APIs using Spring WebFlux for real-time recommendations",
      "Implemented ML algorithms using scikit-learn, pandas, and numpy",
      "Designed decoupled architecture enabling independent scaling",
    ],
    tech: ["Java 22", "Spring WebFlux", "Python", "FastAPI", "PostgreSQL", "scikit-learn"],
    github: "https://github.com/sbm4034/HealthCareContentRecommendationService",
    featured: true,
    date: "December 2024",
  },
  {
    title: "LLM Engineering Mastery",
    description: "Comprehensive repository for mastering Large Language Model engineering through hands-on projects. Forked from an 8-week intensive course covering AI fundamentals to advanced agentic systems.",
    tech: ["Python", "Jupyter Notebook", "LLMs", "AI Engineering"],
    github: "https://github.com/sbm4034/llm_engineering",
  },
  {
    title: "AI Projects & Experiments",
    description: "Collection of AI implementations and experiments focused on machine learning algorithms, data analysis, and recommendation systems as part of a self-learning journey.",
    tech: ["Python", "pandas", "numpy", "scikit-learn", "matplotlib"],
    github: "https://github.com/sbm4034/AI_Projects_Experiments",
  },
  {
    title: "Personal Portfolio",
    description: "Modern portfolio website built with React and TypeScript, leveraging Lovable for rapid development and deployment. Features responsive design and smooth animations.",
    tech: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    github: "https://github.com/sbm4034/shubhamrana",
    live: "https://shubhamrana.lovable.app/",
  },
  {
    title: "Airport Info Service",
    description: "Enterprise-grade Spring Boot microservice demonstrating resilience patterns including circuit breaker, retry logic, and rate limiting with comprehensive monitoring and testing.",
    tech: ["Java 21", "Spring Boot", "Resilience4j", "Prometheus"],
    github: "https://github.com/sbm4034/airportinfo",
  },
  {
    title: "ABILYTICS",
    description: "Android application featuring OTP-based authentication and points redemption system. Built with Java and Firebase integration for real-time data management.",
    tech: ["Java", "Android", "Firebase", "REST API"],
    github: "https://github.com/sbm4034/ABILYTICS",
    stars: 1,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-2">
              03
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8"
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              From AI-powered recommendation systems to mobile applications, 
              showcasing full-stack development across multiple domains.
            </p>
          </motion.div>
        </div>

        {/* Featured Project */}
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12 relative group"
          >
            <div className="card-gradient border border-primary/30 rounded-xl p-8 hover-lift relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-body bg-primary/20 text-primary rounded-full border border-primary/30 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Recent AI Project
                  </span>
                  <span className="text-sm text-muted-foreground">{project.date}</span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="font-body text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights?.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 text-sm font-body bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-body"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group card-gradient border border-border rounded-lg p-6 hover-lift hover:border-primary/50"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-lg font-medium group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>

              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-body bg-secondary text-secondary-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.stars && (
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="font-body text-xs text-primary">★ {project.stars} star</span>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
