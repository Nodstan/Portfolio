import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechnologyStack from './components/TechnologyStack';
import GithubCalendar from './components/GithubCalendar';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ScrollIndicator from './components/ScrollIndicator';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-800 bg-[#020617]/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1 text-center md:text-left">
          <p className="text-xs sm:text-sm text-slate-500">
            © {year} Stanley Obitunwase. All rights reserved.
          </p>
          <p className="text-[11px] sm:text-xs text-slate-600">
            Built with React, TypeScript, Vite & Tailwind CSS.
          </p>
        </div>

        <nav className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
          <div className="flex gap-4 text-xs sm:text-sm text-slate-500">
            <a href="#home" className="hover:text-emerald-300 transition-colors">
              Home
            </a>
            <a href="#projects" className="hover:text-emerald-300 transition-colors">
              Projects
            </a>
            <a href="#about" className="hover:text-emerald-300 transition-colors">
              About
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/NodStan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-emerald-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/stanley-obitunwase-a11668308/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-emerald-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-500 hover:text-emerald-300 transition-colors"
              aria-label="Twitter / X"
            >
              <Twitter size={18} />
            </a> */}
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden max-w-full selection:bg-emerald-500/20 flex flex-col">
      <section
        id="home"
        className="overflow-x-hidden w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]"
      >
        <Hero />
      </section>

      <main className="relative z-10 px-0 space-y-20 md:space-y-32 pb-32 flex-1 w-full max-w-full">

        <section
          id="about"
          className="scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]"
        >
          <About />
        </section>

        <section
          id="projects"
          className="scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]"
        >
          <Projects />
        </section>

        <section
          id="skills"
          className="scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]"
        >
          <Skills />
        </section>

        <section
          id="tech-stack"
          className="scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]"
        >
          <TechnologyStack />
        </section>

        <section
          id="activity"
          className="scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]"
        >
          <GithubCalendar />
        </section>

        <section
          id="certificates"
          className="scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]"
        >
          <Certificates />
        </section>

        <section
          id="contact"
          className="scroll-mt-28 w-full px-6 md:px-20 lg:px-32 mx-auto max-w-[90rem]"
        >
          <Contact />
        </section>
      </main>

      <ScrollIndicator />

      <Footer />
    </div>
  );
}
