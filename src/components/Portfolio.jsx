import { useState } from 'react';
import developerData from '../developmentData';

// Custom icon components instead of using lucide-react
const IconServer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);

const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const IconDatabase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
);

const IconTerminal = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"></polyline>
    <line x1="12" y1="19" x2="20" y2="19"></line>
  </svg>
);

const IconGitHub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const IconAward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const IconBookOpen = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const IconFileText = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
  </svg>
);

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('about');

  const developer = developerData;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-indigo-600 dark:text-indigo-400 mr-2">
              <IconServer />
            </span>
            <h1 className="text-xl font-bold">{developer.name}</h1>
          </div>
          <nav className="flex space-x-1 md:space-x-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors
                  ${activeTab === tab 
                    ? 'bg-indigo-600 text-white' 
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-12">
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <div className="h-24 w-24 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-4">
            <span className="text-indigo-600 dark:text-indigo-400">
              <IconTerminal />
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{developer.name}</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">{developer.title}</h2>
          <p className="max-w-2xl text-center text-indigo-100">{developer.about}</p>
          <div className="flex mt-6 space-x-4">
            <a href={`https://${developer.contact.github}`} className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-100 transition-colors">
              <IconGitHub />
            </a>
            <a href={`https://${developer.contact.linkedin}`} className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-100 transition-colors">
              <IconLinkedin />
            </a>
            <a href={`mailto:${developer.contact.email}`} className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-100 transition-colors">
              <IconMail />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                <IconCode />
              </span>
              About Me
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <p className="mb-4">
                I'm a passionate backend developer focused on building robust, efficient server-side applications 
                that power modern web and mobile experiences. With a strong foundation in system architecture 
                and database design, I create scalable solutions that can handle millions of requests.
              </p>
              <p className="mb-4">
                My expertise includes API development, microservices architecture, database optimization, 
                and implementing security best practices. I'm constantly exploring new technologies and 
                methodologies to improve my craft and deliver better solutions.
              </p>
              <p>
                When I'm not coding, I contribute to open-source projects and share my knowledge through 
                technical articles and community engagement. I believe in writing clean, maintainable code 
                that solves real business problems efficiently.
              </p>
            </div>
          </div>
        )}

        {/* Skills Section */}
        {activeTab === 'skills' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                <IconDatabase />
              </span>
              Technical Skills
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {developer.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="font-bold mb-3">Additional Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {developer.additonalSkills.map((additonalSkill, index) => (
  <span 
    key={index} 
    className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
  >
    {additonalSkill.name}
  </span>
))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeTab === 'experience' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                <IconAward />
              </span>
              Professional Experience
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="space-y-8">
                {developer.experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-indigo-600 dark:border-indigo-400 pl-4">
                    <h3 className="font-bold text-lg">{job.position}</h3>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-indigo-600 dark:text-indigo-400 font-medium">{job.company}</span>
                      <span className="text-gray-500 dark:text-gray-400">{job.period}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeTab === 'projects' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                <IconServer />
              </span>
              Notable Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {developer.projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="mr-1">
                      <IconCode />
                    </span>
                    <span>{project.tech}</span>
                  </div>
                  <a 
                    href={project.link} 
                    className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <span className="mr-1">
                      <IconGitHub />
                    </span>
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {activeTab === 'education' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                <IconBookOpen />
              </span>
              Education & Certifications
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="space-y-6">
                {developer.education.map((edu, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between">
                    <div>
                      <h3 className="font-bold">{edu.degree}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    </div>
                    <span className="text-indigo-600 dark:text-indigo-400">{edu.year}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="font-bold mb-3">Certifications</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                      <IconFileText />
                    </span>
                    AWS Certified Solutions Architect
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                      <IconFileText />
                    </span>
                    Microsoft Certified: Azure Developer Associate
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                      <IconFileText />
                    </span>
                    MongoDB Certified Developer
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                <IconMail />
              </span>
              Get In Touch
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                        <IconMail />
                      </span>
                      <a href={`mailto:${developer.contact.email}`} className="hover:underline">
                        {developer.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                        <IconGitHub />
                      </span>
                      <a href={`https://${developer.contact.github}`} className="hover:underline" target="_blank" rel="noreferrer">
  {developer.contact.github}
</a>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-indigo-600 dark:text-indigo-400">
                        <IconLinkedin />
                      </span>
                      
                      <a href={`https://${developer.contact.linkedin}`} className="hover:underline" target="_blank" rel="noreferrer">
  {developer.contact.linkedin}
</a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold mb-4">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700"
                        rows="4"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} {developer.name} | Backend Developer</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href={`https://${developer.contact.github}`} className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <IconGitHub />
            </a>
            <a href={`https://${developer.contact.linkedin}`} className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <IconLinkedin />
            </a>
            <a href={`mailto:${developer.contact.email}`} className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              <IconMail />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
