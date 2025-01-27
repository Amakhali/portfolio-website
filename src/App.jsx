import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Menu, X, ExternalLink, ChevronRight } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  // Skills data
  const skills = {
    frontend: [
      { name: 'React/Next.js', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'Tailwind/Chakra UI', level: 85 },
      { name: 'HTML/CSS', level: 85 }
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'Python', level: 85 }
    ],
    other: [
      { name: 'Machine Learning', level: 85 },
      { name: 'Data Analysis', level: 80 },
      { name: 'Jest/Cypress', level: 75 },
      { name: 'GraphQL', level: 70 }
    ]
  };

  // Projects data
  const projects = [
    {
      title: 'My Recipe',
      description: 'A React application that allows users to search for meals and add them to favorites. Built with React and TailwindCSS, featuring a detailed view for each meal.',
      tech: ['React', 'TailwindCSS', 'API Integration'],
      link: 'https://amakhali.github.io/meal-recipe/'
    },
    {
      title: 'Expense App',
      description: 'An expense tracking application built with React and Chakra UI. Features income/expense tracking, descriptions, balance calculations, and visualization through pie charts.',
      tech: ['React', 'Chakra UI', 'Data Visualization'],
      link: 'https://amakhali.github.io/expenseapp/'
    },
    {
      title: 'MERN Blog App',
      description: 'A full-stack blog application built with the MERN stack. Users can create and view blog posts, with data persistence in MongoDB.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      link: 'https://amakhali.github.io/mernblogapp/'
    },
    {
      title: 'Crypto App',
      description: 'A React-based cryptocurrency information application that displays various crypto pairs and their values using API integration.',
      tech: ['React', 'API Integration', 'Data Display'],
      link: 'https://amakhali.github.io/cryptoapp/'
    },
    {
      title: 'Sales-Predictor ML',
      description: 'A machine learning project using Python and Scikit-learn. Analyzes customer shopping preferences to predict product purchase quantities using logistic regression.',
      tech: ['Python', 'Scikit-learn', 'Data Analysis'],
      link: 'https://github.com/Amakhali/sales-predictor'
    },
    {
      title: 'Microsoft_stock_analysis',
      description: 'A machine learning project using Python and Scikit-learn. Analyzes customer shopping preferences to predict product purchase quantities using logistic regression.',
      tech: ['Python', 'Scikit-learn', 'Data Analysis'],
      link: 'https://github.com/Amakhali/Microsoft_stock_analysis'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        setIsVisible(prev => ({
          ...prev,
          [section.id]: rect.top < window.innerHeight - 100
        }));
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-800 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold">Ayofe Mukodaz</span>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => {
                    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(section);
                  }}
                  className={`capitalize ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300'
                  } hover:text-blue-300 transition-colors`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => {
                    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
                    setIsMenuOpen(false);
                    setActiveSection(section);
                  }}
                  className="block w-full text-left px-3 py-2 text-base text-gray-300 capitalize hover:text-blue-300"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className={`pt-24 pb-16 px-4 transition-opacity duration-1000 ${
          isVisible.home ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Full Stack Developer & ML Engineer
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Crafting innovative solutions with modern technologies
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Amakhali" className="p-2 hover:text-blue-400 transition-colors">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/mukodaz-ayofe-67513b234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app" 
            className="p-2 hover:text-blue-400 transition-colors">
              <Linkedin />
            </a>
            <a href="mailto:mukodazayofe@gmail.com" className="p-2 hover:text-blue-400 transition-colors">
              <Mail />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`py-16 px-4 bg-gray-800 transition-opacity duration-1000 ${
          isVisible.about ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <img src="/myphoto.jpg" alt="Ayofe Mukodaz" className="block float-left size-40 m-6 rounded" />
            <article className="text-pretty p-4">
              <p className="text-wrap text-balance align-middle p-6 text-gray-300">
                Hello, I am Ayofe Mukodaz, a passionate and driven software developer with over 3 years of
                hands-on experience in crafting robust and innovative software solutions. My journey in software
                development has equipped me with a diverse skill set that spans both frontend and backend
                technologies. I specialize in languages such as Python and JavaScript, and I am well-versed in
                frameworks and tools including React.js, Next.js, CSS, Tailwinnd.CSS, Chakra UI,
                Node.js, Jest, Cypress, Redux, Express.js, MongoDB, and GraphQL. My expertise extends into
                the realm of AI and Machine Learning, where I have utilized
                Python for data analysis and visualization. With proficiency in libraries like Pandas, NumPy,
                Matplotlib, Seaborn, Scikit-Learn, TensorFlow, and Natural Language Processing (NLP), I am adept
                at turning complex data into actionable insights.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className={`py-16 px-4 transition-opacity duration-1000 ${
          isVisible.skills ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold mb-6 capitalize">{category}</h3>
                <div className="space-y-6">
                  {items.map(skill => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded">
                        <div
                          className="h-full bg-blue-500 rounded transition-all duration-1000"
                          style={{
                            width: isVisible.skills ? `${skill.level}%` : '0%'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`py-16 px-4 bg-gray-800 transition-opacity duration-1000 ${
          isVisible.projects ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg shadow-xl p-6 transform hover:-translate-y-2 transition-all duration-300 border border-gray-700"
              >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className={`py-16 px-4 transition-opacity duration-1000 ${
          isVisible.contact ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Send Message
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;