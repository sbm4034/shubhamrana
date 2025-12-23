const experiences = [
  {
    period: "Present",
    role: "Software Developer",
    company: "Freelance / Open Source",
    description: "Building and contributing to various software projects, focusing on creating impactful solutions using modern technologies.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
              02
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Experience
            </h2>
          </div>
          
          <div className="md:col-span-8">
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="group relative pl-8 border-l border-border hover:border-primary transition-colors"
                >
                  <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary" />
                  
                  <p className="font-body text-sm text-primary mb-2">
                    {exp.period}
                  </p>
                  
                  <h3 className="font-display text-xl font-medium mb-1">
                    {exp.role}
                  </h3>
                  
                  <p className="font-body text-muted-foreground mb-4">
                    {exp.company}
                  </p>
                  
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
