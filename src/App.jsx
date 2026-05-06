// ===============================
// MODERN PORTFOLIO WEBSITE
// ===============================

export default function Portfolio() {
  if (typeof document !== 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  const projects = [
    {
      title: 'Women Safety App',
      desc:
        'Developing a safety-focused application based on Indian real-world situations to enhance user security. Working on features like emergency alerts, location sharing, and quick response mechanisms.',
      tech: 'JavaScript • Node.js • MongoDB',
      liveDemo: '',
      github: '',
      disabled: true,
    },
    {
      title: 'Blackjack Game',
      desc:
        'Developed a browser-based Blackjack game using JavaScript. Implemented game logic, card handling, and interactive user gameplay.',
      tech: 'JavaScript • HTML • CSS',
      // ADD YOUR BLACKJACK LIVE DEMO LINK HERE
      liveDemo: 'https://your-blackjack-demo-link.com',
      // ADD YOUR BLACKJACK GITHUB LINK HERE
      github: 'https://github.com/yourusername/blackjack-game',
      disabled: false,
    },
  ];

  const certificates = [
    {
      title: 'Advanced Python Topics: File Operations in Python',
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
      link: 'https://www.linkedin.com/posts/theerthananda_python-infosys-learning-share-7417555798303666176-ZS6x?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNpaaMBG0jaW0IoFToHrcyqhBUQqGx8rD8',
    },
    {
      title: 'Generative AI & Emerging Technologies Seminar',
      image:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
      link: 'https://www.linkedin.com/posts/theerthananda_generativeai-iot-cloudcomputing-share-7434593824980598784-aUUJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNpaaMBG0jaW0IoFToHrcyqhBUQqGx8rD8',
    },
    {
      title: 'Software Development  Internship',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      link: 'https://www.linkedin.com/posts/theerthananda_internship-softwaredevelopment-learningjourney-share-7417823739687608321-tl6V?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNpaaMBG0jaW0IoFToHrcyqhBUQqGx8rD8',
    },
  ];

  const experiences = [
    {
      company: 'Prodigy InfoTech',
      role: 'Software Development Intern',
      duration: '12/2024 – 12/2024 | Remote',
      description1:
        'Completed a 1-month internship in software development at Prodigy InfoTech.',
      description2:
        'Gained hands-on experience in coding, problem-solving, and development workflow.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
      offerLetter: 'https://www.linkedin.com/posts/theerthananda_prodigyinfotech-share-7274767099128860672-hCVF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFNpaaMBG0jaW0IoFToHrcyqhBUQqGx8rD8',
    },
  ];

  const skills = [
    {
      name: 'Java',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
      name: 'C',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    },
    {
      name: 'JavaScript',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'Node.js',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'SQL',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    },
    {
      name: 'DSA',
      logo:
        'https://cdn-icons-png.flaticon.com/512/2103/2103633.png',
    },
    {
      name: 'Git',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'GitHub',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
      name: 'Linux',
      logo:
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden relative">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-cyan-500/10 shadow-lg shadow-cyan-500/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* CHANGE YOUR NAME HERE */}
          <h1 className="text-2xl font-bold tracking-wide">Theerthananda</h1>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
            <a href="#about" className="hover:text-cyan-400 transition duration-300 hover:scale-110">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition duration-300 hover:scale-110">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition duration-300 hover:scale-110">Projects</a>
            <a href="#certifications" className="hover:text-cyan-400 transition duration-300 hover:scale-110">Certifications</a>
            <a href="#experience" className="hover:text-cyan-400 transition duration-300 hover:scale-110">Experience</a>
            <a href="#education" className="hover:text-cyan-400 transition duration-300 hover:scale-110">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition duration-300 hover:scale-110">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl z-10">
          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4 text-sm">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Hi, I’m <span className="text-cyan-400">Theerthananda</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
            Software Developer
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg mb-10">
            I am passionate about software development, problem-solving, and building efficient applications that provide practical real-world solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold"
            >
              View Projects
            </a>

            {/* CHANGE RESUME FILE PATH HERE */}
            <a
              href="/Theerthananda CV.pdf"
              className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-semibold"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
  src="/theerthananda.jpg"
  alt="Theerthananda"
  className="w-72 h-72 rounded-3xl object-cover mx-auto shadow-2xl shadow-cyan-500/20 border border-cyan-400"
/>

          <div>
            <p className="text-cyan-400 uppercase tracking-[0.2em] mb-3 text-sm">
              About Me
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Passionate Software Developer & Problem Solver
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              I am passionate about software development, problem-solving, and building efficient applications that provide practical real-world solutions.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-6 bg-white/5 backdrop-blur-md border-y border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.2em] mb-3 text-sm">Skills</p>

          <h2 className="text-4xl font-bold mb-14">Technologies I Work With</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:-translate-y-2 transition duration-300 shadow-lg"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-14 h-14 mx-auto mb-4 object-contain"
                />

                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <section id="certifications" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.2em] mb-3 text-sm">Certificates</p>
            <h2 className="text-4xl font-bold">Certifications & Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-cyan-400 transition duration-300 hover:-translate-y-2 shadow-2xl"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold leading-relaxed mb-6">{cert.title}</h3>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block text-center px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-medium w-full"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.2em] mb-3 text-sm">Projects</p>
            <h2 className="text-4xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-cyan-400 transition duration-300 hover:-translate-y-2 shadow-xl"
              >
                <div className="h-56 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center text-3xl font-bold text-center p-6">
                  {project.title}
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>

                  <p className="text-gray-400 leading-relaxed mb-5">{project.desc}</p>

                  <p className="text-sm text-cyan-300 mb-6">{project.tech}</p>

                  <div className="flex gap-4">
                    {project.disabled ? (
                      <>
                        <button
                          disabled
                          className="px-5 py-3 rounded-xl bg-gray-700 text-gray-400 cursor-not-allowed font-medium"
                        >
                          Live Demo
                        </button>

                        <button
                          disabled
                          className="px-5 py-3 rounded-xl border border-gray-700 text-gray-500 cursor-not-allowed font-medium"
                        >
                          GitHub
                        </button>
                      </>
                    ) : (
                      <>
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-medium"
                        >
                          Live Demo
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-3 rounded-xl border border-white/20 hover:border-cyan-400 transition font-medium"
                        >
                          GitHub
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE SECTION */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.2em] mb-3 text-sm">Experience</p>
            <h2 className="text-4xl font-bold">Professional Experience</h2>
          </div>

          <div className="grid md:grid-cols-1 gap-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-cyan-400 transition duration-300 shadow-2xl"
              >
                <div className="grid md:grid-cols-2">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover min-h-[320px]"
                  />

                  <div className="p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-3">{exp.company}</h3>

                    <p className="text-cyan-400 text-xl font-medium mb-4">{exp.role}</p>

                    <p className="text-gray-400 mb-6">{exp.duration}</p>

                    <ul className="space-y-3 text-gray-300 mb-8">
                      <li>• {exp.description1}</li>
                      <li>• {exp.description2}</li>
                    </ul>

                    <a
                      href={exp.offerLetter}
                      target="_blank"
                      rel="noreferrer"
                      className="w-fit px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold"
                    >
                      View Offer Letter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-24 px-6 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[0.2em] mb-3 text-sm">Education</p>
            <h2 className="text-4xl font-bold">Academic Journey</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
              <img
                src="/SDM-College3-1-scaled.jpg"
                alt="SDM College"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">SDM College (Autonomous), Ujire</h3>
                <p className="text-cyan-400 font-medium mb-4">B.Sc (Physics & Computer Science)</p>
                <p className="text-gray-400 mb-2">2022 – 05/2025</p>
                <p className="text-gray-400">Ujire, Karnataka, India</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-2xl">
              <img
                src="/jss.png"
                alt="JSS College"
                className="w-full h-64 object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">JSS College, Ooty Road, Mysuru</h3>
                <p className="text-cyan-400 font-medium mb-4">M.Sc (Computer Science)</p>
                <p className="text-gray-400 mb-2">09/2025 – Present</p>
                <p className="text-gray-400">Mysuru, Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-cyan-400 uppercase tracking-[0.2em] mb-3 text-sm">Contact</p>
          <h2 className="text-5xl font-bold mb-8">Let’s Work Together</h2>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="mailto:theerthanandagowda@gmail.com"
              className="px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-semibold"
            >
              Email
            </a>

            <a
              href="https://github.com/Theerthananda"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition font-semibold"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/theerthananda/"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        Designed & Developed by Theerthananda © 2026.
      </footer>
    </div>
  );
}
