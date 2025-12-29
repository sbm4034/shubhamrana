import { ArrowDown, Phone, MapPin, Download } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow stagger-2"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 font-body text-sm tracking-wider text-primary">
            Senior Software Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6"
        >
          <span className="text-foreground">Shubham</span>{" "}
          <span className="gradient-text">Rana</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          8 years of experience architecting <span className="text-primary">microservices</span> and{" "}
          <span className="text-primary">enterprise applications</span> with focus on healthcare 
          and technology services. Building scalable, cloud-native solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-12"
        >
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            +91 8130049050
          </span>
          <span className="w-1 h-1 rounded-full bg-primary" />
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            India
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="group relative px-8 py-4 overflow-hidden rounded-lg font-body text-sm tracking-wide"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-transform group-hover:scale-105" />
            <span className="relative text-primary-foreground font-medium">View My Work</span>
          </a>
          <a
            href="/Shubham-Rana-Resume.pdf"
            download
            className="group relative px-8 py-4 rounded-lg font-body text-sm tracking-wide gradient-border bg-background hover:bg-secondary transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4 text-primary group-hover:animate-bounce" />
            <span className="relative text-foreground">Download Resume</span>
          </a>
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-lg font-body text-sm tracking-wide border border-primary/30 bg-background hover:bg-primary/10 transition-colors"
          >
            <span className="relative text-foreground">Get In Touch</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "8+", label: "Years Experience" },
            { value: "50K+", label: "Orders/Day" },
            { value: "99.9%", label: "Reliability" },
            { value: "2.5K", label: "Events/Sec" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, type: "spring" }}
              className="text-center"
            >
              <p className="font-display text-3xl md:text-4xl font-medium gradient-text">
                {stat.value}
              </p>
              <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 p-3 rounded-full bg-secondary/50 text-primary hover:bg-secondary transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
};

export default Hero;
