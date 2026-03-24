import React from 'react';
import profileImage from '../assets/port.jpg';
// import Image from '../assets/Nodstan.jpeg'

export default function WhyHireMe() {
  return (
    <div className="relative w-full max-w-full py-12">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-[#5EE9B5] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-[#5EE9B5] rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-16 text-center px-6">
          Why <span className="text-[#5EE9B5]">Hire me?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Side: Profile Picture */}
          <div className="flex justify-center items-center relative w-full py-8 md:py-0 md:pl-20 lg:pl-32">
            <div className="relative w-[55%] max-w-[14rem] sm:max-w-[18rem] md:max-w-[24rem] aspect-square">
              {/* Glow effect */}
              <div className="absolute inset-[-40%] rounded-full bg-[radial-gradient(circle_at_center,rgba(94,233,181,0.25),transparent_70%)] animate-pulse"></div>
              
              {/* Dual ring border */}
              <div className="absolute inset-[-10%] rounded-full border border-[#5EE9B5]/30"></div>
              <div className="absolute inset-[-20%] rounded-full border border-[#5EE9B5]/10"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#5EE9B5]/50 bg-slate-900">
                <img 
                  src={profileImage} 
                  alt="Stanley Obitunwase" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col space-y-8 px-6 md:pr-20 lg:pr-32 md:pl-0">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              With 3 years of experience in full-stack development and a proven track record of creating fully deployed, scalable web applications, I bring a strong blend of technical expertise and leadership skills. I am passionate about architecting robust systems and delivering exceptional digital solutions that consistently exceed client expectations and drive real business value.
            </p>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-800/80 transition-colors">
                <span className="text-4xl font-bold text-slate-50 mb-2">3+</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-slate-800/80 transition-colors">
                <span className="text-4xl font-bold text-slate-50 mb-2">10+</span>
                <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">Projects Completed</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#5EE9B5] text-slate-900 font-bold rounded-full hover:bg-[#4ade80] hover:shadow-[0_0_20px_rgba(94,233,181,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Hire me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
