import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/port.jpg';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full max-w-full bg-[#020617] text-slate-50 overflow-x-hidden">
      <div className="relative z-0 min-h-screen flex items-center justify-center w-full max-w-full">
        <div className="w-full max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left w-full break-words">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-emerald-400 mb-3 uppercase">
              FULL-STACK SOFTWARE ENGINEER
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="block">Stanley</span>
              <span className="block text-emerald-400">Obitunwase</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-8 max-w-xl leading-relaxed px-0 sm:px-0 break-words whitespace-normal">
              Crafting innovative digital solutions with{' '}
              <span className="text-emerald-400 font-semibold">3 years</span> of hands-on experience
              in full-stack development. Focused on building scalable applications that bridge the gap
              between cutting-edge technology and exceptional user experience.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://github.com/NodStan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-slate-600/60 text-slate-300 hover:text-emerald-300 hover:border-emerald-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/stanley-obitunwase/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-slate-600/60 text-slate-300 hover:text-emerald-300 hover:border-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:stanleyobitunwase@gmail.com"
                className="p-2 rounded-full border border-slate-600/60 text-slate-300 hover:text-emerald-300 hover:border-emerald-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center order-first md:order-last">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm aspect-square flex items-center justify-center group">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.85),transparent_65%)] opacity-100" />
              <div className="relative h-[92%] w-[92%] sm:h-[94%] sm:w-[94%] rounded-full overflow-hidden bg-slate-900 border border-emerald-500/70 shadow-[0_0_55px_rgba(16,185,129,0.9)] transition-transform duration-500 ease-out group-hover:scale-105">
                <img
                  src={profileImage}
                  width="400"
                  height="400"
                  alt="Stanley Obitunwase"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
