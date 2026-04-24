import React from 'react';
import cvFile from '../assets/CV.pdf';

export default function WhyHireMe() {
  return (
    <div className="relative w-full max-w-full py-12">
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-16 text-center px-6">
          Why <span className="text-[#5EE9B5]">Hire me?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Side: Stats (Replaced Image) */}
          <div className="flex justify-center items-center relative w-full py-8 md:py-0 md:pl-20 lg:pl-32">
            <div className="grid grid-cols-1 gap-6 w-full max-w-md">
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-800/50 transition-all duration-300 group">
                <span className="text-5xl font-extrabold text-[#5EE9B5] mb-2 group-hover:scale-110 transition-transform">3+</span>
                <span className="text-sm text-slate-400 font-bold uppercase tracking-widest">Years Experience</span>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-800/50 transition-all duration-300 group">
                <span className="text-5xl font-extrabold text-[#5EE9B5] mb-2 group-hover:scale-110 transition-transform">4</span>
                <span className="text-sm text-slate-400 font-bold uppercase tracking-widest">Fully Deployed Projects</span>
              </div>
              <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-800/50 transition-all duration-300 group">
                <span className="text-5xl font-extrabold text-[#5EE9B5] mb-2 group-hover:scale-110 transition-transform">10+</span>
                <span className="text-sm text-slate-400 font-bold uppercase tracking-widest">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col space-y-8 px-6 md:pr-20 lg:pr-32 md:pl-0">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              With 3 years of experience in full-stack development and a proven track record of creating fully deployed, scalable web applications, I bring a strong blend of technical expertise and leadership skills. I am passionate about architecting robust systems and delivering exceptional digital solutions that consistently exceed client expectations and drive real business value.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex justify-start">
              <a 
                href={cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#5EE9B5] text-slate-900 font-bold rounded-full hover:bg-[#4ade80] hover:shadow-[0_0_20px_rgba(94,233,181,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
