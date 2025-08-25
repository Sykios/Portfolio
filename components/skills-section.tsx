'use client';

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  skills: Skill[];
}

interface SkillsSectionProps {
  className?: string;
}

export default function SkillsSection({ className = "" }: SkillsSectionProps) {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: "🎨",
      color: "#87ae73",
      gradientFrom: "#87ae73",
      gradientTo: "#9BB894",
      skills: [
        { name: 'Angular', level: 80 },
        { name: 'React / Next.js', level: 50 },
        { name: 'Type-/JavaScript', level: 80 },
        { name: 'Tailwind CSS', level: 70 },
        { name: 'HTML5 / CSS3', level: 95 }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "#F27C66",
      gradientFrom: "#F27C66",
      gradientTo: "#FF8A7A",
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Node.js', level: 60 },
        { name: 'Python', level: 55 },
        { name: 'PostgreSQL / MySQL', level: 85 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      color: "#C9A064",
      gradientFrom: "#C9A064",
      gradientTo: "#D4B078",
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'OWASP ZAP & Burp Suite', level: 50 },
        { name: 'Figma', level: 80 },
        { name: 'Spring Boot', level: 85 }
      ]
    }
  ];

  const coreStackTechnologies = ['Angular', 'Spring Boot', 'Hibernate', 'MySQL', 'Maven', 'JUnit'];

  return (
    <section id="skills" className={`py-20 px-4 sm:px-6 lg:px-8 bg-[#EAE8E8] dark:bg-gray-900 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[#548AB7] dark:text-white">
          Skills & Technologies
        </h2>
        <p className="text-center text-lg text-[#548AB7] dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills across different domains
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-[#D6D3CD] dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mr-4"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold" style={{ color: category.color }}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#548AB7] dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span style={{ color: category.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(to right, ${category.gradientFrom}, ${category.gradientTo})`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#548AB7]/10 to-[#9BB894]/10 dark:from-[#548AB7]/20 dark:to-[#9BB894]/20 rounded-lg p-8 border border-[#548AB7]/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#548AB7] dark:text-white mb-4">
              My Go-To Core Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {coreStackTechnologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-[#548AB7] dark:text-white font-semibold shadow-md border border-[#D6D3CD] dark:border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-[#548AB7] dark:text-gray-300 max-w-2xl mx-auto">
              This is my preferred technology stack for building robust, scalable enterprise applications. 
              I have extensive experience with this combination and can deliver high-quality solutions efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
