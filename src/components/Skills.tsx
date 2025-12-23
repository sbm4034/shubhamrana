import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Languages",
    icon: "💻",
    skills: [
      { name: "Java 8/17/21/22", level: "Expert" },
      { name: "Python", level: "Advanced" },
      { name: "Vue.js", level: "Intermediate" },
      { name: "GoLang", level: "Learning" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: "☁️",
    skills: [
      { name: "AWS", level: "Advanced" },
      { name: "GCP", level: "Advanced" },
      { name: "Docker", level: "Expert" },
      { name: "Kubernetes", level: "Advanced" },
      { name: "Helm", level: "Advanced" },
      { name: "Kafka", level: "Expert" },
    ],
  },
  {
    category: "Databases & Caching",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: "Expert" },
      { name: "PostgreSQL", level: "Expert" },
      { name: "Cosmos DB", level: "Advanced" },
      { name: "Redis", level: "Expert" },
      { name: "Memcache", level: "Advanced" },
      { name: "Elasticsearch", level: "Advanced" },
    ],
  },
  {
    category: "Frameworks & Tools",
    icon: "🛠️",
    skills: [
      { name: "Spring Boot", level: "Expert" },
      { name: "Spring WebFlux", level: "Advanced" },
      { name: "FastAPI", level: "Advanced" },
      { name: "Dropwizard", level: "Intermediate" },
      { name: "Jenkins", level: "Advanced" },
    ],
  },
  {
    category: "API & Security",
    icon: "🔐",
    skills: [
      { name: "RESTful APIs", level: "Expert" },
      { name: "OAuth 2.0", level: "Expert" },
      { name: "JWT", level: "Expert" },
      { name: "API Gateway", level: "Advanced" },
    ],
  },
  {
    category: "AI/ML Libraries",
    icon: "🤖",
    skills: [
      { name: "scikit-learn", level: "Intermediate" },
      { name: "pandas", level: "Advanced" },
      { name: "numpy", level: "Advanced" },
      { name: "matplotlib", level: "Intermediate" },
    ],
  },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-primary/20 text-primary border-primary/30";
    case "Advanced":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Intermediate":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 px-6 relative section-glow" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-2">
              04
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8"
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              A comprehensive toolkit spanning backend development, cloud infrastructure, 
              databases, and emerging AI/ML technologies.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="card-gradient border border-border rounded-lg p-6 hover-lift hover:border-primary/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="font-display text-lg font-medium text-primary">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 + skillIndex * 0.05 }}
                    className={`px-3 py-1.5 text-sm font-body rounded-full border ${getLevelColor(skill.level)}`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture & Methodologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 card-gradient border border-border rounded-lg p-8"
        >
          <h3 className="font-display text-xl font-medium text-foreground mb-6 text-center">
            Architecture & Methodologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Microservices",
              "Event-Driven Architecture",
              "CI/CD Pipelines",
              "Agile/Scrum",
              "SOLID Principles",
              "Cloud-Native",
              "HIPAA Compliance",
              "High Availability",
            ].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
                className="px-4 py-2 text-sm font-body bg-secondary/50 text-foreground rounded-lg border border-border hover:border-primary/50 transition-colors cursor-default"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
