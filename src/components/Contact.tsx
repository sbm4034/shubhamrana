import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
              05
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Contact
            </h2>
          </div>
          
          <div className="md:col-span-8 space-y-8">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of something great. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:shubham4034@gmail.com"
                className="group flex items-center gap-4 p-4 border border-border rounded hover:border-primary/50 hover:bg-secondary/50 transition-all"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-body text-foreground">shubham4034@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              
              <a 
                href="https://github.com/sbm4034"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-border rounded hover:border-primary/50 hover:bg-secondary/50 transition-all"
              >
                <Github className="w-5 h-5 text-primary" />
                <span className="font-body text-foreground">github.com/sbm4034</span>
                <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              
              <a 
                href="https://linkedin.com/in/shubham4034"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-border rounded hover:border-primary/50 hover:bg-secondary/50 transition-all"
              >
                <Linkedin className="w-5 h-5 text-primary" />
                <span className="font-body text-foreground">linkedin.com/in/shubham4034</span>
                <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
