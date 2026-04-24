import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/port.jpg';
import Image from '../assets/Nodstan.jpeg'

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full max-w-full bg-[#020617] text-slate-50">
      <div className="relative z-0 min-h-screen flex items-center justify-center w-full max-w-full">
        <div className="w-full max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left w-full break-words px-6 md:pl-20 lg:pl-32 md:pr-0">
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
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/stanley-obitunwase/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-slate-600/60 text-slate-300 hover:text-emerald-300 hover:border-emerald-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:stanleyobitunwase@gmail.com"
                className="p-2 rounded-full border border-slate-600/60 text-slate-300 hover:text-emerald-300 hover:border-emerald-400 transition-colors"
                aria-label="Email"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center order-first md:order-last md:pr-20 lg:pr-32">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm aspect-square flex items-center justify-center group">
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.7),transparent_55%)] opacity-100" />
              <div className="relative h-[92%] w-[92%] sm:h-[94%] sm:w-[94%] rounded-full overflow-hidden bg-slate-900 border border-emerald-500/70 shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-transform duration-500 ease-out group-hover:scale-105">
                <img
                  src={Image}
                  width="400"
                  height="400"
                  alt="Stanley Obitunwase"
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Location Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-[#020617]/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-2">
                <span className="text-sm filter drop-shadow-sm">📍</span>
                <span className="text-xs sm:text-sm font-bold tracking-wide text-emerald-400 whitespace-nowrap">
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
