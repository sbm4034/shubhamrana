import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Phone, ArrowUpRight, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "shubham4034@gmail.com",
      href: "mailto:shubham4034@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8130049050",
      href: "tel:+918130049050",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/sbm4034",
      href: "https://github.com/sbm4034",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shubham4034",
      href: "https://linkedin.com/in/shubham4034",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-6 relative" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-2">
              05
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Get In <span className="gradient-text">Touch</span>
            </h2>
          </motion.div>

          <div className="md:col-span-8 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg text-muted-foreground leading-relaxed"
            >
              I'm always open to discussing new projects, technical challenges, 
              or opportunities to collaborate on innovative solutions. 
              Let's build something great together!
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {contacts.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group card-gradient border border-border rounded-lg p-5 hover-lift hover:border-primary/50 flex items-center gap-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                      {contact.label}
                    </p>
                    <p className="font-body text-foreground truncate group-hover:text-primary transition-colors">
                      {contact.value}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-8"
            >
              <a
                href="mailto:shubham4034@gmail.com?subject=Let's%20Work%20Together"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-lg font-body text-sm tracking-wide relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 transition-transform group-hover:scale-105" />
                <Send className="w-4 h-4 relative text-primary-foreground" />
                <span className="relative text-primary-foreground font-medium">
                  Send Me a Message
                </span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
