import React from 'react';
import { Github, Linkedin, Mail, Code, Database, Globe, Server, Download, GraduationCap, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-blue-400 font-bold text-xl">Portfolio</a>
            <div className="space-x-6">
              <a href="#about" className="text-gray-300 hover:text-white">About</a>
              <a href="#education" className="text-gray-300 hover:text-white">Education</a>
              <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
              <a href="#certifications" className="text-gray-300 hover:text-white">Certifications</a>
              <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Hi, I'm <span className="text-blue-400">John Doe</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Full Stack Software Engineer passionate about creating elegant solutions to complex problems
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <a href="#" className="p-2 hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="p-2 hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-2 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-slate-800/50 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 mb-4">
              With over 5 years of experience in software development, I specialize in building scalable web applications
              using modern technologies. I'm passionate about clean code, performance optimization, and creating
              exceptional user experiences.
            </p>
            <p className="text-gray-300">
              Currently working as a Senior Software Engineer at Tech Corp, where I lead the development of enterprise-level
              applications and mentor junior developers.
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-slate-800/50 p-6 rounded-lg flex gap-4">
              <div className="flex-shrink-0">
                <GraduationCap className="text-blue-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
                <p className="text-blue-400">Stanford University</p>
                <p className="text-gray-300">2018 - 2020</p>
                <ul className="text-gray-300 mt-2 list-disc list-inside">
                  <li>Specialized in Artificial Intelligence and Machine Learning</li>
                  <li>GPA: 3.9/4.0</li>
                  <li>Research Assistant in Natural Language Processing Lab</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg flex gap-4">
              <div className="flex-shrink-0">
                <GraduationCap className="text-blue-400" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h3>
                <p className="text-blue-400">MIT</p>
                <p className="text-gray-300">2014 - 2018</p>
                <ul className="text-gray-300 mt-2 list-disc list-inside">
                  <li>Dean's List all semesters</li>
                  <li>Led the University's Programming Team</li>
                  <li>Senior Project: AI-powered Code Review System</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-slate-800/50 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-900/50 p-6 rounded-lg">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Redux</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg">
              <Server className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>REST APIs</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg">
              <Database className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Database</h3>
              <ul className="text-gray-300 space-y-2">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg">
              <Globe className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-3">Other</h3>
              <ul className="text-gray-300 space-y-2">
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Award className="text-blue-400 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold">AWS Solutions Architect Professional</h3>
                  <p className="text-blue-400">Amazon Web Services</p>
                  <p className="text-gray-300">Issued Dec 2024 - Expires Dec 2027</p>
                  <p className="text-gray-300 mt-2">Credential ID: AWS-SAP-123456</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Award className="text-blue-400 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold">Google Cloud Professional Architect</h3>
                  <p className="text-blue-400">Google Cloud</p>
                  <p className="text-gray-300">Issued Jun 2024 - Expires Jun 2026</p>
                  <p className="text-gray-300 mt-2">Credential ID: GCP-PA-789012</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Award className="text-blue-400 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold">Microsoft Azure Solutions Expert</h3>
                  <p className="text-blue-400">Microsoft</p>
                  <p className="text-gray-300">Issued Mar 2024 - Expires Mar 2026</p>
                  <p className="text-gray-300 mt-2">Credential ID: MAZE-345678</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <Award className="text-blue-400 flex-shrink-0" size={32} />
                <div>
                  <h3 className="text-xl font-semibold">Certified Kubernetes Administrator</h3>
                  <p className="text-blue-400">Cloud Native Computing Foundation</p>
                  <p className="text-gray-300">Issued Jan 2024 - Expires Jan 2027</p>
                  <p className="text-gray-300 mt-2">Credential ID: CKA-901234</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-slate-800/50 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-slate-900 rounded-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60`}
                  alt="Project Preview"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-300 mb-4">
                    A full-stack application built with React, Node.js, and PostgreSQL.
                    Features include real-time updates and OAuth authentication.
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Github size={16} /> Code
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <Globe size={16} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-slate-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-slate-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-slate-800 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;