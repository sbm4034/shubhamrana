import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ABILYTICS",
    description: "A comprehensive application featuring OTP-based authentication and a points redemption system. Built with Java for Android platform.",
    tech: ["Java", "Android", "Firebase"],
    github: "https://github.com/sbm4034/ABILYTICS",
    stars: 1,
  },
  {
    title: "Django Polls",
    description: "A polling application built using the Django web framework, implementing the official Django tutorial with custom enhancements.",
    tech: ["Python", "Django", "SQLite"],
    github: "https://github.com/sbm4034/Django-polls",
  },
  {
    title: "Django Sample",
    description: "A sample Django project demonstrating best practices in Python web development and project structure.",
    tech: ["Python", "Django"],
    github: "https://github.com/sbm4034/Django-sample",
  },
  {
    title: "NGOConnect",
    description: "An Android application designed to connect NGOs with volunteers and donors, facilitating community engagement and support.",
    tech: ["Java", "Android", "REST API"],
    github: "https://github.com/sbm4034/NGOConnect-android",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-12 gap-12 items-start mb-16">
          <div className="md:col-span-4">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
              03
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Projects
            </h2>
          </div>
          
          <div className="md:col-span-8">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              A selection of projects I've worked on, showcasing my experience 
              in mobile development, web applications, and backend systems.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article 
              key={index}
              className="group p-6 bg-card border border-border rounded hover:border-primary/50 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-xl font-medium group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
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
                  <span className="font-body text-xs text-muted-foreground">
                    ★ {project.stars} star
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
