import { Github, Linkedin, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-medium tracking-tight">
          SR
        </a>
        
        <ul className="hidden md:flex items-center gap-8 font-body text-sm">
          <li>
            <a href="#about" className="link-underline text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="link-underline text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="link-underline text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="link-underline text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="link-underline text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/sbm4034" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/shubham4034" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:shubham4034@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
