import React from 'react';

export default function About() {
  return (
    <div className="space-y-12 w-full max-w-full">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-slate-50">About Me</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
      </div>

      <div className="glass-panel p-5 sm:p-8 rounded-2xl">
        <div className="flex flex-col gap-8">
          <div className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              Hello! I'm <strong>Stanley Obitunwase</strong>, a Full-Stack Software Engineer driven by the challenge of building scalable applications from the ground up. My journey in tech started with a curiosity for how the web works, which has since turned into a professional mission to combine <strong>clean code</strong> with high-performance, user-centric functionality.
            </p>

            <p>
              I specialize in the JavaScript and TypeScript ecosystems, with a deep focus on 
              <span className="text-emerald-400 font-medium"> React</span>, 
              <span className="text-emerald-400 font-medium"> Angular</span>, and 
              <span className="text-emerald-400 font-medium"> Node.js/Express</span>. 
              As a software engineer, I thrive at the intersection of logic and layout. Whether I’m architecting secure RESTful APIs or crafting responsive interfaces with 
              <span className="text-emerald-400 font-medium"> Tailwind CSS</span>, my goal is always to build systems that are as maintainable as they are powerful.
            </p>

            <p>
              I am a strong advocate for <strong>Clean Code principles</strong> and the "Boy Scout Rule"—leaving every codebase better than I found it. When I'm not in my IDE, I'm usually exploring AI-driven workflows to speed up development, contributing to open-source, or sharing insights with the dev community to help us all build better software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-800 pb-4">
            <div className="p-4 rounded-lg bg-slate-900/60 text-center hover:bg-slate-900 transition-colors border border-slate-800">
              <div className="text-2xl sm:text-3xl font-bold text-slate-50 mb-1">3+</div>
              <div className="text-xs sm:text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/60 text-center hover:bg-slate-900 transition-colors border border-slate-800">
              <div className="text-2xl sm:text-3xl font-bold text-slate-50 mb-1">4</div>
              <div className="text-xs sm:text-sm text-slate-400">Deployed Projects</div>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/60 text-center hover:bg-slate-900 transition-colors border border-slate-800">
              <div className="text-2xl sm:text-3xl font-bold text-slate-50 mb-1">20+</div>
              <div className="text-xs sm:text-sm text-slate-400">Open Source Contribs</div>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/60 text-center hover:bg-slate-900 transition-colors border border-slate-800">
              <div className="text-2xl sm:text-3xl font-bold text-slate-50 mb-1">100%</div>
              <div className="text-xs sm:text-sm text-slate-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}