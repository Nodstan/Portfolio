import React, { useState } from 'react';
import { ExternalLink, Code2, ChevronDown, Lock } from 'lucide-react';

import healthhub from "../assets/Healthhub.png";
import Buycom from "../assets/buycom.png";
import estateflow from "../assets/estateflow.png";
import ceasefiretech from "../assets/ceasefiretech.png";
import tresbontech from "../assets/tresbontech.png";
import tresbontechacademy from "../assets/tresbontechacademy.png";
import hogarHomes from "../assets/hogarHomes.png";
import leadTutors from "../assets/leadTutors.png";

const projects = [
  {
    title: "Cease Fire Tech",
    image: ceasefiretech,
    description: "Built a product catalogue and quote-request platform for a fire safety equipment supplier, including dynamic product pages, a multi-step quote form, and a layout optimised for both B2B and consumer audiences. Implemented client-side form validation and structured the product data to allow easy content updates without code changes.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://ceasefiretech.ng/",
  },
  {
    title: "Tresbontech Ltd",
    image: tresbontechacademy,
    description: "Developed the company marketing and services website for Tresbontech Ltd, covering multi-page routing, a services overview, team profiles, and a contact integration. Built with a component-driven architecture that lets content scale across pages without duplication.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://tresbontech.com/",
  },
  {
    title: "Tresbontech Academy",
    image: tresbontech,
    description: "Built the student-facing e-learning platform for Tresbontech Academy, featuring programme browsing, course detail pages, and a class enquiry flow for one-on-one session booking. Prioritised mobile responsiveness so students in low-bandwidth environments could access the platform reliably.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://tresbontechacademy.com/",
  },
  {
    title: "Hogar Homes",
    image: hogarHomes,
    description: "Engineered a property listing platform with filterable search, dynamic property detail pages, and a lead-capture contact form tied to the listings data. Designed the component architecture so new property records could be added without touching layout code.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://holgar-homes-kappa.vercel.app/",
  },
  {
    title: "Lead Tutors Academy",
    image: leadTutors,
    description: "Built a tutoring marketplace frontend featuring subject-based tutor discovery, grade-level filtering, and a session booking request flow. Implemented a reusable profile card system and a multi-step enquiry form to match students with the right tutors efficiently.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://lead-tutors-academy-ten.vercel.app/",
  },
  {
    title: "HealthHub – Healthcare System",
    image: healthhub,
    description: "Developed a full-stack healthcare management system with a Spring Boot REST API, MongoDB data layer, and a React frontend handling patient records, appointment scheduling, and doctor management. The most architecturally complex project in the portfolio — demonstrates end-to-end system design from database schema to UI state management.",
    stack: ["React", "Spring Boot", "MongoDB", "CSS"],
    demoUrl: "https://health-care-systems-nine.vercel.app/",
  },
  {
    title: "Estate Flow",
    image: estateflow,
    description: "Built a property browsing application with multi-criteria filtering (price, location, type), a featured listings carousel, and smooth transitions between browse and detail views. Focused on filter state management and UI responsiveness to keep the browsing experience fast and intuitive.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://real-estate-ashen-gamma.vercel.app/",
  },
  {
    title: "BuyCom",
    image: Buycom,
    description: "Built a full-stack ecommerce application with a React frontend and Express.js backend, featuring a product catalogue, category browsing, persistent cart, and dynamic product detail pages. Managed cart state across the app with React Context and integrated EmailJS for a newsletter subscription flow.",
    stack: ["React", "JavaScript", "CSS", "Express.js"],
    demoUrl: "https://buycom-frontend.vercel.app/",
  }
];

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMoreProjects = () => {
    setVisibleCount(prev => Math.min(prev + 3, projects.length));
  };

  const showLessProjects = () => {
    setVisibleCount(prev => Math.max(prev - 3, 3));
  };

  return (
    <div className="space-y-12 w-full max-w-full">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-slate-50">Featured Projects</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-full">
        {projects.slice(0, visibleCount).map((project) => (
          <div key={project.title} className="glass-panel rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group flex flex-col h-full">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="block h-48 overflow-hidden relative bg-slate-900 cursor-pointer">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center group-hover:from-slate-800 group-hover:to-slate-700 transition-colors">
                  <Code2 size={48} className="text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
              )}
            </a>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-slate-50 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-medium text-slate-400 bg-slate-800/70 border border-slate-700/60 select-none whitespace-nowrap"
                    title="Source code is private client work"
                  >
                    <Lock size={9} />
                    Private repo
                  </span>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors" title="View Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900/60 text-slate-300 border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 gap-4">
        {visibleCount < projects.length && (
          <button
            onClick={showMoreProjects}
            className="group flex items-center gap-2 px-6 py-3 bg-emerald-500/10 text-emerald-300 font-medium rounded-full shadow-none hover:bg-emerald-500/20 hover:text-emerald-200 transition-all duration-300 border border-emerald-500/40"
          >
            Show More Projects
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </button>
        )}

        {visibleCount > 3 && (
          <button
            onClick={showLessProjects}
            className="group flex items-center gap-2 px-6 py-3 bg-emerald-500/10 text-emerald-300 font-medium rounded-full shadow-none hover:bg-emerald-500/20 hover:text-emerald-200 transition-all duration-300 border border-emerald-500/40"
          >
            Show Less Projects
            <ChevronDown size={20} className="group-hover:-translate-y-1 transition-transform rotate-180" />
          </button>
        )}
      </div>
    </div>
  );
}
