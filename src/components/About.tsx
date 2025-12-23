const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
              01
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              About
            </h2>
          </div>
          
          <div className="md:col-span-8 space-y-6">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              I'm a software developer with a passion for building meaningful applications. 
              With experience spanning Android development, backend systems, and web applications, 
              I bring a versatile skill set to every project.
            </p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              My journey in software development has been driven by curiosity and a desire 
              to create solutions that solve real problems. I believe in writing clean, 
              maintainable code and continuously learning new technologies.
            </p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or refining my craft through 
              personal projects.
            </p>
            
            <div className="pt-6 flex items-center gap-8">
              <div>
                <p className="font-display text-3xl font-medium text-primary">6+</p>
                <p className="font-body text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-3xl font-medium text-primary">3+</p>
                <p className="font-body text-sm text-muted-foreground">Languages</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <p className="font-display text-3xl font-medium text-primary">∞</p>
                <p className="font-body text-sm text-muted-foreground">Curiosity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
