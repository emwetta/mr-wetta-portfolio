import React, { useState, useEffect, useRef } from 'react';
import mrWettaImg from './mr-wetta.jpeg'; 
import emailjs from '@emailjs/browser';

// 1. IMPORT YOUR PROJECT IMAGES HERE
import aidFidelisImg from './aidfidelis.jpeg'; 
import deWrapSquareImg from './dewrapsquare.jpeg';
import equalPayImg from './equalpay.jpeg';

function App() {
  const roles = [
    "Problem Solver",
    "Front-end Developer",
    "Creative Thinker",
    "Vibe Coder",
    "UI/UX Enthusiast"
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  
  // States
  const [selectedProject, setSelectedProject] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true); 
      }, 500); 
    }, 3000); 

    return () => clearInterval(roleInterval);
  }, [roles.length]);

  const projects = [
    { 
      title: "AidFidelis (Neuro Pharm)", 
      description: "AI-powered symptom checker and e-pharmacy platform utilizing machine learning for disease prediction.", 
      tech: ["React", "PyTorch", "Gemini API", "Firebase"],
      image: aidFidelisImg,
      status: "Production",
      repoPath: "raenchill/AidFidelis", 
      githubLink: "https://github.com/raenchill/AidFidelis" 
    },
    { 
      title: "De Wrap Square", 
      description: "Dynamic e-commerce website developed for a pizza shop to showcase their menu and handle online orders.", 
      tech: ["HTML", "CSS", "JavaScript"],
      image: deWrapSquareImg,
      status: "Deployed",
      repoPath: "emwetta/De-Wrap-Square-main", 
      githubLink: "https://github.com/emwetta/De-Wrap-Square-main" 
    },
    { 
      title: "Equal Pay", 
      description: "Intuitive bill and tip splitting web application designed to seamlessly divide expenses among groups.", 
      tech: ["HTML", "CSS", "JavaScript"],
      image: equalPayImg,
      status: "Deployed",
      repoPath: "emwetta/Bill-and-Tip-Splitter", 
      githubLink: "https://github.com/emwetta/Bill-and-Tip-Splitter" 
    }
  ];

  const experiences = [
    { role: "Front-end Development Intern", company: "Nerasol Ghana", date: "Recent", description: "Collaborated with the development team to build responsive, user-friendly web interfaces and optimize application performance." },
    { role: "IT Support Intern", company: "University of Ghana Medical Centre (UGMC)", date: "Previous", description: "Provided technical support, managed network troubleshooting, and assisted in maintaining the hospital's IT infrastructure." }
  ];

  const skills = {
    languages: ["HTML", "CSS", "JavaScript", "Python", "Java", "C++", "SQL"],
    frameworks: ["React", "Tailwind CSS"],
    tools: ["Git", "GitHub", "VS Code", "Firebase"]
  };

  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("wettamawuli@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
    window.location.href = "mailto:wettamawuli@gmail.com";
  };

  const sendEmail = (e) => {
    e.preventDefault(); 
    setIsSending(true);

    emailjs.sendForm(
      'service_jzmvaz9', 
      'template_r4u5k19', 
      form.current, 
      'VZTc4nbOhjIjmwZ7L'
    )
    .then((result) => {
        console.log("SUCCESS!", result.text);
        setIsSending(false);
        setIsSent(true);
        form.current.reset(); 
        setTimeout(() => setIsSent(false), 5000); 
    }, (error) => {
        console.log("FAILED...", error.text);
        setIsSending(false);
        alert('Transmission failed. Please attempt again.');
    });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-violet-500/30 selection:text-violet-200 relative scroll-smooth">
      
      <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#050505]/70 border-b border-gray-800/40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-tighter text-white hover:text-violet-400 transition-colors duration-300">
            MR.<span className="text-violet-500">WETTA</span>
          </a>
          <ul className="hidden md:flex space-x-8 font-medium text-gray-400 text-sm tracking-wide">
            <li><a href="#about" className="hover:text-violet-400 hover:-translate-y-0.5 inline-block transition-all duration-300">About</a></li>
            <li><a href="#projects" className="hover:text-violet-400 hover:-translate-y-0.5 inline-block transition-all duration-300">Projects</a></li>
            <li><a href="#experience" className="hover:text-violet-400 hover:-translate-y-0.5 inline-block transition-all duration-300">Experience</a></li>
            <li><a href="#skills" className="hover:text-violet-400 hover:-translate-y-0.5 inline-block transition-all duration-300">Skills</a></li>
            <li><a href="#contact" className="hover:text-violet-400 hover:-translate-y-0.5 inline-block transition-all duration-300">Contact</a></li>
          </ul>
          <a href="#contact" className="hidden md:flex items-center gap-2 bg-transparent text-violet-500 border border-violet-500/30 px-6 py-2 rounded-full font-semibold hover:bg-violet-500 hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Resume
          </a>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-20 pb-24 space-y-32">
        <section id="hero" className="flex flex-col md:flex-row items-center gap-12 pt-10">
          <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 relative group">
            <div className="absolute inset-0 bg-violet-500 rounded-2xl blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-700 transform rotate-6"></div>
            <img 
              src={mrWettaImg} 
              alt="MR.WETTA" 
              className="w-full h-full object-cover rounded-2xl border border-gray-800 shadow-2xl relative z-10 group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-6 bg-gray-900/40 px-4 py-2 rounded-full border border-gray-800/50 hover:border-gray-700 transition-colors cursor-default">
              <svg className="w-4 h-4 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Accra, Ghana
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 ml-2 animate-pulse"></span>
              <span className="text-emerald-500 font-medium">Available</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-3 tracking-tight">
              Emmanuel Mawuli <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">Wetta</span>
            </h1>
            
            <div className="h-8 mb-6 flex items-center">
              <p className={`text-xl md:text-2xl font-medium text-gray-300 transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
                {roles[currentRoleIndex]} <span className="text-violet-500 animate-pulse">|</span>
              </p>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-xl mb-8 text-lg">
              Crafting scalable web applications with a focus on intuitive user interfaces, efficient problem-solving, and professional code architecture.
            </p>
            
            <div className="flex gap-4">
              <a href="https://github.com/emwetta" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:-translate-y-1 hover:text-violet-400 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:-translate-y-1 hover:text-violet-400 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="mailto:wettamawuli@gmail.com" onClick={handleEmailClick} className="relative w-12 h-12 rounded-xl bg-gray-900/50 border border-gray-800 flex items-center justify-center text-gray-400 hover:-translate-y-1 hover:text-violet-400 hover:border-violet-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all duration-300 cursor-pointer">
                {emailCopied && <span className="absolute -top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg transition-opacity">Copied</span>}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-16">
           <div className="md:col-span-4 flex flex-col md:items-start items-center text-center md:text-left">
             <h2 className="text-4xl font-bold text-white mb-3">About <span className="text-violet-500">Me</span></h2>
             <div className="flex items-center text-gray-500 text-sm font-medium">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21l9-5-9-5-9 5 9 5zm0 0L3 16l9-5 9 5-9 5z"></path></svg>
                KNUST • Class of 2026
             </div>
           </div>
           <div className="md:col-span-8 space-y-6 text-gray-400 leading-relaxed text-lg">
             <p className="hover:text-gray-300 transition-colors duration-300">I am a senior Computer Science student with hands-on experience engineering web and mobile applications, leading development teams, and integrating artificial intelligence into practical environments. I am highly passionate about solving complex human problems efficiently and responsibly.</p>
             <p className="hover:text-gray-300 transition-colors duration-300">My portfolio spans from dynamic e-commerce platforms to AI-powered healthcare systems like AidFidelis. I thrive at the intersection of robust code architecture, cross-functional collaboration, and continuous technical growth.</p>
           </div>
        </section>

        <section id="projects">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Technical <span className="text-violet-500">Portfolio</span></h2>
            <p className="text-gray-500">A selection of recent development work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedProject(project)}
                className="bg-[#0a0a0a] rounded-2xl border border-gray-800/60 hover:border-violet-500/40 hover:shadow-[0_10px_30px_rgba(139,92,246,0.1)] hover:-translate-y-2 transition-all duration-300 group flex flex-col overflow-hidden cursor-pointer"
              >
                
                <div className="w-full h-56 bg-[#050505] overflow-hidden relative flex items-center justify-center border-b border-gray-800/60">
                  <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out" 
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80";
                    }}
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow relative bg-gradient-to-b from-[#0a0a0a] to-[#080808]">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-400 mb-8 flex-grow text-sm leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gray-900/80 text-gray-300 text-xs px-3 py-1.5 rounded border border-gray-800/80 group-hover:border-gray-700 transition-colors">{tech}</span>
                    ))}
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Professional <span className="text-violet-500">Experience</span></h2>
            <p className="text-gray-500">Career timeline and technical roles</p>
          </div>
          <div className="bg-[#0a0a0a] rounded-2xl p-8 md:p-10 border border-gray-800/60 shadow-sm">
            <div className="space-y-12 border-l-2 border-gray-800/80 ml-3">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10 group">
                  <div className="absolute w-4 h-4 bg-[#0a0a0a] border-2 border-violet-500 rounded-full -left-[9px] top-1.5 group-hover:bg-violet-500 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.8)] transition-all duration-300"></div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">{exp.role}</h3>
                    <span className="text-violet-500 font-medium sm:ml-2">— {exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 font-mono uppercase tracking-wider">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    {exp.date}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-3xl group-hover:text-gray-300 transition-colors">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Technical <span className="text-violet-500">Proficiencies</span></h2>
            <p className="text-gray-500">Core competencies and development tools</p>
          </div>
          <div className="bg-[#0a0a0a] rounded-2xl p-8 md:p-10 border border-gray-800/60 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group">
              <h4 className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2 group-hover:text-violet-400 transition-colors">
                <span className="w-8 h-px bg-gray-800 group-hover:bg-violet-500/50 transition-colors"></span> Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map(skill => (
                  <span key={skill} className="bg-gray-900/50 border border-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-violet-500 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(139,92,246,0.15)] transition-all duration-300 cursor-default">{skill}</span>
                ))}
              </div>
            </div>
            <div className="group">
              <h4 className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2 group-hover:text-violet-400 transition-colors">
                <span className="w-8 h-px bg-gray-800 group-hover:bg-violet-500/50 transition-colors"></span> Frameworks
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map(skill => (
                  <span key={skill} className="bg-gray-900/50 border border-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-violet-500 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(139,92,246,0.15)] transition-all duration-300 cursor-default">{skill}</span>
                ))}
              </div>
            </div>
            <div className="group">
              <h4 className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-6 flex items-center gap-2 group-hover:text-violet-400 transition-colors">
                <span className="w-8 h-px bg-gray-800 group-hover:bg-violet-500/50 transition-colors"></span> Tools & Cloud
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map(skill => (
                  <span key={skill} className="bg-gray-900/50 border border-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm hover:border-violet-500 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(139,92,246,0.15)] transition-all duration-300 cursor-default">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="bg-[#0a0a0a] rounded-3xl p-8 md:p-14 border border-gray-800/60 shadow-[0_0_40px_rgba(0,0,0,0.5)] max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Initiate <span className="text-violet-500">Contact</span></h2>
              <p className="text-gray-400 text-lg">Available for freelance opportunities and professional collaboration.</p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-violet-400 transition-colors">Full Name</label>
                  <input type="text" name="name" required placeholder="John Doe" className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-violet-400 transition-colors">Email Address</label>
                  <input type="email" name="email" required placeholder="john@company.com" className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all" />
                </div>
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-violet-400 transition-colors">Inquiry Details</label>
                <textarea name="message" required rows="5" placeholder="Please provide details regarding your project or inquiry..." className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSending}
                className="w-full bg-violet-600 text-white font-bold text-lg rounded-xl px-6 py-4 flex items-center justify-center gap-3 hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:shadow-none"
              >
                {isSending ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    Transmitting...
                  </>
                ) : isSent ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Message Delivered
                  </>
                ) : (
                  <>
                    Submit Inquiry
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

      </div>
      
      <footer className="border-t border-gray-800/60 py-10 text-center">
        <p className="text-gray-500 text-sm font-medium tracking-wide">© {new Date().getFullYear()} Emmanuel Mawuli Wetta. Engineered with React & Tailwind.</p>
      </footer>

      {/* --- MODAL POPUP COMPONENT --- */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-all duration-300" 
          onClick={() => setSelectedProject(null)} 
        >
          <div 
            className="bg-[#0a0a0a] border border-gray-800 rounded-3xl w-full max-w-xl p-8 md:p-10 relative shadow-[0_0_50px_rgba(139,92,246,0.1)] transform animate-[pulse_0.2s_ease-out_1]" 
            onClick={(e) => e.stopPropagation()} 
          >
            
            <button 
              onClick={() => setSelectedProject(null)} 
              className="absolute top-6 right-6 text-gray-500 hover:text-white hover:bg-gray-800/50 rounded-full p-2 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-xs font-bold mb-6 border border-violet-500/20 uppercase tracking-wider">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              {selectedProject.status}
            </div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-2">{selectedProject.title}</h3>
            <p className="text-gray-500 font-mono text-sm mb-8">{selectedProject.repoPath}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {selectedProject.tech.map((t, i) => (
                <div key={i} className="bg-[#111] border border-gray-800/80 rounded-lg py-2 px-5 text-center shadow-inner">
                  <span className="text-violet-400 font-bold text-sm tracking-wide">{t}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#111] border border-gray-800/60 rounded-2xl p-6 mb-10 shadow-inner">
              <div className="flex items-center gap-2 text-white font-bold mb-3 uppercase tracking-wider text-sm">
                <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                Project Overview
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <a 
              href={selectedProject.githubLink} 
              target="_blank" 
              rel="noreferrer" 
              className="w-full bg-violet-600 text-white font-bold text-lg rounded-xl px-6 py-4 flex items-center justify-center gap-2 hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all duration-300"
            >
              Access Repository
              <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
            
          </div>
        </div>
      )}

    </div>
  );
}

export default App;