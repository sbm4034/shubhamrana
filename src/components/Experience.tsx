import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    period: "October 2025 - Present",
    role: "Backend Engineer (Technical Consultant)",
    company: "Apertum Online Limited",
    location: "Remote",
    highlights: [
      "Designed and implemented internal API gateway service using Spring Cloud Gateway for enhanced security and auditability",
      "Containerized Java projects using Docker for consistent local development and streamlined deployment",
      "Architecting and developing API gateway for developer API management in production",
      "Implementing whitelisting and blacklisting mechanisms for API access control and security enforcement",
    ],
    tech: ["Spring Cloud Gateway", "Docker", "Java", "API Security"],
  },
  {
    period: "June 2020 - October 2025",
    role: "Senior Software Engineer",
    company: "Walmart Labs",
    location: "Bangalore",
    highlights: [
      "Led development teams through full SDLC for microservices, reducing order processing time by 20%",
      "Architected high-throughput event tracking system using Kafka, processing 2,500 events/sec with zero consumer lag",
      "Designed optimized caching strategies using Redis and Memcache, reducing database load by 35%",
      "Led Java 8 to Java 21 migration, improving performance and security posture",
      "Designed fault-tolerant services processing 50,000+ orders daily with 99.9% reliability",
      "Led migration to Helm Chart deployments with 50% faster CI/CD pipeline",
    ],
    tech: ["Java 21", "Kafka", "Redis", "Kubernetes", "Helm", "Cosmos DB"],
  },
  {
    period: "April 2019 - June 2020",
    role: "SDE II",
    company: "Halodoc",
    location: "Bangalore",
    highlights: [
      "Architected high-performance backend microservices for healthcare platform serving millions",
      "Implemented Redis caching layer, improving API response times by 45%",
      "Led Elasticsearch performance optimization, reducing query response time by 65%",
      "Designed appointment microservice with slot booking, increasing throughput by 30%",
    ],
    tech: ["Java", "Spring Boot", "Redis", "Elasticsearch", "PostgreSQL"],
  },
  {
    period: "November 2017 - April 2019",
    role: "Engineer I",
    company: "NextGen HealthCare",
    location: "Bangalore",
    highlights: [
      "Developed features for J2EE and Spring Boot applications in enterprise healthcare",
      "Created front-end dashboards using Vue.js to visualize key healthcare metrics",
      "Implemented OAuth 2.0 authentication for secure access to patient records",
      "Maintained SOAP HTTP protocol compliance for US Federal Service integration",
    ],
    tech: ["J2EE", "Spring Boot", "Vue.js", "OAuth 2.0", "HIPAA"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 md:py-32 px-6 relative section-glow" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-2">
              02
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Work <span className="gradient-text">Experience</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8"
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              A journey through building scalable systems at industry leaders, 
              from healthcare platforms to retail giants.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary shadow-lg shadow-primary/50" />

                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:order-2 md:pl-12 md:text-left"}`}>
                  <div className="flex items-center gap-2 text-primary mb-2 justify-start md:justify-end flex-wrap">
                    {index % 2 !== 0 && <Calendar className="w-4 h-4 hidden md:block" />}
                    <span className="font-body text-sm">{exp.period}</span>
                    {index % 2 === 0 && <Calendar className="w-4 h-4 hidden md:block" />}
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4 justify-start md:justify-end flex-wrap">
                    {index % 2 !== 0 && <Building2 className="w-4 h-4 hidden md:block" />}
                    <span className="font-body">{exp.company}</span>
                    <span className="text-primary">•</span>
                    <span className="font-body text-sm">{exp.location}</span>
                    {index % 2 === 0 && <Building2 className="w-4 h-4 hidden md:block" />}
                  </div>
                </div>

                <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-12 md:text-left" : "md:pr-12 md:order-1 md:text-right"}`}>
                  <div className="card-gradient border border-border rounded-lg p-6 hover-lift">
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.slice(0, 3).map((highlight, hIndex) => (
                        <li 
                          key={hIndex} 
                          className={`flex items-start gap-2 text-sm text-muted-foreground ${
                            index % 2 !== 0 ? "md:flex-row-reverse md:text-right" : ""
                          }`}
                        >
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? "md:justify-end" : ""}`}>
                      {exp.tech.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-2 py-1 text-xs font-body bg-primary/10 text-primary rounded border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
