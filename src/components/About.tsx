import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative" ref={ref}>
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-2">
              01
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          <div className="md:col-span-8 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg text-muted-foreground leading-relaxed"
            >
              Senior Engineer with <span className="text-primary font-medium">8 years of experience</span> architecting 
              microservices and enterprise applications with focus on healthcare and technology services. 
              Currently working as a <span className="text-primary font-medium">Backend Engineer</span> designing 
              API gateway solutions for production environments.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-lg text-muted-foreground leading-relaxed"
            >
              Proven expertise in <span className="text-foreground">cloud-native technologies</span>,{" "}
              <span className="text-foreground">containerization</span>, and{" "}
              <span className="text-foreground">distributed systems</span>. Technical leader skilled in 
              interfacing with senior stakeholders and making critical architectural decisions in 
              collaborative environments.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground leading-relaxed"
            >
              Demonstrated experience in agile environments with API security, caching strategies, 
              and message queue implementations. From Java Spring Boot microservices to Python FastAPI 
              and AI/ML recommendation systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-8 grid grid-cols-3 gap-6"
            >
              {[
                { value: "B.Tech", label: "CS - Delhi University", sub: "83.97%" },
                { value: "4+", label: "Companies", sub: "Enterprise Scale" },
                { value: "∞", label: "Learning", sub: "Always Growing" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  className="text-center p-4 rounded-lg card-gradient border border-border"
                >
                  <p className="font-display text-2xl font-medium text-primary">{item.value}</p>
                  <p className="font-body text-sm text-foreground mt-1">{item.label}</p>
                  <p className="font-body text-xs text-muted-foreground">{item.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
