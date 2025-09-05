import Image from "next/image";
import Navbar from "../../components/navbar";
import ProjectCard from "../../components/project-card";
import ContactForm from "../../components/contact-form";
import Footer from "../../components/footer";
import SkillsSection from "../../components/skills-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EAE8E8] dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
      
      <Navbar />
      
      {/* Intro Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pb-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-80 h-96 sm:w-96 sm:h-[28rem] mx-auto mb-4">
              
              <Image
                src="/laurenz-bilek-cover-pic-preload.webp" 
                alt="Laurenz Bilek - Software Developer"
                width={384} // w-96 = 24rem = 384px on larger screens
                height={448} // Proportional height
                className="w-full h-full object-contain"
                priority
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 640px) 320px, 384px"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold -mt-10 mb-6 bg-gradient-to-r from-[#548AB7] to-[#548AB7] bg-clip-text text-transparent">
            Laurenz Bilek
          </h1>
          
          <p className="text-xl sm:text-2xl text-[#548AB7] dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Informatics student blending software engineering skills with strong communication and teamwork
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
          
                    <div className="relative">
            <div className="pr-0 md:pr-80">
              <p className="text-lg text-[#548AB7] dark:text-gray-300 mb-6 leading-relaxed">
                I&apos;m an informatics student at TU Wien with a strong interest in Cybersecurity and AI, driven by curiosity and a hands-on mindset. 
                Outside coding, I&apos;m passionate about nature, intense sports like kickboxing and heavy lifting, and taking on work that challenges both body and mind.
              </p>
              <p className="text-lg text-[#548AB7] dark:text-gray-300 mb-6 leading-relaxed">
                I thrive in collaborative environments and have developed solid communication and problemsolving skills through honorary work at a large student dorm, where I served as a Heimvertretungsmitglied and IT advisor. 
                There, I managed everything from EKey fingerprint systems to network infrastructure, printers, and multimedia systems, which combined technical support with strong interpersonal responsibility.
              </p>
              <p className="text-lg text-[#548AB7] dark:text-gray-300 leading-relaxed">
                Whether it&apos;s working on complex software or navigating tough physical challenges, I bring persistence, high frustration tolerance, and a team-first attitude to everything I do.
              </p>
            </div>
            
            <div className="static md:absolute md:top-0 md:right-0 mt-8 md:mt-0 w-full md:w-72">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-[#548AB7]/20 dark:border-gray-600">
                <h3 className="text-xl font-semibold mb-4 text-[#548AB7] dark:text-white">Quick Facts</h3>
                <ul className="space-y-3 text-[#548AB7] dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="text-lg mr-3">🎓</span>
                    <span>Software Engineering Student @ TUWien</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-lg mr-3">🌍</span>
                    <span>Based in Vienna</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-lg mr-3">🚀</span>
                    <span>Positive, social, yet practical-oriented mindset</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-lg mr-3">💡</span>
                    <span>Currently interested in projects dealing with Web Security, Cloud & AI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#D6D3CD] dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[#548AB7] dark:text-white">Selection of my Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SMB ERP System */}
            <ProjectCard
              title="SMB ERP System"
              description="A modern ERP system for small and medium-sized businesses, developed with Clean Architecture and Domain-Driven Design principles."
              technologies={['.NET 8', 'Entity Framework Core', 'ASP.NET Core', 'SQLite', 'Razor Pages']}
              features={[
                'Clean Architecture with four clearly separated layers',
                'Designed for on-premise usage',
                'Customer and inventory management',
                'Invoice creation and management',
                'ASP.NET Core Identity for user authentication',
                'Automatic audit trail logging'
              ]}
              githubLink="https://github.com/Sykios/SMB-ERP"
              status="in-progress"
            />

            {/* JobManager - Application Management Desktop App */}
            <ProjectCard
              title="JobManager - Application Tracker"
              description="A digital job application management tool for job seekers to organize applications and maintain oversight of all application processes."
              technologies={['React', 'TypeScript', 'Electron', 'SQLite', 'Tailwind CSS']}
              features={[
                'Cross-Platform Desktop App (Windows, macOS, Linux)',
                'Application tracking with file upload functionality',
                'Automated status management and visual timeline',
                'Deadlines & email reminders through web API - synced via cloud storage',
                'Contact and company data for statistics',
                'Search & filter by various criteria'
              ]}
              githubLink="https://github.com/Sykios/JobManager"
              status="in-progress"
            />

            {/* Plant Care Assistant using AI */}
            <ProjectCard
              title="Plant Care Assistant using AI"
              description="I would like to build a smart plant care assistant where users register their plants and an AI system monitors visual health and environmental conditions to provide personalized care recommendations and reminders. Roughly the planned features include:"
              technologies={['React Native', 'Python FastAPI', 'Computer Vision', 'SQLite', 'IoT Integration', 'Push Notifications']}
              features={[
                'Visual health assessment. Planning to use existing AI models which analyze plant photos for stress, disease, or nutrient deficiency',
                'Smart watering alerts based on: soil moisture measured with sensors, weather through an API, and plant visual condition',
                'Personalized care schedules that adapt based on your plant\'s actual response',
                'Problem diagnosis with photo comparison, like: "Your tomato leaves show nitrogen deficiency" ',
                'Growth tracking and seasonal care adjustments',
                'Environmental optimization tips based on light/humidity readings'
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
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#EAE8E8] dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#548AB7] dark:text-white">Let&apos;s Work Together</h2>
          <p className="text-xl text-[#548AB7] dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. <br />
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

      <Footer />
    </div>
  );
}
