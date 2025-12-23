const skillCategories = [
  {
    category: "Languages",
    skills: ["Java", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks",
    skills: ["Django", "Android SDK", "REST APIs"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Android Studio", "VS Code"],
  },
  {
    category: "Databases",
    skills: ["SQLite", "PostgreSQL", "Firebase"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-12 gap-12 items-start mb-16">
          <div className="md:col-span-4">
            <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
              04
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-medium">
              Skills
            </h2>
          </div>
          
          <div className="md:col-span-8">
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Technologies and tools I work with on a regular basis.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-display text-lg font-medium text-primary">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="font-body text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
