import Image from "next/image";
import ProjectCard from "../../components/project-card";
import ContactForm from "../../components/contact-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EAE8E8] dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
      {/* Intro Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-72 h-90 mx-auto mb-8">
              <Image
                src="/laurenz-bilek-cover-pic.png" 
                alt="Laurenz Bilek - Software Developer"
                width={4961}
                height={7061}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-[#548AB7] to-[#548AB7] bg-clip-text text-transparent">
            Laurenz Bilek
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#548AB7] dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            One-liner introduction
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-[#548AB7] hover:bg-[#6FA2CD] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-[#D6D3CD] dark:border-gray-600 hover:border-[#548AB7] px-8 py-3 rounded-lg font-medium transition-colors text-[#548AB7] hover:text-[#548AB7]"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#D6D3CD] dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#548AB7] dark:text-white">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-[#548AB7] dark:text-gray-300 mb-6">
                Short Profile about me
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#548AB7] dark:text-white">Quick Facts</h3>
              <ul className="space-y-2 text-[#548AB7] dark:text-gray-300">
                <li>🎓 Computer Science Student @ TUWien</li>
                <li>🌍 Based in Vienna</li>
                <li>🚀 Always Learning New Technologies</li>
                <li>💡 Currently pursuing Projects in Cybersecurity, Cloudtech & AI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EAE8E8] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[#548AB7] dark:text-white">Skills & Technologies</h2>
          <p className="text-center text-lg text-[#548AB7] dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across different domains
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-[#D6D3CD] dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#87ae73]/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-[#87ae73]">Frontend</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Angular', level: 80 },
                  { name: 'React / Next.js', level: 70 },
                  { name: 'Type-/JavaScript', level: 80 },
                  { name: 'Tailwind CSS', level: 75 },
                  { name: 'HTML5 / CSS3', level: 95 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#548AB7] dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-[#87ae73]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#87ae73] to-[#9BB894] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-[#D6D3CD] dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#F27C66]/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-[#F27C66]">Backend</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Java', level: 90 },
                  { name: 'Node.js', level: 70 },
                  { name: 'Python', level: 70 },
                  { name: 'PostgreSQL / MySQL', level: 85 },
                  { name: 'REST APIs', level: 85 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#548AB7] dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-[#F27C66]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#F27C66] to-[#FF8A7A] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-[#D6D3CD] dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#C9A064]/20 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold text-[#C9A064]">Tools & DevOps</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: 'Git / GitHub', level: 90 },
                  { name: 'Docker', level: 70 },
                  { name: 'CI/CD', level: 70 },
                  { name: 'Figma', level: 80 },
                  { name: 'Spring Boot', level: 85 }
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-[#548AB7] dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-[#C9A064]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#C9A064] to-[#D4B078] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#548AB7]/10 to-[#9BB894]/10 dark:from-[#548AB7]/20 dark:to-[#9BB894]/20 rounded-lg p-8 border border-[#548AB7]/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#548AB7] dark:text-white mb-4">My Go-To Core Stack</h3>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                {['Angular', 'Spring Boot', 'Hibernate', 'MySQL', 'Maven', 'JUnit'].map((tech, index) => (
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#D6D3CD] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#548AB7] dark:text-white">Selection of my Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project with Demo & GitHub */}
            <ProjectCard
              title="E-Commerce Platform"
              description="Description of the E-Commerce Platform"
              technologies={['Angular', 'Spring Boot', 'MySQL', 'Stripe API', 'Docker']}
              features={[
                'Feature 1',
                'Feature 2',
                'Feature 3',
                'Feature 4',
                'Feature 5'
              ]}
              demoLink=""
              githubLink="https://github.com/Sykios/"
              status="completed"
            />

            {/* Example Project with only GitHub */}
            <ProjectCard
              title="Cybersecurity Dashboard"
              description="Very high overview, wow such security"
              technologies={['React', 'Node.js', 'PostgreSQL', 'Python']}
              features={[
                'Really long and complex feature to ensure security is top-notch & the project card is functioning',
                'Feature 2'
              ]}
              githubLink="https://github.com/Sykios/security-dashboard"
              status="in-progress"
            />

            {/* Example Project without both */}
            <ProjectCard
              title="AI-Powered Code Assistant"
              description="I think this may be a bit overkill for now"
              technologies={['Python', 'TensorFlow', 'FastAPI', 'React', 'OpenAI API']}
              features={[
                'Feature 1',
              ]}
              status="planned"
            />
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-[#548AB7] dark:text-gray-300 mb-6">
              Want to see more of my work or collaborate on a project?
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#548AB7] hover:bg-[#6FA2CD] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EAE8E8] dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#548AB7] dark:text-white">Let's Work Together</h2>
          <p className="text-xl text-[#548AB7] dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. <br />
            Currently pursuing a junior position in software development or a similar role which pushes my education 
            within the fields of Cybersecurity, AI or DevOps.
          </p>
          
          <ContactForm />
          
          {/* Social Links */}
          <div className="mt-12 pt-8 border-t border-[#D6D3CD] dark:border-gray-700">
            <p className="text-lg text-[#548AB7] dark:text-gray-300 mb-6">
              Or connect with me on social media
            </p>
            <div className="flex justify-center space-x-6">
              <a 
                href="https://www.linkedin.com/in/laurenz-bilek-48445b210/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#548AB7] hover:text-[#6FA2CD] transition-colors"
              >
                <div className="w-10 h-10 bg-[#548AB7] bg-opacity-20 rounded-lg flex items-center justify-center">
                  💼
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/Sykios" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#548AB7] hover:text-[#6FA2CD] transition-colors"
              >
                <div className="w-10 h-10 bg-[#548AB7] bg-opacity-20 rounded-lg flex items-center justify-center">
                  🐙
                </div>
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
