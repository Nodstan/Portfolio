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
              Hello! I'm Stanley Obitunwase a passionate Senior Frontend Engineer with over 3 years of experience in building scalable web applications. 
              My journey began with a curiosity for how things work on the internet, which quickly turned into a career obsession with 
              clean code, pixel-perfect designs, and seamless user experiences.
            </p>
            <p>
              I specialize in the JavaScript ecosystem, with deep expertise in 
              <span className="text-emerald-400 font-medium"> React</span> and <span className="text-emerald-400 font-medium">TypeScript</span>. 
              I love solving complex architectural challenges and mentoring junior developers to help them grow in their careers.
            </p>
            <p>
              When I'm not pushing code, you can find me learning new technologies, contributing to open-source projects, 
              or tinkering with the latest AI tools to optimize developer workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-800 pb-4">
            <div className="p-4 rounded-lg bg-slate-900/60 text-center hover:bg-slate-900 transition-colors border border-slate-800">
              <div className="text-2xl sm:text-3xl font-bold text-slate-50 mb-1">3+</div>
              <div className="text-xs sm:text-sm text-slate-400">Years Experience</div>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/60 text-center hover:bg-slate-900 transition-colors border border-slate-800">
              <div className="text-2xl sm:text-3xl font-bold text-slate-50 mb-1">5+</div>
              <div className="text-xs sm:text-sm text-slate-400">Projects Completed</div>
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
