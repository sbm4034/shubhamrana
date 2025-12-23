import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
          Software Developer
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 animate-fade-in-delay-1">
          Shubham Rana
        </h1>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay-2 leading-relaxed">
          Crafting elegant solutions through code. Passionate about building 
          applications that make a difference — from Android & Java to Python & Django.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-3">
          <a 
            href="#experience" 
            className="px-8 py-3 bg-foreground text-background font-body text-sm tracking-wide hover:bg-foreground/90 transition-colors rounded"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 border border-border text-foreground font-body text-sm tracking-wide hover:bg-secondary transition-colors rounded"
          >
            Get In Touch
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default Hero;
