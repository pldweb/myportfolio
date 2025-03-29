import React, { useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter,
  Code2,
  Briefcase,
  Image as ImageIcon,
  Award,
  AlignCenterVertical as Certificate,
  Wrench,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

import bgImage from "./assets/bg-river.svg";
import image1 from "./assets/website-1.png";


const bgStyle = {
  backgroundImage: `url(${bgImage})`,
  position: "fixed",
  top: "0",
  left: "0",
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: -1,
};

const nama = "Muhammad Rivaldi Fanani";
const role = "Code Enthusiast"

function App() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.fade-section').forEach((section) => {
      observer.observe(section);
    });


    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">

      {/* Header */}
      <nav className="fixed w-full z-30 px-4 py-4 flex justify-between items-center bg-white shadow-sm">
          <a className="text-3xl font-bold leading-none" href="#">
            <svg className="h-10" alt="logo" viewBox="0 0 10240 10240">
              <path xmlns="http://www.w3.org/2000/svg" d="M8284 9162 c-2 -207 -55 -427 -161 -667 -147 -333 -404 -644 -733 -886 -81 -59 -247 -169 -256 -169 -3 0 -18 -9 -34 -20 -26 -19 -344 -180 -354 -180 -3 0 -29 -11 -58 -24 -227 -101 -642 -225 -973 -290 -125 -25 -397 -70 -480 -80 -22 -3 -76 -9 -120 -15 -100 -13 -142 -17 -357 -36 -29 -2 -98 -7 -153 -10 -267 -15 -436 -28 -525 -40 -14 -2 -45 -7 -70 -10 -59 -8 -99 -14 -130 -20 -14 -3 -41 -7 -60 -11 -19 -3 -39 -7 -45 -8 -5 -2 -28 -6 -50 -10 -234 -45 -617 -165 -822 -257 -23 -10 -45 -19 -48 -19 -7 0 -284 -138 -340 -170 -631 -355 -1107 -842 -1402 -1432 -159 -320 -251 -633 -308 -1056 -26 -190 -27 -635 -1 -832 3 -19 7 -59 10 -89 4 -30 11 -84 17 -120 6 -36 12 -77 14 -91 7 -43 33 -174 39 -190 3 -8 7 -28 9 -45 6 -35 52 -221 72 -285 7 -25 23 -79 35 -120 29 -99 118 -283 189 -389 67 -103 203 -244 286 -298 75 -49 178 -103 196 -103 16 0 27 16 77 110 124 231 304 529 485 800 82 124 153 227 157 230 3 3 28 36 54 74 116 167 384 497 546 671 148 160 448 450 560 542 14 12 54 45 90 75 88 73 219 172 313 238 42 29 77 57 77 62 0 5 -13 34 -29 66 -69 137 -149 405 -181 602 -7 41 -14 82 -15 90 -1 8 -6 46 -10 83 -3 37 -8 77 -10 88 -2 11 -7 65 -11 122 -3 56 -8 104 -9 107 -2 3 0 12 5 19 6 10 10 8 15 -10 10 -34 167 -346 228 -454 118 -210 319 -515 340 -515 4 0 40 18 80 40 230 128 521 255 787 343 118 40 336 102 395 113 28 5 53 11 105 23 25 5 59 12 75 15 17 3 41 8 55 11 34 7 274 43 335 50 152 18 372 29 565 29 194 0 481 -11 489 -19 2 -3 -3 -6 -12 -6 -9 -1 -20 -2 -24 -3 -33 -8 -73 -16 -98 -21 -61 -10 -264 -56 -390 -90 -649 -170 -1243 -437 -1770 -794 -60 -41 -121 -82 -134 -93 l-24 -18 124 -59 c109 -52 282 -116 404 -149 92 -26 192 -51 220 -55 17 -3 64 -12 105 -21 71 -14 151 -28 230 -41 19 -3 46 -7 60 -10 14 -2 45 -7 70 -10 25 -4 56 -8 70 -10 14 -2 53 -7 88 -10 35 -4 71 -8 81 -10 10 -2 51 -6 92 -9 101 -9 141 -14 147 -21 3 -3 -15 -5 -39 -6 -24 0 -52 -2 -62 -4 -21 -4 -139 -12 -307 -22 -242 -14 -700 -7 -880 13 -41 4 -187 27 -250 39 -125 23 -274 68 -373 111 -43 19 -81 34 -86 34 -4 0 -16 -8 -27 -17 -10 -10 -37 -33 -59 -52 -166 -141 -422 -395 -592 -586 -228 -257 -536 -672 -688 -925 -21 -36 -43 -66 -47 -68 -4 -2 -8 -7 -8 -11 0 -5 -24 -48 -54 -97 -156 -261 -493 -915 -480 -935 2 -3 47 -21 101 -38 54 -18 107 -36 118 -41 58 -25 458 -138 640 -181 118 -27 126 -29 155 -35 14 -2 45 -9 70 -14 66 -15 137 -28 300 -55 37 -7 248 -33 305 -39 28 -3 84 -9 125 -13 163 -16 792 -8 913 12 12 2 58 9 102 15 248 35 423 76 665 157 58 19 134 46 170 60 86 33 344 156 348 166 2 4 8 7 13 7 14 0 205 116 303 184 180 126 287 216 466 396 282 281 511 593 775 1055 43 75 178 347 225 455 100 227 236 602 286 790 59 220 95 364 120 485 6 28 45 245 50 275 2 14 7 41 10 60 3 19 8 49 10 65 2 17 6 46 9 65 15 100 35 262 40 335 3 39 8 89 10 112 22 225 33 803 21 1043 -3 41 -7 129 -11 195 -3 66 -8 136 -10 155 -2 19 -6 76 -10 125 -3 50 -8 101 -10 115 -2 14 -6 57 -10 95 -7 72 -12 113 -20 175 -2 19 -7 55 -10 80 -6 46 -43 295 -51 340 -2 14 -9 54 -15 90 -5 36 -16 97 -24 135 -8 39 -17 84 -20 100 -12 68 -18 97 -50 248 -19 87 -47 204 -61 260 -14 56 -27 109 -29 117 -30 147 -232 810 -253 832 -4 4 -7 -23 -8 -60z"></path>
            </svg>
          </a>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-blue-600 p-3">
              <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a></li>
            <li className="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <li><a className="text-sm text-blue-600 font-bold" href="#">About Us</a></li>
            <li className="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Services</a></li>
            <li className="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Pricing</a></li>
            <li className="text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </li>
            <li><a className="text-sm text-gray-400 hover:text-gray-500" href="#">Contact</a></li>
          </ul>
          <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
          <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
      </nav>

      <div style={bgStyle}></div>

      {/* Hero Section */}
      <section className="relative py-20 flex items-center justify-center">
        <div className="absolute from-transparent to-black/30"></div>
        <div className="relative z-10 text-center fade-section">
          <h1 className="text-6xl font-bold mb-4 text-slate-900">{nama}</h1>
          <p className="text-2xl mb-8 text-slate-900">{role}</p>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-white" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 fade-section">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Briefcase className="w-8 h-8 text-asphalt-500" />
            <h2 className="text-4xl font-bold text-gray-800">Portfolio</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-featured online shopping platform',
                image: {image1},
                domain: 'shop.example.com',
                link: 'https://shop.example.com'
              },
              {
                title: 'Travel Blog',
                description: 'Personal travel blog with dynamic content',
                image: 'https://source.unsplash.com/random/800x600?travel',
                domain: 'travel.example.com',
                link: 'https://travel.example.com'
              },
              {
                title: 'Task Management App',
                description: 'Project management tool for teams',
                image: 'https://source.unsplash.com/random/800x600?task',
                domain: 'tasks.example.com',
                link: 'https://tasks.example.com'
              }
            ].map((item, index) => (
              <div key={index} 
                className="group rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a 
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-asphalt-500 hover:text-asphalt-600 flex items-center gap-2 transition-colors"
                  >
                    {item.domain}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 asphalt-grid fade-section">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 justify-center mb-12">
            <ImageIcon className="w-8 h-8 text-asphalt-500" />
            <h2 className="text-4xl font-bold text-gray-800">Gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-xl card-hover">
                <img 
                  src={`https://source.unsplash.com/random/400x400?workspace,${item}`}
                  alt={`Gallery ${item}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 fade-section">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Code2 className="w-8 h-8 text-asphalt-500" />
            <h2 className="text-4xl font-bold text-gray-800">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <h3 className="text-xl font-semibold mb-2">Project Name {item}</h3>
                <p className="text-gray-600 mb-4">Detailed description of the project including technologies used and challenges overcome.</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-asphalt-50 text-asphalt-600 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-asphalt-50 text-asphalt-600 rounded-full text-sm">TypeScript</span>
                  <span className="px-3 py-1 bg-asphalt-50 text-asphalt-600 rounded-full text-sm">Tailwind</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 asphalt-grid fade-section">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Award className="w-8 h-8 text-asphalt-500" />
            <h2 className="text-4xl font-bold text-gray-800">Experience</h2>
          </div>
          <div className="space-y-8">
            {[
              { year: '2022 - Present', title: 'Senior Developer', company: 'Tech Corp' },
              { year: '2020 - 2022', title: 'Full Stack Developer', company: 'StartUp Inc' },
              { year: '2018 - 2020', title: 'Junior Developer', company: 'Web Solutions' },
            ].map((exp, index) => (
              <div key={index} className="flex gap-6 items-start group hover:bg-asphalt-50 p-4 rounded-xl transition-colors duration-300 card-hover">
                <div className="w-32 flex-shrink-0">
                  <p className="text-asphalt-600 font-semibold">{exp.year}</p>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold group-hover:text-asphalt-600 transition-colors">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-gray-50 fade-section">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Certificate className="w-8 h-8 text-asphalt-500" />
            <h2 className="text-4xl font-bold text-gray-800">Certificates</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'AWS Certified Solutions Architect',
                image: 'https://source.unsplash.com/random/400x300?aws',
                issuer: 'Amazon Web Services'
              },
              {
                name: 'Google Cloud Professional Developer',
                image: 'https://source.unsplash.com/random/400x300?google',
                issuer: 'Google Cloud'
              },
              {
                name: 'Meta Frontend Developer',
                image: 'https://source.unsplash.com/random/400x300?meta',
                issuer: 'Meta'
              },
              {
                name: 'MongoDB Certified Developer',
                image: 'https://source.unsplash.com/random/400x300?mongodb',
                issuer: 'MongoDB University'
              },
              {
                name: 'Docker Certified Associate',
                image: 'https://source.unsplash.com/random/400x300?docker',
                issuer: 'Docker'
              },
              {
                name: 'Kubernetes Administrator',
                image: 'https://source.unsplash.com/random/400x300?kubernetes',
                issuer: 'Cloud Native Computing Foundation'
              }
            ].map((cert, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden card-hover">
                <div className="relative h-48">
                  <img 
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600">Issued by: {cert.issuer}</p>
                  <p className="text-gray-500 text-sm mt-2">Issued: 2023</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Skills Section */}
      <section className="py-20 asphalt-grid fade-section">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 justify-center mb-12">
            <Wrench className="w-8 h-8 text-asphalt-500" />
            <h2 className="text-4xl font-bold text-gray-800">Tools & Skills</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'JavaScript', 'TypeScript', 'React', 'Node.js',
              'Python', 'Docker', 'AWS', 'MongoDB',
              'Git', 'GraphQL', 'PostgreSQL', 'Redis'
            ].map((skill, index) => (
              <div key={index} 
                className="bg-white p-4 rounded-xl text-center card-hover border border-gray-100">
                <p className="font-semibold text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-50 fade-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Connect With Me</h2>
          <div className="flex justify-center gap-8">
            <a href="https://github.com/pldweb" className="text-gray-600 hover:text-asphalt-500 transition-colors transform hover:-translate-y-1 duration-300">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-rivaldi-fanani-550772318/" className="text-gray-600 hover:text-asphalt-500 transition-colors transform hover:-translate-y-1 duration-300">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://instagram.com/rivaldipostman" className="text-gray-600 hover:text-asphalt-500 transition-colors transform hover:-translate-y-1 duration-300">
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">{nama}</h3>
            <p className="mb-4">{role}</p>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;